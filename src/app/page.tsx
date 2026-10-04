import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { BrandMark, Logo } from "@/vertical/brand";
import { CategoryEmblem } from "@/components/ui/CategoryEmblem";
import { CATEGORIES, publishedCounts } from "@/vertical/content";
import { offer } from "@/vertical/offer";
import { vertical } from "@/vertical/config";
import { UtmCapture } from "@/vertical/landing/CheckoutButton";
import { Device, GlassNote, Print } from "@/vertical/landing/Device";
import { PlanCards } from "@/vertical/landing/PlanCards";
import { UtmifyPixel } from "@/vertical/landing/UtmifyPixel";
import { DEMO, ExplodeFila, ExplodeMapa, ExplodeQuestoes, ExplodeResumo, SceneMaterias, SceneMistake, ScenePdf, SceneQuiz, SceneTopic } from "@/vertical/landing/scenes";
import "@/vertical/landing/landing.css";

/*
 * Página de vendas — padrão SaaS (skill saas-padrao-pgv). O aplicativo roda
 * dentro do celular: as cenas usam o tema, a questão e os textos reais do app.
 * Copy no nível de clareza do hero: o que é, o que tem dentro e como se usa,
 * sempre com os números reais do conteúdo publicado.
 */

const counts = publishedCounts();
const AREAS = CATEGORIES.map((c) => (c.shortTitle === "Urgência" ? "Urgência e Emergência" : c.shortTitle));
const areaList = `${AREAS.slice(0, -1).join(", ")} e ${AREAS[AREAS.length - 1]}`;
const brl = (cents: number) => new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(cents / 100);
const CTA = "QUERO ACESSAR O APLICATIVO";

// ───────────────────────────── peças da página ─────────────────────────────

function SectionHead({ eyebrow, title, text, className = "" }: { eyebrow: string; title: ReactNode; text?: string; className?: string }) {
  return (
    <div className={`rv mx-auto max-w-2xl text-center ${className}`}>
      <p className="text-xs font-bold uppercase tracking-[.2em] text-[var(--lp-struct-deep)] [.surf-auth_&]:text-[var(--lp-alert)] [.surf-struct_&]:text-[var(--lp-auth-deep)]">{eyebrow}</p>
      <h2 className="mt-3 text-[2rem] leading-[1.1] sm:text-[2.6rem]">{title}</h2>
      <span className="lp-rule" aria-hidden />
      {text && <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed opacity-85 sm:text-lg">{text}</p>}
    </div>
  );
}

function CtaToPlans({ children = CTA, variant = "auth" }: { children?: ReactNode; variant?: "auth" | "light" | "alert" | "grad" }) {
  const styles = {
    auth: "bg-[var(--lp-auth)] text-white shadow-[6px_6px_0_var(--lp-auth-ink)] hover:shadow-[9px_9px_0_var(--lp-auth-ink)]",
    light: "bg-white text-[var(--lp-auth-deep)] shadow-[6px_6px_0_var(--lp-auth-ink)] hover:shadow-[9px_9px_0_var(--lp-auth-ink)]",
    alert: "bg-[var(--lp-auth-ink)] text-white shadow-[6px_6px_0_var(--lp-hl-deep)] hover:shadow-[9px_9px_0_var(--lp-hl-deep)]",
    grad: "cta-grad text-white",
  }[variant];
  const base =
    variant === "grad"
      ? "group inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl px-8 py-4 text-base font-extrabold tracking-wide transition hover:-translate-y-0.5"
      : "group inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl border-2 border-[var(--lp-auth-ink)] px-7 py-4 text-base font-extrabold tracking-wide transition hover:-translate-x-0.5 hover:-translate-y-0.5";
  return (
    <a href="#planos" className={`${base} ${styles}`}>
      {children}
      <span className="transition group-hover:translate-x-1" aria-hidden>➔</span>
    </a>
  );
}

/** Conector do "Como funciona": a seta se desenha com a rolagem. */
function FlowArrow({ flip = false }: { flip?: boolean }) {
  return (
    <svg viewBox="0 0 120 90" className={`mx-auto -my-1 h-20 w-28 ${flip ? "-scale-x-100" : ""}`} fill="none" aria-hidden>
      <path className="flow-line" d="M20 4 C 20 48, 100 30, 100 78" stroke="var(--lp-auth-ink)" strokeWidth="3.5" strokeLinecap="round" strokeDasharray="1" pathLength={1} />
      <path className="flow-head" d="M88 68 L100 84 L111 68" stroke="var(--lp-auth-ink)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" style={{ transformOrigin: "100px 78px" }} />
    </svg>
  );
}

function Stats({ className = "" }: { className?: string }) {
  return (
    <p className={`font-extrabold tracking-wide ${className}`}>
      {counts.categories} áreas · {counts.topics} temas · {counts.questions} questões
    </p>
  );
}

type Receive = { slug: string; title: string; text: string; tone?: "auth" | "struct" | "alert" };
const TONES: (Receive["tone"])[] = ["auth", undefined, "alert", undefined, "struct", undefined, "auth", undefined];
const RECEIVE: Receive[] = CATEGORIES.map((c, i) => {
  const topics = c.topics.filter((t) => t.status === "published");
  const sample = topics.slice(0, 2).map((t) => t.title.split(":")[0].trim()).join(", ");
  return { slug: c.slug, title: c.shortTitle, text: `${topics.length} ${topics.length === 1 ? "tema" : "temas"} · ${sample}${topics.length > 2 ? "…" : ""}`, tone: TONES[i] };
});

function ReceiveTile({ r, n }: { r: Receive; n: number }) {
  return (
    <article className={`rv rv-d${((n - 1) % 4) + 1} bento ${r.tone ? `bento--${r.tone}` : ""}`}>
      <span className="bento-num" aria-hidden>{String(n).padStart(2, "0")}</span>
      <span className="bento-ico" aria-hidden><CategoryEmblem slug={r.slug} size={40} /></span>
      <h3>{r.title}</h3>
      <p>{r.text}</p>
    </article>
  );
}

// ─────────────────────────────────── página ───────────────────────────────────

export default function SalesPage() {
  const [entry] = offer.plans;

  return (
    <div className="lp overflow-x-clip">
      <UtmifyPixel />
      <UtmCapture />
      <main>
        {/* 1. HERO — headline → sub → mockup → CTA */}
        <section className="surf surf-auth px-4 pb-20 pt-12 sm:pt-16">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[.22em] text-[var(--lp-alert)]">{offer.productName}</p>
            <h1 className="mt-4 text-[1.75rem] leading-[1.14] sm:text-[2.45rem]">
              Tenha em um só aplicativo as {counts.categories} áreas de Técnico de Enfermagem organizadas em <span className="hero-hl">mapas mentais, resumos visuais e questões comentadas</span>.
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/85">
              Revise <b className="text-white">{areaList}</b> pelo celular ou computador, com o conteúdo organizado para você encontrar, visualizar e praticar cada assunto.
            </p>
            <Stats className="mt-5 text-[var(--lp-alert)]" />

            <div className="relative mx-auto mt-10 flex w-fit justify-center">
              <Device width="min(70vw, 18rem)" label="Painel do aplicativo aberto no celular, com o próximo tema para revisar">
                <Print src="/landing/app/m-dash.webp" alt="Painel do aplicativo" priority />
              </Device>
              <div className="glass float-a -right-10 top-10 w-[8.4rem] rotate-2 p-2.5 text-left sm:-right-28 sm:w-44 sm:p-3.5">
                <p className="text-[9px] font-bold uppercase tracking-wide text-[var(--lp-body)] sm:text-[10px]">Questões comentadas</p>
                <p className="mt-1 text-lg font-extrabold leading-none sm:text-2xl">{counts.questions} no app</p>
                <div className="mt-2 flex h-6 items-end gap-1">
                  {[40, 55, 45, 70, 60, 90, 80].map((h, i) => <span key={i} style={{ height: `${h}%` }} className="flex-1 rounded-sm bg-[var(--lp-auth)]" />)}
                </div>
              </div>
              <GlassNote tone="buy" icon="✓" title="Você acertou!" text="A explicação aparece na hora" className="float-b -left-10 bottom-[24%] w-[10.5rem] -rotate-2 text-left sm:-left-32 sm:w-60" />
              <GlassNote icon="🧭" title="Mapa mental do tema" text={DEMO.topic} className="float-c -right-8 bottom-[6%] w-[10.5rem] rotate-1 text-left sm:-right-28 sm:w-60" />
            </div>

            <div className="mt-12 flex flex-col items-center gap-3">
              <CtaToPlans variant="light" />
              <p className="text-sm text-white/75">Pagamento único · sem mensalidade · acesso no celular e no computador</p>
            </div>
          </div>
        </section>

        {/* 2. O PROBLEMA */}
        <section className="surf surf-warm px-4 py-20">
          <div className="mx-auto max-w-4xl">
            <SectionHead eyebrow="O problema" title={<>O conteúdo do concurso está <span className="hl">espalhado</span> em apostilas, PDFs e anotações</>} text="E na hora de revisar você gasta o tempo procurando o assunto, em vez de estudar." />
            <ul className="mx-auto mt-12 grid max-w-3xl justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                ["📚", "Apostilas enormes", "para achar um único assunto"],
                ["🗂️", "PDFs em pastas diferentes", "cada matéria num lugar"],
                ["📝", "Anotações soltas", "difíceis de reencontrar"],
                ["❓", "Sem questões por tema", "para testar o que ficou"],
                ["🔁", "Erros que se perdem", "e voltam a cair na prova"],
                ["📊", "8 áreas para cobrir", "sem ver onde você está"],
              ].map(([icon, title, text], i) => (
                <li key={title} className={`rv rv-pop rv-d${(i % 3) + 1} tag-card rounded-2xl bg-white p-5 text-center ${i % 2 ? "rotate-[0.6deg]" : "-rotate-[0.6deg]"}`}>
                  <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[var(--lp-warm)] text-2xl" aria-hidden>{icon}</span>
                  <b className="mt-3 block text-[15px]">{title}</b>
                  <span className="mt-1 block text-sm text-[var(--lp-body)]">{text}</span>
                </li>
              ))}
            </ul>
            <div className="rv rv-pop tag-card tag-card--hl mx-auto mt-14 max-w-2xl rounded-3xl bg-[var(--lp-auth)] px-6 py-8 text-center text-white">
              <p className="text-2xl font-extrabold sm:text-3xl">No Revisão Técnico, as {counts.categories} áreas ficam <span className="text-[var(--lp-alert)]">em um só lugar</span>.</p>
              <p className="mt-2 text-white/85">Cada tema com mapa mental, resumo visual e questões comentadas — pronto para abrir e revisar.</p>
            </div>
          </div>
        </section>

        {/* 3. O QUE TEM EM CADA TEMA — um mockup explodido por recurso */}
        <section className="surf surf-neutral px-4 py-20">
          <div className="mx-auto max-w-5xl">
            <SectionHead eyebrow="O que tem em cada tema" title={<>Cada tema vem com <span className="hl">mapa mental, resumo visual e questões comentadas</span></>} text={`São ${counts.topics} temas das ${counts.categories} áreas, sempre com a fonte oficial indicada.`} />
            <div className="mt-14 grid gap-8 sm:grid-cols-2">
              {[
                { mock: <ExplodeMapa />, title: "Mapa mental", text: "O assunto inteiro em uma imagem: o centro e os pontos que a prova cobra." },
                { mock: <ExplodeResumo />, title: "Resumo visual", text: "Os pontos-chave numerados, para reler em poucos minutos." },
                { mock: <ExplodeQuestoes />, title: "Questões comentadas", text: "No estilo da prova, com a explicação logo depois da resposta." },
                { mock: <ExplodeFila />, title: "Revisar novamente", text: "O que você errou volta para uma fila só sua." },
              ].map((c, i) => (
                <article key={c.title} className={`rv rv-d${(i % 2) + 1} overflow-hidden rounded-3xl border-2 border-[var(--lp-auth-ink)]/10 bg-gradient-to-b from-[var(--lp-warm)] to-white`}>
                  {c.mock}
                  <div className="px-6 pb-7 text-center">
                    <h3 className="text-xl">{c.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-[var(--lp-body)]">{c.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 4. COMO FUNCIONA — setas que se desenham e acendem o próximo passo */}
        <section id="como-funciona" className="surf surf-struct scroll-mt-20 px-4 py-20">
          <div className="mx-auto max-w-xl">
            <SectionHead eyebrow="Como funciona" title={<>Como você revisa <span className="hl">em 5 passos</span></>} />
            <ol className="mt-12">
              {[
                ["🗂️", "Escolha a área", `As ${counts.categories} áreas na tela inicial.`],
                ["📖", "Abra o tema", "Ou toque em Revisar agora."],
                ["🧭", "Veja o mapa mental e o resumo", "Entenda antes de decorar."],
                ["✍️", "Responda às questões", "A explicação aparece na hora."],
                ["🔁", "Revise o que errou", "O tema volta para a sua fila."],
              ].map(([icon, title, text], i, all) => (
                <li key={title}>
                  <div className={`flow-step relative mx-auto flex max-w-sm items-center gap-4 rounded-2xl border-2 border-[var(--lp-auth-ink)] bg-white p-4 text-left shadow-[8px_8px_0_var(--lp-auth-ink)] ${i % 2 ? "sm:translate-x-10" : "sm:-translate-x-10"}`}>
                    <span className="flow-num flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-[var(--lp-auth-ink)] bg-white text-xl font-bold text-[var(--lp-auth)]">{i + 1}</span>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-bold">{title}</h3>
                      <p className="text-sm text-[var(--lp-body)]">{text}</p>
                    </div>
                    <span className="text-2xl" aria-hidden>{icon}</span>
                  </div>
                  {i < all.length - 1 && <FlowArrow flip={i % 2 === 1} />}
                </li>
              ))}
            </ol>
            <div className="rv mt-14 text-center"><CtaToPlans /></div>
          </div>
        </section>

        {/* 5. BLOCO 1 — questões comentadas (cena A viva) */}
        <section className="surf surf-neutral px-4 py-20">
          <div className="mx-auto max-w-3xl text-center">
            <div className="rv">
              <p className="text-xs font-bold uppercase tracking-[.2em] text-[var(--lp-struct-deep)]">Questões comentadas</p>
              <h2 className="mt-3 text-[2.1rem] leading-[1.08] sm:text-5xl">Pratique cada tema com <span className="hl">questões comentadas</span></h2>
              <span className="lp-rule" aria-hidden />
              <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-[var(--lp-body)]">
                Marque a alternativa, confira e leia a explicação na hora. São {counts.questions} questões no estilo da prova, distribuídas pelos {counts.topics} temas.
              </p>
            </div>
            <div className="rv relative mx-auto mt-12 flex w-fit justify-center">
              <SceneQuiz width="min(70vw, 18rem)" />
              <GlassNote tone="buy" icon="✓" title="Você acertou!" text="A explicação aparece na hora" className="float-a -left-10 top-[6%] w-[11rem] -rotate-2 text-left sm:-left-56 sm:w-60" />
              <GlassNote icon="◎" title={`${DEMO.questionCount} questões neste tema`} text={DEMO.topic} className="float-b -right-10 top-[44%] w-[10rem] rotate-2 text-left sm:-right-52 sm:w-56" />
            </div>
            <div className="rv rv-pop tag-card tag-card--hl mx-auto mt-12 flex max-w-md items-center gap-4 rounded-2xl bg-white p-5 text-left">
              <div className="shrink-0 text-center">
                <p className="text-xs font-semibold text-[var(--lp-body)]">no aplicativo</p>
                <p className="text-3xl font-extrabold text-[#06a742]">{counts.questions}</p>
              </div>
              <p className="text-sm leading-snug">questões com a <b className="text-[var(--lp-hl-deep)]">explicação da resposta</b>, em todas as {counts.categories} áreas.</p>
            </div>
            <div className="rv mt-10"><CtaToPlans /></div>
          </div>
        </section>

        {/* 6. BLOCO 2 — apostila × aplicativo */}
        <section id="exemplo" className="surf surf-warm scroll-mt-20 px-4 py-20">
          <div className="mx-auto max-w-5xl">
            <SectionHead eyebrow="Apostila × aplicativo" title={<>Em vez de procurar no PDF, <span className="hl">abra o tema pronto</span></>} text="Na apostila você rola, dá zoom e procura. No aplicativo cada tema abre organizado: mapa mental, resumo visual e questões comentadas." />
            <div className="mt-14 grid grid-cols-2 items-end gap-4 sm:gap-10">
              <figure className="rv rv-l text-center">
                <div className="relative mx-auto w-fit">
                  <span className="absolute -top-4 left-1/2 z-[80] -translate-x-1/2 whitespace-nowrap rounded-full border-2 border-dashed border-[#8a8070] bg-[#efe9dc] px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-[#625a4c]">Apostila em PDF</span>
                  <div className="opacity-90 grayscale-[35%]"><ScenePdf width="min(40vw, 15rem)" /></div>
                </div>
                <figcaption className="mt-4 text-sm font-semibold text-[#625a4c]">Zoom, espera e página 1 de 312</figcaption>
              </figure>
              <figure className="rv rv-r text-center">
                <div className="relative mx-auto w-fit">
                  <span className="win-tag">✦ Revisão Técnico</span>
                  <SceneTopic width="min(40vw, 15rem)" />
                </div>
                <figcaption className="mt-4 text-sm font-bold text-[var(--lp-auth)]">O tema abre pronto: mapa, resumo e questões</figcaption>
              </figure>
            </div>
            <div className="mt-14 grid gap-5 md:grid-cols-2">
              <div className="rv rv-l rounded-2xl border-2 border-dashed border-[#b3a991] bg-[#f1ebdd] p-6">
                <p className="mb-4 text-xs font-bold uppercase tracking-[.15em] text-[#857b68]">Apostila e PDF</p>
                <ul className="space-y-3 text-[15px] text-[#625a4c]">
                  {["Centenas de páginas para achar um assunto", "Arquivo pesado que demora no celular", "Gabarito sem explicação, no fim do livro", "Nada mostra o que você errou"].map((t) => (
                    <li key={t} className="flex gap-3"><span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 border-[#b3a991] text-[10px] font-bold">✕</span>{t}</li>
                  ))}
                </ul>
              </div>
              <div className="rv rv-r win">
                <div className="win-in h-full p-6">
                  <p className="win-pill mb-5">✦ <b>Revisão Técnico</b></p>
                  <ul className="relative space-y-3.5 text-[15px] font-medium">
                    {["Um tema por vez, com mapa mental", "Abre na hora, no celular ou no computador", "Explicação logo depois de cada resposta", "O que você errou entra na fila de revisão"].map((t) => (
                      <li key={t} className="flex items-start gap-3"><span className="win-check">✓</span>{t}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="rv mt-12 flex justify-center"><CtaToPlans /></div>
          </div>
        </section>

        {/* 7. BLOCO 3 — o que errou volta para revisão (cena C viva) */}
        <section className="surf surf-struct px-4 py-20">
          <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2">
            <div className="rv rv-l relative order-2 mx-auto flex justify-center py-6 lg:order-1">
              <SceneMistake width="min(72vw, 18rem)" />
              <GlassNote tone="bad" icon="✕" title={`A certa é a ${DEMO.correctLabel}`} text="Você vê a correta e a explicação" className="float-a -left-8 -top-1 w-[10.5rem] -rotate-2 sm:-left-32 sm:w-56 lg:-left-48" />
              <GlassNote icon="↻" title="1 revisão pendente" text="O tema entrou na sua fila" className="float-b -right-8 -bottom-1 w-[10.5rem] rotate-2 sm:-right-32 sm:w-56 lg:-right-48" />
            </div>
            <div className="order-1 text-center lg:order-2 lg:text-left">
              <div className="rv">
                <p className="text-xs font-bold uppercase tracking-[.2em] text-[var(--lp-auth-deep)]">Revisar novamente</p>
                <h2 className="mt-3 text-[2.1rem] leading-[1.08] sm:text-5xl">O que você errou <span className="hl">volta para revisão</span></h2>
                <p className="mx-auto mt-5 max-w-lg text-lg leading-relaxed text-[var(--lp-auth-ink)]/85 lg:mx-0">Errou uma questão? Você vê a alternativa certa e a explicação, e o tema entra na fila Revisar novamente. Ele sai da fila quando você acertar.</p>
              </div>
              <div className="rv mx-auto mt-8 grid max-w-md grid-cols-3 gap-3 lg:mx-0">
                {[["A certa", "aparece na hora"], ["O porquê", "vem explicado"], ["O tema", "volta para a fila"]].map(([a, b]) => (
                  <div key={a} className="tag-card rounded-2xl bg-white p-3 text-center">
                    <p className="text-sm font-extrabold text-[var(--lp-auth)]">{a}</p>
                    <p className="mt-0.5 text-xs text-[var(--lp-body)]">{b}</p>
                  </div>
                ))}
              </div>
              <p className="rv mx-auto mt-8 max-w-lg rounded-2xl border-2 border-[var(--lp-auth-ink)]/20 bg-white/75 p-4 text-left text-sm text-[var(--lp-auth-ink)] lg:mx-0">
                <b>Sem promessa vazia:</b> o aplicativo organiza sua revisão. Ele não garante aprovação e não substitui formação ou protocolo clínico.
              </p>
              <div className="rv mt-10"><CtaToPlans /></div>
            </div>
          </div>
        </section>

        {/* 8. AS 8 ÁREAS — bento + a tela Matérias rolando no celular */}
        <section className="surf surf-neutral px-4 py-20">
          <div className="mx-auto max-w-6xl">
            <SectionHead eyebrow={`As ${counts.categories} áreas`} title={<>As {counts.categories} áreas do concurso, <span className="hl">com {counts.topics} temas</span></>} text="Todas no aplicativo, cada uma com o seu progresso." />
            <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-[1fr_auto_1fr] lg:items-center">
              <div className="grid gap-4 sm:col-span-2 sm:grid-cols-2 lg:col-span-1 lg:grid-cols-1">
                {RECEIVE.slice(0, 4).map((r, i) => <ReceiveTile key={r.slug} r={r} n={i + 1} />)}
              </div>
              <div className="rv rv-pop order-first mx-auto py-4 sm:col-span-2 lg:order-none lg:col-span-1 lg:px-6">
                <SceneMaterias width="15rem" />
              </div>
              <div className="grid gap-4 sm:col-span-2 sm:grid-cols-2 lg:col-span-1 lg:grid-cols-1">
                {RECEIVE.slice(4).map((r, i) => <ReceiveTile key={r.slug} r={r} n={i + 5} />)}
              </div>
            </div>
          </div>
        </section>

        {/* 9. TUDO EM UM SÓ APLICATIVO — no lugar dos bônus (não há bônus fictício) */}
        <section className="surf surf-struct px-4 py-20">
          <div className="mx-auto max-w-3xl">
            <SectionHead eyebrow="Tudo em um só aplicativo" title={<><span className="hl">{counts.categories} áreas, {counts.topics} temas e {counts.questions} questões</span> no seu celular</>} text="Sem bônus de enfeite: o que você recebe é o aplicativo completo, com o conteúdo revisado na fonte oficial." />
            <div className="rv bonus-final mx-auto mt-12 max-w-2xl rounded-[1.5rem] p-7 text-center">
              <div className="grid grid-cols-3 gap-3">
                {[[counts.categories, "áreas"], [counts.topics, "temas"], [counts.questions, "questões"]].map(([n, l]) => (
                  <div key={l as string}>
                    <p className="text-4xl font-extrabold tracking-[-.03em] text-[var(--lp-auth)]">{n}</p>
                    <p className="text-sm font-semibold text-[var(--lp-body)]">{l}</p>
                  </div>
                ))}
              </div>
              <p className="mt-5 text-base text-[var(--lp-body)]">Cada tema com mapa mental, resumo visual, pegadinhas de prova e questões comentadas.</p>
              <div className="mt-6 flex justify-center"><CtaToPlans variant="grad" /></div>
            </div>
          </div>
        </section>

        {/* 10. PLANOS */}
        <section id="planos" className="surf surf-auth scroll-mt-16 px-4 py-20">
          <div className="mx-auto max-w-5xl">
            <SectionHead eyebrow="Planos" title={<>Escolha seu <span className="hl">acesso</span></>} text="Pagamento único pelo checkout seguro da Cakto. Sem mensalidade." />
            <PlanCards />
            <p className="rv mx-auto mt-10 max-w-xl text-center text-sm text-white/75">Depois do pagamento, você cria sua conta com o mesmo e-mail da compra e já entra no aplicativo.</p>
          </div>
        </section>

        {/* 11. GARANTIA */}
        <section className="surf surf-warm px-4 py-20">
          <div className="rv rv-pop tag-card tag-card--struct mx-auto flex max-w-3xl flex-col items-center gap-6 rounded-3xl bg-white p-8 text-center sm:flex-row sm:text-left">
            <Image src="/landing/garantia-15-dias.webp" alt={`Selo de garantia incondicional de ${offer.guaranteeDays} dias`} width={160} height={160} className="h-36 w-36 shrink-0 drop-shadow-[0_10px_18px_rgba(8,62,75,.35)] sm:h-40 sm:w-40" />
            <div>
              <h2 className="text-2xl sm:text-3xl">Garantia incondicional de {offer.guaranteeDays} dias</h2>
              <p className="mt-3 leading-relaxed text-[var(--lp-body)]">
                Entre, abra os temas e responda as questões com calma. Se não gostar, peça o reembolso em até <strong className="text-[var(--lp-ink)]">{offer.guaranteeDays} dias</strong> e devolvemos todo o seu dinheiro — sem perguntas.
              </p>
            </div>
          </div>
        </section>

        {/* 12. FAQ */}
        <section id="duvidas" className="surf surf-neutral scroll-mt-20 px-4 py-20">
          <div className="mx-auto max-w-3xl">
            <SectionHead eyebrow="Dúvidas" title={<>Perguntas <span className="hl">frequentes</span></>} />
            <div className="mt-12 space-y-3">
              {[
                ["O que tem dentro de cada tema?", "Mapa mental do assunto, resumo visual com os pontos-chave, pegadinhas de prova, questões comentadas e a fonte oficial de onde o conteúdo saiu."],
                ["Preciso instalar alguma coisa?", "Não. O aplicativo abre no navegador do celular ou do computador, com seu e-mail e senha. O progresso fica salvo nos dois."],
                ["Como recebo o acesso depois de comprar?", "Você cria sua conta com o mesmo e-mail usado na compra e confirma esse e-mail. O acesso é liberado automaticamente."],
                ["Qual a diferença entre o Básico e o Completo?", "O Básico traz as 8 áreas com mapas mentais, resumos visuais e as fontes. O Completo soma as questões comentadas, a fila Revisar novamente, o progresso por área e a busca imediata."],
                ["É mensalidade?", "Não. É pagamento único."],
                ["O aplicativo garante aprovação?", "Não. Ele organiza e facilita a sua revisão, mas o resultado depende do seu estudo. O conteúdo é educacional e não substitui protocolos clínicos."],
              ].map(([q, a], i) => (
                <details key={q} className={`rv rv-d${(i % 3) + 1} group rounded-2xl border-2 border-[var(--lp-auth-ink)]/15 bg-white p-5 transition open:border-[var(--lp-auth-ink)] open:shadow-[6px_6px_0_var(--lp-hl)] [&_summary::-webkit-details-marker]:hidden`}>
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold">
                    {q}
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--lp-warm)] text-xl text-[var(--lp-auth)] transition group-open:rotate-45 group-open:bg-[var(--lp-auth)] group-open:text-white" aria-hidden>+</span>
                  </summary>
                  <p className="mt-3 text-[15px] leading-relaxed text-[var(--lp-body)]">{a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* 13. CTA FINAL — alerta em tela cheia */}
        <section className="surf surf-alert px-4 py-20 text-center">
          <div className="rv mx-auto max-w-2xl">
            <BrandMark className="mx-auto" />
            <h2 className="mt-5 text-3xl leading-tight text-[var(--lp-auth-ink)] sm:text-5xl">As {counts.categories} áreas do concurso. <span className="italic text-[var(--lp-auth)]">Em um só aplicativo.</span></h2>
            <p className="mt-4 text-lg text-[var(--lp-auth-ink)]/80">Mapas mentais, resumos visuais e questões comentadas no celular ou no computador.</p>
            <Stats className="mt-4 text-[var(--lp-auth-ink)]" />
            <p className="mx-auto mt-5 w-fit rounded-full bg-[var(--lp-auth-ink)] px-4 py-1.5 text-xs font-bold text-[var(--lp-alert)]">⏳ A partir de {brl(entry.priceCents)} · pagamento único</p>
            <div className="mt-8"><CtaToPlans variant="alert" /></div>
          </div>
        </section>
      </main>

      {/* 14. RODAPÉ */}
      <footer className="surf surf-ink px-4 py-12 text-center text-xs">
        <div className="flex justify-center"><Logo className="lp-logo-white" /></div>
        <p className="mx-auto mt-5 max-w-2xl leading-relaxed">{vertical.disclaimer} Não há promessa de aprovação.</p>
        <p className="mt-4"><Link href="/login" className="underline-offset-2 hover:underline">Área do aluno</Link></p>
      </footer>
    </div>
  );
}
