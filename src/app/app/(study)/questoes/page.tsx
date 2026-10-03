import type { Metadata } from "next";
import Link from "next/link";
import { TopicQuiz } from "@/components/quiz/TopicQuiz";
import { PageHeader } from "@/components/study/Cards";
import { EmptyState } from "@/components/study/EmptyState";
import { getStudyOverview, getTopicDetail } from "@/core/study/data";
import { buildStudyIndex } from "@/core/study/insights";
import { Icon } from "@/components/ui/Icon";

export const metadata: Metadata = { title: "Praticar questões" };

/** Prática solta: o teste do tema que a fila prioriza, sem o conteúdo antes. */
export default async function QuestionsPage() {
  const overview = await getStudyOverview();
  const index = buildStudyIndex(overview);
  const selected = index.ranked.find((item) => (overview.questionCounts.get(item.id) ?? 0) > 0);
  if (!selected) return <EmptyState icon="target" title="Sem questões no momento" text="Volte quando houver novos temas publicados." href="/app/categorias" action="Ver matérias" />;
  const detail = await getTopicDetail(selected.slug);

  return (
    <div className="page page--narrow">
      <PageHeader eyebrow="Prática" title="Questões com explicação" text="Responda sem olhar o conteúdo. A correção atualiza seu desempenho e a fila de revisão." />
      <div className="practice-topic">
        <div className="min-w-0">
          <small>{detail.category.shortTitle} · {selected.reason.label}</small>
          <b>{detail.topic.title}</b>
        </div>
        <Link href={`/app/tema/${detail.topic.slug}`} className="btn btn-secondary"><Icon name="book" size={16} /> Ver o conteúdo</Link>
      </div>
      <TopicQuiz
        topicId={detail.topic.id}
        questions={detail.questions}
        sections={detail.sections.map((section) => ({ id: section.id, title: section.title }))}
        sectionBase={`/app/tema/${detail.topic.slug}`}
        progress={detail.progress}
        next={null}
        context="practice"
        title={detail.topic.title}
        startOpen
      />
    </div>
  );
}
