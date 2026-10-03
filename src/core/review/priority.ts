/**
 * Algoritmo de revisão — regra TRANSPARENTE, sem IA. Função pura: recebe o
 * estado do aluno e devolve a fila ordenada, com o motivo de cada item.
 *
 * Ordem (pedido do produto):
 *   1. temas nunca revisados
 *   2. temas com questões erradas pendentes ("Revisar novamente")
 *   3. temas não revisados há mais tempo
 *   4. desempate: área com menor percentual de acerto, depois a ordem do conteúdo
 *
 * "Aguardando revisão" (o número do card REVISAR AGORA) = temas dos grupos 1 e
 * 2, mais os do grupo 3 revisados há STALE_DAYS dias ou mais.
 */

export const STALE_DAYS = 7;

export type ReviewTopic = {
  id: string;
  slug: string;
  title: string;
  categoryId: string;
  /** ordem global do conteúdo (área, depois tema) */
  order: number;
};

export type TopicProgress = {
  topicId: string;
  lastReviewedAt: string | null;
  questionsAnswered: number;
  questionsCorrect: number;
};

export type PendingItem = { topicId: string; questionId: string; createdAt: string };

export type ReviewReason =
  | { kind: "never"; label: string }
  | { kind: "wrong"; label: string; pending: number }
  | { kind: "stale"; label: string; days: number }
  | { kind: "recent"; label: string; days: number };

export type RankedTopic = ReviewTopic & { reason: ReviewReason; due: boolean };

const DAY = 86_400_000;

export function daysBetween(fromIso: string, now: Date) {
  return Math.max(0, Math.floor((now.getTime() - new Date(fromIso).getTime()) / DAY));
}

/** Percentual de acerto por área (0–100), null se não respondeu nada. */
export function categoryAccuracy(topics: ReviewTopic[], progress: TopicProgress[]) {
  const byTopic = new Map(progress.map((p) => [p.topicId, p]));
  const acc = new Map<string, { answered: number; correct: number }>();
  for (const t of topics) {
    const p = byTopic.get(t.id);
    const cur = acc.get(t.categoryId) ?? { answered: 0, correct: 0 };
    if (p) {
      cur.answered += p.questionsAnswered;
      cur.correct += p.questionsCorrect;
    }
    acc.set(t.categoryId, cur);
  }
  const out = new Map<string, number | null>();
  for (const [k, v] of acc) out.set(k, v.answered ? Math.round((v.correct / v.answered) * 100) : null);
  return out;
}

export function rankReviewQueue(
  topics: ReviewTopic[],
  progress: TopicProgress[],
  pending: PendingItem[],
  now: Date = new Date(),
): RankedTopic[] {
  const byTopic = new Map(progress.map((p) => [p.topicId, p]));
  const pendingByTopic = new Map<string, PendingItem[]>();
  for (const item of pending) pendingByTopic.set(item.topicId, [...(pendingByTopic.get(item.topicId) ?? []), item]);
  const accuracy = categoryAccuracy(topics, progress);
  // área sem resposta conta como 100% no desempate: quem já errou vem antes
  const accOf = (t: ReviewTopic) => accuracy.get(t.categoryId) ?? 100;

  const ranked = topics.map((t) => {
    const p = byTopic.get(t.id);
    const wrong = pendingByTopic.get(t.id) ?? [];
    let tier: number;
    let tierKey: number;
    let reason: ReviewReason;
    let due: boolean;
    if (!p?.lastReviewedAt) {
      tier = 1;
      tierKey = 0;
      reason = { kind: "never", label: "Você ainda não revisou" };
      due = true;
    } else if (wrong.length) {
      tier = 2;
      // o erro mais antigo primeiro
      tierKey = Math.min(...wrong.map((w) => new Date(w.createdAt).getTime()));
      reason = {
        kind: "wrong",
        pending: wrong.length,
        label: wrong.length === 1 ? "Você errou 1 questão" : `Você errou ${wrong.length} questões`,
      };
      due = true;
    } else {
      const days = daysBetween(p.lastReviewedAt, now);
      tier = 3;
      tierKey = new Date(p.lastReviewedAt).getTime(); // mais antigo primeiro
      due = days >= STALE_DAYS;
      reason = due
        ? { kind: "stale", days, label: `Revisado há ${days} dias` }
        : { kind: "recent", days, label: days === 0 ? "Revisado hoje" : days === 1 ? "Revisado ontem" : `Revisado há ${days} dias` };
    }
    return { t, tier, tierKey, acc: accOf(t), reason, due };
  });

  ranked.sort((a, b) => a.tier - b.tier || a.tierKey - b.tierKey || a.acc - b.acc || a.t.order - b.t.order);
  return ranked.map(({ t, reason, due }) => ({ ...t, reason, due }));
}

export type TopicStatus = "nao-iniciado" | "revisar-novamente" | "revisado";

/** Status de conclusão mostrado no card do tema. */
export function topicStatus(topicId: string, progress: TopicProgress[], pending: PendingItem[]): TopicStatus {
  if (pending.some((p) => p.topicId === topicId)) return "revisar-novamente";
  const p = progress.find((x) => x.topicId === topicId);
  return p?.lastReviewedAt ? "revisado" : "nao-iniciado";
}

export const TOPIC_STATUS_LABEL: Record<TopicStatus, string> = {
  "nao-iniciado": "Não revisado",
  "revisar-novamente": "Revisar novamente",
  revisado: "Revisado",
};

/** Resumo do painel (o card REVISAR AGORA e o progresso geral). */
export function studySummary(topics: ReviewTopic[], progress: TopicProgress[], pending: PendingItem[], now = new Date()) {
  const ranked = rankReviewQueue(topics, progress, pending, now);
  const reviewed = topics.filter((t) => progress.find((p) => p.topicId === t.id)?.lastReviewedAt).length;
  const answered = progress.reduce((n, p) => n + p.questionsAnswered, 0);
  const correct = progress.reduce((n, p) => n + p.questionsCorrect, 0);
  const pendingTopics = new Set(pending.map((p) => p.topicId)).size;
  return {
    next: ranked[0] ?? null,
    dueCount: ranked.filter((r) => r.due).length,
    pendingTopics,
    pendingQuestions: pending.length,
    reviewed,
    total: topics.length,
    progressPct: topics.length ? Math.round((reviewed / topics.length) * 100) : 0,
    answered,
    correct,
    accuracyPct: answered ? Math.round((correct / answered) * 100) : null,
  };
}
