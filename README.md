# Revisão Visual para Concurso de Técnico de Enfermagem

Aplicativo educacional de revisão construído com Next.js 16, Supabase e Tailwind. O fluxo principal é:

`abrir → revisar → responder → descobrir o erro → revisar novamente`

O repositório contém, no mesmo projeto:

- landing pública com 14 blocos, cenas vivas e checkout configurável;
- autenticação com confirmação de e-mail;
- controle de acesso `purchase → entitlement` por webhook da Cakto;
- aplicativo com 8 áreas, 16 temas publicados e 32 questões originais;
- mapas visuais responsivos, busca, favoritos, fila de revisão, histórico e progresso;
- RLS/RPCs e testes de isolamento entre alunos.

## Rodar localmente

Requisitos: Node.js, Docker e Supabase CLI.

```bash
npm install
npx supabase start
npx supabase db reset
npm run dev
```

Copie `.env.example` para `.env.local` e preencha as chaves públicas mostradas por `npx supabase status`. A service role não pertence ao aplicativo Next.

## Verificação

```bash
npm run typecheck
npm run lint
npm run test:unit
npm run test:db
npm run test:e2e
npm run build
```

O E2E cria duas contas locais descartáveis: uma com entitlement e outra sem acesso. Ao final, ambas são removidas.

## Deploy na Vercel (com conta demo para gravação)

1. **Supabase na nuvem** — crie um projeto em supabase.com e, no SQL Editor, rode em ordem:
   - todos os arquivos de `supabase/migrations/` (001 → 120);
   - `supabase/seeds/20_content.sql` (conteúdo dos temas);
   - `supabase/snippets/demo_account.sql` (cria `demo@revisao.local` / `revisao123` com acesso completo).
2. **Auth → URL Configuration**: Site URL = domínio da Vercel; Redirect URLs = `https://SEU-DOMINIO/**`.
3. **Vercel** — *Add New → Project* → importe `estevaobr23/ENFERMAGEM-APP` (framework Next.js detectado sozinho) e preencha as variáveis:

| Variável | Valor |
| --- | --- |
| `NEXT_PUBLIC_SUPABASE_URL` | Project Settings → API → URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | chave anon / publishable |
| `NEXT_PUBLIC_SITE_URL` | `https://SEU-PROJETO.vercel.app` (sem barra no fim) |
| `NEXT_PUBLIC_CHECKOUT_URL_ACESSO_COMPLETO` | link da Cakto (pode ficar vazio na demo) |
| `NEXT_PUBLIC_SUPPORT_EMAIL` | e-mail de suporte |

Nunca coloque `SUPABASE_SERVICE_ROLE_KEY` nem `CAKTO_WEBHOOK_SECRET` na Vercel. Depois das gravações, rode o bloco **LIMPEZA** do `demo_account.sql`.

## Configuração externa ainda necessária

As informações comerciais não foram inventadas. Antes de publicar:

1. Defina preço, condição, garantia e bônus em `src/vertical/offer.ts`.
2. Crie o produto e a oferta reais na Cakto.
3. Cadastre o ID da oferta em uma migration aditiva de `public.offers`.
4. Faça deploy de `supabase/functions/purchase-webhook` com `verify_jwt = false`.
5. Grave `CAKTO_WEBHOOK_SECRET` nos secrets da Edge Function.
6. Aponte os eventos `purchase_approved`, `refund` e `chargeback` para a função.
7. Configure o link de entrega da Cakto para `/cadastro`.
8. Ative SMTP próprio, confirmação de e-mail e URLs de redirect no Supabase de produção.
9. Preencha as variáveis públicas da `.env.example` no ambiente de deploy.

Enquanto `NEXT_PUBLIC_CHECKOUT_URL_ACESSO_COMPLETO` estiver vazio, o plano mostra “Checkout em configuração” e não simula uma compra.

## Segurança de conteúdo

Somente categorias, temas, mapas e questões com status `published` são legíveis pelo aluno com entitlement ativo. Cada tema registra organização, URL, data de acesso e data da última revisão. O conteúdo é educacional e não deve ser usado para decisão clínica.
