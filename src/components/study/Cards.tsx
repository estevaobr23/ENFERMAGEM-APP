import type { ReactNode } from "react";
import Link from "next/link";
import type { StudyCategory, StudyProgress, StudyTopic } from "@/core/study/types";
import { TOPIC_STATE, type TopicState } from "@/core/study/insights";
import { Icon } from "@/components/ui/Icon";
import { CategoryEmblem } from "@/components/ui/CategoryEmblem";
import { ProgressBar, ProgressRing } from "./Progress";

export function StateBadge({ state, short = false }: { state: TopicState; short?: boolean }) {
  return <span className={`state-pill ${TOPIC_STATE[state].className}`}>{short ? TOPIC_STATE[state].short : TOPIC_STATE[state].label}</span>;
}

type CategoryStats = { total: number; started: number; quizzes: number; toReview: number; questions: number; completion: number };

/** Matéria: nome, descrição, quantos temas/questões, progresso e acesso rápido. */
export function CategoryCard({ category, stats, compact = false }: { category: StudyCategory; stats: CategoryStats; compact?: boolean }) {
  return (
    <Link href={`/app/categorias/${category.slug}`} className={`cat-card tone-${category.tone} ${compact ? "cat-card--compact" : ""}`}>
      <div className="cat-card__top">
        <span className="cat-card__icon" aria-hidden><CategoryEmblem slug={category.slug} size={56} /></span>
        <div className="min-w-0 flex-1">
          <h3 className="cat-card__title">{compact ? category.shortTitle : category.title}</h3>
          {!compact && category.description && <p className="cat-card__desc">{category.description}</p>}
          <p className="cat-card__meta">{stats.total} {stats.total === 1 ? "tema" : "temas"} · {stats.questions} questões</p>
        </div>
        <ProgressRing value={stats.completion} label="" size="sm" />
      </div>
      {!compact && (
        <div className="cat-card__foot">
          <span>{stats.quizzes}/{stats.total} quizzes feitos</span>
          {stats.toReview > 0 ? <span className="text-bad">{stats.toReview} para revisar</span> : <span className="cat-card__go">Abrir <Icon name="arrowRight" size={15} /></span>}
        </div>
      )}
    </Link>
  );
}

/** Tema: número na trilha, título, o que tem dentro e o estado do aluno. */
export function TopicCard({ topic, state, progress, number, category, questionCount, favorite = false }: {
  topic: StudyTopic;
  state: TopicState;
  progress?: StudyProgress;
  number?: number;
  category?: StudyCategory;
  questionCount?: number;
  favorite?: boolean;
}) {
  return (
    <Link href={`/app/tema/${topic.slug}`} className={`topic-card ${TOPIC_STATE[state].className}`}>
      {number != null && <span className="topic-card__n" aria-hidden>{state === "dominado" || state === "quiz-feito" ? <Icon name="check" size={16} strokeWidth={3} /> : number}</span>}
      <div className="min-w-0 flex-1">
        {category && <p className={`topic-card__cat tone-${category.tone}`}><CategoryEmblem slug={category.slug} size={20} />{category.shortTitle}</p>}
        <h3 className="topic-card__title">{topic.title}{favorite && <Icon name="star" size={14} fill="currentColor" className="topic-card__fav" aria-label="Favorito" />}</h3>
        <p className="topic-card__desc">{topic.description}</p>
        <div className="topic-card__meta">
          <StateBadge state={state} short />
          <span><Icon name="clock" size={13} />{topic.readingMinutes ?? 5} min</span>
          <span><Icon name="list" size={13} />{topic.outline.length} seções</span>
          {questionCount != null && <span><Icon name="target" size={13} />{questionCount} questões</span>}
          {progress?.quizLastTotal ? <span className="topic-card__score">Quiz {progress.quizLastCorrect}/{progress.quizLastTotal}</span> : null}
        </div>
      </div>
      <Icon name="chevronRight" size={18} className="topic-card__chev" />
    </Link>
  );
}

export function ReviewQueueCard({ topic, reason, category }: { topic: StudyTopic; reason: string; category?: StudyCategory }) {
  return (
    <Link href={`/app/tema/${topic.slug}#quiz`} className="queue-card">
      <span className="queue-card__icon" aria-hidden><Icon name="refresh" size={18} /></span>
      <span className="min-w-0 flex-1">
        {category && <small className="queue-card__cat">{category.shortTitle}</small>}
        <b className="queue-card__title">{topic.title}</b>
        <small className="queue-card__reason">{reason}</small>
      </span>
      <Icon name="arrowRight" size={18} className="text-brand" />
    </Link>
  );
}

export function SectionHeading({ eyebrow, title, action, tone = "brand" }: { eyebrow?: string; title: string; action?: { href: string; label: string }; tone?: "brand" | "bad" }) {
  return (
    <div className="section-heading">
      <div>
        {eyebrow && <p className={`eyebrow ${tone === "bad" ? "text-bad" : ""}`}>{eyebrow}</p>}
        <h2 className="section-heading__title">{title}</h2>
      </div>
      {action && <Link href={action.href} className="section-heading__action">{action.label} <Icon name="arrowRight" size={15} /></Link>}
    </div>
  );
}

export function PageHeader({ eyebrow, title, text, children }: { eyebrow?: string; title: string; text?: string; children?: ReactNode }) {
  return (
    <header className="page-header">
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h1 className="page-header__title">{title}</h1>
      {text && <p className="page-header__text">{text}</p>}
      {children}
    </header>
  );
}

export { ProgressBar };
