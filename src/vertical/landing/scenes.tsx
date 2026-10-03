import Image from "next/image";
import { findTopic } from "@/vertical/content";
import { Device } from "./Device";

const { category, topic } = findTopic("higiene-das-maos-cinco-momentos");
const question = topic.questions.find((item) => item.status === "published")!;
const wrong = question.options.find((option) => !option.correct)!;
const correct = question.options.find((option) => option.correct)!;

export const DEMO_TOPIC_TITLE = topic.title;
export const DEMO_CATEGORY_TITLE = category.title;
export const DEMO_QUESTION = question.stem;

function AppTop() {
  return <div className="scene-top"><span className="scene-logo"><Image src="/interface/brand/revisao-tecnico-mark.svg" alt="" width={32} height={32} /></span><b>Revisão Técnico</b><i>•••</i></div>;
}

export function SceneReview({ width = "min(72vw, 18rem)" }: { width?: string }) {
  return <Device width={width} label={`Aplicativo abrindo uma revisão de ${DEMO_TOPIC_TITLE}`}><div className="sr-scene"><AppTop /><div className="sr-home"><p>Olá, Ana 👋</p><h3>Continue sua revisão</h3><div className="sr-review"><small>PRÓXIMA REVISÃO</small><b>{DEMO_TOPIC_TITLE}</b><span className="sr-button">REVISAR AGORA</span></div></div><div className="sr-topic"><small>{DEMO_CATEGORY_TITLE}</small><h3>{DEMO_TOPIC_TITLE}</h3><div className="sr-map"><b>{topic.map.spec.center}</b>{topic.map.spec.blocks.slice(0, 3).map((block) => <span key={block.title}>{block.title}</span>)}</div><p>{topic.keyPoints[0]}</p><span className="sr-button">TESTAR AGORA</span></div><span className="lp-finger sr-finger" /></div></Device>;
}

export function SceneOld({ width = "min(39vw, 13rem)" }: { width?: string }) {
  return <Device width={width} label="Apostila longa sendo rolada e ampliada para localizar um assunto"><div className="so-scene"><div className="so-bar"><b>Apostila.pdf</b><span>64 páginas</span></div><div className="so-page"><h4>BIOSSEGURANÇA</h4>{Array.from({ length: 18 }, (_, i) => <i key={i} style={{ width: `${68 + (i % 4) * 7}%` }} />)}<b className="so-find">Onde estava?</b></div><div className="so-pinch"><span /><span /></div></div></Device>;
}

export function SceneNew({ width = "min(39vw, 13rem)" }: { width?: string }) {
  return <Device width={width} label="Aplicativo mostrando categoria, mapa visual e questão em poucos toques"><div className="sn-scene"><AppTop /><small>{DEMO_CATEGORY_TITLE}</small><h3>{DEMO_TOPIC_TITLE}</h3><div className="sn-map"><b>{topic.map.spec.center}</b>{topic.map.spec.blocks.slice(0, 4).map((block) => <span key={block.title}>{block.title}</span>)}</div><div className="sn-question">?<span>Questões com explicação</span></div></div></Device>;
}

export function SceneMistake({ width = "min(72vw, 18rem)" }: { width?: string }) {
  return <Device width={width} label="Aluno erra uma questão, lê a explicação e vê o tema entrar em Revisar novamente"><div className="sm-scene"><AppTop /><div className="sm-question"><small>QUESTÃO 1</small><b>{DEMO_QUESTION}</b><span className="sm-option sm-option--wrong">A · {wrong.text}</span><span className="sm-option">{correct.label} · {correct.text}</span><button>CONFERIR RESPOSTA</button></div><div className="sm-result"><span>AINDA NÃO</span><b>Esse ponto entrou em Revisar novamente.</b><p>{question.explanation}</p></div><div className="sm-dashboard"><small>SUA FILA</small><h3>1 revisão pendente</h3><div><span>↻</span><b>{DEMO_TOPIC_TITLE}</b></div></div><span className="lp-finger sm-finger" /></div></Device>;
}
