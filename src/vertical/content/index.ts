import type { CategorySeed } from "@/core/content/types";
import { URGENCIA } from "./areas-1";
import { FUNDAMENTOS } from "./areas/fundamentos";
import { SUS } from "./areas/sus";
import { BIOSSEGURANCA } from "./areas/biosseguranca";
import { CRIANCA, MULHER } from "./areas-2";
import { CALCULOS } from "./areas/calculos";
import { ETICA } from "./areas/etica";

export { VISUAL_ASSETS, findAsset, visualAssetById, visualAssetsForTopic } from "./visual-assets";

/**
 * FONTE ÚNICA do conteúdo de revisão. Daqui saem:
 *   - o seed do banco (npm run content:seed → supabase/seeds/20_content.sql)
 *   - os dados das cenas da página de vendas (src/vertical/landing/scenes.tsx)
 * Assim, o que a página mostra existe de verdade no app.
 */
export const CATEGORIES: CategorySeed[] = [SUS, FUNDAMENTOS, BIOSSEGURANCA, URGENCIA, MULHER, CRIANCA, ETICA, CALCULOS];

export function findTopic(slug: string) {
  for (const c of CATEGORIES) {
    const t = c.topics.find((x) => x.slug === slug);
    if (t) return { category: c, topic: t };
  }
  throw new Error(`tema ${slug} não existe no conteúdo`);
}

export function publishedCounts() {
  const topics = CATEGORIES.flatMap((c) => c.topics.filter((t) => t.status === "published"));
  return {
    categories: CATEGORIES.filter((c) => c.status === "published").length,
    topics: topics.length,
    questions: topics.reduce((n, t) => n + t.questions.filter((q) => q.status === "published").length, 0),
  };
}
