import type { QuestionSeed } from "@/core/content/types";

const LABELS = ["A", "B", "C", "D", "E"] as const;

/**
 * Questão de múltipla escolha compacta: alternativas na ordem, índice da
 * correta (0 = A). Mantém o arquivo de conteúdo legível com dezenas de questões.
 */
export function mcq(q: {
  key: string;
  section: string;
  difficulty: "facil" | "media" | "dificil";
  stem: string;
  options: string[];
  correct: number;
  explanation: string;
  source?: number;
}): QuestionSeed {
  if (q.correct < 0 || q.correct >= q.options.length) throw new Error(`${q.key}: índice da correta fora das alternativas`);
  return {
    key: q.key,
    stem: q.stem,
    options: q.options.map((text, index) => ({ label: LABELS[index], text, ...(index === q.correct ? { correct: true } : {}) })),
    explanation: q.explanation,
    difficulty: q.difficulty,
    source: q.source ?? 0,
    section: q.section,
    status: "published",
  };
}
