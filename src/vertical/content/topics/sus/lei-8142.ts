import type { TopicSeed } from "@/core/content/types";
import { mcq } from "../../helpers";
import { REVIEWED_V2, SRC, V2_REVIEW_NOTE, at } from "../../sources";

/* Fonte única: Lei 8.142/1990 (Planalto), arts. 1º a 4º, lidos no original. */

export const LEI_8142: TopicSeed = {
  slug: "participacao-da-comunidade-lei-8142",
  title: "Conferências e Conselhos de Saúde (Lei 8.142)",
  description: "As duas instâncias colegiadas, a paridade dos usuários, o repasse de recursos e o que o município precisa ter para recebê-los.",
  summary:
    "A Lei nº 8.142/1990 trata da participação da comunidade na gestão do SUS e das transferências de recursos. Em cada esfera de governo, o SUS conta, sem prejuízo das funções do Poder Legislativo, com duas instâncias colegiadas: a Conferência de Saúde e o Conselho de Saúde. A Conferência se reúne a cada quatro anos, com representação dos vários segmentos sociais, para avaliar a situação de saúde e propor diretrizes para a política de saúde; é convocada pelo Poder Executivo ou, extraordinariamente, por ela mesma ou pelo Conselho. O Conselho de Saúde é permanente e deliberativo, composto por representantes do governo, prestadores de serviço, profissionais de saúde e usuários, e atua na formulação de estratégias e no controle da execução da política, inclusive nos aspectos econômicos e financeiros; suas decisões são homologadas pelo chefe do poder legalmente constituído em cada esfera. A representação dos usuários é paritária em relação ao conjunto dos demais segmentos, e Conass e Conasems têm representação no Conselho Nacional de Saúde. Os recursos do Fundo Nacional de Saúde destinados à cobertura de ações nos municípios, estados e DF são repassados de forma regular e automática, sendo pelo menos 70% para os municípios. Para recebê-los, o ente deve contar com Fundo de Saúde, Conselho de Saúde paritário, plano de saúde, relatórios de gestão, contrapartida de recursos no orçamento e comissão de elaboração do Plano de Carreira, Cargos e Salários; se não cumprir, os recursos passam a ser administrados pelo Estado ou pela União.",
  keyPoints: [
    "Duas instâncias colegiadas em cada esfera: Conferência e Conselho de Saúde.",
    "Conferência: a cada 4 anos; avalia a situação e propõe diretrizes; convocada pelo Executivo (ou extraordinariamente por ela ou pelo Conselho).",
    "Conselho: permanente e deliberativo; governo, prestadores, profissionais e usuários.",
    "Decisões do Conselho são homologadas pelo chefe do poder em cada esfera.",
    "Usuários: representação paritária em relação ao conjunto dos demais segmentos (metade).",
    "Conass e Conasems têm representação no Conselho Nacional de Saúde.",
    "Repasse regular e automático; pelo menos 70% para os municípios.",
    "Para receber: Fundo, Conselho paritário, plano de saúde, relatório de gestão, contrapartida e comissão do PCCS.",
  ],
  map: {
    title: "Participação da comunidade",
    spec: {
      layout: "compare",
      center: "Lei 8.142/1990 · art. 1º",
      blocks: [
        { title: "Conferência de Saúde", tone: "blue", icon: "🗓️", items: ["Reúne-se a cada 4 anos", "Avalia a situação de saúde", "Propõe diretrizes da política", "Convocada pelo Executivo (ou extraordinariamente por ela ou pelo Conselho)"] },
        { title: "Conselho de Saúde", tone: "green", icon: "🏛️", items: ["Permanente e deliberativo", "Governo, prestadores, profissionais e usuários", "Controla a execução da política, inclusive finanças", "Decisões homologadas pelo chefe do poder"] },
      ],
      footnote: "Usuários = metade: paridade em relação ao conjunto dos demais segmentos.",
    },
  },
  sections: [
    {
      id: "visao-geral",
      kind: "visao",
      title: "Controle social e dinheiro: os dois assuntos da lei",
      source: 0,
      blocks: [
        {
          type: "cards",
          items: [
            { title: "Art. 1º — participação", text: "Conferência e Conselho de Saúde em ==cada esfera de governo==.", icon: "🤝", tone: "green" },
            { title: "Arts. 2º a 4º — recursos", text: "Como o Fundo Nacional de Saúde repassa recursos e o que o ente precisa ter para recebê-los.", icon: "💰", tone: "amber" },
          ],
        },
        {
          type: "callout",
          variant: "dica",
          title: "Por que existe",
          text: "A ==participação da comunidade== é diretriz da Constituição (art. 198, III) e princípio da Lei 8.080 (art. 7º, VIII). A Lei 8.142 diz como ela acontece.",
        },
      ],
    },
    {
      id: "duas-instancias",
      kind: "conceito",
      title: "As duas instâncias colegiadas",
      lead: "Em cada esfera de governo (municipal, estadual, federal) o SUS tem as duas.",
      source: 0,
      blocks: [
        {
          type: "definition",
          term: "Art. 1º da Lei 8.142/1990",
          text: "O SUS contará, em cada esfera de governo, ==sem prejuízo das funções do Poder Legislativo==, com duas instâncias colegiadas: a ==Conferência de Saúde== e o ==Conselho de Saúde==.",
        },
        {
          type: "compare",
          columns: ["Conferência de Saúde", "Conselho de Saúde"],
          rows: [
            { label: "Caráter", cells: ["Periódica", "==Permanente e deliberativo=="] },
            { label: "Quando", cells: ["==A cada 4 anos==", "Funciona continuamente"] },
            { label: "Quem participa", cells: ["Representação dos vários segmentos sociais", "Governo, prestadores de serviço, profissionais de saúde e usuários"] },
            { label: "Faz o quê", cells: ["Avalia a situação de saúde e ==propõe diretrizes== para a política", "Formula estratégias e ==controla a execução== da política, inclusive nos aspectos econômicos e financeiros"] },
            { label: "Convocação / homologação", cells: ["Pelo Poder Executivo ou, extraordinariamente, por ela mesma ou pelo Conselho", "Decisões ==homologadas pelo chefe do poder== legalmente constituído em cada esfera"] },
          ],
        },
      ],
    },
    {
      id: "paridade-dos-usuarios",
      kind: "classificacao",
      title: "Composição e paridade",
      lead: "A regra que mais cai: a metade dos usuários.",
      source: 0,
      blocks: [
        {
          type: "callout",
          variant: "lei",
          title: "§ 4º — paridade",
          text: "A representação dos ==usuários== nos Conselhos e Conferências é ==paritária em relação ao conjunto dos demais segmentos==. Na prática: usuários = 50%; governo + prestadores + profissionais = os outros 50%.",
        },
        {
          type: "cards",
          items: [
            { title: "Conass e Conasems", tag: "§ 3º", text: "Têm representação no ==Conselho Nacional de Saúde==.", icon: "🏛️", tone: "blue" },
            { title: "Regimento próprio", tag: "§ 5º", text: "Organização e normas de funcionamento em regimento próprio, ==aprovado pelo respectivo conselho==.", icon: "📘", tone: "slate" },
          ],
        },
      ],
    },
    {
      id: "recursos",
      kind: "etapas",
      title: "Como o dinheiro chega (arts. 2º e 3º)",
      source: 0,
      blocks: [
        {
          type: "steps",
          items: [
            { title: "Fundo Nacional de Saúde aloca recursos", text: "Custeio e capital do MS; investimentos previstos em lei orçamentária e no plano do MS; ==cobertura das ações e serviços de municípios, estados e DF==." },
            { title: "Repasse regular e automático", text: "Os recursos de cobertura vão aos entes ==de forma regular e automática==, pelos critérios do art. 35 da Lei 8.080." },
            { title: "Pelo menos 70% para os municípios", text: "O restante vai aos Estados (art. 3º, § 2º)." },
            { title: "Consórcios", text: "Municípios podem formar consórcio e remanejar entre si parcelas desses recursos." },
          ],
        },
      ],
    },
    {
      id: "requisitos-para-receber-recursos",
      kind: "cuidados",
      title: "O que o ente precisa ter (art. 4º)",
      source: 0,
      blocks: [
        {
          type: "checklist",
          items: [
            "Fundo de Saúde",
            "Conselho de Saúde com composição paritária",
            "Plano de saúde",
            "Relatórios de gestão",
            "Contrapartida de recursos para a saúde no próprio orçamento",
            "Comissão de elaboração do Plano de Carreira, Cargos e Salários (PCCS), com prazo de 2 anos para implantação",
          ],
        },
        {
          type: "callout",
          variant: "atencao",
          title: "Se não cumprir",
          text: "Os recursos passam a ser administrados pelos ==Estados== (no caso do município) ou pela ==União== (no caso do Estado ou do DF).",
        },
      ],
    },
    {
      id: "tecnico-e-controle-social",
      kind: "tecnico",
      title: "Onde o técnico entra no controle social",
      source: 0,
      blocks: [
        {
          type: "cards",
          items: [
            { title: "Como profissional de saúde", text: "É um dos ==segmentos== que compõem o Conselho, ao lado de governo, prestadores e usuários.", icon: "🧑‍⚕️", tone: "teal" },
            { title: "Como usuário", text: "Também pode participar como cidadão nas Conferências, que reúnem os vários segmentos sociais.", icon: "🙋", tone: "green" },
          ],
        },
        {
          type: "callout",
          variant: "dica",
          title: "Não confunda",
          text: "Os profissionais ==não== entram na metade dos usuários: a paridade é ==usuários × conjunto dos demais segmentos==.",
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
            { value: "4 anos", label: "periodicidade da Conferência de Saúde" },
            { value: "2", label: "instâncias colegiadas por esfera" },
            { value: "50%", label: "usuários nos Conselhos e Conferências", note: "paridade com o conjunto dos demais" },
            { value: "70%", label: "mínimo dos recursos repassados aos municípios" },
            { value: "6", label: "requisitos do art. 4º" },
            { value: "2 anos", label: "prazo para implantar o PCCS" },
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
          title: "Conselho montado pelo prefeito",
          scenario: "Um município cria o Conselho Municipal de Saúde com 20 membros: 6 do governo, 4 prestadores, 4 profissionais e 6 usuários. O prefeito diz que o Conselho será só consultivo e que se reunirá quando ele convocar.",
          question: "O que está em desacordo com a Lei 8.142?",
          answer: "Os usuários deveriam ser 10 (paridade com os demais 10), e o Conselho é permanente e deliberativo, não consultivo.",
          reasoning: [
            "Paridade: usuários = conjunto dos demais segmentos (10 × 10).",
            "§ 2º: caráter permanente e deliberativo.",
            "Sem Conselho paritário, o município descumpre o art. 4º e os recursos passam a ser administrados pelo Estado.",
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
            { wrong: "A Conferência de Saúde se reúne a cada 2 anos.", right: "A cada ==4 anos==.", why: "§ 1º do art. 1º." },
            { wrong: "O Conselho de Saúde é consultivo e temporário.", right: "É ==permanente e deliberativo==.", why: "§ 2º do art. 1º." },
            { wrong: "Os usuários ocupam 1/3 das vagas do Conselho.", right: "Representação ==paritária== em relação ao conjunto dos demais segmentos (metade).", why: "§ 4º." },
            { wrong: "As decisões do Conselho dispensam homologação.", right: "São ==homologadas pelo chefe do poder== legalmente constituído em cada esfera.", why: "§ 2º." },
            { wrong: "Só o Ministério da Saúde convoca a Conferência.", right: "Convoca o ==Poder Executivo== ou, extraordinariamente, a própria Conferência ou o Conselho.", why: "§ 1º." },
            { wrong: "Pelo menos 50% dos recursos de cobertura vão aos municípios.", right: "Pelo menos ==70%==.", why: "Art. 3º, § 2º." },
            { wrong: "Município sem Conselho paritário perde definitivamente os recursos.", right: "Os recursos passam a ser ==administrados pelo Estado==.", why: "Parágrafo único do art. 4º." },
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
            { slug: "principios-do-sus-lei-8080", title: "Princípios do SUS na Lei 8.080", why: "Participação da comunidade é o inciso VIII do art. 7º." },
            { slug: "sus-na-constituicao-arts-196-a-200", title: "SUS na Constituição (arts. 196 a 200)", why: "Participação da comunidade como diretriz do art. 198." },
            { slug: "lei-8080-organizacao-e-competencias", title: "Lei 8.080: organização, campo de atuação e competências", why: "CIB e CIT pactuam; Conselhos controlam — não confunda." },
          ],
        },
      ],
    },
  ],
  sources: [at(SRC.lei8142v2, "arts. 1º a 4º")],
  questions: [
    mcq({ key: "sus-8142-1", section: "duas-instancias", difficulty: "facil",
      stem: "Segundo a Lei nº 8.142/1990, a Conferência de Saúde reúne-se:",
      options: ["a cada dois anos, convocada exclusivamente pelo Conselho de Saúde.", "anualmente, para aprovar o orçamento do município.", "a cada quatro anos, para avaliar a situação de saúde e propor diretrizes para a formulação da política de saúde.", "sempre que houver epidemia, por convocação do Ministério da Saúde."], correct: 2,
      explanation: "O § 1º do art. 1º diz que a Conferência se reúne a cada quatro anos para avaliar a situação de saúde e propor diretrizes; é convocada pelo Executivo ou, extraordinariamente, por ela mesma ou pelo Conselho." }),
    mcq({ key: "sus-8142-2", section: "paridade-dos-usuarios", difficulty: "media",
      stem: "Sobre o Conselho de Saúde, conforme a Lei nº 8.142/1990, assinale a alternativa correta.",
      options: ["Tem caráter temporário e consultivo.", "Tem caráter permanente e deliberativo, e a representação dos usuários é paritária em relação ao conjunto dos demais segmentos.", "É formado apenas por profissionais de saúde e gestores.", "Suas decisões dispensam homologação."], correct: 1,
      explanation: "O § 2º define o Conselho como permanente e deliberativo; o § 4º estabelece a paridade dos usuários." }),
    mcq({ key: "sus-8142-3", section: "requisitos-para-receber-recursos", difficulty: "media",
      stem: "Pelo art. 4º da Lei nº 8.142/1990, para receber os recursos do Fundo Nacional de Saúde, o município deve contar, entre outros requisitos, com:",
      options: ["hospital próprio de alta complexidade.", "Fundo de Saúde, Conselho de Saúde paritário, plano de saúde e relatórios de gestão.", "aprovação prévia da Conferência Nacional de Saúde.", "consórcio com pelo menos dois municípios vizinhos."], correct: 1,
      explanation: "O art. 4º exige Fundo de Saúde, Conselho paritário, plano de saúde, relatórios de gestão, contrapartida no orçamento e comissão de elaboração do PCCS." }),
    mcq({ key: "sus-8142-4", section: "recursos", difficulty: "media",
      stem: "Os recursos do Fundo Nacional de Saúde destinados à cobertura das ações e serviços de saúde a serem implementados pelos entes serão destinados aos municípios em pelo menos:",
      options: ["30%.", "50%.", "70%.", "90%."], correct: 2,
      explanation: "Art. 3º, § 2º: pelo menos setenta por cento aos Municípios, afetando-se o restante aos Estados." }),
    mcq({ key: "sus-8142-5", section: "paridade-dos-usuarios", difficulty: "media",
      stem: "Têm representação no Conselho Nacional de Saúde, por força do § 3º do art. 1º da Lei nº 8.142/1990:",
      options: ["o Conselho Federal de Medicina e o Cofen.", "o Conass e o Conasems.", "a Anvisa e a ANS.", "os partidos políticos com bancada no Congresso."], correct: 1,
      explanation: "O § 3º garante representação do Conass e do Conasems no Conselho Nacional de Saúde." }),
    mcq({ key: "sus-8142-6", section: "requisitos-para-receber-recursos", difficulty: "dificil",
      stem: "Se um município não atender aos requisitos do art. 4º da Lei nº 8.142/1990, os recursos correspondentes:",
      options: ["são devolvidos ao Tesouro Nacional.", "passam a ser administrados pelo respectivo Estado.", "são suspensos definitivamente.", "passam a ser administrados pelo Conselho Municipal de Saúde."], correct: 1,
      explanation: "Parágrafo único do art. 4º: os recursos passam a ser administrados pelos Estados (no caso de municípios) ou pela União (no caso de Estados e DF)." }),
    mcq({ key: "sus-8142-7", section: "duas-instancias", difficulty: "facil",
      stem: "São as instâncias colegiadas do SUS em cada esfera de governo, segundo a Lei nº 8.142/1990:",
      options: ["a Comissão Intergestores Bipartite e a Tripartite.", "a Conferência de Saúde e o Conselho de Saúde.", "o Ministério da Saúde e a Anvisa.", "o Fundo de Saúde e o Plano de Saúde."], correct: 1,
      explanation: "Art. 1º: Conferência de Saúde e Conselho de Saúde, sem prejuízo das funções do Poder Legislativo." }),
    mcq({ key: "sus-8142-8", section: "caso", difficulty: "dificil",
      stem: "Um Conselho Municipal de Saúde com 24 membros deve ter, para atender à paridade da Lei nº 8.142/1990:",
      options: ["6 representantes de usuários.", "8 representantes de usuários.", "12 representantes de usuários.", "16 representantes de usuários."], correct: 2,
      explanation: "A representação dos usuários é paritária em relação ao conjunto dos demais segmentos: 12 usuários e 12 dos demais (governo, prestadores e profissionais)." }),
  ],
  status: "published",
  standard: "v2",
  lastReviewedAt: REVIEWED_V2,
  reviewNotes: V2_REVIEW_NOTE + " A conversão 'paridade = 50%' é interpretação consolidada do § 4º; a lei não cita percentual.",
};
