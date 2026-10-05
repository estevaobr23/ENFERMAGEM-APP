"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { BrandMark, Logo } from "@/vertical/brand";
import { CategoryEmblem } from "@/components/ui/CategoryEmblem";
import { CATEGORIES, publishedCounts } from "@/vertical/content";
import { vertical } from "@/vertical/config";
import { offer } from "@/vertical/offer";
import { PlanCards } from "@/vertical/landing/PlanCards";
import { SceneMaterias, SceneMistake, SceneQuiz, SceneTopic } from "@/vertical/landing/scenes";
import { AREA_OPTIONS, DIMENSION_COPY, type Answers, type Dimension, type DimensionResult } from "./questions";
import { track } from "./track";

const counts = publishedCounts();

/** O mockup vivo que responde a cada gargalo — o mesmo da landing. */
function FeatureScene({ dimension }: { dimension: Dimension }) {
  if (dimension === "organizacao") return <SceneMaterias width="min(72vw, 17rem)" />;
  if (dimension === "velocidade") return <SceneTopic width="min(72vw, 17rem)" />;
  if (dimension === "pratica") return <SceneQuiz width="min(72vw, 17rem)" />;
  return <SceneMistake width="min(72vw, 17rem)" />;
}

const STEPS: [string, string, string][] = [
  ["🗂️", "Escolha a área", `As ${counts.categories} áreas na tela inicial.`],
  ["📖", "Abra o tema", "Ele já abre pronto para revisar."],
  ["✍️", "Responda às questões", "A explicação aparece na hora."],
  ["🔁", "Revise o que errou", "O tema volta para a sua fila."],
];

export function QuizResult({ result, answers, onRestart }: {
  result: { dimensions: DimensionResult[]; weakest: Dimension };
  answers: Answers;
  onRestart: () => void;
}) {
  const { dimensions, weakest } = result;
  const copy = DIMENSION_COPY[weakest];
  const areas = (answers.areas ?? []).map((i) => AREA_OPTIONS[i]).filter(Boolean);
  const offerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    track("quiz_result_view", { weakest });
  }, [weakest]);

  // "viu a oferta" = a seção de planos entrou na tela
  useEffect(() => {
    const node = offerRef.current;
    if (!node) return;
    const io = new IntersectionObserver((entries) => {
      if (entries.some((e) => e.isIntersecting)) {
        track("quiz_offer_view", { weakest });
        io.disconnect();
      }
    }, { threshold: 0.25 });
    io.observe(node);
    return () => io.disconnect();
  }, [weakest]);

  return (
    <>
      {/* 1. RESULTADO */}
      <section className="surf surf-auth quiz-screen">
        <div className="quiz-box text-center">
          <p className="quiz-eyebrow">Seu resultado</p>
          <h1 className="quiz-h1">
            Sua revisão está perdendo eficiência principalmente em:{" "}
            <span className="hero-hl">{copy.headline}</span>
          </h1>
          <p className="quiz-sub">{copy.text}</p>

          <ul className="quiz-bars">
            {dimensions.map((d) => (
              <li key={d.key} className={d.key === weakest ? "is-weak" : ""}>
                <span className="quiz-bars__label">{d.label}{d.key === weakest && <b> · seu ponto mais fraco</b>}</span>
                <span className="quiz-bars__track"><span style={{ width: `${d.pct}%` }} /></span>
                <span className="quiz-bars__pct">{d.pct}%</span>
              </li>
            ))}
          </ul>

          {areas.length > 0 && (
            <div className="quiz-areas-picked">
              <p>Você marcou estas áreas para reforçar:</p>
              <ul>
                {areas.map((a) => (
                  <li key={a.slug}><CategoryEmblem slug={a.slug} size={22} />{a.label}</li>
                ))}
              </ul>
            </div>
          )}

          <p className="quiz-note quiz-note--block">
            Este resultado só organiza o que você respondeu. Não é diagnóstico pedagógico nem avaliação de conhecimento.
          </p>
        </div>
      </section>

      {/* 2. A FUNCIONALIDADE QUE RESPONDE AO GARGALO */}
      <section className="surf surf-struct quiz-screen">
        <div className="quiz-box quiz-feature">
          <div className="quiz-feature__text">
            <p className="quiz-eyebrow quiz-eyebrow--dark">No Revisão Técnico</p>
            <h2 className="quiz-h2">{copy.feature}</h2>
            <p className="quiz-sub quiz-sub--dark">{copy.featureText}</p>
            <p className="quiz-note quiz-note--block">
              Pelo que você respondeu, talvez o problema não seja simplesmente estudar mais conteúdo. Você precisa conseguir organizar o que revisar, testar o que lembra e voltar aos assuntos que ainda precisa reforçar.
            </p>
          </div>
          <div className="quiz-feature__scene"><FeatureScene dimension={weakest} /></div>
        </div>
      </section>

      {/* 3. O QUE É */}
      <section className="surf surf-neutral quiz-screen">
        <div className="quiz-box text-center">
          <p className="quiz-eyebrow quiz-eyebrow--dark">O aplicativo</p>
          <h2 className="quiz-h2">Revisão Técnico: as {counts.categories} áreas do concurso em um só lugar</h2>
          <p className="quiz-sub quiz-sub--dark">
            Aplicativo de revisão para o concurso de Técnico de Enfermagem, no celular ou no computador. Cada tema abre com prancha ilustrada, conteúdo em partes curtas, pegadinhas da banca, resumo final e questões comentadas.
          </p>

          {/* 4. COMO FUNCIONA */}
          <ol className="quiz-steps">
            {STEPS.map(([icon, title, text], i) => (
              <li key={title}>
                <span className="quiz-steps__n">{i + 1}</span>
                <div><b>{title}</b><small>{text}</small></div>
                <span className="quiz-steps__ico" aria-hidden>{icon}</span>
              </li>
            ))}
          </ol>

          {/* 5. NÚMEROS E ÁREAS */}
          <div className="quiz-numbers">
            {[[counts.categories, "áreas"], [counts.topics, "temas"], [counts.questions, "questões"]].map(([n, l]) => (
              <div key={l as string}><p>{n}</p><small>{l}</small></div>
            ))}
          </div>
          <ul className="quiz-area-chips">
            {CATEGORIES.map((c) => (
              <li key={c.slug}><CategoryEmblem slug={c.slug} size={24} />{c.shortTitle}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* 6. BÔNUS */}
      {offer.bonuses.length > 0 && (
        <section className="surf surf-warm quiz-screen">
          <div className="quiz-box text-center">
            <p className="quiz-eyebrow quiz-eyebrow--dark">Bônus</p>
            <h2 className="quiz-h2">Além do aplicativo, você leva {offer.bonuses.length} guias para a reta final</h2>
            <ul className="quiz-bonuses">
              {offer.bonuses.map((b, i) => (
                <li key={b.title}>
                  <Image src={b.mockupSrc} alt={b.mockupAlt} width={520} height={520} sizes="(min-width: 768px) 16rem, 60vw" className="h-auto w-full" />
                  <span className="quiz-bonuses__tag">BÔNUS {String(i + 1).padStart(2, "0")}</span>
                  <b>{b.title}</b>
                  <small>{b.text}</small>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* 7. PLANOS */}
      <section id="planos" ref={offerRef} className="surf surf-auth quiz-screen">
        <div className="quiz-box text-center">
          <p className="quiz-eyebrow">Planos</p>
          <h2 className="quiz-h2 quiz-h2--light">Escolha seu acesso</h2>
          <p className="quiz-sub">Pagamento único pelo checkout seguro da Cakto. Sem mensalidade.</p>
          <div
            onClickCapture={(event) => {
              const el = (event.target as HTMLElement).closest<HTMLElement>("[data-checkout]");
              if (el) {
                track("quiz_plan_click", { plan: el.dataset.checkout ?? "", weakest });
                track("quiz_checkout_click", { plan: el.dataset.checkout ?? "", weakest });
              }
            }}
          >
            <PlanCards />
          </div>
          <p className="quiz-note">Depois do pagamento, é só entrar na Área do aluno com o mesmo e-mail da compra — sem senha.</p>
        </div>
      </section>

      {/* 8. GARANTIA */}
      <section className="surf surf-warm quiz-screen">
        <div className="quiz-box quiz-guarantee">
          <Image src="/landing/garantia-15-dias.webp" alt={`Selo de garantia incondicional de ${offer.guaranteeDays} dias`} width={160} height={160} className="h-32 w-32 shrink-0 sm:h-36 sm:w-36" />
          <div>
            <h2 className="quiz-h2">Garantia incondicional de {offer.guaranteeDays} dias</h2>
            <p className="quiz-sub quiz-sub--dark">Entre, abra os temas e responda as questões com calma. Se não gostar, peça o reembolso em até {offer.guaranteeDays} dias e devolvemos todo o seu dinheiro — sem perguntas.</p>
          </div>
        </div>
      </section>

      {/* 9. CTA FINAL */}
      <section className="surf surf-alert quiz-screen">
        <div className="quiz-box text-center">
          <BrandMark className="mx-auto" />
          <h2 className="quiz-h2 mt-4">Comece pelo seu ponto mais fraco: <i>{copy.headline.toLowerCase()}</i></h2>
          <p className="quiz-sub quiz-sub--dark">{counts.categories} áreas · {counts.topics} temas · {counts.questions} questões</p>
          <a href="#planos" className="quiz-cta quiz-cta--dark">QUERO ACESSAR O APLICATIVO <span aria-hidden>➔</span></a>
          <button type="button" className="quiz-restart" onClick={onRestart}>Refazer o quiz</button>
        </div>
      </section>

      <footer className="surf surf-ink quiz-foot">
        <Logo className="lp-logo-white" />
        <p>{vertical.disclaimer} Não há promessa de aprovação.</p>
        <p><Link href="/login">Área do aluno</Link></p>
      </footer>
    </>
  );
}
