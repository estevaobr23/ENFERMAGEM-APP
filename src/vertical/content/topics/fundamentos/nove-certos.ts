import type { TopicSeed } from "@/core/content/types";
import { mcq } from "../../helpers";
import { REVIEWED_V2, SRC, V2_REVIEW_NOTE, at } from "../../sources";

/* Fonte única: Anexo 03 do PNSP — item 7.1.1 (itens de verificação) e 7.1.2, lido no original. */

export const NOVE_CERTOS: TopicSeed = {
  slug: "nove-certos-administracao-de-medicamentos",
  title: "Os 9 certos da administração de medicamentos",
  description: "Cada um dos nove certos com o que conferir, por quê, e as regras de prescrição vaga, alta vigilância e dupla checagem.",
  summary:
    "O Protocolo de Segurança na Prescrição, Uso e Administração de Medicamentos (MS/Anvisa, 2013) lembra que a enfermagem seguia os cinco certos (paciente, medicamento, via, hora e dose), depois acrescidos de registro e razão, e adota os nove certos como itens de verificação. Os nove não garantem que erros não ocorrerão, mas previnem parte significativa deles. Paciente certo: perguntar o nome completo com pergunta aberta e usar no mínimo dois identificadores, conferindo pulseira, leito e prontuário. Medicamento certo: conferir com a prescrição e checar alergias, identificando o alérgico com pulseira e aviso no prontuário. Via certa: verificar se é tecnicamente recomendada, higienizar as mãos, conferir diluente, velocidade e compatibilidade. Hora certa: preparar para administrar no horário; antecipar ou atrasar só com consentimento do enfermeiro e do prescritor. Dose certa: atenção a zero, vírgula e ponto (doses 10 ou 100 vezes maiores), unidade do sistema métrico, conferência de gotejamento e bombas, dupla checagem nos medicamentos de alta vigilância; prescrições vagas como 'se necessário', 'conforme ordem médica' ou 'a critério médico' não são administradas. Registro certo: horário e ocorrências como adiamento, cancelamento, desabastecimento, recusa e evento adverso. Orientação correta, forma certa e resposta certa completam a lista.",
  keyPoints: [
    "5 certos → 7 (registro e razão) → 9 certos (protocolo 2013).",
    "Paciente certo: pergunta aberta pelo nome completo + no mínimo 2 identificadores.",
    "Medicamento certo: conferir com a prescrição e checar alergias.",
    "Hora certa: antecipar/atrasar só com o enfermeiro E o prescritor.",
    "Dose certa: zero, vírgula e ponto; dupla checagem na alta vigilância.",
    "Prescrição vaga ('se necessário' sem condição, 'a critério médico') não se administra.",
    "Registro certo: horário + adiamentos, cancelamentos, desabastecimento, recusa, eventos adversos.",
    "Forma certa e resposta certa: forma adequada à condição; observar e registrar o efeito.",
  ],
  map: {
    title: "Os 9 certos",
    spec: {
      layout: "flow",
      center: "Antes, durante e depois de administrar",
      blocks: [
        { title: "Quem e o quê", tone: "teal", icon: "🪪", items: ["1. Paciente certo — 2 identificadores", "2. Medicamento certo — alergias", "8. Forma certa"] },
        { title: "Como e quando", tone: "blue", icon: "⏱️", items: ["3. Via certa", "4. Hora certa", "5. Dose certa — dupla checagem na alta vigilância"] },
        { title: "Depois", tone: "green", icon: "📝", items: ["6. Registro certo", "7. Orientação correta", "9. Resposta certa — observar o efeito"] },
      ],
      footnote: "A numeração segue a ordem em que o protocolo detalha cada certo.",
    },
  },
  sections: [
    {
      id: "visao-geral",
      kind: "visao",
      title: "De 5 para 9 certos",
      lead: "O protocolo conta a história — e ela já caiu em prova.",
      source: 0,
      blocks: [
        {
          type: "timeline",
          items: [
            { when: "Tradicional", what: "5 certos: paciente, medicamento, via, hora e dose." },
            { when: "Depois", what: "+2 = 7 certos: documentação (registro) certa e razão." },
            { when: "Protocolo 2013", what: "9 certos: os 5 + registro, orientação, forma e resposta certas." },
          ],
        },
        {
          type: "callout",
          variant: "dica",
          title: "Não garante, mas previne",
          text: "O protocolo diz que os nove certos ==não garantem== que erros não ocorrerão, mas segui-los pode prevenir parte significativa desses eventos.",
        },
      ],
    },
    {
      id: "antes-quem-e-o-que",
      kind: "etapas",
      title: "Quem e o quê: paciente, medicamento e forma",
      source: 0,
      blocks: [
        {
          type: "steps",
          items: [
            { title: "1 · Paciente certo", text: "Perguntar o ==nome completo== com pergunta aberta (\"Por favor, diga-me o seu nome completo?\") e usar ==no mínimo dois identificadores==. Conferir pulseira, leito e prontuário.", why: "Pergunta fechada ('é o João?') pode ser confirmada por engano.", who: "tecnico" },
            { title: "2 · Medicamento certo", text: "Conferir se o nome do medicamento em mãos é o prescrito. Conhecer o paciente e suas ==alergias==; alérgico identificado com pulseira e aviso no prontuário. Em associações, conhecer cada componente.", who: "tecnico" },
            { title: "8 · Forma certa", text: "Forma farmacêutica e via adequadas à condição clínica. Ex.: medicamento triturado para sonda — a farmácia deve disponibilizar dose unitária ou manual de diluição.", who: "tecnico" },
          ],
        },
        {
          type: "callout",
          variant: "atencao",
          title: "Paciente com baixo nível de consciência",
          text: "Conferir o nome da prescrição com a pulseira e associar ==pelo menos mais dois identificadores== diferentes.",
        },
      ],
    },
    {
      id: "durante-como-e-quando",
      kind: "etapas",
      title: "Como e quando: via, hora e dose",
      source: 0,
      blocks: [
        {
          type: "cards",
          items: [
            { title: "3 · Via certa", text: "Via prescrita e tecnicamente recomendada. Higienizar as mãos. Diluente (tipo e volume), velocidade de infusão e compatibilidade com seringas, sondas e equipos. Antissepsia na via parenteral.", icon: "💉", tone: "blue" },
            { title: "4 · Hora certa", text: "Preparar para administrar no horário. ==Antecipar ou atrasar só com consentimento do enfermeiro e do prescritor.==", icon: "⏱️", tone: "teal" },
            { title: "5 · Dose certa", text: "Atenção a ==zero, vírgula e ponto== (doses 10 ou 100 vezes maiores). Unidade imprecisa (colher, ampola) → pedir unidade métrica. Conferir gotejamento e bombas. ==Dupla checagem== na alta vigilância.", icon: "⚖️", tone: "amber" },
          ],
        },
        {
          type: "callout",
          variant: "lei",
          title: "Prescrição vaga não se administra",
          text: "\"Fazer se necessário\", \"conforme ordem médica\" ou \"a critério médico\": ==não administrar==; pedir complementação ao prescritor. Medicação 'se necessário' precisa vir com dose, posologia e condição de uso.",
        },
      ],
    },
    {
      id: "depois-registro-orientacao-resposta",
      kind: "tecnico",
      title: "Depois: registro, orientação e resposta",
      source: 0,
      blocks: [
        {
          type: "cards",
          items: [
            { title: "6 · Registro certo", text: "Registrar o horário da administração e checar a cada dose. Registrar ==adiamentos, cancelamentos, desabastecimento, recusa do paciente e eventos adversos==.", icon: "📝", tone: "green" },
            { title: "7 · Orientação correta", text: "Esclarecer dúvidas com o prescritor antes. Orientar o paciente: nome do medicamento, indicação, efeitos esperados. Direito de conhecer aspecto (cor, formato) e frequência.", icon: "💬", tone: "violet" },
            { title: "9 · Resposta certa", text: "Observar se o medicamento teve o ==efeito desejado==. Registrar e informar ao prescritor efeitos diferentes do esperado. Registrar sinais vitais e glicemia capilar quando pertinentes.", icon: "👁️", tone: "rose" },
          ],
        },
      ],
    },
    {
      id: "alta-vigilancia",
      kind: "cuidados",
      title: "Alta vigilância e intervenções específicas",
      source: 0,
      blocks: [
        {
          type: "checklist",
          items: [
            "Dupla checagem ==por dois profissionais== dos cálculos de diluição e administração de medicamentos potencialmente perigosos",
            "Remover do estoque das unidades os ==eletrólitos concentrados== (especialmente cloreto de potássio injetável) e bloqueadores neuromusculares",
            "Manter na unidade apenas os medicamentos de alta vigilância absolutamente necessários",
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
            { value: "9", label: "certos no protocolo de 2013" },
            { value: "2", label: "identificadores, no mínimo" },
            { value: "10× ou 100×", label: "erro de dose por zero, vírgula ou ponto" },
            { value: "2", label: "profissionais na dupla checagem" },
            { value: "5 → 7 → 9", label: "evolução dos certos" },
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
          title: "Plantão noturno",
          scenario: "Às 22 h, o técnico encontra na prescrição 'dipirona se necessário' sem dose nem condição de uso. Em outro leito, a medicação das 24 h poderia ser dada às 22 h para ele adiantar o trabalho.",
          question: "Como agir em cada situação?",
          answer: "Não administrar a prescrição vaga e pedir complementação ao prescritor; não antecipar o horário sem o consentimento do enfermeiro e do prescritor.",
          reasoning: [
            "Dose certa: medicação 'se necessário' precisa de dose, posologia e condição de uso.",
            "Prescrição vaga não deve ser administrada.",
            "Hora certa: antecipar ou atrasar só com enfermeiro e prescritor.",
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
            { wrong: "Confirmar o paciente perguntando: 'O senhor é o João?'", right: "Pergunta ==aberta== pelo nome completo + no mínimo ==dois identificadores==.", why: "O paciente pode concordar por engano com a pergunta fechada." },
            { wrong: "O técnico pode adiantar a dose em 1 hora para organizar a rotina.", right: "Antecipar/atrasar só com consentimento do ==enfermeiro e do prescritor==.", why: "Item 'hora certa'." },
            { wrong: "Na alta vigilância, basta uma conferência cuidadosa.", right: "Exige ==dupla checagem== dos cálculos (por dois profissionais).", why: "Item 7.1.2 do protocolo." },
            { wrong: "Prescrição 'a critério médico' pode ser feita se o paciente pedir.", right: "Prescrição vaga ==não deve ser administrada==.", why: "Nota do item 'dose certa'." },
            { wrong: "O número do leito é um bom identificador.", right: "Conferir ==nome== e outros identificadores na pulseira e no prontuário.", why: "O leito muda; o protocolo de identificação proíbe usá-lo como identificador." },
            { wrong: "Registrar só os medicamentos que foram dados.", right: "Registrar também ==adiamentos, cancelamentos, desabastecimento, recusa== e eventos adversos.", why: "Item 'registro certo'." },
            { wrong: "Resposta certa é a resposta do paciente à pergunta de identificação.", right: "Resposta certa = observar se o medicamento teve o ==efeito desejado==.", why: "É o 9º certo." },
          ],
        },
        {
          type: "callout",
          variant: "atencao",
          title: "Detalhe do texto",
          text: "A frase-resumo do protocolo cita 'ação certa'; o detalhamento item a item usa '==orientação correta==' (VII). Este app segue o detalhamento.",
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
            { slug: "regra-de-tres-dose-e-diluicao", title: "Regra de três: quanto aspirar", why: "Calcular a dose certa." },
            { slug: "codigo-de-etica-cofen-564", title: "Código de Ética (Resolução Cofen 564/2017)", why: "Proibido administrar sem conhecer indicação, ação, via e riscos." },
          ],
        },
      ],
    },
  ],
  sources: [at(SRC.protMedicamentosV2, "itens 7.1.1 e 7.1.2")],
  questions: [
    mcq({ key: "fund-9certos-1", section: "antes-quem-e-o-que", difficulty: "facil",
      stem: "Pelo protocolo do Ministério da Saúde, para confirmar o 'paciente certo' antes de administrar um medicamento, o profissional deve:",
      options: ["chamar o paciente pelo número do leito.", "perguntar o nome completo do paciente e usar no mínimo dois identificadores.", "conferir apenas a pulseira de identificação.", "perguntar 'O senhor é o João?' e aguardar a confirmação."], correct: 1,
      explanation: "O protocolo pede pergunta aberta e no mínimo dois identificadores, conferindo pulseira, leito e prontuário." }),
    mcq({ key: "fund-9certos-2", section: "durante-como-e-quando", difficulty: "facil",
      stem: "Segundo o protocolo de segurança na administração de medicamentos, a antecipação ou o atraso da administração em relação ao horário definido:",
      options: ["pode ser feito livremente, desde que dentro de duas horas.", "é proibido em qualquer situação.", "somente pode ser feito com o consentimento do enfermeiro e do prescritor.", "depende apenas da preferência do paciente."], correct: 2,
      explanation: "No item 'Hora certa', antecipar ou atrasar só com o consentimento do enfermeiro e do prescritor." }),
    mcq({ key: "fund-9certos-3", section: "durante-como-e-quando", difficulty: "facil",
      stem: "Segundo o protocolo, diante de uma prescrição com a orientação 'fazer se necessário', sem condição de uso, o profissional deve:",
      options: ["administrar quando o paciente pedir.", "administrar no horário padrão da unidade.", "não administrar e solicitar complementação ao prescritor.", "administrar metade da dose como precaução."], correct: 2,
      explanation: "Orientações vagas ('se necessário', 'conforme ordem médica', 'a critério médico') exigem complementação e não devem ser administradas." }),
    mcq({ key: "fund-9certos-4", section: "durante-como-e-quando", difficulty: "media",
      stem: "Para medicamentos potencialmente perigosos ou de alta vigilância, o protocolo recomenda:",
      options: ["administrar sempre por via oral.", "dupla checagem dos cálculos por dois profissionais.", "dispensar o registro da administração.", "preparar com antecedência de 24 horas."], correct: 1,
      explanation: "Instituir dupla checagem por dois profissionais para os cálculos de diluição e administração de medicamentos de alta vigilância." }),
    mcq({ key: "fund-9certos-5", section: "durante-como-e-quando", difficulty: "media",
      stem: "No item 'dose certa', o protocolo pede atenção redobrada a doses escritas com 'zero', 'vírgula' e 'ponto' porque:",
      options: ["dificultam o registro eletrônico.", "podem redundar em doses 10 ou 100 vezes superiores à desejada.", "são proibidas em prescrições.", "indicam medicamentos de uso oral."], correct: 1,
      explanation: "Esses elementos podem gerar doses 10 ou 100 vezes maiores; a dúvida deve ser esclarecida com o prescritor." }),
    mcq({ key: "fund-9certos-6", section: "depois-registro-orientacao-resposta", difficulty: "media",
      stem: "O 'registro certo' da administração de medicamentos inclui registrar:",
      options: ["apenas o nome do medicamento.", "o horário da administração e ocorrências como adiamentos, cancelamentos, desabastecimento, recusa e eventos adversos.", "somente as doses de alta vigilância.", "a opinião do técnico sobre a prescrição."], correct: 1,
      explanation: "Item VI do protocolo." }),
    mcq({ key: "fund-9certos-7", section: "depois-registro-orientacao-resposta", difficulty: "media",
      stem: "No protocolo, 'resposta certa' significa:",
      options: ["o paciente responder corretamente seu nome.", "observar se o medicamento teve o efeito desejado e registrar efeitos diferentes do esperado.", "o médico responder às dúvidas da enfermagem.", "a farmácia responder ao pedido em até 1 hora."], correct: 1,
      explanation: "Item IX: observar o efeito, registrar e informar ao prescritor efeitos diferentes do esperado." }),
    mcq({ key: "fund-9certos-8", section: "alta-vigilancia", difficulty: "dificil",
      stem: "Entre as intervenções específicas do protocolo de medicamentos está:",
      options: ["manter estoque ampliado de cloreto de potássio injetável nas unidades.", "remover do estoque das unidades de internação os eletrólitos concentrados (especialmente cloreto de potássio injetável) e bloqueadores neuromusculares.", "abolir a dupla checagem para agilizar o cuidado.", "permitir prescrição verbal de rotina."], correct: 1,
      explanation: "Item 7.1.2: remover das unidades eletrólitos concentrados e bloqueadores neuromusculares; manter só o absolutamente necessário." }),
  ],
  status: "published",
  standard: "v2",
  lastReviewedAt: REVIEWED_V2,
  reviewNotes: V2_REVIEW_NOTE + " A frase-resumo do protocolo cita 'ação certa'; o detalhamento usa 'orientação correta' (VII), que o app segue.",
};
