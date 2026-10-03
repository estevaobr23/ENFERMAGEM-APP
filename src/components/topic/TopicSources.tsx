import type { TopicSource } from "@/core/study/types";
import { Icon } from "@/components/ui/Icon";

const fmt = (iso: string) => new Intl.DateTimeFormat("pt-BR").format(new Date(`${iso.slice(0, 10)}T12:00:00`));

export function TopicSources({ sources, lastReviewedAt }: { sources: TopicSource[]; lastReviewedAt: string | null }) {
  return (
    <section className="sources" aria-labelledby="fontes-title">
      <h2 id="fontes-title" className="sources__title"><Icon name="scale" size={16} /> Fontes deste tema</h2>
      <ul className="sources__list">
        {sources.map((source) => (
          <li key={source.id}>
            <a href={source.url} target="_blank" rel="noreferrer">{source.title} <Icon name="arrowRight" size={13} className="-rotate-45" /></a>
            <p>{source.organization}{source.locator ? ` · ${source.locator}` : ""} · acesso em {fmt(source.accessedAt)}</p>
          </li>
        ))}
      </ul>
      <p className="sources__note">
        Conteúdo educacional para concurso{lastReviewedAt ? `, conferido na fonte em ${fmt(lastReviewedAt)}` : ""}. Consulte a norma vigente e os protocolos da sua instituição; não use este material para decidir conduta clínica.
      </p>
    </section>
  );
}
