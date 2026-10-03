"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon } from "@/components/ui/Icon";
import { MOBILE_NAV, isActive } from "./nav";

export function MobileBottomNav() {
  const pathname = usePathname();
  return (
    <nav className="bottom-nav lg:hidden" aria-label="Navegação principal">
      {MOBILE_NAV.map((item) => {
        const active = isActive(pathname, item);
        return (
          <Link key={item.href} href={item.href} className={active ? "is-active" : ""} aria-current={active ? "page" : undefined}>
            <span className="bottom-nav__icon"><Icon name={item.icon} size={21} strokeWidth={active ? 2.4 : 2} /></span>
            <span className="bottom-nav__label">{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
