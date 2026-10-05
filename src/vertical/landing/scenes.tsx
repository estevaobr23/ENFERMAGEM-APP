import Image from "next/image";
import type React from "react";
import { findTopic } from "@/vertical/content";
import { Device, Laptop } from "./Device";

/*
 * Cenas que rodam DENTRO do celular. Tudo em CSS (landing.css): nada de vídeo,
 * nada de GIF. Os dados vêm do conteúdo real publicado no aplicativo — o mesmo
 * tema, a mesma questão, as mesmas alternativas, a mesma explicação e os
 * mesmos textos de correção ("Você acertou!", "Esse ponto entrou em Revisar
 * novamente.") que o aluno vê no app.
 */

const { category, topic } = findTopic("higiene-das-maos-cinco-momentos");
const QUESTIONS = topic.questions.filter((q) => q.status === "published");
const QUESTION = QUESTIONS[0];
const CORRECT = QUESTION.options.find((o) => o.correct)!;
const POSITION = category.topics.findIndex((t) => t.slug === topic.slug) + 1;
const MAP = topic.map.spec;

export const DEMO = {
  category: category.title,
  categoryShort: category.shortTitle,
  topic: topic.title,
  questionCount: QUESTIONS.length,
  sectionCount: topic.sections.length,
  correctLabel: CORRECT.label,
  firstKeyPoint: topic.keyPoints[0],
};

/** Topo do aplicativo, igual ao do app (logo + busca + revisar + avatar). */
function AppBar() {
  return (
    <div className="ap-bar">
      <span className="ap-logo"><Image src="/interface/brand/revisao-tecnico-mark.svg" alt="" fill sizes="2rem" /></span>
      <span className="ap-brand"><b>Revisão Técnico</b><i>ENFERMAGEM</i></span>
      <span className="ap-ico">⌕</span>
      <span className="ap-ico">↻</span>
      <span className="ap-avatar">A</span>
    </div>
  );
}

function QuizCard({ mode }: { mode: "right" | "wrong" }) {
  return (
    <>
      <div className="qz-head">
        <span className="qz-badge">◎</span>
        <span className="qz-topic"><i>TESTE DO TEMA</i><b>{topic.title}</b></span>
      </div>
      <div className="qz-dots">{QUESTIONS.map((q, i) => <i key={i} className={i === 0 ? `qz-dot1 qz-dot1--${mode}` : ""} />)}</div>
      <p className="qz-meta"><b>Questão 1 de {QUESTIONS.length}</b><span>Fácil</span></p>
      <p className="qz-stem">{QUESTION.stem}</p>
      {QUESTION.options.map((o, i) => (
        <div key={o.label} className={`qz-opt qz-opt-${i + 1} ${o.correct ? "is-correct" : ""}`}>
          <span className="qz-letter"><em>{o.label}</em></span>
          <span className="qz-text">{o.text}</span>
        </div>
      ))}
      <div className="qz-btn">Conferir resposta</div>
      {mode === "right" ? (
        <div className="qz-fb qz-fb--ok"><b>✓ Você acertou!</b><p>{QUESTION.explanation}</p></div>
      ) : (
        <div className="qz-fb qz-fb--bad"><b>✕ Ainda não. A resposta certa é a {CORRECT.label}.</b><p>Esse ponto entrou em Revisar novamente.</p></div>
      )}
    </>
  );
}

// ─────────────── CENA A — testa o que lembra e a correção vem na hora — ciclo 10s ───────────────

export function SceneQuiz({ width, still = false }: { width?: string; still?: boolean }) {
  return (
    <Device width={width} label={`Aluno responde uma questão de ${topic.title} e recebe a correção explicada na hora`}>
      <div className={`ui ui-app sa ${still ? "still" : ""}`}>
        <AppBar />
        <QuizCard mode="right" />
        {!still && <span className="finger sa-finger" aria-hidden />}
      </div>
    </Device>
  );
}

// ─────────────── CENA B1 — a apostila em PDF (rascunho) — ciclo 9s ───────────────

export function ScenePdf({ width }: { width?: string }) {
  return (
    <Device width={width} label="Apostila em PDF: arquivo pesado, texto miúdo e zoom para achar o assunto">
      <div className="ui pdf">
        <div className="pdf-bar"><b /><span className="truncate">apostila_tecnico_enfermagem_completa.pdf</span></div>
        <div className="pdf-page">
          <p>MÓDULO 3 — {category.title.toUpperCase()}</p>
          <div className="pdf-lines">{Array.from({ length: 30 }).map((_, i) => <i key={i} />)}</div>
        </div>
        <span className="pdf-pinch" aria-hidden />
        <div className="pdf-pager">Página 1 de 312</div>
        <div className="pdf-loading"><i />Baixando arquivo… 23,4 MB</div>
      </div>
    </Device>
  );
}

// ─────────────── CENA B2 — o tema aberto no app, rolando sozinho — ciclo 11s ───────────────

function TopicPage() {
  return (
    <>
      <p className="tp-crumbs">Matérias › <b>{category.shortTitle}</b> › Tema {POSITION} de {category.topics.length}</p>
      <p className="tp-title">{topic.title}</p>
      <p className="tp-desc">{topic.description}</p>
      <p className="tp-meta"><span>☰ {topic.sections.length} seções</span><span>◎ {QUESTIONS.length} questões no teste</span></p>
      <div className="tp-steps"><span className="on">1 Conteúdo</span><span>2 Resumo</span><span>3 Quiz</span></div>
      <div className="tp-map">
        <p className="tp-map-label">MAPA MENTAL DO TEMA</p>
        <div className="tp-center">{MAP.center}</div>
        <div className="tp-blocks">
          {MAP.blocks.map((b) => (
            <div key={b.title} className={`tp-block tp-block--${b.tone}`}>
              <b>{b.icon} {b.title}</b>
              {b.items.map((it) => <span key={it}>{it}</span>)}
            </div>
          ))}
        </div>
      </div>
      <div className="tp-kp">
        <p className="tp-map-label">PONTOS-CHAVE</p>
        {topic.keyPoints.slice(0, 4).map((k, i) => <p key={k}><i>{i + 1}</i>{k}</p>)}
      </div>
    </>
  );
}

export function SceneTopic({ width, still = false }: { width?: string; still?: boolean }) {
  return (
    <Device width={width} label={`Tema ${topic.title} aberto no aplicativo: mapa mental e pontos-chave`}>
      <div className={`ui ui-app ${still ? "still" : ""}`}>
        <div className="tp-scroll">
          <AppBar />
          <TopicPage />
        </div>
      </div>
    </Device>
  );
}

// ─────────────── CENA C — o erro vira o próximo ponto de estudo — ciclo 12s ───────────────

function ReviewList({ fresh = true }: { fresh?: boolean }) {
  const others = category.topics.filter((t) => t.slug !== topic.slug && t.status === "published").slice(0, 2);
  return (
    <div className="rq-wrap">
      <p className="rq-eyebrow">FILA DE REFORÇO</p>
      <p className="rq-title">Revisar novamente</p>
      <p className="rq-text">Os temas das questões que você errou. Acerte numa nova tentativa e o item sai da fila.</p>
      <div className={`rq-item ${fresh ? "rq-new" : "rq-item--hot"}`}>
        <span className="rq-ico">↻</span>
        <span><i>{category.shortTitle.toUpperCase()}</i><b>{topic.title}</b><small>1 questão pendente · refazer o teste</small></span>
      </div>
      {others.map((t) => (
        <div key={t.slug} className="rq-item">
          <span className="rq-ico">↻</span>
          <span><i>{category.shortTitle.toUpperCase()}</i><b>{t.title}</b><small>1 questão pendente · refazer o teste</small></span>
        </div>
      ))}
    </div>
  );
}

export function SceneMistake({ width }: { width?: string }) {
  return (
    <Device width={width} label="Aluno erra a questão, vê a resposta certa e o tema entra na fila Revisar novamente">
      <div className="ui ui-app sc-quiz">
        <AppBar />
        <QuizCard mode="wrong" />
      </div>
      <div className="ui ui-app sc-queue">
        <AppBar />
        <ReviewList />
      </div>
      <span className="finger sc-finger" aria-hidden />
    </Device>
  );
}

// ─────────────── CENA E — o tema aberto no computador, percorrendo as partes — ciclo 20s ───────────────
// Prints reais da tela do tema (1440×900 @2x, conta de teste local). O índice
// lateral do próprio app acende a parte atual em cada quadro.

const DESK_FRAMES = [
  { src: "/landing/app/tema/desk-1.webp", label: "Prancha ilustrada" },
  { src: "/landing/app/tema/desk-2.webp", label: "Passo a passo" },
  { src: "/landing/app/tema/desk-3.webp", label: "Números que caem" },
  { src: "/landing/app/tema/desk-4.webp", label: "Pegadinhas" },
  { src: "/landing/app/tema/desk-5.webp", label: "Resumo final" },
];
const FRAME_S = 4;

export function SceneTemaDesktop() {
  const delay = (i: number) => ({ animationDelay: `${i * FRAME_S - 0.6}s` });
  return (
    <div>
      <Laptop label={`Tema ${topic.title} aberto no computador: prancha ilustrada, passo a passo, números que caem, pegadinhas e resumo final`}>
        {DESK_FRAMES.map((f, i) => (
          <div key={f.src} className={`lt-frame ${i === 0 ? "lt-frame--first" : ""}`} style={delay(i)}>
            <Image src={f.src} alt="" fill sizes="(min-width: 1024px) 56rem, 92vw" className="object-cover object-top" />
          </div>
        ))}
      </Laptop>
      <ol className="mt-8 flex flex-wrap justify-center gap-2" aria-hidden>
        {DESK_FRAMES.map((f, i) => (
          <li key={f.label} className={`lt-cap ${i === 0 ? "lt-cap--first" : ""}`} style={delay(i)}>
            <span>{String(i + 1).padStart(2, "0")}</span>{f.label}
          </li>
        ))}
      </ol>
    </div>
  );
}

// ─────────────── CENA F — um notebook por parte do tema (cards da seção 3) ───────────────
// Cada notebook mostra só a sua parte, com um movimento que prova aquela parte:
// passeio pela prancha, rolagem pelo conteúdo, destaque em cada número, resposta abrindo.

export type TemaPart = "prancha" | "resumo" | "pegadinhas" | "passos" | "numeros" | "caso";

const SHOT = "/landing/app/tema";
const PART_SHOTS = {
  resumo: { w: 1400, h: 1227 },
  pegadinhas: { w: 1400, h: 2037 },
  passos: { w: 1400, h: 1371 },
  numeros: { w: 1400, h: 889 },
  caso: { w: 1400, h: 949 },
} as const;

/** Rola o recorte até o fim e volta; a distância sai da proporção da imagem × tela 16:10. */
function PanShot({ part }: { part: "resumo" | "pegadinhas" | "passos" }) {
  const { w, h } = PART_SHOTS[part];
  const pan = Math.max(0, 1 - w / (1.6 * h)) * 100;
  return (
    <div className="lt-pan" style={{ "--pan": `-${pan.toFixed(1)}%` } as React.CSSProperties}>
      <Image src={`${SHOT}/parte-${part}.webp`} alt="" width={w} height={h} sizes="(min-width: 1024px) 22rem, (min-width: 640px) 42vw, 84vw" className="block h-auto w-full" />
    </div>
  );
}

function NumbersShot() {
  const { w, h } = PART_SHOTS.numeros;
  return (
    <div className="relative">
      <Image src={`${SHOT}/parte-numeros.webp`} alt="" width={w} height={h} sizes="(min-width: 1024px) 22rem, (min-width: 640px) 42vw, 84vw" className="block h-auto w-full" />
      <span className="lt-ring" aria-hidden />
    </div>
  );
}

function CaseShot() {
  const { w, h } = PART_SHOTS.caso;
  const sizes = "(min-width: 1024px) 22rem, (min-width: 640px) 42vw, 84vw";
  return (
    <div className="relative">
      <Image src={`${SHOT}/parte-caso.webp`} alt="" width={w} height={h} sizes={sizes} className="block h-auto w-full" />
      <div className="lt-case-closed">
        <Image src={`${SHOT}/parte-caso-fechado.webp`} alt="" width={1400} height={643} sizes={sizes} className="block h-auto w-full" />
      </div>
      <span className="lt-tap" aria-hidden />
    </div>
  );
}

export function TemaPartLaptop({ part, label }: { part: TemaPart; label: string }) {
  return (
    <Laptop label={label} className="lt--sm">
      {part === "prancha" ? (
        <div className="lt-tour">
          <Image src="/content/visual-v2/biosseguranca/biosseguranca-cinco-momentos-ilustrado.svg" alt="" width={1536} height={1024} unoptimized className="block h-auto w-full" />
        </div>
      ) : part === "numeros" ? (
        <NumbersShot />
      ) : part === "caso" ? (
        <CaseShot />
      ) : (
        <PanShot part={part} />
      )}
    </Laptop>
  );
}

// ─────────────── CENA D — a tela Matérias rolando até a última área — ciclo 14s ───────────────
// Print real da página inteira (conta demo), com o topo e a barra inferior fixos.

export function SceneMaterias({ width }: { width?: string }) {
  return (
    <Device width={width} label="Tela Matérias do aplicativo rolando e mostrando as 8 áreas com o progresso de cada uma">
      <div className="mt-wrap">
        <div className="mt-scroll">
          <Image src="/landing/app/cats-full.webp" alt="" width={720} height={3689} unoptimized sizes="15rem" />
        </div>
        <Image src="/landing/app/cats-head.webp" alt="" width={720} height={111} unoptimized className="mt-head" sizes="15rem" />
        <Image src="/landing/app/cats-nav.webp" alt="" width={720} height={124} unoptimized className="mt-nav" sizes="15rem" />
      </div>
    </Device>
  );
}
