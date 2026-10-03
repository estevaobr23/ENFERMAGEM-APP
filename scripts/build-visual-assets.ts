import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

type Tone = "blue" | "teal" | "green" | "amber" | "rose" | "violet" | "orange" | "slate";
type Panel = { title: string; lines: string[]; tone?: Tone; badge?: string };
type Asset = {
  id: string;
  category: string;
  file: string;
  title: string;
  subtitle: string;
  tone: Tone;
  layout: "hub" | "flow" | "compare" | "stack";
  center?: string;
  panels: Panel[];
  footnote?: string;
};
type OverlayLabel = { text: string; x: number; y: number; targetX: number; targetY: number; tone: Tone };
type RasterOverlay = {
  id: string;
  category: string;
  file: string;
  base: string;
  title: string;
  description: string;
  labels: OverlayLabel[];
};

const colors: Record<Tone, { main: string; pale: string; dark: string }> = {
  blue: { main: "#2563EB", pale: "#EFF6FF", dark: "#1E3A8A" },
  teal: { main: "#0F9F95", pale: "#F0FDFA", dark: "#115E59" },
  green: { main: "#16A34A", pale: "#F0FDF4", dark: "#166534" },
  amber: { main: "#D97706", pale: "#FFFBEB", dark: "#92400E" },
  rose: { main: "#E11D48", pale: "#FFF1F2", dark: "#9F1239" },
  violet: { main: "#7C3AED", pale: "#F5F3FF", dark: "#5B21B6" },
  orange: { main: "#EA580C", pale: "#FFF7ED", dark: "#9A3412" },
  slate: { main: "#475569", pale: "#F8FAFC", dark: "#1E293B" },
};

const assets: Asset[] = [
  {
    id: "SUS-PRI-001", category: "sus", file: "sus-principios-artigo-7-mapa.svg", title: "Princípios do SUS", subtitle: "Lei 8.080/1990 · art. 7º", tone: "blue", layout: "hub", center: "ART. 7º",
    panels: [
      { title: "Acesso", lines: ["Universalidade", "Igualdade sem privilégios"], tone: "blue", badge: "01" },
      { title: "Cuidado", lines: ["Integralidade", "Prevenir + curar", "Resolutividade"], tone: "teal", badge: "02" },
      { title: "Informação", lines: ["Direito à informação", "Epidemiologia orienta"], tone: "violet", badge: "03" },
      { title: "Organização", lines: ["Descentralização", "Regionalização", "Hierarquização"], tone: "amber", badge: "04" },
      { title: "Sociedade", lines: ["Participação da comunidade", "Atenção humanizada"], tone: "green", badge: "05" },
    ], footnote: "Atenção de prova: o texto do art. 7º usa igualdade, não equidade.",
  },
  {
    id: "SUS-PAR-001", category: "sus", file: "sus-conferencia-conselho-comparativo.svg", title: "Participação da comunidade", subtitle: "Conferência × Conselho de Saúde", tone: "blue", layout: "compare",
    panels: [
      { title: "Conferência de Saúde", lines: ["A cada 4 anos", "Avalia a situação de saúde", "Propõe diretrizes", "Representa segmentos sociais"], tone: "blue", badge: "C" },
      { title: "Conselho de Saúde", lines: ["Permanente e deliberativo", "Formula estratégias", "Controla a execução", "Decisões homologadas"], tone: "green", badge: "CS" },
    ], footnote: "Usuários = metade: paridade em relação ao conjunto dos demais segmentos.",
  },
  {
    id: "SUS-PAR-002", category: "sus", file: "sus-requisitos-recursos-fluxo.svg", title: "Recebimento de recursos", subtitle: "Requisitos do art. 4º da Lei 8.142", tone: "blue", layout: "hub", center: "RECURSOS",
    panels: [
      { title: "Fundo de Saúde", lines: ["Estrutura financeira"], tone: "blue", badge: "1" },
      { title: "Conselho de Saúde", lines: ["Composição paritária"], tone: "green", badge: "2" },
      { title: "Plano de Saúde", lines: ["Planejamento formal"], tone: "violet", badge: "3" },
      { title: "Relatório de Gestão", lines: ["Prestação de contas"], tone: "amber", badge: "4" },
      { title: "Contrapartida", lines: ["Recursos no orçamento"], tone: "orange", badge: "5" },
      { title: "Comissão de PCCS", lines: ["Plano de carreira, cargos", "e salários"], tone: "slate", badge: "6" },
    ], footnote: "Mapa de revisão legal; consulte a redação integral da Lei 8.142/1990.",
  },
  {
    id: "FUN-MED-001", category: "fundamentos", file: "fundamentos-nove-certos-fluxo.svg", title: "Os 9 certos", subtitle: "Antes, durante e depois de administrar", tone: "teal", layout: "flow",
    panels: [
      { title: "Quem e o quê", lines: ["1 · Paciente certo", "2 · Medicamento certo", "8 · Forma certa"], tone: "teal", badge: "A" },
      { title: "Como e quando", lines: ["3 · Via certa", "4 · Hora certa", "5 · Dose certa"], tone: "blue", badge: "B" },
      { title: "Depois", lines: ["6 · Registro certo", "7 · Orientação correta", "9 · Resposta certa"], tone: "green", badge: "C" },
    ], footnote: "A numeração preserva a ordem adotada pelo protocolo.",
  },
  {
    id: "BIO-HM-002", category: "biosseguranca", file: "biosseguranca-alcool-agua-sabonete-comparativo.svg", title: "Como higienizar as mãos?", subtitle: "Preparação alcoólica × água e sabonete", tone: "green", layout: "compare",
    panels: [
      { title: "Preparação alcoólica", lines: ["Mãos não visivelmente sujas", "Friccionar por 20–30 s", "Deixar secar naturalmente"], tone: "green", badge: "20–30 s" },
      { title: "Água e sabonete", lines: ["Sujidade visível", "Sangue, fluidos ou excreções", "Higienizar por 40–60 s"], tone: "blue", badge: "40–60 s" },
    ], footnote: "Sujidade visível → água e sabonete.",
  },
  {
    id: "BIO-PNSP-001", category: "biosseguranca", file: "biosseguranca-pnsp-nsp-notificacao-fluxo.svg", title: "Segurança do paciente", subtitle: "Do conceito à notificação", tone: "green", layout: "flow",
    panels: [
      { title: "Conceitos", lines: ["Incidente: poderia causar ou causou dano", "Evento adverso: incidente com dano", "Segurança: risco no mínimo aceitável"], tone: "green", badge: "1" },
      { title: "Estrutura", lines: ["Direção constitui o NSP", "NSP elabora o PSP", "Implanta protocolos"], tone: "blue", badge: "2" },
      { title: "Notificação", lines: ["Mensal: até o 15º dia útil", "Óbito: em até 72 h"], tone: "rose", badge: "3" },
    ], footnote: "Material educacional de revisão; não é ferramenta de decisão clínica.",
  },
  {
    id: "BIO-PNSP-002", category: "biosseguranca", file: "biosseguranca-psp-protocolos-sintese.svg", title: "Plano de Segurança do Paciente", subtitle: "Núcleos de ação previstos na RDC 36", tone: "green", layout: "hub", center: "PSP",
    panels: [
      { title: "Identificação", lines: ["Paciente certo"], tone: "blue", badge: "ID" },
      { title: "Higiene das mãos", lines: ["Prevenir IRAS"], tone: "green", badge: "HM" },
      { title: "Cirurgia segura", lines: ["Verificações"], tone: "slate", badge: "CS" },
      { title: "Medicamentos", lines: ["Prescrição e uso"], tone: "teal", badge: "MED" },
      { title: "Sangue", lines: ["Hemocomponentes"], tone: "rose", badge: "HEM" },
      { title: "Quedas e UPP", lines: ["Prevenção"], tone: "amber", badge: "Q" },
      { title: "Infecções", lines: ["Prevenção e controle"], tone: "orange", badge: "IRAS" },
      { title: "Comunicação", lines: ["Paciente, família e equipe"], tone: "violet", badge: "COM" },
    ], footnote: "Síntese visual do art. 8º; a lista legal completa permanece na fonte.",
  },
  {
    id: "URG-RUE-001", category: "urgencia-e-emergencia", file: "urgencia-rue-oito-componentes-fluxo.svg", title: "RUE — 8 componentes", subtitle: "Rede de Atenção às Urgências", tone: "rose", layout: "flow",
    panels: [
      { title: "Antes da urgência", lines: ["Promoção, prevenção e vigilância", "Atenção Básica"], tone: "green", badge: "1–2" },
      { title: "Chegar rápido", lines: ["SAMU 192 + Regulação", "Força Nacional de Saúde"], tone: "rose", badge: "3–5" },
      { title: "Estabilizar", lines: ["Sala de Estabilização", "UPA 24 h e serviços 24 h"], tone: "amber", badge: "4–6" },
      { title: "Continuar o cuidado", lines: ["Hospitalar", "Atenção Domiciliar"], tone: "blue", badge: "7–8" },
    ], footnote: "A disposição é didática; não representa ordem clínica obrigatória.",
  },
  {
    id: "URG-RUE-002", category: "urgencia-e-emergencia", file: "urgencia-rue-diretrizes-mapa.svg", title: "Diretrizes da RUE", subtitle: "Portaria 1.600/2011 · art. 2º", tone: "rose", layout: "hub", center: "RUE",
    panels: [
      { title: "Porta de entrada", lines: ["Acolhimento", "Classificação de risco"], tone: "rose", badge: "01" },
      { title: "Para todos", lines: ["Universalidade", "Equidade", "Integralidade"], tone: "blue", badge: "02" },
      { title: "Em rede", lines: ["Regionalização", "Acesso regulado", "Serviços integrados"], tone: "amber", badge: "03" },
      { title: "Jeito de cuidar", lines: ["Humanização", "Equipe multiprofissional", "Linhas de cuidado"], tone: "green", badge: "04" },
    ], footnote: "Aqui a portaria usa equidade — diferente do texto do art. 7º da Lei 8.080.",
  },
  {
    id: "WOM-IG-002", category: "saude-da-mulher", file: "mulher-idade-gestacional-escolha-metodo.svg", title: "Idade gestacional", subtitle: "Qual informação está disponível?", tone: "violet", layout: "flow",
    panels: [
      { title: "DUM certa", lines: ["Dias até a consulta ÷ 7", "ou disco gestograma"], tone: "violet", badge: "1" },
      { title: "Só o período do mês", lines: ["Início → dia 5", "Meio → dia 15", "Fim → dia 25"], tone: "blue", badge: "2" },
      { title: "Sem data", lines: ["Altura uterina e avaliação", "USG precoce se não determinar"], tone: "amber", badge: "3" },
    ], footnote: "Mapa de estudo baseado no CAB 32; não substitui avaliação pré-natal.",
  },
  {
    id: "WOM-DPP-001", category: "saude-da-mulher", file: "mulher-naegele-regra-visual.svg", title: "Regra de Näegele", subtitle: "DUM → data provável do parto", tone: "violet", layout: "flow",
    panels: [
      { title: "Dia", lines: ["Dia da DUM + 7"], tone: "violet", badge: "+7" },
      { title: "Mês", lines: ["Abr–dez: −3", "Jan–mar: +9"], tone: "blue", badge: "±" },
      { title: "Ajuste", lines: ["Dias excedentes vão ao mês seguinte", "Ajustar o ano"], tone: "amber", badge: "↪" },
    ], footnote: "A gestação média considerada é 280 dias (40 semanas) a partir da DUM.",
  },
  {
    id: "WOM-DPP-002", category: "saude-da-mulher", file: "mulher-naegele-exemplo-27-01.svg", title: "Regra de Näegele — exemplo", subtitle: "Como 27/01 chega a 03/11", tone: "violet", layout: "stack",
    panels: [
      { title: "1 · Dado", lines: ["DUM = 27/01"], tone: "violet" },
      { title: "2 · Somar 7 dias", lines: ["27 + 7 = 34"], tone: "blue" },
      { title: "3 · Ajustar o mês", lines: ["34 − 31 = 3", "1 + 9 + 1 = 11"], tone: "amber" },
      { title: "4 · Resultado", lines: ["DPP = 03/11"], tone: "green" },
    ], footnote: "Exemplo do Caderno de Atenção Básica nº 32.",
  },
  {
    id: "CHI-AM-001", category: "saude-da-crianca", file: "crianca-aleitamento-linha-tempo.svg", title: "Aleitamento materno", subtitle: "Da primeira hora aos 2 anos ou mais", tone: "amber", layout: "flow",
    panels: [
      { title: "1ª hora de vida", lines: ["Iniciar a amamentação", "Contato e acolhimento"], tone: "amber", badge: "1 h" },
      { title: "0 a 6 meses", lines: ["Somente leite materno", "Sem água, chá ou outros leites", "Livre demanda"], tone: "green", badge: "0–6" },
      { title: "6 meses a 2+ anos", lines: ["Leite materno continua", "Alimentação complementar", "Sem prazo máximo rígido"], tone: "blue", badge: "2+" },
    ], footnote: "Mesmo em dias quentes, a amamentação exclusiva dispensa água.",
  },
  {
    id: "CHI-AM-002", category: "saude-da-crianca", file: "crianca-aleitamento-pega-posicionamento.svg", title: "Pega e posicionamento", subtitle: "Sinais visuais para orientar a mamada", tone: "amber", layout: "flow",
    panels: [
      { title: "Corpo alinhado", lines: ["Orelha, ombro e quadril", "na mesma direção", "Corpo voltado para a mãe"], tone: "amber", badge: "1" },
      { title: "Boca e lábios", lines: ["Boca bem aberta", "Lábios virados para fora"], tone: "green", badge: "2" },
      { title: "Queixo e aréola", lines: ["Queixo toca a mama", "Mais aréola visível acima", "do que abaixo"], tone: "blue", badge: "3" },
    ], footnote: "Sinais de orientação; dor persistente exige avaliação profissional.",
  },
  {
    id: "ETH-ATR-001", category: "etica-e-legislacao", file: "etica-tecnico-enfermeiro-comparativo.svg", title: "Quem faz o quê?", subtitle: "Lei 7.498/1986 + Decreto 94.406/1987", tone: "slate", layout: "compare",
    panels: [
      { title: "Técnico de Enfermagem", lines: ["Participa da programação", "Executa ações, exceto privativas", "Assiste o enfermeiro", "Sob orientação e supervisão"], tone: "teal", badge: "TEC" },
      { title: "Privativo do Enfermeiro", lines: ["Consulta de enfermagem", "Prescrição da assistência", "Cuidados diretos a graves", "Maior complexidade técnica"], tone: "slate", badge: "ENF" },
    ], footnote: "Em instituições e programas de saúde, o técnico atua sob orientação e supervisão do enfermeiro.",
  },
  {
    id: "ETH-ATR-002", category: "etica-e-legislacao", file: "etica-supervisao-cadeia-fluxo.svg", title: "Orientação e supervisão", subtitle: "Responsabilidades conectadas", tone: "slate", layout: "flow",
    panels: [
      { title: "Enfermeiro", lines: ["Orienta", "Supervisiona", "Assume atos privativos"], tone: "slate", badge: "1" },
      { title: "Técnico", lines: ["Executa dentro do escopo", "Participa da assistência", "Comunica e registra"], tone: "teal", badge: "2" },
      { title: "Auxiliar", lines: ["Atividades simples", "Sob supervisão"], tone: "blue", badge: "3" },
    ], footnote: "O fluxo representa responsabilidades legais, não valor pessoal ou profissional.",
  },
  {
    id: "ETH-COD-001", category: "etica-e-legislacao", file: "etica-codigo-cinco-capitulos-mapa.svg", title: "Código de Ética", subtitle: "Resolução Cofen 564/2017", tone: "slate", layout: "hub", center: "CÓDIGO",
    panels: [
      { title: "Direitos", lines: ["Capítulo I"], tone: "blue", badge: "I" },
      { title: "Deveres", lines: ["Capítulo II", "Sigilo · art. 52"], tone: "green", badge: "II" },
      { title: "Proibições", lines: ["Capítulo III", "Medicamentos · art. 78"], tone: "rose", badge: "III" },
      { title: "Infrações e penalidades", lines: ["Capítulo IV", "Art. 108"], tone: "amber", badge: "IV" },
      { title: "Aplicação", lines: ["Capítulo V", "Competências · art. 109"], tone: "slate", badge: "V" },
    ], footnote: "Prescrição problemática: revisar também o art. 46.",
  },
  {
    id: "ETH-COD-002", category: "etica-e-legislacao", file: "etica-prescricao-problematica-fluxo.svg", title: "Prescrição problemática", subtitle: "Fluxo de revisão do art. 46", tone: "slate", layout: "flow",
    panels: [
      { title: "Sem assinatura/registro", lines: ["Recusar a execução", "Exceção: urgência/emergência"], tone: "rose", badge: "A" },
      { title: "Erro ou ilegível", lines: ["Esclarecer com o prescritor", "Registrar no prontuário"], tone: "amber", badge: "B" },
      { title: "Regular", lines: ["Seguir normas", "Realizar checagens de segurança"], tone: "green", badge: "C" },
    ], footnote: "Material de revisão legal; não substitui normas institucionais.",
  },
  {
    id: "CAL-GOT-001", category: "calculos-de-enfermagem", file: "calculos-gotas-microgotas-formulas.svg", title: "Gotejamento", subtitle: "1 mL = 20 gotas = 60 microgotas", tone: "orange", layout: "compare",
    panels: [
      { title: "Gotas (macrogotas)", lines: ["gotas/min = V ÷ (T × 3)", "V em mL", "T em horas"], tone: "orange", badge: "20" },
      { title: "Microgotas", lines: ["microgotas/min = V ÷ T", "V em mL", "T em horas"], tone: "blue", badge: "60" },
    ], footnote: "Exercício educacional — não programar infusão real.",
  },
  {
    id: "CAL-GOT-002", category: "calculos-de-enfermagem", file: "calculos-gotejamento-exemplo-500-8.svg", title: "Gotejamento — exercício", subtitle: "500 mL em 8 horas", tone: "orange", layout: "stack",
    panels: [
      { title: "1 · Dados", lines: ["V = 500 mL · T = 8 h"], tone: "orange" },
      { title: "2 · Fórmula", lines: ["gotas/min = V ÷ (T × 3)"], tone: "blue" },
      { title: "3 · Substituir", lines: ["500 ÷ (8 × 3)"], tone: "violet" },
      { title: "4 · Calcular", lines: ["500 ÷ 24 = 20,83"], tone: "amber" },
      { title: "5 · Arredondar", lines: ["21 gotas/min"], tone: "green" },
    ], footnote: "Exercício educacional — siga prescrição e protocolo institucional na prática.",
  },
  {
    id: "CAL-REG-001", category: "calculos-de-enfermagem", file: "calculos-regra-tres-formula.svg", title: "Regra de três", subtitle: "Unidade igual embaixo de unidade igual", tone: "orange", layout: "flow",
    panels: [
      { title: "Tenho", lines: ["Quantidade disponível", "Volume disponível"], tone: "orange", badge: "1" },
      { title: "Quero", lines: ["Quantidade prescrita", "x mL"], tone: "blue", badge: "2" },
      { title: "Resolvo", lines: ["x = prescrito × volume", "÷ quantidade disponível"], tone: "green", badge: "3" },
    ], footnote: "Regra de três direta; confira sempre as unidades.",
  },
  {
    id: "CAL-REG-002", category: "calculos-de-enfermagem", file: "calculos-regra-tres-exemplo-500-150.svg", title: "Regra de três — exercício", subtitle: "Quanto aspirar?", tone: "orange", layout: "stack",
    panels: [
      { title: "1 · Tenho", lines: ["500 mg — 5 mL"], tone: "orange" },
      { title: "2 · Quero", lines: ["150 mg — x mL"], tone: "blue" },
      { title: "3 · Multiplico e divido", lines: ["x = 150 × 5 ÷ 500"], tone: "violet" },
      { title: "4 · Resultado", lines: ["x = 1,5 mL"], tone: "green" },
    ], footnote: "Valores fictícios de estudo — não aplicar diretamente a um paciente.",
  },
];

const rasterOverlays: RasterOverlay[] = [
  {
    id: "FUN-UPP-001", category: "fundamentos", file: "fundamentos-upp-pontos-pressao-mapa.svg", base: "fundamentos-upp-pontos-pressao.webp",
    title: "Pontos de pressão e reposicionamento", description: "Duas posições laterais com áreas de maior pressão e apoio para redistribuição.",
    labels: [
      { text: "Occipital", x: 120, y: 52, targetX: 130, targetY: 315, tone: "teal" },
      { text: "Cotovelo", x: 350, y: 52, targetX: 350, targetY: 345, tone: "teal" },
      { text: "Sacro / nádega", x: 680, y: 52, targetX: 695, targetY: 340, tone: "amber" },
      { text: "Tornozelo", x: 1115, y: 52, targetX: 1200, targetY: 338, tone: "teal" },
      { text: "Calcâneo", x: 1340, y: 52, targetX: 1338, targetY: 348, tone: "amber" },
      { text: "Apoios redistribuem a pressão", x: 720, y: 1018, targetX: 700, targetY: 765, tone: "green" },
    ],
  },
  {
    id: "FUN-UPP-002", category: "fundamentos", file: "fundamentos-upp-estagios-mapa.svg", base: "fundamentos-upp-estagios.webp",
    title: "Estágios da lesão por pressão", description: "Comparação esquemática entre estágios I a IV, inclassificável e lesão tissular profunda.",
    labels: [
      { text: "Estágio I", x: 238, y: 48, targetX: 240, targetY: 155, tone: "rose" },
      { text: "Estágio II", x: 724, y: 48, targetX: 724, targetY: 175, tone: "rose" },
      { text: "Estágio III", x: 1205, y: 48, targetX: 1205, targetY: 205, tone: "orange" },
      { text: "Estágio IV", x: 238, y: 560, targetX: 238, targetY: 690, tone: "rose" },
      { text: "Inclassificável", x: 724, y: 560, targetX: 724, targetY: 690, tone: "slate" },
      { text: "Lesão tissular profunda", x: 1205, y: 560, targetX: 1205, targetY: 680, tone: "violet" },
    ],
  },
  {
    id: "BIO-HM-001", category: "biosseguranca", file: "biosseguranca-higiene-maos-cinco-momentos-mapa.svg", base: "biosseguranca-higiene-maos-cinco-momentos.webp",
    title: "Os cinco momentos para higiene das mãos", description: "Profissional, paciente e superfícies organizados em cinco situações de cuidado.",
    labels: [
      { text: "1 · Antes de tocar o paciente", x: 240, y: 48, targetX: 238, targetY: 240, tone: "blue" },
      { text: "2 · Antes de procedimento asséptico", x: 1170, y: 48, targetX: 1170, targetY: 235, tone: "green" },
      { text: "3 · Após risco de fluidos", x: 225, y: 1032, targetX: 225, targetY: 760, tone: "green" },
      { text: "4 · Após tocar o paciente", x: 720, y: 1032, targetX: 720, targetY: 835, tone: "blue" },
      { text: "5 · Após tocar superfícies próximas", x: 1190, y: 1032, targetX: 1190, targetY: 770, tone: "green" },
    ],
  },
  {
    id: "WOM-IG-001", category: "saude-da-mulher", file: "mulher-altura-uterina-12-16-20-semanas-mapa.svg", base: "mulher-altura-uterina-12-16-20-semanas.webp",
    title: "Marcos de altura uterina", description: "Comparação dos marcos anatômicos aproximados em 12, 16 e 20 semanas.",
    labels: [
      { text: "12 semanas · fundo na sínfise púbica", x: 245, y: 54, targetX: 315, targetY: 520, tone: "violet" },
      { text: "16 semanas · entre sínfise e umbigo", x: 724, y: 54, targetX: 745, targetY: 390, tone: "blue" },
      { text: "20 semanas · na altura do umbigo", x: 1200, y: 54, targetX: 1160, targetY: 250, tone: "amber" },
    ],
  },
  {
    id: "CHI-TP-001", category: "saude-da-crianca", file: "crianca-teste-pezinho-areas-seguras-mapa.svg", base: "crianca-teste-pezinho-areas-seguras.webp",
    title: "Áreas laterais do calcanhar", description: "Regiões plantares laterais destacadas e posição do calcanhar abaixo do coração.",
    labels: [
      { text: "Área lateral", x: 260, y: 1015, targetX: 360, targetY: 790, tone: "green" },
      { text: "Evitar a região central", x: 530, y: 1015, targetX: 515, targetY: 800, tone: "rose" },
      { text: "Área lateral", x: 770, y: 1015, targetX: 650, targetY: 790, tone: "green" },
      { text: "Calcanhar abaixo do coração", x: 1180, y: 1015, targetX: 1190, targetY: 790, tone: "blue" },
    ],
  },
  {
    id: "CHI-TP-002", category: "saude-da-crianca", file: "crianca-teste-pezinho-procedimento-mapa.svg", base: "crianca-teste-pezinho-procedimento.webp",
    title: "Coleta do teste do pezinho", description: "Sequência visual de posicionamento, assepsia, secagem, punção lateral e papel-filtro.",
    labels: [
      { text: "1 · Posicionar", x: 145, y: 95, targetX: 205, targetY: 610, tone: "blue" },
      { text: "2 · Álcool 70%", x: 430, y: 95, targetX: 470, targetY: 520, tone: "green" },
      { text: "3 · Esperar secar", x: 720, y: 95, targetX: 720, targetY: 520, tone: "amber" },
      { text: "4 · Punção lateral", x: 1005, y: 95, targetX: 1000, targetY: 690, tone: "rose" },
      { text: "5 · Preencher e secar", x: 1300, y: 95, targetX: 1290, targetY: 705, tone: "green" },
    ],
  },
];

function esc(value: string) {
  return value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;");
}

function textLines(lines: string[], x: number, y: number, size = 23, color = "#334155", gap = 31, anchor: "start" | "middle" = "start") {
  return `<text x="${x}" y="${y}" text-anchor="${anchor}" font-size="${size}" font-weight="500" fill="${color}">${lines.map((line, i) => `<tspan x="${x}" dy="${i === 0 ? 0 : gap}">${esc(line)}</tspan>`).join("")}</text>`;
}

function panel(panelData: Panel, x: number, y: number, w: number, h: number) {
  const tone = colors[panelData.tone ?? "slate"];
  const compact = h <= 160;
  const badgeWidth = panelData.badge ? Math.max(54, panelData.badge.length * 15 + 24) : 0;
  const badge = panelData.badge
    ? `<rect x="${x + 22}" y="${y + 18}" width="${badgeWidth}" height="42" rx="21" fill="${tone.main}"/><text x="${x + 22 + badgeWidth / 2}" y="${y + 46}" text-anchor="middle" font-size="20" font-weight="800" fill="#FFFFFF">${esc(panelData.badge)}</text>`
    : "";
  const titleX = panelData.badge ? x + 40 + badgeWidth : x + 26;
  const titleY = y + (compact ? 47 : 54);
  const linesY = y + (compact ? 86 : 104);
  return `<g>
    <rect x="${x}" y="${y}" width="${w}" height="${h}" rx="24" fill="${tone.pale}" stroke="${tone.main}" stroke-width="3"/>
    ${badge}
    <text x="${titleX}" y="${titleY}" font-size="${compact ? 24 : 28}" font-weight="800" fill="${tone.dark}">${esc(panelData.title)}</text>
    ${textLines(panelData.lines.map((line) => `• ${line}`), x + 30, linesY, compact ? 18 : 21, "#334155", compact ? 25 : 31)}
  </g>`;
}

function arrow(x1: number, y1: number, x2: number, y2: number, color: string) {
  return `<path d="M ${x1} ${y1} C ${(x1 + x2) / 2} ${y1}, ${(x1 + x2) / 2} ${y2}, ${x2} ${y2}" fill="none" stroke="${color}" stroke-width="4" marker-end="url(#arrow)"/>`;
}

function render(asset: Asset) {
  const tone = colors[asset.tone];
  let body = "";
  if (asset.layout === "compare") {
    body += panel(asset.panels[0], 76, 244, 490, 490);
    body += panel(asset.panels[1], 634, 244, 490, 490);
    body += `<circle cx="600" cy="488" r="34" fill="#FFFFFF" stroke="${tone.main}" stroke-width="3"/><text x="600" y="499" text-anchor="middle" font-size="28" font-weight="900" fill="${tone.dark}">×</text>`;
  } else if (asset.layout === "flow") {
    const count = asset.panels.length;
    const gap = 34;
    const w = count === 4 ? 252 : 338;
    const startX = count === 4 ? 54 : 58;
    const h = 470;
    asset.panels.forEach((p, i) => {
      const x = startX + i * (w + gap);
      body += panel(p, x, 255, w, h);
      if (i < count - 1) body += arrow(x + w + 5, 490, x + w + gap - 7, 490, tone.main);
    });
  } else if (asset.layout === "stack") {
    const count = asset.panels.length;
    const gap = 18;
    const h = count === 5 ? 100 : 122;
    const startY = 220;
    asset.panels.forEach((p, i) => {
      const y = startY + i * (h + gap);
      body += panel(p, 154, y, 892, h);
      if (i < count - 1) body += arrow(600, y + h + 2, 600, y + h + gap - 3, tone.main);
    });
  } else {
    const centerX = 600;
    const centerY = 490;
    const centerW = 230;
    const centerH = 132;
    const half = Math.ceil(asset.panels.length / 2);
    const left = asset.panels.slice(0, half);
    const right = asset.panels.slice(half);
    const cardW = 360;
    const cardH = asset.panels.length > 6 ? 132 : 154;
    const startYLeft = 212;
    const startYRight = 212;
    const gapLeft = Math.min(178, (535 - cardH) / Math.max(1, left.length - 1));
    const gapRight = Math.min(178, (535 - cardH) / Math.max(1, right.length - 1));
    left.forEach((p, i) => {
      const y = startYLeft + i * gapLeft;
      body += arrow(centerX - centerW / 2, centerY, 440, y + cardH / 2, colors[p.tone ?? asset.tone].main);
      body += panel(p, 60, y, cardW, cardH);
    });
    right.forEach((p, i) => {
      const y = startYRight + i * gapRight;
      body += arrow(centerX + centerW / 2, centerY, 760, y + cardH / 2, colors[p.tone ?? asset.tone].main);
      body += panel(p, 780, y, cardW, cardH);
    });
    body += `<rect x="${centerX - centerW / 2}" y="${centerY - centerH / 2}" width="${centerW}" height="${centerH}" rx="44" fill="${tone.main}"/>
      <text x="${centerX}" y="${centerY + 12}" text-anchor="middle" font-size="34" font-weight="900" fill="#FFFFFF">${esc(asset.center ?? "NÚCLEO")}</text>`;
  }

  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="900" viewBox="0 0 1200 900" role="img" aria-labelledby="title desc">
  <title id="title">${esc(asset.title)}</title>
  <desc id="desc">${esc(asset.subtitle)}. ${esc(asset.panels.map((p) => `${p.title}: ${p.lines.join(", ")}`).join(". "))}</desc>
  <defs>
    <marker id="arrow" viewBox="0 0 12 12" refX="10" refY="6" markerWidth="10" markerHeight="10" orient="auto-start-reverse"><path d="M 0 0 L 12 6 L 0 12 z" fill="context-stroke"/></marker>
    <filter id="shadow" x="-10%" y="-10%" width="120%" height="130%"><feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#0F172A" flood-opacity="0.08"/></filter>
  </defs>
  <rect width="1200" height="900" fill="#FFFFFF"/>
  <rect x="54" y="54" width="8" height="116" rx="4" fill="${tone.main}"/>
  <text x="88" y="100" font-family="Inter, Arial, sans-serif" font-size="46" font-weight="850" fill="#0F172A">${esc(asset.title)}</text>
  <text x="88" y="142" font-family="Inter, Arial, sans-serif" font-size="24" font-weight="500" fill="#475569">${esc(asset.subtitle)}</text>
  <g font-family="Inter, Arial, sans-serif">${body}</g>
  ${asset.footnote ? `<rect x="70" y="816" width="1060" height="56" rx="18" fill="#F8FAFC" stroke="#CBD5E1"/><text x="600" y="851" text-anchor="middle" font-family="Inter, Arial, sans-serif" font-size="20" font-weight="600" fill="#475569">${esc(asset.footnote)}</text>` : ""}
  <text x="1130" y="886" text-anchor="end" font-family="Inter, Arial, sans-serif" font-size="15" fill="#94A3B8">${asset.id}</text>
</svg>`;
}

function renderRasterOverlay(asset: RasterOverlay, embeddedBase: string) {
  const labels = asset.labels.map((label) => {
    const tone = colors[label.tone];
    const width = Math.min(390, Math.max(140, label.text.length * 12 + 44));
    const left = Math.max(18, Math.min(1448 - width - 18, label.x - width / 2));
    const centerX = left + width / 2;
    const fromY = label.y > label.targetY ? label.y - 25 : label.y + 25;
    return `<g>
      <path d="M ${centerX} ${fromY} C ${centerX} ${(fromY + label.targetY) / 2}, ${label.targetX} ${(fromY + label.targetY) / 2}, ${label.targetX} ${label.targetY}" fill="none" stroke="${tone.main}" stroke-width="4" marker-end="url(#arrow-${label.tone})"/>
      <circle cx="${label.targetX}" cy="${label.targetY}" r="8" fill="#FFFFFF" stroke="${tone.main}" stroke-width="4"/>
      <rect x="${left}" y="${label.y - 24}" width="${width}" height="48" rx="24" fill="#FFFFFF" fill-opacity="0.96" stroke="${tone.main}" stroke-width="3"/>
      <text x="${centerX}" y="${label.y + 8}" text-anchor="middle" font-family="Inter, Arial, sans-serif" font-size="21" font-weight="800" fill="${tone.dark}">${esc(label.text)}</text>
    </g>`;
  }).join("");
  const markers = Object.entries(colors).map(([tone, color]) => `<marker id="arrow-${tone}" viewBox="0 0 12 12" refX="10" refY="6" markerWidth="10" markerHeight="10" orient="auto"><path d="M 0 0 L 12 6 L 0 12 z" fill="${color.main}"/></marker>`).join("");
  return `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1448" height="1086" viewBox="0 0 1448 1086" role="img" aria-labelledby="title desc">
  <title id="title">${esc(asset.title)}</title>
  <desc id="desc">${esc(asset.description)}</desc>
  <defs>${markers}</defs>
  <rect width="1448" height="1086" fill="#FFFFFF"/>
  <image href="${embeddedBase}" xlink:href="${embeddedBase}" x="0" y="0" width="1448" height="1086" preserveAspectRatio="xMidYMid meet"/>
  ${labels}
  <text x="1428" y="1068" text-anchor="end" font-family="Inter, Arial, sans-serif" font-size="16" fill="#64748B">${asset.id}</text>
</svg>`;
}

async function main() {
  const root = path.join(process.cwd(), "public", "content", "visual");
  for (const asset of assets) {
    const dir = path.join(root, asset.category);
    await mkdir(dir, { recursive: true });
    await writeFile(path.join(dir, asset.file), render(asset), "utf8");
  }
  for (const asset of rasterOverlays) {
    const dir = path.join(root, asset.category);
    await mkdir(dir, { recursive: true });
    const baseBytes = await readFile(path.join(dir, asset.base));
    const embeddedBase = `data:image/webp;base64,${baseBytes.toString("base64")}`;
    await writeFile(path.join(dir, asset.file), renderRasterOverlay(asset, embeddedBase), "utf8");
  }
  console.log(`Generated ${assets.length} diagram SVGs and ${rasterOverlays.length} labeled raster overlays in ${root}`);
}

void main().catch((error: unknown) => {
  console.error(error);
  process.exitCode = 1;
});
