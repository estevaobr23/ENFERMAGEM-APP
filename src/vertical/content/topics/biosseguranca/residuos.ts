import type { TopicSeed } from "@/core/content/types";
import { mcq } from "../../helpers";
import { REVIEWED_V2, SRC, V2_REVIEW_NOTE, at } from "../../sources";

/* Fonte única: RDC Anvisa nº 222/2018, lida no original (arts. 3º, 13 a 22, 86 a 89 e Anexos I e II). */

export const RESIDUOS: TopicSeed = {
  slug: "residuos-de-servicos-de-saude-rdc-222",
  title: "Resíduos de serviços de saúde (RDC 222)",
  description: "Os grupos A a E com exemplos, saco vermelho × branco leitoso, limites de 2/3 e 3/4, símbolos e perfurocortantes.",
  summary:
    "A RDC Anvisa nº 222/2018 regulamenta o gerenciamento dos resíduos de serviços de saúde (RSS), que são classificados em cinco grupos no momento e local da geração. Grupo A: possível presença de agentes biológicos com risco de infecção (subgrupos A1 a A5). Grupo B: produtos químicos com risco à saúde ou ao ambiente, como produtos farmacêuticos, saneantes e reveladores. Grupo C: rejeitos radioativos. Grupo D: resíduos sem risco biológico, químico ou radiológico, equiparados aos domiciliares — fralda, papel sanitário, resto alimentar, equipo de soro, luvas sem contato com sangue ou fluidos. Grupo E: perfurocortantes ou escarificantes, como agulhas, escalpes, ampolas de vidro, lâminas de bisturi e lancetas. Os sacos respeitam o limite de 2/3 da capacidade, sem esvaziamento ou reaproveitamento; os do grupo A são trocados ao atingir 2/3 ou a cada 48 horas (24 horas se de fácil putrefação). O grupo A que exige tratamento vai em saco vermelho; o que não exige, e os rejeitos já tratados, em saco branco leitoso. Os perfurocortantes vão em recipiente rígido, com tampa, resistente à punctura, ruptura e vazamento, substituído ao atingir 3/4 da capacidade; são proibidos o esvaziamento manual, o reaproveitamento, o reencape e a desconexão manual de agulhas. A identificação usa o símbolo de risco biológico para os grupos A e E, o símbolo do risco químico para o B e o trifólio da radiação para o C.",
  keyPoints: [
    "A = biológico · B = químico · C = radioativo · D = comum · E = perfurocortante.",
    "Sacos: no máximo 2/3 da capacidade; proibido esvaziar ou reaproveitar.",
    "Grupo A: trocar a 2/3 ou a cada 48 h; de fácil putrefação, a cada 24 h.",
    "Saco vermelho: grupo A que precisa de tratamento. Branco leitoso: grupo A sem tratamento obrigatório e rejeitos tratados.",
    "Perfurocortante: recipiente rígido com tampa, trocado a 3/4 da capacidade; proibido esvaziar ou reaproveitar.",
    "Proibidos reencape e desconexão manual de agulhas; separar seringa e agulha só com dispositivo de segurança.",
    "Grupo D: fralda, papel sanitário, resto alimentar, equipo de soro, luvas sem sangue ou fluidos.",
    "Identificação: A e E com símbolo de risco biológico; C com trifólio magenta em fundo amarelo; sacos do D não precisam de identificação.",
  ],
  map: {
    title: "Os 5 grupos",
    spec: {
      layout: "hub",
      center: "RDC 222/2018 — classificar na geração",
      blocks: [
        { title: "A · Biológico", tone: "rose", icon: "🦠", items: ["Possível agente biológico", "Saco vermelho ou branco leitoso", "Trocar a 2/3 ou 48 h"] },
        { title: "B · Químico", tone: "orange", icon: "🧪", items: ["Farmacêuticos, saneantes", "Reveladores e fixadores"] },
        { title: "C · Radioativo", tone: "violet", icon: "☢️", items: ["Rejeito radioativo", "Trifólio magenta, fundo amarelo"] },
        { title: "D · Comum", tone: "slate", icon: "🗑️", items: ["Equiparado ao domiciliar", "Saco sem identificação"] },
        { title: "E · Perfurocortante", tone: "amber", icon: "💉", items: ["Recipiente rígido com tampa", "Trocar a 3/4"] },
      ],
    },
  },
  sections: [
    {
      id: "visao-geral",
      kind: "visao",
      title: "Classificar na hora certa",
      source: 0,
      blocks: [
        {
          type: "text",
          text: "Todo resíduo é classificado ==no momento e no local da geração==, por quem o gerou. O técnico decide, na beira do leito, se a gaze vai para o saco do grupo A, se o equipo vai para o D e se a agulha vai para a caixa do E. Errar o grupo é o que a banca cobra.",
        },
        {
          type: "callout",
          variant: "lei",
          title: "PGRSS",
          text: "Todo serviço gerador deve ter o ==Plano de Gerenciamento dos Resíduos de Serviços de Saúde==, que descreve as ações de manejo, da geração à disposição final.",
        },
      ],
    },
    {
      id: "grupos",
      kind: "classificacao",
      title: "Os cinco grupos, com exemplos",
      source: 0,
      blocks: [
        {
          type: "compare",
          columns: ["O que é", "Exemplos que caem"],
          rows: [
            { label: "Grupo A", cells: ["Possível presença de ==agentes biológicos== com risco de infecção", "Bolsa de sangue rejeitada ou vencida; recipientes com ==sangue ou líquidos corpóreos na forma livre==; peças anatômicas; ==placenta== (A4); kits de linhas arteriais e endovenosas"] },
            { label: "Grupo B", cells: ["Produtos ==químicos== com risco à saúde ou ao ambiente", "Produtos farmacêuticos; saneantes e desinfetantes; resíduos com metais pesados; reveladores e fixadores"] },
            { label: "Grupo C", cells: ["Rejeitos ==radioativos==", "Material com radionuclídeo acima do limite da CNEN (medicina nuclear, radioterapia)"] },
            { label: "Grupo D", cells: ["Sem risco biológico, químico ou radiológico; ==equiparado ao domiciliar==", "Fralda, papel sanitário, absorvente; gorro e máscara descartáveis; resto alimentar; ==equipo de soro==; luvas ==sem== contato com sangue ou fluidos; abaixador de língua"] },
            { label: "Grupo E", cells: ["==Perfurocortantes== ou escarificantes", "Agulhas, escalpes, ==ampolas de vidro==, lâminas de bisturi e de barbear, lancetas, vidraria quebrada de laboratório"] },
          ],
        },
        {
          type: "cards",
          items: [
            { title: "A3 — peças anatômicas", text: "Membros humanos; produto de fecundação sem sinais vitais com ==menos de 500 g, ou menos de 25 cm, ou menos de 20 semanas==, sem valor científico ou legal e sem requisição da família.", icon: "📋", tone: "rose" },
            { title: "A5 — príons", text: "Órgãos, tecidos e fluidos de alta infectividade para príons e materiais que tiveram contato com eles.", icon: "⚠️", tone: "violet" },
          ],
        },
      ],
    },
    {
      id: "acondicionamento",
      kind: "etapas",
      title: "Acondicionamento: sacos, coletores e prazos",
      source: 0,
      blocks: [
        {
          type: "steps",
          items: [
            { title: "Respeitar 2/3 da capacidade do saco", text: "E o limite de peso; ==proibido esvaziar ou reaproveitar== o saco.", why: "Saco cheio demais rompe e não fecha com segurança.", who: "equipe" },
            { title: "Grupo A: trocar a 2/3 ou a cada 48 horas", text: "Independentemente do volume; ==24 horas== se for de fácil putrefação.", who: "equipe" },
            { title: "Escolher a cor do saco do grupo A", text: "==Vermelho== quando houver obrigação de tratamento; ==branco leitoso== para o que não precisa de tratamento obrigatório e para os rejeitos já tratados." },
            { title: "Coletor do saco", text: "Liso, lavável, resistente a punctura, ruptura, vazamento e tombamento, com ==tampa de abertura sem contato manual== e cantos arredondados." },
            { title: "Líquidos e químicos", text: "Recipientes compatíveis, rígidos e estanques, com tampa e identificação." },
          ],
        },
      ],
    },
    {
      id: "perfurocortantes",
      kind: "tecnico",
      title: "Perfurocortantes na prática do técnico",
      source: 0,
      blocks: [
        {
          type: "dodont",
          do: [
            "Descartar em recipiente identificado, rígido, com tampa, resistente à punctura, ruptura e vazamento",
            "Trocar o recipiente a 3/4 da capacidade (ou conforme demanda ou fabricante)",
            "Identificar todos os riscos presentes se o perfurocortante também tiver risco químico ou radioativo",
            "Separar seringa e agulha apenas com dispositivo de segurança",
          ],
          dont: [
            "Encher a caixa além de 3/4",
            "Esvaziar a caixa manualmente ou reaproveitá-la",
            "Reencapar a agulha",
            "Desconectar a agulha manualmente",
          ],
        },
        {
          type: "callout",
          variant: "dica",
          title: "Seringa com agulha sem risco químico, biológico ou radiológico",
          text: "Não precisa de tratamento prévio antes da disposição final ambientalmente adequada (art. 89).",
        },
      ],
    },
    {
      id: "identificacao",
      kind: "cuidados",
      title: "Símbolos e identificação",
      source: 0,
      blocks: [
        {
          type: "compare",
          columns: ["Símbolo / rótulo", "Inscrição"],
          rows: [
            { label: "Grupo A", cells: ["==Risco biológico==, fundo branco, desenho e contornos pretos", "==RESÍDUO INFECTANTE=="] },
            { label: "Grupo B", cells: ["Símbolo de ==risco químico== conforme a periculosidade (pode usar GHS)", "Frase de risco associada"] },
            { label: "Grupo C", cells: ["==Trifólio== magenta ou púrpura em ==fundo amarelo==", "MATERIAL RADIOATIVO, REJEITO RADIOATIVO ou RADIOATIVO"] },
            { label: "Grupo D", cells: ["Conforme o órgão de limpeza urbana", "==Sacos não precisam ser identificados=="] },
            { label: "Grupo E", cells: ["==Risco biológico==, fundo branco, desenho e contorno pretos", "==RESÍDUO PERFUROCORTANTE=="] },
          ],
        },
        {
          type: "callout",
          variant: "atencao",
          title: "Impressa, não adesivada",
          text: "A identificação dos sacos deve estar ==impressa==; é vedado o uso de adesivo. Ela também vai nos carros de coleta e nos locais de armazenamento.",
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
            { value: "2/3", label: "limite de enchimento dos sacos" },
            { value: "3/4", label: "limite do recipiente de perfurocortante" },
            { value: "48 h", label: "troca máxima do saco do grupo A", note: "independentemente do volume" },
            { value: "24 h", label: "troca do saco do grupo A de fácil putrefação" },
            { value: "5", label: "grupos de resíduos", note: "A, B, C, D, E" },
            { value: "500 g · 25 cm · 20 sem", label: "limites do produto de fecundação no subgrupo A3" },
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
          title: "Fim de uma punção venosa",
          scenario: "Após instalar o soro, o técnico tem nas mãos: a agulha da punção, a ampola de vidro do medicamento, o algodão usado na antissepsia, a embalagem do equipo e as luvas, que não tiveram contato com sangue.",
          question: "Para onde vai cada item?",
          answer: "Agulha e ampola de vidro → grupo E (recipiente rígido). Algodão da antissepsia, embalagem e luvas sem sangue → grupo D.",
          reasoning: [
            "Agulhas e ampolas de vidro estão na lista do grupo E.",
            "O Anexo I põe no grupo D o 'material utilizado em antissepsia e hemostasia de venóclises'.",
            "Luvas de procedimento que não entraram em contato com sangue ou líquidos corpóreos são grupo D.",
            "A agulha não é desconectada nem reencapada antes do descarte.",
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
            { wrong: "A caixa de perfurocortante deve ser trocada quando estiver cheia.", right: "Trocar ao atingir ==3/4== da capacidade.", why: "Encher até o topo aumenta o risco de acidente no fechamento." },
            { wrong: "Os sacos de resíduo podem ser preenchidos até a boca.", right: "Limite de ==2/3== da capacidade.", why: "2/3 é para sacos; 3/4 é para a caixa de perfurocortante — a banca troca os dois." },
            { wrong: "Ampola de vidro quebrada vai para o grupo D.", right: "Ampola de vidro é ==grupo E==.", why: "É escarificante: está na lista expressa do grupo E." },
            { wrong: "Equipo de soro é sempre resíduo infectante (grupo A).", right: "Equipo de soro está listado no ==grupo D==.", why: "O Anexo I inclui o equipo de soro entre os resíduos equiparados aos domiciliares." },
            { wrong: "O saco branco leitoso é para resíduos que precisam de tratamento.", right: "Precisa de tratamento → ==vermelho==. Sem tratamento obrigatório ou já tratado → branco leitoso.", why: "Arts. 15 e 16 da RDC 222." },
            { wrong: "O saco do grupo A pode ficar até 72 horas se não estiver cheio.", right: "Trocar a 2/3 ou ==a cada 48 horas==.", why: "Art. 14: independentemente do volume; 24 h se de fácil putrefação." },
            { wrong: "A identificação do saco pode ser feita com etiqueta adesiva.", right: "Deve estar ==impressa==; é vedado adesivo.", why: "Art. 22, § 3º." },
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
            { slug: "nr-32-seguranca-do-trabalhador", title: "NR 32: segurança do trabalhador da saúde", why: "Também veda reencape e define quem descarta o perfurocortante." },
            { slug: "acidente-com-material-biologico", title: "Acidente com material biológico", why: "O que fazer quando o descarte falha." },
            { slug: "precaucoes-padrao-e-especificas", title: "Precauções padrão e específicas", why: "O descarte correto é parte da precaução padrão." },
          ],
        },
      ],
    },
  ],
  sources: [at(SRC.rdc222, "arts. 3º, 13 a 22, 86 a 89; Anexos I e II")],
  questions: [
    mcq({ key: "bio-rss-1", section: "grupos", difficulty: "facil",
      stem: "Segundo a RDC nº 222/2018, agulhas, escalpes, ampolas de vidro e lâminas de bisturi pertencem ao grupo:",
      options: ["A.", "B.", "D.", "E."], correct: 3,
      explanation: "O grupo E reúne os perfurocortantes ou escarificantes: agulhas, escalpes, ampolas de vidro, lâminas de bisturi, lancetas e outros." }),
    mcq({ key: "bio-rss-2", section: "perfurocortantes", difficulty: "facil",
      stem: "O recipiente de descarte de perfurocortantes deve ser substituído quando o nível de preenchimento atingir:",
      options: ["1/2 da capacidade.", "2/3 da capacidade.", "3/4 da capacidade.", "a capacidade total."], correct: 2,
      explanation: "Art. 87: substituir conforme a demanda ou quando atingir 3/4 da capacidade, ou conforme o fabricante; proibidos esvaziamento manual e reaproveitamento." }),
    mcq({ key: "bio-rss-3", section: "acondicionamento", difficulty: "media",
      stem: "Os sacos para acondicionamento de resíduos do grupo A devem ser substituídos:",
      options: ["somente quando estiverem cheios.", "ao atingir 2/3 da capacidade ou a cada 48 horas, independentemente do volume.", "uma vez por semana.", "a cada 72 horas."], correct: 1,
      explanation: "Art. 14: a 2/3 da capacidade ou a cada 48 horas; os de fácil putrefação, no máximo a cada 24 horas." }),
    mcq({ key: "bio-rss-4", section: "grupos", difficulty: "media",
      stem: "Fraldas, papel de uso sanitário, resto alimentar de paciente e equipo de soro são classificados pela RDC 222 no grupo:",
      options: ["A.", "B.", "D.", "E."], correct: 2,
      explanation: "O grupo D reúne resíduos sem risco biológico, químico ou radiológico, equiparados aos domiciliares, e o Anexo I lista esses itens." }),
    mcq({ key: "bio-rss-5", section: "acondicionamento", difficulty: "media",
      stem: "Os resíduos do grupo A que têm obrigação de tratamento devem ser acondicionados em saco:",
      options: ["preto.", "azul.", "vermelho.", "verde."], correct: 2,
      explanation: "Art. 16: quando houver obrigação de tratamento, saco vermelho. O branco leitoso é para o que não precisa de tratamento obrigatório e para os rejeitos tratados." }),
    mcq({ key: "bio-rss-6", section: "identificacao", difficulty: "dificil",
      stem: "O grupo C (rejeitos radioativos) é identificado pelo:",
      options: ["símbolo de risco biológico em fundo branco.", "trifólio de cor magenta ou púrpura em rótulo de fundo amarelo.", "símbolo de reciclagem.", "rótulo vermelho com a palavra INFECTANTE."], correct: 1,
      explanation: "Anexo II: trifólio magenta ou púrpura em fundo amarelo, com a expressão MATERIAL RADIOATIVO, REJEITO RADIOATIVO ou RADIOATIVO." }),
    mcq({ key: "bio-rss-7", section: "acondicionamento", difficulty: "media",
      stem: "Em relação aos sacos de acondicionamento de resíduos, a RDC 222 estabelece que:",
      options: ["podem ser esvaziados e reaproveitados se estiverem íntegros.", "devem respeitar o limite de 2/3 da capacidade e é proibido esvaziá-los ou reaproveitá-los.", "devem ser enchidos até a capacidade máxima para economia.", "dispensam coletor com tampa."], correct: 1,
      explanation: "Art. 13: respeitar limites de peso e 2/3 da capacidade; proibido esvaziar ou reaproveitar sacos." }),
    mcq({ key: "bio-rss-8", section: "perfurocortantes", difficulty: "media",
      stem: "Sobre o descarte do conjunto seringa e agulha, a RDC 222 permite:",
      options: ["reencapar a agulha antes do descarte.", "desconectar a agulha manualmente.", "separar seringa e agulha com auxílio de dispositivo de segurança.", "descartar a agulha no saco do grupo D."], correct: 2,
      explanation: "Art. 89, parágrafo único: é permitida a separação com dispositivo de segurança; vedados a desconexão e o reencape manual." }),
    mcq({ key: "bio-rss-9", section: "identificacao", difficulty: "dificil",
      stem: "Sobre a identificação dos sacos de resíduos, é correto afirmar:",
      options: ["os sacos do grupo D precisam do símbolo de risco biológico.", "a identificação dos sacos deve estar impressa, sendo vedado o uso de adesivo.", "a identificação só é exigida no abrigo externo.", "o grupo E dispensa identificação."], correct: 1,
      explanation: "Art. 22: identificação nos carros, locais de armazenamento e sacos; impressa, vedado adesivo. Os sacos do grupo D não precisam ser identificados." }),
  ],
  status: "published",
  standard: "v2",
  lastReviewedAt: REVIEWED_V2,
  reviewNotes: V2_REVIEW_NOTE,
};
