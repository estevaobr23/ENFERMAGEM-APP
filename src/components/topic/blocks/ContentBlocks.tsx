import Link from "next/link";
import type { Actor, ContentBlock } from "@/core/content/types";
import { Icon, type IconName } from "@/components/ui/Icon";
import { findAsset } from "@/vertical/content/visual-assets";
import { RichText } from "../RichText";

/*
 * Um componente por tipo de bloco. A regra de desenho: densidade vira
 * estrutura — nada de parágrafo longo; cada bloco tem forma própria
 * (cartões, passos, tabela, faça/não faça, pegadinhas, lousa de fórmula).
 */

function Definition({ block }: { block: Extract<ContentBlock, { type: "definition" }> }) {
  return (
    <div className="b-def">
      <p className="b-def__term">{block.term}</p>
      <p className="b-def__text"><RichText text={block.text} /></p>
      {block.note && <p className="b-def__note"><Icon name="chevronRight" size={14} /><RichText text={block.note} /></p>}
    </div>
  );
}

function Cards({ block }: { block: Extract<ContentBlock, { type: "cards" }> }) {
  return (
    <ul className={`b-cards ${block.items.length > 4 ? "b-cards--many" : ""}`}>
      {block.items.map((item) => (
        <li key={item.title} className={`b-card tone-${item.tone ?? "slate"}`}>
          <div className="b-card__head">
            {item.icon && <span className="b-card__icon" aria-hidden>{item.icon}</span>}
            <h4 className="b-card__title"><RichText text={item.title} /></h4>
            {item.tag && <span className="b-card__tag">{item.tag}</span>}
          </div>
          {item.text && <p className="b-card__text"><RichText text={item.text} /></p>}
        </li>
      ))}
    </ul>
  );
}

const ACTOR: Record<Actor, string> = {
  tecnico: "Técnico",
  enfermeiro: "Enfermeiro",
  equipe: "Equipe",
  medico: "Médico",
  servico: "Serviço / gestão",
};

function Steps({ block }: { block: Extract<ContentBlock, { type: "steps" }> }) {
  return (
    <ol className="b-steps">
      {block.items.map((item, index) => (
        <li key={item.title} className="b-step">
          <span className="b-step__n" aria-hidden>{index + 1}</span>
          <div className="b-step__body">
            <p className="b-step__title">
              <RichText text={item.title} />
              {item.who && <span className={`b-step__who b-step__who--${item.who}`}>{ACTOR[item.who]}</span>}
            </p>
            {item.text && <p className="b-step__text"><RichText text={item.text} /></p>}
            {item.why && <p className="b-step__why"><b>Por quê?</b> <RichText text={item.why} /></p>}
          </div>
        </li>
      ))}
    </ol>
  );
}

function Compare({ block }: { block: Extract<ContentBlock, { type: "compare" }> }) {
  // a 1ª coluna repete o rótulo quando o rótulo é o próprio item (ex.: escalas) — só mostra se agrega
  const showLabel = block.rows.some((row) => row.label !== row.cells[0]);
  return (
    <div className="b-compare">
      {/* desktop: tabela */}
      <div className="b-compare__table-wrap">
        <table className="b-compare__table">
          <thead>
            <tr>
              {showLabel && <th scope="col"><span className="sr-only">Item</span></th>}
              {block.columns.map((column) => <th key={column} scope="col">{column}</th>)}
            </tr>
          </thead>
          <tbody>
            {block.rows.map((row) => (
              <tr key={row.label}>
                {showLabel && <th scope="row">{row.label}</th>}
                {row.cells.map((cell, index) => <td key={index}><RichText text={cell} /></td>)}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* mobile: um cartão por linha */}
      <ul className="b-compare__cards">
        {block.rows.map((row) => (
          <li key={row.label}>
            {showLabel && <p className="b-compare__row-label">{row.label}</p>}
            <dl>
              {row.cells.map((cell, index) => (
                <div key={index}>
                  <dt>{block.columns[index]}</dt>
                  <dd><RichText text={cell} /></dd>
                </div>
              ))}
            </dl>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Checklist({ block }: { block: Extract<ContentBlock, { type: "checklist" }> }) {
  return (
    <div className="b-check">
      {block.title && <p className="b-check__title">{block.title}</p>}
      <ul>
        {block.items.map((item) => (
          <li key={item}><span className="b-check__mark" aria-hidden><Icon name="check" size={14} strokeWidth={3} /></span><span><RichText text={item} /></span></li>
        ))}
      </ul>
    </div>
  );
}

function DoDont({ block }: { block: Extract<ContentBlock, { type: "dodont" }> }) {
  return (
    <div className="b-dodont">
      <div className="b-dodont__col b-dodont__col--do">
        <p className="b-dodont__head"><Icon name="check" size={16} strokeWidth={3} /> Faça</p>
        <ul>{block.do.map((item) => <li key={item}><RichText text={item} /></li>)}</ul>
      </div>
      <div className="b-dodont__col b-dodont__col--dont">
        <p className="b-dodont__head"><Icon name="x" size={16} strokeWidth={3} /> Não faça</p>
        <ul>{block.dont.map((item) => <li key={item}><RichText text={item} /></li>)}</ul>
      </div>
    </div>
  );
}

const CALLOUT: Record<"atencao" | "dica" | "lei", { icon: IconName; label: string }> = {
  atencao: { icon: "alert", label: "Atenção" },
  dica: { icon: "bulb", label: "Dica" },
  lei: { icon: "scale", label: "Texto da norma" },
};

function Callout({ block }: { block: Extract<ContentBlock, { type: "callout" }> }) {
  const meta = CALLOUT[block.variant];
  return (
    <aside className={`b-callout b-callout--${block.variant}`} aria-label={`${meta.label}: ${block.title}`}>
      <span className="b-callout__icon"><Icon name={meta.icon} size={18} /></span>
      <div>
        <p className="b-callout__title">{block.title}</p>
        <p className="b-callout__text"><RichText text={block.text} /></p>
      </div>
    </aside>
  );
}

function Traps({ block }: { block: Extract<ContentBlock, { type: "traps" }> }) {
  return (
    <ul className="b-traps">
      {block.items.map((item) => (
        <li key={item.wrong} className="b-trap">
          <p className="b-trap__wrong"><span className="b-trap__badge">A banca diz</span><s><RichText text={item.wrong} /></s></p>
          <p className="b-trap__right"><span className="b-trap__badge">Correto</span><span><RichText text={item.right} /></span></p>
          {item.why && <p className="b-trap__why"><span className="b-trap__badge">Raciocínio</span><span><RichText text={item.why} /></span></p>}
        </li>
      ))}
    </ul>
  );
}

function Timeline({ block }: { block: Extract<ContentBlock, { type: "timeline" }> }) {
  return (
    <ol className="b-timeline">
      {block.items.map((item) => (
        <li key={item.when}>
          <span className="b-timeline__when">{item.when}</span>
          <p className="b-timeline__what"><RichText text={item.what} /></p>
        </li>
      ))}
    </ol>
  );
}

function Formula({ block }: { block: Extract<ContentBlock, { type: "formula" }> }) {
  return (
    <figure className="b-formula">
      <figcaption>{block.label}</figcaption>
      <p className="b-formula__expr">{block.expression}</p>
      {block.legend && <ul className="b-formula__legend">{block.legend.map((item) => <li key={item}>{item}</li>)}</ul>}
    </figure>
  );
}

function Example({ block }: { block: Extract<ContentBlock, { type: "example" }> }) {
  return (
    <div className="b-example">
      <p className="b-example__title"><Icon name="pencil" size={15} />{block.title}</p>
      <ul className="b-example__given">{block.given.map((item) => <li key={item}>{item}</li>)}</ul>
      <ol className="b-example__steps">{block.steps.map((step) => <li key={step}>{step}</li>)}</ol>
      <p className="b-example__answer"><span>Resposta</span>{block.answer}</p>
    </div>
  );
}

function Numbers({ block }: { block: Extract<ContentBlock, { type: "numbers" }> }) {
  return (
    <ul className="b-numbers">
      {block.items.map((item) => (
        <li key={`${item.value}-${item.label}`}>
          <b className="b-numbers__value">{item.value}</b>
          <span className="b-numbers__label"><RichText text={item.label} /></span>
          {item.note && <small className="b-numbers__note"><RichText text={item.note} /></small>}
        </li>
      ))}
    </ul>
  );
}

function Case({ block }: { block: Extract<ContentBlock, { type: "case" }> }) {
  return (
    <div className="b-case">
      <p className="b-case__title"><Icon name="bulb" size={16} />{block.title}</p>
      <p className="b-case__scenario"><RichText text={block.scenario} /></p>
      <p className="b-case__question"><RichText text={block.question} /></p>
      <details className="b-case__answer">
        <summary>Ver resposta comentada <Icon name="chevronDown" size={15} /></summary>
        <p className="b-case__verdict"><RichText text={block.answer} /></p>
        <ol>{block.reasoning.map((step) => <li key={step}><RichText text={step} /></li>)}</ol>
      </details>
    </div>
  );
}

function Links({ block }: { block: Extract<ContentBlock, { type: "links" }> }) {
  return (
    <ul className="b-links">
      {block.items.map((item) => (
        <li key={item.slug}>
          <Link href={`/app/tema/${item.slug}`}>
            <Icon name="link" size={16} />
            <span className="min-w-0 flex-1"><b>{item.title}</b><small><RichText text={item.why} /></small></span>
            <Icon name="arrowRight" size={16} />
          </Link>
        </li>
      ))}
    </ul>
  );
}

/** Ilustração base + pinos numerados (coordenadas 0→1) + legenda textual. Só ativos `integrated`. */
function Figure({ block }: { block: Extract<ContentBlock, { type: "figure" }> }) {
  const asset = findAsset(block.asset);
  if (!asset || asset.status !== "integrated") return null;
  return (
    <figure className="b-figure">
      <div className="b-figure__canvas" style={{ aspectRatio: `${asset.width} / ${asset.height}` }}>
        {/* eslint-disable-next-line @next/next/no-img-element -- dimensões vêm do manifesto; pinos dependem da caixa exata */}
        <img src={asset.file} alt={asset.alt} width={asset.width} height={asset.height} loading="lazy" decoding="async" />
        {asset.labels.map((label, index) => (
          <span key={label.text} className="b-figure__pin" style={{ left: `${label.x * 100}%`, top: `${label.y * 100}%` }} aria-hidden>{index + 1}</span>
        ))}
      </div>
      {asset.labels.length > 0 && (
        <ol className="b-figure__legend" aria-label="Estruturas indicadas">
          {asset.labels.map((label, index) => <li key={label.text}><span>{index + 1}</span>{label.text}</li>)}
        </ol>
      )}
      <figcaption className="b-figure__caption">{block.caption ? <RichText text={block.caption} /> : asset.description}</figcaption>
    </figure>
  );
}

export function ContentBlockView({ block }: { block: ContentBlock }) {
  switch (block.type) {
    case "definition": return <Definition block={block} />;
    case "text": return <p className="b-text"><RichText text={block.text} /></p>;
    case "cards": return <Cards block={block} />;
    case "steps": return <Steps block={block} />;
    case "compare": return <Compare block={block} />;
    case "checklist": return <Checklist block={block} />;
    case "dodont": return <DoDont block={block} />;
    case "callout": return <Callout block={block} />;
    case "traps": return <Traps block={block} />;
    case "timeline": return <Timeline block={block} />;
    case "formula": return <Formula block={block} />;
    case "example": return <Example block={block} />;
    case "figure": return <Figure block={block} />;
    case "numbers": return <Numbers block={block} />;
    case "case": return <Case block={block} />;
    case "links": return <Links block={block} />;
  }
}
