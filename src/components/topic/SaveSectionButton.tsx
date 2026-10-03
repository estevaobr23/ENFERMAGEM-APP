"use client";

import { useState, useTransition } from "react";
import { toggleSavedSectionAction } from "@/app/app/actions";
import { Icon } from "@/components/ui/Icon";

export function SaveSectionButton({ topicId, sectionKey, sectionTitle, initialSaved }: { topicId: string; sectionKey: string; sectionTitle: string; initialSaved: boolean }) {
  const [saved, setSaved] = useState(initialSaved);
  const [error, setError] = useState("");
  const [pending, startTransition] = useTransition();

  function toggle() {
    const next = !saved;
    setSaved(next);
    setError("");
    startTransition(async () => {
      const result = await toggleSavedSectionAction(topicId, sectionKey, next);
      if (!result.ok) {
        setSaved(!next);
        setError(result.error);
      }
    });
  }

  return (
    <>
      <button
        type="button"
        onClick={toggle}
        disabled={pending}
        className={`save-btn ${saved ? "is-saved" : ""}`}
        aria-pressed={saved}
        aria-label={saved ? `Remover "${sectionTitle}" dos pontos salvos` : `Salvar "${sectionTitle}" para revisar depois`}
      >
        <Icon name="bookmark" size={16} fill={saved ? "currentColor" : "none"} />
        <span>{saved ? "Salvo" : "Salvar ponto"}</span>
      </button>
      {error && <span className="sr-only" role="alert">{error}</span>}
    </>
  );
}
