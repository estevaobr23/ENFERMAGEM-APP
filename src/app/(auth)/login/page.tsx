import type { Metadata } from "next";
import { AuthForm } from "@/components/auth/AuthForm";
import { enterByEmail } from "../actions";

export const metadata: Metadata = { title: "Entrar" };

export default async function LoginPage({ searchParams }: { searchParams: Promise<{ redirect?: string }> }) {
  const params = await searchParams;
  return <>
    <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-brand">Área do aluno</p>
    <h1 className="mt-2 text-2xl font-extrabold tracking-tight">Continue sua revisão</h1>
    <p className="mt-2 text-sm leading-relaxed text-body">Entre com o mesmo e-mail usado na compra — sem senha.</p>
    <AuthForm action={enterByEmail} redirectTo={params.redirect ?? "/app"} />
  </>;
}
