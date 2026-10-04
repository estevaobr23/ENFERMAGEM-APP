"use client";

import { useActionState } from "react";
import type { AuthState } from "@/app/(auth)/actions";

type AuthAction = (state: AuthState, formData: FormData) => Promise<AuthState>;

export function AuthForm({ action, redirectTo = "", initialEmail = "" }: {
  action: AuthAction;
  redirectTo?: string;
  initialEmail?: string;
}) {
  const [state, formAction, pending] = useActionState(action, undefined);

  return (
    <form action={formAction} className="mt-6 space-y-4">
      {redirectTo && <input type="hidden" name="redirect" value={redirectTo} />}
      <label className="block text-sm font-bold">E-mail da compra
        <input className="input mt-1.5" name="email" type="email" defaultValue={state?.email ?? initialEmail} autoComplete="email" required autoFocus />
      </label>
      {state?.error && <p className="rounded-xl bg-bad-soft p-3 text-sm font-semibold text-bad" role="alert">{state.error}</p>}
      <button className="btn btn-primary w-full" disabled={pending}>{pending ? "Entrando…" : "Entrar no aplicativo"}</button>
    </form>
  );
}
