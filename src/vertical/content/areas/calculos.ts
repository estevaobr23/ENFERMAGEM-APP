import type { CategorySeed } from "@/core/content/types";
import { CONVERSOES } from "../topics/calculos/conversoes";
import { REGRA_DE_TRES } from "../topics/calculos/regra-de-tres";
import { GOTEJAMENTO } from "../topics/calculos/gotejamento";
import { PENICILINA_REDILUICAO } from "../topics/calculos/penicilina-rediluicao";
import { INSULINA } from "../topics/calculos/insulina";

/** Ordem = trilha: converter → regra de três → gotejamento → casos especiais. Todos os números saem de src/core/calc. */
export const CALCULOS: CategorySeed = {
  slug: "calculos-de-enfermagem",
  title: "Cálculos de Enfermagem",
  shortTitle: "Cálculos",
  description: "Conversões, regra de três, gotejamento, penicilina, rediluição e insulina — com exercícios resolvidos.",
  tone: "orange",
  icon: "🧮",
  status: "published",
  topics: [CONVERSOES, REGRA_DE_TRES, GOTEJAMENTO, PENICILINA_REDILUICAO, INSULINA],
};
