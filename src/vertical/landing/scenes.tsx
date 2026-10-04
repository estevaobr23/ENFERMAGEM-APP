import Image from "next/image";
import { findTopic } from "@/vertical/content";
import { Device } from "./Device";

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
        <p className="tp-map-label">MAPA VISUAL DO TEMA</p>
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
    <Device width={width} label={`Tema ${topic.title} aberto no aplicativo: mapa visual e pontos-chave`}>
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

// ─────────────── MOCKUPS EXPLODIDOS (seção "O que é") ───────────────
// Um celular pequeno com a tela real + as peças daquele recurso saltando da tela.

export function ExplodeMapa() {
  return (
    <div className="xp">
      <SceneTopic width="10.5rem" still />
      {MAP.blocks.map((b, i) => (
        <span key={b.title} className={`xp-part xp-chip xp-chip--${b.tone} ${["float-a left-0 top-8 -rotate-6", "float-b right-0 top-20 rotate-6", "float-c left-2 bottom-10 rotate-3"][i]}`}>
          {b.icon} {b.title}
        </span>
      ))}
    </div>
  );
}

export function ExplodeResumo() {
  return (
    <div className="xp">
      <Device width="10.5rem">
        <div className="ui ui-app still">
          <AppBar />
          <div className="tp-kp tp-kp--full">
            <p className="tp-map-label">O QUE LEVAR PARA A PROVA</p>
            {topic.keyPoints.slice(0, 6).map((k, i) => <p key={k}><i>{i + 1}</i>{k}</p>)}
          </div>
        </div>
      </Device>
      <div className="xp-part float-a right-0 top-6 w-40 rounded-xl bg-white p-2.5 text-left rotate-3">
        <p className="mb-1 text-[9px] font-bold uppercase tracking-wide text-[var(--lp-hl-deep)]">Pontos-chave</p>
        {topic.keyPoints.slice(0, 3).map((k, i) => (
          <p key={k} className="flex gap-1.5 text-[10px] leading-snug"><b className="text-[var(--lp-auth)]">{i + 1}</b><span className="line-clamp-1">{k}</span></p>
        ))}
      </div>
      <span className="xp-part float-b left-0 bottom-8 rounded-full bg-[var(--lp-alert)] px-3 py-1.5 text-xs font-extrabold text-[var(--lp-auth-ink)] -rotate-3">{topic.sections.length} seções · 1 tema</span>
    </div>
  );
}

export function ExplodeQuestoes() {
  return (
    <div className="xp">
      <SceneQuiz width="10.5rem" still />
      <div className="xp-part float-a right-0 top-8 rounded-xl bg-[#e3f4ea] px-3 py-2 text-left rotate-3">
        <p className="text-xs font-extrabold text-[#127a3e]">✓ Você acertou!</p>
        <p className="text-[10px] text-[#2d5a40]">correção explicada na hora</p>
      </div>
      <span className="xp-part float-b left-0 bottom-10 flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--lp-auth)] text-xl font-black text-white -rotate-6">{CORRECT.label}</span>
    </div>
  );
}

export function ExplodeFila() {
  return (
    <div className="xp">
      <Device width="10.5rem">
        <div className="ui ui-app still">
          <AppBar />
          <ReviewList fresh={false} />
        </div>
      </Device>
      <span className="xp-part float-a right-0 top-8 rounded-full bg-[var(--lp-hl)] px-3 py-1.5 text-xs font-extrabold text-white rotate-6">↻ 1 questão pendente</span>
      <div className="xp-part float-b left-0 bottom-8 w-36 rounded-xl bg-white p-2.5 text-left -rotate-3">
        <p className="text-[9px] font-bold uppercase tracking-wide text-[var(--lp-body)]">Errou?</p>
        <p className="text-[11px] font-semibold leading-snug">O tema volta para a sua fila sozinho</p>
      </div>
    </div>
  );
}
