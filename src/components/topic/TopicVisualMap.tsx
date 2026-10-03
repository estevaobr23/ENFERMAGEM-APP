import type { MapBlock, VisualMapSpec } from "@/core/content/types";
import { Icon } from "@/components/ui/Icon";

/*
 * Mapa mental do tema, em HTML/CSS (legível, acessível, sem imagem):
 *   hub     nó central com ramos (radial no desktop, árvore no mobile)
 *   flow    sequência com setas (horizontal no desktop, vertical no mobile)
 *   compare duas colunas lado a lado
 */

function Branch({ block, index }: { block: MapBlock; index: number }) {
  return (
    <article className={`mm-branch tone-${block.tone}`} style={{ ["--i" as string]: index }}>
      <h3 className="mm-branch__title">{block.icon && <span aria-hidden>{block.icon}</span>}{block.title}</h3>
      <ul className="mm-branch__items">{block.items.map((item) => <li key={item}>{item}</li>)}</ul>
    </article>
  );
}

export function TopicVisualMap({ title, spec }: { title: string; spec: VisualMapSpec }) {
  const half = Math.ceil(spec.blocks.length / 2);
  return (
    <section className="mindmap" aria-labelledby="mapa-title">
      <header className="mindmap__head">
        <span className="mindmap__icon"><Icon name="map" size={18} /></span>
        <div>
          <p className="mindmap__eyebrow">Mapa mental do tema</p>
          <h2 id="mapa-title" className="mindmap__title">{title}</h2>
        </div>
      </header>

      <div className={`mm mm--${spec.layout}`}>
        {spec.layout === "hub" && (
          <>
            <div className="mm-hub__side mm-hub__side--left">{spec.blocks.slice(0, half).map((block, i) => <Branch key={block.title} block={block} index={i} />)}</div>
            <div className="mm-center"><span>{spec.center}</span></div>
            <div className="mm-hub__side mm-hub__side--right">{spec.blocks.slice(half).map((block, i) => <Branch key={block.title} block={block} index={i + half} />)}</div>
          </>
        )}

        {spec.layout === "flow" && (
          <>
            <div className="mm-center mm-center--top"><span>{spec.center}</span></div>
            <ol className="mm-flow">
              {spec.blocks.map((block, i) => (
                <li key={block.title} className="mm-flow__step">
                  <Branch block={block} index={i} />
                  {i < spec.blocks.length - 1 && <span className="mm-flow__arrow" aria-hidden><Icon name="arrowRight" size={18} /></span>}
                </li>
              ))}
            </ol>
          </>
        )}

        {spec.layout === "compare" && (
          <>
            <div className="mm-center mm-center--top"><span>{spec.center}</span></div>
            <div className="mm-compare">
              {spec.blocks.map((block, i) => (
                <div key={block.title} className="mm-compare__col">
                  <Branch block={block} index={i} />
                  {i === 0 && spec.blocks.length === 2 && <span className="mm-compare__vs" aria-hidden>×</span>}
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      {spec.footnote && (
        <p className="mindmap__foot"><Icon name="alert" size={15} /><span>{spec.footnote}</span></p>
      )}
    </section>
  );
}
