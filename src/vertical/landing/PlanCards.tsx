"use client";

import { useEffect, useRef, useState } from "react";
import { offer } from "@/vertical/offer";
import { goToCheckout } from "./CheckoutButton";
import { DeviceDuo } from "./frames";

const brl = (cents: number) => new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(cents / 100);

/** O que o Básico não tem (= os recursos de prática do Completo). */
export const ONLY_FULL = ["Questões com explicação da resposta", "Fila “Revisar novamente” com seus erros", "Progresso e acerto por área", "Busca imediata em todo o conteúdo"];

/**
 * Oferta: Básico (decoy, à esquerda) → Completo (à direita).
 * O botão do Básico abre o downsell; os de compra vão ao checkout com as UTMs.
 */
export function PlanCards() {
  const [open, setOpen] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const [basic, full] = offer.plans;
  const { downsell } = offer;

  useEffect(() => {
    if (open) dialog.current?.showModal();
    else dialog.current?.close();
  }, [open]);

  return (
    <>
      <div className="offer-grid">
        {/* BLOCO 1 — PLANO BÁSICO */}
        <div className="plan basic reveal">
          <h3>{basic.name}</h3>
          <p className="psub">{basic.tagline}</p>
          <div className="price">{brl(basic.priceCents)}</div>
          <ul>
            {basic.includes.map((item) => <li key={item} className="yes"><span className="ic">✓</span><span>{item}</span></li>)}
            {ONLY_FULL.map((item) => <li key={item} className="no"><span className="ic">✕</span><span>{item}</span></li>)}
          </ul>
          <button type="button" className="btn btn-ghost btn-block" onClick={() => setOpen(true)}>Quero só o Básico</button>
        </div>

        {/* BLOCO 2 — PLANO COMPLETO */}
        <div className="plan vip reveal delay-1">
          <span className="ribbon">⭐ O mais escolhido</span>
          <h3>{full.name}</h3>
          <p className="psub">{full.tagline}</p>
          <DeviceDuo className="plan-mockup" />
          <div className="price-row">
            <span className="anchor">Tudo do Básico + prática completa por</span>
            <span className="price">{brl(full.priceCents)}</span>
          </div>
          <div className="installment">pagamento <b>único</b> · sem mensalidade</div>
          <ul>
            {full.includes.map((item) => <li key={item} className="yes"><span className="ic">✓</span><span>{item}</span></li>)}
          </ul>
          <a href={full.checkoutUrl} data-checkout="vip" className="btn btn-buy btn-lg btn-block" onClick={(event) => { event.preventDefault(); goToCheckout(full.checkoutUrl); }}>
            Quero o Plano Completo <span className="arrow">➔</span>
          </a>
          <div className="offer-secure"><span>🔒 Compra 100% segura</span><span>•</span><span>🛡️ Garantia de {offer.guaranteeDays} dias</span><span>•</span><span>⚡ Acesso imediato</span></div>
        </div>
      </div>

      <dialog ref={dialog} className="downsell-modal" aria-labelledby="downsell-title" onClose={() => setOpen(false)} onClick={(event) => { if (event.target === dialog.current) setOpen(false); }}>
        <div className="downsell-box">
          <button type="button" className="close" aria-label="Fechar" onClick={() => setOpen(false)}>×</button>
          <p className="dtag">Espere! Uma oferta só pra você</p>
          <h3 id="downsell-title">Leve o Plano Completo por menos que o Básico</h3>
          <p className="dtext">Questões explicadas, fila “Revisar novamente” e progresso por área — o pacote inteiro, por um preço especial.</p>
          <DeviceDuo className="dmockup" />
          <div className="dprice"><s>{brl(full.priceCents)}</s>{brl(downsell.priceCents)}</div>
          <a href={downsell.checkoutUrl} data-checkout="downsell" className="btn btn-buy btn-block" onClick={(event) => { event.preventDefault(); goToCheckout(downsell.checkoutUrl); }}>
            Sim, quero o Completo por {brl(downsell.priceCents)} <span className="arrow">➔</span>
          </a>
          <a href={basic.checkoutUrl} data-checkout="basico" className="refuse" onClick={(event) => { event.preventDefault(); goToCheckout(basic.checkoutUrl); }}>
            Não, quero só o Básico por {brl(basic.priceCents)}
          </a>
        </div>
      </dialog>
    </>
  );
}
