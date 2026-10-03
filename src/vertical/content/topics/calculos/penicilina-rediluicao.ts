import { ruleOfThree } from "@/core/calc";
import type { TopicSeed } from "@/core/content/types";
import { mcq } from "../../helpers";
import { REVIEWED_V2, SRC, V2_REVIEW_NOTE, at } from "../../sources";

/* Fonte: Coren-SP vol. II ('Penicilina cristalina' e 'Rediluição'). Resultados por src/core/calc (testado). */

const br = (n: number) => n.toLocaleString("pt-BR", { maximumFractionDigits: 2 });

const PEN = ruleOfThree(4_800_000, 10_000_000, 10, "UI"); // exemplo do Coren-SP → 4,8 mL
const PEN5 = ruleOfThree(3_000_000, 5_000_000, 10, "UI"); // estudo → 6 mL
const REDIL_PEN = ruleOfThree(35_000, 1_000_000, 10, "UI"); // exemplo do Coren-SP → 0,35 mL
const REDIL_AMINO = ruleOfThree(15, 24, 10, "mg"); // estudo → 6,25 mL

export const PENICILINA_REDILUICAO: TopicSeed = {
  slug: "penicilina-cristalina-e-rediluicao",
  title: "Penicilina cristalina e rediluição",
  description: "Por que o pó da penicilina ocupa volume, como chegar a 10 mL e como rediluir para obter doses muito pequenas.",
  summary:
    "O Coren-SP destaca a penicilina cristalina, apresentada mais comumente em frascos-ampola de 5.000.000 UI e 10.000.000 UI. Diferente da maioria dos medicamentos, no preparo da penicilina cristalina deve-se considerar o volume do soluto: o pó ocupa cerca de 2 mL no frasco de 5.000.000 UI e 4 mL no de 10.000.000 UI. Assim, 8 mL de água destilada no frasco de 5.000.000 UI resultam em 10 mL de solução, e 6 mL no frasco de 10.000.000 UI também resultam em 10 mL — volumes escolhidos para facilitar o cálculo. Se a quantidade de diluente não estiver na prescrição nem houver orientação do fabricante, quem prepara a define. Exemplo do material: prescritos 4.800.000 UI, disponível frasco de 10.000.000 UI diluído para 10 mL → aspirar 4,8 mL. A penicilina costuma ser administrada em bureta com 50 ou 100 mL, conforme a prescrição. Rediluição é diluir ainda mais, aumentando o volume do solvente sem alterar a quantidade de soluto, para obter concentrações menores num volume que possa ser aspirado com segurança — recurso usado em neonatologia, pediatria e algumas clínicas especializadas. Técnica do material: aspirar 1 mL da solução, completar até 10 mL com diluente e recalcular com a nova concentração; por exemplo, para 35.000 UI de penicilina, a primeira diluição dá 1.000.000 UI por mL, que rediluídos em 10 mL permitem aspirar 0,35 mL.",
  keyPoints: [
    "Penicilina cristalina: frascos comuns de 5.000.000 UI e 10.000.000 UI.",
    "O pó ocupa volume: ~2 mL (5 milhões) e ~4 mL (10 milhões).",
    "5.000.000 UI + 8 mL AD = 10 mL · 10.000.000 UI + 6 mL AD = 10 mL.",
    "Diluente não prescrito nem orientado: quem prepara define.",
    "Exemplo do Coren-SP: 4.800.000 UI do frasco de 10.000.000 UI em 10 mL → 4,8 mL.",
    "Rediluição: mais solvente, mesmo soluto → concentração menor, volume aspirável.",
    "Técnica: aspirar 1 mL, completar 10 mL com diluente, recalcular.",
    "Usada em neonatologia, pediatria e clínicas especializadas.",
  ],
  map: {
    title: "Penicilina e rediluição",
    spec: {
      layout: "flow",
      center: "Do frasco à dose pequena",
      blocks: [
        { title: "1. Diluir considerando o pó", tone: "violet", icon: "🧪", items: ["10 mi UI + 6 mL = 10 mL", "5 mi UI + 8 mL = 10 mL"] },
        { title: "2. Calcular a dose", tone: "blue", icon: "🎯", items: ["Regra de três em UI", "4,8 mi UI → 4,8 mL"] },
        { title: "3. Dose muito pequena?", tone: "amber", icon: "🔬", items: ["Aspirar 1 mL", "Completar 10 mL", "Recalcular"] },
      ],
      footnote: "Valores de estudo. Seguir a prescrição e o protocolo da instituição.",
    },
  },
  sections: [
    {
      id: "visao-geral",
      kind: "visao",
      title: "Duas exceções ao cálculo comum",
      source: 0,
      blocks: [
        {
          type: "cards",
          items: [
            { title: "O pó que ocupa espaço", text: "Na penicilina cristalina, o ==volume do soluto conta== no volume final.", icon: "🧂", tone: "violet" },
            { title: "A dose que não cabe na seringa", text: "Quando a dose é minúscula, a ==rediluição== aumenta o volume para aspirar com segurança.", icon: "🔬", tone: "amber" },
          ],
        },
      ],
    },
    {
      id: "volume-do-po",
      kind: "conceito",
      title: "Penicilina cristalina: o volume do pó",
      source: 0,
      blocks: [
        {
          type: "compare",
          columns: ["Frasco de 5.000.000 UI", "Frasco de 10.000.000 UI"],
          rows: [
            { label: "Volume do pó (soluto)", cells: ["≈ ==2 mL==", "≈ ==4 mL=="] },
            { label: "Água destilada", cells: ["==8 mL==", "==6 mL=="] },
            { label: "Volume final", cells: ["10 mL (5.000.000 UI em 10 mL)", "10 mL (10.000.000 UI em 10 mL)"] },
            { label: "Concentração", cells: ["500.000 UI por mL", "1.000.000 UI por mL"] },
          ],
        },
        {
          type: "callout",
          variant: "dica",
          title: "Por que 8 e 6 mL?",
          text: "O material usa esses volumes para chegar a ==10 mL== e ==facilitar o cálculo==. Também é possível 16 mL + 4 mL de pó = 20 mL no frasco de 10.000.000 UI.",
        },
      ],
    },
    {
      id: "calculo-penicilina",
      kind: "pratica",
      title: "Calculando a dose de penicilina",
      source: 0,
      blocks: [
        { type: "example", title: "Exemplo do Coren-SP", given: ["Prescrito: 4.800.000 UI", "Disponível: frasco de 10.000.000 UI", "Diluição: 6 mL AD + 4 mL de pó = 10 mL"], steps: PEN.steps, answer: `Aspirar ${br(PEN.volumeMl)} mL` },
        { type: "example", title: "Exercício de estudo", given: ["Prescrito: 3.000.000 UI", "Disponível: frasco de 5.000.000 UI", "Diluição: 8 mL AD + 2 mL de pó = 10 mL"], steps: PEN5.steps, answer: `Aspirar ${br(PEN5.volumeMl)} mL` },
        { type: "callout", variant: "atencao", title: "Administração", text: "A penicilina cristalina costuma ser colocada em ==bureta com 50 ou 100 mL==, conforme a prescrição." },
      ],
    },
    {
      id: "rediluicao",
      kind: "etapas",
      title: "Rediluição, passo a passo",
      lead: "'Colocar mais água no feijão': a quantidade de grãos é a mesma, o volume aumenta.",
      source: 0,
      blocks: [
        {
          type: "steps",
          items: [
            { title: "Fazer a primeira diluição", text: "Ex.: penicilina 10.000.000 UI + 6 mL = 10 mL.", who: "tecnico" },
            { title: "Aspirar 1 mL na seringa de 10 mL", text: "Esse 1 mL contém 10.000.000 ÷ 10 = ==1.000.000 UI==.", why: "1 mL tem um décimo do frasco." },
            { title: "Completar até 10 mL com diluente", text: "Agora são 1.000.000 UI em 10 mL — nova apresentação, mesmo soluto.", why: "Concentração 10 vezes menor, volume fácil de medir." },
            { title: "Recalcular com a nova apresentação", text: "Regra de três com a concentração da rediluição." },
          ],
        },
        {
          type: "callout",
          variant: "lei",
          title: "Quando usar",
          text: "Doses muito pequenas: ==neonatologia, pediatria== e algumas clínicas especializadas (Coren-SP).",
        },
      ],
    },
    {
      id: "exercicios-rediluicao",
      kind: "tecnico",
      title: "Exercícios de rediluição",
      source: 0,
      blocks: [
        { type: "example", title: "Penicilina G potássica 35.000 UI (exemplo do Coren-SP)", given: ["Frasco de 10.000.000 UI diluído em 10 mL", "1 mL (1.000.000 UI) + 9 mL AD = 10 mL"], steps: REDIL_PEN.steps, answer: `Aspirar ${br(REDIL_PEN.volumeMl)} mL da rediluição` },
        { type: "example", title: "Aminofilina 15 mg (exercício de estudo)", given: ["Ampola 240 mg em 10 mL", "Aspirar 1 mL: 240 ÷ 10 = 24 mg", "1 mL (24 mg) + 9 mL AD = 24 mg em 10 mL"], steps: REDIL_AMINO.steps, answer: `Aspirar ${br(REDIL_AMINO.volumeMl)} mL da rediluição` },
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
            { value: "2 mL", label: "volume do pó no frasco de 5.000.000 UI" },
            { value: "4 mL", label: "volume do pó no frasco de 10.000.000 UI" },
            { value: "8 mL", label: "AD no frasco de 5.000.000 UI para 10 mL" },
            { value: "6 mL", label: "AD no frasco de 10.000.000 UI para 10 mL" },
            { value: "50–100 mL", label: "bureta usada para a penicilina" },
            { value: "1 + 9", label: "mL na rediluição (1 da solução + 9 de diluente)" },
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
          title: "Penicilina de 10 milhões",
          scenario: "Exercício de estudo: a técnica coloca 10 mL de água destilada no frasco de 10.000.000 UI e calcula como se tivesse 10 mL de solução.",
          question: "Qual o erro?",
          answer: "Esqueceu o volume do pó (~4 mL): com 10 mL de água, a solução fica com ~14 mL, e a concentração não é 1.000.000 UI/mL.",
          reasoning: [
            "O material manda considerar o volume do soluto na penicilina cristalina.",
            "Para ter 10 mL no frasco de 10.000.000 UI, usam-se 6 mL de água.",
            "Com volume errado, todas as doses aspiradas saem erradas.",
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
            { wrong: "O pó da penicilina cristalina não ocupa volume.", right: "Ocupa ~==2 mL== (5 mi UI) e ~==4 mL== (10 mi UI).", why: "É a exceção que o Coren-SP destaca." },
            { wrong: "Para 10 mL de solução no frasco de 10.000.000 UI, usam-se 10 mL de água.", right: "Usam-se ==6 mL== de água (6 + 4 de pó).", why: "O volume final soma solvente e soluto." },
            { wrong: "Rediluir aumenta a quantidade de medicamento.", right: "Rediluir aumenta o ==volume== com a ==mesma quantidade de soluto==.", why: "Só a concentração diminui." },
            { wrong: "No frasco de 5.000.000 UI, usam-se 6 mL de água.", right: "Usam-se ==8 mL== (8 + 2 de pó = 10 mL).", why: "6 mL é para o frasco de 10.000.000 UI." },
            { wrong: "Rediluição é usada para aumentar a dose em adultos.", right: "É usada para obter ==doses muito pequenas== (neonatologia, pediatria).", why: "Objetivo: volume que possa ser aspirado com segurança." },
            { wrong: "4.800.000 UI do frasco de 10.000.000 UI em 10 mL = 48 mL.", right: `= ==${br(PEN.volumeMl)} mL==.`, why: "4.800.000 × 10 ÷ 10.000.000." },
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
            { slug: "regra-de-tres-dose-e-diluicao", title: "Regra de três: quanto aspirar", why: "A base de todo cálculo de dose." },
            { slug: "insulina-calculo-e-preparo", title: "Insulina: cálculo e preparo", why: "Outra medida em UI — e a insulina não se dilui." },
            { slug: "gotejamento-gotas-e-microgotas", title: "Gotejamento: gotas e microgotas", why: "Correr a bureta no tempo prescrito." },
          ],
        },
      ],
    },
  ],
  sources: [at(SRC.calculoSeguro2, "'Penicilina cristalina' e 'Rediluição'")],
  questions: [
    mcq({ key: "calc-pen-1", section: "volume-do-po", difficulty: "media",
      stem: "No preparo da penicilina cristalina, segundo o Coren-SP, deve-se considerar que o pó (soluto) do frasco de 10.000.000 UI ocupa aproximadamente:",
      options: ["nenhum volume.", "1 mL.", "2 mL.", "4 mL."], correct: 3,
      explanation: "O soluto equivale a cerca de 2 mL no frasco de 5.000.000 UI e 4 mL no de 10.000.000 UI." }),
    mcq({ key: "calc-pen-2", section: "volume-do-po", difficulty: "media",
      stem: "Para obter 10 mL de solução no frasco de penicilina cristalina de 5.000.000 UI, adiciona-se:",
      options: ["4 mL de água destilada.", "6 mL de água destilada.", "8 mL de água destilada.", "10 mL de água destilada."], correct: 2,
      explanation: "8 mL de água + cerca de 2 mL de cristais = 10 mL." }),
    mcq({ key: "calc-pen-3", section: "calculo-penicilina", difficulty: "facil",
      stem: "Prescritas 4.800.000 UI de penicilina cristalina; disponível frasco de 10.000.000 UI diluído para 10 mL. Deve-se aspirar:",
      options: ["0,48 mL.", `${br(PEN.volumeMl)} mL.`, "6 mL.", "48 mL."], correct: 1,
      explanation: `${PEN.steps.join(" · ")} (exemplo do Coren-SP).` }),
    mcq({ key: "calc-pen-4", section: "rediluicao", difficulty: "facil",
      stem: "Rediluir um medicamento significa:",
      options: ["aumentar a quantidade de soluto.", "aumentar o volume do solvente sem alterar a quantidade de soluto, obtendo concentração menor.", "descartar parte do medicamento.", "misturar dois medicamentos diferentes."], correct: 1,
      explanation: "É diluir ainda mais, aumentando o solvente com a mesma massa de soluto, para doses pequenas num volume aspirável." }),
    mcq({ key: "calc-pen-5", section: "exercicios-rediluicao", difficulty: "dificil",
      stem: "Exercício (Coren-SP): prescritas 35.000 UI de penicilina G potássica; frasco de 10.000.000 UI diluído em 10 mL; aspira-se 1 mL e completa-se a 10 mL. Da rediluição, deve-se aspirar:",
      options: ["0,035 mL.", `${br(REDIL_PEN.volumeMl)} mL.`, "3,5 mL.", "35 mL."], correct: 1,
      explanation: `1 mL da primeira diluição = 1.000.000 UI; em 10 mL: ${REDIL_PEN.steps.join(" · ")}.` }),
    mcq({ key: "calc-pen-6", section: "rediluicao", difficulty: "media",
      stem: "Segundo o Coren-SP, a rediluição é especialmente utilizada em:",
      options: ["terapia intensiva adulta exclusivamente.", "neonatologia, pediatria e algumas clínicas especializadas.", "atendimento pré-hospitalar.", "vacinação de rotina."], correct: 1,
      explanation: "Utiliza-se quando se necessita de doses bem pequenas, como em neonatologia, pediatria e algumas clínicas especializadas." }),
    mcq({ key: "calc-pen-7", section: "exercicios-rediluicao", difficulty: "dificil",
      stem: "Exercício de estudo: prescritos 15 mg de aminofilina; ampola de 240 mg em 10 mL. Aspira-se 1 mL (24 mg) e completa-se a 10 mL. Quanto aspirar da rediluição?",
      options: ["0,625 mL.", "1,5 mL.", `${br(REDIL_AMINO.volumeMl)} mL.`, "15 mL."], correct: 2,
      explanation: `Rediluição: 24 mg em 10 mL. ${REDIL_AMINO.steps.join(" · ")}.` }),
    mcq({ key: "calc-pen-8", section: "calculo-penicilina", difficulty: "media",
      stem: "Exercício de estudo: prescritas 3.000.000 UI; disponível frasco de 5.000.000 UI diluído com 8 mL de água destilada. Quantos mL aspirar?",
      options: ["3 mL.", "4,8 mL.", `${br(PEN5.volumeMl)} mL.`, "8 mL."], correct: 2,
      explanation: `8 mL + 2 mL de pó = 10 mL. ${PEN5.steps.join(" · ")}.` }),
  ],
  status: "published",
  standard: "v2",
  lastReviewedAt: REVIEWED_V2,
  reviewNotes: V2_REVIEW_NOTE + " O exemplo de rediluição da aminofilina no material do Coren-SP está inconsistente (prescrição e resposta não batem); o app usa exercício próprio calculado por src/core/calc.",
};
