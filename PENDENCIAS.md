# Pendências — Revisão Visual para Técnico de Enfermagem

Atualizado em 03/10/2026.

## Contexto: o que já foi feito

### Aplicativo (estrutura pronta)
- Navegação completa: sidebar no desktop, bottom nav no mobile, Início, Matérias (lista + mapa geral), tela da matéria, tela de tema, Busca, Salvos (temas + pontos), Progresso e Conta.
- Tela de tema: mapa mental, seções em "fichas", índice fixo (desktop) ou em chips (mobile), resumo final e quiz no fim do tema (uma questão por vez, com feedback e as seções a revisar).
- Banco: migration `120_topic_sections_quiz.sql` (seções, resultado do quiz, pontos salvos, busca no conteúdo).
- Ilustrações do Codex integradas por `src/vertical/content/visual-assets.ts`.

### Conteúdo no padrão novo (v2)
Cada tema tem visão geral, passo a passo com "por quê" e "quem faz", números que caem, caso comentado, pegadinhas com o raciocínio, conexões e 8 a 9 questões. Todo o conteúdo foi escrito a partir da fonte oficial, lida no original.

| Matéria | Temas v2 | Situação |
|---|---|---|
| Biossegurança | 8 | Concluída |
| SUS | 6 | Concluída |
| Ética | 4 | Concluída |
| Cálculos | 5 | Concluída (números gerados por `src/core/calc`, com testes) |
| Fundamentos | 2 | Parcial |
| Urgência e Emergência | 0 | Formato antigo |
| Saúde da Mulher | 0 | Formato antigo |
| Saúde da Criança | 0 | Formato antigo |

**Total atual:** 32 temas e 223 questões (antes eram 16 temas e 48 questões).

Organização do conteúdo:
- Um arquivo por tema: `src/vertical/content/topics/<matéria>/`
- Um arquivo por matéria: `src/vertical/content/areas/`

## O que falta

### 1. Terminar Fundamentos (4 temas novos)
As fontes já foram baixadas e lidas; falta escrever:
- Identificação do paciente (protocolo MS/Anvisa 2013)
- Prevenção de quedas (protocolo MS/Anvisa 2013)
- Registro de enfermagem (Resolução Cofen 514/2016)
- Processo de enfermagem (Resolução Cofen 736/2024)

### 2. Refazer as 3 matérias que ainda estão no formato antigo
Hoje elas funcionam, mas com 2 temas cada e só 3 questões por tema.
- **Urgência e Emergência:** aprofundar os 2 temas da Rede de Atenção às Urgências; incluir classificação de risco e os protocolos de suporte básico do SAMU (MS).
- **Saúde da Mulher:** aprofundar idade gestacional e Näegele; incluir pré-natal (CAB 32), puerpério e rastreio de câncer de colo e de mama.
- **Saúde da Criança:** aprofundar aleitamento e teste do pezinho; incluir as outras triagens neonatais (orelhinha, olhinho, coraçãozinho), crescimento e desenvolvimento e alimentação complementar.

### 3. RCP no adulto
O tema está fora do ar porque o site da AHA bloqueia download automático. É preciso baixar manualmente o PDF das diretrizes AHA 2025 e entregar para escrever o tema.

### 4. Limpeza técnica
Quando o item 2 terminar, apagar os arquivos antigos: `areas-1.ts`, `areas-2.ts`, `sections-1.ts`, `sections-2.ts` e `extra-questions.ts`. Eles são os responsáveis pelos avisos do lint.

### 5. Antes de vender
- **Revisão por enfermeiro(a):** obrigatória para todo o conteúdo. As ressalvas de cada tema estão no campo `reviewNotes`.
- **Pontos para conferir com prioridade:**
  - prazos de PEP: conferir com o PCDT vigente;
  - parâmetros da PNAB: conferir alterações após 2017;
  - termo "úlcera" × "lesão por pressão";
  - etapa atual da ampliação do teste do pezinho.
- **Produção (Supabase):** aplicar a migration 120 e depois rodar o seed `supabase/seeds/20_content.sql`.
- **Comercial:** configurar preço, oferta da Cakto e webhook (lista completa no `README.md`).

## Como retomar
Peça: **"continue a Onda 1 pelas matérias restantes"**.

Para testar localmente, rode `npm run dev -- -p 3100` e entre com `demo@revisao.local` / `revisao123`.
