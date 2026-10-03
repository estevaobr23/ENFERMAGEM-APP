import Image from "next/image";

const CATEGORY_EMBLEMS: Record<string, string> = {
  sus: "/interface/categories/sus.webp",
  fundamentos: "/interface/categories/fundamentos.webp",
  biosseguranca: "/interface/categories/biosseguranca.webp",
  "urgencia-e-emergencia": "/interface/categories/urgencia-e-emergencia.webp",
  "saude-da-mulher": "/interface/categories/saude-da-mulher.webp",
  "saude-da-crianca": "/interface/categories/saude-da-crianca.webp",
  "etica-e-legislacao": "/interface/categories/etica-e-legislacao.webp",
  "calculos-de-enfermagem": "/interface/categories/calculos-de-enfermagem.webp",
};

export function categoryEmblemPath(slug: string) {
  return CATEGORY_EMBLEMS[slug];
}

export function CategoryEmblem({
  slug,
  alt = "",
  className = "",
  size = 64,
}: {
  slug: string;
  alt?: string;
  className?: string;
  size?: number;
}) {
  const src = categoryEmblemPath(slug);
  if (!src) return null;

  return (
    <Image
      src={src}
      alt={alt}
      width={size}
      height={size}
      sizes={`${size}px`}
      className={`category-emblem ${className}`}
    />
  );
}
