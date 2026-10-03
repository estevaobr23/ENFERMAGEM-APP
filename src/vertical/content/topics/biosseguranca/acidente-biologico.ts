import type { TopicSeed } from "@/core/content/types";
import { mcq } from "../../helpers";
import { REVIEWED_V2, SRC, V2_REVIEW_NOTE, at } from "../../sources";

/*
 * Fontes: [0] MS — Exposição a materiais biológicos (2006); [1] NR 32.
 * Esquemas de antirretrovirais NÃO entram: mudam a cada PCDT e não são
 * conduta do técnico. Prazos de PEP aqui são os do protocolo de 2006.
 */

export const ACIDENTE_BIOLOGICO: TopicSeed = {
  slug: "acidente-com-material-biologico",
  title: "Acidente com material biológico",
  description: "Cuidados imediatos com a área exposta, como avaliar o risco, notificação (CAT e Sinan) e prazos da profilaxia.",
  summary:
    "O protocolo do Ministério da Saúde sobre exposição a materiais biológicos (2006) orienta a conduta após acidentes de trabalho com sangue e outros fluidos. O risco depende do tipo de acidente, da gravidade, da presença e do volume de sangue e da condição do paciente-fonte: após exposição percutânea a sangue contaminado, o risco de infecção pelo HIV é de aproximadamente 0,3% e, após exposição de mucosa, 0,09%; para hepatite B varia de 6% a 30%, podendo chegar a 60%; para hepatite C, cerca de 1,8%. Os cuidados imediatos são lavar o local com água e sabão nas exposições percutâneas ou cutâneas e lavar exaustivamente com água ou soro fisiológico nas exposições de mucosa. Não há evidência de que antissépticos ou espremer o ferimento reduzam o risco; procedimentos que aumentem a área exposta (cortes, injeções locais) e soluções irritantes (éter, glutaraldeído, hipoclorito) são contraindicados. Avalia-se o material (sangue; fluidos potencialmente infectantes como sêmen, secreção vaginal, liquor e líquidos sinovial, pleural, peritoneal, pericárdico e amniótico), o tipo de exposição (percutânea, mucosa, pele não íntegra) e a fonte. O acidente é registrado em CAT e notificado no Sinan; a NR 32 exige comunicação imediata e CAT com ou sem afastamento. Quando indicada, a profilaxia pós-exposição deve começar o mais rápido possível — idealmente nas primeiras duas horas, com prazo máximo de 72 horas — e o acompanhamento do acidentado dura seis meses.",
  keyPoints: [
    "Percutânea ou pele: lavar com água e sabão. Mucosa: lavar exaustivamente com água ou soro fisiológico.",
    "Não espremer, não cortar, não injetar no local; não usar éter, glutaraldeído ou hipoclorito.",
    "Antisséptico não reduz comprovadamente o risco, mas não é contraindicado.",
    "Risco HIV: ~0,3% percutânea e ~0,09% mucosa. Hepatite B: 6% a 30% (até 60%). Hepatite C: ~1,8%.",
    "Avaliar material, tipo de exposição e situação da fonte (conhecida ou desconhecida).",
    "Notificar: CAT + ficha do Sinan; comunicar imediatamente a chefia (NR 32).",
    "PEP: idealmente nas primeiras 2 horas, no máximo até 72 horas (protocolo de 2006).",
    "Acompanhamento do acidentado: 6 meses.",
  ],
  map: {
    title: "Depois do acidente",
    spec: {
      layout: "flow",
      center: "Exposição a material biológico",
      blocks: [
        { title: "1. Cuidar do local", tone: "rose", icon: "🚿", items: ["Água e sabão (pele/percutânea)", "Água ou soro (mucosa)", "Não espremer nem cortar"] },
        { title: "2. Comunicar", tone: "amber", icon: "📣", items: ["Chefia imediatamente", "CAT + Sinan"] },
        { title: "3. Avaliar", tone: "blue", icon: "🔎", items: ["Material e tipo de exposição", "Situação da fonte"] },
        { title: "4. Acompanhar", tone: "green", icon: "📅", items: ["PEP: ideal até 2 h, máx. 72 h", "Seguimento por 6 meses"] },
      ],
      footnote: "Prazos do protocolo MS 2006. A indicação da profilaxia é médica, conforme o PCDT vigente.",
    },
  },
  sections: [
    {
      id: "visao-geral",
      kind: "visao",
      title: "Os primeiros minutos importam",
      source: 0,
      blocks: [
        {
          type: "text",
          text: "Acidente com agulha, bisturi ou respingo em mucosa expõe o profissional a HIV e hepatites B e C. A conduta tem ordem: ==cuidar do local, comunicar, avaliar o risco e acompanhar==. A decisão sobre profilaxia é médica; o técnico precisa saber o que fazer na hora e o que ==não== fazer.",
        },
        {
          type: "cards",
          items: [
            { title: "Risco variável", text: "Depende do tipo de acidente, gravidade, tamanho da lesão, presença e volume de sangue e condição do paciente-fonte.", icon: "⚖️", tone: "slate" },
            { title: "Subnotificação", text: "O protocolo aponta que a falta de registro e notificação compromete a prevenção.", icon: "📉", tone: "rose" },
          ],
        },
      ],
    },
    {
      id: "cuidados-imediatos",
      kind: "etapas",
      title: "Cuidados imediatos com a área exposta",
      source: 0,
      blocks: [
        {
          type: "steps",
          items: [
            { title: "Pele ou ferimento percutâneo: lavar com água e sabão", who: "tecnico", why: "Remove o material biológico do local o mais rápido possível." },
            { title: "Mucosa (olhos, nariz, boca): lavar exaustivamente com água ou soro fisiológico", who: "tecnico" },
            { title: "Não aumentar a área exposta", text: "Nada de cortes ou injeções locais.", why: "Ampliar a lesão aumenta o contato do sangue com o tecido." },
            { title: "Não usar soluções irritantes", text: "Éter, glutaraldeído, hipoclorito de sódio são contraindicados." },
            { title: "Comunicar imediatamente a chefia", text: "E o serviço de segurança e saúde do trabalho e a CIPA, quando houver (NR 32).", who: "tecnico" },
          ],
        },
        {
          type: "callout",
          variant: "atencao",
          title: "Espremer ou passar antisséptico?",
          text: "==Não há evidência== de que espremer o ferimento ou usar antisséptico reduza o risco. O antisséptico ==não é contraindicado==; espremer, cortar e soluções irritantes não fazem parte da conduta.",
        },
      ],
    },
    {
      id: "avaliar-risco",
      kind: "classificacao",
      title: "Como o risco é avaliado",
      source: 0,
      blocks: [
        {
          type: "compare",
          columns: ["O que se avalia", "Categorias"],
          rows: [
            { label: "Tipo de exposição", cells: ["Como ocorreu", "==Percutânea== (agulha, bisturi, vidraria); ==mucosa== (respingo em olhos, nariz, boca, genitália); ==pele não íntegra== (dermatite, ferida aberta, mordedura com sangue)"] },
            { label: "Material", cells: ["O que tocou", "==Sangue==; fluidos potencialmente infectantes (sêmen, secreção vaginal, liquor, líquidos sinovial, pleural, peritoneal, pericárdico, amniótico)"] },
            { label: "Fluidos de baixo risco", cells: ["Exceção", "Suor, lágrima, fezes, urina e saliva — ==exceto se contaminados com sangue=="] },
            { label: "Fonte", cells: ["De quem veio", "Conhecida (com ou sem sorologia) ou desconhecida (ex.: agulha no lixo)"] },
          ],
        },
        {
          type: "callout",
          variant: "dica",
          title: "Mordedura",
          text: "Na mordedura humana com sangue, ==tanto quem mordeu quanto quem foi mordido== devem ser avaliados.",
        },
      ],
    },
    {
      id: "notificacao-e-seguimento",
      kind: "tecnico",
      title: "Notificação, orientação e seguimento",
      source: 0,
      blocks: [
        {
          type: "steps",
          items: [
            { title: "Registrar em CAT", text: "Comunicação de Acidente de Trabalho — com ou sem afastamento (NR 32).", who: "servico" },
            { title: "Notificar no Sinan", text: "Ficha de notificação do acidente com material biológico.", who: "servico" },
            { title: "Orientar o acidentado", text: "Sobre o risco, possível profilaxia, consentimento para sorologias, prevenção da transmissão secundária e apoio emocional.", who: "equipe" },
            { title: "Comprometer com o acompanhamento", text: "Seguimento por ==seis meses==; relatar de imediato sintomas como linfonodos aumentados, manchas na pele, dor de garganta ou quadro gripal.", who: "equipe" },
          ],
        },
        {
          type: "callout",
          variant: "lei",
          title: "Profilaxia pós-exposição (PEP)",
          text: "Quando indicada, deve começar ==o mais rápido possível, idealmente nas primeiras 2 horas==, com prazo máximo de ==72 horas==; a duração descrita é de 28 dias. A indicação e o esquema são definidos pela equipe médica conforme o protocolo vigente.",
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
            { value: "0,3%", label: "risco de HIV após exposição percutânea a sangue contaminado" },
            { value: "0,09%", label: "risco de HIV após exposição de mucosa" },
            { value: "6–30%", label: "risco de hepatite B", note: "pode chegar a 60%, conforme a fonte" },
            { value: "1,8%", label: "risco de hepatite C após acidente percutâneo", note: "variação de 0 a 7%" },
            { value: "2 h", label: "início ideal da PEP" },
            { value: "72 h", label: "prazo máximo para iniciar a PEP" },
            { value: "6 meses", label: "acompanhamento do acidentado" },
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
          title: "Agulha após a punção",
          scenario: "Logo após puncionar um acesso venoso, o técnico se fere com a agulha usada no dedo. Um colega sugere espremer bem o dedo e passar hipoclorito.",
          question: "Qual é a conduta correta nos primeiros minutos?",
          answer: "Lavar o local com água e sabão, não espremer nem usar hipoclorito, comunicar imediatamente a chefia para avaliação do risco, CAT e notificação.",
          reasoning: [
            "Exposição percutânea → lavagem com água e sabão.",
            "Espremer não tem evidência de benefício; hipoclorito é solução irritante contraindicada.",
            "A comunicação imediata permite avaliar a fonte e, se indicada, iniciar a PEP idealmente em até 2 horas.",
            "CAT com ou sem afastamento e ficha do Sinan registram o acidente.",
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
            { wrong: "Após o acidente percutâneo, deve-se espremer o local para expulsar o sangue.", right: "==Não há evidência== de benefício em espremer; lavar com água e sabão.", why: "O protocolo cita a expressão do ferimento entre as medidas sem evidência." },
            { wrong: "Respingo no olho deve ser lavado com hipoclorito diluído.", right: "Mucosa: lavar exaustivamente com ==água ou soro fisiológico==.", why: "Hipoclorito, éter e glutaraldeído são soluções irritantes contraindicadas." },
            { wrong: "O antisséptico é contraindicado no local do acidente.", right: "Antisséptico ==não é contraindicado==, embora não reduza comprovadamente o risco.", why: "Pegadinha clássica: 'sem evidência de benefício' é diferente de 'contraindicado'." },
            { wrong: "O risco de HIV após acidente percutâneo é de cerca de 3%.", right: "É de aproximadamente ==0,3%==.", why: "A banca move a vírgula; após mucosa o risco é ainda menor (0,09%)." },
            { wrong: "Entre HIV, hepatite B e hepatite C, o maior risco ocupacional é o do HIV.", right: "O maior é o da ==hepatite B== (6% a 30%, até 60%).", why: "Por isso a vacinação contra hepatite B é obrigatória pela NR 32." },
            { wrong: "A profilaxia pode ser iniciada em até 7 dias após o acidente.", right: "Idealmente em ==2 horas==; prazo máximo de ==72 horas==.", why: "O protocolo diz que a profilaxia parece ineficaz quando iniciada tardiamente." },
            { wrong: "Saliva e urina são sempre fluidos de risco.", right: "Suor, lágrima, fezes, urina e saliva são ==de baixo risco, exceto se contaminados com sangue==.", why: "O risco depende da presença de sangue no fluido." },
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
            { slug: "nr-32-seguranca-do-trabalhador", title: "NR 32: segurança do trabalhador da saúde", why: "CAT, comunicação imediata e vacinação contra hepatite B." },
            { slug: "precaucoes-padrao-e-especificas", title: "Precauções padrão e específicas", why: "As barreiras que evitam o acidente." },
            { slug: "residuos-de-servicos-de-saude-rdc-222", title: "Resíduos de serviços de saúde (RDC 222)", why: "Caixa de perfurocortante até 3/4 da capacidade." },
          ],
        },
      ],
    },
  ],
  sources: [at(SRC.expBiologica, "capítulos 4, 5.1 e 5.2 e indicação de PPE"), at(SRC.nr32, "itens 32.2.3.5 e 32.2.4.11")],
  questions: [
    mcq({ key: "bio-acid-1", section: "cuidados-imediatos", difficulty: "facil",
      stem: "Após se ferir com uma agulha usada, o primeiro cuidado com a área exposta, segundo o Ministério da Saúde, é:",
      options: ["espremer o local até sangrar bastante.", "lavar o local com água e sabão.", "aplicar hipoclorito de sódio.", "fazer um pequeno corte para drenar."], correct: 1,
      explanation: "Em exposição percutânea ou cutânea, lava-se o local com água e sabão. Espremer não tem evidência; cortes e soluções irritantes são contraindicados." }),
    mcq({ key: "bio-acid-2", section: "cuidados-imediatos", difficulty: "facil",
      stem: "Em caso de respingo de sangue nos olhos, a conduta imediata recomendada é:",
      options: ["lavar exaustivamente com água ou soro fisiológico.", "aplicar colírio antibiótico.", "lavar com álcool 70%.", "aguardar avaliação médica antes de lavar."], correct: 0,
      explanation: "Nas exposições de mucosa, deve-se lavar exaustivamente com água ou solução salina fisiológica." }),
    mcq({ key: "bio-acid-3", section: "cuidados-imediatos", difficulty: "media",
      stem: "Sobre o uso de antisséptico no local de um acidente percutâneo, o protocolo afirma que:",
      options: ["é obrigatório e substitui a lavagem.", "é contraindicado em qualquer situação.", "não há evidência de que reduza o risco, mas não é contraindicado.", "deve ser usado o hipoclorito por ser mais potente."], correct: 2,
      explanation: "Não há evidência de que antissépticos ou a expressão do ferimento reduzam a transmissão, mas o antisséptico não é contraindicado. Hipoclorito é solução irritante contraindicada." }),
    mcq({ key: "bio-acid-4", section: "numeros", difficulty: "media",
      stem: "O risco aproximado de infecção pelo HIV após exposição ocupacional percutânea com sangue contaminado é de:",
      options: ["0,03%.", "0,3%.", "3%.", "30%."], correct: 1,
      explanation: "O protocolo cita risco de aproximadamente 0,3% após exposição percutânea e de 0,09% após exposição de mucosa." }),
    mcq({ key: "bio-acid-5", section: "numeros", difficulty: "dificil",
      stem: "Entre os vírus abaixo, o que apresenta o maior risco de transmissão após exposição ocupacional, segundo o protocolo, é o:",
      options: ["HIV.", "vírus da hepatite C.", "vírus da hepatite B.", "os três têm o mesmo risco."], correct: 2,
      explanation: "Hepatite B: 6% a 30%, podendo chegar a 60%. Hepatite C: cerca de 1,8%. HIV: cerca de 0,3% (percutânea)." }),
    mcq({ key: "bio-acid-6", section: "notificacao-e-seguimento", difficulty: "media",
      stem: "Quando indicada, a profilaxia pós-exposição ao HIV deve ser iniciada:",
      options: ["somente após o resultado da sorologia do paciente-fonte, em até 30 dias.", "o mais rápido possível, idealmente nas primeiras duas horas, com prazo máximo de 72 horas.", "após uma semana, para confirmar a soroconversão.", "apenas se o acidentado apresentar sintomas."], correct: 1,
      explanation: "O protocolo recomenda iniciar idealmente nas primeiras duas horas, com prazo máximo de até 72 horas após o acidente." }),
    mcq({ key: "bio-acid-7", section: "avaliar-risco", difficulty: "media",
      stem: "São considerados fluidos potencialmente NÃO infectantes, exceto se contaminados com sangue:",
      options: ["sêmen e secreção vaginal.", "liquor e líquido pleural.", "suor, lágrima, fezes, urina e saliva.", "líquido amniótico e pericárdico."], correct: 2,
      explanation: "Suor, lágrima, fezes, urina e saliva são potencialmente não infectantes, salvo se contaminados com sangue. Os demais da lista são potencialmente infectantes." }),
    mcq({ key: "bio-acid-8", section: "notificacao-e-seguimento", difficulty: "facil",
      stem: "O registro do acidente com material biológico deve ser feito por meio de:",
      options: ["apenas anotação no prontuário do paciente-fonte.", "CAT e ficha de notificação do Sinan.", "boletim de ocorrência policial.", "registro verbal à chefia, sem documento."], correct: 1,
      explanation: "O protocolo indica registro em CAT e preenchimento da ficha do Sinan; a NR 32 exige CAT com ou sem afastamento." }),
    mcq({ key: "bio-acid-9", section: "notificacao-e-seguimento", difficulty: "media",
      stem: "O acompanhamento clínico-laboratorial do profissional acidentado, segundo o protocolo, deve durar:",
      options: ["7 dias.", "30 dias.", "6 meses.", "5 anos."], correct: 2,
      explanation: "Entre as orientações está comprometer o acidentado com seu acompanhamento durante seis meses." }),
  ],
  status: "published",
  standard: "v2",
  lastReviewedAt: REVIEWED_V2,
  reviewNotes: V2_REVIEW_NOTE + " Prazos e duração da PEP são do protocolo de 2006; conferir contra o PCDT de PEP vigente (2024) na revisão humana. Sintomas de soroconversão parafraseados do texto ('linfoadenopatia, rash, dor de garganta, sintomas de gripe').",
};
