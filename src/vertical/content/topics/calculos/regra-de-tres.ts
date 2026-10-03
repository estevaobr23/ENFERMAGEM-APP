import { doseVolume } from "@/core/calc";
import type { TopicSeed } from "@/core/content/types";
import { mcq } from "../../helpers";
import { REVIEWED_V2, SRC, V2_REVIEW_NOTE, at } from "../../sources";

/*
 * Fontes: [0] Coren-SP vol. I ('Regra de três', 'Diluição'); [1] vol. II ('Diluição de medicamentos').
 * Todos os resultados numéricos saem de src/core/calc (testado em tests/unit/calc.test.ts).
 */

const br = (n: number) => n.toLocaleString("pt-BR", { maximumFractionDigits: 2 });

const AMINO = doseVolume(120, 240, 10); // vol. I
const DECADRON = doseVolume(8, 10, 2.5); // vol. I: 4 mg/mL × 2,5 mL = 10 mg
const Q1 = doseVolume(150, 500, 5); // 1,5 mL
const Q2 = doseVolume(100, 250, 10); // 4 mL
const Q3 = doseVolume(300, 1000, 5); // frasco 1 g em 5 mL, dose 300 mg → 1,5 mL

export const REGRA_DE_TRES: TopicSeed = {
  slug: "regra-de-tres-dose-e-diluicao",
  title: "Regra de três: quanto aspirar",
  description: "Como montar a regra de três sem errar: ampolas, frasco-ampola em pó, comprimidos e concentração por mL.",
  summary:
    "O Coren-SP explica que a regra de três relaciona grandezas proporcionais e que, na prática de enfermagem, usa-se a regra de três direta — ao aumentar um fator, o outro aumenta junto. Ela só é necessária quando não dá para resolver diretamente (três ampolas de 2 mL somam 6 mL sem regra de três). Para montar: verificar se é direta, colocar grandezas iguais na mesma coluna (mg embaixo de mg, mL embaixo de mL), na primeira linha o que se tem (a apresentação disponível) e na segunda o que se quer (a prescrição), com x no valor procurado; depois, multiplicar em cruz e dividir. Exemplo do material: ampola de aminofilina com 240 mg em 10 mL, prescrição de 120 mg → 5 mL. Para frasco-ampola em pó, primeiro se dilui: cefalotina 1 g diluída em 5 mL fica com 200 mg em cada mL; ampicilina 500 mg em 5 mL, 100 mg por mL. A capacidade da maioria dos frascos-ampola é de no máximo 10 mL, e a quantidade de diluente, se não estiver prescrita ou orientada pelo fabricante, é definida por quem prepara. Com comprimidos: se a dose prescrita é o dobro do comprimido disponível, administram-se dois; se é uma fração de um comprimido maior, dissolve-se o comprimido em volume conhecido de água e aspira-se a parte correspondente, porque partir o comprimido faz perder dose. Os exercícios usam valores de estudo e não substituem a prescrição, o protocolo institucional nem a dupla checagem.",
  keyPoints: [
    "Na enfermagem usa-se a regra de três DIRETA.",
    "Unidade igual embaixo de unidade igual.",
    "1ª linha: o que tenho (apresentação). 2ª linha: o que quero (prescrição, com x).",
    "x = prescrito × volume disponível ÷ quantidade disponível.",
    "Aminofilina 240 mg/10 mL, prescrito 120 mg → 5 mL.",
    "Frasco-ampola em pó: diluir antes (cefalotina 1 g em 5 mL = 200 mg/mL).",
    "Diluente não prescrito nem orientado pelo fabricante: quem prepara define; frasco-ampola comporta no máximo cerca de 10 mL.",
    "Fração de comprimido: dissolver em volume conhecido de água e aspirar a parte da dose.",
  ],
  map: {
    title: "Regra de três",
    spec: {
      layout: "flow",
      center: "Tenho → Quero → x",
      blocks: [
        { title: "Tenho", tone: "orange", icon: "📦", items: ["500 mg — 5 mL"] },
        { title: "Quero", tone: "blue", icon: "🎯", items: ["150 mg — x mL"] },
        { title: "Resolvo", tone: "green", icon: "✅", items: [`x = 150 × 5 ÷ 500 = ${br(Q1.volumeMl)} mL`] },
      ],
      footnote: "mg embaixo de mg, mL embaixo de mL. Valores de estudo.",
    },
  },
  sections: [
    {
      id: "visao-geral",
      kind: "visao",
      title: "A ferramenta de quase todo cálculo de dose",
      source: 0,
      blocks: [
        {
          type: "definition",
          term: "Regra de três",
          text: "Relação entre ==grandezas proporcionais==. Na ==direta==, ao aumentar um fator o outro aumenta junto. Na realidade profissional da enfermagem, ==usa-se a regra de três direta==.",
          note: "Só é necessária quando não dá para resolver de forma direta (ex.: 3 ampolas de 2 mL = 6 mL).",
        },
      ],
    },
    {
      id: "como-montar",
      kind: "etapas",
      title: "Como montar sem errar",
      source: 0,
      blocks: [
        {
          type: "steps",
          items: [
            { title: "Confira se é direta", text: "Mais medicamento → mais volume. Sim, é direta." },
            { title: "Converta as unidades", text: "Prescrição em g e ampola em mg? Converta antes.", why: "A regra só funciona com a mesma unidade na mesma coluna." },
            { title: "Unidade embaixo de unidade", text: "==mg embaixo de mg, mL embaixo de mL==." },
            { title: "1ª linha: o que tenho", text: "A apresentação disponível (ex.: 240 mg — 10 mL)." },
            { title: "2ª linha: o que quero", text: "A prescrição, com ==x== no que falta (ex.: 120 mg — x mL)." },
            { title: "Multiplique em cruz e divida", text: "x = prescrito × volume disponível ÷ quantidade disponível." },
          ],
        },
        { type: "formula", label: "Fórmula prática", expression: "x (mL) = prescrito × volume ÷ disponível", legend: ["Prescrito e disponível na mesma unidade (mg, g ou UI)"] },
      ],
    },
    {
      id: "ampolas",
      kind: "pratica",
      title: "Ampolas com concentração definida",
      source: 0,
      blocks: [
        { type: "example", title: "Aminofilina (exemplo do Coren-SP)", given: ["Prescrito: 120 mg", "Disponível: ampola 240 mg em 10 mL"], steps: AMINO.steps, answer: `Aspirar ${br(AMINO.volumeMl)} mL` },
        { type: "example", title: "Dexametasona em mg/mL (exemplo do Coren-SP)", given: ["Prescrito: 8 mg", "Disponível: frasco de 2,5 mL com 4 mg/mL (= 10 mg no frasco)"], steps: DECADRON.steps, answer: `Aspirar ${br(DECADRON.volumeMl)} mL` },
      ],
    },
    {
      id: "frasco-ampola",
      kind: "conceito",
      title: "Frasco-ampola em pó: diluir antes de calcular",
      source: 1,
      blocks: [
        {
          type: "steps",
          items: [
            { title: "Diluir o pó em volume conhecido", text: "Ex.: cefalotina 1 g + 5 mL de diluente = solução de 5 mL." },
            { title: "Achar a concentração por mL", text: "1.000 mg — 5 mL; x — 1 mL → ==200 mg por mL==." },
            { title: "Aplicar a regra de três da dose", text: "Com a concentração conhecida, calcular quanto aspirar." },
          ],
        },
        {
          type: "cards",
          items: [
            { title: "Ampicilina 500 mg + 5 mL", text: "500 mg — 5 mL → ==100 mg por mL==.", icon: "💉", tone: "blue" },
            { title: "Capacidade do frasco", text: "A maioria dos frascos-ampola comporta ==no máximo 10 mL==.", icon: "🧪", tone: "slate" },
            { title: "Quem define o diluente", text: "Sem prescrição nem orientação do fabricante, ==quem prepara== define o volume.", icon: "🧑‍⚕️", tone: "teal" },
          ],
        },
      ],
    },
    {
      id: "comprimidos",
      kind: "tecnico",
      title: "Comprimidos",
      source: 0,
      blocks: [
        { type: "example", title: "Dose maior que o comprimido", given: ["Prescrito: captopril 25 mg", "Disponível: comprimido de 12,5 mg"], steps: ["25 ÷ 12,5 = 2"], answer: "Administrar 2 comprimidos" },
        { type: "example", title: "Fração de um comprimido maior", given: ["Prescrito: 250 mg", "Disponível: comprimido de 1.000 mg"], steps: ["Partir o comprimido perde dose: dissolver 1 cp em 10 mL de água", "1.000 mg — 10 mL", "250 mg — x mL", "x = 250 × 10 ÷ 1.000 = 2,5 mL"], answer: "Dissolver em 10 mL e aspirar 2,5 mL" },
        { type: "callout", variant: "atencao", title: "Forma certa", text: "Antes de triturar ou dissolver, confira se a forma farmacêutica permite (9 certos — forma certa)." },
      ],
    },
    {
      id: "numeros",
      kind: "numeros",
      title: "Números que caem",
      source: 1,
      blocks: [
        {
          type: "numbers",
          items: [
            { value: "200 mg/mL", label: "cefalotina 1 g diluída em 5 mL" },
            { value: "100 mg/mL", label: "ampicilina 500 mg diluída em 5 mL" },
            { value: "10 mL", label: "capacidade máxima da maioria dos frascos-ampola" },
            { value: "5 mL", label: "aminofilina 120 mg da ampola de 240 mg/10 mL" },
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
          title: "Antibiótico em pó",
          scenario: "Exercício de estudo: prescrição de 300 mg de um antibiótico; disponível frasco-ampola com 1 g em pó. O técnico dilui em 5 mL.",
          question: "Quantos mL aspirar?",
          answer: `${br(Q3.volumeMl)} mL`,
          reasoning: ["Converter: 1 g = 1.000 mg.", ...Q3.steps, "Conferir em dupla checagem se for medicamento de alta vigilância."],
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
            { wrong: "Na enfermagem, usa-se a regra de três inversa para doses.", right: "Usa-se a ==direta==.", why: "Mais dose → mais volume." },
            { wrong: "Pode misturar g e mg na mesma coluna.", right: "Converta antes: ==unidade igual embaixo de unidade igual==.", why: "Senão o resultado sai 1.000 vezes errado." },
            { wrong: "x = quantidade disponível × volume ÷ prescrito.", right: "x = ==prescrito== × volume disponível ÷ quantidade disponível.", why: "A banca inverte o numerador." },
            { wrong: "Para dar meio comprimido de 1.000 mg, basta parti-lo e dar a metade.", right: "Para frações, ==dissolver em volume conhecido== e aspirar a parte da dose.", why: "O material diz que partir o comprimido faz perder mg." },
            { wrong: "Cefalotina 1 g diluída em 5 mL tem 100 mg/mL.", right: "Tem ==200 mg/mL== (1.000 ÷ 5).", why: "100 mg/mL é a ampicilina 500 mg em 5 mL." },
            { wrong: "O volume de diluente é sempre definido pelo médico.", right: "Se não estiver prescrito nem orientado pelo fabricante, ==quem prepara define==.", why: "Observação do Coren-SP." },
          ],
        },
        { type: "callout", variant: "atencao", title: "Segurança", text: "Valores de estudo. Não substituem a prescrição, o protocolo institucional nem a ==dupla checagem== exigida na alta vigilância." },
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
            { slug: "conversoes-de-unidades-e-medidas", title: "Conversões de unidades e medidas", why: "Converter antes de montar." },
            { slug: "penicilina-cristalina-e-rediluicao", title: "Penicilina cristalina e rediluição", why: "Quando o soluto ocupa volume e a dose é muito pequena." },
            { slug: "nove-certos-administracao-de-medicamentos", title: "Os 9 certos da administração de medicamentos", why: "Dose certa e dupla checagem." },
          ],
        },
      ],
    },
  ],
  sources: [at(SRC.calculoSeguro1v2, "'Regra de três' e 'Diluição'"), at(SRC.calculoSeguro2, "'Diluição de medicamentos'")],
  questions: [
    mcq({ key: "calc-regra3-1", section: "como-montar", difficulty: "facil",
      stem: "Exercício de estudo: uma ampola tem 500 mg em 5 mL. Para obter 150 mg, quantos mL devem ser aspirados?",
      options: ["0,5 mL.", `${br(Q1.volumeMl)} mL.`, "3 mL.", "15 mL."], correct: 1,
      explanation: `${Q1.steps.join(" · ")}.` }),
    mcq({ key: "calc-regra3-2", section: "como-montar", difficulty: "media",
      stem: "Exercício de estudo: um frasco tem 250 mg em 10 mL. Para obter 100 mg, quantos mL devem ser aspirados?",
      options: ["2,5 mL.", `${br(Q2.volumeMl)} mL.`, "25 mL.", "0,4 mL."], correct: 1,
      explanation: `${Q2.steps.join(" · ")}.` }),
    mcq({ key: "calc-regra3-3", section: "como-montar", difficulty: "facil",
      stem: "Segundo o material Boas Práticas: Cálculo Seguro (Coren-SP), ao montar a regra de três para o preparo de medicamentos, deve-se:",
      options: ["colocar na mesma coluna as grandezas iguais (mg embaixo de mg, mL embaixo de mL).", "usar sempre a regra de três inversa.", "colocar a prescrição na primeira linha e a apresentação na segunda, com unidades misturadas.", "converter tudo para gotas antes de calcular."], correct: 0,
      explanation: "O material orienta a regra de três direta, com grandezas iguais na mesma coluna: na 1ª linha o que se sabe e na 2ª o que se procura (x)." }),
    mcq({ key: "calc-regra3-4", section: "frasco-ampola", difficulty: "media",
      stem: "Um frasco-ampola de cefalotina 1 g é diluído em 5 mL de diluente. Cada mL da solução contém:",
      options: ["20 mg.", "100 mg.", "200 mg.", "500 mg."], correct: 2,
      explanation: "1.000 mg — 5 mL; x — 1 mL; x = 200 mg por mL (exemplo do Coren-SP vol. II).", source: 1 }),
    mcq({ key: "calc-regra3-5", section: "ampolas", difficulty: "facil",
      stem: "Prescrição de 120 mg de aminofilina; disponível ampola de 240 mg em 10 mL. Deve-se aspirar:",
      options: ["2 mL.", "2,4 mL.", "5 mL.", "12 mL."], correct: 2,
      explanation: `${AMINO.steps.join(" · ")} (exemplo do Coren-SP vol. I).` }),
    mcq({ key: "calc-regra3-6", section: "comprimidos", difficulty: "media",
      stem: "Exercício de estudo: prescritos 250 mg; disponível comprimido de 1.000 mg. A conduta descrita pelo Coren-SP é:",
      options: ["partir o comprimido em quatro e dar um pedaço.", "dissolver o comprimido em 10 mL de água e aspirar 2,5 mL.", "administrar o comprimido inteiro.", "dissolver em 10 mL e aspirar 25 mL."], correct: 1,
      explanation: "Partir o comprimido perde dose; dissolve-se em volume conhecido: 1.000 mg — 10 mL; 250 mg — x; x = 2,5 mL." }),
    mcq({ key: "calc-regra3-7", section: "caso", difficulty: "dificil",
      stem: "Exercício de estudo: prescritos 300 mg de antibiótico; frasco-ampola com 1 g em pó diluído em 5 mL. Quantos mL aspirar?",
      options: ["0,3 mL.", `${br(Q3.volumeMl)} mL.`, "3 mL.", "6 mL."], correct: 1,
      explanation: `1 g = 1.000 mg. ${Q3.steps.join(" · ")}.`, source: 1 }),
    mcq({ key: "calc-regra3-8", section: "frasco-ampola", difficulty: "media",
      stem: "Quando o volume de diluente de um frasco-ampola não está expresso na prescrição nem há orientação do fabricante, segundo o Coren-SP:",
      options: ["o medicamento não pode ser preparado.", "quem está preparando determina o volume.", "usa-se sempre 20 mL.", "usa-se o mesmo volume da dose em mg."], correct: 1,
      explanation: "Observação do vol. II: se não estiver expressa na prescrição ou na orientação do fabricante, quem determina é quem está preparando.", source: 1 }),
  ],
  status: "published",
  standard: "v2",
  lastReviewedAt: REVIEWED_V2,
  reviewNotes: V2_REVIEW_NOTE + " Resultados numéricos gerados por src/core/calc (testes em tests/unit/calc.test.ts).",
};
