import { insulinVolume } from "@/core/calc";
import type { TopicSeed } from "@/core/content/types";
import { mcq } from "../../helpers";
import { REVIEWED_V2, SRC, V2_REVIEW_NOTE, at } from "../../sources";

/* Fonte: Coren-SP vol. II ('Cálculos com insulina'). Resultados por src/core/calc (testado). */

const br = (n: number) => n.toLocaleString("pt-BR", { maximumFractionDigits: 2 });

const I20 = insulinVolume(20); // exemplo do Coren-SP → 0,2 mL
const I35 = insulinVolume(35); // estudo → 0,35 mL
const I8 = insulinVolume(8); // estudo → 0,08 mL

export const INSULINA: TopicSeed = {
  slug: "insulina-calculo-e-preparo",
  title: "Insulina: cálculo e preparo",
  description: "Tipos e aspecto, a regra U-100 da seringa e do frasco, como aspirar em seringa comum e por que não se dilui insulina.",
  summary:
    "O material do Coren-SP descreve a insulina regular (simples ou composta), de ação rápida ou média e aspecto límpido; a NPH, de ação lenta e aspecto leitoso; e a insulina glargina, de ação contínua, em dose única a cada 24 horas e aspecto incolor. A insulina é sempre medida em unidades internacionais (UI ou U). Hoje, frascos e seringas de insulina são graduados em 100 UI por mL: quando frasco e seringa têm a mesma relação, aspira-se direto até a marca prescrita — 20 UI de NPH são aspiradas até a demarcação de 20 UI. Quando a apresentação do frasco é diferente da graduação da seringa, ou não há seringa de insulina na unidade, usa-se regra de três com seringa hipodérmica de 3 ou 5 mL, tomando como base 1 mL (o equivalente à seringa de insulina): com frasco de 100 UI/mL, 20 UI correspondem a 0,2 mL. Se a prescrição for de valores mínimos que não possam ser aspirados, o médico deve ser comunicado, porque a diluição da insulina não está indicada devido à perda de estabilidade. Os exercícios são de estudo e não substituem a prescrição, o protocolo institucional nem a dupla checagem.",
  keyPoints: [
    "Regular: ação rápida ou média, aspecto LÍMPIDO.",
    "NPH: ação lenta, aspecto LEITOSO.",
    "Glargina: ação contínua, 1 dose a cada 24 h, aspecto incolor.",
    "Insulina é sempre medida em UI (ou U).",
    "Frasco 100 UI/mL + seringa 100 UI/mL: aspirar direto até a marca prescrita.",
    "Sem seringa de insulina: regra de três com base em 1 mL → 20 UI = 0,2 mL.",
    "Dose mínima impossível de aspirar: comunicar o médico — NÃO diluir insulina (perde estabilidade).",
    "Exercício de estudo: não substitui prescrição nem dupla checagem.",
  ],
  map: {
    title: "Insulina",
    spec: {
      layout: "hub",
      center: "Insulina em UI — U-100",
      blocks: [
        { title: "Tipos", tone: "violet", icon: "💉", items: ["Regular: límpida", "NPH: leitosa", "Glargina: incolor, 24 h"] },
        { title: "Seringa de insulina", tone: "green", icon: "✅", items: ["100 UI/mL = frasco 100 UI/mL", "Aspirar até a marca"] },
        { title: "Seringa comum", tone: "amber", icon: "🧮", items: ["Base: 1 mL = 100 UI", "20 UI = 0,2 mL"] },
        { title: "Não fazer", tone: "rose", icon: "⛔", items: ["Diluir insulina", "Aspirar 'no olho' dose mínima"] },
      ],
    },
  },
  sections: [
    {
      id: "visao-geral",
      kind: "visao",
      title: "Uma medida própria: unidades internacionais",
      source: 0,
      blocks: [
        {
          type: "text",
          text: "Insulina não se calcula em mg: ela é ==sempre medida em unidades internacionais (UI ou U)==. Como frasco e seringa costumam ter a mesma graduação (100 UI/mL), a maior parte do preparo é ler a marca certa — e o cálculo só aparece quando falta a seringa própria.",
        },
      ],
    },
    {
      id: "tipos",
      kind: "classificacao",
      title: "Tipos e aspecto (como no material)",
      source: 0,
      blocks: [
        {
          type: "compare",
          columns: ["Ação", "Aspecto"],
          rows: [
            { label: "Regular (simples ou composta)", cells: ["Rápida ou média", "==Límpida=="] },
            { label: "NPH", cells: ["Lenta", "==Leitosa=="] },
            { label: "Glargina", cells: ["Contínua — ==uma dose a cada 24 h==", "Incolor"] },
          ],
        },
        {
          type: "callout",
          variant: "atencao",
          title: "O aspecto é conferência de segurança",
          text: "Se o frasco rotulado como regular estiver leitoso, ou a NPH estiver límpida, ==não use== e comunique — o aspecto é uma checagem do medicamento certo.",
        },
      ],
    },
    {
      id: "seringa-de-insulina",
      kind: "etapas",
      title: "Com seringa de insulina (100 UI/mL)",
      source: 0,
      blocks: [
        {
          type: "steps",
          items: [
            { title: "Conferir a concentração do frasco", text: "Frasco rotulado ==100 UI/mL==.", who: "tecnico" },
            { title: "Conferir a graduação da seringa", text: "Seringa graduada em ==100 UI/mL==.", who: "tecnico" },
            { title: "Aspirar até a marca da dose", text: "Ex.: 20 UI de NPH → aspirar até a demarcação de 20 UI.", why: "Frasco e seringa têm a mesma relação UI/mL: não há cálculo." },
          ],
        },
      ],
    },
    {
      id: "seringa-comum",
      kind: "tecnico",
      title: "Sem seringa de insulina: regra de três",
      source: 0,
      blocks: [
        {
          type: "steps",
          items: [
            { title: "Usar seringa hipodérmica de 3 ou 5 mL", who: "tecnico" },
            { title: "Tomar 1 mL como base", text: "Equivale à seringa de insulina: 1 mL do frasco U-100 = 100 UI.", why: "Não importa o tamanho da seringa: a referência é sempre 1 mL." },
            { title: "Montar frasco — seringa / prescrição — x", text: "100 UI — 1 mL; dose prescrita — x mL." },
            { title: "Conferir em dupla checagem", text: "Insulina é medicamento de alta vigilância.", who: "equipe" },
          ],
        },
        { type: "example", title: "20 UI de NPH (exemplo do Coren-SP)", given: ["Frasco 100 UI/mL", "Seringa de 3 mL"], steps: I20.steps, answer: `Aspirar ${br(I20.volumeMl)} mL` },
        { type: "example", title: "35 UI (exercício de estudo)", given: ["Frasco 100 UI/mL", "Seringa de 3 mL"], steps: I35.steps, answer: `Aspirar ${br(I35.volumeMl)} mL` },
      ],
    },
    {
      id: "nao-diluir",
      kind: "cuidados",
      title: "Dose mínima: não diluir",
      source: 0,
      blocks: [
        {
          type: "callout",
          variant: "lei",
          title: "Regra do material",
          text: "Se a prescrição for de ==valores mínimos que não possam ser aspirados==, o ==médico deve ser comunicado==: a ==diluição da insulina não está indicada== por perda da estabilidade.",
        },
        {
          type: "dodont",
          do: ["Usar seringa de insulina sempre que houver", "Conferir tipo, aspecto e concentração do frasco", "Comunicar o médico se a dose não puder ser medida com segurança", "Fazer dupla checagem"],
          dont: ["Rediluir insulina como se faz com outros medicamentos", "Aspirar 'aproximadamente' uma dose mínima", "Usar insulina com aspecto diferente do esperado"],
        },
      ],
    },
    {
      id: "numeros",
      kind: "numeros",
      title: "Números que caem",
      source: 0,
      blocks: [
        {
          type: "numbers",
          items: [
            { value: "100 UI/mL", label: "graduação atual de frascos e seringas de insulina" },
            { value: "1 mL", label: "base do cálculo em seringa comum", note: "= 100 UI no frasco U-100" },
            { value: `${br(I20.volumeMl)} mL`, label: "20 UI em seringa comum" },
            { value: "24 h", label: "intervalo da dose única da glargina" },
            { value: "3 ou 5 mL", label: "seringas hipodérmicas citadas para o cálculo" },
          ],
        },
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
          title: "Acabaram as seringas de insulina",
          scenario: "Exercício de estudo: prescrição de 8 UI de insulina regular; frasco de 100 UI/mL; na unidade só há seringas de 3 mL.",
          question: "Quanto aspirar e o que considerar?",
          answer: `Pela regra de três, ${br(I8.volumeMl)} mL — um volume pequeno demais para medir com segurança numa seringa de 3 mL; o médico deve ser comunicado, e a insulina não deve ser diluída.`,
          reasoning: [
            ...I8.steps,
            "O material orienta comunicar o médico quando o valor mínimo não puder ser aspirado.",
            "A diluição da insulina não está indicada por perda de estabilidade.",
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
            { wrong: "A insulina NPH tem aspecto límpido.", right: "NPH é ==leitosa==; a regular é límpida.", why: "Classificação do material do Coren-SP." },
            { wrong: "20 UI de insulina U-100 em seringa comum correspondem a 2 mL.", right: `Correspondem a ==${br(I20.volumeMl)} mL==.`, why: "100 UI — 1 mL; 20 UI — 0,2 mL." },
            { wrong: "Quando a dose é muito pequena, dilui-se a insulina como na rediluição.", right: "A diluição da insulina ==não está indicada==; comunicar o médico.", why: "Perda de estabilidade." },
            { wrong: "Insulina é dosada em miligramas.", right: "É medida em ==unidades internacionais (UI)==.", why: "Por isso frasco e seringa vêm em UI/mL." },
            { wrong: "Com seringa de 5 mL, a base do cálculo é 5 mL.", right: "A base é sempre ==1 mL==, equivalente à seringa de insulina.", why: "O tamanho da seringa não muda a concentração do frasco." },
            { wrong: "A glargina é aplicada de 6 em 6 horas.", right: "Glargina: ação contínua, ==uma única dose a cada 24 h==.", why: "Descrição do material." },
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
            { slug: "regra-de-tres-dose-e-diluicao", title: "Regra de três: quanto aspirar", why: "O mesmo raciocínio, agora em UI." },
            { slug: "penicilina-cristalina-e-rediluicao", title: "Penicilina cristalina e rediluição", why: "Por que a insulina é a exceção à rediluição." },
            { slug: "nove-certos-administracao-de-medicamentos", title: "Os 9 certos da administração de medicamentos", why: "Dupla checagem em medicamentos de alta vigilância." },
          ],
        },
      ],
    },
  ],
  sources: [at(SRC.calculoSeguro2, "'Cálculos com insulina'")],
  questions: [
    mcq({ key: "calc-ins-1", section: "tipos", difficulty: "facil",
      stem: "Segundo o material do Coren-SP, a insulina NPH tem ação:",
      options: ["rápida e aspecto límpido.", "lenta e aspecto leitoso.", "contínua e aspecto incolor.", "ultrarrápida e aspecto amarelado."], correct: 1,
      explanation: "Regular: rápida ou média, límpida. NPH: lenta, leitosa. Glargina: contínua, incolor." }),
    mcq({ key: "calc-ins-2", section: "seringa-de-insulina", difficulty: "facil",
      stem: "Prescrição de 20 UI de insulina NPH; frasco de 100 UI/mL e seringa de insulina graduada em 100 UI/mL. Deve-se:",
      options: ["aspirar 0,2 mL da seringa até a marca de 2 UI.", "aspirar até a demarcação de 20 UI.", "diluir em 10 mL de água destilada.", "aspirar 2 mL."], correct: 1,
      explanation: "Frasco e seringa com a mesma relação UI/mL: aspira-se direto até a marca de 20 UI." }),
    mcq({ key: "calc-ins-3", section: "seringa-comum", difficulty: "media",
      stem: "Exercício (Coren-SP): 20 UI de insulina, frasco de 100 UI/mL, só há seringa hipodérmica de 3 mL. Deve-se aspirar:",
      options: ["0,02 mL.", `${br(I20.volumeMl)} mL.`, "2 mL.", "20 mL."], correct: 1,
      explanation: `${I20.steps.join(" · ")}.` }),
    mcq({ key: "calc-ins-4", section: "nao-diluir", difficulty: "media",
      stem: "Quando a dose prescrita de insulina é tão pequena que não pode ser aspirada com segurança, o Coren-SP orienta:",
      options: ["diluir a insulina em soro fisiológico.", "comunicar o médico, pois a diluição da insulina não está indicada.", "aspirar a menor quantidade possível.", "dobrar a dose e aplicar metade."], correct: 1,
      explanation: "A diluição da insulina não está indicada devido à perda de estabilidade; o médico deve ser comunicado." }),
    mcq({ key: "calc-ins-5", section: "tipos", difficulty: "media",
      stem: "A insulina de aspecto límpido e ação rápida ou média, segundo o material, é a:",
      options: ["NPH.", "regular.", "glargina.", "pré-mistura 70/30."], correct: 1,
      explanation: "Regular (simples ou composta): ação rápida ou média, aspecto límpido." }),
    mcq({ key: "calc-ins-6", section: "seringa-comum", difficulty: "media",
      stem: "Exercício de estudo: 35 UI de insulina; frasco de 100 UI/mL; seringa de 3 mL. Quantos mL aspirar?",
      options: ["0,035 mL.", `${br(I35.volumeMl)} mL.`, "3,5 mL.", "35 mL."], correct: 1,
      explanation: `${I35.steps.join(" · ")}.` }),
    mcq({ key: "calc-ins-7", section: "seringa-comum", difficulty: "dificil",
      stem: "No cálculo de insulina com seringa hipodérmica de 5 mL, o volume aspirado tem por base:",
      options: ["5 mL, o tamanho da seringa.", "sempre 1 mL, equivalente à seringa de insulina.", "10 mL, a capacidade do frasco.", "a dose em mg."], correct: 1,
      explanation: "O material diz que o volume aspirado terá sempre por base 1 mL da seringa, não importando o tamanho dela." }),
    mcq({ key: "calc-ins-8", section: "visao-geral", difficulty: "facil",
      stem: "A insulina é medida em:",
      options: ["miligramas.", "mililitros apenas.", "unidades internacionais (UI ou U).", "gotas."], correct: 2,
      explanation: "A insulina é sempre medida em unidades internacionais." }),
  ],
  status: "published",
  standard: "v2",
  lastReviewedAt: REVIEWED_V2,
  reviewNotes: V2_REVIEW_NOTE + " A classificação de tipos segue o material do Coren-SP (2011); conferir terminologia de ação (rápida/intermediária/longa) com fonte farmacológica atual na revisão humana. A orientação sobre aspecto como checagem é aplicação didática.",
};
