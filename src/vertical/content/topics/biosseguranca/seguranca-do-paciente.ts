import type { TopicSeed } from "@/core/content/types";
import { mcq } from "../../helpers";
import { REVIEWED_V2, SRC, V2_REVIEW_NOTE, at } from "../../sources";

/* Fontes: [0] Portaria GM/MS nº 529/2013 (arts. 2º a 4º); [1] RDC Anvisa nº 36/2013 (arts. 4º, 7º a 10). */

export const SEGURANCA_DO_PACIENTE: TopicSeed = {
  slug: "nucleo-de-seguranca-do-paciente",
  title: "Segurança do paciente: PNSP e RDC 36",
  description: "Incidente × evento adverso, objetivos do PNSP, Núcleo e Plano de Segurança do Paciente e prazos de notificação.",
  summary:
    "A Portaria GM/MS nº 529/2013 instituiu o Programa Nacional de Segurança do Paciente (PNSP), com o objetivo geral de contribuir para a qualificação do cuidado em saúde em todos os estabelecimentos do território nacional. Seus objetivos específicos são promover iniciativas de segurança, envolver pacientes e familiares, ampliar o acesso da sociedade às informações, produzir e difundir conhecimento e incluir o tema no ensino técnico, de graduação e de pós-graduação. A portaria define segurança do paciente como a redução, a um mínimo aceitável, do risco de dano desnecessário associado ao cuidado; dano como comprometimento da estrutura ou função do corpo ou qualquer efeito dele oriundo; incidente como evento ou circunstância que poderia ter resultado, ou resultou, em dano desnecessário; evento adverso como incidente que resulta em dano; e gestão de risco como a aplicação sistêmica e contínua de iniciativas para avaliar e controlar riscos e eventos adversos. A RDC Anvisa nº 36/2013 obriga a direção do serviço a constituir o Núcleo de Segurança do Paciente (NSP), que elabora, implanta e mantém atualizado o Plano de Segurança do Paciente (PSP), implanta protocolos, analisa incidentes e notifica os eventos adversos ao Sistema Nacional de Vigilância Sanitária. O PSP inclui ações como identificação do paciente, higiene das mãos, cirurgia segura, medicamentos, sangue e hemocomponentes, equipamentos, quedas, úlceras por pressão, infecções, terapia nutricional, comunicação efetiva, participação do paciente e ambiente seguro. A notificação é mensal, até o 15º dia útil do mês seguinte; evento adverso com óbito, em até 72 horas.",
  keyPoints: [
    "PNSP: Portaria GM/MS nº 529/2013 — objetivo geral: qualificar o cuidado em todos os estabelecimentos.",
    "Segurança do paciente: reduzir a um mínimo aceitável o risco de dano desnecessário.",
    "Incidente: poderia ter resultado ou resultou em dano. Evento adverso: incidente que resulta em dano.",
    "Envolver pacientes e familiares e incluir o tema no ensino técnico são objetivos específicos.",
    "RDC 36: a DIREÇÃO do serviço constitui o NSP; o NSP elabora o PSP.",
    "O NSP notifica eventos adversos ao Sistema Nacional de Vigilância Sanitária.",
    "Notificação mensal até o 15º dia útil do mês seguinte.",
    "Evento adverso com óbito: em até 72 horas.",
  ],
  map: {
    title: "Segurança do paciente",
    spec: {
      layout: "flow",
      center: "Do conceito à notificação",
      blocks: [
        { title: "Conceitos (Portaria 529)", tone: "green", icon: "📖", items: ["Incidente: poderia causar ou causou dano", "Evento adverso: causou dano", "Segurança: risco no mínimo aceitável"] },
        { title: "Estrutura (RDC 36)", tone: "blue", icon: "🏥", items: ["Direção constitui o NSP", "NSP elabora o Plano (PSP)", "Mãos, identificação, cirurgia, medicamentos, quedas, UPP"] },
        { title: "Notificação", tone: "rose", icon: "📣", items: ["Mensal: até o 15º dia útil", "Óbito: em até 72 h"] },
      ],
    },
  },
  sections: [
    {
      id: "visao-geral",
      kind: "visao",
      title: "Duas normas, um sistema",
      lead: "A portaria cria o programa e os conceitos; a RDC diz o que cada serviço tem de fazer.",
      source: 0,
      blocks: [
        {
          type: "compare",
          columns: ["Portaria GM/MS nº 529/2013", "RDC Anvisa nº 36/2013"],
          rows: [
            { label: "O que faz", cells: ["Institui o ==PNSP== e define os conceitos", "Institui ==ações obrigatórias== nos serviços de saúde"] },
            { label: "Palavra-chave", cells: ["Incidente, evento adverso, dano", "NSP, PSP, notificação"] },
          ],
        },
        {
          type: "callout",
          variant: "lei",
          title: "Objetivo geral do PNSP (art. 2º)",
          text: "Contribuir para a ==qualificação do cuidado em saúde em todos os estabelecimentos de saúde== do território nacional.",
        },
      ],
    },
    {
      id: "definicoes-da-portaria-529",
      kind: "conceito",
      title: "Definições da Portaria 529/2013",
      lead: "Diferenciar incidente de evento adverso resolve metade das questões.",
      source: 0,
      blocks: [
        { type: "definition", term: "Segurança do paciente", text: "Redução, ==a um mínimo aceitável==, do risco de dano desnecessário associado ao cuidado de saúde." },
        { type: "definition", term: "Dano", text: "Comprometimento da estrutura ou função do corpo e/ou qualquer efeito dele oriundo: doenças, lesão, sofrimento, morte, incapacidade ou disfunção." },
        {
          type: "compare",
          columns: ["Incidente", "Evento adverso"],
          rows: [
            { label: "Definição", cells: ["Evento ou circunstância que ==poderia ter resultado, ou resultou==, em dano desnecessário", "Incidente que ==resulta em dano== ao paciente"] },
            { label: "Houve dano?", cells: ["Pode ter havido ou não", "==Sim, sempre=="] },
          ],
        },
        { type: "definition", term: "Gestão de risco", text: "Aplicação ==sistêmica e contínua== de iniciativas, procedimentos, condutas e recursos na avaliação e controle de riscos e eventos adversos." },
        { type: "definition", term: "Cultura de segurança", text: "Caracterizada por ==cinco elementos== operacionalizados pela gestão da organização." },
      ],
    },
    {
      id: "objetivos-do-pnsp",
      kind: "classificacao",
      title: "Objetivos específicos do PNSP (art. 3º)",
      source: 0,
      blocks: [
        {
          type: "cards",
          items: [
            { title: "Promover iniciativas", text: "Apoiar a segurança do paciente na atenção, organização e gestão dos serviços.", icon: "🚀", tone: "blue" },
            { title: "Envolver o paciente", text: "Incluir ==pacientes e familiares== nas ações de segurança.", icon: "👪", tone: "green" },
            { title: "Informar a sociedade", text: "Ampliar o acesso às informações sobre segurança do paciente.", icon: "📢", tone: "amber" },
            { title: "Produzir conhecimento", text: "Produzir, sistematizar e difundir conhecimentos.", icon: "📚", tone: "violet" },
            { title: "Levar ao ensino", text: "Incluir o tema no ==ensino técnico== e de graduação e pós-graduação.", icon: "🎓", tone: "teal" },
          ],
        },
      ],
    },
    {
      id: "nsp-e-plano",
      kind: "etapas",
      title: "NSP e Plano de Segurança (RDC 36)",
      source: 1,
      blocks: [
        {
          type: "steps",
          items: [
            { title: "A direção constitui o NSP", text: "Art. 4º: obrigação da ==direção do serviço de saúde==.", who: "servico" },
            { title: "O NSP elabora e mantém o PSP", text: "Elaborar, implantar, divulgar e manter atualizado o ==Plano de Segurança do Paciente==.", who: "servico" },
            { title: "O NSP implanta protocolos e barreiras", text: "Protocolos de segurança, barreiras para prevenir incidentes, capacitação e integração multiprofissional.", who: "servico" },
            { title: "O NSP monitora e analisa", text: "Analisa e avalia os dados de incidentes e eventos adversos e acompanha alertas sanitários.", who: "servico" },
            { title: "O NSP notifica", text: "Notifica os eventos adversos ao ==Sistema Nacional de Vigilância Sanitária== e guarda as notificações.", who: "servico" },
          ],
        },
        {
          type: "cards",
          items: [
            { title: "Identificação do paciente", text: "", icon: "🪪", tone: "blue" },
            { title: "Higiene das mãos", text: "", icon: "🧴", tone: "green" },
            { title: "Segurança cirúrgica", text: "", icon: "🔪", tone: "slate" },
            { title: "Medicamentos", text: "Prescrição, uso e administração.", icon: "💊", tone: "teal" },
            { title: "Sangue e hemocomponentes", text: "", icon: "🩸", tone: "rose" },
            { title: "Equipamentos, órteses e próteses", text: "Uso seguro e registro adequado.", icon: "🔧", tone: "orange" },
            { title: "Quedas e úlceras por pressão", text: "Prevenção.", icon: "🛏️", tone: "amber" },
            { title: "Infecções e terapia nutricional", text: "Prevenção de IRAS; nutrição enteral e parenteral seguras.", icon: "🦠", tone: "violet" },
            { title: "Comunicação e ambiente", text: "Comunicação efetiva, participação do paciente e família, ambiente seguro.", icon: "💬", tone: "green" },
          ],
        },
      ],
    },
    {
      id: "papel-do-tecnico",
      kind: "tecnico",
      title: "Onde o técnico entra",
      source: 1,
      blocks: [
        {
          type: "checklist",
          title: "Na prática diária",
          items: [
            "Seguir os protocolos implantados pelo NSP (identificação, mãos, medicamentos, quedas, lesão por pressão)",
            "Comunicar ao enfermeiro e registrar todo incidente percebido, mesmo sem dano",
            "Participar das capacitações oferecidas pelo NSP",
            "Envolver o paciente e a família: confirmar identidade, explicar o que será feito",
          ],
        },
        {
          type: "callout",
          variant: "dica",
          title: "Quem notifica ao SNVS?",
          text: "A RDC atribui ao ==NSP== a notificação ao Sistema Nacional de Vigilância Sanitária. O técnico alimenta esse sistema relatando os incidentes dentro do serviço.",
        },
      ],
    },
    {
      id: "prazos-de-notificacao",
      kind: "numeros",
      title: "Números que caem",
      source: 1,
      blocks: [
        {
          type: "numbers",
          items: [
            { value: "15º dia útil", label: "notificação mensal dos eventos adversos", note: "do mês seguinte ao de vigilância" },
            { value: "72 h", label: "evento adverso que evoluiu para óbito", note: "a partir do ocorrido" },
            { value: "5", label: "objetivos específicos do PNSP" },
            { value: "2013", label: "ano da Portaria 529 e da RDC 36" },
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
          title: "Medicamento quase trocado",
          scenario: "Na conferência à beira do leito, a técnica percebe que pegou a medicação do paciente do leito ao lado e corrige antes de administrar. Em outro plantão, um paciente recebe dose duplicada e apresenta hipotensão.",
          question: "Como cada situação se classifica pela Portaria 529?",
          answer: "A primeira é um incidente sem dano (circunstância que poderia ter resultado em dano). A segunda é um evento adverso (incidente que resultou em dano).",
          reasoning: [
            "Incidente = poderia ter resultado OU resultou em dano.",
            "Evento adverso = o incidente que efetivamente resultou em dano.",
            "Todo evento adverso é incidente; nem todo incidente é evento adverso.",
            "Os dois devem ser comunicados internamente para alimentar a gestão de risco do NSP.",
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
            { wrong: "Todo incidente é um evento adverso.", right: "Evento adverso é o incidente ==que resulta em dano==.", why: "Incidente inclui o que 'poderia ter resultado' em dano, mesmo sem dano." },
            { wrong: "Segurança do paciente é eliminar todo risco.", right: "Reduzir o risco de dano desnecessário ==a um mínimo aceitável==.", why: "A definição admite que risco zero não existe no cuidado." },
            { wrong: "Óbito por evento adverso: notificar até o 15º dia útil.", right: "Óbito: ==em até 72 horas==.", why: "O 15º dia útil é a regra geral mensal; óbito tem prazo próprio." },
            { wrong: "Quem constitui o NSP é a Anvisa.", right: "É a ==direção do serviço de saúde==.", why: "Art. 4º da RDC 36." },
            { wrong: "O PNSP foi instituído pela RDC 36.", right: "O PNSP foi instituído pela ==Portaria GM/MS nº 529/2013==.", why: "A RDC 36 institui ações nos serviços; a portaria cria o programa." },
            { wrong: "Envolver o paciente não é objetivo do PNSP, por ser tarefa técnica.", right: "Envolver ==pacientes e familiares== é objetivo específico.", why: "Art. 3º, II." },
            { wrong: "O Plano de Segurança do Paciente é elaborado pela vigilância municipal.", right: "O PSP é elaborado pelo ==NSP== do próprio serviço.", why: "Competência listada no art. 7º da RDC 36." },
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
            { slug: "higiene-das-maos-cinco-momentos", title: "Higiene das mãos: os 5 momentos", why: "Protocolo básico do PSP." },
            { slug: "nove-certos-administracao-de-medicamentos", title: "Os 9 certos da administração de medicamentos", why: "Segurança na administração de medicamentos." },
            { slug: "prevencao-de-ulcera-por-pressao", title: "Prevenção de úlcera por pressão", why: "Outro protocolo do PSP." },
            { slug: "processamento-de-produtos-rdc-15", title: "Limpeza, desinfecção e esterilização (RDC 15)", why: "Uso seguro de equipamentos e materiais." },
          ],
        },
      ],
    },
  ],
  sources: [at(SRC.portaria529, "arts. 2º a 4º"), at(SRC.rdc36, "arts. 4º, 7º, 8º, 9º e 10")],
  questions: [
    mcq({ key: "bio-nsp-1", section: "definicoes-da-portaria-529", difficulty: "facil",
      stem: "Conforme a Portaria GM/MS nº 529/2013, 'evento adverso' é:",
      options: ["qualquer circunstância que poderia ter causado dano, mesmo sem dano.", "o incidente que resulta em dano ao paciente.", "a reclamação formal do paciente na ouvidoria.", "o erro cometido exclusivamente pelo médico."], correct: 1,
      explanation: "A portaria define incidente como evento ou circunstância que poderia ter resultado, ou resultou, em dano; evento adverso é o incidente que resulta em dano." }),
    mcq({ key: "bio-nsp-2", section: "prazos-de-notificacao", difficulty: "media",
      stem: "Segundo a RDC Anvisa nº 36/2013, os eventos adversos que evoluírem para óbito devem ser notificados:",
      options: ["até o 15º dia útil do mês seguinte.", "em até 72 horas a partir do ocorrido.", "em até 30 dias.", "apenas no relatório anual."], correct: 1,
      explanation: "A regra geral é a notificação mensal até o 15º dia útil do mês subsequente; eventos adversos que evoluírem para óbito devem ser notificados em até 72 horas.", source: 1 }),
    mcq({ key: "bio-nsp-3", section: "nsp-e-plano", difficulty: "facil",
      stem: "Pela RDC Anvisa nº 36/2013, a constituição do Núcleo de Segurança do Paciente (NSP) é responsabilidade:",
      options: ["da direção do serviço de saúde.", "da Anvisa.", "do Conselho Municipal de Saúde.", "da equipe de enfermagem do plantão."], correct: 0,
      explanation: "O art. 4º da RDC 36/2013: a direção do serviço de saúde deve constituir o NSP. O NSP, por sua vez, elabora o Plano de Segurança do Paciente.", source: 1 }),
    mcq({ key: "bio-nsp-4", section: "definicoes-da-portaria-529", difficulty: "facil",
      stem: "A Portaria nº 529/2013 define segurança do paciente como:",
      options: ["a eliminação completa de qualquer risco no cuidado.", "a redução, a um mínimo aceitável, do risco de dano desnecessário associado ao cuidado de saúde.", "a garantia de que nenhum erro será cometido.", "o conjunto de exames de rotina do paciente internado."], correct: 1,
      explanation: "É a definição do art. 4º, I: redução, a um mínimo aceitável, do risco de dano desnecessário associado ao cuidado de saúde." }),
    mcq({ key: "bio-nsp-5", section: "visao-geral", difficulty: "media",
      stem: "O Programa Nacional de Segurança do Paciente (PNSP) foi instituído por:",
      options: ["RDC Anvisa nº 36/2013.", "Portaria GM/MS nº 529/2013.", "Lei nº 8.080/1990.", "Resolução Cofen nº 564/2017."], correct: 1,
      explanation: "O PNSP foi instituído pela Portaria GM/MS nº 529/2013. A RDC 36/2013 institui ações para a segurança do paciente nos serviços." }),
    mcq({ key: "bio-nsp-6", section: "objetivos-do-pnsp", difficulty: "media",
      stem: "É objetivo específico do PNSP, segundo o art. 3º da Portaria nº 529/2013:",
      options: ["punir os profissionais envolvidos em eventos adversos.", "envolver os pacientes e familiares nas ações de segurança do paciente.", "substituir as comissões de controle de infecção hospitalar.", "credenciar hospitais para receber recursos federais."], correct: 1,
      explanation: "Os objetivos específicos incluem envolver pacientes e familiares, ampliar o acesso da sociedade às informações, produzir conhecimento e incluir o tema no ensino." }),
    mcq({ key: "bio-nsp-7", section: "caso", difficulty: "media",
      stem: "A técnica percebe, antes de administrar, que pegou o medicamento de outro paciente e corrige a tempo, sem dano. Pela Portaria nº 529/2013, essa situação é um:",
      options: ["evento adverso.", "incidente.", "dano.", "evento sentinela."], correct: 1,
      explanation: "Incidente é a circunstância que poderia ter resultado, ou resultou, em dano. Como não houve dano, não é evento adverso." }),
    mcq({ key: "bio-nsp-8", section: "nsp-e-plano", difficulty: "dificil",
      stem: "Pela RDC nº 36/2013, é competência do Núcleo de Segurança do Paciente:",
      options: ["constituir a direção do serviço de saúde.", "elaborar, implantar, divulgar e manter atualizado o Plano de Segurança do Paciente.", "emitir a licença sanitária do estabelecimento.", "prescrever a assistência de enfermagem."], correct: 1,
      explanation: "Entre as competências do art. 7º estão elaborar e manter o PSP, implantar protocolos, analisar incidentes e notificar eventos adversos ao SNVS.", source: 1 }),
  ],
  status: "published",
  standard: "v2",
  lastReviewedAt: REVIEWED_V2,
  reviewNotes: V2_REVIEW_NOTE + " A seção 'Onde o técnico entra' é aplicação didática das competências do NSP, não texto literal.",
};
