import { dripRate } from "@/core/calc";
import type { QuestionSeed } from "@/core/content/types";

/*
 * 3ª questão de cada tema (quiz final). Cada uma testa um ponto de uma seção
 * conferida contra a fonte em 2026-10-03. Chaves estáveis: não renomear.
 */

const DRIP_X = dripRate(1000, 8, "gotas"); // 41,67 → 42

export const EXTRA_QUESTIONS: Record<string, QuestionSeed[]> = {
  "rede-de-atencao-as-urgencias-componentes": [
    {
      key: "urg-rue-3",
      stem: "Na Rede de Atenção às Urgências (Portaria GM/MS nº 1.600/2011), a UPA 24h é definida como estabelecimento de complexidade:",
      options: [
        { label: "A", text: "baixa, substituta da Atenção Básica." },
        { label: "B", text: "intermediária, situado entre a Atenção Básica e a Rede Hospitalar.", correct: true },
        { label: "C", text: "alta, com leitos de terapia intensiva." },
        { label: "D", text: "exclusivamente ambulatorial e eletiva." },
      ],
      explanation: "A portaria define a UPA 24h como estabelecimento de complexidade intermediária, entre a Atenção Básica e a Rede Hospitalar.",
      difficulty: "facil",
      source: 0,
      section: "oito-componentes",
      status: "published",
    },
  ],
  "rede-de-atencao-as-urgencias-diretrizes": [
    {
      key: "urg-dir-3",
      stem: "Segundo a Portaria GM/MS nº 1.600/2011, o acolhimento aos casos agudos com classificação de risco deve ocorrer:",
      options: [
        { label: "A", text: "somente nas portas hospitalares de urgência." },
        { label: "B", text: "apenas nas UPAs 24h." },
        { label: "C", text: "em todos os pontos de atenção.", correct: true },
        { label: "D", text: "somente no atendimento pré-hospitalar do SAMU." },
      ],
      explanation: "O inciso I do art. 2º fala em acolhimento aos casos agudos demandados aos serviços de saúde em todos os pontos de atenção, contemplando a classificação de risco.",
      difficulty: "facil",
      source: 0,
      section: "acolhimento-com-classificacao",
      status: "published",
    },
  ],
  "calculo-da-idade-gestacional": [
    {
      key: "mulher-ig-3",
      stem: "Pelo Caderno de Atenção Básica nº 32, o início dos movimentos fetais, usado para estimar a idade gestacional quando a DUM é desconhecida, habitualmente ocorre entre:",
      options: [
        { label: "A", text: "8 e 10 semanas." },
        { label: "B", text: "12 e 14 semanas." },
        { label: "C", text: "18 e 20 semanas.", correct: true },
        { label: "D", text: "28 e 30 semanas." },
      ],
      explanation: "O caderno diz que os movimentos fetais habitualmente ocorrem entre 18 e 20 semanas.",
      difficulty: "facil",
      source: 0,
      section: "qual-metodo-usar",
      status: "published",
    },
  ],
  "regra-de-naegele-data-provavel-do-parto": [
    {
      key: "mulher-dpp-3",
      stem: "Segundo o Caderno de Atenção Básica nº 32, a data provável do parto pelo calendário considera a duração média da gestação normal de:",
      options: [
        { label: "A", text: "240 dias (36 semanas) a partir da DUM." },
        { label: "B", text: "280 dias (40 semanas) a partir da DUM.", correct: true },
        { label: "C", text: "280 dias a partir da primeira consulta de pré-natal." },
        { label: "D", text: "300 dias (43 semanas) a partir da DUM." },
      ],
      explanation: "O item 5.6 usa a duração média da gestação normal: 280 dias ou 40 semanas, a partir da DUM.",
      difficulty: "facil",
      source: 0,
      section: "base-do-calculo",
      status: "published",
    },
  ],
  "aleitamento-materno": [
    {
      key: "crianca-am-3",
      stem: "De acordo com o Guia Alimentar para Crianças Brasileiras Menores de 2 Anos, é sinal de pega adequada na amamentação:",
      options: [
        { label: "A", text: "lábios virados para dentro e bochechas encovadas." },
        { label: "B", text: "boca bem aberta, lábios virados para fora e queixo encostado na mama.", correct: true },
        { label: "C", text: "o bebê abocanhar apenas o mamilo." },
        { label: "D", text: "aréola mais visível abaixo do que acima da boca." },
      ],
      explanation: "O guia cita como sinais de pega favorável: boca bem aberta, lábios virados para fora, queixo encostado na mama e aréola aparecendo mais acima do que abaixo da boca.",
      difficulty: "media",
      source: 0,
      section: "como-amamentar",
      status: "published",
    },
  ],
  "teste-do-pezinho-triagem-neonatal": [
    {
      key: "crianca-pezinho-3",
      stem: "Na coleta do teste do pezinho, conforme o manual do Ministério da Saúde, a primeira gota de sangue que se forma após a punção deve ser:",
      options: [
        { label: "A", text: "usada para preencher o primeiro círculo." },
        { label: "B", text: "retirada com algodão seco ou gaze, pois pode conter fluidos teciduais que interferem nos testes.", correct: true },
        { label: "C", text: "espalhada sobre todos os círculos do papel-filtro." },
        { label: "D", text: "misturada ao álcool da assepsia para diluir." },
      ],
      explanation: "O manual manda aguardar uma grande gota e retirar a primeira com algodão seco ou gaze, porque ela pode conter outros fluidos teciduais.",
      difficulty: "media",
      source: 0,
      section: "tecnica-de-coleta",
      status: "published",
    },
  ],
};
