import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";
import { BrandMark, Logo } from "@/vertical/brand";
import { CategoryEmblem } from "@/components/ui/CategoryEmblem";
import { CATEGORIES, publishedCounts } from "@/vertical/content";
import { offer } from "@/vertical/offer";
import { vertical } from "@/vertical/config";
import { UtmCapture } from "@/vertical/landing/CheckoutButton";
import { PlanCards } from "@/vertical/landing/PlanCards";
import { UtmifyPixel } from "@/vertical/landing/UtmifyPixel";
import { Device, GlassNote } from "@/vertical/landing/Device";
import { DEMO_TOPIC_TITLE, SceneMistake, SceneNew, SceneOld, SceneReview } from "@/vertical/landing/scenes";
import "@/vertical/landing/landing.css";

const counts = publishedCounts();
const steps = [
  ["1", "Entre no aplicativo", "Seu estudo fica salvo"],
  ["2", "Escolha uma área", "Ou toque em Revisar Agora"],
  ["3", "Veja o mapa visual", "Resumo e pontos-chave"],
  ["4", "Responda às questões", "Correção explicada"],
  ["5", "Reforce o que errou", "A fila é montada para você"],
] as const;

function SectionHead({ eyebrow, title, text, light = false }: { eyebrow: string; title: ReactNode; text?: string; light?: boolean }) {
  return <div className={`lp-head rv ${light ? "lp-head--light" : ""}`}><p>{eyebrow}</p><h2>{title}</h2><i aria-hidden />{text && <span>{text}</span>}</div>;
}

function CtaToPlans({ children = "QUERO REVISAR COM MAIS CLAREZA", light = false }: { children?: ReactNode; light?: boolean }) {
  return <a href="#planos" className={`lp-cta ${light ? "lp-cta--light" : ""}`}>{children}<span aria-hidden>→</span></a>;
}

function FlowArrow({ flip = false }: { flip?: boolean }) {
  return <svg className={`lp-flow-arrow ${flip ? "lp-flow-arrow--flip" : ""}`} viewBox="0 0 120 70" aria-hidden><path className="lp-flow-line" pathLength="1" d="M18 4 C 18 38, 102 25, 102 58" /><path className="lp-flow-head" d="M94 51 L102 60 L110 50" /></svg>;
}


export default function SalesPage() {
  const price = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(Math.min(...offer.plans.map((plan) => plan.priceCents)) / 100);
  return <div className="lp overflow-x-clip">
    <UtmifyPixel />
    <UtmCapture />
    {/* 1 · Hero */}
    <section className="lp-surface lp-auth lp-hero">
      <div className="lp-wrap lp-hero-grid">
        <div className="lp-hero-copy rv"><Logo className="lp-logo" /><p className="lp-eyebrow">REVISÃO PARA CONCURSO DE TÉCNICO DE ENFERMAGEM</p><h1>Você não precisa <span>reler tudo</span> para revisar.</h1><p className="lp-lead">Veja o assunto de forma visual. Teste o que lembra. Volte direto ao que precisa reforçar.</p><CtaToPlans light /><small>Conteúdo educacional · fontes indicadas · progresso salvo</small></div>
        <div className="lp-device-stage rv rv-r"><SceneReview /><GlassNote icon="↻" title="3 assuntos aguardando" text="Sua próxima revisão já está separada" className="lp-float-a lp-note-a" /><GlassNote icon="✓" title="Progresso salvo" text="Retome exatamente de onde parou" className="lp-float-b lp-note-b" /></div>
      </div>
    </section>

    {/* 2 · Rotina atual / dor */}
    <section className="lp-surface lp-warm"><div className="lp-wrap"><SectionHead eyebrow="A ROTINA DE HOJE" title={<>Estudou muito, mas na hora de revisar <span className="lp-hl">não sabe por onde começar?</span></>} text="O problema não é falta de esforço. É conteúdo demais espalhado em lugares demais." /><div className="lp-pain-grid">{[["▤","Apostilas extensas","Você procura o ponto e perde o tempo da revisão."],["⌕","PDFs espalhados","Cada assunto ficou salvo num lugar diferente."],["?","Sem saber o que esqueceu","Reler tudo não mostra onde está a dificuldade."],["◷","Pouco tempo","Uma sessão curta vira busca, rolagem e marcação."],["↻","Erros esquecidos","Você responde e não sabe o que precisa rever."],["▦","Muitas matérias","Fica difícil enxergar o avanço em cada área."]].map(([icon,title,text],i)=><article key={title} className={`lp-tag rv rv-d${(i%3)+1}`}><span>{icon}</span><h3>{title}</h3><p>{text}</p></article>)}</div><div className="lp-turn rv"><b>Com o Revisão Técnico, você abre e começa.</b><span>O próximo assunto já está esperando por você.</span></div></div></section>

    {/* 3 · O que é */}
    <section className="lp-surface lp-neutral"><div className="lp-wrap"><SectionHead eyebrow="NÃO É MAIS UMA APOSTILA" title={<>É um aplicativo que transforma conteúdo denso em <span className="lp-hl">ciclos curtos de revisão.</span></>} text={`${counts.topics} assuntos publicados no conteúdo demo, sempre com fonte registrada.`} /><div className="lp-feature-grid">{[["◎","Mapa visual","Enxergue a estrutura do assunto antes dos detalhes."],["≡","Resumo objetivo","Relembre o essencial sem reler dezenas de páginas."],["?","Questões explicadas","Descubra o que realmente ficou na memória."],["↻","Fila de reforço","Errou? O aplicativo separa o ponto para você voltar."]].map(([icon,title,text],i)=><article className={`lp-feature rv rv-d${i+1}`} key={title}><div><span>{icon}</span></div><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

    {/* 4 · Como funciona */}
    <section id="como-funciona" className="lp-surface lp-struct"><div className="lp-wrap"><SectionHead eyebrow="COMO FUNCIONA" title={<>Cinco passos. <span className="lp-hl">Um ciclo que faz sentido.</span></>} /> <ol className="lp-flow">{steps.map(([number,title,text],i)=><li key={number}><article className={`lp-flow-step ${i%2 ? "lp-flow-step--right" : ""}`}><span>{number}</span><div><h3>{title}</h3><p>{text}</p></div></article>{i<steps.length-1&&<FlowArrow flip={i%2===1}/>}</li>)}</ol><div className="lp-center"><CtaToPlans /></div></div></section>

    {/* 5 · Maior ganho */}
    <section className="lp-surface lp-neutral"><div className="lp-wrap lp-story"><div className="lp-story-copy rv rv-l"><p className="lp-eyebrow lp-eyebrow--dark">REVISAR AGORA</p><h2>Abra o aplicativo e saiba <span className="lp-hl">o que revisar hoje.</span></h2><p>Temas nunca vistos vêm primeiro. Erros entram na fila. O que está há mais tempo sem revisão volta a aparecer.</p><CtaToPlans /></div><div className="lp-device-stage rv rv-r"><SceneReview /><GlassNote icon="◎" title={DEMO_TOPIC_TITLE} text="Mapa, resumo e pontos-chave" className="lp-float-a lp-note-a" /><GlassNote icon="→" title="Sem navegar perdido" text="O próximo passo aparece na tela" className="lp-float-b lp-note-b" /></div></div></section>

    {/* 6 · Antigo x novo */}
    <section id="exemplo" className="lp-surface lp-warm"><div className="lp-wrap"><SectionHead eyebrow="JEITO ANTIGO × APLICATIVO" title={<>Pare de procurar a revisão <span className="lp-hl">no meio da apostila.</span></>} /><div className="lp-compare rv"><div className="lp-compare-side lp-compare-old"><span className="lp-compare-label">PDF / APOSTILA</span><SceneOld /><p>Rolagem, zoom e “onde estava mesmo?”</p></div><div className="lp-compare-side lp-compare-new"><span className="lp-compare-label">REVISÃO TÉCNICO</span><SceneNew /><p>Área, mapa visual e questão.</p></div></div><div className="lp-center"><CtaToPlans /></div></div></section>

    {/* 7 · Resultado final */}
    <section className="lp-surface lp-struct"><div className="lp-wrap lp-story lp-story--reverse"><div className="lp-story-copy rv rv-r"><p className="lp-eyebrow lp-eyebrow--dark">ERRO → NOVA REVISÃO</p><h2>O erro deixa de sumir e vira <span className="lp-hl">o próximo ponto de estudo.</span></h2><p>Depois da resposta, você vê a alternativa correta e a explicação. Se errou, o assunto entra na fila Revisar novamente.</p><div className="lp-honesty"><b>Sem promessa vazia:</b> o aplicativo organiza sua revisão. Ele não garante aprovação e não substitui formação ou protocolo clínico.</div><CtaToPlans /></div><div className="lp-device-stage rv rv-l"><SceneMistake /><GlassNote icon="×" title="Resposta corrigida" text="Explicação mostrada na hora" className="lp-float-a lp-note-a" tone="bad" /><GlassNote icon="↻" title="1 revisão pendente" text="O assunto entrou na sua fila" className="lp-float-b lp-note-b" /></div></div></section>

    {/* 8 · O que recebe */}
    <section className="lp-surface lp-neutral"><div className="lp-wrap"><SectionHead eyebrow="O QUE VOCÊ RECEBE" title={<>As oito áreas organizadas para <span className="lp-hl">revisar e praticar.</span></>} /><div className="lp-receive">{CATEGORIES.map((category,index)=><article className={`lp-receive-card tone-${category.tone} rv rv-d${(index%4)+1}`} key={category.slug}><span>{String(index+1).padStart(2,"0")}</span><i aria-hidden><CategoryEmblem slug={category.slug} size={72} /></i><h3>{category.shortTitle}</h3><p>{category.slug === "calculos-de-enfermagem" ? "Pratique cálculos com exercícios educacionais e resolução explicada." : `Revise ${category.shortTitle} sem procurar em dezenas de páginas.`}</p></article>)}</div><div className="lp-receive-device"><Device width="15rem" label="Dashboard real do aplicativo com oito áreas e progresso"><div className="sn-scene"><div className="scene-top"><span className="scene-logo"><Image src="/interface/brand/revisao-tecnico-mark.svg" alt="" width={32} height={32} /></span><b>Seu progresso</b><i>•••</i></div><div className="lp-mini-progress"><b>{counts.categories} áreas</b><span><i style={{width:"42%"}} /></span><small>Continue sua revisão</small></div>{CATEGORIES.slice(0,4).map((category)=><div className="lp-mini-area" key={category.slug}><span><CategoryEmblem slug={category.slug} size={38} /></span><b>{category.shortTitle}</b><i /></div>)}</div></Device></div></div></section>

    {/* 9 · Bônus */}
    <section className="lp-surface lp-struct"><div className="lp-wrap"><SectionHead eyebrow="SEM ENCHIMENTO" title={<>O valor está no <span className="lp-hl">aplicativo funcionando.</span></>} text={offer.bonuses.length ? "Os bônus definidos para a oferta aparecem abaixo." : "Nenhum bônus fictício foi colocado para inflar a oferta: o que você recebe é o aplicativo completo, funcionando."} />{offer.bonuses.length>0&&<div className="lp-feature-grid">{offer.bonuses.map((bonus)=><article className="lp-feature" key={bonus.title}><h3>{bonus.title}</h3><p>{bonus.text}</p></article>)}</div>}<div className="lp-center"><CtaToPlans /></div></div></section>

    {/* 10 · Planos */}
    <section id="planos" className="lp-surface lp-auth"><div className="lp-wrap"><SectionHead light eyebrow="ACESSO" title={<>Tudo o que você precisa para <span>revisar com direção.</span></>} text="Escolha o seu plano. Pagamento único pelo checkout seguro da Cakto." /><PlanCards /><p className="lp-access-note">Depois do pagamento, você cria a conta com <b>o mesmo e-mail da compra</b>, confirma esse e-mail e entra no aplicativo.</p></div></section>

    {/* 11 · Garantia */}
    <section className="lp-surface lp-warm"><div className="lp-wrap"><div className="lp-guarantee rv"><span aria-hidden>✓</span><div><p className="lp-eyebrow lp-eyebrow--dark">COMPRA TRANSPARENTE</p><h2>{offer.guaranteeDays ? `Garantia de ${offer.guaranteeDays} dias` : "Garantia em configuração"}</h2><p>{offer.guaranteeDays ? "Consulte as condições apresentadas no checkout oficial antes de concluir a compra." : "O prazo e as condições de garantia ainda não foram informados pelo responsável e não serão inventados nesta página."}</p></div></div></div></section>

    {/* 12 · FAQ */}
    <section id="duvidas" className="lp-surface lp-neutral"><div className="lp-wrap"><SectionHead eyebrow="DÚVIDAS" title={<>Antes de <span className="lp-hl">começar.</span></>} /><div className="lp-faq">{[["Isso é um curso?","Não. É um aplicativo de revisão com mapas visuais, resumos, questões e progresso."],["Preciso instalar alguma coisa?","Não. Você acessa pelo navegador do celular ou computador."],["Como recebo o acesso?","Depois da compra, crie a conta com o mesmo e-mail, confirme esse e-mail e entre no aplicativo."],["O aplicativo garante aprovação?","Não. Ele organiza e facilita sua revisão, mas o resultado depende do estudo e de outros fatores."],["Posso usar os cálculos em um paciente?","Não. Os exercícios são exclusivamente educacionais e não substituem protocolos, supervisão ou decisão clínica."],["Quais conteúdos aparecem?",`Somente temas com status publicado e fonte registrada. Hoje o demo validado tem ${counts.topics} temas e ${counts.questions} questões.`]].map(([q,a])=><details key={q}><summary>{q}<span>+</span></summary><p>{a}</p></details>)}</div></div></section>

    {/* 13 · CTA final */}
    <section className="lp-surface lp-alert"><div className="lp-wrap lp-final"><BrandMark /><h2>Pare de tentar revisar tudo de novo. <em>Revise o que importa agora.</em></h2><p>A partir de {price}</p><CtaToPlans>QUERO ORGANIZAR MINHA REVISÃO</CtaToPlans></div></section>

    {/* 14 · Rodapé */}
    <footer className="lp-footer"><div className="lp-wrap"><Logo className="lp-footer-logo" /><p>{vertical.disclaimer}</p><p>Conteúdo para preparação de concursos. Não há promessa de aprovação ou orientação clínica.</p><Link href="/login">Área do aluno</Link><span>© {new Date().getFullYear()} {offer.productName}</span></div></footer>
  </div>;
}
