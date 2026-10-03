import Image from "next/image";
import type { VisualAsset } from "@/vertical/content/visual-assets";

export function TopicIllustrations({ assets }: { assets: VisualAsset[] }) {
  const ready = assets.filter((asset) => asset.status === "generated" || asset.status === "integrated");
  if (!ready.length) return null;

  return (
    <section id="ilustracoes" className="topic-illustrations anchor-target" aria-labelledby="ilustracoes-title">
      <header className="topic-illustrations__head">
        <div>
          <p className="topic-illustrations__eyebrow">Prancha ilustrada do tema</p>
          <h2 id="ilustracoes-title">Entenda a lógica pela imagem</h2>
        </div>
        <span>{ready.length} {ready.length === 1 ? "prancha" : "pranchas"}</span>
      </header>

      <div className="topic-illustrations__grid">
        {ready.map((asset, index) => (
          <figure className="topic-illustration" key={asset.id}>
            <div className="topic-illustration__canvas">
              {asset.asset && (
                <Image
                  src={asset.asset}
                  alt={asset.alt}
                  width={asset.width}
                  height={asset.height}
                  sizes="(max-width: 767px) 100vw, (max-width: 1279px) 90vw, 900px"
                  loading={index === 0 ? "eager" : "lazy"}
                  unoptimized={asset.asset.endsWith(".svg")}
                />
              )}
            </div>
            <figcaption>
              <span>{asset.priority}</span>
              <p>{asset.description}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
