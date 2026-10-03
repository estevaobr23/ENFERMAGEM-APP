import { doseVolume, dripRate, formatDate, naegele } from "@/core/calc";
import type { TopicSection } from "@/core/content/types";

/*
 * Seções dos temas das áreas 5–8. Conferidas em 2026-10-03 contra o texto
 * original (CAB 32, Guia Alimentar < 2 anos, Manual de Triagem Neonatal,
 * Lei 14.154, Lei 7.498, Decreto 94.406, Resolução Cofen 564, Coren-SP).
 * Exemplos numéricos: valores FICTÍCIOS de estudo, resolvidos por src/core/calc.
 */

const br = (n: number) => String(n).replace(".", ",");

// exemplos do próprio CAB 32 (item 5.6) — o motor confere o resultado
const CAB_A = naegele({ day: 13, month: 9, year: 2004 });
const CAB_B = naegele({ day: 27, month: 1, year: 2004 });

// gotejamento e regra de três: exemplos de estudo
const DRIP_1 = dripRate(1000, 8, "gotas");
const DRIP_2 = dripRate(250, 5, "microgotas");
const DOSE_CAB = doseVolume(120, 240, 10); // exemplo do Coren-SP: aminofilina
const DOSE_DEC = doseVolume(8, 10, 2.5); // exemplo do Coren-SP: 4 mg/mL × 2,5 mL = 10 mg

export const SECTIONS_2: Record<string, TopicSection[]> = {
  /* ─────────────────────────── SAÚDE DA MULHER ─────────────────────────── */
  "calculo-da-idade-gestacional": [
    {
      id: "o-que-e-dum",
      kind: "conceito",
      title: "Tudo começa na DUM",
      source: 0,
      blocks: [
        {
          type: "definition",
          term: "DUM — data da última menstruação",
          text: "O ==primeiro dia de sangramento== do último ciclo menstrual referido pela mulher.",
          note: "O método pela DUM é o de escolha para mulheres com ciclos regulares e sem uso de anticoncepcional hormonal.",
        },
      ],
    },
    {
      id: "qual-metodo-usar",
      kind: "classificacao",
      title: "Qual método usar: depende do que ela sabe",
      source: 0,
      blocks: [
        {
          type: "compare",
          columns: ["Situação", "Como calcular"],
          rows: [
            { label: "I", cells: ["DUM ==conhecida e certa==", "Calendário: somar os dias entre a DUM e a consulta e ==dividir por 7== (semanas). Ou disco gestograma."] },
            { label: "II", cells: ["DUM desconhecida, mas sabe ==o período do mês==", "Início = dia ==5== · meio = dia ==15== · fim = dia ==25==. Depois, usar calendário ou disco."] },
            { label: "III", cells: ["Não sabe data ==nem período==", "Aproximação pela ==altura uterina== e toque vaginal, mais a data de início dos movimentos fetais."] },
          ],
        },
        {
          type: "callout",
          variant: "dica",
          title: "Movimentos fetais",
          text: "Habitualmente começam entre ==18 e 20 semanas==.",
        },
      ],
    },
    {
      id: "altura-uterina",
      kind: "etapas",
      title: "Altura do útero semana a semana",
      lead: "Para quando não há data: o tamanho do útero conta a história.",
      source: 0,
      blocks: [
        {
          type: "timeline",
          items: [
            { when: "Até 6 sem", what: "Não há alteração do tamanho uterino." },
            { when: "8 sem", what: "Útero = dobro do tamanho normal." },
            { when: "10 sem", what: "Útero = três vezes o tamanho habitual." },
            { when: "12 sem", what: "Enche a pelve: ==palpável na sínfise púbica==." },
            { when: "16 sem", what: "Fundo ==entre a sínfise púbica e a cicatriz umbilical==." },
            { when: "20 sem", what: "Fundo ==na altura da cicatriz umbilical==." },
            { when: "Após 20 sem", what: "Relação direta entre semanas e altura uterina — menos fiel a partir de 30 semanas." },
          ],
        },
        {
          type: "callout",
          variant: "atencao",
          title: "Ainda em dúvida?",
          text: "Se não for possível determinar clinicamente, solicitar ==ultrassonografia obstétrica o mais precocemente possível==.",
        },
      ],
    },
    {
      id: "exercicio-calendario",
      kind: "pratica",
      title: "Exercício: pelo calendário",
      source: 0,
      blocks: [
        {
          type: "example",
          title: "Exercício de estudo",
          given: ["DUM: 1º de março", "Consulta: 31 de maio (mesmo ano)"],
          steps: ["Março: 31 − 1 = 30 dias", "Abril: 30 dias", "Maio: 31 dias", "Total: 30 + 30 + 31 = 91 dias", "91 ÷ 7 = 13"],
          answer: "13 semanas de idade gestacional",
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
            { wrong: "DUM é o último dia da última menstruação.", right: "É o ==primeiro dia== de sangramento do último ciclo." },
            { wrong: "'Meio do mês' = considerar o dia 10.", right: "Início/meio/fim = dias ==5, 15 e 25==." },
            { wrong: "Na 16ª semana, o fundo uterino está na cicatriz umbilical.", right: "Cicatriz umbilical = ==20ª semana==. 16ª = entre a sínfise e a cicatriz." },
          ],
        },
      ],
    },
  ],

  "regra-de-naegele-data-provavel-do-parto": [
    {
      id: "base-do-calculo",
      kind: "conceito",
      title: "A base: 280 dias",
      source: 0,
      blocks: [
        {
          type: "definition",
          term: "Data provável do parto (DPP)",
          text: "Calculada pela duração média da gestação normal: ==280 dias ou 40 semanas a partir da DUM==, com calendário ou disco gestograma — ou pela Regra de Näegele.",
        },
      ],
    },
    {
      id: "passo-a-passo",
      kind: "etapas",
      title: "Regra de Näegele, passo a passo",
      source: 0,
      blocks: [
        {
          type: "steps",
          items: [
            { title: "Dia: some 7", text: "Primeiro dia da DUM ==+ 7==." },
            { title: "Mês: tire 3 (ou some 9)", text: "Abril a dezembro: ==− 3== (o parto cai no ano seguinte). Janeiro a março: ==+ 9== (mesmo ano)." },
            { title: "Passou do mês? Ajuste", text: "Se os dias ultrapassarem o total do mês da DUM, os excedentes vão para o mês seguinte e soma-se ==+ 1 ao mês== no final." },
          ],
        },
        {
          type: "formula",
          label: "Em uma linha",
          expression: "DPP = (dia + 7) / (mês − 3 ou mês + 9)",
          legend: ["Ajuste +1 no mês quando o dia passar do total de dias do mês da DUM"],
        },
      ],
    },
    {
      id: "exemplos-do-caderno",
      kind: "pratica",
      title: "Exemplos do Caderno 32",
      source: 0,
      blocks: [
        {
          type: "example",
          title: "DUM no fim do ano",
          given: ["DUM: 13/09"],
          steps: CAB_A.steps,
          answer: `DPP: ${formatDate(CAB_A).slice(0, 5)}`,
        },
        {
          type: "example",
          title: "DUM em janeiro, com ajuste de mês",
          given: ["DUM: 27/01"],
          steps: CAB_B.steps,
          answer: `DPP: ${formatDate(CAB_B).slice(0, 5)}`,
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
            { wrong: "Some 7 dias e 3 meses.", right: "Some 7 dias e ==subtraia== 3 meses (ou some 9 se for de janeiro a março)." },
            { wrong: "DUM em maio: DPP no mesmo ano.", right: "Subtraiu 3 meses → o parto cai ==no ano seguinte==." },
            { wrong: "DUM 27/01 → DPP 34/10.", right: "Passou de 31 dias: 34 − 31 = 03 e ==+1 no mês== → 03/11." },
          ],
        },
      ],
    },
  ],

  /* ─────────────────────────── SAÚDE DA CRIANÇA ─────────────────────────── */
  "aleitamento-materno": [
    {
      id: "recomendacao",
      kind: "conceito",
      title: "A recomendação",
      source: 0,
      blocks: [
        {
          type: "timeline",
          items: [
            { when: "1ª hora de vida", what: "Começar a amamentar. Contato ==pele a pele== com a mãe por pelo menos 1 hora, independentemente do tipo de parto." },
            { when: "0 a 6 meses", what: "Amamentação ==exclusiva==: só leite materno." },
            { when: "6 meses a 2 anos ou mais", what: "Leite materno + outros alimentos. ==Não há tempo máximo== estabelecido para parar." },
          ],
        },
        {
          type: "definition",
          term: "Amamentação exclusiva",
          text: "A criança recebe ==somente leite materno==. Nenhum outro alimento é necessário: nem líquidos (água, água de coco, chá, suco, outros leites), nem papinha ou mingau.",
        },
      ],
    },
    {
      id: "por-que-amamentar",
      kind: "classificacao",
      title: "Por que amamentar",
      source: 0,
      blocks: [
        {
          type: "cards",
          items: [
            { title: "Criança", text: "Protege contra ==diarreia, pneumonia e otite==; previne asma, diabetes e obesidade no futuro; exercita boca e face (respiração, mastigação, fala).", icon: "👶", tone: "amber" },
            { title: "Mulher", text: "Reduz chance de ==câncer de mama, ovário e útero== e diabetes tipo 2; exclusiva até 6 meses pode aumentar o intervalo entre partos.", icon: "🤱", tone: "rose" },
            { title: "Vínculo e família", text: "Aproxima mãe e filho; é mais barato que outros leites e não exige preparo.", icon: "💛", tone: "green" },
            { title: "Colostro", text: "O leite dos primeiros dias: ==mais proteínas, rico em anticorpos==. A 'descida do leite' (apojadura) costuma ocorrer do ==3º ao 5º dia== pós-parto.", icon: "🥛", tone: "blue" },
          ],
        },
      ],
    },
    {
      id: "como-amamentar",
      kind: "cuidados",
      title: "Como orientar a mamada",
      source: 0,
      blocks: [
        {
          type: "checklist",
          title: "Sinais de pega adequada",
          items: ["Boca bem aberta", "Lábios virados para fora", "Queixo encostado na mama", "Aréola mais visível acima do que abaixo da boca"],
        },
        {
          type: "dodont",
          do: [
            "Livre demanda: sempre que a criança quiser, dia e noite (8 a 12 vezes ao dia ou mais nos primeiros meses)",
            "Deixar esvaziar bem uma mama antes de passar para a outra",
            "Começar a próxima mamada pela mama oferecida por último",
            "Retirar um pouco de leite se a mama estiver muito cheia e dura",
          ],
          dont: [
            "Oferecer água ou chá em dias quentes no período exclusivo",
            "Esperar a criança chorar para oferecer o peito",
            "Oferecer mamadeira (confunde a sucção e é fonte de contaminação)",
            "Oferecer chupeta sem refletir: a criança tende a mamar menos tempo",
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
            { wrong: "Em regiões quentes, o bebê em aleitamento exclusivo precisa de água.", right: "Não precisa: o leite materno tem ==toda a água necessária==; ele pode querer mamar mais vezes." },
            { wrong: "A amamentação deve terminar aos 2 anos.", right: "==2 anos ou mais==; não há tempo máximo estabelecido." },
            { wrong: "Chá antes dos 6 meses é inofensivo.", right: "Outros alimentos antes dos 6 meses podem ==aumentar o risco de adoecer== e atrapalhar a absorção de ferro e zinco." },
          ],
        },
      ],
    },
  ],

  "teste-do-pezinho-triagem-neonatal": [
    {
      id: "quando-coletar",
      kind: "conceito",
      title: "Quando coletar",
      source: 0,
      blocks: [
        {
          type: "timeline",
          items: [
            { when: "3º ao 5º dia de vida", what: "Período ==ideal== para a 1ª amostra." },
            { when: "Após o 28º dia", what: "Coleta de ==exceção==: fora do período neonatal (ex.: dificuldade de acesso, questões culturais, negligência)." },
          ],
        },
      ],
    },
    {
      id: "tecnica-de-coleta",
      kind: "etapas",
      title: "Técnica de coleta, passo a passo",
      source: 0,
      blocks: [
        {
          type: "steps",
          items: [
            { title: "Posicionar", text: "Acompanhante em pé, bebê com a cabeça no ombro: ==calcanhar abaixo do nível do coração==." },
            { title: "Assepsia", text: "Algodão ou gaze com ==álcool 70%==; massagear para ativar a circulação; ==aguardar a secagem completa==." },
            { title: "Puncionar", text: "Numa das ==laterais da região plantar do calcanhar== (menor chance de atingir o osso)." },
            { title: "Descartar a 1ª gota", text: "Retirar com algodão seco ou gaze: pode conter fluidos teciduais que interferem nos testes." },
            { title: "Preencher os círculos", text: "Encostar o verso do papel-filtro na gota, com movimentos circulares, até preencher ==todo o círculo==. Nunca voltar a um círculo já coletado." },
            { title: "Secar", text: "Temperatura ambiente, em ==posição horizontal==, sem contato com a área com sangue." },
          ],
        },
        {
          type: "dodont",
          do: ["Álcool 70% e esperar secar", "Deixar o sangue fluir naturalmente", "Secar na horizontal, em temperatura ambiente"],
          dont: ["Álcool iodado ou antisséptico colorido (interferem nos resultados)", "Tocar com os dedos a área dos círculos", "Secar ao sol, em estufa ou com ventilação forçada", "Empilhar amostras"],
        },
      ],
    },
    {
      id: "doencas-triadas",
      kind: "classificacao",
      title: "O que o teste rastreia",
      source: 0,
      blocks: [
        {
          type: "checklist",
          title: "Escopo descrito no manual de 2016 (6 doenças)",
          items: ["Fenilcetonúria", "Hipotireoidismo congênito", "Doença falciforme e outras hemoglobinopatias", "Fibrose cística", "Hiperplasia adrenal congênita", "Deficiência de biotinidase"],
        },
      ],
    },
    {
      id: "lei-14154",
      kind: "atencao",
      title: "Ampliação pela Lei 14.154/2021",
      lead: "A lei alterou o ECA e prevê ampliação escalonada no SUS, em 5 etapas.",
      source: 1,
      blocks: [
        {
          type: "timeline",
          items: [
            { when: "Etapa 1", what: "Fenilcetonúria e outras hiperfenilalaninemias; hipotireoidismo congênito; doença falciforme e outras hemoglobinopatias; fibrose cística; hiperplasia adrenal congênita; deficiência de biotinidase; ==toxoplasmose congênita==." },
            { when: "Etapa 2", what: "Galactosemias; aminoacidopatias; distúrbios do ciclo da ureia; distúrbios da betaoxidação dos ácidos graxos." },
            { when: "Etapa 3", what: "Doenças lisossômicas." },
            { when: "Etapa 4", what: "Imunodeficiências primárias." },
            { when: "Etapa 5", what: "==Atrofia muscular espinhal==." },
          ],
        },
        {
          type: "callout",
          variant: "dica",
          title: "Orientação no pré-natal",
          text: "No pré-natal e no puerpério imediato, os profissionais devem informar a gestante sobre a importância do teste e as diferenças entre as modalidades do SUS e da rede privada.",
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
            { wrong: "O ideal é coletar nas primeiras 24 horas de vida.", right: "Ideal: entre o ==3º e o 5º dia==." },
            { wrong: "Assepsia com álcool iodado garante amostra estéril.", right: "Álcool iodado/colorido ==interferem nos resultados==: usar álcool 70%." },
            { wrong: "Puncionar o centro do calcanhar.", right: "Uma das ==laterais da região plantar== do calcanhar." },
            { wrong: "Toxoplasmose congênita entra só na última etapa.", right: "Está na ==etapa 1== da Lei 14.154/2021." },
          ],
        },
      ],
    },
  ],

  /* ─────────────────────────── ÉTICA ─────────────────────────── */


  /* ─────────────────────────── CÁLCULOS ─────────────────────────── */

};
