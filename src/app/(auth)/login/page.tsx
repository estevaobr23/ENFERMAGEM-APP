import type { Metadata } from "next";
import Link from "next/link";
import { AuthForm } from "@/components/auth/AuthForm";
import { signIn } from "../actions";

export const metadata: Metadata = { title: "Entrar" };

export default async function LoginPage({ searchParams }: { searchParams: Promise<{ redirect?: string; erro?: string }> }) {
  const params = await searchParams;
  return <>
    <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-brand">Área do aluno</p>
    <h1 className="mt-2 text-2xl font-extrabold tracking-tight">Continue sua revisão</h1>
    <p className="mt-2 text-sm leading-relaxed text-body">Entre com o mesmo e-mail usado na compra.</p>
    {params.erro === "link" && <p className="mt-4 rounded-xl bg-bad-soft p-3 text-sm font-semibold text-bad">Este link expirou ou já foi usado. Entre normalmente ou peça outro.</p>}
    <AuthForm mode="login" action={signIn} redirectTo={params.redirect ?? "/app"} />
    <p className="mt-5 text-center text-xs text-body">
      Acabou de comprar e ainda não confirmou o e-mail? <Link className="font-bold text-brand" href="/cadastro">Veja como confirmar</Link>
    </p>
  </>;
}

