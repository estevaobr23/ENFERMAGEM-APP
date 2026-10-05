import type { Metadata } from "next";
import { UtmifyPixel } from "@/vertical/landing/UtmifyPixel";
import { QuizFlow } from "@/vertical/quiz/QuizFlow";
import "@/vertical/landing/landing.css";
import "@/vertical/quiz/quiz.css";

/*
 * Funil experimental em quiz, para teste A/B contra a landing (/).
 * Mesma oferta, mesmos checkouts e o mesmo repasse de UTM.
 */
export const metadata: Metadata = {
  title: "O que está atrapalhando sua revisão? — Revisão Técnico",
  description: "Responda 7 perguntas rápidas e veja qual parte da sua revisão para o concurso de Técnico de Enfermagem precisa de mais atenção.",
};

export default function QuizPage() {
  return (
    <>
      <UtmifyPixel />
      <QuizFlow />
    </>
  );
}
