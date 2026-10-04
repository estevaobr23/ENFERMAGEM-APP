import Script from "next/script";

/** Pixel da UTMify (só na página de vendas). O ID pode ser trocado por NEXT_PUBLIC_UTMIFY_PIXEL_ID. */
const PIXEL_ID = process.env.NEXT_PUBLIC_UTMIFY_PIXEL_ID || "6ac1b13db5dc638593b7b74b";

// mesmo efeito do snippet ofuscado da UTMify: define window.pixelId e só então carrega o pixel.js
const SNIPPET = `(function(){window.pixelId=${JSON.stringify(PIXEL_ID)};var s=document.createElement("script");s.src="https://cdn.utmify.com.br/scripts/pixel/pixel.js";s.async=true;s.defer=true;(document.head||document.documentElement).appendChild(s);})();`;

export function UtmifyPixel() {
  return <Script id="utmify-pixel" strategy="afterInteractive">{SNIPPET}</Script>;
}
