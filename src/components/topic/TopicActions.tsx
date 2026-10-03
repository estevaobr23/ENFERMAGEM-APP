"use client";

import { useState, useTransition } from "react";
import { markTopicReviewedAction, toggleFavoriteAction } from "@/app/app/actions";
import { Icon } from "@/components/ui/Icon";

export function FavoriteButton({ topicId, initialFavorite }: { topicId: string; initialFavorite: boolean }) {
  const [favorite, setFavorite] = useState(initialFavorite);
  const [error, setError] = useState("");
  const [pending, startTransition] = useTransition();

  function toggle() {
    const next = !favorite;
    setFavorite(next);
    setError("");
    startTransition(async () => {
      const result = await toggleFavoriteAction(topicId, next);
      if (!result.ok) {
        setFavorite(!next);
        setError(result.error);
      }
    });
  }

  return (
    <>
      <button type="button" onClick={toggle} disabled={pending} className={`chip-btn ${favorite ? "is-on" : ""}`} aria-pressed={favorite} aria-label={favorite ? "Favorito" : "Favoritar"}>
        <Icon name="star" size={16} fill={favorite ? "currentColor" : "none"} />
        <span>{favorite ? "Favorito" : "Favoritar"}</span>
      </button>
      {error && <span className="sr-only" role="alert">{error}</span>}
    </>
  );
}

export function ShareButton({ title }: { title: string }) {
  const [copied, setCopied] = useState(false);
  async function share() {
    const url = window.location.href.split("#")[0];
    try {
      if (navigator.share) await navigator.share({ title, url });
      else {
        await navigator.clipboard.writeText(url);
        setCopied(true);
        window.setTimeout(() => setCopied(false), 1800);
      }
    } catch {
      /* compartilhamento cancelado pelo usuário */
    }
  }
  return (
    <button type="button" onClick={share} className="chip-btn" aria-label="Compartilhar link do tema">
      <Icon name={copied ? "check" : "share"} size={16} />
      <span>{copied ? "Link copiado" : "Compartilhar"}</span>
    </button>
  );
}

/** Fim da leitura: registra a revisão e leva ao quiz. */
export function FinishReadingButton({ topicId, alreadyReviewed }: { topicId: string; alreadyReviewed: boolean }) {
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");
  const [pending, startTransition] = useTransition();

  function finish() {
    setError("");
    startTransition(async () => {
      const result = await markTopicReviewedAction(topicId);
      if (!result.ok) return setError(result.error);
      setDone(true);
      document.getElementById("quiz")?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  return (
    <div className="finish-reading">
      <button type="button" onClick={finish} disabled={pending || done} className="btn btn-primary w-full sm:w-auto">
        {done ? <><Icon name="check" size={18} /> Revisão registrada</> : pending ? "Registrando…" : <>{alreadyReviewed ? "Revisei de novo" : "Terminei a leitura"} <Icon name="arrowRight" size={18} /></>}
      </button>
      <p className="text-xs text-body">{done ? "Agora teste o que você lembra, logo abaixo." : "Registra a revisão no seu progresso e leva você ao teste."}</p>
      {error && <p className="text-sm font-semibold text-bad" role="alert">{error}</p>}
    </div>
  );
}
