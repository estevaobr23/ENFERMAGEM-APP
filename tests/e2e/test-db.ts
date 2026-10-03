import { execSync } from "node:child_process";
import { createClient } from "@supabase/supabase-js";

export const ACCESS_EMAIL = "e2e.acesso.revisao@example.com";
export const NO_ACCESS_EMAIL = "e2e.sem-acesso.revisao@example.com";
export const TEST_PASSWORD = "Revisao123!";

export function adminClient() {
  const raw = execSync("npx supabase status -o json", { encoding: "utf8", cwd: process.cwd() });
  const status = JSON.parse(raw) as { API_URL: string; SERVICE_ROLE_KEY: string };
  return createClient(status.API_URL, status.SERVICE_ROLE_KEY, { auth: { persistSession: false } });
}

export async function removeTestUsers() {
  const admin = adminClient();
  const { data, error } = await admin.auth.admin.listUsers({ page: 1, perPage: 1000 });
  if (error) throw error;
  for (const user of data.users.filter((item) => item.email === ACCESS_EMAIL || item.email === NO_ACCESS_EMAIL || item.email?.startsWith("e2e.cadastro."))) {
    const { error: deleteError } = await admin.auth.admin.deleteUser(user.id);
    if (deleteError) throw deleteError;
  }
}
