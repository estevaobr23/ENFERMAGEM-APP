import { doseVolume, dripRate, formatDate, naegele } from "@/core/calc";
import type { CategorySeed } from "@/core/content/types";
import { AUTO_REVIEW_NOTE, REVIEWED_ON, SRC, at } from "./sources";
import { SECTIONS_2 } from "./sections-2";
import { EXTRA_QUESTIONS } from "./extra-questions";

/* Áreas 5–8: Saúde da Mulher, Saúde da Criança, Ética, Cálculos. */

// Exercícios de cálculo: valores FICTÍCIOS de estudo, resolvidos pelas mesmas
// funções que o app usa para mostrar o passo a passo (src/core/calc).
const DUM_A = { day: 20, month: 5, year: 2026 };
const DPP_A = naegele(DUM_A);
const DUM_B = { day: 26, month: 1, year: 2026 };
const DPP_B = naegele(DUM_B);

const DRIP_A = dripRate(500, 8, "gotas"); // 20,83 → 21
const DRIP_B = dripRate(300, 6, "microgotas"); // 50
const DOSE_A = doseVolume(150, 500, 5); // 1,5 mL
const DOSE_B = doseVolume(100, 250, 10); // 4 mL

const br = (n: number) => String(n).replace(".", ",");

export const MULHER: CategorySeed = {
  slug: "saude-da-mulher",
  title: "Saúde da Mulher",
  shortTitle: "Saúde da Mulher",
  description: "Pré-natal: idade gestacional e data provável do parto.",
  tone: "violet",
  icon: "🤰",
  status: "published",
  topics: [
    {
      slug: "calculo-da-idade-gestacional",
      title: "Cálculo da idade gestacional",
      description: "Pela DUM, quando a DUM é incerta e pela altura uterina.",
      summary:
        "O Caderno de Atenção Básica nº 32 (pré-natal de baixo risco) explica que os métodos para estimar a idade gestacional dependem da data da última menstruação (DUM), o primeiro dia de sangramento do último ciclo. Com a DUM conhecida e certa, usa-se o calendário (somar os dias entre a DUM e a consulta e dividir por sete, resultado em semanas) ou o disco gestograma. Se a data é desconhecida mas se sabe o período do mês, considera-se dia 5 (início), 15 (meio) ou 25 (fim). Sem data nem período, a estimativa é aproximada pela altura uterina e pelo toque vaginal, além da data de início dos movimentos fetais, que habitualmente ocorrem entre 18 e 20 semanas. Parâmetros do caderno: na 12ª semana o útero enche a pelve e é palpável na sínfise púbica; na 16ª semana o fundo uterino fica entre a sínfise e a cicatriz umbilical; na 20ª semana, na altura da cicatriz umbilical. Quando não for possível determinar clinicamente, solicita-se a ultrassonografia obstétrica o mais precocemente possível.",
      keyPoints: [
        "DUM = 1º dia do último sangramento menstrual.",
        "Calendário: dias desde a DUM ÷ 7 = semanas.",
        "DUM incerta: início, meio, fim do mês = dia 5, 15, 25.",
        "Movimentos fetais: habitualmente entre 18 e 20 semanas.",
        "12 semanas: útero palpável na sínfise púbica.",
        "16 semanas: fundo entre a sínfise e a cicatriz umbilical.",
        "20 semanas: fundo na altura da cicatriz umbilical.",
      ],
      map: {
        title: "Idade gestacional",
        spec: {
          layout: "flow",
          center: "Qual informação você tem?",
          blocks: [
            { title: "DUM certa", tone: "violet", icon: "📅", items: ["Dias até hoje ÷ 7", "ou disco gestograma"] },
            { title: "Só o período do mês", tone: "blue", icon: "🗓️", items: ["Início → dia 5", "Meio → dia 15", "Fim → dia 25"] },
            { title: "Sem data", tone: "amber", icon: "📏", items: ["12 sem: palpável na sínfise", "16 sem: entre sínfise e umbigo", "20 sem: na cicatriz umbilical", "Dúvida → USG obstétrica"] },
          ],
        },
      },
      sections: SECTIONS_2["calculo-da-idade-gestacional"] ?? [],
      sources: [at(SRC.cab32, "item 5.5 — Cálculo da idade gestacional")],
      questions: [
        {
          key: "mulher-ig-1",
          section: "qual-metodo-usar",
          stem: "Uma gestante não lembra a data da última menstruação, mas sabe que foi no meio do mês. Segundo o Caderno de Atenção Básica nº 32, para o cálculo considera-se como DUM o dia:",
          options: [
            { label: "A", text: "1." },
            { label: "B", text: "10." },
            { label: "C", text: "15.", correct: true },
            { label: "D", text: "20." },
          ],
          explanation: "Para início, meio e fim do mês, o caderno manda considerar os dias 5, 15 e 25, respectivamente.",
          difficulty: "facil",
          source: 0,
          status: "published",
        },
        {
          key: "mulher-ig-2",
          section: "altura-uterina",
          stem: "Pelos parâmetros do Caderno de Atenção Básica nº 32, o fundo do útero encontra-se na altura da cicatriz umbilical por volta da:",
          options: [
            { label: "A", text: "8ª semana." },
            { label: "B", text: "12ª semana." },
            { label: "C", text: "16ª semana." },
            { label: "D", text: "20ª semana.", correct: true },
          ],
          explanation: "12ª semana: palpável na sínfise púbica; 16ª: entre a sínfise e a cicatriz umbilical; 20ª: na altura da cicatriz umbilical.",
          difficulty: "media",
          source: 0,
          status: "published",
        },
        ...(EXTRA_QUESTIONS["calculo-da-idade-gestacional"] ?? []),
      ],
      status: "published",
      lastReviewedAt: REVIEWED_ON,
      reviewNotes: AUTO_REVIEW_NOTE,
    },
    {
      slug: "regra-de-naegele-data-provavel-do-parto",
      title: "Data provável do parto: Regra de Näegele",
      description: "Some 7 aos dias e ajuste o mês — com exemplos resolvidos.",
      summary:
        "O Caderno de Atenção Básica nº 32 calcula a data provável do parto (DPP) pela duração média da gestação normal: 280 dias, ou 40 semanas, a partir da DUM, usando calendário ou disco gestograma. A outra forma é a Regra de Näegele: somar sete dias ao primeiro dia da última menstruação e subtrair três meses do mês em que ela ocorreu — ou adicionar nove meses, se a DUM for de janeiro a março. Quando o número de dias passar do total de dias do mês, os dias excedentes vão para o mês seguinte e soma-se 1 ao mês no final do cálculo. Exemplo do caderno: DUM 27/01 → 27 + 7 = 34; 34 − 31 = 3; mês 1 + 9 + 1 = 11 → DPP 03/11.",
      keyPoints: [
        "Gestação média: 280 dias (40 semanas) a partir da DUM.",
        "Dia: DUM + 7.",
        "Mês: − 3 (ou + 9 se a DUM for de janeiro a março).",
        "Passou dos dias do mês: excedente vai para o mês seguinte e o mês ganha + 1.",
        "Exemplo do CAB 32: DUM 13/09 → DPP 20/06.",
      ],
      map: {
        title: "Regra de Näegele",
        spec: {
          layout: "flow",
          center: "DUM → DPP",
          blocks: [
            { title: "1. Dia", tone: "violet", icon: "➕", items: ["Dia da DUM + 7"] },
            { title: "2. Mês", tone: "blue", icon: "🔁", items: ["Abril a dezembro: − 3 (ano seguinte)", "Janeiro a março: + 9 (mesmo ano)"] },
            { title: "3. Passou do mês?", tone: "amber", icon: "↪️", items: ["Tira os dias do mês da DUM", "Soma 1 ao mês"] },
          ],
          footnote: "Exemplo: DUM 27/01 → 34 − 31 = 03 · 1 + 9 + 1 = 11 → DPP 03/11.",
        },
      },
      sections: SECTIONS_2["regra-de-naegele-data-provavel-do-parto"] ?? [],
      sources: [at(SRC.cab32, "item 5.6 — Cálculo da data provável do parto")],
      questions: [
        {
          key: "mulher-dpp-1",
          section: "passo-a-passo",
          stem: `Exercício de estudo: DUM em ${formatDate(DUM_A)}. Pela Regra de Näegele, a data provável do parto é:`,
          options: [
            { label: "A", text: formatDate(DPP_A), correct: true },
            // erros típicos: somar 3 meses; subtrair 7 dias; esquecer de virar o ano
            { label: "B", text: formatDate({ day: DPP_A.day, month: DUM_A.month + 3, year: DUM_A.year }) },
            { label: "C", text: formatDate({ day: DUM_A.day - 7, month: DPP_A.month, year: DPP_A.year }) },
            { label: "D", text: formatDate({ day: DPP_A.day, month: DPP_A.month, year: DUM_A.year }) },
          ],
          explanation: `Maio é depois de março, então subtrai 3 meses e vai para o ano seguinte. ${DPP_A.steps.join(". ")}. DPP = ${formatDate(DPP_A)}.`,
          difficulty: "media",
          source: 0,
          status: "published",
        },
        {
          key: "mulher-dpp-2",
          section: "exemplos-do-caderno",
          stem: `Exercício de estudo: DUM em ${formatDate(DUM_B)}. Pela Regra de Näegele, a data provável do parto é:`,
          options: [
            // erros típicos: esquecer o +1 do mês; virar o ano sem precisar; não descontar os dias do mês
            { label: "A", text: formatDate({ day: DPP_B.day, month: DPP_B.month - 1, year: DPP_B.year }) },
            { label: "B", text: formatDate(DPP_B), correct: true },
            { label: "C", text: formatDate({ day: DPP_B.day, month: DPP_B.month, year: DPP_B.year + 1 }) },
            { label: "D", text: formatDate({ day: 1, month: DPP_B.month, year: DPP_B.year }) },
          ],
          explanation: `Janeiro está entre janeiro e março, então soma 9 meses no mesmo ano. ${DPP_B.steps.join(". ")}. DPP = ${formatDate(DPP_B)}.`,
          difficulty: "dificil",
          source: 0,
          status: "published",
        },
        ...(EXTRA_QUESTIONS["regra-de-naegele-data-provavel-do-parto"] ?? []),
      ],
      status: "published",
      lastReviewedAt: REVIEWED_ON,
      reviewNotes: AUTO_REVIEW_NOTE + " Alternativas numéricas geradas por src/core/calc/naegele (testada com os 3 exemplos do CAB 32).",
    },
  ],
};

export const CRIANCA: CategorySeed = {
  slug: "saude-da-crianca",
  title: "Saúde da Criança",
  shortTitle: "Saúde da Criança",
  description: "Amamentação e triagem neonatal (teste do pezinho).",
  tone: "amber",
  icon: "👶",
  status: "published",
  topics: [
    {
      slug: "aleitamento-materno",
      title: "Aleitamento materno",
      description: "Exclusivo até 6 meses, continuado até 2 anos ou mais.",
      summary:
        "O Guia Alimentar para Crianças Brasileiras Menores de 2 Anos (Ministério da Saúde, 2019) recomenda que a criança seja amamentada já na primeira hora de vida e por 2 anos ou mais. Nos primeiros 6 meses, a recomendação é que ela receba somente leite materno — a amamentação exclusiva. Nesse período nenhum outro alimento é necessário: nem líquidos como água, água de coco, chá, suco ou outros leites, nem papinha ou mingau. Mesmo em regiões secas e quentes não é preciso oferecer água, porque o leite materno tem toda a água necessária; em dias quentes a criança pode querer mamar com mais frequência. Oferecer outros alimentos antes dos 6 meses, além de desnecessário, pode prejudicar: aumenta o risco de adoecer e pode atrapalhar a absorção de nutrientes do leite materno, como ferro e zinco. O guia orienta amamentar em livre demanda e diz que não há tempo máximo estabelecido para o fim da amamentação.",
      keyPoints: [
        "Amamentar já na primeira hora de vida.",
        "Exclusivo até os 6 meses: só leite materno.",
        "Sem água, chá, suco ou outros leites na amamentação exclusiva — nem em dias quentes.",
        "Continuar até 2 anos ou mais.",
        "Outros alimentos antes dos 6 meses podem prejudicar a absorção de ferro e zinco.",
        "Livre demanda: sempre que a criança pedir.",
      ],
      map: {
        title: "Aleitamento materno",
        spec: {
          layout: "flow",
          center: "Guia Alimentar < 2 anos (MS, 2019)",
          blocks: [
            { title: "1ª hora de vida", tone: "amber", icon: "🤱", items: ["Começar a amamentar"] },
            { title: "0 a 6 meses", tone: "green", icon: "🍼", items: ["Só leite materno", "Sem água, chá, suco, outros leites", "Livre demanda"] },
            { title: "6 meses a 2 anos ou mais", tone: "blue", icon: "🥣", items: ["Leite materno + outros alimentos", "Sem tempo máximo para parar"] },
          ],
        },
      },
      sections: SECTIONS_2["aleitamento-materno"] ?? [],
      sources: [at(SRC.guiaAlimentar2, "capítulo 'Amamentação até os 2 anos ou mais e exclusiva até os 6 meses' e orientações de como amamentar")],
      questions: [
        {
          key: "crianca-am-1",
          section: "recomendacao",
          stem: "Segundo o Guia Alimentar para Crianças Brasileiras Menores de 2 Anos (MS, 2019), em dias muito quentes, um bebê de 3 meses em amamentação exclusiva:",
          options: [
            { label: "A", text: "deve receber água filtrada entre as mamadas." },
            { label: "B", text: "deve receber chá ou água de coco para hidratar." },
            { label: "C", text: "não precisa de água, pois o leite materno tem toda a água necessária; ele pode querer mamar com mais frequência.", correct: true },
            { label: "D", text: "deve iniciar suco natural de frutas." },
          ],
          explanation:
            "O guia é explícito: mesmo em regiões secas e quentes não é necessário oferecer água a crianças alimentadas só com leite materno; em dias quentes, ela poderá querer mamar com mais frequência.",
          difficulty: "facil",
          source: 0,
          status: "published",
        },
        {
          key: "crianca-am-2",
          section: "recomendacao",
          stem: "A recomendação do Ministério da Saúde no Guia Alimentar para Crianças Menores de 2 Anos é amamentação:",
          options: [
            { label: "A", text: "exclusiva até 4 meses e continuada até 1 ano." },
            { label: "B", text: "exclusiva até 6 meses e continuada até 2 anos ou mais.", correct: true },
            { label: "C", text: "exclusiva até 1 ano." },
            { label: "D", text: "exclusiva até 6 meses, com interrupção obrigatória aos 2 anos." },
          ],
          explanation: "Exclusiva nos primeiros 6 meses e por 2 anos ou mais; o guia diz que não há tempo máximo estabelecido para o fim.",
          difficulty: "facil",
          source: 0,
          status: "published",
        },
        ...(EXTRA_QUESTIONS["aleitamento-materno"] ?? []),
      ],
      status: "published",
      lastReviewedAt: REVIEWED_ON,
      reviewNotes: AUTO_REVIEW_NOTE,
    },
    {
      slug: "teste-do-pezinho-triagem-neonatal",
      title: "Teste do pezinho (triagem neonatal)",
      description: "Período ideal de coleta, técnica e a ampliação da Lei 14.154/2021.",
      summary:
        "O Manual Técnico de Triagem Neonatal Biológica (Ministério da Saúde, 2016) recomenda que a primeira amostra do teste do pezinho seja colhida entre o 3º e o 5º dia de vida do bebê; coleta após o 28º dia é considerada exceção, por estar fora do período neonatal. Na técnica, o calcanhar deve ficar abaixo do nível do coração, com o bebê no colo do acompanhante em pé. A assepsia é feita com algodão ou gaze levemente umedecidos em álcool 70%, aguardando a secagem completa; álcool iodado ou antisséptico colorido não devem ser usados, porque interferem nos resultados. A punção é feita numa das laterais da região plantar do calcanhar, com lanceta própria. O manual de 2016 descreve seis doenças no escopo do programa. A Lei nº 14.154/2021 alterou o ECA e prevê a ampliação escalonada do teste no SUS em cinco etapas, começando pela fenilcetonúria, hipotireoidismo congênito, doença falciforme, fibrose cística, hiperplasia adrenal congênita, deficiência de biotinidase e toxoplasmose congênita.",
      keyPoints: [
        "1ª amostra: entre o 3º e o 5º dia de vida.",
        "Após o 28º dia: coleta de exceção (fora do período neonatal).",
        "Calcanhar abaixo do nível do coração.",
        "Assepsia com álcool 70% e secagem completa; nunca álcool iodado ou antisséptico colorido.",
        "Punção numa das laterais da região plantar do calcanhar.",
        "Lei 14.154/2021: ampliação escalonada em 5 etapas.",
      ],
      map: {
        title: "Teste do pezinho",
        spec: {
          layout: "flow",
          center: "Coleta da 1ª amostra",
          blocks: [
            { title: "Quando", tone: "amber", icon: "📅", items: ["3º ao 5º dia de vida", "Após 28º dia = exceção"] },
            { title: "Como", tone: "green", icon: "🦶", items: ["Calcanhar abaixo do coração", "Álcool 70%, esperar secar", "Lateral da região plantar do calcanhar"] },
            { title: "Não usar", tone: "rose", icon: "⛔", items: ["Álcool iodado", "Antisséptico colorido"] },
            { title: "Escopo", tone: "blue", icon: "📜", items: ["Lei 14.154/2021: 5 etapas", "Etapa 1 inclui toxoplasmose congênita"] },
          ],
        },
      },
      sections: SECTIONS_2["teste-do-pezinho-triagem-neonatal"] ?? [],
      sources: [
        at(SRC.triagemNeonatal, "'Data ideal para a coleta', 'Procedimentos de coleta' e 'Secagem da amostra'"),
        at(SRC.lei14154, "art. 1º (altera o art. 10 do ECA)"),
      ],
      questions: [
        {
          key: "crianca-pezinho-1",
          section: "quando-coletar",
          stem: "Segundo o Manual Técnico de Triagem Neonatal Biológica (MS, 2016), o período ideal para a coleta da primeira amostra do teste do pezinho é:",
          options: [
            { label: "A", text: "nas primeiras 12 horas de vida." },
            { label: "B", text: "entre o 3º e o 5º dia de vida.", correct: true },
            { label: "C", text: "entre o 10º e o 15º dia de vida." },
            { label: "D", text: "no 28º dia de vida." },
          ],
          explanation: "O manual recomenda a 1ª amostra entre o 3º e o 5º dia de vida; após o 28º dia a coleta é considerada exceção.",
          difficulty: "facil",
          source: 0,
          status: "published",
        },
        {
          key: "crianca-pezinho-2",
          section: "tecnica-de-coleta",
          stem: "Na coleta do teste do pezinho, conforme o manual do Ministério da Saúde, a assepsia do calcanhar deve ser feita com:",
          options: [
            { label: "A", text: "álcool iodado, para melhor antissepsia." },
            { label: "B", text: "clorexidina alcoólica colorida." },
            { label: "C", text: "algodão ou gaze levemente umedecidos com álcool 70%, aguardando a secagem completa.", correct: true },
            { label: "D", text: "água e sabão, sem secar." },
          ],
          explanation:
            "O manual orienta álcool 70% e secagem completa antes da punção, e proíbe álcool iodado ou antisséptico colorido porque interferem nos resultados.",
          difficulty: "media",
          source: 0,
          status: "published",
        },
        ...(EXTRA_QUESTIONS["teste-do-pezinho-triagem-neonatal"] ?? []),
      ],
      status: "published",
      lastReviewedAt: REVIEWED_ON,
      reviewNotes:
        AUTO_REVIEW_NOTE +
        " O manual é de 2016 (seis doenças no escopo). A Lei 14.154/2021 prevê ampliação escalonada: conferir na revisão humana em que etapa a implementação está.",
    },
  ],
};
