import type { TopicSeed } from "@/core/content/types";
import { mcq } from "../../helpers";
import { REVIEWED_V2, SRC, V2_REVIEW_NOTE, at } from "../../sources";

/* Fonte única: Resolução Cofen nº 564/2017 (texto integral no site do Cofen), arts. 1º a 102 do anexo. */

export const CODIGO_DE_ETICA: TopicSeed = {
  slug: "codigo-de-etica-cofen-564",
  title: "Código de Ética (Resolução Cofen 564/2017)",
  description: "Estrutura do código, direitos, deveres e proibições que mais caem: sigilo, prescrição, registro, consentimento e delegação.",
  summary:
    "O Código de Ética dos Profissionais de Enfermagem (CEPE) foi aprovado pela Resolução Cofen nº 564/2017, aplica-se a enfermeiros, técnicos, auxiliares, obstetrizes, parteiras e atendentes de enfermagem, e revogou a Resolução Cofen nº 311/2007. Organiza-se em Direitos (Capítulo I), Deveres (II), Proibições (III), Infrações e Penalidades (IV) e Aplicação das Penalidades (V). Entre os direitos: exercer a enfermagem com liberdade, segurança e autonomia; suspender as atividades quando o local não oferecer condições seguras, ressalvadas urgência e emergência, formalizando por escrito à instituição e ao Coren; negar-se a ser filmado ou fotografado durante as atividades; recusar-se a executar atividades fora de sua competência ou sem segurança. Entre os deveres: registrar no prontuário de forma clara, objetiva, cronológica, legível, completa e sem rasuras; apor nome, número e categoria de inscrição e assinatura; prestar assistência livre de danos por imperícia, negligência ou imprudência; recusar prescrição sem assinatura e número de registro do prescritor, salvo urgência e emergência, e recusar prescrição com erro ou ilegível, esclarecendo e registrando; manter sigilo, salvo casos previstos em lei, ordem judicial ou consentimento escrito, dever que permanece mesmo após o falecimento. Entre as proibições: administrar medicamento sem conhecer indicação, ação, via e riscos; executar procedimentos sem consentimento formal, exceto em iminente risco de morte; registrar ações que não executou; delegar atividades privativas do enfermeiro, exceto em emergência; e negar assistência em urgência, emergência, epidemia, desastre ou catástrofe.",
  keyPoints: [
    "CEPE: Resolução Cofen 564/2017; revogou a Resolução 311/2007.",
    "5 capítulos: Direitos, Deveres, Proibições, Infrações e Penalidades, Aplicação das Penalidades.",
    "Direito de suspender atividades sem condições seguras (exceto urgência/emergência), formalizando à instituição e ao Coren.",
    "Registro: claro, objetivo, cronológico, legível, completo e sem rasuras; com nome, número e categoria no Coren.",
    "Recusar prescrição sem assinatura e registro do prescritor (salvo urgência/emergência) e prescrição com erro ou ilegível.",
    "Sigilo permanece mesmo se o fato for público ou a pessoa falecer; violência contra criança, idoso e incapaz: comunicação obrigatória.",
    "Proibido: administrar sem conhecer indicação, ação, via e riscos; procedimento sem consentimento (exceto risco iminente de morte).",
    "Proibido registrar o que não executou e delegar atividade privativa do enfermeiro (exceto emergência).",
  ],
  map: {
    title: "Código de Ética",
    spec: {
      layout: "hub",
      center: "Resolução Cofen 564/2017",
      blocks: [
        { title: "Sigilo (art. 52)", tone: "slate", icon: "🤐", items: ["Exceções: lei, ordem judicial, consentimento escrito", "Vale mesmo após o óbito"] },
        { title: "Prescrição (art. 46)", tone: "blue", icon: "✍️", items: ["Sem assinatura e registro → recusar", "Exceto urgência e emergência", "Erro ou ilegível → esclarecer e registrar"] },
        { title: "Proibido (art. 78)", tone: "rose", icon: "⛔", items: ["Administrar sem conhecer indicação, ação, via e riscos"] },
        { title: "Registro (arts. 35, 36, 88)", tone: "amber", icon: "📝", items: ["Claro, cronológico, sem rasuras", "Nunca assinar o que não fez"] },
      ],
    },
  },
  sections: [
    {
      id: "visao-geral",
      kind: "visao",
      title: "Como o código está organizado",
      source: 0,
      blocks: [
        {
          type: "steps",
          items: [
            { title: "Capítulo I — Direitos", text: "Arts. 1º a 23." },
            { title: "Capítulo II — Deveres", text: "Arts. 24 a 60." },
            { title: "Capítulo III — Proibições", text: "Arts. 61 a 102." },
            { title: "Capítulo IV — Infrações e Penalidades", text: "Arts. 103 a 113." },
            { title: "Capítulo V — Aplicação das Penalidades", text: "Arts. 114 a 119." },
          ],
        },
        {
          type: "cards",
          items: [
            { title: "A quem se aplica", text: "Enfermeiros, técnicos, auxiliares, obstetrizes, parteiras e ==atendentes de enfermagem==.", icon: "👥", tone: "blue" },
            { title: "Casos omissos", text: "Resolvidos pelo ==Conselho Federal de Enfermagem==.", icon: "❔", tone: "slate" },
            { title: "Revogou", text: "A Resolução Cofen ==311/2007== (código anterior).", icon: "🔁", tone: "amber" },
          ],
        },
      ],
    },
    {
      id: "direitos",
      kind: "classificacao",
      title: "Direitos que caem",
      source: 0,
      blocks: [
        {
          type: "cards",
          items: [
            { title: "Suspender atividades", tag: "art. 13", text: "Quando o local ==não oferecer condições seguras==, ressalvadas ==urgência e emergência==, formalizando por escrito ou e-mail à instituição e ao Coren.", icon: "✋", tone: "amber" },
            { title: "Recusar o que não é seu", tag: "art. 22", text: "Atividades fora de sua competência técnica, científica, ética e legal, ou sem segurança.", icon: "🚫", tone: "rose" },
            { title: "Não ser filmado", tag: "art. 21", text: "Negar-se a ser filmado, fotografado e exposto em mídias sociais durante as atividades.", icon: "📵", tone: "slate" },
            { title: "Abster-se de revelar", tag: "art. 12", text: "Informações confidenciais conhecidas no exercício profissional.", icon: "🤐", tone: "violet" },
            { title: "Desagravo público", tag: "art. 8º", text: "Requerer ao Coren medidas de desagravo por ofensa sofrida no exercício.", icon: "🛡️", tone: "blue" },
            { title: "Processo de enfermagem", tag: "art. 14", text: "Aplicar o processo de enfermagem para planejar, implementar, avaliar e documentar o cuidado.", icon: "📋", tone: "teal" },
          ],
        },
      ],
    },
    {
      id: "registro-e-prescricao",
      kind: "tecnico",
      title: "Registro e prescrição: os deveres do dia a dia",
      source: 0,
      blocks: [
        {
          type: "checklist",
          title: "Ao registrar (arts. 35 e 36)",
          items: [
            "Nome completo e/ou nome social, legíveis, ==número e categoria de inscrição no Coren==, assinatura ou rubrica",
            "Carimbo é facultativo (com nome, número e categoria + assinatura)",
            "Prontuário eletrônico: assinatura certificada",
            "Informações ==claras, objetivas, cronológicas, legíveis, completas e sem rasuras==",
          ],
        },
        {
          type: "steps",
          items: [
            { title: "Prescrição sem assinatura e número de registro do prescritor", text: "==Recusar==, exceto em urgência e emergência (art. 46).", who: "tecnico" },
            { title: "Prescrição com erro ou ilegível", text: "==Recusar==, esclarecer com o prescritor ou outro profissional e ==registrar no prontuário== (art. 46, § 1º).", who: "tecnico" },
            { title: "Prescrição à distância", text: "Vedado cumprir, exceto urgência, emergência e regulação, conforme resolução vigente (art. 46, § 2º).", who: "tecnico" },
          ],
        },
      ],
    },
    {
      id: "sigilo",
      kind: "cuidados",
      title: "Sigilo profissional (art. 52)",
      source: 0,
      blocks: [
        {
          type: "definition",
          term: "Dever",
          text: "Manter sigilo sobre fato conhecido em razão da atividade profissional, ==exceto==: casos previstos em lei, determinação judicial ou ==consentimento escrito== da pessoa ou do representante legal.",
        },
        {
          type: "cards",
          items: [
            { title: "Continua valendo", tag: "§ 1º", text: "Mesmo quando o fato é ==público== e em caso de ==falecimento== da pessoa.", icon: "🤐", tone: "slate" },
            { title: "Deve ser revelado", tag: "§ 2º", text: "Ameaça à vida e à dignidade, defesa própria ou atividade multiprofissional, quando necessário à assistência.", icon: "🗣️", tone: "amber" },
            { title: "Intimado como testemunha", tag: "§ 3º", text: "Deve comparecer e, se for o caso, declarar suas razões éticas para manter o sigilo.", icon: "⚖️", tone: "blue" },
            { title: "Comunicação obrigatória", tag: "§ 4º", text: "Violência contra ==crianças e adolescentes, idosos e pessoas incapazes== de consentir: comunicar aos órgãos de responsabilização criminal, independentemente de autorização.", icon: "🚨", tone: "rose" },
            { title: "Mulher adulta e capaz", tag: "§ 5º", text: "Comunicação devida, sem autorização, se houver ==risco à comunidade ou à vítima==, a juízo do profissional e com conhecimento prévio da vítima.", icon: "👩", tone: "violet" },
          ],
        },
      ],
    },
    {
      id: "proibicoes",
      kind: "atencao",
      title: "Proibições que mais caem",
      source: 0,
      blocks: [
        {
          type: "compare",
          columns: ["Proibição", "Exceção"],
          rows: [
            { label: "Art. 78", cells: ["Administrar medicamento ==sem conhecer indicação, ação, via e riscos==", "—"] },
            { label: "Art. 77", cells: ["Executar procedimento ==sem consentimento formal== da pessoa ou representante", "==Iminente risco de morte=="] },
            { label: "Art. 76", cells: ["==Negar assistência== em urgência, emergência, epidemia, desastre e catástrofe", "Se houver risco à integridade física do profissional"] },
            { label: "Art. 88", cells: ["==Registrar e assinar ações que não executou== ou deixar outro assinar as suas", "—"] },
            { label: "Art. 91", cells: ["==Delegar atividades privativas do enfermeiro== a outro membro da equipe", "Emergência (nunca a outros membros da equipe de saúde)"] },
            { label: "Art. 87", cells: ["Registrar informações ==incompletas, imprecisas ou inverídicas==", "—"] },
            { label: "Art. 74", cells: ["Promover ou participar de prática destinada a ==antecipar a morte==", "—"] },
          ],
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
            { value: "564/2017", label: "resolução do Código de Ética atual" },
            { value: "311/2007", label: "código anterior, revogado" },
            { value: "5", label: "capítulos" },
            { value: "Art. 46", label: "prescrição sem assinatura, com erro ou à distância" },
            { value: "Art. 52", label: "sigilo profissional" },
            { value: "Art. 78", label: "medicamento sem conhecer indicação, ação, via e riscos" },
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
          title: "Fim de plantão corrido",
          scenario: "No fim do plantão, uma colega pede que o técnico assine a checagem das medicações que ela deu, porque ela já saiu. Na mesma noite, ele encontra uma prescrição ilegível de um antibiótico, fora de urgência.",
          question: "Como agir em cada situação pelo Código de Ética?",
          answer: "Não assinar ações que não executou (art. 88). Recusar a prescrição ilegível, esclarecer com o prescritor e registrar no prontuário (art. 46, § 1º).",
          reasoning: [
            "Art. 88 proíbe registrar e assinar ações que não executou e permitir que outro assine as suas.",
            "Art. 46, § 1º: prescrição com erro ou ilegível → recusar, esclarecer e registrar.",
            "Art. 78: sem entender a prescrição, ele também não conhece indicação, via e dose — não pode administrar.",
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
            { wrong: "Com o falecimento do paciente, o sigilo deixa de existir.", right: "O dever ==permanece== após o falecimento.", why: "Art. 52, § 1º." },
            { wrong: "Prescrição sem assinatura deve ser cumprida e registrada.", right: "Deve ser ==recusada==, salvo urgência e emergência.", why: "Art. 46." },
            { wrong: "O profissional pode suspender as atividades por falta de condições, inclusive na emergência.", right: "Ressalvadas as ==situações de urgência e emergência==, e com comunicação escrita à instituição e ao Coren.", why: "Art. 13." },
            { wrong: "Em caso de violência contra idoso, a comunicação depende de autorização do paciente.", right: "É ==obrigatória, independentemente de autorização==.", why: "Art. 52, § 4º (crianças, adolescentes, idosos e incapazes)." },
            { wrong: "O procedimento sem consentimento é proibido em qualquer situação.", right: "Exceção: ==iminente risco de morte==.", why: "Art. 77." },
            { wrong: "O carimbo é obrigatório nos registros.", right: "O carimbo é ==facultativo==; obrigatórios são nome, número e categoria no Coren e assinatura.", why: "Art. 35, § 1º." },
            { wrong: "O enfermeiro pode delegar atividade privativa ao técnico sempre que faltar pessoal.", right: "Só em ==emergência==; e nunca a outros membros da equipe de saúde.", why: "Art. 91 e parágrafo único." },
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
            { slug: "codigo-de-etica-infracoes-e-penalidades", title: "Código de Ética: infrações e penalidades", why: "O que acontece quando o código é descumprido." },
            { slug: "nove-certos-administracao-de-medicamentos", title: "Os 9 certos da administração de medicamentos", why: "O art. 78 na prática: conhecer o que se administra." },
            { slug: "lei-7498-atribuicoes-do-tecnico", title: "Lei 7.498/86: o que cabe ao técnico", why: "O que é privativo e não pode ser delegado." },
          ],
        },
      ],
    },
  ],
  sources: [at(SRC.cofen564v2, "Resolução e anexo, arts. 1º a 102")],
  questions: [
    mcq({ key: "etica-cofen-1", section: "registro-e-prescricao", difficulty: "facil",
      stem: "Pelo Código de Ética dos Profissionais de Enfermagem, diante de uma prescrição médica sem assinatura e sem número de registro do prescritor, fora de situação de urgência, o profissional deve:",
      options: ["executar normalmente, pois a responsabilidade é do médico.", "recusar-se a executar a prescrição.", "executar e assinar no lugar do prescritor.", "executar metade da dose até falar com o prescritor."], correct: 1,
      explanation: "O art. 46 é dever de recusar prescrição sem assinatura e número de registro do prescritor, exceto em urgência e emergência." }),
    mcq({ key: "etica-cofen-3", section: "sigilo", difficulty: "facil",
      stem: "Pelo Código de Ética dos Profissionais de Enfermagem (Resolução Cofen nº 564/2017), o dever de sigilo profissional:",
      options: ["termina com o falecimento da pessoa envolvida.", "deixa de existir quando o fato se torna público.", "permanece mesmo quando o fato é de conhecimento público e em caso de falecimento da pessoa.", "só existe se houver pedido escrito do paciente."], correct: 2,
      explanation: "É o § 1º do art. 52." }),
    mcq({ key: "etica-cofen-4", section: "sigilo", difficulty: "media",
      stem: "Ao atender uma criança com sinais de violência, segundo o Código de Ética, o profissional de enfermagem deve:",
      options: ["manter sigilo absoluto, salvo autorização dos pais.", "comunicar aos órgãos de responsabilização criminal, independentemente de autorização.", "comunicar apenas se houver ordem judicial.", "aguardar a próxima consulta para confirmar."], correct: 1,
      explanation: "Art. 52, § 4º: comunicação externa obrigatória, independentemente de autorização, de violência contra crianças e adolescentes, idosos e pessoas incapazes." }),
    mcq({ key: "etica-cofen-5", section: "proibicoes", difficulty: "facil",
      stem: "É proibido ao profissional de enfermagem, segundo o art. 78 do Código de Ética:",
      options: ["recusar prescrição ilegível.", "administrar medicamentos sem conhecer indicação, ação da droga, via de administração e potenciais riscos.", "registrar intercorrências no prontuário.", "negar-se a ser filmado durante o trabalho."], correct: 1,
      explanation: "Art. 78, respeitados os graus de formação do profissional." }),
    mcq({ key: "etica-cofen-6", section: "registro-e-prescricao", difficulty: "media",
      stem: "Segundo o Código de Ética, o registro no prontuário deve ser feito de forma:",
      options: ["resumida, apenas com intercorrências graves.", "clara, objetiva, cronológica, legível, completa e sem rasuras.", "a lápis, para permitir correções.", "somente pelo enfermeiro."], correct: 1,
      explanation: "Art. 36: registrar as informações indispensáveis ao cuidado de forma clara, objetiva, cronológica, legível, completa e sem rasuras." }),
    mcq({ key: "etica-cofen-7", section: "proibicoes", difficulty: "media",
      stem: "Executar procedimentos sem o consentimento formal da pessoa ou de seu representante é proibido pelo Código de Ética, EXCETO:",
      options: ["quando o procedimento for simples.", "em iminente risco de morte.", "quando o médico autorizar verbalmente.", "em pacientes internados há mais de 24 horas."], correct: 1,
      explanation: "Art. 77: proibido sem consentimento formal, exceto em iminente risco de morte." }),
    mcq({ key: "etica-cofen-8", section: "direitos", difficulty: "dificil",
      stem: "É direito do profissional de enfermagem, segundo o art. 13 do Código de Ética, suspender as atividades quando o local de trabalho não oferecer condições seguras, desde que:",
      options: ["avise verbalmente o colega de plantão.", "não se trate de situação de urgência e emergência e formalize imediatamente a decisão por escrito ou e-mail à instituição e ao Coren.", "tenha mais de cinco anos de inscrição.", "obtenha autorização prévia do sindicato."], correct: 1,
      explanation: "Art. 13: ressalvadas urgência e emergência, devendo formalizar por escrito e/ou correio eletrônico à instituição e ao Coren." }),
    mcq({ key: "etica-cofen-9", section: "visao-geral", difficulty: "media",
      stem: "A Resolução Cofen nº 564/2017, que aprovou o atual Código de Ética, revogou especialmente a Resolução:",
      options: ["Cofen nº 311/2007.", "Cofen nº 358/2009.", "Cofen nº 429/2012.", "Cofen nº 160/1993."], correct: 0,
      explanation: "O art. 5º da Resolução 564/2017 revoga as disposições em contrário, em especial a Resolução Cofen nº 311/2007." }),
  ],
  status: "published",
  standard: "v2",
  lastReviewedAt: REVIEWED_V2,
  reviewNotes: V2_REVIEW_NOTE + " Texto do site do Cofen pode incorporar alterações posteriores (ex.: Res. 758/2024 sobre reabilitação); conferir na revisão humana.",
};
