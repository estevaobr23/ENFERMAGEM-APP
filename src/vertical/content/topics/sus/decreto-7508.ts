import type { TopicSeed } from "@/core/content/types";
import { mcq } from "../../helpers";
import { REVIEWED_V2, SRC, V2_REVIEW_NOTE, at } from "../../sources";

/* Fonte única: Decreto 7.508/2011 (Planalto, texto compilado), arts. 2º a 41. */

export const DECRETO_7508: TopicSeed = {
  slug: "decreto-7508-regioes-e-portas-de-entrada",
  title: "Decreto 7.508: regiões e portas de entrada",
  description: "Região de Saúde, as quatro portas de entrada, RENASES e RENAME, comissões intergestores (CIT, CIB, CIR) e o COAP.",
  summary:
    "O Decreto nº 7.508/2011 regulamenta a Lei 8.080 quanto à organização do SUS, ao planejamento, à assistência e à articulação interfederativa. Região de Saúde é o espaço geográfico contínuo formado por agrupamentos de municípios limítrofes, delimitado por identidades culturais, econômicas e sociais e por redes de comunicação e transporte compartilhadas; é instituída pelo Estado em articulação com os municípios e deve conter, no mínimo, atenção primária, urgência e emergência, atenção psicossocial, atenção ambulatorial especializada e hospitalar e vigilância em saúde. O acesso universal, igualitário e ordenado começa pelas Portas de Entrada — atenção primária, urgência e emergência, atenção psicossocial e serviços especiais de acesso aberto — e se completa na rede regionalizada e hierarquizada; os serviços hospitalares e ambulatoriais especializados são referenciados pelas portas de entrada. O acesso é ordenado pela atenção primária, com base na gravidade do risco e no critério cronológico. A RENASES reúne todas as ações e serviços que o SUS oferece; a RENAME, a seleção e padronização de medicamentos, acompanhada do Formulário Terapêutico Nacional. As Comissões Intergestores são instâncias de pactuação consensual: CIT (União), CIB (Estado) e CIR (região). O Contrato Organizativo da Ação Pública da Saúde (COAP) é o acordo de colaboração entre os entes que define responsabilidades, indicadores, metas, avaliação e recursos na Região de Saúde.",
  keyPoints: [
    "Região de Saúde: municípios limítrofes, instituída pelo Estado em articulação com os municípios.",
    "Mínimo da região: atenção primária, urgência e emergência, psicossocial, ambulatorial especializada e hospitalar, vigilância em saúde.",
    "Portas de Entrada: atenção primária, urgência e emergência, atenção psicossocial e serviços especiais de acesso aberto.",
    "Hospital e ambulatório especializado são referenciados pelas portas de entrada (não são porta).",
    "Acesso ordenado pela atenção primária: gravidade do risco + critério cronológico.",
    "RENASES: todas as ações e serviços do SUS. RENAME: medicamentos essenciais (com o FTN).",
    "CIT (União), CIB (Estado), CIR (região): pactuação consensual entre gestores.",
    "COAP: acordo entre entes com responsabilidades, metas, indicadores e recursos da região.",
  ],
  map: {
    title: "Organização pelo Decreto 7.508",
    spec: {
      layout: "hub",
      center: "Rede de Atenção à Saúde na Região",
      blocks: [
        { title: "Portas de entrada", tone: "green", icon: "🚪", items: ["Atenção primária", "Urgência e emergência", "Atenção psicossocial", "Especiais de acesso aberto"] },
        { title: "Região de Saúde", tone: "blue", icon: "🗺️", items: ["Municípios limítrofes", "Instituída pelo Estado", "5 grupos mínimos de serviços"] },
        { title: "Listas nacionais", tone: "violet", icon: "📋", items: ["RENASES: ações e serviços", "RENAME + FTN: medicamentos"] },
        { title: "Pactuação", tone: "amber", icon: "🤝", items: ["CIT · CIB · CIR", "COAP entre os entes"] },
      ],
    },
  },
  sections: [
    {
      id: "visao-geral",
      kind: "visao",
      title: "O decreto que tira a regionalização do papel",
      source: 0,
      blocks: [
        {
          type: "text",
          text: "A Lei 8.080 diz que o SUS é ==regionalizado e hierarquizado==. O Decreto 7.508 explica ==como==: define a Região de Saúde, por onde o usuário entra, que listas nacionais existem e como os gestores pactuam entre si.",
        },
        {
          type: "cards",
          items: [
            { title: "Organização", text: "Regiões de Saúde e hierarquização (portas de entrada).", icon: "🗺️", tone: "blue" },
            { title: "Planejamento", text: "Ascendente e integrado, do local ao federal, ouvidos os Conselhos.", icon: "📈", tone: "green" },
            { title: "Assistência", text: "RENASES e RENAME.", icon: "📋", tone: "violet" },
            { title: "Articulação", text: "Comissões Intergestores e COAP.", icon: "🤝", tone: "amber" },
          ],
        },
      ],
    },
    {
      id: "definicoes",
      kind: "conceito",
      title: "Definições do art. 2º",
      source: 0,
      blocks: [
        { type: "definition", term: "Região de Saúde", text: "Espaço geográfico ==contínuo== constituído por agrupamentos de ==municípios limítrofes==, delimitado a partir de identidades culturais, econômicas e sociais e de redes de comunicação e infraestrutura de transportes compartilhados." },
        { type: "definition", term: "Portas de Entrada", text: "Serviços de ==atendimento inicial== à saúde do usuário no SUS." },
        { type: "definition", term: "Rede de Atenção à Saúde", text: "Conjunto de ações e serviços articulados em ==níveis de complexidade crescente==, para garantir a integralidade." },
        { type: "definition", term: "Serviços Especiais de Acesso Aberto", text: "Serviços específicos para quem, em razão de ==agravo ou de situação laboral==, necessita de atendimento especial." },
        { type: "definition", term: "Mapa da Saúde", text: "Descrição geográfica da distribuição de recursos humanos e de ações e serviços ofertados pelo ==SUS e pela iniciativa privada==." },
      ],
    },
    {
      id: "regioes",
      kind: "classificacao",
      title: "Região de Saúde: quem institui e o que precisa ter",
      source: 0,
      blocks: [
        {
          type: "steps",
          items: [
            { title: "Quem institui", text: "O ==Estado, em articulação com os Municípios==, respeitando as diretrizes da CIT.", who: "servico" },
            { title: "Pode ser interestadual", text: "Municípios limítrofes de Estados diferentes, por ato conjunto dos Estados." },
            { title: "Serviços mínimos", text: "Atenção primária · urgência e emergência · atenção psicossocial · atenção ambulatorial especializada e hospitalar · vigilância em saúde." },
            { title: "Referência para recursos", text: "As regiões são referência para as ==transferências de recursos== entre os entes." },
          ],
        },
      ],
    },
    {
      id: "portas-de-entrada",
      kind: "etapas",
      title: "Portas de entrada e hierarquização",
      lead: "O acesso começa na porta e se completa na rede.",
      source: 0,
      blocks: [
        {
          type: "cards",
          items: [
            { title: "Atenção primária", text: "Ordena o acesso.", icon: "🏘️", tone: "green" },
            { title: "Urgência e emergência", text: "", icon: "🚑", tone: "rose" },
            { title: "Atenção psicossocial", text: "", icon: "🧠", tone: "violet" },
            { title: "Especiais de acesso aberto", text: "Agravo ou situação laboral que exige atendimento especial.", icon: "🔓", tone: "amber" },
          ],
        },
        {
          type: "steps",
          items: [
            { title: "Acesso se inicia pelas portas de entrada", text: "E se completa na rede regionalizada e hierarquizada, conforme a complexidade (art. 8º)." },
            { title: "Hospital e ambulatório especializado são referenciados", text: "Serviços de ==maior complexidade e densidade tecnológica== são acessados a partir das portas (art. 10)." },
            { title: "Atenção primária ordena", text: "Com base na ==gravidade do risco individual e coletivo== e no ==critério cronológico==, respeitando quem tem proteção especial (art. 11)." },
            { title: "Continuidade do cuidado", text: "Garantida ao usuário em todas as modalidades, nos serviços da rede da região (art. 12)." },
          ],
        },
        {
          type: "callout",
          variant: "dica",
          title: "Novas portas",
          text: "Com justificativa técnica e pactuação nas Comissões Intergestores, os entes podem ==criar novas portas de entrada==.",
        },
      ],
    },
    {
      id: "renases-rename",
      kind: "conceito",
      title: "RENASES e RENAME",
      source: 0,
      blocks: [
        {
          type: "compare",
          columns: ["RENASES", "RENAME"],
          rows: [
            { label: "O que é", cells: ["Relação Nacional de ==Ações e Serviços== de Saúde: tudo o que o SUS oferece para a integralidade", "Relação Nacional de ==Medicamentos Essenciais==: seleção e padronização de medicamentos"] },
            { label: "Acompanha", cells: ["Pactuação de responsabilidades nas Comissões", "==Formulário Terapêutico Nacional (FTN)== e os PCDT"] },
            { label: "Quem dispõe", cells: ["Ministério da Saúde, com diretrizes da CIT", "Ministério da Saúde, com diretrizes da CIT"] },
            { label: "Atualização", cells: ["A cada 2 anos", "A cada 2 anos"] },
          ],
        },
        {
          type: "checklist",
          title: "Acesso à assistência farmacêutica exige, ao mesmo tempo (art. 28)",
          items: [
            "Usuário assistido por ações e serviços do SUS",
            "Prescrição por profissional no exercício regular de suas funções no SUS",
            "Prescrição conforme a RENAME e os PCDT (ou relação complementar)",
            "Dispensação em unidade indicada pela direção do SUS",
          ],
        },
      ],
    },
    {
      id: "comissoes-e-coap",
      kind: "tecnico",
      title: "Comissões Intergestores e COAP",
      source: 0,
      blocks: [
        {
          type: "compare",
          columns: ["Âmbito", "Vinculação administrativa"],
          rows: [
            { label: "CIT", cells: ["União", "Ministério da Saúde"] },
            { label: "CIB", cells: ["Estado", "Secretaria Estadual de Saúde"] },
            { label: "CIR", cells: ["Região de Saúde", "Secretaria Estadual de Saúde (observa as diretrizes da CIB)"] },
          ],
        },
        {
          type: "definition",
          term: "COAP — Contrato Organizativo da Ação Pública da Saúde",
          text: "Acordo de colaboração entre entes federativos para organizar e integrar as ações e serviços na rede regionalizada, definindo ==responsabilidades, indicadores e metas, critérios de avaliação, recursos financeiros== e forma de controle.",
          note: "O controle e a fiscalização do COAP são feitos pelo Sistema Nacional de Auditoria e Avaliação do SUS.",
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
            { value: "4", label: "portas de entrada" },
            { value: "5", label: "grupos mínimos de serviços da Região de Saúde" },
            { value: "3", label: "comissões intergestores", note: "CIT, CIB, CIR" },
            { value: "2 anos", label: "atualização da RENASES e da RENAME" },
            { value: "2011", label: "ano do decreto" },
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
          title: "Usuário quer ir direto ao cardiologista",
          scenario: "Um usuário procura o ambulatório de cardiologia do hospital regional sem encaminhamento, dizendo que 'o SUS é universal'.",
          question: "Como o Decreto 7.508 organiza esse acesso?",
          answer: "O acesso começa pelas portas de entrada (aqui, a atenção primária), que ordenam e referenciam aos serviços ambulatoriais especializados e hospitalares.",
          reasoning: [
            "Art. 8º: o acesso universal, igualitário e ordenado se inicia pelas portas de entrada.",
            "Art. 10: ambulatório especializado e hospital são referenciados pelas portas.",
            "Art. 11: a atenção primária ordena com base na gravidade do risco e no critério cronológico.",
            "Se fosse urgência, a porta seria a urgência e emergência.",
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
            { wrong: "O atendimento hospitalar é porta de entrada do SUS.", right: "Hospital e ambulatório especializado são ==referenciados== pelas portas.", why: "As quatro portas são: atenção primária, urgência e emergência, psicossocial e especiais de acesso aberto." },
            { wrong: "As Regiões de Saúde são instituídas pelo Ministério da Saúde.", right: "Pelo ==Estado, em articulação com os Municípios==.", why: "Art. 4º, respeitadas as diretrizes da CIT." },
            { wrong: "A RENAME lista todas as ações e serviços do SUS.", right: "Quem lista ações e serviços é a ==RENASES==; a RENAME é de medicamentos.", why: "Arts. 21 e 25." },
            { wrong: "A CIR é vinculada ao Ministério da Saúde.", right: "A CIR é vinculada à ==Secretaria Estadual de Saúde==.", why: "Art. 30, III." },
            { wrong: "O acesso é ordenado apenas pela ordem de chegada.", right: "Pela ==gravidade do risco== e pelo ==critério cronológico==.", why: "Art. 11." },
            { wrong: "Para ser instituída, a Região de Saúde precisa ter apenas atenção primária e hospitalar.", right: "Também ==urgência e emergência, atenção psicossocial e vigilância em saúde==.", why: "Art. 5º lista cinco grupos mínimos." },
            { wrong: "O COAP é um contrato entre o SUS e hospitais privados.", right: "É um ==acordo de colaboração entre entes federativos==.", why: "Art. 2º, II e art. 33." },
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
            { slug: "lei-8080-organizacao-e-competencias", title: "Lei 8.080: organização, campo de atuação e competências", why: "A lei que o decreto regulamenta." },
            { slug: "atencao-basica-pnab", title: "Atenção Básica: a PNAB", why: "A porta de entrada preferencial na prática." },
            { slug: "rede-de-atencao-as-urgencias-componentes", title: "Rede de Atenção às Urgências: componentes", why: "A porta de urgência e emergência organizada em rede." },
          ],
        },
      ],
    },
  ],
  sources: [at(SRC.decreto7508, "arts. 2º a 41")],
  questions: [
    mcq({ key: "sus-7508-1", section: "portas-de-entrada", difficulty: "facil",
      stem: "São Portas de Entrada às ações e serviços de saúde nas Redes de Atenção à Saúde, segundo o Decreto nº 7.508/2011, os serviços:",
      options: ["de atenção hospitalar, ambulatorial especializada, laboratorial e farmacêutica.", "de atenção primária, de urgência e emergência, de atenção psicossocial e especiais de acesso aberto.", "de alta complexidade, média complexidade e transplantes.", "privados conveniados e filantrópicos."], correct: 1,
      explanation: "Art. 9º: atenção primária, urgência e emergência, atenção psicossocial e serviços especiais de acesso aberto." }),
    mcq({ key: "sus-7508-2", section: "regioes", difficulty: "media",
      stem: "Pelo Decreto nº 7.508/2011, as Regiões de Saúde são instituídas:",
      options: ["pelo Ministério da Saúde, por portaria.", "pelo Estado, em articulação com os Municípios, respeitadas as diretrizes da CIT.", "pelos Conselhos Municipais de Saúde.", "pela Câmara Municipal de cada município."], correct: 1,
      explanation: "Art. 4º: instituídas pelo Estado, em articulação com os Municípios, respeitadas as diretrizes gerais pactuadas na CIT." }),
    mcq({ key: "sus-7508-3", section: "regioes", difficulty: "media",
      stem: "Para ser instituída, a Região de Saúde deve conter, no mínimo, ações e serviços de:",
      options: ["atenção primária e hospitalar apenas.", "atenção primária; urgência e emergência; atenção psicossocial; atenção ambulatorial especializada e hospitalar; vigilância em saúde.", "transplantes e oncologia.", "assistência farmacêutica e laboratorial apenas."], correct: 1,
      explanation: "Art. 5º lista os cinco grupos mínimos." }),
    mcq({ key: "sus-7508-4", section: "renases-rename", difficulty: "media",
      stem: "A relação que compreende todas as ações e serviços que o SUS oferece ao usuário para atendimento da integralidade da assistência é a:",
      options: ["RENAME.", "RENASES.", "CIT.", "FTN."], correct: 1,
      explanation: "Art. 21: RENASES — Relação Nacional de Ações e Serviços de Saúde. A RENAME é de medicamentos." }),
    mcq({ key: "sus-7508-5", section: "portas-de-entrada", difficulty: "media",
      stem: "Segundo o Decreto nº 7.508/2011, o acesso universal e igualitário às ações e serviços de saúde será ordenado:",
      options: ["pelo hospital de referência regional.", "pela atenção primária, com base na gravidade do risco individual e coletivo e no critério cronológico.", "pelo Conselho de Saúde.", "exclusivamente por ordem de chegada."], correct: 1,
      explanation: "Art. 11: ordenado pela atenção primária, fundado na avaliação da gravidade do risco e no critério cronológico." }),
    mcq({ key: "sus-7508-6", section: "comissoes-e-coap", difficulty: "dificil",
      stem: "A Comissão Intergestores Regional (CIR), prevista no Decreto nº 7.508/2011, é vinculada, para efeitos administrativos e operacionais:",
      options: ["ao Ministério da Saúde.", "à Secretaria Estadual de Saúde, devendo observar as diretrizes da CIB.", "à Secretaria Municipal de Saúde do maior município da região.", "ao Conselho Nacional de Saúde."], correct: 1,
      explanation: "Art. 30, III: CIR no âmbito regional, vinculada à Secretaria Estadual de Saúde, observando as diretrizes da CIB." }),
    mcq({ key: "sus-7508-7", section: "comissoes-e-coap", difficulty: "dificil",
      stem: "O acordo de colaboração firmado entre entes federativos para organizar e integrar as ações e serviços de saúde na rede regionalizada, com responsabilidades, indicadores, metas e recursos, é o:",
      options: ["Mapa da Saúde.", "Contrato Organizativo da Ação Pública da Saúde (COAP).", "Plano Plurianual.", "Termo de Ajuste de Conduta."], correct: 1,
      explanation: "Art. 2º, II e art. 33: Contrato Organizativo da Ação Pública da Saúde." }),
    mcq({ key: "sus-7508-8", section: "definicoes", difficulty: "media",
      stem: "No Decreto nº 7.508/2011, Região de Saúde é definida como espaço geográfico:",
      options: ["descontínuo, formado por municípios de qualquer estado.", "contínuo, constituído por agrupamentos de municípios limítrofes, delimitado por identidades culturais, econômicas e sociais e redes de comunicação e transporte compartilhadas.", "correspondente a cada bairro de um município.", "definido pela área de abrangência de um hospital privado."], correct: 1,
      explanation: "É a definição do art. 2º, I." }),
  ],
  status: "published",
  standard: "v2",
  lastReviewedAt: REVIEWED_V2,
  reviewNotes: V2_REVIEW_NOTE,
};
