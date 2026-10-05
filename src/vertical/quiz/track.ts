/**
 * Eventos do funil /quiz. Sem dado pessoal e sem dado de saúde: só o número da
 * pergunta, o índice da opção e a dimensão do resultado.
 * Entrega em dataLayer (GTM) e window.utmify quando existirem; sempre em
 * console.debug, para dar para conferir o funil no navegador durante o teste.
 */

export type QuizEvent =
  | "quiz_view"
  | "quiz_start"
  | "quiz_question_answered"
  | "quiz_complete"
  | "quiz_result_view"
  | "quiz_offer_view"
  | "quiz_plan_click"
  | "quiz_checkout_click";

type Payload = Record<string, string | number | boolean>;

type TrackingWindow = Window & {
  dataLayer?: Payload[];
  utmify?: { track?: (event: string, payload?: Payload) => void };
};

export function track(event: QuizEvent, payload: Payload = {}) {
  if (typeof window === "undefined") return;
  const data = { event, funnel: "quiz", ...payload };
  const w = window as TrackingWindow;
  try {
    (w.dataLayer = w.dataLayer ?? []).push(data);
    w.utmify?.track?.(event, payload);
  } catch { /* bloqueador de script não pode quebrar o funil */ }
  console.debug("[quiz]", event, payload);
}
