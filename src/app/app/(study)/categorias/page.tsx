import type { Metadata } from "next";
import Link from "next/link";
import { getStudyOverview } from "@/core/study/data";
import { buildStudyIndex } from "@/core/study/insights";
import { CategoryCard, PageHeader } from "@/components/study/Cards";
import { MapLegend, StudyAtlas } from "@/components/study/MindMaps";
import { Icon } from "@/components/ui/Icon";

export const metadata: Metadata = { title: "Matérias" };

export default async function CategoriesPage({ searchParams }: { searchParams: Promise<{ ver?: string }> }) {
  const view = (await searchParams).ver === "mapa" ? "mapa" : "cards";
  const overview = await getStudyOverview();
  const { categories, topics } = overview;
  const index = buildStudyIndex(overview);

  return (
    <div className="page">
      <PageHeader eyebrow="Conteúdo organizado" title="Matérias da prova" text={`${categories.length} matérias, ${topics.length} temas. Cada tema tem mapa mental, seções visuais, resumo e teste.`}>
        <div className="seg" role="tablist" aria-label="Modo de visualização">
          <Link href="/app/categorias" role="tab" aria-selected={view === "cards"} className={view === "cards" ? "is-active" : ""}><Icon name="grid" size={16} /> Lista</Link>
          <Link href="/app/categorias?ver=mapa" role="tab" aria-selected={view === "mapa"} className={view === "mapa" ? "is-active" : ""}><Icon name="map" size={16} /> Mapa geral</Link>
        </div>
      </PageHeader>

      {view === "cards" ? (
        <div className="grid gap-3 md:grid-cols-2 2xl:grid-cols-3">
          {categories.map((category) => <CategoryCard key={category.id} category={category} stats={index.categoryStats(category.id)} />)}
        </div>
      ) : (
        <>
          <MapLegend />
          <StudyAtlas categories={categories} topics={topics} stateOf={index.stateOf} completionOf={(id) => index.categoryStats(id).completion} />
        </>
      )}
    </div>
  );
}
