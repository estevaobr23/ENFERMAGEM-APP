-- =============================================================================
-- 101 — SEGURANÇA E RPCs DO DOMÍNIO DE ESTUDO
-- -----------------------------------------------------------------------------
-- Regras (testadas em tests/db):
--   * conteúdo só é lido por quem tem entitlement ATIVO do produto, e só o
--     que está 'published' (tema E categoria). Revogou o direito (reembolso,
--     chargeback) → a próxima leitura já volta vazia.
--   * o gabarito (question_options.is_correct) e a explicação
--     (questions.explanation) ficam FORA do GRANT: o navegador só recebe a
--     resposta certa depois de responder, pela RPC answer_question.
--   * dados do aluno (progresso, tentativas, fila, favoritos): RLS por dono.
--     Progresso, tentativas e fila só são escritos por RPC SECURITY DEFINER
--     que usa auth.uid() — ninguém grava tentativa em nome de outra pessoa.
--   * notas internas da curadoria (topics.review_notes) nunca vão ao aluno.
-- =============================================================================

-- -----------------------------------------------------------------------------
-- Helpers
-- -----------------------------------------------------------------------------

-- Temas que o usuário logado pode ler agora. SET-returning + SECURITY DEFINER:
-- usado nas policies como "topic_id in (select ...)", avaliado uma vez por
-- statement (hashed subplan), o mesmo padrão de posse do core.
create or replace function app_private.readable_topic_ids()
returns setof uuid
language sql
stable
security definer
set search_path = ''
as $$
  select t.id
    from public.topics t
    join public.categories c on c.id = t.category_id
   where t.status = 'published'
     and c.status = 'published'
     and c.product_id in (
       select e.product_id
         from public.entitlements e
        where e.user_id = (select auth.uid())
          and e.status = 'active'
     );
$$;

create or replace function app_private.readable_product_ids()
returns setof uuid
language sql
stable
security definer
set search_path = ''
as $$
  select distinct e.product_id
    from public.entitlements e
   where e.user_id = (select auth.uid())
     and e.status = 'active';
$$;

-- -----------------------------------------------------------------------------
-- RLS
-- -----------------------------------------------------------------------------
alter table public.categories          enable row level security;
alter table public.topics              enable row level security;
alter table public.topic_sources       enable row level security;
alter table public.visual_maps         enable row level security;
alter table public.questions           enable row level security;
alter table public.question_options    enable row level security;
alter table public.user_topic_progress enable row level security;
alter table public.question_attempts   enable row level security;
alter table public.review_queue        enable row level security;
alter table public.favorites           enable row level security;

revoke all on
  public.categories, public.topics, public.topic_sources, public.visual_maps,
  public.questions, public.question_options, public.user_topic_progress,
  public.question_attempts, public.review_queue, public.favorites
from anon, authenticated;

-- conteúdo: só leitura, e só as colunas que o aluno pode ver
grant select on public.categories, public.topic_sources, public.visual_maps to authenticated;
grant select (id, category_id, slug, title, description, summary, key_points,
              position, status, last_reviewed_at)
  on public.topics to authenticated;
grant select (id, topic_id, key, stem, difficulty, source_id, position, status, last_reviewed_at)
  on public.questions to authenticated;
grant select (id, question_id, label, text) on public.question_options to authenticated;

-- dados do aluno: leitura do próprio; escrita só por RPC (favoritos: direto)
grant select on public.user_topic_progress, public.question_attempts, public.review_queue to authenticated;
grant select, insert, delete on public.favorites to authenticated;

grant execute on function app_private.readable_topic_ids(), app_private.readable_product_ids() to authenticated;

create policy "categories: aluno com direito lê publicadas" on public.categories
  for select to authenticated
  using (status = 'published' and product_id in (select app_private.readable_product_ids()));

create policy "topics: aluno com direito lê publicados" on public.topics
  for select to authenticated
  using (id in (select app_private.readable_topic_ids()));

create policy "topic_sources: aluno com direito lê" on public.topic_sources
  for select to authenticated
  using (topic_id in (select app_private.readable_topic_ids()));

create policy "visual_maps: aluno com direito lê publicados" on public.visual_maps
  for select to authenticated
  using (status = 'published' and topic_id in (select app_private.readable_topic_ids()));

create policy "questions: aluno com direito lê publicadas" on public.questions
  for select to authenticated
  using (status = 'published' and topic_id in (select app_private.readable_topic_ids()));

create policy "question_options: aluno com direito lê" on public.question_options
  for select to authenticated
  using (question_id in (
    select q.id from public.questions q
     where q.status = 'published' and q.topic_id in (select app_private.readable_topic_ids())
  ));

create policy "user_topic_progress: dono lê" on public.user_topic_progress
  for select to authenticated using (user_id = (select auth.uid()));
create policy "question_attempts: dono lê" on public.question_attempts
  for select to authenticated using (user_id = (select auth.uid()));
create policy "review_queue: dono lê" on public.review_queue
  for select to authenticated using (user_id = (select auth.uid()));

create policy "favorites: dono lê" on public.favorites
  for select to authenticated using (user_id = (select auth.uid()));
create policy "favorites: dono marca tema que pode ler" on public.favorites
  for insert to authenticated
  with check (user_id = (select auth.uid()) and topic_id in (select app_private.readable_topic_ids()));
create policy "favorites: dono desmarca" on public.favorites
  for delete to authenticated using (user_id = (select auth.uid()));

-- -----------------------------------------------------------------------------
-- RPCs do aluno
-- -----------------------------------------------------------------------------

-- Responde uma questão. Corrige NO BANCO, registra a tentativa, atualiza o
-- progresso do tema e a fila "Revisar novamente":
--   errou  → item pendente (aluno, questão); errar de novo não duplica
--   acertou → resolve o item pendente daquela questão, se houver
create or replace function public.answer_question(
  p_question_id uuid,
  p_option_id   uuid,
  p_context     text default 'topic'
)
returns jsonb
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_uid      uuid := auth.uid();
  v_question public.questions;
  v_correct  uuid;
  v_ok       boolean;
  v_queued   boolean := false;
  v_resolved boolean := false;
  v_slug     text;
begin
  if v_uid is null then
    raise exception 'not_authenticated' using errcode = '42501';
  end if;
  if p_context not in ('topic', 'review', 'practice', 'retry') then
    raise exception 'invalid_context' using errcode = '22023';
  end if;

  select q.* into v_question
    from public.questions q
   where q.id = p_question_id
     and q.status = 'published'
     and q.topic_id in (select app_private.readable_topic_ids());
  if not found then
    raise exception 'no_access_or_not_found' using errcode = '42501';
  end if;

  if not exists (select 1 from public.question_options o where o.id = p_option_id and o.question_id = p_question_id) then
    raise exception 'invalid_option' using errcode = '22023';
  end if;

  select o.id into v_correct
    from public.question_options o
   where o.question_id = p_question_id and o.is_correct;
  v_ok := v_correct = p_option_id;

  insert into public.profiles (id) values (v_uid) on conflict (id) do nothing;

  insert into public.question_attempts (user_id, question_id, topic_id, selected_option_id, is_correct, context)
  values (v_uid, p_question_id, v_question.topic_id, p_option_id, v_ok, p_context);

  insert into public.user_topic_progress as p (user_id, topic_id, questions_answered, questions_correct, last_answered_at)
  values (v_uid, v_question.topic_id, 1, case when v_ok then 1 else 0 end, now())
  on conflict (user_id, topic_id) do update
     set questions_answered = p.questions_answered + 1,
         questions_correct  = p.questions_correct + case when v_ok then 1 else 0 end,
         last_answered_at   = now();

  if v_ok then
    update public.review_queue
       set status = 'resolved', resolved_at = now()
     where user_id = v_uid and question_id = p_question_id and status = 'pending';
    v_resolved := found;
  else
    insert into public.review_queue (user_id, topic_id, question_id)
    values (v_uid, v_question.topic_id, p_question_id)
    on conflict (user_id, question_id) where status = 'pending' do nothing;
    v_queued := true;
  end if;

  select t.slug into v_slug from public.topics t where t.id = v_question.topic_id;

  return jsonb_build_object(
    'is_correct', v_ok,
    'correct_option_id', v_correct,
    'explanation', v_question.explanation,
    'topic_id', v_question.topic_id,
    'topic_slug', v_slug,
    'queued', v_queued,
    'resolved', v_resolved
  );
end;
$$;

-- Marca que o aluno revisou o tema (mapa + resumo + pontos-chave).
create or replace function public.mark_topic_reviewed(p_topic_id uuid)
returns jsonb
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_uid uuid := auth.uid();
  v_row public.user_topic_progress;
begin
  if v_uid is null then
    raise exception 'not_authenticated' using errcode = '42501';
  end if;
  if p_topic_id not in (select app_private.readable_topic_ids()) then
    raise exception 'no_access_or_not_found' using errcode = '42501';
  end if;

  insert into public.profiles (id) values (v_uid) on conflict (id) do nothing;

  insert into public.user_topic_progress as p (user_id, topic_id, last_reviewed_at, review_count)
  values (v_uid, p_topic_id, now(), 1)
  on conflict (user_id, topic_id) do update
     set last_reviewed_at = now(),
         review_count     = p.review_count + 1
  returning * into v_row;

  return to_jsonb(v_row);
end;
$$;

-- Gabarito e explicação SÓ de questões que o próprio aluno já respondeu
-- (histórico, "Revisar novamente").
create or replace function public.my_answered_feedback(p_question_ids uuid[])
returns table (question_id uuid, correct_option_id uuid, explanation text)
language sql
stable
security definer
set search_path = ''
as $$
  select q.id, o.id, q.explanation
    from public.questions q
    join public.question_options o on o.question_id = q.id and o.is_correct
   where q.id = any (p_question_ids)
     and q.topic_id in (select app_private.readable_topic_ids())
     and exists (
       select 1 from public.question_attempts a
        where a.user_id = (select auth.uid()) and a.question_id = q.id
     );
$$;

-- Busca nos temas que o aluno pode ler (título, descrição, resumo, pontos-chave).
create or replace function public.search_topics(p_query text)
returns table (id uuid, slug text, title text, description text, category_id uuid)
language plpgsql
stable
security definer
set search_path = ''
as $$
declare
  v_terms text[];
begin
  v_terms := array(
    select t from unnest(regexp_split_to_array(app_private.normalize_search(btrim(left(coalesce(p_query, ''), 80))), '\s+')) t
     where char_length(t) >= 2
  );
  if cardinality(v_terms) = 0 then
    return;
  end if;
  return query
    select t.id, t.slug, t.title, t.description, t.category_id
      from public.topics t
     where t.id in (select app_private.readable_topic_ids())
       and not exists (
         select 1 from unnest(v_terms) term
          where t.search_text not like '%' || term || '%'
       )
     order by (app_private.normalize_search(t.title) like '%' || v_terms[1] || '%') desc, t.position
     limit 30;
end;
$$;

revoke execute on function
  public.answer_question(uuid, uuid, text),
  public.mark_topic_reviewed(uuid),
  public.my_answered_feedback(uuid[]),
  public.search_topics(text)
from public, anon, authenticated;

grant execute on function
  public.answer_question(uuid, uuid, text),
  public.mark_topic_reviewed(uuid),
  public.my_answered_feedback(uuid[]),
  public.search_topics(text)
to authenticated;
