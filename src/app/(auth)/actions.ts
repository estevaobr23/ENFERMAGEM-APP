"use server";

import { randomBytes } from "node:crypto";
import { redirect } from "next/navigation";
import { createAdminClient } from "@/core/supabase/admin";
import { createClient } from "@/core/supabase/server";
import { safeNext } from "@/core/auth/guard";

export type AuthState = { error?: string; email?: string } | undefined;
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function readEmail(formData: FormData) {
  return String(formData.get("email") ?? "").trim().toLowerCase();
}

/**
 * Login sem senha: só o e-mail usado na compra. Exige entitlement ativo —
 * quem não comprou não entra, mesmo sabendo o e-mail de alguém.
 * A senha usada no signInWithPassword é gerada por requisição e nunca sai
 * do servidor; ela existe só porque o Supabase Auth exige alguma credencial.
 */
export async function enterByEmail(_: AuthState, formData: FormData): Promise<AuthState> {
  const email = readEmail(formData);
  if (!EMAIL.test(email)) return { error: "Informe um e-mail válido.", email };

  const admin = createAdminClient();

  const { count } = await admin
    .from("entitlements")
    .select("id", { count: "exact", head: true })
    .eq("buyer_email", email)
    .eq("status", "active");

  if (!count) {
    return { error: "Não encontramos uma compra ativa com este e-mail. Confira se digitou o mesmo e-mail usado no pagamento.", email };
  }

  const password = randomBytes(24).toString("base64url");

  const { data: userId } = await admin.rpc("get_user_id_by_email", { p_email: email });

  if (userId) {
    await admin.auth.admin.updateUserById(userId, { password });
  } else {
    const { error: createError } = await admin.auth.admin.createUser({ email, password, email_confirm: true });
    if (createError) return { error: "Não foi possível liberar seu acesso agora. Tente novamente em instantes.", email };
  }

  const supabase = await createClient();
  const { error: signInError } = await supabase.auth.signInWithPassword({ email, password });
  if (signInError) return { error: "Não foi possível entrar agora. Tente novamente em instantes.", email };

  await supabase.rpc("claim_my_entitlements");

  redirect(safeNext(String(formData.get("redirect") ?? "")));
}
