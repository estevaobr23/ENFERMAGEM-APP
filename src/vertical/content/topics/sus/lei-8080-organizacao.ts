import type { TopicSeed } from "@/core/content/types";
import { mcq } from "../../helpers";
import { REVIEWED_V2, SRC, V2_REVIEW_NOTE, at } from "../../sources";

/* Fonte única: Lei 8.080/1990 (Planalto, texto compilado), arts. 2º a 6º, 8º a 10, 12 a 14-B, 18, 19 e 24 a 26. */

export const LEI_8080_ORGANIZACAO: TopicSeed = {
  slug: "lei-8080-organizacao-e-competencias",
  title: "Lei 8.080: organização, campo de atuação e competências",
  description: "O que é o SUS, determinantes da saúde, objetivos, vigilâncias, direção única, comissões intergestores e o papel do município.",
  summary:
    "A Lei 8.080/1990 diz que a saúde é direito fundamental do ser humano e que o dever do Estado não exclui o das pessoas, da família, das empresas e da sociedade. Os níveis de saúde expressam a organização social e econômica do país e têm como determinantes e condicionantes, entre outros, alimentação, moradia, saneamento, meio ambiente, trabalho, renda, educação, atividade física, transporte, lazer e acesso a bens e serviços. O SUS é o conjunto de ações e serviços prestados por órgãos e instituições públicas federais, estaduais e municipais, da administração direta e indireta e fundações mantidas pelo Poder Público; a iniciativa privada participa em caráter complementar. Os objetivos do SUS são identificar e divulgar os determinantes da saúde, formular a política de saúde e prestar assistência por ações de promoção, proteção e recuperação. Estão no campo de atuação as vigilâncias sanitária e epidemiológica, a saúde do trabalhador, a assistência terapêutica integral (inclusive farmacêutica) e a saúde bucal, entre outras. Vigilância sanitária elimina, diminui ou previne riscos à saúde e intervém em problemas do meio ambiente, da produção e circulação de bens e da prestação de serviços; vigilância epidemiológica proporciona conhecimento, detecção ou prevenção de mudanças nos determinantes da saúde para recomendar medidas de prevenção e controle. As ações são organizadas de forma regionalizada e hierarquizada, em níveis de complexidade crescente, com direção única em cada esfera: Ministério da Saúde, secretarias estaduais e municipais. Municípios podem formar consórcios, e as Comissões Intergestores Bipartite e Tripartite são foros de pactuação entre gestores. Ao município compete gerir e executar os serviços públicos de saúde, incluindo vigilância epidemiológica, sanitária, alimentação e nutrição, saneamento básico, saúde do trabalhador e saúde bucal.",
  keyPoints: [
    "Dever do Estado não exclui o das pessoas, família, empresas e sociedade.",
    "Determinantes: alimentação, moradia, saneamento, meio ambiente, trabalho, renda, educação, atividade física, transporte, lazer.",
    "SUS = ações e serviços públicos (federais, estaduais, municipais, diretos e indiretos); privado em caráter complementar.",
    "Objetivos: identificar determinantes, formular política e prestar assistência (promoção, proteção, recuperação).",
    "Vigilância sanitária: riscos de bens, serviços e meio ambiente. Vigilância epidemiológica: conhecer e detectar mudanças para prevenir e controlar.",
    "Direção única: MS (União), secretarias estaduais e municipais.",
    "CIB e CIT: foros de negociação e pactuação entre gestores.",
    "Município executa vigilâncias, alimentação e nutrição, saneamento, saúde do trabalhador e saúde bucal.",
  ],
  map: {
    title: "Como a Lei 8.080 organiza o SUS",
    spec: {
      layout: "hub",
      center: "Lei 8.080/1990",
      blocks: [
        { title: "Base", tone: "blue", icon: "🏛️", items: ["Saúde: direito fundamental", "Determinantes sociais", "Privado complementar"] },
        { title: "Campo de atuação", tone: "green", icon: "🔭", items: ["Vigilância sanitária", "Vigilância epidemiológica", "Saúde do trabalhador"] },
        { title: "Gestão", tone: "amber", icon: "🧭", items: ["Direção única por esfera", "Consórcios municipais", "CIB e CIT"] },
        { title: "Município", tone: "teal", icon: "🏘️", items: ["Gere e executa serviços", "Executa as vigilâncias", "Contrata e fiscaliza privados"] },
      ],
    },
  },
  sections: [
    {
      id: "visao-geral",
      kind: "visao",
      title: "A Lei Orgânica da Saúde em três perguntas",
      source: 0,
      blocks: [
        {
          type: "cards",
          items: [
            { title: "O que é saúde?", text: "Direito fundamental; depende de ==determinantes sociais== (arts. 2º e 3º).", icon: "❓", tone: "blue" },
            { title: "O que o SUS faz?", text: "Objetivos e ==campo de atuação==, com as vigilâncias (arts. 5º e 6º).", icon: "🛠️", tone: "green" },
            { title: "Quem manda em quê?", text: "==Direção única== por esfera e competências de cada gestor (arts. 9º, 14-A, 18).", icon: "🧭", tone: "amber" },
          ],
        },
      ],
    },
    {
      id: "direito-e-determinantes",
      kind: "conceito",
      title: "Direito à saúde e determinantes",
      source: 0,
      blocks: [
        { type: "definition", term: "Art. 2º", text: "A saúde é um ==direito fundamental do ser humano==, devendo o Estado prover as condições indispensáveis ao seu pleno exercício.", note: "§ 2º: o dever do Estado ==não exclui o das pessoas, da família, das empresas e da sociedade==." },
        { type: "definition", term: "Art. 3º — determinantes e condicionantes", text: "Os níveis de saúde expressam a organização social e econômica do país; são determinantes e condicionantes, entre outros: alimentação, moradia, saneamento básico, meio ambiente, trabalho, renda, educação, ==atividade física==, transporte, lazer e acesso a bens e serviços essenciais." },
        { type: "definition", term: "Art. 4º — o que é o SUS", text: "Conjunto de ações e serviços prestados por ==órgãos e instituições públicas== federais, estaduais e municipais, da administração direta e indireta e das fundações mantidas pelo Poder Público.", note: "§ 2º: a iniciativa privada pode participar em ==caráter complementar==." },
      ],
    },
    {
      id: "objetivos-e-campo",
      kind: "classificacao",
      title: "Objetivos e campo de atuação",
      source: 0,
      blocks: [
        {
          type: "steps",
          items: [
            { title: "Objetivo I", text: "Identificar e divulgar os ==fatores condicionantes e determinantes== da saúde." },
            { title: "Objetivo II", text: "Formular política de saúde para promover, nos campos econômico e social, a redução de riscos e o acesso universal e igualitário." },
            { title: "Objetivo III", text: "Assistência por ações de ==promoção, proteção e recuperação==, integrando assistência e prevenção." },
          ],
        },
        {
          type: "checklist",
          title: "Campo de atuação (art. 6º) — alguns itens",
          items: [
            "Execução de ações de vigilância sanitária, vigilância epidemiológica, saúde do trabalhador, assistência terapêutica integral (inclusive farmacêutica) e saúde bucal",
            "Participação na política e nas ações de saneamento básico",
            "Ordenação da formação de recursos humanos",
            "Vigilância nutricional e orientação alimentar",
            "Fiscalização e inspeção de alimentos, água e bebidas",
            "Formulação e execução da política de sangue e derivados",
            "Política de informação e assistência toxicológica",
          ],
        },
      ],
    },
    {
      id: "vigilancias",
      kind: "conceito",
      title: "As vigilâncias e a saúde do trabalhador",
      lead: "Definições que caem quase literalmente.",
      source: 0,
      blocks: [
        {
          type: "compare",
          columns: ["Vigilância sanitária", "Vigilância epidemiológica", "Saúde do trabalhador"],
          rows: [
            { label: "O que é", cells: ["Ações capazes de ==eliminar, diminuir ou prevenir riscos== e intervir em problemas sanitários do meio ambiente, da produção e circulação de bens e da prestação de serviços", "Ações que proporcionam ==conhecimento, detecção ou prevenção de mudanças== nos determinantes da saúde, para recomendar e adotar medidas de prevenção e controle", "Atividades que, por meio das vigilâncias, promovem e protegem a saúde dos trabalhadores e recuperam e reabilitam os expostos a riscos do trabalho"] },
            { label: "Abrange", cells: ["Controle de ==bens de consumo== (da produção ao consumo) e da ==prestação de serviços==", "Doenças e agravos — individuais ou coletivos", "Assistência ao acidentado, estudo de riscos, informação ao trabalhador, revisão da lista de doenças do trabalho"] },
          ],
        },
      ],
    },
    {
      id: "gestao",
      kind: "etapas",
      title: "Direção única, consórcios e comissões",
      source: 0,
      blocks: [
        {
          type: "steps",
          items: [
            { title: "Organização regionalizada e hierarquizada", text: "Em ==níveis de complexidade crescente== (art. 8º)." },
            { title: "Direção única em cada esfera (art. 9º)", text: "União → ==Ministério da Saúde==; Estados e DF → Secretaria de Saúde; Municípios → Secretaria de Saúde (ou órgão equivalente)." },
            { title: "Consórcios (art. 10)", text: "Municípios podem formar consórcios; aplica-se a eles o princípio da direção única. O SUS municipal pode se organizar em ==distritos==." },
            { title: "Comissões intersetoriais (art. 12)", text: "Nacionais, ==subordinadas ao Conselho Nacional de Saúde==, para articular políticas com áreas fora do SUS (alimentação, saneamento, recursos humanos, saúde do trabalhador)." },
            { title: "CIB e CIT (art. 14-A)", text: "==Foros de negociação e pactuação entre gestores== sobre os aspectos operacionais do SUS." },
            { title: "Conass e Conasems (art. 14-B)", text: "Representam os entes estaduais e municipais; os Cosems representam os municípios no âmbito estadual." },
          ],
        },
      ],
    },
    {
      id: "municipio",
      kind: "tecnico",
      title: "O que compete à direção municipal (art. 18)",
      lead: "É no município que o técnico da UBS trabalha.",
      source: 0,
      blocks: [
        {
          type: "checklist",
          items: [
            "Planejar, organizar, controlar e avaliar as ações e ==gerir e executar os serviços públicos de saúde==",
            "Participar do planejamento da rede regionalizada, em articulação com a direção estadual",
            "Executar serviços de ==vigilância epidemiológica, vigilância sanitária, alimentação e nutrição, saneamento básico, saúde do trabalhador e saúde bucal==",
            "Formar ==consórcios administrativos intermunicipais==",
            "Gerir laboratórios públicos de saúde e hemocentros",
            "Colaborar com União e Estados na vigilância sanitária de portos, aeroportos e fronteiras",
            "Celebrar contratos e convênios com serviços privados e controlar sua execução",
          ],
        },
        {
          type: "callout",
          variant: "dica",
          title: "Distrito Federal",
          text: "Ao DF competem as atribuições ==reservadas aos Estados e aos Municípios== (art. 19).",
        },
      ],
    },
    {
      id: "privado-complementar",
      kind: "cuidados",
      title: "Participação complementar privada (arts. 24 a 26)",
      source: 0,
      blocks: [
        {
          type: "steps",
          items: [
            { title: "Só quando a rede pública não basta", text: "Disponibilidades insuficientes para garantir a cobertura de uma área → o SUS pode recorrer ao privado." },
            { title: "Por contrato ou convênio", text: "Observadas as normas de direito público." },
            { title: "Preferência", text: "==Entidades filantrópicas e sem fins lucrativos==." },
            { title: "Remuneração", text: "Critérios e valores definidos pela ==direção nacional== e aprovados no ==Conselho Nacional de Saúde==." },
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
            { value: "3", label: "objetivos do SUS (art. 5º)" },
            { value: "3", label: "esferas com direção única", note: "MS, secretaria estadual, secretaria municipal" },
            { value: "Art. 6º", label: "campo de atuação e definições das vigilâncias" },
            { value: "Art. 18", label: "competências da direção municipal" },
            { value: "Art. 14-A", label: "CIB e CIT como foros de pactuação" },
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
          title: "Interdição de restaurante e surto de diarreia",
          scenario: "Após um surto de diarreia, a equipe municipal investiga os casos para identificar a fonte e recomendar medidas; em seguida, outra equipe inspeciona e interdita o restaurante onde as pessoas comeram.",
          question: "Quais vigilâncias atuaram e de quem é a competência de executá-las no território?",
          answer: "Investigar os casos para recomendar medidas é vigilância epidemiológica; inspecionar e interditar o restaurante é vigilância sanitária. A execução cabe à direção municipal.",
          reasoning: [
            "Epidemiológica: conhecimento e detecção de mudanças nos determinantes para prevenção e controle.",
            "Sanitária: intervir em problemas da produção e circulação de bens e prestação de serviços.",
            "Art. 18, IV: o município executa os serviços de vigilância epidemiológica e sanitária.",
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
            { wrong: "O dever do Estado de garantir a saúde exclui o das pessoas e da família.", right: "==Não exclui== o das pessoas, da família, das empresas e da sociedade.", why: "Art. 2º, § 2º." },
            { wrong: "No âmbito estadual, a direção do SUS é exercida pelo Ministério da Saúde.", right: "Pela ==Secretaria Estadual de Saúde== ou órgão equivalente.", why: "Art. 9º: cada esfera tem seu órgão de direção." },
            { wrong: "Inspecionar estabelecimentos que vendem alimentos é vigilância epidemiológica.", right: "É ==vigilância sanitária==.", why: "Sanitária cuida de bens, serviços e meio ambiente; epidemiológica, de conhecer e detectar mudanças nos determinantes." },
            { wrong: "CIB e CIT são instâncias de controle social, como os Conselhos.", right: "São ==foros de negociação e pactuação entre gestores==.", why: "Controle social é Conferência e Conselho (Lei 8.142)." },
            { wrong: "A atividade física não é citada como determinante da saúde.", right: "Foi incluída no art. 3º em 2013.", why: "A redação atual cita a atividade física entre os determinantes." },
            { wrong: "O SUS é formado também por toda a rede privada do país.", right: "O SUS é o conjunto de ==ações e serviços públicos==; o privado participa de forma ==complementar==.", why: "Art. 4º, caput e § 2º." },
            { wrong: "Executar saneamento básico não é competência municipal no SUS.", right: "O município ==executa serviços de saneamento básico== (art. 18, IV, d).", why: "Junto com vigilâncias, alimentação e nutrição, saúde do trabalhador e saúde bucal." },
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
            { slug: "principios-do-sus-lei-8080", title: "Princípios do SUS na Lei 8.080", why: "O art. 7º da mesma lei." },
            { slug: "decreto-7508-regioes-e-portas-de-entrada", title: "Decreto 7.508: regiões e portas de entrada", why: "O decreto que regulamenta a organização da Lei 8.080." },
            { slug: "sus-na-constituicao-arts-196-a-200", title: "SUS na Constituição (arts. 196 a 200)", why: "A base constitucional." },
            { slug: "nr-32-seguranca-do-trabalhador", title: "NR 32: segurança do trabalhador da saúde", why: "Saúde do trabalhador aplicada aos serviços de saúde." },
          ],
        },
      ],
    },
  ],
  sources: [at(SRC.lei8080v2, "arts. 2º a 6º, 8º a 10, 12 a 14-B, 18, 19 e 24 a 26")],
  questions: [
    mcq({ key: "sus-8080-1", section: "direito-e-determinantes", difficulty: "facil",
      stem: "Segundo a Lei nº 8.080/1990, o dever do Estado de garantir a saúde:",
      options: ["exclui o dever das pessoas e da família.", "não exclui o das pessoas, da família, das empresas e da sociedade.", "é exclusivo dos municípios.", "só existe para contribuintes da previdência."], correct: 1,
      explanation: "Art. 2º, § 2º: o dever do Estado não exclui o das pessoas, da família, das empresas e da sociedade." }),
    mcq({ key: "sus-8080-2", section: "gestao", difficulty: "facil",
      stem: "De acordo com o art. 9º da Lei nº 8.080/1990, a direção do SUS no âmbito da União é exercida:",
      options: ["pelo Conselho Nacional de Saúde.", "pelo Ministério da Saúde.", "pela Anvisa.", "pela Comissão Intergestores Tripartite."], correct: 1,
      explanation: "Direção única: União → Ministério da Saúde; Estados e DF → Secretaria de Saúde; Municípios → Secretaria de Saúde." }),
    mcq({ key: "sus-8080-3", section: "vigilancias", difficulty: "media",
      stem: "O conjunto de ações capaz de eliminar, diminuir ou prevenir riscos à saúde e de intervir nos problemas sanitários decorrentes do meio ambiente, da produção e circulação de bens e da prestação de serviços é a definição legal de:",
      options: ["vigilância epidemiológica.", "vigilância sanitária.", "saúde do trabalhador.", "atenção básica."], correct: 1,
      explanation: "É a definição de vigilância sanitária do art. 6º, § 1º." }),
    mcq({ key: "sus-8080-4", section: "vigilancias", difficulty: "media",
      stem: "O conjunto de ações que proporciona o conhecimento, a detecção ou a prevenção de qualquer mudança nos fatores determinantes e condicionantes da saúde, com a finalidade de recomendar e adotar medidas de prevenção e controle, é:",
      options: ["vigilância sanitária.", "vigilância epidemiológica.", "auditoria do SUS.", "regulação assistencial."], correct: 1,
      explanation: "É a definição de vigilância epidemiológica do art. 6º, § 2º." }),
    mcq({ key: "sus-8080-5", section: "gestao", difficulty: "media",
      stem: "Pela Lei nº 8.080/1990, as Comissões Intergestores Bipartite e Tripartite são reconhecidas como:",
      options: ["órgãos de controle social com participação paritária de usuários.", "foros de negociação e pactuação entre gestores quanto aos aspectos operacionais do SUS.", "instâncias de julgamento ético de profissionais.", "conselhos consultivos do Ministério da Saúde."], correct: 1,
      explanation: "Art. 14-A: CIB e CIT são foros de negociação e pactuação entre gestores. Controle social é feito por Conferências e Conselhos." }),
    mcq({ key: "sus-8080-6", section: "municipio", difficulty: "media",
      stem: "Compete à direção municipal do SUS, segundo o art. 18 da Lei nº 8.080/1990:",
      options: ["executar serviços de vigilância epidemiológica, vigilância sanitária, alimentação e nutrição, saneamento básico, saúde do trabalhador e saúde bucal.", "definir a política nacional de medicamentos.", "coordenar o sistema nacional de sangue.", "editar normas gerais para todo o país."], correct: 0,
      explanation: "O inciso IV do art. 18 lista os serviços que o município executa." }),
    mcq({ key: "sus-8080-7", section: "privado-complementar", difficulty: "media",
      stem: "Quando as disponibilidades do SUS forem insuficientes para garantir a cobertura assistencial de uma área, a lei permite recorrer à iniciativa privada, tendo preferência:",
      options: ["as empresas de maior porte.", "as entidades filantrópicas e as sem fins lucrativos.", "as operadoras de planos de saúde.", "os hospitais universitários estrangeiros."], correct: 1,
      explanation: "Arts. 24 e 25: participação complementar por contrato ou convênio, com preferência às filantrópicas e sem fins lucrativos." }),
    mcq({ key: "sus-8080-8", section: "direito-e-determinantes", difficulty: "dificil",
      stem: "Na redação atual do art. 3º da Lei nº 8.080/1990, figura entre os determinantes e condicionantes da saúde:",
      options: ["a filiação partidária.", "a atividade física.", "o tipo sanguíneo.", "o regime previdenciário."], correct: 1,
      explanation: "A Lei nº 12.864/2013 deu nova redação ao art. 3º, incluindo a atividade física entre os determinantes e condicionantes." }),
  ],
  status: "published",
  standard: "v2",
  lastReviewedAt: REVIEWED_V2,
  reviewNotes: V2_REVIEW_NOTE + " O caso do surto é didático.",
};
