-- =============================================================================
-- 100 — DOMÍNIO DE ESTUDO: conteúdo de revisão + dados de estudo do aluno
-- -----------------------------------------------------------------------------
-- Duas famílias de tabelas, com donos diferentes:
--
--   CONTEÚDO (escrito pelo seed/curadoria, lido pelo aluno com direito ativo)
--     categories → topics → topic_sources, visual_maps, questions → question_options
--     Todo conteúdo tem status editorial:
--       draft → review_required → reviewed → published
--     SÓ 'published' chega ao aluno (RLS em 101). Cada tema registra a fonte
--     (topic_sources: título, organização, URL, data de acesso) e a data da
--     última revisão do conteúdo (last_reviewed_at).
--
--   DADOS DO ALUNO (escritos só por RPC, lidos só pelo dono)
--     user_topic_progress, question_attempts, review_queue, favorites
--
-- Identidade (profiles), compra (purchases) e direito (entitlements) ficam no
-- motor (001/002). Nenhuma tabela daqui decide acesso.
-- =============================================================================

-- normalização para busca sem extensão (unaccent não é IMMUTABLE)
create or replace function app_private.normalize_search(p_input text)
returns text
language sql
immutable
set search_path = ''
as $$
  select lower(translate(coalesce(p_input, ''),
    'ÁÀÂÃÄÅáàâãäåÉÈÊËéèêëÍÌÎÏíìîïÓÒÔÕÖóòôõöÚÙÛÜúùûüÇçÑñ',
    'AAAAAAaaaaaaEEEEeeeeIIIIiiiiOOOOOoooooUUUUuuuuCcNn'));
$$;

-- -----------------------------------------------------------------------------
-- categories — as áreas (SUS, Fundamentos, ...). Por produto.
-- -----------------------------------------------------------------------------
create table public.categories (
  id          uuid primary key default gen_random_uuid(),
  product_id  uuid not null references public.products (id) on delete restrict,
  slug        text not null check (slug ~ '^[a-z0-9]+(-[a-z0-9]+)*$' and char_length(slug) <= 60),
  title       text not null check (char_length(btrim(title)) between 1 and 80),
  short_title text not null check (char_length(btrim(short_title)) between 1 and 30),
  description text check (char_length(description) <= 300),
  tone        text not null default 'blue'
                check (tone in ('blue', 'teal', 'green', 'amber', 'rose', 'violet', 'orange', 'slate')),
  icon        text check (char_length(icon) <= 40),
  position    integer not null default 0,
  status      text not null default 'draft'
                check (status in ('draft', 'review_required', 'reviewed', 'published')),
  created_at  timestamptz not null default now(),
  updated_at  timestamptz not null default now(),
  unique (product_id, slug)
);

create trigger categories_set_updated_at
  before update on public.categories
  for each row execute function app_private.set_updated_at();

-- -----------------------------------------------------------------------------
-- topics — um assunto de revisão. slug é único no banco (rota /app/tema/[slug]).
-- -----------------------------------------------------------------------------
create table public.topics (
  id               uuid primary key default gen_random_uuid(),
  category_id      uuid not null references public.categories (id) on delete restrict,
  slug             text not null unique
                     check (slug ~ '^[a-z0-9]+(-[a-z0-9]+)*$' and char_length(slug) <= 80),
  title            text not null check (char_length(btrim(title)) between 1 and 120),
  description      text not null check (char_length(btrim(description)) between 1 and 240),
  summary          text not null check (char_length(btrim(summary)) between 1 and 4000),
  key_points       text[] not null default '{}'
                     check (cardinality(key_points) <= 12),
  position         integer not null default 0,
  status           text not null default 'draft'
                     check (status in ('draft', 'review_required', 'reviewed', 'published')),
  -- quando o CONTEÚDO foi conferido contra a fonte pela última vez
  last_reviewed_at date,
  -- notas internas da curadoria (o que falta conferir, ressalvas). Nunca vão ao aluno.
  review_notes     text check (char_length(review_notes) <= 2000),
  search_text      text not null default '',
  created_at       timestamptz not null default now(),
  updated_at       timestamptz not null default now(),
  -- publicado exige data de revisão
  check (status <> 'published' or last_reviewed_at is not null)
);

create index topics_category_idx on public.topics (category_id, position);

create trigger topics_set_updated_at
  before update on public.topics
  for each row execute function app_private.set_updated_at();

create or replace function app_private.topics_set_search_text()
returns trigger
language plpgsql
set search_path = ''
as $$
begin
  new.search_text := app_private.normalize_search(
    new.title || ' ' || new.description || ' ' || new.summary || ' ' || array_to_string(new.key_points, ' ')
  );
  return new;
end;
$$;

create trigger topics_search_text
  before insert or update of title, description, summary, key_points on public.topics
  for each row execute function app_private.topics_set_search_text();

-- -----------------------------------------------------------------------------
-- topic_sources — de onde saiu cada informação do tema
-- -----------------------------------------------------------------------------
create table public.topic_sources (
  id                  uuid primary key default gen_random_uuid(),
  topic_id            uuid not null references public.topics (id) on delete cascade,
  position            integer not null default 0,
  source_title        text not null check (char_length(btrim(source_title)) between 1 and 300),
  source_organization text not null check (char_length(btrim(source_organization)) between 1 and 200),
  source_url          text not null check (source_url ~ '^https?://' and char_length(source_url) <= 600),
  source_accessed_at  date not null,
  -- o trecho/artigo usado (ex.: "art. 7º, incisos I a XVI")
  locator             text check (char_length(locator) <= 300),
  created_at          timestamptz not null default now(),
  unique (topic_id, position),
  unique (topic_id, id)   -- alvo da FK composta de questions
);

-- -----------------------------------------------------------------------------
-- visual_maps — o mapa do tema, ESTRUTURADO (não imagem). 1 por tema no MVP.
--   spec jsonb: { "layout": "hub"|"flow"|"compare",
--                 "center": "texto central",
--                 "blocks": [ { "title", "items": [..], "tone", "icon"? } ],
--                 "footnote"? }
-- O formato é validado no frontend (src/core/content/types.ts) e no seed.
-- -----------------------------------------------------------------------------
create table public.visual_maps (
  id               uuid primary key default gen_random_uuid(),
  topic_id         uuid not null unique references public.topics (id) on delete cascade,
  title            text not null check (char_length(btrim(title)) between 1 and 120),
  spec             jsonb not null check (jsonb_typeof(spec) = 'object' and jsonb_typeof(spec -> 'blocks') = 'array'),
  status           text not null default 'draft'
                     check (status in ('draft', 'review_required', 'reviewed', 'published')),
  last_reviewed_at date,
  created_at       timestamptz not null default now(),
  updated_at       timestamptz not null default now(),
  check (status <> 'published' or last_reviewed_at is not null)
);

create trigger visual_maps_set_updated_at
  before update on public.visual_maps
  for each row execute function app_private.set_updated_at();

-- -----------------------------------------------------------------------------
-- questions — questões ORIGINAIS de estudo, ligadas a um tema e a uma fonte
-- -----------------------------------------------------------------------------
create table public.questions (
  id               uuid primary key default gen_random_uuid(),
  topic_id         uuid not null references public.topics (id) on delete restrict,
  -- chave estável para o seed idempotente (ex.: 'sus-principios-1')
  key              text not null unique check (key ~ '^[a-z0-9]+(-[a-z0-9]+)*$' and char_length(key) <= 80),
  stem             text not null check (char_length(btrim(stem)) between 1 and 1500),
  explanation      text not null check (char_length(btrim(explanation)) between 1 and 2000),
  difficulty       text check (difficulty in ('facil', 'media', 'dificil')),
  source_id        uuid not null,
  position         integer not null default 0,
  status           text not null default 'draft'
                     check (status in ('draft', 'review_required', 'reviewed', 'published')),
  last_reviewed_at date,
  created_at       timestamptz not null default now(),
  updated_at       timestamptz not null default now(),
  unique (topic_id, id),
  -- a fonte conceitual tem que ser uma fonte DO MESMO tema
  foreign key (topic_id, source_id) references public.topic_sources (topic_id, id) on delete restrict,
  check (status <> 'published' or last_reviewed_at is not null)
);

create index questions_topic_idx on public.questions (topic_id, position);

create trigger questions_set_updated_at
  before update on public.questions
  for each row execute function app_private.set_updated_at();

create table public.question_options (
  id          uuid primary key default gen_random_uuid(),
  question_id uuid not null references public.questions (id) on delete cascade,
  label       text not null check (label ~ '^[A-E]$'),
  text        text not null check (char_length(btrim(text)) between 1 and 600),
  is_correct  boolean not null default false,
  unique (question_id, label),
  unique (question_id, id)
);

-- exatamente UMA correta por questão (a "pelo menos uma" é conferida no teste do seed)
create unique index question_options_one_correct
  on public.question_options (question_id) where is_correct;

-- =============================================================================
-- DADOS DO ALUNO
-- =============================================================================

-- progresso por tema (contadores mantidos pelas RPCs de 102)
create table public.user_topic_progress (
  user_id            uuid not null references public.profiles (id) on delete cascade,
  topic_id           uuid not null references public.topics (id) on delete cascade,
  first_reviewed_at  timestamptz not null default now(),
  last_reviewed_at   timestamptz,
  review_count       integer not null default 0 check (review_count >= 0),
  questions_answered integer not null default 0 check (questions_answered >= 0),
  questions_correct  integer not null default 0 check (questions_correct >= 0),
  last_answered_at   timestamptz,
  updated_at         timestamptz not null default now(),
  primary key (user_id, topic_id),
  check (questions_correct <= questions_answered)
);

create trigger user_topic_progress_set_updated_at
  before update on public.user_topic_progress
  for each row execute function app_private.set_updated_at();

-- cada resposta dada (histórico imutável)
create table public.question_attempts (
  id                 uuid primary key default gen_random_uuid(),
  user_id            uuid not null references public.profiles (id) on delete cascade,
  question_id        uuid not null,
  topic_id           uuid not null,
  selected_option_id uuid not null,
  is_correct         boolean not null,
  context            text not null default 'topic' check (context in ('topic', 'review', 'practice', 'retry')),
  answered_at        timestamptz not null default now(),
  foreign key (topic_id, question_id) references public.questions (topic_id, id) on delete cascade,
  foreign key (question_id, selected_option_id) references public.question_options (question_id, id) on delete cascade
);

create index question_attempts_user_idx on public.question_attempts (user_id, answered_at desc);

-- "Revisar novamente": questão errada → item pendente; acerto posterior → resolvido
create table public.review_queue (
  id          uuid primary key default gen_random_uuid(),
  user_id     uuid not null references public.profiles (id) on delete cascade,
  topic_id    uuid not null,
  question_id uuid not null,
  reason      text not null default 'wrong_answer' check (reason in ('wrong_answer')),
  status      text not null default 'pending' check (status in ('pending', 'resolved')),
  created_at  timestamptz not null default now(),
  resolved_at timestamptz,
  foreign key (topic_id, question_id) references public.questions (topic_id, id) on delete cascade,
  check ((status = 'resolved') = (resolved_at is not null))
);

-- no máximo um item PENDENTE por (aluno, questão): errar de novo não duplica
create unique index review_queue_one_pending
  on public.review_queue (user_id, question_id) where status = 'pending';
create index review_queue_user_pending_idx
  on public.review_queue (user_id, created_at) where status = 'pending';

create table public.favorites (
  user_id    uuid not null references public.profiles (id) on delete cascade,
  topic_id   uuid not null references public.topics (id) on delete cascade,
  created_at timestamptz not null default now(),
  primary key (user_id, topic_id)
);
