import assert from "node:assert/strict";
import test from "node:test";
import { withUtm } from "../../src/vertical/landing/CheckoutButton";

test("checkout conserva somente parâmetros de atribuição conhecidos", () => {
  const result = withUtm("https://pay.cakto.com.br/oferta?ref=fixo", "?utm_source=meta&utm_campaign=prova&fbclid=abc&invasor=nao");
  const url = new URL(result);
  assert.equal(url.searchParams.get("ref"), "fixo");
  assert.equal(url.searchParams.get("utm_source"), "meta");
  assert.equal(url.searchParams.get("utm_campaign"), "prova");
  assert.equal(url.searchParams.get("fbclid"), "abc");
  assert.equal(url.searchParams.has("invasor"), false);
});

