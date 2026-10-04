/**
 * FONTE ÚNICA DA OFERTA COMERCIAL.
 *
 * ⚠ TODO_OWNER_CONFIGURATION — o dono do produto ainda NÃO definiu preço,
 * condição de pagamento, garantia, bônus nem checkout. Nada disso foi
 * inventado: enquanto um campo estiver `null`/vazio, a página mostra o estado
 * "em configuração" (e nunca um número fictício).
 *
 * Para configurar:
 *   - preço/garantia/condição: preencha os campos abaixo
 *   - checkout: NEXT_PUBLIC_CHECKOUT_URL_ACESSO_COMPLETO (link pay.cakto.com.br/{ID})
 *   - o ID da mesma oferta vai em public.offers (supabase/migrations/110_revisao_seed.sql)
 *     — é ele, e não o preço, que decide o acesso liberado pelo webhook.
 *
 * Mais de um plano: acrescente outro item em `plans` (key = plans.key no banco,
 * rank maior) e a página passa a mostrar os dois. Não invente um segundo
 * plano só para preencher o layout.
 */

export const TODO_OWNER_CONFIGURATION = "TODO_OWNER_CONFIGURATION" as const;

export type PlanOffer = {
  /** = plans.key no banco */
  key: string;
  name: string;
  tagline: string;
  /** null = TODO_OWNER_CONFIGURATION */
  priceCents: number | null;
  /** preço "de", só se o dono informar */
  compareAtCents: number | null;
  /** "ou Nx de ..." — null = não mostrar */
  installments: { count: number; cents: number } | null;
  checkoutUrl: string;
  recommended: boolean;
  /** o que o plano libera — tem que existir no app */
  includes: string[];
};

export type Bonus = { title: string; text: string; priceCents: number | null };

export const offer = {
  productName: "Revisão Visual para Concurso de Técnico de Enfermagem",
  /** ex.: "Pagamento único · acesso por 12 meses". null = TODO_OWNER_CONFIGURATION */
  paymentNote: "Pagamento único" as string | null,
  /** dias de garantia. null = TODO_OWNER_CONFIGURATION (a seção mostra só a política genérica do gateway) */
  guaranteeDays: 15 as number | null,
  // Cakto · produto c49d1d99-7fe1-4b64-aef0-fbbc32eea718. Os IDs das ofertas também estão em public.offers (130_cakto_offers.sql).
  plans: [
    {
      key: "basico",
      name: "Plano Básico",
      tagline: "O essencial para revisar pelos mapas e resumos",
      priceCents: 3790,
      compareAtCents: null,
      installments: null,
      checkoutUrl: process.env.NEXT_PUBLIC_CHECKOUT_URL_BASICO || "https://pay.cakto.com.br/i85bp2f",
      recommended: false,
      includes: [
        "As 8 áreas do concurso organizadas",
        "Mapa visual de cada assunto",
        "Resumo e pontos-chave",
        "Fonte de cada conteúdo indicada",
      ],
    },
    {
      key: "acesso-completo",
      name: "Plano Completo",
      tagline: "Todas as áreas, mapas, questões e a sua fila de revisão",
      priceCents: 4790,
      compareAtCents: null,
      installments: null,
      checkoutUrl: process.env.NEXT_PUBLIC_CHECKOUT_URL_ACESSO_COMPLETO || "https://pay.cakto.com.br/cm5op9a",
      recommended: true,
      includes: [
        "As 8 áreas do concurso organizadas",
        "Mapa visual de cada assunto",
        "Resumo e pontos-chave",
        "Fonte de cada conteúdo indicada",
        "Questões com explicação da resposta",
        "Fila “Revisar novamente” com seus erros",
        "Progresso e acerto por área",
        "Busca imediata em todo o conteúdo",
      ],
    },
  ] satisfies PlanOffer[],
  /** oferta do modal que aparece ao escolher o básico: o Completo por menos */
  downsell: {
    name: "Plano Completo — oferta especial",
    priceCents: 3290,
    checkoutUrl: process.env.NEXT_PUBLIC_CHECKOUT_URL_DOWNSELL || "https://pay.cakto.com.br/c95ejen",
  },
  /** TODO_OWNER_CONFIGURATION: bônus ainda não definidos — seção some enquanto vazio */
  bonuses: [] as Bonus[],
};

export const supportEmail = process.env.NEXT_PUBLIC_SUPPORT_EMAIL ?? "";

export function isPriceConfigured(p: PlanOffer) {
  return p.priceCents != null;
}
