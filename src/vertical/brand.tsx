import Image from "next/image";
import Link from "next/link";

export function Logo({ href = "/", className = "" }: { href?: string; className?: string }) {
  return (
    <Link href={href} className={`inline-flex items-center gap-2.5 text-left ${className}`} aria-label="Revisão Técnico — início">
      <Image src="/interface/brand/revisao-tecnico-mark.svg" alt="" width={44} height={44} className="h-11 w-11 shrink-0" priority />
      <span className="leading-none">
        <b className="block text-[1rem] tracking-[-0.025em] text-ink">Revisão Técnico</b>
        <span className="mt-1 block text-[0.66rem] font-bold uppercase tracking-[0.16em] text-brand">Enfermagem</span>
      </span>
    </Link>
  );
}

export function BrandMark({ className = "" }: { className?: string }) {
  return (
    <Image src="/interface/brand/revisao-tecnico-mark.svg" alt="" width={52} height={52} className={`h-[52px] w-[52px] ${className}`} />
  );
}
