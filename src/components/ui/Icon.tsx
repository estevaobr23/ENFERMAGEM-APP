import type { SVGProps } from "react";

/*
 * Ícones de traço (24×24, stroke 2) desenhados para o app. Um único
 * componente evita dependência e mantém o mesmo peso visual em toda a UI.
 */
const PATHS = {
  home: "M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6h-6v6H4a1 1 0 0 1-1-1z",
  layers: "m12 3 9 5-9 5-9-5 9-5Zm-9 9 9 5 9-5M3 16l9 5 9-5",
  search: "M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14Zm9 16-4.3-4.3",
  bookmark: "M6 3h12a1 1 0 0 1 1 1v17l-7-4-7 4V4a1 1 0 0 1 1-1Z",
  chart: "M4 20V10m6 10V4m6 16v-7m4 7H2",
  refresh: "M20 11a8 8 0 0 0-14.9-3.9L4 9m0-5v5h5M4 13a8 8 0 0 0 14.9 3.9L20 15m0 5v-5h-5",
  user: "M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm-8 9a8 8 0 0 1 16 0",
  check: "m5 12.5 4.5 4.5L19 7.5",
  x: "M6 6l12 12M18 6 6 18",
  arrowRight: "M5 12h14m-6-6 6 6-6 6",
  arrowLeft: "M19 12H5m6-6-6 6 6 6",
  chevronDown: "m6 9 6 6 6-6",
  chevronRight: "m9 6 6 6-6 6",
  clock: "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm0 4.5V12l3 2",
  list: "M9 6h11M9 12h11M9 18h11M4.5 6h.01M4.5 12h.01M4.5 18h.01",
  star: "m12 3 2.8 5.7 6.2.9-4.5 4.4 1 6.2L12 17.3 6.5 20.2l1-6.2L3 9.6l6.2-.9Z",
  book: "M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2Zm0 16a2 2 0 0 1 2-2h13v2",
  target: "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm0 4a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 4a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z",
  share: "M18 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM6 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm12 7a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM8.6 13.5l6.8 4M15.4 6.5l-6.8 4",
  map: "M9 4 3 6v14l6-2 6 2 6-2V4l-6 2-6-2Zm0 0v14m6-12v14",
  alert: "M12 3 2 20h20L12 3Zm0 6v5m0 3h.01",
  bulb: "M9 18h6m-5 3h4M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0 0 12 3Z",
  scale: "M12 3v18m-7 0h14M5 7h14M5 7l-3 7a3 3 0 0 0 6 0Zm14 0-3 7a3 3 0 0 0 6 0Z",
  steps: "M4 20h5v-5h5v-5h5V5",
  shield: "M12 3 4 6v6c0 5 3.4 8.3 8 9 4.6-.7 8-4 8-9V6Z",
  pencil: "M4 20h4L19 9l-4-4L4 16v4Zm9-13 4 4",
  grid: "M4 4h7v7H4zm9 0h7v7h-7zM4 13h7v7H4zm9 0h7v7h-7z",
  play: "M7 4.5v15l12-7.5Z",
  menu: "M4 6h16M4 12h16M4 18h16",
  logout: "M15 4h4a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-4M10 17l5-5-5-5m5 5H3",
  sparkles: "M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8ZM19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8Z",
  link: "M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1",
  mail: "M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm0 0 8 7 8-7",
  folder: "M3 7a1 1 0 0 1 1-1h5l2 2.5h9a1 1 0 0 1 1 1V18a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1Z",
  whatsapp: "M5 20l1.3-3.9A8 8 0 1 1 9.8 19L5 20Zm4-11c0 3 2.5 6 6 6 .6 0 1-.4 1-1v-1l-2-1-1 1a5 5 0 0 1-3-3l1-1-1-2H9Z",
} as const;

export type IconName = keyof typeof PATHS;

export function Icon({ name, size = 20, className = "", strokeWidth = 2, ...rest }: { name: IconName; size?: number; strokeWidth?: number } & Omit<SVGProps<SVGSVGElement>, "name">) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`shrink-0 ${className}`}
      aria-hidden
      {...rest}
    >
      <path d={PATHS[name]} />
    </svg>
  );
}
