/**
 * O ÚNICO lugar com a linguagem do nicho fora do conteúdo. O core fala em
 * categoria, tema, questão, revisão; aqui eles ganham nome e tom.
 */
export const vertical = {
  productKey: "revisao-tecnico-enfermagem",
  brand: {
    name: "Revisão Técnico de Enfermagem",
    /** nome curto para o app e a aba do navegador */
    short: "Revisão Técnico",
    tagline: "Revisão visual para concurso de Técnico de Enfermagem",
  },
  vocabulary: {
    category: { singular: "área", plural: "áreas" },
    topic: { singular: "assunto", plural: "assuntos" },
    question: { singular: "questão", plural: "questões" },
  },
  /** aviso fixo: educacional, não clínico */
  disclaimer:
    "Material educacional de revisão para concursos. Não substitui a formação técnica, os protocolos da sua instituição nem orientação profissional, e não deve ser usado para decidir conduta com pacientes.",
} as const;
