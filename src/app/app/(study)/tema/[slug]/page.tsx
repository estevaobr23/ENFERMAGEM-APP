import type { Metadata } from "next";
import { getStudyOverview, getTopicDetail } from "@/core/study/data";
import { TopicView } from "@/components/topic/TopicView";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const { topics } = await getStudyOverview();
  return { title: topics.find((topic) => topic.slug === slug)?.title ?? "Tema" };
}

export default async function TopicPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const [detail, { pending }] = await Promise.all([getTopicDetail(slug), getStudyOverview()]);
  return <TopicView detail={detail} pendingCount={pending.filter((item) => item.topicId === detail.topic.id).length} />;
}
