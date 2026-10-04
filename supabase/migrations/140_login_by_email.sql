-- Login sem senha: a Server Action de entrada precisa achar o auth.users
-- existente por e-mail usando só a service_role (sem listar todos os
-- usuários). SECURITY DEFINER porque auth.users não é acessível à anon/authenticated.
create or replace function public.get_user_id_by_email(p_email text)
returns uuid
language sql
security definer
set search_path = ''
as $$
  select id from auth.users where lower(email) = lower(btrim(p_email)) limit 1;
$$;

revoke all on function public.get_user_id_by_email(text) from public, anon, authenticated;
