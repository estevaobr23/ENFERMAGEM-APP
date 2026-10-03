import type { TopicSection, VisualMapSpec } from "@/core/content/types";

export type StudyCategory = {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  description: string | null;
  tone: string;
  icon: string | null;
  position: number;
};

export type StudyTopic = {
  id: string;
  categoryId: string;
  slug: string;
  title: string;
  description: string;
  summary: string;
  keyPoints: string[];
  /** títulos das seções, na ordem */
  outline: string[];
  readingMinutes: number | null;
  position: number;
  lastReviewedAt: string | null;
};

export type StudyProgress = {
  topicId: string;
  lastReviewedAt: string | null;
  questionsAnswered: number;
  questionsCorrect: number;
  reviewCount: number;
  lastAnsweredAt: string | null;
  quizCount: number;
  quizLastCorrect: number | null;
  quizLastTotal: number | null;
  quizBestCorrect: number | null;
  quizCompletedAt: string | null;
};

export type ReviewItem = {
  id: string;
  topicId: string;
  questionId: string;
  createdAt: string;
};

export type TopicSource = {
  id: string;
  title: string;
  organization: string;
  url: string;
  accessedAt: string;
  locator: string | null;
};

export type QuestionOption = { id: string; label: string; text: string };

export type StudyQuestion = {
  id: string;
  topicId: string;
  key: string;
  stem: string;
  difficulty: string | null;
  position: number;
  /** seção do tema que a questão testa */
  sectionKey: string | null;
  options: QuestionOption[];
};

export type TopicDetail = {
  topic: StudyTopic;
  category: StudyCategory;
  visualMap: { title: string; spec: VisualMapSpec } | null;
  sections: TopicSection[];
  sources: TopicSource[];
  questions: StudyQuestion[];
  favorite: boolean;
  savedSections: string[];
  progress: StudyProgress | null;
  /** posição do tema na área e vizinhos, para navegação */
  siblings: { index: number; total: number; prev: StudyTopic | null; next: StudyTopic | null };
};

export type SavedPoint = {
  topic: StudyTopic;
  category: StudyCategory;
  sectionKey: string;
  sectionTitle: string;
  sectionKind: TopicSection["kind"];
  savedAt: string;
};

export type QuizSummary = { correct: number; total: number; best: number; count: number };

export type AnswerResult = {
  isCorrect: boolean;
  correctOptionId: string;
  explanation: string;
  topicId: string;
  topicSlug: string;
  queued: boolean;
  resolved: boolean;
};

