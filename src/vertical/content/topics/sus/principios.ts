import type { TopicSeed } from "@/core/content/types";
import { mcq } from "../../helpers";
import { REVIEWED_V2, SRC, V2_REVIEW_NOTE, at } from "../../sources";

/* Fontes: [0] Lei 8.080/1990, art. 7º (Planalto, texto compilado); [1] PNAB 2017 (contraste igualdade × equidade). */

export const PRINCIPIOS_SUS: TopicSeed = {
  slug: "principios-do-sus-lei-8080",
  title: "Princípios do SUS na Lei 8.080",
  description: "Os 16 incisos do art. 7º, agrupados, com o contraste igualdade × equidade que mais derruba candidato.",
  summary:
    "O art. 7º da Lei nº 8.080/1990 diz que as ações e serviços públicos de saúde e os serviços privados contratados ou conveniados que integram o SUS seguem as diretrizes do art. 198 da Constituição e obedecem a princípios listados em incisos. Os primeiros são universalidade de acesso em todos os níveis de assistência; integralidade de assistência, entendida como conjunto articulado e contínuo de ações e serviços preventivos e curativos, individuais e coletivos, exigidos para cada caso em todos os níveis de complexidade; preservação da autonomia das pessoas na defesa de sua integridade física e moral; e igualdade da assistência, sem preconceitos ou privilégios de qualquer espécie. A lista inclui ainda direito à informação sobre a própria saúde, divulgação do potencial dos serviços, uso da epidemiologia para definir prioridades, participação da comunidade, descentralização político-administrativa com direção única em cada esfera (ênfase nos municípios, regionalização e hierarquização), integração executiva de saúde, meio ambiente e saneamento, conjugação de recursos dos entes, capacidade de resolução e organização para evitar duplicidade. Leis recentes acrescentaram atendimento específico a mulheres e vítimas de violência doméstica (XIV, 2017), proteção integral dos direitos humanos com atenção a maus-tratos, negligência e violência sexual contra crianças e adolescentes (XV, 2023) e atenção humanizada (XVI, 2025). O texto da lei fala em igualdade — 'equidade' não está no art. 7º, embora apareça como princípio na Política Nacional de Atenção Básica.",
  keyPoints: [
    "Vale para o SUS público e para os privados contratados ou conveniados.",
    "Universalidade de acesso em todos os níveis de assistência (I).",
    "Integralidade: ações preventivas e curativas, individuais e coletivas, em todos os níveis de complexidade (II).",
    "Igualdade da assistência, sem preconceitos ou privilégios (IV) — o art. 7º não diz equidade.",
    "Epidemiologia define prioridades, alocação de recursos e orientação programática (VII).",
    "Descentralização com direção única em cada esfera; ênfase nos municípios; regionalização e hierarquização (IX).",
    "Capacidade de resolução em todos os níveis (XII) e evitar duplicidade de meios (XIII).",
    "Incisos novos: XIV (2017), XV (2023) e XVI — atenção humanizada (2025).",
  ],
  map: {
    title: "Princípios do SUS (art. 7º)",
    spec: {
      layout: "hub",
      center: "Lei 8.080/1990 · art. 7º",
      blocks: [
        { title: "Acesso", tone: "blue", icon: "🚪", items: ["Universalidade em todos os níveis", "Igualdade, sem privilégios"] },
        { title: "Cuidado", tone: "teal", icon: "🧩", items: ["Integralidade: prevenir + curar", "Capacidade de resolução"] },
        { title: "Informação", tone: "violet", icon: "ℹ️", items: ["Direito à informação sobre a saúde", "Epidemiologia define prioridades"] },
        { title: "Organização", tone: "amber", icon: "🗺️", items: ["Descentralização, direção única", "Regionalização e hierarquização"] },
        { title: "Sociedade", tone: "green", icon: "🤝", items: ["Participação da comunidade", "Atenção humanizada (2025)"] },
      ],
      footnote: "Cuidado: o texto do art. 7º diz igualdade, não equidade.",
    },
  },
  sections: [
    {
      id: "visao-geral",
      kind: "visao",
      title: "O artigo mais cobrado de SUS",
      source: 0,
      blocks: [
        {
          type: "definition",
          term: "Art. 7º da Lei 8.080/1990",
          text: "As ações e serviços ==públicos== de saúde e os serviços ==privados contratados ou conveniados== que integram o SUS são desenvolvidos de acordo com as diretrizes do art. 198 da Constituição, obedecendo ainda aos princípios listados nos incisos.",
          note: "O privado que entra no SUS por contrato ou convênio também segue os princípios.",
        },
        {
          type: "cards",
          items: [
            { title: "16 incisos", text: "A lista original tinha 13; leis posteriores incluíram XIV (2017), XV (2023) e XVI (2025).", icon: "📜", tone: "blue" },
            { title: "Diretrizes + princípios", text: "Diretrizes vêm do art. 198 da CF; princípios, do art. 7º da lei. A banca adora trocar os nomes.", icon: "🔀", tone: "amber" },
          ],
        },
      ],
    },
    {
      id: "os-16-principios",
      kind: "classificacao",
      title: "Os princípios, agrupados",
      lead: "Agrupe por ideia: fica mais fácil lembrar na hora da prova.",
      source: 0,
      blocks: [
        {
          type: "cards",
          items: [
            { title: "Acesso e igualdade", tag: "I · IV", text: "==Universalidade== de acesso em todos os níveis de assistência. ==Igualdade== da assistência, sem preconceitos ou privilégios de qualquer espécie.", icon: "🚪", tone: "blue" },
            { title: "Integralidade", tag: "II", text: "Conjunto ==articulado e contínuo== de ações e serviços ==preventivos e curativos, individuais e coletivos==, exigidos para cada caso, em todos os níveis de complexidade.", icon: "🧩", tone: "teal" },
            { title: "Pessoa e informação", tag: "III · V · VI", text: "Preservação da ==autonomia== na defesa da integridade física e moral. Direito à informação, às pessoas assistidas, sobre sua saúde. Divulgação do potencial dos serviços e de sua utilização.", icon: "ℹ️", tone: "violet" },
            { title: "Epidemiologia", tag: "VII", text: "Uso da epidemiologia para estabelecer ==prioridades==, alocar recursos e orientar a programação.", icon: "📊", tone: "slate" },
            { title: "Participação da comunidade", tag: "VIII", text: "Detalhada na Lei 8.142/1990 (Conferências e Conselhos).", icon: "🤝", tone: "green" },
            { title: "Descentralização", tag: "IX", text: "Político-administrativa, com ==direção única em cada esfera==: a) ênfase na descentralização para os ==municípios==; b) ==regionalização e hierarquização== da rede.", icon: "🗺️", tone: "amber" },
            { title: "Gestão integrada", tag: "X · XI · XIII", text: "Integração executiva de saúde, ==meio ambiente e saneamento básico==. Conjugação de recursos financeiros, tecnológicos, materiais e humanos dos entes. Evitar ==duplicidade de meios== para fins idênticos.", icon: "⚙️", tone: "orange" },
            { title: "Resolutividade", tag: "XII", text: "Capacidade de resolução dos serviços em todos os níveis de assistência.", icon: "✅", tone: "teal" },
            { title: "Proteção e humanização", tag: "XIV · XV · XVI", text: "Atendimento específico a mulheres e vítimas de violência doméstica (XIV). Proteção integral dos direitos humanos; atenção a maus-tratos, negligência e violência sexual contra crianças e adolescentes (XV). ==Atenção humanizada== (XVI).", icon: "🛡️", tone: "rose" },
          ],
        },
      ],
    },
    {
      id: "igualdade-x-equidade",
      kind: "atencao",
      title: "Igualdade × equidade: a pegadinha número 1",
      source: 1,
      blocks: [
        {
          type: "compare",
          columns: ["Lei 8.080, art. 7º", "PNAB (Portaria 2.436/2017)"],
          rows: [
            { label: "Termo", cells: ["==Igualdade== da assistência, sem preconceitos ou privilégios", "==Equidade== é um dos três princípios (com universalidade e integralidade)"] },
            { label: "Ideia", cells: ["Todos recebem assistência sem discriminação", "Ofertar o cuidado ==reconhecendo as diferenças== e conforme as necessidades"] },
          ],
        },
        {
          type: "callout",
          variant: "atencao",
          title: "Como responder",
          text: "Se o enunciado diz =='segundo o art. 7º da Lei 8.080'==, a resposta é igualdade. Se cita a PNAB ou a doutrina, equidade pode estar correta.",
        },
      ],
    },
    {
      id: "linha-do-tempo-dos-incisos",
      kind: "etapas",
      title: "Incisos acrescentados depois de 1990",
      lead: "Questões recentes cobram o que entrou por lei nova.",
      source: 0,
      blocks: [
        {
          type: "timeline",
          items: [
            { when: "1990", what: "Texto original: incisos I a XIII." },
            { when: "2017 · Lei 13.427", what: "XIV: atendimento público específico e especializado para mulheres e vítimas de violência doméstica (atendimento, acompanhamento psicológico, cirurgias plásticas reparadoras)." },
            { when: "2023 · Lei 14.679", what: "XV: proteção integral dos direitos humanos dos usuários, com atenção a maus-tratos, negligência e violência sexual contra crianças e adolescentes." },
            { when: "2024 · Lei 14.847", what: "Parágrafo único: mulher vítima de violência é atendida em local que garanta privacidade e restrinja o acesso de terceiros, em especial do agressor." },
            { when: "2025 · Lei 15.126", what: "XVI: ==atenção humanizada==." },
          ],
        },
      ],
    },
    {
      id: "no-dia-a-dia",
      kind: "tecnico",
      title: "Os princípios no dia a dia do técnico",
      source: 0,
      blocks: [
        {
          type: "cards",
          items: [
            { title: "Universalidade", text: "Atender quem chega, sem exigir vínculo de trabalho ou contribuição.", icon: "🚪", tone: "blue" },
            { title: "Igualdade", text: "Sem preconceitos ou privilégios de qualquer espécie no atendimento.", icon: "⚖️", tone: "slate" },
            { title: "Direito à informação", text: "A pessoa assistida tem direito a informação sobre sua saúde.", icon: "ℹ️", tone: "violet" },
            { title: "Integralidade", text: "Prevenção e cura caminham juntas: vacinar, orientar e tratar no mesmo cuidado.", icon: "🧩", tone: "teal" },
            { title: "Inciso XIV + parágrafo único", text: "Mulher vítima de violência é acolhida em local com privacidade, sem acesso do agressor.", icon: "🛡️", tone: "rose" },
            { title: "Atenção humanizada", text: "Princípio expresso desde 2025.", icon: "🤲", tone: "green" },
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
            { value: "16", label: "incisos no art. 7º hoje" },
            { value: "13", label: "incisos no texto original de 1990" },
            { value: "II", label: "inciso da integralidade" },
            { value: "IV", label: "inciso da igualdade" },
            { value: "IX", label: "inciso da descentralização", note: "alíneas a (municípios) e b (regionalização e hierarquização)" },
            { value: "2025", label: "ano do inciso XVI — atenção humanizada" },
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
          title: "Clínica conveniada",
          scenario: "Uma clínica privada conveniada ao SUS passa a atender primeiro os pacientes indicados por um político local, deixando os demais para depois.",
          question: "Qual princípio do art. 7º está sendo violado e ele se aplica à clínica?",
          answer: "Igualdade da assistência, sem preconceitos ou privilégios (inciso IV). Sim: o art. 7º vale para os serviços privados contratados ou conveniados que integram o SUS.",
          reasoning: [
            "Privilegiar indicados é privilégio, vedado pelo inciso IV.",
            "O caput do art. 7º inclui os privados contratados ou conveniados.",
            "A resposta pela lei é igualdade, não equidade.",
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
            { wrong: "O art. 7º lista a equidade entre os princípios do SUS.", right: "O texto fala em ==igualdade== da assistência (inciso IV).", why: "Equidade aparece na PNAB e na doutrina, não no art. 7º." },
            { wrong: "Integralidade é priorizar os casos mais graves.", right: "Integralidade = ações ==preventivas e curativas, individuais e coletivas==, em todos os níveis de complexidade.", why: "Priorizar o grave é classificação de risco, não integralidade." },
            { wrong: "Descentralização com direção compartilhada entre as esferas.", right: "Descentralização com ==direção única em cada esfera== de governo.", why: "Cada esfera tem um gestor: MS, secretaria estadual, secretaria municipal." },
            { wrong: "A ênfase da descentralização é nos Estados.", right: "A ênfase é na descentralização dos serviços para os ==municípios==.", why: "Inciso IX, alínea a." },
            { wrong: "Os princípios só valem para a rede pública.", right: "Valem também para ==privados contratados ou conveniados== que integram o SUS.", why: "Está no caput do art. 7º." },
            { wrong: "Atenção humanizada é diretriz da Constituição.", right: "É ==princípio do art. 7º== (inciso XVI, Lei 15.126/2025).", why: "As diretrizes constitucionais continuam sendo três (art. 198)." },
            { wrong: "A epidemiologia serve apenas para pesquisa acadêmica no SUS.", right: "Serve para estabelecer ==prioridades, alocar recursos e orientar a programação== (VII).", why: "É princípio de gestão, não só de pesquisa." },
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
            { slug: "sus-na-constituicao-arts-196-a-200", title: "SUS na Constituição (arts. 196 a 200)", why: "As diretrizes do art. 198 que o art. 7º manda seguir." },
            { slug: "participacao-da-comunidade-lei-8142", title: "Conferências e Conselhos de Saúde (Lei 8.142)", why: "O inciso VIII na prática." },
            { slug: "atencao-basica-pnab", title: "Atenção Básica: a PNAB", why: "Onde a equidade aparece como princípio." },
            { slug: "decreto-7508-regioes-e-portas-de-entrada", title: "Decreto 7.508: regiões e portas de entrada", why: "Regionalização e hierarquização regulamentadas." },
          ],
        },
      ],
    },
  ],
  sources: [at(SRC.lei8080v2, "art. 7º, incisos I a XVI e parágrafo único"), at(SRC.pnab2436, "Anexo, item 1.1 — Princípios")],
  questions: [
    mcq({ key: "sus-principios-1", section: "os-16-principios", difficulty: "facil",
      stem: "De acordo com o art. 7º da Lei nº 8.080/1990, a integralidade de assistência é entendida como:",
      options: ["o atendimento prioritário apenas aos casos de maior gravidade.", "o conjunto articulado e contínuo das ações e serviços preventivos e curativos, individuais e coletivos, exigidos para cada caso em todos os níveis de complexidade.", "a oferta de serviços de saúde exclusivamente pela rede pública, sem participação privada.", "a garantia de que cada município execute sozinho todos os níveis de atenção."], correct: 1,
      explanation: "É a definição literal do inciso II do art. 7º. As outras alternativas descrevem ideias que a lei não usa para esse princípio." }),
    mcq({ key: "sus-principios-2", section: "os-16-principios", difficulty: "media",
      stem: "Sobre a descentralização político-administrativa prevista no art. 7º da Lei nº 8.080/1990, é correto afirmar que ela ocorre:",
      options: ["com direção única em cada esfera de governo, ênfase na descentralização dos serviços para os municípios e regionalização e hierarquização da rede.", "com direção compartilhada entre União e Estados, sem participação dos municípios.", "apenas no âmbito federal, cabendo aos municípios só executar ordens.", "por meio da privatização dos serviços de média e alta complexidade."], correct: 0,
      explanation: "O inciso IX fala em descentralização com direção única em cada esfera de governo, com ênfase nos municípios e regionalização e hierarquização da rede." }),
    mcq({ key: "sus-principios-3", section: "linha-do-tempo-dos-incisos", difficulty: "media",
      stem: "O inciso XVI do art. 7º da Lei nº 8.080/1990, incluído em 2025, acrescentou como princípio do SUS:",
      options: ["a equidade na distribuição de recursos.", "a atenção humanizada.", "a gratuidade dos medicamentos de alto custo.", "a obrigatoriedade de consórcios intermunicipais."], correct: 1,
      explanation: "O inciso XVI, incluído pela Lei nº 15.126/2025, é a atenção humanizada. 'Equidade' continua fora do texto do art. 7º." }),
    mcq({ key: "sus-principios-4", section: "igualdade-x-equidade", difficulty: "media",
      stem: "Segundo o texto literal do art. 7º da Lei nº 8.080/1990, a assistência à saúde deve observar o princípio da:",
      options: ["equidade, priorizando os grupos mais vulneráveis.", "igualdade, sem preconceitos ou privilégios de qualquer espécie.", "seletividade, conforme a contribuição do usuário.", "proporcionalidade ao risco individual."], correct: 1,
      explanation: "O inciso IV fala em igualdade da assistência à saúde, sem preconceitos ou privilégios de qualquer espécie. Equidade é termo da PNAB e da doutrina." }),
    mcq({ key: "sus-principios-5", section: "visao-geral", difficulty: "media",
      stem: "Os princípios do art. 7º da Lei nº 8.080/1990 aplicam-se:",
      options: ["somente aos hospitais públicos federais.", "às ações e serviços públicos e aos serviços privados contratados ou conveniados que integram o SUS.", "apenas à atenção básica municipal.", "a toda a rede privada de saúde, conveniada ou não."], correct: 1,
      explanation: "O caput do art. 7º alcança as ações e serviços públicos de saúde e os serviços privados contratados ou conveniados que integram o SUS." }),
    mcq({ key: "sus-principios-6", section: "os-16-principios", difficulty: "facil",
      stem: "A utilização da epidemiologia, segundo o art. 7º da Lei nº 8.080/1990, serve para:",
      options: ["o estabelecimento de prioridades, a alocação de recursos e a orientação programática.", "a substituição da participação da comunidade.", "a definição do valor da contribuição do usuário.", "o credenciamento de hospitais privados."], correct: 0,
      explanation: "Inciso VII: utilização da epidemiologia para o estabelecimento de prioridades, a alocação de recursos e a orientação programática." }),
    mcq({ key: "sus-principios-7", section: "os-16-principios", difficulty: "dificil",
      stem: "É princípio do SUS expresso no art. 7º da Lei nº 8.080/1990:",
      options: ["centralização das decisões no Ministério da Saúde.", "organização dos serviços públicos de modo a evitar duplicidade de meios para fins idênticos.", "cobrança de taxa moderadora em consultas especializadas.", "prioridade de atendimento a contribuintes da previdência."], correct: 1,
      explanation: "É o inciso XIII. As demais alternativas contrariam a universalidade, a igualdade ou a descentralização." }),
    mcq({ key: "sus-principios-8", section: "linha-do-tempo-dos-incisos", difficulty: "dificil",
      stem: "O parágrafo único do art. 7º da Lei nº 8.080/1990, incluído em 2024, garante às mulheres vítimas de violência:",
      options: ["atendimento exclusivamente em delegacias especializadas.", "acolhimento e atendimento em local e ambiente que garantam privacidade e restrição do acesso de terceiros não autorizados, em especial do agressor.", "prioridade absoluta em cirurgias eletivas.", "atendimento apenas na rede privada conveniada."], correct: 1,
      explanation: "O parágrafo único (Lei 14.847/2024) garante acolhimento e atendimento em local que assegure privacidade e restrinja o acesso de terceiros, em especial do agressor." }),
  ],
  status: "published",
  standard: "v2",
  lastReviewedAt: REVIEWED_V2,
  reviewNotes: V2_REVIEW_NOTE + " A seção 'no dia a dia' traduz incisos para a prática; não é texto literal.",
};
