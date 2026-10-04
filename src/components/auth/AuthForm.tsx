"use client";

import { useActionState, useState, useTransition } from "react";
import Link from "next/link";
import type { AuthState } from "@/app/(auth)/actions";
import { resendConfirmation } from "@/app/(auth)/actions";
import { EmailSentHelp } from "./EmailSentHelp";

type AuthAction = (state: AuthState, formData: FormData) => Promise<AuthState>;

/*
 * Botão de reenvio: fica DENTRO do <form> de login (para aparecer junto do
 * erro "e-mail não confirmado"), então não pode ser outro <form> — HTML não
 * aceita <form> aninhado e o navegador acaba fazendo um submit nativo que
 * ignora o React. Chama a Server Action direto via useTransition.
 */
function ResendConfirmation({ email }: { email: string }) {
  const [pending, start] = useTransition();
  const [result, setResult] = useState<AuthState>(undefined);
  if (result?.sent) return <EmailSentHelp email={result.email ?? email} />;
  return (
    <button
      type="button"
      className="mt-2 text-sm font-bold text-brand underline underline-offset-2"
      disabled={pending}
      onClick={() => {
        const data = new FormData();
        data.set("email", email);
        start(async () => setResult(await resendConfirmation(undefined, data)));
      }}
    >
      {pending ? "Enviando…" : "Reenviar e-mail de confirmação"}
    </button>
  );
}

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

  // E-mail de confirmação/recuperação já enviado: o formulário some e só
  // fica o tutorial — reexibir os campos vazios ao lado da mensagem de
  // sucesso dava a impressão de que o envio tinha falhado.
  if (state?.sent) {
    return (
      <div className="mt-6">
        <p className="rounded-xl bg-ok-soft p-3 text-sm font-semibold leading-relaxed text-ok" role="status">{state.info}</p>
        <EmailSentHelp email={state.email ?? ""} />
        <p className="mt-5 text-center text-sm text-body">
          {isLogin ? <>Já confirmou? <Link className="font-bold text-brand" href="/login">Entrar</Link></> : <>Errou o e-mail? <Link className="font-bold text-brand" href={isSignup ? "/cadastro" : "/recuperar-senha"}>Tentar de novo</Link></>}
        </p>
      </div>
    );
  }

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
      {state?.error && !state.unconfirmed && <p className="rounded-xl bg-bad-soft p-3 text-sm font-semibold text-bad" role="alert">{state.error}</p>}
      {state?.error && state.unconfirmed && (
        <div className="rounded-xl bg-bad-soft p-3" role="alert">
          <p className="text-sm font-semibold text-bad">{state.error}</p>
          <ResendConfirmation email={state.email ?? ""} />
        </div>
      )}
      <button className="btn btn-primary w-full" disabled={pending}>{pending ? "Aguarde…" : isLogin ? "Entrar no aplicativo" : isSignup ? "Criar minha conta" : isReset ? "Enviar link" : "Salvar nova senha"}</button>
      {isLogin && <div className="flex items-center justify-between gap-3 text-sm"><Link className="font-semibold text-brand" href="/recuperar-senha">Esqueci minha senha</Link><Link className="font-semibold text-brand" href="/cadastro">Criar conta</Link></div>}
      {isSignup && <p className="text-center text-sm text-body">Já tem conta? <Link className="font-bold text-brand" href="/login">Entrar</Link></p>}
    </form>
  );
}

