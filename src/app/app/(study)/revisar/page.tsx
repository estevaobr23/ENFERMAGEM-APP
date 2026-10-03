import type { Metadata } from "next";
import { EmptyState } from "@/components/study/EmptyState";
import { TopicView } from "@/components/topic/TopicView";
import { getStudyOverview, getTopicDetail } from "@/core/study/data";
import { buildStudyIndex } from "@/core/study/insights";
import { Icon } from "@/components/ui/Icon";

export const metadata: Metadata = { title: "Revisar agora" };

/** "Revisar agora": abre o tema que a fila transparente escolheu, com o motivo. */
export default async function ReviewPage() {
  const overview = await getStudyOverview();
  const index = buildStudyIndex(overview);
  const next = index.ranked[0];
  if (!next) return <EmptyState title="Tudo revisado por enquanto" text="Volte depois ou pratique mais questões para reforçar o conteúdo." href="/app/questoes" action="Praticar questões" />;
  const detail = await getTopicDetail(next.slug);
  return (
    <TopicView
      detail={detail}
      pendingCount={index.pendingOf(detail.topic.id)}
      context={next.reason.kind === "wrong" ? "retry" : "review"}
      banner={
        <div className="pick-banner">
          <Icon name="sparkles" size={18} />
          <div><small>Selecionado para você</small><p>{next.reason.label}</p></div>
        </div>
      }
    />
  );
}
