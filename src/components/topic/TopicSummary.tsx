import { Icon } from "@/components/ui/Icon";
import { FinishReadingButton } from "./TopicActions";

/** Síntese final: os pontos-chave como fichas numeradas + leitura corrida opcional. */
export function TopicSummary({ topicId, keyPoints, summary, alreadyReviewed }: { topicId: string; keyPoints: string[]; summary: string; alreadyReviewed: boolean }) {
  return (
    <section id="resumo" className="summary" aria-labelledby="resumo-title">
      <header className="summary__head">
        <span className="summary__icon"><Icon name="list" size={18} /></span>
        <div>
          <p className="summary__eyebrow">Resumo final</p>
          <h2 id="resumo-title" className="summary__title">O que levar para a prova</h2>
        </div>
      </header>
      <ol className="summary__points">
        {keyPoints.map((point, index) => (
          <li key={point}>
            <span className="summary__n" aria-hidden>{index + 1}</span>
            <p>{point}</p>
          </li>
        ))}
      </ol>
      <details className="summary__full">
        <summary><Icon name="book" size={16} /> Ler o resumo corrido completo <Icon name="chevronDown" size={16} className="summary__chev" /></summary>
        <p>{summary}</p>
      </details>
      <FinishReadingButton topicId={topicId} alreadyReviewed={alreadyReviewed} />
    </section>
  );
}
