import "server-only";
import { cache } from "react";
import { notFound } from "next/navigation";
import { createClient } from "@/core/supabase/server";
import { requireAccess } from "@/core/auth/guard";
import { vertical } from "@/vertical/config";
import type {
  ReviewItem,
  SavedPoint,
  StudyCategory,
  StudyProgress,
  StudyQuestion,
  StudyTopic,
  TopicDetail,
  TopicSource,
} from "./types";
import type { TopicSection, VisualMapSpec } from "@/core/content/types";

const categorySelect = "id, slug, title, short_title, description, tone, icon, position";
const topicSelect = "id, category_id, slug, title, description, summary, key_points, outline, reading_minutes, position, last_reviewed_at";
const progressSelect =
  "topic_id, last_reviewed_at, questions_answered, questions_correct, review_count, last_answered_at, quiz_count, quiz_last_correct, quiz_last_total, quiz_best_correct, quiz_completed_at";

function mapCategory(row: Record<string, unknown>): StudyCategory {
  return {
    id: String(row.id),
    slug: String(row.slug),
    title: String(row.title),
    shortTitle: String(row.short_title),
    description: row.description ? String(row.description) : null,
    tone: String(row.tone),
    icon: row.icon ? String(row.icon) : null,
    position: Number(row.position),
  };
}

function mapTopic(row: Record<string, unknown>): StudyTopic {
  return {
    id: String(row.id),
    categoryId: String(row.category_id),
    slug: String(row.slug),
    title: String(row.title),
    description: String(row.description),
    summary: String(row.summary),
    keyPoints: (row.key_points ?? []) as string[],
    outline: (row.outline ?? []) as string[],
    readingMinutes: row.reading_minutes == null ? null : Number(row.reading_minutes),
    position: Number(row.position),
    lastReviewedAt: row.last_reviewed_at ? String(row.last_reviewed_at) : null,
  };
}

const num = (v: unknown) => (v == null ? null : Number(v));
const str = (v: unknown) => (v ? String(v) : null);

function mapProgress(row: Record<string, unknown>): StudyProgress {
  return {
    topicId: String(row.topic_id),
    lastReviewedAt: str(row.last_reviewed_at),
    questionsAnswered: Number(row.questions_answered),
    questionsCorrect: Number(row.questions_correct),
    reviewCount: Number(row.review_count),
    lastAnsweredAt: str(row.last_answered_at),
    quizCount: Number(row.quiz_count ?? 0),
    quizLastCorrect: num(row.quiz_last_correct),
    quizLastTotal: num(row.quiz_last_total),
    quizBestCorrect: num(row.quiz_best_correct),
    quizCompletedAt: str(row.quiz_completed_at),
  };
}

/**
 * Tudo que as telas de navegação precisam, numa ida ao banco. Cacheado por
 * request: o layout (sidebar) e a página chamam e o banco é consultado uma vez.
 */
export const getStudyOverview = cache(async () => {
  const access = await requireAccess(vertical.productKey);
  const supabase = await createClient();
  const [categoriesResult, topicsResult, progressResult, reviewResult, favoritesResult, questionsResult, savedResult] = await Promise.all([
    supabase.from("categories").select(categorySelect).eq("product_id", access.productId).order("position"),
    supabase.from("topics").select(topicSelect).order("position"),
    supabase.from("user_topic_progress").select(progressSelect),
    supabase.from("review_queue").select("id, topic_id, question_id, created_at").eq("status", "pending").order("created_at"),
    supabase.from("favorites").select("topic_id"),
    supabase.from("questions").select("topic_id"),
    supabase.from("saved_sections").select("topic_id"),
  ]);

  const error =
    categoriesResult.error ?? topicsResult.error ?? progressResult.error ?? reviewResult.error ?? favoritesResult.error ?? questionsResult.error ?? savedResult.error;
  if (error) throw new Error(`Não foi possível carregar seus estudos: ${error.message}`);

  const categories = (categoriesResult.data ?? []).map((row) => mapCategory(row as Record<string, unknown>));
  const categoryOrder = new Map(categories.map((category, index) => [category.id, index]));
  const topics = (topicsResult.data ?? [])
    .map((row) => mapTopic(row as Record<string, unknown>))
    .filter((topic) => categoryOrder.has(topic.categoryId))
    // ordem global do conteúdo: área, depois tema
    .sort((a, b) => categoryOrder.get(a.categoryId)! - categoryOrder.get(b.categoryId)! || a.position - b.position);
  const progress = (progressResult.data ?? []).map((row) => mapProgress(row as Record<string, unknown>));
  const pending: ReviewItem[] = (reviewResult.data ?? []).map((row) => ({
    id: row.id,
    topicId: row.topic_id,
    questionId: row.question_id,
    createdAt: row.created_at,
  }));
  const favorites = new Set((favoritesResult.data ?? []).map((row) => row.topic_id));
  const questionCounts = new Map<string, number>();
  for (const row of questionsResult.data ?? []) questionCounts.set(row.topic_id, (questionCounts.get(row.topic_id) ?? 0) + 1);
  const savedCount = (savedResult.data ?? []).length;

  return { access, categories, topics, progress, pending, favorites, questionCounts, savedCount };
});

export type StudyOverview = Awaited<ReturnType<typeof getStudyOverview>>;

export async function getTopicDetail(slug: string): Promise<TopicDetail> {
  const { access, topics } = await getStudyOverview();
  const supabase = await createClient();
  const { data: topicRow } = await supabase.from("topics").select(`${topicSelect}, sections`).eq("slug", slug).maybeSingle();
  if (!topicRow) notFound();
  const topic = mapTopic(topicRow as Record<string, unknown>);

  const [categoryResult, mapResult, sourcesResult, questionsResult, favoriteResult, progressResult, savedResult] = await Promise.all([
    supabase.from("categories").select(categorySelect).eq("id", topic.categoryId).eq("product_id", access.productId).single(),
    supabase.from("visual_maps").select("title, spec").eq("topic_id", topic.id).maybeSingle(),
    supabase
      .from("topic_sources")
      .select("id, source_title, source_organization, source_url, source_accessed_at, locator, position")
      .eq("topic_id", topic.id)
      .order("position"),
    supabase.from("questions").select("id, topic_id, key, stem, difficulty, position, section_key").eq("topic_id", topic.id).order("position"),
    supabase.from("favorites").select("topic_id").eq("topic_id", topic.id).maybeSingle(),
    supabase.from("user_topic_progress").select(progressSelect).eq("topic_id", topic.id).maybeSingle(),
    supabase.from("saved_sections").select("section_key").eq("topic_id", topic.id),
  ]);
  if (!categoryResult.data) notFound();
  const questionRows = questionsResult.data ?? [];
  const questionIds = questionRows.map((question) => question.id);
  const { data: optionRows, error: optionError } = questionIds.length
    ? await supabase.from("question_options").select("id, question_id, label, text").in("question_id", questionIds).order("label")
    : { data: [], error: null };
  const error =
    mapResult.error ?? sourcesResult.error ?? questionsResult.error ?? favoriteResult.error ?? progressResult.error ?? savedResult.error ?? optionError;
  if (error) throw new Error(`Não foi possível abrir este assunto: ${error.message}`);

  const questions: StudyQuestion[] = questionRows.map((question) => ({
    id: question.id,
    topicId: question.topic_id,
    key: question.key,
    stem: question.stem,
    difficulty: question.difficulty,
    position: question.position,
    sectionKey: question.section_key,
    options: (optionRows ?? [])
      .filter((option) => option.question_id === question.id)
      .map((option) => ({ id: option.id, label: option.label, text: option.text })),
  }));
  const sources: TopicSource[] = (sourcesResult.data ?? []).map((source) => ({
    id: source.id,
    title: source.source_title,
    organization: source.source_organization,
    url: source.source_url,
    accessedAt: source.source_accessed_at,
    locator: source.locator,
  }));

  const inCategory = topics.filter((item) => item.categoryId === topic.categoryId);
  const index = inCategory.findIndex((item) => item.id === topic.id);
  // depois do último tema da área, o "próximo" é o primeiro da área seguinte
  const globalIndex = topics.findIndex((item) => item.id === topic.id);

  return {
    topic,
    category: mapCategory(categoryResult.data as Record<string, unknown>),
    visualMap: mapResult.data ? { title: mapResult.data.title, spec: mapResult.data.spec as unknown as VisualMapSpec } : null,
    sections: ((topicRow as Record<string, unknown>).sections ?? []) as TopicSection[],
    sources,
    questions,
    favorite: Boolean(favoriteResult.data),
    savedSections: (savedResult.data ?? []).map((row) => row.section_key),
    progress: progressResult.data ? mapProgress(progressResult.data as Record<string, unknown>) : null,
    siblings: {
      index: Math.max(0, index),
      total: inCategory.length,
      prev: globalIndex > 0 ? topics[globalIndex - 1] : null,
      next: globalIndex >= 0 && globalIndex < topics.length - 1 ? topics[globalIndex + 1] : null,
    },
  };
}

/** Pontos salvos com o título da seção (lê só as seções dos temas envolvidos). */
export async function getSavedPoints(): Promise<SavedPoint[]> {
  const { categories, topics } = await getStudyOverview();
  const supabase = await createClient();
  const { data: rows, error } = await supabase.from("saved_sections").select("topic_id, section_key, created_at").order("created_at", { ascending: false });
  if (error) throw new Error(`Não foi possível carregar os pontos salvos: ${error.message}`);
  if (!rows?.length) return [];
  const topicIds = [...new Set(rows.map((row) => row.topic_id))];
  const { data: sectionRows, error: sectionError } = await supabase.from("topics").select("id, sections").in("id", topicIds);
  if (sectionError) throw new Error(`Não foi possível carregar os pontos salvos: ${sectionError.message}`);
  const sectionsByTopic = new Map((sectionRows ?? []).map((row) => [row.id, (row.sections ?? []) as unknown as TopicSection[]]));
  const points: SavedPoint[] = [];
  for (const row of rows) {
    const topic = topics.find((item) => item.id === row.topic_id);
    const category = topic && categories.find((item) => item.id === topic.categoryId);
    const section = sectionsByTopic.get(row.topic_id)?.find((item) => item.id === row.section_key);
    if (!topic || !category || !section) continue;
    points.push({ topic, category, sectionKey: section.id, sectionTitle: section.title, sectionKind: section.kind, savedAt: row.created_at });
  }
  return points;
}

export async function getAttempts(limit = 30) {
  await requireAccess(vertical.productKey);
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("question_attempts")
    .select("id, question_id, topic_id, is_correct, context, answered_at")
    .order("answered_at", { ascending: false })
    .limit(limit);
  if (error) throw new Error(`Não foi possível carregar o histórico: ${error.message}`);
  return data ?? [];
}

export async function searchStudyTopics(query: string) {
  await requireAccess(vertical.productKey);
  if (query.trim().length < 2) return [];
  const supabase = await createClient();
  const { data, error } = await supabase.rpc("search_topics", { p_query: query.trim() });
  if (error) throw new Error(`A busca falhou: ${error.message}`);
  return data ?? [];
}
