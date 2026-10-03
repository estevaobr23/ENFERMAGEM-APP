import Link from "next/link";
import type { StudyCategory, StudyTopic } from "@/core/study/types";
import { TOPIC_STATE, type TopicState } from "@/core/study/insights";
import { Icon } from "@/components/ui/Icon";
import { CategoryEmblem } from "@/components/ui/CategoryEmblem";

/*
 * Mapas de navegação: o "grande mapa mental" do sistema.
 *   StudyAtlas   centro → 8 matérias → temas (tela Matérias, visão Mapa)
 *   CategoryMap  matéria → temas → seções de cada tema (tela da matéria)
 * Cada folha é um link; a cor da folha mostra o estado do aluno.
 */

type StateOf = (topicId: string) => TopicState;

export function StudyAtlas({ categories, topics, stateOf, completionOf }: {
  categories: StudyCategory[];
  topics: StudyTopic[];
  stateOf: StateOf;
  completionOf: (categoryId: string) => number;
}) {
  const half = Math.ceil(categories.length / 2);
  const branch = (category: StudyCategory) => (
    <li key={category.id} className={`atlas__branch tone-${category.tone}`}>
      <Link href={`/app/categorias/${category.slug}`} className="atlas__cat">
        <CategoryEmblem slug={category.slug} size={34} />
        <b>{category.shortTitle}</b>
        <small>{completionOf(category.id)}%</small>
      </Link>
      <ul className="atlas__leaves">
        {topics.filter((topic) => topic.categoryId === category.id).map((topic) => (
          <li key={topic.id}>
            <Link href={`/app/tema/${topic.slug}`} className={`atlas__leaf ${TOPIC_STATE[stateOf(topic.id)].className}`} title={TOPIC_STATE[stateOf(topic.id)].label}>
              <span className="atlas__dot" aria-hidden />
              {topic.title}
            </Link>
          </li>
        ))}
      </ul>
    </li>
  );
  return (
    <div className="atlas" role="group" aria-label="Mapa geral das matérias">
      <ul className="atlas__side atlas__side--left">{categories.slice(0, half).map(branch)}</ul>
      <div className="atlas__center">
        <Icon name="sparkles" size={20} />
        <b>Técnico de Enfermagem</b>
        <small>{categories.length} matérias · {topics.length} temas</small>
      </div>
      <ul className="atlas__side atlas__side--right">{categories.slice(half).map(branch)}</ul>
    </div>
  );
}

export function CategoryMap({ category, topics, stateOf }: { category: StudyCategory; topics: StudyTopic[]; stateOf: StateOf }) {
  return (
    <section className={`catmap tone-${category.tone}`} aria-labelledby="catmap-title">
      <header className="catmap__head">
        <span className="mindmap__icon"><Icon name="map" size={18} /></span>
        <div>
          <p className="mindmap__eyebrow">Mapa da matéria</p>
          <h2 id="catmap-title" className="mindmap__title">{category.title}: tudo o que tem aqui</h2>
        </div>
      </header>
      <div className="catmap__tree">
        <div className="catmap__root"><CategoryEmblem slug={category.slug} size={34} />{category.shortTitle}</div>
        <ol className="catmap__topics">
          {topics.map((topic, index) => {
            const state = stateOf(topic.id);
            return (
              <li key={topic.id} className="catmap__topic">
                <Link href={`/app/tema/${topic.slug}`} className={`catmap__node ${TOPIC_STATE[state].className}`}>
                  <span className="catmap__n">{index + 1}</span>
                  <span className="min-w-0 flex-1">{topic.title}</span>
                  <span className="atlas__dot" aria-label={TOPIC_STATE[state].label} />
                </Link>
                {topic.outline.length > 0 && (
                  <ul className="catmap__sections">
                    {topic.outline.map((title) => <li key={title}>{title}</li>)}
                  </ul>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

export function MapLegend() {
  const items: TopicState[] = ["novo", "lendo", "revisar", "quiz-feito", "dominado"];
  return (
    <ul className="legend" aria-label="Legenda">
      {items.map((state) => (
        <li key={state} className={TOPIC_STATE[state].className}><span className="atlas__dot" aria-hidden />{TOPIC_STATE[state].label}</li>
      ))}
    </ul>
  );
}
