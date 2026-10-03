# Prompts individuais de produção

Todos os prompts usam o caso `scientific-educational`. Para SVGs, “gerar” significa construir deterministicamente no projeto, com texto vetorial em português. Para bases raster, o gerador não deve escrever texto; labels e setas pertencem ao aplicativo.

`NEG-STD`: fundo colorido, cenário hospitalar, texto rasterizado, watermark, logo, anatomia deformada, estruturas ou membros extras, duplicações, proporções impossíveis, cartoon infantil, gore, sangue desnecessário, sexualização, arte abstrata e decoração.

## P0 — essenciais

### SUS-PRI-001

```text
ID: SUS-PRI-001
CATEGORIA: SUS
TEMA: Princípios do SUS na Lei 8.080
TIPO: Mapa mental SVG
FINALIDADE: Organizar o art. 7º em cinco famílias memoráveis.
PROMPT: Criar SVG 1200×900, fundo branco, hub central azul “Lei 8.080/1990 · art. 7º” e cinco ramos sem cruzamentos: Acesso, Cuidado, Informação, Organização e Sociedade. Cada ramo deve usar ícone linear próprio, cartão claro e lista curta conforme o conteúdo local. Incluir rodapé “O texto do art. 7º diz igualdade, não equidade.”
NEGATIVE: NEG-STD; não representar anatomia; não trocar igualdade por equidade.
LABELS A SEREM COLOCADOS PELO APP: Universalidade; Igualdade; Integralidade; Informação; Epidemiologia; Descentralização; Regionalização; Participação; Atenção humanizada.
FONTE A VALIDAR: Lei 8.080/1990, art. 7º.
FORMATO RECOMENDADO: SVG
PROPORÇÃO: 4:3
PRIORIDADE: P0
```

### SUS-PAR-001

```text
ID: SUS-PAR-001
CATEGORIA: SUS
TEMA: Conferências e Conselhos de Saúde
TIPO: Comparativo SVG
FINALIDADE: Diferenciar as duas instâncias colegiadas.
PROMPT: Criar SVG 1200×900 com duas colunas equivalentes. Esquerda azul: Conferência de Saúde, calendário de 4 anos, avaliar e propor diretrizes. Direita verde: Conselho de Saúde, caráter permanente e deliberativo, composição em quatro segmentos, controle da execução e homologação. Uma faixa inferior deve mostrar paridade: usuários = conjunto dos demais segmentos.
NEGATIVE: NEG-STD; não sugerir que conferência é permanente; não omitir paridade.
LABELS A SEREM COLOCADOS PELO APP: Conferência; Conselho; 4 anos; permanente; deliberativo; paridade.
FONTE A VALIDAR: Lei 8.142/1990, art. 1º.
FORMATO RECOMENDADO: SVG
PROPORÇÃO: 4:3
PRIORIDADE: P0
```

### FUN-MED-001

```text
ID: FUN-MED-001
CATEGORIA: Fundamentos
TEMA: Os 9 certos
TIPO: Fluxograma SVG
FINALIDADE: Fixar os nove itens na ordem usada pelo protocolo.
PROMPT: Criar SVG 1200×900 com três estações horizontais ligadas por setas teal: “Quem e o quê”, “Como e quando”, “Depois”. Distribuir os nove badges numerados: 1 paciente, 2 medicamento, 8 forma; 3 via, 4 hora, 5 dose; 6 registro, 7 orientação, 9 resposta. Usar ícones lineares de pulseira, medicamento, via, relógio, balança, prontuário, conversa, forma farmacêutica e observação.
NEGATIVE: NEG-STD; não renumerar; não mostrar prescrição ou dose real.
LABELS A SEREM COLOCADOS PELO APP: os nove certos completos.
FONTE A VALIDAR: Protocolo MS/Anvisa de medicamentos, item 7.1.1.
FORMATO RECOMENDADO: SVG
PROPORÇÃO: 4:3
PRIORIDADE: P0
```

### FUN-UPP-001

```text
ID: FUN-UPP-001
CATEGORIA: Fundamentos
TEMA: Prevenção de úlcera por pressão
TIPO: Anatomia funcional
FINALIDADE: Localizar pontos de pressão e comunicar reposicionamento.
PROMPT: Ilustração médica editorial de livro científico, vista lateral de um corpo adulto neutro deitado em leito simplificado, com pele e anatomia externa proporcionais. Destacar por halos didáticos discretos a região occipital, escápula/cotovelo, sacro/nádega, tornozelo e calcâneo; mostrar uma segunda silhueta lateral inclinada para sugerir mudança de decúbito. Fundo branco puro, luz plana, contorno limpo, grande área livre para setas e labels SVG, sem texto incorporado.
NEGATIVE: NEG-STD; sem ferida aberta; sem ambiente hospitalar; sem tubos.
LABELS A SEREM COLOCADOS PELO APP: Sacro; Nádegas; Calcâneos; Tornozelos; Áreas sob dispositivos; Reposicionar.
FONTE A VALIDAR: Protocolo UPP, itens 7.3 e 7.4.
FORMATO RECOMENDADO: WebP + overlay SVG
PROPORÇÃO: 4:3
PRIORIDADE: P0
```

### BIO-HM-001

```text
ID: BIO-HM-001
CATEGORIA: Biossegurança
TEMA: Higiene das mãos — 5 momentos
TIPO: Procedimento visual
FINALIDADE: Relacionar cada momento à zona do paciente.
PROMPT: Ilustração científica limpa em cinco pequenos quadros ao redor de uma cena central simplificada de paciente em leito e profissional de enfermagem. Quadro 1: antes de tocar o paciente; 2: antes de procedimento limpo/asséptico; 3: após risco de exposição a fluidos; 4: após tocar o paciente; 5: após tocar superfície próxima. Usar mãos e pontos de contato claros, fundo branco, verde e azul apenas nos realces, sem texto nem números, espaço para setas/labels SVG.
NEGATIVE: NEG-STD; sem sangue; sem agulha exposta; sem mãos deformadas.
LABELS A SEREM COLOCADOS PELO APP: 1–5 e nomes dos momentos.
FONTE A VALIDAR: Protocolo de Higiene das Mãos, itens 5 e 8.
FORMATO RECOMENDADO: WebP + overlay SVG
PROPORÇÃO: 4:3
PRIORIDADE: P0
```

### BIO-PNSP-001

```text
ID: BIO-PNSP-001
CATEGORIA: Biossegurança
TEMA: PNSP e RDC 36
TIPO: Fluxograma SVG
FINALIDADE: Mostrar do conceito à notificação.
PROMPT: Criar SVG 1200×900 com fluxo vertical em três blocos: conceitos da Portaria 529; direção constitui NSP e NSP elabora PSP; notificação. No primeiro, diferenciar incidente, evento adverso e segurança. No último, dois relógios: mensal até 15º dia útil e óbito em até 72 h. Conectores verdes e azuis, destaque rosa apenas para notificação de óbito.
NEGATIVE: NEG-STD; não transformar o gráfico em protocolo assistencial ao paciente.
LABELS A SEREM COLOCADOS PELO APP: Incidente; Evento adverso; NSP; PSP; 15º dia útil; 72 h.
FONTE A VALIDAR: Portaria 529/2013 e RDC 36/2013.
FORMATO RECOMENDADO: SVG
PROPORÇÃO: 4:3
PRIORIDADE: P0
```

### URG-RUE-001

```text
ID: URG-RUE-001
CATEGORIA: Urgência e Emergência
TEMA: Componentes da RUE
TIPO: Fluxograma SVG
FINALIDADE: Memorizar os oito componentes sem criar uma sequência clínica rígida.
PROMPT: Criar SVG 1200×900 em percurso serpentino com quatro estações e dois componentes em cada: antes da urgência; chegar rápido; estabilizar; continuar o cuidado. Cada componente deve ter cartão próprio e ícone linear. Inserir observação de que a disposição é didática, não ordem obrigatória de atendimento.
NEGATIVE: NEG-STD; não apresentar como algoritmo clínico; não omitir nenhum dos oito componentes.
LABELS A SEREM COLOCADOS PELO APP: nomes oficiais dos 8 componentes.
FONTE A VALIDAR: Portaria 1.600/2011, art. 4º.
FORMATO RECOMENDADO: SVG
PROPORÇÃO: 4:3
PRIORIDADE: P0
```

### URG-RUE-002

```text
ID: URG-RUE-002
CATEGORIA: Urgência e Emergência
TEMA: Diretrizes da RUE
TIPO: Mapa mental SVG
FINALIDADE: Agrupar as diretrizes em quatro eixos.
PROMPT: Criar SVG 1200×900 com hub central rosa “RUE · art. 2º” e quatro ramos: Porta de entrada, Para todos, Em rede, Jeito de cuidar. Usar semáforo, pessoas, rede territorial e equipe como ícones. Rodapé: “Nesta portaria aparece equidade.”
NEGATIVE: NEG-STD; não inserir classificação de risco por cores nem parâmetros clínicos.
LABELS A SEREM COLOCADOS PELO APP: Acolhimento; Classificação de risco; Universalidade; Equidade; Integralidade; Regionalização; Humanização; Equipe multiprofissional.
FONTE A VALIDAR: Portaria 1.600/2011, art. 2º.
FORMATO RECOMENDADO: SVG
PROPORÇÃO: 4:3
PRIORIDADE: P0
```

### WOM-IG-001

```text
ID: WOM-IG-001
CATEGORIA: Saúde da Mulher
TEMA: Idade gestacional
TIPO: Anatomia ilustrada
FINALIDADE: Comparar os marcos uterinos de 12, 16 e 20 semanas.
PROMPT: Três vistas laterais médicas equivalentes do tronco feminino, da sínfise púbica ao abdome, sem rosto e sem sexualização. Em cada painel mostrar contorno externo discreto e útero gestacional cientificamente coerente: 12 semanas palpável na sínfise púbica; 16 semanas com fundo entre sínfise e cicatriz umbilical; 20 semanas com fundo na altura da cicatriz umbilical. Estilo atlas moderno, fundo branco, cores anatômicas naturais, sem texto ou números, espaço lateral para labels e linhas SVG.
NEGATIVE: NEG-STD; sem nudez desnecessária; sem feto detalhado; sem órgãos extras.
LABELS A SEREM COLOCADOS PELO APP: Sínfise púbica; Cicatriz umbilical; 12 semanas; 16 semanas; 20 semanas.
FONTE A VALIDAR: CAB 32, item 5.5.
FORMATO RECOMENDADO: WebP + overlay SVG
PROPORÇÃO: 4:3
PRIORIDADE: P0
```

### WOM-DPP-001

```text
ID: WOM-DPP-001
CATEGORIA: Saúde da Mulher
TEMA: Regra de Näegele
TIPO: Fórmula visual SVG
FINALIDADE: Mostrar a transformação de DUM em DPP.
PROMPT: Criar SVG 1200×900 com calendário à esquerda, seta central e calendário à direita. Entre eles, três cartões: somar 7 aos dias; subtrair 3 meses ou somar 9 de janeiro a março; ajustar mês e ano quando os dias ultrapassarem o mês. Fórmulas como texto vetorial legível, violeta e azul, fundo branco.
NEGATIVE: NEG-STD; não rasterizar números; não apresentar como substituto de avaliação pré-natal.
LABELS A SEREM COLOCADOS PELO APP: DUM; +7 dias; −3 meses; +9 meses; ajuste; DPP.
FONTE A VALIDAR: CAB 32, item 5.6.
FORMATO RECOMENDADO: SVG
PROPORÇÃO: 4:3
PRIORIDADE: P0
```

### CHI-AM-001

```text
ID: CHI-AM-001
CATEGORIA: Saúde da Criança
TEMA: Aleitamento materno
TIPO: Linha do tempo ilustrada
FINALIDADE: Fixar início, exclusividade e continuidade.
PROMPT: Criar SVG 1200×900 em três estações conectadas: 1ª hora de vida, 0–6 meses e 6 meses–2 anos ou mais. Usar ícones editoriais abstratos de acolhimento, gota de leite e alimentação complementar; manter texto vetorial curto e setas determinísticas. Fundo branco, âmbar/verde/azul, legível em mobile.
NEGATIVE: NEG-STD; sem mamadeira na fase exclusiva; sem fotografia; sem exposição corporal.
LABELS A SEREM COLOCADOS PELO APP: 1ª hora; 0–6 meses; 6 meses–2 anos ou mais; só leite materno; alimentação complementar.
FONTE A VALIDAR: Guia Alimentar para Crianças Brasileiras Menores de 2 Anos, 2019.
FORMATO RECOMENDADO: SVG
PROPORÇÃO: 4:3
PRIORIDADE: P0
```

### CHI-TP-001

```text
ID: CHI-TP-001
CATEGORIA: Saúde da Criança
TEMA: Teste do pezinho
TIPO: Anatomia ilustrada
FINALIDADE: Identificar as laterais seguras da região plantar do calcanhar.
PROMPT: Ilustração científica isolada da planta do pé de um recém-nascido, proporcional e neutra, com duas zonas laterais do calcanhar destacadas em verde suave e a região central preservada sem destaque. Incluir uma pequena vista lateral do bebê no colo com o calcanhar abaixo do nível do coração. Fundo branco, contornos limpos, sem perfuração, sem sangue, sem texto, espaço para setas SVG.
NEGATIVE: NEG-STD; sem agulha; sem ferida; sem pé adulto; sem dedos extras.
LABELS A SEREM COLOCADOS PELO APP: Lateral medial; Lateral lateral; Evitar centro; Calcanhar abaixo do coração.
FONTE A VALIDAR: Manual Técnico de Triagem Neonatal Biológica, 2016.
FORMATO RECOMENDADO: WebP + overlay SVG
PROPORÇÃO: 4:3
PRIORIDADE: P0
```

### ETH-ATR-001

```text
ID: ETH-ATR-001
CATEGORIA: Ética e Legislação
TEMA: Atribuições profissionais
TIPO: Comparativo SVG
FINALIDADE: Separar atribuições do técnico e atos privativos do enfermeiro.
PROMPT: Criar SVG 1200×900 em duas colunas. Coluna teal “Técnico de Enfermagem”: participa da programação; executa ações exceto privativas; assiste o enfermeiro; integra a equipe; atua sob orientação e supervisão. Coluna slate “Privativo do Enfermeiro”: consulta, prescrição da assistência, cuidados diretos a grave com risco de vida, maior complexidade técnica. Rodapé com cadeia de supervisão.
NEGATIVE: NEG-STD; não mostrar o técnico como profissional autônomo sem supervisão.
LABELS A SEREM COLOCADOS PELO APP: conteúdo legal resumido da matriz.
FONTE A VALIDAR: Lei 7.498/1986, arts. 11, 12 e 15; Decreto 94.406/1987.
FORMATO RECOMENDADO: SVG
PROPORÇÃO: 4:3
PRIORIDADE: P0
```

### ETH-COD-001

```text
ID: ETH-COD-001
CATEGORIA: Ética e Legislação
TEMA: Código de Ética
TIPO: Mapa mental SVG
FINALIDADE: Mostrar a estrutura do Código e os temas cobrados.
PROMPT: Criar SVG 1200×900 com hub “Resolução Cofen 564/2017” e cinco ramos: Direitos, Deveres, Proibições, Infrações e Penalidades, Aplicação das Penalidades. Adicionar quatro badges de revisão: sigilo, prescrição, medicamento e penalidades. Usar cinza-azulado com alertas âmbar/rosa, conectores limpos.
NEGATIVE: NEG-STD; não criar regra jurídica nova; não resumir cassação como competência do Coren.
LABELS A SEREM COLOCADOS PELO APP: cinco capítulos; arts. 46, 52, 78, 108 e 109.
FONTE A VALIDAR: Resolução Cofen 564/2017.
FORMATO RECOMENDADO: SVG
PROPORÇÃO: 4:3
PRIORIDADE: P0
```

### CAL-GOT-001

```text
ID: CAL-GOT-001
CATEGORIA: Cálculos
TEMA: Gotejamento
TIPO: Fórmula visual SVG
FINALIDADE: Comparar macrogotas e microgotas.
PROMPT: Criar SVG 1200×900 com conversão central “1 mL = 20 gotas = 60 microgotas”. Abaixo, duas colunas: gotas/min com equipo de macrogotas e fórmula V ÷ (T × 3); microgotas/min com equipo correspondente e fórmula V ÷ T. Incluir legenda “V em mL; T em horas” e aviso “exercício educacional”.
NEGATIVE: NEG-STD; não usar imagem raster para fórmulas; não sugerir programação clínica real.
LABELS A SEREM COLOCADOS PELO APP: conversões, fórmulas, unidades e aviso.
FONTE A VALIDAR: Coren-SP, Cálculo Seguro — Volume I.
FORMATO RECOMENDADO: SVG
PROPORÇÃO: 4:3
PRIORIDADE: P0
```

### CAL-REG-001

```text
ID: CAL-REG-001
CATEGORIA: Cálculos
TEMA: Regra de três
TIPO: Fórmula visual SVG
FINALIDADE: Ensinar a montagem por unidades iguais.
PROMPT: Criar SVG 1200×900 com três estações laranja→azul→verde: Tenho, Quero, Resolvo. Mostrar duas linhas alinhadas por unidade, setas de multiplicação cruzada e fórmula geral “x = prescrito × volume disponível ÷ quantidade disponível”. Texto matemático vetorial e espaçamento amplo.
NEGATIVE: NEG-STD; não misturar mg e mL na mesma coluna; não rasterizar a fórmula.
LABELS A SEREM COLOCADOS PELO APP: Tenho; Quero; Resolvo; mg; mL; x.
FONTE A VALIDAR: Coren-SP, Cálculo Seguro — Volume I.
FORMATO RECOMENDADO: SVG
PROPORÇÃO: 4:3
PRIORIDADE: P0
```

## P1 — alta prioridade

### SUS-PAR-002

```text
ID: SUS-PAR-002
CATEGORIA: SUS
TEMA: Requisitos para receber recursos
TIPO: Fluxograma SVG
FINALIDADE: Revisar os seis requisitos do art. 4º.
PROMPT: SVG 1200×900 com seis cartões numerados conectados a um cofre/fundo central; texto curto, ícones lineares e rodapé sobre administração pela esfera estadual/União quando houver descumprimento.
NEGATIVE: NEG-STD; não inventar percentuais.
LABELS A SEREM COLOCADOS PELO APP: Fundo; Conselho; Plano; Relatório de Gestão; Contrapartida; PCCS/comissão.
FONTE A VALIDAR: Lei 8.142/1990, art. 4º.
FORMATO RECOMENDADO: SVG
PROPORÇÃO: 4:3
PRIORIDADE: P1
```

### FUN-UPP-002

```text
ID: FUN-UPP-002
CATEGORIA: Fundamentos
TEMA: Estágios de UPP
TIPO: Comparativo anatômico
FINALIDADE: Diferenciar profundidade e tecidos envolvidos.
PROMPT: Seis cortes esquemáticos de pele, alinhados e não fotorrealistas, mostrando progressão I–IV, inclassificável e suspeita de lesão profunda. Camadas anatômicas proporcionais, cores naturais, lesões simplificadas sem sangue e sem textura gráfica, fundo branco, sem texto, espaço para labels SVG.
NEGATIVE: NEG-STD; sem gore; sem secreção; sem aparência fotográfica de ferida.
LABELS A SEREM COLOCADOS PELO APP: Estágio I; II; III; IV; Inclassificável; Lesão profunda; Pele; Subcutâneo; Músculo; Osso.
FONTE A VALIDAR: Protocolo UPP, item 4.
FORMATO RECOMENDADO: WebP + overlay SVG
PROPORÇÃO: 4:3
PRIORIDADE: P1
```

### BIO-HM-002

```text
ID: BIO-HM-002
CATEGORIA: Biossegurança
TEMA: Álcool × água e sabonete
TIPO: Comparativo SVG
FINALIDADE: Escolher o método conforme sujidade e tempo.
PROMPT: SVG 1200×900 em duas colunas com frasco de preparação alcoólica e pia/sabonete. Álcool: mãos não visivelmente sujas, 20–30 s. Água e sabonete: sujidade visível, sangue, fluidos ou excreções, 40–60 s. Usar relógios grandes e decisão central simples.
NEGATIVE: NEG-STD; não dizer que álcool substitui lavagem quando há sujidade visível.
LABELS A SEREM COLOCADOS PELO APP: 20–30 s; 40–60 s; visivelmente sujas.
FONTE A VALIDAR: Protocolo de Higiene das Mãos, itens 5.1–5.3.
FORMATO RECOMENDADO: SVG
PROPORÇÃO: 4:3
PRIORIDADE: P1
```

### BIO-PNSP-002

```text
ID: BIO-PNSP-002
CATEGORIA: Biossegurança
TEMA: Plano de Segurança do Paciente
TIPO: Infográfico síntese SVG
FINALIDADE: Memorizar os núcleos do PSP.
PROMPT: SVG 1200×900 com escudo central “PSP” e oito satélites: identificação, higiene das mãos, cirurgia, medicamentos, sangue/hemocomponentes, quedas/UPP, IRAS, comunicação/participação/ambiente seguro.
NEGATIVE: NEG-STD; não apresentar lista como exaustiva.
LABELS A SEREM COLOCADOS PELO APP: oito núcleos acima.
FONTE A VALIDAR: RDC 36/2013, art. 8º.
FORMATO RECOMENDADO: SVG
PROPORÇÃO: 4:3
PRIORIDADE: P1
```

### WOM-IG-002

```text
ID: WOM-IG-002
CATEGORIA: Saúde da Mulher
TEMA: Escolha do método de idade gestacional
TIPO: Fluxograma SVG
FINALIDADE: Relacionar informação disponível ao método.
PROMPT: SVG 1200×900 com pergunta central “Qual informação está disponível?” e três rotas: DUM certa→calendário/gestograma; apenas período do mês→dia 5/15/25; sem data→altura uterina/toque/movimentos→USG precoce se não determinar.
NEGATIVE: NEG-STD; não transformar em decisão clínica automatizada.
LABELS A SEREM COLOCADOS PELO APP: DUM; 5; 15; 25; altura uterina; USG.
FONTE A VALIDAR: CAB 32, item 5.5.
FORMATO RECOMENDADO: SVG
PROPORÇÃO: 4:3
PRIORIDADE: P1
```

### WOM-DPP-002

```text
ID: WOM-DPP-002
CATEGORIA: Saúde da Mulher
TEMA: Exemplo da Regra de Näegele
TIPO: Exercício resolvido SVG
FINALIDADE: Visualizar o transbordo do mês.
PROMPT: SVG 1200×900 com quatro passos verticais: DUM 27/01; 27+7=34; 34−31=3 e mês 1+9+1=11; DPP 03/11. Usar dois calendários, setas e caixas de operação.
NEGATIVE: NEG-STD; não alterar o exemplo do CAB 32.
LABELS A SEREM COLOCADOS PELO APP: todos os valores e operações.
FONTE A VALIDAR: CAB 32, item 5.6.
FORMATO RECOMENDADO: SVG
PROPORÇÃO: 4:3
PRIORIDADE: P1
```

### CHI-AM-002

```text
ID: CHI-AM-002
CATEGORIA: Saúde da Criança
TEMA: Pega e posicionamento
TIPO: Procedimento visual
FINALIDADE: Mostrar sinais visuais de uma mamada bem posicionada.
PROMPT: Criar SVG 1200×900 em três cartões conectados: corpo alinhado (orelha, ombro e quadril); boca bem aberta e lábios virados para fora; queixo tocando a mama e mais aréola visível acima do que abaixo. Texto vetorial curto, ícones abstratos neutros e setas determinísticas, sem representação corporal explícita.
NEGATIVE: NEG-STD; sem fotografia; sem exposição corporal; sem anatomia exagerada.
LABELS A SEREM COLOCADOS PELO APP: Corpo alinhado; Boca bem aberta; Lábios para fora; Queixo toca a mama; Mais aréola visível acima.
FONTE A VALIDAR: Guia Alimentar <2 anos, orientações de como amamentar.
FORMATO RECOMENDADO: SVG
PROPORÇÃO: 4:3
PRIORIDADE: P1
```

### CHI-TP-002

```text
ID: CHI-TP-002
CATEGORIA: Saúde da Criança
TEMA: Técnica do teste do pezinho
TIPO: Procedimento visual
FINALIDADE: Mostrar a sequência da coleta sem gore.
PROMPT: Cinco quadros didáticos: bebê no colo em posição vertical com calcanhar abaixo do coração; limpeza com gaze e álcool 70%; espera de secagem completa; lanceta própria tocando lateral plantar do calcanhar sem sangue visível; cartão de papel-filtro recebendo gotas e secando horizontalmente. Fundo branco, mãos proporcionais, equipamentos simples, sem texto e sem números.
NEGATIVE: NEG-STD; sem sangue gráfico; sem punção no centro; sem álcool iodado.
LABELS A SEREM COLOCADOS PELO APP: Posicionar; Limpar; Secar; Puncionar lateral; Preencher e secar.
FONTE A VALIDAR: Manual Técnico de Triagem Neonatal Biológica, 2016.
FORMATO RECOMENDADO: WebP + overlay SVG
PROPORÇÃO: 4:3
PRIORIDADE: P1
```

### ETH-ATR-002

```text
ID: ETH-ATR-002
CATEGORIA: Ética e Legislação
TEMA: Supervisão
TIPO: Fluxograma SVG
FINALIDADE: Tornar inequívoca a relação de orientação e supervisão.
PROMPT: SVG 1200×900 com três níveis: Enfermeiro orienta e supervisiona; Técnico executa ações dentro do escopo e participa da assistência; Auxiliar executa atividades simples sob supervisão. Setas descendentes de orientação e setas ascendentes de comunicação/registro, sem representar hierarquia de valor pessoal.
NEGATIVE: NEG-STD; não sugerir exercício independente do técnico.
LABELS A SEREM COLOCADOS PELO APP: Orientação; Supervisão; Execução; Comunicação.
FONTE A VALIDAR: Lei 7.498/1986, art. 15; Decreto 94.406/1987.
FORMATO RECOMENDADO: SVG
PROPORÇÃO: 4:3
PRIORIDADE: P1
```

### ETH-COD-002

```text
ID: ETH-COD-002
CATEGORIA: Ética e Legislação
TEMA: Prescrição problemática
TIPO: Fluxo decisório SVG
FINALIDADE: Revisar o art. 46 sem simular conduta clínica autônoma.
PROMPT: SVG 1200×900 com entrada “Prescrição” e três caminhos: sem assinatura/registro→recusar, salvo urgência/emergência; erro ou ilegível→esclarecer com prescritor e registrar; regular→seguir normas e checagens. Incluir aviso “material de revisão legal”.
NEGATIVE: NEG-STD; não acrescentar exceções; não dar aconselhamento jurídico individual.
LABELS A SEREM COLOCADOS PELO APP: assinatura; registro; urgência/emergência; erro/ilegível; esclarecer; registrar.
FONTE A VALIDAR: Resolução Cofen 564/2017, art. 46.
FORMATO RECOMENDADO: SVG
PROPORÇÃO: 4:3
PRIORIDADE: P1
```

### CAL-GOT-002

```text
ID: CAL-GOT-002
CATEGORIA: Cálculos
TEMA: Exercício de gotejamento
TIPO: Exercício resolvido SVG
FINALIDADE: Aplicar a fórmula com unidades.
PROMPT: SVG 1200×900 com sequência: dados fictícios 500 mL e 8 h; fórmula V÷(T×3); substituição 500÷(8×3); resultado 20,83; arredondamento 21 gotas/min. Aviso inferior “exercício educacional — não programar infusão real”.
NEGATIVE: NEG-STD; não ocultar unidades; não omitir arredondamento.
LABELS A SEREM COLOCADOS PELO APP: dados, fórmula, substituição, resultado, aviso.
FONTE A VALIDAR: Coren-SP, Cálculo Seguro — Volume I.
FORMATO RECOMENDADO: SVG
PROPORÇÃO: 4:3
PRIORIDADE: P1
```

### CAL-REG-002

```text
ID: CAL-REG-002
CATEGORIA: Cálculos
TEMA: Exercício de regra de três
TIPO: Exercício resolvido SVG
FINALIDADE: Aplicar a regra de três direta.
PROMPT: SVG 1200×900 com “Tenho 500 mg — 5 mL”, “Quero 150 mg — x mL”, multiplicação cruzada e “x=150×5÷500=1,5 mL”. Usar alinhamento por unidade e aviso educacional.
NEGATIVE: NEG-STD; não remover unidades; não sugerir dose para paciente real.
LABELS A SEREM COLOCADOS PELO APP: valores, unidades, x e aviso.
FONTE A VALIDAR: Coren-SP, Cálculo Seguro — Volume I.
FORMATO RECOMENDADO: SVG
PROPORÇÃO: 4:3
PRIORIDADE: P1
```

## Ativo bloqueado

`URG-RCP-001` não possui prompt de produção final porque o tópico está `review_required`. O prompt só poderá ser fechado depois que frequência, profundidade, relação compressão-ventilação e demais parâmetros forem conferidos diretamente na diretriz oficial AHA 2025 e o tema for publicado.
