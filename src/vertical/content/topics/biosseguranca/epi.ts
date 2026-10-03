import type { TopicSeed } from "@/core/content/types";
import { mcq } from "../../helpers";
import { REVIEWED_V2, SRC, V2_REVIEW_NOTE, at } from "../../sources";

/*
 * Fontes: [0] NT GVIMS/GGTES/Anvisa 04/2020 (máscaras, luvas, sequência padrão
 *         de paramentação/desparamentação); [1] protocolo de precauções Ebserh;
 *         [2] NR 32 (fornecimento e uso de EPI e vestimentas).
 */

export const EPI: TopicSeed = {
  slug: "epi-paramentacao-e-desparamentacao",
  title: "EPI: paramentação e desparamentação",
  description: "Para que serve cada EPI, a ordem de colocar e de tirar, a técnica de retirar luvas e as regras da máscara N95/PFF2.",
  summary:
    "Equipamentos de proteção individual protegem o profissional contra sangue, fluidos e partículas. A NR 32 obriga o empregador a mantê-los disponíveis em número suficiente nos postos de trabalho e proíbe o trabalhador de deixar o local de trabalho com os EPIs e as vestimentas usadas. A Nota Técnica Anvisa nº 04/2020 descreve uma sequência padrão: para paramentar, higienizar as mãos, colocar avental, máscara N95/PFF2, gorro, óculos e protetor facial, higienizar as mãos e por último calçar as luvas; para desparamentar, retirar luvas e avental, higienizar as mãos, retirar protetor facial, óculos e gorro, higienizar as mãos, retirar a máscara e higienizar as mãos de novo — a desparamentação é um dos principais momentos de contaminação, por isso a higiene entre as etapas é obrigatória. A máscara cirúrgica é descartável, não pode ser limpa nem reutilizada e deve ser trocada quando úmida ou suja. A N95/PFF2 filtra no mínimo 95% das partículas de até 0,3 µm, exige verificação de vedação antes de cada uso, não pode ser compartilhada, é retirada pelos elásticos sem tocar a parte interna e não deve ter máscara cirúrgica sobreposta. As luvas são removidas dentro do quarto com técnica que evita tocar a parte externa, e as mãos são higienizadas logo depois; nunca se sai do quarto de luvas, e o uso de luvas duplas para a desparamentação não está indicado.",
  keyPoints: [
    "NR 32: EPI em número suficiente; proibido sair do local de trabalho com EPI e vestimentas usadas.",
    "Paramentação: mãos → avental → N95/PFF2 → gorro → óculos → protetor facial → mãos → luvas (por último).",
    "Desparamentação: luvas → avental → mãos → protetor facial → óculos → gorro → mãos → máscara → mãos.",
    "A desparamentação é um dos principais momentos de contaminação: higiene das mãos entre as etapas.",
    "Máscara cirúrgica: descartável, nunca limpar ou reutilizar; trocar quando úmida ou suja.",
    "N95/PFF2: ≥ 95% de filtração de partículas de até 0,3 µm; testar vedação antes de cada uso; não compartilhar.",
    "Não usar máscara cirúrgica sobre a N95/PFF2; retirar pelos elásticos sem tocar a parte interna.",
    "Luvas: retirar dentro do quarto, sem tocar a parte externa; higienizar as mãos logo depois; luva dupla não indicada.",
  ],
  map: {
    title: "Colocar e tirar",
    spec: {
      layout: "compare",
      center: "A ordem protege você",
      blocks: [
        { title: "Paramentação", tone: "teal", icon: "⬇️", items: ["1. Mãos", "2. Avental", "3. N95/PFF2", "4. Gorro", "5. Óculos", "6. Protetor facial", "7. Mãos", "8. Luvas"] },
        { title: "Desparamentação", tone: "rose", icon: "⬆️", items: ["1. Luvas", "2. Avental", "3. Mãos", "4. Protetor facial", "5. Óculos", "6. Gorro", "7. Mãos", "8. Máscara", "9. Mãos"] },
      ],
      footnote: "Sequência padrão descrita na NT Anvisa 04/2020. Siga sempre o POP da sua instituição.",
    },
  },
  sections: [
    {
      id: "visao-geral",
      kind: "visao",
      title: "EPI só protege se for posto e tirado do jeito certo",
      source: 0,
      blocks: [
        {
          type: "text",
          text: "O EPI é a ==barreira física== entre o profissional e o sangue, os fluidos e as partículas do paciente. O erro mais comum não é esquecer o EPI — é ==contaminar-se ao tirá-lo==. Por isso a banca cobra a ordem e a higiene das mãos entre as etapas.",
        },
        {
          type: "cards",
          items: [
            { title: "Disponível", text: "O empregador deve manter EPI ==em número suficiente== nos postos de trabalho (NR 32).", icon: "📦", tone: "blue" },
            { title: "Não sai do setor", text: "É proibido deixar o local de trabalho ==com o EPI e a vestimenta usados== (NR 32).", icon: "🚪", tone: "rose" },
            { title: "Capacitação", text: "Toda a equipe deve ser capacitada para colocar, usar, retirar e descartar o EPI (NT Anvisa).", icon: "🎓", tone: "green" },
          ],
        },
      ],
    },
    {
      id: "cada-epi",
      kind: "classificacao",
      title: "Para que serve cada EPI",
      source: 1,
      blocks: [
        {
          type: "compare",
          columns: ["Protege", "Quando usar", "Detalhe que cai"],
          rows: [
            { label: "Luvas", cells: ["Mãos", "Risco de contato com sangue, secreções, mucosas, superfícies contaminadas", "Calçar imediatamente antes; trocar entre procedimentos; retirar logo após"] },
            { label: "Avental", cells: ["Roupa e pele", "Risco de respingo de sangue ou fluidos", "Limpo, ==não necessariamente estéril=="] },
            { label: "Máscara cirúrgica", cells: ["Boca e nariz (gotículas)", "Precaução para gotículas; respingos", "Descartável; ==nunca limpar ou reutilizar=="] },
            { label: "N95/PFF2", cells: ["Vias respiratórias (aerossóis)", "Aerossóis e procedimentos geradores de aerossol", "Teste de vedação antes de cada uso; ==não compartilhar=="] },
            { label: "Óculos / protetor facial", cells: ["Mucosa dos olhos (e face)", "Procedimentos com risco de respingo", "Limpar com água e sabão e desinfetar após o uso"] },
            { label: "Gorro", cells: ["Cabelo e elásticos da máscara", "Procedimentos com aerossol e áreas que exigem", "Colocado após a máscara protege os elásticos"] },
          ],
        },
      ],
    },
    {
      id: "paramentacao",
      kind: "etapas",
      title: "Paramentação: a ordem de colocar",
      lead: "Sequência padrão da NT Anvisa 04/2020. Luvas sempre por último.",
      source: 0,
      blocks: [
        {
          type: "steps",
          items: [
            { title: "Higienizar as mãos", who: "tecnico" },
            { title: "Avental", why: "Vem antes da máscara e das luvas para que o punho da luva cubra o punho do avental." },
            { title: "Máscara N95/PFF2 (ou cirúrgica, conforme a precaução)", text: "Fazer a verificação de vedação (teste positivo e negativo) da N95/PFF2.", why: "Sem vedação, o ar entra pelas bordas e a máscara não protege." },
            { title: "Gorro", why: "Posto depois da máscara, protege os elásticos dela." },
            { title: "Óculos" },
            { title: "Protetor facial" },
            { title: "Higienizar as mãos", why: "Se a máscara foi tocada no teste de vedação (principalmente se já usada), as mãos estão contaminadas." },
            { title: "Luvas — por último", why: "Calçadas imediatamente antes do contato, ficam limpas para o cuidado." },
          ],
        },
      ],
    },
    {
      id: "desparamentacao",
      kind: "etapas",
      title: "Desparamentação: a ordem de tirar",
      lead: "É um dos principais momentos de contaminação do profissional.",
      source: 0,
      blocks: [
        {
          type: "steps",
          items: [
            { title: "Retirar as luvas", text: "Dentro do quarto, com a técnica que não toca a parte externa." },
            { title: "Retirar o avental" },
            { title: "Higienizar as mãos", why: "Luvas e avental são as peças mais expostas ao paciente." },
            { title: "Retirar o protetor facial" },
            { title: "Retirar os óculos" },
            { title: "Retirar o gorro" },
            { title: "Higienizar as mãos" },
            { title: "Retirar a máscara pelos elásticos", text: "Sem tocar a parte interna.", why: "A frente da máscara é a área mais contaminada; os elásticos são a parte segura." },
            { title: "Higienizar as mãos de novo" },
          ],
        },
        {
          type: "callout",
          variant: "atencao",
          title: "Luva dupla não resolve",
          text: "A NT diz que usar ==duas luvas para reduzir a contaminação na desparamentação não está indicado==: dá falsa sensação de proteção e há potencial de contaminação pelos microporos.",
        },
      ],
    },
    {
      id: "luvas-e-mascaras",
      kind: "tecnico",
      title: "Luvas e máscaras: as regras do técnico",
      source: 0,
      blocks: [
        {
          type: "steps",
          items: [
            { title: "Puxar a primeira luva pelo lado externo do punho", text: "Com os dedos da mão oposta.", who: "tecnico" },
            { title: "Segurar a luva retirada na mão ainda enluvada" },
            { title: "Introduzir o dedo sem luva na parte interna do punho da outra luva", text: "E retirá-la virando-a do avesso, envolvendo a primeira." },
            { title: "Descartar e higienizar as mãos imediatamente", why: "A higiene das mãos após remover luvas é uma das indicações do protocolo de higiene." },
          ],
        },
        {
          type: "dodont",
          do: [
            "Colocar e retirar luvas dentro do quarto ou da área de isolamento",
            "Trocar a máscara cirúrgica assim que ficar úmida ou suja",
            "Verificar a vedação da N95/PFF2 antes de cada uso",
            "Guardar a N95/PFF2 reutilizável em embalagem que não fique hermeticamente fechada",
            "Descartar a N95/PFF2 se a vedação falhar ou se a parte interna for contaminada",
          ],
          dont: [
            "Sair do quarto de luvas",
            "Tocar telefone, maçaneta ou porta de luvas",
            "Limpar ou reutilizar máscara cirúrgica",
            "Usar máscara cirúrgica sobreposta à N95/PFF2",
            "Compartilhar N95/PFF2 entre profissionais",
            "Usar N95 com válvula como controle de fonte (deixa sair o ar expirado)",
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
            { value: "95%", label: "filtração mínima da N95/PFF2", note: "partículas de até 0,3 µm" },
            { value: "8", label: "passos da paramentação na sequência padrão", note: "luvas são o 8º" },
            { value: "3×", label: "higiene das mãos na desparamentação", note: "após avental, após gorro, após máscara" },
            { value: "1º", label: "EPI a sair", note: "as luvas" },
            { value: "Último", label: "EPI a sair", note: "a máscara (pelos elásticos)" },
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
          title: "Fim do atendimento em isolamento respiratório",
          scenario: "Ao terminar a aspiração de um paciente em precaução para aerossóis, a técnica sai do quarto, tira a N95 no corredor e só depois remove luvas e avental.",
          question: "O que está errado e qual seria a sequência correta?",
          answer: "Ela saiu do quarto de luvas e inverteu a ordem: luvas e avental saem primeiro, dentro do quarto; a máscara é a última peça, retirada pelos elásticos, com higiene das mãos entre as etapas.",
          reasoning: [
            "Luvas são retiradas dentro do quarto; jamais se sai de luvas.",
            "Na sequência padrão: luvas → avental → mãos → protetor facial → óculos → gorro → mãos → máscara → mãos.",
            "Na precaução para aerossóis, a N95 só é retirada após sair do quarto — e depois das outras peças.",
            "Tirar a máscara com as mãos ainda contaminadas expõe boca e nariz.",
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
            { wrong: "As luvas são o primeiro EPI a ser colocado.", right: "Luvas são o ==último== a colocar e o ==primeiro== a tirar.", why: "Calçadas por último, chegam limpas ao paciente; retiradas primeiro, levam embora a maior contaminação." },
            { wrong: "A máscara é o primeiro EPI a ser retirado.", right: "A máscara é retirada ==por último==, pelos elásticos.", why: "Tirá-la antes, com mãos e avental contaminados, expõe as mucosas." },
            { wrong: "Máscara cirúrgica pode ser limpa com álcool e reutilizada.", right: "Máscara cirúrgica é ==descartável== e não pode ser limpa nem reutilizada.", why: "Úmida, ela perde a capacidade de filtração." },
            { wrong: "Usar máscara cirúrgica por cima da N95 aumenta a proteção.", right: "==Não== se usa cirúrgica sobreposta à N95/PFF2.", why: "A NT diz que a sobreposição não garante proteção e desperdiça EPI." },
            { wrong: "Luva dupla é a forma indicada de desparamentar com segurança.", right: "Luva dupla na desparamentação ==não está indicada==.", why: "Dá falsa sensação de proteção; a segurança vem da técnica e da higiene entre as etapas." },
            { wrong: "O técnico pode ir ao refeitório de avental se não houver respingo visível.", right: "É ==proibido sair do local de trabalho com EPI e vestimentas usadas== (NR 32).", why: "O EPI usado leva os microrganismos para fora da área assistencial." },
            { wrong: "Não é preciso higienizar as mãos entre a retirada dos EPIs.", right: "A higiene ==entre as etapas== deve ser rigorosamente seguida.", why: "A desparamentação é uma das principais vias de contaminação do profissional." },
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
            { slug: "precaucoes-padrao-e-especificas", title: "Precauções padrão e específicas", why: "Qual EPI cada precaução pede." },
            { slug: "higiene-das-maos-cinco-momentos", title: "Higiene das mãos: os 5 momentos", why: "A higiene entre a retirada de cada EPI." },
            { slug: "nr-32-seguranca-do-trabalhador", title: "NR 32: segurança do trabalhador da saúde", why: "As obrigações legais sobre EPI e vestimenta." },
            { slug: "residuos-de-servicos-de-saude-rdc-222", title: "Resíduos de serviços de saúde (RDC 222)", why: "Onde descartar o EPI usado." },
          ],
        },
      ],
    },
  ],
  sources: [
    at(SRC.nt04Anvisa, "seções 'Máscara cirúrgica', 'Máscara de proteção respiratória', 'Luvas' e sequência padrão de paramentação/desparamentação"),
    at(SRC.precaucoesEbserh, "item 6.1"),
    at(SRC.nr32, "itens 32.2.4.6 e 32.2.4.7"),
  ],
  questions: [
    mcq({ key: "bio-epi-1", section: "paramentacao", difficulty: "facil",
      stem: "Na sequência padrão de paramentação descrita pela Anvisa, o último equipamento a ser colocado é:",
      options: ["a máscara N95/PFF2.", "o avental.", "as luvas.", "o gorro."], correct: 2,
      explanation: "A sequência termina com higienizar as mãos e calçar as luvas, que chegam limpas ao contato com o paciente." }),
    mcq({ key: "bio-epi-2", section: "desparamentacao", difficulty: "facil",
      stem: "Na desparamentação, o primeiro equipamento a ser retirado é:",
      options: ["a máscara.", "as luvas.", "os óculos.", "o gorro."], correct: 1,
      explanation: "A sequência padrão começa retirando as luvas e o avental, peças mais contaminadas, e termina com a máscara." }),
    mcq({ key: "bio-epi-3", section: "desparamentacao", difficulty: "media",
      stem: "Sobre a retirada da máscara N95/PFF2, é correto afirmar:",
      options: ["deve ser a primeira peça retirada, para aliviar o desconforto.", "deve ser retirada pela parte frontal, com as mãos enluvadas.", "deve ser retirada pelos elásticos, sem tocar a parte interna, ao final da desparamentação.", "pode ser guardada em embalagem hermeticamente fechada para reuso."], correct: 2,
      explanation: "A máscara é a última peça, retirada pelos elásticos sem tocar a parte interna. Se reutilizada, guarda-se em embalagem que não fique hermeticamente fechada." }),
    mcq({ key: "bio-epi-4", section: "luvas-e-mascaras", difficulty: "facil",
      stem: "A máscara cirúrgica usada que ficou úmida deve ser:",
      options: ["limpa com álcool 70% e reutilizada.", "seca ao ar e reutilizada no mesmo plantão.", "substituída por uma nova, limpa e seca.", "coberta por uma N95."], correct: 2,
      explanation: "Máscaras cirúrgicas são descartáveis, não podem ser limpas nem reutilizadas e perdem a capacidade de filtração quando úmidas." }),
    mcq({ key: "bio-epi-5", section: "luvas-e-mascaras", difficulty: "media",
      stem: "Segundo a Nota Técnica Anvisa nº 04/2020, o uso de máscara cirúrgica sobreposta à N95/PFF2:",
      options: ["é obrigatório em procedimentos geradores de aerossol.", "não deve ser feito, pois não garante proteção e desperdiça EPI.", "dobra a eficácia de filtração.", "substitui o teste de vedação."], correct: 1,
      explanation: "A NT orienta que o profissional não use máscara cirúrgica sobreposta à N95, pois não garante proteção de filtração ou de contaminação e desperdiça EPI." }),
    mcq({ key: "bio-epi-6", section: "luvas-e-mascaras", difficulty: "media",
      stem: "Sobre o uso de luvas em área de isolamento, é correto:",
      options: ["retirá-las no corredor, após fechar a porta do quarto.", "retirá-las ainda dentro do quarto e higienizar as mãos imediatamente.", "manter as mesmas luvas para o próximo paciente, se não houver sujidade.", "usar duas luvas para facilitar a desparamentação."], correct: 1,
      explanation: "As luvas são retiradas dentro do quarto, com técnica correta, seguidas de higiene das mãos; jamais se sai do quarto de luvas, e a luva dupla não está indicada." }),
    mcq({ key: "bio-epi-7", section: "visao-geral", difficulty: "media",
      stem: "Pela NR 32, em relação aos EPIs e às vestimentas usadas nas atividades, os trabalhadores:",
      options: ["podem levá-los para lavar em casa.", "não devem deixar o local de trabalho com eles.", "podem usá-los no refeitório se estiverem limpos.", "devem comprá-los por conta própria."], correct: 1,
      explanation: "O item 32.2.4.6.2 proíbe deixar o local de trabalho com os EPIs e as vestimentas usadas. A vestimenta deve ser fornecida sem ônus para o empregado." }),
    mcq({ key: "bio-epi-8", section: "numeros", difficulty: "dificil",
      stem: "A máscara de proteção respiratória do tipo N95/PFF2 tem eficácia mínima de filtração de:",
      options: ["50% das partículas de até 5 µm.", "75% das partículas de até 1 µm.", "95% das partículas de até 0,3 µm.", "100% das partículas de qualquer tamanho."], correct: 2,
      explanation: "A NT descreve o respirador particulado com eficácia mínima na filtração de 95% de partículas de até 0,3 µm (N95, N99, N100, PFF2 ou PFF3)." }),
  ],
  status: "published",
  standard: "v2",
  lastReviewedAt: REVIEWED_V2,
  reviewNotes: V2_REVIEW_NOTE + " A sequência padrão de paramentação/desparamentação está na NT 04/2020 (seção de saúde bucal); conferir se o POP local difere. A justificativa 'punho da luva cobre o avental' é didática, não textual.",
};
