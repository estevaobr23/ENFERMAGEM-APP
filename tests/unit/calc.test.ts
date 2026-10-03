import assert from "node:assert/strict";
import test from "node:test";
import { doseVolume, dripRate, dripRateMinutes, infusionTime, insulinVolume, naegele, ruleOfThree } from "../../src/core/calc";

test("Näegele reproduz os 3 exemplos do CAB 32", () => {
  const a = naegele({ day: 13, month: 9, year: 2004 });
  assert.deepEqual([a.day, a.month, a.year], [20, 6, 2005]);
  const b = naegele({ day: 10, month: 2, year: 2004 });
  assert.deepEqual([b.day, b.month, b.year], [17, 11, 2004]);
  const c = naegele({ day: 27, month: 1, year: 2004 });
  assert.deepEqual([c.day, c.month, c.year], [3, 11, 2004]);
});

test("gotejamento em horas e em minutos reproduz os exemplos do Coren-SP", () => {
  assert.equal(dripRate(500, 8, "gotas").perMinute, 21); // vol. II, 1º exemplo
  assert.equal(dripRateMinutes(500, 150, "gotas").perMinute, 67); // vol. II, 2º exemplo (2 h 30)
  assert.equal(dripRateMinutes(100, 30, "microgotas").perMinute, 200); // vol. II, 3º exemplo
  assert.equal(dripRate(300, 6, "microgotas").perMinute, 50);
});

test("tempo de término: 500 mL a 10 gotas/min = 16 h 40 min", () => {
  const t = infusionTime(500, 10, "gotas");
  assert.equal(t.hours, 16);
  assert.equal(t.minutes, 40);
});

test("regra de três: aminofilina, penicilina e insulina", () => {
  assert.equal(doseVolume(120, 240, 10).volumeMl, 5); // vol. I
  assert.equal(ruleOfThree(4_800_000, 10_000_000, 10, "UI").volumeMl, 4.8); // vol. II, penicilina
  assert.equal(ruleOfThree(35_000, 1_000_000, 10, "UI").volumeMl, 0.35); // vol. II, rediluição
  assert.equal(insulinVolume(20).volumeMl, 0.2); // vol. II, 20 UI em seringa comum
});
