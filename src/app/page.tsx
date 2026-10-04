import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { BrandMark, Logo } from "@/vertical/brand";
import { CategoryEmblem } from "@/components/ui/CategoryEmblem";
import { CATEGORIES, publishedCounts } from "@/vertical/content";
import { offer } from "@/vertical/offer";
import { vertical } from "@/vertical/config";
import { UtmCapture } from "@/vertical/landing/CheckoutButton";
import { Device, GlassNote } from "@/vertical/landing/Device";
import { PlanCards } from "@/vertical/landing/PlanCards";
import { UtmifyPixel } from "@/vertical/landing/UtmifyPixel";
import { DEMO, ExplodeFila, ExplodeMapa, ExplodeQuestoes, ExplodeResumo, SceneMistake, ScenePdf, SceneQuiz, SceneTopic } from "@/vertical/landing/scenes";
import "@/vertical/landing/landing.css";

/*
 * Página de vendas — padrão SaaS (skill saas-padrao-pgv). O aplicativo roda
 * dentro do celular: as cenas usam o tema, a questão e os textos reais do app.
 * Hero e "O que você recebe" usam prints reais (conta demo) dentro do Device.
 */

const counts = publishedCounts();
const PRINTS = { dash: "/landing/app/m-dash.webp", cats: "/landing/app/m-cats.webp" };
const brl = (cents: number) => new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(cents / 100);

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

function CtaToPlans({ children = "QUERO REVISAR COM MAIS CLAREZA", variant = "auth" }: { children?: ReactNode; variant?: "auth" | "light" | "alert" | "grad" }) {
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

type Receive = { slug: string; title: string; text: string; tone?: "auth" | "struct" | "alert" };
const TONES: (Receive["tone"])[] = ["auth", undefined, "alert", undefined, "struct", undefined, "auth", undefined];
const RECEIVE: Receive[] = CATEGORIES.map((c, i) => ({
  slug: c.slug,
  title: c.shortTitle,
  text: c.slug === "calculos-de-enfermagem" ? "Gotejamento, regra de três e doses com exercícios resolvidos." : `${c.topics.filter((t) => t.status === "published").length} temas com mapa visual, resumo e questões.`,
  tone: TONES[i],
}));

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
            <p className="text-xs font-bold uppercase tracking-[.22em] text-[var(--lp-alert)]">Revisão para concurso de Técnico de Enfermagem</p>
            <h1 className="mt-4 text-[1.85rem] leading-[1.12] sm:text-[2.6rem]">
              Você não precisa <span className="hero-hl">reler tudo</span> para revisar.
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-white/85">
              Veja o assunto de forma visual. Teste o que lembra. Volte direto ao que precisa reforçar — as {counts.categories} áreas do concurso num só aplicativo.
            </p>

            <div className="relative mx-auto mt-12 flex w-fit justify-center">
              <Device width="min(70vw, 18rem)" label="Painel do aplicativo aberto no celular, com o próximo tema para revisar">
                <Image src={PRINTS.dash} alt="Painel do aplicativo" fill priority unoptimized className="object-cover object-top" sizes="18rem" />
              </Device>
              <div className="glass float-a -right-10 top-10 w-[8.4rem] rotate-2 p-2.5 text-left sm:-right-28 sm:w-44 sm:p-3.5">
                <p className="text-[9px] font-bold uppercase tracking-wide text-[var(--lp-body)] sm:text-[10px]">No aplicativo hoje</p>
                <p className="mt-1 text-lg font-extrabold leading-none sm:text-2xl">{counts.questions} questões</p>
                <div className="mt-2 flex h-6 items-end gap-1">
                  {[40, 55, 45, 70, 60, 90, 80].map((h, i) => <span key={i} style={{ height: `${h}%` }} className="flex-1 rounded-sm bg-[var(--lp-auth)]" />)}
                </div>
              </div>
              <GlassNote tone="buy" icon="✓" title="Você acertou!" text="Correção explicada na hora" className="float-b -left-10 bottom-[24%] w-[10.5rem] -rotate-2 text-left sm:-left-32 sm:w-60" />
              <GlassNote icon="↻" title="+1 em Revisar novamente" text="O que você errou volta sozinho" className="float-c -right-8 bottom-[6%] w-[10.5rem] rotate-1 text-left sm:-right-28 sm:w-64" />
            </div>

            <div className="mt-12 flex flex-col items-center gap-3">
              <CtaToPlans variant="light" />
              <p className="text-sm text-white/75">Pagamento único · sem mensalidade · fonte oficial em cada tema</p>
            </div>
          </div>
        </section>

        {/* 2. A ROTINA DE HOJE */}
        <section className="surf surf-warm px-4 py-20">
          <div className="mx-auto max-w-4xl">
            <SectionHead eyebrow="A rotina de hoje" title={<>Estudou muito, mas na hora de revisar <span className="hl">não sabe por onde começar?</span></>} text="O problema não é falta de esforço. É conteúdo demais espalhado em lugares demais." />
            <ul className="mx-auto mt-12 grid max-w-3xl justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                ["📚", "Apostilas extensas", "você procura o ponto e perde o tempo da revisão"],
                ["🗂️", "PDFs espalhados", "cada assunto salvo num lugar diferente"],
                ["❓", "Sem saber o que esqueceu", "reler tudo não mostra onde está a dificuldade"],
                ["⏱️", "Pouco tempo", "uma sessão curta vira busca e rolagem"],
                ["🔁", "Erros esquecidos", "você responde e não sabe o que rever"],
                ["📊", "Muitas matérias", "difícil enxergar o avanço em cada área"],
              ].map(([icon, title, text], i) => (
                <li key={title} className={`rv rv-pop rv-d${(i % 3) + 1} tag-card rounded-2xl bg-white p-5 text-center ${i % 2 ? "rotate-[0.6deg]" : "-rotate-[0.6deg]"}`}>
                  <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[var(--lp-warm)] text-2xl" aria-hidden>{icon}</span>
                  <b className="mt-3 block text-[15px]">{title}</b>
                  <span className="mt-1 block text-sm text-[var(--lp-body)]">{text}</span>
                </li>
              ))}
            </ul>
            <div className="rv rv-pop tag-card tag-card--hl mx-auto mt-14 max-w-2xl rounded-3xl bg-[var(--lp-auth)] px-6 py-8 text-center text-white">
              <p className="text-2xl font-extrabold sm:text-3xl">Com o Revisão Técnico, você <span className="text-[var(--lp-alert)]">abre e começa</span>.</p>
              <p className="mt-2 text-white/85">O próximo assunto já está esperando por você — com mapa, resumo e questões.</p>
            </div>
          </div>
        </section>

        {/* 3. O QUE É — um mockup explodido por recurso */}
        <section className="surf surf-neutral px-4 py-20">
          <div className="mx-auto max-w-5xl">
            <SectionHead eyebrow="Não é mais uma apostila" title={<>Um aplicativo que transforma conteúdo denso em <span className="hl">ciclos curtos de revisão</span></>} text={`${counts.topics} temas publicados, sempre com a fonte oficial registrada. Você abre no celular ou no computador.`} />
            <div className="mt-14 grid gap-8 sm:grid-cols-2">
              {[
                { mock: <ExplodeMapa />, title: "Mapa visual", text: "Enxergue a estrutura do assunto antes dos detalhes." },
                { mock: <ExplodeResumo />, title: "Resumo objetivo", text: "Relembre o essencial sem reler dezenas de páginas." },
                { mock: <ExplodeQuestoes />, title: "Questões explicadas", text: "Descubra o que realmente ficou na memória." },
                { mock: <ExplodeFila />, title: "Fila de reforço", text: "Errou? O aplicativo separa o ponto para você voltar." },
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
            <SectionHead eyebrow="Como funciona" title={<>Cinco passos. <span className="hl">Um ciclo que faz sentido.</span></>} />
            <ol className="mt-12">
              {[
                ["📱", "Entre no aplicativo", "Seu estudo fica salvo."],
                ["🗂️", "Escolha uma área", "Ou toque em Revisar agora."],
                ["🧭", "Veja o mapa visual", "Resumo e pontos-chave."],
                ["✍️", "Responda às questões", "Correção explicada."],
                ["🔁", "Reforce o que errou", "A fila é montada para você."],
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

        {/* 5. BLOCO 1 — teste o que lembra (cena A viva) */}
        <section className="surf surf-neutral px-4 py-20">
          <div className="mx-auto max-w-3xl text-center">
            <div className="rv">
              <p className="text-xs font-bold uppercase tracking-[.2em] text-[var(--lp-struct-deep)]">Revisar agora</p>
              <h2 className="mt-3 text-[2.1rem] leading-[1.08] sm:text-5xl">Descubra <span className="hl">o que ficou</span> na memória</h2>
              <span className="lp-rule" aria-hidden />
              <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-[var(--lp-body)]">
                Cada tema fecha com questões no estilo da prova. Você marca, confere e a explicação aparece na hora — sem gabarito no fim da apostila.
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
              <p className="text-sm leading-snug">questões com a <b className="text-[var(--lp-hl-deep)]">explicação da resposta</b>, distribuídas pelos {counts.topics} temas das {counts.categories} áreas.</p>
            </div>
            <div className="rv mt-10"><CtaToPlans /></div>
          </div>
        </section>

        {/* 6. BLOCO 2 — contra o jeito antigo (apostila × app) */}
        <section id="exemplo" className="surf surf-warm scroll-mt-20 px-4 py-20">
          <div className="mx-auto max-w-5xl">
            <SectionHead eyebrow="Jeito antigo × aplicativo" title={<>Pare de procurar a revisão <span className="hl">no meio da apostila</span></>} text="PDF pesa, demora para abrir, obriga a dar zoom e não mostra o que você já sabe. No aplicativo, o tema abre na hora, organizado do mapa às questões." />
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
                <figcaption className="mt-4 text-sm font-bold text-[var(--lp-auth)]">Abre na hora: mapa, resumo e questões</figcaption>
              </figure>
            </div>
            <div className="mt-14 grid gap-5 md:grid-cols-2">
              <div className="rv rv-l rounded-2xl border-2 border-dashed border-[#b3a991] bg-[#f1ebdd] p-6">
                <p className="mb-4 text-xs font-bold uppercase tracking-[.15em] text-[#857b68]">Apostila e PDF</p>
                <ul className="space-y-3 text-[15px] text-[#625a4c]">
                  {["Centenas de páginas para achar um assunto", "Arquivo pesado que demora no 4G", "Gabarito sem explicação, no fim do livro", "Nada mostra o que você errou"].map((t) => (
                    <li key={t} className="flex gap-3"><span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 border-[#b3a991] text-[10px] font-bold">✕</span>{t}</li>
                  ))}
                </ul>
              </div>
              <div className="rv rv-r win">
                <div className="win-in h-full p-6">
                  <p className="win-pill mb-5">✦ <b>Revisão Técnico</b></p>
                  <ul className="relative space-y-3.5 text-[15px] font-medium">
                    {["Um tema por vez, com mapa visual", "Abre na hora, no celular ou no computador", "Correção explicada logo depois da resposta", "O que você errou entra na fila de revisão"].map((t) => (
                      <li key={t} className="flex items-start gap-3"><span className="win-check">✓</span>{t}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="rv mt-12 flex justify-center"><CtaToPlans /></div>
          </div>
        </section>

        {/* 7. BLOCO 3 — o erro vira o próximo ponto de estudo (cena C viva) */}
        <section className="surf surf-struct px-4 py-20">
          <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2">
            <div className="rv rv-l relative order-2 mx-auto flex justify-center py-6 lg:order-1">
              <SceneMistake width="min(72vw, 18rem)" />
              <GlassNote tone="bad" icon="✕" title={`A certa é a ${DEMO.correctLabel}`} text="Você vê a correta e a explicação" className="float-a -left-8 -top-1 w-[10.5rem] -rotate-2 sm:-left-32 sm:w-56 lg:-left-48" />
              <GlassNote icon="↻" title="1 revisão pendente" text="O tema entrou na sua fila" className="float-b -right-8 -bottom-1 w-[10.5rem] rotate-2 sm:-right-32 sm:w-56 lg:-right-48" />
            </div>
            <div className="order-1 text-center lg:order-2 lg:text-left">
              <div className="rv">
                <p className="text-xs font-bold uppercase tracking-[.2em] text-[var(--lp-auth-deep)]">Erro → nova revisão</p>
                <h2 className="mt-3 text-[2.1rem] leading-[1.08] sm:text-5xl">O erro deixa de sumir e vira <span className="hl">o próximo ponto de estudo</span></h2>
                <p className="mx-auto mt-5 max-w-lg text-lg leading-relaxed text-[var(--lp-auth-ink)]/85 lg:mx-0">Depois da resposta, você vê a alternativa correta e a explicação. Se errou, o tema entra sozinho na fila Revisar novamente — e sai quando você acertar.</p>
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

        {/* 8. O QUE VOCÊ RECEBE — bento com as 8 áreas e o celular no centro */}
        <section className="surf surf-neutral px-4 py-20">
          <div className="mx-auto max-w-6xl">
            <SectionHead eyebrow="O que você recebe" title={<>As {counts.categories} áreas organizadas para <span className="hl">revisar e praticar</span></>} />
            <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-[1fr_auto_1fr] lg:items-center">
              <div className="grid gap-4 sm:col-span-2 sm:grid-cols-2 lg:col-span-1 lg:grid-cols-1">
                {RECEIVE.slice(0, 4).map((r, i) => <ReceiveTile key={r.slug} r={r} n={i + 1} />)}
              </div>
              <div className="rv rv-pop order-first mx-auto py-4 sm:col-span-2 lg:order-none lg:col-span-1 lg:px-6">
                <Device width="15rem" label="Tela Matérias do aplicativo com o progresso de cada área">
                  <Image src={PRINTS.cats} alt="Tela Matérias" fill unoptimized className="object-cover object-top" sizes="15rem" />
                </Device>
              </div>
              <div className="grid gap-4 sm:col-span-2 sm:grid-cols-2 lg:col-span-1 lg:grid-cols-1">
                {RECEIVE.slice(4).map((r, i) => <ReceiveTile key={r.slug} r={r} n={i + 5} />)}
              </div>
            </div>
          </div>
        </section>

        {/* 9. SEM ENCHIMENTO — no lugar dos bônus (não há bônus fictício) */}
        <section className="surf surf-struct px-4 py-20">
          <div className="mx-auto max-w-3xl">
            <SectionHead eyebrow="Sem enchimento" title={<>O valor está no <span className="hl">aplicativo funcionando</span></>} text="Nenhum bônus fictício foi colocado para inflar a oferta. O que você recebe é o aplicativo completo, com conteúdo revisado na fonte oficial." />
            <div className="rv bonus-final mx-auto mt-12 max-w-2xl rounded-[1.5rem] p-7 text-center">
              <div className="grid grid-cols-3 gap-3">
                {[[counts.categories, "áreas"], [counts.topics, "temas"], [counts.questions, "questões"]].map(([n, l]) => (
                  <div key={l as string}>
                    <p className="text-4xl font-extrabold tracking-[-.03em] text-[var(--lp-auth)]">{n}</p>
                    <p className="text-sm font-semibold text-[var(--lp-body)]">{l}</p>
                  </div>
                ))}
              </div>
              <p className="mt-5 text-base text-[var(--lp-body)]">Cada tema com mapa visual, resumo, pegadinhas de prova e questões comentadas.</p>
              <div className="mt-6 flex justify-center"><CtaToPlans variant="grad">QUERO MEU ACESSO</CtaToPlans></div>
            </div>
          </div>
        </section>

        {/* 10. PLANOS */}
        <section id="planos" className="surf surf-auth scroll-mt-16 px-4 py-20">
          <div className="mx-auto max-w-5xl">
            <SectionHead eyebrow="Planos" title={<>Escolha e <span className="hl">comece hoje</span></>} text="Pagamento único pelo checkout seguro da Cakto. Sem mensalidade." />
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
                Pode começar hoje e revisar com calma: abra os temas, responda as questões e veja sua fila de revisão se formar. Se não gostar, peça o reembolso em até <strong className="text-[var(--lp-ink)]">{offer.guaranteeDays} dias</strong> e devolvemos todo o seu dinheiro — sem perguntas.
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
                ["Preciso saber mexer com tecnologia?", "Não. Se você usa WhatsApp, consegue usar o aplicativo. É escolher a área, abrir o tema e responder."],
                ["Preciso instalar alguma coisa?", "Não. Funciona no navegador do celular ou do computador, com seu e-mail e senha. O progresso fica salvo."],
                ["Como recebo o acesso depois de comprar?", "Você cria sua conta com o mesmo e-mail usado na compra e confirma esse e-mail. O acesso é liberado automaticamente."],
                ["Qual a diferença entre o Básico e o Completo?", "O Básico traz as áreas, os mapas visuais, os resumos e as fontes. O Completo soma a prática: questões explicadas, a fila Revisar novamente, o progresso por área e a busca imediata."],
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
            <h2 className="mt-5 text-3xl leading-tight text-[var(--lp-auth-ink)] sm:text-5xl">Pare de reler tudo. <span className="italic text-[var(--lp-hl-deep)]">Revise o que importa.</span></h2>
            <p className="mt-4 text-lg text-[var(--lp-auth-ink)]/80">As {counts.categories} áreas do concurso num aplicativo que mostra o que revisar hoje.</p>
            <p className="mx-auto mt-6 w-fit rounded-full bg-[var(--lp-auth-ink)] px-4 py-1.5 text-xs font-bold text-[var(--lp-alert)]">⏳ A partir de {brl(entry.priceCents)} · pagamento único</p>
            <div className="mt-8"><CtaToPlans variant="alert">QUERO ORGANIZAR MINHA REVISÃO</CtaToPlans></div>
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
