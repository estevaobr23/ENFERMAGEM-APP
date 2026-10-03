import type { TopicSeed } from "@/core/content/types";
import { mcq } from "../../helpers";
import { REVIEWED_V2, SRC, V2_REVIEW_NOTE, at } from "../../sources";

/* Fontes: [0] Coren-SP, Cálculo seguro vol. I ('Unidades de pesos, medidas e tempo', 'Formas de medida'); [1] vol. II ('Soro'). */

export const CONVERSOES: TopicSeed = {
  slug: "conversoes-de-unidades-e-medidas",
  title: "Conversões de unidades e medidas",
  description: "Grama e miligrama, litro e mililitro, horas e minutos, colheres, gotas e o que significa a porcentagem de um soro.",
  summary:
    "Quase todo erro de cálculo começa numa conversão. O Coren-SP lembra que, na enfermagem, usam-se o litro e o grama divididos por 1.000: 1 L = 1.000 mL e 1 g = 1.000 mg; e no tempo, 1 h = 60 min e 1 min = 60 s. Para multiplicar por 1.000, a vírgula anda três casas para a direita (0,5 g = 500 mg; 0,15 L = 150 mL); para dividir, anda para a esquerda — o método da 'escada' faz isso degrau a degrau. Nas formas de medida, os valores de colheres variam com o utensílio, mas as referências usadas são: colher de sopa 15 mL, de sobremesa 10 mL, de chá 5 mL e de café 2,5 a 3 mL. No gotejamento, os valores são padronizados no Brasil: 1 mL = 20 gotas = 60 microgotas, 1 gota = 3 microgotas e 1 gota = 1 macrogota; frascos-gotas de medicamentos podem fugir do padrão (o material cita um com 40 gotas por mL). A porcentagem de uma solução indica gramas em 100 mL: soro glicosado 5% tem 5 g de glicose em 100 mL, e soro fisiológico 0,9% tem 0,9 g de cloreto de sódio em 100 mL. Soluções isotônicas têm concentração igual ou próxima à do plasma; hipertônicas, maior; hipotônicas, menor. Para montar qualquer regra de três, unidade igual vai embaixo de unidade igual.",
  keyPoints: [
    "1 g = 1.000 mg · 1 L = 1.000 mL · 1 h = 60 min · 1 min = 60 s.",
    "× 1.000: vírgula 3 casas para a direita (0,5 g = 500 mg). ÷ 1.000: para a esquerda.",
    "Colher de sopa 15 mL · sobremesa 10 mL · chá 5 mL · café 2,5 a 3 mL.",
    "1 mL = 20 gotas = 60 microgotas; 1 gota = 3 microgotas (padrão brasileiro).",
    "Frasco-gotas de medicamento pode fugir do padrão: sempre conferir.",
    "Porcentagem de solução = gramas em 100 mL (SG 5% = 5 g/100 mL; SF 0,9% = 0,9 g/100 mL).",
    "Isotônica ≈ plasma · hipertônica > plasma · hipotônica < plasma.",
    "Unidade igual embaixo de unidade igual em toda regra de três.",
  ],
  map: {
    title: "Tabela de bolso",
    spec: {
      layout: "hub",
      center: "Converter antes de calcular",
      blocks: [
        { title: "Massa", tone: "orange", icon: "⚖️", items: ["1 g = 1.000 mg", "0,5 g = 500 mg"] },
        { title: "Volume", tone: "blue", icon: "🧪", items: ["1 L = 1.000 mL", "0,15 L = 150 mL"] },
        { title: "Tempo", tone: "slate", icon: "⏱️", items: ["1 h = 60 min", "1 min = 60 s"] },
        { title: "Gotas", tone: "teal", icon: "💧", items: ["1 mL = 20 gotas", "1 mL = 60 microgotas"] },
        { title: "Porcentagem", tone: "violet", icon: "％", items: ["g em 100 mL", "SF 0,9% = 0,9 g/100 mL"] },
      ],
    },
  },
  sections: [
    {
      id: "visao-geral",
      kind: "visao",
      title: "Converter primeiro, calcular depois",
      source: 0,
      blocks: [
        {
          type: "text",
          text: "Uma prescrição em ==gramas== e uma ampola em ==miligramas== não entram juntas na regra de três. O primeiro passo de todo cálculo é deixar ==tudo na mesma unidade==.",
        },
        {
          type: "callout",
          variant: "atencao",
          title: "Segurança",
          text: "O protocolo de medicamentos lembra que ==zero, vírgula e ponto== podem gerar doses 10 ou 100 vezes maiores. Conversão errada é exatamente esse erro.",
        },
      ],
    },
    {
      id: "massa-volume-tempo",
      kind: "conceito",
      title: "Massa, volume e tempo",
      source: 0,
      blocks: [
        {
          type: "compare",
          columns: ["Base", "Exemplos do material"],
          rows: [
            { label: "Massa", cells: ["1 g = ==1.000 mg==", "0,8 g = 800 mg · 0,2 g = 200 mg · 0,1 g = 100 mg"] },
            { label: "Volume", cells: ["1 L = ==1.000 mL==", "2 L = 2.000 mL · 0,6 L = 600 mL · 0,52 L = 520 mL"] },
            { label: "Tempo", cells: ["1 h = ==60 min==; 1 min = 60 s", "2 h 30 min = 150 min"] },
          ],
        },
      ],
    },
    {
      id: "escada",
      kind: "etapas",
      title: "A escada: andar com a vírgula",
      source: 0,
      blocks: [
        {
          type: "steps",
          items: [
            { title: "Grama → miligrama: desce 3 degraus", text: "Cada degrau multiplica por 10: a vírgula anda ==uma casa para a direita==.", why: "Três degraus = × 1.000." },
            { title: "Faltou algarismo? Completa com zero", text: "1,02 g → 10,2 → 102 → ==1.020 mg==." },
            { title: "Miligrama → grama: sobe 3 degraus", text: "Cada degrau divide por 10: a vírgula anda ==uma casa para a esquerda==. 250 mg → 0,25 g." },
            { title: "Vale para litro e mililitro", text: "1,5 L → 1.500 mL; 75 mL → 0,075 L." },
          ],
        },
        {
          type: "callout",
          variant: "atencao",
          title: "Erro de digitação da fonte",
          text: "O material traz '1,02 g corresponde a 1020g' — o correto é ==1.020 mg==.",
        },
      ],
    },
    {
      id: "formas-de-medida",
      kind: "classificacao",
      title: "Colheres e gotas",
      source: 0,
      blocks: [
        {
          type: "numbers",
          items: [
            { value: "15 mL", label: "colher de sopa" },
            { value: "10 mL", label: "colher de sobremesa" },
            { value: "5 mL", label: "colher de chá" },
            { value: "2,5–3 mL", label: "colher de café", note: "as antigas eram menores" },
            { value: "20", label: "gotas em 1 mL" },
            { value: "60", label: "microgotas em 1 mL" },
          ],
        },
        {
          type: "callout",
          variant: "dica",
          title: "Padrão só no Brasil",
          text: "Colher-medida varia com o utensílio. As conversões de gotejamento ==valem no Brasil==; frasco-gotas de medicamento pode fugir do padrão (o material cita um com ==40 gotas por mL==).",
        },
      ],
    },
    {
      id: "porcentagem",
      kind: "conceito",
      title: "O que significa a porcentagem do soro",
      source: 1,
      blocks: [
        { type: "definition", term: "Porcentagem de uma solução", text: "Quantos ==gramas de soluto em 100 mL==. SG 5% = 5 g de glicose em 100 mL; SG 10% = 10 g/100 mL; SF 0,9% = 0,9 g de NaCl em 100 mL." }
      ],
    },
    {
      id: "tonicidade",
      kind: "tecnico",
      title: "Soros: tonicidade e tipos",
      source: 1,
      blocks: [
        {
          type: "cards",
          items: [
            { title: "Isotônica", text: "Concentração ==igual ou próxima== à do plasma.", icon: "🟰", tone: "teal" },
            { title: "Hipertônica", text: "Concentração ==maior== que a do plasma.", icon: "⬆️", tone: "rose" },
            { title: "Hipotônica", text: "Concentração ==menor== que a do plasma.", icon: "⬇️", tone: "blue" },
          ],
        },
        {
          type: "checklist",
          title: "Soros mais usados (Coren-SP)",
          items: ["Soro glicosado 5% e 10%", "Soro fisiológico 0,9%", "Soro glicofisiológico", "Ringer com lactato ou ringer simples"],
        },
      ],
    },
    {
      id: "exercicios",
      kind: "pratica",
      title: "Exercícios resolvidos",
      source: 1,
      blocks: [
        { type: "example", title: "Quanto NaCl há no frasco?", given: ["SF 0,9%, frasco de 500 mL"], steps: ["0,9 g — 100 mL", "x g — 500 mL", "x = 0,9 × 500 ÷ 100 = 4,5 g"], answer: "4,5 g de cloreto de sódio" },
        { type: "example", title: "Quanto de glicose?", given: ["SG 5%, frasco de 250 mL"], steps: ["5 g — 100 mL", "x g — 250 mL", "x = 5 × 250 ÷ 100 = 12,5 g"], answer: "12,5 g de glicose" },
        { type: "example", title: "Converter antes", given: ["Prescrito: 0,5 g", "Disponível: ampola de 250 mg em 5 mL"], steps: ["0,5 g = 500 mg", "250 mg — 5 mL", "500 mg — x mL", "x = 500 × 5 ÷ 250 = 10 mL"], answer: "10 mL (duas ampolas)" },
      ],
    },
    {
      id: "caso",
      kind: "caso",
      title: "Situação-problema",
      source: 0,
      blocks: [
        {
          type: "case",
          title: "Xarope em casa",
          scenario: "Na alta, a prescrição diz '10 mL de xarope de 8/8 h'. A mãe pergunta quantas colheres de chá isso dá.",
          question: "Qual a equivalência pela referência do Coren-SP e qual o cuidado?",
          answer: "Duas colheres de chá (5 mL cada) — mas o ideal é usar o copo ou seringa dosadora, porque colheres variam conforme o utensílio.",
          reasoning: [
            "Colher de chá = 5 mL na referência do material.",
            "10 mL ÷ 5 mL = 2 colheres.",
            "O próprio material diz que os valores de colher-medida variam com o fabricante.",
            "O protocolo de medicamentos pede unidade do sistema métrico quando a medida é imprecisa.",
          ],
        },
      ],
    },
    {
      id: "como-a-banca-cobra",
      kind: "cobrado",
      title: "Como a banca cobra",
      source: 0,
      blocks: [
        {
          type: "traps",
          items: [
            { wrong: "0,5 g equivalem a 50 mg.", right: "0,5 g = ==500 mg==.", why: "× 1.000: a vírgula anda três casas." },
            { wrong: "1 mL = 60 gotas.", right: "1 mL = ==20 gotas== = 60 microgotas.", why: "60 é o número de microgotas." },
            { wrong: "SF 0,9% tem 0,9 g de NaCl por litro.", right: "0,9 g ==em 100 mL== (9 g por litro).", why: "Porcentagem = g em 100 mL." },
            { wrong: "Colher de sopa equivale a 5 mL.", right: "Sopa ==15 mL==; chá 5 mL.", why: "Referências do material." },
            { wrong: "2 h 30 min = 230 min.", right: "==150 min== (2 × 60 + 30).", why: "Converter horas em minutos multiplica por 60." },
            { wrong: "Solução hipertônica tem concentração menor que a do plasma.", right: "Hipertônica = ==maior== que o plasma.", why: "Hiper = acima; hipo = abaixo." },
            { wrong: "Todo frasco-gotas de medicamento segue 20 gotas por mL.", right: "Pode ==fugir do padrão==; conferir na bula ou no rótulo.", why: "O material cita medicamento com 40 gotas por mL." },
          ],
        },
      ],
    },
    {
      id: "conexoes",
      kind: "conexoes",
      title: "Conexões",
      blocks: [
        {
          type: "links",
          items: [
            { slug: "regra-de-tres-dose-e-diluicao", title: "Regra de três: quanto aspirar", why: "Onde as conversões são usadas." },
            { slug: "gotejamento-gotas-e-microgotas", title: "Gotejamento: gotas e microgotas", why: "Gotas, microgotas e minutos na fórmula." },
            { slug: "nove-certos-administracao-de-medicamentos", title: "Os 9 certos da administração de medicamentos", why: "Dose certa: atenção a zero, vírgula e ponto." },
          ],
        },
      ],
    },
  ],
  sources: [at(SRC.calculoSeguro1v2, "'Unidades de pesos, medidas e tempo', 'Escada' e 'Formas de medida'"), at(SRC.calculoSeguro2, "seção 'Soro'")],
  questions: [
    mcq({ key: "calc-conv-1", section: "massa-volume-tempo", difficulty: "facil",
      stem: "Quantos miligramas há em 0,25 g?",
      options: ["2,5 mg.", "25 mg.", "250 mg.", "2.500 mg."], correct: 2,
      explanation: "1 g = 1.000 mg; 0,25 × 1.000 = 250 mg (a vírgula anda três casas para a direita)." }),
    mcq({ key: "calc-conv-2", section: "formas-de-medida", difficulty: "facil",
      stem: "Pelas conversões padronizadas no Brasil citadas pelo Coren-SP, 1 mL corresponde a:",
      options: ["10 gotas.", "20 gotas.", "40 gotas.", "60 gotas."], correct: 1,
      explanation: "1 mL = 20 gotas = 60 microgotas; 1 gota = 3 microgotas." }),
    mcq({ key: "calc-conv-3", section: "porcentagem", difficulty: "media",
      stem: "Um frasco de soro fisiológico 0,9% de 500 mL contém quantos gramas de cloreto de sódio?",
      options: ["0,9 g.", "4,5 g.", "9 g.", "45 g."], correct: 1,
      explanation: "0,9% = 0,9 g em 100 mL; em 500 mL: 0,9 × 5 = 4,5 g." }),
    mcq({ key: "calc-conv-4", section: "formas-de-medida", difficulty: "facil",
      stem: "Na referência do Coren-SP, uma colher de sopa corresponde a:",
      options: ["5 mL.", "10 mL.", "15 mL.", "20 mL."], correct: 2,
      explanation: "Sopa 15 mL, sobremesa 10 mL, chá 5 mL, café 2,5 a 3 mL." }),
    mcq({ key: "calc-conv-5", section: "massa-volume-tempo", difficulty: "media",
      stem: "Uma infusão deve correr em 2 horas e 30 minutos. Em minutos, esse tempo é:",
      options: ["130 min.", "150 min.", "230 min.", "250 min."], correct: 1,
      explanation: "2 × 60 = 120 + 30 = 150 minutos." }),
    mcq({ key: "calc-conv-6", section: "tonicidade", difficulty: "media",
      stem: "Solução cuja concentração é maior que a do plasma sanguíneo é chamada de:",
      options: ["isotônica.", "hipotônica.", "hipertônica.", "fisiológica."], correct: 2,
      explanation: "Hipertônica: concentração maior que a do plasma; isotônica, igual ou próxima; hipotônica, menor." }),
    mcq({ key: "calc-conv-7", section: "exercicios", difficulty: "dificil",
      stem: "Exercício de estudo: prescrição de 0,5 g de um medicamento; disponível ampola de 250 mg em 5 mL. Quantos mL aspirar?",
      options: ["1 mL.", "2,5 mL.", "5 mL.", "10 mL."], correct: 3,
      explanation: "Converter primeiro: 0,5 g = 500 mg. 250 mg — 5 mL; 500 mg — x; x = 500 × 5 ÷ 250 = 10 mL." }),
    mcq({ key: "calc-conv-8", section: "porcentagem", difficulty: "media",
      stem: "No soro glicosado a 5%, a expressão '5%' significa:",
      options: ["5 g de glicose em 1.000 mL.", "5 g de glicose em 100 mL.", "5 mg de glicose em 100 mL.", "5 mL de glicose em 100 mL."], correct: 1,
      explanation: "Porcentagem da solução = gramas em 100 mL; SG 5% = 5 g em 100 mL." }),
  ],
  status: "published",
  standard: "v2",
  lastReviewedAt: REVIEWED_V2,
  reviewNotes: V2_REVIEW_NOTE + " Exercícios com valores fictícios de estudo. O material do Coren-SP tem erro de digitação no exemplo da escada (1.020 g), corrigido para 1.020 mg.",
};
