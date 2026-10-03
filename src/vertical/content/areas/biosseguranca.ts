import type { CategorySeed } from "@/core/content/types";
import { HIGIENE_DAS_MAOS } from "../topics/biosseguranca/higiene-das-maos";
import { PRECAUCOES } from "../topics/biosseguranca/precaucoes";
import { EPI } from "../topics/biosseguranca/epi";
import { NR32 } from "../topics/biosseguranca/nr32";
import { ACIDENTE_BIOLOGICO } from "../topics/biosseguranca/acidente-biologico";
import { RESIDUOS } from "../topics/biosseguranca/residuos";
import { PROCESSAMENTO } from "../topics/biosseguranca/processamento";
import { SEGURANCA_DO_PACIENTE } from "../topics/biosseguranca/seguranca-do-paciente";

/** Ordem = trilha de estudo: da barreira básica ao sistema de segurança do serviço. */
export const BIOSSEGURANCA: CategorySeed = {
  slug: "biosseguranca",
  title: "Biossegurança e Segurança do Paciente",
  shortTitle: "Biossegurança",
  description: "Higiene das mãos, precauções, EPI, NR 32, acidentes, resíduos, esterilização e segurança do paciente.",
  tone: "green",
  icon: "🧼",
  status: "published",
  topics: [HIGIENE_DAS_MAOS, PRECAUCOES, EPI, NR32, ACIDENTE_BIOLOGICO, RESIDUOS, PROCESSAMENTO, SEGURANCA_DO_PACIENTE],
};
