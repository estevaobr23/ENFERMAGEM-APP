import type { SRC } from "./sources";

export type VisualAssetStatus =
  | "planned"
  | "research_required"
  | "review_required"
  | "approved"
  | "generated"
  | "integrated";

export type VisualAssetFamily =
  | "anatomy"
  | "functional"
  | "mindmap"
  | "flow"
  | "procedure"
  | "compare"
  | "formula"
  | "exercise"
  | "timeline"
  | "synthesis";

export type VisualAssetLabel = {
  text: string;
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  tone?: string;
};

export type VisualAsset = {
  id: string;
  category: string;
  topicSlug: string;
  family: VisualAssetFamily;
  priority: "P0" | "P1" | "P2";
  status: VisualAssetStatus;
  asset?: string;
  baseAsset?: string;
  width: number;
  height: number;
  alt: string;
  description: string;
  sourceRefs: (keyof typeof SRC)[];
  labels?: VisualAssetLabel[];
};

type IllustratedPlate = {
  id: string;
  category: string;
  topicSlug: string;
  file: string;
  base: string;
  alt: string;
  description: string;
  sourceRefs: (keyof typeof SRC)[];
};

function illustrated(plate: IllustratedPlate): VisualAsset {
  return {
    ...plate,
    family: "functional",
    priority: "P0",
    status: "integrated",
    asset: `/content/visual-v2/${plate.category}/${plate.file}`,
    baseAsset: `/content/visual-v2/${plate.category}/${plate.base.replace(/\.png$/i, ".webp")}`,
    width: 1536,
    height: 1024,
  };
}

/**
 * Biblioteca V2: uma prancha principal, integralmente ilustrada, para cada tema publicado.
 * Os mapas vetoriais antigos não são mais consumidos pela tela de tema.
 */
export const VISUAL_ASSETS: VisualAsset[] = [
  illustrated({ id: "V2-SUS-01", category: "sus", topicSlug: "sus-na-constituicao-arts-196-a-200", file: "sus-constituicao-ilustrado.svg", base: "sus-constituicao-base-v2.png", alt: "Constituição aberta conectando cidadãos, rede regionalizada, participação e competências sanitárias.", description: "Direito à saúde, diretrizes e competências do SUS traduzidos em uma única cena funcional.", sourceRefs: ["cf88"] }),
  illustrated({ id: "V2-SUS-02", category: "sus", topicSlug: "principios-do-sus-lei-8080", file: "sus-principios-ilustrado.svg", base: "sus-principios-base.png", alt: "Unidade pública recebendo cidadãos e conectada a cuidado, informação, território e comunidade.", description: "Os princípios do art. 7º aparecem como ações concretas no cuidado e na organização da rede.", sourceRefs: ["lei8080v2"] }),
  illustrated({ id: "V2-SUS-03", category: "sus", topicSlug: "lei-8080-organizacao-e-competencias", file: "sus-lei-8080-organizacao-ilustrado.svg", base: "sus-lei-8080-organizacao-base.png", alt: "Família cercada por determinantes sociais, áreas de atuação do SUS e três níveis de gestão.", description: "Determinantes, campo de atuação e direção única apresentados como um sistema integrado.", sourceRefs: ["lei8080v2"] }),
  illustrated({ id: "V2-SUS-04", category: "sus", topicSlug: "participacao-da-comunidade-lei-8142", file: "sus-participacao-ilustrado.svg", base: "sus-participacao-base.png", alt: "Conferência comunitária, conselho paritário e fluxo de recursos entre os entes.", description: "Participação social e financiamento reunidos na lógica da Lei 8.142.", sourceRefs: ["lei8142v2"] }),
  illustrated({ id: "V2-SUS-05", category: "sus", topicSlug: "decreto-7508-regioes-e-portas-de-entrada", file: "sus-decreto-7508-ilustrado.svg", base: "sus-decreto-7508-base.png", alt: "Municípios conectados em Região de Saúde com portas de entrada e serviços especializados.", description: "Acesso ordenado e regionalização representados como percurso territorial.", sourceRefs: ["decreto7508"] }),
  illustrated({ id: "V2-SUS-06", category: "sus", topicSlug: "atencao-basica-pnab", file: "sus-pnab-ilustrado.svg", base: "sus-pnab-base.png", alt: "Equipe de Saúde da Família na UBS conectada às casas e à rede de atenção.", description: "Território, equipe mínima, cuidado longitudinal e coordenação da rede.", sourceRefs: ["pnab2436"] }),

  illustrated({ id: "V2-FUN-01", category: "fundamentos", topicSlug: "nove-certos-administracao-de-medicamentos", file: "fundamentos-nove-certos-ilustrado.svg", base: "fundamentos-nove-certos-base.png", alt: "Técnica de enfermagem conferindo paciente, prescrição, medicamento, dose, via e horário no leito.", description: "Os nove certos aparecem distribuídos antes, durante e depois da administração.", sourceRefs: ["protMedicamentosV2"] }),
  illustrated({ id: "V2-FUN-02", category: "fundamentos", topicSlug: "prevencao-de-ulcera-por-pressao", file: "fundamentos-lesao-pressao-ilustrado.svg", base: "fundamentos-lesao-pressao-base.png", alt: "Paciente reposicionado com apoios, calcâneos flutuantes e modelos didáticos das camadas da pele.", description: "Prevenção no leito e progressão da profundidade da lesão sem representação gráfica excessiva.", sourceRefs: ["protUppV2"] }),

  illustrated({ id: "V2-BIO-01", category: "biosseguranca", topicSlug: "higiene-das-maos-cinco-momentos", file: "biosseguranca-cinco-momentos-ilustrado.svg", base: "biosseguranca-cinco-momentos-base.png", alt: "Profissional percorrendo os cinco momentos de higiene das mãos ao redor do leito.", description: "Os cinco momentos aparecem dentro do ponto real de assistência.", sourceRefs: ["protHigieneMaos"] }),
  illustrated({ id: "V2-BIO-02", category: "biosseguranca", topicSlug: "precaucoes-padrao-e-especificas", file: "biosseguranca-precaucoes-ilustrado.svg", base: "biosseguranca-precaucoes-base.png", alt: "Quatro cenas comparando precaução padrão, contato, gotículas e aerossóis.", description: "A via de transmissão determina as barreiras e o ambiente de cuidado.", sourceRefs: ["precaucoesEbserh"] }),
  illustrated({ id: "V2-BIO-03", category: "biosseguranca", topicSlug: "epi-paramentacao-e-desparamentacao", file: "biosseguranca-epi-ilustrado.svg", base: "biosseguranca-epi-base.png", alt: "Sequências espelhadas de colocação e retirada de equipamentos de proteção individual.", description: "A ordem de vestir e retirar EPI é mostrada corporalmente, etapa por etapa.", sourceRefs: ["nt04Anvisa", "nr32"] }),
  illustrated({ id: "V2-BIO-04", category: "biosseguranca", topicSlug: "nr-32-seguranca-do-trabalhador", file: "biosseguranca-nr32-ilustrado.svg", base: "biosseguranca-nr32-base.png", alt: "Trabalhadora protegida, vacinada e descartando perfurocortante, com proibições afastadas do posto.", description: "Riscos ocupacionais, proteção e condutas vedadas organizados em uma cena de trabalho.", sourceRefs: ["nr32"] }),
  illustrated({ id: "V2-BIO-05", category: "biosseguranca", topicSlug: "acidente-com-material-biologico", file: "biosseguranca-acidente-biologico-ilustrado.svg", base: "biosseguranca-acidente-biologico-base.png", alt: "Sequência após acidente biológico: lavagem, comunicação, avaliação, profilaxia e seguimento.", description: "Os primeiros minutos e o acompanhamento posterior formam uma única linha de ação.", sourceRefs: ["expBiologica"] }),
  illustrated({ id: "V2-BIO-06", category: "biosseguranca", topicSlug: "residuos-de-servicos-de-saude-rdc-222", file: "biosseguranca-residuos-ilustrado.svg", base: "biosseguranca-residuos-base.png", alt: "Cinco coletores com resíduos reais e profissional descartando perfurocortante.", description: "Classificação e acondicionamento são explicados pelos próprios materiais descartados.", sourceRefs: ["rdc222"] }),
  illustrated({ id: "V2-BIO-07", category: "biosseguranca", topicSlug: "processamento-de-produtos-rdc-15", file: "biosseguranca-processamento-ilustrado.svg", base: "biosseguranca-processamento-base.png", alt: "Instrumental atravessando limpeza, inspeção, embalagem, esterilização e armazenamento.", description: "Fluxo unidirecional do material sujo ao produto esterilizado.", sourceRefs: ["rdc15"] }),
  illustrated({ id: "V2-BIO-08", category: "biosseguranca", topicSlug: "nucleo-de-seguranca-do-paciente", file: "biosseguranca-pnsp-ilustrado.svg", base: "biosseguranca-pnsp-base.png", alt: "Hospital em corte com Núcleo de Segurança, protocolos, incidentes e análise de eventos.", description: "Governança, barreiras, monitoramento e notificação dentro do mesmo hospital.", sourceRefs: ["portaria529", "rdc36"] }),

  illustrated({ id: "V2-URG-01", category: "urgencia-e-emergencia", topicSlug: "rede-de-atencao-as-urgencias-componentes", file: "urgencia-rue-componentes-ilustrado.svg", base: "urgencia-rue-componentes-base.png", alt: "Jornada entre comunidade, Atenção Básica, atendimento móvel, UPA, hospital e domicílio.", description: "Os componentes da RUE aparecem como continuidade territorial do cuidado.", sourceRefs: ["portaria1600"] }),
  illustrated({ id: "V2-URG-02", category: "urgencia-e-emergencia", topicSlug: "rede-de-atencao-as-urgencias-diretrizes", file: "urgencia-rue-diretrizes-ilustrado.svg", base: "urgencia-rue-diretrizes-base.png", alt: "Acolhimento com classificação de risco distribuindo diferentes urgências pela rede.", description: "Acesso, regulação, integralidade e cuidado multiprofissional em uma cena funcional.", sourceRefs: ["portaria1600"] }),
  { id: "V2-URG-03", category: "urgencia-e-emergencia", topicSlug: "rcp-adulto-suporte-basico", family: "procedure", priority: "P0", status: "research_required", width: 1536, height: 1024, alt: "Prancha de RCP adulto aguardando revisão científica.", description: "A produção começa somente após o tema sair de review_required.", sourceRefs: ["aha2025"] },

  illustrated({ id: "V2-MUL-01", category: "saude-da-mulher", topicSlug: "calculo-da-idade-gestacional", file: "mulher-idade-gestacional-ilustrado.svg", base: "mulher-idade-gestacional-base.png", alt: "Calendário, três alturas uterinas relativas, medição clínica e ultrassonografia.", description: "O método de estimativa muda conforme a informação disponível sobre a DUM.", sourceRefs: ["cab32"] }),
  illustrated({ id: "V2-MUL-02", category: "saude-da-mulher", topicSlug: "regra-de-naegele-data-provavel-do-parto", file: "mulher-naegele-ilustrado.svg", base: "mulher-naegele-base.png", alt: "Calendário ilustrado conduzindo a DUM até a data provável do parto.", description: "Soma de dias, ajuste de meses e passagem de mês mostrados visualmente.", sourceRefs: ["cab32"] }),

  illustrated({ id: "V2-CRI-01", category: "saude-da-crianca", topicSlug: "aleitamento-materno", file: "crianca-aleitamento-ilustrado.svg", base: "crianca-aleitamento-base.png", alt: "Mãe totalmente vestida alimentando o bebê sob manta e oferecendo alimentação complementar depois.", description: "Primeira hora, exclusividade até seis meses e continuidade com alimentação complementar.", sourceRefs: ["guiaAlimentar2"] }),
  illustrated({ id: "V2-CRI-02", category: "saude-da-crianca", topicSlug: "teste-do-pezinho-triagem-neonatal", file: "crianca-teste-pezinho-ilustrado.svg", base: "crianca-teste-pezinho-base.png", alt: "Bebê no colo com calcanhar abaixo do coração, regiões laterais e coleta no papel-filtro.", description: "Posição, região segura, punção e preenchimento do cartão em uma sequência única.", sourceRefs: ["triagemNeonatal", "lei14154"] }),

  illustrated({ id: "V2-ETI-01", category: "etica-e-legislacao", topicSlug: "lei-7498-atribuicoes-do-tecnico", file: "etica-atribuicoes-ilustrado.svg", base: "etica-atribuicoes-base.png", alt: "Enfermeira, técnica e auxiliar exercendo funções diferentes sob supervisão.", description: "Planejamento, supervisão e execução aparecem dentro do cuidado real.", sourceRefs: ["lei7498v2", "decreto94406v2"] }),
  illustrated({ id: "V2-ETI-02", category: "etica-e-legislacao", topicSlug: "lei-5905-sistema-cofen-coren", file: "etica-cofen-coren-ilustrado.svg", base: "etica-cofen-coren-base.png", alt: "Mapa do Brasil conectando conselho federal, regionais, registro e fiscalização.", description: "A estrutura do Sistema Cofen/Coren e suas atribuições formam uma rede institucional.", sourceRefs: ["lei5905"] }),
  illustrated({ id: "V2-ETI-03", category: "etica-e-legislacao", topicSlug: "codigo-de-etica-cofen-564", file: "etica-codigo-ilustrado.svg", base: "etica-codigo-base.png", alt: "Profissional registrando, preservando sigilo, esclarecendo prescrição e recusando ato inseguro.", description: "Direitos, deveres e proibições aparecem como decisões do cotidiano.", sourceRefs: ["cofen564v2"] }),
  illustrated({ id: "V2-ETI-04", category: "etica-e-legislacao", topicSlug: "codigo-de-etica-infracoes-e-penalidades", file: "etica-penalidades-ilustrado.svg", base: "etica-penalidades-base.png", alt: "Processo ético levando da apuração às consequências disciplinares.", description: "Infração, gravidade e cinco penalidades organizadas como progressão visual.", sourceRefs: ["cofen564v2", "lei5905"] }),

  illustrated({ id: "V2-CAL-01", category: "calculos-de-enfermagem", topicSlug: "conversoes-de-unidades-e-medidas", file: "calculos-conversoes-ilustrado.svg", base: "calculos-conversoes-base.png", alt: "Balança, recipientes, colheres, conta-gotas e soluções em transformações de unidades.", description: "Massa, volume, medidas caseiras e tonicidade explicados por objetos concretos.", sourceRefs: ["calculoSeguro1v2"] }),
  illustrated({ id: "V2-CAL-02", category: "calculos-de-enfermagem", topicSlug: "regra-de-tres-dose-e-diluicao", file: "calculos-regra-tres-ilustrado.svg", base: "calculos-regra-tres-base.png", alt: "Prescrição, apresentação disponível, diluição e seringa numa bancada de preparo.", description: "O que se tem, o que foi prescrito e o volume procurado ocupam a mesma relação visual.", sourceRefs: ["calculoSeguro2"] }),
  illustrated({ id: "V2-CAL-03", category: "calculos-de-enfermagem", topicSlug: "gotejamento-gotas-e-microgotas", file: "calculos-gotejamento-ilustrado.svg", base: "calculos-gotejamento-base.png", alt: "Bolsa de soro, câmaras de macro e microgotas, relógio e volume de infusão.", description: "Volume e tempo determinam visualmente a velocidade do gotejamento.", sourceRefs: ["calculoSeguro1v2"] }),
  illustrated({ id: "V2-CAL-04", category: "calculos-de-enfermagem", topicSlug: "penicilina-cristalina-e-rediluicao", file: "calculos-penicilina-ilustrado.svg", base: "calculos-penicilina-base.png", alt: "Frasco com pó, diluente, solução final e nova diluição em quatro etapas.", description: "Reconstituição e rediluição representadas pela mudança de concentração das partículas.", sourceRefs: ["calculoSeguro2"] }),
  illustrated({ id: "V2-CAL-05", category: "calculos-de-enfermagem", topicSlug: "insulina-calculo-e-preparo", file: "calculos-insulina-ilustrado.svg", base: "calculos-insulina-base.png", alt: "Frascos de insulina límpida e leitosa, seringas diferentes e dupla checagem.", description: "Aspecto, graduação e volume correto no preparo seguro da insulina.", sourceRefs: ["calculoSeguro2"] }),
];

export function visualAssetsForTopic(topicSlug: string) {
  return VISUAL_ASSETS.filter((asset) => asset.topicSlug === topicSlug && asset.status !== "research_required");
}

export function visualAssetById(id: string) {
  return VISUAL_ASSETS.find((asset) => asset.id === id);
}

export function findAsset(id: string) {
  const asset = visualAssetById(id);
  if (!asset) return undefined;
  return { ...asset, file: asset.asset ?? "", labels: asset.labels ?? [] };
}
