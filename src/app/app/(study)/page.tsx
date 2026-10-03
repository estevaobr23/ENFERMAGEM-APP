import Link from "next/link";
import type { Metadata } from "next";
import { getStudyOverview } from "@/core/study/data";
import { buildStudyIndex, TOPIC_STATE } from "@/core/study/insights";
import { CategoryCard, ReviewQueueCard, SectionHeading } from "@/components/study/Cards";
import { ProgressRing, StatTile } from "@/components/study/Progress";
import { SearchBar } from "@/components/study/SearchBar";
import { Icon } from "@/components/ui/Icon";
import { CategoryEmblem } from "@/components/ui/CategoryEmblem";

export const metadata: Metadata = { title: "Início" };

export default async function DashboardPage() {
  const overview = await getStudyOverview();
  const { access, categories, topics, questionCounts, savedCount } = overview;
  const index = buildStudyIndex(overview);
  const { overall } = index;
  const name = String(access.user.user_metadata?.name ?? "").split(" ")[0] || "estudante";

  // continuar = último tema mexido ainda não dominado; sem histórico → o 1º da fila de revisão
  const continueTopic = index.continueTopic ?? topics.find((topic) => topic.id === index.ranked[0]?.id) ?? topics[0];
  const continueCategory = continueTopic && categories.find((category) => category.id === continueTopic.categoryId);
  const continueState = continueTopic ? index.stateOf(continueTopic.id) : "novo";
  const fresh = !index.continueTopic;
  const wrong = index.ranked.filter((item) => item.reason.kind === "wrong").slice(0, 3);

  return (
    <div className="page dashboard">
      <div className="lg:hidden"><SearchBar /></div>

      <header className="dash-hello">
        <p>Olá, {name} 👋</p>
        <h1>{fresh ? "Vamos começar sua revisão" : "Continue de onde parou"}</h1>
      </header>

      {continueTopic && continueCategory && (
        <section className={`hero-card ruled tone-${continueCategory.tone}`} aria-labelledby="continue-title">
          <div className="hero-card__body">
            <p className="hero-card__eyebrow"><CategoryEmblem slug={continueCategory.slug} size={22} />{continueCategory.shortTitle} · {fresh ? "Sugestão para começar" : TOPIC_STATE[continueState].label}</p>
            <h2 id="continue-title" className="hero-card__title">{continueTopic.title}</h2>
            <p className="hero-card__desc">{continueTopic.description}</p>
            <ul className="hero-card__outline" aria-label="Seções do tema">
              {continueTopic.outline.slice(0, 4).map((title, i) => <li key={title}><span>{i + 1}</span>{title}</li>)}
              {continueTopic.outline.length > 4 && <li className="hero-card__more">+{continueTopic.outline.length - 4} seções e o teste</li>}
            </ul>
            <div className="hero-card__actions">
              <Link href={`/app/tema/${continueTopic.slug}`} className="btn btn-primary" data-testid="continue-topic">
                {fresh ? "Abrir o tema" : "Continuar"} <Icon name="arrowRight" size={18} />
              </Link>
              <Link href="/app/revisar" className="btn btn-secondary" data-testid="review-now">
                <Icon name="play" size={16} /> Revisar agora
              </Link>
            </div>
          </div>
        </section>
      )}

      <section className="dash-stats" aria-label="Seu progresso">
        <div className="dash-stats__ring">
          <ProgressRing value={overall.completion} label="concluído" size="lg" />
          <div>
            <b>{overall.started} de {overall.total} temas iniciados</b>
            <span>{overall.dueCount ? `${overall.dueCount} ${overall.dueCount === 1 ? "tema aguarda" : "temas aguardam"} revisão` : "Você está em dia"}</span>
          </div>
        </div>
        <div className="dash-stats__tiles">
          <StatTile icon="target" value={`${overall.quizzes}/${overall.total}`} label="quizzes feitos" />
          <StatTile icon="check" value={overall.accuracyPct == null ? "—" : `${overall.accuracyPct}%`} label="de acerto" tone="ok" />
          <StatTile icon="refresh" value={overall.pendingQuestions} label="para revisar" tone="bad" />
          <StatTile icon="bookmark" value={savedCount} label="pontos salvos" tone="hl" />
        </div>
      </section>

      {wrong.length > 0 && (
        <section>
          <SectionHeading eyebrow="Revisar novamente" title="Pontos que pedem reforço" tone="bad" action={{ href: "/app/revisoes", label: "Ver fila" }} />
          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {wrong.map((item) => {
              const topic = topics.find((candidate) => candidate.id === item.id)!;
              return <ReviewQueueCard key={item.id} topic={topic} reason={item.reason.label} category={categories.find((category) => category.id === topic.categoryId)} />;
            })}
          </div>
        </section>
      )}

      <section>
        <SectionHeading eyebrow="Suas matérias" title="Escolha por onde revisar" action={{ href: "/app/categorias", label: "Ver todas" }} />
        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} stats={index.categoryStats(category.id)} compact />
          ))}
        </div>
        <Link href="/app/categorias?ver=mapa" className="atlas-teaser">
          <span className="atlas-teaser__icon"><Icon name="map" size={20} /></span>
          <span className="min-w-0 flex-1">
            <b>Ver o mapa geral</b>
            <small>{categories.length} matérias e {topics.length} temas num mapa mental só · {[...questionCounts.values()].reduce((a, b) => a + b, 0)} questões</small>
          </span>
          <Icon name="arrowRight" size={18} />
        </Link>
      </section>
    </div>
  );
}
