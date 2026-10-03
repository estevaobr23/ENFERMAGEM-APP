import type { CSSProperties, ReactNode } from "react";

export function Device({ children, width = "16rem", className = "", label }: { children: ReactNode; width?: string; className?: string; label: string }) {
  return (
    <div className={`dv ${className}`} style={{ "--dv-w": width } as CSSProperties} role="img" aria-label={label}>
      <i className="dv-side dv-side--one" aria-hidden /><i className="dv-side dv-side--two" aria-hidden /><i className="dv-side dv-side--power" aria-hidden />
      <div className="dv-frame"><div className="dv-screen"><div className="dv-content" aria-hidden>{children}</div><div className="dv-status" aria-hidden><span>9:41</span><span>▮▮▮ ◔</span></div><div className="dv-island" aria-hidden /><div className="dv-home" aria-hidden /><div className="dv-glare" aria-hidden /></div></div>
    </div>
  );
}

export function GlassNote({ icon, title, text, className = "", tone = "brand" }: { icon: string; title: string; text: string; className?: string; tone?: "brand" | "bad" | "ok" }) {
  return <div className={`lp-glass lp-glass--${tone} ${className}`}><span aria-hidden>{icon}</span><div><b>{title}</b><small>{text}</small></div></div>;
}

