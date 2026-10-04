import { expect, test, type Page } from "@playwright/test";
import { findTopic } from "../../src/vertical/content";
import { ACCESS_EMAIL, NO_ACCESS_EMAIL, TEST_PASSWORD } from "./test-db";

const demo = findTopic("higiene-das-maos-cinco-momentos");
const demoQuestion = demo.topic.questions.find((question) => question.status === "published")!;
const wrongOption = demoQuestion.options.find((option) => !option.correct)!;

async function login(page: Page, email: string) {
  await page.goto("/login");
  await page.getByLabel("E-mail").fill(email);
  await page.getByLabel("Senha").fill(TEST_PASSWORD);
  await page.getByRole("button", { name: "Entrar no aplicativo" }).click();
}

test("landing mobile, CTAs e ausência de overflow", async ({ page }) => {
  await page.setViewportSize({ width: 360, height: 800 });
  await page.goto("/?utm_source=e2e&utm_campaign=concurso");
  await expect(page.getByRole("heading", { level: 1 })).toContainText("não precisa");
  await expect(page.locator("section")).toHaveCount(12);
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  await page.getByRole("link", { name: /QUERO REVISAR COM MAIS CLAREZA/ }).first().click();
  await expect(page).toHaveURL(/#planos$/);
  // plano básico abre o downsell; os links de checkout levam as UTMs da entrada
  await page.getByRole("button", { name: "Quero só o Básico" }).click();
  await expect(page.getByRole("heading", { name: /Leve o Plano Completo/ })).toBeVisible();
  await page.route(/pay\.cakto\.com\.br/, (route) => route.fulfill({ status: 200, body: "ok" }));
  await page.getByRole("link", { name: /Sim, quero o Completo/ }).click();
  await expect(page).toHaveURL(/pay\.cakto\.com\.br\/.*utm_source=e2e.*utm_campaign=concurso|pay\.cakto\.com\.br\/.*utm_campaign=concurso.*utm_source=e2e/);
  await page.goto("/cadastro?email=e2e.cadastro.visual@example.com");
  await expect(page.getByLabel("E-mail")).toHaveValue("e2e.cadastro.visual@example.com");
});

async function noOverflow(page: Page) {
  const wide = await page.evaluate(() =>
    [...document.querySelectorAll("body *")]
      .filter((el) => el.getBoundingClientRect().right > innerWidth + 1 && getComputedStyle(el).position !== "fixed")
      .slice(0, 5)
      .map((el) => `${el.tagName}.${el.className} → ${Math.round(el.getBoundingClientRect().right)}px`),
  );
  const ok = await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth);
  if (!ok) console.log("overflow:", wide);
  return ok;
}

test("compra vinculada: tema visual, quiz final, salvos, progresso e logout", async ({ page }) => {
  test.setTimeout(120_000);
  await page.setViewportSize({ width: 390, height: 844 });
  await login(page, ACCESS_EMAIL);
  await expect(page).toHaveURL(/\/app$/);
  await expect(page.getByTestId("review-now")).toBeVisible();
  expect(await noOverflow(page)).toBe(true);
  await page.screenshot({ path: "tests/artifacts/dashboard-390.png", fullPage: true });

  await page.goto("/app/categorias?ver=mapa");
  await expect(page.getByRole("group", { name: "Mapa geral das matérias" })).toBeVisible();
  expect(await noOverflow(page)).toBe(true);

  await page.goto(`/app/tema/${demo.topic.slug}`);
  await expect(page.getByRole("heading", { level: 1, name: demo.topic.title })).toBeVisible();
  await expect(page.getByRole("heading", { name: demo.topic.sections[0].title })).toBeVisible();
  expect(await noOverflow(page)).toBe(true);
  await page.screenshot({ path: "tests/artifacts/tema-390.png", fullPage: true });

  // salvar um ponto
  await page.getByRole("button", { name: `Salvar "${demo.topic.sections[1].title}" para revisar depois` }).click();
  await expect(page.getByRole("button", { name: `Remover "${demo.topic.sections[1].title}" dos pontos salvos` })).toBeEnabled();
  await page.getByRole("button", { name: "Favoritar" }).click();
  await expect(page.getByRole("button", { name: "Favorito" })).toBeEnabled();

  // quiz: erra a 1ª, acerta as demais
  await page.getByRole("button", { name: "Começar o teste" }).click();
  const published = demo.topic.questions.filter((question) => question.status === "published");
  for (const [i, question] of published.entries()) {
    const option = i === 0 ? wrongOption : question.options.find((item) => item.correct)!;
    await page.locator("label.qq__option", { hasText: option.text }).click();
    await page.getByRole("button", { name: "Conferir resposta" }).click();
    if (i === 0) {
      await expect(page.getByText("Esse ponto entrou em Revisar novamente.")).toBeVisible();
      await expect(page.getByRole("link", { name: /^Rever:/ })).toBeVisible();
    } else await expect(page.getByText("Você acertou!")).toBeVisible();
    await page.getByRole("button", { name: i === published.length - 1 ? "Ver resultado" : "Próxima questão" }).click();
  }
  await expect(page.getByText(/Resultado salvo/)).toBeVisible();
  await expect(page.getByText(`${published.length - 1}/${published.length}`).first()).toBeVisible();
  await expect(page.getByText("Revise antes de seguir")).toBeVisible();
  await page.locator("#quiz").screenshot({ path: "tests/artifacts/resultado-390.png" });

  await page.goto("/app/revisoes");
  await expect(page.getByText(demo.topic.title)).toBeVisible();
  await page.goto("/app/favoritos?aba=pontos");
  await expect(page.locator(".point__title", { hasText: demo.topic.sections[1].title })).toBeVisible();
  await page.goto("/app/busca?q=apojadura");
  await expect(page.getByRole("heading", { name: "Aleitamento materno" })).toBeVisible();
  await page.goto("/app/progresso");
  await expect(page.getByText("Quizzes feitos")).toBeVisible();
  expect(await noOverflow(page)).toBe(true);

  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(`/app/tema/${demo.topic.slug}`);
  await expect(page.getByRole("navigation", { name: "Índice do tema" })).toBeVisible();
  await page.screenshot({ path: "tests/artifacts/tema-desktop.png" });
  await page.goto("/app/categorias/saude-da-mulher");
  await page.screenshot({ path: "tests/artifacts/categoria-desktop.png" });

  await page.goto("/app/conta");
  await page.getByRole("button", { name: "Sair da conta" }).click();
  await expect(page).toHaveURL(/\/login$/);
});

test("usuário confirmado sem compra é bloqueado com orientação", async ({ page }) => {
  await login(page, NO_ACCESS_EMAIL);
  await expect(page).toHaveURL(/\/app\/sem-acesso$/);
  await expect(page.getByText(NO_ACCESS_EMAIL)).toBeVisible();
  await expect(page.getByRole("link", { name: "Já paguei, verificar novamente" })).toBeVisible();
  await expect(page.getByRole("button", { name: "Entrar com outro e-mail" })).toBeVisible();
});
