-- =============================================================================
-- 110 — SEED DA VERTICAL "Revisão Visual para Concurso de Técnico de Enfermagem"
-- Idempotente. Espelha src/vertical/config.ts (productKey) e src/vertical/offer.ts.
-- =============================================================================

-- 1. Produto. reserved_slugs não tem uso aqui (não há slug público de cliente),
--    mas fica preenchido com as rotas de 1º nível por consistência com o motor.
insert into public.products (key, name, reserved_slugs)
values (
  'revisao-tecnico-enfermagem',
  'Revisão Visual para Concurso de Técnico de Enfermagem',
  array['app', 'login', 'cadastro', 'recuperar-senha', 'nova-senha', 'api', 'auth', 'admin',
        'planos', 'termos', 'privacidade', 'suporte', 'ajuda', 'static', '_next']
)
on conflict (key) do update set name = excluded.name, reserved_slugs = excluded.reserved_slugs;

-- 2. Plano. Por enquanto existe UM nível de acesso (o dono ainda não definiu
--    escada de planos — ver TODO_OWNER_CONFIGURATION em src/vertical/offer.ts).
--    A arquitetura aceita mais planos: basta inserir outra linha com rank maior
--    e uma oferta apontando para ela; o guard sempre usa o de maior rank.
with p as (select id from public.products where key = 'revisao-tecnico-enfermagem')
insert into public.plans (product_id, key, name, rank, limits, features)
select p.id, 'acesso-completo', 'Acesso completo', 1, '{}'::jsonb, '{}'::text[]
  from p
on conflict (product_id, key) do update
   set name = excluded.name, rank = excluded.rank,
       limits = excluded.limits, features = excluded.features;

-- 3. Ofertas da Cakto — PENDENTE DE CONFIGURAÇÃO DO DONO.
--    external_offer_id = data.offer.id do webhook = o código do link
--    https://pay.cakto.com.br/{ID}. Sem a oferta aqui, a compra chega como
--    "unknown_offer" (webhook_events.status = failed) e NENHUM acesso é liberado.
--
-- with p as (select id from public.products where key = 'revisao-tecnico-enfermagem')
-- insert into public.offers (product_id, plan_id, provider, external_offer_id, name, price_cents)
-- select p.id, pl.id, 'cakto', '<ID_OFERTA_CAKTO>', '<NOME_DA_OFERTA>', <PRECO_EM_CENTAVOS>
--   from p join public.plans pl on pl.product_id = p.id and pl.key = 'acesso-completo'
-- on conflict (provider, external_offer_id) do update
--    set plan_id = excluded.plan_id, name = excluded.name, price_cents = excluded.price_cents;
