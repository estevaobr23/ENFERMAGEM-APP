import type { ReactNode } from "react";
import type { TopicDetail } from "@/core/study/types";
import { topicState } from "@/core/study/insights";
import { TopicQuiz } from "@/components/quiz/TopicQuiz";
import { TopicHeader } from "./TopicHeader";
import { TopicSection } from "./TopicSection";
import { TopicSummary } from "./TopicSummary";
import { TopicSources } from "./TopicSources";
import { TopicPager } from "./TopicPager";
import { TopicTocBar, TopicTocRail, type TocItem } from "./TopicToc";
import { TopicIllustrations } from "./TopicIllustrations";
import { visualAssetsForTopic } from "@/vertical/content/visual-assets";

/**
 * A tela de tema: cabeçalho → prancha ilustrada → seções → resumo → quiz.
 * Mobile: índice em chips fixo no topo. Desktop: índice fixo à direita.
 */
export function TopicView({ detail, pendingCount, context = "topic", banner }: {
  detail: TopicDetail;
  pendingCount: number;
  context?: "topic" | "review" | "practice" | "retry";
  banner?: ReactNode;
}) {
  const { topic, category, sections, sources, questions, favorite, savedSections, progress, siblings } = detail;
  const state = topicState(progress ?? undefined, pendingCount);
  const saved = new Set(savedSections);
  const visualAssets = visualAssetsForTopic(topic.slug);

  const toc: TocItem[] = [
    ...(visualAssets.length ? [{ id: "ilustracoes", label: "Prancha ilustrada", kind: "mapa" as const }] : []),
    ...sections.map((section, index) => ({ id: `sec-${section.id}`, label: section.title, kind: "secao" as const, number: index + 1 })),
    { id: "resumo", label: "Resumo final", kind: "resumo" },
    ...(questions.length ? [{ id: "quiz", label: "Teste", kind: "quiz" as const }] : []),
  ];

  return (
    <div className="topic">
      {banner}
      <TopicHeader
        topic={topic}
        category={category}
        progress={progress}
        state={state}
        favorite={favorite}
        sectionCount={sections.length}
        questionCount={questions.length}
        position={siblings}
      />

      <TopicTocBar items={toc} />

      <div className="topic__grid">
        <div className="topic__main">
          <TopicIllustrations assets={visualAssets} />

          {sections.map((section, index) => (
            <TopicSection
              key={section.id}
              section={section}
              number={index + 1}
              topicId={topic.id}
              saved={saved.has(section.id)}
              source={section.source != null ? sources[section.source] : undefined}
            />
          ))}

          <TopicSummary topicId={topic.id} keyPoints={topic.keyPoints} summary={topic.summary} alreadyReviewed={Boolean(progress?.lastReviewedAt)} />

          <TopicQuiz
            topicId={topic.id}
            questions={questions}
            sections={sections.map((section) => ({ id: section.id, title: section.title }))}
            progress={progress}
            next={siblings.next ? { slug: siblings.next.slug, title: siblings.next.title } : null}
            context={context}
          />

          <TopicSources sources={sources} lastReviewedAt={topic.lastReviewedAt} />
          <TopicPager prev={siblings.prev} next={siblings.next} />
        </div>
        <aside className="topic__rail"><TopicTocRail items={toc} /></aside>
      </div>
    </div>
  );
}
