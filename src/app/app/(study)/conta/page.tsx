import type { Metadata } from "next";
import Link from "next/link";
import { requireAccess } from "@/core/auth/guard";
import { vertical } from "@/vertical/config";
import { PageHeader } from "@/components/study/Cards";
import { Icon, type IconName } from "@/components/ui/Icon";

export const metadata: Metadata = { title: "Conta" };

const LINKS: { href: string; label: string; icon: IconName }[] = [
  { href: "/app/plano", label: "Plano e acesso", icon: "shield" },
  { href: "/app/favoritos", label: "Temas favoritos", icon: "star" },
  { href: "/app/favoritos?aba=pontos", label: "Pontos salvos", icon: "bookmark" },
  { href: "/app/revisoes", label: "Revisar novamente", icon: "refresh" },
  { href: "/app/questoes", label: "Praticar questões", icon: "target" },
];

export default async function AccountPage() {
  const { user, plan } = await requireAccess(vertical.productKey);
  const name = user.user_metadata?.name as string | undefined;
  return (
    <div className="page page--narrow">
      <PageHeader eyebrow="Sua conta" title="Conta e acesso" />
      <section className="account-card">
        <span className="account-card__avatar" aria-hidden>{(name || user.email || "A").slice(0, 1).toUpperCase()}</span>
        <div className="min-w-0">
          <b className="block truncate text-lg">{name ?? "Estudante"}</b>
          <p className="break-all text-sm text-body">{user.email}</p>
          <span className="account-card__plan"><Icon name="check" size={13} strokeWidth={3} /> {plan.name}</span>
        </div>
      </section>
      <ul className="menu-list">
        {LINKS.map((link) => (
          <li key={link.href}>
            <Link href={link.href}><Icon name={link.icon} size={18} /><span>{link.label}</span><Icon name="chevronRight" size={16} className="ml-auto text-muted" /></Link>
          </li>
        ))}
      </ul>
      <form action="/auth/sair" method="post" className="mt-4">
        <button className="btn btn-ghost w-full text-bad"><Icon name="logout" size={18} /> Sair da conta</button>
      </form>
    </div>
  );
}
