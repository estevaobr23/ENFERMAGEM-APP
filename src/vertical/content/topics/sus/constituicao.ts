import type { TopicSeed } from "@/core/content/types";
import { mcq } from "../../helpers";
import { REVIEWED_V2, SRC, V2_REVIEW_NOTE, at } from "../../sources";

/* Fonte única: Constituição Federal, arts. 196 a 200, lidos no Planalto (texto compilado). */

export const SUS_CONSTITUICAO: TopicSeed = {
  slug: "sus-na-constituicao-arts-196-a-200",
  title: "SUS na Constituição (arts. 196 a 200)",
  description: "Saúde como direito de todos, as três diretrizes do art. 198, a participação privada complementar e as competências do SUS.",
  summary:
    "A Constituição de 1988 trata da saúde nos arts. 196 a 200. O art. 196 afirma que a saúde é direito de todos e dever do Estado, garantido por políticas sociais e econômicas que reduzam o risco de doença e outros agravos e pelo acesso universal e igualitário às ações e serviços de promoção, proteção e recuperação. O art. 197 declara as ações e serviços de saúde de relevância pública, executados diretamente ou por terceiros, inclusive pessoas físicas ou jurídicas de direito privado. O art. 198 diz que as ações e serviços públicos integram uma rede regionalizada e hierarquizada e constituem um sistema único, organizado por três diretrizes: descentralização com direção única em cada esfera de governo; atendimento integral, com prioridade para as atividades preventivas, sem prejuízo dos serviços assistenciais; e participação da comunidade. O SUS é financiado com recursos da seguridade social, da União, dos Estados, do DF e dos Municípios; a União aplica no mínimo 15% da receita corrente líquida. O art. 199 deixa a assistência livre à iniciativa privada, que participa do SUS de forma complementar, por contrato de direito público ou convênio, com preferência às entidades filantrópicas e sem fins lucrativos; é vedado destinar recursos públicos a instituições privadas com fins lucrativos e vedada a comercialização de órgãos, tecidos, sangue e derivados. O art. 200 lista competências do SUS, como executar vigilância sanitária, epidemiológica e saúde do trabalhador, ordenar a formação de recursos humanos e fiscalizar alimentos, bebidas e água para consumo humano.",
  keyPoints: [
    "Art. 196: saúde é direito de todos e dever do Estado; acesso universal e igualitário.",
    "Art. 197: ações e serviços de saúde são de relevância pública.",
    "Art. 198: rede regionalizada e hierarquizada; sistema único com 3 diretrizes.",
    "Diretrizes: descentralização (direção única por esfera), atendimento integral (prioridade preventiva) e participação da comunidade.",
    "União aplica no mínimo 15% da receita corrente líquida em saúde.",
    "Art. 199: privado participa de forma complementar, por contrato de direito público ou convênio; preferência a filantrópicas e sem fins lucrativos.",
    "Vedado recurso público para auxílio ou subvenção a privada com fins lucrativos; vedada comercialização de órgãos, tecidos e sangue.",
    "Art. 200: SUS executa vigilância sanitária, epidemiológica e saúde do trabalhador e ordena a formação de recursos humanos.",
  ],
  map: {
    title: "Saúde na Constituição",
    spec: {
      layout: "flow",
      center: "CF/1988 · arts. 196 a 200",
      blocks: [
        { title: "196 · Direito", tone: "blue", icon: "⚖️", items: ["Direito de todos, dever do Estado", "Acesso universal e igualitário"] },
        { title: "198 · Sistema único", tone: "teal", icon: "🧭", items: ["Descentralização", "Atendimento integral", "Participação da comunidade"] },
        { title: "199 · Privado", tone: "amber", icon: "🤝", items: ["Livre à iniciativa privada", "No SUS: complementar", "Preferência: filantrópicas"] },
        { title: "200 · Competências", tone: "green", icon: "🛠️", items: ["Vigilâncias e saúde do trabalhador", "Formação de RH", "Alimentos, bebidas, água"] },
      ],
    },
  },
  sections: [
    {
      id: "visao-geral",
      kind: "visao",
      title: "Onde o SUS nasce",
      lead: "A Lei 8.080 regulamenta; a Constituição define. Muita questão começa aqui.",
      source: 0,
      blocks: [
        {
          type: "text",
          text: "A saúde está na Constituição dentro da ==seguridade social== (com previdência e assistência social), na Seção II, ==arts. 196 a 200==. Cada artigo tem um papel: direito, relevância pública, organização, participação privada e competências.",
        },
        {
          type: "steps",
          items: [
            { title: "Art. 196 — o direito" },
            { title: "Art. 197 — relevância pública" },
            { title: "Art. 198 — sistema único e suas diretrizes; financiamento" },
            { title: "Art. 199 — iniciativa privada" },
            { title: "Art. 200 — competências do SUS" },
          ],
        },
      ],
    },
    {
      id: "direito-e-relevancia",
      kind: "conceito",
      title: "Arts. 196 e 197: direito e relevância pública",
      source: 0,
      blocks: [
        {
          type: "definition",
          term: "Art. 196",
          text: "A saúde é ==direito de todos e dever do Estado==, garantido mediante políticas sociais e econômicas que visem à ==redução do risco de doença e de outros agravos== e ao ==acesso universal e igualitário== às ações e serviços para sua ==promoção, proteção e recuperação==.",
        },
        {
          type: "definition",
          term: "Art. 197",
          text: "São de ==relevância pública== as ações e serviços de saúde. Cabe ao Poder Público dispor sobre sua regulamentação, fiscalização e controle; a execução pode ser ==direta ou através de terceiros==, inclusive pessoa física ou jurídica de direito privado.",
        },
        {
          type: "callout",
          variant: "dica",
          title: "Promoção, proteção e recuperação",
          text: "A tríade do art. 196 aparece de novo na Lei 8.080. Repare: a Constituição diz acesso ==universal e igualitário==.",
        },
      ],
    },
    {
      id: "diretrizes-art-198",
      kind: "classificacao",
      title: "Art. 198: as três diretrizes do sistema único",
      source: 0,
      blocks: [
        {
          type: "text",
          text: "As ações e serviços públicos de saúde integram uma ==rede regionalizada e hierarquizada== e constituem um ==sistema único==, organizado de acordo com:",
        },
        {
          type: "cards",
          items: [
            { title: "I · Descentralização", text: "Com ==direção única em cada esfera de governo==.", icon: "🗺️", tone: "amber" },
            { title: "II · Atendimento integral", text: "Com ==prioridade para as atividades preventivas==, sem prejuízo dos serviços assistenciais.", icon: "🧩", tone: "teal" },
            { title: "III · Participação da comunidade", text: "A comunidade participa da gestão do sistema.", icon: "🤝", tone: "green" },
          ],
        },
        {
          type: "callout",
          variant: "atencao",
          title: "Diretriz × princípio",
          text: "Na Constituição são ==diretrizes== (art. 198). A Lei 8.080 manda seguir essas diretrizes e ==ainda== os princípios do seu art. 7º.",
        },
      ],
    },
    {
      id: "financiamento",
      kind: "numeros",
      title: "Financiamento e números que caem",
      source: 0,
      blocks: [
        {
          type: "text",
          text: "O SUS é financiado com recursos do ==orçamento da seguridade social==, da União, dos Estados, do DF e dos Municípios, além de outras fontes (art. 198, § 1º). Cada ente aplica anualmente um mínimo em ações e serviços públicos de saúde.",
        },
        {
          type: "numbers",
          items: [
            { value: "15%", label: "mínimo da União", note: "da receita corrente líquida do exercício (EC 86/2015)" },
            { value: "3", label: "diretrizes do art. 198" },
            { value: "196–200", label: "artigos da Seção II — Da Saúde" },
            { value: "5 anos", label: "reavaliação da lei complementar dos percentuais", note: "pelo menos a cada cinco anos (art. 198, § 3º)" },
          ],
        },
      ],
    },
    {
      id: "iniciativa-privada",
      kind: "cuidados",
      title: "Art. 199: a iniciativa privada",
      source: 0,
      blocks: [
        {
          type: "dodont",
          do: [
            "Assistência à saúde é livre à iniciativa privada",
            "Privado participa do SUS de forma complementar, segundo as diretrizes do SUS",
            "Por contrato de direito público ou convênio",
            "Preferência às entidades filantrópicas e sem fins lucrativos",
          ],
          dont: [
            "Recursos públicos para auxílios ou subvenções a privadas com fins lucrativos",
            "Participação de empresas ou capital estrangeiro na assistência, salvo casos previstos em lei",
            "Qualquer comercialização de órgãos, tecidos, substâncias humanas, sangue e derivados",
          ],
        },
      ],
    },
    {
      id: "competencias-art-200",
      kind: "tecnico",
      title: "Art. 200: o que compete ao SUS",
      lead: "Lista de competências que aparece em questões de 'assinale a correta'.",
      source: 0,
      blocks: [
        {
          type: "checklist",
          items: [
            "Controlar e fiscalizar procedimentos, produtos e substâncias de interesse para a saúde; participar da produção de medicamentos, equipamentos, imunobiológicos e hemoderivados",
            "Executar as ações de ==vigilância sanitária e epidemiológica== e as de ==saúde do trabalhador==",
            "==Ordenar a formação de recursos humanos== na área de saúde",
            "Participar da formulação da política e da execução das ações de ==saneamento básico==",
            "Incrementar o desenvolvimento científico, tecnológico e a inovação",
            "Fiscalizar e inspecionar ==alimentos==, incluindo teor nutricional, ==bebidas e águas== para consumo humano",
            "Participar do controle de substâncias psicoativas, tóxicas e radioativas",
            "Colaborar na proteção do meio ambiente, ==nele compreendido o do trabalho==",
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
          title: "Hospital privado no SUS",
          scenario: "Um município não tem leitos suficientes e quer usar leitos de um hospital privado com fins lucrativos e de uma santa casa filantrópica. Um vereador propõe também dar uma subvenção em dinheiro ao hospital privado para reformar a ala.",
          question: "O que a Constituição permite?",
          answer: "Contratar ou conveniar os serviços de forma complementar, com preferência para a santa casa; a subvenção ao hospital com fins lucrativos é vedada.",
          reasoning: [
            "Art. 199, § 1º: participação complementar por contrato de direito público ou convênio.",
            "Preferência às entidades filantrópicas e sem fins lucrativos.",
            "Art. 199, § 2º: vedada a destinação de recursos públicos para auxílios ou subvenções a privadas com fins lucrativos.",
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
            { wrong: "O art. 198 prevê atendimento integral com prioridade para os serviços assistenciais.", right: "Prioridade para as ==atividades preventivas==, sem prejuízo dos assistenciais.", why: "A banca inverte a prioridade." },
            { wrong: "A saúde é direito de todos e dever do Estado e da família, em igual medida.", right: "O art. 196 diz ==direito de todos e dever do Estado==.", why: "A Lei 8.080 é que acrescenta que o dever do Estado não exclui o das pessoas, família, empresas e sociedade." },
            { wrong: "A iniciativa privada participa do SUS de forma substitutiva.", right: "De forma ==complementar==.", why: "Art. 199, § 1º." },
            { wrong: "As instituições privadas com fins lucrativos têm preferência para participar do SUS.", right: "Preferência para ==filantrópicas e sem fins lucrativos==.", why: "Art. 199, § 1º." },
            { wrong: "Descentralização com direção compartilhada entre as esferas.", right: "Descentralização com ==direção única em cada esfera de governo==.", why: "Art. 198, I." },
            { wrong: "Fiscalizar alimentos e água não é competência do SUS.", right: "É competência do SUS (art. 200, VI).", why: "Inclui teor nutricional, bebidas e águas para consumo humano." },
            { wrong: "A União aplica no mínimo 12% da receita corrente líquida.", right: "No mínimo ==15%== da receita corrente líquida.", why: "Redação dada pela EC 86/2015 ao art. 198, § 2º, I." },
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
            { slug: "principios-do-sus-lei-8080", title: "Princípios do SUS na Lei 8.080", why: "Os princípios que se somam às diretrizes do art. 198." },
            { slug: "lei-8080-organizacao-e-competencias", title: "Lei 8.080: organização, campo de atuação e competências", why: "A lei que regulamenta estes artigos." },
            { slug: "participacao-da-comunidade-lei-8142", title: "Conferências e Conselhos de Saúde (Lei 8.142)", why: "Como a participação da comunidade funciona na prática." },
          ],
        },
      ],
    },
  ],
  sources: [at(SRC.cf88, "arts. 196 a 200")],
  questions: [
    mcq({ key: "sus-cf-1", section: "direito-e-relevancia", difficulty: "facil",
      stem: "Segundo o art. 196 da Constituição Federal, a saúde é:",
      options: ["direito dos contribuintes da previdência e dever do Estado.", "direito de todos e dever do Estado.", "dever exclusivo da família.", "direito de todos e dever dos municípios."], correct: 1,
      explanation: "Art. 196: a saúde é direito de todos e dever do Estado, garantido por políticas sociais e econômicas e pelo acesso universal e igualitário." }),
    mcq({ key: "sus-cf-2", section: "diretrizes-art-198", difficulty: "facil",
      stem: "São diretrizes do Sistema Único de Saúde previstas no art. 198 da Constituição:",
      options: ["universalidade, equidade e integralidade.", "descentralização com direção única em cada esfera; atendimento integral com prioridade para as atividades preventivas; participação da comunidade.", "centralização, hierarquização e privatização.", "gratuidade, seletividade e distributividade."], correct: 1,
      explanation: "O art. 198 lista três diretrizes: descentralização com direção única, atendimento integral com prioridade preventiva e participação da comunidade." }),
    mcq({ key: "sus-cf-3", section: "diretrizes-art-198", difficulty: "media",
      stem: "Pela Constituição, o atendimento integral no SUS deve ter prioridade para:",
      options: ["os serviços assistenciais hospitalares.", "as atividades preventivas, sem prejuízo dos serviços assistenciais.", "os procedimentos de alta complexidade.", "a atenção às urgências."], correct: 1,
      explanation: "Art. 198, II: atendimento integral, com prioridade para as atividades preventivas, sem prejuízo dos serviços assistenciais." }),
    mcq({ key: "sus-cf-4", section: "iniciativa-privada", difficulty: "media",
      stem: "Sobre a participação da iniciativa privada no SUS, a Constituição estabelece que:",
      options: ["é vedada em qualquer hipótese.", "ocorre de forma complementar, mediante contrato de direito público ou convênio, com preferência às entidades filantrópicas e sem fins lucrativos.", "ocorre de forma substitutiva quando o Estado não tiver serviços.", "dá preferência às empresas de capital estrangeiro."], correct: 1,
      explanation: "Art. 199, § 1º: participação complementar, por contrato de direito público ou convênio, preferência às filantrópicas e sem fins lucrativos." }),
    mcq({ key: "sus-cf-5", section: "iniciativa-privada", difficulty: "media",
      stem: "É vedado pela Constituição:",
      options: ["contratar serviços de entidades filantrópicas.", "destinar recursos públicos para auxílios ou subvenções a instituições privadas com fins lucrativos.", "a execução de serviços de saúde por pessoa jurídica de direito privado.", "a participação da comunidade no SUS."], correct: 1,
      explanation: "Art. 199, § 2º: é vedada a destinação de recursos públicos para auxílios ou subvenções às instituições privadas com fins lucrativos." }),
    mcq({ key: "sus-cf-6", section: "competencias-art-200", difficulty: "media",
      stem: "Compete ao SUS, nos termos do art. 200 da Constituição:",
      options: ["executar as ações de vigilância sanitária e epidemiológica, bem como as de saúde do trabalhador.", "administrar o regime geral de previdência social.", "emitir a carteira de trabalho.", "legislar sobre direito penal sanitário."], correct: 0,
      explanation: "O inciso II do art. 200 atribui ao SUS executar as ações de vigilância sanitária e epidemiológica e de saúde do trabalhador." }),
    mcq({ key: "sus-cf-7", section: "financiamento", difficulty: "dificil",
      stem: "De acordo com o art. 198, § 2º, I, da Constituição (redação da EC 86/2015), a União aplicará anualmente em ações e serviços públicos de saúde, no mínimo:",
      options: ["10% da receita corrente bruta.", "12% da arrecadação de impostos.", "15% da receita corrente líquida do respectivo exercício.", "25% do orçamento da seguridade social."], correct: 2,
      explanation: "A redação dada pela EC 86/2015 fixa o mínimo da União em 15% da receita corrente líquida do exercício financeiro." }),
    mcq({ key: "sus-cf-8", section: "direito-e-relevancia", difficulty: "media",
      stem: "O art. 197 da Constituição declara as ações e serviços de saúde como:",
      options: ["de interesse exclusivamente privado.", "de relevância pública, podendo ser executados diretamente ou através de terceiros.", "monopólio da União.", "atividade facultativa do Estado."], correct: 1,
      explanation: "Art. 197: são de relevância pública, cabendo ao Poder Público regulamentação, fiscalização e controle; execução direta ou por terceiros, inclusive pessoa privada." }),
  ],
  status: "published",
  standard: "v2",
  lastReviewedAt: REVIEWED_V2,
  reviewNotes: V2_REVIEW_NOTE,
};
