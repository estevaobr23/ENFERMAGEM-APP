import type { Metadata } from "next";
import Link from "next/link";
import { EmptyState } from "@/components/study/EmptyState";
import { PageHeader, TopicCard } from "@/components/study/Cards";
import { getSavedPoints, getStudyOverview } from "@/core/study/data";
import { buildStudyIndex } from "@/core/study/insights";
import { SECTION_KIND } from "@/components/topic/sectionKinds";
import { Icon } from "@/components/ui/Icon";

export const metadata: Metadata = { title: "Salvos" };

export default async function FavoritesPage({ searchParams }: { searchParams: Promise<{ aba?: string }> }) {
  const tab = (await searchParams).aba === "pontos" ? "pontos" : "temas";
  const [overview, points] = await Promise.all([getStudyOverview(), getSavedPoints()]);
  const { categories, topics, favorites, questionCounts } = overview;
  const index = buildStudyIndex(overview);
  const favoriteTopics = topics.filter((topic) => favorites.has(topic.id));

  return (
    <div className="page">
      <PageHeader eyebrow="Acesso rápido" title="Salvos" text="Temas favoritos e os pontos que você marcou para revisar depois.">
        <div className="seg" role="tablist" aria-label="O que mostrar">
          <Link href="/app/favoritos" role="tab" aria-selected={tab === "temas"} className={tab === "temas" ? "is-active" : ""}><Icon name="star" size={16} /> Temas <b>{favoriteTopics.length}</b></Link>
          <Link href="/app/favoritos?aba=pontos" role="tab" aria-selected={tab === "pontos"} className={tab === "pontos" ? "is-active" : ""}><Icon name="bookmark" size={16} /> Pontos salvos <b>{points.length}</b></Link>
        </div>
      </PageHeader>

      {tab === "temas" ? (
        favoriteTopics.length ? (
          <ul className="grid gap-3 xl:grid-cols-2">
            {favoriteTopics.map((topic) => (
              <li key={topic.id}>
                <TopicCard topic={topic} state={index.stateOf(topic.id)} progress={index.progressOf(topic.id)} category={categories.find((category) => category.id === topic.categoryId)} questionCount={questionCounts.get(topic.id) ?? 0} favorite />
              </li>
            ))}
          </ul>
        ) : (
          <EmptyState icon="star" title="Nenhum tema favorito ainda" text="Abra um tema e toque em Favoritar para encontrá-lo rápido aqui." href="/app/categorias" action="Explorar matérias" />
        )
      ) : points.length ? (
        <ul className="points">
          {points.map((point) => {
            const kind = SECTION_KIND[point.sectionKind];
            return (
              <li key={`${point.topic.id}-${point.sectionKey}`}>
                <Link href={`/app/tema/${point.topic.slug}#sec-${point.sectionKey}`} className={`point tone-${kind.tone}`}>
                  <span className="point__icon"><Icon name={kind.icon} size={17} /></span>
                  <span className="min-w-0 flex-1">
                    <small className="point__kind">{kind.label} · {point.category.shortTitle}</small>
                    <b className="point__title">{point.sectionTitle}</b>
                    <small className="point__topic">{point.topic.title}</small>
                  </span>
                  <Icon name="arrowRight" size={17} className="text-brand" />
                </Link>
              </li>
            );
          })}
        </ul>
      ) : (
        <EmptyState icon="bookmark" title="Nenhum ponto salvo" text="Em cada seção de um tema há o botão Salvar ponto. Use para guardar o que quer revisar na véspera." href="/app/categorias" action="Abrir um tema" />
      )}
    </div>
  );
}
