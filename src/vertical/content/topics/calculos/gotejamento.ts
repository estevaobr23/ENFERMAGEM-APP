import { dripRate, dripRateMinutes, infusionTime } from "@/core/calc";
import type { TopicSeed } from "@/core/content/types";
import { mcq } from "../../helpers";
import { REVIEWED_V2, SRC, V2_REVIEW_NOTE, at } from "../../sources";

/*
 * Fontes: [0] Coren-SP vol. I (conversões de gotejamento); [1] vol. II ('Gotejamento de soluções').
 * Resultados gerados por src/core/calc (testado). Exercícios fictícios de estudo.
 */

const br = (n: number) => n.toLocaleString("pt-BR", { maximumFractionDigits: 2 });

const H1 = dripRate(500, 8, "gotas"); // vol. II, 1º exemplo → 21
const H2 = dripRate(300, 6, "microgotas"); // 50
const H3 = dripRate(1000, 8, "gotas"); // 42
const M1 = dripRateMinutes(500, 150, "gotas"); // vol. II, 2º exemplo → 67
const M2 = dripRateMinutes(100, 30, "microgotas"); // vol. II, 3º exemplo → 200
const T1 = infusionTime(500, 10, "gotas"); // 16 h 40 min (a fonte arredonda para 16 h 36)
const T2 = infusionTime(500, 25, "gotas"); // 6 h 40 min

export const GOTEJAMENTO: TopicSeed = {
  slug: "gotejamento-gotas-e-microgotas",
  title: "Gotejamento: gotas e microgotas",
  description: "Fórmulas com tempo em horas e em minutos, o tempo para terminar o soro e o arredondamento — com exercícios resolvidos.",
  summary:
    "O Coren-SP lembra que, mesmo com bombas de infusão na maioria dos serviços, as fórmulas tradicionais de gotejamento são cobradas em provas e usadas em falhas de equipamento. As conversões padronizadas no Brasil são 1 mL = 20 gotas = 60 microgotas e 1 gota = 3 microgotas. Com o tempo em horas inteiras, gotas/min = volume ÷ (horas × 3) e microgotas/min = volume ÷ horas. Com o tempo em minutos (como 90 ou 150 minutos), gotas/min = volume × 20 ÷ minutos e microgotas/min = volume × 60 ÷ minutos. Como gota não se fraciona, arredonda-se para o inteiro mais próximo. Exemplos do material: 500 mL em 8 h correm a cerca de 21 gotas/min; 500 mL em 2 h 30 min, a 67 gotas/min; 100 mL em 30 minutos, a 200 microgotas/min. Também se pode calcular o tempo para a solução terminar: horas = volume ÷ (gotas/min × 3); a parte decimal das horas vira minutos por regra de três (× 60). Para 500 mL a 10 gotas/min, o tempo é 16,666... h, ou seja, 16 horas e 40 minutos. Os exercícios usam valores de estudo: a infusão real segue a prescrição e o protocolo da instituição.",
  keyPoints: [
    "1 mL = 20 gotas = 60 microgotas; 1 gota = 3 microgotas.",
    "Tempo em horas: gotas/min = V ÷ (T × 3) · microgotas/min = V ÷ T.",
    "Tempo em minutos: gotas/min = V × 20 ÷ min · microgotas/min = V × 60 ÷ min.",
    "Arredondar para o inteiro mais próximo (gota não se fraciona).",
    "Microgotas/min = 3 × gotas/min para o mesmo volume e tempo.",
    "Tempo de término: T (h) = V ÷ (gotas/min × 3); decimal × 60 = minutos.",
    `500 mL em 8 h ≈ ${H1.perMinute} gotas/min; 100 mL em 30 min = ${M2.perMinute} microgotas/min.`,
    "Exercício de estudo: não programa infusão de paciente real.",
  ],
  map: {
    title: "Gotejamento",
    spec: {
      layout: "compare",
      center: "1 mL = 20 gotas = 60 microgotas",
      blocks: [
        { title: "Tempo em horas", tone: "orange", icon: "🕗", items: ["gotas = V ÷ (T × 3)", "microgotas = V ÷ T", `500 mL / 8 h → ${H1.perMinute} gotas/min`] },
        { title: "Tempo em minutos", tone: "blue", icon: "⏱️", items: ["gotas = V × 20 ÷ min", "microgotas = V × 60 ÷ min", `100 mL / 30 min → ${M2.perMinute} microgotas/min`] },
      ],
      footnote: "V em mL. Exercício de estudo, não conduta clínica.",
    },
  },
  sections: [
    {
      id: "visao-geral",
      kind: "visao",
      title: "Por que ainda se calcula na mão",
      source: 1,
      blocks: [
        {
          type: "text",
          text: "Bombas de infusão fazem o trabalho na maioria dos serviços, mas o Coren-SP lembra que as fórmulas são exigidas ==em provas e concursos== e ==quando o equipamento falha==.",
        },
        {
          type: "cards",
          items: [
            { title: "1 mL = 20 gotas", text: "Equipo de gotas (macrogotas).", icon: "💧", tone: "orange" },
            { title: "1 mL = 60 microgotas", text: "Equipo de microgotas.", icon: "💦", tone: "blue" },
            { title: "1 gota = 3 microgotas", text: "Por isso microgotas/min = 3 × gotas/min.", icon: "🔁", tone: "teal" },
          ],
        },
      ],
    },
    {
      id: "formulas",
      kind: "etapas",
      title: "As fórmulas: escolha pelo tempo",
      lead: "Tempo em horas inteiras ou em minutos? É isso que define a fórmula.",
      source: 1,
      blocks: [
        { type: "formula", label: "Gotas/min — tempo em horas", expression: "gotas/min = V ÷ (T × 3)", legend: ["V = volume em mL", "T = horas inteiras", "3 = constante"] },
        { type: "formula", label: "Microgotas/min — tempo em horas", expression: "microgotas/min = V ÷ T" },
        { type: "formula", label: "Gotas/min — tempo em minutos", expression: "gotas/min = V × 20 ÷ min", legend: ["Use quando o tempo vier em minutos (90, 150...)"] },
        { type: "formula", label: "Microgotas/min — tempo em minutos", expression: "microgotas/min = V × 60 ÷ min" },
        { type: "callout", variant: "dica", title: "Arredondamento", text: "Gota não se fraciona: arredonde para o ==inteiro mais próximo==." },
      ],
    },
    {
      id: "exercicios-horas",
      kind: "pratica",
      title: "Exercícios: tempo em horas",
      source: 1,
      blocks: [
        { type: "example", title: "SG 5% 500 mL em 8 h (exemplo do Coren-SP)", given: ["500 mL", "8 horas", "Equipo de gotas"], steps: H1.steps, answer: `${H1.perMinute} gotas/min` },
        { type: "example", title: "300 mL em 6 h", given: ["300 mL", "6 horas", "Equipo de microgotas"], steps: H2.steps, answer: `${H2.perMinute} microgotas/min` },
      ],
    },
    {
      id: "exercicios-minutos",
      kind: "pratica",
      title: "Exercícios: tempo em minutos",
      source: 1,
      blocks: [
        { type: "example", title: "SF 0,9% 500 mL em 2 h 30 min (exemplo do Coren-SP)", given: ["500 mL", "2 h 30 min = 150 min", "Equipo de gotas"], steps: M1.steps, answer: `${M1.perMinute} gotas/min` },
        { type: "example", title: "100 mL em 30 min (exemplo do Coren-SP)", given: ["100 mL", "30 min", "Equipo de microgotas"], steps: M2.steps, answer: `${M2.perMinute} microgotas/min` },
      ],
    },
    {
      id: "tempo-de-termino",
      kind: "tecnico",
      title: "Quanto tempo o soro leva para acabar",
      source: 1,
      blocks: [
        { type: "formula", label: "Tempo de término", expression: "T (h) = V ÷ (gotas/min × 3)", legend: ["Em microgotas: T = V ÷ microgotas/min", "Parte decimal das horas × 60 = minutos"] },
        { type: "example", title: "500 mL a 10 gotas/min", given: ["500 mL", "10 gotas/min"], steps: T1.steps, answer: `${T1.hours} h ${T1.minutes} min` },
        { type: "callout", variant: "atencao", title: "Arredondamento da fonte", text: `O material do Coren-SP usa 16,6 h e chega a 16 h 36 min; com o valor exato (16,666... h), o tempo é ==${T1.hours} h ${T1.minutes} min==.` },
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
            { value: "20", label: "gotas em 1 mL" },
            { value: "60", label: "microgotas em 1 mL" },
            { value: "3", label: "constante da fórmula em horas", note: "60 min ÷ 20 gotas" },
            { value: `${H1.perMinute}`, label: "gotas/min para 500 mL em 8 h" },
            { value: `${M1.perMinute}`, label: "gotas/min para 500 mL em 2 h 30" },
            { value: `${T1.hours} h ${T1.minutes}`, label: "500 mL a 10 gotas/min" },
          ],
        },
      ],
    },
    {
      id: "caso",
      kind: "caso",
      title: "Situação-problema",
      source: 1,
      blocks: [
        {
          type: "case",
          title: "Bomba de infusão em falha",
          scenario: "Exercício de estudo: a bomba de infusão parou. A prescrição é de 1.000 mL de soro em 8 horas, em equipo de gotas.",
          question: "Qual o gotejamento a controlar manualmente até a troca do equipamento?",
          answer: `${H3.perMinute} gotas/min`,
          reasoning: [...H3.steps, `Atalho: 1.000 ÷ (8 × 3) = ${br(Number(H3.exact.toFixed(2)))} → ${H3.perMinute}.`, "Comunicar ao enfermeiro e seguir o protocolo da instituição."],
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
            { wrong: "Para microgotas, use V ÷ (T × 3).", right: "Microgotas (tempo em horas) = ==V ÷ T==.", why: "O '× 3' é das gotas." },
            { wrong: "1 mL = 60 gotas.", right: "1 mL = ==20 gotas== = 60 microgotas.", why: "60 é de microgotas." },
            { wrong: "Com tempo em minutos, use V ÷ (T × 3) colocando os minutos.", right: "Em minutos: ==V × 20 ÷ min== (gotas) ou ==V × 60 ÷ min== (microgotas).", why: "A fórmula com × 3 só vale para horas inteiras." },
            { wrong: "20,8 gotas/min deve ser arredondado para 20.", right: "Arredonda-se para o ==inteiro mais próximo==: 21.", why: "Regra aritmética usada pelo material." },
            { wrong: "Microgotas/min é o triplo de gotas/min só às vezes.", right: "==Sempre==, para o mesmo volume e tempo.", why: "1 gota = 3 microgotas." },
            { wrong: "500 mL a 10 gotas/min termina em 16 h 06 min.", right: `Termina em ==${T1.hours} h ${T1.minutes} min==.`, why: "0,666 h × 60 = 40 min; não se lê a decimal como minutos." },
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
            { slug: "conversoes-de-unidades-e-medidas", title: "Conversões de unidades e medidas", why: "Horas em minutos e mL em gotas." },
            { slug: "penicilina-cristalina-e-rediluicao", title: "Penicilina cristalina e rediluição", why: "Penicilina vai em bureta de 50 ou 100 mL." },
            { slug: "nove-certos-administracao-de-medicamentos", title: "Os 9 certos da administração de medicamentos", why: "Dose certa inclui conferir gotejamento e bomba." },
          ],
        },
      ],
    },
  ],
  sources: [at(SRC.calculoSeguro1v2, "'Formas de medida' (conversões de gotejamento)"), at(SRC.calculoSeguro2, "'Gotejamento de soluções'")],
  questions: [
    mcq({ key: "calc-gotas-1", section: "exercicios-horas", difficulty: "facil",
      stem: "Exercício de estudo: um soro de 500 mL deve correr em 8 horas. Quantas gotas por minuto, aproximadamente?",
      options: ["7 gotas/min.", `${H1.perMinute} gotas/min.`, "63 gotas/min.", "167 gotas/min."], correct: 1,
      explanation: `${H1.steps.join(". ")}. Atalho: 500 ÷ (8 × 3) = ${br(Number(H1.exact.toFixed(2)))}.`, source: 1 }),
    mcq({ key: "calc-gotas-2", section: "exercicios-horas", difficulty: "facil",
      stem: "Exercício de estudo: 300 mL devem correr em 6 horas em equipo de microgotas. Qual o gotejamento?",
      options: ["17 microgotas/min.", `${H2.perMinute} microgotas/min.`, "150 microgotas/min.", "300 microgotas/min."], correct: 1,
      explanation: `${H2.steps.join(". ")}. Atalho para microgotas: volume ÷ horas = 300 ÷ 6.`, source: 1 }),
    mcq({ key: "calc-gotas-3", section: "formulas", difficulty: "media",
      stem: "Exercício de estudo: 1.000 mL devem correr em 8 horas em equipo de gotas. O gotejamento aproximado é:",
      options: ["21 gotas/min.", `${H3.perMinute} gotas/min.`, "125 gotas/min.", "63 gotas/min."], correct: 1,
      explanation: `${H3.steps.join(". ")}. Atalho: 1.000 ÷ (8 × 3).`, source: 1 }),
    mcq({ key: "calc-gotas-4", section: "exercicios-minutos", difficulty: "media",
      stem: "Exercício de estudo: 500 mL de soro fisiológico devem correr em 2 horas e 30 minutos, em equipo de gotas. O gotejamento é de aproximadamente:",
      options: ["33 gotas/min.", `${M1.perMinute} gotas/min.`, "100 gotas/min.", "200 gotas/min."], correct: 1,
      explanation: `2 h 30 = 150 min. ${M1.steps.join(". ")} (exemplo do Coren-SP).`, source: 1 }),
    mcq({ key: "calc-gotas-5", section: "exercicios-minutos", difficulty: "media",
      stem: "Exercício de estudo: 100 mL de um antibiótico devem correr em 30 minutos, em equipo de microgotas. O gotejamento é:",
      options: ["67 microgotas/min.", "100 microgotas/min.", `${M2.perMinute} microgotas/min.`, "300 microgotas/min."], correct: 2,
      explanation: `${M2.steps.join(". ")} (exemplo do Coren-SP).`, source: 1 }),
    mcq({ key: "calc-gotas-6", section: "tempo-de-termino", difficulty: "dificil",
      stem: "Exercício de estudo: um soro de 500 mL está correndo a 25 gotas/min. Em quanto tempo, aproximadamente, ele termina?",
      options: ["5 h.", `${T2.hours} h ${T2.minutes} min.`, "8 h 20 min.", "20 h."], correct: 1,
      explanation: `${T2.steps.join(". ")}.`, source: 1 }),
    mcq({ key: "calc-gotas-7", section: "formulas", difficulty: "media",
      stem: "Quando o tempo de infusão é dado em minutos, a fórmula de gotas por minuto é:",
      options: ["V ÷ (T × 3).", "V × 20 ÷ minutos.", "V × 60 ÷ minutos.", "V ÷ T."], correct: 1,
      explanation: "Gotas/min com tempo em minutos = volume × 20 ÷ minutos. V × 60 ÷ min é para microgotas; V ÷ (T × 3) é com tempo em horas.", source: 1 }),
    mcq({ key: "calc-gotas-8", section: "visao-geral", difficulty: "facil",
      stem: "Para o mesmo volume e tempo, o número de microgotas por minuto corresponde a:",
      options: ["metade do número de gotas/min.", "o mesmo número de gotas/min.", "o triplo do número de gotas/min.", "vinte vezes o número de gotas/min."], correct: 2,
      explanation: "1 gota = 3 microgotas; logo, microgotas/min = 3 × gotas/min." }),
  ],
  status: "published",
  standard: "v2",
  lastReviewedAt: REVIEWED_V2,
  reviewNotes: V2_REVIEW_NOTE + " O exemplo de tempo de término do Coren-SP (16 h 36 min) arredonda 16,666 h para 16,6 h; o app mostra o valor exato (16 h 40 min). O 2º exemplo do material é rotulado 'mgt/min' mas usa a constante 20 (gotas) e responde em gotas/min — o app segue a conta.",
};
