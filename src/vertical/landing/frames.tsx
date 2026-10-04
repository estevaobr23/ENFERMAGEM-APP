import Image from "next/image";

/*
 * Molduras dos mockups. As telas dentro delas são capturas REAIS do aplicativo
 * (conta de demonstração com progresso), em public/landing/app/.
 *   m-*.webp  celular 390×844 @2x  (720×1558)
 *   d-*.webp  desktop 1440×900     (1600×1000)
 */

export function Phone({ src, alt, priority = false, className = "" }: { src: string; alt: string; priority?: boolean; className?: string }) {
  return (
    <div className={`lt-phone ${className}`}>
      <span className="lt-phone__notch" aria-hidden />
      <div className="lt-phone__screen">
        <Image src={`/landing/app/${src}.webp`} alt={alt} width={720} height={1558} priority={priority} sizes="(max-width: 560px) 60vw, 320px" />
      </div>
    </div>
  );
}

export function Laptop({ src, alt, priority = false, className = "" }: { src: string; alt: string; priority?: boolean; className?: string }) {
  return (
    <div className={`lt-laptop ${className}`}>
      <div className="lt-laptop__lid">
        <span className="lt-laptop__cam" aria-hidden />
        <div className="lt-laptop__screen">
          <Image src={`/landing/app/${src}.webp`} alt={alt} width={1600} height={1000} priority={priority} sizes="(max-width: 900px) 92vw, 760px" />
        </div>
      </div>
      <div className="lt-laptop__base" aria-hidden />
    </div>
  );
}

/** Notebook + celular sobrepostos: o mesmo aplicativo nas duas telas. */
export function DeviceDuo({ desktop = "d-dash", mobile = "m-dash", priority = false, className = "" }: { desktop?: string; mobile?: string; priority?: boolean; className?: string }) {
  return (
    <div className={`lt-duo ${className}`}>
      <Laptop src={desktop} alt="Painel real do aplicativo no computador: tema sugerido, progresso e matérias" priority={priority} />
      <Phone src={mobile} alt="O mesmo painel no celular, com o próximo tema para revisar" priority={priority} className="lt-duo__phone" />
    </div>
  );
}
