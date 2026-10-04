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


test("checkout repassa todo utm_* e os IDs de clique dos anúncios", () => {
  const result = withUtm("https://pay.cakto.com.br/cm5op9a", "?utm_source=FB&utm_medium=cpc&utm_campaign=camp|123&utm_content=ad|456&utm_term=conj|789&utm_id=1&utm_placement=feed&fbclid=xyz&ttclid=t1&sck=s1&src=s2&xcod=x1");
  const url = new URL(result);
  for (const [k, v] of [["utm_source", "FB"], ["utm_medium", "cpc"], ["utm_campaign", "camp|123"], ["utm_content", "ad|456"], ["utm_term", "conj|789"], ["utm_id", "1"], ["utm_placement", "feed"], ["fbclid", "xyz"], ["ttclid", "t1"], ["sck", "s1"], ["src", "s2"], ["xcod", "x1"]]) {
    assert.equal(url.searchParams.get(k), v);
  }
});
