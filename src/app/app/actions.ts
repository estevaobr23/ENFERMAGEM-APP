"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/core/supabase/server";
import { requireAccess } from "@/core/auth/guard";
import { vertical } from "@/vertical/config";
import type { AnswerResult, QuizSummary } from "@/core/study/types";

export async function answerQuestionAction(questionId: string, optionId: string, context: "topic" | "review" | "practice" | "retry" = "topic") {
  await requireAccess(vertical.productKey);
  const supabase = await createClient();
  const { data, error } = await supabase.rpc("answer_question", {
    p_question_id: questionId,
    p_option_id: optionId,
    p_context: context,
  });
  if (error) return { ok: false as const, error: "Não foi possível registrar sua resposta. Tente novamente." };
  const result = data as unknown as {
    is_correct: boolean;
    correct_option_id: string;
    explanation: string;
    topic_id: string;
    topic_slug: string;
    queued: boolean;
    resolved: boolean;
  };
  revalidatePath("/app");
  revalidatePath("/app/revisoes");
  revalidatePath("/app/progresso");
  return {
    ok: true as const,
    result: {
      isCorrect: result.is_correct,
      correctOptionId: result.correct_option_id,
      explanation: result.explanation,
      topicId: result.topic_id,
      topicSlug: result.topic_slug,
      queued: result.queued,
      resolved: result.resolved,
    } satisfies AnswerResult,
  };
}

export async function markTopicReviewedAction(topicId: string) {
  await requireAccess(vertical.productKey);
  const supabase = await createClient();
  const { error } = await supabase.rpc("mark_topic_reviewed", { p_topic_id: topicId });
  if (error) return { ok: false as const, error: "Não foi possível salvar esta revisão." };
  revalidatePath("/app");
  revalidatePath("/app/revisar");
  revalidatePath("/app/progresso");
  return { ok: true as const };
}

export async function toggleFavoriteAction(topicId: string, favorite: boolean) {
  const { user } = await requireAccess(vertical.productKey);
  const supabase = await createClient();
  const operation = favorite
    ? supabase.from("favorites").insert({ user_id: user.id, topic_id: topicId })
    : supabase.from("favorites").delete().eq("topic_id", topicId);
  const { error } = await operation;
  if (error && error.code !== "23505") return { ok: false as const, error: "Não foi possível atualizar o favorito." };
  revalidatePath("/app/favoritos");
  revalidatePath("/app/tema");
  return { ok: true as const };
}


/** Fecha o quiz final do tema. O placar é calculado no banco (última tentativa de cada questão). */
export async function finishQuizAction(topicId: string) {
  await requireAccess(vertical.productKey);
  const supabase = await createClient();
  const { data, error } = await supabase.rpc("finish_topic_quiz", { p_topic_id: topicId });
  if (error) return { ok: false as const, error: "Não foi possível salvar o resultado do quiz." };
  revalidatePath("/app", "layout");
  return { ok: true as const, result: data as unknown as QuizSummary };
}

export async function toggleSavedSectionAction(topicId: string, sectionKey: string, saved: boolean) {
  const { user } = await requireAccess(vertical.productKey);
  const supabase = await createClient();
  const operation = saved
    ? supabase.from("saved_sections").insert({ user_id: user.id, topic_id: topicId, section_key: sectionKey })
    : supabase.from("saved_sections").delete().eq("topic_id", topicId).eq("section_key", sectionKey);
  const { error } = await operation;
  if (error && error.code !== "23505") return { ok: false as const, error: "Não foi possível salvar este ponto." };
  revalidatePath("/app/favoritos");
  return { ok: true as const };
}
