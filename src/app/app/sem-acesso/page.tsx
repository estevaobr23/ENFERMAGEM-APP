import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { getAccess } from "@/core/auth/guard";
import { vertical } from "@/vertical/config";
import { Logo } from "@/vertical/brand";
import { supportEmail } from "@/vertical/offer";

export const metadata: Metadata = { title: "Acesso não encontrado" };
export default async function NoAccessPage() {
  const { user, plan } = await getAccess(vertical.productKey);
  if (plan) redirect("/app");
  return <main className="ruled flex min-h-dvh flex-col items-center px-4 py-10"><Logo className="mb-8" /><div className="card w-full max-w-md p-6 text-center sm:p-8"><span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-hl-soft text-2xl" aria-hidden>⌕</span><h1 className="mt-4 text-2xl font-black">Não encontramos sua compra</h1><p className="mt-3 text-sm leading-relaxed text-body">Você entrou com <b className="break-all text-ink">{user.email}</b>, mas não há um acesso ativo ligado a este e-mail.</p><ul className="mt-5 space-y-2 rounded-xl bg-paper-deep p-4 text-left text-sm text-body"><li>• Use <b className="text-ink">o mesmo e-mail da compra</b>.</li><li>• Pagamentos podem levar alguns minutos para chegar pelo webhook.</li><li>• Reembolso ou chargeback encerra o acesso.</li></ul><div className="mt-6 flex flex-col gap-2"><Link href="/app" className="btn btn-primary">Já paguei, verificar novamente</Link><Link href="/#planos" className="btn btn-secondary">Ver planos</Link><form action="/auth/sair" method="post"><button className="btn btn-ghost w-full">Entrar com outro e-mail</button></form></div>{supportEmail && <p className="mt-6 text-xs text-body">Ajuda: <a href={`mailto:${supportEmail}`} className="font-bold text-brand">{supportEmail}</a></p>}</div></main>;
}

