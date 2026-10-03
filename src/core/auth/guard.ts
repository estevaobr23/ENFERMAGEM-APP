import "server-only";
import { cache } from "react";
import { redirect } from "next/navigation";
import type { User } from "@supabase/supabase-js";
import { createClient } from "@/core/supabase/server";

export type ActivePlan = { key: string; name: string; limits: Record<string, number>; features: string[] };
export type Access = { user: User; productId: string; plan: ActivePlan | null };

export const getUser = cache(async (): Promise<User | null> => {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  return user;
});

/**
 * Camada 2: sessão + direito ativo. O plano é SEMPRE calculado dos
 * entitlements (maior rank vence); nenhuma coluna editável decide acesso.
 * A camada 3 (RLS) repete a regra no banco: mesmo que esta tela erre, o
 * conteúdo não sai sem entitlement ativo.
 */
export const getAccess = cache(async (productKey: string): Promise<Access> => {
  const user = await getUser();
  if (!user) redirect("/login");

  const supabase = await createClient();
  // vincula compras feitas com este e-mail (só se o e-mail estiver confirmado)
  await supabase.rpc("claim_my_entitlements");

  const { data: product } = await supabase.from("products").select("id").eq("key", productKey).single();
  if (!product) throw new Error(`Produto ${productKey} não encontrado no banco (rode as migrations).`);

  const { data: ents } = await supabase
    .from("entitlements")
    .select("plan_id")
    .eq("product_id", product.id)
    .eq("status", "active");

  let plan: ActivePlan | null = null;
  const planIds = (ents ?? []).map((e) => e.plan_id);
  if (planIds.length) {
    const { data: plans } = await supabase
      .from("plans")
      .select("key, name, limits, features, rank")
      .in("id", planIds)
      .order("rank", { ascending: false })
      .limit(1);
    const p = plans?.[0];
    if (p) plan = { key: p.key, name: p.name, limits: (p.limits ?? {}) as Record<string, number>, features: p.features };
  }
  return { user, productId: product.id, plan };
});

export async function requireAccess(productKey: string) {
  const access = await getAccess(productKey);
  if (!access.plan) redirect("/app/sem-acesso");
  return access as Access & { plan: ActivePlan };
}

/** Só aceita caminho relativo interno (evita open redirect). */
export function safeNext(next: string | null | undefined, fallback = "/app"): string {
  if (!next || !next.startsWith("/") || next.startsWith("//") || next.startsWith("/\\")) return fallback;
  return next;
}
