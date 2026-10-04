import type { Metadata } from "next";
import { AuthForm } from "@/components/auth/AuthForm";
import { signUp } from "../actions";

export const metadata: Metadata = { title: "Criar conta" };

export default async function SignupPage({ searchParams }: { searchParams: Promise<{ email?: string }> }) {
  const params = await searchParams;
  return <>
    <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-brand">Depois da compra</p>
    <h1 className="mt-2 text-2xl font-extrabold tracking-tight">Crie seu acesso</h1>
    <p className="mt-2 text-sm leading-relaxed text-body">Use exatamente o mesmo e-mail da compra. Depois de criar a conta, você recebe um e-mail de confirmação — <b className="text-ink">ele costuma cair no spam</b>, então vale a pena já deixar essa pasta aberta.</p>
    <AuthForm mode="signup" action={signUp} initialEmail={params.email ?? ""} />
  </>;
}

