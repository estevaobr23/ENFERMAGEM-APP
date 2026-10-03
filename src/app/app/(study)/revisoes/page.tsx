import type { Metadata } from "next";
import { EmptyState } from "@/components/study/EmptyState";
import { PageHeader, ReviewQueueCard } from "@/components/study/Cards";
import { getStudyOverview } from "@/core/study/data";

export const metadata: Metadata = { title: "Revisar novamente" };

export default async function RevisionsPage() {
  const { topics, pending, categories } = await getStudyOverview();
  const counts = new Map<string, number>();
  pending.forEach((item) => counts.set(item.topicId, (counts.get(item.topicId) ?? 0) + 1));
  const queued = [...counts.entries()]
    .map(([id, count]) => ({ topic: topics.find((topic) => topic.id === id), count }))
    .filter((item): item is { topic: NonNullable<typeof item.topic>; count: number } => Boolean(item.topic));

  return (
    <div className="page">
      <PageHeader eyebrow="Fila de reforço" title="Revisar novamente" text="Os temas das questões que você errou. Acerte numa nova tentativa e o item sai da fila." />
      {queued.length ? (
        <div className="grid gap-3 lg:grid-cols-2">
          {queued.map(({ topic, count }) => (
            <ReviewQueueCard key={topic.id} topic={topic} category={categories.find((category) => category.id === topic.categoryId)} reason={`${count} ${count === 1 ? "questão pendente" : "questões pendentes"} · refazer o teste`} />
          ))}
        </div>
      ) : (
        <EmptyState icon="refresh" title="Sua fila está vazia" text="Quando você errar uma questão, o tema aparece aqui automaticamente." href="/app/questoes" action="Praticar questões" />
      )}
    </div>
  );
}
