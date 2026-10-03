import { NextResponse, type NextRequest } from "next/server";
import { createClient } from "@/core/supabase/server";

/**
 * Busca imediata (enquanto o aluno digita). A RPC search_topics só devolve
 * temas que o usuário pode ler (RLS + entitlement), então sem acesso a
 * resposta é vazia. Procura em título, resumo, pontos-chave e texto das seções.
 */
const normalize = (value: string) => value.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();

export type SearchSuggestion = {
  slug: string;
  title: string;
  description: string;
  category: string;
  categorySlug: string;
  /** títulos de seções do tema que contêm os termos */
  inSections: string[];
};

export async function GET(request: NextRequest) {
  const q = (request.nextUrl.searchParams.get("q") ?? "").trim().slice(0, 80);
  const limit = Math.min(30, Math.max(1, Number(request.nextUrl.searchParams.get("limit")) || 8));
  if (q.length < 2) return NextResponse.json({ q, topics: [], categories: [] });

  const supabase = await createClient();
  const { data: auth } = await supabase.auth.getUser();
  if (!auth.user) return NextResponse.json({ error: "unauthorized" }, { status: 401 });

  const { data: hits, error } = await supabase.rpc("search_topics", { p_query: q });
  if (error) return NextResponse.json({ error: "search_failed" }, { status: 500 });

  const terms = normalize(q).split(/\s+/).filter((term) => term.length >= 2);
  const matches = (text: string) => terms.every((term) => normalize(text).includes(term));

  const topicIds = (hits ?? []).map((hit) => hit.id);
  const [{ data: categories }, { data: outlines }] = await Promise.all([
    supabase.from("categories").select("id, slug, title, short_title, description").order("position"),
    topicIds.length ? supabase.from("topics").select("id, outline").in("id", topicIds) : Promise.resolve({ data: [] as { id: string; outline: string[] }[] }),
  ]);
  const categoryById = new Map((categories ?? []).map((category) => [category.id, category]));
  const outlineById = new Map((outlines ?? []).map((row) => [row.id, (row.outline ?? []) as string[]]));

  const topics: SearchSuggestion[] = (hits ?? []).slice(0, limit).map((hit) => {
    const category = categoryById.get(hit.category_id);
    return {
      slug: hit.slug,
      title: hit.title,
      description: hit.description,
      category: category?.short_title ?? "",
      categorySlug: category?.slug ?? "",
      inSections: (outlineById.get(hit.id) ?? []).filter(matches).slice(0, 3),
    };
  });

  const categoryMatches = (categories ?? [])
    .filter((category) => matches(`${category.title} ${category.short_title} ${category.description ?? ""}`))
    .slice(0, 3)
    .map((category) => ({ slug: category.slug, title: category.title }));

  return NextResponse.json(
    { q, topics, categories: categoryMatches, total: (hits ?? []).length },
    { headers: { "Cache-Control": "private, no-store" } },
  );
}
