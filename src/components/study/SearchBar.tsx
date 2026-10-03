"use client";

import { useEffect, useId, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Icon } from "@/components/ui/Icon";
import type { SearchSuggestion } from "@/app/api/busca/route";

type Result = { q: string; topics: SearchSuggestion[]; categories: { slug: string; title: string }[]; total: number };

/** Destaca no texto os termos digitados (sem acento, sem diferenciar maiúsculas). */
function Highlight({ text, query }: { text: string; query: string }) {
  const terms = query.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().split(/\s+/).filter((t) => t.length >= 2);
  if (!terms.length) return <>{text}</>;
  const plain = text.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
  const marks: [number, number][] = [];
  for (const term of terms) {
    let from = 0;
    for (let i = plain.indexOf(term, from); i !== -1; i = plain.indexOf(term, from)) {
      marks.push([i, i + term.length]);
      from = i + term.length;
    }
  }
  if (!marks.length) return <>{text}</>;
  marks.sort((a, b) => a[0] - b[0]);
  const parts: React.ReactNode[] = [];
  let cursor = 0;
  marks.forEach(([start, end], index) => {
    if (start < cursor) return;
    if (start > cursor) parts.push(text.slice(cursor, start));
    parts.push(<mark key={index} className="search-hl">{text.slice(start, end)}</mark>);
    cursor = end;
  });
  parts.push(text.slice(cursor));
  return <>{parts}</>;
}

/**
 * Busca imediata: as sugestões aparecem enquanto o aluno digita (com debounce).
 * Na página /app/busca, a lista completa também atualiza a cada palavra.
 * Sem JS, o formulário continua funcionando (GET em /app/busca).
 */
export function SearchBar({ defaultValue = "", compact = false, autoFocus = false, inline = false, children }: {
  defaultValue?: string;
  compact?: boolean;
  autoFocus?: boolean;
  /** página de busca: resultados completos abaixo do campo, ao vivo */
  inline?: boolean;
  /** resultados renderizados no servidor para a busca inicial (sem JS também funciona) */
  children?: React.ReactNode;
}) {
  const [value, setValue] = useState(defaultValue);
  const [result, setResult] = useState<Result | null>(null);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(-1);
  const input = useRef<HTMLInputElement>(null);
  const box = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const listId = useId();

  // sugestões ao vivo
  useEffect(() => {
    const q = value.trim();
    if (q.length < 2) return;
    const controller = new AbortController();
    const timer = window.setTimeout(async () => {
      try {
        const response = await fetch(`/api/busca?q=${encodeURIComponent(q)}&limit=${inline ? 30 : 8}`, { signal: controller.signal });
        if (response.ok) {
          setResult(await response.json());
          setActive(-1);
        }
      } catch {
        /* digitação cancelou a requisição anterior */
      }
    }, 160);
    return () => {
      controller.abort();
      window.clearTimeout(timer);
    };
  }, [value, inline]);

  // na página de busca, a URL acompanha a digitação sem recarregar a página
  useEffect(() => {
    if (!inline) return;
    const q = value.trim();
    const target = q.length >= 2 ? `/app/busca?q=${encodeURIComponent(q)}` : "/app/busca";
    if (`${window.location.pathname}${window.location.search}` !== target) window.history.replaceState(null, "", target);
  }, [value, inline]);

  // fecha ao clicar fora
  useEffect(() => {
    const close = (event: MouseEvent) => {
      if (box.current && !box.current.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  const query = value.trim();
  // carregando = já digitou o suficiente e a resposta ainda é de outra busca
  const loading = query.length >= 2 && result?.q !== query;
  const current = query.length >= 2 ? result : null;
  const items = current
    ? [
        ...current.topics.map((topic) => ({ href: `/app/tema/${topic.slug}`, key: `t-${topic.slug}` })),
        ...current.categories.map((category) => ({ href: `/app/categorias/${category.slug}`, key: `c-${category.slug}` })),
      ]
    : [];
  const typed = value.trim() !== defaultValue.trim();
  const showPanel = inline ? query.length >= 2 && typed : open && query.length >= 2;

  function go(href: string) {
    setOpen(false);
    router.push(href);
  }

  function onKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (!showPanel || !items.length) return;
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setActive((index) => (index + 1) % items.length);
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setActive((index) => (index <= 0 ? items.length - 1 : index - 1));
    } else if (event.key === "Enter" && active >= 0) {
      event.preventDefault();
      go(items[active].href);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }

  const inputId = compact ? "search-header" : "search-page";
  const topicCount = current?.topics.length ?? 0;

  return (
    <div ref={box} className={`search-wrap ${compact ? "search-wrap--compact" : ""} ${inline ? "search-wrap--inline" : ""}`}>
      <form action="/app/busca" className={`search ${compact ? "search--compact" : ""}`} role="search" onSubmit={() => setOpen(false)}>
        <label htmlFor={inputId} className="sr-only">Buscar matéria, tema ou palavra-chave</label>
        <Icon name="search" size={18} className="search__icon" />
        <input
          ref={input}
          id={inputId}
          name="q"
          type="search"
          value={value}
          onChange={(event) => {
            setValue(event.target.value);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          onKeyDown={onKeyDown}
          minLength={2}
          autoFocus={autoFocus}
          autoComplete="off"
          enterKeyHint="search"
          role="combobox"
          aria-expanded={showPanel}
          aria-controls={listId}
          aria-autocomplete="list"
          placeholder={compact ? "Buscar no conteúdo…" : "Ex.: Braden, sigilo, gotejamento…"}
          className="search__input"
        />
        {loading && <span className="search__spinner" aria-hidden />}
        {value && !loading && (
          <button type="button" className="search__clear" aria-label="Limpar busca" onClick={() => { setValue(""); setResult(null); input.current?.focus(); }}>
            <Icon name="x" size={16} />
          </button>
        )}
      </form>

      {showPanel && (
        <div id={listId} className={`search-panel ${inline ? "search-panel--inline" : ""}`} role="listbox" aria-label="Resultados da busca">
          {!current && loading && <p className="search-panel__empty">Buscando…</p>}
          {current && !items.length && !loading && (
            <p className="search-panel__empty">Nada encontrado para “{value.trim()}”. Tente outra palavra.</p>
          )}
          {current && current.topics.length > 0 && (
            <>
              <p className="search-panel__group">Temas</p>
              {current.topics.map((topic, index) => {
                return (
                  <button
                    key={topic.slug}
                    type="button"
                    role="option"
                    aria-selected={active === index}
                    className={`search-item ${active === index ? "is-active" : ""}`}
                    onMouseEnter={() => setActive(index)}
                    onClick={() => go(`/app/tema/${topic.slug}`)}
                  >
                    <span className="search-item__cat">{topic.category}</span>
                    <b className="search-item__title"><Highlight text={topic.title} query={value} /></b>
                    {topic.inSections.length > 0 ? (
                      <small className="search-item__where">Na seção: <Highlight text={topic.inSections.join(" · ")} query={value} /></small>
                    ) : (
                      <small className="search-item__where">{topic.description}</small>
                    )}
                  </button>
                );
              })}
            </>
          )}
          {current && current.categories.length > 0 && (
            <>
              <p className="search-panel__group">Matérias</p>
              {current.categories.map((category, i) => {
                const index = topicCount + i;
                return (
                  <button
                    key={category.slug}
                    type="button"
                    role="option"
                    aria-selected={active === index}
                    className={`search-item ${active === index ? "is-active" : ""}`}
                    onMouseEnter={() => setActive(index)}
                    onClick={() => go(`/app/categorias/${category.slug}`)}
                  >
                    <b className="search-item__title"><Highlight text={category.title} query={value} /></b>
                  </button>
                );
              })}
            </>
          )}
          {!inline && current && current.total > current.topics.length && (
            <button type="button" className="search-panel__all" onClick={() => go(`/app/busca?q=${encodeURIComponent(value.trim())}`)}>
              Ver todos os {current.total} resultados <Icon name="arrowRight" size={15} />
            </button>
          )}
        </div>
      )}
      {inline && !showPanel && children}
    </div>
  );
}
