import Link from "next/link";
import Image from "next/image";
import { Logo } from "@/vertical/brand";
import { CATEGORIES, publishedCounts } from "@/vertical/content";
import { offer } from "@/vertical/offer";
import { vertical } from "@/vertical/config";
import { UtmCapture } from "@/vertical/landing/CheckoutButton";
import { PlanCards } from "@/vertical/landing/PlanCards";
import { UtmifyPixel } from "@/vertical/landing/UtmifyPixel";
import { Reveal } from "@/vertical/landing/Reveal";
import { DeviceDuo, Laptop, Phone } from "@/vertical/landing/frames";
import "@/vertical/landing/landing.css";

/*
 * Página de vendas — padrão low ticket (skill padrao-lowticket), adaptado a um
 * APLICATIVO: os mockups são telas reais do app, não capas de ebook.
 * Ordem fixa: topbar → hero → vitrine → comparativo → por dentro → só no
 * Completo → fontes → oferta → garantia → FAQ → CTA final → rodapé.
 * Sem depoimento nem número de clientes inventados: a prova é o app e as fontes.
 */

const counts = publishedCounts();
const brl = (cents: number) => new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(cents / 100);
const [basic, full] = offer.plans;

const TOPBAR = ["📱 Aplicativo de revisão", `📚 ${counts.categories} áreas do concurso`, "🩺 Para Técnico de Enfermagem", "📌 Fonte oficial em cada tema", "💻 Celular e computador", `🛡️ Garantia de ${offer.guaranteeDays} dias`];

const VITRINE = [
  { shot: "m-tema", art: "/content/visual-v2/calculos-de-enfermagem/calculos-gotejamento-ilustrado.svg", label: "Prancha ilustrada", title: "Entenda o tema pela imagem", text: "Cada assunto abre com uma prancha visual que mostra a lógica antes dos detalhes.", quote: "Você vê o equipo, a câmara de gotas e o tempo — e a fórmula faz sentido." },
  { shot: "m-tema3", label: "Fórmula sem decoreba", title: "As fórmulas que caem, explicadas", text: "Cada fórmula vem com o que significa cada letra e quando usar.", quote: "Horas ou minutos? O app mostra qual escolher." },
  { shot: "m-tema4", label: "Exercício resolvido", title: "Passo a passo até a resposta", text: "Exemplos no estilo das bancas, resolvidos linha por linha.", quote: "Do enunciado à resposta, sem pular etapa." },
  { shot: "m-resumo", label: "Resumo final", title: "O que levar para a prova", text: "Fecha o tema com os pontos que mais caem, numerados e diretos.", quote: "Releia em 2 minutos antes da prova." },
] as const;

const COMPARE: [string, React.ReactNode][] = [
  ["Apostila de centenas de páginas", <>Um <b>mapa visual</b> por tema</>],
  ["PDFs espalhados em pastas", <>As {counts.categories} áreas <b>num só app</b></>],
  ["Releitura sem saber o que esqueceu", <><b>Questões comentadas</b> mostram o que falta</>],
  ["Erros que somem depois do simulado", <>Erros entram na <b>fila de revisão</b></>],
  ["Nenhuma ideia do seu avanço", <><b>Progresso por área</b> na tela</>],
];

const EXTRAS = [
  { shot: "m-questoes", title: "Questões com explicação", text: `${counts.questions} questões no estilo da prova, com a correção explicada logo depois da resposta.` },
  { shot: "m-revisoes", title: "Fila “Revisar novamente”", text: "Errou? O tema entra sozinho na sua fila e sai quando você acertar." },
  { shot: "m-progresso", title: "Progresso e acerto por área", text: "Veja temas feitos, respostas e acerto em cada matéria para decidir o que reforçar." },
  { shot: "m-busca", title: "Busca imediata", text: "Digite uma palavra e os temas aparecem na hora — até o que está dentro das seções." },
];

const SOURCES = [
  { icon: "⚖️", org: "Leis e decretos no Planalto", meta: "Fonte oficial · gov.br", text: <>Constituição, <strong>Lei 8.080</strong>, Lei 8.142, Decreto 7.508 e Lei 7.498 citados pelo texto oficial.</> },
  { icon: "🩺", org: "Cofen e Coren", meta: "Fonte oficial · conselhos", text: <><strong>Código de Ética</strong>, resoluções do Cofen e materiais do Coren-SP para cálculos e atribuições.</> },
  { icon: "🏥", org: "Ministério da Saúde e Anvisa", meta: "Fonte oficial · gov.br", text: <>Protocolos de <strong>segurança do paciente</strong>, PNAB, RDCs e manuais usados nos temas.</> },
];

const FAQ = [
  ["Como eu recebo o acesso?", "Logo após o pagamento você recebe o acesso no e-mail da compra. É só criar a conta com esse mesmo e-mail e entrar no aplicativo."],
  ["Preciso instalar alguma coisa?", "Não. O aplicativo abre no navegador do celular ou do computador, e o seu progresso fica salvo nos dois."],
  ["Qual a diferença entre o Básico e o Completo?", "O Básico traz as áreas, os mapas visuais e os resumos. O Completo soma a prática: questões explicadas, a fila Revisar novamente, o progresso por área e a busca imediata."],
  ["E se eu não gostar?", `Você tem ${offer.guaranteeDays} dias de garantia. Se não fizer sentido para você, pede o reembolso e recebe todo o valor de volta.`],
  ["O aplicativo garante aprovação?", "Não. Ele organiza e acelera a sua revisão, mas o resultado depende do seu estudo. O conteúdo é educacional e não substitui protocolos clínicos."],
] as const;

// pills do carrossel: nomes reais dos temas publicados
const topicNames = CATEGORIES.flatMap((c) => c.topics.filter((t) => t.status === "published").map((t) => t.title.split(":")[0].trim()));
const pillRows = [0, 1, 2].map((r) => topicNames.filter((_, i) => i % 3 === r).slice(0, 6));
const shownPills = new Set(pillRows.flat()).size;
const morePills = counts.topics - shownPills;

function Head({ eyebrow, children, sub, dark = false }: { eyebrow: string; children: React.ReactNode; sub?: React.ReactNode; dark?: boolean }) {
  return (
    <div className={`section-head reveal ${dark ? "dark-head" : ""}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2>{children}</h2>
      <div className="rule" />
      {sub && <p>{sub}</p>}
    </div>
  );
}

function Cta({ children, className = "btn btn-buy btn-lg" }: { children: React.ReactNode; className?: string }) {
  return <a href="#comprar" className={className}>{children} <span className="arrow">➔</span></a>;
}

function Marquee({ shots, dir, slow = false }: { shots: string[]; dir: "left" | "right"; slow?: boolean }) {
  const all = [...shots, ...shots];
  return (
    <div className="pm-row">
      <div className={`pm-track pm-${dir} ${slow ? "pm-slow" : ""}`}>
        {all.map((shot, i) => (
          <div key={`${shot}-${i}`} aria-hidden={i >= shots.length || undefined}>
            <Phone src={shot} alt={i >= shots.length ? "" : "Tela real do aplicativo"} className="pm-phone" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function SalesPage() {
  return (
    <div className="lt">
      <UtmifyPixel />
      <UtmCapture />
      <Reveal />

      {/* 0 · Topbar */}
      <div className="topbar" aria-label="Destaques">
        <div className="topbar-track">
          {[0, 1].map((copy) => (
            <div className="topbar-seq" key={copy} aria-hidden={copy === 1 || undefined}>
              {TOPBAR.map((item) => <span key={item}><span className="tb-item">{item}</span><span className="tb-star">✦</span></span>)}
            </div>
          ))}
        </div>
      </div>

      {/* 1 · Hero — headline → sub → mockup → selos → entrega → CTA → prova */}
      <header className="hero">
        <div className="container">
          <div className="hero-stack">
            <Logo className="hero-logo" />
            <h1>Revise as <span className="hl-block">{counts.categories} áreas do concurso</span><br className="br-d" /> de Técnico de Enfermagem em <br className="br-d" />mapas visuais, sem reler apostila</h1>
            <p className="sub">Um aplicativo com <b>{counts.topics} temas e {counts.questions} questões comentadas</b> que mostra o assunto em imagem, testa o que você lembra e <b>separa sozinho o que precisa revisar</b>.</p>
            <div className="book-stage">
              <div className="book-glow" />
              <DeviceDuo priority className="hero-duo" />
            </div>
            <div className="hero-trust"><span>⚡ Acesso imediato</span><span>📱 100% digital</span></div>
            <div className="hero-delivery">Você recebe o acesso na hora, direto no seu <span className="nowrap"><Image src="/landing/icon-email.webp" alt="" width={20} height={20} className="hero-delivery-ic" /><b>e-mail</b></span> — e usa no celular e no computador.</div>
            <div className="hero-cta"><Cta>Quero revisar com o aplicativo</Cta></div>
            <div className="hero-social">
              <div className="hero-stats"><span><b>{counts.categories}</b> áreas</span><span><b>{counts.topics}</b> temas</span><span><b>{counts.questions}</b> questões</span></div>
              <span className="hero-social-label">Conteúdo com fonte oficial em cada tema</span>
            </div>
          </div>
        </div>
      </header>

      {/* 2 · Vitrine de desejo */}
      <section className="vitrine">
        <div className="container">
          <Head eyebrow="Por dentro de cada tema" sub="Telas reais do aplicativo. É assim que você revisa cada assunto.">Revisar fica <span className="hl">leve e visual</span></Head>
          <div className="grid-desire">
            {VITRINE.map((item, i) => (
              <article className={`desire-card reveal delay-${(i % 2) + 1}`} key={item.title}>
                {"art" in item ? (
                  <div className="card-shot card-shot--art"><Image src={item.art} alt="Prancha ilustrada real do tema Gotejamento" width={1200} height={800} unoptimized /></div>
                ) : (
                  <div className="card-shot"><Image src={`/landing/app/${item.shot}.webp`} alt={`Tela do aplicativo: ${item.title}`} width={720} height={1558} sizes="(max-width: 768px) 90vw, 300px" /></div>
                )}
                <span className="verse">{item.label}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <span className="quote">{item.quote}</span>
              </article>
            ))}
            <article className="desire-card desire-card--wide reveal delay-3">
              <div className="card-shot card-shot--wide"><Image src="/landing/app/d-dash.webp" alt="Painel do aplicativo no computador" width={1600} height={1000} sizes="(max-width: 768px) 90vw, 360px" /></div>
              <div>
                <span className="verse">Tudo num só lugar</span>
                <h3>Abriu, já sabe o que revisar</h3>
                <p>O painel sugere o próximo tema, mostra seu progresso e guarda onde você parou.</p>
                <span className="quote">Nada de procurar em pasta, PDF ou caderno.</span>
              </div>
            </article>
          </div>
          <div className="desire-strip reveal">
            <span className="ds-icon">✦ ✦ ✦</span>
            <p className="ds-text">São <strong>{counts.categories} áreas</strong> e <strong>{counts.topics} temas</strong> organizados para você <span className="ds-underline">revisar o que importa</span>.</p>
          </div>
        </div>
      </section>

      {/* 3 · Comparativo */}
      <section className="compare">
        <div className="container">
          <Head eyebrow="Apostila × aplicativo">Revisar sozinha é uma coisa.<br className="br-d" /> <span className="hl">Com o aplicativo é outra.</span></Head>
          <div className="compare-grid">
            <div className="compare-col bad reveal">
              <span className="tag">✕ Do jeito antigo</span>
              <h3>Apostila e PDF</h3>
              <p className="cap">Muito conteúdo, pouca direção.</p>
              <ul>{COMPARE.map(([bad]) => <li key={bad}><span className="ic">✕</span><span>{bad}</span></li>)}</ul>
            </div>
            <div className="compare-col good reveal delay-1">
              <span className="tag">✓ Com o Revisão Técnico</span>
              <h3>Aplicativo de revisão</h3>
              <p className="cap">Você abre e já sabe o próximo passo.</p>
              <ul>{COMPARE.map(([bad, good]) => <li key={bad}><span className="ic">✓</span><span>{good}</span></li>)}</ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4 · Veja por dentro */}
      <section className="inside">
        <div className="container container--wide">
          <Head eyebrow="Veja por dentro" sub="Capturas reais da conta de demonstração, no computador e no celular.">O aplicativo <span className="hl">funcionando de verdade</span></Head>
          <div className="inside-laptop reveal">
            <Laptop src="d-tema" alt="Tema Gotejamento aberto no computador: prancha ilustrada e índice de seções" />
          </div>
          <p className="flip-hint">Prancha ilustrada, índice das seções e o teste do tema numa tela só. ✦</p>
        </div>
        <div className="page-marquee">
          <Marquee shots={["m-dash", "m-tema", "m-tema2", "m-tema3", "m-tema4", "m-resumo", "m-quiz"]} dir="left" />
          <Marquee shots={["m-cats", "m-atlas", "m-questoes", "m-revisoes", "m-progresso", "m-busca", "m-tema5"]} dir="right" />
        </div>
        <div className="container">
          <div className="cat-marquee" aria-label="Alguns temas do aplicativo">
            {pillRows.map((row, r) => (
              <div className="pm-row" key={r}>
                <div className={`cm-track ${r % 2 ? "pm-right" : "pm-left"} pm-slow`}>
                  {[...row, ...row].map((name, i) => <span className="cm-pill" key={`${name}-${i}`} aria-hidden={i >= row.length || undefined}>{name}</span>)}
                  <span className="cm-pill more">+ {morePills} outros temas</span>
                  <span className="cm-pill more" aria-hidden>+ {morePills} outros temas</span>
                </div>
              </div>
            ))}
          </div>
          <div className="mid-cta reveal">
            <span className="mc-chip">✦ Você viu só algumas telas</span>
            <p className="mc-title">Lá dentro são <strong>{counts.topics} temas completos</strong>, com mapa, resumo e teste.</p>
            <p className="small">Escolha um tema, revise em minutos e o app separa o próximo.</p>
            <Cta className="btn btn-lg">Quero ter acesso agora</Cta>
            <div className="mc-facts"><span><b>{counts.categories}</b> áreas</span><span><b>{counts.topics}</b> temas</span><span><b>{counts.questions}</b> questões</span></div>
          </div>
        </div>
      </section>

      {/* 5 · Só no Plano Completo */}
      <section className="bonus">
        <div className="container">
          <Head dark eyebrow="Só no Plano Completo" sub="Os 4 recursos de prática que transformam leitura em revisão de verdade.">Revisar <span className="hl">e praticar</span> no mesmo lugar</Head>
          <div className="grid-bonus">
            {EXTRAS.map((item, i) => (
              <div className={`bonus-card reveal delay-${(i % 2) + 1}`} key={item.title}>
                <div className="cover"><Phone src={item.shot} alt={`Tela real: ${item.title}`} className="bonus-phone" /></div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <div className="bonus-price"><span className="only">Não vem no Básico</span><span className="free">SÓ NO COMPLETO</span></div>
              </div>
            ))}
          </div>
          <div className="bonus-final reveal">
            <span className="bonus-final-badge">🎯 Os 4 recursos juntos</span>
            <p className="bonus-sum">Tudo isso por só <strong>{brl(full.priceCents - basic.priceCents)} a mais</strong> que o Básico.</p>
            <Cta>Quero o Plano Completo</Cta>
            <span className="bonus-final-note">✦ Pagamento único · acesso imediato</span>
          </div>
        </div>
      </section>

      {/* 6 · Fontes (prova) */}
      <section className="testi">
        <div className="container">
          <Head eyebrow="De onde vem o conteúdo" sub="Nada de resumo copiado de grupo: cada tema mostra a fonte oficial e a data da revisão.">Estudado na <span className="hl">fonte oficial</span></Head>
          <div className="grid-testi">
            {SOURCES.map((item, i) => (
              <div className={`testi-card reveal delay-${i + 1}`} key={item.org}>
                <div className="testi-head">
                  <span className="avatar" aria-hidden>{item.icon}</span>
                  <span className="name">{item.org}</span>
                  <span className="meta"><span className="verified">✔ </span>{item.meta}</span>
                </div>
                <p className="quote">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7 · Oferta */}
      <section className="offer" id="comprar">
        <div className="container">
          <Head dark eyebrow="Escolha seu acesso" sub="Pagamento único pelo checkout seguro da Cakto. Sem mensalidade.">Comece sua revisão <span className="hl">hoje</span></Head>
          <PlanCards />
          <p className="offer-note">Depois do pagamento, crie a conta com <b>o mesmo e-mail da compra</b> e entre no aplicativo.</p>
        </div>
      </section>

      {/* 8 · Garantia */}
      <section className="guarantee">
        <div className="container">
          <div className="guarantee-box reveal">
            <Image className="seal-days-img" src="/landing/garantia-15-dias.webp" alt={`Selo de garantia de ${offer.guaranteeDays} dias`} width={250} height={250} />
            <h2>Seu risco é zero</h2>
            <p>Pode entrar hoje e revisar com calma. Você tem <strong>{offer.guaranteeDays} dias</strong> para usar o aplicativo; se não fizer sentido para você, devolvemos todo o seu dinheiro — sem perguntas.</p>
          </div>
        </div>
      </section>

      {/* 9 · FAQ */}
      <section className="faq">
        <div className="container">
          <Head eyebrow="Dúvidas">Antes de <span className="hl">começar</span></Head>
          <div className="faq-list">
            {FAQ.map(([q, a]) => (
              <details className="faq-item reveal" key={q}>
                <summary>{q}<span className="plus">+</span></summary>
                <p className="answer">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 10 · CTA final */}
      <section className="final">
        <div className="container">
          <span className="eyebrow">Sua próxima revisão</span>
          <h2>Pare de reler tudo. <span className="hl">Revise o que importa.</span></h2>
          <p className="urg">⏳ Acesso imediato a partir de {brl(basic.priceCents)}</p>
          <div><Cta className="btn btn-gold btn-lg">Quero começar agora</Cta></div>
        </div>
      </section>

      {/* 11 · Rodapé */}
      <footer className="lt-footer">
        <div className="container">
          <Logo className="footer-logo" />
          <p className="verse">“Revise o que importa, na hora certa.”</p>
          <p className="copy">© {new Date().getFullYear()} {offer.productName} · <Link href="/login">Área do aluno</Link></p>
          <p className="disclaimer">{vertical.disclaimer} Não há promessa de aprovação. Este site não tem vínculo com Facebook, Instagram ou Google.</p>
        </div>
      </footer>
    </div>
  );
}
