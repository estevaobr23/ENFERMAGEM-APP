import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import path from "node:path";
import test from "node:test";
import { CATEGORIES } from "../../src/vertical/content";
import { VISUAL_ASSETS } from "../../src/vertical/content/visual-assets";
import { categoryEmblemPath } from "../../src/components/ui/CategoryEmblem";
import { offer } from "../../src/vertical/offer";

const publishedTopics = CATEGORIES.flatMap((category) =>
  category.topics
    .filter((topic) => topic.status === "published")
    .map((topic) => ({ category: category.slug, topic: topic.slug })),
);

const integratedAssets = VISUAL_ASSETS.filter((asset) => asset.status === "integrated");

function publicFile(assetPath: string) {
  return path.join(process.cwd(), "public", assetPath.replace(/^\//, ""));
}

test("cada tema publicado tem exatamente uma prancha ilustrada V2", () => {
  assert.equal(publishedTopics.length, 31);
  assert.equal(integratedAssets.length, publishedTopics.length);

  for (const published of publishedTopics) {
    const matches = integratedAssets.filter(
      (asset) => asset.category === published.category && asset.topicSlug === published.topic,
    );

    assert.equal(
      matches.length,
      1,
      `${published.category}/${published.topic} deve ter exatamente uma prancha integrada`,
    );
  }
});

test("nenhuma prancha integrada aponta para tema inexistente ou não publicado", () => {
  const publishedKeys = new Set(
    publishedTopics.map(({ category, topic }) => `${category}/${topic}`),
  );

  for (const asset of integratedAssets) {
    assert.ok(
      publishedKeys.has(`${asset.category}/${asset.topicSlug}`),
      `${asset.id} aponta para um tema inexistente ou não publicado`,
    );
  }
});

test("todas as pranchas V2 possuem SVG autocontido e base WebP", () => {
  for (const asset of integratedAssets) {
    assert.ok(asset.asset, `${asset.id} não possui caminho do SVG`);
    assert.ok(asset.baseAsset, `${asset.id} não possui caminho da base WebP`);

    const svgPath = publicFile(asset.asset!);
    const webpPath = publicFile(asset.baseAsset!);

    assert.ok(existsSync(svgPath), `${asset.id}: SVG ausente em ${svgPath}`);
    assert.ok(existsSync(webpPath), `${asset.id}: WebP ausente em ${webpPath}`);
    assert.match(
      readFileSync(svgPath, "utf8"),
      /data:image\/webp;base64,/,
      `${asset.id}: o SVG deve incorporar a ilustração WebP`,
    );
  }
});

test("RCP permanece bloqueada enquanto o tema aguarda revisão científica", () => {
  const rcpTopic = CATEGORIES.flatMap((category) => category.topics).find(
    (topic) => topic.slug === "rcp-adulto-suporte-basico",
  );
  const rcpAsset = VISUAL_ASSETS.find((asset) => asset.topicSlug === rcpTopic?.slug);

  assert.equal(rcpTopic?.status, "review_required");
  assert.equal(rcpAsset?.status, "research_required");
  assert.equal(rcpAsset?.asset, undefined);
  assert.equal(rcpAsset?.baseAsset, undefined);
});

test("todas as matérias publicadas possuem emblema ilustrado otimizado", () => {
  const publishedCategories = CATEGORIES.filter((category) => category.status === "published");
  assert.equal(publishedCategories.length, 8);

  for (const category of publishedCategories) {
    const emblem = categoryEmblemPath(category.slug);
    assert.ok(emblem, `${category.slug} não possui emblema configurado`);
    assert.match(emblem, /^\/interface\/categories\/.+\.webp$/);
    assert.ok(existsSync(publicFile(emblem)), `${category.slug}: emblema ausente em ${emblem}`);
  }
});

test("a nova identidade visual possui símbolo e assinatura horizontal", () => {
  for (const brandAsset of [
    "/interface/brand/revisao-tecnico-mark.svg",
    "/interface/brand/revisao-tecnico-horizontal.svg",
  ]) {
    assert.ok(existsSync(publicFile(brandAsset)), `arquivo de marca ausente: ${brandAsset}`);
  }
});

test("a oferta possui mockup principal e um mockup para cada bônus", () => {
  for (const heroAsset of [
    "/landing/mockups/oferta-completa-frontal.png",
    "/landing/mockups/oferta-completa-frontal.webp",
    "/landing/mockups/oferta-completa-frontal-square.png",
    "/landing/mockups/oferta-completa-frontal-square.webp",
  ]) {
    assert.ok(existsSync(publicFile(heroAsset)), `mockup principal ausente: ${heroAsset}`);
  }

  assert.equal(offer.bonuses.length, 3);
  for (const bonus of offer.bonuses) {
    assert.match(bonus.mockupSrc, /^\/landing\/mockups\/.+\.webp$/);
    assert.ok(existsSync(publicFile(bonus.mockupSrc)), `${bonus.title}: mockup ausente`);
    assert.ok(bonus.mockupAlt.length > 20, `${bonus.title}: texto alternativo insuficiente`);
  }
});
