import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getStudyOverview } from "@/core/study/data";
import { buildStudyIndex } from "@/core/study/insights";
import { SectionHeading, TopicCard } from "@/components/study/Cards";
import { CategoryMap } from "@/components/study/MindMaps";
import { ProgressRing } from "@/components/study/Progress";
import { Icon } from "@/components/ui/Icon";
import { CategoryEmblem } from "@/components/ui/CategoryEmblem";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const { categories } = await getStudyOverview();
  return { title: categories.find((category) => category.slug === slug)?.title ?? "Matéria" };
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const overview = await getStudyOverview();
  const { categories, favorites, questionCounts } = overview;
  const category = categories.find((item) => item.slug === slug);
  if (!category) notFound();
  const index = buildStudyIndex(overview);
  const stats = index.categoryStats(category.id);
  const items = stats.topics;
  // próximo passo da trilha: primeiro tema que não está concluído
  const nextTopic = items.find((topic) => !["quiz-feito", "dominado"].includes(index.stateOf(topic.id))) ?? items[0];
  const neighbors = categories.findIndex((item) => item.id === category.id);

  return (
    <div className="page">
      <nav aria-label="Você está em" className="crumbs">
        <Link href="/app/categorias">Matérias</Link>
        <Icon name="chevronRight" size={14} />
        <span aria-current="page">{category.shortTitle}</span>
      </nav>

      <header className={`cat-hero tone-${category.tone}`}>
        <div className="cat-hero__main">
          <span className="cat-hero__icon" aria-hidden><CategoryEmblem slug={category.slug} size={80} /></span>
          <div className="min-w-0">
            <h1 className="cat-hero__title">{category.title}</h1>
            {category.description && <p className="cat-hero__desc">{category.description}</p>}
            <ul className="cat-hero__stats">
              <li><b>{stats.total}</b> temas</li>
              <li><b>{stats.questions}</b> questões</li>
              <li><b>{stats.quizzes}</b> quizzes feitos</li>
              {stats.accuracy != null && <li><b>{stats.accuracy}%</b> de acerto</li>}
            </ul>
          </div>
          <ProgressRing value={stats.completion} label="concluído" />
        </div>
        {nextTopic && (
          <Link href={`/app/tema/${nextTopic.slug}`} className="btn btn-primary cat-hero__cta">
            {stats.started ? "Continuar a trilha" : "Começar pelo tema 1"} <Icon name="arrowRight" size={18} />
          </Link>
        )}
      </header>

      <div className="cat-layout">
        <section aria-labelledby="trilha-title">
          <SectionHeading eyebrow="Trilha da matéria" title="Temas em ordem de estudo" />
          <h2 id="trilha-title" className="sr-only">Temas</h2>
          <ol className="trail">
            {items.map((topic, i) => (
              <li key={topic.id}>
                <TopicCard
                  topic={topic}
                  number={i + 1}
                  state={index.stateOf(topic.id)}
                  progress={index.progressOf(topic.id)}
                  questionCount={questionCounts.get(topic.id) ?? 0}
                  favorite={favorites.has(topic.id)}
                />
              </li>
            ))}
          </ol>
        </section>
        <CategoryMap category={category} topics={items} stateOf={index.stateOf} />
      </div>

      <nav className="pager" aria-label="Outras matérias">
        {neighbors > 0 ? (
          <Link href={`/app/categorias/${categories[neighbors - 1].slug}`} className="pager__link"><small><Icon name="arrowLeft" size={14} /> Matéria anterior</small><b>{categories[neighbors - 1].title}</b></Link>
        ) : <span />}
        {neighbors < categories.length - 1 && (
          <Link href={`/app/categorias/${categories[neighbors + 1].slug}`} className="pager__link pager__link--next"><small>Próxima matéria <Icon name="arrowRight" size={14} /></small><b>{categories[neighbors + 1].title}</b></Link>
        )}
      </nav>
    </div>
  );
}
