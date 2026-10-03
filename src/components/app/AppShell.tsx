import type { ReactNode } from "react";
import { AppHeader } from "./AppHeader";
import { DesktopSidebar, type SidebarCategory } from "./DesktopSidebar";
import { MobileBottomNav } from "./MobileBottomNav";

/**
 * Esqueleto do app. Mobile: header + conteúdo + bottom nav.
 * Desktop (lg+): sidebar fixa à esquerda + header com busca + conteúdo.
 */
export function AppShell({ children, categories, pendingCount, initial, email }: {
  children: ReactNode;
  categories: SidebarCategory[];
  pendingCount: number;
  initial: string;
  email: string;
}) {
  return (
    <div className="app-shell">
      <DesktopSidebar categories={categories} pendingCount={pendingCount} />
      <div className="app-shell__main">
        <AppHeader initial={initial} email={email} />
        <main id="conteudo" className="app-content">{children}</main>
      </div>
      <MobileBottomNav />
    </div>
  );
}
