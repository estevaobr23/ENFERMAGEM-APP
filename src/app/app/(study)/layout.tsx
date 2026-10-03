import type { ReactNode } from "react";
import { getStudyOverview } from "@/core/study/data";
import { buildStudyIndex } from "@/core/study/insights";
import { AppShell } from "@/components/app/AppShell";
import "./study.css";

export default async function StudyLayout({ children }: { children: ReactNode }) {
  const overview = await getStudyOverview();
  const { access, categories, pending } = overview;
  const index = buildStudyIndex(overview);
  const user = access.user;
  return (
    <AppShell
      categories={categories.map((category) => ({
        slug: category.slug,
        shortTitle: category.shortTitle,
        tone: category.tone,
        completion: index.categoryStats(category.id).completion,
      }))}
      pendingCount={new Set(pending.map((item) => item.topicId)).size}
      initial={(user.user_metadata?.name || user.email || "A").slice(0, 1).toUpperCase()}
      email={user.email ?? ""}
    >
      {children}
    </AppShell>
  );
}
