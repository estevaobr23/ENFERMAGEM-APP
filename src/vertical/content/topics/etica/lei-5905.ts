import type { TopicSeed } from "@/core/content/types";
import { mcq } from "../../helpers";
import { REVIEWED_V2, SRC, V2_REVIEW_NOTE, at } from "../../sources";

/* Fonte única: Lei 5.905/1973 (Planalto), arts. 1º a 18. */

export const LEI_5905: TopicSeed = {
  slug: "lei-5905-sistema-cofen-coren",
  title: "Lei 5.905/73: o sistema Cofen/Coren",
  description: "Natureza dos conselhos, composição, mandatos, competências do Cofen e dos Corens, receita e penas.",
  summary:
    "A Lei nº 5.905/1973 criou o Conselho Federal de Enfermagem (Cofen) e os Conselhos Regionais de Enfermagem (Coren), que juntos formam uma autarquia e são órgãos disciplinadores do exercício da profissão de enfermeiro e das demais profissões da enfermagem. O Cofen, ao qual os Corens são subordinados, tem jurisdição em todo o território nacional e sede na Capital da República; há um Coren em cada Estado e no Distrito Federal, com sede na capital. O Cofen tem nove membros efetivos e igual número de suplentes, brasileiros e com diploma de enfermagem de nível superior, eleitos na Assembleia dos Delegados Regionais. Os Corens têm de cinco a vinte e um membros (número sempre ímpar), na proporção de três quintos de enfermeiros e dois quintos das demais categorias, eleitos por voto pessoal, secreto e obrigatório — quem deixa de votar sem causa justa paga multa equivalente à anuidade. Os mandatos são honoríficos, de três anos, com uma reeleição. Compete ao Cofen, entre outros, elaborar o código de deontologia (ética), instalar os Corens, julgar em grau de recurso as decisões regionais e instituir o modelo da carteira profissional. Compete aos Corens deliberar sobre inscrição e cancelamento, disciplinar e fiscalizar o exercício profissional, conhecer e decidir os assuntos de ética impondo penalidades, expedir a carteira profissional — que tem fé pública e serve como documento de identidade — e fixar o valor da anuidade. As penas são advertência verbal, multa, censura, suspensão e cassação; as quatro primeiras são dos Corens e a cassação, do Cofen, ouvido o Coren interessado.",
  keyPoints: [
    "Cofen + Corens = uma autarquia; órgãos disciplinadores do exercício da enfermagem.",
    "Cofen: jurisdição nacional, sede na capital; Corens subordinados a ele.",
    "Um Coren em cada Estado e no DF, com sede na capital.",
    "Cofen: 9 membros efetivos e 9 suplentes, enfermeiros de nível superior.",
    "Coren: 5 a 21 membros (ímpar), 3/5 enfermeiros e 2/5 demais categorias; voto obrigatório.",
    "Mandatos honoríficos de 3 anos, uma reeleição.",
    "Coren: inscrição, fiscalização, ética e penalidades, carteira profissional (fé pública, identidade), anuidade.",
    "Penas: advertência, multa, censura, suspensão (Coren) e cassação (Cofen, ouvido o Coren).",
  ],
  map: {
    title: "Sistema Cofen/Coren",
    spec: {
      layout: "compare",
      center: "Lei 5.905/1973 — uma autarquia",
      blocks: [
        { title: "Cofen", tone: "slate", icon: "🏛️", items: ["Jurisdição nacional", "9 efetivos + 9 suplentes", "Código de ética e recursos", "Aplica a cassação"] },
        { title: "Coren", tone: "teal", icon: "🏢", items: ["Um por Estado e no DF", "5 a 21 membros (3/5 enfermeiros)", "Inscrição, fiscalização, carteira", "Aplica as outras 4 penas"] },
      ],
    },
  },
  sections: [
    {
      id: "visao-geral",
      kind: "visao",
      title: "Quem fiscaliza a enfermagem",
      source: 0,
      blocks: [
        {
          type: "definition",
          term: "Arts. 1º e 2º",
          text: "São criados o ==Cofen== e os ==Corens==, constituindo em seu conjunto ==uma autarquia==. São ==órgãos disciplinadores do exercício da profissão== de enfermeiro e das demais profissões compreendidas nos serviços de enfermagem.",
        },
        {
          type: "cards",
          items: [
            { title: "Cofen", text: "Jurisdição em ==todo o território nacional==, sede na Capital da República; os Corens são ==subordinados== a ele.", icon: "🏛️", tone: "slate" },
            { title: "Coren", text: "Um em ==cada Estado e no DF==, sede na capital. Com menos de 50 profissionais, o Cofen pode formar regiões com mais de uma unidade.", icon: "🏢", tone: "teal" },
          ],
        },
      ],
    },
    {
      id: "composicao",
      kind: "classificacao",
      title: "Composição, eleição e mandato",
      source: 0,
      blocks: [
        {
          type: "compare",
          columns: ["Cofen", "Coren"],
          rows: [
            { label: "Membros", cells: ["==9 efetivos== e 9 suplentes", "==5 a 21== efetivos e outros tantos suplentes; ==número sempre ímpar=="] },
            { label: "Quem pode", cells: ["Brasileiros com diploma de enfermagem de ==nível superior==", "Brasileiros: ==3/5 enfermeiros== e ==2/5 das demais categorias=="] },
            { label: "Eleição", cells: ["Maioria de votos, escrutínio secreto, na ==Assembleia dos Delegados Regionais==", "Voto ==pessoal, secreto e obrigatório==; chapas separadas para enfermeiros e demais"] },
            { label: "Mandato", cells: ["Honorífico, ==3 anos==, uma reeleição", "Honorífico, ==3 anos==, uma reeleição"] },
          ],
        },
        {
          type: "callout",
          variant: "atencao",
          title: "Faltou ao voto?",
          text: "Quem deixar de votar ==sem causa justa== paga multa no valor ==da anuidade==, aplicada pelo Coren.",
        },
      ],
    },
    {
      id: "competencias",
      kind: "etapas",
      title: "O que compete a cada um",
      source: 0,
      blocks: [
        {
          type: "compare",
          columns: ["Cofen (art. 8º)", "Coren (art. 15)"],
          rows: [
            { label: "Normas", cells: ["Elaborar o ==código de deontologia== (ética), ouvidos os Corens; aprovar regimentos; baixar provimentos", "Fazer executar as instruções do Cofen; elaborar seu regimento e orçamento para aprovação do Cofen"] },
            { label: "Exercício profissional", cells: ["Instalar os Corens; dirimir dúvidas; homologar, suprir ou anular atos dos Corens", "==Deliberar sobre inscrição e cancelamento==; ==disciplinar e fiscalizar== o exercício; manter o registro dos profissionais"] },
            { label: "Ética", cells: ["Apreciar ==em grau de recurso== as decisões dos Corens", "==Conhecer e decidir os assuntos de ética==, impondo as penalidades"] },
            { label: "Documentos e dinheiro", cells: ["Instituir o ==modelo da carteira== e as insígnias; aprovar as contas da autarquia", "==Expedir a carteira profissional== (fé pública, documento de identidade); ==fixar a anuidade==; prestar contas ao Cofen até 28 de fevereiro"] },
          ],
        },
      ],
    },
    {
      id: "receita-e-penas",
      kind: "cuidados",
      title: "Receita e penas",
      source: 0,
      blocks: [
        {
          type: "compare",
          columns: ["Cofen", "Coren"],
          rows: [
            { label: "Carteiras, multas e anuidades", cells: ["==1/4== da taxa de carteiras, das multas e das anuidades", "==3/4== da taxa de carteiras, das multas e das anuidades"] },
          ],
        },
        {
          type: "steps",
          items: [
            { title: "Penas do art. 18", text: "Advertência verbal · multa · censura · suspensão do exercício · cassação do direito ao exercício." },
            { title: "Corens aplicam as quatro primeiras", text: "Advertência, multa, censura e suspensão." },
            { title: "Cofen aplica a cassação", text: "==Ouvido o Conselho Regional interessado== (art. 18, § 1º)." },
          ],
        },
      ],
    },
    {
      id: "para-o-tecnico",
      kind: "tecnico",
      title: "O que isso significa para o técnico",
      source: 0,
      blocks: [
        {
          type: "checklist",
          items: [
            "Inscrever-se no ==Coren do Estado== onde vai trabalhar (é o Coren que delibera sobre a inscrição)",
            "Pagar a anuidade fixada pelo Coren",
            "Votar nas eleições do Coren — o voto é obrigatório",
            "Usar a carteira profissional, que tem fé pública e serve como documento de identidade",
            "Saber que a apuração ética começa no Coren e o recurso vai ao Cofen",
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
            { value: "9", label: "membros efetivos do Cofen" },
            { value: "5 a 21", label: "membros do Coren (ímpar)" },
            { value: "3/5 · 2/5", label: "enfermeiros · demais categorias no Coren" },
            { value: "3 anos", label: "mandato, com uma reeleição" },
            { value: "1/4 · 3/4", label: "divisão de carteiras, multas e anuidades (Cofen · Coren)" },
            { value: "5", label: "faltas no ano sem licença → perda do mandato de conselheiro" },
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
          title: "Mudança de Estado",
          scenario: "Uma técnica inscrita no Coren de um Estado passa num concurso em outro Estado. Ela também deixou de votar na última eleição do Coren, sem justificativa.",
          question: "O que a Lei 5.905 diz sobre essas duas situações?",
          answer: "A inscrição é deliberada pelo Coren da jurisdição onde ela vai exercer; e quem deixa de votar sem causa justa paga multa no valor da anuidade.",
          reasoning: [
            "Art. 15, I: compete aos Corens deliberar sobre inscrição e cancelamento.",
            "Lei 7.498, art. 2º: exercício só com inscrição no Coren com jurisdição na área.",
            "Art. 12, § 2º: multa equivalente à anuidade para quem não vota sem causa justa.",
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
            { wrong: "Cofen e Corens são autarquias independentes, sem subordinação.", right: "Formam ==uma autarquia==, e os Corens são ==subordinados ao Cofen==.", why: "Arts. 1º e 3º." },
            { wrong: "O Cofen é composto por 15 membros efetivos.", right: "==9 efetivos== e igual número de suplentes.", why: "Art. 5º." },
            { wrong: "Os Corens têm metade de enfermeiros e metade das demais categorias.", right: "==3/5 enfermeiros e 2/5== das demais categorias.", why: "Art. 11." },
            { wrong: "Quem expede a carteira profissional é o Cofen.", right: "Quem ==expede== é o Coren; o Cofen institui o ==modelo==.", why: "Art. 8º, VII e art. 15, VII." },
            { wrong: "O mandato dos conselheiros é remunerado e de 4 anos.", right: "==Honorífico, 3 anos==, uma reeleição.", why: "Arts. 9º e 14." },
            { wrong: "O voto nas eleições do Coren é facultativo.", right: "É ==obrigatório==; ausência sem causa justa gera multa.", why: "Art. 12." },
            { wrong: "O Cofen aplica a cassação sem ouvir o Coren.", right: "Cassação pelo Cofen, ==ouvido o Coren interessado==.", why: "Art. 18, § 1º." },
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
            { slug: "codigo-de-etica-infracoes-e-penalidades", title: "Código de Ética: infrações e penalidades", why: "Como o código detalha as penas do art. 18." },
            { slug: "lei-7498-atribuicoes-do-tecnico", title: "Lei 7.498/86: o que cabe ao técnico", why: "Inscrição no Coren como condição para exercer." },
            { slug: "codigo-de-etica-cofen-564", title: "Código de Ética (Resolução Cofen 564/2017)", why: "O código de deontologia que o Cofen elabora." },
          ],
        },
      ],
    },
  ],
  sources: [at(SRC.lei5905, "arts. 1º a 18")],
  questions: [
    mcq({ key: "etica-5905-1", section: "visao-geral", difficulty: "facil",
      stem: "Segundo a Lei nº 5.905/1973, o Conselho Federal e os Conselhos Regionais de Enfermagem são:",
      options: ["sindicatos da categoria.", "órgãos disciplinadores do exercício da profissão, constituindo em conjunto uma autarquia.", "associações civis sem fins lucrativos.", "órgãos do Ministério da Saúde."], correct: 1,
      explanation: "Arts. 1º e 2º: Cofen e Corens constituem uma autarquia e são órgãos disciplinadores do exercício profissional." }),
    mcq({ key: "etica-5905-2", section: "competencias", difficulty: "media",
      stem: "Compete aos Conselhos Regionais de Enfermagem, segundo a Lei nº 5.905/1973:",
      options: ["elaborar o Código de Deontologia de Enfermagem.", "deliberar sobre inscrição e cancelamento e disciplinar e fiscalizar o exercício profissional.", "apreciar em grau de recurso as decisões do Cofen.", "instituir o modelo da carteira profissional."], correct: 1,
      explanation: "Art. 15, I e II. Elaborar o código e instituir o modelo da carteira são do Cofen; o Cofen aprecia recursos das decisões dos Corens." }),
    mcq({ key: "etica-5905-3", section: "composicao", difficulty: "media",
      stem: "O Conselho Federal de Enfermagem é composto por:",
      options: ["5 membros efetivos.", "9 membros efetivos e igual número de suplentes.", "21 membros efetivos.", "um representante de cada Estado."], correct: 1,
      explanation: "Art. 5º: nove membros efetivos e igual número de suplentes, brasileiros, com diploma de enfermagem de nível superior." }),
    mcq({ key: "etica-5905-4", section: "composicao", difficulty: "dificil",
      stem: "Os Conselhos Regionais de Enfermagem são compostos na proporção de:",
      options: ["metade de enfermeiros e metade das demais categorias.", "três quintos de enfermeiros e dois quintos das demais categorias.", "dois terços de enfermeiros e um terço de técnicos.", "somente enfermeiros."], correct: 1,
      explanation: "Art. 11: cinco a vinte e um membros, na proporção de três quintos de enfermeiros e dois quintos das demais categorias." }),
    mcq({ key: "etica-5905-5", section: "composicao", difficulty: "media",
      stem: "O mandato dos membros do Cofen e dos Corens, segundo a Lei nº 5.905/1973, é:",
      options: ["remunerado, de 4 anos, sem reeleição.", "honorífico, de 3 anos, admitida uma reeleição.", "vitalício.", "de 2 anos, com reeleições ilimitadas."], correct: 1,
      explanation: "Arts. 9º e 14: honorífico, três anos, uma reeleição." }),
    mcq({ key: "etica-5905-6", section: "receita-e-penas", difficulty: "media",
      stem: "Pela Lei nº 5.905/1973, a pena de cassação do direito ao exercício profissional é da alçada:",
      options: ["dos Conselhos Regionais.", "do Conselho Federal, ouvido o Conselho Regional interessado.", "do Ministério do Trabalho.", "da Justiça do Trabalho."], correct: 1,
      explanation: "Art. 18, § 1º: penas I a IV são dos Corens; a cassação (V), do Cofen, ouvido o Coren interessado." }),
    mcq({ key: "etica-5905-7", section: "competencias", difficulty: "media",
      stem: "A carteira profissional expedida pelo Coren, segundo a Lei nº 5.905/1973:",
      options: ["vale apenas no Estado de expedição.", "tem fé pública em todo o território nacional e serve de documento de identidade.", "é dispensável para o exercício.", "é expedida pelo Ministério da Educação."], correct: 1,
      explanation: "Art. 15, VII: carteira indispensável ao exercício, com fé pública em todo o território nacional e valor de documento de identidade." }),
    mcq({ key: "etica-5905-8", section: "composicao", difficulty: "dificil",
      stem: "Ao profissional que, sem causa justa, deixar de votar nas eleições do Conselho Regional, a Lei nº 5.905/1973 prevê:",
      options: ["suspensão do exercício por 30 dias.", "multa em importância correspondente ao valor da anuidade.", "cancelamento da inscrição.", "nenhuma consequência, pois o voto é facultativo."], correct: 1,
      explanation: "Art. 12, § 2º: multa correspondente ao valor da anuidade, aplicada pelo Coren." }),
  ],
  status: "published",
  standard: "v2",
  lastReviewedAt: REVIEWED_V2,
  reviewNotes: V2_REVIEW_NOTE + " A lei original vincula a autarquia ao 'Ministério do Trabalho e Previdência Social' (estrutura da época).",
};
