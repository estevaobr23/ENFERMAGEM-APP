import type { CategorySeed } from "@/core/content/types";
import { SUS_CONSTITUICAO } from "../topics/sus/constituicao";
import { PRINCIPIOS_SUS } from "../topics/sus/principios";
import { LEI_8080_ORGANIZACAO } from "../topics/sus/lei-8080-organizacao";
import { LEI_8142 } from "../topics/sus/lei-8142";
import { DECRETO_7508 } from "../topics/sus/decreto-7508";
import { PNAB } from "../topics/sus/pnab";

/** Ordem = trilha: da Constituição à porta de entrada onde o técnico trabalha. */
export const SUS: CategorySeed = {
  slug: "sus",
  title: "SUS",
  shortTitle: "SUS",
  description: "Constituição, Lei 8.080, Lei 8.142, Decreto 7.508 e Atenção Básica (PNAB).",
  tone: "blue",
  icon: "🏛️",
  status: "published",
  topics: [SUS_CONSTITUICAO, PRINCIPIOS_SUS, LEI_8080_ORGANIZACAO, LEI_8142, DECRETO_7508, PNAB],
};
