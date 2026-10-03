import { ACCESS_EMAIL, NO_ACCESS_EMAIL, TEST_PASSWORD, adminClient, removeTestUsers } from "./test-db";

export default async function globalSetup() {
  await removeTestUsers();
  const admin = adminClient();
  const access = await admin.auth.admin.createUser({ email: ACCESS_EMAIL, password: TEST_PASSWORD, email_confirm: true, user_metadata: { name: "Ana E2E" } });
  if (access.error || !access.data.user) throw access.error ?? new Error("Usuário E2E não criado");
  const noAccess = await admin.auth.admin.createUser({ email: NO_ACCESS_EMAIL, password: TEST_PASSWORD, email_confirm: true, user_metadata: { name: "Bia E2E" } });
  if (noAccess.error) throw noAccess.error;
  const { error: purchaseError } = await admin.rpc("apply_purchase_event", {
    p_provider: "cakto",
    p_external_purchase_id: `E2E-${Date.now()}`,
    p_external_offer_id: "OFERTA-TESTE-LOCAL",
    p_buyer_email: ACCESS_EMAIL,
    p_status: "approved",
    p_amount_cents: null,
    p_currency: "BRL",
    p_occurred_at: new Date().toISOString(),
  });
  if (purchaseError) throw purchaseError;
}

