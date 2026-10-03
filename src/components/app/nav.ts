import type { IconName } from "@/components/ui/Icon";

export type NavItem = { href: string; label: string; icon: IconName; exact?: boolean };

/** Bottom nav (mobile): 5 destinos, os mais usados durante o estudo. */
export const MOBILE_NAV: NavItem[] = [
  { href: "/app", label: "Início", icon: "home", exact: true },
  { href: "/app/categorias", label: "Matérias", icon: "layers" },
  { href: "/app/busca", label: "Buscar", icon: "search" },
  { href: "/app/favoritos", label: "Salvos", icon: "bookmark" },
  { href: "/app/progresso", label: "Progresso", icon: "chart" },
];

/** Sidebar (desktop): tudo, em dois grupos. */
export const DESKTOP_NAV: NavItem[] = [
  { href: "/app", label: "Início", icon: "home", exact: true },
  { href: "/app/categorias", label: "Matérias", icon: "layers" },
  { href: "/app/busca", label: "Buscar", icon: "search" },
  { href: "/app/revisar", label: "Revisar agora", icon: "play" },
  { href: "/app/revisoes", label: "Revisar novamente", icon: "refresh" },
  { href: "/app/questoes", label: "Praticar questões", icon: "target" },
  { href: "/app/favoritos", label: "Salvos", icon: "bookmark" },
  { href: "/app/progresso", label: "Progresso", icon: "chart" },
];

export function isActive(pathname: string, item: NavItem) {
  if (item.exact) return pathname === item.href;
  // tema pertence a "Matérias"
  if (item.href === "/app/categorias" && pathname.startsWith("/app/tema/")) return true;
  return pathname === item.href || pathname.startsWith(`${item.href}/`);
}
