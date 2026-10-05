"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { offer } from "@/vertical/offer";
import { goToCheckout } from "./CheckoutButton";

const brl = (cents: number) => new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(cents / 100);

function Check({ ok }: { ok: boolean }) {
  return ok ? (
    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#06a742] text-[11px] font-bold text-white" aria-label="Incluído">✓</span>
  ) : (
    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[hsl(354,76%,50%)] text-[11px] font-bold text-white" aria-label="Não incluído">✕</span>
  );
}

function CompleteOfferMockup({ small = false }: { small?: boolean }) {
  return (
    <Image
      src={small ? "/landing/mockups/oferta-completa-frontal-square.webp" : "/landing/mockups/oferta-completa-frontal.webp"}
      alt=""
      width={small ? 1200 : 1800}
      height={small ? 1200 : 1350}
      sizes={small ? "(max-width: 480px) 90vw, 28rem" : "(max-width: 768px) 92vw, 38rem"}
      className={`plan-complete-mockup h-auto w-full ${small ? "plan-complete-mockup--small" : ""}`}
    />
  );
}

/**
 * Planos: entrada (recua, à esquerda / primeiro no mobile) e recomendado
 * (maior, à direita). O botão do Básico abre o downsell; os botões de compra
 * vão ao checkout da Cakto com as UTMs da visita (goToCheckout → withUtm).
 */
export function PlanCards() {
  const [open, setOpen] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const [entry, pro] = offer.plans;
  const { downsell, bonuses } = offer;
  const proExtras = pro.includes.filter((t) => !entry.includes.includes(t));
  const proShared = pro.includes.filter((t) => entry.includes.includes(t));

  useEffect(() => {
    if (open) dialog.current?.showModal();
    else dialog.current?.close();
  }, [open]);

  return (
    <>
      <div className="mt-10 grid items-center gap-8 md:grid-cols-[0.85fr_1.15fr]">
        {/* COMPLETO — o recomendado, à direita / depois do Básico */}
        <div className="rv rv-pop relative order-2 rounded-[2rem] border-[3px] border-[var(--lp-vip)] bg-white p-6 text-[var(--lp-ink)] shadow-[0_30px_70px_-20px_rgba(0,0,0,.55)] sm:p-8">
          <span className="absolute -top-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-[var(--lp-hl-deep)] px-5 py-1.5 text-xs font-extrabold uppercase tracking-wide text-white">⭐ Mais escolhido</span>
          <div className="text-center">
            <h3 className="text-3xl">{pro.name}</h3>
            <p className="mt-1 text-sm text-[var(--lp-body)]">{pro.tagline}</p>
            <div className="mt-5">
              <p className="text-sm text-[var(--lp-body)]">tudo do Básico + as questões comentadas por</p>
              <p className="text-6xl font-extrabold leading-none tracking-[-.02em] text-[#06a742]">{brl(pro.priceCents)}</p>
              <p className="mt-2 text-sm font-semibold">pagamento único · <b className="text-[#06a742]">sem mensalidade</b></p>
            </div>
          </div>
          <div className="plan-complete-visual" aria-hidden><CompleteOfferMockup /></div>
          <p className="mb-3 mt-7 text-left text-xs font-extrabold uppercase tracking-[.15em] text-[var(--lp-hl-deep)]">O que está incluso:</p>
          <ul className="space-y-2.5 text-left">
            {[...proShared, ...proExtras].map((t) => (
              <li key={t} className="flex items-start gap-2.5 text-[15px] leading-snug"><Check ok />{t}</li>
            ))}
          </ul>
          {bonuses.length > 0 && (
            <>
              <p className="mb-3 mt-6 text-left text-xs font-extrabold uppercase tracking-[.15em] text-[var(--lp-hl-deep)]">+ Bônus inclusos:</p>
              <ul className="space-y-2.5 text-left">
                {bonuses.map((b) => (
                  <li key={b.title} className="flex items-start gap-2.5 text-[15px] leading-snug"><Check ok />{b.title}</li>
                ))}
              </ul>
            </>
          )}
          <a
            href={pro.checkoutUrl}
            data-checkout="vip"
            onClick={(event) => { event.preventDefault(); goToCheckout(pro.checkoutUrl); }}
            className="group mt-8 flex min-h-16 w-full items-center justify-center gap-2 rounded-2xl bg-[#06a742] px-6 py-4 text-center text-lg font-extrabold text-white shadow-[0_14px_30px_-8px_rgba(6,167,66,.6)] transition hover:-translate-y-0.5 hover:brightness-105"
          >
            QUERO O PLANO COMPLETO <span className="transition group-hover:translate-x-1" aria-hidden>➔</span>
          </a>
          <p className="mt-3 text-center text-xs text-[var(--lp-body)]">🔒 Compra segura · 🛡️ Garantia de {offer.guaranteeDays} dias · ⚡ Acesso imediato</p>
        </div>

        {/* BÁSICO — primeiro, recua */}
        <div className="rv rv-l order-1 rounded-[1.75rem] border-2 border-white/20 bg-white/10 p-6 text-white backdrop-blur-sm sm:p-7">
          <div className="text-center">
            <h3 className="text-2xl">{entry.name}</h3>
            <p className="mt-1 text-sm text-white/70">{entry.tagline}</p>
            <p className="mt-5 text-4xl font-bold leading-none">{brl(entry.priceCents)}</p>
            <p className="mt-2 text-xs text-white/70">pagamento único · sem mensalidade</p>
          </div>
          <ul className="mt-6 space-y-2.5 text-sm">
            {entry.includes.map((t) => <li key={t} className="flex items-start gap-2.5"><Check ok />{t}</li>)}
          </ul>
          <ul className="mt-4 space-y-2.5 border-t border-white/15 pt-4 text-sm text-white/60">
            {proExtras.map((t) => <li key={t} className="flex items-start gap-2.5"><Check ok={false} />{t}</li>)}
            {bonuses.map((b) => <li key={b.title} className="flex items-start gap-2.5"><Check ok={false} />{b.title}</li>)}
          </ul>
          <button type="button" onClick={() => setOpen(true)} className="mt-7 flex min-h-12 w-full items-center justify-center rounded-2xl border-2 border-white/50 px-5 py-3 text-center text-sm font-bold text-white transition hover:bg-white/10">
            COMEÇAR COM O BÁSICO
          </button>
        </div>
      </div>

      <dialog ref={dialog} className="ds-modal" aria-labelledby="downsell-title" onClose={() => setOpen(false)} onClick={(event) => { if (event.target === dialog.current) setOpen(false); }}>
        <div className="relative p-6 text-center sm:p-8">
          <button type="button" onClick={() => setOpen(false)} aria-label="Fechar" className="absolute right-4 top-3 text-3xl leading-none text-[var(--lp-body)]">×</button>
          <p className="text-xs font-extrabold uppercase tracking-[.14em] text-[var(--lp-hl-deep)]">Espere! Uma oferta só pra você</p>
          <h3 className="mt-2 text-2xl leading-tight">
            {downsell.priceCents < entry.priceCents
              ? <>Leve o {pro.name} por menos que o Básico</>
              : <>Leve o {pro.name} por só {brl(downsell.priceCents - entry.priceCents)} a mais</>}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-[var(--lp-body)]">Questões comentadas, fila “Revisar novamente”, progresso por área e busca imediata — o aplicativo completo, por um preço especial.</p>
          <div className="plan-complete-visual !min-h-0 !py-3" aria-hidden><CompleteOfferMockup small /></div>
          <p className="mt-4 text-4xl font-extrabold tracking-[-.02em] text-[#06a742]"><s className="mr-2 text-lg font-bold text-[hsl(348,76%,46%)]">{brl(pro.priceCents)}</s>{brl(downsell.priceCents)}</p>
          <a
            href={downsell.checkoutUrl}
            data-checkout="downsell"
            onClick={(event) => { event.preventDefault(); goToCheckout(downsell.checkoutUrl); }}
            className="group mt-5 flex min-h-14 w-full items-center justify-center gap-2 rounded-2xl bg-[#06a742] px-5 py-3 text-center font-extrabold text-white shadow-[0_14px_30px_-8px_rgba(6,167,66,.6)] transition hover:brightness-105"
          >
            SIM, QUERO O COMPLETO POR {brl(downsell.priceCents)} <span aria-hidden>➔</span>
          </a>
          <a
            href={entry.checkoutUrl}
            data-checkout="basico"
            onClick={(event) => { event.preventDefault(); goToCheckout(entry.checkoutUrl); }}
            className="mt-4 block text-sm text-[var(--lp-body)] underline"
          >
            Não, quero só o Básico por {brl(entry.priceCents)}
          </a>
        </div>
      </dialog>
    </>
  );
}
