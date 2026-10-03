-- =============================================================================
-- 010 — SEGURANÇA DO MOTOR DE ACESSO (sem catálogo)
-- -----------------------------------------------------------------------------
-- 001 e 002 são o core da skill sql-catalogo-saas, copiados SEM EDIÇÃO
-- (md5 conferido). O resto do core (003 catálogo, 004 segurança do catálogo,
-- 005 API pública da vitrine, 006 storage) NÃO se aplica: este produto não tem
-- vitrine pública nem catálogo do cliente. Este arquivo replica do core 004
-- apenas a parte que protege as tabelas de ACESSO, sem alterar nada do 001/002.
--
-- Três atores, como no core:
--   anon           visitante da página de vendas: não lê nada além de planos
--   authenticated  aluno: lê o próprio direito; nunca escreve compra/direito
--   service_role   Edge Function do webhook (a chave NUNCA vai para o app Next)
-- =============================================================================

-- 002 chama app_private.sync_catalog_access(user_id) depois de liberar ou
-- revogar um direito (no core ela tira vitrines do ar). Aqui não há vitrine:
-- o acesso ao conteúdo é avaliado em tempo real pela RLS (has_product_access),
-- então revogar o entitlement já bloqueia tudo na próxima leitura. A função
-- existe só para o 002 continuar funcionando sem edição.
create or replace function app_private.sync_catalog_access(p_user_id uuid)
returns void
language plpgsql
security definer
set search_path = ''
as $$
begin
  -- intencionalmente vazio (ver comentário acima)
  return;
end;
$$;

-- -----------------------------------------------------------------------------
-- 1. RLS ligada nas tabelas do motor
-- -----------------------------------------------------------------------------
alter table public.profiles       enable row level security;
alter table public.products       enable row level security;
alter table public.plans          enable row level security;
alter table public.offers         enable row level security;
alter table public.purchases      enable row level security;
alter table public.entitlements   enable row level security;
alter table public.webhook_events enable row level security;

-- -----------------------------------------------------------------------------
-- 2. GRANTS — o Supabase concede ALL a anon/authenticated em public; zera e
-- concede só o necessário.
-- -----------------------------------------------------------------------------
revoke all on
  public.profiles, public.products, public.plans, public.offers,
  public.purchases, public.entitlements, public.webhook_events
from anon, authenticated;

grant select on public.products, public.plans to anon, authenticated;

grant select on public.profiles to authenticated;
grant update (display_name) on public.profiles to authenticated;

grant select on public.entitlements to authenticated;
-- purchases, offers, webhook_events: nenhum grant => só service_role.

grant usage on schema app_private to anon, authenticated;
revoke execute on all functions in schema app_private from public, anon, authenticated;

-- -----------------------------------------------------------------------------
-- 3. POLICIES (iguais às do core 004)
-- -----------------------------------------------------------------------------
create policy "products: leitura pública de ativos" on public.products
  for select to anon, authenticated using (is_active);

create policy "plans: leitura pública" on public.plans
  for select to anon, authenticated
  using (exists (select 1 from public.products p where p.id = product_id and p.is_active));

create policy "profiles: dono lê" on public.profiles
  for select to authenticated using (id = (select auth.uid()));
create policy "profiles: dono altera" on public.profiles
  for update to authenticated
  using (id = (select auth.uid())) with check (id = (select auth.uid()));

create policy "entitlements: titular lê" on public.entitlements
  for select to authenticated using (user_id = (select auth.uid()));

-- purchases, offers, webhook_events: RLS ligada e NENHUMA policy = deny-all.

-- -----------------------------------------------------------------------------
-- 4. Exposição das RPCs do motor
-- -----------------------------------------------------------------------------
revoke execute on function
  public.claim_my_entitlements(),
  public.apply_purchase_event(text, text, text, text, text, bigint, text, timestamptz)
from public, anon, authenticated;

grant execute on function public.claim_my_entitlements() to authenticated;
grant execute on function
  public.apply_purchase_event(text, text, text, text, text, bigint, text, timestamptz)
to service_role;
