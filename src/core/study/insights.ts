import { categoryAccuracy, rankReviewQueue, studySummary, type PendingItem, type ReviewTopic, type TopicProgress } from "@/core/review/priority";
import type { ReviewItem, StudyCategory, StudyProgress, StudyTopic } from "./types";

/**
 * Estado de estudo derivado (função pura, sem banco). As telas de navegação
 * usam isto para dizer, de cada tema e de cada área, "onde você está".
 */

export type TopicState = "novo" | "lendo" | "revisar" | "quiz-feito" | "dominado";

export const TOPIC_STATE: Record<TopicState, { label: string; short: string; className: string }> = {
  novo: { label: "Não iniciado", short: "Novo", className: "state-new" },
  lendo: { label: "Revisado, falta o quiz", short: "Falta o quiz", className: "state-reading" },
  revisar: { label: "Revisar novamente", short: "Revisar", className: "state-review" },
  "quiz-feito": { label: "Quiz feito", short: "Quiz feito", className: "state-done" },
  dominado: { label: "Dominado", short: "Dominado", className: "state-mastered" },
};

export function topicState(progress: StudyProgress | undefined, pendingCount: number): TopicState {
  if (pendingCount > 0) return "revisar";
  if (!progress || (!progress.lastReviewedAt && !progress.quizCompletedAt && progress.questionsAnswered === 0)) return "novo";
  if (progress.quizCompletedAt && progress.quizLastTotal && progress.quizLastCorrect === progress.quizLastTotal) return "dominado";
  if (progress.quizCompletedAt) return "quiz-feito";
  return "lendo";
}

/** % de conclusão de um tema: leitura vale 50%, quiz feito 100%. */
export function topicCompletion(state: TopicState) {
  return state === "novo" ? 0 : state === "lendo" || state === "revisar" ? 50 : 100;
}

export type StudyIndex = ReturnType<typeof buildStudyIndex>;

export function buildStudyIndex(input: {
  categories: StudyCategory[];
  topics: StudyTopic[];
  progress: StudyProgress[];
  pending: ReviewItem[];
  questionCounts?: Map<string, number>;
}) {
  const { categories, topics, progress, pending } = input;
  const progressByTopic = new Map(progress.map((item) => [item.topicId, item]));
  const pendingByTopic = new Map<string, number>();
  for (const item of pending) pendingByTopic.set(item.topicId, (pendingByTopic.get(item.topicId) ?? 0) + 1);

  const stateOf = (topicId: string) => topicState(progressByTopic.get(topicId), pendingByTopic.get(topicId) ?? 0);

  const reviewTopics: ReviewTopic[] = topics.map((topic, order) => ({ id: topic.id, slug: topic.slug, title: topic.title, categoryId: topic.categoryId, order }));
  const reviewProgress: TopicProgress[] = progress.map((item) => ({
    topicId: item.topicId,
    lastReviewedAt: item.lastReviewedAt,
    questionsAnswered: item.questionsAnswered,
    questionsCorrect: item.questionsCorrect,
  }));
  const reviewPending: PendingItem[] = pending.map((item) => ({ topicId: item.topicId, questionId: item.questionId, createdAt: item.createdAt }));

  const accuracy = categoryAccuracy(reviewTopics, reviewProgress);

  const categoryStats = new Map(
    categories.map((category) => {
      const items = topics.filter((topic) => topic.categoryId === category.id);
      const states = items.map((topic) => stateOf(topic.id));
      const completion = items.length ? Math.round(states.reduce((sum, state) => sum + topicCompletion(state), 0) / items.length) : 0;
      return [
        category.id,
        {
          topics: items,
          total: items.length,
          started: states.filter((state) => state !== "novo").length,
          quizzes: states.filter((state) => state === "quiz-feito" || state === "dominado").length,
          toReview: states.filter((state) => state === "revisar").length,
          questions: items.reduce((sum, topic) => sum + (input.questionCounts?.get(topic.id) ?? 0), 0),
          completion,
          accuracy: accuracy.get(category.id) ?? null,
        },
      ];
    }),
  );

  // "Continuar de onde parou": o tema com atividade mais recente que ainda não foi dominado
  const activity = (item: StudyProgress) =>
    Math.max(...[item.lastReviewedAt, item.lastAnsweredAt, item.quizCompletedAt].map((value) => (value ? new Date(value).getTime() : 0)));
  const recent = [...progress].sort((a, b) => activity(b) - activity(a));
  const continueTopic =
    recent.map((item) => topics.find((topic) => topic.id === item.topicId)).find((topic) => topic && stateOf(topic.id) !== "dominado") ?? null;

  const allStates = topics.map((topic) => stateOf(topic.id));
  const overall = {
    ...studySummary(reviewTopics, reviewProgress, reviewPending),
    started: allStates.filter((state) => state !== "novo").length,
    quizzes: allStates.filter((state) => state === "quiz-feito" || state === "dominado").length,
    mastered: allStates.filter((state) => state === "dominado").length,
    completion: topics.length ? Math.round(allStates.reduce((sum, state) => sum + topicCompletion(state), 0) / topics.length) : 0,
  };

  return {
    stateOf,
    progressOf: (topicId: string) => progressByTopic.get(topicId),
    pendingOf: (topicId: string) => pendingByTopic.get(topicId) ?? 0,
    categoryStats: (categoryId: string) => categoryStats.get(categoryId)!,
    ranked: rankReviewQueue(reviewTopics, reviewProgress, reviewPending),
    continueTopic,
    overall,
  };
}
