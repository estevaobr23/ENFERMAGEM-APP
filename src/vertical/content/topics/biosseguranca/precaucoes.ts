import type { TopicSeed } from "@/core/content/types";
import { mcq } from "../../helpers";
import { REVIEWED_V2, SRC, V2_REVIEW_NOTE, at } from "../../sources";

/*
 * Fontes: [0] protocolo de precauções Ebserh/HUJB (2024), base CDC/Anvisa;
 *         [1] NT GVIMS/GGTES/Anvisa 04/2020 (eficácia da N95/PFF2).
 */

export const PRECAUCOES: TopicSeed = {
  slug: "precaucoes-padrao-e-especificas",
  title: "Precauções padrão e específicas",
  description: "Padrão para todos; contato, gotículas e aerossóis conforme a transmissão — EPI, quarto, transporte e exemplos.",
  summary:
    "As precauções são ações para interromper os mecanismos de transmissão e prevenir as infecções relacionadas à assistência à saúde. A Precaução Padrão vale para todo e qualquer paciente, independentemente do diagnóstico, porque todo paciente deve ser considerado potencial portador de doença transmissível pelo sangue e fluidos. Ela reúne higiene das mãos nos cinco momentos, luvas quando houver risco de contato com sangue, secreções, mucosas ou superfícies contaminadas, avental limpo (não necessariamente estéril) quando houver risco de respingo, óculos, máscara e protetor facial para proteger mucosas, e cuidado com perfurocortantes (não reencapar, não dobrar, não retirar a agulha da seringa, descartar em caixa própria sem ultrapassar o limite). As precauções específicas se somam à padrão conforme a via de transmissão. Contato: transmissão direta ou indireta e microrganismos multirresistentes; quarto privativo ou coorte, luvas e avental, equipamentos exclusivos. Gotículas: partículas maiores que 5 micra que atingem até cerca de 1 metro (rubéola, caxumba, coqueluche); máscara cirúrgica para quem entra no quarto, quarto privativo ou coorte com distância mínima de 1 metro entre leitos. Aerossóis: partículas menores que 5 micra que ficam suspensas no ar (tuberculose, varicela); máscara N95/PFF2, colocada antes de entrar e retirada após sair; quarto individual ou coorte. Em todo transporte o paciente com precaução respiratória usa máscara cirúrgica.",
  keyPoints: [
    "Precaução padrão: para TODOS os pacientes, independentemente do diagnóstico.",
    "Padrão = higiene das mãos + luvas, avental, óculos/máscara conforme o risco + cuidado com perfurocortantes.",
    "Específicas sempre se SOMAM à padrão; podem ser combinadas se houver mais de uma via.",
    "Contato: luvas e avental, quarto privativo ou coorte, equipamentos exclusivos (estetoscópio, termômetro).",
    "Gotículas (> 5 µm, até 1 m): máscara cirúrgica; ex.: rubéola, caxumba, coqueluche.",
    "Aerossóis (< 5 µm, suspensas no ar): N95/PFF2 antes de entrar e retirada após sair; ex.: tuberculose, varicela.",
    "Transporte só se necessário; paciente com precaução respiratória usa máscara cirúrgica.",
    "Coorte = agrupar pacientes com o mesmo microrganismo quando faltam quartos privativos.",
  ],
  map: {
    title: "Padrão + específicas",
    spec: {
      layout: "hub",
      center: "Precaução padrão para todos",
      blocks: [
        { title: "Contato", tone: "amber", icon: "🧤", items: ["Luvas + avental", "Quarto privativo ou coorte", "Equipamento exclusivo"] },
        { title: "Gotículas", tone: "blue", icon: "💧", items: ["> 5 µm, até 1 m", "Máscara cirúrgica", "Rubéola, caxumba, coqueluche"] },
        { title: "Aerossóis", tone: "violet", icon: "🌫️", items: ["< 5 µm, suspensas no ar", "N95/PFF2", "Tuberculose, varicela"] },
        { title: "Padrão (sempre)", tone: "green", icon: "🛡️", items: ["Higiene das mãos", "EPI conforme o risco", "Perfurocortantes sem reencape"] },
      ],
      footnote: "As específicas nunca substituem a padrão: elas se somam a ela.",
    },
  },
  sections: [
    {
      id: "visao-geral",
      kind: "visao",
      title: "A lógica: barrar a transmissão",
      lead: "Saber POR ONDE o microrganismo passa diz QUAL precaução usar.",
      source: 0,
      blocks: [
        {
          type: "text",
          text: "Precauções são ações para ==interromper os mecanismos de transmissão== e prevenir IRAS. Existem duas camadas: a ==precaução padrão==, para todo paciente, e as ==específicas== (contato, gotículas, aerossóis), que se somam conforme a via de transmissão.",
        },
        {
          type: "cards",
          items: [
            { title: "Cadeia de transmissão", text: "Três elementos: ==fonte/reservatório==, ==hospedeiro suscetível== com porta de entrada e ==modo de transmissão==. Quebrar um elo interrompe a cadeia.", icon: "🔗", tone: "slate" },
            { title: "Todo paciente é potencial portador", text: "Por isso a padrão vale ==independentemente do diagnóstico==.", icon: "👥", tone: "green" },
            { title: "Combinar quando preciso", text: "Doença com mais de uma via de transmissão → as precauções se ==combinam==.", icon: "➕", tone: "violet" },
          ],
        },
      ],
    },
    {
      id: "conceitos",
      kind: "conceito",
      title: "Conceitos de transmissão",
      source: 0,
      blocks: [
        { type: "definition", term: "Contato direto", text: "Micro-organismo passa ==diretamente de uma pessoa para outra==. Ex.: sangue ou fluido contaminado em contato com mucosa ou pele não íntegra." },
        { type: "definition", term: "Contato indireto", text: "Passa por um ==intermediário==: mãos do profissional, termômetro ou glicosímetro não higienizado entre pacientes, brinquedos compartilhados, endoscópio mal desinfetado." },
        { type: "definition", term: "Coorte", text: "==Agrupar pacientes com o mesmo microrganismo== (ou características clínicas/epidemiológicas comuns) no mesmo espaço, quando faltam quartos privativos." },
      ],
    },
    {
      id: "precaucao-padrao",
      kind: "etapas",
      title: "Precaução padrão, item por item",
      lead: "Vale para todos os pacientes e para o manuseio de artigos com risco de contato com mucosas e fluidos.",
      source: 0,
      blocks: [
        {
          type: "steps",
          items: [
            { title: "Higiene das mãos nos 5 momentos", text: "Água e sabonete ou álcool 70%.", why: "É a medida que interrompe a transmissão cruzada pelas mãos.", who: "equipe" },
            { title: "Luvas quando houver risco", text: "Sangue, secreções, mucosas, itens ou superfícies contaminadas. Calçar ==imediatamente antes== do contato, trocar entre procedimentos, retirar logo após o uso e higienizar as mãos.", why: "Luva usada além do necessário vira veículo de contaminação.", who: "equipe" },
            { title: "Avental limpo (não necessariamente estéril)", text: "Quando houver possibilidade de contaminação da roupa por sangue ou fluidos. Retirar assim que possível e higienizar as mãos.", who: "equipe" },
            { title: "Óculos, máscara e protetor facial", text: "Protegem as ==mucosas de olhos, nariz e boca== em procedimentos com risco de respingo.", who: "equipe" },
            { title: "Perfurocortantes", text: "==Não reencapar==, não dobrar, não retirar agulha da seringa descartável. Descartar em caixa resistente e ==não ultrapassar o limite== de preenchimento.", why: "Reencape e desconexão manual de agulhas também são vedados pela NR 32 e pela RDC 222.", who: "equipe" },
          ],
        },
      ],
    },
    {
      id: "especificas",
      kind: "classificacao",
      title: "As três precauções específicas lado a lado",
      lead: "A tabela que resolve a maior parte das questões.",
      source: 0,
      blocks: [
        {
          type: "compare",
          columns: ["Contato", "Gotículas", "Aerossóis"],
          rows: [
            { label: "Transmissão", cells: ["Contato direto ou indireto; multirresistentes", "Partículas ==> 5 µm==, até ==1 m==; fala, tosse, aspiração", "Partículas ==< 5 µm== que ficam ==suspensas no ar=="] },
            { label: "Exemplos", cells: ["Colonização/infecção por microrganismo multirresistente", "Rubéola, caxumba, coqueluche", "Tuberculose, varicela"] },
            { label: "Proteção", cells: ["==Luvas e avental== (avental antes de entrar, retirar antes de sair)", "==Máscara cirúrgica== para todos que entram no quarto", "==N95/PFF2==: colocar antes de entrar, retirar após sair"] },
            { label: "Quarto", cells: ["Privativo ou coorte; 1 m entre leitos", "Privativo ou coorte; porta fechada; 1 m entre leitos", "Preferencialmente individual ou coorte"] },
            { label: "Transporte", cells: ["Mínimo necessário, mantendo a precaução", "Mínimo; paciente com ==máscara cirúrgica==", "Paciente com ==máscara cirúrgica=="] },
          ],
        },
        {
          type: "callout",
          variant: "atencao",
          title: "Tuberculose resistente",
          text: "Paciente com suspeita de tuberculose resistente ao tratamento ==não pode dividir o quarto com outros pacientes com tuberculose==.",
        },
      ],
    },
    {
      id: "rotina-do-tecnico",
      kind: "tecnico",
      title: "Na rotina do técnico",
      source: 0,
      blocks: [
        {
          type: "checklist",
          title: "Ao assumir um paciente em precaução",
          items: [
            "Conferir a ==sinalização== na porta, no leito e no prontuário",
            "Separar ==equipamentos de uso exclusivo== (estetoscópio, termômetro) no contato",
            "Colocar o EPI ==antes== do contato e retirar logo após, higienizando as mãos",
            "Na precaução de contato, ==retirar luvas e avental antes de deixar o quarto==",
            "Não tocar superfícies do quarto com as mãos enluvadas fora do cuidado",
            "Limitar o transporte; avisar a unidade de destino sobre a precaução",
          ],
        },
        {
          type: "callout",
          variant: "dica",
          title: "Prioridade de quarto individual",
          text: "Pacientes com ==diarreia ou incontinência== têm prioridade para quarto individual, pelo maior risco de contaminar o ambiente.",
        },
      ],
    },
    {
      id: "numeros",
      kind: "numeros",
      title: "Números que caem",
      blocks: [
        {
          type: "numbers",
          items: [
            { value: "5 µm", label: "divisor entre gotícula (maior) e aerossol (menor)" },
            { value: "1 m", label: "alcance das gotículas e distância mínima entre leitos" },
            { value: "95%", label: "eficácia mínima de filtração da N95/PFF2", note: "partículas de até 0,3 µm (NT Anvisa 04/2020)" },
            { value: "3", label: "precauções específicas", note: "contato, gotículas, aerossóis" },
            { value: "3", label: "elos da cadeia de transmissão", note: "fonte, modo de transmissão, hospedeiro" },
          ],
        },
      ],
      source: 1,
    },
    {
      id: "caso",
      kind: "caso",
      title: "Situação-problema",
      source: 0,
      blocks: [
        {
          type: "case",
          title: "Suspeita de tuberculose",
          scenario: "Paciente internado com suspeita de tuberculose pulmonar precisa descer para fazer um exame de imagem.",
          question: "Quais medidas o técnico deve aplicar no quarto e no transporte?",
          answer: "Precaução padrão + precaução para aerossóis: N95/PFF2 para o profissional (antes de entrar, retirada após sair) e máscara cirúrgica no paciente durante o transporte.",
          reasoning: [
            "Tuberculose é exemplo clássico de transmissão por aerossóis.",
            "A máscara do profissional é a N95/PFF2, não a cirúrgica.",
            "O paciente usa máscara cirúrgica (não N95) ao ser transportado.",
            "O transporte deve ser limitado ao necessário e a unidade de destino, avisada.",
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
            { wrong: "A precaução padrão só é usada em pacientes com diagnóstico de doença infecciosa.", right: "É para ==todos os pacientes==, independentemente do diagnóstico.", why: "Todo paciente é considerado potencial portador de doença transmissível pelo sangue e fluidos." },
            { wrong: "Na precaução para gotículas, o profissional usa N95.", right: "Gotículas → ==máscara cirúrgica==. N95 é para aerossóis.", why: "Gotículas são maiores (> 5 µm) e caem até cerca de 1 m; não ficam suspensas." },
            { wrong: "No transporte, o paciente com tuberculose deve usar N95.", right: "O paciente usa ==máscara cirúrgica==; a N95 é do profissional.", why: "A máscara cirúrgica no paciente retém as partículas na fonte." },
            { wrong: "Varicela exige precaução para gotículas.", right: "Varicela → ==aerossóis==.", why: "Os exemplos clássicos de aerossóis são tuberculose e varicela; de gotículas, rubéola, caxumba e coqueluche." },
            { wrong: "As precauções específicas substituem a padrão.", right: "Elas ==se somam== à padrão.", why: "A padrão é a base; a específica acrescenta barreiras conforme a via." },
            { wrong: "Reencapar a agulha com cuidado é aceitável.", right: "==Nunca reencapar==.", why: "O reencape é proibido pelo protocolo de precauções, pela NR 32 (32.2.4.15) e pela RDC 222 (art. 89)." },
            { wrong: "Na precaução de contato, o avental pode ser retirado no corredor.", right: "Avental ==antes de entrar e retirado antes de sair== do quarto.", why: "Sair com o avental leva o microrganismo para fora da área." },
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
            { slug: "higiene-das-maos-cinco-momentos", title: "Higiene das mãos: os 5 momentos", why: "O primeiro item de toda precaução." },
            { slug: "epi-paramentacao-e-desparamentacao", title: "EPI: paramentação e desparamentação", why: "A ordem certa de colocar e tirar cada EPI." },
            { slug: "acidente-com-material-biologico", title: "Acidente com material biológico", why: "O que fazer quando a barreira falha." },
            { slug: "residuos-de-servicos-de-saude-rdc-222", title: "Resíduos de serviços de saúde (RDC 222)", why: "Onde descartar perfurocortantes e EPIs." },
          ],
        },
      ],
    },
  ],
  sources: [at(SRC.precaucoesEbserh, "itens 2, 4 a 6.3"), at(SRC.nt04Anvisa, "seção 'Máscara de proteção respiratória'")],
  questions: [
    mcq({ key: "bio-prec-1", section: "visao-geral", difficulty: "facil",
      stem: "A precaução padrão deve ser adotada:",
      options: ["apenas para pacientes com HIV ou hepatites confirmadas.", "para todos os pacientes, independentemente do diagnóstico.", "somente em unidades de isolamento.", "apenas quando o paciente apresentar febre."], correct: 1,
      explanation: "A precaução padrão vale para o contato com todos os pacientes, independentemente da patologia, porque todo paciente deve ser considerado potencial portador de doença transmissível pelo sangue e fluidos." }),
    mcq({ key: "bio-prec-2", section: "especificas", difficulty: "facil",
      stem: "Para assistir um paciente com suspeita de tuberculose pulmonar, o profissional deve usar:",
      options: ["máscara cirúrgica comum.", "máscara N95/PFF2, colocada antes de entrar no quarto e retirada após sair.", "apenas luvas de procedimento.", "nenhuma máscara, se mantiver 1 metro de distância."], correct: 1,
      explanation: "Tuberculose é transmitida por aerossóis: o profissional usa N95/PFF2, colocada ao entrar e removida só após sair do quarto." }),
    mcq({ key: "bio-prec-3", section: "especificas", difficulty: "media",
      stem: "São exemplos de doenças que exigem precaução para gotículas:",
      options: ["tuberculose e varicela.", "rubéola, caxumba e coqueluche.", "infecções por microrganismos multirresistentes.", "hepatite B e HIV."], correct: 1,
      explanation: "Gotículas: rubéola, caxumba e coqueluche. Tuberculose e varicela são aerossóis; multirresistentes, contato; hepatite B e HIV entram na padrão (sangue e fluidos)." }),
    mcq({ key: "bio-prec-4", section: "especificas", difficulty: "media",
      stem: "Em relação ao tamanho das partículas, é correto afirmar:",
      options: ["gotículas são menores que 5 micra e ficam suspensas no ar.", "gotículas são maiores que 5 micra e atingem até cerca de 1 metro; aerossóis são menores que 5 micra e ficam suspensos.", "aerossóis são maiores que 5 micra e caem rapidamente.", "não há diferença de tamanho entre gotículas e aerossóis."], correct: 1,
      explanation: "Gotículas: > 5 µm, alcançam até cerca de 1 m. Aerossóis: < 5 µm, permanecem suspensos no ar." }),
    mcq({ key: "bio-prec-5", section: "especificas", difficulty: "media",
      stem: "Um paciente com tuberculose precisa ser levado para exame em outro setor. Durante o transporte, o paciente deve usar:",
      options: ["máscara N95/PFF2.", "máscara cirúrgica.", "nenhuma máscara, se o trajeto for curto.", "protetor facial."], correct: 1,
      explanation: "Em precaução respiratória, o paciente usa máscara cirúrgica no transporte; a N95/PFF2 é do profissional." }),
    mcq({ key: "bio-prec-6", section: "rotina-do-tecnico", difficulty: "media",
      stem: "Na precaução de contato, a conduta correta com o avental é:",
      options: ["vesti-lo apenas se o paciente estiver com febre.", "vesti-lo antes de entrar no quarto quando houver contato substancial e retirá-lo antes de deixar o quarto.", "usá-lo durante todo o plantão para atender vários pacientes.", "retirá-lo no posto de enfermagem."], correct: 1,
      explanation: "O avental limpo é vestido antes de entrar quando se prevê contato substancial com o paciente ou o ambiente, e retirado antes de deixar o quarto." }),
    mcq({ key: "bio-prec-7", section: "conceitos", difficulty: "media",
      stem: "Um glicosímetro usado em um paciente e, sem higienização, usado em outro, é exemplo de transmissão por:",
      options: ["aerossóis.", "gotículas.", "contato indireto.", "via vetorial."], correct: 2,
      explanation: "Aparelhos de uso na assistência não higienizados entre pacientes são exemplo de contato indireto, assim como as mãos do profissional." }),
    mcq({ key: "bio-prec-8", section: "precaucao-padrao", difficulty: "facil",
      stem: "Sobre os perfurocortantes na precaução padrão, é correto:",
      options: ["reencapar a agulha usando as duas mãos.", "dobrar a agulha antes do descarte para evitar reutilização.", "não reencapar, não dobrar e descartar em caixa própria sem ultrapassar o limite.", "retirar a agulha da seringa antes do descarte."], correct: 2,
      explanation: "O protocolo proíbe reencapar, dobrar e retirar a agulha da seringa descartável; o descarte é em caixa resistente, respeitando o limite de preenchimento." }),
    mcq({ key: "bio-prec-9", section: "especificas", difficulty: "dificil",
      stem: "Paciente com suspeita de tuberculose resistente ao tratamento, segundo o protocolo de precauções:",
      options: ["pode dividir o quarto com outros pacientes com tuberculose (coorte).", "não pode dividir o quarto com outros pacientes com tuberculose.", "dispensa precaução para aerossóis se estiver em tratamento.", "deve ficar em enfermaria comum com máscara cirúrgica."], correct: 1,
      explanation: "A coorte é admitida para o mesmo microrganismo, mas o protocolo veda que paciente com suspeita de tuberculose resistente divida o quarto com outros pacientes com tuberculose." }),
  ],
  status: "published",
  standard: "v2",
  lastReviewedAt: REVIEWED_V2,
  reviewNotes: V2_REVIEW_NOTE,
};
