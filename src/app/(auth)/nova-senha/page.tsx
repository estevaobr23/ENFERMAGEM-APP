import type { Metadata } from "next";
import { AuthForm } from "@/components/auth/AuthForm";
import { updatePassword } from "../actions";

export const metadata: Metadata = { title: "Nova senha" };
export default function NewPasswordPage() {
  return <>
    <h1 className="text-2xl font-extrabold tracking-tight">Crie uma nova senha</h1>
    <p className="mt-2 text-sm leading-relaxed text-body">Use pelo menos 8 caracteres.</p>
    <AuthForm mode="password" action={updatePassword} />
  </>;
}

