import type { Metadata } from "next";
import { requireAccess } from "@/core/auth/guard";
import { vertical } from "@/vertical/config";
import { offer } from "@/vertical/offer";
import { CheckoutButton } from "@/vertical/landing/CheckoutButton";

export const metadata: Metadata = { title: "Plano" };
export default async function PlanPage() {
  const { plan } = await requireAccess(vertical.productKey);
  const configured = offer.plans.find((item) => item.key === plan.key);
  return <div className="max-w-xl"><header><p className="text-xs font-extrabold uppercase tracking-[0.14em] text-brand">Direito de acesso</p><h1 className="mt-2 text-2xl font-black">Seu plano</h1></header><section className="card mt-6 overflow-hidden"><div className="bg-brand p-5 text-white"><p className="text-xs font-bold uppercase tracking-[0.14em] text-white/70">Plano ativo</p><h2 className="mt-2 text-2xl font-black">{plan.name}</h2></div><div className="p-5"><ul className="space-y-3 text-sm">{(configured?.includes ?? ["Acesso ao conteúdo publicado"]).map((item) => <li key={item} className="flex gap-2"><span className="text-ok">✓</span>{item}</li>)}</ul></div></section><p className="mt-4 text-xs leading-relaxed text-body">O acesso é calculado pelos direitos ativos ligados à sua compra. Reembolso ou chargeback revoga o direito sem apagar seu histórico de estudo.</p>{configured && !configured.checkoutUrl && <CheckoutButton url="" className="btn btn-secondary mt-5 w-full">Checkout em configuração</CheckoutButton>}</div>;
}

