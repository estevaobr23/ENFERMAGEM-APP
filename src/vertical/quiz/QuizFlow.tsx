"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { UtmCapture } from "@/vertical/landing/CheckoutButton";
import { CategoryEmblem } from "@/components/ui/CategoryEmblem";
import { QUESTIONS, AREA_OPTIONS, scoreAnswers, type Answers } from "./questions";
import { track } from "./track";
import { QuizResult } from "./QuizResult";

const STORAGE_KEY = "revisao_quiz_v1";
type Saved = { step: number; answers: Answers; done: boolean };

/** montou no cliente? (serve só para não divergir do HTML do servidor) */
const subscribeNoop = () => () => {};

function readSaved(): Saved | null {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Saved;
    if (typeof parsed?.step !== "number" || typeof parsed?.answers !== "object") return null;
    return parsed;
  } catch {
    return null;
  }
}

/** step: -1 = intro · 0..N-1 = perguntas · N = resultado */
export function QuizFlow() {
  // lê o progresso salvo no 1º render do cliente (no servidor não há storage,
  // por isso o retorno nulo até montar — o HTML dos dois lados confere)
  const [state, setState] = useState<Saved>(() => {
    if (typeof window === "undefined") return { step: -1, answers: {}, done: false };
    const saved = readSaved();
    return saved ? { ...saved, step: saved.done ? QUESTIONS.length : saved.step } : { step: -1, answers: {}, done: false };
  });
  const mounted = useSyncExternalStore(subscribeNoop, () => true, () => false);
  const top = useRef<HTMLDivElement>(null);
  const { step, answers } = state;

  useEffect(() => { track("quiz_view"); }, []);

  useEffect(() => {
    if (!mounted) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch { /* storage bloqueado: o quiz segue, só não retoma */ }
  }, [mounted, state]);

  const goTo = (next: number, nextAnswers: Answers = answers) => {
    setState({ step: next, answers: nextAnswers, done: next >= QUESTIONS.length });
    top.current?.scrollIntoView({ block: "start", behavior: "smooth" });
  };

  if (!mounted) return <div className="quiz-boot" aria-hidden />;

  const question = QUESTIONS[step];
  const picked = question ? answers[question.id] ?? [] : [];
  const isLast = step === QUESTIONS.length - 1;

  const choose = (index: number) => {
    if (!question) return;
    const multi = question.multi;
    const next = multi
      ? picked.includes(index) ? picked.filter((i) => i !== index) : [...picked, index]
      : [index];
    const nextAnswers = { ...answers, [question.id]: next };
    setState((prev) => ({ ...prev, answers: nextAnswers }));
    track("quiz_question_answered", { question: step + 1, question_id: question.id, option: index, multi: Boolean(multi) });
    // escolha única avança sozinha; múltipla espera o botão
    if (!multi) {
      window.setTimeout(() => {
        if (isLast) track("quiz_complete");
        goTo(step + 1, nextAnswers);
      }, 220);
    }
  };

  const advance = () => {
    if (isLast) track("quiz_complete");
    goTo(step + 1);
  };

  const restart = () => goTo(-1, {});

  return (
    <div className="lp quiz" ref={top}>
      <UtmCapture />

      {step === -1 && (
        <section className="surf surf-auth quiz-screen quiz-screen--full">
          <div className="quiz-box text-center">
            <p className="quiz-eyebrow">Revisão Técnico · Enfermagem</p>
            <h1 className="quiz-h1">
              Descubra o que mais está <span className="hero-hl">atrapalhando sua revisão</span> para a prova de Técnico de Enfermagem
            </h1>
            <p className="quiz-sub">Responda 7 perguntas rápidas e veja qual parte da sua revisão precisa de mais atenção.</p>
            <button
              type="button"
              className="quiz-cta"
              onClick={() => { track("quiz_start"); goTo(0); }}
            >
              COMEÇAR O QUIZ <span aria-hidden>➔</span>
            </button>
            <p className="quiz-note">⏱ Leva menos de 2 minutos · sem cadastro</p>
          </div>
        </section>
      )}

      {question && (
        <section className="surf surf-neutral quiz-screen quiz-screen--full">
          <div className="quiz-box">
            <div className="quiz-progress">
              <div className="quiz-progress__head">
                <span>Pergunta {step + 1} de {QUESTIONS.length}</span>
                <span>{Math.round(((step + 1) / QUESTIONS.length) * 100)}%</span>
              </div>
              <div className="quiz-progress__bar"><span style={{ width: `${((step + 1) / QUESTIONS.length) * 100}%` }} /></div>
            </div>

            <h2 className="quiz-question">{question.title}</h2>
            {question.multi && <p className="quiz-hint">Pode marcar mais de uma.</p>}

            <div className={question.multi ? "quiz-areas" : "quiz-options"}>
              {question.options.map((option, index) => {
                const on = picked.includes(index);
                return (
                  <button
                    key={option.label}
                    type="button"
                    className={`${question.multi ? "quiz-area" : "quiz-option"} ${on ? "is-on" : ""}`}
                    aria-pressed={on}
                    onClick={() => choose(index)}
                  >
                    {question.multi && <CategoryEmblem slug={AREA_OPTIONS[index].slug} size={40} />}
                    <span>{option.label}</span>
                    <i className="quiz-check" aria-hidden>✓</i>
                  </button>
                );
              })}
            </div>

            <div className="quiz-nav">
              {step > 0 && <button type="button" className="quiz-back" onClick={() => goTo(step - 1)}>← Voltar</button>}
              {question.multi && (
                <button type="button" className="quiz-cta quiz-cta--sm" disabled={!picked.length} onClick={advance}>
                  {isLast ? "VER MEU RESULTADO" : "CONTINUAR"} <span aria-hidden>➔</span>
                </button>
              )}
            </div>
          </div>
        </section>
      )}

      {step >= QUESTIONS.length && <QuizResult result={scoreAnswers(answers)} answers={answers} onRestart={restart} />}
    </div>
  );
}
