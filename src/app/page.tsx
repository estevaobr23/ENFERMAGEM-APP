import Link from "next/link";
import type { ReactNode } from "react";
import { BrandMark, Logo } from "@/vertical/brand";
import { CategoryEmblem } from "@/components/ui/CategoryEmblem";
import { CATEGORIES, findTopic, publishedCounts } from "@/vertical/content";
import { offer } from "@/vertical/offer";
import { vertical } from "@/vertical/config";
import { UtmCapture } from "@/vertical/landing/CheckoutButton";
import { PlanCards } from "@/vertical/landing/PlanCards";
import { UtmifyPixel } from "@/vertical/landing/UtmifyPixel";
import { Reveal } from "@/vertical/landing/Reveal";
import { DeviceDuo, Phone } from "@/vertical/landing/frames";
import "@/vertical/landing/landing.css";
import "@/vertical/landing/landing-sections.css";

/*
 * Página de vendas. Estrutura e textos mantidos; o visual segue o sistema de
 * design da skill padrao-lowticket e os mockups são telas reais do app.
 */

const counts = publishedCounts();
const demoTopic = findTopic("higiene-das-maos-cinco-momentos").topic;
const steps = [
  ["1", "Entre no aplicativo", "Seu estudo fica salvo"],
  ["2", "Escolha uma área", "Ou toque em Revisar Agora"],
  ["3", "Veja o mapa visual", "Resumo e pontos-chave"],
  ["4", "Responda às questões", "Correção explicada"],
  ["5", "Reforce o que errou", "A fila é montada para você"],
] as const;

function SectionHead({ eyebrow, title, text, light = false }: { eyebrow: string; title: ReactNode; text?: string; light?: boolean }) {
  return (
    <div className={`section-head reveal ${light ? "dark-head" : ""}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      <div className="rule" />
      {text && <p>{text}</p>}
    </div>
  );
}

function CtaToPlans({ children = "QUERO REVISAR COM MAIS CLAREZA" }: { children?: ReactNode }) {
  return <a href="#planos" className="btn btn-buy btn-lg">{children} <span className="arrow">➔</span></a>;
}

function GlassNote({ icon, title, text, className = "", tone = "ok" }: { icon: string; title: string; text: string; className?: string; tone?: "ok" | "bad" }) {
  return <div className={`lt-note lt-note--${tone} ${className}`}><span aria-hidden>{icon}</span><div><b>{title}</b><small>{text}</small></div></div>;
}

/** "Apostila" desenhada: o jeito antigo não é uma tela do app. */
function OldPdf() {
  return (
    <div className="lt-phone lt-pdf" role="img" aria-label="Apostila longa em PDF sendo rolada para achar um assunto">
      <span className="lt-phone__notch" aria-hidden />
      <div className="lt-phone__screen">
        <div className="lt-pdf__bar"><b>Apostila.pdf</b><span>64 páginas</span></div>
        <div className="lt-pdf__page">
          <h4>BIOSSEGURANÇA</h4>
          {Array.from({ length: 22 }, (_, i) => <i key={i} style={{ width: `${66 + (i % 4) * 8}%` }} />)}
          <b className="lt-pdf__find">Onde estava?</b>
        </div>
      </div>
    </div>
  );
}

export default function SalesPage() {
  const price = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(Math.min(...offer.plans.map((plan) => plan.priceCents)) / 100);
  return (
    <div className="lt">
      <UtmifyPixel />
      <UtmCapture />
      <Reveal />

      {/* 1 · Hero — headline → sub → mockup → CTA */}
      <header className="hero">
        <div className="container">
          <div className="hero-stack">
            <Logo className="hero-logo" />
            <p className="hero-eyebrow">REVISÃO PARA CONCURSO DE TÉCNICO DE ENFERMAGEM</p>
            <h1>Você não precisa <span className="hl-block">reler tudo</span> para revisar.</h1>
            <p className="sub">Veja o assunto de forma visual. <b>Teste o que lembra.</b> Volte direto ao que precisa reforçar.</p>
            <div className="book-stage">
              <div className="book-glow" />
              <div className="note-stage">
                <DeviceDuo priority className="hero-duo" />
                <GlassNote icon="↻" title="Assuntos aguardando" text="Sua próxima revisão já está separada" className="note-a" />
                <GlassNote icon="✓" title="Progresso salvo" text="Retome exatamente de onde parou" className="note-b" />
              </div>
            </div>
            <div className="hero-cta"><CtaToPlans /></div>
            <small className="hero-small">Conteúdo educacional · fontes indicadas · progresso salvo</small>
          </div>
        </div>
      </header>

      {/* 2 · Rotina atual / dor */}
      <section className="compare">
        <div className="container">
          <SectionHead eyebrow="A ROTINA DE HOJE" title={<>Estudou muito, mas na hora de revisar <span className="hl">não sabe por onde começar?</span></>} text="O problema não é falta de esforço. É conteúdo demais espalhado em lugares demais." />
          <div className="pain-grid">
            {[["▤", "Apostilas extensas", "Você procura o ponto e perde o tempo da revisão."], ["⌕", "PDFs espalhados", "Cada assunto ficou salvo num lugar diferente."], ["?", "Sem saber o que esqueceu", "Reler tudo não mostra onde está a dificuldade."], ["◷", "Pouco tempo", "Uma sessão curta vira busca, rolagem e marcação."], ["↻", "Erros esquecidos", "Você responde e não sabe o que precisa rever."], ["▦", "Muitas matérias", "Fica difícil enxergar o avanço em cada área."]].map(([icon, title, text], i) => (
              <article key={title} className={`pain-card reveal delay-${(i % 3) + 1}`}><span className="ic">{icon}</span><h3>{title}</h3><p>{text}</p></article>
            ))}
          </div>
          <div className="desire-strip reveal"><span className="ds-icon">✦ ✦ ✦</span><p className="ds-text"><strong>Com o Revisão Técnico, você abre e começa.</strong><br />O próximo assunto <span className="ds-underline">já está esperando por você</span>.</p></div>
        </div>
      </section>

      {/* 3 · O que é */}
      <section className="vitrine">
        <div className="container">
          <SectionHead eyebrow="NÃO É MAIS UMA APOSTILA" title={<>É um aplicativo que transforma conteúdo denso em <span className="hl">ciclos curtos de revisão.</span></>} text={`${counts.topics} assuntos publicados, sempre com fonte registrada.`} />
          <div className="feature-grid">
            {[["m-tema3", "Mapa visual", "Enxergue a estrutura do assunto antes dos detalhes."], ["m-resumo", "Resumo objetivo", "Relembre o essencial sem reler dezenas de páginas."], ["m-questoes", "Questões explicadas", "Descubra o que realmente ficou na memória."], ["m-revisoes", "Fila de reforço", "Errou? O aplicativo separa o ponto para você voltar."]].map(([shot, title, text], i) => (
              <article className={`feature-card reveal delay-${(i % 4) + 1}`} key={title}>
                <Phone src={shot} alt={`Tela real do aplicativo: ${title}`} className="feature-phone" />
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 4 · Como funciona */}
      <section id="como-funciona" className="bonus">
        <div className="container">
          <SectionHead light eyebrow="COMO FUNCIONA" title={<>Cinco passos. <span className="hl">Um ciclo que faz sentido.</span></>} />
          <ol className="flow">
            {steps.map(([number, title, text], i) => (
              <li key={number} className={`flow-step reveal ${i % 2 ? "flow-step--right" : ""}`}>
                <span className="flow-n">{number}</span>
                <div><h3>{title}</h3><p>{text}</p></div>
              </li>
            ))}
          </ol>
          <div className="center"><CtaToPlans /></div>
        </div>
      </section>

      {/* 5 · Maior ganho */}
      <section className="inside">
        <div className="container story">
          <div className="story-copy reveal">
            <span className="eyebrow">REVISAR AGORA</span>
            <h2>Abra o aplicativo e saiba <span className="hl">o que revisar hoje.</span></h2>
            <p>Temas nunca vistos vêm primeiro. Erros entram na fila. O que está há mais tempo sem revisão volta a aparecer.</p>
            <CtaToPlans />
          </div>
          <div className="story-device reveal delay-1">
            <div className="note-stage note-stage--phone">
              <Phone src="m-dash" alt="Painel real do aplicativo com o próximo tema para revisar" />
              <GlassNote icon="◎" title={demoTopic.title} text="Mapa, resumo e pontos-chave" className="note-a" />
              <GlassNote icon="→" title="Sem navegar perdido" text="O próximo passo aparece na tela" className="note-b" />
            </div>
          </div>
        </div>
      </section>

      {/* 6 · Antigo x novo */}
      <section id="exemplo" className="testi">
        <div className="container">
          <SectionHead eyebrow="JEITO ANTIGO × APLICATIVO" title={<>Pare de procurar a revisão <span className="hl">no meio da apostila.</span></>} />
          <div className="compare-grid">
            <div className="compare-col bad reveal">
              <span className="tag">✕ PDF / APOSTILA</span>
              <div className="compare-device"><OldPdf /></div>
              <p className="cap">Rolagem, zoom e “onde estava mesmo?”</p>
            </div>
            <div className="compare-col good reveal delay-1">
              <span className="tag">✓ REVISÃO TÉCNICO</span>
              <div className="compare-device"><Phone src="m-tema" alt="Tema aberto no aplicativo: área, mapa visual e questão" /></div>
              <p className="cap">Área, mapa visual e questão.</p>
            </div>
          </div>
          <div className="center"><CtaToPlans /></div>
        </div>
      </section>

      {/* 7 · Resultado final */}
      <section className="vitrine">
        <div className="container story story--reverse">
          <div className="story-copy reveal">
            <span className="eyebrow">ERRO → NOVA REVISÃO</span>
            <h2>O erro deixa de sumir e vira <span className="hl">o próximo ponto de estudo.</span></h2>
            <p>Depois da resposta, você vê a alternativa correta e a explicação. Se errou, o assunto entra na fila Revisar novamente.</p>
            <div className="honesty"><b>Sem promessa vazia:</b> o aplicativo organiza sua revisão. Ele não garante aprovação e não substitui formação ou protocolo clínico.</div>
            <CtaToPlans />
          </div>
          <div className="story-device reveal delay-1">
            <div className="note-stage note-stage--phone">
              <Phone src="m-erro" alt="Questão respondida errado no aplicativo, com a resposta certa e a explicação" />
              <GlassNote icon="×" title="Resposta corrigida" text="Explicação mostrada na hora" className="note-a" tone="bad" />
              <GlassNote icon="↻" title="Revisão pendente" text="O assunto entrou na sua fila" className="note-b" />
            </div>
          </div>
        </div>
      </section>

      {/* 8 · O que recebe */}
      <section className="compare">
        <div className="container container--wide">
          <SectionHead eyebrow="O QUE VOCÊ RECEBE" title={<>As oito áreas organizadas para <span className="hl">revisar e praticar.</span></>} />
          <div className="receive">
            <div className="receive-grid">
              {CATEGORIES.map((category, index) => (
                <article className={`receive-card reveal delay-${(index % 4) + 1}`} key={category.slug}>
                  <span className="receive-n">{String(index + 1).padStart(2, "0")}</span>
                  <i aria-hidden><CategoryEmblem slug={category.slug} size={60} /></i>
                  <h3>{category.shortTitle}</h3>
                  <p>{category.slug === "calculos-de-enfermagem" ? "Pratique cálculos com exercícios educacionais e resolução explicada." : `Revise ${category.shortTitle} sem procurar em dezenas de páginas.`}</p>
                </article>
              ))}
            </div>
            <div className="receive-device reveal"><Phone src="m-cats" alt="Tela real com as oito matérias e o progresso de cada uma" /></div>
          </div>
        </div>
      </section>

      {/* 9 · Bônus */}
      <section className="inside">
        <div className="container">
          <SectionHead eyebrow="SEM ENCHIMENTO" title={<>O valor está no <span className="hl">aplicativo funcionando.</span></>} text={offer.bonuses.length ? "Os bônus definidos para a oferta aparecem abaixo." : "Nenhum bônus fictício foi colocado para inflar a oferta: o que você recebe é o aplicativo completo, funcionando."} />
          {offer.bonuses.length > 0 && <div className="feature-grid">{offer.bonuses.map((bonus) => <article className="feature-card" key={bonus.title}><h3>{bonus.title}</h3><p>{bonus.text}</p></article>)}</div>}
          <div className="inside-laptop reveal"><DeviceDuo desktop="d-tema" mobile="m-progresso" /></div>
          <div className="center"><CtaToPlans /></div>
        </div>
      </section>

      {/* 10 · Planos */}
      <section id="planos" className="offer">
        <div className="container">
          <SectionHead light eyebrow="ACESSO" title={<>Tudo o que você precisa para <span className="hl">revisar com direção.</span></>} text="Escolha o seu plano. Pagamento único pelo checkout seguro da Cakto." />
          <PlanCards />
          <p className="offer-note">Depois do pagamento, você cria a conta com <b>o mesmo e-mail da compra</b>, confirma esse e-mail e entra no aplicativo.</p>
        </div>
      </section>

      {/* 11 · Garantia */}
      <section className="guarantee">
        <div className="container">
          <div className="guarantee-box reveal">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="seal-days-img" src="/landing/garantia-15-dias.webp" alt={`Selo de garantia de ${offer.guaranteeDays} dias`} width={250} height={250} loading="lazy" />
            <span className="eyebrow">COMPRA TRANSPARENTE</span>
            <h2>Garantia de {offer.guaranteeDays} dias</h2>
            <p>Pode entrar hoje e revisar com calma. Você tem <strong>{offer.guaranteeDays} dias</strong>; se não fizer sentido para você, devolvemos todo o seu dinheiro. Consulte as condições no checkout oficial antes de concluir a compra.</p>
          </div>
        </div>
      </section>

      {/* 12 · FAQ */}
      <section id="duvidas" className="faq">
        <div className="container">
          <SectionHead eyebrow="DÚVIDAS" title={<>Antes de <span className="hl">começar.</span></>} />
          <div className="faq-list">
            {[["Isso é um curso?", "Não. É um aplicativo de revisão com mapas visuais, resumos, questões e progresso."], ["Preciso instalar alguma coisa?", "Não. Você acessa pelo navegador do celular ou computador."], ["Como recebo o acesso?", "Depois da compra, crie a conta com o mesmo e-mail, confirme esse e-mail e entre no aplicativo."], ["O aplicativo garante aprovação?", "Não. Ele organiza e facilita sua revisão, mas o resultado depende do estudo e de outros fatores."], ["Posso usar os cálculos em um paciente?", "Não. Os exercícios são exclusivamente educacionais e não substituem protocolos, supervisão ou decisão clínica."], ["Quais conteúdos aparecem?", `Somente temas com status publicado e fonte registrada. Hoje são ${counts.topics} temas e ${counts.questions} questões.`]].map(([q, a]) => (
              <details className="faq-item reveal" key={q}><summary>{q}<span className="plus">+</span></summary><p className="answer">{a}</p></details>
            ))}
          </div>
        </div>
      </section>

      {/* 13 · CTA final */}
      <section className="final">
        <div className="container">
          <BrandMark className="final-mark" />
          <h2>Pare de tentar revisar tudo de novo. <span className="hl">Revise o que importa agora.</span></h2>
          <p className="urg">A partir de {price}</p>
          <div><a href="#planos" className="btn btn-gold btn-lg">QUERO ORGANIZAR MINHA REVISÃO <span className="arrow">➔</span></a></div>
        </div>
      </section>

      {/* 14 · Rodapé */}
      <footer className="lt-footer">
        <div className="container">
          <Logo className="footer-logo" />
          <p className="disclaimer">{vertical.disclaimer}</p>
          <p className="disclaimer">Conteúdo para preparação de concursos. Não há promessa de aprovação ou orientação clínica.</p>
          <p className="copy"><Link href="/login">Área do aluno</Link> · © {new Date().getFullYear()} {offer.productName}</p>
        </div>
      </footer>
    </div>
  );
}
