"use client";

import Link from "next/link";
import type { StudyQuestion } from "@/core/study/types";
import { Icon } from "@/components/ui/Icon";
import type { SectionRef } from "./QuizQuestion";

function verdict(pct: number) {
  if (pct === 100) return { title: "Tema dominado!", text: "Você acertou tudo. Volte em alguns dias para manter fresco." };
  if (pct >= 60) return { title: "Bom resultado", text: "Revise os pontos abaixo para fechar as lacunas." };
  return { title: "Vale revisar", text: "Releia as seções indicadas e refaça o teste — é assim que fixa." };
}

/** Placar, questão a questão, e as seções a revisar (ligadas às questões erradas). */
export function QuizResult({ correct, total, best, questions, outcomes, sections, onRetry, next, saving, saveError, sectionBase = "" }: {
  correct: number;
  total: number;
  best: number | null;
  questions: StudyQuestion[];
  outcomes: Record<string, boolean>;
  sections: SectionRef[];
  onRetry: () => void;
  next: { slug: string; title: string } | null;
  saving: boolean;
  saveError: string;
  sectionBase?: string;
}) {
  const pct = total ? Math.round((correct / total) * 100) : 0;
  const v = verdict(pct);
  const wrongSections = [...new Set(questions.filter((question) => outcomes[question.id] === false).map((question) => question.sectionKey).filter(Boolean))]
    .map((key) => sections.find((section) => section.id === key))
    .filter((section): section is SectionRef => Boolean(section));

  return (
    <div className="qr" aria-live="polite">
      <div className="qr__score">
        <div className="qr__ring" style={{ ["--pct" as string]: pct }} role="img" aria-label={`${correct} de ${total} acertos`}>
          <span><b>{correct}/{total}</b><small>acertos</small></span>
        </div>
        <div>
          <p className="qr__title">{v.title}</p>
          <p className="qr__text">{v.text}</p>
          <p className="qr__saved">
            {saving ? "Salvando resultado…" : saveError ? <span className="text-bad">{saveError}</span> : best != null ? <>Resultado salvo · melhor marca: <b>{best}/{total}</b></> : null}
          </p>
        </div>
      </div>

      <ol className="qr__list">
        {questions.map((question, index) => (
          <li key={question.id} className={outcomes[question.id] ? "is-ok" : "is-bad"}>
            <span className="qr__mark">{outcomes[question.id] ? <Icon name="check" size={13} strokeWidth={3} /> : <Icon name="x" size={13} strokeWidth={3} />}</span>
            <span className="qr__q"><b>{index + 1}.</b> {question.stem}</span>
          </li>
        ))}
      </ol>

      {wrongSections.length > 0 && (
        <div className="qr__review">
          <p className="qr__review-title"><Icon name="target" size={16} /> Revise antes de seguir</p>
          <ul>
            {wrongSections.map((section) => (
              <li key={section.id}><a href={`${sectionBase}#sec-${section.id}`}><Icon name="book" size={15} />{section.title}<Icon name="arrowRight" size={15} /></a></li>
            ))}
          </ul>
        </div>
      )}

      <div className="qr__actions">
        <button type="button" className="btn btn-secondary" onClick={onRetry}><Icon name="refresh" size={17} /> Refazer o teste</button>
        {next ? (
          <Link href={`/app/tema/${next.slug}`} className="btn btn-primary">Próximo tema <Icon name="arrowRight" size={18} /></Link>
        ) : (
          <Link href="/app/categorias" className="btn btn-primary">Ver matérias <Icon name="arrowRight" size={18} /></Link>
        )}
      </div>
    </div>
  );
}
