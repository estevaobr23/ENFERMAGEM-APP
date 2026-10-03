"use client";

import { useActionState } from "react";
import Link from "next/link";
import type { AuthState } from "@/app/(auth)/actions";

type AuthAction = (state: AuthState, formData: FormData) => Promise<AuthState>;

export function AuthForm({ mode, action, redirectTo = "", initialEmail = "" }: {
  mode: "login" | "signup" | "reset" | "password";
  action: AuthAction;
  redirectTo?: string;
  initialEmail?: string;
}) {
  const [state, formAction, pending] = useActionState(action, undefined);
  const isLogin = mode === "login";
  const isSignup = mode === "signup";
  const isReset = mode === "reset";

  return (
    <form action={formAction} className="mt-6 space-y-4">
      {redirectTo && <input type="hidden" name="redirect" value={redirectTo} />}
      {isSignup && (
        <label className="block text-sm font-bold">Seu nome
          <input className="input mt-1.5" name="name" autoComplete="name" required maxLength={120} />
        </label>
      )}
      {mode !== "password" && (
        <label className="block text-sm font-bold">E-mail
          <input className="input mt-1.5" name="email" type="email" defaultValue={state?.email ?? initialEmail} autoComplete="email" required />
        </label>
      )}
      {!isReset && mode !== "password" && (
        <label className="block text-sm font-bold">Senha
          <input className="input mt-1.5" name="password" type="password" minLength={8} autoComplete={isSignup ? "new-password" : "current-password"} required />
        </label>
      )}
      {mode === "password" && <>
        <label className="block text-sm font-bold">Nova senha
          <input className="input mt-1.5" name="password" type="password" minLength={8} autoComplete="new-password" required />
        </label>
        <label className="block text-sm font-bold">Repita a nova senha
          <input className="input mt-1.5" name="confirm" type="password" minLength={8} autoComplete="new-password" required />
        </label>
      </>}
      {state?.error && <p className="rounded-xl bg-bad-soft p-3 text-sm font-semibold text-bad" role="alert">{state.error}</p>}
      {state?.info && <p className="rounded-xl bg-ok-soft p-3 text-sm font-semibold leading-relaxed text-ok" role="status">{state.info}</p>}
      <button className="btn btn-primary w-full" disabled={pending}>{pending ? "Aguarde…" : isLogin ? "Entrar no aplicativo" : isSignup ? "Criar minha conta" : isReset ? "Enviar link" : "Salvar nova senha"}</button>
      {isLogin && <div className="flex items-center justify-between gap-3 text-sm"><Link className="font-semibold text-brand" href="/recuperar-senha">Esqueci minha senha</Link><Link className="font-semibold text-brand" href="/cadastro">Criar conta</Link></div>}
      {isSignup && <p className="text-center text-sm text-body">Já tem conta? <Link className="font-bold text-brand" href="/login">Entrar</Link></p>}
    </form>
  );
}

