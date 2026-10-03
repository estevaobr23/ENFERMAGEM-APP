-- SOMENTE DESENVOLVIMENTO LOCAL (supabase db reset). NÃO é uma oferta real.
-- Permite testar o webhook ponta a ponta com um evento assinado localmente.
-- Em produção, a oferta real entra em 110_revisao_seed.sql com o ID da Cakto.
with p as (select id from public.products where key = 'revisao-tecnico-enfermagem')
insert into public.offers (product_id, plan_id, provider, external_offer_id, name, price_cents, is_active)
select p.id, pl.id, 'cakto', 'OFERTA-TESTE-LOCAL', 'Oferta de teste local (não vende)', null, true
  from p join public.plans pl on pl.product_id = p.id and pl.key = 'acesso-completo'
on conflict (provider, external_offer_id) do nothing;
