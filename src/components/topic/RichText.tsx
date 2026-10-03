import { Fragment } from "react";

/**
 * Texto de conteúdo com dois marcadores inline:
 *   ==grifo==  → marca-texto (o ponto que a banca cobra)
 *   **forte**  → negrito
 * Nada de HTML vindo do banco: o texto vira nós React.
 */
export function RichText({ text }: { text: string }) {
  const parts = text.split(/(==[^=]+==|\*\*[^*]+\*\*)/g).filter(Boolean);
  return (
    <>
      {parts.map((part, index) => {
        if (part.startsWith("==") && part.endsWith("==")) return <mark key={index} className="mark">{part.slice(2, -2)}</mark>;
        if (part.startsWith("**") && part.endsWith("**")) return <strong key={index}>{part.slice(2, -2)}</strong>;
        return <Fragment key={index}>{part}</Fragment>;
      })}
    </>
  );
}

/** Versão sem marcação (atributos, aria-label, títulos de aba). */
export function plain(text: string) {
  return text.replace(/==|\*\*/g, "");
}
