import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const ROOT = process.cwd();
const ART_DIR = path.join(ROOT, "assets", "offer-mockups", "artwork");
const COVER_DIR = path.join(ROOT, "assets", "offer-mockups", "covers");
const GENERATED_DIR = path.join(ROOT, "assets", "offer-mockups", "generated");
const PUBLIC_DIR = path.join(ROOT, "public", "landing", "mockups");
const BRAND_MARK = path.join(ROOT, "public", "interface", "brand", "revisao-tecnico-mark.svg");

type CoverSpec = {
  slug: string;
  artwork: string;
  number: string;
  kicker: string;
  title: string[];
  subtitle: string;
  background: string;
  backgroundDeep: string;
  foreground: string;
  accent: string;
};

const covers: CoverSpec[] = [
  {
    slug: "guia-calculos",
    artwork: "calculos.png",
    number: "01",
    kicker: "GUIA DE",
    title: ["CÁLCULOS DE", "ENFERMAGEM"],
    subtitle: "PASSO A PASSO",
    background: "#0f5c6e",
    backgroundDeep: "#062f3b",
    foreground: "#ffffff",
    accent: "#f6d55c",
  },
  {
    slug: "checklist-reta-final",
    artwork: "checklist.png",
    number: "02",
    kicker: "CHECKLIST DA",
    title: ["RETA FINAL"],
    subtitle: "7 DIAS ANTES DA PROVA",
    background: "#f6d55c",
    backgroundDeep: "#e9ba25",
    foreground: "#06262f",
    accent: "#0f5c6e",
  },
  {
    slug: "guia-termos",
    artwork: "termos.png",
    number: "03",
    kicker: "GUIA DE",
    title: ["PREFIXOS,", "SUFIXOS E", "TERMOS"],
    subtitle: "DA ENFERMAGEM",
    background: "#5fb3bb",
    backgroundDeep: "#267e8a",
    foreground: "#06262f",
    accent: "#f6d55c",
  },
];

const esc = (value: string) => value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
const dataUri = (mime: string, data: Buffer | string) => `data:${mime};base64,${Buffer.from(data).toString("base64")}`;

async function coverSvg(spec: CoverSpec) {
  const [art, mark] = await Promise.all([
    readFile(path.join(ART_DIR, spec.artwork)),
    readFile(BRAND_MARK),
  ]);
  const titleStart = 280;
  const titleLines = spec.title.map((line, index) => (
    `<text x="94" y="${titleStart + index * 92}" fill="${spec.foreground}" font-family="Arial, Helvetica, sans-serif" font-size="78" font-weight="900" letter-spacing="-2">${esc(line)}</text>`
  )).join("");
  const artY = titleStart + spec.title.length * 92 + 55;

  return `
  <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="1600" viewBox="0 0 1200 1600">
    <defs>
      <linearGradient id="bg" x1="90" y1="40" x2="1110" y2="1540" gradientUnits="userSpaceOnUse">
        <stop stop-color="${spec.background}"/>
        <stop offset="1" stop-color="${spec.backgroundDeep}"/>
      </linearGradient>
      <radialGradient id="glow" cx="0" cy="0" r="1" gradientTransform="translate(880 770) rotate(120) scale(720)">
        <stop stop-color="#ffffff" stop-opacity=".22"/>
        <stop offset="1" stop-color="#ffffff" stop-opacity="0"/>
      </radialGradient>
      <filter id="artShadow" x="-20%" y="-20%" width="140%" height="150%">
        <feDropShadow dx="0" dy="24" stdDeviation="22" flood-color="#00151c" flood-opacity=".28"/>
      </filter>
    </defs>
    <rect width="1200" height="1600" rx="24" fill="url(#bg)"/>
    <rect width="1200" height="1600" rx="24" fill="url(#glow)"/>
    <path d="M0 1140C290 980 430 1240 710 1070c210-127 330-118 490-74v604H0Z" fill="#ffffff" opacity=".08"/>
    <path d="M920 0h280v470L990 330Z" fill="${spec.accent}" opacity=".94"/>
    <rect x="92" y="78" width="190" height="56" rx="28" fill="${spec.accent}"/>
    <text x="187" y="116" text-anchor="middle" fill="#06262f" font-family="Arial, Helvetica, sans-serif" font-size="28" font-weight="900" letter-spacing="3">BÔNUS ${spec.number}</text>
    <text x="94" y="224" fill="${spec.foreground}" opacity=".82" font-family="Arial, Helvetica, sans-serif" font-size="34" font-weight="800" letter-spacing="8">${esc(spec.kicker)}</text>
    ${titleLines}
    <rect x="94" y="${artY - 5}" width="${Math.min(590, 290 + spec.subtitle.length * 17)}" height="58" rx="29" fill="${spec.accent}"/>
    <text x="120" y="${artY + 34}" fill="#06262f" font-family="Arial, Helvetica, sans-serif" font-size="27" font-weight="900" letter-spacing="2">${esc(spec.subtitle)}</text>
    <image href="${dataUri("image/png", art)}" x="315" y="${artY + 92}" width="825" height="790" preserveAspectRatio="xMidYMid meet" filter="url(#artShadow)"/>
    <g transform="translate(76 1420)">
      <rect width="1048" height="112" rx="28" fill="#ffffff" opacity=".96"/>
      <image href="${dataUri("image/svg+xml", mark)}" x="24" y="14" width="84" height="84"/>
      <text x="130" y="53" fill="#102e3a" font-family="Arial, Helvetica, sans-serif" font-size="34" font-weight="900">Revisão Técnico</text>
      <text x="132" y="82" fill="#11738a" font-family="Arial, Helvetica, sans-serif" font-size="16" font-weight="800" letter-spacing="5">ENFERMAGEM</text>
    </g>
  </svg>`;
}

async function buildCovers() {
  await mkdir(COVER_DIR, { recursive: true });
  await mkdir(PUBLIC_DIR, { recursive: true });

  for (const spec of covers) {
    const svg = await coverSvg(spec);
    const svgPath = path.join(COVER_DIR, `${spec.slug}.svg`);
    const pngPath = path.join(COVER_DIR, `${spec.slug}.png`);
    await writeFile(svgPath, svg, "utf8");
    await sharp(Buffer.from(svg)).png().toFile(pngPath);
  }
}

async function buildPublishedMockups() {
  const hero = path.join(GENERATED_DIR, "oferta-completa-hero.png");
  await sharp(hero)
    .resize(2400, 1800, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png({ compressionLevel: 9 })
    .toFile(path.join(PUBLIC_DIR, "oferta-completa-frontal.png"));
  await sharp(hero)
    .resize(1800, 1350, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .webp({ quality: 91, alphaQuality: 100 })
    .toFile(path.join(PUBLIC_DIR, "oferta-completa-frontal.webp"));
  await sharp(hero)
    .resize(1800, 1800, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png({ compressionLevel: 9 })
    .toFile(path.join(PUBLIC_DIR, "oferta-completa-frontal-square.png"));
  await sharp(hero)
    .resize(1200, 1200, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .webp({ quality: 91, alphaQuality: 100 })
    .toFile(path.join(PUBLIC_DIR, "oferta-completa-frontal-square.webp"));

  for (const spec of covers) {
    const source = path.join(GENERATED_DIR, `${spec.slug}.png`);
    await sharp(source)
      .resize(1400, 1400, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .png({ compressionLevel: 9 })
      .toFile(path.join(PUBLIC_DIR, `${spec.slug}.png`));
    await sharp(source)
      .resize(900, 900, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .webp({ quality: 91, alphaQuality: 100 })
      .toFile(path.join(PUBLIC_DIR, `${spec.slug}.webp`));
  }
}

async function main() {
  await buildCovers();
  await buildPublishedMockups();
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
