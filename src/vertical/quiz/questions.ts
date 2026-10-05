import { CATEGORIES } from "@/vertical/content";

/*
 * Funil experimental /quiz. NÃO é teste de conhecimento nem diagnóstico:
 * só organiza o que a própria pessoa respondeu sobre a rotina de revisão e
 * liga o ponto mais fraco a uma funcionalidade real do app.
 */

/** As quatro dimensões medidas. A de MENOR pontuação vira o resultado. */
export const DIMENSIONS = ["organizacao", "velocidade", "pratica", "erros"] as const;
export type Dimension = (typeof DIMENSIONS)[number];

export type Option = {
  label: string;
  /** quanto cada resposta soma em cada dimensão (0 = pior, 2 = melhor) */
  scores: Partial<Record<Dimension, number>>;
};

export type Question = {
  id: string;
  title: string;
  /** múltipla escolha: só a 6 (áreas), que não pontua — serve de espelho */
  multi?: boolean;
  options: Option[];
};

export const AREA_OPTIONS = CATEGORIES.map((c) => ({ slug: c.slug, label: c.shortTitle }));

export const QUESTIONS: Question[] = [
  {
    id: "comeco",
    title: "Quando você vai revisar para a prova, normalmente por onde começa?",
    options: [
      { label: "Abro minhas apostilas e procuro um assunto", scores: { organizacao: 0, velocidade: 0 } },
      { label: "Pego algum resumo que já tenho", scores: { organizacao: 1, velocidade: 1 } },
      { label: "Faço questões", scores: { organizacao: 1, pratica: 2 } },
      { label: "Muitas vezes nem sei por onde começar", scores: { organizacao: 0, velocidade: 0 } },
    ],
  },
  {
    id: "materiais",
    title: "Como estão organizados seus materiais hoje?",
    options: [
      { label: "Tudo bem organizado", scores: { organizacao: 2 } },
      { label: "Tenho vários PDFs e apostilas", scores: { organizacao: 1, velocidade: 0 } },
      { label: "Tenho anotações espalhadas", scores: { organizacao: 0, velocidade: 1 } },
      { label: "Está tudo em lugares diferentes", scores: { organizacao: 0, velocidade: 0 } },
    ],
  },
  {
    id: "testa",
    title: "Quando termina de estudar um assunto, você testa se realmente lembra?",
    options: [
      { label: "Sempre", scores: { pratica: 2 } },
      { label: "Às vezes", scores: { pratica: 1 } },
      { label: "Raramente", scores: { pratica: 0 } },
      { label: "Normalmente só leio/reviso", scores: { pratica: 0 } },
    ],
  },
  {
    id: "erro",
    title: "Quando você erra uma questão, o que costuma fazer?",
    options: [
      { label: "Anoto o erro e reviso depois", scores: { erros: 2 } },
      { label: "Leio o gabarito e continuo", scores: { erros: 0 } },
      { label: "Às vezes volto no conteúdo", scores: { erros: 1 } },
      { label: "Normalmente esqueço quais assuntos errei", scores: { erros: 0 } },
    ],
  },
  {
    id: "situacao",
    title: "Qual dessas situações mais acontece com você?",
    options: [
      { label: "Estudo bastante, mas esqueço depois", scores: { erros: 0, pratica: 1 } },
      { label: "Tenho conteúdo demais para revisar", scores: { velocidade: 0, organizacao: 1 } },
      { label: "Faço poucas questões", scores: { pratica: 0 } },
      { label: "Perco tempo procurando matéria", scores: { organizacao: 0, velocidade: 0 } },
    ],
  },
  {
    id: "areas",
    title: "Quais áreas você sente que ainda precisa reforçar?",
    multi: true,
    options: AREA_OPTIONS.map((a) => ({ label: a.label, scores: {} })),
  },
  {
    id: "melhoria",
    title: "Se você pudesse melhorar UMA coisa na sua revisão hoje, qual seria?",
    options: [
      { label: "Saber exatamente o que revisar", scores: { organizacao: 0 } },
      { label: "Revisar mais rápido", scores: { velocidade: 0 } },
      { label: "Praticar mais questões", scores: { pratica: 0 } },
      { label: "Não esquecer os assuntos que erro", scores: { erros: 0 } },
    ],
  },
];

/** Resposta de cada pergunta: índices escolhidos (uma só, exceto na de áreas). */
export type Answers = Record<string, number[]>;

export type DimensionResult = { key: Dimension; label: string; pct: number };

export const DIMENSION_LABEL: Record<Dimension, string> = {
  organizacao: "Organização",
  velocidade: "Velocidade de revisão",
  pratica: "Prática com questões",
  erros: "Revisão dos erros",
};

/** Cópia por dimensão: o que o resultado diz e qual funcionalidade responde. */
export const DIMENSION_COPY: Record<Dimension, { headline: string; text: string; feature: string; featureText: string }> = {
  organizacao: {
    headline: "Organização do que revisar",
    text: "Pelas suas respostas, boa parte do seu tempo vai embora antes de estudar: procurando o assunto, decidindo por onde começar e abrindo material em lugares diferentes.",
    feature: "Tenha as 8 áreas organizadas em um só lugar.",
    featureText: "Todas as matérias na mesma tela, com os temas de cada uma e o seu progresso visível.",
  },
  velocidade: {
    headline: "Velocidade da revisão",
    text: "Você até sabe o que precisa revisar, mas o caminho até o conteúdo é longo demais: rolar apostila, dar zoom e procurar o trecho certo consome o tempo que era para ser de estudo.",
    feature: "Abra o tema e vá direto aos pontos que precisa revisar.",
    featureText: "Cada tema já abre pronto: prancha ilustrada, conteúdo em partes curtas e o resumo final com o que levar para a prova.",
  },
  pratica: {
    headline: "Prática com questões",
    text: "Você revisa o conteúdo, mas testa pouco se ele ficou. Sem responder questões, a sensação de que aprendeu só é confirmada na hora da prova.",
    feature: "Teste se realmente entendeu o conteúdo.",
    featureText: "Questões no estilo da prova em cada tema, com a correção e a explicação aparecendo logo depois da resposta.",
  },
  erros: {
    headline: "Revisão dos seus erros",
    text: "O que você erra acaba se perdendo. Sem uma lista do que ficou para trás, os mesmos assuntos voltam a cair e a errar na prova.",
    feature: "Errou? O aplicativo separa esse assunto para você revisar novamente.",
    featureText: "Você vê a alternativa certa e a explicação na hora, e o tema entra numa fila só sua até você acertar.",
  },
};

/**
 * Converte as respostas em uma nota de 0 a 100 por dimensão. Cada opção vale
 * de 0 a 2; o máximo possível da dimensão é o teto. Dimensão sem nenhuma
 * resposta fica em 100 (nada indicou problema ali).
 */
export function scoreAnswers(answers: Answers): { dimensions: DimensionResult[]; weakest: Dimension } {
  const got: Record<Dimension, number> = { organizacao: 0, velocidade: 0, pratica: 0, erros: 0 };
  const max: Record<Dimension, number> = { organizacao: 0, velocidade: 0, pratica: 0, erros: 0 };

  for (const question of QUESTIONS) {
    const picked = answers[question.id] ?? [];
    if (question.multi || !picked.length) continue;
    // o teto da pergunta é a melhor opção de cada dimensão que ela toca
    const touched = new Set<Dimension>();
    for (const option of question.options) for (const key of Object.keys(option.scores) as Dimension[]) touched.add(key);
    for (const key of touched) max[key] += 2;
    for (const index of picked) {
      const scores = question.options[index]?.scores ?? {};
      for (const key of touched) got[key] += scores[key] ?? 0;
    }
  }

  const dimensions = DIMENSIONS.map((key) => ({
    key,
    label: DIMENSION_LABEL[key],
    pct: max[key] === 0 ? 100 : Math.round((got[key] / max[key]) * 100),
  }));

  // menor nota vence; empate resolve pela ordem fixa de DIMENSIONS (determinístico)
  const weakest = dimensions.reduce((worst, item) => (item.pct < worst.pct ? item : worst), dimensions[0]).key;
  return { dimensions, weakest };
}
