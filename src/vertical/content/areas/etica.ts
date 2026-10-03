import type { CategorySeed } from "@/core/content/types";
import { LEI_7498 } from "../topics/etica/lei-7498";
import { LEI_5905 } from "../topics/etica/lei-5905";
import { CODIGO_DE_ETICA } from "../topics/etica/codigo-de-etica";
import { INFRACOES_PENALIDADES } from "../topics/etica/infracoes-e-penalidades";

/** Ordem = trilha: quem pode exercer → quem fiscaliza → o código → as penas. */
export const ETICA: CategorySeed = {
  slug: "etica-e-legislacao",
  title: "Ética e Legislação Profissional",
  shortTitle: "Ética",
  description: "Lei 7.498 e Decreto 94.406, sistema Cofen/Coren, Código de Ética e penalidades.",
  tone: "slate",
  icon: "⚖️",
  status: "published",
  topics: [LEI_7498, LEI_5905, CODIGO_DE_ETICA, INFRACOES_PENALIDADES],
};
