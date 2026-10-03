import type { TopicSeed } from "@/core/content/types";
import { mcq } from "../../helpers";
import { REVIEWED_V2, SRC, V2_REVIEW_NOTE, at } from "../../sources";

/* Fonte única: Anexo 02 do PNSP — Protocolo para prevenção de úlcera por pressão (itens 4, 5, 7.1, 7.3 e 7.4). */

export const UPP: TopicSeed = {
  slug: "prevencao-de-ulcera-por-pressao",
  title: "Prevenção de úlcera por pressão",
  description: "Estágios, as seis etapas, escala de Braden com as medidas por faixa de risco, cuidados com a pele e posicionamento a 30°.",
  summary:
    "O Protocolo para Prevenção de Úlcera por Pressão (MS/Anvisa/Fiocruz, 2013) afirma que a maioria das UPP pode ser evitada identificando quem está em risco e aplicando a prevenção de forma confiável. O estadiamento descreve a profundidade da lesão: estágio I (eritema não branqueável em pele íntegra), II (perda parcial da espessura da pele), III (perda total da espessura da pele, sem exposição de osso, tendão ou músculo) e IV (exposição de osso, tendão ou músculo), além das inclassificáveis e da suspeita de lesão tissular profunda. São seis etapas essenciais: avaliação na admissão de todos os pacientes, reavaliação diária do risco, inspeção diária da pele, manejo da umidade, otimização da nutrição e hidratação e minimização da pressão. O risco é avaliado pela escala de Braden Q (crianças de 1 a 5 anos) e de Braden (maiores de 5 anos); quanto maior a pontuação, menor o risco, e a avaliação clínica do enfermeiro é soberana. As medidas crescem com o risco: baixo (15 a 18 pontos), moderado (13 e 14, com reposicionamento a 30°), alto (10 a 12) e muito alto (9 ou menos). Entre os cuidados: limpar a pele com água morna e sabão neutro, hidratar sem massagear proeminências ósseas ou áreas hiperemiadas, usar barreiras contra umidade, manter os calcâneos flutuantes, reposicionar a cada 2 horas em semi-Fowler a 30° e lateral a 30°, e evitar cabeceira acima de 30° — exceto na ventilação mecânica, para prevenir pneumonia.",
  keyPoints: [
    "Estágio I: eritema não branqueável (pele íntegra). IV: exposição de osso, tendão ou músculo.",
    "6 etapas: admissão, reavaliação diária, inspeção diária, umidade, nutrição/hidratação, pressão.",
    "Braden Q: 1 a 5 anos. Braden: maiores de 5 anos. Mais pontos = menor risco.",
    "Faixas: baixo 15–18 · moderado 13–14 · alto 10–12 · muito alto ≤ 9.",
    "Avaliação clínica do enfermeiro é soberana, qualquer que seja o escore.",
    "Não massagear proeminências ósseas nem áreas hiperemiadas.",
    "Reposicionar a cada 2 h; semi-Fowler e lateral a 30°; calcâneos flutuantes.",
    "Cabeceira até 30° (exceção: ventilação mecânica, para prevenir PAV).",
  ],
  map: {
    title: "Prevenção de UPP — 6 elementos",
    spec: {
      layout: "flow",
      center: "Identificar o risco → prevenir sempre",
      blocks: [
        { title: "Avaliar", tone: "teal", icon: "🔎", items: ["Na admissão de todos", "Reavaliar o risco todo dia", "Braden (>5 anos) · Braden Q (1–5 anos)"] },
        { title: "Inspecionar", tone: "amber", icon: "👀", items: ["Pele da cabeça aos pés, todo dia", "Sacro, nádegas, calcanhares, tornozelos", "Áreas sob dispositivos"] },
        { title: "Proteger", tone: "green", icon: "🛡️", items: ["Pele seca e hidratada", "Nutrição e hidratação", "Reposicionar a cada 2 h"] },
      ],
      footnote: "Braden: quanto MAIOR a pontuação, MENOR o risco.",
    },
  },
  sections: [
    {
      id: "visao-geral",
      kind: "visao",
      title: "Evitável na maioria dos casos",
      source: 0,
      blocks: [
        {
          type: "text",
          text: "O protocolo afirma que a ==maioria das UPP pode ser evitada==. O caminho é identificar quem está em risco e aplicar a prevenção ==todos os dias==. A prevenção de úlcera por pressão também é ação obrigatória do Plano de Segurança do Paciente (RDC 36).",
        },
        {
          type: "cards",
          items: [
            { title: "Pressão + cisalhamento", text: "Cisalhamento é a deformação que o corpo sofre sob forças cortantes — por isso a cabeceira alta e o arrastar do paciente machucam.", icon: "↔️", tone: "amber" },
            { title: "Onde olhar", text: "Sacro, dorso, nádegas, calcanhares, tornozelos e ==áreas sob dispositivos==.", icon: "📍", tone: "rose" },
          ],
        },
      ],
    },
    {
      id: "conceito-e-estagios",
      kind: "classificacao",
      title: "Estágios: a profundidade da lesão",
      source: 0,
      blocks: [
        {
          type: "steps",
          items: [
            { title: "Estágio I — eritema não branqueável", text: "Pele ==intacta==, rubor que não embranquece, geralmente sobre proeminência óssea. Difícil de ver em pele escura." },
            { title: "Estágio II — perda parcial da espessura", text: "Ferida superficial com leito vermelho-rosa, sem esfacelo; pode ser flictena intacta ou rompida." },
            { title: "Estágio III — perda total da espessura da pele", text: "Tecido subcutâneo pode estar visível; ==osso, tendão e músculo não== estão expostos." },
            { title: "Estágio IV — perda total dos tecidos", text: "==Exposição de osso, tendão ou músculo==; frequentemente cavitada e fistulizada." },
          ],
        },
        {
          type: "cards",
          items: [
            { title: "Inclassificável", text: "Profundidade bloqueada por tecido necrótico ou escara. Escara estável (seca, aderente, intacta) nos calcâneos ==não deve ser removida==.", icon: "❔", tone: "slate" },
            { title: "Suspeita de lesão tissular profunda", text: "Área vermelho-escura ou púrpura em pele intacta, ou flictena com sangue.", icon: "🟣", tone: "violet" },
          ],
        },
      ],
    },
    {
      id: "seis-etapas",
      kind: "etapas",
      title: "As 6 etapas essenciais da prevenção",
      source: 0,
      blocks: [
        {
          type: "steps",
          items: [
            { title: "Avaliar na admissão", text: "==Todos os pacientes==: risco e avaliação da pele.", who: "enfermeiro" },
            { title: "Reavaliar o risco diariamente", text: "Todos os pacientes internados.", who: "enfermeiro" },
            { title: "Inspecionar a pele diariamente", text: "Da cabeça aos pés, com atenção às proeminências e áreas sob dispositivos.", who: "equipe" },
            { title: "Manejar a umidade", text: "Paciente ==seco== e pele ==hidratada==.", who: "tecnico" },
            { title: "Otimizar nutrição e hidratação", who: "equipe" },
            { title: "Minimizar a pressão", text: "Reposicionar ==a cada 2 horas== ou usar superfícies de redistribuição de pressão.", who: "tecnico" },
          ],
        },
      ],
    },
    {
      id: "escala-de-braden",
      kind: "classificacao",
      title: "Escala de Braden: risco por pontuação",
      lead: "Quanto MAIOR a pontuação, MENOR o risco.",
      source: 0,
      blocks: [
        {
          type: "compare",
          columns: ["Pontos (Braden)", "Medidas preventivas"],
          rows: [
            { label: "Risco baixo", cells: ["15 a 18", "Cronograma de mudança de decúbito; otimizar mobilização; proteger calcanhar; manejo de umidade, nutrição, fricção e cisalhamento; superfícies de redistribuição"] },
            { label: "Risco moderado", cells: ["13 a 14", "O do risco baixo + mudança de decúbito com posicionamento a ==30°=="] },
            { label: "Risco alto", cells: ["10 a 12", "O do moderado + mudança de decúbito frequente + coxins de espuma para lateralizar a 30°"] },
            { label: "Risco muito alto", cells: ["9 ou menos", "O do alto + superfícies de apoio dinâmico (se possível) + manejo da dor"] },
          ],
        },
        {
          type: "callout",
          variant: "lei",
          title: "A avaliação clínica é soberana",
          text: "A escala é um parâmetro associado à avaliação clínica do enfermeiro: ==qualquer que seja o escore==, a avaliação clínica prevalece diante de fatores de risco. Braden Q: ==1 a 5 anos==; Braden: ==maiores de 5 anos==.",
        },
      ],
    },
    {
      id: "cuidados-com-a-pele-e-posicionamento",
      kind: "tecnico",
      title: "Pele, umidade e posicionamento: o dia a dia do técnico",
      source: 0,
      blocks: [
        {
          type: "dodont",
          do: [
            "Limpar a pele sempre que suja, com água morna e sabão neutro",
            "Hidratante na pele seca, pelo menos 1 vez ao dia, com movimentos suaves e circulares",
            "Produtos de barreira contra umidade (incontinência, suor, drenos, exsudato)",
            "Oferecer comadre ou papagaio nos horários de mudança de decúbito",
            "Calcâneos flutuantes: travesseiro sob as pernas, joelho levemente fletido",
            "Semi-Fowler a 30° e lateral inclinada a 30°",
            "Usar forro móvel para mover o paciente (evita fricção e cisalhamento)",
          ],
          dont: [
            "Massagear proeminências ósseas ou áreas hiperemiadas",
            "Fowler acima de 30°, lateral a 90° ou posição semideitada",
            "Elevar a cabeceira acima de 30° por tempo prolongado (o paciente escorrega)",
            "Posicionar sobre sondas, drenos ou proeminência com hiperemia não reativa",
            "Deixar o paciente muito tempo sentado sem alívio de pressão",
          ],
        },
        {
          type: "callout",
          variant: "atencao",
          title: "Exceção do próprio protocolo",
          text: "Em ventilação mecânica e traqueostomizados com ventilação não invasiva, recomenda-se decúbito ==acima de 30°== para prevenir pneumonia associada à ventilação (PAV).",
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
            { value: "6", label: "etapas essenciais" },
            { value: "2 h", label: "intervalo de reposicionamento" },
            { value: "30°", label: "semi-Fowler, lateral e limite de cabeceira" },
            { value: "15–18", label: "Braden: risco baixo" },
            { value: "≤ 9", label: "Braden: risco muito alto" },
            { value: "1–5 anos", label: "faixa da Braden Q" },
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
          title: "Rubor no sacro",
          scenario: "Paciente acamado, Braden 11, apresenta área avermelhada no sacro que não embranquece à pressão, com pele íntegra. A acompanhante pergunta se pode massagear para 'ativar a circulação'.",
          question: "Qual o estágio e quais condutas de prevenção?",
          answer: "Estágio I. Não massagear; reposicionar com frequência a 30°, com coxins; aliviar a pressão do sacro; manejar umidade; comunicar o enfermeiro.",
          reasoning: [
            "Eritema não branqueável em pele íntegra = estágio I.",
            "Braden 11 = risco alto: mudança de decúbito frequente e coxins para lateralizar a 30°.",
            "O protocolo contraindica massagem em áreas hiperemiadas.",
            "Evitar posicionar sobre área com hiperemia não reativa.",
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
            { wrong: "Na Braden, quanto maior a pontuação, maior o risco.", right: "Relação ==inversa==: mais pontos, menor risco.", why: "O protocolo diz que a classificação é inversamente proporcional à pontuação." },
            { wrong: "Braden Q é usada em idosos.", right: "Braden Q: crianças de ==1 a 5 anos==.", why: "Braden é para maiores de 5 anos." },
            { wrong: "Massagem nas proeminências ósseas previne UPP.", right: "A massagem ==não é recomendada== como estratégia de prevenção.", why: "Contraindicada em inflamação aguda e pele frágil." },
            { wrong: "Reposicionar a cada 4 horas é o recomendado.", right: "A cada ==2 horas== (ou superfícies de redistribuição).", why: "Duas horas é o tempo máximo recomendado na mesma posição." },
            { wrong: "No estágio III há exposição óssea.", right: "Exposição de osso, tendão ou músculo é ==estágio IV==.", why: "No III, o subcutâneo pode aparecer, mas não osso." },
            { wrong: "A escala substitui a avaliação do enfermeiro.", right: "A avaliação clínica é ==soberana==.", why: "Qualquer que seja o escore." },
            { wrong: "Escara seca e aderente no calcâneo deve ser removida.", right: "Escara estável no calcâneo ==não deve ser removida==.", why: "Funciona como cobertura biológica natural." },
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
            { slug: "nucleo-de-seguranca-do-paciente", title: "Segurança do paciente: PNSP e RDC 36", why: "Prevenção de úlcera por pressão está no PSP." },
          ],
        },
      ],
    },
  ],
  sources: [at(SRC.protUppV2, "itens 4, 5, 7.1, 7.3 e 7.4")],
  questions: [
    mcq({ key: "fund-upp-1", section: "escala-de-braden", difficulty: "facil",
      stem: "De acordo com o protocolo de prevenção de úlcera por pressão, a escala recomendada para avaliar o risco em crianças de 1 a 5 anos é:",
      options: ["Escala de Glasgow.", "Escala de Braden Q.", "Escala de Morse.", "Escala de Apgar."], correct: 1,
      explanation: "Braden Q para crianças de 1 a 5 anos; Braden para maiores de 5 anos." }),
    mcq({ key: "fund-upp-2", section: "escala-de-braden", difficulty: "media",
      stem: "Sobre a escala de Braden, conforme o protocolo, é correto afirmar:",
      options: ["Quanto maior a pontuação, maior o risco de úlcera por pressão.", "A classificação do risco é inversamente proporcional à pontuação: mais pontos, menor risco.", "Substitui a avaliação clínica do enfermeiro.", "Só deve ser aplicada após a alta hospitalar."], correct: 1,
      explanation: "A classificação é inversamente proporcional à pontuação e a avaliação clínica do enfermeiro é soberana." }),
    mcq({ key: "fund-upp-3", section: "cuidados-com-a-pele-e-posicionamento", difficulty: "media",
      stem: "Conforme o protocolo, durante a hidratação da pele do paciente acamado, deve-se:",
      options: ["massagear vigorosamente as proeminências ósseas para ativar a circulação.", "evitar massagear proeminências ósseas e áreas hiperemiadas, aplicando o hidratante com movimentos suaves e circulares.", "aplicar hidratante apenas nas áreas com hiperemia.", "substituir o hidratante por talco nas áreas de pressão."], correct: 1,
      explanation: "Não massagear proeminências ósseas ou áreas hiperemiadas; massagem não é estratégia de prevenção." }),
    mcq({ key: "fund-upp-4", section: "conceito-e-estagios", difficulty: "media",
      stem: "A úlcera por pressão com perda total da espessura dos tecidos e exposição de osso, tendão ou músculo é classificada como:",
      options: ["estágio I.", "estágio II.", "estágio III.", "estágio IV."], correct: 3,
      explanation: "Estágio IV: exposição de osso, tendão ou músculo. No III, a perda é total da pele, sem exposição dessas estruturas." }),
    mcq({ key: "fund-upp-5", section: "seis-etapas", difficulty: "facil",
      stem: "Segundo o protocolo, para minimizar a pressão, recomenda-se reposicionar o paciente:",
      options: ["a cada 30 minutos.", "a cada 2 horas, ou usar superfícies de redistribuição de pressão.", "a cada 6 horas.", "apenas uma vez por plantão."], correct: 1,
      explanation: "Reposicionar a cada 2 horas ou utilizar superfícies de redistribuição; duas horas é o máximo recomendado na mesma posição." }),
    mcq({ key: "fund-upp-6", section: "escala-de-braden", difficulty: "dificil",
      stem: "Pelo protocolo, um paciente com escore de 13 a 14 na escala de Braden tem risco:",
      options: ["baixo.", "moderado.", "alto.", "muito alto."], correct: 1,
      explanation: "Baixo: 15–18; moderado: 13–14; alto: 10–12; muito alto: 9 ou menos." }),
    mcq({ key: "fund-upp-7", section: "cuidados-com-a-pele-e-posicionamento", difficulty: "media",
      stem: "Em relação à elevação da cabeceira para prevenção de úlcera por pressão, o protocolo orienta:",
      options: ["manter a cabeceira a 90° para facilitar a respiração.", "elevar no máximo 30°, limitando o tempo de cabeceira elevada, exceto em pacientes em ventilação mecânica.", "manter sempre a 45°.", "não há recomendação sobre a cabeceira."], correct: 1,
      explanation: "Elevar no máximo 30° para evitar fricção e cisalhamento; em ventilação mecânica recomenda-se acima de 30° para prevenir PAV." }),
    mcq({ key: "fund-upp-8", section: "conceito-e-estagios", difficulty: "media",
      stem: "Pele intacta com rubor não branqueável sobre proeminência óssea corresponde ao:",
      options: ["estágio I.", "estágio II.", "estágio III.", "suspeita de lesão em tecidos profundos."], correct: 0,
      explanation: "Estágio I: eritema não branqueável em pele intacta." }),
  ],
  status: "published",
  standard: "v2",
  lastReviewedAt: REVIEWED_V2,
  reviewNotes: V2_REVIEW_NOTE + " O protocolo de 2013 usa 'úlcera por pressão (UPP)'; a terminologia atual é 'lesão por pressão' — mencionar na revisão humana.",
};
