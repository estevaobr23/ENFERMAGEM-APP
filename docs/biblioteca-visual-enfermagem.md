# Biblioteca visual — Revisão para Técnico de Enfermagem

Versão editorial: 2026-10-03  
Escopo desta entrega: os 16 temas publicados no aplicativo e o tema de RCP que permanece bloqueado para revisão.  
Fonte de verdade do conteúdo: `src/vertical/content`.  

## Resultado da produção

- 28 ativos finais integrados: 16 de prioridade P0 e 12 de prioridade P1.
- 22 diagramas vetoriais e 6 pranchas clínicas com base WebP incorporada em SVG autônomo.
- Cobertura por categoria: SUS 3, Fundamentos 3, Biossegurança 4, Urgência 2, Saúde da Mulher 4, Saúde da Criança 4, Ética 4 e Cálculos 4.
- RCP do adulto permanece `research_required`: não foi fabricado porque o conteúdo-fonte ainda exige revisão científica, conforme a regra de elegibilidade desta própria biblioteca.

## A. Bíblia visual

### Propósito

Cada ativo deve comprimir um conceito de prova em uma leitura de poucos segundos. A coleção combina ilustração de livro científico, mapas mentais determinísticos em SVG e texto/labels renderizados pelo aplicativo.

### Princípios

- Fundo branco puro (`#FFFFFF`) e margem de segurança mínima de 7%.
- Um objetivo didático por composição; nenhum elemento apenas decorativo.
- Ilustração científica em vista ortogonal ou lateral simples, sem perspectiva cinematográfica.
- Estruturas relevantes coloridas; estruturas de contexto em tons naturais e dessaturados.
- Texto longo nunca rasterizado. Títulos, fórmulas, legendas e labels pertencem a SVG/HTML.
- Setas são curvas suaves ou segmentos ortogonais, com ponta triangular e sem cruzar a estrutura apontada.
- O ponto final da seta encosta na estrutura; o label fica fora da anatomia.
- Mobile primeiro: nenhum painel depende de largura superior a 360 px para ser compreendido.
- Linguagem de manual/atlas premium: contorno limpo, luz plana, sem cenário, sem gore e sem infantilização.

### Grade e medidas

| Elemento | Regra |
|---|---|
| Canvas padrão | 1200 × 900 px (4:3) |
| Canvas vertical | 1080 × 1350 px (4:5) para procedimentos |
| Área útil | 86% do canvas |
| Margem mínima | 72 px no canvas 1200 × 900 |
| Linha estrutural | 3 px |
| Linha secundária | 2 px |
| Seta | 3 px, ponta 10 × 10 px, raio mínimo 16 px |
| Cartão | raio 22 px, borda 2 px |
| Sombra | `0 8px 24px rgba(15,23,42,.08)`; não usar em anatomia |
| Título | 42–48 px, peso 750 |
| Label | 24–28 px, peso 650 |
| Texto auxiliar | 20–22 px, peso 450 |
| Espaçamento base | múltiplos de 8 px |

### Paleta da interface

| Papel | Cor |
|---|---|
| Texto principal | `#0F172A` |
| Texto secundário | `#475569` |
| Linha neutra | `#94A3B8` |
| Fundo suave | `#F8FAFC` |
| SUS | `#2563EB` |
| Fundamentos | `#0F9F95` |
| Biossegurança | `#16A34A` |
| Urgência | `#E11D48` |
| Saúde da Mulher | `#7C3AED` |
| Saúde da Criança | `#D97706` |
| Ética | `#475569` |
| Cálculos | `#EA580C` |

As cores anatômicas permanecem naturais. A cor da categoria aparece em halos, badges, setas, molduras e realces; não recolore órgãos de modo anticientífico.

### Regras para anatomia e procedimentos

- Anatomia isolada, proporcional e neutra; genital, mama e períneo somente em diagrama científico isolado.
- Mãos com cinco dedos visíveis quando forem didaticamente relevantes.
- Ação única por quadro em sequências.
- Não incorporar números ou texto na ilustração-base.
- Quando uma orientação espacial importar, representar plano, lado e ponto de contato de modo inequívoco.
- Manter área livre ao redor da figura para a camada de labels.

### Responsividade e acessibilidade

- `alt` descreve a informação, não a aparência decorativa.
- `longDescription` fornece o equivalente textual do mapa.
- Labels usam coordenadas relativas de 0 a 1.
- Em telas estreitas, labels laterais tornam-se lista numerada abaixo da imagem.
- SVGs usam `role="img"`, `<title>` e `<desc>`.
- Contraste mínimo WCAG AA; cor nunca é a única codificação.

## B. Taxonomia oficial

| Código | Família | Uso |
|---|---|---|
| ANA | Anatomia ilustrada | Identificar estruturas e relações espaciais |
| ANF | Anatomia funcional | Explicar movimento, fluxo ou mudança fisiológica |
| MMP | Mapa mental | Organizar conceitos em hub e ramos |
| FLX | Fluxograma | Mostrar ordem, decisão ou percurso |
| PRC | Procedimento visual | Mostrar uma técnica em quadros sucessivos |
| CMP | Comparativo | Contrastar duas ou mais classes |
| TBV | Tabela visual | Revisar classificações compactas |
| FRM | Fórmula visual | Explicar variáveis e relações matemáticas em SVG/HTML |
| EXR | Exercício resolvido | Mostrar substituição, cálculo e checagem |
| TML | Linha do tempo | Mostrar evolução ou marcos |
| SYN | Infográfico síntese | Reunir o núcleo de um tema em uma tela |

## C. Mapa das categorias e linguagem visual

| Categoria | Linguagem principal | Temas atuais cobertos |
|---|---|---|
| SUS | hubs, comparativos e hierarquias | princípios; conferências e conselhos |
| Fundamentos | fluxos de cuidado e anatomia funcional | 9 certos; prevenção de UPP |
| Biossegurança | procedimentos e fluxos de segurança | 5 momentos; PNSP/NSP/PSP |
| Urgência | rede, percurso e prioridade | componentes e diretrizes da RUE; RCP bloqueada |
| Saúde da Mulher | anatomia, calendário e progressão | idade gestacional; Regra de Näegele |
| Saúde da Criança | progressão e procedimento | aleitamento; teste do pezinho |
| Ética | comparação, hierarquia e decisão | atribuições; Código de Ética |
| Cálculos | fórmulas e exercícios em SVG/HTML | gotejamento; regra de três |

## D. Matriz mestre de produção

`approved` significa que o tema correspondente está `published` e possui `lastReviewedAt` no conteúdo local. `research_required` bloqueia a geração.

| ID | Categoria | Tema | Ativo | Tipo | Objetivo / conteúdo obrigatório | Fonte | Pri. | Status |
|---|---|---|---|---|---|---|---|---|
| SUS-PRI-001 | SUS | Princípios | Núcleo e cinco famílias do art. 7º | MMP | acesso, cuidado, informação, organização, sociedade | Lei 8.080, art. 7º | P0 | approved |
| SUS-PAR-001 | SUS | Participação | Conferência × Conselho | CMP | periodicidade, caráter, composição, função, homologação, paridade | Lei 8.142, art. 1º | P0 | approved |
| SUS-PAR-002 | SUS | Participação | Requisitos para receber recursos | FLX | fundo, conselho, plano, relatório, contrapartida, comissão | Lei 8.142, art. 4º | P1 | approved |
| FUN-MED-001 | Fundamentos | 9 certos | Antes → durante → depois | FLX | os nove certos agrupados sem alterar a numeração | Protocolo MS/Anvisa, item 7.1.1 | P0 | approved |
| FUN-UPP-001 | Fundamentos | UPP | Pontos de pressão e reposicionamento | ANF | sacro, nádegas, calcâneos, tornozelos e áreas sob dispositivos; giro | Protocolo UPP, itens 7.3–7.4 | P0 | approved |
| FUN-UPP-002 | Fundamentos | UPP | Estágios em cortes simplificados | CMP | estágios I–IV, inclassificável e lesão profunda sem gore | Protocolo UPP, item 4 | P1 | approved |
| BIO-HM-001 | Biossegurança | Higiene das mãos | Cinco momentos no ponto de assistência | PRC | 2 momentos antes, 3 depois, paciente, profissional e zona próxima | Protocolo HM, itens 5 e 8 | P0 | approved |
| BIO-HM-002 | Biossegurança | Higiene das mãos | Álcool × água e sabonete | CMP | 20–30 s; 40–60 s; sujidade visível | Protocolo HM, itens 5.1–5.3 | P1 | approved |
| BIO-PNSP-001 | Biossegurança | Segurança do paciente | Incidente → NSP/PSP → notificação | FLX | conceitos, estrutura, 15º dia útil, óbito 72 h | Portaria 529 + RDC 36 | P0 | approved |
| BIO-PNSP-002 | Biossegurança | Segurança do paciente | Protocolos do PSP | SYN | identificação, mãos, cirurgia, medicamentos, quedas, UPP, comunicação | RDC 36, art. 8º | P1 | approved |
| URG-RUE-001 | Urgência | RUE | Oito componentes em percurso | FLX | todos os 8 componentes sem criar hierarquia clínica | Portaria 1.600, art. 4º | P0 | approved |
| URG-RUE-002 | Urgência | RUE | Diretrizes em quatro eixos | MMP | acolhimento/risco, acesso, rede, humanização | Portaria 1.600, art. 2º | P0 | approved |
| URG-RCP-001 | Urgência | RCP adulto | Sequência do SBV | PRC | somente após confirmar diretriz AHA 2025 | AHA 2025 | P0 | research_required |
| WOM-IG-001 | Mulher | Idade gestacional | Marcos de altura uterina | ANA | 12, 16 e 20 semanas em vista lateral | CAB 32, item 5.5 | P0 | approved |
| WOM-IG-002 | Mulher | Idade gestacional | Escolha do método | FLX | DUM certa, período do mês, sem data, USG | CAB 32, item 5.5 | P1 | approved |
| WOM-DPP-001 | Mulher | Näegele | Regra visual DUM → DPP | FRM | +7 dias; −3 ou +9 meses; ajuste de mês/ano | CAB 32, item 5.6 | P0 | approved |
| WOM-DPP-002 | Mulher | Näegele | Exemplo 27/01 → 03/11 | EXR | transbordo de dias e acréscimo do mês | CAB 32, item 5.6 | P1 | approved |
| CHI-AM-001 | Criança | Aleitamento | Linha do tempo 1ª hora → 6 meses → 2+ anos | TML | início precoce, exclusivo, complementação e continuidade | Guia Alimentar <2 anos, 2019 | P0 | approved |
| CHI-AM-002 | Criança | Aleitamento | Pega e posicionamento | PRC | alinhamento, boca ampla, maior aréola inferior visível, queixo tocando a mama | Guia Alimentar <2 anos, 2019 | P1 | approved |
| CHI-TP-001 | Criança | Teste do pezinho | Área segura no calcanhar | ANA | laterais plantares; evitar centro; pé abaixo do coração | Manual de Triagem Neonatal, 2016 | P0 | approved |
| CHI-TP-002 | Criança | Teste do pezinho | Coleta em cinco quadros | PRC | posição, álcool 70%, secar, punção lateral, preencher papel e secar | Manual de Triagem Neonatal, 2016 | P1 | approved |
| ETH-ATR-001 | Ética | Atribuições | Técnico × privativo do enfermeiro | CMP | programação, execução, supervisão e atos privativos | Lei 7.498 + Decreto 94.406 | P0 | approved |
| ETH-ATR-002 | Ética | Atribuições | Cadeia de orientação e supervisão | FLX | enfermeiro orienta/supervisiona; técnico executa no escopo | Lei 7.498, art. 15 | P1 | approved |
| ETH-COD-001 | Ética | Código de Ética | Cinco capítulos e temas-chave | MMP | direitos, deveres, proibições, infrações/penalidades, aplicação | Cofen 564/2017 | P0 | approved |
| ETH-COD-002 | Ética | Código de Ética | Fluxo de prescrição problemática | FLX | sem assinatura; ilegível/erro; urgência; esclarecer e registrar | Cofen 564/2017, art. 46 | P1 | approved |
| CAL-GOT-001 | Cálculos | Gotejamento | Gotas × microgotas | FRM | 1 mL=20 gotas=60 microgotas; duas fórmulas | Coren-SP, Cálculo Seguro I | P0 | approved |
| CAL-GOT-002 | Cálculos | Gotejamento | Exemplo resolvido | EXR | 500 mL/8 h → 21 gotas/min; aviso educacional | Coren-SP, Cálculo Seguro I | P1 | approved |
| CAL-REG-001 | Cálculos | Regra de três | Tenho → quero → resolvo | FRM | unidades alinhadas e multiplicação cruzada | Coren-SP, Cálculo Seguro I | P0 | approved |
| CAL-REG-002 | Cálculos | Regra de três | Exemplo 500 mg/5 mL | EXR | 150×5÷500=1,5 mL; aviso educacional | Coren-SP, Cálculo Seguro I | P1 | approved |

## E. Prioridades

- P0: 16 ativos aprovados, um por tema publicado.
- P1: 12 ativos aprovados que aprofundam seções de alto ganho visual.
- Bloqueado: `URG-RCP-001`; não deve ser gerado nem integrado até a fonte AHA 2025 ser lida e o conteúdo mudar para `published`.
- P2: futuras anatomias e procedimentos citados no briefing, mas ainda sem tópico, conteúdo e fonte no aplicativo. Permanecem fora da produção para evitar um sistema paralelo.

## F. Estrutura técnica

```text
public/content/visual/
  sus/
  fundamentos/
  biosseguranca/
  urgencia-e-emergencia/
  saude-da-mulher/
  saude-da-crianca/
  etica-e-legislacao/
  calculos-de-enfermagem/
src/vertical/content/visual-assets.ts
docs/biblioteca-visual-enfermagem.md
docs/prompts-visuais.md
```

Arquivos conceituais e matemáticos são SVG. Ilustrações clínicas têm uma base WebP e labels em metadados relativos. O manifesto é a única fonte de paths e associa cada ativo ao `topicSlug` existente.

### Modelo de metadados

```ts
type VisualAsset = {
  id: string;
  topicSlug: string;
  category: string;
  family: "anatomy" | "functional" | "mindmap" | "flow" | "procedure" | "compare" | "formula" | "exercise" | "timeline" | "synthesis";
  priority: "P0" | "P1" | "P2";
  status: "planned" | "research_required" | "review_required" | "approved" | "generated" | "integrated";
  asset: string;
  width: number;
  height: number;
  alt: string;
  description: string;
  sourceRefs: string[];
  labels?: { text: string; x: number; y: number; targetX: number; targetY: number; tone?: string }[];
};
```

## G. Templates mestres de prompt

### Ilustração científica

```text
Use case: scientific-educational
Asset type: base de ilustração para atlas de revisão de técnico de enfermagem
Primary request: ilustração científica educacional de [ASSUNTO], em [VISTA], mostrando somente [ESTRUTURAS/AÇÕES].
Scene/backdrop: fundo branco puro, sem cenário e sem textura.
Style/medium: ilustração editorial de livro científico moderno, traço limpo, cores naturais e didáticas, luz plana.
Composition/framing: assunto centralizado, margem ampla e áreas laterais livres para labels e setas em SVG.
Constraints: anatomia proporcional; uma ação clara por quadro; sem texto incorporado; sem números; sem logotipo; sem marca-d'água.
Avoid: cartoon infantil, gore, sexualização, 3D cinematográfico, órgãos ou membros extras, duplicações, mãos deformadas, decoração.
```

### Mapa/fluxo determinístico

```text
Criar em SVG 1200×900, fundo branco, título e labels em português renderizados como texto vetorial. Usar hierarquia [HUB/FLOW/COMPARE], cor da categoria somente em bordas, setas e badges, conectores sem cruzamentos, fonte sans-serif legível, uma ideia por cartão, e descrição acessível. Não usar fotografia, textura, gradiente decorativo ou texto em curvas.
```

### Procedimento

```text
Use case: scientific-educational
Asset type: sequência educacional de procedimento
Primary request: [N] quadros mostrando [PROCEDIMENTO], uma ação inequívoca por quadro.
Style/medium: manual profissional ilustrado, proporcional, sem dramatização.
Composition/framing: quadros alinhados, fundo branco e espaço superior para numeração SVG.
Constraints: técnica visível; equipamentos coerentes; sem texto incorporado; mãos anatomicamente corretas.
```

### Negative padrão

```text
Sem fundo colorido; sem cenário hospitalar; sem texto rasterizado; sem watermark; sem logo; sem anatomia deformada; sem estruturas extras ou duplicadas; sem proporções impossíveis; sem cartoon infantil; sem gore; sem sangue desnecessário; sem sexualização; sem arte abstrata; sem decoração.
```

## J. Checklist de QA

### Científico

- [ ] O ativo corresponde ao conteúdo publicado e à fonte indicada.
- [ ] Nenhuma estrutura, etapa, prazo, número ou relação foi inventada.
- [ ] Anatomia, lateralidade, posição e sequência são coerentes.
- [ ] O alvo de cada seta é inequívoco.
- [ ] O visual não sugere decisão clínica em tempo real.
- [ ] Tema `review_required` não foi produzido.

### Visual

- [ ] Fundo `#FFFFFF`, sem cenário e sem resíduos nas margens.
- [ ] Conteúdo integralmente dentro da área segura.
- [ ] Contornos nítidos, sem duplicações ou mãos deformadas.
- [ ] Labels e fórmulas são SVG/HTML e permanecem legíveis a 360 px.
- [ ] Setas não cruzam labels nem ocultam a estrutura.
- [ ] Paleta e espessuras seguem esta Bíblia Visual.
- [ ] `alt`, descrição e equivalente textual existem.
- [ ] Arquivo, manifesto e tópico usam o mesmo ID semântico.
