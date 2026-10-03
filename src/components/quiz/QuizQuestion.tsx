"use client";

import type { AnswerResult, StudyQuestion } from "@/core/study/types";
import { Icon } from "@/components/ui/Icon";

export type SectionRef = { id: string; title: string };

const DIFFICULTY: Record<string, string> = { facil: "Fácil", media: "Média", dificil: "Difícil" };

/** Enunciado + alternativas como alvos grandes de toque; depois da resposta, marca certa/errada. */
export function QuizQuestion({ question, number, total, selected, onSelect, result, disabled }: {
  question: StudyQuestion;
  number: number;
  total: number;
  selected: string;
  onSelect: (optionId: string) => void;
  result: AnswerResult | null;
  disabled: boolean;
}) {
  return (
    <div className="qq" data-testid="question-card">
      <div className="qq__meta">
        <span className="qq__count">Questão {number} de {total}</span>
        {question.difficulty && <span className="qq__diff">{DIFFICULTY[question.difficulty] ?? question.difficulty}</span>}
      </div>
      <h3 className="qq__stem" id={`q-${question.id}`}>{question.stem}</h3>
      <fieldset className="qq__options" disabled={disabled} aria-labelledby={`q-${question.id}`}>
        {question.options.map((option) => {
          const checked = selected === option.id;
          const correct = result?.correctOptionId === option.id;
          const wrong = Boolean(result && checked && !result.isCorrect);
          const state = correct ? "is-correct" : wrong ? "is-wrong" : checked ? "is-checked" : result ? "is-dim" : "";
          return (
            <label key={option.id} className={`qq__option ${state}`}>
              <input type="radio" name={`question-${question.id}`} value={option.id} checked={checked} onChange={() => onSelect(option.id)} className="sr-only" />
              <span className="qq__letter" aria-hidden>
                {correct ? <Icon name="check" size={15} strokeWidth={3} /> : wrong ? <Icon name="x" size={15} strokeWidth={3} /> : option.label}
              </span>
              <span className="qq__text"><span className="sr-only">{option.label}) </span>{option.text}</span>
            </label>
          );
        })}
      </fieldset>
    </div>
  );
}

export function QuizFeedback({ result, correctLabel, section, isLast, onNext, sectionBase = "" }: {
  result: AnswerResult;
  correctLabel: string;
  section: SectionRef | null;
  isLast: boolean;
  onNext: () => void;
  sectionBase?: string;
}) {
  return (
    <div className={`qf ${result.isCorrect ? "qf--ok" : "qf--bad"}`} aria-live="polite">
      <p className="qf__verdict">
        <span className="qf__badge">{result.isCorrect ? <Icon name="check" size={16} strokeWidth={3} /> : <Icon name="x" size={16} strokeWidth={3} />}</span>
        {result.isCorrect ? "Você acertou!" : `Ainda não. A resposta certa é a ${correctLabel}.`}
      </p>
      <p className="qf__explain">{result.explanation}</p>
      {!result.isCorrect && (
        <p className="qf__queued"><Icon name="refresh" size={14} /> Esse ponto entrou em Revisar novamente.</p>
      )}
      <div className="qf__actions">
        {section && !result.isCorrect && (
          <a href={`${sectionBase}#sec-${section.id}`} className="btn btn-secondary qf__review"><Icon name="book" size={16} /> Rever: {section.title}</a>
        )}
        <button type="button" className="btn btn-primary" onClick={onNext} autoFocus>
          {isLast ? "Ver resultado" : "Próxima questão"} <Icon name="arrowRight" size={18} />
        </button>
      </div>
    </div>
  );
}
