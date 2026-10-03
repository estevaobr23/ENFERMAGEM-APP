import type { SectionKind } from "@/core/content/types";
import type { IconName } from "@/components/ui/Icon";

/** Identidade visual de cada papel didático: rótulo, ícone e cor da "aba" do fichário. */
export const SECTION_KIND: Record<SectionKind, { label: string; icon: IconName; tone: string }> = {
  visao: { label: "Visão geral", icon: "sparkles", tone: "slate" },
  conceito: { label: "Conceito", icon: "book", tone: "blue" },
  classificacao: { label: "Classificação", icon: "grid", tone: "violet" },
  etapas: { label: "Passo a passo", icon: "steps", tone: "teal" },
  cuidados: { label: "Cuidados", icon: "shield", tone: "green" },
  cobrado: { label: "Como a banca cobra", icon: "target", tone: "rose" },
  atencao: { label: "Atenção", icon: "alert", tone: "amber" },
  pratica: { label: "Prática", icon: "pencil", tone: "orange" },
  numeros: { label: "Números que caem", icon: "chart", tone: "amber" },
  tecnico: { label: "Atuação do técnico", icon: "user", tone: "teal" },
  caso: { label: "Situação-problema", icon: "bulb", tone: "violet" },
  conexoes: { label: "Conexões", icon: "link", tone: "slate" },
};
