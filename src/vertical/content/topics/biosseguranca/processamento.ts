import type { TopicSeed } from "@/core/content/types";
import { mcq } from "../../helpers";
import { REVIEWED_V2, SRC, V2_REVIEW_NOTE, at } from "../../sources";

/* Fonte única: RDC Anvisa nº 15/2012, lida no original (arts. 4º, 10 a 15, 82 a 85, 101 e 103). */

export const PROCESSAMENTO: TopicSeed = {
  slug: "processamento-de-produtos-rdc-15",
  title: "Limpeza, desinfecção e esterilização (RDC 15)",
  description: "Críticos, semicríticos e não críticos; o que cada um exige; níveis de desinfecção; CME, rótulo e armazenamento.",
  summary:
    "A RDC Anvisa nº 15/2012 define as boas práticas de processamento de produtos para saúde, feito no Centro de Material e Esterilização (CME). Limpeza é a remoção de sujidades orgânicas e inorgânicas e a redução da carga microbiana com água, detergente e ação mecânica, preparando o produto para desinfecção ou esterilização; pré-limpeza é a remoção da sujidade visível. A desinfecção de alto nível destrói a maioria dos microrganismos de artigos semicríticos, inclusive micobactérias e fungos, exceto um número elevado de esporos; a de nível intermediário destrói formas vegetativas, micobactérias, a maioria dos vírus e dos fungos. Produtos críticos são usados em procedimentos invasivos com penetração de pele e mucosas, tecidos subepiteliais e sistema vascular, e devem ser esterilizados após a limpeza. Semicríticos entram em contato com pele não íntegra ou mucosas íntegras colonizadas e exigem, no mínimo, desinfecção de alto nível — exceto os de assistência ventilatória, anestesia e inaloterapia, que exigem no mínimo desinfecção de nível intermediário e não podem ser imersos em saneantes à base de aldeídos. Não críticos entram em contato com pele íntegra ou não tocam o paciente e exigem, no mínimo, limpeza. O fluxo é sempre da área suja para a limpa. O rótulo do produto esterilizado traz nome, lote, data da esterilização, data limite de uso, método e responsável pelo preparo, e o armazenamento é em local limpo, seco, protegido da luz solar direta e com manipulação mínima.",
  keyPoints: [
    "Crítico (penetra pele/mucosa, tecido subepitelial, sistema vascular) → ESTERILIZAÇÃO após limpeza.",
    "Semicrítico (pele não íntegra ou mucosa íntegra colonizada) → no mínimo DESINFECÇÃO DE ALTO NÍVEL.",
    "Exceção: semicrítico de ventilação, anestesia e inaloterapia → no mínimo nível intermediário; proibida imersão em aldeídos.",
    "Não crítico (pele íntegra ou sem contato) → no mínimo LIMPEZA.",
    "Limpeza vem sempre antes; fluxo sempre do sujo para o limpo.",
    "Alto nível destrói quase tudo, menos número elevado de esporos.",
    "Rótulo: nome, lote, data de esterilização, data limite de uso, método e responsável pelo preparo.",
    "Armazenar em local limpo e seco, longe da luz solar direta, com manipulação mínima.",
  ],
  map: {
    title: "Classes de produtos (RDC 15)",
    spec: {
      layout: "flow",
      center: "Contato com o paciente → processamento mínimo",
      blocks: [
        { title: "Não crítico", tone: "green", icon: "🩺", items: ["Pele íntegra ou sem contato", "No mínimo: limpeza"] },
        { title: "Semicrítico", tone: "amber", icon: "👄", items: ["Pele não íntegra / mucosa íntegra", "No mínimo: desinfecção de alto nível"] },
        { title: "Crítico", tone: "rose", icon: "🔪", items: ["Penetra tecidos e vasos", "Esterilização"] },
      ],
      footnote: "Tudo começa pela limpeza. Fluxo sempre da área suja para a limpa.",
    },
  },
  sections: [
    {
      id: "visao-geral",
      kind: "visao",
      title: "O risco do paciente define o processamento",
      source: 0,
      blocks: [
        {
          type: "text",
          text: "Quanto mais ==profundo o contato== do produto com o paciente, mais rigoroso o processamento. A RDC 15 traduz isso em três classes — ==críticos, semicríticos e não críticos== — e diz o mínimo exigido para cada uma.",
        },
        {
          type: "definition",
          term: "CME",
          text: "==Centro de Material e Esterilização==: unidade funcional destinada ao processamento de produtos para saúde.",
        },
      ],
    },
    {
      id: "definicoes",
      kind: "conceito",
      title: "Limpeza e níveis de desinfecção",
      source: 0,
      blocks: [
        { type: "definition", term: "Pré-limpeza", text: "Remoção da ==sujidade visível== presente nos produtos para saúde." },
        { type: "definition", term: "Limpeza", text: "Remoção de sujidades orgânicas e inorgânicas e ==redução da carga microbiana==, com água, detergente e ação mecânica (manual ou automatizada), em superfícies internas e externas, tornando o produto seguro para manuseio e ==preparado para desinfecção ou esterilização==." },
        {
          type: "compare",
          columns: ["Desinfecção de alto nível", "Desinfecção de nível intermediário"],
          rows: [
            { label: "Destrói", cells: ["A maioria dos microrganismos de artigos semicríticos, ==inclusive micobactérias e fungos==", "Formas vegetativas, ==micobactérias==, a maioria dos vírus e dos fungos"] },
            { label: "Não destrói", cells: ["==Número elevado de esporos bacterianos==", "Esporos"] },
            { label: "Onde se aplica", cells: ["Semicríticos (regra geral)", "Objetos inanimados e superfícies; semicríticos de ventilação, anestesia e inaloterapia"] },
          ],
        },
      ],
    },
    {
      id: "classes",
      kind: "classificacao",
      title: "Críticos, semicríticos e não críticos",
      lead: "A tabela mais cobrada do tema.",
      source: 0,
      blocks: [
        {
          type: "compare",
          columns: ["Definição", "Processamento mínimo"],
          rows: [
            { label: "Crítico", cells: ["Usado em procedimento invasivo com penetração de pele e mucosas adjacentes, tecidos subepiteliais e ==sistema vascular==, e tudo conectado a eles", "==Esterilização==, após a limpeza"] },
            { label: "Semicrítico", cells: ["Contato com ==pele não íntegra== ou ==mucosas íntegras colonizadas==", "No mínimo ==desinfecção de alto nível==, após a limpeza"] },
            { label: "Semicrítico de ventilação, anestesia, inaloterapia", cells: ["Ex.: circuitos e acessórios respiratórios", "No mínimo ==nível intermediário== (ou termodesinfecção); ==proibida imersão em aldeídos=="] },
            { label: "Não crítico", cells: ["Contato com ==pele íntegra== ou sem contato com o paciente", "No mínimo ==limpeza=="] },
          ],
        },
        {
          type: "callout",
          variant: "atencao",
          title: "Conformação complexa",
          text: "Produto crítico com ==lúmen menor que 5 mm== ou fundo cego, espaços inacessíveis à fricção, reentrâncias ou válvulas é de conformação complexa e tem regras próprias de limpeza.",
        },
      ],
    },
    {
      id: "fluxo",
      kind: "etapas",
      title: "O caminho do produto no CME",
      source: 0,
      blocks: [
        {
          type: "steps",
          items: [
            { title: "Pré-limpeza e recepção", text: "Retira a sujidade visível e recebe o material na área suja.", why: "A RDC define a pré-limpeza como a remoção da sujidade visível — o primeiro passo do processamento." },
            { title: "Limpeza e secagem", text: "Etapa obrigatória para qualquer classe.", why: "Sem limpeza, nem a desinfecção nem a esterilização funcionam." },
            { title: "Inspeção, preparo e acondicionamento", text: "Avaliar integridade e embalar." },
            { title: "Desinfecção ou esterilização", text: "Conforme a classe do produto." },
            { title: "Armazenamento e distribuição", text: "Local limpo e seco, protegido da luz solar direta, ==manipulação mínima==." },
          ],
        },
        {
          type: "callout",
          variant: "lei",
          title: "Sempre do sujo para o limpo",
          text: "O processamento segue ==fluxo direcionado sempre da área suja para a área limpa== (art. 15).",
        },
      ],
    },
    {
      id: "rotulo-e-guarda",
      kind: "tecnico",
      title: "Rótulo, embalagem e guarda: o que o técnico confere",
      source: 0,
      blocks: [
        {
          type: "checklist",
          title: "O rótulo do produto esterilizado deve ter",
          items: ["Nome do produto", "Número do lote", "Data da esterilização", "==Data limite de uso==", "Método de esterilização", "Nome do responsável pelo preparo"],
        },
        {
          type: "dodont",
          do: [
            "Conferir rótulo legível e data limite de uso antes de abrir",
            "Armazenar em local limpo, seco e longe da luz solar direta",
            "Transportar em recipiente fechado, mantendo identificação e integridade",
            "Suspender embalagem de tecido com furo, rasgo ou desgaste",
          ],
          dont: [
            "Usar produto com rótulo ilegível ou embalagem violada",
            "Usar embalagem de tecido de algodão remendada ou cerzida",
            "Processar no CME humano produtos usados em animais",
            "Imergir circuito respiratório em saneante à base de aldeídos",
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
            { value: "3", label: "classes de produtos", note: "crítico, semicrítico, não crítico" },
            { value: "6", label: "itens obrigatórios do rótulo" },
            { value: "< 5 mm", label: "lúmen que define conformação complexa" },
            { value: "2", label: "níveis de desinfecção definidos", note: "alto e intermediário" },
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
          title: "Três itens na bandeja",
          scenario: "Após o plantão, voltam ao expurgo: uma pinça usada em curativo cirúrgico com penetração de tecido, uma máscara de nebulização e um esfigmomanômetro.",
          question: "Qual o processamento mínimo de cada um pela RDC 15?",
          answer: "Pinça: crítica → esterilização. Máscara de nebulização: semicrítica de inaloterapia → no mínimo desinfecção de nível intermediário, sem imersão em aldeídos. Esfigmomanômetro: não crítico → no mínimo limpeza.",
          reasoning: [
            "Penetrou tecido → crítico → esterilização após limpeza.",
            "Inaloterapia é a exceção dos semicríticos: nível intermediário basta, e aldeído por imersão é proibido.",
            "Esfigmomanômetro toca pele íntegra → não crítico.",
            "Os três passam primeiro pela limpeza.",
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
            { wrong: "Produtos semicríticos devem ser esterilizados.", right: "Semicríticos exigem ==no mínimo desinfecção de alto nível==.", why: "Esterilização é obrigatória para críticos; para semicríticos, alto nível é o mínimo." },
            { wrong: "Produto que toca mucosa íntegra é crítico.", right: "Mucosa íntegra colonizada → ==semicrítico==.", why: "Crítico é o que penetra pele e mucosa, tecido subepitelial ou sistema vascular." },
            { wrong: "A desinfecção de alto nível destrói todos os esporos.", right: "Destrói quase tudo, ==exceto número elevado de esporos==.", why: "Quem elimina todas as formas, inclusive esporos, é a esterilização." },
            { wrong: "Inaladores podem ser desinfetados por imersão em glutaraldeído.", right: "É ==proibida a imersão em saneantes à base de aldeídos== para ventilação e inaloterapia.", why: "Art. 13 da RDC 15." },
            { wrong: "Produtos não críticos dispensam qualquer processamento.", right: "No mínimo ==limpeza==.", why: "Art. 14." },
            { wrong: "Se o produto vai para esterilização, a limpeza pode ser pulada.", right: "A esterilização vem ==após a limpeza e as demais etapas==.", why: "A limpeza prepara o produto; sujidade impede o agente esterilizante de agir." },
            { wrong: "O rótulo precisa só da data da esterilização.", right: "Nome, lote, data de esterilização, ==data limite de uso==, método e responsável.", why: "Art. 85 lista seis itens." },
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
            { slug: "precaucoes-padrao-e-especificas", title: "Precauções padrão e específicas", why: "Equipamento de uso exclusivo e contato indireto." },
            { slug: "residuos-de-servicos-de-saude-rdc-222", title: "Resíduos de serviços de saúde (RDC 222)", why: "O que não é reprocessado vira resíduo." },
            { slug: "nucleo-de-seguranca-do-paciente", title: "Segurança do paciente: PNSP e RDC 36", why: "Equipamentos e materiais seguros estão no Plano de Segurança do Paciente." },
          ],
        },
      ],
    },
  ],
  sources: [at(SRC.rdc15, "arts. 4º, 10 a 15, 82 a 85, 101 e 103")],
  questions: [
    mcq({ key: "bio-proc-1", section: "classes", difficulty: "facil",
      stem: "Pela RDC nº 15/2012, produtos para saúde classificados como críticos devem ser submetidos a:",
      options: ["apenas limpeza.", "desinfecção de nível intermediário.", "esterilização, após a limpeza e demais etapas.", "desinfecção de alto nível sem limpeza prévia."], correct: 2,
      explanation: "Art. 11: críticos devem ser esterilizados após a limpeza e demais etapas do processo." }),
    mcq({ key: "bio-proc-2", section: "classes", difficulty: "facil",
      stem: "Produtos que entram em contato com pele não íntegra ou com mucosas íntegras colonizadas são classificados como:",
      options: ["críticos.", "semicríticos.", "não críticos.", "descartáveis obrigatórios."], correct: 1,
      explanation: "É a definição de semicríticos (art. 4º, XVI); eles exigem no mínimo desinfecção de alto nível." }),
    mcq({ key: "bio-proc-3", section: "classes", difficulty: "media",
      stem: "Produtos semicríticos usados em assistência ventilatória, anestesia e inaloterapia devem receber, no mínimo:",
      options: ["esterilização a vapor.", "desinfecção de nível intermediário ou termodesinfecção, após a limpeza.", "apenas pré-limpeza.", "imersão em glutaraldeído."], correct: 1,
      explanation: "Art. 12, parágrafo único: limpeza e, no mínimo, desinfecção de nível intermediário ou termodesinfecção. O art. 13 proíbe imersão em saneantes à base de aldeídos." }),
    mcq({ key: "bio-proc-4", section: "classes", difficulty: "facil",
      stem: "Um esfigmomanômetro, que entra em contato apenas com pele íntegra, é produto não crítico e exige, no mínimo:",
      options: ["esterilização.", "desinfecção de alto nível.", "limpeza.", "nenhum processamento."], correct: 2,
      explanation: "Art. 14: não críticos devem ser submetidos, no mínimo, ao processo de limpeza." }),
    mcq({ key: "bio-proc-5", section: "definicoes", difficulty: "dificil",
      stem: "Segundo a RDC 15, a desinfecção de alto nível destrói a maioria dos microrganismos de artigos semicríticos, inclusive micobactérias e fungos, EXCETO:",
      options: ["bactérias na forma vegetativa.", "vírus envelopados.", "um número elevado de esporos bacterianos.", "fungos filamentosos."], correct: 2,
      explanation: "A definição do art. 4º, VIII: destrói a maioria dos microrganismos, inclusive micobactérias e fungos, exceto um número elevado de esporos bacterianos." }),
    mcq({ key: "bio-proc-6", section: "fluxo", difficulty: "media",
      stem: "No CME, o fluxo de processamento dos produtos para saúde deve seguir:",
      options: ["da área limpa para a área suja.", "qualquer direção, desde que haja barreira física.", "sempre da área suja para a área limpa.", "a ordem definida por cada profissional."], correct: 2,
      explanation: "Art. 15: o processamento deve seguir fluxo direcionado sempre da área suja para a área limpa." }),
    mcq({ key: "bio-proc-7", section: "rotulo-e-guarda", difficulty: "media",
      stem: "É item obrigatório do rótulo de identificação da embalagem de um produto esterilizado:",
      options: ["o nome do paciente que vai usar o produto.", "a data limite de uso.", "o preço do produto.", "o nome do médico solicitante."], correct: 1,
      explanation: "Art. 85: nome do produto, número do lote, data da esterilização, data limite de uso, método de esterilização e nome do responsável pelo preparo." }),
    mcq({ key: "bio-proc-8", section: "definicoes", difficulty: "media",
      stem: "A remoção de sujidades orgânicas e inorgânicas, com redução da carga microbiana, por meio de água, detergente e ação mecânica, preparando o produto para desinfecção ou esterilização, é a definição de:",
      options: ["esterilização.", "limpeza.", "antissepsia.", "desinfecção de alto nível."], correct: 1,
      explanation: "É a definição de limpeza do art. 4º, XIII. Pré-limpeza é só a remoção da sujidade visível." }),
  ],
  status: "published",
  standard: "v2",
  lastReviewedAt: REVIEWED_V2,
  reviewNotes: V2_REVIEW_NOTE + " Etapas do fluxo resumidas da definição de processamento (art. 4º).",
};
