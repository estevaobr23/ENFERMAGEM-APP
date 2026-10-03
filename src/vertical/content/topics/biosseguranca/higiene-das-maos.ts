import type { TopicSeed } from "@/core/content/types";
import { mcq } from "../../helpers";
import { REVIEWED_V2, SRC, V2_REVIEW_NOTE, at } from "../../sources";

/* Fonte única: Anexo 01 do PNSP (MS/Anvisa/Fiocruz, 2013), lido no original. */

export const HIGIENE_DAS_MAOS: TopicSeed = {
  slug: "higiene-das-maos-cinco-momentos",
  title: "Higiene das mãos: os 5 momentos",
  description: "Quando higienizar, com qual produto, por quanto tempo e com qual técnica — do jeito que o protocolo e a banca cobram.",
  summary:
    "O Protocolo para a Prática de Higiene das Mãos em Serviços de Saúde (MS/Anvisa/Fiocruz, 2013) integra o Programa Nacional de Segurança do Paciente e existe para prevenir e controlar as infecções relacionadas à assistência à saúde (IRAS). 'Higiene das mãos' é termo geral: engloba a higiene simples (água e sabonete líquido comum), a higiene antisséptica (água e sabonete com antisséptico), a fricção antisséptica com preparação alcoólica e a antissepsia cirúrgica (fora do protocolo). A higiene deve acontecer no ponto de assistência — onde estão o paciente, o profissional e a assistência — com o produto ao alcance das mãos. Os cinco momentos são: antes de tocar o paciente, antes de procedimento limpo/asséptico, após risco de exposição a fluidos corporais, após tocar o paciente e após tocar superfícies próximas ao paciente. A preparação alcoólica é o meio preferido na rotina quando as mãos não estão visivelmente sujas, com fricção de 20 a 30 segundos (gel/espuma com concentração final mínima de 70% ou líquida entre 60% e 80%). Com as mãos visivelmente sujas, após o uso do banheiro ou diante de suspeita de patógenos formadores de esporos (como surtos de C. difficile), usa-se água e sabonete líquido, por 40 a 60 segundos. O uso de luvas não altera nem substitui a higiene das mãos.",
  keyPoints: [
    "Higiene das mãos é termo geral: simples, antisséptica, fricção com álcool e antissepsia cirúrgica.",
    "Ponto de assistência = paciente + profissional + assistência; produto ao alcance, sem sair do ambiente do paciente.",
    "5 momentos: 2 ANTES (tocar o paciente; procedimento limpo/asséptico) e 3 APÓS (fluidos; tocar o paciente; superfícies próximas).",
    "Preparação alcoólica é o meio preferido na rotina, se as mãos não estiverem visivelmente sujas: 20 a 30 s.",
    "Água e sabonete: mãos visivelmente sujas, após o banheiro e suspeita de esporos (C. difficile): 40 a 60 s.",
    "Álcool: gel/espuma ≥ 70% ou líquido entre 60% e 80%.",
    "Higienizar após remover luvas e ao passar de um sítio contaminado para outro no mesmo paciente.",
    "Luva não altera nem substitui a higiene das mãos.",
    "Não usar sabonete e álcool ao mesmo tempo; não usar água quente; não calçar luvas com as mãos molhadas.",
  ],
  map: {
    title: "Os 5 momentos",
    spec: {
      layout: "hub",
      center: "Higiene das mãos no ponto de assistência",
      blocks: [
        { title: "Antes", tone: "blue", icon: "✋", items: ["1. Tocar o paciente", "2. Procedimento limpo/asséptico"] },
        { title: "Depois", tone: "green", icon: "🧴", items: ["3. Risco de exposição a fluidos", "4. Tocar o paciente", "5. Tocar superfícies próximas"] },
        { title: "Com o quê", tone: "amber", icon: "⏳", items: ["Álcool: 20 a 30 s", "Água e sabonete: 40 a 60 s", "Visivelmente suja → água e sabonete"] },
      ],
      footnote: "Objetivo: prevenir IRAS por transmissão cruzada pelas mãos.",
    },
  },
  sections: [
    {
      id: "visao-geral",
      kind: "visao",
      title: "Por que este tema abre Biossegurança",
      lead: "É o protocolo mais simples — e o que mais derruba candidato por detalhe de tempo, produto e momento.",
      source: 0,
      blocks: [
        {
          type: "text",
          text: "O protocolo faz parte do **Programa Nacional de Segurança do Paciente** e tem uma finalidade só: ==prevenir e controlar as IRAS==, protegendo paciente e profissional. As mãos são o principal veículo de transmissão cruzada no cuidado.",
        },
        {
          type: "cards",
          items: [
            { title: "Onde", text: "No ==ponto de assistência==, exatamente onde o cuidado acontece.", icon: "📍", tone: "blue" },
            { title: "Quando", text: "Nos ==5 momentos== — dois antes, três depois.", icon: "⏱️", tone: "teal" },
            { title: "Com o quê", text: "Álcool na rotina; água e sabonete quando há sujidade visível, banheiro ou esporos.", icon: "🧴", tone: "amber" },
            { title: "Como", text: "Técnica que alcança ==todas as superfícies== das mãos, pelo tempo certo.", icon: "👐", tone: "green" },
          ],
        },
      ],
    },
    {
      id: "definicoes",
      kind: "conceito",
      title: "As definições que a banca usa",
      source: 0,
      blocks: [
        {
          type: "definition",
          term: "Higiene das mãos",
          text: "Termo ==geral== para qualquer ação de limpeza das mãos para prevenir a transmissão de micro-organismos e evitar que pacientes e profissionais adquiram IRAS.",
          note: "Engloba higiene simples, higiene antisséptica, fricção antisséptica e antissepsia cirúrgica (esta última não é tratada no protocolo).",
        },
        {
          type: "definition",
          term: "Ponto de assistência",
          text: "Local onde ==três elementos== estão presentes: o ==paciente==, o ==profissional de saúde== e a ==assistência== ou tratamento envolvendo contato com o paciente ou suas imediações.",
          note: "O produto deve estar ao alcance das mãos, sem o profissional precisar sair do ambiente do paciente (frasco de bolso, dispensador na parede, frasco na cama ou no carrinho).",
        },
        {
          type: "compare",
          columns: ["Higiene simples", "Higiene antisséptica", "Fricção antisséptica"],
          rows: [
            { label: "O que é", cells: ["Água + sabonete ==comum== líquido", "Água + sabonete ==associado a antisséptico==", "Preparação ==alcoólica==, sem enxágue nem papel-toalha"] },
            { label: "Remove sujidade?", cells: ["Sim", "Sim", "==Não== — só reduz a carga microbiana"] },
          ],
        },
      ],
    },
    {
      id: "os-cinco-momentos",
      kind: "etapas",
      title: "Os 5 momentos, com o porquê de cada um",
      lead: "Dois ANTES protegem o paciente. Três DEPOIS protegem você e o ambiente.",
      source: 0,
      blocks: [
        {
          type: "steps",
          items: [
            { title: "1 · Antes de tocar o paciente", text: "Antes do contato direto (aferir sinais vitais, mobilizar, examinar).", why: "Impede que micro-organismos trazidos nas suas mãos cheguem ao paciente.", who: "equipe" },
            { title: "2 · Antes de procedimento limpo/asséptico", text: "Ex.: antes de manusear dispositivo invasivo — ==com ou sem luvas==.", why: "É o momento em que o micro-organismo pode entrar no corpo do paciente. A luva não dispensa a higiene.", who: "equipe" },
            { title: "3 · Após risco de exposição a fluidos corporais", text: "Após contato com fluidos, excreções, mucosas, pele não íntegra ou curativo — e ==após remover luvas==.", why: "Protege o profissional e evita levar o fluido para outra superfície.", who: "equipe" },
            { title: "4 · Após tocar o paciente", text: "Ao encerrar o contato, mesmo sem sujidade visível.", why: "A pele íntegra do paciente também coloniza as mãos.", who: "equipe" },
            { title: "5 · Após tocar superfícies próximas ao paciente", text: "Grade da cama, mesa, bomba de infusão, monitor — ==mesmo sem ter tocado o paciente==.", why: "O ambiente do paciente fica contaminado pelos micro-organismos dele.", who: "equipe" },
          ],
        },
        {
          type: "callout",
          variant: "lei",
          title: "Indicações que completam os momentos",
          text: "Higienizar também ao ==passar de um sítio contaminado para outro sítio do corpo do mesmo paciente== e antes de manusear medicação ou preparar alimentos.",
        },
      ],
    },
    {
      id: "qual-produto",
      kind: "classificacao",
      title: "Álcool ou água e sabonete?",
      lead: "A regra geral é álcool. As exceções são exatamente o que cai.",
      source: 0,
      blocks: [
        {
          type: "compare",
          columns: ["Preparação alcoólica", "Água e sabonete líquido"],
          rows: [
            { label: "Quando", cells: ["==Meio preferido na rotina==, se as mãos ==não== estiverem visivelmente sujas", "Mãos ==visivelmente sujas== ou com sangue/fluidos; ==após o banheiro==; suspeita de ==esporos== (surto de C. difficile)"] },
            { label: "Duração", cells: ["==20 a 30 s==", "==40 a 60 s== (simples ou antisséptica)"] },
            { label: "Detalhe", cells: ["Friccionar até evaporar por completo", "Secar bem; fechar a torneira com papel-toalha se não for automática"] },
          ],
        },
        {
          type: "callout",
          variant: "atencao",
          title: "Sem álcool disponível?",
          text: "Se não houver preparação alcoólica, higienize com água e sabonete líquido. E ==nunca use os dois ao mesmo tempo==.",
        },
      ],
    },
    {
      id: "tecnica",
      kind: "etapas",
      title: "Técnica: o objetivo é alcançar todas as superfícies",
      lead: "Sequência das figuras do protocolo (OMS, 2006). Na água e sabonete, inclua os punhos, enxágue e seque.",
      source: 0,
      blocks: [
        {
          type: "steps",
          items: [
            { title: "Produto na palma", text: "Quantidade suficiente para cobrir todas as superfícies das mãos." },
            { title: "Palma com palma" },
            { title: "Palma sobre o dorso, dedos entrelaçados", text: "Uma mão e depois a outra." },
            { title: "Palma com palma, dedos entrelaçados", text: "Alcança os espaços interdigitais." },
            { title: "Dorso dos dedos contra a palma oposta", text: "Dedos encaixados, movimento de vaivém." },
            { title: "Polegar", text: "Fricção circular de cada polegar com a palma oposta." },
            { title: "Polpas digitais e unhas", text: "Movimento circular contra a palma oposta." },
            { title: "Finalizar", text: "Álcool: friccionar ==até secar==. Água e sabonete: punhos, enxágue e secagem com papel-toalha." },
          ],
        },
      ],
    },
    {
      id: "luvas-e-pele",
      kind: "tecnico",
      title: "Luvas e cuidado com a pele: a parte do dia a dia",
      source: 0,
      blocks: [
        { type: "callout", variant: "atencao", title: "Regra de ouro", text: "O uso de luvas ==não altera nem substitui== a higiene das mãos." },
        {
          type: "dodont",
          do: [
            "Usar luvas só quando indicado: sangue, fluidos, mucosas, pele não íntegra, precaução de contato",
            "Trocar de luvas entre pacientes e ao passar de sítio contaminado para limpo",
            "Friccionar o álcool até evaporar por completo",
            "Secar bem as mãos após água e sabonete",
            "Manter unhas naturais, limpas e curtas",
            "Usar creme protetor de uso individual, compatível com os produtos",
          ],
          dont: [
            "Tocar telefone, maçaneta ou porta de luvas",
            "Usar unhas postiças no contato direto com pacientes",
            "Usar sabonete e álcool ao mesmo tempo",
            "Lavar as mãos com água quente",
            "Calçar luvas com as mãos molhadas (irrita a pele)",
            "Higienizar além das indicações (agride a pele sem ganho)",
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
            { value: "5", label: "momentos", note: "2 antes + 3 após" },
            { value: "20–30 s", label: "fricção com preparação alcoólica" },
            { value: "40–60 s", label: "água e sabonete (simples ou antisséptica)" },
            { value: "≥ 70%", label: "álcool em gel/espuma", note: "concentração final mínima" },
            { value: "60–80%", label: "álcool na forma líquida" },
            { value: "3", label: "elementos do ponto de assistência", note: "paciente, profissional, assistência" },
            { value: "1.000", label: "pacientes-dia", note: "indicador obrigatório: consumo de preparação alcoólica por 1.000 pacientes-dia" },
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
          title: "Glicemia capilar no leito 4",
          scenario: "O técnico calça luvas, faz a glicemia capilar de um paciente, descarta a lanceta e retira as luvas. As mãos não estão visivelmente sujas. Ele vai em seguida preparar a medicação do paciente do leito 5.",
          question: "Qual momento de higiene acabou de acontecer e qual produto usar?",
          answer: "Momento 3 (após risco de exposição a fluido corporal, que inclui a retirada das luvas), com preparação alcoólica por 20 a 30 segundos.",
          reasoning: [
            "Houve contato com sangue (fluido corporal) → momento 3, mesmo com luvas.",
            "O protocolo manda higienizar após remover luvas.",
            "Sem sujidade visível → o meio preferido é a preparação alcoólica.",
            "Antes de manusear a medicação do leito 5 há nova indicação de higiene.",
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
            { wrong: "Fricção com álcool: 40 a 60 segundos.", right: "Álcool: ==20 a 30 s==.", why: "40 a 60 s é o tempo da água e sabonete. A banca troca os dois números." },
            { wrong: "Se usei luvas, não preciso higienizar depois.", right: "Higienizar ==após remover as luvas==.", why: "A luva tem microporos e pode contaminar as mãos na retirada; por isso a remoção é uma das indicações." },
            { wrong: "Mão visivelmente suja pode ser higienizada só com álcool.", right: "Visivelmente suja → ==água e sabonete líquido==.", why: "O álcool não remove sujidade; ele só reduz a carga microbiana." },
            { wrong: "Tocar só a grade da cama não exige higiene.", right: "Momento 5: ==após tocar superfícies próximas== ao paciente.", why: "O ambiente do paciente está colonizado pelos micro-organismos dele." },
            { wrong: "Em surto de C. difficile, o álcool é a melhor opção.", right: "Suspeita de esporos → é ==preferível água e sabonete==.", why: "É uma das exceções expressas do protocolo à preferência pelo álcool." },
            { wrong: "Antes de procedimento asséptico com luva estéril, a higiene é dispensável.", right: "Higienizar ==independentemente do uso de luvas==.", why: "O texto do momento 2 diz literalmente 'independentemente do uso ou não de luvas'." },
            { wrong: "Usar álcool logo após lavar com sabonete potencializa a ação.", right: "Sabonete e álcool ==não devem ser usados ao mesmo tempo==.", why: "O protocolo lista o uso simultâneo entre os comportamentos a evitar." },
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
            { slug: "precaucoes-padrao-e-especificas", title: "Precauções padrão e específicas", why: "Higiene das mãos é o primeiro item de toda precaução." },
            { slug: "epi-paramentacao-e-desparamentacao", title: "EPI: paramentação e desparamentação", why: "Onde entra a higiene entre a retirada de cada EPI." },
            { slug: "nucleo-de-seguranca-do-paciente", title: "Segurança do paciente: PNSP e RDC 36", why: "Higiene das mãos é ação obrigatória do Plano de Segurança do Paciente." },
            { slug: "nove-certos-administracao-de-medicamentos", title: "Os 9 certos da administração de medicamentos", why: "A via certa começa com higienizar as mãos antes do preparo." },
          ],
        },
      ],
    },
  ],
  sources: [at(SRC.protHigieneMaos, "itens 1 a 5, 7 e 8")],
  questions: [
    mcq({ key: "bio-maos-1", section: "os-cinco-momentos", difficulty: "facil",
      stem: "Um profissional acabou de aferir a pressão de um paciente e vai sair do leito. Segundo os cinco momentos do protocolo de higiene das mãos, ele deve higienizar as mãos:",
      options: ["somente se for tocar outro paciente.", "somente se as mãos estiverem visivelmente sujas.", "após tocar o paciente — é um dos cinco momentos.", "não precisa, pois a aferição de pressão não é procedimento asséptico."], correct: 2,
      explanation: "'Após tocar o paciente' é o 4º momento, independentemente de haver sujidade visível ou de o próximo contato ser com outro paciente." }),
    mcq({ key: "bio-maos-2", section: "qual-produto", difficulty: "facil",
      stem: "Pelo protocolo do Ministério da Saúde, a fricção antisséptica das mãos com preparação alcoólica deve durar:",
      options: ["de 5 a 10 segundos.", "de 20 a 30 segundos.", "de 40 a 60 segundos.", "pelo menos 2 minutos."], correct: 1,
      explanation: "Fricção com preparação alcoólica: 20 a 30 segundos. Os 40 a 60 segundos valem para a higienização com água e sabonete (simples ou antisséptica)." }),
    mcq({ key: "bio-maos-3", section: "luvas-e-pele", difficulty: "facil",
      stem: "Sobre o uso de luvas, o protocolo de higiene das mãos do Ministério da Saúde afirma que:",
      options: ["o uso de luvas dispensa a higiene das mãos após o procedimento.", "as luvas devem ser mantidas entre pacientes do mesmo quarto.", "o uso de luvas não altera nem substitui a higiene das mãos.", "luvas devem ser calçadas com as mãos ainda úmidas de álcool."], correct: 2,
      explanation: "A nota do item 8.1 é literal: o uso de luvas não altera nem substitui a higiene das mãos. Luvas são trocadas entre pacientes e não se calçam com as mãos molhadas." }),
    mcq({ key: "bio-maos-4", section: "qual-produto", difficulty: "facil",
      stem: "Após um curativo, o técnico percebe as mãos visivelmente manchadas de sangue. Segundo o protocolo, ele deve:",
      options: ["friccionar com preparação alcoólica por 20 a 30 segundos.", "higienizar com água e sabonete líquido.", "apenas calçar um novo par de luvas.", "aplicar álcool e depois lavar com sabonete, nessa ordem."], correct: 1,
      explanation: "Mãos visivelmente sujas ou manchadas de sangue ou outros fluidos exigem água e sabonete líquido; o álcool não remove sujidade. E sabonete e álcool não devem ser usados ao mesmo tempo." }),
    mcq({ key: "bio-maos-5", section: "qual-produto", difficulty: "dificil",
      stem: "Em uma unidade com surto confirmado de Clostridioides (Clostridium) difficile, o protocolo de higiene das mãos considera preferível:",
      options: ["preparação alcoólica em gel a 70%.", "preparação alcoólica líquida a 80%.", "água e sabonete líquido.", "apenas o uso de luvas, dispensando a higiene."], correct: 2,
      explanation: "Quando há forte suspeita ou comprovação de exposição a patógenos formadores de esporos, inclusive surtos de C. difficile, é preferível higienizar com água e sabonete líquido." }),
    mcq({ key: "bio-maos-6", section: "definicoes", difficulty: "media",
      stem: "Segundo o protocolo de higiene das mãos, o 'ponto de assistência' é o local onde estão presentes:",
      options: ["o lavatório, o sabonete e o papel-toalha.", "o paciente, o profissional de saúde e a assistência envolvendo contato com o paciente ou suas imediações.", "o posto de enfermagem e o carrinho de medicação.", "o médico, o enfermeiro e o técnico de enfermagem."], correct: 1,
      explanation: "Ponto de assistência é o local onde três elementos estão presentes: o paciente, o profissional e a assistência ou tratamento com contato com o paciente ou suas imediações. O produto deve estar ao alcance das mãos ali." }),
    mcq({ key: "bio-maos-7", section: "numeros", difficulty: "dificil",
      stem: "O protocolo admite que a preparação alcoólica substitua água e sabonete, nas mãos sem sujidade visível, quando ela tiver concentração final:",
      options: ["mínima de 46% em qualquer forma.", "mínima de 70% em gel ou espuma, ou entre 60% e 80% na forma líquida.", "de exatamente 92,8% na forma líquida.", "entre 30% e 50% em gel."], correct: 1,
      explanation: "O item 5.1.1 fala em gel, espuma e outras formas com concentração final mínima de 70%, ou forma líquida com concentração final entre 60% e 80%." }),
    mcq({ key: "bio-maos-8", section: "os-cinco-momentos", difficulty: "media",
      stem: "Durante o banho no leito, o técnico limpa a região perineal e em seguida vai higienizar o rosto do mesmo paciente. Pelas indicações do protocolo, ele deve:",
      options: ["seguir sem higienizar, porque é o mesmo paciente.", "higienizar as mãos ao passar de um sítio contaminado para outro sítio do corpo do mesmo paciente.", "higienizar só ao final do banho.", "trocar apenas o pano de banho."], correct: 1,
      explanation: "Entre as indicações está higienizar 'em caso de deslocamento de um local contaminado do corpo para outro local do corpo durante atendimento do mesmo paciente'. Se estiver de luvas, deve trocá-las também." }),
    mcq({ key: "bio-maos-9", section: "numeros", difficulty: "dificil",
      stem: "Pelo protocolo, o indicador obrigatório de monitoramento da higiene das mãos a ser acompanhado pela CCIH é:",
      options: ["o número de lavatórios por leito.", "o consumo de preparação alcoólica para as mãos por 1.000 pacientes-dia.", "o número de luvas usadas por plantão.", "a quantidade de cartazes afixados na unidade."], correct: 1,
      explanation: "O indicador obrigatório é o consumo de preparação alcoólica (e sabonete) por 1.000 pacientes-dia. O percentual de adesão é indicador recomendável." }),
  ],
  status: "published",
  standard: "v2",
  lastReviewedAt: REVIEWED_V2,
  reviewNotes: V2_REVIEW_NOTE,
};
