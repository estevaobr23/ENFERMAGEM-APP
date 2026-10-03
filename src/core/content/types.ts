/**
 * Tipos do conteúdo de revisão. Genéricos: não sabem o que é SUS ou
 * enfermagem — a vertical (src/vertical/content) preenche.
 *
 * Status editorial: só "published" chega ao aluno (RLS no banco). Tudo que
 * não pôde ser conferido na fonte fica "review_required".
 */
export type ContentStatus = "draft" | "review_required" | "reviewed" | "published";

export type Tone = "blue" | "teal" | "green" | "amber" | "rose" | "violet" | "orange" | "slate";

export type SourceRef = {
  title: string;
  organization: string;
  url: string;
  /** ISO yyyy-mm-dd */
  accessedAt: string;
  /** o trecho usado: "art. 7º", "item 5.6" */
  locator?: string;
};

export type MapBlock = {
  title: string;
  items: string[];
  tone: Tone;
  icon?: string;
};

/** Mapa estruturado (HTML/CSS), nunca imagem. */
export type VisualMapSpec = {
  layout: "hub" | "flow" | "compare";
  center: string;
  blocks: MapBlock[];
  footnote?: string;
};

/*
 * Seções do tema: o conteúdo denso vira estrutura visual. Cada seção tem um
 * papel didático (kind) e é feita de blocos tipados — o app escolhe como
 * desenhar cada bloco (cards, passo a passo, comparação...). Nada de HTML no
 * conteúdo: só texto com dois marcadores inline:
 *   ==grifo==   marca-texto (o que a banca cobra)
 *   **forte**   negrito
 */
export type SectionKind =
  | "visao"
  | "conceito"
  | "classificacao"
  | "etapas"
  | "cuidados"
  | "cobrado"
  | "atencao"
  | "pratica"
  | "numeros"
  | "tecnico"
  | "caso"
  | "conexoes";

/** Quem executa um passo — o limite legal entre técnico e enfermeiro cai em prova. */
export type Actor = "tecnico" | "enfermeiro" | "equipe" | "medico" | "servico";

export type CardItem = { title: string; text: string; tone?: Tone; icon?: string; tag?: string };

export type ContentBlock =
  /** termo + definição (com a letra da norma) */
  | { type: "definition"; term: string; text: string; note?: string }
  /** parágrafo curto (máx. ~3 linhas) — use pouco */
  | { type: "text"; text: string }
  /** grade de cartões com um ponto cada */
  | { type: "cards"; items: CardItem[] }
  /** sequência numerada (procedimento, ordem de raciocínio) */
  | { type: "steps"; items: { title: string; text?: string; why?: string; who?: Actor }[] }
  /** tabela comparativa: cada linha tem uma célula por coluna */
  | { type: "compare"; columns: string[]; rows: { label: string; cells: string[] }[] }
  /** lista com marcador de conferência */
  | { type: "checklist"; title?: string; items: string[] }
  /** faça × não faça */
  | { type: "dodont"; do: string[]; dont: string[] }
  /** caixa de destaque */
  | { type: "callout"; variant: "atencao" | "dica" | "lei"; title: string; text: string }
  /** como a banca tenta enganar: afirmação errada → certa */
  | { type: "traps"; items: { wrong: string; right: string; why?: string }[] }
  /** números que caem: valor em destaque + o que significa */
  | { type: "numbers"; items: { value: string; label: string; note?: string }[] }
  /** situação-problema comentada, no formato de questão de prova */
  | { type: "case"; title: string; scenario: string; question: string; answer: string; reasoning: string[] }
  /** conexões com outros temas (o slug é validado contra o conteúdo) */
  | { type: "links"; items: { slug: string; title: string; why: string }[] }
  /** quando → o quê (linha do tempo) */
  | { type: "timeline"; items: { when: string; what: string }[] }
  /** fórmula com legenda */
  | { type: "formula"; label: string; expression: string; legend?: string[] }
  /** exercício resolvido */
  | { type: "example"; title: string; given: string[]; steps: string[]; answer: string }
  /** ilustração do manifesto (src/vertical/content/visual-assets.ts); rótulos desenhados pelo app */
  | { type: "figure"; asset: string; caption?: string };

export type TopicSection = {
  /** âncora estável (kebab-case), alvo de question.section */
  id: string;
  kind: SectionKind;
  title: string;
  /** uma frase que diz o que a seção resolve */
  lead?: string;
  blocks: ContentBlock[];
  /** índice em topic.sources de onde a seção saiu */
  source?: number;
};

export type QuestionOptionSeed = { label: "A" | "B" | "C" | "D" | "E"; text: string; correct?: boolean };

export type QuestionSeed = {
  key: string;
  stem: string;
  options: QuestionOptionSeed[];
  explanation: string;
  difficulty?: "facil" | "media" | "dificil";
  /** índice em topic.sources */
  source: number;
  /** id da seção que a questão testa: ao errar, o app manda o aluno para lá */
  section?: string;
  status: ContentStatus;
};

export type TopicSeed = {
  slug: string;
  title: string;
  description: string;
  summary: string;
  keyPoints: string[];
  map: { title: string; spec: VisualMapSpec };
  sections: TopicSection[];
  sources: SourceRef[];
  questions: QuestionSeed[];
  status: ContentStatus;
  /** padrão de profundidade: "v2" exige o roteiro completo (validado) */
  standard?: "v1" | "v2";
  /** ISO yyyy-mm-dd — quando o conteúdo foi conferido contra a fonte */
  lastReviewedAt: string | null;
  reviewNotes?: string;
};

export type CategorySeed = {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  tone: Tone;
  icon: string;
  status: ContentStatus;
  topics: TopicSeed[];
};

/** Validação estrutural usada pelo gerador do seed e pelos testes. */
export function validateCategories(categories: CategorySeed[], assetStatus?: (id: string) => string | undefined): string[] {
  const errors: string[] = [];
  const slugs = new Set<string>();
  const keys = new Set<string>();
  for (const c of categories) {
    for (const t of c.topics) {
      const where = `${c.slug}/${t.slug}`;
      if (slugs.has(t.slug)) errors.push(`${where}: slug duplicado`);
      slugs.add(t.slug);
      if (!t.sources.length) errors.push(`${where}: sem fonte`);
      if (t.status === "published" && !t.lastReviewedAt) errors.push(`${where}: publicado sem data de revisão`);
      if (!t.map.spec.blocks.length) errors.push(`${where}: mapa vazio`);
      errors.push(...validateSections(where, t, assetStatus));
      if (t.standard === "v2" && t.status === "published") errors.push(...validateDepthV2(where, t));
      for (const s of t.sources) {
        if (!/^https?:\/\//.test(s.url)) errors.push(`${where}: URL de fonte inválida`);
        if (!/^\d{4}-\d{2}-\d{2}$/.test(s.accessedAt)) errors.push(`${where}: data de acesso inválida`);
      }
      for (const q of t.questions) {
        if (keys.has(q.key)) errors.push(`${q.key}: chave duplicada`);
        keys.add(q.key);
        const correct = q.options.filter((o) => o.correct).length;
        if (correct !== 1) errors.push(`${q.key}: precisa de exatamente 1 alternativa correta (tem ${correct})`);
        if (q.options.length < 2) errors.push(`${q.key}: poucas alternativas`);
        if (!t.sources[q.source]) errors.push(`${q.key}: fonte ${q.source} inexistente`);
        if (q.section && !t.sections.some((s) => s.id === q.section)) errors.push(`${q.key}: seção ${q.section} inexistente`);
        if (q.status === "published" && !q.section) errors.push(`${q.key}: questão publicada sem seção ligada`);
        if (q.status === "published" && t.status !== "published") errors.push(`${q.key}: questão publicada em tema não publicado`);
      }
    }
  }
  // links entre temas: o slug tem que existir e o título tem que bater
  const titles = new Map(categories.flatMap((c) => c.topics.map((t) => [t.slug, t.title] as const)));
  for (const c of categories)
    for (const t of c.topics)
      for (const s of t.sections)
        for (const b of s.blocks)
          if (b.type === "links")
            for (const l of b.items) {
              if (!titles.has(l.slug)) errors.push(`${c.slug}/${t.slug}#${s.id}: link para tema inexistente ${l.slug}`);
              else if (titles.get(l.slug) !== l.title) errors.push(`${c.slug}/${t.slug}#${s.id}: título do link ${l.slug} desatualizado`);
            }
  return errors;
}

/**
 * Padrão de profundidade v2 — o roteiro mínimo de um tema completo:
 * visão geral, núcleo (conceito/classificação/etapas), atuação do técnico ou
 * cuidados, números que caem, caso comentado, banca com raciocínio, conexões
 * e um quiz de verdade.
 */
export const V2 = { minSections: 7, minQuestions: 8, minTraps: 6 };

export function validateDepthV2(where: string, t: TopicSeed): string[] {
  const errors: string[] = [];
  const kinds = new Set(t.sections.map((s) => s.kind));
  const blocks = t.sections.flatMap((s) => s.blocks);
  const need = (ok: boolean, msg: string) => { if (!ok) errors.push(`${where} [v2]: ${msg}`); };
  need(t.sections.length >= V2.minSections, `mínimo de ${V2.minSections} seções (tem ${t.sections.length})`);
  need(kinds.has("visao"), "falta a seção de visão geral");
  need(kinds.has("tecnico") || kinds.has("cuidados"), "falta atuação do técnico ou cuidados");
  need(blocks.some((b) => b.type === "numbers"), "falta o quadro de números que caem");
  need(blocks.some((b) => b.type === "case"), "falta a situação-problema comentada");
  need(blocks.some((b) => b.type === "links"), "falta a seção de conexões");
  const traps = blocks.flatMap((b) => (b.type === "traps" ? b.items : []));
  need(traps.length >= V2.minTraps, `mínimo de ${V2.minTraps} pegadinhas (tem ${traps.length})`);
  need(traps.every((i) => i.why), "toda pegadinha precisa do raciocínio (why)");
  const published = t.questions.filter((q) => q.status === "published");
  need(published.length >= V2.minQuestions, `mínimo de ${V2.minQuestions} questões (tem ${published.length})`);
  need(new Set(published.map((q) => q.difficulty)).size >= 2, "questões precisam variar a dificuldade");
  need(t.keyPoints.length >= 6, "resumo final com ao menos 6 pontos-chave");
  return errors;
}

export const MIN_PUBLISHED_SECTIONS = 3;

function validateSections(where: string, t: TopicSeed, assetStatus?: (id: string) => string | undefined): string[] {
  const errors: string[] = [];
  if (t.status === "published" && t.sections.length < MIN_PUBLISHED_SECTIONS)
    errors.push(`${where}: publicado com menos de ${MIN_PUBLISHED_SECTIONS} seções`);
  const ids = new Set<string>();
  for (const s of t.sections) {
    const at = `${where}#${s.id}`;
    if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(s.id)) errors.push(`${at}: id de seção inválido`);
    if (ids.has(s.id)) errors.push(`${at}: id de seção duplicado`);
    ids.add(s.id);
    if (!s.blocks.length) errors.push(`${at}: seção sem blocos`);
    if (s.source != null && !t.sources[s.source]) errors.push(`${at}: fonte ${s.source} inexistente`);
    for (const b of s.blocks) {
      if (b.type === "compare") {
        if (b.columns.length < 2) errors.push(`${at}: comparação precisa de 2+ colunas`);
        for (const r of b.rows) if (r.cells.length !== b.columns.length) errors.push(`${at}: linha "${r.label}" com células ≠ colunas`);
      }
      if ((b.type === "cards" || b.type === "steps" || b.type === "traps" || b.type === "timeline" || b.type === "checklist") && !b.items.length)
        errors.push(`${at}: bloco ${b.type} vazio`);
      if (b.type === "dodont" && (!b.do.length || !b.dont.length)) errors.push(`${at}: faça/não faça incompleto`);
      if (b.type === "figure" && assetStatus) {
        const status = assetStatus(b.asset);
        if (!status) errors.push(`${at}: figura ${b.asset} não existe no manifesto`);
        else if (t.status === "published" && status !== "integrated") errors.push(`${at}: figura ${b.asset} em '${status}' num tema publicado`);
      }
    }
  }
  return errors;
}

/** Texto plano de um bloco (busca, contagem de leitura). */
export function blockText(b: ContentBlock): string {
  switch (b.type) {
    case "definition": return [b.term, b.text, b.note].filter(Boolean).join(" ");
    case "text": return b.text;
    case "cards": return b.items.map((i) => `${i.title} ${i.text}`).join(" ");
    case "steps": return b.items.map((i) => `${i.title} ${i.text ?? ""} ${i.why ?? ""}`).join(" ");
    case "compare": return [...b.columns, ...b.rows.flatMap((r) => [r.label, ...r.cells])].join(" ");
    case "checklist": return [b.title ?? "", ...b.items].join(" ");
    case "dodont": return [...b.do, ...b.dont].join(" ");
    case "callout": return `${b.title} ${b.text}`;
    case "traps": return b.items.map((i) => `${i.wrong} ${i.right} ${i.why ?? ""}`).join(" ");
    case "numbers": return b.items.map((i) => `${i.value} ${i.label} ${i.note ?? ""}`).join(" ");
    case "case": return [b.title, b.scenario, b.question, b.answer, ...b.reasoning].join(" ");
    case "links": return b.items.map((i) => `${i.title} ${i.why}`).join(" ");
    case "timeline": return b.items.map((i) => `${i.when} ${i.what}`).join(" ");
    case "formula": return [b.label, b.expression, ...(b.legend ?? [])].join(" ");
    case "example": return [b.title, ...b.given, ...b.steps, b.answer].join(" ");
    case "figure": return b.caption ?? "";
  }
}

/** Minutos estimados de leitura (≈ 180 palavras/min para texto técnico). */
export function readingMinutes(sections: TopicSection[], summary = ""): number {
  const words = (sections.flatMap((s) => [s.title, s.lead ?? "", ...s.blocks.map(blockText)]).join(" ") + " " + summary)
    .split(/\s+/)
    .filter(Boolean).length;
  return Math.max(2, Math.round(words / 180));
}
