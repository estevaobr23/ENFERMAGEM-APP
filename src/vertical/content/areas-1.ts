import type { CategorySeed } from "@/core/content/types";
import { AUTO_REVIEW_NOTE, REVIEWED_ON, SRC, at } from "./sources";
import { SECTIONS_1 } from "./sections-1";
import { EXTRA_QUESTIONS } from "./extra-questions";

/* Áreas 1–4: SUS, Fundamentos, Biossegurança, Urgência e Emergência. */

export const URGENCIA: CategorySeed = {
  slug: "urgencia-e-emergencia",
  title: "Urgência e Emergência",
  shortTitle: "Urgência",
  description: "Rede de Atenção às Urgências: componentes e diretrizes.",
  tone: "rose",
  icon: "🚑",
  status: "published",
  topics: [
    {
      slug: "rede-de-atencao-as-urgencias-componentes",
      title: "Rede de Atenção às Urgências: componentes",
      description: "Os oito componentes da RUE na Portaria GM/MS nº 1.600/2011.",
      summary:
        "A Portaria GM/MS nº 1.600/2011 reformulou a Política Nacional de Atenção às Urgências e instituiu a Rede de Atenção às Urgências (RUE) no SUS. O art. 4º lista oito componentes: Promoção, Prevenção e Vigilância à Saúde; Atenção Básica em Saúde; Serviço de Atendimento Móvel de Urgência (SAMU 192) e suas Centrais de Regulação Médica das Urgências; Sala de Estabilização; Força Nacional de Saúde do SUS; Unidades de Pronto Atendimento (UPA 24h) e o conjunto de serviços de urgência 24 horas; Hospitalar; e Atenção Domiciliar. Na Atenção Básica, o objetivo inclui o primeiro cuidado às urgências e emergências, em ambiente adequado, até a transferência para outros pontos de atenção quando necessário, com acolhimento e avaliação de riscos e vulnerabilidades.",
      keyPoints: [
        "São 8 componentes (art. 4º).",
        "A Atenção Básica é componente: faz o primeiro cuidado às urgências.",
        "SAMU 192 vem junto das Centrais de Regulação Médica das Urgências.",
        "Sala de Estabilização e Força Nacional de Saúde do SUS são componentes próprios.",
        "UPA 24h + conjunto de serviços de urgência 24 horas.",
        "Hospitalar e Atenção Domiciliar fecham a lista.",
      ],
      map: {
        title: "RUE — 8 componentes",
        spec: {
          layout: "hub",
          center: "Rede de Atenção às Urgências",
          blocks: [
            { title: "Antes da urgência", tone: "green", icon: "🌱", items: ["Promoção, Prevenção e Vigilância", "Atenção Básica (primeiro cuidado)"] },
            { title: "Chegar rápido", tone: "rose", icon: "🚑", items: ["SAMU 192 + Regulação Médica", "Força Nacional de Saúde do SUS"] },
            { title: "Estabilizar", tone: "amber", icon: "🏥", items: ["Sala de Estabilização", "UPA 24h e serviços 24 h"] },
            { title: "Continuar o cuidado", tone: "blue", icon: "🏠", items: ["Hospitalar", "Atenção Domiciliar"] },
          ],
        },
      },
      sections: SECTIONS_1["rede-de-atencao-as-urgencias-componentes"] ?? [],
      sources: [at(SRC.portaria1600, "arts. 3º, 4º e 6º a 12")],
      questions: [
        {
          key: "urg-rue-1",
          section: "oito-componentes",
          stem: "De acordo com a Portaria GM/MS nº 1.600/2011, NÃO é componente da Rede de Atenção às Urgências:",
          options: [
            { label: "A", text: "Atenção Básica em Saúde." },
            { label: "B", text: "Sala de Estabilização." },
            { label: "C", text: "Atenção Domiciliar." },
            { label: "D", text: "Farmácia Popular.", correct: true },
          ],
          explanation:
            "Os componentes do art. 4º são: Promoção, Prevenção e Vigilância; Atenção Básica; SAMU 192 e Centrais de Regulação; Sala de Estabilização; Força Nacional de Saúde do SUS; UPA 24h e serviços 24 h; Hospitalar; Atenção Domiciliar. Farmácia Popular não está na lista.",
          difficulty: "facil",
          source: 0,
          status: "published",
        },
        {
          key: "urg-rue-2",
          section: "oito-componentes",
          stem: "Segundo a Portaria GM/MS nº 1.600/2011, o componente Atenção Básica em Saúde da RUE tem, entre seus objetivos:",
          options: [
            { label: "A", text: "realizar exclusivamente o transporte inter-hospitalar." },
            { label: "B", text: "o primeiro cuidado às urgências e emergências, em ambiente adequado, até a transferência a outros pontos de atenção quando necessário.", correct: true },
            { label: "C", text: "substituir as UPA 24h nos municípios de pequeno porte." },
            { label: "D", text: "atender apenas casos eletivos, encaminhando toda urgência ao hospital." },
          ],
          explanation:
            "O art. 6º fala em ampliação do acesso, fortalecimento do vínculo e primeiro cuidado às urgências e emergências até a transferência, com acolhimento e avaliação de riscos e vulnerabilidades.",
          difficulty: "media",
          source: 0,
          status: "published",
        },
        ...(EXTRA_QUESTIONS["rede-de-atencao-as-urgencias-componentes"] ?? []),
      ],
      status: "published",
      lastReviewedAt: REVIEWED_ON,
      reviewNotes: AUTO_REVIEW_NOTE + " Conferir, na revisão humana, a redação consolidada vigente da portaria.",
    },
    {
      slug: "rede-de-atencao-as-urgencias-diretrizes",
      title: "Rede de Atenção às Urgências: diretrizes",
      description: "Acolhimento com classificação de risco, regionalização e humanização.",
      summary:
        "O art. 2º da Portaria GM/MS nº 1.600/2011 traz as diretrizes da Rede de Atenção às Urgências. Entre elas: ampliação do acesso e acolhimento aos casos agudos em todos os pontos de atenção, contemplando a classificação de risco e a intervenção adequada; garantia da universalidade, equidade e integralidade no atendimento às urgências clínicas, cirúrgicas, gineco-obstétricas, psiquiátricas, pediátricas e às relacionadas a causas externas (traumatismos, violências e acidentes); regionalização do atendimento com acesso regulado; humanização da atenção, com modelo centrado no usuário; modelo de atenção multiprofissional, com trabalho em equipe e linhas de cuidado; articulação e integração dos serviços em rede; e atuação territorial, organizando as regiões de saúde a partir das necessidades da população.",
      keyPoints: [
        "Acolhimento aos casos agudos com classificação de risco em todos os pontos de atenção.",
        "Universalidade, equidade e integralidade no atendimento às urgências.",
        "Urgências clínicas, cirúrgicas, gineco-obstétricas, psiquiátricas, pediátricas e causas externas.",
        "Regionalização com acesso regulado.",
        "Humanização: modelo centrado no usuário.",
        "Trabalho multiprofissional e linhas de cuidado.",
      ],
      map: {
        title: "Diretrizes da RUE",
        spec: {
          layout: "hub",
          center: "Portaria 1.600/2011 · art. 2º",
          blocks: [
            { title: "Porta de entrada", tone: "rose", icon: "🚦", items: ["Acolhimento dos casos agudos", "Classificação de risco"] },
            { title: "Para todos", tone: "blue", icon: "⚖️", items: ["Universalidade, equidade, integralidade", "Clínicas, cirúrgicas, obstétricas, psiquiátricas, pediátricas, causas externas"] },
            { title: "Em rede", tone: "amber", icon: "🕸️", items: ["Regionalização e acesso regulado", "Serviços articulados e integrados"] },
            { title: "Jeito de cuidar", tone: "green", icon: "🤝", items: ["Humanização centrada no usuário", "Equipe multiprofissional, linhas de cuidado"] },
          ],
          footnote: "Aqui a portaria usa 'equidade' — diferente do art. 7º da Lei 8.080.",
        },
      },
      sections: SECTIONS_1["rede-de-atencao-as-urgencias-diretrizes"] ?? [],
      sources: [at(SRC.portaria1600, "art. 2º")],
      questions: [
        {
          key: "urg-dir-1",
          section: "acolhimento-com-classificacao",
          stem: "Entre as diretrizes da Rede de Atenção às Urgências (Portaria GM/MS nº 1.600/2011), está a ampliação do acesso e do acolhimento aos casos agudos em todos os pontos de atenção, contemplando:",
          options: [
            { label: "A", text: "o atendimento por ordem de chegada, sem distinção de gravidade." },
            { label: "B", text: "a classificação de risco e a intervenção adequada e necessária aos diferentes agravos.", correct: true },
            { label: "C", text: "o encaminhamento obrigatório de todos os casos ao hospital." },
            { label: "D", text: "a cobrança de coparticipação nos casos não urgentes." },
          ],
          explanation: "É o inciso I do art. 2º: acolhimento aos casos agudos contemplando a classificação de risco e a intervenção adequada.",
          difficulty: "facil",
          source: 0,
          status: "published",
        },
        {
          key: "urg-dir-2",
          section: "causas-externas",
          stem: "Pela Portaria GM/MS nº 1.600/2011, a garantia de universalidade, equidade e integralidade no atendimento às urgências inclui as urgências relacionadas a causas externas, que são:",
          options: [
            { label: "A", text: "doenças crônicas descompensadas." },
            { label: "B", text: "traumatismos, violências e acidentes.", correct: true },
            { label: "C", text: "atendimentos de outros países." },
            { label: "D", text: "consultas eletivas de especialistas." },
          ],
          explanation: "O inciso II do art. 2º descreve as causas externas como traumatismos, violências e acidentes.",
          difficulty: "facil",
          source: 0,
          status: "published",
        },
        ...(EXTRA_QUESTIONS["rede-de-atencao-as-urgencias-diretrizes"] ?? []),
      ],
      status: "published",
      lastReviewedAt: REVIEWED_ON,
      reviewNotes: AUTO_REVIEW_NOTE + " Conferir, na revisão humana, a redação consolidada vigente da portaria.",
    },
    {
      slug: "rcp-adulto-suporte-basico",
      title: "RCP no adulto: suporte básico de vida",
      description: "Parâmetros da RCP de alta qualidade (diretrizes AHA 2025).",
      summary:
        "PENDENTE DE REVISÃO. Este tema deve ser escrito a partir das diretrizes de 2025 da American Heart Association (frequência e profundidade das compressões, retorno do tórax, relação compressão-ventilação, interrupções). O documento oficial não pôde ser baixado para conferência durante o desenvolvimento (acesso bloqueado), então nenhum parâmetro foi publicado.",
      keyPoints: [],
      map: {
        title: "RCP no adulto",
        spec: { layout: "flow", center: "Pendente de revisão", blocks: [{ title: "Pendente", tone: "slate", items: ["Conferir na fonte oficial antes de publicar"] }] },
      },
      sections: SECTIONS_1["rcp-adulto-suporte-basico"] ?? [],
      sources: [SRC.aha2025],
      questions: [],
      status: "review_required",
      lastReviewedAt: null,
      reviewNotes:
        "Fonte oficial (cpr.heart.org / ahajournals) respondeu 403 ao download automatizado em 2026-10-02. Não publicar nenhum número de memória: baixar o PDF manualmente, conferir e só então escrever resumo, mapa e questões.",
    },
  ],
};
