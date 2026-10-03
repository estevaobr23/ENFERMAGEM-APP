import Link from "next/link";
import type { StudyCategory, StudyProgress, StudyTopic } from "@/core/study/types";
import { TOPIC_STATE, type TopicState } from "@/core/study/insights";
import { Icon } from "@/components/ui/Icon";
import { CategoryEmblem } from "@/components/ui/CategoryEmblem";
import { FavoriteButton, ShareButton } from "./TopicActions";

/** Contexto (onde estou), título forte, o que vou ver e em que etapa estou. */
export function TopicHeader({ topic, category, progress, state, favorite, sectionCount, questionCount, position }: {
  topic: StudyTopic;
  category: StudyCategory;
  progress: StudyProgress | null;
  state: TopicState;
  favorite: boolean;
  sectionCount: number;
  questionCount: number;
  position: { index: number; total: number };
}) {
  const read = Boolean(progress?.lastReviewedAt);
  const quizDone = Boolean(progress?.quizCompletedAt);
  const steps = [
    { label: "Conteúdo", done: read, href: "#mapa" },
    { label: "Resumo", done: read, href: "#resumo" },
    { label: quizDone && progress?.quizLastTotal ? `Quiz ${progress.quizLastCorrect}/${progress.quizLastTotal}` : "Quiz", done: quizDone, href: "#quiz" },
  ];

  return (
    <header className={`topic-head tone-${category.tone}`}>
      <nav aria-label="Você está em" className="crumbs">
        <Link href="/app/categorias">Matérias</Link>
        <Icon name="chevronRight" size={14} />
        <Link href={`/app/categorias/${category.slug}`} className="crumbs__cat"><CategoryEmblem slug={category.slug} size={22} />{category.shortTitle}</Link>
        <Icon name="chevronRight" size={14} />
        <span aria-current="page">Tema {position.index + 1} de {position.total}</span>
      </nav>

      <h1 className="topic-head__title">{topic.title}</h1>
      <p className="topic-head__desc">{topic.description}</p>

      <ul className="topic-head__meta" aria-label="Sobre este tema">
        <li><Icon name="clock" size={15} />{topic.readingMinutes ?? 5} min de leitura</li>
        <li><Icon name="list" size={15} />{sectionCount} seções</li>
        <li><Icon name="target" size={15} />{questionCount} questões no teste</li>
        <li><span className={`state-pill ${TOPIC_STATE[state].className}`}>{TOPIC_STATE[state].label}</span></li>
      </ul>

      <div className="topic-head__bar">
        <ol className="stepper" aria-label="Etapas do tema">
          {steps.map((step, index) => (
            <li key={step.label} className={step.done ? "is-done" : ""}>
              <a href={step.href}>
                <span className="stepper__dot">{step.done ? <Icon name="check" size={12} strokeWidth={3} /> : index + 1}</span>
                <span>{step.label}</span>
              </a>
            </li>
          ))}
        </ol>
        <div className="topic-head__actions">
          <FavoriteButton topicId={topic.id} initialFavorite={favorite} />
          <ShareButton title={topic.title} />
        </div>
      </div>
    </header>
  );
}
