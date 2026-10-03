import type { TopicSeed } from "@/core/content/types";
import { mcq } from "../../helpers";
import { REVIEWED_V2, SRC, V2_REVIEW_NOTE, at } from "../../sources";

/* Fonte única: NR 32 (texto atualizado até a Portaria MTP 4.219/2022), lida no original. */

export const NR32: TopicSeed = {
  slug: "nr-32-seguranca-do-trabalhador",
  title: "NR 32: segurança do trabalhador da saúde",
  description: "Risco biológico, classes de risco, o que o empregador deve vedar, perfurocortantes, vacinação e CAT.",
  summary:
    "A NR 32 estabelece diretrizes para proteger a segurança e a saúde dos trabalhadores dos serviços de saúde — qualquer edificação destinada à assistência à saúde e todas as ações de promoção, recuperação, assistência, pesquisa e ensino, em qualquer nível de complexidade. Risco biológico é a probabilidade da exposição ocupacional a agentes biológicos: microrganismos (geneticamente modificados ou não), culturas de células, parasitas, toxinas e príons, classificados no Anexo I em quatro classes de risco. O PGR identifica os agentes e avalia os locais; o PCMSO inclui o programa de vacinação e os procedimentos para exposição acidental. Toda ocorrência de acidente com risco biológico, com ou sem afastamento, exige emissão de CAT. O empregador deve vedar o uso de pias de trabalho para outros fins, o ato de fumar, o uso de adornos e o manuseio de lentes de contato nos postos de trabalho, o consumo e a guarda de alimentos nos postos e o uso de calçados abertos. A vestimenta é fornecida sem ônus e o trabalhador não deixa o local de trabalho com EPI e vestimentas usadas. Quem usa o perfurocortante é responsável pelo descarte, e são vedados o reencape e a desconexão manual de agulhas. Todo trabalhador recebe gratuitamente vacinação contra tétano, difteria, hepatite B e as previstas no PCMSO, registrada no prontuário; a recusa deve ser documentada.",
  keyPoints: [
    "Serviço de saúde = qualquer edificação de assistência + promoção, recuperação, pesquisa e ensino, em qualquer complexidade.",
    "Agentes biológicos: microrganismos, culturas de células, parasitas, toxinas e príons — 4 classes de risco.",
    "Acidente com risco biológico, com ou sem afastamento → CAT obrigatória.",
    "Vedado: pias para outros fins, fumar, adornos, manusear lentes de contato, comer/beber e guardar alimentos nos postos, calçados abertos.",
    "Vestimenta sem ônus; não sair do local de trabalho com EPI e vestimentas usadas.",
    "Quem usa o perfurocortante descarta; vedados reencape e desconexão manual de agulhas.",
    "Vacinação gratuita: tétano, difteria, hepatite B + PCMSO; registro no prontuário; recusa documentada.",
    "Feridas ou lesões nos membros superiores: só trabalhar após avaliação médica com liberação.",
  ],
  map: {
    title: "NR 32 no dia a dia",
    spec: {
      layout: "hub",
      center: "NR 32 — risco biológico",
      blocks: [
        { title: "Proibido no posto", tone: "rose", icon: "⛔", items: ["Fumar, adornos, lentes de contato", "Comer, beber, guardar alimentos", "Calçado aberto"] },
        { title: "Perfurocortante", tone: "amber", icon: "💉", items: ["Quem usa descarta", "Sem reencape", "Sem desconexão manual"] },
        { title: "Vacinação gratuita", tone: "green", icon: "💪", items: ["Tétano, difteria, hepatite B", "Registro no prontuário", "Recusa documentada"] },
        { title: "Acidente", tone: "blue", icon: "📄", items: ["Comunicar na hora", "CAT com ou sem afastamento"] },
      ],
    },
  },
  sections: [
    {
      id: "visao-geral",
      kind: "visao",
      title: "A NR que protege quem cuida",
      source: 0,
      blocks: [
        {
          type: "text",
          text: "As NRs são normas do trabalho. A ==NR 32== é a dos ==serviços de saúde==: diz o que o empregador deve garantir e o que o trabalhador não pode fazer para reduzir a exposição a riscos biológicos, químicos e radiações. Em prova de técnico, o foco é o ==risco biológico==.",
        },
        {
          type: "definition",
          term: "Serviço de saúde (32.1.2)",
          text: "==Qualquer edificação== destinada à prestação de assistência à saúde da população e todas as ações de promoção, recuperação, assistência, pesquisa e ensino em saúde ==em qualquer nível de complexidade==.",
        },
      ],
    },
    {
      id: "risco-biologico",
      kind: "conceito",
      title: "Risco biológico e agentes biológicos",
      source: 0,
      blocks: [
        { type: "definition", term: "Risco biológico", text: "A ==probabilidade da exposição ocupacional== a agentes biológicos." },
        { type: "definition", term: "Agentes biológicos", text: "Os ==microrganismos==, geneticamente modificados ou não; as ==culturas de células==; os ==parasitas==; as ==toxinas== e os ==príons==." },
      ],
    },
    {
      id: "classes-de-risco",
      kind: "classificacao",
      title: "As 4 classes de risco (Anexo I)",
      lead: "Sobe o risco individual, sobe a chance de disseminação, cai a chance de haver tratamento.",
      source: 0,
      blocks: [
        {
          type: "compare",
          columns: ["Risco individual", "Disseminação na coletividade", "Profilaxia/tratamento"],
          rows: [
            { label: "Classe 1", cells: ["Baixo", "Baixo; baixa probabilidade de causar doença", "—"] },
            { label: "Classe 2", cells: ["Moderado", "Baixa probabilidade", "==Existem meios eficazes=="] },
            { label: "Classe 3", cells: ["Elevado", "Com probabilidade de disseminação", "==Nem sempre== existem"] },
            { label: "Classe 4", cells: ["Elevado", "==Probabilidade elevada==; grande transmissibilidade", "==Não existem== meios eficazes"] },
          ],
        },
      ],
    },
    {
      id: "programas",
      kind: "etapas",
      title: "PGR, PCMSO e capacitação",
      source: 0,
      blocks: [
        {
          type: "steps",
          items: [
            { title: "PGR identifica e avalia", text: "Agentes mais prováveis (fontes, vias de transmissão, transmissibilidade, persistência) e os locais e atividades com possibilidade de exposição.", who: "servico" },
            { title: "PCMSO vigia a saúde", text: "Reconhece os riscos, localiza as áreas, identifica nominalmente os expostos, faz vigilância médica e inclui o ==programa de vacinação== e as condutas em exposição acidental.", who: "servico" },
            { title: "Capacitação antes e durante", text: "Antes do início das atividades e de forma continuada, ==durante a jornada==, por profissionais familiarizados com os riscos; comprovada por documento.", who: "servico" },
            { title: "Instruções escritas", text: "Em linguagem acessível, entregues ao trabalhador mediante recibo.", who: "servico" },
          ],
        },
      ],
    },
    {
      id: "vedacoes-e-deveres",
      kind: "tecnico",
      title: "O que é vedado e o que é dever no posto de trabalho",
      source: 0,
      blocks: [
        {
          type: "dodont",
          do: [
            "Usar vestimenta de trabalho adequada (fornecida sem ônus)",
            "Descartar o perfurocortante que você mesmo usou",
            "Comunicar imediatamente todo acidente ou incidente com possível exposição",
            "Passar por avaliação médica antes de trabalhar com ferida ou lesão nos membros superiores",
            "Usar o EPI disponível em número suficiente no posto",
          ],
          dont: [
            "Usar pias de trabalho para fins diversos dos previstos",
            "Fumar, usar adornos ou manusear lentes de contato no posto",
            "Comer, beber ou guardar alimentos no posto de trabalho",
            "Usar calçados abertos",
            "Reencapar ou desconectar agulhas manualmente",
            "Sair do local de trabalho com EPI e vestimentas usadas",
          ],
        },
        {
          type: "callout",
          variant: "lei",
          title: "Colchões e almofadados (32.2.4.13)",
          text: "Devem ter revestimento ==lavável e impermeável==, sem furos, rasgos, sulcos ou reentrâncias.",
        },
      ],
    },
    {
      id: "vacinacao",
      kind: "cuidados",
      title: "Vacinação do trabalhador",
      source: 0,
      blocks: [
        {
          type: "steps",
          items: [
            { title: "Gratuita para todo trabalhador", text: "Imunização ativa contra ==tétano, difteria, hepatite B== e as estabelecidas no PCMSO.", who: "servico" },
            { title: "Outras vacinas eficazes também", text: "Sempre que houver vacina eficaz contra agentes a que o trabalhador está exposto, fornecida gratuitamente.", who: "servico" },
            { title: "Controle de eficácia e reforço", text: "Quando recomendado pelo Ministério da Saúde; a vacinação segue as recomendações do MS.", who: "servico" },
            { title: "Informar e documentar a recusa", text: "O trabalhador é informado das vantagens, efeitos colaterais e riscos da recusa; a recusa fica documentada.", who: "servico" },
            { title: "Registrar e comprovar", text: "Registro no prontuário clínico individual (NR 7) e comprovante entregue ao trabalhador.", who: "servico" },
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
            { value: "4", label: "classes de risco dos agentes biológicos" },
            { value: "3", label: "vacinas citadas nominalmente", note: "tétano, difteria, hepatite B" },
            { value: "32.2.4.15", label: "item que veda reencape e desconexão manual de agulhas" },
            { value: "5", label: "agentes biológicos", note: "microrganismos, culturas de células, parasitas, toxinas, príons" },
            { value: "CAT", label: "em todo acidente com risco biológico", note: "com ou sem afastamento" },
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
          title: "Primeiro plantão",
          scenario: "No primeiro plantão, um técnico chega de sandália, com aliança e relógio, e deixa um lanche na bancada do posto de enfermagem. Ele ainda não recebeu nenhuma dose da vacina contra hepatite B.",
          question: "Quais pontos da NR 32 estão sendo descumpridos e de quem é a obrigação da vacina?",
          answer: "Calçado aberto, uso de adornos e guarda de alimento no posto são vedados; a vacinação contra hepatite B deve ser fornecida gratuitamente pelo empregador.",
          reasoning: [
            "32.2.4.5 manda o empregador vedar calçados abertos, adornos e a guarda de alimentos fora do local próprio.",
            "32.2.4.17.1: imunização gratuita contra tétano, difteria e hepatite B.",
            "A vacinação é registrada no prontuário e o trabalhador recebe comprovante.",
            "Se ele recusar, a recusa precisa ficar documentada.",
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
            { wrong: "A NR 32 vale só para hospitais.", right: "Vale para ==qualquer edificação== de assistência e ações de saúde ==em qualquer nível de complexidade==.", why: "A definição de serviço de saúde do item 32.1.2 é ampla de propósito." },
            { wrong: "A CAT só é emitida se houver afastamento.", right: "CAT ==com ou sem afastamento==.", why: "O item 32.2.3.5 fala em toda ocorrência de acidente com risco biológico." },
            { wrong: "O descarte do perfurocortante é responsabilidade do pessoal da limpeza.", right: "==Quem utiliza== o perfurocortante é responsável pelo descarte.", why: "Item 32.2.4.14 — evita que outra pessoa manipule agulha usada." },
            { wrong: "A vacina contra hepatite B pode ser cobrada do trabalhador.", right: "É ==gratuita==, junto com tétano e difteria.", why: "Item 32.2.4.17.1." },
            { wrong: "Adornos são permitidos se forem pequenos.", right: "O empregador deve ==vedar o uso de adornos== nos postos de trabalho.", why: "Item 32.2.4.5, b — não há exceção por tamanho." },
            { wrong: "Na classe de risco 2 não existem meios eficazes de tratamento.", right: "Na classe 2 ==existem== meios eficazes; na classe 4 é que não existem.", why: "O Anexo I gradua: classe 2 existe, classe 3 nem sempre, classe 4 não existe." },
            { wrong: "Trabalhador com ferimento na mão pode trabalhar de luvas sem avaliação.", right: "Só inicia após ==avaliação médica obrigatória== com documento de liberação.", why: "Item 32.2.4.4." },
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
            { slug: "acidente-com-material-biologico", title: "Acidente com material biológico", why: "O passo a passo depois de uma exposição." },
            { slug: "epi-paramentacao-e-desparamentacao", title: "EPI: paramentação e desparamentação", why: "Como usar o EPI que a NR obriga a fornecer." },
            { slug: "residuos-de-servicos-de-saude-rdc-222", title: "Resíduos de serviços de saúde (RDC 222)", why: "A RDC também veda reencape e desconexão manual." },
          ],
        },
      ],
    },
  ],
  sources: [at(SRC.nr32, "itens 32.1, 32.2 e Anexo I")],
  questions: [
    mcq({ key: "bio-nr32-1", section: "vedacoes-e-deveres", difficulty: "facil",
      stem: "De acordo com a NR 32, o empregador deve vedar nos postos de trabalho:",
      options: ["o uso de luvas de procedimento.", "o uso de adornos, o ato de fumar e o consumo de alimentos e bebidas.", "o uso de vestimenta de trabalho.", "a higiene das mãos com preparação alcoólica."], correct: 1,
      explanation: "O item 32.2.4.5 manda vedar pias para outros fins, fumar, adornos, manusear lentes de contato, consumir e guardar alimentos nos postos e usar calçados abertos." }),
    mcq({ key: "bio-nr32-2", section: "vedacoes-e-deveres", difficulty: "facil",
      stem: "Segundo a NR 32, quanto ao manuseio de agulhas usadas:",
      options: ["o reencape é permitido se feito com uma só mão.", "são vedados o reencape e a desconexão manual de agulhas.", "a desconexão manual é obrigatória antes do descarte.", "a equipe de limpeza deve recolher as agulhas soltas."], correct: 1,
      explanation: "O item 32.2.4.15 é literal: são vedados o reencape e a desconexão manual de agulhas." }),
    mcq({ key: "bio-nr32-3", section: "vacinacao", difficulty: "facil",
      stem: "A NR 32 determina que seja fornecido gratuitamente a todo trabalhador dos serviços de saúde programa de imunização ativa contra:",
      options: ["sarampo, caxumba e rubéola apenas.", "tétano, difteria, hepatite B e os estabelecidos no PCMSO.", "influenza e covid-19 apenas.", "hepatite C e HIV."], correct: 1,
      explanation: "Item 32.2.4.17.1: tétano, difteria, hepatite B e os estabelecidos no PCMSO, gratuitamente." }),
    mcq({ key: "bio-nr32-4", section: "programas", difficulty: "media",
      stem: "Sobre a emissão da Comunicação de Acidente de Trabalho (CAT) em acidente com risco biológico, a NR 32 determina que ela seja emitida:",
      options: ["apenas quando houver afastamento superior a 15 dias.", "em toda ocorrência, com ou sem afastamento do trabalhador.", "somente se o paciente-fonte for positivo para HIV.", "apenas a pedido do trabalhador."], correct: 1,
      explanation: "O item 32.2.3.5 exige CAT em toda ocorrência de acidente envolvendo riscos biológicos, com ou sem afastamento." }),
    mcq({ key: "bio-nr32-5", section: "vedacoes-e-deveres", difficulty: "media",
      stem: "Pela NR 32, a responsabilidade pelo descarte do material perfurocortante é:",
      options: ["do serviço de higienização.", "do enfermeiro responsável pelo setor.", "do trabalhador que utilizou o objeto.", "da Comissão de Controle de Infecção."], correct: 2,
      explanation: "Item 32.2.4.14: os trabalhadores que utilizarem objetos perfurocortantes devem ser os responsáveis pelo seu descarte." }),
    mcq({ key: "bio-nr32-6", section: "classes-de-risco", difficulty: "dificil",
      stem: "No Anexo I da NR 32, a classe de risco que reúne agentes com risco individual elevado, probabilidade elevada de disseminação e sem meios eficazes de profilaxia ou tratamento é a:",
      options: ["classe 1.", "classe 2.", "classe 3.", "classe 4."], correct: 3,
      explanation: "Classe 4: risco individual elevado, probabilidade elevada de disseminação, grande transmissibilidade e inexistência de meios eficazes de profilaxia ou tratamento." }),
    mcq({ key: "bio-nr32-7", section: "risco-biologico", difficulty: "media",
      stem: "Para a NR 32, são considerados agentes biológicos:",
      options: ["apenas bactérias e vírus.", "microrganismos, culturas de células, parasitas, toxinas e príons.", "somente agentes transmitidos pelo sangue.", "produtos químicos e radiações ionizantes."], correct: 1,
      explanation: "Item 32.2.1.1: microrganismos (geneticamente modificados ou não), culturas de células, parasitas, toxinas e príons." }),
    mcq({ key: "bio-nr32-8", section: "vacinacao", difficulty: "dificil",
      stem: "Se um trabalhador recusar a vacinação oferecida, a NR 32 determina que o empregador:",
      options: ["demita o trabalhador por justa causa.", "informe vantagens, efeitos colaterais e riscos da recusa e guarde documento comprobatório.", "aplique a vacina mesmo assim.", "transfira o trabalhador para a área administrativa sem registro."], correct: 1,
      explanation: "Item 32.2.4.17.5: o trabalhador deve ser informado das vantagens, efeitos colaterais e riscos da falta ou recusa, e o empregador guarda documento comprobatório à disposição da inspeção." }),
  ],
  status: "published",
  standard: "v2",
  lastReviewedAt: REVIEWED_V2,
  reviewNotes: V2_REVIEW_NOTE,
};
