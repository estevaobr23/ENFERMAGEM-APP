import Link from "next/link";
import type { StudyTopic } from "@/core/study/types";
import { Icon } from "@/components/ui/Icon";

export function TopicPager({ prev, next }: { prev: StudyTopic | null; next: StudyTopic | null }) {
  if (!prev && !next) return null;
  return (
    <nav className="pager" aria-label="Outros temas">
      {prev ? (
        <Link href={`/app/tema/${prev.slug}`} className="pager__link">
          <small><Icon name="arrowLeft" size={14} /> Tema anterior</small>
          <b>{prev.title}</b>
        </Link>
      ) : <span />}
      {next && (
        <Link href={`/app/tema/${next.slug}`} className="pager__link pager__link--next">
          <small>Próximo tema <Icon name="arrowRight" size={14} /></small>
          <b>{next.title}</b>
        </Link>
      )}
    </nav>
  );
}
