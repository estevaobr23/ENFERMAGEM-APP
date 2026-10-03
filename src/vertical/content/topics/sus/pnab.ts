import type { TopicSeed } from "@/core/content/types";
import { mcq } from "../../helpers";
import { REVIEWED_V2, SRC, V2_REVIEW_NOTE, at } from "../../sources";

/* Fonte única: Portaria GM/MS nº 2.436/2017 (PNAB), lida no Saúde Legis (arts. 2º a 5º e Anexo). */

export const PNAB: TopicSeed = {
  slug: "atencao-basica-pnab",
  title: "Atenção Básica: a PNAB",
  description: "Princípios e diretrizes, Saúde da Família, composição das equipes, parâmetros populacionais e atribuições do técnico de enfermagem.",
  summary:
    "A Política Nacional de Atenção Básica (Portaria nº 2.436/2017) considera Atenção Básica e Atenção Primária à Saúde termos equivalentes. A Atenção Básica é a porta de entrada preferencial do SUS e o centro de comunicação da Rede de Atenção à Saúde. Seus princípios são universalidade, equidade e integralidade; suas diretrizes, regionalização e hierarquização, territorialização, população adscrita, cuidado centrado na pessoa, resolutividade, longitudinalidade do cuidado, coordenação do cuidado, ordenação da rede e participação da comunidade. A Saúde da Família é a estratégia prioritária de expansão e consolidação. A equipe de Saúde da Família é composta no mínimo por médico, enfermeiro, auxiliar e/ou técnico de enfermagem e agente comunitário de saúde, podendo incluir agente de combate às endemias e profissionais de saúde bucal; todos cumprem 40 horas semanais. Recomenda-se população adscrita de 2.000 a 3.500 pessoas por equipe, até 4 equipes por UBS, e, em áreas de risco e vulnerabilidade, cobertura de 100% com no máximo 750 pessoas por ACS. As UBS devem funcionar no mínimo 40 horas semanais, 5 dias por semana, nos 12 meses do ano. Ao técnico e/ou auxiliar de enfermagem cabe participar das atividades de atenção realizando procedimentos regulamentados na UBS, no domicílio e em outros espaços comunitários, e realizar procedimentos como curativos, administração de medicamentos, vacinas, coleta de material para exames e preparo e esterilização de materiais, entre outras atividades delegadas pelo enfermeiro.",
  keyPoints: [
    "Atenção Básica e Atenção Primária à Saúde são termos equivalentes na PNAB.",
    "Princípios: universalidade, EQUIDADE e integralidade.",
    "Diretrizes: regionalização/hierarquização, territorialização, população adscrita, cuidado centrado na pessoa, resolutividade, longitudinalidade, coordenar o cuidado, ordenar as redes, participação da comunidade.",
    "Saúde da Família é a estratégia prioritária.",
    "eSF mínima: médico, enfermeiro, auxiliar e/ou técnico de enfermagem e ACS — todos com 40 h semanais.",
    "População adscrita recomendada: 2.000 a 3.500 pessoas por equipe; até 4 equipes por UBS.",
    "Áreas de risco: 100% de cobertura, no máximo 750 pessoas por ACS.",
    "Técnico: curativos, medicamentos, vacinas, coleta de exames, preparo e esterilização de materiais, entre outras delegadas pelo enfermeiro.",
  ],
  map: {
    title: "PNAB em um mapa",
    spec: {
      layout: "hub",
      center: "Atenção Básica — porta de entrada preferencial",
      blocks: [
        { title: "Princípios", tone: "blue", icon: "⚖️", items: ["Universalidade", "Equidade", "Integralidade"] },
        { title: "Diretrizes-chave", tone: "teal", icon: "🧭", items: ["Território e população adscrita", "Longitudinalidade", "Coordenar o cuidado", "Ordenar as redes"] },
        { title: "Saúde da Família", tone: "green", icon: "🏡", items: ["Médico, enfermeiro, técnico/auxiliar, ACS", "40 h para todos", "2.000–3.500 pessoas"] },
        { title: "Técnico de enfermagem", tone: "amber", icon: "🧑‍⚕️", items: ["Curativos, vacinas, medicamentos", "Coleta de exames", "Na UBS e no domicílio"] },
      ],
    },
  },
  sections: [
    {
      id: "visao-geral",
      kind: "visao",
      title: "A porta de entrada preferencial",
      source: 0,
      blocks: [
        {
          type: "definition",
          term: "Atenção Básica na PNAB",
          text: "Porta de entrada ==preferencial== do SUS, espaço privilegiado de gestão do cuidado e ==base para o ordenamento da rede== e para a efetivação da integralidade.",
          note: "A PNAB considera Atenção Básica (AB) e Atenção Primária à Saúde (APS) ==termos equivalentes==.",
        },
        {
          type: "callout",
          variant: "dica",
          title: "Ligação com o Decreto 7.508",
          text: "A atenção primária é uma das portas de entrada e ==ordena o acesso== na rede regionalizada.",
        },
      ],
    },
    {
      id: "principios-e-diretrizes",
      kind: "classificacao",
      title: "Princípios e diretrizes",
      source: 0,
      blocks: [
        {
          type: "cards",
          items: [
            { title: "Universalidade", tag: "princípio", text: "Acesso universal e contínuo; porta de entrada aberta e preferencial (primeiro contato); receber e ouvir todas as pessoas.", icon: "🚪", tone: "blue" },
            { title: "Equidade", tag: "princípio", text: "Ofertar o cuidado ==reconhecendo as diferenças== e conforme as necessidades; proibida qualquer exclusão.", icon: "⚖️", tone: "violet" },
            { title: "Integralidade", tag: "princípio", text: "Cuidado, promoção, prevenção, cura, reabilitação, redução de danos e ==cuidados paliativos==.", icon: "🧩", tone: "teal" },
          ],
        },
        {
          type: "checklist",
          title: "Diretrizes",
          items: [
            "Regionalização e hierarquização (AB como ponto de comunicação da RAS)",
            "Territorialização e adstrição",
            "==População adscrita== (vínculo e responsabilização)",
            "Cuidado centrado na pessoa",
            "Resolutividade (resolver a grande maioria dos problemas)",
            "==Longitudinalidade do cuidado== (continuidade ao longo do tempo)",
            "==Coordenar o cuidado== (centro de comunicação entre os pontos)",
            "==Ordenar as redes==",
            "Participação da comunidade",
          ],
        },
      ],
    },
    {
      id: "equipes",
      kind: "conceito",
      title: "Saúde da Família e equipes",
      source: 0,
      blocks: [
        {
          type: "compare",
          columns: ["Equipe de Saúde da Família (eSF)", "Equipe de Atenção Básica (eAB)"],
          rows: [
            { label: "Papel", cells: ["==Estratégia prioritária== de expansão e consolidação da AB", "Modalidade conforme as necessidades do município; pode migrar para o modelo da ESF"] },
            { label: "Composição mínima", cells: ["Médico, enfermeiro, ==auxiliar e/ou técnico de enfermagem== e ==ACS==; pode ter ACE e saúde bucal", "Médico, enfermeiro, auxiliares e/ou técnicos de enfermagem; pode agregar ACS, ACE e saúde bucal"] },
            { label: "Carga horária", cells: ["==40 horas semanais para todos==; vínculo a apenas 1 eSF", "Mínimo de 10 h por categoria, até 3 profissionais por categoria, somando 40 h"] },
          ],
        },
      ],
    },
    {
      id: "parametros",
      kind: "numeros",
      title: "Parâmetros que caem",
      source: 0,
      blocks: [
        {
          type: "numbers",
          items: [
            { value: "2.000–3.500", label: "pessoas adscritas por equipe (eAB/eSF)", note: "outros arranjos são possíveis conforme vulnerabilidade" },
            { value: "4", label: "equipes por UBS (recomendação)" },
            { value: "750", label: "pessoas por ACS no máximo", note: "em áreas de risco e vulnerabilidade, com 100% de cobertura" },
            { value: "40 h", label: "carga horária de todos os profissionais da eSF" },
            { value: "40 h · 5 dias · 12 meses", label: "funcionamento mínimo recomendado da UBS" },
            { value: "População ÷ 2.000", label: "fórmula do teto de equipes para financiamento" },
          ],
        },
      ],
    },
    {
      id: "atribuicoes-tecnico",
      kind: "tecnico",
      title: "Atribuições do técnico e/ou auxiliar de enfermagem (item 4.2.2)",
      source: 0,
      blocks: [
        {
          type: "steps",
          items: [
            { title: "Participar das atividades de atenção à saúde", text: "Realizando procedimentos regulamentados no exercício da profissão ==na UBS== e, quando indicado, ==no domicílio== e em espaços comunitários (escolas, associações).", who: "tecnico" },
            { title: "Realizar procedimentos de enfermagem", text: "Curativos, administração de medicamentos, ==vacinas==, coleta de material para exames, lavagem, preparo e esterilização de materiais, entre outras atividades ==delegadas pelo enfermeiro==.", who: "tecnico", why: "A PNAB reforça que o técnico atua dentro da regulamentação profissional e sob a delegação do enfermeiro (Lei 7.498)." },
            { title: "Exercer outras atribuições da sua área de atuação", who: "tecnico" },
          ],
        },
      ],
    },
    {
      id: "vigilancia-e-ab",
      kind: "cuidados",
      title: "Atenção Básica e Vigilância em Saúde",
      source: 0,
      blocks: [
        {
          type: "callout",
          variant: "lei",
          title: "Art. 5º",
          text: "A ==integração entre Vigilância em Saúde e Atenção Básica é condição essencial== para atender às necessidades de saúde da população, na ótica da integralidade.",
        },
        {
          type: "text",
          text: "ACS e ACE compõem uma eAB ou eSF e são coordenados de forma compartilhada entre a Atenção Básica e a Vigilância em Saúde.",
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
          title: "Montando uma equipe",
          scenario: "Um município quer implantar uma equipe de Saúde da Família com médico e enfermeiro de 40 horas, um técnico de enfermagem de 20 horas e nenhum agente comunitário, para atender 6.000 pessoas.",
          question: "O que está fora do que a PNAB estabelece?",
          answer: "Falta o ACS na composição mínima, o técnico precisa cumprir 40 horas e a população fica acima da faixa recomendada de 2.000 a 3.500 pessoas.",
          reasoning: [
            "eSF mínima inclui ACS.",
            "Na eSF, a carga horária de 40 horas é obrigatória para todos os profissionais.",
            "A recomendação é 2.000 a 3.500 pessoas por equipe (outros arranjos exigem justificativa local).",
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
            { wrong: "Na PNAB, a equidade não é princípio, apenas diretriz.", right: "Equidade é ==princípio== (com universalidade e integralidade).", why: "Art. 3º, I. Atenção: no art. 7º da Lei 8.080 o termo é igualdade." },
            { wrong: "Atenção Básica e Atenção Primária são conceitos diferentes na PNAB.", right: "São ==termos equivalentes==.", why: "Parágrafo único do art. 1º." },
            { wrong: "O ACS não integra a composição mínima da eSF.", right: "O ==ACS integra== a composição mínima da eSF.", why: "Junto com médico, enfermeiro e auxiliar/técnico de enfermagem." },
            { wrong: "Na eSF, os profissionais podem cumprir 20 horas semanais.", right: "==40 horas semanais== para todos os membros da eSF.", why: "Carga horária flexível é da eAB (mínimo 10 h por categoria somando 40 h)." },
            { wrong: "Cada ACS pode ter até 1.500 pessoas sob sua responsabilidade.", right: "No máximo ==750 pessoas por ACS== (áreas de risco e vulnerabilidade).", why: "Item da composição da eSF e da EACS." },
            { wrong: "A recomendação é de 4.000 a 5.000 pessoas por equipe.", right: "==2.000 a 3.500== pessoas por equipe.", why: "Parâmetro recomendado, admitidos outros arranjos." },
            { wrong: "Vacinar e coletar exames não estão entre as atribuições do técnico na AB.", right: "Estão: curativos, medicamentos, ==vacinas==, ==coleta de material==, preparo e esterilização de materiais.", why: "Item 4.2.2, II." },
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
            { slug: "decreto-7508-regioes-e-portas-de-entrada", title: "Decreto 7.508: regiões e portas de entrada", why: "Atenção primária como porta de entrada que ordena o acesso." },
            { slug: "principios-do-sus-lei-8080", title: "Princípios do SUS na Lei 8.080", why: "Igualdade (lei) × equidade (PNAB)." },
            { slug: "lei-7498-atribuicoes-do-tecnico", title: "Lei 7.498/86: o que cabe ao técnico", why: "O limite legal das atividades delegadas pelo enfermeiro." },
          ],
        },
      ],
    },
  ],
  sources: [at(SRC.pnab2436, "arts. 1º a 5º; Anexo, itens 1 a 4")],
  questions: [
    mcq({ key: "sus-pnab-1", section: "principios-e-diretrizes", difficulty: "facil",
      stem: "Segundo a Política Nacional de Atenção Básica (Portaria nº 2.436/2017), são princípios do SUS e da RAS a serem operacionalizados na Atenção Básica:",
      options: ["descentralização, hierarquização e participação.", "universalidade, equidade e integralidade.", "resolutividade, longitudinalidade e territorialização.", "gratuidade, seletividade e eficiência."], correct: 1,
      explanation: "Art. 3º, I: universalidade, equidade e integralidade. Resolutividade, longitudinalidade e territorialização são diretrizes." }),
    mcq({ key: "sus-pnab-2", section: "equipes", difficulty: "facil",
      stem: "A composição mínima da equipe de Saúde da Família, segundo a PNAB 2017, é:",
      options: ["médico e enfermeiro apenas.", "médico, enfermeiro, auxiliar e/ou técnico de enfermagem e agente comunitário de saúde.", "enfermeiro, dentista e farmacêutico.", "médico, assistente social e psicólogo."], correct: 1,
      explanation: "A eSF é composta no mínimo por médico, enfermeiro, auxiliar e/ou técnico de enfermagem e ACS, podendo incluir ACE e saúde bucal." }),
    mcq({ key: "sus-pnab-3", section: "parametros", difficulty: "media",
      stem: "A PNAB 2017 recomenda que a população adscrita por equipe de Atenção Básica ou de Saúde da Família seja de:",
      options: ["até 1.000 pessoas.", "2.000 a 3.500 pessoas.", "4.000 a 6.000 pessoas.", "10.000 pessoas."], correct: 1,
      explanation: "Recomenda-se de 2.000 a 3.500 pessoas por equipe, admitidos outros arranjos conforme vulnerabilidades e riscos." }),
    mcq({ key: "sus-pnab-4", section: "parametros", difficulty: "media",
      stem: "Em áreas de grande dispersão territorial, risco e vulnerabilidade social, a PNAB recomenda cobertura de 100% da população com, no máximo:",
      options: ["400 pessoas por ACS.", "750 pessoas por ACS.", "1.200 pessoas por ACS.", "2.000 pessoas por ACS."], correct: 1,
      explanation: "Máximo de 750 pessoas por agente comunitário de saúde." }),
    mcq({ key: "sus-pnab-5", section: "atribuicoes-tecnico", difficulty: "facil",
      stem: "É atribuição do técnico e/ou auxiliar de enfermagem na Atenção Básica, segundo a PNAB:",
      options: ["realizar consultas clínicas e prescrever medicamentos.", "realizar procedimentos como curativos, administração de medicamentos, vacinas e coleta de material para exames, entre outras atividades delegadas pelo enfermeiro.", "indicar internação hospitalar.", "planejar e gerenciar sozinho as ações dos ACS."], correct: 1,
      explanation: "Item 4.2.2, II da PNAB. Consulta clínica e indicação de internação são atribuições médicas." }),
    mcq({ key: "sus-pnab-6", section: "equipes", difficulty: "media",
      stem: "Para a equipe de Saúde da Família, a PNAB 2017 estabelece carga horária:",
      options: ["de 20 horas semanais para técnicos de enfermagem.", "de 40 horas semanais obrigatória para todos os profissionais membros da eSF.", "livre, definida por cada profissional.", "de 30 horas para médicos e 40 para os demais."], correct: 1,
      explanation: "Há obrigatoriedade de 40 horas semanais para todos os profissionais da eSF, que só podem estar vinculados a uma equipe." }),
    mcq({ key: "sus-pnab-7", section: "principios-e-diretrizes", difficulty: "media",
      stem: "A diretriz da Atenção Básica que pressupõe a continuidade da relação de cuidado, com vínculo e responsabilização entre profissionais e usuários ao longo do tempo, é a:",
      options: ["territorialização.", "longitudinalidade do cuidado.", "regionalização.", "hierarquização."], correct: 1,
      explanation: "É a definição de longitudinalidade do cuidado na PNAB." }),
    mcq({ key: "sus-pnab-8", section: "visao-geral", difficulty: "dificil",
      stem: "Sobre os termos Atenção Básica e Atenção Primária à Saúde, a PNAB 2017:",
      options: ["os considera termos equivalentes, associando a ambos os mesmos princípios e diretrizes.", "reserva 'Atenção Primária' para a rede privada.", "define a Atenção Primária como nível hospitalar.", "proíbe o uso do termo Atenção Primária."], correct: 0,
      explanation: "O parágrafo único do art. 1º considera AB e APS termos equivalentes." }),
  ],
  status: "published",
  standard: "v2",
  lastReviewedAt: REVIEWED_V2,
  reviewNotes: V2_REVIEW_NOTE + " A PNAB 2017 está consolidada na Portaria de Consolidação nº 2/2017 e teve alterações posteriores (ex.: financiamento e eMulti); conferir na revisão humana se algum parâmetro mudou.",
};
