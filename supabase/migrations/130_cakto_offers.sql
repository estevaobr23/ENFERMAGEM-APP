-- =============================================================================
-- 130 — Ofertas reais da Cakto (produto c49d1d99-7fe1-4b64-aef0-fbbc32eea718).
-- external_offer_id = código do link https://pay.cakto.com.br/{ID}.
-- Por enquanto as três liberam o mesmo nível de acesso no app (acesso-completo):
-- o Básico entrega pelo menos o que a página promete.
-- =============================================================================
with p as (select id from public.products where key = 'revisao-tecnico-enfermagem'),
     o(external_offer_id, name, price_cents) as (values
       ('cm5op9a', 'Plano Completo', 4790::bigint),
       ('i85bp2f', 'Plano Básico', 3790::bigint),
       ('c95ejen', 'Plano Completo - Oferta Especial (downsell)', 3290::bigint))
insert into public.offers (product_id, plan_id, provider, external_offer_id, name, price_cents, is_active)
select p.id, pl.id, 'cakto', o.external_offer_id, o.name, o.price_cents, true
  from p
  join public.plans pl on pl.product_id = p.id and pl.key = 'acesso-completo'
  cross join o
on conflict (provider, external_offer_id) do update
   set plan_id = excluded.plan_id, name = excluded.name,
       price_cents = excluded.price_cents, is_active = true;
