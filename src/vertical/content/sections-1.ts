import type { TopicSection } from "@/core/content/types";

/*
 * Seções dos temas das áreas 1–4. Cada afirmação técnica saiu do texto da
 * fonte do tema (conferido em 2026-10-03 contra o original: Planalto,
 * Saúde Legis/BVS, PDFs dos protocolos). `source` = índice em topic.sources.
 */

export const SECTIONS_1: Record<string, TopicSection[]> = {
  /* ───────────────────────────── SUS ───────────────────────────── */


  /* ─────────────────────────── FUNDAMENTOS ─────────────────────────── */


  /* ─────────────────────────── BIOSSEGURANÇA ─────────────────────────── */


  /* ─────────────────────────── URGÊNCIA ─────────────────────────── */
  "rede-de-atencao-as-urgencias-componentes": [
    {
      id: "finalidade-da-rue",
      kind: "conceito",
      title: "Para que existe a RUE",
      source: 0,
      blocks: [
        {
          type: "definition",
          term: "Rede de Atenção às Urgências (Portaria 1.600/2011)",
          text: "Organizada para ==articular e integrar todos os equipamentos de saúde==, ampliando e qualificando o acesso humanizado e integral aos usuários em situação de urgência e emergência, de forma ágil e oportuna.",
        },
        {
          type: "cards",
          items: [
            { title: "Base de tudo", text: "==Acolhimento com classificação do risco==, qualidade e resolutividade são a base dos fluxos assistenciais da RUE.", icon: "🚦", tone: "rose" },
            { title: "Linhas prioritárias", text: "Cuidado ==cardiovascular, cerebrovascular e traumatológico==.", icon: "❤️", tone: "amber" },
          ],
        },
      ],
    },
    {
      id: "oito-componentes",
      kind: "classificacao",
      title: "Os 8 componentes (art. 4º)",
      lead: "Pense no caminho do paciente: prevenir → primeiro cuidado → chegar → estabilizar → internar → casa.",
      source: 0,
      blocks: [
        {
          type: "steps",
          items: [
            { title: "Promoção, Prevenção e Vigilância à Saúde", text: "Antes da urgência acontecer." },
            { title: "Atenção Básica em Saúde", text: "Ampliar acesso, fortalecer vínculo e fazer o ==primeiro cuidado== às urgências até a transferência, com acolhimento e avaliação de riscos e vulnerabilidades." },
            { title: "SAMU 192 e Centrais de Regulação Médica das Urgências", text: "Chegar ==precocemente à vítima== após um agravo e garantir transporte a serviço adequado." },
            { title: "Sala de Estabilização", text: "Ambiente para ==estabilizar pacientes críticos e/ou graves==, com assistência 24 h, articulado aos outros níveis." },
            { title: "Força Nacional de Saúde do SUS", text: "Garantir a integralidade em situações de risco ou emergência para populações vulneráveis e regiões de difícil acesso." },
            { title: "UPA 24h e conjunto de serviços de urgência 24 horas", text: "==Complexidade intermediária==, entre a Atenção Básica e a rede hospitalar." },
            { title: "Hospitalar", text: "Portas de urgência, enfermarias de retaguarda, leitos de cuidados intensivos, diagnóstico e linhas prioritárias." },
            { title: "Atenção Domiciliar", text: "Ações integradas de promoção, prevenção, tratamento e reabilitação ==no domicílio==." },
          ],
        },
      ],
    },
    {
      id: "upa-entre-os-niveis",
      kind: "cuidados",
      title: "Onde cada serviço fica",
      source: 0,
      blocks: [
        {
          type: "compare",
          columns: ["Atenção Básica", "UPA 24h", "Hospitalar"],
          rows: [
            { label: "Papel na urgência", cells: ["Primeiro cuidado até a transferência", "Atendimento resolutivo a quadros agudos; complexidade intermediária", "Portas de urgência, retaguarda e cuidados intensivos"] },
            { label: "Posição", cells: ["Porta de entrada do território", "==Entre== a Atenção Básica e a rede hospitalar", "Maior densidade tecnológica"] },
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
            { wrong: "A Atenção Básica não faz parte da RUE.", right: "É componente: faz o ==primeiro cuidado== às urgências." },
            { wrong: "A Farmácia Popular é componente da RUE.", right: "Não está entre os ==8 componentes== do art. 4º." },
            { wrong: "O SAMU é componente isolado.", right: "SAMU 192 ==e suas Centrais de Regulação Médica== das Urgências formam um componente." },
            { wrong: "A UPA é serviço de alta complexidade.", right: "UPA = ==complexidade intermediária==." },
          ],
        },
      ],
    },
  ],

  "rede-de-atencao-as-urgencias-diretrizes": [
    {
      id: "acolhimento-com-classificacao",
      kind: "conceito",
      title: "A diretriz que abre a lista",
      source: 0,
      blocks: [
        {
          type: "definition",
          term: "Inciso I do art. 2º",
          text: "Ampliação do acesso e ==acolhimento aos casos agudos== demandados aos serviços de saúde ==em todos os pontos de atenção==, contemplando a ==classificação de risco== e a intervenção adequada e necessária aos diferentes agravos.",
        },
      ],
    },
    {
      id: "as-diretrizes",
      kind: "classificacao",
      title: "As diretrizes do art. 2º, agrupadas",
      source: 0,
      blocks: [
        {
          type: "cards",
          items: [
            { title: "Acesso e justiça", text: "Acolhimento com classificação de risco. ==Universalidade, equidade e integralidade== no atendimento às urgências clínicas, cirúrgicas, gineco-obstétricas, psiquiátricas, pediátricas e por causas externas.", icon: "⚖️", tone: "blue" },
            { title: "Organização em rede", text: "==Regionalização== com acesso regulado. Articulação e integração dos serviços em rede. ==Regulação articulada== entre todos os componentes.", icon: "🕸️", tone: "amber" },
            { title: "Modo de cuidar", text: "==Humanização== centrada no usuário. Modelo ==multiprofissional==, trabalho em equipe e linhas de cuidado.", icon: "🤝", tone: "green" },
            { title: "Território", text: "Atuação territorial, definindo regiões de saúde a partir de necessidades, riscos e vulnerabilidades.", icon: "📍", tone: "teal" },
            { title: "Qualidade e gestão", text: "Monitoramento por indicadores de desempenho e resolutividade. Articulação interfederativa. ==Educação permanente== das equipes.", icon: "📈", tone: "violet" },
            { title: "Sociedade e crises", text: "Participação e controle social. Projetos estratégicos para emergências, calamidades e desastres.", icon: "🌐", tone: "rose" },
          ],
        },
      ],
    },
    {
      id: "causas-externas",
      kind: "cuidados",
      title: "Quais urgências a rede cobre",
      source: 0,
      blocks: [
        {
          type: "checklist",
          items: ["Clínicas", "Cirúrgicas", "Gineco-obstétricas", "Psiquiátricas", "Pediátricas", "Causas externas: ==traumatismos, violências e acidentes=="],
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
            { wrong: "O acolhimento com classificação de risco só existe no pronto-socorro hospitalar.", right: "Deve ocorrer ==em todos os pontos de atenção==." },
            { wrong: "Causas externas são doenças infecciosas importadas.", right: "Causas externas = ==traumatismos, violências e acidentes==." },
            { wrong: "A portaria da RUE repete os princípios do art. 7º da Lei 8.080, com 'igualdade'.", right: "Aqui a diretriz fala em ==equidade==, além de universalidade e integralidade." },
          ],
        },
      ],
    },
  ],

  "rcp-adulto-suporte-basico": [],
};
