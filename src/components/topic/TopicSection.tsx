import type { TopicSection as Section } from "@/core/content/types";
import type { TopicSource } from "@/core/study/types";
import { Icon } from "@/components/ui/Icon";
import { ContentBlockView } from "./blocks/ContentBlocks";
import { SaveSectionButton } from "./SaveSectionButton";
import { SECTION_KIND } from "./sectionKinds";

/** Uma "ficha" do tema: aba colorida pelo papel didático, título, blocos e rodapé com fonte e salvar. */
export function TopicSection({ section, number, topicId, saved, source }: { section: Section; number: number; topicId: string; saved: boolean; source?: TopicSource }) {
  const kind = SECTION_KIND[section.kind];
  return (
    <section id={`sec-${section.id}`} className={`ficha tone-${kind.tone}`} aria-labelledby={`sec-${section.id}-title`} data-section={section.id}>
      <header className="ficha__head">
        <span className="ficha__n" aria-hidden>{String(number).padStart(2, "0")}</span>
        <div className="min-w-0 flex-1">
          <p className="ficha__kind"><Icon name={kind.icon} size={14} />{kind.label}</p>
          <h2 id={`sec-${section.id}-title`} className="ficha__title">{section.title}</h2>
          {section.lead && <p className="ficha__lead">{section.lead}</p>}
        </div>
      </header>
      <div className="ficha__body">
        {section.blocks.map((block, index) => <ContentBlockView key={index} block={block} />)}
      </div>
      <footer className="ficha__foot">
        {source ? (
          <a href={source.url} target="_blank" rel="noreferrer" className="ficha__source" title={source.title}>
            <Icon name="link" size={13} />
            <span className="truncate">{source.organization.split(" — ")[0].split(" (")[0]}{source.locator ? ` · ${source.locator}` : ""}</span>
          </a>
        ) : <span />}
        <SaveSectionButton topicId={topicId} sectionKey={section.id} sectionTitle={section.title} initialSaved={saved} />
      </footer>
    </section>
  );
}
