import type { TopicSeed } from "@/core/content/types";
import { mcq } from "../../helpers";
import { REVIEWED_V2, SRC, V2_REVIEW_NOTE, at } from "../../sources";

/* Fontes: [0] Resolução Cofen 564/2017, arts. 103 a 119; [1] Lei 5.905/1973, art. 18. */

export const INFRACOES_PENALIDADES: TopicSeed = {
  slug: "codigo-de-etica-infracoes-e-penalidades",
  title: "Código de Ética: infrações e penalidades",
  description: "O que é infração ética, as cinco penalidades com seus limites, quem aplica cada uma, gravidade, atenuantes e agravantes.",
  summary:
    "No Código de Ética dos Profissionais de Enfermagem (Resolução Cofen nº 564/2017), infração ética e disciplinar é a ação, omissão ou conivência que implique desobediência às disposições do código ou às normas do Sistema Cofen/Conselhos Regionais. O profissional responde pela infração que cometer ou contribuir para praticar e, quando cometida por outro, se dela obtiver benefício. A infração é apurada em processo ético-disciplinar. As penalidades, previstas no art. 18 da Lei 5.905/1973, são: advertência verbal (admoestação reservada, registrada no prontuário do infrator na presença de duas testemunhas); multa (de 1 a 10 vezes o valor da anuidade); censura (repreensão divulgada em publicações oficiais e jornais de grande circulação); suspensão do exercício profissional (até 90 dias, divulgada e comunicada aos empregadores); e cassação do direito ao exercício profissional (perda do direito por até 30 anos). Advertência, multa, censura e suspensão são aplicadas pelo Conselho Regional; a cassação é de competência do Conselho Federal. Na suspensão e na cassação, a carteira é retida. A gradação considera a gravidade, as circunstâncias atenuantes e agravantes, o dano e os antecedentes. As infrações são leves, moderadas, graves ou gravíssimas. São atenuantes, por exemplo, buscar espontaneamente minorar as consequências, bons antecedentes, confissão espontânea e colaboração; agravantes, reincidência, dano irreparável, dolo, motivo fútil ou torpe e aproveitar-se da fragilidade da vítima. Penalidades só são aplicadas cumulativamente quando houver infração a mais de um artigo.",
  keyPoints: [
    "Infração: ação, omissão ou conivência contra o código ou as normas do Sistema Cofen/Coren.",
    "Responde quem comete, quem contribui e quem se beneficia da infração de outro.",
    "5 penalidades: advertência verbal → multa → censura → suspensão → cassação.",
    "Advertência: reservada, registrada, com 2 testemunhas. Multa: 1 a 10 anuidades.",
    "Suspensão: até 90 dias. Cassação: até 30 anos.",
    "Coren aplica advertência, multa, censura e suspensão; Cofen aplica cassação.",
    "Infrações: leves, moderadas, graves e gravíssimas.",
    "Penalidades cumulativas só quando a infração atinge mais de um artigo.",
  ],
  map: {
    title: "Penalidades em escada",
    spec: {
      layout: "flow",
      center: "Resolução Cofen 564/2017 · art. 108",
      blocks: [
        { title: "Advertência verbal", tone: "green", icon: "🗣️", items: ["Reservada", "2 testemunhas", "Coren"] },
        { title: "Multa", tone: "teal", icon: "💵", items: ["1 a 10 anuidades", "Coren"] },
        { title: "Censura", tone: "amber", icon: "📰", items: ["Divulgada", "Coren"] },
        { title: "Suspensão", tone: "orange", icon: "⏸️", items: ["Até 90 dias", "Carteira retida", "Coren"] },
        { title: "Cassação", tone: "rose", icon: "⛔", items: ["Até 30 anos", "Carteira retida", "Cofen"] },
      ],
    },
  },
  sections: [
    {
      id: "visao-geral",
      kind: "visao",
      title: "Do descumprimento à pena",
      source: 0,
      blocks: [
        {
          type: "steps",
          items: [
            { title: "Infração", text: "Ação, omissão ou conivência que desobedeça ao código ou às normas do Sistema Cofen/Coren (art. 104)." },
            { title: "Processo ético-disciplinar", text: "Apuração conforme o Código de Processo Ético-Disciplinar aprovado pelo Cofen (art. 107)." },
            { title: "Gravidade", text: "Analisada pelos fatos, atos praticados ou omissivos e resultados (art. 106)." },
            { title: "Pena", text: "Escolhida conforme gravidade, atenuantes e agravantes, dano e antecedentes (art. 110)." },
          ],
        },
        {
          type: "callout",
          variant: "lei",
          title: "Quem responde (art. 105)",
          text: "Quem ==comete== a infração, quem ==contribui== para sua prática e, quando cometida por outro, quem ==dela obtiver benefício==.",
        },
      ],
    },
    {
      id: "penalidades",
      kind: "classificacao",
      title: "As cinco penalidades",
      source: 0,
      blocks: [
        {
          type: "compare",
          columns: ["O que é", "Quem aplica"],
          rows: [
            { label: "Advertência verbal", cells: ["Admoestação ==reservada==, registrada no prontuário do infrator, na presença de ==duas testemunhas==", "Coren"] },
            { label: "Multa", cells: ["Pagamento de ==1 a 10 vezes o valor da anuidade== da categoria", "Coren"] },
            { label: "Censura", cells: ["Repreensão ==divulgada== nas publicações oficiais do Sistema Cofen/Coren e em jornais de grande circulação", "Coren"] },
            { label: "Suspensão", cells: ["Proibição do exercício por ==até 90 dias==; divulgada e comunicada aos empregadores", "Coren"] },
            { label: "Cassação", cells: ["Perda do direito ao exercício por ==até 30 anos==; divulgada", "==Cofen=="] },
          ],
        },
        {
          type: "callout",
          variant: "atencao",
          title: "Carteira retida",
          text: "Na ==suspensão e na cassação==, a carteira é retida na notificação, em todas as categorias de inscrição; volta após cumprir a pena e, na cassação, após o processo de reabilitação.",
        },
      ],
    },
    {
      id: "gravidade",
      kind: "conceito",
      title: "Gravidade das infrações (art. 111)",
      source: 0,
      blocks: [
        {
          type: "timeline",
          items: [
            { when: "Leve", what: "Ofende a integridade física, mental ou moral ==sem causar debilidade==; difama organizações da categoria ou instituições; causa danos patrimoniais ou financeiros." },
            { when: "Moderada", what: "Provoca debilidade ==temporária== de membro, sentido ou função; causa danos mentais, morais, patrimoniais ou financeiros." },
            { when: "Grave", what: "Provoca ==perigo de morte==, debilidade permanente, dano moral irremediável." },
            { when: "Gravíssima", what: "Provoca ==a morte==, debilidade permanente de membro, sentido ou função, dano moral irremediável." },
          ],
        },
      ],
    },
    {
      id: "atenuantes-agravantes",
      kind: "cuidados",
      title: "Atenuantes e agravantes",
      source: 0,
      blocks: [
        {
          type: "dodont",
          do: [
            "Procurar, logo após, por vontade própria, evitar ou minorar as consequências",
            "Ter bons antecedentes profissionais",
            "Agir sob coação, intimidação ou grave ameaça",
            "Agir sob emprego real de força física",
            "Confessar espontaneamente a autoria",
            "Colaborar espontaneamente com a elucidação dos fatos",
          ],
          dont: [
            "Ser reincidente",
            "Causar danos irreparáveis",
            "Cometer a infração dolosamente",
            "Motivo fútil ou torpe",
            "Aproveitar-se da fragilidade da vítima",
            "Abuso de autoridade ou violação do dever do cargo",
            "Ter maus antecedentes; alterar ou falsificar prova",
          ],
        },
        {
          type: "text",
          text: "Na coluna verde estão as ==atenuantes== (art. 112); na vermelha, as ==agravantes== (art. 113).",
        },
      ],
    },
    {
      id: "aplicacao",
      kind: "tecnico",
      title: "Aplicação das penalidades",
      source: 0,
      blocks: [
        {
          type: "steps",
          items: [
            { title: "Gradação (art. 110)", text: "Gravidade · atenuantes e agravantes · dano e resultado · antecedentes do infrator." },
            { title: "Acúmulo só com mais de um artigo (art. 114)", text: "Penalidades cumulativas ==somente quando houver infração a mais de um artigo==." },
            { title: "Cada artigo tem as penas cabíveis (arts. 115 a 119)", text: "O código lista, para cada pena, os artigos cuja infração a admite." },
            { title: "Cassação em casos gravíssimos (art. 119)", text: "Ex.: dano por imperícia, negligência ou imprudência (art. 45), violência (art. 64), aborto fora da lei (art. 73), antecipar a morte (art. 74)." },
          ],
        },
        {
          type: "callout",
          variant: "dica",
          title: "Instância superior",
          text: "Em processos que começam no Cofen e nos casos de cassação, a instância superior é a ==Assembleia de Presidentes dos Conselhos de Enfermagem== (art. 109, parágrafo único).",
        },
      ],
    },
    {
      id: "numeros",
      kind: "numeros",
      title: "Números que caem",
      source: 0,
      blocks: [
        {
          type: "numbers",
          items: [
            { value: "5", label: "penalidades" },
            { value: "2", label: "testemunhas na advertência verbal" },
            { value: "1–10", label: "anuidades na multa" },
            { value: "90 dias", label: "suspensão máxima" },
            { value: "30 anos", label: "cassação máxima" },
            { value: "4", label: "graus de infração", note: "leve, moderada, grave, gravíssima" },
          ],
        },
      ],
    },
    {
      id: "caso",
      kind: "caso",
      title: "Situação-problema",
      source: 0,
      blocks: [
        {
          type: "case",
          title: "Erro de medicação com dano temporário",
          scenario: "Um técnico, reincidente, administra medicamento sem conferir a prescrição e o paciente fica com debilidade temporária de uma função. Logo depois, ele confessa espontaneamente e ajuda a reverter o quadro.",
          question: "Como classificar a infração e o que pesa na pena?",
          answer: "Infração moderada (debilidade temporária). Pesam como agravante a reincidência e como atenuantes a confissão espontânea e a tentativa de minorar as consequências.",
          reasoning: [
            "Art. 111, § 2º: debilidade temporária → moderada.",
            "Art. 113, I: reincidência é agravante.",
            "Art. 112, I e V: minorar as consequências e confessar espontaneamente são atenuantes.",
            "A pena é aplicada pelo Coren, salvo cassação, que é do Cofen.",
          ],
        },
      ],
    },
    {
      id: "como-a-banca-cobra",
      kind: "cobrado",
      title: "Como a banca cobra",
      source: 0,
      blocks: [
        {
          type: "traps",
          items: [
            { wrong: "A cassação é aplicada pelo Coren.", right: "Cassação é competência do ==Cofen==.", why: "Art. 109 e Lei 5.905, art. 18, § 1º." },
            { wrong: "A suspensão pode durar até 1 ano.", right: "Até ==90 dias==.", why: "Art. 108, § 4º." },
            { wrong: "A advertência verbal é pública e divulgada em jornais.", right: "É ==reservada==, com registro e ==duas testemunhas==.", why: "Quem é divulgada é a censura." },
            { wrong: "A multa vai de 1 a 5 salários mínimos.", right: "De ==1 a 10 vezes o valor da anuidade==.", why: "Art. 108, § 2º." },
            { wrong: "A cassação é definitiva e perpétua.", right: "Perda do direito por ==até 30 anos==, com processo de reabilitação.", why: "Art. 108, § 5º e § 7º." },
            { wrong: "Ser reincidente é circunstância atenuante.", right: "Reincidência é ==agravante==.", why: "Art. 113, I." },
            { wrong: "As penalidades podem ser acumuladas em qualquer caso.", right: "Só ==quando houver infração a mais de um artigo==.", why: "Art. 114." },
          ],
        },
      ],
    },
    {
      id: "conexoes",
      kind: "conexoes",
      title: "Conexões",
      blocks: [
        {
          type: "links",
          items: [
            { slug: "codigo-de-etica-cofen-564", title: "Código de Ética (Resolução Cofen 564/2017)", why: "Os deveres e proibições cuja infração gera a pena." },
            { slug: "lei-5905-sistema-cofen-coren", title: "Lei 5.905/73: o sistema Cofen/Coren", why: "A lei que fixa as penas e quem as aplica." },
          ],
        },
      ],
    },
  ],
  sources: [at(SRC.cofen564v2, "arts. 103 a 119"), at(SRC.lei5905, "art. 18")],
  questions: [
    mcq({ key: "etica-cofen-2", section: "penalidades", difficulty: "facil",
      stem: "Segundo a Resolução Cofen nº 564/2017, a penalidade de cassação do direito ao exercício profissional é de competência:",
      options: ["do Conselho Regional de Enfermagem.", "da chefia de enfermagem da instituição.", "do Conselho Federal de Enfermagem.", "do Ministério da Saúde."], correct: 2,
      explanation: "O art. 109 atribui ao Coren advertência verbal, multa, censura e suspensão; a cassação é de competência do Conselho Federal." }),
    mcq({ key: "etica-pen-1", section: "penalidades", difficulty: "facil",
      stem: "A penalidade de suspensão do exercício profissional, prevista no Código de Ética, consiste na proibição do exercício por um período de até:",
      options: ["30 dias.", "60 dias.", "90 dias.", "1 ano."], correct: 2,
      explanation: "Art. 108, § 4º: até 90 dias, com divulgação e comunicação aos órgãos empregadores." }),
    mcq({ key: "etica-pen-2", section: "penalidades", difficulty: "media",
      stem: "A advertência verbal, segundo o Código de Ética, consiste em admoestação:",
      options: ["pública, divulgada em jornais de grande circulação.", "reservada, registrada no prontuário do infrator, na presença de duas testemunhas.", "por escrito, enviada ao empregador.", "verbal, sem qualquer registro."], correct: 1,
      explanation: "Art. 108, § 1º. A pena divulgada em jornais é a censura." }),
    mcq({ key: "etica-pen-3", section: "penalidades", difficulty: "media",
      stem: "A multa aplicada pelo Sistema Cofen/Coren consiste no pagamento de:",
      options: ["1 a 10 vezes o valor da anuidade da categoria profissional do infrator.", "1 a 5 salários mínimos.", "10% do salário do infrator por 12 meses.", "valor fixo definido pelo empregador."], correct: 0,
      explanation: "Art. 108, § 2º: 1 a 10 vezes o valor da anuidade, em vigor no ato do pagamento." }),
    mcq({ key: "etica-pen-4", section: "gravidade", difficulty: "media",
      stem: "Pelo Código de Ética, a infração que provoca debilidade temporária de membro, sentido ou função é classificada como:",
      options: ["leve.", "moderada.", "grave.", "gravíssima."], correct: 1,
      explanation: "Art. 111, § 2º: moderada. Perigo de morte é grave; a morte é gravíssima." }),
    mcq({ key: "etica-pen-5", section: "atenuantes-agravantes", difficulty: "media",
      stem: "É circunstância agravante, segundo o art. 113 do Código de Ética:",
      options: ["ter confessado espontaneamente a autoria.", "ter bons antecedentes profissionais.", "ser reincidente.", "ter colaborado com a elucidação dos fatos."], correct: 2,
      explanation: "Reincidência é agravante; as demais alternativas são atenuantes do art. 112." }),
    mcq({ key: "etica-pen-6", section: "penalidades", difficulty: "dificil",
      stem: "A cassação do direito ao exercício profissional da enfermagem consiste na perda desse direito por um período de até:",
      options: ["5 anos.", "10 anos.", "20 anos.", "30 anos."], correct: 3,
      explanation: "Art. 108, § 5º: até 30 anos; a carteira é devolvida após o processo de reabilitação." }),
    mcq({ key: "etica-pen-7", section: "aplicacao", difficulty: "dificil",
      stem: "Segundo o art. 114 do Código de Ética, as penalidades poderão ser aplicadas cumulativamente:",
      options: ["sempre que o Coren entender conveniente.", "somente quando houver infração a mais de um artigo.", "apenas em casos de reincidência.", "nunca."], correct: 1,
      explanation: "Art. 114: cumulativamente apenas quando houver infração a mais de um artigo." }),
    mcq({ key: "etica-pen-8", section: "visao-geral", difficulty: "media",
      stem: "Pelo art. 105 do Código de Ética, o profissional responde pela infração ética que:",
      options: ["apenas cometer pessoalmente.", "cometer ou contribuir para sua prática e, quando cometida por outro, dela obtiver benefício.", "for denunciada pelo paciente.", "resultar em morte."], correct: 1,
      explanation: "É a redação do art. 105." }),
  ],
  status: "published",
  standard: "v2",
  lastReviewedAt: REVIEWED_V2,
  reviewNotes: V2_REVIEW_NOTE,
};
