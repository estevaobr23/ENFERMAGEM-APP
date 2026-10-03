# Biblioteca visual V2 — pranchas 100% ilustrativas

Versão editorial: 2026-10-03  
Fonte de verdade: `src/vertical/content`  
Escopo: 31 temas publicados. O tema de RCP adulto permanece fora da produção enquanto estiver `review_required`.

## Resultado da produção

- 31 pranchas finais ilustradas e integradas: uma para cada tema publicado.
- 31 bases desenhadas pelo gerador, otimizadas em WebP de alta qualidade, e 31 SVGs finais autônomos com a base incorporada.
- 124 rótulos e setas vetoriais posicionados sobre cenas e objetos concretos.
- Duas iterações clínicas relevantes: lesão por pressão foi reformulada como modelo não gráfico de camadas; aleitamento foi corrigido para eliminar mamadeira e mostrar alimentação ao seio totalmente coberta.
- A coleção antiga em `/content/visual` não é mais consumida pelo manifesto; a aplicação usa exclusivamente `/content/visual-v2`.
- `V2-URG-03` continua `research_required` porque o tema de RCP ainda está `review_required` no conteúdo-fonte.

## O que mudou na nova auditoria

O conteúdo publicado cresceu de 16 para 31 temas. A expansão acrescentou quatro temas de SUS, seis de Biossegurança, dois de Ética e três de Cálculos. A biblioteca anterior foi descontinuada no aplicativo porque dependia demais de cartões, texto e formas abstratas.

## Regra visual da V2

- Cada tema recebe uma prancha principal totalmente ilustrada, construída do zero.
- A imagem deve explicar uma lógica funcional: jornada, comparação, sequência, anatomia, hierarquia ou transformação.
- Pelo menos 70% da área útil deve ser ocupada por cenas, pessoas, objetos, anatomia, ambientes ou materiais ilustrados.
- Fundo branco puro, ilustração de livro científico contemporâneo, luz plana, contornos limpos e cores localizadas.
- Nenhuma caixa de texto pode ser o elemento visual dominante.
- O modelo gera a base sem texto. Títulos, legendas curtas, números e setas são aplicados depois em SVG, evitando texto inventado ou ilegível.
- Anatomia e procedimentos são educativos, não sensacionalistas, sem gore e com exposição corporal limitada ao necessário.
- Setas devem terminar exatamente no objeto ou etapa descrita e nunca atravessar estruturas importantes.
- A prancha deve continuar compreensível mesmo antes da leitura dos rótulos.

## Matriz extensa de produção

| ID V2 | Tema | Prancha ilustrada | Lógica visual |
|---|---|---|---|
| V2-SUS-01 | SUS na Constituição | Constituição aberta, cidadãos, rede pública, três diretrizes e competências sanitárias | direito → organização → atuação |
| V2-SUS-02 | Princípios do SUS | Unidade de saúde central atendendo perfis diversos, conectada a prevenção, cuidado, informação, território e participação | princípio → ação concreta |
| V2-SUS-03 | Lei 8.080: organização e competências | Determinantes sociais ao redor da pessoa, rede assistencial e três níveis de gestão | determinantes → SUS → gestão |
| V2-SUS-04 | Conferências e Conselhos | Assembleia periódica, mesa permanente do conselho e fluxo de recursos para estados e municípios | participação + financiamento |
| V2-SUS-05 | Decreto 7.508 | Região formada por municípios, cinco serviços mínimos, quatro portas de entrada e rede hierarquizada | território → porta → referência |
| V2-SUS-06 | PNAB | Equipe de Saúde da Família na UBS conectada às casas do território e à rede especializada | território → cuidado longitudinal → coordenação |
| V2-FUN-01 | Nove certos | Técnico no leito verificando pulseira, prescrição, medicamento, dose, via, horário, registro, orientação e resposta | nove verificações no ato real |
| V2-FUN-02 | Prevenção de lesão por pressão | Paciente reposicionado, apoios, calcâneos flutuantes, pele protegida e corte comparativo dos estágios | risco → prevenção → profundidade |
| V2-BIO-01 | Cinco momentos | Um único leito com profissional aparecendo nos cinco instantes de contato e procedimento | sequência ao redor do paciente |
| V2-BIO-02 | Precauções | Quatro versões do mesmo atendimento: padrão, contato, gotículas e aerossóis | via de transmissão → barreira correta |
| V2-BIO-03 | Paramentação e desparamentação | Duas sequências espelhadas com profissional colocando e retirando EPI | vestir seguro → retirar sem contaminar |
| V2-BIO-04 | NR 32 | Trabalhador protegido diante de perfurocortante, risco biológico, vacinação e proibições no posto | risco → proteção ocupacional |
| V2-BIO-05 | Acidente biológico | Perfuração acidental seguida de lavagem, comunicação, avaliação e seguimento | primeiros minutos → conduta completa |
| V2-BIO-06 | Resíduos RDC 222 | Cinco coletores com resíduos reais e descarte do perfurocortante pelo usuário | resíduo → grupo → acondicionamento |
| V2-BIO-07 | Processamento RDC 15 | Instrumental percorrendo expurgo, limpeza, inspeção, embalagem, esterilização e armazenamento | sujo → limpo → estéril |
| V2-BIO-08 | PNSP e RDC 36 | Núcleo de segurança no centro do hospital, protocolos ao redor e notificação de evento | governança → barreiras → notificação |
| V2-URG-01 | Componentes da RUE | Jornada territorial da prevenção até atenção domiciliar, passando por AB, SAMU, estabilização, UPA e hospital | linha contínua de cuidado |
| V2-URG-02 | Diretrizes da RUE | Acolhimento e classificação de risco distribuindo diferentes urgências pela rede regional e multiprofissional | entrada → regulação → cuidado adequado |
| V2-MUL-01 | Idade gestacional | Calendário da DUM, três silhuetas gestacionais com altura uterina de 12/16/20 semanas e ultrassom | informação disponível → método |
| V2-MUL-02 | Regra de Näegele | Calendário físico mostrando soma de dias, ajuste de mês e chegada à DPP | DUM → operações → DPP |
| V2-CRI-01 | Aleitamento | Três cenas: primeira hora, exclusividade até seis meses e alimentação complementar mantendo amamentação | linha do tempo funcional |
| V2-CRI-02 | Teste do pezinho | Bebê no colo, calcanhar abaixo do coração, regiões laterais seguras, lanceta e papel-filtro | posição → punção → coleta |
| V2-ETI-01 | Atribuições profissionais | Enfermeiro planejando/supervisionando, técnico executando cuidado e auxiliar em ações simples | responsabilidade → supervisão → execução |
| V2-ETI-02 | Sistema Cofen/Coren | Mapa do Brasil com Cofen nacional e Corens estaduais ligados a registro, fiscalização e ética | federal → regional → profissional |
| V2-ETI-03 | Código de Ética | Profissional entre cenas de direito, dever, sigilo, registro, recusa segura e proibições | decisão ética no cotidiano |
| V2-ETI-04 | Infrações e penalidades | Conduta inadequada entra no processo ético e progride pelas cinco penalidades | infração → apuração → consequência |
| V2-CAL-01 | Conversões | Balança, frascos, copos medidores, relógio e escada de unidades em transformação visual | unidade inicial → conversão → unidade final |
| V2-CAL-02 | Regra de três | Prescrição, frasco disponível e seringa conectados numa bancada de preparo | disponível → prescrito → volume a aspirar |
| V2-CAL-03 | Gotejamento | Bolsa, equipo macro/microgotas, câmara de gotejo, relógio e bomba ao fundo | volume + tempo → velocidade |
| V2-CAL-04 | Penicilina e rediluição | Frasco com pó, entrada do diluente, volume final, retirada de 1 mL e nova diluição | reconstituição → cálculo → rediluição |
| V2-CAL-05 | Insulina | Frascos límpido e leitoso, seringa U-100 e seringa comum comparadas | apresentação → graduação → volume correto |

## Protocolo para recusas do gerador

1. Manter o objetivo clínico e científico; nunca tentar ocultar a finalidade real.
2. Retirar palavras ambíguas e reforçar “material didático de saúde”, “adulto”, “não sensual” e “exposição mínima necessária”.
3. Preferir enquadramento lateral, roupa clínica e contato cuidador–paciente claramente assistencial.
4. Para aleitamento, usar mãe adulta com camisola hospitalar fechada, bebê cobrindo a região de contato e foco em posição corporal, vínculo e pega externa — sem mamilo ou nudez visível.
5. Se a composição continuar recusada, dividir o conceito em cenas ainda mais neutras sem remover a informação clínica essencial.
6. Uma recusa nunca autoriza substituir a prancha por cartões genéricos.

## Critérios de aprovação

- O conteúdo principal é reconhecível sem ler.
- Não há texto gerado pelo modelo, logotipo ou marca-d'água.
- Pessoas, objetos, EPI, materiais e anatomia estão coerentes com a cena.
- Cada etapa possui direção visual inequívoca.
- Rótulos vetoriais têm no máximo seis palavras.
- A versão mobile não exige zoom para identificar as cenas principais.
- Nenhum tema `review_required` é apresentado como conteúdo aprovado.
