import Image from "next/image";
import type { CSSProperties, ReactNode } from "react";

/**
 * Celular 9:16 em CSS puro: moldura metálica, Dynamic Island, barra de status,
 * botões laterais, reflexo no vidro e indicador de home. O conteúdo da tela usa
 * unidades cqw (% da largura da tela), então escala junto em qualquer tamanho.
 */
export function Device({
  children,
  width = "16rem",
  statusLight = false,
  className = "",
  style,
  label,
}: {
  children: ReactNode;
  width?: string;
  statusLight?: boolean;
  className?: string;
  style?: CSSProperties;
  label?: string;
}) {
  return (
    <div className={`dv ${className}`} style={{ "--dv-w": width, ...style } as CSSProperties} role={label ? "img" : undefined} aria-label={label}>
      <span className="dv-btn dv-btn--silent" aria-hidden />
      <span className="dv-btn dv-btn--vup" aria-hidden />
      <span className="dv-btn dv-btn--vdown" aria-hidden />
      <span className="dv-btn dv-btn--power" aria-hidden />
      <div className="dv-frame">
        <div className="dv-screen">
          <div className="dv-content">{children}</div>
          <div className={`dv-status ${statusLight ? "dv-status--light" : ""}`} aria-hidden>
            <span>9:41</span>
            <span className="dv-status-icons">
              <span className="dv-bars"><i /><i /><i /><i /></span>
              <span className="dv-batt" />
            </span>
          </div>
          <div className="dv-island" aria-hidden />
          <div className="dv-home" aria-hidden />
          <div className="dv-glare" aria-hidden />
        </div>
      </div>
    </div>
  );
}

/** Notebook 16:10 em CSS puro: tampa com borda fina, câmera, reflexo e base de alumínio. */
export function Laptop({ children, label, className = "" }: { children: ReactNode; label?: string; className?: string }) {
  return (
    <div className={`lt ${className}`} role={label ? "img" : undefined} aria-label={label}>
      <div className="lt-lid">
        <span className="lt-cam" aria-hidden />
        <div className="lt-screen">
          {children}
          <div className="lt-glare" aria-hidden />
        </div>
      </div>
      <div className="lt-base" aria-hidden />
    </div>
  );
}

/** Cartão de vidro flutuante: sempre um RESULTADO, nunca um recurso. */
export function GlassNote({ icon, title, text, className = "", tone = "brand" }: { icon: ReactNode; title: string; text?: string; className?: string; tone?: "brand" | "buy" | "bad" }) {
  const bg = tone === "buy" ? "#06a742" : tone === "bad" ? "hsl(354,76%,50%)" : "var(--lp-auth)";
  return (
    <div className={`glass flex items-start gap-2 p-2 sm:gap-2.5 sm:p-3 ${className}`}>
      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-[0.55rem] text-sm font-black text-white sm:h-9 sm:w-9" style={{ background: bg }}>
        {icon}
      </span>
      <div className="min-w-0 flex-1">
        <p className="truncate text-[11px] font-bold sm:text-[13px]">{title}</p>
        {text && <p className="mt-0.5 line-clamp-2 text-[10px] leading-snug text-[var(--lp-body)] sm:text-[12px]">{text}</p>}
      </div>
    </div>
  );
}

/** Print real do app (390×844 @2x) abaixo da barra de status do celular. */
export function Print({ src, alt, priority = false }: { src: string; alt: string; priority?: boolean }) {
  return (
    <div className="dv-print">
      <Image src={src} alt={alt} fill priority={priority} unoptimized className="object-cover object-top" sizes="18rem" />
    </div>
  );
}
