/**
 * Gera supabase/seeds/20_content.sql a partir de src/vertical/content.
 * O SQL é IDEMPOTENTE (upsert por slug/chave) e nunca apaga tema ou questão:
 * o que sair do TypeScript vira 'draft' (some para o aluno, histórico fica).
 *
 *   npm run content:seed
 *
 * Aplicar em produção: rodar o arquivo gerado no SQL editor (ou psql) depois
 * das migrations.
 */
import { findAsset } from "@/vertical/content/visual-assets";
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { readingMinutes, validateCategories } from "@/core/content/types";
import { CATEGORIES } from "@/vertical/content";
import { vertical } from "@/vertical/config";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const out = join(root, "supabase", "seeds", "20_content.sql");

const errors = validateCategories(CATEGORIES, (id) => findAsset(id)?.status);
if (errors.length) {
  console.error("Conteúdo inválido:\n" + errors.map((e) => "  - " + e).join("\n"));
  process.exit(1);
}

const q = (v: string | null | undefined) => (v == null ? "null" : `'${v.replace(/'/g, "''")}'`);
const arr = (xs: string[]) => (xs.length ? `array[${xs.map(q).join(", ")}]::text[]` : "'{}'::text[]");
const json = (v: unknown) => `${q(JSON.stringify(v))}::jsonb`;
const date = (v: string | null) => (v ? `${q(v)}::date` : "null");

const PRODUCT = `(select id from public.products where key = ${q(vertical.productKey)})`;
const lines: string[] = [];
const emit = (s: string) => lines.push(s);

emit(`-- GERADO por scripts/build-content-seed.ts — NÃO EDITE À MÃO.`);
emit(`-- Fonte: src/vertical/content. Idempotente.`);
emit(`begin;`);

const topicSlugs: string[] = [];
const questionKeys: string[] = [];

CATEGORIES.forEach((c, ci) => {
  emit(`\n-- ═════ ${c.title}`);
  emit(`insert into public.categories (product_id, slug, title, short_title, description, tone, icon, position, status)
values (${PRODUCT}, ${q(c.slug)}, ${q(c.title)}, ${q(c.shortTitle)}, ${q(c.description)}, ${q(c.tone)}, ${q(c.icon)}, ${ci}, ${q(c.status)})
on conflict (product_id, slug) do update set title = excluded.title, short_title = excluded.short_title,
  description = excluded.description, tone = excluded.tone, icon = excluded.icon, position = excluded.position, status = excluded.status;`);

  const CAT = `(select id from public.categories where product_id = ${PRODUCT} and slug = ${q(c.slug)})`;

  c.topics.forEach((t, ti) => {
    topicSlugs.push(t.slug);
    const TOPIC = `(select id from public.topics where slug = ${q(t.slug)})`;
    emit(`\n-- tema: ${t.title}`);
    emit(`insert into public.topics (category_id, slug, title, description, summary, key_points, sections, outline, reading_minutes, position, status, last_reviewed_at, review_notes)
values (${CAT}, ${q(t.slug)}, ${q(t.title)}, ${q(t.description)}, ${q(t.summary)}, ${arr(t.keyPoints)}, ${json(t.sections)}, ${arr(t.sections.map((s) => s.title))}, ${readingMinutes(t.sections, t.summary)}, ${ti}, ${q(t.status)}, ${date(t.lastReviewedAt)}, ${q(t.reviewNotes ?? null)})
on conflict (slug) do update set category_id = excluded.category_id, title = excluded.title, description = excluded.description,
  summary = excluded.summary, key_points = excluded.key_points, sections = excluded.sections, outline = excluded.outline,
  reading_minutes = excluded.reading_minutes, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at, review_notes = excluded.review_notes;`);

    t.sources.forEach((s, si) => {
      emit(`insert into public.topic_sources (topic_id, position, source_title, source_organization, source_url, source_accessed_at, locator)
values (${TOPIC}, ${si}, ${q(s.title)}, ${q(s.organization)}, ${q(s.url)}, ${date(s.accessedAt)}, ${q(s.locator ?? null)})
on conflict (topic_id, position) do update set source_title = excluded.source_title, source_organization = excluded.source_organization,
  source_url = excluded.source_url, source_accessed_at = excluded.source_accessed_at, locator = excluded.locator;`);
    });
    // fontes que sobraram (e não são usadas por questão) saem
    emit(`delete from public.topic_sources s where s.topic_id = ${TOPIC} and s.position >= ${t.sources.length}
  and not exists (select 1 from public.questions x where x.source_id = s.id);`);

    emit(`insert into public.visual_maps (topic_id, title, spec, status, last_reviewed_at)
values (${TOPIC}, ${q(t.map.title)}, ${json(t.map.spec)}, ${q(t.status)}, ${date(t.lastReviewedAt)})
on conflict (topic_id) do update set title = excluded.title, spec = excluded.spec, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;`);

    t.questions.forEach((qq, qi) => {
      questionKeys.push(qq.key);
      const SOURCE = `(select id from public.topic_sources where topic_id = ${TOPIC} and position = ${qq.source})`;
      emit(`insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values (${TOPIC}, ${q(qq.key)}, ${q(qq.stem)}, ${q(qq.explanation)}, ${q(qq.difficulty ?? null)}, ${SOURCE}, ${q(qq.section ?? null)}, ${qi}, ${q(qq.status)}, ${date(t.lastReviewedAt)})
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;`);
      const QID = `(select id from public.questions where key = ${q(qq.key)})`;
      // zera o gabarito antes do upsert (índice "uma correta por questão")
      emit(`update public.question_options set is_correct = false where question_id = ${QID};`);
      for (const o of qq.options) {
        emit(`insert into public.question_options (question_id, label, text, is_correct)
values (${QID}, ${q(o.label)}, ${q(o.text)}, ${o.correct ? "true" : "false"})
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;`);
      }
      emit(`delete from public.question_options where question_id = ${QID} and label not in (${qq.options.map((o) => q(o.label)).join(", ")});`);
    });
  });
});

emit(`\n-- o que saiu do conteúdo vira rascunho (nunca apaga histórico de aluno)`);
emit(`update public.topics set status = 'draft' where slug not in (${topicSlugs.map(q).join(", ")})
  and category_id in (select id from public.categories where product_id = ${PRODUCT});`);
emit(`update public.questions set status = 'draft' where key not in (${questionKeys.map(q).join(", ")})
  and topic_id in (select t.id from public.topics t join public.categories c on c.id = t.category_id where c.product_id = ${PRODUCT});`);
emit(`commit;`);

mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, lines.join("\n") + "\n", "utf8");
console.log(`ok: ${out} (${CATEGORIES.length} áreas, ${topicSlugs.length} temas, ${questionKeys.length} questões)`);
