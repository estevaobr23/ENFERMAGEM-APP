import assert from "node:assert/strict";
import test from "node:test";
import { categoryAccuracy, rankReviewQueue, studySummary } from "../../src/core/review/priority";

const topics = [
  { id: "never", slug: "never", title: "Nunca", categoryId: "a", order: 0 },
  { id: "wrong", slug: "wrong", title: "Erro", categoryId: "b", order: 1 },
  { id: "stale", slug: "stale", title: "Antigo", categoryId: "a", order: 2 },
];
const progress = [
  { topicId: "wrong", lastReviewedAt: "2026-09-29T12:00:00Z", questionsAnswered: 2, questionsCorrect: 1 },
  { topicId: "stale", lastReviewedAt: "2026-09-01T12:00:00Z", questionsAnswered: 3, questionsCorrect: 3 },
];
const pending = [{ topicId: "wrong", questionId: "q1", createdAt: "2026-09-30T12:00:00Z" }];

test("prioriza nunca revisado, depois erro, depois assunto antigo", () => {
  const ranked = rankReviewQueue(topics, progress, pending, new Date("2026-10-02T12:00:00Z"));
  assert.deepEqual(ranked.map((item) => item.id), ["never", "wrong", "stale"]);
  assert.equal(ranked[0].reason.kind, "never");
  assert.equal(ranked[1].reason.kind, "wrong");
  assert.equal(ranked[2].reason.kind, "stale");
});

test("calcula acerto e resumo sem dividir por zero", () => {
  const accuracy = categoryAccuracy(topics, progress);
  assert.equal(accuracy.get("a"), 100);
  assert.equal(accuracy.get("b"), 50);
  const summary = studySummary(topics, progress, pending, new Date("2026-10-02T12:00:00Z"));
  assert.equal(summary.reviewed, 2);
  assert.equal(summary.answered, 5);
  assert.equal(summary.correct, 4);
  assert.equal(summary.pendingQuestions, 1);
});

