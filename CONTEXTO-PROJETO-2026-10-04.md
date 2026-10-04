# Contexto do Projeto — Revisão Técnico de Enfermagem

**Data da análise:** 04/10/2026 (domingo), ~07h (horário de Brasília)
**Repositório:** `estevaobr23/ENFERMAGEM-APP` · branch `main` · último commit `71b796b`
**Produção:** https://enfermagem-app-xi.vercel.app (Vercel) · Supabase `enfermagem-app` (`mofivnzdampnhsqvsthz`, sa-east-1)
**Gateway:** Cakto · produto `c49d1d99-7fe1-4b64-aef0-fbbc32eea718`

> Tudo abaixo foi conferido nesta data no código, no banco de produção, na API da Cakto e na página no ar — não é cópia do README.

---

## 1. Resumo executivo

| Frente | Situação | Nota |
|---|---|---|
| Aplicativo de estudo | **Pronto e no ar** | Navegação completa, quiz, revisão, progresso, busca |
| Conteúdo | **8 áreas · 31 temas · 223 questões** publicados (código = banco de produção) | 5 áreas fortes; 4 rasas |
| Página de vendas | **No ar**, padrão SaaS, 14 seções, 3 ofertas, UTMify + repasse de UTM | Domínio cadastrado na Cakto está errado (404) |
| Checkout Cakto | 3 ofertas ativas (R$ 47,90 / 37,90 / 32,90) | Sem personalização, sem imagem, categoria errada |
| **Liberação de acesso após compra** | **QUEBRADA** | Webhook não publicado; 1 cliente pagou hoje e está sem acesso |
| Qualidade de código | typecheck ok · 18/18 testes unitários ok · lint 0 erros / 11 avisos | Avisos só em arquivos legados |

**Prioridade número 1:** ligar o webhook Cakto → Supabase e liberar o acesso do comprador do pedido `7oesARk`. O tráfego pago já está rodando (a venda veio de anúncio FB "ad 1 direto", Reels).

---

## 2. Produto

- **Nome comercial:** Revisão Visual para Concurso de Técnico de Enfermagem
- **Marca no app:** Revisão Técnico de Enfermagem ("Revisão Técnico")
- **O que é:** aplicativo web (celular e computador) de revisão para concurso de Técnico de Enfermagem. Cada tema tem mapa mental, fichas de conteúdo, resumo, pegadinhas da banca e quiz com explicação; erros vão para a fila "Revisar novamente".
- **Fluxo do aluno:** abrir → revisar → responder → descobrir o erro → revisar de novo.
- **Aviso fixo:** material educacional, não clínico, sem promessa de aprovação (`src/vertical/config.ts`).

### Oferta (fonte única: `src/vertical/offer.ts`)

| Oferta | Preço | Link Cakto | Libera no app |
|---|---|---|---|
| Plano Completo (recomendado) | R$ 47,90 | `pay.cakto.com.br/cm5op9a` | acesso-completo |
| Plano Básico | R$ 37,90 | `pay.cakto.com.br/i85bp2f` | acesso-completo |
| Downsell (modal ao clicar no Básico) | R$ 32,90 | `pay.cakto.com.br/c95ejen` | acesso-completo |

- Pagamento único, garantia de 15 dias, sem bônus (seção some enquanto vazia).
- As 3 ofertas liberam **o mesmo plano** (`130_cakto_offers.sql`). O Básico promete menos na página, mas entrega tudo — escolha consciente ("entrega pelo menos o que promete"). Efeito colateral: a tela "Seu plano" do comprador do Básico mostra "Plano Completo".
- O cliente pagou R$ 48,89 numa oferta de R$ 47,90 (diferença de R$ 0,99 = taxa repassada ao comprador no checkout).

---

## 3. Stack e arquitetura

- **Next.js 16.3.8** (App Router, `src/proxy.ts` no lugar do middleware) · React 19.2 · Tailwind 4 · TypeScript.
- **Supabase**: Auth (e-mail + senha com confirmação), Postgres com RLS, RPCs, Edge Function de webhook.
- **Testes:** unitários (`tsx --test`), banco (PGlite), E2E (Playwright, cria 2 contas descartáveis).

### Pastas principais
| Caminho | Papel |
|---|---|
| `src/app/page.tsx` | Página de vendas |
| `src/vertical/landing/` | Peças da página: cenas animadas, planos/downsell, UTM, pixel UTMify |
| `src/vertical/offer.ts` / `config.ts` | Oferta comercial / linguagem do nicho |
| `src/vertical/content/` | Conteúdo: `topics/<matéria>/<tema>.ts` (v2) + arquivos legados `areas-*.ts`, `sections-*.ts`, `extra-questions.ts` |
| `src/app/app/(study)/` | App do aluno: início, matérias, tema, busca, salvos, revisões, progresso, conta, plano |
| `src/app/(auth)/` | Login, cadastro, recuperar e nova senha |
| `src/core/auth/guard.ts` | Camada 2 de acesso: sessão + entitlement ativo (`claim_my_entitlements`) |
| `supabase/migrations/` | 001 → 130 (todas aplicadas em produção) |
| `supabase/functions/purchase-webhook/` | Webhook Cakto (HMAC, idempotente, reembolso/chargeback) — **existe no código, não está publicado** |
| `supabase/seeds/20_content.sql` | Conteúdo gerado por `npm run content:seed` |
| `MAPA-CRIATIVOS.md` | Documento para quem escreve anúncios (funcionalidades + fatos do conteúdo) |
| `PENDENCIAS.md` | Pendências de conteúdo (de 03/10) |

### Motor de acesso (como deveria funcionar)
```
Cakto (purchase_approved) ──POST──▶ Edge Function purchase-webhook?provider=cakto
   └─ valida HMAC/secret → webhook_events (idempotência) → RPC apply_purchase_event
        └─ purchases + entitlements (por e-mail do comprador, plano vem de public.offers)
Aluno cria conta em /cadastro com o MESMO e-mail → confirma e-mail
   └─ ao entrar em /app, guard chama claim_my_entitlements → vincula a compra → libera
Reembolso / chargeback → entitlement revogado (histórico de estudo mantido)
```
Três camadas: `proxy.ts` (tem sessão?) → `guard.ts` (tem direito ativo?) → RLS no banco (só `published` + entitlement ativo).

---

## 4. Conteúdo (medido em 04/10/2026)

| Área | Temas | Questões | Formato |
|---|---|---|---|
| Biossegurança e Segurança do Paciente | 8 | 68 | v2 completo |
| SUS | 6 | 48 | v2 completo |
| Cálculos de Enfermagem | 5 | 40 | v2 (números gerados por `src/core/calc`, testados) |
| Ética e Legislação Profissional | 4 | 33 | v2 completo |
| Fundamentos de Enfermagem | 2 | 16 | v2, área incompleta |
| Urgência e Emergência | 2 | 6 | formato antigo (RCP fora do ar: `review_required`) |
| Saúde da Mulher | 2 | 6 | formato antigo |
| Saúde da Criança | 2 | 6 | formato antigo |
| **Total** | **31** | **223** | |

- Produção tem exatamente os mesmos 31 temas / 223 questões publicados.
- `PENDENCIAS.md` fala em 32 temas — a diferença é o RCP, que não está publicado.
- Desequilíbrio: 3 áreas com só 3 questões por tema. A página vende "as 8 áreas" — essas três ficam visivelmente mais rasas que o resto.
- Conteúdo **ainda não revisado por enfermeiro(a)**; ressalvas em `reviewNotes` de cada tema (PEP/PCDT, PNAB pós-2017, "úlcera × lesão por pressão", fase do teste do pezinho).

---

## 5. Página de vendas (no ar)

**URL real:** https://enfermagem-app-xi.vercel.app — título "Revisão Técnico — revisão visual para concursos".
**Histórico recente (03/10 noite):** 5 versões em ~1h20 (low ticket → volta ao antigo → SaaS → nova copy do hero). Versão atual = padrão `saas-padrao-pgv`, paleta azul-petróleo (#0f5c6e) + amarelo (#f6d55c).

### Estrutura atual (14 blocos)
1. **Hero** — "Tenha em um só aplicativo as 8 áreas de Técnico de Enfermagem organizadas em mapas mentais, resumos visuais e questões comentadas", celular com o painel real, 3 notas flutuantes, linha "8 áreas · 31 temas · 223 questões", CTA para os planos.
2. **O problema** — conteúdo espalhado em apostila/PDF/anotações (6 cartões).
3. **O que tem em cada tema** — mockups explodidos: mapa mental, resumo, questões, revisar novamente.
4. **Como funciona** — 5 passos com setas que se desenham na rolagem.
5. **Questões comentadas** — cena viva do quiz (questão real de Higiene das mãos).
6. **Apostila × aplicativo** — comparação lado a lado.
7. **Revisar novamente** — cena do erro indo para a fila.
8. **As 8 áreas** — bento + tela Matérias rolando no celular.
9. **Tudo em um só aplicativo** — números (substitui bônus; nenhum bônus inventado).
10. **Planos** — Básico (recua) × Completo (destaque) + modal de downsell.
11. **Garantia** de 15 dias (selo).
12. **FAQ** (6 perguntas).
13. **CTA final**.
14. **Rodapé** com aviso educacional e link "Área do aluno".

### Rastreamento
- Pixel UTMify (`6ac1b13db5dc638593b7b74b`) carregado só na página de vendas.
- UTMs + `fbclid/gclid/ttclid/sck/src/xcod…` são guardadas no localStorage e anexadas ao link da Cakto em todos os botões. **Funciona:** a venda de hoje chegou na Cakto com `utm_source=FB`, campanha, conjunto, anúncio, posicionamento e `fbclid`.
- `NEXT_PUBLIC_META_PIXEL_ID` existe na `.env.example`, mas **nenhum código usa** — o Pixel da Meta não está na página (só UTMify).

### Pontos fortes
- Tudo que a página mostra é real: telas, números e questão saem do conteúdo publicado (contadores automáticos).
- Copy honesta (sem promessa de aprovação, sem bônus fictício), coerente com o aviso educacional.
- Escada de preço com downsell e repasse de UTM bem amarrados.

### Pontos fracos / riscos
- **Domínio errado na Cakto:** a "página de vendas" cadastrada no produto é `enfermagem-app.vercel.app`, que responde **404** (`X-Vercel-Error: NOT_FOUND`). O certo é `enfermagem-app-xi.vercel.app`.
- Página longa (14 blocos) para um ticket de R$ 32–48 vindo de Reels; o CTA do hero leva para `#planos` (mais rolagem antes do checkout).
- Sem prova social (depoimentos/número de alunos) — esperado para lançamento, mas é a próxima peça a adicionar quando houver.
- A frase final "Depois do pagamento, você cria sua conta com o mesmo e-mail da compra" é a única instrução de acesso; a Cakto não envia nenhum link (ver seção 6).

---

## 6. Checkout e liberação de acesso — auditoria

### O que está certo
- Produto ativo na Cakto, 3 ofertas com os IDs corretos.
- Banco de produção: migrations 001→130 aplicadas; `public.offers` tem `cm5op9a`, `i85bp2f`, `c95ejen` (+ `DEMO-GRAVACAO`), todas apontando para `acesso-completo`.
- Código do webhook sólido: HMAC com anti-replay, fallback por `secret` no corpo, idempotência por evento e por compra, reembolso/chargeback revogam acesso, log sem dados pessoais.

### O que está quebrado (verificado hoje)
| # | Problema | Evidência | Impacto |
|---|---|---|---|
| 1 | **Edge Function `purchase-webhook` não publicada** | `supabase functions list` → vazio | Nenhuma compra chega ao banco |
| 2 | **Secret `CAKTO_WEBHOOK_SECRET` não configurado** | `supabase secrets list` → vazio | Mesmo publicada, recusaria tudo (fail-closed) |
| 3 | **Nenhum webhook da Cakto aponta para este projeto** | `webhook_list`: o produto só está ligado ao webhook "Recuperação WhatsApp" (projeto `gatos-membros`) | Compra aprovada não dispara liberação |
| 4 | **Cakto não entrega nada ao comprador** | `contentDeliveries: []`, `emailAccessLink: null` | O comprador não recebe link para `/cadastro` |
| 5 | Página de vendas errada no produto | `salesPage` = domínio 404 | Link "voltar à página" e revisão da Cakto quebrados |
| 6 | Cadastro da Cakto incompleto | categoria "Moda e Beleza", sem imagem | Checkout sem identidade, categoria errada |

### Clientes afetados
| Pedido | Data | Oferta | Valor | Status Cakto | Acesso no app |
|---|---|---|---|---|---|
| `7oesARk` (`d8df56dd-…`) | 04/10/2026 06:16 | Plano Completo (cm5op9a), PIX | R$ 48,89 | **pago** | **NÃO liberado** (banco: 0 compras reais, 0 eventos de webhook) |

Banco de produção hoje: 1 usuário (a conta demo), 1 compra (a demo), 1 direito ativo (o demo), 0 eventos de webhook.

### Risco ainda não verificado
- **E-mail de confirmação do cadastro.** O app exige confirmar o e-mail antes de vincular a compra. O SMTP padrão do Supabase tem limite baixíssimo de envio e, em projetos novos, só entrega para e-mails da própria equipe. Sem SMTP próprio, o comprador pode nunca receber a confirmação → nunca libera. Conferir em Auth → SMTP no painel do Supabase.

---

## 7. Qualidade técnica (rodado hoje)

| Verificação | Resultado |
|---|---|
| `tsc --noEmit` | ok, 0 erros |
| Testes unitários | 18/18 passando (cálculos, checkout/UTM, conteúdo, ilustrações, RCP bloqueado) |
| ESLint | 0 erros, 11 avisos — variáveis sem uso em `areas-2.ts`, `sections-2.ts`, `extra-questions.ts` (legado) |
| Testes de banco / E2E | não rodados nesta análise (precisam do Supabase local no Docker) |

Documentação desatualizada: o `README.md` ainda fala em "16 temas e 32 questões" e migrations "001 → 120"; o `PENDENCIAS.md` fala em 32 temas.

---

## 8. Plano de ação em ordem

### Agora (receita parada sem isto)
1. Publicar `purchase-webhook` no projeto `mofivnzdampnhsqvsthz` (`verify_jwt = false`).
2. Criar o webhook na Cakto → `https://mofivnzdampnhsqvsthz.supabase.co/functions/v1/purchase-webhook?provider=cakto`, eventos `purchase_approved`, `refund`, `chargeback`, só para este produto; gravar o secret devolvido em `CAKTO_WEBHOOK_SECRET`.
3. Liberar manualmente o pedido `7oesARk` (via `apply_purchase_event`) e avisar o cliente pelo WhatsApp/e-mail com o link de `/cadastro`.
4. Na Cakto: entrega por e-mail com link `https://enfermagem-app-xi.vercel.app/cadastro`, página de vendas corrigida.
5. Configurar SMTP próprio no Supabase e testar o cadastro com um e-mail de fora da equipe.
6. Testar ponta a ponta com o evento de teste da Cakto.

### Em seguida (conversão)
7. Personalizar o checkout da Cakto (cores e identidade da página, imagem do produto, categoria Educação, textos) — skill `criar-produto-cakto`.
8. Adicionar o Pixel da Meta (hoje só UTMify).
9. Avaliar encurtar o caminho do hero até o checkout.

### Conteúdo
10. Fundamentos: + 4 temas (identificação do paciente, quedas, registro, processo de enfermagem).
11. Refazer Urgência, Saúde da Mulher e Saúde da Criança no formato v2; RCP depende do PDF da AHA 2025.
12. Apagar os arquivos legados e zerar os avisos do lint.
13. Revisão por enfermeiro(a) antes de escalar o tráfego.

---

## 9. Como retomar

- Rodar local: `npm run dev -- -p 3100` · conta demo `demo@revisao.local` / `revisao123` (remover depois das gravações com o bloco LIMPEZA de `supabase/snippets/demo_account.sql`).
- Supabase CLI já está linkada ao projeto de produção (`supabase/.temp/project-ref`).
- Cakto: MCP `cakto` e skill `criar-produto-cakto`.
