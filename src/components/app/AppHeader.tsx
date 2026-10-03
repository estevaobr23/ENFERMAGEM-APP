import Link from "next/link";
import { Logo } from "@/vertical/brand";
import { Icon } from "@/components/ui/Icon";
import { SearchBar } from "@/components/study/SearchBar";

/** Barra superior: no mobile, marca + atalhos; no desktop, busca + conta (a marca fica na sidebar). */
export function AppHeader({ initial, email }: { initial: string; email: string }) {
  return (
    <header className="app-header">
      <div className="app-header__inner">
        <div className="lg:hidden"><Logo href="/app" /></div>
        <div className="hidden w-full max-w-md lg:block"><SearchBar compact /></div>
        <div className="ml-auto flex items-center gap-1.5">
          <Link href="/app/busca" className="icon-btn lg:hidden" aria-label="Buscar"><Icon name="search" /></Link>
          <Link href="/app/revisoes" className="icon-btn" aria-label="Revisar novamente"><Icon name="refresh" /></Link>
          <Link href="/app/conta" className="avatar" aria-label={`Conta de ${email}`}>{initial}</Link>
        </div>
      </div>
    </header>
  );
}
