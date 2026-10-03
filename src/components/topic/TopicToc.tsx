"use client";

import { useEffect, useRef, useState } from "react";
import { Icon } from "@/components/ui/Icon";

export type TocItem = { id: string; label: string; kind: "mapa" | "secao" | "resumo" | "quiz"; number?: number };

/** Seção visível agora + quanto da página já foi lido. */
function useReading(ids: string[]) {
  const [active, setActive] = useState(ids[0] ?? "");
  const [progress, setProgress] = useState(0);
  const key = ids.join("|");

  useEffect(() => {
    const ids = key.split("|");
    const elements = ids.map((id) => document.getElementById(id)).filter((el): el is HTMLElement => Boolean(el));
    const visible = new Map<string, number>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visible.set(entry.target.id, entry.boundingClientRect.top);
          else visible.delete(entry.target.id);
        }
        // a mais alta entre as visíveis na faixa de leitura
        const first = ids.find((id) => visible.has(id));
        if (first) setActive(first);
      },
      { rootMargin: "-20% 0px -65% 0px" },
    );
    elements.forEach((el) => observer.observe(el));

    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(100, Math.round((window.scrollY / max) * 100)) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, [key]);

  return { active, progress };
}

/** Chegou numa seção por link (#sec-...): destaca por um instante para o olho achar o ponto. */
function useFlashOnHash() {
  useEffect(() => {
    const flash = () => {
      const id = decodeURIComponent(window.location.hash.slice(1));
      if (!id) return;
      const el = document.getElementById(id);
      if (!el) return;
      el.classList.remove("is-flash");
      void el.offsetWidth; // reinicia a animação
      el.classList.add("is-flash");
      window.setTimeout(() => el.classList.remove("is-flash"), 2200);
    };
    flash();
    window.addEventListener("hashchange", flash);
    return () => window.removeEventListener("hashchange", flash);
  }, []);
}

function go(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  history.replaceState(null, "", `#${id}`);
  el.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "start" });
  window.dispatchEvent(new HashChangeEvent("hashchange"));
}

const ICON = { mapa: "map", resumo: "list", quiz: "target" } as const;

/** Desktop: sumário fixo à direita, com a seção atual marcada. */
export function TopicTocRail({ items }: { items: TocItem[] }) {
  const ids = items.map((item) => item.id);
  const { active, progress } = useReading(ids);
  return (
    <nav className="toc-rail" aria-label="Índice do tema">
      <p className="toc-rail__head"><span>Neste tema</span><b>{progress}%</b></p>
      <div className="toc-rail__meter"><span style={{ height: `${progress}%` }} /></div>
      <ol className="toc-rail__list">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              onClick={(event) => { event.preventDefault(); go(item.id); }}
              className={`toc-rail__link toc--${item.kind} ${active === item.id ? "is-active" : ""}`}
              aria-current={active === item.id ? "location" : undefined}
            >
              <span className="toc-rail__n">{item.kind === "secao" ? String(item.number).padStart(2, "0") : <Icon name={ICON[item.kind]} size={13} />}</span>
              <span className="toc-rail__label">{item.label}</span>
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

/** Mobile: barra fixa de chips + progresso de leitura + índice que abre por inteiro. */
export function TopicTocBar({ items }: { items: TocItem[] }) {
  const ids = items.map((item) => item.id);
  const { active, progress } = useReading(ids);
  const [open, setOpen] = useState(false);
  const strip = useRef<HTMLDivElement>(null);
  useFlashOnHash();

  // mantém o chip ativo visível na faixa
  useEffect(() => {
    const chip = strip.current?.querySelector<HTMLElement>(`[data-id="${active}"]`);
    if (chip && strip.current) strip.current.scrollTo({ left: chip.offsetLeft - 16, behavior: "smooth" });
  }, [active]);

  const current = items.find((item) => item.id === active);

  return (
    <div className="toc-bar">
      <div className="toc-bar__row">
        <button type="button" className="toc-bar__toggle" aria-expanded={open} aria-controls="toc-sheet" onClick={() => setOpen((value) => !value)}>
          <Icon name="list" size={16} />
          <span className="sr-only">Índice do tema</span>
        </button>
        <div ref={strip} className="toc-bar__strip">
          {items.map((item) => (
            <a
              key={item.id}
              data-id={item.id}
              href={`#${item.id}`}
              onClick={(event) => { event.preventDefault(); go(item.id); }}
              className={`toc-chip toc--${item.kind} ${active === item.id ? "is-active" : ""}`}
            >
              {item.kind === "secao" ? <b>{item.number}</b> : <Icon name={ICON[item.kind]} size={13} />}
              <span>{item.label}</span>
            </a>
          ))}
        </div>
      </div>
      <div className="toc-bar__progress" role="progressbar" aria-label="Leitura do tema" aria-valuemin={0} aria-valuemax={100} aria-valuenow={progress}>
        <span style={{ width: `${progress}%` }} />
      </div>
      {open && (
        <div id="toc-sheet" className="toc-sheet">
          <p className="toc-sheet__head">Índice · você está em <b>{current?.label}</b></p>
          <ol>
            {items.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={(event) => { event.preventDefault(); setOpen(false); go(item.id); }}
                  className={active === item.id ? "is-active" : ""}
                >
                  <span className="toc-sheet__n">{item.kind === "secao" ? String(item.number).padStart(2, "0") : <Icon name={ICON[item.kind]} size={13} />}</span>
                  {item.label}
                </a>
              </li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
}
