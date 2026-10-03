"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/vertical/brand";
import { Icon } from "@/components/ui/Icon";
import { CategoryEmblem } from "@/components/ui/CategoryEmblem";
import { DESKTOP_NAV, isActive } from "./nav";

export type SidebarCategory = { slug: string; shortTitle: string; tone: string; completion: number };

export function DesktopSidebar({ categories, pendingCount }: { categories: SidebarCategory[]; pendingCount: number }) {
  const pathname = usePathname();
  return (
    <aside className="sidebar hidden lg:flex" aria-label="Menu do aplicativo">
      <div className="sidebar__brand"><Logo href="/app" /></div>
      <nav className="sidebar__nav" aria-label="Navegação principal">
        {DESKTOP_NAV.map((item) => {
          const active = isActive(pathname, item);
          return (
            <Link key={item.href} href={item.href} className={`sidebar__link ${active ? "is-active" : ""}`} aria-current={active ? "page" : undefined}>
              <Icon name={item.icon} size={18} />
              <span>{item.label}</span>
              {item.href === "/app/revisoes" && pendingCount > 0 && <b className="sidebar__badge" aria-label={`${pendingCount} pendentes`}>{pendingCount}</b>}
            </Link>
          );
        })}
      </nav>
      <div className="sidebar__section">
        <p className="sidebar__heading">Suas matérias</p>
        <ul className="sidebar__cats">
          {categories.map((category) => {
            const href = `/app/categorias/${category.slug}`;
            const active = pathname === href;
            return (
              <li key={category.slug}>
                <Link href={href} className={`sidebar__cat tone-${category.tone} ${active ? "is-active" : ""}`} aria-current={active ? "page" : undefined}>
                  <span className="sidebar__cat-icon" aria-hidden><CategoryEmblem slug={category.slug} size={30} /></span>
                  <span className="min-w-0 flex-1 truncate">{category.shortTitle}</span>
                  <span className="sidebar__cat-meter" role="img" aria-label={`${category.completion}% concluído`}>
                    <span style={{ width: `${category.completion}%` }} />
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <Link href="/app/conta" className={`sidebar__link mt-auto ${pathname.startsWith("/app/conta") || pathname.startsWith("/app/plano") ? "is-active" : ""}`}>
        <Icon name="user" size={18} />
        <span>Conta e plano</span>
      </Link>
    </aside>
  );
}
