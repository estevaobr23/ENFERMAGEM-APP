"use client";

import { useRef, useState, useTransition } from "react";
import { answerQuestionAction, finishQuizAction } from "@/app/app/actions";
import type { AnswerResult, StudyProgress, StudyQuestion } from "@/core/study/types";
import { Icon } from "@/components/ui/Icon";
import { QuizFeedback, QuizQuestion, type SectionRef } from "./QuizQuestion";
import { QuizResult } from "./QuizResult";

type Context = "topic" | "review" | "practice" | "retry";
type Phase = "intro" | "running" | "result";

/**
 * Quiz do final do tema: "agora que você viu, teste rapidamente".
 * Uma questão por vez → correção no banco → feedback → resultado com as seções a revisar.
 */
export function TopicQuiz({ topicId, questions, sections, progress, next, context = "topic", title = "Teste rápido", startOpen = false, sectionBase = "" }: {
  topicId: string;
  questions: StudyQuestion[];
  sections: SectionRef[];
  progress: StudyProgress | null;
  next: { slug: string; title: string } | null;
  context?: Context;
  title?: string;
  startOpen?: boolean;
  /** prefixo do link para a seção (vazio = mesma página) */
  sectionBase?: string;
}) {
  const [phase, setPhase] = useState<Phase>(startOpen ? "running" : "intro");
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState("");
  const [results, setResults] = useState<Record<string, AnswerResult>>({});
  const [error, setError] = useState("");
  const [summary, setSummary] = useState<{ correct: number; total: number; best: number } | null>(null);
  const [saveError, setSaveError] = useState("");
  const [pending, startTransition] = useTransition();
  const top = useRef<HTMLDivElement>(null);

  const question = questions[index];
  const result = question ? results[question.id] ?? null : null;
  const total = questions.length;

  function focusTop() {
    top.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function start() {
    setPhase("running");
    setIndex(0);
    setSelected("");
    setResults({});
    setSummary(null);
    setSaveError("");
    requestAnimationFrame(focusTop);
  }

  function submit() {
    if (!selected || result || !question) return;
    setError("");
    startTransition(async () => {
      const response = await answerQuestionAction(question.id, selected, context);
      if (response.ok) setResults((prev) => ({ ...prev, [question.id]: response.result }));
      else setError(response.error);
    });
  }

  function advance() {
    if (index < total - 1) {
      setIndex(index + 1);
      setSelected("");
      requestAnimationFrame(focusTop);
      return;
    }
    setPhase("result");
    requestAnimationFrame(focusTop);
    startTransition(async () => {
      const response = await finishQuizAction(topicId);
      if (response.ok) setSummary(response.result);
      else setSaveError(response.error);
    });
  }

  if (!total) return null;

  const outcomes = Object.fromEntries(Object.entries(results).map(([id, value]) => [id, value.isCorrect]));
  const localCorrect = Object.values(outcomes).filter(Boolean).length;
  const best = progress?.quizBestCorrect ?? null;

  return (
    <section id="quiz" className="quiz" aria-labelledby="quiz-title">
      <div ref={top} className="quiz__anchor" />
      <header className="quiz__head">
        <span className="quiz__icon"><Icon name="target" size={18} /></span>
        <div className="min-w-0 flex-1">
          <p className="quiz__eyebrow">Teste do tema</p>
          <h2 id="quiz-title" className="quiz__title">{title}</h2>
        </div>
        {phase === "running" && (
          <ol className="quiz__dots" aria-label={`Questão ${index + 1} de ${total}`}>
            {questions.map((item, i) => {
              const r = results[item.id];
              return <li key={item.id} className={r ? (r.isCorrect ? "is-ok" : "is-bad") : i === index ? "is-current" : ""} />;
            })}
          </ol>
        )}
      </header>

      {phase === "intro" && (
        <div className="quiz__intro">
          <p className="quiz__lead">Agora que você viu o tema, teste rapidamente o que ficou. A correção aparece na hora; o que errar vai para <b>Revisar novamente</b>.</p>
          <ul className="quiz__facts">
            <li><Icon name="list" size={15} />{total} questões</li>
            <li><Icon name="clock" size={15} />~{Math.max(1, Math.round(total * 0.75))} min</li>
            {progress?.quizCompletedAt && progress.quizLastTotal ? (
              <li><Icon name="star" size={15} />Último: {progress.quizLastCorrect}/{progress.quizLastTotal} · melhor: {best}/{progress.quizLastTotal}</li>
            ) : null}
          </ul>
          <button type="button" className="btn btn-primary w-full sm:w-auto" onClick={start}>
            {progress?.quizCompletedAt ? "Refazer o teste" : "Começar o teste"} <Icon name="arrowRight" size={18} />
          </button>
        </div>
      )}

      {phase === "running" && question && (
        <div className="quiz__body">
          <QuizQuestion
            key={question.id}
            question={question}
            number={index + 1}
            total={total}
            selected={selected}
            onSelect={setSelected}
            result={result}
            disabled={Boolean(result) || pending}
          />
          {!result && (
            <div className="quiz__submit">
              <button type="button" className="btn btn-primary w-full" disabled={!selected || pending} onClick={submit}>
                {pending ? "Corrigindo…" : "Conferir resposta"}
              </button>
              {error && <p className="mt-2 text-sm font-semibold text-bad" role="alert">{error}</p>}
            </div>
          )}
          {result && (
            <QuizFeedback
              result={result}
              correctLabel={question.options.find((option) => option.id === result.correctOptionId)?.label ?? ""}
              section={sections.find((section) => section.id === question.sectionKey) ?? null}
              isLast={index === total - 1}
              sectionBase={sectionBase}
              onNext={advance}
            />
          )}
        </div>
      )}

      {phase === "result" && (
        <QuizResult
          correct={summary?.correct ?? localCorrect}
          total={summary?.total ?? total}
          best={summary?.best ?? null}
          questions={questions}
          outcomes={outcomes}
          sections={sections}
          onRetry={start}
          next={next}
          saving={pending && !summary}
          saveError={saveError}
          sectionBase={sectionBase}
        />
      )}
    </section>
  );
}
