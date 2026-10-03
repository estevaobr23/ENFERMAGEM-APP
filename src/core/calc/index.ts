/**
 * Funções de cálculo EDUCACIONAIS. Servem para gerar e conferir exercícios de
 * estudo (e a resolução passo a passo). Não são calculadora clínica: o app
 * nunca recebe dados de paciente nem sugere conduta.
 *
 * Fontes das regras (registradas também nos temas):
 *  - conversões de gotejamento: COREN-SP, Boas práticas: Cálculo seguro, vol. I
 *    (1 mL = 20 gotas = 60 microgotas; 1 gota = 3 microgotas)
 *  - Regra de Näegele: MS, Cadernos de Atenção Básica nº 32 (2012), item 5.6
 */

export const DROPS_PER_ML = 20;
export const MICRODROPS_PER_ML = 60;

export type DripKind = "gotas" | "microgotas";

export type DripResult = {
  perMinute: number;
  /** valor exato antes do arredondamento, para a explicação */
  exact: number;
  steps: string[];
};

/** Arredonda para o inteiro mais próximo (gotas não se fracionam). */
function roundHalfUp(n: number) {
  return Math.floor(n + 0.5);
}

function fmt(n: number) {
  return Number.isInteger(n) ? String(n) : n.toFixed(2).replace(".", ",");
}

/**
 * Gotejamento por minuto para um volume em mL a correr em N horas.
 * gotas/min = V × 20 ÷ (T × 60) = V ÷ (T × 3)
 * microgotas/min = V × 60 ÷ (T × 60) = V ÷ T
 */
export function dripRate(volumeMl: number, hours: number, kind: DripKind): DripResult {
  if (!(volumeMl > 0) || !(hours > 0)) throw new Error("volume e tempo precisam ser positivos");
  const perMl = kind === "gotas" ? DROPS_PER_ML : MICRODROPS_PER_ML;
  const minutes = hours * 60;
  const exact = (volumeMl * perMl) / minutes;
  const perMinute = roundHalfUp(exact);
  const unit = kind === "gotas" ? "gotas" : "microgotas";
  return {
    perMinute,
    exact,
    steps: [
      `Total de ${unit}: ${fmt(volumeMl)} mL × ${perMl} = ${fmt(volumeMl * perMl)} ${unit}`,
      `Tempo em minutos: ${fmt(hours)} h × 60 = ${fmt(minutes)} min`,
      `${fmt(volumeMl * perMl)} ÷ ${fmt(minutes)} = ${fmt(Number(exact.toFixed(2)))} → ${perMinute} ${unit}/min`,
    ],
  };
}

export type DoseResult = { volumeMl: number; steps: string[] };

/**
 * Regra de três direta: quantos mL aspirar para a dose prescrita, a partir da
 * apresentação disponível (massa em `availableMg` dentro de `availableMl`).
 */
export function doseVolume(prescribedMg: number, availableMg: number, availableMl: number): DoseResult {
  if (!(prescribedMg > 0) || !(availableMg > 0) || !(availableMl > 0)) throw new Error("valores precisam ser positivos");
  const volumeMl = Math.round(((prescribedMg * availableMl) / availableMg) * 100) / 100;
  return {
    volumeMl,
    steps: [
      `${fmt(availableMg)} mg — ${fmt(availableMl)} mL`,
      `${fmt(prescribedMg)} mg — x mL`,
      `x = ${fmt(prescribedMg)} × ${fmt(availableMl)} ÷ ${fmt(availableMg)} = ${fmt(volumeMl)} mL`,
    ],
  };
}

export type SimpleDate = { day: number; month: number; year: number };

function daysInMonth(month: number, year: number) {
  return new Date(Date.UTC(year, month, 0)).getUTCDate();
}

/**
 * Data provável do parto pela Regra de Näegele, como descrita no CAB 32:
 * soma 7 dias ao 1º dia da DUM e subtrai 3 meses (ou soma 9, se a DUM for de
 * janeiro a março). Dias excedentes passam para o mês seguinte (+1 no mês).
 */
export function naegele(dum: SimpleDate): SimpleDate & { steps: string[] } {
  let day = dum.day + 7;
  let month = dum.month <= 3 ? dum.month + 9 : dum.month - 3;
  let year = dum.month <= 3 ? dum.year : dum.year + 1;
  const steps = [`Dia: ${dum.day} + 7 = ${day}`];
  const limit = daysInMonth(dum.month, dum.year);
  if (day > limit) {
    day -= limit;
    month += 1;
    steps.push(`Passou de ${limit} dias: ${day + limit} − ${limit} = ${day}, e soma 1 ao mês`);
    if (month > 12) {
      month -= 12;
      year += 1;
    }
  }
  steps.push(
    dum.month <= 3
      ? `Mês: ${dum.month} + 9${steps.length > 1 ? " + 1" : ""} = ${month}`
      : `Mês: ${dum.month} − 3${steps.length > 1 ? " + 1" : ""} = ${month}`,
  );
  return { day, month, year, steps };
}

export function formatDate(d: SimpleDate) {
  return `${String(d.day).padStart(2, "0")}/${String(d.month).padStart(2, "0")}/${d.year}`;
}

/* ───────── extensões (Coren-SP, Boas práticas: Cálculo seguro, vol. II) ───────── */

/**
 * Gotejamento com o tempo em MINUTOS (Coren-SP vol. II):
 * gotas/min = V × 20 ÷ min · microgotas/min = V × 60 ÷ min
 */
export function dripRateMinutes(volumeMl: number, minutes: number, kind: DripKind): DripResult {
  if (!(volumeMl > 0) || !(minutes > 0)) throw new Error("volume e tempo precisam ser positivos");
  const perMl = kind === "gotas" ? DROPS_PER_ML : MICRODROPS_PER_ML;
  const exact = (volumeMl * perMl) / minutes;
  const perMinute = roundHalfUp(exact);
  const unit = kind === "gotas" ? "gotas" : "microgotas";
  return {
    perMinute,
    exact,
    steps: [
      `${fmt(volumeMl)} mL × ${perMl} = ${fmt(volumeMl * perMl)} ${unit}`,
      `${fmt(volumeMl * perMl)} ÷ ${fmt(minutes)} min = ${fmt(Number(exact.toFixed(2)))} → ${perMinute} ${unit}/min`,
    ],
  };
}

/** Tempo para terminar uma solução: horas = V ÷ (gotas/min × 3) ou V ÷ microgotas/min. */
export function infusionTime(volumeMl: number, perMinute: number, kind: DripKind) {
  if (!(volumeMl > 0) || !(perMinute > 0)) throw new Error("volume e gotejamento precisam ser positivos");
  const exactHours = kind === "gotas" ? volumeMl / (perMinute * 3) : volumeMl / perMinute;
  const totalMinutes = Math.round(exactHours * 60);
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  const divisor = kind === "gotas" ? `(${fmt(perMinute)} × 3)` : fmt(perMinute);
  return {
    hours,
    minutes,
    exactHours,
    steps: [
      `T = ${fmt(volumeMl)} ÷ ${divisor} = ${fmt(Number(exactHours.toFixed(4)))} h`,
      `Parte decimal: ${fmt(Number((exactHours - Math.floor(exactHours)).toFixed(4)))} h × 60 = ${minutes} min`,
      `Tempo ≈ ${hours} h ${String(minutes).padStart(2, "0")} min`,
    ],
  };
}

/**
 * Regra de três direta genérica (mg, UI, g...): quanto aspirar da apresentação
 * disponível para obter a dose prescrita.
 */
export function ruleOfThree(prescribed: number, available: number, availableMl: number, unit: string) {
  if (!(prescribed > 0) || !(available > 0) || !(availableMl > 0)) throw new Error("valores precisam ser positivos");
  const volumeMl = Math.round(((prescribed * availableMl) / available) * 100) / 100;
  const n = (v: number) => v.toLocaleString("pt-BR", { maximumFractionDigits: 2 });
  return {
    volumeMl,
    steps: [
      `${n(available)} ${unit} — ${n(availableMl)} mL`,
      `${n(prescribed)} ${unit} — x mL`,
      `x = ${n(prescribed)} × ${n(availableMl)} ÷ ${n(available)} = ${n(volumeMl)} mL`,
    ],
  };
}

/** Insulina U-100 aspirada em seringa comum: mL = UI prescritas ÷ 100 (concentração do frasco). */
export function insulinVolume(prescribedUI: number, concentrationUIperMl = 100) {
  if (!(prescribedUI > 0) || !(concentrationUIperMl > 0)) throw new Error("valores precisam ser positivos");
  const volumeMl = Math.round((prescribedUI / concentrationUIperMl) * 100) / 100;
  return {
    volumeMl,
    steps: [
      `${concentrationUIperMl} UI — 1 mL`,
      `${prescribedUI} UI — x mL`,
      `x = ${prescribedUI} × 1 ÷ ${concentrationUIperMl} = ${String(volumeMl).replace(".", ",")} mL`,
    ],
  };
}
