-- CONTA DEMO PARA GRAVAÇÃO DE VÍDEOS (rodar 1x no SQL Editor do projeto na nuvem,
-- depois das migrations e de seeds/20_content.sql).
--   login: demo@revisao.local   senha: revisao123
-- Remover depois das gravações: ver bloco "LIMPEZA" no fim.

create extension if not exists pgcrypto with schema extensions;

-- 1) oferta interna de demonstração (não vende; não aparece em checkout)
with p as (select id from public.products where key = 'revisao-tecnico-enfermagem')
insert into public.offers (product_id, plan_id, provider, external_offer_id, name, price_cents, is_active)
select p.id, pl.id, 'cakto', 'DEMO-GRAVACAO', 'Acesso demo para gravação (não vende)', null, true
  from p join public.plans pl on pl.product_id = p.id and pl.key = 'acesso-completo'
on conflict (provider, external_offer_id) do nothing;

-- 2) usuário já confirmado (o trigger on_auth_user_change cria o profile)
do $$
declare
  v_id uuid := gen_random_uuid();
begin
  if exists (select 1 from auth.users where email = 'demo@revisao.local') then
    return;
  end if;
  insert into auth.users (
    instance_id, id, aud, role, email, encrypted_password, email_confirmed_at,
    raw_app_meta_data, raw_user_meta_data, created_at, updated_at,
    confirmation_token, recovery_token, email_change_token_new, email_change
  ) values (
    '00000000-0000-0000-0000-000000000000', v_id, 'authenticated', 'authenticated',
    'demo@revisao.local', extensions.crypt('revisao123', extensions.gen_salt('bf')), now(),
    '{"provider":"email","providers":["email"]}', '{"name":"Conta demo"}', now(), now(),
    '', '', '', ''
  );
  insert into auth.identities (id, user_id, provider_id, identity_data, provider, last_sign_in_at, created_at, updated_at)
  values (gen_random_uuid(), v_id, v_id::text,
          jsonb_build_object('sub', v_id::text, 'email', 'demo@revisao.local', 'email_verified', true),
          'email', now(), now(), now());
end $$;

-- 3) "compra" demo aprovada → libera o acesso completo para o e-mail acima
select public.apply_purchase_event('cakto', 'DEMO-GRAVACAO-1', 'DEMO-GRAVACAO', 'demo@revisao.local', 'approved', 0, 'BRL', now());

-- LIMPEZA (quando terminar de gravar):
-- select public.apply_purchase_event('cakto', 'DEMO-GRAVACAO-1', 'DEMO-GRAVACAO', 'demo@revisao.local', 'canceled', 0, 'BRL', now());
-- delete from auth.users where email = 'demo@revisao.local';
-- update public.offers set is_active = false where external_offer_id = 'DEMO-GRAVACAO';
