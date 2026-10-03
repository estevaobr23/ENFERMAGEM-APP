import type { Metadata } from "next";
import Link from "next/link";
import { EmptyState } from "@/components/study/EmptyState";
import { SearchBar } from "@/components/study/SearchBar";
import { CategoryCard, PageHeader, SectionHeading, TopicCard } from "@/components/study/Cards";
import { getStudyOverview, searchStudyTopics } from "@/core/study/data";
import { buildStudyIndex } from "@/core/study/insights";

export const metadata: Metadata = { title: "Buscar" };

const SUGGESTIONS = ["Braden", "sigilo", "gotejamento", "Näegele", "Conselho de Saúde", "SAMU", "evento adverso", "teste do pezinho"];

const normalize = (value: string) => value.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();

export default async function SearchPage({ searchParams }: { searchParams: Promise<{ q?: string }> }) {
  const query = (await searchParams).q?.trim() ?? "";
  const [overview, results] = await Promise.all([getStudyOverview(), searchStudyTopics(query)]);
  const { categories, topics, favorites, questionCounts } = overview;
  const index = buildStudyIndex(overview);
  const terms = normalize(query).split(/\s+/).filter((term) => term.length >= 2);
  const hit = (text: string) => terms.length > 0 && terms.every((term) => normalize(text).includes(term));

  const ids = new Set(results.map((result) => result.id));
  const matches = topics.filter((topic) => ids.has(topic.id));
  const categoryMatches = categories.filter((category) => hit(`${category.title} ${category.shortTitle} ${category.description ?? ""}`));

  return (
    <div className="page">
      <PageHeader eyebrow="Busca" title="Encontre qualquer ponto">
      </PageHeader>

      <SearchBar inline defaultValue={query} autoFocus={!query}>
      {query.length < 2 ? (
        <section>
          <SectionHeading title="Experimente buscar" />
          <ul className="suggestions">
            {SUGGESTIONS.map((term) => <li key={term}><Link href={`/app/busca?q=${encodeURIComponent(term)}`}>{term}</Link></li>)}
          </ul>
          <p className="mt-4 text-sm text-body">A busca procura nos títulos, resumos e em todo o texto das seções dos temas — inclusive tabelas, passos e pegadinhas.</p>
        </section>
      ) : (
        <>
          <p className="text-sm text-body" aria-live="polite">
            {matches.length + categoryMatches.length ? <><b className="text-ink">{matches.length}</b> {matches.length === 1 ? "tema" : "temas"}{categoryMatches.length ? <> e <b className="text-ink">{categoryMatches.length}</b> {categoryMatches.length === 1 ? "matéria" : "matérias"}</> : null} para “{query}”</> : null}
          </p>

          {categoryMatches.length > 0 && (
            <section>
              <SectionHeading title="Matérias" />
              <div className="grid gap-3 md:grid-cols-2">{categoryMatches.map((category) => <CategoryCard key={category.id} category={category} stats={index.categoryStats(category.id)} compact />)}</div>
            </section>
          )}

          {matches.length > 0 && (
            <section>
              <SectionHeading title="Temas" />
              <ul className="grid gap-3 xl:grid-cols-2">
                {matches.map((topic) => {
                  const inSections = topic.outline.filter(hit);
                  return (
                    <li key={topic.id} className="search-hit">
                      <TopicCard
                        topic={topic}
                        state={index.stateOf(topic.id)}
                        progress={index.progressOf(topic.id)}
                        category={categories.find((category) => category.id === topic.categoryId)}
                        questionCount={questionCounts.get(topic.id) ?? 0}
                        favorite={favorites.has(topic.id)}
                      />
                      {inSections.length > 0 && <p className="search-hit__where">Na seção: {inSections.join(" · ")}</p>}
                    </li>
                  );
                })}
              </ul>
            </section>
          )}

          {!matches.length && !categoryMatches.length && (
            <EmptyState icon="search" title="Nada encontrado" text={`Não achamos “${query}” no conteúdo publicado. Tente uma palavra mais curta ou um sinônimo.`} href="/app/categorias" action="Explorar matérias" />
          )}
        </>
      )}
      </SearchBar>
    </div>
  );
}
