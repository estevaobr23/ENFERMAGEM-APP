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
  paymentNote: null as string | null,
  /** dias de garantia. null = TODO_OWNER_CONFIGURATION (a seção mostra só a política genérica do gateway) */
  guaranteeDays: null as number | null,
  plans: [
    {
      key: "acesso-completo",
      name: "Acesso completo",
      tagline: "Todas as áreas, mapas, questões e a sua fila de revisão",
      priceCents: null,
      compareAtCents: null,
      installments: null,
      checkoutUrl: process.env.NEXT_PUBLIC_CHECKOUT_URL_ACESSO_COMPLETO ?? "",
      recommended: true,
      includes: [
        "As 8 áreas do concurso organizadas",
        "Mapa visual de cada assunto",
        "Resumo e pontos-chave",
        "Questões com explicação da resposta",
        "Fila “Revisar novamente” com o que você errou",
        "Progresso e acerto por área",
        "Busca e favoritos",
        "Fonte de cada conteúdo indicada",
      ],
    },
  ] satisfies PlanOffer[],
  /** TODO_OWNER_CONFIGURATION: bônus ainda não definidos — seção some enquanto vazio */
  bonuses: [] as Bonus[],
};

export const supportEmail = process.env.NEXT_PUBLIC_SUPPORT_EMAIL ?? "";

export function isPriceConfigured(p: PlanOffer) {
  return p.priceCents != null;
}
