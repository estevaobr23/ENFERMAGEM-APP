import type { CategorySeed } from "@/core/content/types";
import { NOVE_CERTOS } from "../topics/fundamentos/nove-certos";
import { UPP } from "../topics/fundamentos/upp";

export const FUNDAMENTOS: CategorySeed = {
  slug: "fundamentos",
  title: "Fundamentos de Enfermagem",
  shortTitle: "Fundamentos",
  description: "Administração segura de medicamentos e prevenção de úlcera por pressão.",
  tone: "teal",
  icon: "🩺",
  status: "published",
  topics: [NOVE_CERTOS, UPP],
};
