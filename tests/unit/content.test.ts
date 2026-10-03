import assert from "node:assert/strict";
import test from "node:test";
import { findAsset } from "../../src/vertical/content/visual-assets";
import { CATEGORIES, publishedCounts } from "../../src/vertical/content";
import { V2, validateCategories, validateDepthV2 } from "../../src/core/content/types";

test("conteúdo publicado é estruturalmente válido", () => {
  assert.deepEqual(validateCategories(CATEGORIES, (id) => findAsset(id)?.status), []);
  const counts = publishedCounts();
  assert.equal(counts.categories, 8);
  assert.ok(counts.topics >= 16, `temas publicados: ${counts.topics}`);
  assert.ok(counts.questions >= counts.topics * 3, `questões publicadas: ${counts.questions}`);
});

test("cada categoria tem ao menos dois temas publicados", () => {
  for (const category of CATEGORIES) {
    assert.ok(category.topics.filter((topic) => topic.status === "published").length >= 2, category.title);
  }
});

test("todo tema v2 cumpre o padrão de profundidade", () => {
  const v2 = CATEGORIES.flatMap((c) => c.topics.filter((t) => t.standard === "v2" && t.status === "published").map((t) => ({ c, t })));
  assert.ok(v2.length > 0, "nenhum tema v2 publicado");
  for (const { c, t } of v2) {
    assert.deepEqual(validateDepthV2(`${c.slug}/${t.slug}`, t), []);
    assert.ok(t.questions.length >= V2.minQuestions);
  }
});

test("Biossegurança está inteira no padrão v2", () => {
  const bio = CATEGORIES.find((c) => c.slug === "biosseguranca")!;
  assert.ok(bio.topics.length >= 8);
  assert.ok(bio.topics.every((t) => t.standard === "v2"));
});
