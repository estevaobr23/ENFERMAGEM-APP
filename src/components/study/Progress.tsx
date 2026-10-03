import type { IconName } from "@/components/ui/Icon";
import { Icon } from "@/components/ui/Icon";

export function ProgressBar({ value, label, detail, className = "", tone }: { value: number; label?: string; detail?: string; className?: string; tone?: string }) {
  const safe = Math.max(0, Math.min(100, Math.round(value)));
  return (
    <div className={`${tone ? `tone-${tone}` : ""} ${className}`}>
      {label && (
        <div className="mb-2 flex items-center justify-between gap-3 text-sm">
          <span className="font-semibold text-body">{label}</span>
          <b className="text-ink">{detail ?? `${safe}%`}</b>
        </div>
      )}
      <div className="pbar" role="progressbar" aria-label={label ?? "Progresso"} aria-valuemin={0} aria-valuemax={100} aria-valuenow={safe}>
        <div className={`pbar__fill ${tone ? "pbar__fill--tone" : ""}`} style={{ width: `${safe}%` }} />
      </div>
    </div>
  );
}

export function ProgressRing({ value, label, size = "md" }: { value: number; label: string; size?: "sm" | "md" | "lg" }) {
  const safe = Math.max(0, Math.min(100, Math.round(value)));
  return (
    <div className={`ring ring--${size}`} style={{ ["--pct" as string]: safe }} role="img" aria-label={`${label || "Concluído"}: ${safe}%`}>
      <span>
        <b>{safe}%</b>
        {label && size !== "sm" && <small>{label}</small>}
      </span>
    </div>
  );
}

export function StatTile({ icon, value, label, tone = "brand" }: { icon: IconName; value: string | number; label: string; tone?: "brand" | "ok" | "bad" | "hl" }) {
  return (
    <div className={`stat stat--${tone}`}>
      <span className="stat__icon"><Icon name={icon} size={17} /></span>
      <b className="stat__value">{value}</b>
      <span className="stat__label">{label}</span>
    </div>
  );
}
