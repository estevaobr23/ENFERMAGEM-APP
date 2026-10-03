import type { Metadata } from "next";
import Link from "next/link";
import { getAttempts, getStudyOverview } from "@/core/study/data";
import { buildStudyIndex } from "@/core/study/insights";
import { PageHeader, SectionHeading, StateBadge } from "@/components/study/Cards";
import { ProgressBar, ProgressRing, StatTile } from "@/components/study/Progress";
import { EmptyState } from "@/components/study/EmptyState";
import { Icon } from "@/components/ui/Icon";
import { CategoryEmblem } from "@/components/ui/CategoryEmblem";

export const metadata: Metadata = { title: "Progresso" };

const fmt = (iso: string) => new Intl.DateTimeFormat("pt-BR", { dateStyle: "short" }).format(new Date(iso));

export default async function ProgressPage() {
  const [overview, attempts] = await Promise.all([getStudyOverview(), getAttempts(10)]);
  const { categories, topics } = overview;
  const index = buildStudyIndex(overview);
  const { overall } = index;
  const quizzes = topics
    .map((topic) => ({ topic, progress: index.progressOf(topic.id) }))
    .filter((item) => item.progress?.quizCompletedAt)
    .sort((a, b) => new Date(b.progress!.quizCompletedAt!).getTime() - new Date(a.progress!.quizCompletedAt!).getTime());
  const topicById = new Map(topics.map((topic) => [topic.id, topic]));

  return (
    <div className="page">
      <PageHeader eyebrow="Seu ritmo" title="Progresso" text="Use os números para decidir o que reforçar — não para competir com ninguém." />

      <section className="progress-hero">
        <ProgressRing value={overall.completion} label="concluído" size="lg" />
        <div className="min-w-0 flex-1">
          <h2 className="progress-hero__title">{overall.quizzes} de {overall.total} temas com teste feito</h2>
          <p className="progress-hero__text">Ler o tema conta metade; fazer o teste completa o tema. {overall.mastered ? `${overall.mastered} ${overall.mastered === 1 ? "tema dominado" : "temas dominados"} (100% no teste).` : ""}</p>
          <div className="dash-stats__tiles mt-4">
            <StatTile icon="book" value={`${overall.started}/${overall.total}`} label="temas iniciados" />
            <StatTile icon="target" value={overall.answered} label="respostas" />
            <StatTile icon="check" value={overall.accuracyPct == null ? "—" : `${overall.accuracyPct}%`} label="de acerto" tone="ok" />
            <StatTile icon="refresh" value={overall.pendingQuestions} label="para revisar" tone="bad" />
          </div>
        </div>
      </section>

      <section>
        <SectionHeading eyebrow="Por matéria" title="Conclusão e acerto" />
        <ul className="cat-progress">
          {categories.map((category) => {
            const stats = index.categoryStats(category.id);
            return (
              <li key={category.id}>
                <Link href={`/app/categorias/${category.slug}`} className={`cat-progress__row tone-${category.tone}`}>
                  <span className="cat-progress__icon" aria-hidden><CategoryEmblem slug={category.slug} size={48} /></span>
                  <div className="min-w-0 flex-1">
                    <ProgressBar value={stats.completion} label={category.shortTitle} detail={`${stats.completion}% · ${stats.quizzes}/${stats.total} testes`} tone={category.tone} />
                    <p className="cat-progress__acc">{stats.accuracy == null ? "Ainda sem respostas" : `${stats.accuracy}% de acerto`}{stats.toReview ? ` · ${stats.toReview} ${stats.toReview === 1 ? "tema" : "temas"} para revisar` : ""}</p>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>

      <section>
        <SectionHeading eyebrow="Testes" title="Quizzes feitos" />
        {quizzes.length ? (
          <ul className="quiz-log">
            {quizzes.map(({ topic, progress }) => (
              <li key={topic.id}>
                <Link href={`/app/tema/${topic.slug}#quiz`} className="quiz-log__row">
                  <span className="quiz-log__score"><b>{progress!.quizLastCorrect}/{progress!.quizLastTotal}</b><small>último</small></span>
                  <span className="min-w-0 flex-1">
                    <b className="block truncate">{topic.title}</b>
                    <small className="text-body">Melhor: {progress!.quizBestCorrect}/{progress!.quizLastTotal} · {progress!.quizCount} {progress!.quizCount === 1 ? "tentativa" : "tentativas"} · {fmt(progress!.quizCompletedAt!)}</small>
                  </span>
                  <StateBadge state={index.stateOf(topic.id)} short />
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <EmptyState icon="target" title="Nenhum teste feito ainda" text="Cada tema termina com um teste rápido. O resultado aparece aqui." href="/app/categorias" action="Escolher um tema" />
        )}
      </section>

      <section>
        <SectionHeading eyebrow="Histórico" title="Últimas respostas" action={{ href: "/app/questoes", label: "Praticar" }} />
        <div className="history">
          {attempts.length ? attempts.map((attempt) => (
            <div key={attempt.id} className="history__row">
              <span className={`history__mark ${attempt.is_correct ? "is-ok" : "is-bad"}`}><Icon name={attempt.is_correct ? "check" : "x"} size={14} strokeWidth={3} /></span>
              <span className="min-w-0 flex-1">
                <b className="block truncate text-sm">{topicById.get(attempt.topic_id)?.title ?? "Tema"}</b>
                <small className="text-muted">{new Intl.DateTimeFormat("pt-BR", { dateStyle: "short", timeStyle: "short" }).format(new Date(attempt.answered_at))}</small>
              </span>
            </div>
          )) : <p className="p-5 text-sm text-body">Você ainda não respondeu nenhuma questão.</p>}
        </div>
      </section>
    </div>
  );
}
