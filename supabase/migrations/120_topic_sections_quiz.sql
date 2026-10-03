-- =============================================================================
-- 120 — SEÇÕES DO TEMA, QUIZ FINAL E PONTOS SALVOS
-- -----------------------------------------------------------------------------
--   topics.sections        o conteúdo do tema em seções de blocos visuais
--                          (formato em src/core/content/types.ts → TopicSection)
--   topics.outline         títulos das seções, na ordem (listas e mapas gerais
--                          sem carregar o jsonb inteiro)
--   topics.reading_minutes estimativa de leitura calculada pelo seed
--   questions.section_key  a seção que a questão testa: errou → "revise esta seção"
--   user_topic_progress.quiz_*  resultado do quiz final (calculado no banco)
--   saved_sections         "pontos salvos": seções que o aluno guardou
--
-- Aditiva: nada de 100/101 é alterado além do gatilho de busca, que passa a
-- indexar também o texto das seções.
-- =============================================================================

alter table public.topics
  add column sections        jsonb    not null default '[]'::jsonb
                               check (jsonb_typeof(sections) = 'array'),
  add column outline         text[]   not null default '{}'
                               check (cardinality(outline) <= 20),
  add column reading_minutes smallint check (reading_minutes between 1 and 120);

alter table public.questions
  add column section_key text check (section_key ~ '^[a-z0-9]+(-[a-z0-9]+)*$' and char_length(section_key) <= 60);

alter table public.user_topic_progress
  add column quiz_count        integer not null default 0 check (quiz_count >= 0),
  add column quiz_last_correct integer check (quiz_last_correct >= 0),
  add column quiz_last_total   integer check (quiz_last_total >= 0),
  add column quiz_best_correct integer check (quiz_best_correct >= 0),
  add column quiz_completed_at timestamptz,
  add check (quiz_last_correct is null or quiz_last_correct <= quiz_last_total);

-- busca: título, descrição, resumo, pontos-chave E todo texto das seções
create or replace function app_private.topics_set_search_text()
returns trigger
language plpgsql
set search_path = ''
as $$
begin
  new.search_text := app_private.normalize_search(
    new.title || ' ' || new.description || ' ' || new.summary || ' ' || array_to_string(new.key_points, ' ') || ' ' ||
    coalesce((
      select string_agg(v #>> '{}', ' ')
        from jsonb_path_query(new.sections, 'strict $.**') v
       where jsonb_typeof(v) = 'string'
    ), '')
  );
  return new;
end;
$$;

drop trigger topics_search_text on public.topics;
create trigger topics_search_text
  before insert or update of title, description, summary, key_points, sections on public.topics
  for each row execute function app_private.topics_set_search_text();

-- colunas novas visíveis ao aluno (o GRANT de 101 é por coluna)
grant select (sections, outline, reading_minutes) on public.topics to authenticated;
grant select (section_key) on public.questions to authenticated;

-- -----------------------------------------------------------------------------
-- saved_sections — "pontos salvos"
-- -----------------------------------------------------------------------------
create table public.saved_sections (
  user_id     uuid not null references public.profiles (id) on delete cascade,
  topic_id    uuid not null references public.topics (id) on delete cascade,
  section_key text not null check (section_key ~ '^[a-z0-9]+(-[a-z0-9]+)*$' and char_length(section_key) <= 60),
  created_at  timestamptz not null default now(),
  primary key (user_id, topic_id, section_key)
);

create index saved_sections_user_idx on public.saved_sections (user_id, created_at desc);

alter table public.saved_sections enable row level security;
revoke all on public.saved_sections from anon, authenticated;
grant select, insert, delete on public.saved_sections to authenticated;

create policy "saved_sections: dono lê" on public.saved_sections
  for select to authenticated using (user_id = (select auth.uid()));
create policy "saved_sections: dono salva seção de tema que pode ler" on public.saved_sections
  for insert to authenticated
  with check (user_id = (select auth.uid()) and topic_id in (select app_private.readable_topic_ids()));
create policy "saved_sections: dono remove" on public.saved_sections
  for delete to authenticated using (user_id = (select auth.uid()));

-- -----------------------------------------------------------------------------
-- finish_topic_quiz — fecha o quiz final do tema.
-- O placar NÃO vem do navegador: é a ÚLTIMA tentativa do aluno em cada questão
-- publicada do tema (o quiz acabou de respondê-las todas). Concluir o quiz
-- também conta como revisão do tema, se ele ainda não tinha sido marcado.
-- -----------------------------------------------------------------------------
create or replace function public.finish_topic_quiz(p_topic_id uuid)
returns jsonb
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_uid      uuid := auth.uid();
  v_total    integer;
  v_answered integer;
  v_correct  integer;
  v_row      public.user_topic_progress;
begin
  if v_uid is null then
    raise exception 'not_authenticated' using errcode = '42501';
  end if;
  if p_topic_id not in (select app_private.readable_topic_ids()) then
    raise exception 'no_access_or_not_found' using errcode = '42501';
  end if;

  select count(*)::int,
         count(last.is_correct)::int,
         count(*) filter (where last.is_correct)::int
    into v_total, v_answered, v_correct
    from public.questions q
    left join lateral (
      select a.is_correct
        from public.question_attempts a
       where a.user_id = v_uid and a.question_id = q.id
       order by a.answered_at desc
       limit 1
    ) last on true
   where q.topic_id = p_topic_id and q.status = 'published';

  if v_total = 0 or v_answered < v_total then
    raise exception 'quiz_incomplete' using errcode = '22023';
  end if;

  insert into public.profiles (id) values (v_uid) on conflict (id) do nothing;

  insert into public.user_topic_progress as p
    (user_id, topic_id, last_reviewed_at, review_count, quiz_count, quiz_last_correct, quiz_last_total, quiz_best_correct, quiz_completed_at)
  values (v_uid, p_topic_id, now(), 1, 1, v_correct, v_total, v_correct, now())
  on conflict (user_id, topic_id) do update
     set quiz_count        = p.quiz_count + 1,
         quiz_last_correct = v_correct,
         quiz_last_total   = v_total,
         quiz_best_correct = greatest(coalesce(p.quiz_best_correct, 0), v_correct),
         quiz_completed_at = now(),
         last_reviewed_at  = coalesce(p.last_reviewed_at, now()),
         review_count      = case when p.last_reviewed_at is null then p.review_count + 1 else p.review_count end
  returning * into v_row;

  return jsonb_build_object('correct', v_correct, 'total', v_total, 'best', v_row.quiz_best_correct, 'count', v_row.quiz_count);
end;
$$;

revoke execute on function public.finish_topic_quiz(uuid) from public, anon, authenticated;
grant execute on function public.finish_topic_quiz(uuid) to authenticated;
