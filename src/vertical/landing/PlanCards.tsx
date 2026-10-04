"use client";

import { useEffect, useRef, useState } from "react";
import { offer } from "@/vertical/offer";
import { captureUtm, goToCheckout } from "./CheckoutButton";

const brl = (cents: number) => new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(cents / 100);

/**
 * Cards Básico e Completo. Ao escolher o Básico, abre o modal de downsell
 * (o Completo por menos). Todo clique vai ao checkout com as UTMs da visita.
 */
export function PlanCards() {
  const [downsellOpen, setDownsellOpen] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const [basic, full] = offer.plans;
  const { downsell } = offer;

  useEffect(() => { captureUtm(window.location.search); }, []);
  useEffect(() => {
    if (downsellOpen) dialog.current?.showModal();
    else dialog.current?.close();
  }, [downsellOpen]);

  return (
    <>
      <div className="lp-plans">
        {[full, basic].map((plan) => (
          <div key={plan.key} className={`lp-plan rv ${plan.recommended ? "lp-plan--best" : "lp-plan--basic"}`}>
            <span className="lp-plan-pill">{plan.recommended ? "MAIS ESCOLHIDO" : "ESSENCIAL"}</span>
            <h3>{plan.name}</h3>
            <p>{plan.tagline}</p>
            <div className="lp-price">{brl(plan.priceCents)}</div>
            {offer.paymentNote && <small>{offer.paymentNote}</small>}
            <ul>{plan.includes.map((item) => <li key={item}><span aria-hidden>✓</span>{item}</li>)}</ul>
            <a
              href={plan.checkoutUrl}
              className={plan.recommended ? "lp-buy" : "lp-buy lp-buy--ghost"}
              onClick={(event) => {
                event.preventDefault();
                if (plan.recommended) goToCheckout(plan.checkoutUrl);
                else setDownsellOpen(true);
              }}
            >
              {plan.recommended ? "QUERO O PLANO COMPLETO" : "QUERO O PLANO BÁSICO"}
            </a>
          </div>
        ))}
      </div>

      <dialog ref={dialog} className="lp-downsell" aria-labelledby="downsell-title" onClose={() => setDownsellOpen(false)} onClick={(event) => { if (event.target === dialog.current) setDownsellOpen(false); }}>
        <div className="lp-downsell__box">
          <button type="button" className="lp-downsell__x" aria-label="Fechar" onClick={() => setDownsellOpen(false)}>×</button>
          <p className="lp-downsell__eyebrow">ESPERA! OFERTA ÚNICA</p>
          <h3 id="downsell-title">Leve o <b>Plano Completo</b> por menos que o Básico</h3>
          <p className="lp-downsell__text">Questões com explicação, fila “Revisar novamente” e progresso por área — tudo do Completo.</p>
          <div className="lp-downsell__price"><s>{brl(full.priceCents)}</s><strong>{brl(downsell.priceCents)}</strong></div>
          <button type="button" className="lp-buy" onClick={() => goToCheckout(downsell.checkoutUrl)}>SIM, QUERO O COMPLETO POR {brl(downsell.priceCents)}</button>
          <button type="button" className="lp-downsell__no" onClick={() => goToCheckout(basic.checkoutUrl)}>Não, quero só o Básico por {brl(basic.priceCents)}</button>
        </div>
      </dialog>
    </>
  );
}
