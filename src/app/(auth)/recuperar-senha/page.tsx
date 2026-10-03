import type { Metadata } from "next";
import Link from "next/link";
import { AuthForm } from "@/components/auth/AuthForm";
import { requestPasswordReset } from "../actions";

export const metadata: Metadata = { title: "Recuperar senha" };
export default function ResetPage() {
  return <>
    <h1 className="text-2xl font-extrabold tracking-tight">Recupere sua senha</h1>
    <p className="mt-2 text-sm leading-relaxed text-body">Enviaremos um link seguro para o seu e-mail.</p>
    <AuthForm mode="reset" action={requestPasswordReset} />
    <Link href="/login" className="mt-4 block text-center text-sm font-bold text-brand">Voltar ao login</Link>
  </>;
}

