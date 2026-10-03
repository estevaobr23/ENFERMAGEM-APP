import type { TopicSeed } from "@/core/content/types";
import { mcq } from "../../helpers";
import { REVIEWED_V2, SRC, V2_REVIEW_NOTE, at } from "../../sources";

/* Fontes: [0] Lei 7.498/1986 (arts. 2º, 11 a 13 e 15); [1] Decreto 94.406/1987 (arts. 10, 11 e 13). */

export const LEI_7498: TopicSeed = {
  slug: "lei-7498-atribuicoes-do-tecnico",
  title: "Lei 7.498/86: o que cabe ao técnico",
  description: "Quem pode exercer a enfermagem, enfermeiro × técnico × auxiliar, atividades privativas, o que o Decreto 94.406 detalha e a supervisão.",
  summary:
    "A Lei nº 7.498/1986 diz que a enfermagem é exercida privativamente pelo Enfermeiro, pelo Técnico de Enfermagem, pelo Auxiliar de Enfermagem e pela Parteira, e só por pessoas legalmente habilitadas e inscritas no Conselho Regional de Enfermagem com jurisdição na área. O Enfermeiro exerce todas as atividades de enfermagem; são privativas dele, entre outras, a direção do órgão de enfermagem e a chefia de serviço e de unidade, o planejamento, a organização, a coordenação, a execução e a avaliação dos serviços de assistência de enfermagem, a consultoria, auditoria e emissão de parecer, a consulta de enfermagem, a prescrição da assistência de enfermagem, os cuidados diretos a pacientes graves com risco de vida e os cuidados de maior complexidade técnica que exijam conhecimentos científicos e capacidade de decisão imediata. O Técnico de Enfermagem exerce atividade de nível médio, com orientação e acompanhamento do trabalho em grau auxiliar e participação no planejamento da assistência: participa da programação da assistência, executa ações assistenciais exceto as privativas do enfermeiro, participa da orientação e supervisão do trabalho em grau auxiliar e integra a equipe de saúde. O Auxiliar exerce atividades de nível médio de natureza repetitiva, sob supervisão, e participa em nível de execução simples. O Decreto nº 94.406/1987 detalha que o técnico assiste o enfermeiro no planejamento, na prestação de cuidados diretos a pacientes em estado grave, na prevenção de doenças transmissíveis, no controle da infecção hospitalar e na prevenção de danos ao paciente. Em instituições e programas de saúde, as atividades do técnico e do auxiliar só podem ser desempenhadas sob orientação e supervisão de enfermeiro.",
  keyPoints: [
    "Exercem a enfermagem: Enfermeiro, Técnico, Auxiliar e Parteira — só com inscrição no Coren da área.",
    "Enfermeiro exerce TODAS as atividades de enfermagem.",
    "Privativo do enfermeiro: chefia e direção, planejamento dos serviços, consulta e prescrição da assistência, cuidados a graves com risco de vida, maior complexidade técnica.",
    "Técnico: participa da programação; executa ações, exceto as privativas; participa da orientação e supervisão em grau auxiliar; integra a equipe.",
    "Auxiliar: atividades repetitivas, execução simples, sob supervisão.",
    "Decreto 94.406: técnico ASSISTE o enfermeiro nos cuidados a pacientes em estado grave.",
    "Técnico e auxiliar em instituições e programas de saúde: só sob orientação e supervisão de enfermeiro (art. 15).",
    "Decreto, art. 13: atividades do técnico e do auxiliar sob supervisão, orientação e direção de enfermeiro.",
  ],
  map: {
    title: "Quem faz o quê",
    spec: {
      layout: "compare",
      center: "Lei 7.498/1986 + Decreto 94.406/1987",
      blocks: [
        { title: "Técnico de Enfermagem", tone: "teal", icon: "🧑‍⚕️", items: ["Participa da programação da assistência", "Executa ações, exceto as privativas", "Assiste o enfermeiro com pacientes graves", "Sob orientação e supervisão do enfermeiro"] },
        { title: "Privativo do Enfermeiro", tone: "slate", icon: "🔒", items: ["Consulta de enfermagem", "Prescrição da assistência de enfermagem", "Cuidados diretos a graves com risco de vida", "Maior complexidade técnica"] },
      ],
    },
  },
  sections: [
    {
      id: "visao-geral",
      kind: "visao",
      title: "A lei que define o seu limite",
      source: 0,
      blocks: [
        {
          type: "text",
          text: "Saber o que é ==privativo do enfermeiro== protege o técnico de executar o que não pode e responde a muitas questões de 'é atribuição do técnico, EXCETO'. A Lei 7.498 dá o quadro geral; o Decreto 94.406 detalha.",
        },
        {
          type: "definition",
          term: "Art. 2º",
          text: "A enfermagem é exercida ==privativamente== pelo Enfermeiro, pelo Técnico de Enfermagem, pelo Auxiliar de Enfermagem e pela Parteira, respeitados os graus de habilitação, e só por pessoas ==inscritas no Coren== com jurisdição na área onde ocorre o exercício.",
        },
      ],
    },
    {
      id: "quem-faz-o-que",
      kind: "classificacao",
      title: "Enfermeiro × Técnico × Auxiliar",
      source: 0,
      blocks: [
        {
          type: "compare",
          columns: ["Enfermeiro (art. 11)", "Técnico (art. 12)", "Auxiliar (art. 13)"],
          rows: [
            { label: "Nível", cells: ["Superior; exerce ==todas== as atividades de enfermagem", "Nível médio: orientação e acompanhamento em ==grau auxiliar== e participação no planejamento", "Nível médio, natureza ==repetitiva==, execução simples, sob supervisão"] },
            { label: "Faz", cells: ["Privativo: chefia e direção, planejamento dos serviços, consulta e prescrição da assistência, cuidados a graves com risco de vida, maior complexidade técnica", "Participa da programação da assistência; executa ações ==exceto as privativas==; participa da orientação e supervisão em grau auxiliar; integra a equipe", "Observa, reconhece e descreve sinais e sintomas; tratamento simples; higiene e conforto; integra a equipe"] },
          ],
        },
      ],
    },
    {
      id: "privativas",
      kind: "conceito",
      title: "O que é privativo do enfermeiro (art. 11, I)",
      lead: "As alíneas d a g foram vetadas — não caem como privativas.",
      source: 0,
      blocks: [
        {
          type: "checklist",
          items: [
            "Direção do órgão de enfermagem e ==chefia de serviço e de unidade== de enfermagem",
            "Organização e direção dos serviços de enfermagem nas empresas prestadoras",
            "==Planejamento, organização, coordenação, execução e avaliação== dos serviços da assistência de enfermagem",
            "Consultoria, auditoria e emissão de parecer sobre matéria de enfermagem",
            "==Consulta de enfermagem==",
            "==Prescrição da assistência de enfermagem==",
            "==Cuidados diretos a pacientes graves com risco de vida==",
            "Cuidados de ==maior complexidade técnica== que exijam conhecimentos científicos e decisões imediatas",
          ],
        },
        {
          type: "callout",
          variant: "atencao",
          title: "Como integrante da equipe (art. 11, II)",
          text: "O enfermeiro também prescreve ==medicamentos estabelecidos em programas de saúde pública e em rotina aprovada== pela instituição, assiste gestante, parturiente e puérpera e executa ==parto sem distocia== — mas isso não é 'privativo'.",
        },
      ],
    },
    {
      id: "decreto-94406",
      kind: "etapas",
      title: "O que o Decreto 94.406/1987 detalha",
      lead: "O técnico ASSISTE o enfermeiro — o verbo é a chave.",
      source: 1,
      blocks: [
        {
          type: "steps",
          items: [
            { title: "Assistir ao enfermeiro (art. 10, I)", text: "No planejamento, programação, orientação e supervisão da assistência; na prestação de cuidados diretos a ==pacientes em estado grave==; na prevenção e controle das doenças transmissíveis; no controle sistemático da infecção hospitalar; na prevenção de danos físicos ao paciente.", who: "tecnico" },
            { title: "Executar a assistência (art. 10, II)", text: "Atividades de assistência de enfermagem, ==excetuadas as privativas do enfermeiro==.", who: "tecnico" },
            { title: "Integrar a equipe de saúde (art. 10, III)", who: "tecnico" },
            { title: "Sob supervisão (art. 13)", text: "As atividades dos arts. 10 e 11 só podem ser exercidas ==sob supervisão, orientação e direção de enfermeiro==.", who: "enfermeiro" },
          ],
        },
        {
          type: "cards",
          items: [
            { title: "Auxiliar no decreto (art. 11)", text: "Ministrar medicamentos por via oral e parenteral, controle hídrico, curativos, oxigenoterapia, nebulização, vacinas, coleta de material para exames, cuidados pré e pós-operatórios, entre outros.", icon: "🩹", tone: "blue" },
          ],
        },
      ],
    },
    {
      id: "supervisao",
      kind: "tecnico",
      title: "Supervisão do enfermeiro na prática",
      source: 0,
      blocks: [
        {
          type: "callout",
          variant: "lei",
          title: "Art. 15 da Lei 7.498",
          text: "As atividades do técnico e do auxiliar, quando exercidas em ==instituições de saúde, públicas e privadas, e em programas de saúde==, somente podem ser desempenhadas ==sob orientação e supervisão de enfermeiro==.",
        },
        {
          type: "dodont",
          do: [
            "Executar a assistência dentro do que foi planejado e prescrito pelo enfermeiro",
            "Assistir o enfermeiro nos cuidados ao paciente grave",
            "Comunicar ao enfermeiro alterações observadas no paciente",
          ],
          dont: [
            "Fazer consulta de enfermagem",
            "Prescrever a assistência de enfermagem",
            "Assumir sozinho o cuidado direto ao paciente grave com risco de vida",
            "Assumir chefia de unidade de enfermagem",
          ],
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
            { value: "4", label: "categorias que exercem a enfermagem", note: "enfermeiro, técnico, auxiliar, parteira" },
            { value: "Art. 11", label: "atribuições do enfermeiro (I = privativas)" },
            { value: "Art. 12", label: "atribuições do técnico" },
            { value: "Art. 15", label: "supervisão do enfermeiro sobre técnico e auxiliar" },
            { value: "Art. 10", label: "técnico no Decreto 94.406" },
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
          title: "Plantão sem enfermeiro na unidade",
          scenario: "Numa clínica privada, o enfermeiro faltou e a coordenação pede que a técnica mais experiente faça a consulta de enfermagem dos pacientes agendados e cuide sozinha de um paciente instável em risco de vida.",
          question: "O que a Lei 7.498 permite à técnica?",
          answer: "Nenhuma das duas: consulta de enfermagem e cuidados diretos a pacientes graves com risco de vida são privativos do enfermeiro; a técnica atua sob supervisão do enfermeiro e assiste nos cuidados ao grave.",
          reasoning: [
            "Art. 11, I, i e l: consulta e cuidados a graves com risco de vida são privativos.",
            "Art. 15: em instituições públicas e privadas, a técnica atua sob orientação e supervisão de enfermeiro.",
            "Decreto 94.406, art. 10, I, b: o técnico assiste o enfermeiro nos cuidados ao paciente grave.",
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
            { wrong: "O técnico pode fazer a prescrição da assistência de enfermagem.", right: "Prescrição da assistência é ==privativa do enfermeiro== (art. 11, I, j).", why: "Ao técnico cabe executar, exceto o privativo." },
            { wrong: "O técnico presta cuidados diretos a pacientes graves com risco de vida.", right: "Isso é privativo; o técnico ==assiste== o enfermeiro nesses cuidados.", why: "Lei, art. 11, I, l + Decreto, art. 10, I, b." },
            { wrong: "Em hospital privado, o técnico pode atuar sem supervisão.", right: "Instituições ==públicas e privadas==: sob orientação e supervisão do enfermeiro.", why: "Art. 15." },
            { wrong: "Basta ter diploma de técnico para exercer a profissão.", right: "É preciso estar ==inscrito no Coren== com jurisdição na área.", why: "Art. 2º." },
            { wrong: "Participar da programação da assistência é privativo do enfermeiro.", right: "O técnico ==participa== da programação (art. 12, a).", why: "Planejar e coordenar os serviços é do enfermeiro; participar da programação é do técnico." },
            { wrong: "O auxiliar e o técnico têm exatamente as mesmas atribuições.", right: "O auxiliar faz atividades ==repetitivas e de execução simples==; o técnico participa do planejamento e da orientação em grau auxiliar.", why: "Arts. 12 e 13." },
            { wrong: "A consulta de enfermagem pode ser delegada ao técnico em falta de pessoal.", right: "Atividade ==privativa não se delega==, exceto em emergência (CEPE, art. 91).", why: "O Código de Ética proíbe delegar atividades privativas do enfermeiro." },
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
            { slug: "codigo-de-etica-cofen-564", title: "Código de Ética (Resolução Cofen 564/2017)", why: "Direitos, deveres e proibições do profissional." },
            { slug: "lei-5905-sistema-cofen-coren", title: "Lei 5.905/73: o sistema Cofen/Coren", why: "Quem fiscaliza o exercício e mantém a inscrição." },
            { slug: "atencao-basica-pnab", title: "Atenção Básica: a PNAB", why: "As atribuições do técnico na UBS." },
          ],
        },
      ],
    },
  ],
  sources: [at(SRC.lei7498v2, "arts. 2º, 11, 12, 13 e 15"), at(SRC.decreto94406v2, "arts. 10, 11 e 13")],
  questions: [
    mcq({ key: "etica-7498-1", section: "privativas", difficulty: "facil",
      stem: "De acordo com a Lei nº 7.498/1986, é atividade PRIVATIVA do Enfermeiro:",
      options: ["participar da equipe de saúde.", "prescrição da assistência de enfermagem.", "participar da programação da assistência de enfermagem.", "executar ações assistenciais de enfermagem."], correct: 1,
      explanation: "A prescrição da assistência de enfermagem está no art. 11, I (privativo do Enfermeiro). As outras alternativas estão no art. 12, entre as atribuições do Técnico." }),
    mcq({ key: "etica-7498-2", section: "supervisao", difficulty: "facil",
      stem: "Pelo art. 15 da Lei nº 7.498/1986, quando exercidas em instituições de saúde, públicas e privadas, e em programas de saúde, as atividades do Técnico e do Auxiliar de Enfermagem:",
      options: ["dispensam supervisão após 5 anos de experiência.", "somente podem ser desempenhadas sob orientação e supervisão de Enfermeiro.", "são supervisionadas pelo médico plantonista.", "podem ser supervisionadas por outro técnico mais antigo."], correct: 1,
      explanation: "É a redação do art. 15: só sob orientação e supervisão de Enfermeiro." }),
    mcq({ key: "etica-7498-3", section: "decreto-94406", difficulty: "media",
      stem: "Pelo Decreto nº 94.406/1987, na prestação de cuidados diretos de enfermagem a pacientes em estado grave, cabe ao Técnico de Enfermagem:",
      options: ["assumir sozinho o cuidado, por ser atividade de nível médio.", "assistir ao Enfermeiro.", "prescrever os cuidados de enfermagem.", "nenhuma participação, pois é atividade exclusiva do médico."], correct: 1,
      explanation: "O art. 10, I, b do decreto diz que o técnico assiste ao Enfermeiro na prestação de cuidados diretos a pacientes em estado grave.", source: 1 }),
    mcq({ key: "etica-7498-4", section: "visao-geral", difficulty: "facil",
      stem: "Segundo a Lei nº 7.498/1986, a enfermagem só pode ser exercida por pessoas legalmente habilitadas e:",
      options: ["filiadas a sindicato da categoria.", "inscritas no Conselho Regional de Enfermagem com jurisdição na área onde ocorre o exercício.", "aprovadas em concurso público.", "registradas no Ministério da Saúde."], correct: 1,
      explanation: "Art. 2º: exercício privativo das categorias habilitadas, inscritas no Coren com jurisdição na área." }),
    mcq({ key: "etica-7498-5", section: "quem-faz-o-que", difficulty: "media",
      stem: "É atribuição do Técnico de Enfermagem prevista no art. 12 da Lei nº 7.498/1986:",
      options: ["consulta de enfermagem.", "participar da orientação e supervisão do trabalho de enfermagem em grau auxiliar.", "direção do órgão de enfermagem da instituição.", "emissão de parecer sobre matéria de enfermagem."], correct: 1,
      explanation: "O art. 12 lista: participar da programação, executar ações exceto as privativas, participar da orientação e supervisão em grau auxiliar e participar da equipe. As demais alternativas são privativas do enfermeiro." }),
    mcq({ key: "etica-7498-6", section: "privativas", difficulty: "media",
      stem: "NÃO é atividade privativa do Enfermeiro, segundo o art. 11, I, da Lei nº 7.498/1986:",
      options: ["consulta de enfermagem.", "cuidados diretos de enfermagem a pacientes graves com risco de vida.", "executar ações assistenciais de enfermagem.", "chefia de serviço e de unidade de enfermagem."], correct: 2,
      explanation: "Executar ações assistenciais é atribuição também do técnico (art. 12, b), exceto as privativas. As outras três são privativas do enfermeiro." }),
    mcq({ key: "etica-7498-7", section: "quem-faz-o-que", difficulty: "media",
      stem: "O profissional de enfermagem que exerce atividades de nível médio, de natureza repetitiva, sob supervisão, com participação em nível de execução simples, é, pela Lei nº 7.498/1986, o:",
      options: ["Enfermeiro.", "Técnico de Enfermagem.", "Auxiliar de Enfermagem.", "Obstetriz."], correct: 2,
      explanation: "É a descrição do art. 13 (Auxiliar de Enfermagem)." }),
    mcq({ key: "etica-7498-8", section: "decreto-94406", difficulty: "dificil",
      stem: "O art. 13 do Decreto nº 94.406/1987 estabelece que as atividades do Técnico e do Auxiliar de Enfermagem somente poderão ser exercidas:",
      options: ["após dois anos de formado.", "sob supervisão, orientação e direção de Enfermeiro.", "com autorização do diretor clínico.", "em unidades de baixa complexidade."], correct: 1,
      explanation: "Art. 13 do decreto: as atividades dos arts. 10 e 11 somente poderão ser exercidas sob supervisão, orientação e direção de Enfermeiro.", source: 1 }),
  ],
  status: "published",
  standard: "v2",
  lastReviewedAt: REVIEWED_V2,
  reviewNotes: V2_REVIEW_NOTE,
};
