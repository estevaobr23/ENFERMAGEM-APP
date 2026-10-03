-- GERADO por scripts/build-content-seed.ts — NÃO EDITE À MÃO.
-- Fonte: src/vertical/content. Idempotente.
begin;

-- ═════ SUS
insert into public.categories (product_id, slug, title, short_title, description, tone, icon, position, status)
values ((select id from public.products where key = 'revisao-tecnico-enfermagem'), 'sus', 'SUS', 'SUS', 'Constituição, Lei 8.080, Lei 8.142, Decreto 7.508 e Atenção Básica (PNAB).', 'blue', '🏛️', 0, 'published')
on conflict (product_id, slug) do update set title = excluded.title, short_title = excluded.short_title,
  description = excluded.description, tone = excluded.tone, icon = excluded.icon, position = excluded.position, status = excluded.status;

-- tema: SUS na Constituição (arts. 196 a 200)
insert into public.topics (category_id, slug, title, description, summary, key_points, sections, outline, reading_minutes, position, status, last_reviewed_at, review_notes)
values ((select id from public.categories where product_id = (select id from public.products where key = 'revisao-tecnico-enfermagem') and slug = 'sus'), 'sus-na-constituicao-arts-196-a-200', 'SUS na Constituição (arts. 196 a 200)', 'Saúde como direito de todos, as três diretrizes do art. 198, a participação privada complementar e as competências do SUS.', 'A Constituição de 1988 trata da saúde nos arts. 196 a 200. O art. 196 afirma que a saúde é direito de todos e dever do Estado, garantido por políticas sociais e econômicas que reduzam o risco de doença e outros agravos e pelo acesso universal e igualitário às ações e serviços de promoção, proteção e recuperação. O art. 197 declara as ações e serviços de saúde de relevância pública, executados diretamente ou por terceiros, inclusive pessoas físicas ou jurídicas de direito privado. O art. 198 diz que as ações e serviços públicos integram uma rede regionalizada e hierarquizada e constituem um sistema único, organizado por três diretrizes: descentralização com direção única em cada esfera de governo; atendimento integral, com prioridade para as atividades preventivas, sem prejuízo dos serviços assistenciais; e participação da comunidade. O SUS é financiado com recursos da seguridade social, da União, dos Estados, do DF e dos Municípios; a União aplica no mínimo 15% da receita corrente líquida. O art. 199 deixa a assistência livre à iniciativa privada, que participa do SUS de forma complementar, por contrato de direito público ou convênio, com preferência às entidades filantrópicas e sem fins lucrativos; é vedado destinar recursos públicos a instituições privadas com fins lucrativos e vedada a comercialização de órgãos, tecidos, sangue e derivados. O art. 200 lista competências do SUS, como executar vigilância sanitária, epidemiológica e saúde do trabalhador, ordenar a formação de recursos humanos e fiscalizar alimentos, bebidas e água para consumo humano.', array['Art. 196: saúde é direito de todos e dever do Estado; acesso universal e igualitário.', 'Art. 197: ações e serviços de saúde são de relevância pública.', 'Art. 198: rede regionalizada e hierarquizada; sistema único com 3 diretrizes.', 'Diretrizes: descentralização (direção única por esfera), atendimento integral (prioridade preventiva) e participação da comunidade.', 'União aplica no mínimo 15% da receita corrente líquida em saúde.', 'Art. 199: privado participa de forma complementar, por contrato de direito público ou convênio; preferência a filantrópicas e sem fins lucrativos.', 'Vedado recurso público para auxílio ou subvenção a privada com fins lucrativos; vedada comercialização de órgãos, tecidos e sangue.', 'Art. 200: SUS executa vigilância sanitária, epidemiológica e saúde do trabalhador e ordena a formação de recursos humanos.']::text[], '[{"id":"visao-geral","kind":"visao","title":"Onde o SUS nasce","lead":"A Lei 8.080 regulamenta; a Constituição define. Muita questão começa aqui.","source":0,"blocks":[{"type":"text","text":"A saúde está na Constituição dentro da ==seguridade social== (com previdência e assistência social), na Seção II, ==arts. 196 a 200==. Cada artigo tem um papel: direito, relevância pública, organização, participação privada e competências."},{"type":"steps","items":[{"title":"Art. 196 — o direito"},{"title":"Art. 197 — relevância pública"},{"title":"Art. 198 — sistema único e suas diretrizes; financiamento"},{"title":"Art. 199 — iniciativa privada"},{"title":"Art. 200 — competências do SUS"}]}]},{"id":"direito-e-relevancia","kind":"conceito","title":"Arts. 196 e 197: direito e relevância pública","source":0,"blocks":[{"type":"definition","term":"Art. 196","text":"A saúde é ==direito de todos e dever do Estado==, garantido mediante políticas sociais e econômicas que visem à ==redução do risco de doença e de outros agravos== e ao ==acesso universal e igualitário== às ações e serviços para sua ==promoção, proteção e recuperação==."},{"type":"definition","term":"Art. 197","text":"São de ==relevância pública== as ações e serviços de saúde. Cabe ao Poder Público dispor sobre sua regulamentação, fiscalização e controle; a execução pode ser ==direta ou através de terceiros==, inclusive pessoa física ou jurídica de direito privado."},{"type":"callout","variant":"dica","title":"Promoção, proteção e recuperação","text":"A tríade do art. 196 aparece de novo na Lei 8.080. Repare: a Constituição diz acesso ==universal e igualitário==."}]},{"id":"diretrizes-art-198","kind":"classificacao","title":"Art. 198: as três diretrizes do sistema único","source":0,"blocks":[{"type":"text","text":"As ações e serviços públicos de saúde integram uma ==rede regionalizada e hierarquizada== e constituem um ==sistema único==, organizado de acordo com:"},{"type":"cards","items":[{"title":"I · Descentralização","text":"Com ==direção única em cada esfera de governo==.","icon":"🗺️","tone":"amber"},{"title":"II · Atendimento integral","text":"Com ==prioridade para as atividades preventivas==, sem prejuízo dos serviços assistenciais.","icon":"🧩","tone":"teal"},{"title":"III · Participação da comunidade","text":"A comunidade participa da gestão do sistema.","icon":"🤝","tone":"green"}]},{"type":"callout","variant":"atencao","title":"Diretriz × princípio","text":"Na Constituição são ==diretrizes== (art. 198). A Lei 8.080 manda seguir essas diretrizes e ==ainda== os princípios do seu art. 7º."}]},{"id":"financiamento","kind":"numeros","title":"Financiamento e números que caem","source":0,"blocks":[{"type":"text","text":"O SUS é financiado com recursos do ==orçamento da seguridade social==, da União, dos Estados, do DF e dos Municípios, além de outras fontes (art. 198, § 1º). Cada ente aplica anualmente um mínimo em ações e serviços públicos de saúde."},{"type":"numbers","items":[{"value":"15%","label":"mínimo da União","note":"da receita corrente líquida do exercício (EC 86/2015)"},{"value":"3","label":"diretrizes do art. 198"},{"value":"196–200","label":"artigos da Seção II — Da Saúde"},{"value":"5 anos","label":"reavaliação da lei complementar dos percentuais","note":"pelo menos a cada cinco anos (art. 198, § 3º)"}]}]},{"id":"iniciativa-privada","kind":"cuidados","title":"Art. 199: a iniciativa privada","source":0,"blocks":[{"type":"dodont","do":["Assistência à saúde é livre à iniciativa privada","Privado participa do SUS de forma complementar, segundo as diretrizes do SUS","Por contrato de direito público ou convênio","Preferência às entidades filantrópicas e sem fins lucrativos"],"dont":["Recursos públicos para auxílios ou subvenções a privadas com fins lucrativos","Participação de empresas ou capital estrangeiro na assistência, salvo casos previstos em lei","Qualquer comercialização de órgãos, tecidos, substâncias humanas, sangue e derivados"]}]},{"id":"competencias-art-200","kind":"tecnico","title":"Art. 200: o que compete ao SUS","lead":"Lista de competências que aparece em questões de ''assinale a correta''.","source":0,"blocks":[{"type":"checklist","items":["Controlar e fiscalizar procedimentos, produtos e substâncias de interesse para a saúde; participar da produção de medicamentos, equipamentos, imunobiológicos e hemoderivados","Executar as ações de ==vigilância sanitária e epidemiológica== e as de ==saúde do trabalhador==","==Ordenar a formação de recursos humanos== na área de saúde","Participar da formulação da política e da execução das ações de ==saneamento básico==","Incrementar o desenvolvimento científico, tecnológico e a inovação","Fiscalizar e inspecionar ==alimentos==, incluindo teor nutricional, ==bebidas e águas== para consumo humano","Participar do controle de substâncias psicoativas, tóxicas e radioativas","Colaborar na proteção do meio ambiente, ==nele compreendido o do trabalho=="]}]},{"id":"caso","kind":"caso","title":"Situação-problema","source":0,"blocks":[{"type":"case","title":"Hospital privado no SUS","scenario":"Um município não tem leitos suficientes e quer usar leitos de um hospital privado com fins lucrativos e de uma santa casa filantrópica. Um vereador propõe também dar uma subvenção em dinheiro ao hospital privado para reformar a ala.","question":"O que a Constituição permite?","answer":"Contratar ou conveniar os serviços de forma complementar, com preferência para a santa casa; a subvenção ao hospital com fins lucrativos é vedada.","reasoning":["Art. 199, § 1º: participação complementar por contrato de direito público ou convênio.","Preferência às entidades filantrópicas e sem fins lucrativos.","Art. 199, § 2º: vedada a destinação de recursos públicos para auxílios ou subvenções a privadas com fins lucrativos."]}]},{"id":"como-a-banca-cobra","kind":"cobrado","title":"Como a banca cobra","source":0,"blocks":[{"type":"traps","items":[{"wrong":"O art. 198 prevê atendimento integral com prioridade para os serviços assistenciais.","right":"Prioridade para as ==atividades preventivas==, sem prejuízo dos assistenciais.","why":"A banca inverte a prioridade."},{"wrong":"A saúde é direito de todos e dever do Estado e da família, em igual medida.","right":"O art. 196 diz ==direito de todos e dever do Estado==.","why":"A Lei 8.080 é que acrescenta que o dever do Estado não exclui o das pessoas, família, empresas e sociedade."},{"wrong":"A iniciativa privada participa do SUS de forma substitutiva.","right":"De forma ==complementar==.","why":"Art. 199, § 1º."},{"wrong":"As instituições privadas com fins lucrativos têm preferência para participar do SUS.","right":"Preferência para ==filantrópicas e sem fins lucrativos==.","why":"Art. 199, § 1º."},{"wrong":"Descentralização com direção compartilhada entre as esferas.","right":"Descentralização com ==direção única em cada esfera de governo==.","why":"Art. 198, I."},{"wrong":"Fiscalizar alimentos e água não é competência do SUS.","right":"É competência do SUS (art. 200, VI).","why":"Inclui teor nutricional, bebidas e águas para consumo humano."},{"wrong":"A União aplica no mínimo 12% da receita corrente líquida.","right":"No mínimo ==15%== da receita corrente líquida.","why":"Redação dada pela EC 86/2015 ao art. 198, § 2º, I."}]}]},{"id":"conexoes","kind":"conexoes","title":"Conexões","blocks":[{"type":"links","items":[{"slug":"principios-do-sus-lei-8080","title":"Princípios do SUS na Lei 8.080","why":"Os princípios que se somam às diretrizes do art. 198."},{"slug":"lei-8080-organizacao-e-competencias","title":"Lei 8.080: organização, campo de atuação e competências","why":"A lei que regulamenta estes artigos."},{"slug":"participacao-da-comunidade-lei-8142","title":"Conferências e Conselhos de Saúde (Lei 8.142)","why":"Como a participação da comunidade funciona na prática."}]}]}]'::jsonb, array['Onde o SUS nasce', 'Arts. 196 e 197: direito e relevância pública', 'Art. 198: as três diretrizes do sistema único', 'Financiamento e números que caem', 'Art. 199: a iniciativa privada', 'Art. 200: o que compete ao SUS', 'Situação-problema', 'Como a banca cobra', 'Conexões']::text[], 6, 0, 'published', '2026-10-03'::date, 'Padrão v2: cada seção foi escrita a partir do texto original da fonte, baixado e lido em 2026-10-03 (conferência automatizada durante o desenvolvimento). Revisão por enfermeiro(a) obrigatória antes da venda.')
on conflict (slug) do update set category_id = excluded.category_id, title = excluded.title, description = excluded.description,
  summary = excluded.summary, key_points = excluded.key_points, sections = excluded.sections, outline = excluded.outline,
  reading_minutes = excluded.reading_minutes, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at, review_notes = excluded.review_notes;
insert into public.topic_sources (topic_id, position, source_title, source_organization, source_url, source_accessed_at, locator)
values ((select id from public.topics where slug = 'sus-na-constituicao-arts-196-a-200'), 0, 'Constituição da República Federativa do Brasil de 1988 — arts. 196 a 200 (Seção II — Da Saúde)', 'Presidência da República — Planalto', 'https://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm', '2026-10-03'::date, 'arts. 196 a 200')
on conflict (topic_id, position) do update set source_title = excluded.source_title, source_organization = excluded.source_organization,
  source_url = excluded.source_url, source_accessed_at = excluded.source_accessed_at, locator = excluded.locator;
delete from public.topic_sources s where s.topic_id = (select id from public.topics where slug = 'sus-na-constituicao-arts-196-a-200') and s.position >= 1
  and not exists (select 1 from public.questions x where x.source_id = s.id);
insert into public.visual_maps (topic_id, title, spec, status, last_reviewed_at)
values ((select id from public.topics where slug = 'sus-na-constituicao-arts-196-a-200'), 'Saúde na Constituição', '{"layout":"flow","center":"CF/1988 · arts. 196 a 200","blocks":[{"title":"196 · Direito","tone":"blue","icon":"⚖️","items":["Direito de todos, dever do Estado","Acesso universal e igualitário"]},{"title":"198 · Sistema único","tone":"teal","icon":"🧭","items":["Descentralização","Atendimento integral","Participação da comunidade"]},{"title":"199 · Privado","tone":"amber","icon":"🤝","items":["Livre à iniciativa privada","No SUS: complementar","Preferência: filantrópicas"]},{"title":"200 · Competências","tone":"green","icon":"🛠️","items":["Vigilâncias e saúde do trabalhador","Formação de RH","Alimentos, bebidas, água"]}]}'::jsonb, 'published', '2026-10-03'::date)
on conflict (topic_id) do update set title = excluded.title, spec = excluded.spec, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'sus-na-constituicao-arts-196-a-200'), 'sus-cf-1', 'Segundo o art. 196 da Constituição Federal, a saúde é:', 'Art. 196: a saúde é direito de todos e dever do Estado, garantido por políticas sociais e econômicas e pelo acesso universal e igualitário.', 'facil', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'sus-na-constituicao-arts-196-a-200') and position = 0), 'direito-e-relevancia', 0, 'published', '2026-10-03'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'sus-cf-1');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'sus-cf-1'), 'A', 'direito dos contribuintes da previdência e dever do Estado.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'sus-cf-1'), 'B', 'direito de todos e dever do Estado.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'sus-cf-1'), 'C', 'dever exclusivo da família.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'sus-cf-1'), 'D', 'direito de todos e dever dos municípios.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'sus-cf-1') and label not in ('A', 'B', 'C', 'D');
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'sus-na-constituicao-arts-196-a-200'), 'sus-cf-2', 'São diretrizes do Sistema Único de Saúde previstas no art. 198 da Constituição:', 'O art. 198 lista três diretrizes: descentralização com direção única, atendimento integral com prioridade preventiva e participação da comunidade.', 'facil', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'sus-na-constituicao-arts-196-a-200') and position = 0), 'diretrizes-art-198', 1, 'published', '2026-10-03'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'sus-cf-2');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'sus-cf-2'), 'A', 'universalidade, equidade e integralidade.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'sus-cf-2'), 'B', 'descentralização com direção única em cada esfera; atendimento integral com prioridade para as atividades preventivas; participação da comunidade.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'sus-cf-2'), 'C', 'centralização, hierarquização e privatização.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'sus-cf-2'), 'D', 'gratuidade, seletividade e distributividade.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'sus-cf-2') and label not in ('A', 'B', 'C', 'D');
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'sus-na-constituicao-arts-196-a-200'), 'sus-cf-3', 'Pela Constituição, o atendimento integral no SUS deve ter prioridade para:', 'Art. 198, II: atendimento integral, com prioridade para as atividades preventivas, sem prejuízo dos serviços assistenciais.', 'media', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'sus-na-constituicao-arts-196-a-200') and position = 0), 'diretrizes-art-198', 2, 'published', '2026-10-03'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'sus-cf-3');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'sus-cf-3'), 'A', 'os serviços assistenciais hospitalares.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'sus-cf-3'), 'B', 'as atividades preventivas, sem prejuízo dos serviços assistenciais.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'sus-cf-3'), 'C', 'os procedimentos de alta complexidade.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'sus-cf-3'), 'D', 'a atenção às urgências.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'sus-cf-3') and label not in ('A', 'B', 'C', 'D');
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'sus-na-constituicao-arts-196-a-200'), 'sus-cf-4', 'Sobre a participação da iniciativa privada no SUS, a Constituição estabelece que:', 'Art. 199, § 1º: participação complementar, por contrato de direito público ou convênio, preferência às filantrópicas e sem fins lucrativos.', 'media', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'sus-na-constituicao-arts-196-a-200') and position = 0), 'iniciativa-privada', 3, 'published', '2026-10-03'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'sus-cf-4');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'sus-cf-4'), 'A', 'é vedada em qualquer hipótese.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'sus-cf-4'), 'B', 'ocorre de forma complementar, mediante contrato de direito público ou convênio, com preferência às entidades filantrópicas e sem fins lucrativos.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'sus-cf-4'), 'C', 'ocorre de forma substitutiva quando o Estado não tiver serviços.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'sus-cf-4'), 'D', 'dá preferência às empresas de capital estrangeiro.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'sus-cf-4') and label not in ('A', 'B', 'C', 'D');
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'sus-na-constituicao-arts-196-a-200'), 'sus-cf-5', 'É vedado pela Constituição:', 'Art. 199, § 2º: é vedada a destinação de recursos públicos para auxílios ou subvenções às instituições privadas com fins lucrativos.', 'media', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'sus-na-constituicao-arts-196-a-200') and position = 0), 'iniciativa-privada', 4, 'published', '2026-10-03'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'sus-cf-5');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'sus-cf-5'), 'A', 'contratar serviços de entidades filantrópicas.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'sus-cf-5'), 'B', 'destinar recursos públicos para auxílios ou subvenções a instituições privadas com fins lucrativos.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'sus-cf-5'), 'C', 'a execução de serviços de saúde por pessoa jurídica de direito privado.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'sus-cf-5'), 'D', 'a participação da comunidade no SUS.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'sus-cf-5') and label not in ('A', 'B', 'C', 'D');
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'sus-na-constituicao-arts-196-a-200'), 'sus-cf-6', 'Compete ao SUS, nos termos do art. 200 da Constituição:', 'O inciso II do art. 200 atribui ao SUS executar as ações de vigilância sanitária e epidemiológica e de saúde do trabalhador.', 'media', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'sus-na-constituicao-arts-196-a-200') and position = 0), 'competencias-art-200', 5, 'published', '2026-10-03'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'sus-cf-6');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'sus-cf-6'), 'A', 'executar as ações de vigilância sanitária e epidemiológica, bem como as de saúde do trabalhador.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'sus-cf-6'), 'B', 'administrar o regime geral de previdência social.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'sus-cf-6'), 'C', 'emitir a carteira de trabalho.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'sus-cf-6'), 'D', 'legislar sobre direito penal sanitário.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'sus-cf-6') and label not in ('A', 'B', 'C', 'D');
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'sus-na-constituicao-arts-196-a-200'), 'sus-cf-7', 'De acordo com o art. 198, § 2º, I, da Constituição (redação da EC 86/2015), a União aplicará anualmente em ações e serviços públicos de saúde, no mínimo:', 'A redação dada pela EC 86/2015 fixa o mínimo da União em 15% da receita corrente líquida do exercício financeiro.', 'dificil', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'sus-na-constituicao-arts-196-a-200') and position = 0), 'financiamento', 6, 'published', '2026-10-03'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'sus-cf-7');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'sus-cf-7'), 'A', '10% da receita corrente bruta.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'sus-cf-7'), 'B', '12% da arrecadação de impostos.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'sus-cf-7'), 'C', '15% da receita corrente líquida do respectivo exercício.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'sus-cf-7'), 'D', '25% do orçamento da seguridade social.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'sus-cf-7') and label not in ('A', 'B', 'C', 'D');
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'sus-na-constituicao-arts-196-a-200'), 'sus-cf-8', 'O art. 197 da Constituição declara as ações e serviços de saúde como:', 'Art. 197: são de relevância pública, cabendo ao Poder Público regulamentação, fiscalização e controle; execução direta ou por terceiros, inclusive pessoa privada.', 'media', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'sus-na-constituicao-arts-196-a-200') and position = 0), 'direito-e-relevancia', 7, 'published', '2026-10-03'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'sus-cf-8');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'sus-cf-8'), 'A', 'de interesse exclusivamente privado.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'sus-cf-8'), 'B', 'de relevância pública, podendo ser executados diretamente ou através de terceiros.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'sus-cf-8'), 'C', 'monopólio da União.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'sus-cf-8'), 'D', 'atividade facultativa do Estado.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'sus-cf-8') and label not in ('A', 'B', 'C', 'D');

-- tema: Princípios do SUS na Lei 8.080
insert into public.topics (category_id, slug, title, description, summary, key_points, sections, outline, reading_minutes, position, status, last_reviewed_at, review_notes)
values ((select id from public.categories where product_id = (select id from public.products where key = 'revisao-tecnico-enfermagem') and slug = 'sus'), 'principios-do-sus-lei-8080', 'Princípios do SUS na Lei 8.080', 'Os 16 incisos do art. 7º, agrupados, com o contraste igualdade × equidade que mais derruba candidato.', 'O art. 7º da Lei nº 8.080/1990 diz que as ações e serviços públicos de saúde e os serviços privados contratados ou conveniados que integram o SUS seguem as diretrizes do art. 198 da Constituição e obedecem a princípios listados em incisos. Os primeiros são universalidade de acesso em todos os níveis de assistência; integralidade de assistência, entendida como conjunto articulado e contínuo de ações e serviços preventivos e curativos, individuais e coletivos, exigidos para cada caso em todos os níveis de complexidade; preservação da autonomia das pessoas na defesa de sua integridade física e moral; e igualdade da assistência, sem preconceitos ou privilégios de qualquer espécie. A lista inclui ainda direito à informação sobre a própria saúde, divulgação do potencial dos serviços, uso da epidemiologia para definir prioridades, participação da comunidade, descentralização político-administrativa com direção única em cada esfera (ênfase nos municípios, regionalização e hierarquização), integração executiva de saúde, meio ambiente e saneamento, conjugação de recursos dos entes, capacidade de resolução e organização para evitar duplicidade. Leis recentes acrescentaram atendimento específico a mulheres e vítimas de violência doméstica (XIV, 2017), proteção integral dos direitos humanos com atenção a maus-tratos, negligência e violência sexual contra crianças e adolescentes (XV, 2023) e atenção humanizada (XVI, 2025). O texto da lei fala em igualdade — ''equidade'' não está no art. 7º, embora apareça como princípio na Política Nacional de Atenção Básica.', array['Vale para o SUS público e para os privados contratados ou conveniados.', 'Universalidade de acesso em todos os níveis de assistência (I).', 'Integralidade: ações preventivas e curativas, individuais e coletivas, em todos os níveis de complexidade (II).', 'Igualdade da assistência, sem preconceitos ou privilégios (IV) — o art. 7º não diz equidade.', 'Epidemiologia define prioridades, alocação de recursos e orientação programática (VII).', 'Descentralização com direção única em cada esfera; ênfase nos municípios; regionalização e hierarquização (IX).', 'Capacidade de resolução em todos os níveis (XII) e evitar duplicidade de meios (XIII).', 'Incisos novos: XIV (2017), XV (2023) e XVI — atenção humanizada (2025).']::text[], '[{"id":"visao-geral","kind":"visao","title":"O artigo mais cobrado de SUS","source":0,"blocks":[{"type":"definition","term":"Art. 7º da Lei 8.080/1990","text":"As ações e serviços ==públicos== de saúde e os serviços ==privados contratados ou conveniados== que integram o SUS são desenvolvidos de acordo com as diretrizes do art. 198 da Constituição, obedecendo ainda aos princípios listados nos incisos.","note":"O privado que entra no SUS por contrato ou convênio também segue os princípios."},{"type":"cards","items":[{"title":"16 incisos","text":"A lista original tinha 13; leis posteriores incluíram XIV (2017), XV (2023) e XVI (2025).","icon":"📜","tone":"blue"},{"title":"Diretrizes + princípios","text":"Diretrizes vêm do art. 198 da CF; princípios, do art. 7º da lei. A banca adora trocar os nomes.","icon":"🔀","tone":"amber"}]}]},{"id":"os-16-principios","kind":"classificacao","title":"Os princípios, agrupados","lead":"Agrupe por ideia: fica mais fácil lembrar na hora da prova.","source":0,"blocks":[{"type":"cards","items":[{"title":"Acesso e igualdade","tag":"I · IV","text":"==Universalidade== de acesso em todos os níveis de assistência. ==Igualdade== da assistência, sem preconceitos ou privilégios de qualquer espécie.","icon":"🚪","tone":"blue"},{"title":"Integralidade","tag":"II","text":"Conjunto ==articulado e contínuo== de ações e serviços ==preventivos e curativos, individuais e coletivos==, exigidos para cada caso, em todos os níveis de complexidade.","icon":"🧩","tone":"teal"},{"title":"Pessoa e informação","tag":"III · V · VI","text":"Preservação da ==autonomia== na defesa da integridade física e moral. Direito à informação, às pessoas assistidas, sobre sua saúde. Divulgação do potencial dos serviços e de sua utilização.","icon":"ℹ️","tone":"violet"},{"title":"Epidemiologia","tag":"VII","text":"Uso da epidemiologia para estabelecer ==prioridades==, alocar recursos e orientar a programação.","icon":"📊","tone":"slate"},{"title":"Participação da comunidade","tag":"VIII","text":"Detalhada na Lei 8.142/1990 (Conferências e Conselhos).","icon":"🤝","tone":"green"},{"title":"Descentralização","tag":"IX","text":"Político-administrativa, com ==direção única em cada esfera==: a) ênfase na descentralização para os ==municípios==; b) ==regionalização e hierarquização== da rede.","icon":"🗺️","tone":"amber"},{"title":"Gestão integrada","tag":"X · XI · XIII","text":"Integração executiva de saúde, ==meio ambiente e saneamento básico==. Conjugação de recursos financeiros, tecnológicos, materiais e humanos dos entes. Evitar ==duplicidade de meios== para fins idênticos.","icon":"⚙️","tone":"orange"},{"title":"Resolutividade","tag":"XII","text":"Capacidade de resolução dos serviços em todos os níveis de assistência.","icon":"✅","tone":"teal"},{"title":"Proteção e humanização","tag":"XIV · XV · XVI","text":"Atendimento específico a mulheres e vítimas de violência doméstica (XIV). Proteção integral dos direitos humanos; atenção a maus-tratos, negligência e violência sexual contra crianças e adolescentes (XV). ==Atenção humanizada== (XVI).","icon":"🛡️","tone":"rose"}]}]},{"id":"igualdade-x-equidade","kind":"atencao","title":"Igualdade × equidade: a pegadinha número 1","source":1,"blocks":[{"type":"compare","columns":["Lei 8.080, art. 7º","PNAB (Portaria 2.436/2017)"],"rows":[{"label":"Termo","cells":["==Igualdade== da assistência, sem preconceitos ou privilégios","==Equidade== é um dos três princípios (com universalidade e integralidade)"]},{"label":"Ideia","cells":["Todos recebem assistência sem discriminação","Ofertar o cuidado ==reconhecendo as diferenças== e conforme as necessidades"]}]},{"type":"callout","variant":"atencao","title":"Como responder","text":"Se o enunciado diz ==''segundo o art. 7º da Lei 8.080''==, a resposta é igualdade. Se cita a PNAB ou a doutrina, equidade pode estar correta."}]},{"id":"linha-do-tempo-dos-incisos","kind":"etapas","title":"Incisos acrescentados depois de 1990","lead":"Questões recentes cobram o que entrou por lei nova.","source":0,"blocks":[{"type":"timeline","items":[{"when":"1990","what":"Texto original: incisos I a XIII."},{"when":"2017 · Lei 13.427","what":"XIV: atendimento público específico e especializado para mulheres e vítimas de violência doméstica (atendimento, acompanhamento psicológico, cirurgias plásticas reparadoras)."},{"when":"2023 · Lei 14.679","what":"XV: proteção integral dos direitos humanos dos usuários, com atenção a maus-tratos, negligência e violência sexual contra crianças e adolescentes."},{"when":"2024 · Lei 14.847","what":"Parágrafo único: mulher vítima de violência é atendida em local que garanta privacidade e restrinja o acesso de terceiros, em especial do agressor."},{"when":"2025 · Lei 15.126","what":"XVI: ==atenção humanizada==."}]}]},{"id":"no-dia-a-dia","kind":"tecnico","title":"Os princípios no dia a dia do técnico","source":0,"blocks":[{"type":"cards","items":[{"title":"Universalidade","text":"Atender quem chega, sem exigir vínculo de trabalho ou contribuição.","icon":"🚪","tone":"blue"},{"title":"Igualdade","text":"Sem preconceitos ou privilégios de qualquer espécie no atendimento.","icon":"⚖️","tone":"slate"},{"title":"Direito à informação","text":"A pessoa assistida tem direito a informação sobre sua saúde.","icon":"ℹ️","tone":"violet"},{"title":"Integralidade","text":"Prevenção e cura caminham juntas: vacinar, orientar e tratar no mesmo cuidado.","icon":"🧩","tone":"teal"},{"title":"Inciso XIV + parágrafo único","text":"Mulher vítima de violência é acolhida em local com privacidade, sem acesso do agressor.","icon":"🛡️","tone":"rose"},{"title":"Atenção humanizada","text":"Princípio expresso desde 2025.","icon":"🤲","tone":"green"}]}]},{"id":"numeros","kind":"numeros","title":"Números que caem","source":0,"blocks":[{"type":"numbers","items":[{"value":"16","label":"incisos no art. 7º hoje"},{"value":"13","label":"incisos no texto original de 1990"},{"value":"II","label":"inciso da integralidade"},{"value":"IV","label":"inciso da igualdade"},{"value":"IX","label":"inciso da descentralização","note":"alíneas a (municípios) e b (regionalização e hierarquização)"},{"value":"2025","label":"ano do inciso XVI — atenção humanizada"}]}]},{"id":"caso","kind":"caso","title":"Situação-problema","source":0,"blocks":[{"type":"case","title":"Clínica conveniada","scenario":"Uma clínica privada conveniada ao SUS passa a atender primeiro os pacientes indicados por um político local, deixando os demais para depois.","question":"Qual princípio do art. 7º está sendo violado e ele se aplica à clínica?","answer":"Igualdade da assistência, sem preconceitos ou privilégios (inciso IV). Sim: o art. 7º vale para os serviços privados contratados ou conveniados que integram o SUS.","reasoning":["Privilegiar indicados é privilégio, vedado pelo inciso IV.","O caput do art. 7º inclui os privados contratados ou conveniados.","A resposta pela lei é igualdade, não equidade."]}]},{"id":"como-a-banca-cobra","kind":"cobrado","title":"Como a banca cobra","source":0,"blocks":[{"type":"traps","items":[{"wrong":"O art. 7º lista a equidade entre os princípios do SUS.","right":"O texto fala em ==igualdade== da assistência (inciso IV).","why":"Equidade aparece na PNAB e na doutrina, não no art. 7º."},{"wrong":"Integralidade é priorizar os casos mais graves.","right":"Integralidade = ações ==preventivas e curativas, individuais e coletivas==, em todos os níveis de complexidade.","why":"Priorizar o grave é classificação de risco, não integralidade."},{"wrong":"Descentralização com direção compartilhada entre as esferas.","right":"Descentralização com ==direção única em cada esfera== de governo.","why":"Cada esfera tem um gestor: MS, secretaria estadual, secretaria municipal."},{"wrong":"A ênfase da descentralização é nos Estados.","right":"A ênfase é na descentralização dos serviços para os ==municípios==.","why":"Inciso IX, alínea a."},{"wrong":"Os princípios só valem para a rede pública.","right":"Valem também para ==privados contratados ou conveniados== que integram o SUS.","why":"Está no caput do art. 7º."},{"wrong":"Atenção humanizada é diretriz da Constituição.","right":"É ==princípio do art. 7º== (inciso XVI, Lei 15.126/2025).","why":"As diretrizes constitucionais continuam sendo três (art. 198)."},{"wrong":"A epidemiologia serve apenas para pesquisa acadêmica no SUS.","right":"Serve para estabelecer ==prioridades, alocar recursos e orientar a programação== (VII).","why":"É princípio de gestão, não só de pesquisa."}]}]},{"id":"conexoes","kind":"conexoes","title":"Conexões","blocks":[{"type":"links","items":[{"slug":"sus-na-constituicao-arts-196-a-200","title":"SUS na Constituição (arts. 196 a 200)","why":"As diretrizes do art. 198 que o art. 7º manda seguir."},{"slug":"participacao-da-comunidade-lei-8142","title":"Conferências e Conselhos de Saúde (Lei 8.142)","why":"O inciso VIII na prática."},{"slug":"atencao-basica-pnab","title":"Atenção Básica: a PNAB","why":"Onde a equidade aparece como princípio."},{"slug":"decreto-7508-regioes-e-portas-de-entrada","title":"Decreto 7.508: regiões e portas de entrada","why":"Regionalização e hierarquização regulamentadas."}]}]}]'::jsonb, array['O artigo mais cobrado de SUS', 'Os princípios, agrupados', 'Igualdade × equidade: a pegadinha número 1', 'Incisos acrescentados depois de 1990', 'Os princípios no dia a dia do técnico', 'Números que caem', 'Situação-problema', 'Como a banca cobra', 'Conexões']::text[], 7, 1, 'published', '2026-10-03'::date, 'Padrão v2: cada seção foi escrita a partir do texto original da fonte, baixado e lido em 2026-10-03 (conferência automatizada durante o desenvolvimento). Revisão por enfermeiro(a) obrigatória antes da venda. A seção ''no dia a dia'' traduz incisos para a prática; não é texto literal.')
on conflict (slug) do update set category_id = excluded.category_id, title = excluded.title, description = excluded.description,
  summary = excluded.summary, key_points = excluded.key_points, sections = excluded.sections, outline = excluded.outline,
  reading_minutes = excluded.reading_minutes, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at, review_notes = excluded.review_notes;
insert into public.topic_sources (topic_id, position, source_title, source_organization, source_url, source_accessed_at, locator)
values ((select id from public.topics where slug = 'principios-do-sus-lei-8080'), 0, 'Lei nº 8.080, de 19 de setembro de 1990 (Lei Orgânica da Saúde)', 'Presidência da República — Planalto', 'https://www.planalto.gov.br/ccivil_03/leis/l8080.htm', '2026-10-03'::date, 'art. 7º, incisos I a XVI e parágrafo único')
on conflict (topic_id, position) do update set source_title = excluded.source_title, source_organization = excluded.source_organization,
  source_url = excluded.source_url, source_accessed_at = excluded.source_accessed_at, locator = excluded.locator;
insert into public.topic_sources (topic_id, position, source_title, source_organization, source_url, source_accessed_at, locator)
values ((select id from public.topics where slug = 'principios-do-sus-lei-8080'), 1, 'Portaria nº 2.436, de 21 de setembro de 2017 (Política Nacional de Atenção Básica)', 'Ministério da Saúde — Saúde Legis', 'https://bvsms.saude.gov.br/bvs/saudelegis/gm/2017/prt2436_22_09_2017.html', '2026-10-03'::date, 'Anexo, item 1.1 — Princípios')
on conflict (topic_id, position) do update set source_title = excluded.source_title, source_organization = excluded.source_organization,
  source_url = excluded.source_url, source_accessed_at = excluded.source_accessed_at, locator = excluded.locator;
delete from public.topic_sources s where s.topic_id = (select id from public.topics where slug = 'principios-do-sus-lei-8080') and s.position >= 2
  and not exists (select 1 from public.questions x where x.source_id = s.id);
insert into public.visual_maps (topic_id, title, spec, status, last_reviewed_at)
values ((select id from public.topics where slug = 'principios-do-sus-lei-8080'), 'Princípios do SUS (art. 7º)', '{"layout":"hub","center":"Lei 8.080/1990 · art. 7º","blocks":[{"title":"Acesso","tone":"blue","icon":"🚪","items":["Universalidade em todos os níveis","Igualdade, sem privilégios"]},{"title":"Cuidado","tone":"teal","icon":"🧩","items":["Integralidade: prevenir + curar","Capacidade de resolução"]},{"title":"Informação","tone":"violet","icon":"ℹ️","items":["Direito à informação sobre a saúde","Epidemiologia define prioridades"]},{"title":"Organização","tone":"amber","icon":"🗺️","items":["Descentralização, direção única","Regionalização e hierarquização"]},{"title":"Sociedade","tone":"green","icon":"🤝","items":["Participação da comunidade","Atenção humanizada (2025)"]}],"footnote":"Cuidado: o texto do art. 7º diz igualdade, não equidade."}'::jsonb, 'published', '2026-10-03'::date)
on conflict (topic_id) do update set title = excluded.title, spec = excluded.spec, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'principios-do-sus-lei-8080'), 'sus-principios-1', 'De acordo com o art. 7º da Lei nº 8.080/1990, a integralidade de assistência é entendida como:', 'É a definição literal do inciso II do art. 7º. As outras alternativas descrevem ideias que a lei não usa para esse princípio.', 'facil', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'principios-do-sus-lei-8080') and position = 0), 'os-16-principios', 0, 'published', '2026-10-03'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'sus-principios-1');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'sus-principios-1'), 'A', 'o atendimento prioritário apenas aos casos de maior gravidade.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'sus-principios-1'), 'B', 'o conjunto articulado e contínuo das ações e serviços preventivos e curativos, individuais e coletivos, exigidos para cada caso em todos os níveis de complexidade.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'sus-principios-1'), 'C', 'a oferta de serviços de saúde exclusivamente pela rede pública, sem participação privada.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'sus-principios-1'), 'D', 'a garantia de que cada município execute sozinho todos os níveis de atenção.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'sus-principios-1') and label not in ('A', 'B', 'C', 'D');
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'principios-do-sus-lei-8080'), 'sus-principios-2', 'Sobre a descentralização político-administrativa prevista no art. 7º da Lei nº 8.080/1990, é correto afirmar que ela ocorre:', 'O inciso IX fala em descentralização com direção única em cada esfera de governo, com ênfase nos municípios e regionalização e hierarquização da rede.', 'media', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'principios-do-sus-lei-8080') and position = 0), 'os-16-principios', 1, 'published', '2026-10-03'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'sus-principios-2');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'sus-principios-2'), 'A', 'com direção única em cada esfera de governo, ênfase na descentralização dos serviços para os municípios e regionalização e hierarquização da rede.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'sus-principios-2'), 'B', 'com direção compartilhada entre União e Estados, sem participação dos municípios.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'sus-principios-2'), 'C', 'apenas no âmbito federal, cabendo aos municípios só executar ordens.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'sus-principios-2'), 'D', 'por meio da privatização dos serviços de média e alta complexidade.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'sus-principios-2') and label not in ('A', 'B', 'C', 'D');
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'principios-do-sus-lei-8080'), 'sus-principios-3', 'O inciso XVI do art. 7º da Lei nº 8.080/1990, incluído em 2025, acrescentou como princípio do SUS:', 'O inciso XVI, incluído pela Lei nº 15.126/2025, é a atenção humanizada. ''Equidade'' continua fora do texto do art. 7º.', 'media', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'principios-do-sus-lei-8080') and position = 0), 'linha-do-tempo-dos-incisos', 2, 'published', '2026-10-03'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'sus-principios-3');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'sus-principios-3'), 'A', 'a equidade na distribuição de recursos.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'sus-principios-3'), 'B', 'a atenção humanizada.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'sus-principios-3'), 'C', 'a gratuidade dos medicamentos de alto custo.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'sus-principios-3'), 'D', 'a obrigatoriedade de consórcios intermunicipais.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'sus-principios-3') and label not in ('A', 'B', 'C', 'D');
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'principios-do-sus-lei-8080'), 'sus-principios-4', 'Segundo o texto literal do art. 7º da Lei nº 8.080/1990, a assistência à saúde deve observar o princípio da:', 'O inciso IV fala em igualdade da assistência à saúde, sem preconceitos ou privilégios de qualquer espécie. Equidade é termo da PNAB e da doutrina.', 'media', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'principios-do-sus-lei-8080') and position = 0), 'igualdade-x-equidade', 3, 'published', '2026-10-03'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'sus-principios-4');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'sus-principios-4'), 'A', 'equidade, priorizando os grupos mais vulneráveis.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'sus-principios-4'), 'B', 'igualdade, sem preconceitos ou privilégios de qualquer espécie.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'sus-principios-4'), 'C', 'seletividade, conforme a contribuição do usuário.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'sus-principios-4'), 'D', 'proporcionalidade ao risco individual.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'sus-principios-4') and label not in ('A', 'B', 'C', 'D');
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'principios-do-sus-lei-8080'), 'sus-principios-5', 'Os princípios do art. 7º da Lei nº 8.080/1990 aplicam-se:', 'O caput do art. 7º alcança as ações e serviços públicos de saúde e os serviços privados contratados ou conveniados que integram o SUS.', 'media', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'principios-do-sus-lei-8080') and position = 0), 'visao-geral', 4, 'published', '2026-10-03'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'sus-principios-5');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'sus-principios-5'), 'A', 'somente aos hospitais públicos federais.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'sus-principios-5'), 'B', 'às ações e serviços públicos e aos serviços privados contratados ou conveniados que integram o SUS.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'sus-principios-5'), 'C', 'apenas à atenção básica municipal.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'sus-principios-5'), 'D', 'a toda a rede privada de saúde, conveniada ou não.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'sus-principios-5') and label not in ('A', 'B', 'C', 'D');
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'principios-do-sus-lei-8080'), 'sus-principios-6', 'A utilização da epidemiologia, segundo o art. 7º da Lei nº 8.080/1990, serve para:', 'Inciso VII: utilização da epidemiologia para o estabelecimento de prioridades, a alocação de recursos e a orientação programática.', 'facil', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'principios-do-sus-lei-8080') and position = 0), 'os-16-principios', 5, 'published', '2026-10-03'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'sus-principios-6');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'sus-principios-6'), 'A', 'o estabelecimento de prioridades, a alocação de recursos e a orientação programática.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'sus-principios-6'), 'B', 'a substituição da participação da comunidade.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'sus-principios-6'), 'C', 'a definição do valor da contribuição do usuário.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'sus-principios-6'), 'D', 'o credenciamento de hospitais privados.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'sus-principios-6') and label not in ('A', 'B', 'C', 'D');
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'principios-do-sus-lei-8080'), 'sus-principios-7', 'É princípio do SUS expresso no art. 7º da Lei nº 8.080/1990:', 'É o inciso XIII. As demais alternativas contrariam a universalidade, a igualdade ou a descentralização.', 'dificil', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'principios-do-sus-lei-8080') and position = 0), 'os-16-principios', 6, 'published', '2026-10-03'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'sus-principios-7');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'sus-principios-7'), 'A', 'centralização das decisões no Ministério da Saúde.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'sus-principios-7'), 'B', 'organização dos serviços públicos de modo a evitar duplicidade de meios para fins idênticos.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'sus-principios-7'), 'C', 'cobrança de taxa moderadora em consultas especializadas.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'sus-principios-7'), 'D', 'prioridade de atendimento a contribuintes da previdência.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'sus-principios-7') and label not in ('A', 'B', 'C', 'D');
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'principios-do-sus-lei-8080'), 'sus-principios-8', 'O parágrafo único do art. 7º da Lei nº 8.080/1990, incluído em 2024, garante às mulheres vítimas de violência:', 'O parágrafo único (Lei 14.847/2024) garante acolhimento e atendimento em local que assegure privacidade e restrinja o acesso de terceiros, em especial do agressor.', 'dificil', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'principios-do-sus-lei-8080') and position = 0), 'linha-do-tempo-dos-incisos', 7, 'published', '2026-10-03'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'sus-principios-8');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'sus-principios-8'), 'A', 'atendimento exclusivamente em delegacias especializadas.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'sus-principios-8'), 'B', 'acolhimento e atendimento em local e ambiente que garantam privacidade e restrição do acesso de terceiros não autorizados, em especial do agressor.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'sus-principios-8'), 'C', 'prioridade absoluta em cirurgias eletivas.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'sus-principios-8'), 'D', 'atendimento apenas na rede privada conveniada.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'sus-principios-8') and label not in ('A', 'B', 'C', 'D');

-- tema: Lei 8.080: organização, campo de atuação e competências
insert into public.topics (category_id, slug, title, description, summary, key_points, sections, outline, reading_minutes, position, status, last_reviewed_at, review_notes)
values ((select id from public.categories where product_id = (select id from public.products where key = 'revisao-tecnico-enfermagem') and slug = 'sus'), 'lei-8080-organizacao-e-competencias', 'Lei 8.080: organização, campo de atuação e competências', 'O que é o SUS, determinantes da saúde, objetivos, vigilâncias, direção única, comissões intergestores e o papel do município.', 'A Lei 8.080/1990 diz que a saúde é direito fundamental do ser humano e que o dever do Estado não exclui o das pessoas, da família, das empresas e da sociedade. Os níveis de saúde expressam a organização social e econômica do país e têm como determinantes e condicionantes, entre outros, alimentação, moradia, saneamento, meio ambiente, trabalho, renda, educação, atividade física, transporte, lazer e acesso a bens e serviços. O SUS é o conjunto de ações e serviços prestados por órgãos e instituições públicas federais, estaduais e municipais, da administração direta e indireta e fundações mantidas pelo Poder Público; a iniciativa privada participa em caráter complementar. Os objetivos do SUS são identificar e divulgar os determinantes da saúde, formular a política de saúde e prestar assistência por ações de promoção, proteção e recuperação. Estão no campo de atuação as vigilâncias sanitária e epidemiológica, a saúde do trabalhador, a assistência terapêutica integral (inclusive farmacêutica) e a saúde bucal, entre outras. Vigilância sanitária elimina, diminui ou previne riscos à saúde e intervém em problemas do meio ambiente, da produção e circulação de bens e da prestação de serviços; vigilância epidemiológica proporciona conhecimento, detecção ou prevenção de mudanças nos determinantes da saúde para recomendar medidas de prevenção e controle. As ações são organizadas de forma regionalizada e hierarquizada, em níveis de complexidade crescente, com direção única em cada esfera: Ministério da Saúde, secretarias estaduais e municipais. Municípios podem formar consórcios, e as Comissões Intergestores Bipartite e Tripartite são foros de pactuação entre gestores. Ao município compete gerir e executar os serviços públicos de saúde, incluindo vigilância epidemiológica, sanitária, alimentação e nutrição, saneamento básico, saúde do trabalhador e saúde bucal.', array['Dever do Estado não exclui o das pessoas, família, empresas e sociedade.', 'Determinantes: alimentação, moradia, saneamento, meio ambiente, trabalho, renda, educação, atividade física, transporte, lazer.', 'SUS = ações e serviços públicos (federais, estaduais, municipais, diretos e indiretos); privado em caráter complementar.', 'Objetivos: identificar determinantes, formular política e prestar assistência (promoção, proteção, recuperação).', 'Vigilância sanitária: riscos de bens, serviços e meio ambiente. Vigilância epidemiológica: conhecer e detectar mudanças para prevenir e controlar.', 'Direção única: MS (União), secretarias estaduais e municipais.', 'CIB e CIT: foros de negociação e pactuação entre gestores.', 'Município executa vigilâncias, alimentação e nutrição, saneamento, saúde do trabalhador e saúde bucal.']::text[], '[{"id":"visao-geral","kind":"visao","title":"A Lei Orgânica da Saúde em três perguntas","source":0,"blocks":[{"type":"cards","items":[{"title":"O que é saúde?","text":"Direito fundamental; depende de ==determinantes sociais== (arts. 2º e 3º).","icon":"❓","tone":"blue"},{"title":"O que o SUS faz?","text":"Objetivos e ==campo de atuação==, com as vigilâncias (arts. 5º e 6º).","icon":"🛠️","tone":"green"},{"title":"Quem manda em quê?","text":"==Direção única== por esfera e competências de cada gestor (arts. 9º, 14-A, 18).","icon":"🧭","tone":"amber"}]}]},{"id":"direito-e-determinantes","kind":"conceito","title":"Direito à saúde e determinantes","source":0,"blocks":[{"type":"definition","term":"Art. 2º","text":"A saúde é um ==direito fundamental do ser humano==, devendo o Estado prover as condições indispensáveis ao seu pleno exercício.","note":"§ 2º: o dever do Estado ==não exclui o das pessoas, da família, das empresas e da sociedade==."},{"type":"definition","term":"Art. 3º — determinantes e condicionantes","text":"Os níveis de saúde expressam a organização social e econômica do país; são determinantes e condicionantes, entre outros: alimentação, moradia, saneamento básico, meio ambiente, trabalho, renda, educação, ==atividade física==, transporte, lazer e acesso a bens e serviços essenciais."},{"type":"definition","term":"Art. 4º — o que é o SUS","text":"Conjunto de ações e serviços prestados por ==órgãos e instituições públicas== federais, estaduais e municipais, da administração direta e indireta e das fundações mantidas pelo Poder Público.","note":"§ 2º: a iniciativa privada pode participar em ==caráter complementar==."}]},{"id":"objetivos-e-campo","kind":"classificacao","title":"Objetivos e campo de atuação","source":0,"blocks":[{"type":"steps","items":[{"title":"Objetivo I","text":"Identificar e divulgar os ==fatores condicionantes e determinantes== da saúde."},{"title":"Objetivo II","text":"Formular política de saúde para promover, nos campos econômico e social, a redução de riscos e o acesso universal e igualitário."},{"title":"Objetivo III","text":"Assistência por ações de ==promoção, proteção e recuperação==, integrando assistência e prevenção."}]},{"type":"checklist","title":"Campo de atuação (art. 6º) — alguns itens","items":["Execução de ações de vigilância sanitária, vigilância epidemiológica, saúde do trabalhador, assistência terapêutica integral (inclusive farmacêutica) e saúde bucal","Participação na política e nas ações de saneamento básico","Ordenação da formação de recursos humanos","Vigilância nutricional e orientação alimentar","Fiscalização e inspeção de alimentos, água e bebidas","Formulação e execução da política de sangue e derivados","Política de informação e assistência toxicológica"]}]},{"id":"vigilancias","kind":"conceito","title":"As vigilâncias e a saúde do trabalhador","lead":"Definições que caem quase literalmente.","source":0,"blocks":[{"type":"compare","columns":["Vigilância sanitária","Vigilância epidemiológica","Saúde do trabalhador"],"rows":[{"label":"O que é","cells":["Ações capazes de ==eliminar, diminuir ou prevenir riscos== e intervir em problemas sanitários do meio ambiente, da produção e circulação de bens e da prestação de serviços","Ações que proporcionam ==conhecimento, detecção ou prevenção de mudanças== nos determinantes da saúde, para recomendar e adotar medidas de prevenção e controle","Atividades que, por meio das vigilâncias, promovem e protegem a saúde dos trabalhadores e recuperam e reabilitam os expostos a riscos do trabalho"]},{"label":"Abrange","cells":["Controle de ==bens de consumo== (da produção ao consumo) e da ==prestação de serviços==","Doenças e agravos — individuais ou coletivos","Assistência ao acidentado, estudo de riscos, informação ao trabalhador, revisão da lista de doenças do trabalho"]}]}]},{"id":"gestao","kind":"etapas","title":"Direção única, consórcios e comissões","source":0,"blocks":[{"type":"steps","items":[{"title":"Organização regionalizada e hierarquizada","text":"Em ==níveis de complexidade crescente== (art. 8º)."},{"title":"Direção única em cada esfera (art. 9º)","text":"União → ==Ministério da Saúde==; Estados e DF → Secretaria de Saúde; Municípios → Secretaria de Saúde (ou órgão equivalente)."},{"title":"Consórcios (art. 10)","text":"Municípios podem formar consórcios; aplica-se a eles o princípio da direção única. O SUS municipal pode se organizar em ==distritos==."},{"title":"Comissões intersetoriais (art. 12)","text":"Nacionais, ==subordinadas ao Conselho Nacional de Saúde==, para articular políticas com áreas fora do SUS (alimentação, saneamento, recursos humanos, saúde do trabalhador)."},{"title":"CIB e CIT (art. 14-A)","text":"==Foros de negociação e pactuação entre gestores== sobre os aspectos operacionais do SUS."},{"title":"Conass e Conasems (art. 14-B)","text":"Representam os entes estaduais e municipais; os Cosems representam os municípios no âmbito estadual."}]}]},{"id":"municipio","kind":"tecnico","title":"O que compete à direção municipal (art. 18)","lead":"É no município que o técnico da UBS trabalha.","source":0,"blocks":[{"type":"checklist","items":["Planejar, organizar, controlar e avaliar as ações e ==gerir e executar os serviços públicos de saúde==","Participar do planejamento da rede regionalizada, em articulação com a direção estadual","Executar serviços de ==vigilância epidemiológica, vigilância sanitária, alimentação e nutrição, saneamento básico, saúde do trabalhador e saúde bucal==","Formar ==consórcios administrativos intermunicipais==","Gerir laboratórios públicos de saúde e hemocentros","Colaborar com União e Estados na vigilância sanitária de portos, aeroportos e fronteiras","Celebrar contratos e convênios com serviços privados e controlar sua execução"]},{"type":"callout","variant":"dica","title":"Distrito Federal","text":"Ao DF competem as atribuições ==reservadas aos Estados e aos Municípios== (art. 19)."}]},{"id":"privado-complementar","kind":"cuidados","title":"Participação complementar privada (arts. 24 a 26)","source":0,"blocks":[{"type":"steps","items":[{"title":"Só quando a rede pública não basta","text":"Disponibilidades insuficientes para garantir a cobertura de uma área → o SUS pode recorrer ao privado."},{"title":"Por contrato ou convênio","text":"Observadas as normas de direito público."},{"title":"Preferência","text":"==Entidades filantrópicas e sem fins lucrativos==."},{"title":"Remuneração","text":"Critérios e valores definidos pela ==direção nacional== e aprovados no ==Conselho Nacional de Saúde==."}]}]},{"id":"numeros","kind":"numeros","title":"Números que caem","source":0,"blocks":[{"type":"numbers","items":[{"value":"3","label":"objetivos do SUS (art. 5º)"},{"value":"3","label":"esferas com direção única","note":"MS, secretaria estadual, secretaria municipal"},{"value":"Art. 6º","label":"campo de atuação e definições das vigilâncias"},{"value":"Art. 18","label":"competências da direção municipal"},{"value":"Art. 14-A","label":"CIB e CIT como foros de pactuação"}]}]},{"id":"caso","kind":"caso","title":"Situação-problema","source":0,"blocks":[{"type":"case","title":"Interdição de restaurante e surto de diarreia","scenario":"Após um surto de diarreia, a equipe municipal investiga os casos para identificar a fonte e recomendar medidas; em seguida, outra equipe inspeciona e interdita o restaurante onde as pessoas comeram.","question":"Quais vigilâncias atuaram e de quem é a competência de executá-las no território?","answer":"Investigar os casos para recomendar medidas é vigilância epidemiológica; inspecionar e interditar o restaurante é vigilância sanitária. A execução cabe à direção municipal.","reasoning":["Epidemiológica: conhecimento e detecção de mudanças nos determinantes para prevenção e controle.","Sanitária: intervir em problemas da produção e circulação de bens e prestação de serviços.","Art. 18, IV: o município executa os serviços de vigilância epidemiológica e sanitária."]}]},{"id":"como-a-banca-cobra","kind":"cobrado","title":"Como a banca cobra","source":0,"blocks":[{"type":"traps","items":[{"wrong":"O dever do Estado de garantir a saúde exclui o das pessoas e da família.","right":"==Não exclui== o das pessoas, da família, das empresas e da sociedade.","why":"Art. 2º, § 2º."},{"wrong":"No âmbito estadual, a direção do SUS é exercida pelo Ministério da Saúde.","right":"Pela ==Secretaria Estadual de Saúde== ou órgão equivalente.","why":"Art. 9º: cada esfera tem seu órgão de direção."},{"wrong":"Inspecionar estabelecimentos que vendem alimentos é vigilância epidemiológica.","right":"É ==vigilância sanitária==.","why":"Sanitária cuida de bens, serviços e meio ambiente; epidemiológica, de conhecer e detectar mudanças nos determinantes."},{"wrong":"CIB e CIT são instâncias de controle social, como os Conselhos.","right":"São ==foros de negociação e pactuação entre gestores==.","why":"Controle social é Conferência e Conselho (Lei 8.142)."},{"wrong":"A atividade física não é citada como determinante da saúde.","right":"Foi incluída no art. 3º em 2013.","why":"A redação atual cita a atividade física entre os determinantes."},{"wrong":"O SUS é formado também por toda a rede privada do país.","right":"O SUS é o conjunto de ==ações e serviços públicos==; o privado participa de forma ==complementar==.","why":"Art. 4º, caput e § 2º."},{"wrong":"Executar saneamento básico não é competência municipal no SUS.","right":"O município ==executa serviços de saneamento básico== (art. 18, IV, d).","why":"Junto com vigilâncias, alimentação e nutrição, saúde do trabalhador e saúde bucal."}]}]},{"id":"conexoes","kind":"conexoes","title":"Conexões","blocks":[{"type":"links","items":[{"slug":"principios-do-sus-lei-8080","title":"Princípios do SUS na Lei 8.080","why":"O art. 7º da mesma lei."},{"slug":"decreto-7508-regioes-e-portas-de-entrada","title":"Decreto 7.508: regiões e portas de entrada","why":"O decreto que regulamenta a organização da Lei 8.080."},{"slug":"sus-na-constituicao-arts-196-a-200","title":"SUS na Constituição (arts. 196 a 200)","why":"A base constitucional."},{"slug":"nr-32-seguranca-do-trabalhador","title":"NR 32: segurança do trabalhador da saúde","why":"Saúde do trabalhador aplicada aos serviços de saúde."}]}]}]'::jsonb, array['A Lei Orgânica da Saúde em três perguntas', 'Direito à saúde e determinantes', 'Objetivos e campo de atuação', 'As vigilâncias e a saúde do trabalhador', 'Direção única, consórcios e comissões', 'O que compete à direção municipal (art. 18)', 'Participação complementar privada (arts. 24 a 26)', 'Números que caem', 'Situação-problema', 'Como a banca cobra', 'Conexões']::text[], 8, 2, 'published', '2026-10-03'::date, 'Padrão v2: cada seção foi escrita a partir do texto original da fonte, baixado e lido em 2026-10-03 (conferência automatizada durante o desenvolvimento). Revisão por enfermeiro(a) obrigatória antes da venda. O caso do surto é didático.')
on conflict (slug) do update set category_id = excluded.category_id, title = excluded.title, description = excluded.description,
  summary = excluded.summary, key_points = excluded.key_points, sections = excluded.sections, outline = excluded.outline,
  reading_minutes = excluded.reading_minutes, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at, review_notes = excluded.review_notes;
insert into public.topic_sources (topic_id, position, source_title, source_organization, source_url, source_accessed_at, locator)
values ((select id from public.topics where slug = 'lei-8080-organizacao-e-competencias'), 0, 'Lei nº 8.080, de 19 de setembro de 1990 (Lei Orgânica da Saúde)', 'Presidência da República — Planalto', 'https://www.planalto.gov.br/ccivil_03/leis/l8080.htm', '2026-10-03'::date, 'arts. 2º a 6º, 8º a 10, 12 a 14-B, 18, 19 e 24 a 26')
on conflict (topic_id, position) do update set source_title = excluded.source_title, source_organization = excluded.source_organization,
  source_url = excluded.source_url, source_accessed_at = excluded.source_accessed_at, locator = excluded.locator;
delete from public.topic_sources s where s.topic_id = (select id from public.topics where slug = 'lei-8080-organizacao-e-competencias') and s.position >= 1
  and not exists (select 1 from public.questions x where x.source_id = s.id);
insert into public.visual_maps (topic_id, title, spec, status, last_reviewed_at)
values ((select id from public.topics where slug = 'lei-8080-organizacao-e-competencias'), 'Como a Lei 8.080 organiza o SUS', '{"layout":"hub","center":"Lei 8.080/1990","blocks":[{"title":"Base","tone":"blue","icon":"🏛️","items":["Saúde: direito fundamental","Determinantes sociais","Privado complementar"]},{"title":"Campo de atuação","tone":"green","icon":"🔭","items":["Vigilância sanitária","Vigilância epidemiológica","Saúde do trabalhador"]},{"title":"Gestão","tone":"amber","icon":"🧭","items":["Direção única por esfera","Consórcios municipais","CIB e CIT"]},{"title":"Município","tone":"teal","icon":"🏘️","items":["Gere e executa serviços","Executa as vigilâncias","Contrata e fiscaliza privados"]}]}'::jsonb, 'published', '2026-10-03'::date)
on conflict (topic_id) do update set title = excluded.title, spec = excluded.spec, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'lei-8080-organizacao-e-competencias'), 'sus-8080-1', 'Segundo a Lei nº 8.080/1990, o dever do Estado de garantir a saúde:', 'Art. 2º, § 2º: o dever do Estado não exclui o das pessoas, da família, das empresas e da sociedade.', 'facil', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'lei-8080-organizacao-e-competencias') and position = 0), 'direito-e-determinantes', 0, 'published', '2026-10-03'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'sus-8080-1');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'sus-8080-1'), 'A', 'exclui o dever das pessoas e da família.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'sus-8080-1'), 'B', 'não exclui o das pessoas, da família, das empresas e da sociedade.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'sus-8080-1'), 'C', 'é exclusivo dos municípios.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'sus-8080-1'), 'D', 'só existe para contribuintes da previdência.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'sus-8080-1') and label not in ('A', 'B', 'C', 'D');
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'lei-8080-organizacao-e-competencias'), 'sus-8080-2', 'De acordo com o art. 9º da Lei nº 8.080/1990, a direção do SUS no âmbito da União é exercida:', 'Direção única: União → Ministério da Saúde; Estados e DF → Secretaria de Saúde; Municípios → Secretaria de Saúde.', 'facil', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'lei-8080-organizacao-e-competencias') and position = 0), 'gestao', 1, 'published', '2026-10-03'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'sus-8080-2');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'sus-8080-2'), 'A', 'pelo Conselho Nacional de Saúde.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'sus-8080-2'), 'B', 'pelo Ministério da Saúde.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'sus-8080-2'), 'C', 'pela Anvisa.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'sus-8080-2'), 'D', 'pela Comissão Intergestores Tripartite.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'sus-8080-2') and label not in ('A', 'B', 'C', 'D');
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'lei-8080-organizacao-e-competencias'), 'sus-8080-3', 'O conjunto de ações capaz de eliminar, diminuir ou prevenir riscos à saúde e de intervir nos problemas sanitários decorrentes do meio ambiente, da produção e circulação de bens e da prestação de serviços é a definição legal de:', 'É a definição de vigilância sanitária do art. 6º, § 1º.', 'media', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'lei-8080-organizacao-e-competencias') and position = 0), 'vigilancias', 2, 'published', '2026-10-03'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'sus-8080-3');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'sus-8080-3'), 'A', 'vigilância epidemiológica.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'sus-8080-3'), 'B', 'vigilância sanitária.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'sus-8080-3'), 'C', 'saúde do trabalhador.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'sus-8080-3'), 'D', 'atenção básica.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'sus-8080-3') and label not in ('A', 'B', 'C', 'D');
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'lei-8080-organizacao-e-competencias'), 'sus-8080-4', 'O conjunto de ações que proporciona o conhecimento, a detecção ou a prevenção de qualquer mudança nos fatores determinantes e condicionantes da saúde, com a finalidade de recomendar e adotar medidas de prevenção e controle, é:', 'É a definição de vigilância epidemiológica do art. 6º, § 2º.', 'media', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'lei-8080-organizacao-e-competencias') and position = 0), 'vigilancias', 3, 'published', '2026-10-03'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'sus-8080-4');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'sus-8080-4'), 'A', 'vigilância sanitária.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'sus-8080-4'), 'B', 'vigilância epidemiológica.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'sus-8080-4'), 'C', 'auditoria do SUS.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'sus-8080-4'), 'D', 'regulação assistencial.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'sus-8080-4') and label not in ('A', 'B', 'C', 'D');
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'lei-8080-organizacao-e-competencias'), 'sus-8080-5', 'Pela Lei nº 8.080/1990, as Comissões Intergestores Bipartite e Tripartite são reconhecidas como:', 'Art. 14-A: CIB e CIT são foros de negociação e pactuação entre gestores. Controle social é feito por Conferências e Conselhos.', 'media', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'lei-8080-organizacao-e-competencias') and position = 0), 'gestao', 4, 'published', '2026-10-03'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'sus-8080-5');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'sus-8080-5'), 'A', 'órgãos de controle social com participação paritária de usuários.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'sus-8080-5'), 'B', 'foros de negociação e pactuação entre gestores quanto aos aspectos operacionais do SUS.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'sus-8080-5'), 'C', 'instâncias de julgamento ético de profissionais.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'sus-8080-5'), 'D', 'conselhos consultivos do Ministério da Saúde.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'sus-8080-5') and label not in ('A', 'B', 'C', 'D');
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'lei-8080-organizacao-e-competencias'), 'sus-8080-6', 'Compete à direção municipal do SUS, segundo o art. 18 da Lei nº 8.080/1990:', 'O inciso IV do art. 18 lista os serviços que o município executa.', 'media', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'lei-8080-organizacao-e-competencias') and position = 0), 'municipio', 5, 'published', '2026-10-03'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'sus-8080-6');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'sus-8080-6'), 'A', 'executar serviços de vigilância epidemiológica, vigilância sanitária, alimentação e nutrição, saneamento básico, saúde do trabalhador e saúde bucal.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'sus-8080-6'), 'B', 'definir a política nacional de medicamentos.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'sus-8080-6'), 'C', 'coordenar o sistema nacional de sangue.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'sus-8080-6'), 'D', 'editar normas gerais para todo o país.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'sus-8080-6') and label not in ('A', 'B', 'C', 'D');
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'lei-8080-organizacao-e-competencias'), 'sus-8080-7', 'Quando as disponibilidades do SUS forem insuficientes para garantir a cobertura assistencial de uma área, a lei permite recorrer à iniciativa privada, tendo preferência:', 'Arts. 24 e 25: participação complementar por contrato ou convênio, com preferência às filantrópicas e sem fins lucrativos.', 'media', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'lei-8080-organizacao-e-competencias') and position = 0), 'privado-complementar', 6, 'published', '2026-10-03'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'sus-8080-7');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'sus-8080-7'), 'A', 'as empresas de maior porte.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'sus-8080-7'), 'B', 'as entidades filantrópicas e as sem fins lucrativos.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'sus-8080-7'), 'C', 'as operadoras de planos de saúde.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'sus-8080-7'), 'D', 'os hospitais universitários estrangeiros.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'sus-8080-7') and label not in ('A', 'B', 'C', 'D');
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'lei-8080-organizacao-e-competencias'), 'sus-8080-8', 'Na redação atual do art. 3º da Lei nº 8.080/1990, figura entre os determinantes e condicionantes da saúde:', 'A Lei nº 12.864/2013 deu nova redação ao art. 3º, incluindo a atividade física entre os determinantes e condicionantes.', 'dificil', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'lei-8080-organizacao-e-competencias') and position = 0), 'direito-e-determinantes', 7, 'published', '2026-10-03'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'sus-8080-8');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'sus-8080-8'), 'A', 'a filiação partidária.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'sus-8080-8'), 'B', 'a atividade física.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'sus-8080-8'), 'C', 'o tipo sanguíneo.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'sus-8080-8'), 'D', 'o regime previdenciário.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'sus-8080-8') and label not in ('A', 'B', 'C', 'D');

-- tema: Conferências e Conselhos de Saúde (Lei 8.142)
insert into public.topics (category_id, slug, title, description, summary, key_points, sections, outline, reading_minutes, position, status, last_reviewed_at, review_notes)
values ((select id from public.categories where product_id = (select id from public.products where key = 'revisao-tecnico-enfermagem') and slug = 'sus'), 'participacao-da-comunidade-lei-8142', 'Conferências e Conselhos de Saúde (Lei 8.142)', 'As duas instâncias colegiadas, a paridade dos usuários, o repasse de recursos e o que o município precisa ter para recebê-los.', 'A Lei nº 8.142/1990 trata da participação da comunidade na gestão do SUS e das transferências de recursos. Em cada esfera de governo, o SUS conta, sem prejuízo das funções do Poder Legislativo, com duas instâncias colegiadas: a Conferência de Saúde e o Conselho de Saúde. A Conferência se reúne a cada quatro anos, com representação dos vários segmentos sociais, para avaliar a situação de saúde e propor diretrizes para a política de saúde; é convocada pelo Poder Executivo ou, extraordinariamente, por ela mesma ou pelo Conselho. O Conselho de Saúde é permanente e deliberativo, composto por representantes do governo, prestadores de serviço, profissionais de saúde e usuários, e atua na formulação de estratégias e no controle da execução da política, inclusive nos aspectos econômicos e financeiros; suas decisões são homologadas pelo chefe do poder legalmente constituído em cada esfera. A representação dos usuários é paritária em relação ao conjunto dos demais segmentos, e Conass e Conasems têm representação no Conselho Nacional de Saúde. Os recursos do Fundo Nacional de Saúde destinados à cobertura de ações nos municípios, estados e DF são repassados de forma regular e automática, sendo pelo menos 70% para os municípios. Para recebê-los, o ente deve contar com Fundo de Saúde, Conselho de Saúde paritário, plano de saúde, relatórios de gestão, contrapartida de recursos no orçamento e comissão de elaboração do Plano de Carreira, Cargos e Salários; se não cumprir, os recursos passam a ser administrados pelo Estado ou pela União.', array['Duas instâncias colegiadas em cada esfera: Conferência e Conselho de Saúde.', 'Conferência: a cada 4 anos; avalia a situação e propõe diretrizes; convocada pelo Executivo (ou extraordinariamente por ela ou pelo Conselho).', 'Conselho: permanente e deliberativo; governo, prestadores, profissionais e usuários.', 'Decisões do Conselho são homologadas pelo chefe do poder em cada esfera.', 'Usuários: representação paritária em relação ao conjunto dos demais segmentos (metade).', 'Conass e Conasems têm representação no Conselho Nacional de Saúde.', 'Repasse regular e automático; pelo menos 70% para os municípios.', 'Para receber: Fundo, Conselho paritário, plano de saúde, relatório de gestão, contrapartida e comissão do PCCS.']::text[], '[{"id":"visao-geral","kind":"visao","title":"Controle social e dinheiro: os dois assuntos da lei","source":0,"blocks":[{"type":"cards","items":[{"title":"Art. 1º — participação","text":"Conferência e Conselho de Saúde em ==cada esfera de governo==.","icon":"🤝","tone":"green"},{"title":"Arts. 2º a 4º — recursos","text":"Como o Fundo Nacional de Saúde repassa recursos e o que o ente precisa ter para recebê-los.","icon":"💰","tone":"amber"}]},{"type":"callout","variant":"dica","title":"Por que existe","text":"A ==participação da comunidade== é diretriz da Constituição (art. 198, III) e princípio da Lei 8.080 (art. 7º, VIII). A Lei 8.142 diz como ela acontece."}]},{"id":"duas-instancias","kind":"conceito","title":"As duas instâncias colegiadas","lead":"Em cada esfera de governo (municipal, estadual, federal) o SUS tem as duas.","source":0,"blocks":[{"type":"definition","term":"Art. 1º da Lei 8.142/1990","text":"O SUS contará, em cada esfera de governo, ==sem prejuízo das funções do Poder Legislativo==, com duas instâncias colegiadas: a ==Conferência de Saúde== e o ==Conselho de Saúde==."},{"type":"compare","columns":["Conferência de Saúde","Conselho de Saúde"],"rows":[{"label":"Caráter","cells":["Periódica","==Permanente e deliberativo=="]},{"label":"Quando","cells":["==A cada 4 anos==","Funciona continuamente"]},{"label":"Quem participa","cells":["Representação dos vários segmentos sociais","Governo, prestadores de serviço, profissionais de saúde e usuários"]},{"label":"Faz o quê","cells":["Avalia a situação de saúde e ==propõe diretrizes== para a política","Formula estratégias e ==controla a execução== da política, inclusive nos aspectos econômicos e financeiros"]},{"label":"Convocação / homologação","cells":["Pelo Poder Executivo ou, extraordinariamente, por ela mesma ou pelo Conselho","Decisões ==homologadas pelo chefe do poder== legalmente constituído em cada esfera"]}]}]},{"id":"paridade-dos-usuarios","kind":"classificacao","title":"Composição e paridade","lead":"A regra que mais cai: a metade dos usuários.","source":0,"blocks":[{"type":"callout","variant":"lei","title":"§ 4º — paridade","text":"A representação dos ==usuários== nos Conselhos e Conferências é ==paritária em relação ao conjunto dos demais segmentos==. Na prática: usuários = 50%; governo + prestadores + profissionais = os outros 50%."},{"type":"cards","items":[{"title":"Conass e Conasems","tag":"§ 3º","text":"Têm representação no ==Conselho Nacional de Saúde==.","icon":"🏛️","tone":"blue"},{"title":"Regimento próprio","tag":"§ 5º","text":"Organização e normas de funcionamento em regimento próprio, ==aprovado pelo respectivo conselho==.","icon":"📘","tone":"slate"}]}]},{"id":"recursos","kind":"etapas","title":"Como o dinheiro chega (arts. 2º e 3º)","source":0,"blocks":[{"type":"steps","items":[{"title":"Fundo Nacional de Saúde aloca recursos","text":"Custeio e capital do MS; investimentos previstos em lei orçamentária e no plano do MS; ==cobertura das ações e serviços de municípios, estados e DF==."},{"title":"Repasse regular e automático","text":"Os recursos de cobertura vão aos entes ==de forma regular e automática==, pelos critérios do art. 35 da Lei 8.080."},{"title":"Pelo menos 70% para os municípios","text":"O restante vai aos Estados (art. 3º, § 2º)."},{"title":"Consórcios","text":"Municípios podem formar consórcio e remanejar entre si parcelas desses recursos."}]}]},{"id":"requisitos-para-receber-recursos","kind":"cuidados","title":"O que o ente precisa ter (art. 4º)","source":0,"blocks":[{"type":"checklist","items":["Fundo de Saúde","Conselho de Saúde com composição paritária","Plano de saúde","Relatórios de gestão","Contrapartida de recursos para a saúde no próprio orçamento","Comissão de elaboração do Plano de Carreira, Cargos e Salários (PCCS), com prazo de 2 anos para implantação"]},{"type":"callout","variant":"atencao","title":"Se não cumprir","text":"Os recursos passam a ser administrados pelos ==Estados== (no caso do município) ou pela ==União== (no caso do Estado ou do DF)."}]},{"id":"tecnico-e-controle-social","kind":"tecnico","title":"Onde o técnico entra no controle social","source":0,"blocks":[{"type":"cards","items":[{"title":"Como profissional de saúde","text":"É um dos ==segmentos== que compõem o Conselho, ao lado de governo, prestadores e usuários.","icon":"🧑‍⚕️","tone":"teal"},{"title":"Como usuário","text":"Também pode participar como cidadão nas Conferências, que reúnem os vários segmentos sociais.","icon":"🙋","tone":"green"}]},{"type":"callout","variant":"dica","title":"Não confunda","text":"Os profissionais ==não== entram na metade dos usuários: a paridade é ==usuários × conjunto dos demais segmentos==."}]},{"id":"numeros","kind":"numeros","title":"Números que caem","source":0,"blocks":[{"type":"numbers","items":[{"value":"4 anos","label":"periodicidade da Conferência de Saúde"},{"value":"2","label":"instâncias colegiadas por esfera"},{"value":"50%","label":"usuários nos Conselhos e Conferências","note":"paridade com o conjunto dos demais"},{"value":"70%","label":"mínimo dos recursos repassados aos municípios"},{"value":"6","label":"requisitos do art. 4º"},{"value":"2 anos","label":"prazo para implantar o PCCS"}]}]},{"id":"caso","kind":"caso","title":"Situação-problema","source":0,"blocks":[{"type":"case","title":"Conselho montado pelo prefeito","scenario":"Um município cria o Conselho Municipal de Saúde com 20 membros: 6 do governo, 4 prestadores, 4 profissionais e 6 usuários. O prefeito diz que o Conselho será só consultivo e que se reunirá quando ele convocar.","question":"O que está em desacordo com a Lei 8.142?","answer":"Os usuários deveriam ser 10 (paridade com os demais 10), e o Conselho é permanente e deliberativo, não consultivo.","reasoning":["Paridade: usuários = conjunto dos demais segmentos (10 × 10).","§ 2º: caráter permanente e deliberativo.","Sem Conselho paritário, o município descumpre o art. 4º e os recursos passam a ser administrados pelo Estado."]}]},{"id":"como-a-banca-cobra","kind":"cobrado","title":"Como a banca cobra","source":0,"blocks":[{"type":"traps","items":[{"wrong":"A Conferência de Saúde se reúne a cada 2 anos.","right":"A cada ==4 anos==.","why":"§ 1º do art. 1º."},{"wrong":"O Conselho de Saúde é consultivo e temporário.","right":"É ==permanente e deliberativo==.","why":"§ 2º do art. 1º."},{"wrong":"Os usuários ocupam 1/3 das vagas do Conselho.","right":"Representação ==paritária== em relação ao conjunto dos demais segmentos (metade).","why":"§ 4º."},{"wrong":"As decisões do Conselho dispensam homologação.","right":"São ==homologadas pelo chefe do poder== legalmente constituído em cada esfera.","why":"§ 2º."},{"wrong":"Só o Ministério da Saúde convoca a Conferência.","right":"Convoca o ==Poder Executivo== ou, extraordinariamente, a própria Conferência ou o Conselho.","why":"§ 1º."},{"wrong":"Pelo menos 50% dos recursos de cobertura vão aos municípios.","right":"Pelo menos ==70%==.","why":"Art. 3º, § 2º."},{"wrong":"Município sem Conselho paritário perde definitivamente os recursos.","right":"Os recursos passam a ser ==administrados pelo Estado==.","why":"Parágrafo único do art. 4º."}]}]},{"id":"conexoes","kind":"conexoes","title":"Conexões","blocks":[{"type":"links","items":[{"slug":"principios-do-sus-lei-8080","title":"Princípios do SUS na Lei 8.080","why":"Participação da comunidade é o inciso VIII do art. 7º."},{"slug":"sus-na-constituicao-arts-196-a-200","title":"SUS na Constituição (arts. 196 a 200)","why":"Participação da comunidade como diretriz do art. 198."},{"slug":"lei-8080-organizacao-e-competencias","title":"Lei 8.080: organização, campo de atuação e competências","why":"CIB e CIT pactuam; Conselhos controlam — não confunda."}]}]}]'::jsonb, array['Controle social e dinheiro: os dois assuntos da lei', 'As duas instâncias colegiadas', 'Composição e paridade', 'Como o dinheiro chega (arts. 2º e 3º)', 'O que o ente precisa ter (art. 4º)', 'Onde o técnico entra no controle social', 'Números que caem', 'Situação-problema', 'Como a banca cobra', 'Conexões']::text[], 6, 3, 'published', '2026-10-03'::date, 'Padrão v2: cada seção foi escrita a partir do texto original da fonte, baixado e lido em 2026-10-03 (conferência automatizada durante o desenvolvimento). Revisão por enfermeiro(a) obrigatória antes da venda. A conversão ''paridade = 50%'' é interpretação consolidada do § 4º; a lei não cita percentual.')
on conflict (slug) do update set category_id = excluded.category_id, title = excluded.title, description = excluded.description,
  summary = excluded.summary, key_points = excluded.key_points, sections = excluded.sections, outline = excluded.outline,
  reading_minutes = excluded.reading_minutes, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at, review_notes = excluded.review_notes;
insert into public.topic_sources (topic_id, position, source_title, source_organization, source_url, source_accessed_at, locator)
values ((select id from public.topics where slug = 'participacao-da-comunidade-lei-8142'), 0, 'Lei nº 8.142, de 28 de dezembro de 1990', 'Presidência da República — Planalto', 'https://www.planalto.gov.br/ccivil_03/leis/l8142.htm', '2026-10-03'::date, 'arts. 1º a 4º')
on conflict (topic_id, position) do update set source_title = excluded.source_title, source_organization = excluded.source_organization,
  source_url = excluded.source_url, source_accessed_at = excluded.source_accessed_at, locator = excluded.locator;
delete from public.topic_sources s where s.topic_id = (select id from public.topics where slug = 'participacao-da-comunidade-lei-8142') and s.position >= 1
  and not exists (select 1 from public.questions x where x.source_id = s.id);
insert into public.visual_maps (topic_id, title, spec, status, last_reviewed_at)
values ((select id from public.topics where slug = 'participacao-da-comunidade-lei-8142'), 'Participação da comunidade', '{"layout":"compare","center":"Lei 8.142/1990 · art. 1º","blocks":[{"title":"Conferência de Saúde","tone":"blue","icon":"🗓️","items":["Reúne-se a cada 4 anos","Avalia a situação de saúde","Propõe diretrizes da política","Convocada pelo Executivo (ou extraordinariamente por ela ou pelo Conselho)"]},{"title":"Conselho de Saúde","tone":"green","icon":"🏛️","items":["Permanente e deliberativo","Governo, prestadores, profissionais e usuários","Controla a execução da política, inclusive finanças","Decisões homologadas pelo chefe do poder"]}],"footnote":"Usuários = metade: paridade em relação ao conjunto dos demais segmentos."}'::jsonb, 'published', '2026-10-03'::date)
on conflict (topic_id) do update set title = excluded.title, spec = excluded.spec, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'participacao-da-comunidade-lei-8142'), 'sus-8142-1', 'Segundo a Lei nº 8.142/1990, a Conferência de Saúde reúne-se:', 'O § 1º do art. 1º diz que a Conferência se reúne a cada quatro anos para avaliar a situação de saúde e propor diretrizes; é convocada pelo Executivo ou, extraordinariamente, por ela mesma ou pelo Conselho.', 'facil', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'participacao-da-comunidade-lei-8142') and position = 0), 'duas-instancias', 0, 'published', '2026-10-03'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'sus-8142-1');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'sus-8142-1'), 'A', 'a cada dois anos, convocada exclusivamente pelo Conselho de Saúde.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'sus-8142-1'), 'B', 'anualmente, para aprovar o orçamento do município.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'sus-8142-1'), 'C', 'a cada quatro anos, para avaliar a situação de saúde e propor diretrizes para a formulação da política de saúde.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'sus-8142-1'), 'D', 'sempre que houver epidemia, por convocação do Ministério da Saúde.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'sus-8142-1') and label not in ('A', 'B', 'C', 'D');
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'participacao-da-comunidade-lei-8142'), 'sus-8142-2', 'Sobre o Conselho de Saúde, conforme a Lei nº 8.142/1990, assinale a alternativa correta.', 'O § 2º define o Conselho como permanente e deliberativo; o § 4º estabelece a paridade dos usuários.', 'media', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'participacao-da-comunidade-lei-8142') and position = 0), 'paridade-dos-usuarios', 1, 'published', '2026-10-03'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'sus-8142-2');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'sus-8142-2'), 'A', 'Tem caráter temporário e consultivo.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'sus-8142-2'), 'B', 'Tem caráter permanente e deliberativo, e a representação dos usuários é paritária em relação ao conjunto dos demais segmentos.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'sus-8142-2'), 'C', 'É formado apenas por profissionais de saúde e gestores.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'sus-8142-2'), 'D', 'Suas decisões dispensam homologação.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'sus-8142-2') and label not in ('A', 'B', 'C', 'D');
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'participacao-da-comunidade-lei-8142'), 'sus-8142-3', 'Pelo art. 4º da Lei nº 8.142/1990, para receber os recursos do Fundo Nacional de Saúde, o município deve contar, entre outros requisitos, com:', 'O art. 4º exige Fundo de Saúde, Conselho paritário, plano de saúde, relatórios de gestão, contrapartida no orçamento e comissão de elaboração do PCCS.', 'media', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'participacao-da-comunidade-lei-8142') and position = 0), 'requisitos-para-receber-recursos', 2, 'published', '2026-10-03'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'sus-8142-3');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'sus-8142-3'), 'A', 'hospital próprio de alta complexidade.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'sus-8142-3'), 'B', 'Fundo de Saúde, Conselho de Saúde paritário, plano de saúde e relatórios de gestão.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'sus-8142-3'), 'C', 'aprovação prévia da Conferência Nacional de Saúde.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'sus-8142-3'), 'D', 'consórcio com pelo menos dois municípios vizinhos.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'sus-8142-3') and label not in ('A', 'B', 'C', 'D');
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'participacao-da-comunidade-lei-8142'), 'sus-8142-4', 'Os recursos do Fundo Nacional de Saúde destinados à cobertura das ações e serviços de saúde a serem implementados pelos entes serão destinados aos municípios em pelo menos:', 'Art. 3º, § 2º: pelo menos setenta por cento aos Municípios, afetando-se o restante aos Estados.', 'media', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'participacao-da-comunidade-lei-8142') and position = 0), 'recursos', 3, 'published', '2026-10-03'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'sus-8142-4');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'sus-8142-4'), 'A', '30%.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'sus-8142-4'), 'B', '50%.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'sus-8142-4'), 'C', '70%.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'sus-8142-4'), 'D', '90%.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'sus-8142-4') and label not in ('A', 'B', 'C', 'D');
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'participacao-da-comunidade-lei-8142'), 'sus-8142-5', 'Têm representação no Conselho Nacional de Saúde, por força do § 3º do art. 1º da Lei nº 8.142/1990:', 'O § 3º garante representação do Conass e do Conasems no Conselho Nacional de Saúde.', 'media', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'participacao-da-comunidade-lei-8142') and position = 0), 'paridade-dos-usuarios', 4, 'published', '2026-10-03'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'sus-8142-5');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'sus-8142-5'), 'A', 'o Conselho Federal de Medicina e o Cofen.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'sus-8142-5'), 'B', 'o Conass e o Conasems.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'sus-8142-5'), 'C', 'a Anvisa e a ANS.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'sus-8142-5'), 'D', 'os partidos políticos com bancada no Congresso.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'sus-8142-5') and label not in ('A', 'B', 'C', 'D');
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'participacao-da-comunidade-lei-8142'), 'sus-8142-6', 'Se um município não atender aos requisitos do art. 4º da Lei nº 8.142/1990, os recursos correspondentes:', 'Parágrafo único do art. 4º: os recursos passam a ser administrados pelos Estados (no caso de municípios) ou pela União (no caso de Estados e DF).', 'dificil', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'participacao-da-comunidade-lei-8142') and position = 0), 'requisitos-para-receber-recursos', 5, 'published', '2026-10-03'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'sus-8142-6');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'sus-8142-6'), 'A', 'são devolvidos ao Tesouro Nacional.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'sus-8142-6'), 'B', 'passam a ser administrados pelo respectivo Estado.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'sus-8142-6'), 'C', 'são suspensos definitivamente.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'sus-8142-6'), 'D', 'passam a ser administrados pelo Conselho Municipal de Saúde.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'sus-8142-6') and label not in ('A', 'B', 'C', 'D');
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'participacao-da-comunidade-lei-8142'), 'sus-8142-7', 'São as instâncias colegiadas do SUS em cada esfera de governo, segundo a Lei nº 8.142/1990:', 'Art. 1º: Conferência de Saúde e Conselho de Saúde, sem prejuízo das funções do Poder Legislativo.', 'facil', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'participacao-da-comunidade-lei-8142') and position = 0), 'duas-instancias', 6, 'published', '2026-10-03'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'sus-8142-7');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'sus-8142-7'), 'A', 'a Comissão Intergestores Bipartite e a Tripartite.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'sus-8142-7'), 'B', 'a Conferência de Saúde e o Conselho de Saúde.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'sus-8142-7'), 'C', 'o Ministério da Saúde e a Anvisa.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'sus-8142-7'), 'D', 'o Fundo de Saúde e o Plano de Saúde.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'sus-8142-7') and label not in ('A', 'B', 'C', 'D');
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'participacao-da-comunidade-lei-8142'), 'sus-8142-8', 'Um Conselho Municipal de Saúde com 24 membros deve ter, para atender à paridade da Lei nº 8.142/1990:', 'A representação dos usuários é paritária em relação ao conjunto dos demais segmentos: 12 usuários e 12 dos demais (governo, prestadores e profissionais).', 'dificil', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'participacao-da-comunidade-lei-8142') and position = 0), 'caso', 7, 'published', '2026-10-03'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'sus-8142-8');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'sus-8142-8'), 'A', '6 representantes de usuários.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'sus-8142-8'), 'B', '8 representantes de usuários.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'sus-8142-8'), 'C', '12 representantes de usuários.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'sus-8142-8'), 'D', '16 representantes de usuários.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'sus-8142-8') and label not in ('A', 'B', 'C', 'D');

-- tema: Decreto 7.508: regiões e portas de entrada
insert into public.topics (category_id, slug, title, description, summary, key_points, sections, outline, reading_minutes, position, status, last_reviewed_at, review_notes)
values ((select id from public.categories where product_id = (select id from public.products where key = 'revisao-tecnico-enfermagem') and slug = 'sus'), 'decreto-7508-regioes-e-portas-de-entrada', 'Decreto 7.508: regiões e portas de entrada', 'Região de Saúde, as quatro portas de entrada, RENASES e RENAME, comissões intergestores (CIT, CIB, CIR) e o COAP.', 'O Decreto nº 7.508/2011 regulamenta a Lei 8.080 quanto à organização do SUS, ao planejamento, à assistência e à articulação interfederativa. Região de Saúde é o espaço geográfico contínuo formado por agrupamentos de municípios limítrofes, delimitado por identidades culturais, econômicas e sociais e por redes de comunicação e transporte compartilhadas; é instituída pelo Estado em articulação com os municípios e deve conter, no mínimo, atenção primária, urgência e emergência, atenção psicossocial, atenção ambulatorial especializada e hospitalar e vigilância em saúde. O acesso universal, igualitário e ordenado começa pelas Portas de Entrada — atenção primária, urgência e emergência, atenção psicossocial e serviços especiais de acesso aberto — e se completa na rede regionalizada e hierarquizada; os serviços hospitalares e ambulatoriais especializados são referenciados pelas portas de entrada. O acesso é ordenado pela atenção primária, com base na gravidade do risco e no critério cronológico. A RENASES reúne todas as ações e serviços que o SUS oferece; a RENAME, a seleção e padronização de medicamentos, acompanhada do Formulário Terapêutico Nacional. As Comissões Intergestores são instâncias de pactuação consensual: CIT (União), CIB (Estado) e CIR (região). O Contrato Organizativo da Ação Pública da Saúde (COAP) é o acordo de colaboração entre os entes que define responsabilidades, indicadores, metas, avaliação e recursos na Região de Saúde.', array['Região de Saúde: municípios limítrofes, instituída pelo Estado em articulação com os municípios.', 'Mínimo da região: atenção primária, urgência e emergência, psicossocial, ambulatorial especializada e hospitalar, vigilância em saúde.', 'Portas de Entrada: atenção primária, urgência e emergência, atenção psicossocial e serviços especiais de acesso aberto.', 'Hospital e ambulatório especializado são referenciados pelas portas de entrada (não são porta).', 'Acesso ordenado pela atenção primária: gravidade do risco + critério cronológico.', 'RENASES: todas as ações e serviços do SUS. RENAME: medicamentos essenciais (com o FTN).', 'CIT (União), CIB (Estado), CIR (região): pactuação consensual entre gestores.', 'COAP: acordo entre entes com responsabilidades, metas, indicadores e recursos da região.']::text[], '[{"id":"visao-geral","kind":"visao","title":"O decreto que tira a regionalização do papel","source":0,"blocks":[{"type":"text","text":"A Lei 8.080 diz que o SUS é ==regionalizado e hierarquizado==. O Decreto 7.508 explica ==como==: define a Região de Saúde, por onde o usuário entra, que listas nacionais existem e como os gestores pactuam entre si."},{"type":"cards","items":[{"title":"Organização","text":"Regiões de Saúde e hierarquização (portas de entrada).","icon":"🗺️","tone":"blue"},{"title":"Planejamento","text":"Ascendente e integrado, do local ao federal, ouvidos os Conselhos.","icon":"📈","tone":"green"},{"title":"Assistência","text":"RENASES e RENAME.","icon":"📋","tone":"violet"},{"title":"Articulação","text":"Comissões Intergestores e COAP.","icon":"🤝","tone":"amber"}]}]},{"id":"definicoes","kind":"conceito","title":"Definições do art. 2º","source":0,"blocks":[{"type":"definition","term":"Região de Saúde","text":"Espaço geográfico ==contínuo== constituído por agrupamentos de ==municípios limítrofes==, delimitado a partir de identidades culturais, econômicas e sociais e de redes de comunicação e infraestrutura de transportes compartilhados."},{"type":"definition","term":"Portas de Entrada","text":"Serviços de ==atendimento inicial== à saúde do usuário no SUS."},{"type":"definition","term":"Rede de Atenção à Saúde","text":"Conjunto de ações e serviços articulados em ==níveis de complexidade crescente==, para garantir a integralidade."},{"type":"definition","term":"Serviços Especiais de Acesso Aberto","text":"Serviços específicos para quem, em razão de ==agravo ou de situação laboral==, necessita de atendimento especial."},{"type":"definition","term":"Mapa da Saúde","text":"Descrição geográfica da distribuição de recursos humanos e de ações e serviços ofertados pelo ==SUS e pela iniciativa privada==."}]},{"id":"regioes","kind":"classificacao","title":"Região de Saúde: quem institui e o que precisa ter","source":0,"blocks":[{"type":"steps","items":[{"title":"Quem institui","text":"O ==Estado, em articulação com os Municípios==, respeitando as diretrizes da CIT.","who":"servico"},{"title":"Pode ser interestadual","text":"Municípios limítrofes de Estados diferentes, por ato conjunto dos Estados."},{"title":"Serviços mínimos","text":"Atenção primária · urgência e emergência · atenção psicossocial · atenção ambulatorial especializada e hospitalar · vigilância em saúde."},{"title":"Referência para recursos","text":"As regiões são referência para as ==transferências de recursos== entre os entes."}]}]},{"id":"portas-de-entrada","kind":"etapas","title":"Portas de entrada e hierarquização","lead":"O acesso começa na porta e se completa na rede.","source":0,"blocks":[{"type":"cards","items":[{"title":"Atenção primária","text":"Ordena o acesso.","icon":"🏘️","tone":"green"},{"title":"Urgência e emergência","text":"","icon":"🚑","tone":"rose"},{"title":"Atenção psicossocial","text":"","icon":"🧠","tone":"violet"},{"title":"Especiais de acesso aberto","text":"Agravo ou situação laboral que exige atendimento especial.","icon":"🔓","tone":"amber"}]},{"type":"steps","items":[{"title":"Acesso se inicia pelas portas de entrada","text":"E se completa na rede regionalizada e hierarquizada, conforme a complexidade (art. 8º)."},{"title":"Hospital e ambulatório especializado são referenciados","text":"Serviços de ==maior complexidade e densidade tecnológica== são acessados a partir das portas (art. 10)."},{"title":"Atenção primária ordena","text":"Com base na ==gravidade do risco individual e coletivo== e no ==critério cronológico==, respeitando quem tem proteção especial (art. 11)."},{"title":"Continuidade do cuidado","text":"Garantida ao usuário em todas as modalidades, nos serviços da rede da região (art. 12)."}]},{"type":"callout","variant":"dica","title":"Novas portas","text":"Com justificativa técnica e pactuação nas Comissões Intergestores, os entes podem ==criar novas portas de entrada==."}]},{"id":"renases-rename","kind":"conceito","title":"RENASES e RENAME","source":0,"blocks":[{"type":"compare","columns":["RENASES","RENAME"],"rows":[{"label":"O que é","cells":["Relação Nacional de ==Ações e Serviços== de Saúde: tudo o que o SUS oferece para a integralidade","Relação Nacional de ==Medicamentos Essenciais==: seleção e padronização de medicamentos"]},{"label":"Acompanha","cells":["Pactuação de responsabilidades nas Comissões","==Formulário Terapêutico Nacional (FTN)== e os PCDT"]},{"label":"Quem dispõe","cells":["Ministério da Saúde, com diretrizes da CIT","Ministério da Saúde, com diretrizes da CIT"]},{"label":"Atualização","cells":["A cada 2 anos","A cada 2 anos"]}]},{"type":"checklist","title":"Acesso à assistência farmacêutica exige, ao mesmo tempo (art. 28)","items":["Usuário assistido por ações e serviços do SUS","Prescrição por profissional no exercício regular de suas funções no SUS","Prescrição conforme a RENAME e os PCDT (ou relação complementar)","Dispensação em unidade indicada pela direção do SUS"]}]},{"id":"comissoes-e-coap","kind":"tecnico","title":"Comissões Intergestores e COAP","source":0,"blocks":[{"type":"compare","columns":["Âmbito","Vinculação administrativa"],"rows":[{"label":"CIT","cells":["União","Ministério da Saúde"]},{"label":"CIB","cells":["Estado","Secretaria Estadual de Saúde"]},{"label":"CIR","cells":["Região de Saúde","Secretaria Estadual de Saúde (observa as diretrizes da CIB)"]}]},{"type":"definition","term":"COAP — Contrato Organizativo da Ação Pública da Saúde","text":"Acordo de colaboração entre entes federativos para organizar e integrar as ações e serviços na rede regionalizada, definindo ==responsabilidades, indicadores e metas, critérios de avaliação, recursos financeiros== e forma de controle.","note":"O controle e a fiscalização do COAP são feitos pelo Sistema Nacional de Auditoria e Avaliação do SUS."}]},{"id":"numeros","kind":"numeros","title":"Números que caem","source":0,"blocks":[{"type":"numbers","items":[{"value":"4","label":"portas de entrada"},{"value":"5","label":"grupos mínimos de serviços da Região de Saúde"},{"value":"3","label":"comissões intergestores","note":"CIT, CIB, CIR"},{"value":"2 anos","label":"atualização da RENASES e da RENAME"},{"value":"2011","label":"ano do decreto"}]}]},{"id":"caso","kind":"caso","title":"Situação-problema","source":0,"blocks":[{"type":"case","title":"Usuário quer ir direto ao cardiologista","scenario":"Um usuário procura o ambulatório de cardiologia do hospital regional sem encaminhamento, dizendo que ''o SUS é universal''.","question":"Como o Decreto 7.508 organiza esse acesso?","answer":"O acesso começa pelas portas de entrada (aqui, a atenção primária), que ordenam e referenciam aos serviços ambulatoriais especializados e hospitalares.","reasoning":["Art. 8º: o acesso universal, igualitário e ordenado se inicia pelas portas de entrada.","Art. 10: ambulatório especializado e hospital são referenciados pelas portas.","Art. 11: a atenção primária ordena com base na gravidade do risco e no critério cronológico.","Se fosse urgência, a porta seria a urgência e emergência."]}]},{"id":"como-a-banca-cobra","kind":"cobrado","title":"Como a banca cobra","source":0,"blocks":[{"type":"traps","items":[{"wrong":"O atendimento hospitalar é porta de entrada do SUS.","right":"Hospital e ambulatório especializado são ==referenciados== pelas portas.","why":"As quatro portas são: atenção primária, urgência e emergência, psicossocial e especiais de acesso aberto."},{"wrong":"As Regiões de Saúde são instituídas pelo Ministério da Saúde.","right":"Pelo ==Estado, em articulação com os Municípios==.","why":"Art. 4º, respeitadas as diretrizes da CIT."},{"wrong":"A RENAME lista todas as ações e serviços do SUS.","right":"Quem lista ações e serviços é a ==RENASES==; a RENAME é de medicamentos.","why":"Arts. 21 e 25."},{"wrong":"A CIR é vinculada ao Ministério da Saúde.","right":"A CIR é vinculada à ==Secretaria Estadual de Saúde==.","why":"Art. 30, III."},{"wrong":"O acesso é ordenado apenas pela ordem de chegada.","right":"Pela ==gravidade do risco== e pelo ==critério cronológico==.","why":"Art. 11."},{"wrong":"Para ser instituída, a Região de Saúde precisa ter apenas atenção primária e hospitalar.","right":"Também ==urgência e emergência, atenção psicossocial e vigilância em saúde==.","why":"Art. 5º lista cinco grupos mínimos."},{"wrong":"O COAP é um contrato entre o SUS e hospitais privados.","right":"É um ==acordo de colaboração entre entes federativos==.","why":"Art. 2º, II e art. 33."}]}]},{"id":"conexoes","kind":"conexoes","title":"Conexões","blocks":[{"type":"links","items":[{"slug":"lei-8080-organizacao-e-competencias","title":"Lei 8.080: organização, campo de atuação e competências","why":"A lei que o decreto regulamenta."},{"slug":"atencao-basica-pnab","title":"Atenção Básica: a PNAB","why":"A porta de entrada preferencial na prática."},{"slug":"rede-de-atencao-as-urgencias-componentes","title":"Rede de Atenção às Urgências: componentes","why":"A porta de urgência e emergência organizada em rede."}]}]}]'::jsonb, array['O decreto que tira a regionalização do papel', 'Definições do art. 2º', 'Região de Saúde: quem institui e o que precisa ter', 'Portas de entrada e hierarquização', 'RENASES e RENAME', 'Comissões Intergestores e COAP', 'Números que caem', 'Situação-problema', 'Como a banca cobra', 'Conexões']::text[], 7, 4, 'published', '2026-10-03'::date, 'Padrão v2: cada seção foi escrita a partir do texto original da fonte, baixado e lido em 2026-10-03 (conferência automatizada durante o desenvolvimento). Revisão por enfermeiro(a) obrigatória antes da venda.')
on conflict (slug) do update set category_id = excluded.category_id, title = excluded.title, description = excluded.description,
  summary = excluded.summary, key_points = excluded.key_points, sections = excluded.sections, outline = excluded.outline,
  reading_minutes = excluded.reading_minutes, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at, review_notes = excluded.review_notes;
insert into public.topic_sources (topic_id, position, source_title, source_organization, source_url, source_accessed_at, locator)
values ((select id from public.topics where slug = 'decreto-7508-regioes-e-portas-de-entrada'), 0, 'Decreto nº 7.508, de 28 de junho de 2011 (regulamenta a Lei nº 8.080/1990)', 'Presidência da República — Planalto', 'https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2011/decreto/d7508.htm', '2026-10-03'::date, 'arts. 2º a 41')
on conflict (topic_id, position) do update set source_title = excluded.source_title, source_organization = excluded.source_organization,
  source_url = excluded.source_url, source_accessed_at = excluded.source_accessed_at, locator = excluded.locator;
delete from public.topic_sources s where s.topic_id = (select id from public.topics where slug = 'decreto-7508-regioes-e-portas-de-entrada') and s.position >= 1
  and not exists (select 1 from public.questions x where x.source_id = s.id);
insert into public.visual_maps (topic_id, title, spec, status, last_reviewed_at)
values ((select id from public.topics where slug = 'decreto-7508-regioes-e-portas-de-entrada'), 'Organização pelo Decreto 7.508', '{"layout":"hub","center":"Rede de Atenção à Saúde na Região","blocks":[{"title":"Portas de entrada","tone":"green","icon":"🚪","items":["Atenção primária","Urgência e emergência","Atenção psicossocial","Especiais de acesso aberto"]},{"title":"Região de Saúde","tone":"blue","icon":"🗺️","items":["Municípios limítrofes","Instituída pelo Estado","5 grupos mínimos de serviços"]},{"title":"Listas nacionais","tone":"violet","icon":"📋","items":["RENASES: ações e serviços","RENAME + FTN: medicamentos"]},{"title":"Pactuação","tone":"amber","icon":"🤝","items":["CIT · CIB · CIR","COAP entre os entes"]}]}'::jsonb, 'published', '2026-10-03'::date)
on conflict (topic_id) do update set title = excluded.title, spec = excluded.spec, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'decreto-7508-regioes-e-portas-de-entrada'), 'sus-7508-1', 'São Portas de Entrada às ações e serviços de saúde nas Redes de Atenção à Saúde, segundo o Decreto nº 7.508/2011, os serviços:', 'Art. 9º: atenção primária, urgência e emergência, atenção psicossocial e serviços especiais de acesso aberto.', 'facil', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'decreto-7508-regioes-e-portas-de-entrada') and position = 0), 'portas-de-entrada', 0, 'published', '2026-10-03'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'sus-7508-1');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'sus-7508-1'), 'A', 'de atenção hospitalar, ambulatorial especializada, laboratorial e farmacêutica.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'sus-7508-1'), 'B', 'de atenção primária, de urgência e emergência, de atenção psicossocial e especiais de acesso aberto.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'sus-7508-1'), 'C', 'de alta complexidade, média complexidade e transplantes.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'sus-7508-1'), 'D', 'privados conveniados e filantrópicos.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'sus-7508-1') and label not in ('A', 'B', 'C', 'D');
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'decreto-7508-regioes-e-portas-de-entrada'), 'sus-7508-2', 'Pelo Decreto nº 7.508/2011, as Regiões de Saúde são instituídas:', 'Art. 4º: instituídas pelo Estado, em articulação com os Municípios, respeitadas as diretrizes gerais pactuadas na CIT.', 'media', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'decreto-7508-regioes-e-portas-de-entrada') and position = 0), 'regioes', 1, 'published', '2026-10-03'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'sus-7508-2');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'sus-7508-2'), 'A', 'pelo Ministério da Saúde, por portaria.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'sus-7508-2'), 'B', 'pelo Estado, em articulação com os Municípios, respeitadas as diretrizes da CIT.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'sus-7508-2'), 'C', 'pelos Conselhos Municipais de Saúde.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'sus-7508-2'), 'D', 'pela Câmara Municipal de cada município.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'sus-7508-2') and label not in ('A', 'B', 'C', 'D');
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'decreto-7508-regioes-e-portas-de-entrada'), 'sus-7508-3', 'Para ser instituída, a Região de Saúde deve conter, no mínimo, ações e serviços de:', 'Art. 5º lista os cinco grupos mínimos.', 'media', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'decreto-7508-regioes-e-portas-de-entrada') and position = 0), 'regioes', 2, 'published', '2026-10-03'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'sus-7508-3');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'sus-7508-3'), 'A', 'atenção primária e hospitalar apenas.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'sus-7508-3'), 'B', 'atenção primária; urgência e emergência; atenção psicossocial; atenção ambulatorial especializada e hospitalar; vigilância em saúde.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'sus-7508-3'), 'C', 'transplantes e oncologia.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'sus-7508-3'), 'D', 'assistência farmacêutica e laboratorial apenas.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'sus-7508-3') and label not in ('A', 'B', 'C', 'D');
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'decreto-7508-regioes-e-portas-de-entrada'), 'sus-7508-4', 'A relação que compreende todas as ações e serviços que o SUS oferece ao usuário para atendimento da integralidade da assistência é a:', 'Art. 21: RENASES — Relação Nacional de Ações e Serviços de Saúde. A RENAME é de medicamentos.', 'media', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'decreto-7508-regioes-e-portas-de-entrada') and position = 0), 'renases-rename', 3, 'published', '2026-10-03'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'sus-7508-4');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'sus-7508-4'), 'A', 'RENAME.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'sus-7508-4'), 'B', 'RENASES.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'sus-7508-4'), 'C', 'CIT.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'sus-7508-4'), 'D', 'FTN.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'sus-7508-4') and label not in ('A', 'B', 'C', 'D');
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'decreto-7508-regioes-e-portas-de-entrada'), 'sus-7508-5', 'Segundo o Decreto nº 7.508/2011, o acesso universal e igualitário às ações e serviços de saúde será ordenado:', 'Art. 11: ordenado pela atenção primária, fundado na avaliação da gravidade do risco e no critério cronológico.', 'media', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'decreto-7508-regioes-e-portas-de-entrada') and position = 0), 'portas-de-entrada', 4, 'published', '2026-10-03'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'sus-7508-5');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'sus-7508-5'), 'A', 'pelo hospital de referência regional.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'sus-7508-5'), 'B', 'pela atenção primária, com base na gravidade do risco individual e coletivo e no critério cronológico.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'sus-7508-5'), 'C', 'pelo Conselho de Saúde.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'sus-7508-5'), 'D', 'exclusivamente por ordem de chegada.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'sus-7508-5') and label not in ('A', 'B', 'C', 'D');
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'decreto-7508-regioes-e-portas-de-entrada'), 'sus-7508-6', 'A Comissão Intergestores Regional (CIR), prevista no Decreto nº 7.508/2011, é vinculada, para efeitos administrativos e operacionais:', 'Art. 30, III: CIR no âmbito regional, vinculada à Secretaria Estadual de Saúde, observando as diretrizes da CIB.', 'dificil', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'decreto-7508-regioes-e-portas-de-entrada') and position = 0), 'comissoes-e-coap', 5, 'published', '2026-10-03'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'sus-7508-6');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'sus-7508-6'), 'A', 'ao Ministério da Saúde.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'sus-7508-6'), 'B', 'à Secretaria Estadual de Saúde, devendo observar as diretrizes da CIB.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'sus-7508-6'), 'C', 'à Secretaria Municipal de Saúde do maior município da região.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'sus-7508-6'), 'D', 'ao Conselho Nacional de Saúde.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'sus-7508-6') and label not in ('A', 'B', 'C', 'D');
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'decreto-7508-regioes-e-portas-de-entrada'), 'sus-7508-7', 'O acordo de colaboração firmado entre entes federativos para organizar e integrar as ações e serviços de saúde na rede regionalizada, com responsabilidades, indicadores, metas e recursos, é o:', 'Art. 2º, II e art. 33: Contrato Organizativo da Ação Pública da Saúde.', 'dificil', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'decreto-7508-regioes-e-portas-de-entrada') and position = 0), 'comissoes-e-coap', 6, 'published', '2026-10-03'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'sus-7508-7');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'sus-7508-7'), 'A', 'Mapa da Saúde.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'sus-7508-7'), 'B', 'Contrato Organizativo da Ação Pública da Saúde (COAP).', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'sus-7508-7'), 'C', 'Plano Plurianual.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'sus-7508-7'), 'D', 'Termo de Ajuste de Conduta.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'sus-7508-7') and label not in ('A', 'B', 'C', 'D');
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'decreto-7508-regioes-e-portas-de-entrada'), 'sus-7508-8', 'No Decreto nº 7.508/2011, Região de Saúde é definida como espaço geográfico:', 'É a definição do art. 2º, I.', 'media', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'decreto-7508-regioes-e-portas-de-entrada') and position = 0), 'definicoes', 7, 'published', '2026-10-03'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'sus-7508-8');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'sus-7508-8'), 'A', 'descontínuo, formado por municípios de qualquer estado.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'sus-7508-8'), 'B', 'contínuo, constituído por agrupamentos de municípios limítrofes, delimitado por identidades culturais, econômicas e sociais e redes de comunicação e transporte compartilhadas.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'sus-7508-8'), 'C', 'correspondente a cada bairro de um município.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'sus-7508-8'), 'D', 'definido pela área de abrangência de um hospital privado.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'sus-7508-8') and label not in ('A', 'B', 'C', 'D');

-- tema: Atenção Básica: a PNAB
insert into public.topics (category_id, slug, title, description, summary, key_points, sections, outline, reading_minutes, position, status, last_reviewed_at, review_notes)
values ((select id from public.categories where product_id = (select id from public.products where key = 'revisao-tecnico-enfermagem') and slug = 'sus'), 'atencao-basica-pnab', 'Atenção Básica: a PNAB', 'Princípios e diretrizes, Saúde da Família, composição das equipes, parâmetros populacionais e atribuições do técnico de enfermagem.', 'A Política Nacional de Atenção Básica (Portaria nº 2.436/2017) considera Atenção Básica e Atenção Primária à Saúde termos equivalentes. A Atenção Básica é a porta de entrada preferencial do SUS e o centro de comunicação da Rede de Atenção à Saúde. Seus princípios são universalidade, equidade e integralidade; suas diretrizes, regionalização e hierarquização, territorialização, população adscrita, cuidado centrado na pessoa, resolutividade, longitudinalidade do cuidado, coordenação do cuidado, ordenação da rede e participação da comunidade. A Saúde da Família é a estratégia prioritária de expansão e consolidação. A equipe de Saúde da Família é composta no mínimo por médico, enfermeiro, auxiliar e/ou técnico de enfermagem e agente comunitário de saúde, podendo incluir agente de combate às endemias e profissionais de saúde bucal; todos cumprem 40 horas semanais. Recomenda-se população adscrita de 2.000 a 3.500 pessoas por equipe, até 4 equipes por UBS, e, em áreas de risco e vulnerabilidade, cobertura de 100% com no máximo 750 pessoas por ACS. As UBS devem funcionar no mínimo 40 horas semanais, 5 dias por semana, nos 12 meses do ano. Ao técnico e/ou auxiliar de enfermagem cabe participar das atividades de atenção realizando procedimentos regulamentados na UBS, no domicílio e em outros espaços comunitários, e realizar procedimentos como curativos, administração de medicamentos, vacinas, coleta de material para exames e preparo e esterilização de materiais, entre outras atividades delegadas pelo enfermeiro.', array['Atenção Básica e Atenção Primária à Saúde são termos equivalentes na PNAB.', 'Princípios: universalidade, EQUIDADE e integralidade.', 'Diretrizes: regionalização/hierarquização, territorialização, população adscrita, cuidado centrado na pessoa, resolutividade, longitudinalidade, coordenar o cuidado, ordenar as redes, participação da comunidade.', 'Saúde da Família é a estratégia prioritária.', 'eSF mínima: médico, enfermeiro, auxiliar e/ou técnico de enfermagem e ACS — todos com 40 h semanais.', 'População adscrita recomendada: 2.000 a 3.500 pessoas por equipe; até 4 equipes por UBS.', 'Áreas de risco: 100% de cobertura, no máximo 750 pessoas por ACS.', 'Técnico: curativos, medicamentos, vacinas, coleta de exames, preparo e esterilização de materiais, entre outras delegadas pelo enfermeiro.']::text[], '[{"id":"visao-geral","kind":"visao","title":"A porta de entrada preferencial","source":0,"blocks":[{"type":"definition","term":"Atenção Básica na PNAB","text":"Porta de entrada ==preferencial== do SUS, espaço privilegiado de gestão do cuidado e ==base para o ordenamento da rede== e para a efetivação da integralidade.","note":"A PNAB considera Atenção Básica (AB) e Atenção Primária à Saúde (APS) ==termos equivalentes==."},{"type":"callout","variant":"dica","title":"Ligação com o Decreto 7.508","text":"A atenção primária é uma das portas de entrada e ==ordena o acesso== na rede regionalizada."}]},{"id":"principios-e-diretrizes","kind":"classificacao","title":"Princípios e diretrizes","source":0,"blocks":[{"type":"cards","items":[{"title":"Universalidade","tag":"princípio","text":"Acesso universal e contínuo; porta de entrada aberta e preferencial (primeiro contato); receber e ouvir todas as pessoas.","icon":"🚪","tone":"blue"},{"title":"Equidade","tag":"princípio","text":"Ofertar o cuidado ==reconhecendo as diferenças== e conforme as necessidades; proibida qualquer exclusão.","icon":"⚖️","tone":"violet"},{"title":"Integralidade","tag":"princípio","text":"Cuidado, promoção, prevenção, cura, reabilitação, redução de danos e ==cuidados paliativos==.","icon":"🧩","tone":"teal"}]},{"type":"checklist","title":"Diretrizes","items":["Regionalização e hierarquização (AB como ponto de comunicação da RAS)","Territorialização e adstrição","==População adscrita== (vínculo e responsabilização)","Cuidado centrado na pessoa","Resolutividade (resolver a grande maioria dos problemas)","==Longitudinalidade do cuidado== (continuidade ao longo do tempo)","==Coordenar o cuidado== (centro de comunicação entre os pontos)","==Ordenar as redes==","Participação da comunidade"]}]},{"id":"equipes","kind":"conceito","title":"Saúde da Família e equipes","source":0,"blocks":[{"type":"compare","columns":["Equipe de Saúde da Família (eSF)","Equipe de Atenção Básica (eAB)"],"rows":[{"label":"Papel","cells":["==Estratégia prioritária== de expansão e consolidação da AB","Modalidade conforme as necessidades do município; pode migrar para o modelo da ESF"]},{"label":"Composição mínima","cells":["Médico, enfermeiro, ==auxiliar e/ou técnico de enfermagem== e ==ACS==; pode ter ACE e saúde bucal","Médico, enfermeiro, auxiliares e/ou técnicos de enfermagem; pode agregar ACS, ACE e saúde bucal"]},{"label":"Carga horária","cells":["==40 horas semanais para todos==; vínculo a apenas 1 eSF","Mínimo de 10 h por categoria, até 3 profissionais por categoria, somando 40 h"]}]}]},{"id":"parametros","kind":"numeros","title":"Parâmetros que caem","source":0,"blocks":[{"type":"numbers","items":[{"value":"2.000–3.500","label":"pessoas adscritas por equipe (eAB/eSF)","note":"outros arranjos são possíveis conforme vulnerabilidade"},{"value":"4","label":"equipes por UBS (recomendação)"},{"value":"750","label":"pessoas por ACS no máximo","note":"em áreas de risco e vulnerabilidade, com 100% de cobertura"},{"value":"40 h","label":"carga horária de todos os profissionais da eSF"},{"value":"40 h · 5 dias · 12 meses","label":"funcionamento mínimo recomendado da UBS"},{"value":"População ÷ 2.000","label":"fórmula do teto de equipes para financiamento"}]}]},{"id":"atribuicoes-tecnico","kind":"tecnico","title":"Atribuições do técnico e/ou auxiliar de enfermagem (item 4.2.2)","source":0,"blocks":[{"type":"steps","items":[{"title":"Participar das atividades de atenção à saúde","text":"Realizando procedimentos regulamentados no exercício da profissão ==na UBS== e, quando indicado, ==no domicílio== e em espaços comunitários (escolas, associações).","who":"tecnico"},{"title":"Realizar procedimentos de enfermagem","text":"Curativos, administração de medicamentos, ==vacinas==, coleta de material para exames, lavagem, preparo e esterilização de materiais, entre outras atividades ==delegadas pelo enfermeiro==.","who":"tecnico","why":"A PNAB reforça que o técnico atua dentro da regulamentação profissional e sob a delegação do enfermeiro (Lei 7.498)."},{"title":"Exercer outras atribuições da sua área de atuação","who":"tecnico"}]}]},{"id":"vigilancia-e-ab","kind":"cuidados","title":"Atenção Básica e Vigilância em Saúde","source":0,"blocks":[{"type":"callout","variant":"lei","title":"Art. 5º","text":"A ==integração entre Vigilância em Saúde e Atenção Básica é condição essencial== para atender às necessidades de saúde da população, na ótica da integralidade."},{"type":"text","text":"ACS e ACE compõem uma eAB ou eSF e são coordenados de forma compartilhada entre a Atenção Básica e a Vigilância em Saúde."}]},{"id":"caso","kind":"caso","title":"Situação-problema","source":0,"blocks":[{"type":"case","title":"Montando uma equipe","scenario":"Um município quer implantar uma equipe de Saúde da Família com médico e enfermeiro de 40 horas, um técnico de enfermagem de 20 horas e nenhum agente comunitário, para atender 6.000 pessoas.","question":"O que está fora do que a PNAB estabelece?","answer":"Falta o ACS na composição mínima, o técnico precisa cumprir 40 horas e a população fica acima da faixa recomendada de 2.000 a 3.500 pessoas.","reasoning":["eSF mínima inclui ACS.","Na eSF, a carga horária de 40 horas é obrigatória para todos os profissionais.","A recomendação é 2.000 a 3.500 pessoas por equipe (outros arranjos exigem justificativa local)."]}]},{"id":"como-a-banca-cobra","kind":"cobrado","title":"Como a banca cobra","source":0,"blocks":[{"type":"traps","items":[{"wrong":"Na PNAB, a equidade não é princípio, apenas diretriz.","right":"Equidade é ==princípio== (com universalidade e integralidade).","why":"Art. 3º, I. Atenção: no art. 7º da Lei 8.080 o termo é igualdade."},{"wrong":"Atenção Básica e Atenção Primária são conceitos diferentes na PNAB.","right":"São ==termos equivalentes==.","why":"Parágrafo único do art. 1º."},{"wrong":"O ACS não integra a composição mínima da eSF.","right":"O ==ACS integra== a composição mínima da eSF.","why":"Junto com médico, enfermeiro e auxiliar/técnico de enfermagem."},{"wrong":"Na eSF, os profissionais podem cumprir 20 horas semanais.","right":"==40 horas semanais== para todos os membros da eSF.","why":"Carga horária flexível é da eAB (mínimo 10 h por categoria somando 40 h)."},{"wrong":"Cada ACS pode ter até 1.500 pessoas sob sua responsabilidade.","right":"No máximo ==750 pessoas por ACS== (áreas de risco e vulnerabilidade).","why":"Item da composição da eSF e da EACS."},{"wrong":"A recomendação é de 4.000 a 5.000 pessoas por equipe.","right":"==2.000 a 3.500== pessoas por equipe.","why":"Parâmetro recomendado, admitidos outros arranjos."},{"wrong":"Vacinar e coletar exames não estão entre as atribuições do técnico na AB.","right":"Estão: curativos, medicamentos, ==vacinas==, ==coleta de material==, preparo e esterilização de materiais.","why":"Item 4.2.2, II."}]}]},{"id":"conexoes","kind":"conexoes","title":"Conexões","blocks":[{"type":"links","items":[{"slug":"decreto-7508-regioes-e-portas-de-entrada","title":"Decreto 7.508: regiões e portas de entrada","why":"Atenção primária como porta de entrada que ordena o acesso."},{"slug":"principios-do-sus-lei-8080","title":"Princípios do SUS na Lei 8.080","why":"Igualdade (lei) × equidade (PNAB)."},{"slug":"lei-7498-atribuicoes-do-tecnico","title":"Lei 7.498/86: o que cabe ao técnico","why":"O limite legal das atividades delegadas pelo enfermeiro."}]}]}]'::jsonb, array['A porta de entrada preferencial', 'Princípios e diretrizes', 'Saúde da Família e equipes', 'Parâmetros que caem', 'Atribuições do técnico e/ou auxiliar de enfermagem (item 4.2.2)', 'Atenção Básica e Vigilância em Saúde', 'Situação-problema', 'Como a banca cobra', 'Conexões']::text[], 6, 5, 'published', '2026-10-03'::date, 'Padrão v2: cada seção foi escrita a partir do texto original da fonte, baixado e lido em 2026-10-03 (conferência automatizada durante o desenvolvimento). Revisão por enfermeiro(a) obrigatória antes da venda. A PNAB 2017 está consolidada na Portaria de Consolidação nº 2/2017 e teve alterações posteriores (ex.: financiamento e eMulti); conferir na revisão humana se algum parâmetro mudou.')
on conflict (slug) do update set category_id = excluded.category_id, title = excluded.title, description = excluded.description,
  summary = excluded.summary, key_points = excluded.key_points, sections = excluded.sections, outline = excluded.outline,
  reading_minutes = excluded.reading_minutes, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at, review_notes = excluded.review_notes;
insert into public.topic_sources (topic_id, position, source_title, source_organization, source_url, source_accessed_at, locator)
values ((select id from public.topics where slug = 'atencao-basica-pnab'), 0, 'Portaria nº 2.436, de 21 de setembro de 2017 (Política Nacional de Atenção Básica)', 'Ministério da Saúde — Saúde Legis', 'https://bvsms.saude.gov.br/bvs/saudelegis/gm/2017/prt2436_22_09_2017.html', '2026-10-03'::date, 'arts. 1º a 5º; Anexo, itens 1 a 4')
on conflict (topic_id, position) do update set source_title = excluded.source_title, source_organization = excluded.source_organization,
  source_url = excluded.source_url, source_accessed_at = excluded.source_accessed_at, locator = excluded.locator;
delete from public.topic_sources s where s.topic_id = (select id from public.topics where slug = 'atencao-basica-pnab') and s.position >= 1
  and not exists (select 1 from public.questions x where x.source_id = s.id);
insert into public.visual_maps (topic_id, title, spec, status, last_reviewed_at)
values ((select id from public.topics where slug = 'atencao-basica-pnab'), 'PNAB em um mapa', '{"layout":"hub","center":"Atenção Básica — porta de entrada preferencial","blocks":[{"title":"Princípios","tone":"blue","icon":"⚖️","items":["Universalidade","Equidade","Integralidade"]},{"title":"Diretrizes-chave","tone":"teal","icon":"🧭","items":["Território e população adscrita","Longitudinalidade","Coordenar o cuidado","Ordenar as redes"]},{"title":"Saúde da Família","tone":"green","icon":"🏡","items":["Médico, enfermeiro, técnico/auxiliar, ACS","40 h para todos","2.000–3.500 pessoas"]},{"title":"Técnico de enfermagem","tone":"amber","icon":"🧑‍⚕️","items":["Curativos, vacinas, medicamentos","Coleta de exames","Na UBS e no domicílio"]}]}'::jsonb, 'published', '2026-10-03'::date)
on conflict (topic_id) do update set title = excluded.title, spec = excluded.spec, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'atencao-basica-pnab'), 'sus-pnab-1', 'Segundo a Política Nacional de Atenção Básica (Portaria nº 2.436/2017), são princípios do SUS e da RAS a serem operacionalizados na Atenção Básica:', 'Art. 3º, I: universalidade, equidade e integralidade. Resolutividade, longitudinalidade e territorialização são diretrizes.', 'facil', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'atencao-basica-pnab') and position = 0), 'principios-e-diretrizes', 0, 'published', '2026-10-03'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'sus-pnab-1');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'sus-pnab-1'), 'A', 'descentralização, hierarquização e participação.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'sus-pnab-1'), 'B', 'universalidade, equidade e integralidade.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'sus-pnab-1'), 'C', 'resolutividade, longitudinalidade e territorialização.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'sus-pnab-1'), 'D', 'gratuidade, seletividade e eficiência.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'sus-pnab-1') and label not in ('A', 'B', 'C', 'D');
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'atencao-basica-pnab'), 'sus-pnab-2', 'A composição mínima da equipe de Saúde da Família, segundo a PNAB 2017, é:', 'A eSF é composta no mínimo por médico, enfermeiro, auxiliar e/ou técnico de enfermagem e ACS, podendo incluir ACE e saúde bucal.', 'facil', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'atencao-basica-pnab') and position = 0), 'equipes', 1, 'published', '2026-10-03'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'sus-pnab-2');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'sus-pnab-2'), 'A', 'médico e enfermeiro apenas.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'sus-pnab-2'), 'B', 'médico, enfermeiro, auxiliar e/ou técnico de enfermagem e agente comunitário de saúde.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'sus-pnab-2'), 'C', 'enfermeiro, dentista e farmacêutico.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'sus-pnab-2'), 'D', 'médico, assistente social e psicólogo.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'sus-pnab-2') and label not in ('A', 'B', 'C', 'D');
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'atencao-basica-pnab'), 'sus-pnab-3', 'A PNAB 2017 recomenda que a população adscrita por equipe de Atenção Básica ou de Saúde da Família seja de:', 'Recomenda-se de 2.000 a 3.500 pessoas por equipe, admitidos outros arranjos conforme vulnerabilidades e riscos.', 'media', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'atencao-basica-pnab') and position = 0), 'parametros', 2, 'published', '2026-10-03'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'sus-pnab-3');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'sus-pnab-3'), 'A', 'até 1.000 pessoas.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'sus-pnab-3'), 'B', '2.000 a 3.500 pessoas.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'sus-pnab-3'), 'C', '4.000 a 6.000 pessoas.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'sus-pnab-3'), 'D', '10.000 pessoas.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'sus-pnab-3') and label not in ('A', 'B', 'C', 'D');
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'atencao-basica-pnab'), 'sus-pnab-4', 'Em áreas de grande dispersão territorial, risco e vulnerabilidade social, a PNAB recomenda cobertura de 100% da população com, no máximo:', 'Máximo de 750 pessoas por agente comunitário de saúde.', 'media', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'atencao-basica-pnab') and position = 0), 'parametros', 3, 'published', '2026-10-03'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'sus-pnab-4');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'sus-pnab-4'), 'A', '400 pessoas por ACS.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'sus-pnab-4'), 'B', '750 pessoas por ACS.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'sus-pnab-4'), 'C', '1.200 pessoas por ACS.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'sus-pnab-4'), 'D', '2.000 pessoas por ACS.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'sus-pnab-4') and label not in ('A', 'B', 'C', 'D');
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'atencao-basica-pnab'), 'sus-pnab-5', 'É atribuição do técnico e/ou auxiliar de enfermagem na Atenção Básica, segundo a PNAB:', 'Item 4.2.2, II da PNAB. Consulta clínica e indicação de internação são atribuições médicas.', 'facil', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'atencao-basica-pnab') and position = 0), 'atribuicoes-tecnico', 4, 'published', '2026-10-03'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'sus-pnab-5');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'sus-pnab-5'), 'A', 'realizar consultas clínicas e prescrever medicamentos.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'sus-pnab-5'), 'B', 'realizar procedimentos como curativos, administração de medicamentos, vacinas e coleta de material para exames, entre outras atividades delegadas pelo enfermeiro.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'sus-pnab-5'), 'C', 'indicar internação hospitalar.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'sus-pnab-5'), 'D', 'planejar e gerenciar sozinho as ações dos ACS.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'sus-pnab-5') and label not in ('A', 'B', 'C', 'D');
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'atencao-basica-pnab'), 'sus-pnab-6', 'Para a equipe de Saúde da Família, a PNAB 2017 estabelece carga horária:', 'Há obrigatoriedade de 40 horas semanais para todos os profissionais da eSF, que só podem estar vinculados a uma equipe.', 'media', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'atencao-basica-pnab') and position = 0), 'equipes', 5, 'published', '2026-10-03'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'sus-pnab-6');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'sus-pnab-6'), 'A', 'de 20 horas semanais para técnicos de enfermagem.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'sus-pnab-6'), 'B', 'de 40 horas semanais obrigatória para todos os profissionais membros da eSF.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'sus-pnab-6'), 'C', 'livre, definida por cada profissional.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'sus-pnab-6'), 'D', 'de 30 horas para médicos e 40 para os demais.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'sus-pnab-6') and label not in ('A', 'B', 'C', 'D');
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'atencao-basica-pnab'), 'sus-pnab-7', 'A diretriz da Atenção Básica que pressupõe a continuidade da relação de cuidado, com vínculo e responsabilização entre profissionais e usuários ao longo do tempo, é a:', 'É a definição de longitudinalidade do cuidado na PNAB.', 'media', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'atencao-basica-pnab') and position = 0), 'principios-e-diretrizes', 6, 'published', '2026-10-03'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'sus-pnab-7');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'sus-pnab-7'), 'A', 'territorialização.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'sus-pnab-7'), 'B', 'longitudinalidade do cuidado.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'sus-pnab-7'), 'C', 'regionalização.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'sus-pnab-7'), 'D', 'hierarquização.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'sus-pnab-7') and label not in ('A', 'B', 'C', 'D');
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'atencao-basica-pnab'), 'sus-pnab-8', 'Sobre os termos Atenção Básica e Atenção Primária à Saúde, a PNAB 2017:', 'O parágrafo único do art. 1º considera AB e APS termos equivalentes.', 'dificil', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'atencao-basica-pnab') and position = 0), 'visao-geral', 7, 'published', '2026-10-03'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'sus-pnab-8');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'sus-pnab-8'), 'A', 'os considera termos equivalentes, associando a ambos os mesmos princípios e diretrizes.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'sus-pnab-8'), 'B', 'reserva ''Atenção Primária'' para a rede privada.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'sus-pnab-8'), 'C', 'define a Atenção Primária como nível hospitalar.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'sus-pnab-8'), 'D', 'proíbe o uso do termo Atenção Primária.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'sus-pnab-8') and label not in ('A', 'B', 'C', 'D');

-- ═════ Fundamentos de Enfermagem
insert into public.categories (product_id, slug, title, short_title, description, tone, icon, position, status)
values ((select id from public.products where key = 'revisao-tecnico-enfermagem'), 'fundamentos', 'Fundamentos de Enfermagem', 'Fundamentos', 'Administração segura de medicamentos e prevenção de úlcera por pressão.', 'teal', '🩺', 1, 'published')
on conflict (product_id, slug) do update set title = excluded.title, short_title = excluded.short_title,
  description = excluded.description, tone = excluded.tone, icon = excluded.icon, position = excluded.position, status = excluded.status;

-- tema: Os 9 certos da administração de medicamentos
insert into public.topics (category_id, slug, title, description, summary, key_points, sections, outline, reading_minutes, position, status, last_reviewed_at, review_notes)
values ((select id from public.categories where product_id = (select id from public.products where key = 'revisao-tecnico-enfermagem') and slug = 'fundamentos'), 'nove-certos-administracao-de-medicamentos', 'Os 9 certos da administração de medicamentos', 'Cada um dos nove certos com o que conferir, por quê, e as regras de prescrição vaga, alta vigilância e dupla checagem.', 'O Protocolo de Segurança na Prescrição, Uso e Administração de Medicamentos (MS/Anvisa, 2013) lembra que a enfermagem seguia os cinco certos (paciente, medicamento, via, hora e dose), depois acrescidos de registro e razão, e adota os nove certos como itens de verificação. Os nove não garantem que erros não ocorrerão, mas previnem parte significativa deles. Paciente certo: perguntar o nome completo com pergunta aberta e usar no mínimo dois identificadores, conferindo pulseira, leito e prontuário. Medicamento certo: conferir com a prescrição e checar alergias, identificando o alérgico com pulseira e aviso no prontuário. Via certa: verificar se é tecnicamente recomendada, higienizar as mãos, conferir diluente, velocidade e compatibilidade. Hora certa: preparar para administrar no horário; antecipar ou atrasar só com consentimento do enfermeiro e do prescritor. Dose certa: atenção a zero, vírgula e ponto (doses 10 ou 100 vezes maiores), unidade do sistema métrico, conferência de gotejamento e bombas, dupla checagem nos medicamentos de alta vigilância; prescrições vagas como ''se necessário'', ''conforme ordem médica'' ou ''a critério médico'' não são administradas. Registro certo: horário e ocorrências como adiamento, cancelamento, desabastecimento, recusa e evento adverso. Orientação correta, forma certa e resposta certa completam a lista.', array['5 certos → 7 (registro e razão) → 9 certos (protocolo 2013).', 'Paciente certo: pergunta aberta pelo nome completo + no mínimo 2 identificadores.', 'Medicamento certo: conferir com a prescrição e checar alergias.', 'Hora certa: antecipar/atrasar só com o enfermeiro E o prescritor.', 'Dose certa: zero, vírgula e ponto; dupla checagem na alta vigilância.', 'Prescrição vaga (''se necessário'' sem condição, ''a critério médico'') não se administra.', 'Registro certo: horário + adiamentos, cancelamentos, desabastecimento, recusa, eventos adversos.', 'Forma certa e resposta certa: forma adequada à condição; observar e registrar o efeito.']::text[], '[{"id":"visao-geral","kind":"visao","title":"De 5 para 9 certos","lead":"O protocolo conta a história — e ela já caiu em prova.","source":0,"blocks":[{"type":"timeline","items":[{"when":"Tradicional","what":"5 certos: paciente, medicamento, via, hora e dose."},{"when":"Depois","what":"+2 = 7 certos: documentação (registro) certa e razão."},{"when":"Protocolo 2013","what":"9 certos: os 5 + registro, orientação, forma e resposta certas."}]},{"type":"callout","variant":"dica","title":"Não garante, mas previne","text":"O protocolo diz que os nove certos ==não garantem== que erros não ocorrerão, mas segui-los pode prevenir parte significativa desses eventos."}]},{"id":"antes-quem-e-o-que","kind":"etapas","title":"Quem e o quê: paciente, medicamento e forma","source":0,"blocks":[{"type":"steps","items":[{"title":"1 · Paciente certo","text":"Perguntar o ==nome completo== com pergunta aberta (\"Por favor, diga-me o seu nome completo?\") e usar ==no mínimo dois identificadores==. Conferir pulseira, leito e prontuário.","why":"Pergunta fechada (''é o João?'') pode ser confirmada por engano.","who":"tecnico"},{"title":"2 · Medicamento certo","text":"Conferir se o nome do medicamento em mãos é o prescrito. Conhecer o paciente e suas ==alergias==; alérgico identificado com pulseira e aviso no prontuário. Em associações, conhecer cada componente.","who":"tecnico"},{"title":"8 · Forma certa","text":"Forma farmacêutica e via adequadas à condição clínica. Ex.: medicamento triturado para sonda — a farmácia deve disponibilizar dose unitária ou manual de diluição.","who":"tecnico"}]},{"type":"callout","variant":"atencao","title":"Paciente com baixo nível de consciência","text":"Conferir o nome da prescrição com a pulseira e associar ==pelo menos mais dois identificadores== diferentes."}]},{"id":"durante-como-e-quando","kind":"etapas","title":"Como e quando: via, hora e dose","source":0,"blocks":[{"type":"cards","items":[{"title":"3 · Via certa","text":"Via prescrita e tecnicamente recomendada. Higienizar as mãos. Diluente (tipo e volume), velocidade de infusão e compatibilidade com seringas, sondas e equipos. Antissepsia na via parenteral.","icon":"💉","tone":"blue"},{"title":"4 · Hora certa","text":"Preparar para administrar no horário. ==Antecipar ou atrasar só com consentimento do enfermeiro e do prescritor.==","icon":"⏱️","tone":"teal"},{"title":"5 · Dose certa","text":"Atenção a ==zero, vírgula e ponto== (doses 10 ou 100 vezes maiores). Unidade imprecisa (colher, ampola) → pedir unidade métrica. Conferir gotejamento e bombas. ==Dupla checagem== na alta vigilância.","icon":"⚖️","tone":"amber"}]},{"type":"callout","variant":"lei","title":"Prescrição vaga não se administra","text":"\"Fazer se necessário\", \"conforme ordem médica\" ou \"a critério médico\": ==não administrar==; pedir complementação ao prescritor. Medicação ''se necessário'' precisa vir com dose, posologia e condição de uso."}]},{"id":"depois-registro-orientacao-resposta","kind":"tecnico","title":"Depois: registro, orientação e resposta","source":0,"blocks":[{"type":"cards","items":[{"title":"6 · Registro certo","text":"Registrar o horário da administração e checar a cada dose. Registrar ==adiamentos, cancelamentos, desabastecimento, recusa do paciente e eventos adversos==.","icon":"📝","tone":"green"},{"title":"7 · Orientação correta","text":"Esclarecer dúvidas com o prescritor antes. Orientar o paciente: nome do medicamento, indicação, efeitos esperados. Direito de conhecer aspecto (cor, formato) e frequência.","icon":"💬","tone":"violet"},{"title":"9 · Resposta certa","text":"Observar se o medicamento teve o ==efeito desejado==. Registrar e informar ao prescritor efeitos diferentes do esperado. Registrar sinais vitais e glicemia capilar quando pertinentes.","icon":"👁️","tone":"rose"}]}]},{"id":"alta-vigilancia","kind":"cuidados","title":"Alta vigilância e intervenções específicas","source":0,"blocks":[{"type":"checklist","items":["Dupla checagem ==por dois profissionais== dos cálculos de diluição e administração de medicamentos potencialmente perigosos","Remover do estoque das unidades os ==eletrólitos concentrados== (especialmente cloreto de potássio injetável) e bloqueadores neuromusculares","Manter na unidade apenas os medicamentos de alta vigilância absolutamente necessários"]}]},{"id":"numeros","kind":"numeros","title":"Números que caem","source":0,"blocks":[{"type":"numbers","items":[{"value":"9","label":"certos no protocolo de 2013"},{"value":"2","label":"identificadores, no mínimo"},{"value":"10× ou 100×","label":"erro de dose por zero, vírgula ou ponto"},{"value":"2","label":"profissionais na dupla checagem"},{"value":"5 → 7 → 9","label":"evolução dos certos"}]}]},{"id":"caso","kind":"caso","title":"Situação-problema","source":0,"blocks":[{"type":"case","title":"Plantão noturno","scenario":"Às 22 h, o técnico encontra na prescrição ''dipirona se necessário'' sem dose nem condição de uso. Em outro leito, a medicação das 24 h poderia ser dada às 22 h para ele adiantar o trabalho.","question":"Como agir em cada situação?","answer":"Não administrar a prescrição vaga e pedir complementação ao prescritor; não antecipar o horário sem o consentimento do enfermeiro e do prescritor.","reasoning":["Dose certa: medicação ''se necessário'' precisa de dose, posologia e condição de uso.","Prescrição vaga não deve ser administrada.","Hora certa: antecipar ou atrasar só com enfermeiro e prescritor."]}]},{"id":"como-a-banca-cobra","kind":"cobrado","title":"Como a banca cobra","source":0,"blocks":[{"type":"traps","items":[{"wrong":"Confirmar o paciente perguntando: ''O senhor é o João?''","right":"Pergunta ==aberta== pelo nome completo + no mínimo ==dois identificadores==.","why":"O paciente pode concordar por engano com a pergunta fechada."},{"wrong":"O técnico pode adiantar a dose em 1 hora para organizar a rotina.","right":"Antecipar/atrasar só com consentimento do ==enfermeiro e do prescritor==.","why":"Item ''hora certa''."},{"wrong":"Na alta vigilância, basta uma conferência cuidadosa.","right":"Exige ==dupla checagem== dos cálculos (por dois profissionais).","why":"Item 7.1.2 do protocolo."},{"wrong":"Prescrição ''a critério médico'' pode ser feita se o paciente pedir.","right":"Prescrição vaga ==não deve ser administrada==.","why":"Nota do item ''dose certa''."},{"wrong":"O número do leito é um bom identificador.","right":"Conferir ==nome== e outros identificadores na pulseira e no prontuário.","why":"O leito muda; o protocolo de identificação proíbe usá-lo como identificador."},{"wrong":"Registrar só os medicamentos que foram dados.","right":"Registrar também ==adiamentos, cancelamentos, desabastecimento, recusa== e eventos adversos.","why":"Item ''registro certo''."},{"wrong":"Resposta certa é a resposta do paciente à pergunta de identificação.","right":"Resposta certa = observar se o medicamento teve o ==efeito desejado==.","why":"É o 9º certo."}]},{"type":"callout","variant":"atencao","title":"Detalhe do texto","text":"A frase-resumo do protocolo cita ''ação certa''; o detalhamento item a item usa ''==orientação correta=='' (VII). Este app segue o detalhamento."}]},{"id":"conexoes","kind":"conexoes","title":"Conexões","blocks":[{"type":"links","items":[{"slug":"regra-de-tres-dose-e-diluicao","title":"Regra de três: quanto aspirar","why":"Calcular a dose certa."},{"slug":"codigo-de-etica-cofen-564","title":"Código de Ética (Resolução Cofen 564/2017)","why":"Proibido administrar sem conhecer indicação, ação, via e riscos."}]}]}]'::jsonb, array['De 5 para 9 certos', 'Quem e o quê: paciente, medicamento e forma', 'Como e quando: via, hora e dose', 'Depois: registro, orientação e resposta', 'Alta vigilância e intervenções específicas', 'Números que caem', 'Situação-problema', 'Como a banca cobra', 'Conexões']::text[], 6, 0, 'published', '2026-10-03'::date, 'Padrão v2: cada seção foi escrita a partir do texto original da fonte, baixado e lido em 2026-10-03 (conferência automatizada durante o desenvolvimento). Revisão por enfermeiro(a) obrigatória antes da venda. A frase-resumo do protocolo cita ''ação certa''; o detalhamento usa ''orientação correta'' (VII), que o app segue.')
on conflict (slug) do update set category_id = excluded.category_id, title = excluded.title, description = excluded.description,
  summary = excluded.summary, key_points = excluded.key_points, sections = excluded.sections, outline = excluded.outline,
  reading_minutes = excluded.reading_minutes, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at, review_notes = excluded.review_notes;
insert into public.topic_sources (topic_id, position, source_title, source_organization, source_url, source_accessed_at, locator)
values ((select id from public.topics where slug = 'nove-certos-administracao-de-medicamentos'), 0, 'Anexo 03: Protocolo de segurança na prescrição, uso e administração de medicamentos (2013)', 'Ministério da Saúde / Anvisa, com Fiocruz e Fhemig (cópia publicada pelo Proqualis/Fiocruz)', 'https://proqualis.fiocruz.br/sites/proqualis.fiocruz.br/files/000002490IQmwD8.pdf', '2026-10-03'::date, 'itens 7.1.1 e 7.1.2')
on conflict (topic_id, position) do update set source_title = excluded.source_title, source_organization = excluded.source_organization,
  source_url = excluded.source_url, source_accessed_at = excluded.source_accessed_at, locator = excluded.locator;
delete from public.topic_sources s where s.topic_id = (select id from public.topics where slug = 'nove-certos-administracao-de-medicamentos') and s.position >= 1
  and not exists (select 1 from public.questions x where x.source_id = s.id);
insert into public.visual_maps (topic_id, title, spec, status, last_reviewed_at)
values ((select id from public.topics where slug = 'nove-certos-administracao-de-medicamentos'), 'Os 9 certos', '{"layout":"flow","center":"Antes, durante e depois de administrar","blocks":[{"title":"Quem e o quê","tone":"teal","icon":"🪪","items":["1. Paciente certo — 2 identificadores","2. Medicamento certo — alergias","8. Forma certa"]},{"title":"Como e quando","tone":"blue","icon":"⏱️","items":["3. Via certa","4. Hora certa","5. Dose certa — dupla checagem na alta vigilância"]},{"title":"Depois","tone":"green","icon":"📝","items":["6. Registro certo","7. Orientação correta","9. Resposta certa — observar o efeito"]}],"footnote":"A numeração segue a ordem em que o protocolo detalha cada certo."}'::jsonb, 'published', '2026-10-03'::date)
on conflict (topic_id) do update set title = excluded.title, spec = excluded.spec, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'nove-certos-administracao-de-medicamentos'), 'fund-9certos-1', 'Pelo protocolo do Ministério da Saúde, para confirmar o ''paciente certo'' antes de administrar um medicamento, o profissional deve:', 'O protocolo pede pergunta aberta e no mínimo dois identificadores, conferindo pulseira, leito e prontuário.', 'facil', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'nove-certos-administracao-de-medicamentos') and position = 0), 'antes-quem-e-o-que', 0, 'published', '2026-10-03'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'fund-9certos-1');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'fund-9certos-1'), 'A', 'chamar o paciente pelo número do leito.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'fund-9certos-1'), 'B', 'perguntar o nome completo do paciente e usar no mínimo dois identificadores.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'fund-9certos-1'), 'C', 'conferir apenas a pulseira de identificação.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'fund-9certos-1'), 'D', 'perguntar ''O senhor é o João?'' e aguardar a confirmação.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'fund-9certos-1') and label not in ('A', 'B', 'C', 'D');
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'nove-certos-administracao-de-medicamentos'), 'fund-9certos-2', 'Segundo o protocolo de segurança na administração de medicamentos, a antecipação ou o atraso da administração em relação ao horário definido:', 'No item ''Hora certa'', antecipar ou atrasar só com o consentimento do enfermeiro e do prescritor.', 'facil', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'nove-certos-administracao-de-medicamentos') and position = 0), 'durante-como-e-quando', 1, 'published', '2026-10-03'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'fund-9certos-2');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'fund-9certos-2'), 'A', 'pode ser feito livremente, desde que dentro de duas horas.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'fund-9certos-2'), 'B', 'é proibido em qualquer situação.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'fund-9certos-2'), 'C', 'somente pode ser feito com o consentimento do enfermeiro e do prescritor.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'fund-9certos-2'), 'D', 'depende apenas da preferência do paciente.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'fund-9certos-2') and label not in ('A', 'B', 'C', 'D');
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'nove-certos-administracao-de-medicamentos'), 'fund-9certos-3', 'Segundo o protocolo, diante de uma prescrição com a orientação ''fazer se necessário'', sem condição de uso, o profissional deve:', 'Orientações vagas (''se necessário'', ''conforme ordem médica'', ''a critério médico'') exigem complementação e não devem ser administradas.', 'facil', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'nove-certos-administracao-de-medicamentos') and position = 0), 'durante-como-e-quando', 2, 'published', '2026-10-03'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'fund-9certos-3');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'fund-9certos-3'), 'A', 'administrar quando o paciente pedir.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'fund-9certos-3'), 'B', 'administrar no horário padrão da unidade.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'fund-9certos-3'), 'C', 'não administrar e solicitar complementação ao prescritor.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'fund-9certos-3'), 'D', 'administrar metade da dose como precaução.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'fund-9certos-3') and label not in ('A', 'B', 'C', 'D');
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'nove-certos-administracao-de-medicamentos'), 'fund-9certos-4', 'Para medicamentos potencialmente perigosos ou de alta vigilância, o protocolo recomenda:', 'Instituir dupla checagem por dois profissionais para os cálculos de diluição e administração de medicamentos de alta vigilância.', 'media', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'nove-certos-administracao-de-medicamentos') and position = 0), 'durante-como-e-quando', 3, 'published', '2026-10-03'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'fund-9certos-4');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'fund-9certos-4'), 'A', 'administrar sempre por via oral.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'fund-9certos-4'), 'B', 'dupla checagem dos cálculos por dois profissionais.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'fund-9certos-4'), 'C', 'dispensar o registro da administração.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'fund-9certos-4'), 'D', 'preparar com antecedência de 24 horas.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'fund-9certos-4') and label not in ('A', 'B', 'C', 'D');
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'nove-certos-administracao-de-medicamentos'), 'fund-9certos-5', 'No item ''dose certa'', o protocolo pede atenção redobrada a doses escritas com ''zero'', ''vírgula'' e ''ponto'' porque:', 'Esses elementos podem gerar doses 10 ou 100 vezes maiores; a dúvida deve ser esclarecida com o prescritor.', 'media', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'nove-certos-administracao-de-medicamentos') and position = 0), 'durante-como-e-quando', 4, 'published', '2026-10-03'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'fund-9certos-5');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'fund-9certos-5'), 'A', 'dificultam o registro eletrônico.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'fund-9certos-5'), 'B', 'podem redundar em doses 10 ou 100 vezes superiores à desejada.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'fund-9certos-5'), 'C', 'são proibidas em prescrições.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'fund-9certos-5'), 'D', 'indicam medicamentos de uso oral.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'fund-9certos-5') and label not in ('A', 'B', 'C', 'D');
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'nove-certos-administracao-de-medicamentos'), 'fund-9certos-6', 'O ''registro certo'' da administração de medicamentos inclui registrar:', 'Item VI do protocolo.', 'media', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'nove-certos-administracao-de-medicamentos') and position = 0), 'depois-registro-orientacao-resposta', 5, 'published', '2026-10-03'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'fund-9certos-6');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'fund-9certos-6'), 'A', 'apenas o nome do medicamento.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'fund-9certos-6'), 'B', 'o horário da administração e ocorrências como adiamentos, cancelamentos, desabastecimento, recusa e eventos adversos.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'fund-9certos-6'), 'C', 'somente as doses de alta vigilância.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'fund-9certos-6'), 'D', 'a opinião do técnico sobre a prescrição.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'fund-9certos-6') and label not in ('A', 'B', 'C', 'D');
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'nove-certos-administracao-de-medicamentos'), 'fund-9certos-7', 'No protocolo, ''resposta certa'' significa:', 'Item IX: observar o efeito, registrar e informar ao prescritor efeitos diferentes do esperado.', 'media', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'nove-certos-administracao-de-medicamentos') and position = 0), 'depois-registro-orientacao-resposta', 6, 'published', '2026-10-03'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'fund-9certos-7');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'fund-9certos-7'), 'A', 'o paciente responder corretamente seu nome.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'fund-9certos-7'), 'B', 'observar se o medicamento teve o efeito desejado e registrar efeitos diferentes do esperado.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'fund-9certos-7'), 'C', 'o médico responder às dúvidas da enfermagem.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'fund-9certos-7'), 'D', 'a farmácia responder ao pedido em até 1 hora.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'fund-9certos-7') and label not in ('A', 'B', 'C', 'D');
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'nove-certos-administracao-de-medicamentos'), 'fund-9certos-8', 'Entre as intervenções específicas do protocolo de medicamentos está:', 'Item 7.1.2: remover das unidades eletrólitos concentrados e bloqueadores neuromusculares; manter só o absolutamente necessário.', 'dificil', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'nove-certos-administracao-de-medicamentos') and position = 0), 'alta-vigilancia', 7, 'published', '2026-10-03'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'fund-9certos-8');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'fund-9certos-8'), 'A', 'manter estoque ampliado de cloreto de potássio injetável nas unidades.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'fund-9certos-8'), 'B', 'remover do estoque das unidades de internação os eletrólitos concentrados (especialmente cloreto de potássio injetável) e bloqueadores neuromusculares.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'fund-9certos-8'), 'C', 'abolir a dupla checagem para agilizar o cuidado.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'fund-9certos-8'), 'D', 'permitir prescrição verbal de rotina.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'fund-9certos-8') and label not in ('A', 'B', 'C', 'D');

-- tema: Prevenção de úlcera por pressão
insert into public.topics (category_id, slug, title, description, summary, key_points, sections, outline, reading_minutes, position, status, last_reviewed_at, review_notes)
values ((select id from public.categories where product_id = (select id from public.products where key = 'revisao-tecnico-enfermagem') and slug = 'fundamentos'), 'prevencao-de-ulcera-por-pressao', 'Prevenção de úlcera por pressão', 'Estágios, as seis etapas, escala de Braden com as medidas por faixa de risco, cuidados com a pele e posicionamento a 30°.', 'O Protocolo para Prevenção de Úlcera por Pressão (MS/Anvisa/Fiocruz, 2013) afirma que a maioria das UPP pode ser evitada identificando quem está em risco e aplicando a prevenção de forma confiável. O estadiamento descreve a profundidade da lesão: estágio I (eritema não branqueável em pele íntegra), II (perda parcial da espessura da pele), III (perda total da espessura da pele, sem exposição de osso, tendão ou músculo) e IV (exposição de osso, tendão ou músculo), além das inclassificáveis e da suspeita de lesão tissular profunda. São seis etapas essenciais: avaliação na admissão de todos os pacientes, reavaliação diária do risco, inspeção diária da pele, manejo da umidade, otimização da nutrição e hidratação e minimização da pressão. O risco é avaliado pela escala de Braden Q (crianças de 1 a 5 anos) e de Braden (maiores de 5 anos); quanto maior a pontuação, menor o risco, e a avaliação clínica do enfermeiro é soberana. As medidas crescem com o risco: baixo (15 a 18 pontos), moderado (13 e 14, com reposicionamento a 30°), alto (10 a 12) e muito alto (9 ou menos). Entre os cuidados: limpar a pele com água morna e sabão neutro, hidratar sem massagear proeminências ósseas ou áreas hiperemiadas, usar barreiras contra umidade, manter os calcâneos flutuantes, reposicionar a cada 2 horas em semi-Fowler a 30° e lateral a 30°, e evitar cabeceira acima de 30° — exceto na ventilação mecânica, para prevenir pneumonia.', array['Estágio I: eritema não branqueável (pele íntegra). IV: exposição de osso, tendão ou músculo.', '6 etapas: admissão, reavaliação diária, inspeção diária, umidade, nutrição/hidratação, pressão.', 'Braden Q: 1 a 5 anos. Braden: maiores de 5 anos. Mais pontos = menor risco.', 'Faixas: baixo 15–18 · moderado 13–14 · alto 10–12 · muito alto ≤ 9.', 'Avaliação clínica do enfermeiro é soberana, qualquer que seja o escore.', 'Não massagear proeminências ósseas nem áreas hiperemiadas.', 'Reposicionar a cada 2 h; semi-Fowler e lateral a 30°; calcâneos flutuantes.', 'Cabeceira até 30° (exceção: ventilação mecânica, para prevenir PAV).']::text[], '[{"id":"visao-geral","kind":"visao","title":"Evitável na maioria dos casos","source":0,"blocks":[{"type":"text","text":"O protocolo afirma que a ==maioria das UPP pode ser evitada==. O caminho é identificar quem está em risco e aplicar a prevenção ==todos os dias==. A prevenção de úlcera por pressão também é ação obrigatória do Plano de Segurança do Paciente (RDC 36)."},{"type":"cards","items":[{"title":"Pressão + cisalhamento","text":"Cisalhamento é a deformação que o corpo sofre sob forças cortantes — por isso a cabeceira alta e o arrastar do paciente machucam.","icon":"↔️","tone":"amber"},{"title":"Onde olhar","text":"Sacro, dorso, nádegas, calcanhares, tornozelos e ==áreas sob dispositivos==.","icon":"📍","tone":"rose"}]}]},{"id":"conceito-e-estagios","kind":"classificacao","title":"Estágios: a profundidade da lesão","source":0,"blocks":[{"type":"steps","items":[{"title":"Estágio I — eritema não branqueável","text":"Pele ==intacta==, rubor que não embranquece, geralmente sobre proeminência óssea. Difícil de ver em pele escura."},{"title":"Estágio II — perda parcial da espessura","text":"Ferida superficial com leito vermelho-rosa, sem esfacelo; pode ser flictena intacta ou rompida."},{"title":"Estágio III — perda total da espessura da pele","text":"Tecido subcutâneo pode estar visível; ==osso, tendão e músculo não== estão expostos."},{"title":"Estágio IV — perda total dos tecidos","text":"==Exposição de osso, tendão ou músculo==; frequentemente cavitada e fistulizada."}]},{"type":"cards","items":[{"title":"Inclassificável","text":"Profundidade bloqueada por tecido necrótico ou escara. Escara estável (seca, aderente, intacta) nos calcâneos ==não deve ser removida==.","icon":"❔","tone":"slate"},{"title":"Suspeita de lesão tissular profunda","text":"Área vermelho-escura ou púrpura em pele intacta, ou flictena com sangue.","icon":"🟣","tone":"violet"}]}]},{"id":"seis-etapas","kind":"etapas","title":"As 6 etapas essenciais da prevenção","source":0,"blocks":[{"type":"steps","items":[{"title":"Avaliar na admissão","text":"==Todos os pacientes==: risco e avaliação da pele.","who":"enfermeiro"},{"title":"Reavaliar o risco diariamente","text":"Todos os pacientes internados.","who":"enfermeiro"},{"title":"Inspecionar a pele diariamente","text":"Da cabeça aos pés, com atenção às proeminências e áreas sob dispositivos.","who":"equipe"},{"title":"Manejar a umidade","text":"Paciente ==seco== e pele ==hidratada==.","who":"tecnico"},{"title":"Otimizar nutrição e hidratação","who":"equipe"},{"title":"Minimizar a pressão","text":"Reposicionar ==a cada 2 horas== ou usar superfícies de redistribuição de pressão.","who":"tecnico"}]}]},{"id":"escala-de-braden","kind":"classificacao","title":"Escala de Braden: risco por pontuação","lead":"Quanto MAIOR a pontuação, MENOR o risco.","source":0,"blocks":[{"type":"compare","columns":["Pontos (Braden)","Medidas preventivas"],"rows":[{"label":"Risco baixo","cells":["15 a 18","Cronograma de mudança de decúbito; otimizar mobilização; proteger calcanhar; manejo de umidade, nutrição, fricção e cisalhamento; superfícies de redistribuição"]},{"label":"Risco moderado","cells":["13 a 14","O do risco baixo + mudança de decúbito com posicionamento a ==30°=="]},{"label":"Risco alto","cells":["10 a 12","O do moderado + mudança de decúbito frequente + coxins de espuma para lateralizar a 30°"]},{"label":"Risco muito alto","cells":["9 ou menos","O do alto + superfícies de apoio dinâmico (se possível) + manejo da dor"]}]},{"type":"callout","variant":"lei","title":"A avaliação clínica é soberana","text":"A escala é um parâmetro associado à avaliação clínica do enfermeiro: ==qualquer que seja o escore==, a avaliação clínica prevalece diante de fatores de risco. Braden Q: ==1 a 5 anos==; Braden: ==maiores de 5 anos==."}]},{"id":"cuidados-com-a-pele-e-posicionamento","kind":"tecnico","title":"Pele, umidade e posicionamento: o dia a dia do técnico","source":0,"blocks":[{"type":"dodont","do":["Limpar a pele sempre que suja, com água morna e sabão neutro","Hidratante na pele seca, pelo menos 1 vez ao dia, com movimentos suaves e circulares","Produtos de barreira contra umidade (incontinência, suor, drenos, exsudato)","Oferecer comadre ou papagaio nos horários de mudança de decúbito","Calcâneos flutuantes: travesseiro sob as pernas, joelho levemente fletido","Semi-Fowler a 30° e lateral inclinada a 30°","Usar forro móvel para mover o paciente (evita fricção e cisalhamento)"],"dont":["Massagear proeminências ósseas ou áreas hiperemiadas","Fowler acima de 30°, lateral a 90° ou posição semideitada","Elevar a cabeceira acima de 30° por tempo prolongado (o paciente escorrega)","Posicionar sobre sondas, drenos ou proeminência com hiperemia não reativa","Deixar o paciente muito tempo sentado sem alívio de pressão"]},{"type":"callout","variant":"atencao","title":"Exceção do próprio protocolo","text":"Em ventilação mecânica e traqueostomizados com ventilação não invasiva, recomenda-se decúbito ==acima de 30°== para prevenir pneumonia associada à ventilação (PAV)."}]},{"id":"numeros","kind":"numeros","title":"Números que caem","source":0,"blocks":[{"type":"numbers","items":[{"value":"6","label":"etapas essenciais"},{"value":"2 h","label":"intervalo de reposicionamento"},{"value":"30°","label":"semi-Fowler, lateral e limite de cabeceira"},{"value":"15–18","label":"Braden: risco baixo"},{"value":"≤ 9","label":"Braden: risco muito alto"},{"value":"1–5 anos","label":"faixa da Braden Q"}]}]},{"id":"caso","kind":"caso","title":"Situação-problema","source":0,"blocks":[{"type":"case","title":"Rubor no sacro","scenario":"Paciente acamado, Braden 11, apresenta área avermelhada no sacro que não embranquece à pressão, com pele íntegra. A acompanhante pergunta se pode massagear para ''ativar a circulação''.","question":"Qual o estágio e quais condutas de prevenção?","answer":"Estágio I. Não massagear; reposicionar com frequência a 30°, com coxins; aliviar a pressão do sacro; manejar umidade; comunicar o enfermeiro.","reasoning":["Eritema não branqueável em pele íntegra = estágio I.","Braden 11 = risco alto: mudança de decúbito frequente e coxins para lateralizar a 30°.","O protocolo contraindica massagem em áreas hiperemiadas.","Evitar posicionar sobre área com hiperemia não reativa."]}]},{"id":"como-a-banca-cobra","kind":"cobrado","title":"Como a banca cobra","source":0,"blocks":[{"type":"traps","items":[{"wrong":"Na Braden, quanto maior a pontuação, maior o risco.","right":"Relação ==inversa==: mais pontos, menor risco.","why":"O protocolo diz que a classificação é inversamente proporcional à pontuação."},{"wrong":"Braden Q é usada em idosos.","right":"Braden Q: crianças de ==1 a 5 anos==.","why":"Braden é para maiores de 5 anos."},{"wrong":"Massagem nas proeminências ósseas previne UPP.","right":"A massagem ==não é recomendada== como estratégia de prevenção.","why":"Contraindicada em inflamação aguda e pele frágil."},{"wrong":"Reposicionar a cada 4 horas é o recomendado.","right":"A cada ==2 horas== (ou superfícies de redistribuição).","why":"Duas horas é o tempo máximo recomendado na mesma posição."},{"wrong":"No estágio III há exposição óssea.","right":"Exposição de osso, tendão ou músculo é ==estágio IV==.","why":"No III, o subcutâneo pode aparecer, mas não osso."},{"wrong":"A escala substitui a avaliação do enfermeiro.","right":"A avaliação clínica é ==soberana==.","why":"Qualquer que seja o escore."},{"wrong":"Escara seca e aderente no calcâneo deve ser removida.","right":"Escara estável no calcâneo ==não deve ser removida==.","why":"Funciona como cobertura biológica natural."}]}]},{"id":"conexoes","kind":"conexoes","title":"Conexões","blocks":[{"type":"links","items":[{"slug":"nucleo-de-seguranca-do-paciente","title":"Segurança do paciente: PNSP e RDC 36","why":"Prevenção de úlcera por pressão está no PSP."}]}]}]'::jsonb, array['Evitável na maioria dos casos', 'Estágios: a profundidade da lesão', 'As 6 etapas essenciais da prevenção', 'Escala de Braden: risco por pontuação', 'Pele, umidade e posicionamento: o dia a dia do técnico', 'Números que caem', 'Situação-problema', 'Como a banca cobra', 'Conexões']::text[], 6, 1, 'published', '2026-10-03'::date, 'Padrão v2: cada seção foi escrita a partir do texto original da fonte, baixado e lido em 2026-10-03 (conferência automatizada durante o desenvolvimento). Revisão por enfermeiro(a) obrigatória antes da venda. O protocolo de 2013 usa ''úlcera por pressão (UPP)''; a terminologia atual é ''lesão por pressão'' — mencionar na revisão humana.')
on conflict (slug) do update set category_id = excluded.category_id, title = excluded.title, description = excluded.description,
  summary = excluded.summary, key_points = excluded.key_points, sections = excluded.sections, outline = excluded.outline,
  reading_minutes = excluded.reading_minutes, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at, review_notes = excluded.review_notes;
insert into public.topic_sources (topic_id, position, source_title, source_organization, source_url, source_accessed_at, locator)
values ((select id from public.topics where slug = 'prevencao-de-ulcera-por-pressao'), 0, 'Anexo 02: Protocolo para prevenção de úlcera por pressão (2013)', 'Ministério da Saúde / Anvisa / Fiocruz (cópia publicada pelo Proqualis/Fiocruz)', 'https://proqualis.fiocruz.br/sites/proqualis.fiocruz.br/files/000002347fQHsQg.pdf', '2026-10-03'::date, 'itens 4, 5, 7.1, 7.3 e 7.4')
on conflict (topic_id, position) do update set source_title = excluded.source_title, source_organization = excluded.source_organization,
  source_url = excluded.source_url, source_accessed_at = excluded.source_accessed_at, locator = excluded.locator;
delete from public.topic_sources s where s.topic_id = (select id from public.topics where slug = 'prevencao-de-ulcera-por-pressao') and s.position >= 1
  and not exists (select 1 from public.questions x where x.source_id = s.id);
insert into public.visual_maps (topic_id, title, spec, status, last_reviewed_at)
values ((select id from public.topics where slug = 'prevencao-de-ulcera-por-pressao'), 'Prevenção de UPP — 6 elementos', '{"layout":"flow","center":"Identificar o risco → prevenir sempre","blocks":[{"title":"Avaliar","tone":"teal","icon":"🔎","items":["Na admissão de todos","Reavaliar o risco todo dia","Braden (>5 anos) · Braden Q (1–5 anos)"]},{"title":"Inspecionar","tone":"amber","icon":"👀","items":["Pele da cabeça aos pés, todo dia","Sacro, nádegas, calcanhares, tornozelos","Áreas sob dispositivos"]},{"title":"Proteger","tone":"green","icon":"🛡️","items":["Pele seca e hidratada","Nutrição e hidratação","Reposicionar a cada 2 h"]}],"footnote":"Braden: quanto MAIOR a pontuação, MENOR o risco."}'::jsonb, 'published', '2026-10-03'::date)
on conflict (topic_id) do update set title = excluded.title, spec = excluded.spec, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'prevencao-de-ulcera-por-pressao'), 'fund-upp-1', 'De acordo com o protocolo de prevenção de úlcera por pressão, a escala recomendada para avaliar o risco em crianças de 1 a 5 anos é:', 'Braden Q para crianças de 1 a 5 anos; Braden para maiores de 5 anos.', 'facil', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'prevencao-de-ulcera-por-pressao') and position = 0), 'escala-de-braden', 0, 'published', '2026-10-03'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'fund-upp-1');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'fund-upp-1'), 'A', 'Escala de Glasgow.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'fund-upp-1'), 'B', 'Escala de Braden Q.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'fund-upp-1'), 'C', 'Escala de Morse.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'fund-upp-1'), 'D', 'Escala de Apgar.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'fund-upp-1') and label not in ('A', 'B', 'C', 'D');
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'prevencao-de-ulcera-por-pressao'), 'fund-upp-2', 'Sobre a escala de Braden, conforme o protocolo, é correto afirmar:', 'A classificação é inversamente proporcional à pontuação e a avaliação clínica do enfermeiro é soberana.', 'media', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'prevencao-de-ulcera-por-pressao') and position = 0), 'escala-de-braden', 1, 'published', '2026-10-03'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'fund-upp-2');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'fund-upp-2'), 'A', 'Quanto maior a pontuação, maior o risco de úlcera por pressão.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'fund-upp-2'), 'B', 'A classificação do risco é inversamente proporcional à pontuação: mais pontos, menor risco.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'fund-upp-2'), 'C', 'Substitui a avaliação clínica do enfermeiro.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'fund-upp-2'), 'D', 'Só deve ser aplicada após a alta hospitalar.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'fund-upp-2') and label not in ('A', 'B', 'C', 'D');
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'prevencao-de-ulcera-por-pressao'), 'fund-upp-3', 'Conforme o protocolo, durante a hidratação da pele do paciente acamado, deve-se:', 'Não massagear proeminências ósseas ou áreas hiperemiadas; massagem não é estratégia de prevenção.', 'media', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'prevencao-de-ulcera-por-pressao') and position = 0), 'cuidados-com-a-pele-e-posicionamento', 2, 'published', '2026-10-03'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'fund-upp-3');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'fund-upp-3'), 'A', 'massagear vigorosamente as proeminências ósseas para ativar a circulação.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'fund-upp-3'), 'B', 'evitar massagear proeminências ósseas e áreas hiperemiadas, aplicando o hidratante com movimentos suaves e circulares.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'fund-upp-3'), 'C', 'aplicar hidratante apenas nas áreas com hiperemia.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'fund-upp-3'), 'D', 'substituir o hidratante por talco nas áreas de pressão.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'fund-upp-3') and label not in ('A', 'B', 'C', 'D');
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'prevencao-de-ulcera-por-pressao'), 'fund-upp-4', 'A úlcera por pressão com perda total da espessura dos tecidos e exposição de osso, tendão ou músculo é classificada como:', 'Estágio IV: exposição de osso, tendão ou músculo. No III, a perda é total da pele, sem exposição dessas estruturas.', 'media', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'prevencao-de-ulcera-por-pressao') and position = 0), 'conceito-e-estagios', 3, 'published', '2026-10-03'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'fund-upp-4');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'fund-upp-4'), 'A', 'estágio I.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'fund-upp-4'), 'B', 'estágio II.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'fund-upp-4'), 'C', 'estágio III.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'fund-upp-4'), 'D', 'estágio IV.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'fund-upp-4') and label not in ('A', 'B', 'C', 'D');
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'prevencao-de-ulcera-por-pressao'), 'fund-upp-5', 'Segundo o protocolo, para minimizar a pressão, recomenda-se reposicionar o paciente:', 'Reposicionar a cada 2 horas ou utilizar superfícies de redistribuição; duas horas é o máximo recomendado na mesma posição.', 'facil', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'prevencao-de-ulcera-por-pressao') and position = 0), 'seis-etapas', 4, 'published', '2026-10-03'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'fund-upp-5');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'fund-upp-5'), 'A', 'a cada 30 minutos.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'fund-upp-5'), 'B', 'a cada 2 horas, ou usar superfícies de redistribuição de pressão.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'fund-upp-5'), 'C', 'a cada 6 horas.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'fund-upp-5'), 'D', 'apenas uma vez por plantão.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'fund-upp-5') and label not in ('A', 'B', 'C', 'D');
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'prevencao-de-ulcera-por-pressao'), 'fund-upp-6', 'Pelo protocolo, um paciente com escore de 13 a 14 na escala de Braden tem risco:', 'Baixo: 15–18; moderado: 13–14; alto: 10–12; muito alto: 9 ou menos.', 'dificil', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'prevencao-de-ulcera-por-pressao') and position = 0), 'escala-de-braden', 5, 'published', '2026-10-03'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'fund-upp-6');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'fund-upp-6'), 'A', 'baixo.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'fund-upp-6'), 'B', 'moderado.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'fund-upp-6'), 'C', 'alto.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'fund-upp-6'), 'D', 'muito alto.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'fund-upp-6') and label not in ('A', 'B', 'C', 'D');
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'prevencao-de-ulcera-por-pressao'), 'fund-upp-7', 'Em relação à elevação da cabeceira para prevenção de úlcera por pressão, o protocolo orienta:', 'Elevar no máximo 30° para evitar fricção e cisalhamento; em ventilação mecânica recomenda-se acima de 30° para prevenir PAV.', 'media', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'prevencao-de-ulcera-por-pressao') and position = 0), 'cuidados-com-a-pele-e-posicionamento', 6, 'published', '2026-10-03'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'fund-upp-7');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'fund-upp-7'), 'A', 'manter a cabeceira a 90° para facilitar a respiração.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'fund-upp-7'), 'B', 'elevar no máximo 30°, limitando o tempo de cabeceira elevada, exceto em pacientes em ventilação mecânica.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'fund-upp-7'), 'C', 'manter sempre a 45°.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'fund-upp-7'), 'D', 'não há recomendação sobre a cabeceira.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'fund-upp-7') and label not in ('A', 'B', 'C', 'D');
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'prevencao-de-ulcera-por-pressao'), 'fund-upp-8', 'Pele intacta com rubor não branqueável sobre proeminência óssea corresponde ao:', 'Estágio I: eritema não branqueável em pele intacta.', 'media', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'prevencao-de-ulcera-por-pressao') and position = 0), 'conceito-e-estagios', 7, 'published', '2026-10-03'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'fund-upp-8');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'fund-upp-8'), 'A', 'estágio I.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'fund-upp-8'), 'B', 'estágio II.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'fund-upp-8'), 'C', 'estágio III.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'fund-upp-8'), 'D', 'suspeita de lesão em tecidos profundos.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'fund-upp-8') and label not in ('A', 'B', 'C', 'D');

-- ═════ Biossegurança e Segurança do Paciente
insert into public.categories (product_id, slug, title, short_title, description, tone, icon, position, status)
values ((select id from public.products where key = 'revisao-tecnico-enfermagem'), 'biosseguranca', 'Biossegurança e Segurança do Paciente', 'Biossegurança', 'Higiene das mãos, precauções, EPI, NR 32, acidentes, resíduos, esterilização e segurança do paciente.', 'green', '🧼', 2, 'published')
on conflict (product_id, slug) do update set title = excluded.title, short_title = excluded.short_title,
  description = excluded.description, tone = excluded.tone, icon = excluded.icon, position = excluded.position, status = excluded.status;

-- tema: Higiene das mãos: os 5 momentos
insert into public.topics (category_id, slug, title, description, summary, key_points, sections, outline, reading_minutes, position, status, last_reviewed_at, review_notes)
values ((select id from public.categories where product_id = (select id from public.products where key = 'revisao-tecnico-enfermagem') and slug = 'biosseguranca'), 'higiene-das-maos-cinco-momentos', 'Higiene das mãos: os 5 momentos', 'Quando higienizar, com qual produto, por quanto tempo e com qual técnica — do jeito que o protocolo e a banca cobram.', 'O Protocolo para a Prática de Higiene das Mãos em Serviços de Saúde (MS/Anvisa/Fiocruz, 2013) integra o Programa Nacional de Segurança do Paciente e existe para prevenir e controlar as infecções relacionadas à assistência à saúde (IRAS). ''Higiene das mãos'' é termo geral: engloba a higiene simples (água e sabonete líquido comum), a higiene antisséptica (água e sabonete com antisséptico), a fricção antisséptica com preparação alcoólica e a antissepsia cirúrgica (fora do protocolo). A higiene deve acontecer no ponto de assistência — onde estão o paciente, o profissional e a assistência — com o produto ao alcance das mãos. Os cinco momentos são: antes de tocar o paciente, antes de procedimento limpo/asséptico, após risco de exposição a fluidos corporais, após tocar o paciente e após tocar superfícies próximas ao paciente. A preparação alcoólica é o meio preferido na rotina quando as mãos não estão visivelmente sujas, com fricção de 20 a 30 segundos (gel/espuma com concentração final mínima de 70% ou líquida entre 60% e 80%). Com as mãos visivelmente sujas, após o uso do banheiro ou diante de suspeita de patógenos formadores de esporos (como surtos de C. difficile), usa-se água e sabonete líquido, por 40 a 60 segundos. O uso de luvas não altera nem substitui a higiene das mãos.', array['Higiene das mãos é termo geral: simples, antisséptica, fricção com álcool e antissepsia cirúrgica.', 'Ponto de assistência = paciente + profissional + assistência; produto ao alcance, sem sair do ambiente do paciente.', '5 momentos: 2 ANTES (tocar o paciente; procedimento limpo/asséptico) e 3 APÓS (fluidos; tocar o paciente; superfícies próximas).', 'Preparação alcoólica é o meio preferido na rotina, se as mãos não estiverem visivelmente sujas: 20 a 30 s.', 'Água e sabonete: mãos visivelmente sujas, após o banheiro e suspeita de esporos (C. difficile): 40 a 60 s.', 'Álcool: gel/espuma ≥ 70% ou líquido entre 60% e 80%.', 'Higienizar após remover luvas e ao passar de um sítio contaminado para outro no mesmo paciente.', 'Luva não altera nem substitui a higiene das mãos.', 'Não usar sabonete e álcool ao mesmo tempo; não usar água quente; não calçar luvas com as mãos molhadas.']::text[], '[{"id":"visao-geral","kind":"visao","title":"Por que este tema abre Biossegurança","lead":"É o protocolo mais simples — e o que mais derruba candidato por detalhe de tempo, produto e momento.","source":0,"blocks":[{"type":"text","text":"O protocolo faz parte do **Programa Nacional de Segurança do Paciente** e tem uma finalidade só: ==prevenir e controlar as IRAS==, protegendo paciente e profissional. As mãos são o principal veículo de transmissão cruzada no cuidado."},{"type":"cards","items":[{"title":"Onde","text":"No ==ponto de assistência==, exatamente onde o cuidado acontece.","icon":"📍","tone":"blue"},{"title":"Quando","text":"Nos ==5 momentos== — dois antes, três depois.","icon":"⏱️","tone":"teal"},{"title":"Com o quê","text":"Álcool na rotina; água e sabonete quando há sujidade visível, banheiro ou esporos.","icon":"🧴","tone":"amber"},{"title":"Como","text":"Técnica que alcança ==todas as superfícies== das mãos, pelo tempo certo.","icon":"👐","tone":"green"}]}]},{"id":"definicoes","kind":"conceito","title":"As definições que a banca usa","source":0,"blocks":[{"type":"definition","term":"Higiene das mãos","text":"Termo ==geral== para qualquer ação de limpeza das mãos para prevenir a transmissão de micro-organismos e evitar que pacientes e profissionais adquiram IRAS.","note":"Engloba higiene simples, higiene antisséptica, fricção antisséptica e antissepsia cirúrgica (esta última não é tratada no protocolo)."},{"type":"definition","term":"Ponto de assistência","text":"Local onde ==três elementos== estão presentes: o ==paciente==, o ==profissional de saúde== e a ==assistência== ou tratamento envolvendo contato com o paciente ou suas imediações.","note":"O produto deve estar ao alcance das mãos, sem o profissional precisar sair do ambiente do paciente (frasco de bolso, dispensador na parede, frasco na cama ou no carrinho)."},{"type":"compare","columns":["Higiene simples","Higiene antisséptica","Fricção antisséptica"],"rows":[{"label":"O que é","cells":["Água + sabonete ==comum== líquido","Água + sabonete ==associado a antisséptico==","Preparação ==alcoólica==, sem enxágue nem papel-toalha"]},{"label":"Remove sujidade?","cells":["Sim","Sim","==Não== — só reduz a carga microbiana"]}]}]},{"id":"os-cinco-momentos","kind":"etapas","title":"Os 5 momentos, com o porquê de cada um","lead":"Dois ANTES protegem o paciente. Três DEPOIS protegem você e o ambiente.","source":0,"blocks":[{"type":"steps","items":[{"title":"1 · Antes de tocar o paciente","text":"Antes do contato direto (aferir sinais vitais, mobilizar, examinar).","why":"Impede que micro-organismos trazidos nas suas mãos cheguem ao paciente.","who":"equipe"},{"title":"2 · Antes de procedimento limpo/asséptico","text":"Ex.: antes de manusear dispositivo invasivo — ==com ou sem luvas==.","why":"É o momento em que o micro-organismo pode entrar no corpo do paciente. A luva não dispensa a higiene.","who":"equipe"},{"title":"3 · Após risco de exposição a fluidos corporais","text":"Após contato com fluidos, excreções, mucosas, pele não íntegra ou curativo — e ==após remover luvas==.","why":"Protege o profissional e evita levar o fluido para outra superfície.","who":"equipe"},{"title":"4 · Após tocar o paciente","text":"Ao encerrar o contato, mesmo sem sujidade visível.","why":"A pele íntegra do paciente também coloniza as mãos.","who":"equipe"},{"title":"5 · Após tocar superfícies próximas ao paciente","text":"Grade da cama, mesa, bomba de infusão, monitor — ==mesmo sem ter tocado o paciente==.","why":"O ambiente do paciente fica contaminado pelos micro-organismos dele.","who":"equipe"}]},{"type":"callout","variant":"lei","title":"Indicações que completam os momentos","text":"Higienizar também ao ==passar de um sítio contaminado para outro sítio do corpo do mesmo paciente== e antes de manusear medicação ou preparar alimentos."}]},{"id":"qual-produto","kind":"classificacao","title":"Álcool ou água e sabonete?","lead":"A regra geral é álcool. As exceções são exatamente o que cai.","source":0,"blocks":[{"type":"compare","columns":["Preparação alcoólica","Água e sabonete líquido"],"rows":[{"label":"Quando","cells":["==Meio preferido na rotina==, se as mãos ==não== estiverem visivelmente sujas","Mãos ==visivelmente sujas== ou com sangue/fluidos; ==após o banheiro==; suspeita de ==esporos== (surto de C. difficile)"]},{"label":"Duração","cells":["==20 a 30 s==","==40 a 60 s== (simples ou antisséptica)"]},{"label":"Detalhe","cells":["Friccionar até evaporar por completo","Secar bem; fechar a torneira com papel-toalha se não for automática"]}]},{"type":"callout","variant":"atencao","title":"Sem álcool disponível?","text":"Se não houver preparação alcoólica, higienize com água e sabonete líquido. E ==nunca use os dois ao mesmo tempo==."}]},{"id":"tecnica","kind":"etapas","title":"Técnica: o objetivo é alcançar todas as superfícies","lead":"Sequência das figuras do protocolo (OMS, 2006). Na água e sabonete, inclua os punhos, enxágue e seque.","source":0,"blocks":[{"type":"steps","items":[{"title":"Produto na palma","text":"Quantidade suficiente para cobrir todas as superfícies das mãos."},{"title":"Palma com palma"},{"title":"Palma sobre o dorso, dedos entrelaçados","text":"Uma mão e depois a outra."},{"title":"Palma com palma, dedos entrelaçados","text":"Alcança os espaços interdigitais."},{"title":"Dorso dos dedos contra a palma oposta","text":"Dedos encaixados, movimento de vaivém."},{"title":"Polegar","text":"Fricção circular de cada polegar com a palma oposta."},{"title":"Polpas digitais e unhas","text":"Movimento circular contra a palma oposta."},{"title":"Finalizar","text":"Álcool: friccionar ==até secar==. Água e sabonete: punhos, enxágue e secagem com papel-toalha."}]}]},{"id":"luvas-e-pele","kind":"tecnico","title":"Luvas e cuidado com a pele: a parte do dia a dia","source":0,"blocks":[{"type":"callout","variant":"atencao","title":"Regra de ouro","text":"O uso de luvas ==não altera nem substitui== a higiene das mãos."},{"type":"dodont","do":["Usar luvas só quando indicado: sangue, fluidos, mucosas, pele não íntegra, precaução de contato","Trocar de luvas entre pacientes e ao passar de sítio contaminado para limpo","Friccionar o álcool até evaporar por completo","Secar bem as mãos após água e sabonete","Manter unhas naturais, limpas e curtas","Usar creme protetor de uso individual, compatível com os produtos"],"dont":["Tocar telefone, maçaneta ou porta de luvas","Usar unhas postiças no contato direto com pacientes","Usar sabonete e álcool ao mesmo tempo","Lavar as mãos com água quente","Calçar luvas com as mãos molhadas (irrita a pele)","Higienizar além das indicações (agride a pele sem ganho)"]}]},{"id":"numeros","kind":"numeros","title":"Números que caem","source":0,"blocks":[{"type":"numbers","items":[{"value":"5","label":"momentos","note":"2 antes + 3 após"},{"value":"20–30 s","label":"fricção com preparação alcoólica"},{"value":"40–60 s","label":"água e sabonete (simples ou antisséptica)"},{"value":"≥ 70%","label":"álcool em gel/espuma","note":"concentração final mínima"},{"value":"60–80%","label":"álcool na forma líquida"},{"value":"3","label":"elementos do ponto de assistência","note":"paciente, profissional, assistência"},{"value":"1.000","label":"pacientes-dia","note":"indicador obrigatório: consumo de preparação alcoólica por 1.000 pacientes-dia"}]}]},{"id":"caso","kind":"caso","title":"Situação-problema","source":0,"blocks":[{"type":"case","title":"Glicemia capilar no leito 4","scenario":"O técnico calça luvas, faz a glicemia capilar de um paciente, descarta a lanceta e retira as luvas. As mãos não estão visivelmente sujas. Ele vai em seguida preparar a medicação do paciente do leito 5.","question":"Qual momento de higiene acabou de acontecer e qual produto usar?","answer":"Momento 3 (após risco de exposição a fluido corporal, que inclui a retirada das luvas), com preparação alcoólica por 20 a 30 segundos.","reasoning":["Houve contato com sangue (fluido corporal) → momento 3, mesmo com luvas.","O protocolo manda higienizar após remover luvas.","Sem sujidade visível → o meio preferido é a preparação alcoólica.","Antes de manusear a medicação do leito 5 há nova indicação de higiene."]}]},{"id":"como-a-banca-cobra","kind":"cobrado","title":"Como a banca cobra","source":0,"blocks":[{"type":"traps","items":[{"wrong":"Fricção com álcool: 40 a 60 segundos.","right":"Álcool: ==20 a 30 s==.","why":"40 a 60 s é o tempo da água e sabonete. A banca troca os dois números."},{"wrong":"Se usei luvas, não preciso higienizar depois.","right":"Higienizar ==após remover as luvas==.","why":"A luva tem microporos e pode contaminar as mãos na retirada; por isso a remoção é uma das indicações."},{"wrong":"Mão visivelmente suja pode ser higienizada só com álcool.","right":"Visivelmente suja → ==água e sabonete líquido==.","why":"O álcool não remove sujidade; ele só reduz a carga microbiana."},{"wrong":"Tocar só a grade da cama não exige higiene.","right":"Momento 5: ==após tocar superfícies próximas== ao paciente.","why":"O ambiente do paciente está colonizado pelos micro-organismos dele."},{"wrong":"Em surto de C. difficile, o álcool é a melhor opção.","right":"Suspeita de esporos → é ==preferível água e sabonete==.","why":"É uma das exceções expressas do protocolo à preferência pelo álcool."},{"wrong":"Antes de procedimento asséptico com luva estéril, a higiene é dispensável.","right":"Higienizar ==independentemente do uso de luvas==.","why":"O texto do momento 2 diz literalmente ''independentemente do uso ou não de luvas''."},{"wrong":"Usar álcool logo após lavar com sabonete potencializa a ação.","right":"Sabonete e álcool ==não devem ser usados ao mesmo tempo==.","why":"O protocolo lista o uso simultâneo entre os comportamentos a evitar."}]}]},{"id":"conexoes","kind":"conexoes","title":"Conexões","blocks":[{"type":"links","items":[{"slug":"precaucoes-padrao-e-especificas","title":"Precauções padrão e específicas","why":"Higiene das mãos é o primeiro item de toda precaução."},{"slug":"epi-paramentacao-e-desparamentacao","title":"EPI: paramentação e desparamentação","why":"Onde entra a higiene entre a retirada de cada EPI."},{"slug":"nucleo-de-seguranca-do-paciente","title":"Segurança do paciente: PNSP e RDC 36","why":"Higiene das mãos é ação obrigatória do Plano de Segurança do Paciente."},{"slug":"nove-certos-administracao-de-medicamentos","title":"Os 9 certos da administração de medicamentos","why":"A via certa começa com higienizar as mãos antes do preparo."}]}]}]'::jsonb, array['Por que este tema abre Biossegurança', 'As definições que a banca usa', 'Os 5 momentos, com o porquê de cada um', 'Álcool ou água e sabonete?', 'Técnica: o objetivo é alcançar todas as superfícies', 'Luvas e cuidado com a pele: a parte do dia a dia', 'Números que caem', 'Situação-problema', 'Como a banca cobra', 'Conexões']::text[], 8, 0, 'published', '2026-10-03'::date, 'Padrão v2: cada seção foi escrita a partir do texto original da fonte, baixado e lido em 2026-10-03 (conferência automatizada durante o desenvolvimento). Revisão por enfermeiro(a) obrigatória antes da venda.')
on conflict (slug) do update set category_id = excluded.category_id, title = excluded.title, description = excluded.description,
  summary = excluded.summary, key_points = excluded.key_points, sections = excluded.sections, outline = excluded.outline,
  reading_minutes = excluded.reading_minutes, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at, review_notes = excluded.review_notes;
insert into public.topic_sources (topic_id, position, source_title, source_organization, source_url, source_accessed_at, locator)
values ((select id from public.topics where slug = 'higiene-das-maos-cinco-momentos'), 0, 'Anexo 01: Protocolo para a prática de higiene das mãos em serviços de saúde (2013)', 'Ministério da Saúde / Anvisa / Fiocruz (cópia publicada pelo Proqualis/Fiocruz)', 'https://proqualis.fiocruz.br/sites/proqualis.fiocruz.br/files/000002347fQHsQg.pdf', '2026-10-02'::date, 'itens 1 a 5, 7 e 8')
on conflict (topic_id, position) do update set source_title = excluded.source_title, source_organization = excluded.source_organization,
  source_url = excluded.source_url, source_accessed_at = excluded.source_accessed_at, locator = excluded.locator;
delete from public.topic_sources s where s.topic_id = (select id from public.topics where slug = 'higiene-das-maos-cinco-momentos') and s.position >= 1
  and not exists (select 1 from public.questions x where x.source_id = s.id);
insert into public.visual_maps (topic_id, title, spec, status, last_reviewed_at)
values ((select id from public.topics where slug = 'higiene-das-maos-cinco-momentos'), 'Os 5 momentos', '{"layout":"hub","center":"Higiene das mãos no ponto de assistência","blocks":[{"title":"Antes","tone":"blue","icon":"✋","items":["1. Tocar o paciente","2. Procedimento limpo/asséptico"]},{"title":"Depois","tone":"green","icon":"🧴","items":["3. Risco de exposição a fluidos","4. Tocar o paciente","5. Tocar superfícies próximas"]},{"title":"Com o quê","tone":"amber","icon":"⏳","items":["Álcool: 20 a 30 s","Água e sabonete: 40 a 60 s","Visivelmente suja → água e sabonete"]}],"footnote":"Objetivo: prevenir IRAS por transmissão cruzada pelas mãos."}'::jsonb, 'published', '2026-10-03'::date)
on conflict (topic_id) do update set title = excluded.title, spec = excluded.spec, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'higiene-das-maos-cinco-momentos'), 'bio-maos-1', 'Um profissional acabou de aferir a pressão de um paciente e vai sair do leito. Segundo os cinco momentos do protocolo de higiene das mãos, ele deve higienizar as mãos:', '''Após tocar o paciente'' é o 4º momento, independentemente de haver sujidade visível ou de o próximo contato ser com outro paciente.', 'facil', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'higiene-das-maos-cinco-momentos') and position = 0), 'os-cinco-momentos', 0, 'published', '2026-10-03'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'bio-maos-1');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-maos-1'), 'A', 'somente se for tocar outro paciente.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-maos-1'), 'B', 'somente se as mãos estiverem visivelmente sujas.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-maos-1'), 'C', 'após tocar o paciente — é um dos cinco momentos.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-maos-1'), 'D', 'não precisa, pois a aferição de pressão não é procedimento asséptico.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'bio-maos-1') and label not in ('A', 'B', 'C', 'D');
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'higiene-das-maos-cinco-momentos'), 'bio-maos-2', 'Pelo protocolo do Ministério da Saúde, a fricção antisséptica das mãos com preparação alcoólica deve durar:', 'Fricção com preparação alcoólica: 20 a 30 segundos. Os 40 a 60 segundos valem para a higienização com água e sabonete (simples ou antisséptica).', 'facil', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'higiene-das-maos-cinco-momentos') and position = 0), 'qual-produto', 1, 'published', '2026-10-03'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'bio-maos-2');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-maos-2'), 'A', 'de 5 a 10 segundos.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-maos-2'), 'B', 'de 20 a 30 segundos.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-maos-2'), 'C', 'de 40 a 60 segundos.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-maos-2'), 'D', 'pelo menos 2 minutos.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'bio-maos-2') and label not in ('A', 'B', 'C', 'D');
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'higiene-das-maos-cinco-momentos'), 'bio-maos-3', 'Sobre o uso de luvas, o protocolo de higiene das mãos do Ministério da Saúde afirma que:', 'A nota do item 8.1 é literal: o uso de luvas não altera nem substitui a higiene das mãos. Luvas são trocadas entre pacientes e não se calçam com as mãos molhadas.', 'facil', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'higiene-das-maos-cinco-momentos') and position = 0), 'luvas-e-pele', 2, 'published', '2026-10-03'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'bio-maos-3');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-maos-3'), 'A', 'o uso de luvas dispensa a higiene das mãos após o procedimento.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-maos-3'), 'B', 'as luvas devem ser mantidas entre pacientes do mesmo quarto.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-maos-3'), 'C', 'o uso de luvas não altera nem substitui a higiene das mãos.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-maos-3'), 'D', 'luvas devem ser calçadas com as mãos ainda úmidas de álcool.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'bio-maos-3') and label not in ('A', 'B', 'C', 'D');
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'higiene-das-maos-cinco-momentos'), 'bio-maos-4', 'Após um curativo, o técnico percebe as mãos visivelmente manchadas de sangue. Segundo o protocolo, ele deve:', 'Mãos visivelmente sujas ou manchadas de sangue ou outros fluidos exigem água e sabonete líquido; o álcool não remove sujidade. E sabonete e álcool não devem ser usados ao mesmo tempo.', 'facil', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'higiene-das-maos-cinco-momentos') and position = 0), 'qual-produto', 3, 'published', '2026-10-03'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'bio-maos-4');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-maos-4'), 'A', 'friccionar com preparação alcoólica por 20 a 30 segundos.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-maos-4'), 'B', 'higienizar com água e sabonete líquido.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-maos-4'), 'C', 'apenas calçar um novo par de luvas.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-maos-4'), 'D', 'aplicar álcool e depois lavar com sabonete, nessa ordem.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'bio-maos-4') and label not in ('A', 'B', 'C', 'D');
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'higiene-das-maos-cinco-momentos'), 'bio-maos-5', 'Em uma unidade com surto confirmado de Clostridioides (Clostridium) difficile, o protocolo de higiene das mãos considera preferível:', 'Quando há forte suspeita ou comprovação de exposição a patógenos formadores de esporos, inclusive surtos de C. difficile, é preferível higienizar com água e sabonete líquido.', 'dificil', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'higiene-das-maos-cinco-momentos') and position = 0), 'qual-produto', 4, 'published', '2026-10-03'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'bio-maos-5');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-maos-5'), 'A', 'preparação alcoólica em gel a 70%.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-maos-5'), 'B', 'preparação alcoólica líquida a 80%.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-maos-5'), 'C', 'água e sabonete líquido.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-maos-5'), 'D', 'apenas o uso de luvas, dispensando a higiene.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'bio-maos-5') and label not in ('A', 'B', 'C', 'D');
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'higiene-das-maos-cinco-momentos'), 'bio-maos-6', 'Segundo o protocolo de higiene das mãos, o ''ponto de assistência'' é o local onde estão presentes:', 'Ponto de assistência é o local onde três elementos estão presentes: o paciente, o profissional e a assistência ou tratamento com contato com o paciente ou suas imediações. O produto deve estar ao alcance das mãos ali.', 'media', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'higiene-das-maos-cinco-momentos') and position = 0), 'definicoes', 5, 'published', '2026-10-03'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'bio-maos-6');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-maos-6'), 'A', 'o lavatório, o sabonete e o papel-toalha.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-maos-6'), 'B', 'o paciente, o profissional de saúde e a assistência envolvendo contato com o paciente ou suas imediações.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-maos-6'), 'C', 'o posto de enfermagem e o carrinho de medicação.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-maos-6'), 'D', 'o médico, o enfermeiro e o técnico de enfermagem.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'bio-maos-6') and label not in ('A', 'B', 'C', 'D');
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'higiene-das-maos-cinco-momentos'), 'bio-maos-7', 'O protocolo admite que a preparação alcoólica substitua água e sabonete, nas mãos sem sujidade visível, quando ela tiver concentração final:', 'O item 5.1.1 fala em gel, espuma e outras formas com concentração final mínima de 70%, ou forma líquida com concentração final entre 60% e 80%.', 'dificil', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'higiene-das-maos-cinco-momentos') and position = 0), 'numeros', 6, 'published', '2026-10-03'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'bio-maos-7');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-maos-7'), 'A', 'mínima de 46% em qualquer forma.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-maos-7'), 'B', 'mínima de 70% em gel ou espuma, ou entre 60% e 80% na forma líquida.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-maos-7'), 'C', 'de exatamente 92,8% na forma líquida.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-maos-7'), 'D', 'entre 30% e 50% em gel.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'bio-maos-7') and label not in ('A', 'B', 'C', 'D');
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'higiene-das-maos-cinco-momentos'), 'bio-maos-8', 'Durante o banho no leito, o técnico limpa a região perineal e em seguida vai higienizar o rosto do mesmo paciente. Pelas indicações do protocolo, ele deve:', 'Entre as indicações está higienizar ''em caso de deslocamento de um local contaminado do corpo para outro local do corpo durante atendimento do mesmo paciente''. Se estiver de luvas, deve trocá-las também.', 'media', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'higiene-das-maos-cinco-momentos') and position = 0), 'os-cinco-momentos', 7, 'published', '2026-10-03'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'bio-maos-8');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-maos-8'), 'A', 'seguir sem higienizar, porque é o mesmo paciente.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-maos-8'), 'B', 'higienizar as mãos ao passar de um sítio contaminado para outro sítio do corpo do mesmo paciente.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-maos-8'), 'C', 'higienizar só ao final do banho.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-maos-8'), 'D', 'trocar apenas o pano de banho.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'bio-maos-8') and label not in ('A', 'B', 'C', 'D');
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'higiene-das-maos-cinco-momentos'), 'bio-maos-9', 'Pelo protocolo, o indicador obrigatório de monitoramento da higiene das mãos a ser acompanhado pela CCIH é:', 'O indicador obrigatório é o consumo de preparação alcoólica (e sabonete) por 1.000 pacientes-dia. O percentual de adesão é indicador recomendável.', 'dificil', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'higiene-das-maos-cinco-momentos') and position = 0), 'numeros', 8, 'published', '2026-10-03'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'bio-maos-9');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-maos-9'), 'A', 'o número de lavatórios por leito.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-maos-9'), 'B', 'o consumo de preparação alcoólica para as mãos por 1.000 pacientes-dia.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-maos-9'), 'C', 'o número de luvas usadas por plantão.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-maos-9'), 'D', 'a quantidade de cartazes afixados na unidade.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'bio-maos-9') and label not in ('A', 'B', 'C', 'D');

-- tema: Precauções padrão e específicas
insert into public.topics (category_id, slug, title, description, summary, key_points, sections, outline, reading_minutes, position, status, last_reviewed_at, review_notes)
values ((select id from public.categories where product_id = (select id from public.products where key = 'revisao-tecnico-enfermagem') and slug = 'biosseguranca'), 'precaucoes-padrao-e-especificas', 'Precauções padrão e específicas', 'Padrão para todos; contato, gotículas e aerossóis conforme a transmissão — EPI, quarto, transporte e exemplos.', 'As precauções são ações para interromper os mecanismos de transmissão e prevenir as infecções relacionadas à assistência à saúde. A Precaução Padrão vale para todo e qualquer paciente, independentemente do diagnóstico, porque todo paciente deve ser considerado potencial portador de doença transmissível pelo sangue e fluidos. Ela reúne higiene das mãos nos cinco momentos, luvas quando houver risco de contato com sangue, secreções, mucosas ou superfícies contaminadas, avental limpo (não necessariamente estéril) quando houver risco de respingo, óculos, máscara e protetor facial para proteger mucosas, e cuidado com perfurocortantes (não reencapar, não dobrar, não retirar a agulha da seringa, descartar em caixa própria sem ultrapassar o limite). As precauções específicas se somam à padrão conforme a via de transmissão. Contato: transmissão direta ou indireta e microrganismos multirresistentes; quarto privativo ou coorte, luvas e avental, equipamentos exclusivos. Gotículas: partículas maiores que 5 micra que atingem até cerca de 1 metro (rubéola, caxumba, coqueluche); máscara cirúrgica para quem entra no quarto, quarto privativo ou coorte com distância mínima de 1 metro entre leitos. Aerossóis: partículas menores que 5 micra que ficam suspensas no ar (tuberculose, varicela); máscara N95/PFF2, colocada antes de entrar e retirada após sair; quarto individual ou coorte. Em todo transporte o paciente com precaução respiratória usa máscara cirúrgica.', array['Precaução padrão: para TODOS os pacientes, independentemente do diagnóstico.', 'Padrão = higiene das mãos + luvas, avental, óculos/máscara conforme o risco + cuidado com perfurocortantes.', 'Específicas sempre se SOMAM à padrão; podem ser combinadas se houver mais de uma via.', 'Contato: luvas e avental, quarto privativo ou coorte, equipamentos exclusivos (estetoscópio, termômetro).', 'Gotículas (> 5 µm, até 1 m): máscara cirúrgica; ex.: rubéola, caxumba, coqueluche.', 'Aerossóis (< 5 µm, suspensas no ar): N95/PFF2 antes de entrar e retirada após sair; ex.: tuberculose, varicela.', 'Transporte só se necessário; paciente com precaução respiratória usa máscara cirúrgica.', 'Coorte = agrupar pacientes com o mesmo microrganismo quando faltam quartos privativos.']::text[], '[{"id":"visao-geral","kind":"visao","title":"A lógica: barrar a transmissão","lead":"Saber POR ONDE o microrganismo passa diz QUAL precaução usar.","source":0,"blocks":[{"type":"text","text":"Precauções são ações para ==interromper os mecanismos de transmissão== e prevenir IRAS. Existem duas camadas: a ==precaução padrão==, para todo paciente, e as ==específicas== (contato, gotículas, aerossóis), que se somam conforme a via de transmissão."},{"type":"cards","items":[{"title":"Cadeia de transmissão","text":"Três elementos: ==fonte/reservatório==, ==hospedeiro suscetível== com porta de entrada e ==modo de transmissão==. Quebrar um elo interrompe a cadeia.","icon":"🔗","tone":"slate"},{"title":"Todo paciente é potencial portador","text":"Por isso a padrão vale ==independentemente do diagnóstico==.","icon":"👥","tone":"green"},{"title":"Combinar quando preciso","text":"Doença com mais de uma via de transmissão → as precauções se ==combinam==.","icon":"➕","tone":"violet"}]}]},{"id":"conceitos","kind":"conceito","title":"Conceitos de transmissão","source":0,"blocks":[{"type":"definition","term":"Contato direto","text":"Micro-organismo passa ==diretamente de uma pessoa para outra==. Ex.: sangue ou fluido contaminado em contato com mucosa ou pele não íntegra."},{"type":"definition","term":"Contato indireto","text":"Passa por um ==intermediário==: mãos do profissional, termômetro ou glicosímetro não higienizado entre pacientes, brinquedos compartilhados, endoscópio mal desinfetado."},{"type":"definition","term":"Coorte","text":"==Agrupar pacientes com o mesmo microrganismo== (ou características clínicas/epidemiológicas comuns) no mesmo espaço, quando faltam quartos privativos."}]},{"id":"precaucao-padrao","kind":"etapas","title":"Precaução padrão, item por item","lead":"Vale para todos os pacientes e para o manuseio de artigos com risco de contato com mucosas e fluidos.","source":0,"blocks":[{"type":"steps","items":[{"title":"Higiene das mãos nos 5 momentos","text":"Água e sabonete ou álcool 70%.","why":"É a medida que interrompe a transmissão cruzada pelas mãos.","who":"equipe"},{"title":"Luvas quando houver risco","text":"Sangue, secreções, mucosas, itens ou superfícies contaminadas. Calçar ==imediatamente antes== do contato, trocar entre procedimentos, retirar logo após o uso e higienizar as mãos.","why":"Luva usada além do necessário vira veículo de contaminação.","who":"equipe"},{"title":"Avental limpo (não necessariamente estéril)","text":"Quando houver possibilidade de contaminação da roupa por sangue ou fluidos. Retirar assim que possível e higienizar as mãos.","who":"equipe"},{"title":"Óculos, máscara e protetor facial","text":"Protegem as ==mucosas de olhos, nariz e boca== em procedimentos com risco de respingo.","who":"equipe"},{"title":"Perfurocortantes","text":"==Não reencapar==, não dobrar, não retirar agulha da seringa descartável. Descartar em caixa resistente e ==não ultrapassar o limite== de preenchimento.","why":"Reencape e desconexão manual de agulhas também são vedados pela NR 32 e pela RDC 222.","who":"equipe"}]}]},{"id":"especificas","kind":"classificacao","title":"As três precauções específicas lado a lado","lead":"A tabela que resolve a maior parte das questões.","source":0,"blocks":[{"type":"compare","columns":["Contato","Gotículas","Aerossóis"],"rows":[{"label":"Transmissão","cells":["Contato direto ou indireto; multirresistentes","Partículas ==> 5 µm==, até ==1 m==; fala, tosse, aspiração","Partículas ==< 5 µm== que ficam ==suspensas no ar=="]},{"label":"Exemplos","cells":["Colonização/infecção por microrganismo multirresistente","Rubéola, caxumba, coqueluche","Tuberculose, varicela"]},{"label":"Proteção","cells":["==Luvas e avental== (avental antes de entrar, retirar antes de sair)","==Máscara cirúrgica== para todos que entram no quarto","==N95/PFF2==: colocar antes de entrar, retirar após sair"]},{"label":"Quarto","cells":["Privativo ou coorte; 1 m entre leitos","Privativo ou coorte; porta fechada; 1 m entre leitos","Preferencialmente individual ou coorte"]},{"label":"Transporte","cells":["Mínimo necessário, mantendo a precaução","Mínimo; paciente com ==máscara cirúrgica==","Paciente com ==máscara cirúrgica=="]}]},{"type":"callout","variant":"atencao","title":"Tuberculose resistente","text":"Paciente com suspeita de tuberculose resistente ao tratamento ==não pode dividir o quarto com outros pacientes com tuberculose==."}]},{"id":"rotina-do-tecnico","kind":"tecnico","title":"Na rotina do técnico","source":0,"blocks":[{"type":"checklist","title":"Ao assumir um paciente em precaução","items":["Conferir a ==sinalização== na porta, no leito e no prontuário","Separar ==equipamentos de uso exclusivo== (estetoscópio, termômetro) no contato","Colocar o EPI ==antes== do contato e retirar logo após, higienizando as mãos","Na precaução de contato, ==retirar luvas e avental antes de deixar o quarto==","Não tocar superfícies do quarto com as mãos enluvadas fora do cuidado","Limitar o transporte; avisar a unidade de destino sobre a precaução"]},{"type":"callout","variant":"dica","title":"Prioridade de quarto individual","text":"Pacientes com ==diarreia ou incontinência== têm prioridade para quarto individual, pelo maior risco de contaminar o ambiente."}]},{"id":"numeros","kind":"numeros","title":"Números que caem","blocks":[{"type":"numbers","items":[{"value":"5 µm","label":"divisor entre gotícula (maior) e aerossol (menor)"},{"value":"1 m","label":"alcance das gotículas e distância mínima entre leitos"},{"value":"95%","label":"eficácia mínima de filtração da N95/PFF2","note":"partículas de até 0,3 µm (NT Anvisa 04/2020)"},{"value":"3","label":"precauções específicas","note":"contato, gotículas, aerossóis"},{"value":"3","label":"elos da cadeia de transmissão","note":"fonte, modo de transmissão, hospedeiro"}]}],"source":1},{"id":"caso","kind":"caso","title":"Situação-problema","source":0,"blocks":[{"type":"case","title":"Suspeita de tuberculose","scenario":"Paciente internado com suspeita de tuberculose pulmonar precisa descer para fazer um exame de imagem.","question":"Quais medidas o técnico deve aplicar no quarto e no transporte?","answer":"Precaução padrão + precaução para aerossóis: N95/PFF2 para o profissional (antes de entrar, retirada após sair) e máscara cirúrgica no paciente durante o transporte.","reasoning":["Tuberculose é exemplo clássico de transmissão por aerossóis.","A máscara do profissional é a N95/PFF2, não a cirúrgica.","O paciente usa máscara cirúrgica (não N95) ao ser transportado.","O transporte deve ser limitado ao necessário e a unidade de destino, avisada."]}]},{"id":"como-a-banca-cobra","kind":"cobrado","title":"Como a banca cobra","source":0,"blocks":[{"type":"traps","items":[{"wrong":"A precaução padrão só é usada em pacientes com diagnóstico de doença infecciosa.","right":"É para ==todos os pacientes==, independentemente do diagnóstico.","why":"Todo paciente é considerado potencial portador de doença transmissível pelo sangue e fluidos."},{"wrong":"Na precaução para gotículas, o profissional usa N95.","right":"Gotículas → ==máscara cirúrgica==. N95 é para aerossóis.","why":"Gotículas são maiores (> 5 µm) e caem até cerca de 1 m; não ficam suspensas."},{"wrong":"No transporte, o paciente com tuberculose deve usar N95.","right":"O paciente usa ==máscara cirúrgica==; a N95 é do profissional.","why":"A máscara cirúrgica no paciente retém as partículas na fonte."},{"wrong":"Varicela exige precaução para gotículas.","right":"Varicela → ==aerossóis==.","why":"Os exemplos clássicos de aerossóis são tuberculose e varicela; de gotículas, rubéola, caxumba e coqueluche."},{"wrong":"As precauções específicas substituem a padrão.","right":"Elas ==se somam== à padrão.","why":"A padrão é a base; a específica acrescenta barreiras conforme a via."},{"wrong":"Reencapar a agulha com cuidado é aceitável.","right":"==Nunca reencapar==.","why":"O reencape é proibido pelo protocolo de precauções, pela NR 32 (32.2.4.15) e pela RDC 222 (art. 89)."},{"wrong":"Na precaução de contato, o avental pode ser retirado no corredor.","right":"Avental ==antes de entrar e retirado antes de sair== do quarto.","why":"Sair com o avental leva o microrganismo para fora da área."}]}]},{"id":"conexoes","kind":"conexoes","title":"Conexões","blocks":[{"type":"links","items":[{"slug":"higiene-das-maos-cinco-momentos","title":"Higiene das mãos: os 5 momentos","why":"O primeiro item de toda precaução."},{"slug":"epi-paramentacao-e-desparamentacao","title":"EPI: paramentação e desparamentação","why":"A ordem certa de colocar e tirar cada EPI."},{"slug":"acidente-com-material-biologico","title":"Acidente com material biológico","why":"O que fazer quando a barreira falha."},{"slug":"residuos-de-servicos-de-saude-rdc-222","title":"Resíduos de serviços de saúde (RDC 222)","why":"Onde descartar perfurocortantes e EPIs."}]}]}]'::jsonb, array['A lógica: barrar a transmissão', 'Conceitos de transmissão', 'Precaução padrão, item por item', 'As três precauções específicas lado a lado', 'Na rotina do técnico', 'Números que caem', 'Situação-problema', 'Como a banca cobra', 'Conexões']::text[], 7, 1, 'published', '2026-10-03'::date, 'Padrão v2: cada seção foi escrita a partir do texto original da fonte, baixado e lido em 2026-10-03 (conferência automatizada durante o desenvolvimento). Revisão por enfermeiro(a) obrigatória antes da venda.')
on conflict (slug) do update set category_id = excluded.category_id, title = excluded.title, description = excluded.description,
  summary = excluded.summary, key_points = excluded.key_points, sections = excluded.sections, outline = excluded.outline,
  reading_minutes = excluded.reading_minutes, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at, review_notes = excluded.review_notes;
insert into public.topic_sources (topic_id, position, source_title, source_organization, source_url, source_accessed_at, locator)
values ((select id from public.topics where slug = 'precaucoes-padrao-e-especificas'), 0, 'Protocolo PRT.STGQ.008 — Medidas de precaução para prevenção de infecções relacionadas à assistência à saúde (v.3, 2024)', 'Ebserh — Hospital Universitário Júlio Bandeira (UFCG)', 'https://www.gov.br/hubrasil/pt-br/hospitais-universitarios/regiao-nordeste/hujb-ufcg/acesso-a-informacao/gestao-documental/superintendencia/copy_of_PRT.SVSSP.008MedidasDePrecauoParaPrevenoDeInfecesRelacionadaAssistnciaSade.pdf', '2026-10-03'::date, 'itens 2, 4 a 6.3')
on conflict (topic_id, position) do update set source_title = excluded.source_title, source_organization = excluded.source_organization,
  source_url = excluded.source_url, source_accessed_at = excluded.source_accessed_at, locator = excluded.locator;
insert into public.topic_sources (topic_id, position, source_title, source_organization, source_url, source_accessed_at, locator)
values ((select id from public.topics where slug = 'precaucoes-padrao-e-especificas'), 1, 'Nota Técnica GVIMS/GGTES/Anvisa nº 04/2020 — medidas de prevenção e controle na assistência (atualizada em 27/10/2020)', 'Agência Nacional de Vigilância Sanitária (Anvisa) (cópia publicada pela Renast/Fiocruz)', 'https://renastonline.ensp.fiocruz.br/sites/default/files/arquivos/recursos/nota_tecnica_n_04-2020_gvims-ggtes-anvisa-atualizada-27-10-2020.pdf', '2026-10-03'::date, 'seção ''Máscara de proteção respiratória''')
on conflict (topic_id, position) do update set source_title = excluded.source_title, source_organization = excluded.source_organization,
  source_url = excluded.source_url, source_accessed_at = excluded.source_accessed_at, locator = excluded.locator;
delete from public.topic_sources s where s.topic_id = (select id from public.topics where slug = 'precaucoes-padrao-e-especificas') and s.position >= 2
  and not exists (select 1 from public.questions x where x.source_id = s.id);
insert into public.visual_maps (topic_id, title, spec, status, last_reviewed_at)
values ((select id from public.topics where slug = 'precaucoes-padrao-e-especificas'), 'Padrão + específicas', '{"layout":"hub","center":"Precaução padrão para todos","blocks":[{"title":"Contato","tone":"amber","icon":"🧤","items":["Luvas + avental","Quarto privativo ou coorte","Equipamento exclusivo"]},{"title":"Gotículas","tone":"blue","icon":"💧","items":["> 5 µm, até 1 m","Máscara cirúrgica","Rubéola, caxumba, coqueluche"]},{"title":"Aerossóis","tone":"violet","icon":"🌫️","items":["< 5 µm, suspensas no ar","N95/PFF2","Tuberculose, varicela"]},{"title":"Padrão (sempre)","tone":"green","icon":"🛡️","items":["Higiene das mãos","EPI conforme o risco","Perfurocortantes sem reencape"]}],"footnote":"As específicas nunca substituem a padrão: elas se somam a ela."}'::jsonb, 'published', '2026-10-03'::date)
on conflict (topic_id) do update set title = excluded.title, spec = excluded.spec, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'precaucoes-padrao-e-especificas'), 'bio-prec-1', 'A precaução padrão deve ser adotada:', 'A precaução padrão vale para o contato com todos os pacientes, independentemente da patologia, porque todo paciente deve ser considerado potencial portador de doença transmissível pelo sangue e fluidos.', 'facil', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'precaucoes-padrao-e-especificas') and position = 0), 'visao-geral', 0, 'published', '2026-10-03'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'bio-prec-1');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-prec-1'), 'A', 'apenas para pacientes com HIV ou hepatites confirmadas.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-prec-1'), 'B', 'para todos os pacientes, independentemente do diagnóstico.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-prec-1'), 'C', 'somente em unidades de isolamento.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-prec-1'), 'D', 'apenas quando o paciente apresentar febre.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'bio-prec-1') and label not in ('A', 'B', 'C', 'D');
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'precaucoes-padrao-e-especificas'), 'bio-prec-2', 'Para assistir um paciente com suspeita de tuberculose pulmonar, o profissional deve usar:', 'Tuberculose é transmitida por aerossóis: o profissional usa N95/PFF2, colocada ao entrar e removida só após sair do quarto.', 'facil', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'precaucoes-padrao-e-especificas') and position = 0), 'especificas', 1, 'published', '2026-10-03'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'bio-prec-2');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-prec-2'), 'A', 'máscara cirúrgica comum.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-prec-2'), 'B', 'máscara N95/PFF2, colocada antes de entrar no quarto e retirada após sair.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-prec-2'), 'C', 'apenas luvas de procedimento.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-prec-2'), 'D', 'nenhuma máscara, se mantiver 1 metro de distância.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'bio-prec-2') and label not in ('A', 'B', 'C', 'D');
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'precaucoes-padrao-e-especificas'), 'bio-prec-3', 'São exemplos de doenças que exigem precaução para gotículas:', 'Gotículas: rubéola, caxumba e coqueluche. Tuberculose e varicela são aerossóis; multirresistentes, contato; hepatite B e HIV entram na padrão (sangue e fluidos).', 'media', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'precaucoes-padrao-e-especificas') and position = 0), 'especificas', 2, 'published', '2026-10-03'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'bio-prec-3');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-prec-3'), 'A', 'tuberculose e varicela.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-prec-3'), 'B', 'rubéola, caxumba e coqueluche.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-prec-3'), 'C', 'infecções por microrganismos multirresistentes.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-prec-3'), 'D', 'hepatite B e HIV.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'bio-prec-3') and label not in ('A', 'B', 'C', 'D');
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'precaucoes-padrao-e-especificas'), 'bio-prec-4', 'Em relação ao tamanho das partículas, é correto afirmar:', 'Gotículas: > 5 µm, alcançam até cerca de 1 m. Aerossóis: < 5 µm, permanecem suspensos no ar.', 'media', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'precaucoes-padrao-e-especificas') and position = 0), 'especificas', 3, 'published', '2026-10-03'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'bio-prec-4');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-prec-4'), 'A', 'gotículas são menores que 5 micra e ficam suspensas no ar.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-prec-4'), 'B', 'gotículas são maiores que 5 micra e atingem até cerca de 1 metro; aerossóis são menores que 5 micra e ficam suspensos.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-prec-4'), 'C', 'aerossóis são maiores que 5 micra e caem rapidamente.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-prec-4'), 'D', 'não há diferença de tamanho entre gotículas e aerossóis.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'bio-prec-4') and label not in ('A', 'B', 'C', 'D');
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'precaucoes-padrao-e-especificas'), 'bio-prec-5', 'Um paciente com tuberculose precisa ser levado para exame em outro setor. Durante o transporte, o paciente deve usar:', 'Em precaução respiratória, o paciente usa máscara cirúrgica no transporte; a N95/PFF2 é do profissional.', 'media', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'precaucoes-padrao-e-especificas') and position = 0), 'especificas', 4, 'published', '2026-10-03'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'bio-prec-5');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-prec-5'), 'A', 'máscara N95/PFF2.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-prec-5'), 'B', 'máscara cirúrgica.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-prec-5'), 'C', 'nenhuma máscara, se o trajeto for curto.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-prec-5'), 'D', 'protetor facial.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'bio-prec-5') and label not in ('A', 'B', 'C', 'D');
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'precaucoes-padrao-e-especificas'), 'bio-prec-6', 'Na precaução de contato, a conduta correta com o avental é:', 'O avental limpo é vestido antes de entrar quando se prevê contato substancial com o paciente ou o ambiente, e retirado antes de deixar o quarto.', 'media', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'precaucoes-padrao-e-especificas') and position = 0), 'rotina-do-tecnico', 5, 'published', '2026-10-03'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'bio-prec-6');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-prec-6'), 'A', 'vesti-lo apenas se o paciente estiver com febre.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-prec-6'), 'B', 'vesti-lo antes de entrar no quarto quando houver contato substancial e retirá-lo antes de deixar o quarto.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-prec-6'), 'C', 'usá-lo durante todo o plantão para atender vários pacientes.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-prec-6'), 'D', 'retirá-lo no posto de enfermagem.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'bio-prec-6') and label not in ('A', 'B', 'C', 'D');
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'precaucoes-padrao-e-especificas'), 'bio-prec-7', 'Um glicosímetro usado em um paciente e, sem higienização, usado em outro, é exemplo de transmissão por:', 'Aparelhos de uso na assistência não higienizados entre pacientes são exemplo de contato indireto, assim como as mãos do profissional.', 'media', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'precaucoes-padrao-e-especificas') and position = 0), 'conceitos', 6, 'published', '2026-10-03'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'bio-prec-7');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-prec-7'), 'A', 'aerossóis.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-prec-7'), 'B', 'gotículas.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-prec-7'), 'C', 'contato indireto.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-prec-7'), 'D', 'via vetorial.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'bio-prec-7') and label not in ('A', 'B', 'C', 'D');
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'precaucoes-padrao-e-especificas'), 'bio-prec-8', 'Sobre os perfurocortantes na precaução padrão, é correto:', 'O protocolo proíbe reencapar, dobrar e retirar a agulha da seringa descartável; o descarte é em caixa resistente, respeitando o limite de preenchimento.', 'facil', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'precaucoes-padrao-e-especificas') and position = 0), 'precaucao-padrao', 7, 'published', '2026-10-03'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'bio-prec-8');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-prec-8'), 'A', 'reencapar a agulha usando as duas mãos.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-prec-8'), 'B', 'dobrar a agulha antes do descarte para evitar reutilização.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-prec-8'), 'C', 'não reencapar, não dobrar e descartar em caixa própria sem ultrapassar o limite.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-prec-8'), 'D', 'retirar a agulha da seringa antes do descarte.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'bio-prec-8') and label not in ('A', 'B', 'C', 'D');
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'precaucoes-padrao-e-especificas'), 'bio-prec-9', 'Paciente com suspeita de tuberculose resistente ao tratamento, segundo o protocolo de precauções:', 'A coorte é admitida para o mesmo microrganismo, mas o protocolo veda que paciente com suspeita de tuberculose resistente divida o quarto com outros pacientes com tuberculose.', 'dificil', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'precaucoes-padrao-e-especificas') and position = 0), 'especificas', 8, 'published', '2026-10-03'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'bio-prec-9');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-prec-9'), 'A', 'pode dividir o quarto com outros pacientes com tuberculose (coorte).', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-prec-9'), 'B', 'não pode dividir o quarto com outros pacientes com tuberculose.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-prec-9'), 'C', 'dispensa precaução para aerossóis se estiver em tratamento.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-prec-9'), 'D', 'deve ficar em enfermaria comum com máscara cirúrgica.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'bio-prec-9') and label not in ('A', 'B', 'C', 'D');

-- tema: EPI: paramentação e desparamentação
insert into public.topics (category_id, slug, title, description, summary, key_points, sections, outline, reading_minutes, position, status, last_reviewed_at, review_notes)
values ((select id from public.categories where product_id = (select id from public.products where key = 'revisao-tecnico-enfermagem') and slug = 'biosseguranca'), 'epi-paramentacao-e-desparamentacao', 'EPI: paramentação e desparamentação', 'Para que serve cada EPI, a ordem de colocar e de tirar, a técnica de retirar luvas e as regras da máscara N95/PFF2.', 'Equipamentos de proteção individual protegem o profissional contra sangue, fluidos e partículas. A NR 32 obriga o empregador a mantê-los disponíveis em número suficiente nos postos de trabalho e proíbe o trabalhador de deixar o local de trabalho com os EPIs e as vestimentas usadas. A Nota Técnica Anvisa nº 04/2020 descreve uma sequência padrão: para paramentar, higienizar as mãos, colocar avental, máscara N95/PFF2, gorro, óculos e protetor facial, higienizar as mãos e por último calçar as luvas; para desparamentar, retirar luvas e avental, higienizar as mãos, retirar protetor facial, óculos e gorro, higienizar as mãos, retirar a máscara e higienizar as mãos de novo — a desparamentação é um dos principais momentos de contaminação, por isso a higiene entre as etapas é obrigatória. A máscara cirúrgica é descartável, não pode ser limpa nem reutilizada e deve ser trocada quando úmida ou suja. A N95/PFF2 filtra no mínimo 95% das partículas de até 0,3 µm, exige verificação de vedação antes de cada uso, não pode ser compartilhada, é retirada pelos elásticos sem tocar a parte interna e não deve ter máscara cirúrgica sobreposta. As luvas são removidas dentro do quarto com técnica que evita tocar a parte externa, e as mãos são higienizadas logo depois; nunca se sai do quarto de luvas, e o uso de luvas duplas para a desparamentação não está indicado.', array['NR 32: EPI em número suficiente; proibido sair do local de trabalho com EPI e vestimentas usadas.', 'Paramentação: mãos → avental → N95/PFF2 → gorro → óculos → protetor facial → mãos → luvas (por último).', 'Desparamentação: luvas → avental → mãos → protetor facial → óculos → gorro → mãos → máscara → mãos.', 'A desparamentação é um dos principais momentos de contaminação: higiene das mãos entre as etapas.', 'Máscara cirúrgica: descartável, nunca limpar ou reutilizar; trocar quando úmida ou suja.', 'N95/PFF2: ≥ 95% de filtração de partículas de até 0,3 µm; testar vedação antes de cada uso; não compartilhar.', 'Não usar máscara cirúrgica sobre a N95/PFF2; retirar pelos elásticos sem tocar a parte interna.', 'Luvas: retirar dentro do quarto, sem tocar a parte externa; higienizar as mãos logo depois; luva dupla não indicada.']::text[], '[{"id":"visao-geral","kind":"visao","title":"EPI só protege se for posto e tirado do jeito certo","source":0,"blocks":[{"type":"text","text":"O EPI é a ==barreira física== entre o profissional e o sangue, os fluidos e as partículas do paciente. O erro mais comum não é esquecer o EPI — é ==contaminar-se ao tirá-lo==. Por isso a banca cobra a ordem e a higiene das mãos entre as etapas."},{"type":"cards","items":[{"title":"Disponível","text":"O empregador deve manter EPI ==em número suficiente== nos postos de trabalho (NR 32).","icon":"📦","tone":"blue"},{"title":"Não sai do setor","text":"É proibido deixar o local de trabalho ==com o EPI e a vestimenta usados== (NR 32).","icon":"🚪","tone":"rose"},{"title":"Capacitação","text":"Toda a equipe deve ser capacitada para colocar, usar, retirar e descartar o EPI (NT Anvisa).","icon":"🎓","tone":"green"}]}]},{"id":"cada-epi","kind":"classificacao","title":"Para que serve cada EPI","source":1,"blocks":[{"type":"compare","columns":["Protege","Quando usar","Detalhe que cai"],"rows":[{"label":"Luvas","cells":["Mãos","Risco de contato com sangue, secreções, mucosas, superfícies contaminadas","Calçar imediatamente antes; trocar entre procedimentos; retirar logo após"]},{"label":"Avental","cells":["Roupa e pele","Risco de respingo de sangue ou fluidos","Limpo, ==não necessariamente estéril=="]},{"label":"Máscara cirúrgica","cells":["Boca e nariz (gotículas)","Precaução para gotículas; respingos","Descartável; ==nunca limpar ou reutilizar=="]},{"label":"N95/PFF2","cells":["Vias respiratórias (aerossóis)","Aerossóis e procedimentos geradores de aerossol","Teste de vedação antes de cada uso; ==não compartilhar=="]},{"label":"Óculos / protetor facial","cells":["Mucosa dos olhos (e face)","Procedimentos com risco de respingo","Limpar com água e sabão e desinfetar após o uso"]},{"label":"Gorro","cells":["Cabelo e elásticos da máscara","Procedimentos com aerossol e áreas que exigem","Colocado após a máscara protege os elásticos"]}]}]},{"id":"paramentacao","kind":"etapas","title":"Paramentação: a ordem de colocar","lead":"Sequência padrão da NT Anvisa 04/2020. Luvas sempre por último.","source":0,"blocks":[{"type":"steps","items":[{"title":"Higienizar as mãos","who":"tecnico"},{"title":"Avental","why":"Vem antes da máscara e das luvas para que o punho da luva cubra o punho do avental."},{"title":"Máscara N95/PFF2 (ou cirúrgica, conforme a precaução)","text":"Fazer a verificação de vedação (teste positivo e negativo) da N95/PFF2.","why":"Sem vedação, o ar entra pelas bordas e a máscara não protege."},{"title":"Gorro","why":"Posto depois da máscara, protege os elásticos dela."},{"title":"Óculos"},{"title":"Protetor facial"},{"title":"Higienizar as mãos","why":"Se a máscara foi tocada no teste de vedação (principalmente se já usada), as mãos estão contaminadas."},{"title":"Luvas — por último","why":"Calçadas imediatamente antes do contato, ficam limpas para o cuidado."}]}]},{"id":"desparamentacao","kind":"etapas","title":"Desparamentação: a ordem de tirar","lead":"É um dos principais momentos de contaminação do profissional.","source":0,"blocks":[{"type":"steps","items":[{"title":"Retirar as luvas","text":"Dentro do quarto, com a técnica que não toca a parte externa."},{"title":"Retirar o avental"},{"title":"Higienizar as mãos","why":"Luvas e avental são as peças mais expostas ao paciente."},{"title":"Retirar o protetor facial"},{"title":"Retirar os óculos"},{"title":"Retirar o gorro"},{"title":"Higienizar as mãos"},{"title":"Retirar a máscara pelos elásticos","text":"Sem tocar a parte interna.","why":"A frente da máscara é a área mais contaminada; os elásticos são a parte segura."},{"title":"Higienizar as mãos de novo"}]},{"type":"callout","variant":"atencao","title":"Luva dupla não resolve","text":"A NT diz que usar ==duas luvas para reduzir a contaminação na desparamentação não está indicado==: dá falsa sensação de proteção e há potencial de contaminação pelos microporos."}]},{"id":"luvas-e-mascaras","kind":"tecnico","title":"Luvas e máscaras: as regras do técnico","source":0,"blocks":[{"type":"steps","items":[{"title":"Puxar a primeira luva pelo lado externo do punho","text":"Com os dedos da mão oposta.","who":"tecnico"},{"title":"Segurar a luva retirada na mão ainda enluvada"},{"title":"Introduzir o dedo sem luva na parte interna do punho da outra luva","text":"E retirá-la virando-a do avesso, envolvendo a primeira."},{"title":"Descartar e higienizar as mãos imediatamente","why":"A higiene das mãos após remover luvas é uma das indicações do protocolo de higiene."}]},{"type":"dodont","do":["Colocar e retirar luvas dentro do quarto ou da área de isolamento","Trocar a máscara cirúrgica assim que ficar úmida ou suja","Verificar a vedação da N95/PFF2 antes de cada uso","Guardar a N95/PFF2 reutilizável em embalagem que não fique hermeticamente fechada","Descartar a N95/PFF2 se a vedação falhar ou se a parte interna for contaminada"],"dont":["Sair do quarto de luvas","Tocar telefone, maçaneta ou porta de luvas","Limpar ou reutilizar máscara cirúrgica","Usar máscara cirúrgica sobreposta à N95/PFF2","Compartilhar N95/PFF2 entre profissionais","Usar N95 com válvula como controle de fonte (deixa sair o ar expirado)"]}]},{"id":"numeros","kind":"numeros","title":"Números que caem","source":0,"blocks":[{"type":"numbers","items":[{"value":"95%","label":"filtração mínima da N95/PFF2","note":"partículas de até 0,3 µm"},{"value":"8","label":"passos da paramentação na sequência padrão","note":"luvas são o 8º"},{"value":"3×","label":"higiene das mãos na desparamentação","note":"após avental, após gorro, após máscara"},{"value":"1º","label":"EPI a sair","note":"as luvas"},{"value":"Último","label":"EPI a sair","note":"a máscara (pelos elásticos)"}]}]},{"id":"caso","kind":"caso","title":"Situação-problema","source":0,"blocks":[{"type":"case","title":"Fim do atendimento em isolamento respiratório","scenario":"Ao terminar a aspiração de um paciente em precaução para aerossóis, a técnica sai do quarto, tira a N95 no corredor e só depois remove luvas e avental.","question":"O que está errado e qual seria a sequência correta?","answer":"Ela saiu do quarto de luvas e inverteu a ordem: luvas e avental saem primeiro, dentro do quarto; a máscara é a última peça, retirada pelos elásticos, com higiene das mãos entre as etapas.","reasoning":["Luvas são retiradas dentro do quarto; jamais se sai de luvas.","Na sequência padrão: luvas → avental → mãos → protetor facial → óculos → gorro → mãos → máscara → mãos.","Na precaução para aerossóis, a N95 só é retirada após sair do quarto — e depois das outras peças.","Tirar a máscara com as mãos ainda contaminadas expõe boca e nariz."]}]},{"id":"como-a-banca-cobra","kind":"cobrado","title":"Como a banca cobra","source":0,"blocks":[{"type":"traps","items":[{"wrong":"As luvas são o primeiro EPI a ser colocado.","right":"Luvas são o ==último== a colocar e o ==primeiro== a tirar.","why":"Calçadas por último, chegam limpas ao paciente; retiradas primeiro, levam embora a maior contaminação."},{"wrong":"A máscara é o primeiro EPI a ser retirado.","right":"A máscara é retirada ==por último==, pelos elásticos.","why":"Tirá-la antes, com mãos e avental contaminados, expõe as mucosas."},{"wrong":"Máscara cirúrgica pode ser limpa com álcool e reutilizada.","right":"Máscara cirúrgica é ==descartável== e não pode ser limpa nem reutilizada.","why":"Úmida, ela perde a capacidade de filtração."},{"wrong":"Usar máscara cirúrgica por cima da N95 aumenta a proteção.","right":"==Não== se usa cirúrgica sobreposta à N95/PFF2.","why":"A NT diz que a sobreposição não garante proteção e desperdiça EPI."},{"wrong":"Luva dupla é a forma indicada de desparamentar com segurança.","right":"Luva dupla na desparamentação ==não está indicada==.","why":"Dá falsa sensação de proteção; a segurança vem da técnica e da higiene entre as etapas."},{"wrong":"O técnico pode ir ao refeitório de avental se não houver respingo visível.","right":"É ==proibido sair do local de trabalho com EPI e vestimentas usadas== (NR 32).","why":"O EPI usado leva os microrganismos para fora da área assistencial."},{"wrong":"Não é preciso higienizar as mãos entre a retirada dos EPIs.","right":"A higiene ==entre as etapas== deve ser rigorosamente seguida.","why":"A desparamentação é uma das principais vias de contaminação do profissional."}]}]},{"id":"conexoes","kind":"conexoes","title":"Conexões","blocks":[{"type":"links","items":[{"slug":"precaucoes-padrao-e-especificas","title":"Precauções padrão e específicas","why":"Qual EPI cada precaução pede."},{"slug":"higiene-das-maos-cinco-momentos","title":"Higiene das mãos: os 5 momentos","why":"A higiene entre a retirada de cada EPI."},{"slug":"nr-32-seguranca-do-trabalhador","title":"NR 32: segurança do trabalhador da saúde","why":"As obrigações legais sobre EPI e vestimenta."},{"slug":"residuos-de-servicos-de-saude-rdc-222","title":"Resíduos de serviços de saúde (RDC 222)","why":"Onde descartar o EPI usado."}]}]}]'::jsonb, array['EPI só protege se for posto e tirado do jeito certo', 'Para que serve cada EPI', 'Paramentação: a ordem de colocar', 'Desparamentação: a ordem de tirar', 'Luvas e máscaras: as regras do técnico', 'Números que caem', 'Situação-problema', 'Como a banca cobra', 'Conexões']::text[], 7, 2, 'published', '2026-10-03'::date, 'Padrão v2: cada seção foi escrita a partir do texto original da fonte, baixado e lido em 2026-10-03 (conferência automatizada durante o desenvolvimento). Revisão por enfermeiro(a) obrigatória antes da venda. A sequência padrão de paramentação/desparamentação está na NT 04/2020 (seção de saúde bucal); conferir se o POP local difere. A justificativa ''punho da luva cobre o avental'' é didática, não textual.')
on conflict (slug) do update set category_id = excluded.category_id, title = excluded.title, description = excluded.description,
  summary = excluded.summary, key_points = excluded.key_points, sections = excluded.sections, outline = excluded.outline,
  reading_minutes = excluded.reading_minutes, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at, review_notes = excluded.review_notes;
insert into public.topic_sources (topic_id, position, source_title, source_organization, source_url, source_accessed_at, locator)
values ((select id from public.topics where slug = 'epi-paramentacao-e-desparamentacao'), 0, 'Nota Técnica GVIMS/GGTES/Anvisa nº 04/2020 — medidas de prevenção e controle na assistência (atualizada em 27/10/2020)', 'Agência Nacional de Vigilância Sanitária (Anvisa) (cópia publicada pela Renast/Fiocruz)', 'https://renastonline.ensp.fiocruz.br/sites/default/files/arquivos/recursos/nota_tecnica_n_04-2020_gvims-ggtes-anvisa-atualizada-27-10-2020.pdf', '2026-10-03'::date, 'seções ''Máscara cirúrgica'', ''Máscara de proteção respiratória'', ''Luvas'' e sequência padrão de paramentação/desparamentação')
on conflict (topic_id, position) do update set source_title = excluded.source_title, source_organization = excluded.source_organization,
  source_url = excluded.source_url, source_accessed_at = excluded.source_accessed_at, locator = excluded.locator;
insert into public.topic_sources (topic_id, position, source_title, source_organization, source_url, source_accessed_at, locator)
values ((select id from public.topics where slug = 'epi-paramentacao-e-desparamentacao'), 1, 'Protocolo PRT.STGQ.008 — Medidas de precaução para prevenção de infecções relacionadas à assistência à saúde (v.3, 2024)', 'Ebserh — Hospital Universitário Júlio Bandeira (UFCG)', 'https://www.gov.br/hubrasil/pt-br/hospitais-universitarios/regiao-nordeste/hujb-ufcg/acesso-a-informacao/gestao-documental/superintendencia/copy_of_PRT.SVSSP.008MedidasDePrecauoParaPrevenoDeInfecesRelacionadaAssistnciaSade.pdf', '2026-10-03'::date, 'item 6.1')
on conflict (topic_id, position) do update set source_title = excluded.source_title, source_organization = excluded.source_organization,
  source_url = excluded.source_url, source_accessed_at = excluded.source_accessed_at, locator = excluded.locator;
insert into public.topic_sources (topic_id, position, source_title, source_organization, source_url, source_accessed_at, locator)
values ((select id from public.topics where slug = 'epi-paramentacao-e-desparamentacao'), 2, 'NR 32 — Segurança e Saúde no Trabalho em Serviços de Saúde (texto atualizado até a Portaria MTP nº 4.219/2022)', 'Ministério do Trabalho e Emprego', 'https://www.gov.br/trabalho-e-emprego/pt-br/acesso-a-informacao/participacao-social/conselhos-e-orgaos-colegiados/comissao-tripartite-partitaria-permanente/arquivos/normas-regulamentadoras/nr-32-atualizada-2022-2.pdf', '2026-10-03'::date, 'itens 32.2.4.6 e 32.2.4.7')
on conflict (topic_id, position) do update set source_title = excluded.source_title, source_organization = excluded.source_organization,
  source_url = excluded.source_url, source_accessed_at = excluded.source_accessed_at, locator = excluded.locator;
delete from public.topic_sources s where s.topic_id = (select id from public.topics where slug = 'epi-paramentacao-e-desparamentacao') and s.position >= 3
  and not exists (select 1 from public.questions x where x.source_id = s.id);
insert into public.visual_maps (topic_id, title, spec, status, last_reviewed_at)
values ((select id from public.topics where slug = 'epi-paramentacao-e-desparamentacao'), 'Colocar e tirar', '{"layout":"compare","center":"A ordem protege você","blocks":[{"title":"Paramentação","tone":"teal","icon":"⬇️","items":["1. Mãos","2. Avental","3. N95/PFF2","4. Gorro","5. Óculos","6. Protetor facial","7. Mãos","8. Luvas"]},{"title":"Desparamentação","tone":"rose","icon":"⬆️","items":["1. Luvas","2. Avental","3. Mãos","4. Protetor facial","5. Óculos","6. Gorro","7. Mãos","8. Máscara","9. Mãos"]}],"footnote":"Sequência padrão descrita na NT Anvisa 04/2020. Siga sempre o POP da sua instituição."}'::jsonb, 'published', '2026-10-03'::date)
on conflict (topic_id) do update set title = excluded.title, spec = excluded.spec, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'epi-paramentacao-e-desparamentacao'), 'bio-epi-1', 'Na sequência padrão de paramentação descrita pela Anvisa, o último equipamento a ser colocado é:', 'A sequência termina com higienizar as mãos e calçar as luvas, que chegam limpas ao contato com o paciente.', 'facil', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'epi-paramentacao-e-desparamentacao') and position = 0), 'paramentacao', 0, 'published', '2026-10-03'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'bio-epi-1');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-epi-1'), 'A', 'a máscara N95/PFF2.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-epi-1'), 'B', 'o avental.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-epi-1'), 'C', 'as luvas.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-epi-1'), 'D', 'o gorro.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'bio-epi-1') and label not in ('A', 'B', 'C', 'D');
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'epi-paramentacao-e-desparamentacao'), 'bio-epi-2', 'Na desparamentação, o primeiro equipamento a ser retirado é:', 'A sequência padrão começa retirando as luvas e o avental, peças mais contaminadas, e termina com a máscara.', 'facil', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'epi-paramentacao-e-desparamentacao') and position = 0), 'desparamentacao', 1, 'published', '2026-10-03'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'bio-epi-2');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-epi-2'), 'A', 'a máscara.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-epi-2'), 'B', 'as luvas.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-epi-2'), 'C', 'os óculos.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-epi-2'), 'D', 'o gorro.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'bio-epi-2') and label not in ('A', 'B', 'C', 'D');
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'epi-paramentacao-e-desparamentacao'), 'bio-epi-3', 'Sobre a retirada da máscara N95/PFF2, é correto afirmar:', 'A máscara é a última peça, retirada pelos elásticos sem tocar a parte interna. Se reutilizada, guarda-se em embalagem que não fique hermeticamente fechada.', 'media', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'epi-paramentacao-e-desparamentacao') and position = 0), 'desparamentacao', 2, 'published', '2026-10-03'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'bio-epi-3');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-epi-3'), 'A', 'deve ser a primeira peça retirada, para aliviar o desconforto.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-epi-3'), 'B', 'deve ser retirada pela parte frontal, com as mãos enluvadas.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-epi-3'), 'C', 'deve ser retirada pelos elásticos, sem tocar a parte interna, ao final da desparamentação.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-epi-3'), 'D', 'pode ser guardada em embalagem hermeticamente fechada para reuso.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'bio-epi-3') and label not in ('A', 'B', 'C', 'D');
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'epi-paramentacao-e-desparamentacao'), 'bio-epi-4', 'A máscara cirúrgica usada que ficou úmida deve ser:', 'Máscaras cirúrgicas são descartáveis, não podem ser limpas nem reutilizadas e perdem a capacidade de filtração quando úmidas.', 'facil', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'epi-paramentacao-e-desparamentacao') and position = 0), 'luvas-e-mascaras', 3, 'published', '2026-10-03'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'bio-epi-4');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-epi-4'), 'A', 'limpa com álcool 70% e reutilizada.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-epi-4'), 'B', 'seca ao ar e reutilizada no mesmo plantão.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-epi-4'), 'C', 'substituída por uma nova, limpa e seca.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-epi-4'), 'D', 'coberta por uma N95.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'bio-epi-4') and label not in ('A', 'B', 'C', 'D');
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'epi-paramentacao-e-desparamentacao'), 'bio-epi-5', 'Segundo a Nota Técnica Anvisa nº 04/2020, o uso de máscara cirúrgica sobreposta à N95/PFF2:', 'A NT orienta que o profissional não use máscara cirúrgica sobreposta à N95, pois não garante proteção de filtração ou de contaminação e desperdiça EPI.', 'media', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'epi-paramentacao-e-desparamentacao') and position = 0), 'luvas-e-mascaras', 4, 'published', '2026-10-03'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'bio-epi-5');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-epi-5'), 'A', 'é obrigatório em procedimentos geradores de aerossol.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-epi-5'), 'B', 'não deve ser feito, pois não garante proteção e desperdiça EPI.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-epi-5'), 'C', 'dobra a eficácia de filtração.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-epi-5'), 'D', 'substitui o teste de vedação.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'bio-epi-5') and label not in ('A', 'B', 'C', 'D');
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'epi-paramentacao-e-desparamentacao'), 'bio-epi-6', 'Sobre o uso de luvas em área de isolamento, é correto:', 'As luvas são retiradas dentro do quarto, com técnica correta, seguidas de higiene das mãos; jamais se sai do quarto de luvas, e a luva dupla não está indicada.', 'media', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'epi-paramentacao-e-desparamentacao') and position = 0), 'luvas-e-mascaras', 5, 'published', '2026-10-03'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'bio-epi-6');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-epi-6'), 'A', 'retirá-las no corredor, após fechar a porta do quarto.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-epi-6'), 'B', 'retirá-las ainda dentro do quarto e higienizar as mãos imediatamente.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-epi-6'), 'C', 'manter as mesmas luvas para o próximo paciente, se não houver sujidade.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-epi-6'), 'D', 'usar duas luvas para facilitar a desparamentação.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'bio-epi-6') and label not in ('A', 'B', 'C', 'D');
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'epi-paramentacao-e-desparamentacao'), 'bio-epi-7', 'Pela NR 32, em relação aos EPIs e às vestimentas usadas nas atividades, os trabalhadores:', 'O item 32.2.4.6.2 proíbe deixar o local de trabalho com os EPIs e as vestimentas usadas. A vestimenta deve ser fornecida sem ônus para o empregado.', 'media', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'epi-paramentacao-e-desparamentacao') and position = 0), 'visao-geral', 6, 'published', '2026-10-03'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'bio-epi-7');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-epi-7'), 'A', 'podem levá-los para lavar em casa.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-epi-7'), 'B', 'não devem deixar o local de trabalho com eles.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-epi-7'), 'C', 'podem usá-los no refeitório se estiverem limpos.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-epi-7'), 'D', 'devem comprá-los por conta própria.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'bio-epi-7') and label not in ('A', 'B', 'C', 'D');
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'epi-paramentacao-e-desparamentacao'), 'bio-epi-8', 'A máscara de proteção respiratória do tipo N95/PFF2 tem eficácia mínima de filtração de:', 'A NT descreve o respirador particulado com eficácia mínima na filtração de 95% de partículas de até 0,3 µm (N95, N99, N100, PFF2 ou PFF3).', 'dificil', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'epi-paramentacao-e-desparamentacao') and position = 0), 'numeros', 7, 'published', '2026-10-03'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'bio-epi-8');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-epi-8'), 'A', '50% das partículas de até 5 µm.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-epi-8'), 'B', '75% das partículas de até 1 µm.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-epi-8'), 'C', '95% das partículas de até 0,3 µm.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-epi-8'), 'D', '100% das partículas de qualquer tamanho.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'bio-epi-8') and label not in ('A', 'B', 'C', 'D');

-- tema: NR 32: segurança do trabalhador da saúde
insert into public.topics (category_id, slug, title, description, summary, key_points, sections, outline, reading_minutes, position, status, last_reviewed_at, review_notes)
values ((select id from public.categories where product_id = (select id from public.products where key = 'revisao-tecnico-enfermagem') and slug = 'biosseguranca'), 'nr-32-seguranca-do-trabalhador', 'NR 32: segurança do trabalhador da saúde', 'Risco biológico, classes de risco, o que o empregador deve vedar, perfurocortantes, vacinação e CAT.', 'A NR 32 estabelece diretrizes para proteger a segurança e a saúde dos trabalhadores dos serviços de saúde — qualquer edificação destinada à assistência à saúde e todas as ações de promoção, recuperação, assistência, pesquisa e ensino, em qualquer nível de complexidade. Risco biológico é a probabilidade da exposição ocupacional a agentes biológicos: microrganismos (geneticamente modificados ou não), culturas de células, parasitas, toxinas e príons, classificados no Anexo I em quatro classes de risco. O PGR identifica os agentes e avalia os locais; o PCMSO inclui o programa de vacinação e os procedimentos para exposição acidental. Toda ocorrência de acidente com risco biológico, com ou sem afastamento, exige emissão de CAT. O empregador deve vedar o uso de pias de trabalho para outros fins, o ato de fumar, o uso de adornos e o manuseio de lentes de contato nos postos de trabalho, o consumo e a guarda de alimentos nos postos e o uso de calçados abertos. A vestimenta é fornecida sem ônus e o trabalhador não deixa o local de trabalho com EPI e vestimentas usadas. Quem usa o perfurocortante é responsável pelo descarte, e são vedados o reencape e a desconexão manual de agulhas. Todo trabalhador recebe gratuitamente vacinação contra tétano, difteria, hepatite B e as previstas no PCMSO, registrada no prontuário; a recusa deve ser documentada.', array['Serviço de saúde = qualquer edificação de assistência + promoção, recuperação, pesquisa e ensino, em qualquer complexidade.', 'Agentes biológicos: microrganismos, culturas de células, parasitas, toxinas e príons — 4 classes de risco.', 'Acidente com risco biológico, com ou sem afastamento → CAT obrigatória.', 'Vedado: pias para outros fins, fumar, adornos, manusear lentes de contato, comer/beber e guardar alimentos nos postos, calçados abertos.', 'Vestimenta sem ônus; não sair do local de trabalho com EPI e vestimentas usadas.', 'Quem usa o perfurocortante descarta; vedados reencape e desconexão manual de agulhas.', 'Vacinação gratuita: tétano, difteria, hepatite B + PCMSO; registro no prontuário; recusa documentada.', 'Feridas ou lesões nos membros superiores: só trabalhar após avaliação médica com liberação.']::text[], '[{"id":"visao-geral","kind":"visao","title":"A NR que protege quem cuida","source":0,"blocks":[{"type":"text","text":"As NRs são normas do trabalho. A ==NR 32== é a dos ==serviços de saúde==: diz o que o empregador deve garantir e o que o trabalhador não pode fazer para reduzir a exposição a riscos biológicos, químicos e radiações. Em prova de técnico, o foco é o ==risco biológico==."},{"type":"definition","term":"Serviço de saúde (32.1.2)","text":"==Qualquer edificação== destinada à prestação de assistência à saúde da população e todas as ações de promoção, recuperação, assistência, pesquisa e ensino em saúde ==em qualquer nível de complexidade==."}]},{"id":"risco-biologico","kind":"conceito","title":"Risco biológico e agentes biológicos","source":0,"blocks":[{"type":"definition","term":"Risco biológico","text":"A ==probabilidade da exposição ocupacional== a agentes biológicos."},{"type":"definition","term":"Agentes biológicos","text":"Os ==microrganismos==, geneticamente modificados ou não; as ==culturas de células==; os ==parasitas==; as ==toxinas== e os ==príons==."}]},{"id":"classes-de-risco","kind":"classificacao","title":"As 4 classes de risco (Anexo I)","lead":"Sobe o risco individual, sobe a chance de disseminação, cai a chance de haver tratamento.","source":0,"blocks":[{"type":"compare","columns":["Risco individual","Disseminação na coletividade","Profilaxia/tratamento"],"rows":[{"label":"Classe 1","cells":["Baixo","Baixo; baixa probabilidade de causar doença","—"]},{"label":"Classe 2","cells":["Moderado","Baixa probabilidade","==Existem meios eficazes=="]},{"label":"Classe 3","cells":["Elevado","Com probabilidade de disseminação","==Nem sempre== existem"]},{"label":"Classe 4","cells":["Elevado","==Probabilidade elevada==; grande transmissibilidade","==Não existem== meios eficazes"]}]}]},{"id":"programas","kind":"etapas","title":"PGR, PCMSO e capacitação","source":0,"blocks":[{"type":"steps","items":[{"title":"PGR identifica e avalia","text":"Agentes mais prováveis (fontes, vias de transmissão, transmissibilidade, persistência) e os locais e atividades com possibilidade de exposição.","who":"servico"},{"title":"PCMSO vigia a saúde","text":"Reconhece os riscos, localiza as áreas, identifica nominalmente os expostos, faz vigilância médica e inclui o ==programa de vacinação== e as condutas em exposição acidental.","who":"servico"},{"title":"Capacitação antes e durante","text":"Antes do início das atividades e de forma continuada, ==durante a jornada==, por profissionais familiarizados com os riscos; comprovada por documento.","who":"servico"},{"title":"Instruções escritas","text":"Em linguagem acessível, entregues ao trabalhador mediante recibo.","who":"servico"}]}]},{"id":"vedacoes-e-deveres","kind":"tecnico","title":"O que é vedado e o que é dever no posto de trabalho","source":0,"blocks":[{"type":"dodont","do":["Usar vestimenta de trabalho adequada (fornecida sem ônus)","Descartar o perfurocortante que você mesmo usou","Comunicar imediatamente todo acidente ou incidente com possível exposição","Passar por avaliação médica antes de trabalhar com ferida ou lesão nos membros superiores","Usar o EPI disponível em número suficiente no posto"],"dont":["Usar pias de trabalho para fins diversos dos previstos","Fumar, usar adornos ou manusear lentes de contato no posto","Comer, beber ou guardar alimentos no posto de trabalho","Usar calçados abertos","Reencapar ou desconectar agulhas manualmente","Sair do local de trabalho com EPI e vestimentas usadas"]},{"type":"callout","variant":"lei","title":"Colchões e almofadados (32.2.4.13)","text":"Devem ter revestimento ==lavável e impermeável==, sem furos, rasgos, sulcos ou reentrâncias."}]},{"id":"vacinacao","kind":"cuidados","title":"Vacinação do trabalhador","source":0,"blocks":[{"type":"steps","items":[{"title":"Gratuita para todo trabalhador","text":"Imunização ativa contra ==tétano, difteria, hepatite B== e as estabelecidas no PCMSO.","who":"servico"},{"title":"Outras vacinas eficazes também","text":"Sempre que houver vacina eficaz contra agentes a que o trabalhador está exposto, fornecida gratuitamente.","who":"servico"},{"title":"Controle de eficácia e reforço","text":"Quando recomendado pelo Ministério da Saúde; a vacinação segue as recomendações do MS.","who":"servico"},{"title":"Informar e documentar a recusa","text":"O trabalhador é informado das vantagens, efeitos colaterais e riscos da recusa; a recusa fica documentada.","who":"servico"},{"title":"Registrar e comprovar","text":"Registro no prontuário clínico individual (NR 7) e comprovante entregue ao trabalhador.","who":"servico"}]}]},{"id":"numeros","kind":"numeros","title":"Números que caem","source":0,"blocks":[{"type":"numbers","items":[{"value":"4","label":"classes de risco dos agentes biológicos"},{"value":"3","label":"vacinas citadas nominalmente","note":"tétano, difteria, hepatite B"},{"value":"32.2.4.15","label":"item que veda reencape e desconexão manual de agulhas"},{"value":"5","label":"agentes biológicos","note":"microrganismos, culturas de células, parasitas, toxinas, príons"},{"value":"CAT","label":"em todo acidente com risco biológico","note":"com ou sem afastamento"}]}]},{"id":"caso","kind":"caso","title":"Situação-problema","source":0,"blocks":[{"type":"case","title":"Primeiro plantão","scenario":"No primeiro plantão, um técnico chega de sandália, com aliança e relógio, e deixa um lanche na bancada do posto de enfermagem. Ele ainda não recebeu nenhuma dose da vacina contra hepatite B.","question":"Quais pontos da NR 32 estão sendo descumpridos e de quem é a obrigação da vacina?","answer":"Calçado aberto, uso de adornos e guarda de alimento no posto são vedados; a vacinação contra hepatite B deve ser fornecida gratuitamente pelo empregador.","reasoning":["32.2.4.5 manda o empregador vedar calçados abertos, adornos e a guarda de alimentos fora do local próprio.","32.2.4.17.1: imunização gratuita contra tétano, difteria e hepatite B.","A vacinação é registrada no prontuário e o trabalhador recebe comprovante.","Se ele recusar, a recusa precisa ficar documentada."]}]},{"id":"como-a-banca-cobra","kind":"cobrado","title":"Como a banca cobra","source":0,"blocks":[{"type":"traps","items":[{"wrong":"A NR 32 vale só para hospitais.","right":"Vale para ==qualquer edificação== de assistência e ações de saúde ==em qualquer nível de complexidade==.","why":"A definição de serviço de saúde do item 32.1.2 é ampla de propósito."},{"wrong":"A CAT só é emitida se houver afastamento.","right":"CAT ==com ou sem afastamento==.","why":"O item 32.2.3.5 fala em toda ocorrência de acidente com risco biológico."},{"wrong":"O descarte do perfurocortante é responsabilidade do pessoal da limpeza.","right":"==Quem utiliza== o perfurocortante é responsável pelo descarte.","why":"Item 32.2.4.14 — evita que outra pessoa manipule agulha usada."},{"wrong":"A vacina contra hepatite B pode ser cobrada do trabalhador.","right":"É ==gratuita==, junto com tétano e difteria.","why":"Item 32.2.4.17.1."},{"wrong":"Adornos são permitidos se forem pequenos.","right":"O empregador deve ==vedar o uso de adornos== nos postos de trabalho.","why":"Item 32.2.4.5, b — não há exceção por tamanho."},{"wrong":"Na classe de risco 2 não existem meios eficazes de tratamento.","right":"Na classe 2 ==existem== meios eficazes; na classe 4 é que não existem.","why":"O Anexo I gradua: classe 2 existe, classe 3 nem sempre, classe 4 não existe."},{"wrong":"Trabalhador com ferimento na mão pode trabalhar de luvas sem avaliação.","right":"Só inicia após ==avaliação médica obrigatória== com documento de liberação.","why":"Item 32.2.4.4."}]}]},{"id":"conexoes","kind":"conexoes","title":"Conexões","blocks":[{"type":"links","items":[{"slug":"acidente-com-material-biologico","title":"Acidente com material biológico","why":"O passo a passo depois de uma exposição."},{"slug":"epi-paramentacao-e-desparamentacao","title":"EPI: paramentação e desparamentação","why":"Como usar o EPI que a NR obriga a fornecer."},{"slug":"residuos-de-servicos-de-saude-rdc-222","title":"Resíduos de serviços de saúde (RDC 222)","why":"A RDC também veda reencape e desconexão manual."}]}]}]'::jsonb, array['A NR que protege quem cuida', 'Risco biológico e agentes biológicos', 'As 4 classes de risco (Anexo I)', 'PGR, PCMSO e capacitação', 'O que é vedado e o que é dever no posto de trabalho', 'Vacinação do trabalhador', 'Números que caem', 'Situação-problema', 'Como a banca cobra', 'Conexões']::text[], 6, 3, 'published', '2026-10-03'::date, 'Padrão v2: cada seção foi escrita a partir do texto original da fonte, baixado e lido em 2026-10-03 (conferência automatizada durante o desenvolvimento). Revisão por enfermeiro(a) obrigatória antes da venda.')
on conflict (slug) do update set category_id = excluded.category_id, title = excluded.title, description = excluded.description,
  summary = excluded.summary, key_points = excluded.key_points, sections = excluded.sections, outline = excluded.outline,
  reading_minutes = excluded.reading_minutes, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at, review_notes = excluded.review_notes;
insert into public.topic_sources (topic_id, position, source_title, source_organization, source_url, source_accessed_at, locator)
values ((select id from public.topics where slug = 'nr-32-seguranca-do-trabalhador'), 0, 'NR 32 — Segurança e Saúde no Trabalho em Serviços de Saúde (texto atualizado até a Portaria MTP nº 4.219/2022)', 'Ministério do Trabalho e Emprego', 'https://www.gov.br/trabalho-e-emprego/pt-br/acesso-a-informacao/participacao-social/conselhos-e-orgaos-colegiados/comissao-tripartite-partitaria-permanente/arquivos/normas-regulamentadoras/nr-32-atualizada-2022-2.pdf', '2026-10-03'::date, 'itens 32.1, 32.2 e Anexo I')
on conflict (topic_id, position) do update set source_title = excluded.source_title, source_organization = excluded.source_organization,
  source_url = excluded.source_url, source_accessed_at = excluded.source_accessed_at, locator = excluded.locator;
delete from public.topic_sources s where s.topic_id = (select id from public.topics where slug = 'nr-32-seguranca-do-trabalhador') and s.position >= 1
  and not exists (select 1 from public.questions x where x.source_id = s.id);
insert into public.visual_maps (topic_id, title, spec, status, last_reviewed_at)
values ((select id from public.topics where slug = 'nr-32-seguranca-do-trabalhador'), 'NR 32 no dia a dia', '{"layout":"hub","center":"NR 32 — risco biológico","blocks":[{"title":"Proibido no posto","tone":"rose","icon":"⛔","items":["Fumar, adornos, lentes de contato","Comer, beber, guardar alimentos","Calçado aberto"]},{"title":"Perfurocortante","tone":"amber","icon":"💉","items":["Quem usa descarta","Sem reencape","Sem desconexão manual"]},{"title":"Vacinação gratuita","tone":"green","icon":"💪","items":["Tétano, difteria, hepatite B","Registro no prontuário","Recusa documentada"]},{"title":"Acidente","tone":"blue","icon":"📄","items":["Comunicar na hora","CAT com ou sem afastamento"]}]}'::jsonb, 'published', '2026-10-03'::date)
on conflict (topic_id) do update set title = excluded.title, spec = excluded.spec, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'nr-32-seguranca-do-trabalhador'), 'bio-nr32-1', 'De acordo com a NR 32, o empregador deve vedar nos postos de trabalho:', 'O item 32.2.4.5 manda vedar pias para outros fins, fumar, adornos, manusear lentes de contato, consumir e guardar alimentos nos postos e usar calçados abertos.', 'facil', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'nr-32-seguranca-do-trabalhador') and position = 0), 'vedacoes-e-deveres', 0, 'published', '2026-10-03'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'bio-nr32-1');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-nr32-1'), 'A', 'o uso de luvas de procedimento.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-nr32-1'), 'B', 'o uso de adornos, o ato de fumar e o consumo de alimentos e bebidas.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-nr32-1'), 'C', 'o uso de vestimenta de trabalho.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-nr32-1'), 'D', 'a higiene das mãos com preparação alcoólica.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'bio-nr32-1') and label not in ('A', 'B', 'C', 'D');
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'nr-32-seguranca-do-trabalhador'), 'bio-nr32-2', 'Segundo a NR 32, quanto ao manuseio de agulhas usadas:', 'O item 32.2.4.15 é literal: são vedados o reencape e a desconexão manual de agulhas.', 'facil', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'nr-32-seguranca-do-trabalhador') and position = 0), 'vedacoes-e-deveres', 1, 'published', '2026-10-03'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'bio-nr32-2');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-nr32-2'), 'A', 'o reencape é permitido se feito com uma só mão.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-nr32-2'), 'B', 'são vedados o reencape e a desconexão manual de agulhas.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-nr32-2'), 'C', 'a desconexão manual é obrigatória antes do descarte.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-nr32-2'), 'D', 'a equipe de limpeza deve recolher as agulhas soltas.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'bio-nr32-2') and label not in ('A', 'B', 'C', 'D');
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'nr-32-seguranca-do-trabalhador'), 'bio-nr32-3', 'A NR 32 determina que seja fornecido gratuitamente a todo trabalhador dos serviços de saúde programa de imunização ativa contra:', 'Item 32.2.4.17.1: tétano, difteria, hepatite B e os estabelecidos no PCMSO, gratuitamente.', 'facil', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'nr-32-seguranca-do-trabalhador') and position = 0), 'vacinacao', 2, 'published', '2026-10-03'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'bio-nr32-3');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-nr32-3'), 'A', 'sarampo, caxumba e rubéola apenas.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-nr32-3'), 'B', 'tétano, difteria, hepatite B e os estabelecidos no PCMSO.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-nr32-3'), 'C', 'influenza e covid-19 apenas.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-nr32-3'), 'D', 'hepatite C e HIV.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'bio-nr32-3') and label not in ('A', 'B', 'C', 'D');
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'nr-32-seguranca-do-trabalhador'), 'bio-nr32-4', 'Sobre a emissão da Comunicação de Acidente de Trabalho (CAT) em acidente com risco biológico, a NR 32 determina que ela seja emitida:', 'O item 32.2.3.5 exige CAT em toda ocorrência de acidente envolvendo riscos biológicos, com ou sem afastamento.', 'media', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'nr-32-seguranca-do-trabalhador') and position = 0), 'programas', 3, 'published', '2026-10-03'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'bio-nr32-4');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-nr32-4'), 'A', 'apenas quando houver afastamento superior a 15 dias.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-nr32-4'), 'B', 'em toda ocorrência, com ou sem afastamento do trabalhador.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-nr32-4'), 'C', 'somente se o paciente-fonte for positivo para HIV.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-nr32-4'), 'D', 'apenas a pedido do trabalhador.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'bio-nr32-4') and label not in ('A', 'B', 'C', 'D');
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'nr-32-seguranca-do-trabalhador'), 'bio-nr32-5', 'Pela NR 32, a responsabilidade pelo descarte do material perfurocortante é:', 'Item 32.2.4.14: os trabalhadores que utilizarem objetos perfurocortantes devem ser os responsáveis pelo seu descarte.', 'media', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'nr-32-seguranca-do-trabalhador') and position = 0), 'vedacoes-e-deveres', 4, 'published', '2026-10-03'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'bio-nr32-5');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-nr32-5'), 'A', 'do serviço de higienização.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-nr32-5'), 'B', 'do enfermeiro responsável pelo setor.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-nr32-5'), 'C', 'do trabalhador que utilizou o objeto.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-nr32-5'), 'D', 'da Comissão de Controle de Infecção.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'bio-nr32-5') and label not in ('A', 'B', 'C', 'D');
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'nr-32-seguranca-do-trabalhador'), 'bio-nr32-6', 'No Anexo I da NR 32, a classe de risco que reúne agentes com risco individual elevado, probabilidade elevada de disseminação e sem meios eficazes de profilaxia ou tratamento é a:', 'Classe 4: risco individual elevado, probabilidade elevada de disseminação, grande transmissibilidade e inexistência de meios eficazes de profilaxia ou tratamento.', 'dificil', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'nr-32-seguranca-do-trabalhador') and position = 0), 'classes-de-risco', 5, 'published', '2026-10-03'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'bio-nr32-6');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-nr32-6'), 'A', 'classe 1.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-nr32-6'), 'B', 'classe 2.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-nr32-6'), 'C', 'classe 3.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-nr32-6'), 'D', 'classe 4.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'bio-nr32-6') and label not in ('A', 'B', 'C', 'D');
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'nr-32-seguranca-do-trabalhador'), 'bio-nr32-7', 'Para a NR 32, são considerados agentes biológicos:', 'Item 32.2.1.1: microrganismos (geneticamente modificados ou não), culturas de células, parasitas, toxinas e príons.', 'media', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'nr-32-seguranca-do-trabalhador') and position = 0), 'risco-biologico', 6, 'published', '2026-10-03'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'bio-nr32-7');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-nr32-7'), 'A', 'apenas bactérias e vírus.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-nr32-7'), 'B', 'microrganismos, culturas de células, parasitas, toxinas e príons.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-nr32-7'), 'C', 'somente agentes transmitidos pelo sangue.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-nr32-7'), 'D', 'produtos químicos e radiações ionizantes.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'bio-nr32-7') and label not in ('A', 'B', 'C', 'D');
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'nr-32-seguranca-do-trabalhador'), 'bio-nr32-8', 'Se um trabalhador recusar a vacinação oferecida, a NR 32 determina que o empregador:', 'Item 32.2.4.17.5: o trabalhador deve ser informado das vantagens, efeitos colaterais e riscos da falta ou recusa, e o empregador guarda documento comprobatório à disposição da inspeção.', 'dificil', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'nr-32-seguranca-do-trabalhador') and position = 0), 'vacinacao', 7, 'published', '2026-10-03'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'bio-nr32-8');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-nr32-8'), 'A', 'demita o trabalhador por justa causa.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-nr32-8'), 'B', 'informe vantagens, efeitos colaterais e riscos da recusa e guarde documento comprobatório.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-nr32-8'), 'C', 'aplique a vacina mesmo assim.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-nr32-8'), 'D', 'transfira o trabalhador para a área administrativa sem registro.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'bio-nr32-8') and label not in ('A', 'B', 'C', 'D');

-- tema: Acidente com material biológico
insert into public.topics (category_id, slug, title, description, summary, key_points, sections, outline, reading_minutes, position, status, last_reviewed_at, review_notes)
values ((select id from public.categories where product_id = (select id from public.products where key = 'revisao-tecnico-enfermagem') and slug = 'biosseguranca'), 'acidente-com-material-biologico', 'Acidente com material biológico', 'Cuidados imediatos com a área exposta, como avaliar o risco, notificação (CAT e Sinan) e prazos da profilaxia.', 'O protocolo do Ministério da Saúde sobre exposição a materiais biológicos (2006) orienta a conduta após acidentes de trabalho com sangue e outros fluidos. O risco depende do tipo de acidente, da gravidade, da presença e do volume de sangue e da condição do paciente-fonte: após exposição percutânea a sangue contaminado, o risco de infecção pelo HIV é de aproximadamente 0,3% e, após exposição de mucosa, 0,09%; para hepatite B varia de 6% a 30%, podendo chegar a 60%; para hepatite C, cerca de 1,8%. Os cuidados imediatos são lavar o local com água e sabão nas exposições percutâneas ou cutâneas e lavar exaustivamente com água ou soro fisiológico nas exposições de mucosa. Não há evidência de que antissépticos ou espremer o ferimento reduzam o risco; procedimentos que aumentem a área exposta (cortes, injeções locais) e soluções irritantes (éter, glutaraldeído, hipoclorito) são contraindicados. Avalia-se o material (sangue; fluidos potencialmente infectantes como sêmen, secreção vaginal, liquor e líquidos sinovial, pleural, peritoneal, pericárdico e amniótico), o tipo de exposição (percutânea, mucosa, pele não íntegra) e a fonte. O acidente é registrado em CAT e notificado no Sinan; a NR 32 exige comunicação imediata e CAT com ou sem afastamento. Quando indicada, a profilaxia pós-exposição deve começar o mais rápido possível — idealmente nas primeiras duas horas, com prazo máximo de 72 horas — e o acompanhamento do acidentado dura seis meses.', array['Percutânea ou pele: lavar com água e sabão. Mucosa: lavar exaustivamente com água ou soro fisiológico.', 'Não espremer, não cortar, não injetar no local; não usar éter, glutaraldeído ou hipoclorito.', 'Antisséptico não reduz comprovadamente o risco, mas não é contraindicado.', 'Risco HIV: ~0,3% percutânea e ~0,09% mucosa. Hepatite B: 6% a 30% (até 60%). Hepatite C: ~1,8%.', 'Avaliar material, tipo de exposição e situação da fonte (conhecida ou desconhecida).', 'Notificar: CAT + ficha do Sinan; comunicar imediatamente a chefia (NR 32).', 'PEP: idealmente nas primeiras 2 horas, no máximo até 72 horas (protocolo de 2006).', 'Acompanhamento do acidentado: 6 meses.']::text[], '[{"id":"visao-geral","kind":"visao","title":"Os primeiros minutos importam","source":0,"blocks":[{"type":"text","text":"Acidente com agulha, bisturi ou respingo em mucosa expõe o profissional a HIV e hepatites B e C. A conduta tem ordem: ==cuidar do local, comunicar, avaliar o risco e acompanhar==. A decisão sobre profilaxia é médica; o técnico precisa saber o que fazer na hora e o que ==não== fazer."},{"type":"cards","items":[{"title":"Risco variável","text":"Depende do tipo de acidente, gravidade, tamanho da lesão, presença e volume de sangue e condição do paciente-fonte.","icon":"⚖️","tone":"slate"},{"title":"Subnotificação","text":"O protocolo aponta que a falta de registro e notificação compromete a prevenção.","icon":"📉","tone":"rose"}]}]},{"id":"cuidados-imediatos","kind":"etapas","title":"Cuidados imediatos com a área exposta","source":0,"blocks":[{"type":"steps","items":[{"title":"Pele ou ferimento percutâneo: lavar com água e sabão","who":"tecnico","why":"Remove o material biológico do local o mais rápido possível."},{"title":"Mucosa (olhos, nariz, boca): lavar exaustivamente com água ou soro fisiológico","who":"tecnico"},{"title":"Não aumentar a área exposta","text":"Nada de cortes ou injeções locais.","why":"Ampliar a lesão aumenta o contato do sangue com o tecido."},{"title":"Não usar soluções irritantes","text":"Éter, glutaraldeído, hipoclorito de sódio são contraindicados."},{"title":"Comunicar imediatamente a chefia","text":"E o serviço de segurança e saúde do trabalho e a CIPA, quando houver (NR 32).","who":"tecnico"}]},{"type":"callout","variant":"atencao","title":"Espremer ou passar antisséptico?","text":"==Não há evidência== de que espremer o ferimento ou usar antisséptico reduza o risco. O antisséptico ==não é contraindicado==; espremer, cortar e soluções irritantes não fazem parte da conduta."}]},{"id":"avaliar-risco","kind":"classificacao","title":"Como o risco é avaliado","source":0,"blocks":[{"type":"compare","columns":["O que se avalia","Categorias"],"rows":[{"label":"Tipo de exposição","cells":["Como ocorreu","==Percutânea== (agulha, bisturi, vidraria); ==mucosa== (respingo em olhos, nariz, boca, genitália); ==pele não íntegra== (dermatite, ferida aberta, mordedura com sangue)"]},{"label":"Material","cells":["O que tocou","==Sangue==; fluidos potencialmente infectantes (sêmen, secreção vaginal, liquor, líquidos sinovial, pleural, peritoneal, pericárdico, amniótico)"]},{"label":"Fluidos de baixo risco","cells":["Exceção","Suor, lágrima, fezes, urina e saliva — ==exceto se contaminados com sangue=="]},{"label":"Fonte","cells":["De quem veio","Conhecida (com ou sem sorologia) ou desconhecida (ex.: agulha no lixo)"]}]},{"type":"callout","variant":"dica","title":"Mordedura","text":"Na mordedura humana com sangue, ==tanto quem mordeu quanto quem foi mordido== devem ser avaliados."}]},{"id":"notificacao-e-seguimento","kind":"tecnico","title":"Notificação, orientação e seguimento","source":0,"blocks":[{"type":"steps","items":[{"title":"Registrar em CAT","text":"Comunicação de Acidente de Trabalho — com ou sem afastamento (NR 32).","who":"servico"},{"title":"Notificar no Sinan","text":"Ficha de notificação do acidente com material biológico.","who":"servico"},{"title":"Orientar o acidentado","text":"Sobre o risco, possível profilaxia, consentimento para sorologias, prevenção da transmissão secundária e apoio emocional.","who":"equipe"},{"title":"Comprometer com o acompanhamento","text":"Seguimento por ==seis meses==; relatar de imediato sintomas como linfonodos aumentados, manchas na pele, dor de garganta ou quadro gripal.","who":"equipe"}]},{"type":"callout","variant":"lei","title":"Profilaxia pós-exposição (PEP)","text":"Quando indicada, deve começar ==o mais rápido possível, idealmente nas primeiras 2 horas==, com prazo máximo de ==72 horas==; a duração descrita é de 28 dias. A indicação e o esquema são definidos pela equipe médica conforme o protocolo vigente."}]},{"id":"numeros","kind":"numeros","title":"Números que caem","source":0,"blocks":[{"type":"numbers","items":[{"value":"0,3%","label":"risco de HIV após exposição percutânea a sangue contaminado"},{"value":"0,09%","label":"risco de HIV após exposição de mucosa"},{"value":"6–30%","label":"risco de hepatite B","note":"pode chegar a 60%, conforme a fonte"},{"value":"1,8%","label":"risco de hepatite C após acidente percutâneo","note":"variação de 0 a 7%"},{"value":"2 h","label":"início ideal da PEP"},{"value":"72 h","label":"prazo máximo para iniciar a PEP"},{"value":"6 meses","label":"acompanhamento do acidentado"}]}]},{"id":"caso","kind":"caso","title":"Situação-problema","source":0,"blocks":[{"type":"case","title":"Agulha após a punção","scenario":"Logo após puncionar um acesso venoso, o técnico se fere com a agulha usada no dedo. Um colega sugere espremer bem o dedo e passar hipoclorito.","question":"Qual é a conduta correta nos primeiros minutos?","answer":"Lavar o local com água e sabão, não espremer nem usar hipoclorito, comunicar imediatamente a chefia para avaliação do risco, CAT e notificação.","reasoning":["Exposição percutânea → lavagem com água e sabão.","Espremer não tem evidência de benefício; hipoclorito é solução irritante contraindicada.","A comunicação imediata permite avaliar a fonte e, se indicada, iniciar a PEP idealmente em até 2 horas.","CAT com ou sem afastamento e ficha do Sinan registram o acidente."]}]},{"id":"como-a-banca-cobra","kind":"cobrado","title":"Como a banca cobra","source":0,"blocks":[{"type":"traps","items":[{"wrong":"Após o acidente percutâneo, deve-se espremer o local para expulsar o sangue.","right":"==Não há evidência== de benefício em espremer; lavar com água e sabão.","why":"O protocolo cita a expressão do ferimento entre as medidas sem evidência."},{"wrong":"Respingo no olho deve ser lavado com hipoclorito diluído.","right":"Mucosa: lavar exaustivamente com ==água ou soro fisiológico==.","why":"Hipoclorito, éter e glutaraldeído são soluções irritantes contraindicadas."},{"wrong":"O antisséptico é contraindicado no local do acidente.","right":"Antisséptico ==não é contraindicado==, embora não reduza comprovadamente o risco.","why":"Pegadinha clássica: ''sem evidência de benefício'' é diferente de ''contraindicado''."},{"wrong":"O risco de HIV após acidente percutâneo é de cerca de 3%.","right":"É de aproximadamente ==0,3%==.","why":"A banca move a vírgula; após mucosa o risco é ainda menor (0,09%)."},{"wrong":"Entre HIV, hepatite B e hepatite C, o maior risco ocupacional é o do HIV.","right":"O maior é o da ==hepatite B== (6% a 30%, até 60%).","why":"Por isso a vacinação contra hepatite B é obrigatória pela NR 32."},{"wrong":"A profilaxia pode ser iniciada em até 7 dias após o acidente.","right":"Idealmente em ==2 horas==; prazo máximo de ==72 horas==.","why":"O protocolo diz que a profilaxia parece ineficaz quando iniciada tardiamente."},{"wrong":"Saliva e urina são sempre fluidos de risco.","right":"Suor, lágrima, fezes, urina e saliva são ==de baixo risco, exceto se contaminados com sangue==.","why":"O risco depende da presença de sangue no fluido."}]}]},{"id":"conexoes","kind":"conexoes","title":"Conexões","blocks":[{"type":"links","items":[{"slug":"nr-32-seguranca-do-trabalhador","title":"NR 32: segurança do trabalhador da saúde","why":"CAT, comunicação imediata e vacinação contra hepatite B."},{"slug":"precaucoes-padrao-e-especificas","title":"Precauções padrão e específicas","why":"As barreiras que evitam o acidente."},{"slug":"residuos-de-servicos-de-saude-rdc-222","title":"Resíduos de serviços de saúde (RDC 222)","why":"Caixa de perfurocortante até 3/4 da capacidade."}]}]}]'::jsonb, array['Os primeiros minutos importam', 'Cuidados imediatos com a área exposta', 'Como o risco é avaliado', 'Notificação, orientação e seguimento', 'Números que caem', 'Situação-problema', 'Como a banca cobra', 'Conexões']::text[], 6, 4, 'published', '2026-10-03'::date, 'Padrão v2: cada seção foi escrita a partir do texto original da fonte, baixado e lido em 2026-10-03 (conferência automatizada durante o desenvolvimento). Revisão por enfermeiro(a) obrigatória antes da venda. Prazos e duração da PEP são do protocolo de 2006; conferir contra o PCDT de PEP vigente (2024) na revisão humana. Sintomas de soroconversão parafraseados do texto (''linfoadenopatia, rash, dor de garganta, sintomas de gripe'').')
on conflict (slug) do update set category_id = excluded.category_id, title = excluded.title, description = excluded.description,
  summary = excluded.summary, key_points = excluded.key_points, sections = excluded.sections, outline = excluded.outline,
  reading_minutes = excluded.reading_minutes, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at, review_notes = excluded.review_notes;
insert into public.topic_sources (topic_id, position, source_title, source_organization, source_url, source_accessed_at, locator)
values ((select id from public.topics where slug = 'acidente-com-material-biologico'), 0, 'Exposição a materiais biológicos — Protocolo de complexidade diferenciada (Saúde do Trabalhador, 2006)', 'Ministério da Saúde', 'https://bvsms.saude.gov.br/bvs/publicacoes/protocolo_expos_mat_biologicos.pdf', '2026-10-03'::date, 'capítulos 4, 5.1 e 5.2 e indicação de PPE')
on conflict (topic_id, position) do update set source_title = excluded.source_title, source_organization = excluded.source_organization,
  source_url = excluded.source_url, source_accessed_at = excluded.source_accessed_at, locator = excluded.locator;
insert into public.topic_sources (topic_id, position, source_title, source_organization, source_url, source_accessed_at, locator)
values ((select id from public.topics where slug = 'acidente-com-material-biologico'), 1, 'NR 32 — Segurança e Saúde no Trabalho em Serviços de Saúde (texto atualizado até a Portaria MTP nº 4.219/2022)', 'Ministério do Trabalho e Emprego', 'https://www.gov.br/trabalho-e-emprego/pt-br/acesso-a-informacao/participacao-social/conselhos-e-orgaos-colegiados/comissao-tripartite-partitaria-permanente/arquivos/normas-regulamentadoras/nr-32-atualizada-2022-2.pdf', '2026-10-03'::date, 'itens 32.2.3.5 e 32.2.4.11')
on conflict (topic_id, position) do update set source_title = excluded.source_title, source_organization = excluded.source_organization,
  source_url = excluded.source_url, source_accessed_at = excluded.source_accessed_at, locator = excluded.locator;
delete from public.topic_sources s where s.topic_id = (select id from public.topics where slug = 'acidente-com-material-biologico') and s.position >= 2
  and not exists (select 1 from public.questions x where x.source_id = s.id);
insert into public.visual_maps (topic_id, title, spec, status, last_reviewed_at)
values ((select id from public.topics where slug = 'acidente-com-material-biologico'), 'Depois do acidente', '{"layout":"flow","center":"Exposição a material biológico","blocks":[{"title":"1. Cuidar do local","tone":"rose","icon":"🚿","items":["Água e sabão (pele/percutânea)","Água ou soro (mucosa)","Não espremer nem cortar"]},{"title":"2. Comunicar","tone":"amber","icon":"📣","items":["Chefia imediatamente","CAT + Sinan"]},{"title":"3. Avaliar","tone":"blue","icon":"🔎","items":["Material e tipo de exposição","Situação da fonte"]},{"title":"4. Acompanhar","tone":"green","icon":"📅","items":["PEP: ideal até 2 h, máx. 72 h","Seguimento por 6 meses"]}],"footnote":"Prazos do protocolo MS 2006. A indicação da profilaxia é médica, conforme o PCDT vigente."}'::jsonb, 'published', '2026-10-03'::date)
on conflict (topic_id) do update set title = excluded.title, spec = excluded.spec, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'acidente-com-material-biologico'), 'bio-acid-1', 'Após se ferir com uma agulha usada, o primeiro cuidado com a área exposta, segundo o Ministério da Saúde, é:', 'Em exposição percutânea ou cutânea, lava-se o local com água e sabão. Espremer não tem evidência; cortes e soluções irritantes são contraindicados.', 'facil', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'acidente-com-material-biologico') and position = 0), 'cuidados-imediatos', 0, 'published', '2026-10-03'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'bio-acid-1');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-acid-1'), 'A', 'espremer o local até sangrar bastante.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-acid-1'), 'B', 'lavar o local com água e sabão.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-acid-1'), 'C', 'aplicar hipoclorito de sódio.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-acid-1'), 'D', 'fazer um pequeno corte para drenar.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'bio-acid-1') and label not in ('A', 'B', 'C', 'D');
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'acidente-com-material-biologico'), 'bio-acid-2', 'Em caso de respingo de sangue nos olhos, a conduta imediata recomendada é:', 'Nas exposições de mucosa, deve-se lavar exaustivamente com água ou solução salina fisiológica.', 'facil', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'acidente-com-material-biologico') and position = 0), 'cuidados-imediatos', 1, 'published', '2026-10-03'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'bio-acid-2');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-acid-2'), 'A', 'lavar exaustivamente com água ou soro fisiológico.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-acid-2'), 'B', 'aplicar colírio antibiótico.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-acid-2'), 'C', 'lavar com álcool 70%.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-acid-2'), 'D', 'aguardar avaliação médica antes de lavar.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'bio-acid-2') and label not in ('A', 'B', 'C', 'D');
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'acidente-com-material-biologico'), 'bio-acid-3', 'Sobre o uso de antisséptico no local de um acidente percutâneo, o protocolo afirma que:', 'Não há evidência de que antissépticos ou a expressão do ferimento reduzam a transmissão, mas o antisséptico não é contraindicado. Hipoclorito é solução irritante contraindicada.', 'media', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'acidente-com-material-biologico') and position = 0), 'cuidados-imediatos', 2, 'published', '2026-10-03'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'bio-acid-3');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-acid-3'), 'A', 'é obrigatório e substitui a lavagem.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-acid-3'), 'B', 'é contraindicado em qualquer situação.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-acid-3'), 'C', 'não há evidência de que reduza o risco, mas não é contraindicado.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-acid-3'), 'D', 'deve ser usado o hipoclorito por ser mais potente.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'bio-acid-3') and label not in ('A', 'B', 'C', 'D');
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'acidente-com-material-biologico'), 'bio-acid-4', 'O risco aproximado de infecção pelo HIV após exposição ocupacional percutânea com sangue contaminado é de:', 'O protocolo cita risco de aproximadamente 0,3% após exposição percutânea e de 0,09% após exposição de mucosa.', 'media', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'acidente-com-material-biologico') and position = 0), 'numeros', 3, 'published', '2026-10-03'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'bio-acid-4');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-acid-4'), 'A', '0,03%.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-acid-4'), 'B', '0,3%.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-acid-4'), 'C', '3%.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-acid-4'), 'D', '30%.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'bio-acid-4') and label not in ('A', 'B', 'C', 'D');
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'acidente-com-material-biologico'), 'bio-acid-5', 'Entre os vírus abaixo, o que apresenta o maior risco de transmissão após exposição ocupacional, segundo o protocolo, é o:', 'Hepatite B: 6% a 30%, podendo chegar a 60%. Hepatite C: cerca de 1,8%. HIV: cerca de 0,3% (percutânea).', 'dificil', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'acidente-com-material-biologico') and position = 0), 'numeros', 4, 'published', '2026-10-03'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'bio-acid-5');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-acid-5'), 'A', 'HIV.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-acid-5'), 'B', 'vírus da hepatite C.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-acid-5'), 'C', 'vírus da hepatite B.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-acid-5'), 'D', 'os três têm o mesmo risco.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'bio-acid-5') and label not in ('A', 'B', 'C', 'D');
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'acidente-com-material-biologico'), 'bio-acid-6', 'Quando indicada, a profilaxia pós-exposição ao HIV deve ser iniciada:', 'O protocolo recomenda iniciar idealmente nas primeiras duas horas, com prazo máximo de até 72 horas após o acidente.', 'media', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'acidente-com-material-biologico') and position = 0), 'notificacao-e-seguimento', 5, 'published', '2026-10-03'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'bio-acid-6');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-acid-6'), 'A', 'somente após o resultado da sorologia do paciente-fonte, em até 30 dias.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-acid-6'), 'B', 'o mais rápido possível, idealmente nas primeiras duas horas, com prazo máximo de 72 horas.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-acid-6'), 'C', 'após uma semana, para confirmar a soroconversão.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-acid-6'), 'D', 'apenas se o acidentado apresentar sintomas.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'bio-acid-6') and label not in ('A', 'B', 'C', 'D');
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'acidente-com-material-biologico'), 'bio-acid-7', 'São considerados fluidos potencialmente NÃO infectantes, exceto se contaminados com sangue:', 'Suor, lágrima, fezes, urina e saliva são potencialmente não infectantes, salvo se contaminados com sangue. Os demais da lista são potencialmente infectantes.', 'media', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'acidente-com-material-biologico') and position = 0), 'avaliar-risco', 6, 'published', '2026-10-03'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'bio-acid-7');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-acid-7'), 'A', 'sêmen e secreção vaginal.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-acid-7'), 'B', 'liquor e líquido pleural.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-acid-7'), 'C', 'suor, lágrima, fezes, urina e saliva.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-acid-7'), 'D', 'líquido amniótico e pericárdico.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'bio-acid-7') and label not in ('A', 'B', 'C', 'D');
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'acidente-com-material-biologico'), 'bio-acid-8', 'O registro do acidente com material biológico deve ser feito por meio de:', 'O protocolo indica registro em CAT e preenchimento da ficha do Sinan; a NR 32 exige CAT com ou sem afastamento.', 'facil', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'acidente-com-material-biologico') and position = 0), 'notificacao-e-seguimento', 7, 'published', '2026-10-03'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'bio-acid-8');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-acid-8'), 'A', 'apenas anotação no prontuário do paciente-fonte.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-acid-8'), 'B', 'CAT e ficha de notificação do Sinan.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-acid-8'), 'C', 'boletim de ocorrência policial.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-acid-8'), 'D', 'registro verbal à chefia, sem documento.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'bio-acid-8') and label not in ('A', 'B', 'C', 'D');
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'acidente-com-material-biologico'), 'bio-acid-9', 'O acompanhamento clínico-laboratorial do profissional acidentado, segundo o protocolo, deve durar:', 'Entre as orientações está comprometer o acidentado com seu acompanhamento durante seis meses.', 'media', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'acidente-com-material-biologico') and position = 0), 'notificacao-e-seguimento', 8, 'published', '2026-10-03'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'bio-acid-9');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-acid-9'), 'A', '7 dias.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-acid-9'), 'B', '30 dias.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-acid-9'), 'C', '6 meses.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-acid-9'), 'D', '5 anos.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'bio-acid-9') and label not in ('A', 'B', 'C', 'D');

-- tema: Resíduos de serviços de saúde (RDC 222)
insert into public.topics (category_id, slug, title, description, summary, key_points, sections, outline, reading_minutes, position, status, last_reviewed_at, review_notes)
values ((select id from public.categories where product_id = (select id from public.products where key = 'revisao-tecnico-enfermagem') and slug = 'biosseguranca'), 'residuos-de-servicos-de-saude-rdc-222', 'Resíduos de serviços de saúde (RDC 222)', 'Os grupos A a E com exemplos, saco vermelho × branco leitoso, limites de 2/3 e 3/4, símbolos e perfurocortantes.', 'A RDC Anvisa nº 222/2018 regulamenta o gerenciamento dos resíduos de serviços de saúde (RSS), que são classificados em cinco grupos no momento e local da geração. Grupo A: possível presença de agentes biológicos com risco de infecção (subgrupos A1 a A5). Grupo B: produtos químicos com risco à saúde ou ao ambiente, como produtos farmacêuticos, saneantes e reveladores. Grupo C: rejeitos radioativos. Grupo D: resíduos sem risco biológico, químico ou radiológico, equiparados aos domiciliares — fralda, papel sanitário, resto alimentar, equipo de soro, luvas sem contato com sangue ou fluidos. Grupo E: perfurocortantes ou escarificantes, como agulhas, escalpes, ampolas de vidro, lâminas de bisturi e lancetas. Os sacos respeitam o limite de 2/3 da capacidade, sem esvaziamento ou reaproveitamento; os do grupo A são trocados ao atingir 2/3 ou a cada 48 horas (24 horas se de fácil putrefação). O grupo A que exige tratamento vai em saco vermelho; o que não exige, e os rejeitos já tratados, em saco branco leitoso. Os perfurocortantes vão em recipiente rígido, com tampa, resistente à punctura, ruptura e vazamento, substituído ao atingir 3/4 da capacidade; são proibidos o esvaziamento manual, o reaproveitamento, o reencape e a desconexão manual de agulhas. A identificação usa o símbolo de risco biológico para os grupos A e E, o símbolo do risco químico para o B e o trifólio da radiação para o C.', array['A = biológico · B = químico · C = radioativo · D = comum · E = perfurocortante.', 'Sacos: no máximo 2/3 da capacidade; proibido esvaziar ou reaproveitar.', 'Grupo A: trocar a 2/3 ou a cada 48 h; de fácil putrefação, a cada 24 h.', 'Saco vermelho: grupo A que precisa de tratamento. Branco leitoso: grupo A sem tratamento obrigatório e rejeitos tratados.', 'Perfurocortante: recipiente rígido com tampa, trocado a 3/4 da capacidade; proibido esvaziar ou reaproveitar.', 'Proibidos reencape e desconexão manual de agulhas; separar seringa e agulha só com dispositivo de segurança.', 'Grupo D: fralda, papel sanitário, resto alimentar, equipo de soro, luvas sem sangue ou fluidos.', 'Identificação: A e E com símbolo de risco biológico; C com trifólio magenta em fundo amarelo; sacos do D não precisam de identificação.']::text[], '[{"id":"visao-geral","kind":"visao","title":"Classificar na hora certa","source":0,"blocks":[{"type":"text","text":"Todo resíduo é classificado ==no momento e no local da geração==, por quem o gerou. O técnico decide, na beira do leito, se a gaze vai para o saco do grupo A, se o equipo vai para o D e se a agulha vai para a caixa do E. Errar o grupo é o que a banca cobra."},{"type":"callout","variant":"lei","title":"PGRSS","text":"Todo serviço gerador deve ter o ==Plano de Gerenciamento dos Resíduos de Serviços de Saúde==, que descreve as ações de manejo, da geração à disposição final."}]},{"id":"grupos","kind":"classificacao","title":"Os cinco grupos, com exemplos","source":0,"blocks":[{"type":"compare","columns":["O que é","Exemplos que caem"],"rows":[{"label":"Grupo A","cells":["Possível presença de ==agentes biológicos== com risco de infecção","Bolsa de sangue rejeitada ou vencida; recipientes com ==sangue ou líquidos corpóreos na forma livre==; peças anatômicas; ==placenta== (A4); kits de linhas arteriais e endovenosas"]},{"label":"Grupo B","cells":["Produtos ==químicos== com risco à saúde ou ao ambiente","Produtos farmacêuticos; saneantes e desinfetantes; resíduos com metais pesados; reveladores e fixadores"]},{"label":"Grupo C","cells":["Rejeitos ==radioativos==","Material com radionuclídeo acima do limite da CNEN (medicina nuclear, radioterapia)"]},{"label":"Grupo D","cells":["Sem risco biológico, químico ou radiológico; ==equiparado ao domiciliar==","Fralda, papel sanitário, absorvente; gorro e máscara descartáveis; resto alimentar; ==equipo de soro==; luvas ==sem== contato com sangue ou fluidos; abaixador de língua"]},{"label":"Grupo E","cells":["==Perfurocortantes== ou escarificantes","Agulhas, escalpes, ==ampolas de vidro==, lâminas de bisturi e de barbear, lancetas, vidraria quebrada de laboratório"]}]},{"type":"cards","items":[{"title":"A3 — peças anatômicas","text":"Membros humanos; produto de fecundação sem sinais vitais com ==menos de 500 g, ou menos de 25 cm, ou menos de 20 semanas==, sem valor científico ou legal e sem requisição da família.","icon":"📋","tone":"rose"},{"title":"A5 — príons","text":"Órgãos, tecidos e fluidos de alta infectividade para príons e materiais que tiveram contato com eles.","icon":"⚠️","tone":"violet"}]}]},{"id":"acondicionamento","kind":"etapas","title":"Acondicionamento: sacos, coletores e prazos","source":0,"blocks":[{"type":"steps","items":[{"title":"Respeitar 2/3 da capacidade do saco","text":"E o limite de peso; ==proibido esvaziar ou reaproveitar== o saco.","why":"Saco cheio demais rompe e não fecha com segurança.","who":"equipe"},{"title":"Grupo A: trocar a 2/3 ou a cada 48 horas","text":"Independentemente do volume; ==24 horas== se for de fácil putrefação.","who":"equipe"},{"title":"Escolher a cor do saco do grupo A","text":"==Vermelho== quando houver obrigação de tratamento; ==branco leitoso== para o que não precisa de tratamento obrigatório e para os rejeitos já tratados."},{"title":"Coletor do saco","text":"Liso, lavável, resistente a punctura, ruptura, vazamento e tombamento, com ==tampa de abertura sem contato manual== e cantos arredondados."},{"title":"Líquidos e químicos","text":"Recipientes compatíveis, rígidos e estanques, com tampa e identificação."}]}]},{"id":"perfurocortantes","kind":"tecnico","title":"Perfurocortantes na prática do técnico","source":0,"blocks":[{"type":"dodont","do":["Descartar em recipiente identificado, rígido, com tampa, resistente à punctura, ruptura e vazamento","Trocar o recipiente a 3/4 da capacidade (ou conforme demanda ou fabricante)","Identificar todos os riscos presentes se o perfurocortante também tiver risco químico ou radioativo","Separar seringa e agulha apenas com dispositivo de segurança"],"dont":["Encher a caixa além de 3/4","Esvaziar a caixa manualmente ou reaproveitá-la","Reencapar a agulha","Desconectar a agulha manualmente"]},{"type":"callout","variant":"dica","title":"Seringa com agulha sem risco químico, biológico ou radiológico","text":"Não precisa de tratamento prévio antes da disposição final ambientalmente adequada (art. 89)."}]},{"id":"identificacao","kind":"cuidados","title":"Símbolos e identificação","source":0,"blocks":[{"type":"compare","columns":["Símbolo / rótulo","Inscrição"],"rows":[{"label":"Grupo A","cells":["==Risco biológico==, fundo branco, desenho e contornos pretos","==RESÍDUO INFECTANTE=="]},{"label":"Grupo B","cells":["Símbolo de ==risco químico== conforme a periculosidade (pode usar GHS)","Frase de risco associada"]},{"label":"Grupo C","cells":["==Trifólio== magenta ou púrpura em ==fundo amarelo==","MATERIAL RADIOATIVO, REJEITO RADIOATIVO ou RADIOATIVO"]},{"label":"Grupo D","cells":["Conforme o órgão de limpeza urbana","==Sacos não precisam ser identificados=="]},{"label":"Grupo E","cells":["==Risco biológico==, fundo branco, desenho e contorno pretos","==RESÍDUO PERFUROCORTANTE=="]}]},{"type":"callout","variant":"atencao","title":"Impressa, não adesivada","text":"A identificação dos sacos deve estar ==impressa==; é vedado o uso de adesivo. Ela também vai nos carros de coleta e nos locais de armazenamento."}]},{"id":"numeros","kind":"numeros","title":"Números que caem","source":0,"blocks":[{"type":"numbers","items":[{"value":"2/3","label":"limite de enchimento dos sacos"},{"value":"3/4","label":"limite do recipiente de perfurocortante"},{"value":"48 h","label":"troca máxima do saco do grupo A","note":"independentemente do volume"},{"value":"24 h","label":"troca do saco do grupo A de fácil putrefação"},{"value":"5","label":"grupos de resíduos","note":"A, B, C, D, E"},{"value":"500 g · 25 cm · 20 sem","label":"limites do produto de fecundação no subgrupo A3"}]}]},{"id":"caso","kind":"caso","title":"Situação-problema","source":0,"blocks":[{"type":"case","title":"Fim de uma punção venosa","scenario":"Após instalar o soro, o técnico tem nas mãos: a agulha da punção, a ampola de vidro do medicamento, o algodão usado na antissepsia, a embalagem do equipo e as luvas, que não tiveram contato com sangue.","question":"Para onde vai cada item?","answer":"Agulha e ampola de vidro → grupo E (recipiente rígido). Algodão da antissepsia, embalagem e luvas sem sangue → grupo D.","reasoning":["Agulhas e ampolas de vidro estão na lista do grupo E.","O Anexo I põe no grupo D o ''material utilizado em antissepsia e hemostasia de venóclises''.","Luvas de procedimento que não entraram em contato com sangue ou líquidos corpóreos são grupo D.","A agulha não é desconectada nem reencapada antes do descarte."]}]},{"id":"como-a-banca-cobra","kind":"cobrado","title":"Como a banca cobra","source":0,"blocks":[{"type":"traps","items":[{"wrong":"A caixa de perfurocortante deve ser trocada quando estiver cheia.","right":"Trocar ao atingir ==3/4== da capacidade.","why":"Encher até o topo aumenta o risco de acidente no fechamento."},{"wrong":"Os sacos de resíduo podem ser preenchidos até a boca.","right":"Limite de ==2/3== da capacidade.","why":"2/3 é para sacos; 3/4 é para a caixa de perfurocortante — a banca troca os dois."},{"wrong":"Ampola de vidro quebrada vai para o grupo D.","right":"Ampola de vidro é ==grupo E==.","why":"É escarificante: está na lista expressa do grupo E."},{"wrong":"Equipo de soro é sempre resíduo infectante (grupo A).","right":"Equipo de soro está listado no ==grupo D==.","why":"O Anexo I inclui o equipo de soro entre os resíduos equiparados aos domiciliares."},{"wrong":"O saco branco leitoso é para resíduos que precisam de tratamento.","right":"Precisa de tratamento → ==vermelho==. Sem tratamento obrigatório ou já tratado → branco leitoso.","why":"Arts. 15 e 16 da RDC 222."},{"wrong":"O saco do grupo A pode ficar até 72 horas se não estiver cheio.","right":"Trocar a 2/3 ou ==a cada 48 horas==.","why":"Art. 14: independentemente do volume; 24 h se de fácil putrefação."},{"wrong":"A identificação do saco pode ser feita com etiqueta adesiva.","right":"Deve estar ==impressa==; é vedado adesivo.","why":"Art. 22, § 3º."}]}]},{"id":"conexoes","kind":"conexoes","title":"Conexões","blocks":[{"type":"links","items":[{"slug":"nr-32-seguranca-do-trabalhador","title":"NR 32: segurança do trabalhador da saúde","why":"Também veda reencape e define quem descarta o perfurocortante."},{"slug":"acidente-com-material-biologico","title":"Acidente com material biológico","why":"O que fazer quando o descarte falha."},{"slug":"precaucoes-padrao-e-especificas","title":"Precauções padrão e específicas","why":"O descarte correto é parte da precaução padrão."}]}]}]'::jsonb, array['Classificar na hora certa', 'Os cinco grupos, com exemplos', 'Acondicionamento: sacos, coletores e prazos', 'Perfurocortantes na prática do técnico', 'Símbolos e identificação', 'Números que caem', 'Situação-problema', 'Como a banca cobra', 'Conexões']::text[], 7, 5, 'published', '2026-10-03'::date, 'Padrão v2: cada seção foi escrita a partir do texto original da fonte, baixado e lido em 2026-10-03 (conferência automatizada durante o desenvolvimento). Revisão por enfermeiro(a) obrigatória antes da venda.')
on conflict (slug) do update set category_id = excluded.category_id, title = excluded.title, description = excluded.description,
  summary = excluded.summary, key_points = excluded.key_points, sections = excluded.sections, outline = excluded.outline,
  reading_minutes = excluded.reading_minutes, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at, review_notes = excluded.review_notes;
insert into public.topic_sources (topic_id, position, source_title, source_organization, source_url, source_accessed_at, locator)
values ((select id from public.topics where slug = 'residuos-de-servicos-de-saude-rdc-222'), 0, 'RDC nº 222, de 28 de março de 2018 (boas práticas de gerenciamento dos resíduos de serviços de saúde)', 'Agência Nacional de Vigilância Sanitária (Anvisa)', 'https://bvsms.saude.gov.br/bvs/saudelegis/anvisa/2018/rdc0222_28_03_2018.pdf', '2026-10-03'::date, 'arts. 3º, 13 a 22, 86 a 89; Anexos I e II')
on conflict (topic_id, position) do update set source_title = excluded.source_title, source_organization = excluded.source_organization,
  source_url = excluded.source_url, source_accessed_at = excluded.source_accessed_at, locator = excluded.locator;
delete from public.topic_sources s where s.topic_id = (select id from public.topics where slug = 'residuos-de-servicos-de-saude-rdc-222') and s.position >= 1
  and not exists (select 1 from public.questions x where x.source_id = s.id);
insert into public.visual_maps (topic_id, title, spec, status, last_reviewed_at)
values ((select id from public.topics where slug = 'residuos-de-servicos-de-saude-rdc-222'), 'Os 5 grupos', '{"layout":"hub","center":"RDC 222/2018 — classificar na geração","blocks":[{"title":"A · Biológico","tone":"rose","icon":"🦠","items":["Possível agente biológico","Saco vermelho ou branco leitoso","Trocar a 2/3 ou 48 h"]},{"title":"B · Químico","tone":"orange","icon":"🧪","items":["Farmacêuticos, saneantes","Reveladores e fixadores"]},{"title":"C · Radioativo","tone":"violet","icon":"☢️","items":["Rejeito radioativo","Trifólio magenta, fundo amarelo"]},{"title":"D · Comum","tone":"slate","icon":"🗑️","items":["Equiparado ao domiciliar","Saco sem identificação"]},{"title":"E · Perfurocortante","tone":"amber","icon":"💉","items":["Recipiente rígido com tampa","Trocar a 3/4"]}]}'::jsonb, 'published', '2026-10-03'::date)
on conflict (topic_id) do update set title = excluded.title, spec = excluded.spec, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'residuos-de-servicos-de-saude-rdc-222'), 'bio-rss-1', 'Segundo a RDC nº 222/2018, agulhas, escalpes, ampolas de vidro e lâminas de bisturi pertencem ao grupo:', 'O grupo E reúne os perfurocortantes ou escarificantes: agulhas, escalpes, ampolas de vidro, lâminas de bisturi, lancetas e outros.', 'facil', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'residuos-de-servicos-de-saude-rdc-222') and position = 0), 'grupos', 0, 'published', '2026-10-03'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'bio-rss-1');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-rss-1'), 'A', 'A.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-rss-1'), 'B', 'B.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-rss-1'), 'C', 'D.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-rss-1'), 'D', 'E.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'bio-rss-1') and label not in ('A', 'B', 'C', 'D');
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'residuos-de-servicos-de-saude-rdc-222'), 'bio-rss-2', 'O recipiente de descarte de perfurocortantes deve ser substituído quando o nível de preenchimento atingir:', 'Art. 87: substituir conforme a demanda ou quando atingir 3/4 da capacidade, ou conforme o fabricante; proibidos esvaziamento manual e reaproveitamento.', 'facil', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'residuos-de-servicos-de-saude-rdc-222') and position = 0), 'perfurocortantes', 1, 'published', '2026-10-03'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'bio-rss-2');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-rss-2'), 'A', '1/2 da capacidade.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-rss-2'), 'B', '2/3 da capacidade.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-rss-2'), 'C', '3/4 da capacidade.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-rss-2'), 'D', 'a capacidade total.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'bio-rss-2') and label not in ('A', 'B', 'C', 'D');
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'residuos-de-servicos-de-saude-rdc-222'), 'bio-rss-3', 'Os sacos para acondicionamento de resíduos do grupo A devem ser substituídos:', 'Art. 14: a 2/3 da capacidade ou a cada 48 horas; os de fácil putrefação, no máximo a cada 24 horas.', 'media', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'residuos-de-servicos-de-saude-rdc-222') and position = 0), 'acondicionamento', 2, 'published', '2026-10-03'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'bio-rss-3');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-rss-3'), 'A', 'somente quando estiverem cheios.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-rss-3'), 'B', 'ao atingir 2/3 da capacidade ou a cada 48 horas, independentemente do volume.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-rss-3'), 'C', 'uma vez por semana.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-rss-3'), 'D', 'a cada 72 horas.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'bio-rss-3') and label not in ('A', 'B', 'C', 'D');
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'residuos-de-servicos-de-saude-rdc-222'), 'bio-rss-4', 'Fraldas, papel de uso sanitário, resto alimentar de paciente e equipo de soro são classificados pela RDC 222 no grupo:', 'O grupo D reúne resíduos sem risco biológico, químico ou radiológico, equiparados aos domiciliares, e o Anexo I lista esses itens.', 'media', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'residuos-de-servicos-de-saude-rdc-222') and position = 0), 'grupos', 3, 'published', '2026-10-03'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'bio-rss-4');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-rss-4'), 'A', 'A.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-rss-4'), 'B', 'B.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-rss-4'), 'C', 'D.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-rss-4'), 'D', 'E.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'bio-rss-4') and label not in ('A', 'B', 'C', 'D');
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'residuos-de-servicos-de-saude-rdc-222'), 'bio-rss-5', 'Os resíduos do grupo A que têm obrigação de tratamento devem ser acondicionados em saco:', 'Art. 16: quando houver obrigação de tratamento, saco vermelho. O branco leitoso é para o que não precisa de tratamento obrigatório e para os rejeitos tratados.', 'media', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'residuos-de-servicos-de-saude-rdc-222') and position = 0), 'acondicionamento', 4, 'published', '2026-10-03'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'bio-rss-5');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-rss-5'), 'A', 'preto.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-rss-5'), 'B', 'azul.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-rss-5'), 'C', 'vermelho.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-rss-5'), 'D', 'verde.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'bio-rss-5') and label not in ('A', 'B', 'C', 'D');
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'residuos-de-servicos-de-saude-rdc-222'), 'bio-rss-6', 'O grupo C (rejeitos radioativos) é identificado pelo:', 'Anexo II: trifólio magenta ou púrpura em fundo amarelo, com a expressão MATERIAL RADIOATIVO, REJEITO RADIOATIVO ou RADIOATIVO.', 'dificil', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'residuos-de-servicos-de-saude-rdc-222') and position = 0), 'identificacao', 5, 'published', '2026-10-03'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'bio-rss-6');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-rss-6'), 'A', 'símbolo de risco biológico em fundo branco.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-rss-6'), 'B', 'trifólio de cor magenta ou púrpura em rótulo de fundo amarelo.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-rss-6'), 'C', 'símbolo de reciclagem.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-rss-6'), 'D', 'rótulo vermelho com a palavra INFECTANTE.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'bio-rss-6') and label not in ('A', 'B', 'C', 'D');
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'residuos-de-servicos-de-saude-rdc-222'), 'bio-rss-7', 'Em relação aos sacos de acondicionamento de resíduos, a RDC 222 estabelece que:', 'Art. 13: respeitar limites de peso e 2/3 da capacidade; proibido esvaziar ou reaproveitar sacos.', 'media', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'residuos-de-servicos-de-saude-rdc-222') and position = 0), 'acondicionamento', 6, 'published', '2026-10-03'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'bio-rss-7');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-rss-7'), 'A', 'podem ser esvaziados e reaproveitados se estiverem íntegros.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-rss-7'), 'B', 'devem respeitar o limite de 2/3 da capacidade e é proibido esvaziá-los ou reaproveitá-los.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-rss-7'), 'C', 'devem ser enchidos até a capacidade máxima para economia.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-rss-7'), 'D', 'dispensam coletor com tampa.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'bio-rss-7') and label not in ('A', 'B', 'C', 'D');
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'residuos-de-servicos-de-saude-rdc-222'), 'bio-rss-8', 'Sobre o descarte do conjunto seringa e agulha, a RDC 222 permite:', 'Art. 89, parágrafo único: é permitida a separação com dispositivo de segurança; vedados a desconexão e o reencape manual.', 'media', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'residuos-de-servicos-de-saude-rdc-222') and position = 0), 'perfurocortantes', 7, 'published', '2026-10-03'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'bio-rss-8');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-rss-8'), 'A', 'reencapar a agulha antes do descarte.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-rss-8'), 'B', 'desconectar a agulha manualmente.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-rss-8'), 'C', 'separar seringa e agulha com auxílio de dispositivo de segurança.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-rss-8'), 'D', 'descartar a agulha no saco do grupo D.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'bio-rss-8') and label not in ('A', 'B', 'C', 'D');
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'residuos-de-servicos-de-saude-rdc-222'), 'bio-rss-9', 'Sobre a identificação dos sacos de resíduos, é correto afirmar:', 'Art. 22: identificação nos carros, locais de armazenamento e sacos; impressa, vedado adesivo. Os sacos do grupo D não precisam ser identificados.', 'dificil', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'residuos-de-servicos-de-saude-rdc-222') and position = 0), 'identificacao', 8, 'published', '2026-10-03'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'bio-rss-9');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-rss-9'), 'A', 'os sacos do grupo D precisam do símbolo de risco biológico.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-rss-9'), 'B', 'a identificação dos sacos deve estar impressa, sendo vedado o uso de adesivo.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-rss-9'), 'C', 'a identificação só é exigida no abrigo externo.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-rss-9'), 'D', 'o grupo E dispensa identificação.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'bio-rss-9') and label not in ('A', 'B', 'C', 'D');

-- tema: Limpeza, desinfecção e esterilização (RDC 15)
insert into public.topics (category_id, slug, title, description, summary, key_points, sections, outline, reading_minutes, position, status, last_reviewed_at, review_notes)
values ((select id from public.categories where product_id = (select id from public.products where key = 'revisao-tecnico-enfermagem') and slug = 'biosseguranca'), 'processamento-de-produtos-rdc-15', 'Limpeza, desinfecção e esterilização (RDC 15)', 'Críticos, semicríticos e não críticos; o que cada um exige; níveis de desinfecção; CME, rótulo e armazenamento.', 'A RDC Anvisa nº 15/2012 define as boas práticas de processamento de produtos para saúde, feito no Centro de Material e Esterilização (CME). Limpeza é a remoção de sujidades orgânicas e inorgânicas e a redução da carga microbiana com água, detergente e ação mecânica, preparando o produto para desinfecção ou esterilização; pré-limpeza é a remoção da sujidade visível. A desinfecção de alto nível destrói a maioria dos microrganismos de artigos semicríticos, inclusive micobactérias e fungos, exceto um número elevado de esporos; a de nível intermediário destrói formas vegetativas, micobactérias, a maioria dos vírus e dos fungos. Produtos críticos são usados em procedimentos invasivos com penetração de pele e mucosas, tecidos subepiteliais e sistema vascular, e devem ser esterilizados após a limpeza. Semicríticos entram em contato com pele não íntegra ou mucosas íntegras colonizadas e exigem, no mínimo, desinfecção de alto nível — exceto os de assistência ventilatória, anestesia e inaloterapia, que exigem no mínimo desinfecção de nível intermediário e não podem ser imersos em saneantes à base de aldeídos. Não críticos entram em contato com pele íntegra ou não tocam o paciente e exigem, no mínimo, limpeza. O fluxo é sempre da área suja para a limpa. O rótulo do produto esterilizado traz nome, lote, data da esterilização, data limite de uso, método e responsável pelo preparo, e o armazenamento é em local limpo, seco, protegido da luz solar direta e com manipulação mínima.', array['Crítico (penetra pele/mucosa, tecido subepitelial, sistema vascular) → ESTERILIZAÇÃO após limpeza.', 'Semicrítico (pele não íntegra ou mucosa íntegra colonizada) → no mínimo DESINFECÇÃO DE ALTO NÍVEL.', 'Exceção: semicrítico de ventilação, anestesia e inaloterapia → no mínimo nível intermediário; proibida imersão em aldeídos.', 'Não crítico (pele íntegra ou sem contato) → no mínimo LIMPEZA.', 'Limpeza vem sempre antes; fluxo sempre do sujo para o limpo.', 'Alto nível destrói quase tudo, menos número elevado de esporos.', 'Rótulo: nome, lote, data de esterilização, data limite de uso, método e responsável pelo preparo.', 'Armazenar em local limpo e seco, longe da luz solar direta, com manipulação mínima.']::text[], '[{"id":"visao-geral","kind":"visao","title":"O risco do paciente define o processamento","source":0,"blocks":[{"type":"text","text":"Quanto mais ==profundo o contato== do produto com o paciente, mais rigoroso o processamento. A RDC 15 traduz isso em três classes — ==críticos, semicríticos e não críticos== — e diz o mínimo exigido para cada uma."},{"type":"definition","term":"CME","text":"==Centro de Material e Esterilização==: unidade funcional destinada ao processamento de produtos para saúde."}]},{"id":"definicoes","kind":"conceito","title":"Limpeza e níveis de desinfecção","source":0,"blocks":[{"type":"definition","term":"Pré-limpeza","text":"Remoção da ==sujidade visível== presente nos produtos para saúde."},{"type":"definition","term":"Limpeza","text":"Remoção de sujidades orgânicas e inorgânicas e ==redução da carga microbiana==, com água, detergente e ação mecânica (manual ou automatizada), em superfícies internas e externas, tornando o produto seguro para manuseio e ==preparado para desinfecção ou esterilização==."},{"type":"compare","columns":["Desinfecção de alto nível","Desinfecção de nível intermediário"],"rows":[{"label":"Destrói","cells":["A maioria dos microrganismos de artigos semicríticos, ==inclusive micobactérias e fungos==","Formas vegetativas, ==micobactérias==, a maioria dos vírus e dos fungos"]},{"label":"Não destrói","cells":["==Número elevado de esporos bacterianos==","Esporos"]},{"label":"Onde se aplica","cells":["Semicríticos (regra geral)","Objetos inanimados e superfícies; semicríticos de ventilação, anestesia e inaloterapia"]}]}]},{"id":"classes","kind":"classificacao","title":"Críticos, semicríticos e não críticos","lead":"A tabela mais cobrada do tema.","source":0,"blocks":[{"type":"compare","columns":["Definição","Processamento mínimo"],"rows":[{"label":"Crítico","cells":["Usado em procedimento invasivo com penetração de pele e mucosas adjacentes, tecidos subepiteliais e ==sistema vascular==, e tudo conectado a eles","==Esterilização==, após a limpeza"]},{"label":"Semicrítico","cells":["Contato com ==pele não íntegra== ou ==mucosas íntegras colonizadas==","No mínimo ==desinfecção de alto nível==, após a limpeza"]},{"label":"Semicrítico de ventilação, anestesia, inaloterapia","cells":["Ex.: circuitos e acessórios respiratórios","No mínimo ==nível intermediário== (ou termodesinfecção); ==proibida imersão em aldeídos=="]},{"label":"Não crítico","cells":["Contato com ==pele íntegra== ou sem contato com o paciente","No mínimo ==limpeza=="]}]},{"type":"callout","variant":"atencao","title":"Conformação complexa","text":"Produto crítico com ==lúmen menor que 5 mm== ou fundo cego, espaços inacessíveis à fricção, reentrâncias ou válvulas é de conformação complexa e tem regras próprias de limpeza."}]},{"id":"fluxo","kind":"etapas","title":"O caminho do produto no CME","source":0,"blocks":[{"type":"steps","items":[{"title":"Pré-limpeza e recepção","text":"Retira a sujidade visível e recebe o material na área suja.","why":"A RDC define a pré-limpeza como a remoção da sujidade visível — o primeiro passo do processamento."},{"title":"Limpeza e secagem","text":"Etapa obrigatória para qualquer classe.","why":"Sem limpeza, nem a desinfecção nem a esterilização funcionam."},{"title":"Inspeção, preparo e acondicionamento","text":"Avaliar integridade e embalar."},{"title":"Desinfecção ou esterilização","text":"Conforme a classe do produto."},{"title":"Armazenamento e distribuição","text":"Local limpo e seco, protegido da luz solar direta, ==manipulação mínima==."}]},{"type":"callout","variant":"lei","title":"Sempre do sujo para o limpo","text":"O processamento segue ==fluxo direcionado sempre da área suja para a área limpa== (art. 15)."}]},{"id":"rotulo-e-guarda","kind":"tecnico","title":"Rótulo, embalagem e guarda: o que o técnico confere","source":0,"blocks":[{"type":"checklist","title":"O rótulo do produto esterilizado deve ter","items":["Nome do produto","Número do lote","Data da esterilização","==Data limite de uso==","Método de esterilização","Nome do responsável pelo preparo"]},{"type":"dodont","do":["Conferir rótulo legível e data limite de uso antes de abrir","Armazenar em local limpo, seco e longe da luz solar direta","Transportar em recipiente fechado, mantendo identificação e integridade","Suspender embalagem de tecido com furo, rasgo ou desgaste"],"dont":["Usar produto com rótulo ilegível ou embalagem violada","Usar embalagem de tecido de algodão remendada ou cerzida","Processar no CME humano produtos usados em animais","Imergir circuito respiratório em saneante à base de aldeídos"]}]},{"id":"numeros","kind":"numeros","title":"Números que caem","source":0,"blocks":[{"type":"numbers","items":[{"value":"3","label":"classes de produtos","note":"crítico, semicrítico, não crítico"},{"value":"6","label":"itens obrigatórios do rótulo"},{"value":"< 5 mm","label":"lúmen que define conformação complexa"},{"value":"2","label":"níveis de desinfecção definidos","note":"alto e intermediário"}]}]},{"id":"caso","kind":"caso","title":"Situação-problema","source":0,"blocks":[{"type":"case","title":"Três itens na bandeja","scenario":"Após o plantão, voltam ao expurgo: uma pinça usada em curativo cirúrgico com penetração de tecido, uma máscara de nebulização e um esfigmomanômetro.","question":"Qual o processamento mínimo de cada um pela RDC 15?","answer":"Pinça: crítica → esterilização. Máscara de nebulização: semicrítica de inaloterapia → no mínimo desinfecção de nível intermediário, sem imersão em aldeídos. Esfigmomanômetro: não crítico → no mínimo limpeza.","reasoning":["Penetrou tecido → crítico → esterilização após limpeza.","Inaloterapia é a exceção dos semicríticos: nível intermediário basta, e aldeído por imersão é proibido.","Esfigmomanômetro toca pele íntegra → não crítico.","Os três passam primeiro pela limpeza."]}]},{"id":"como-a-banca-cobra","kind":"cobrado","title":"Como a banca cobra","source":0,"blocks":[{"type":"traps","items":[{"wrong":"Produtos semicríticos devem ser esterilizados.","right":"Semicríticos exigem ==no mínimo desinfecção de alto nível==.","why":"Esterilização é obrigatória para críticos; para semicríticos, alto nível é o mínimo."},{"wrong":"Produto que toca mucosa íntegra é crítico.","right":"Mucosa íntegra colonizada → ==semicrítico==.","why":"Crítico é o que penetra pele e mucosa, tecido subepitelial ou sistema vascular."},{"wrong":"A desinfecção de alto nível destrói todos os esporos.","right":"Destrói quase tudo, ==exceto número elevado de esporos==.","why":"Quem elimina todas as formas, inclusive esporos, é a esterilização."},{"wrong":"Inaladores podem ser desinfetados por imersão em glutaraldeído.","right":"É ==proibida a imersão em saneantes à base de aldeídos== para ventilação e inaloterapia.","why":"Art. 13 da RDC 15."},{"wrong":"Produtos não críticos dispensam qualquer processamento.","right":"No mínimo ==limpeza==.","why":"Art. 14."},{"wrong":"Se o produto vai para esterilização, a limpeza pode ser pulada.","right":"A esterilização vem ==após a limpeza e as demais etapas==.","why":"A limpeza prepara o produto; sujidade impede o agente esterilizante de agir."},{"wrong":"O rótulo precisa só da data da esterilização.","right":"Nome, lote, data de esterilização, ==data limite de uso==, método e responsável.","why":"Art. 85 lista seis itens."}]}]},{"id":"conexoes","kind":"conexoes","title":"Conexões","blocks":[{"type":"links","items":[{"slug":"precaucoes-padrao-e-especificas","title":"Precauções padrão e específicas","why":"Equipamento de uso exclusivo e contato indireto."},{"slug":"residuos-de-servicos-de-saude-rdc-222","title":"Resíduos de serviços de saúde (RDC 222)","why":"O que não é reprocessado vira resíduo."},{"slug":"nucleo-de-seguranca-do-paciente","title":"Segurança do paciente: PNSP e RDC 36","why":"Equipamentos e materiais seguros estão no Plano de Segurança do Paciente."}]}]}]'::jsonb, array['O risco do paciente define o processamento', 'Limpeza e níveis de desinfecção', 'Críticos, semicríticos e não críticos', 'O caminho do produto no CME', 'Rótulo, embalagem e guarda: o que o técnico confere', 'Números que caem', 'Situação-problema', 'Como a banca cobra', 'Conexões']::text[], 6, 6, 'published', '2026-10-03'::date, 'Padrão v2: cada seção foi escrita a partir do texto original da fonte, baixado e lido em 2026-10-03 (conferência automatizada durante o desenvolvimento). Revisão por enfermeiro(a) obrigatória antes da venda. Etapas do fluxo resumidas da definição de processamento (art. 4º).')
on conflict (slug) do update set category_id = excluded.category_id, title = excluded.title, description = excluded.description,
  summary = excluded.summary, key_points = excluded.key_points, sections = excluded.sections, outline = excluded.outline,
  reading_minutes = excluded.reading_minutes, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at, review_notes = excluded.review_notes;
insert into public.topic_sources (topic_id, position, source_title, source_organization, source_url, source_accessed_at, locator)
values ((select id from public.topics where slug = 'processamento-de-produtos-rdc-15'), 0, 'RDC nº 15, de 15 de março de 2012 (boas práticas para o processamento de produtos para saúde)', 'Agência Nacional de Vigilância Sanitária (Anvisa)', 'https://bvsms.saude.gov.br/bvs/saudelegis/anvisa/2012/rdc0015_15_03_2012.html', '2026-10-03'::date, 'arts. 4º, 10 a 15, 82 a 85, 101 e 103')
on conflict (topic_id, position) do update set source_title = excluded.source_title, source_organization = excluded.source_organization,
  source_url = excluded.source_url, source_accessed_at = excluded.source_accessed_at, locator = excluded.locator;
delete from public.topic_sources s where s.topic_id = (select id from public.topics where slug = 'processamento-de-produtos-rdc-15') and s.position >= 1
  and not exists (select 1 from public.questions x where x.source_id = s.id);
insert into public.visual_maps (topic_id, title, spec, status, last_reviewed_at)
values ((select id from public.topics where slug = 'processamento-de-produtos-rdc-15'), 'Classes de produtos (RDC 15)', '{"layout":"flow","center":"Contato com o paciente → processamento mínimo","blocks":[{"title":"Não crítico","tone":"green","icon":"🩺","items":["Pele íntegra ou sem contato","No mínimo: limpeza"]},{"title":"Semicrítico","tone":"amber","icon":"👄","items":["Pele não íntegra / mucosa íntegra","No mínimo: desinfecção de alto nível"]},{"title":"Crítico","tone":"rose","icon":"🔪","items":["Penetra tecidos e vasos","Esterilização"]}],"footnote":"Tudo começa pela limpeza. Fluxo sempre da área suja para a limpa."}'::jsonb, 'published', '2026-10-03'::date)
on conflict (topic_id) do update set title = excluded.title, spec = excluded.spec, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'processamento-de-produtos-rdc-15'), 'bio-proc-1', 'Pela RDC nº 15/2012, produtos para saúde classificados como críticos devem ser submetidos a:', 'Art. 11: críticos devem ser esterilizados após a limpeza e demais etapas do processo.', 'facil', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'processamento-de-produtos-rdc-15') and position = 0), 'classes', 0, 'published', '2026-10-03'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'bio-proc-1');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-proc-1'), 'A', 'apenas limpeza.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-proc-1'), 'B', 'desinfecção de nível intermediário.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-proc-1'), 'C', 'esterilização, após a limpeza e demais etapas.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-proc-1'), 'D', 'desinfecção de alto nível sem limpeza prévia.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'bio-proc-1') and label not in ('A', 'B', 'C', 'D');
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'processamento-de-produtos-rdc-15'), 'bio-proc-2', 'Produtos que entram em contato com pele não íntegra ou com mucosas íntegras colonizadas são classificados como:', 'É a definição de semicríticos (art. 4º, XVI); eles exigem no mínimo desinfecção de alto nível.', 'facil', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'processamento-de-produtos-rdc-15') and position = 0), 'classes', 1, 'published', '2026-10-03'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'bio-proc-2');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-proc-2'), 'A', 'críticos.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-proc-2'), 'B', 'semicríticos.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-proc-2'), 'C', 'não críticos.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-proc-2'), 'D', 'descartáveis obrigatórios.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'bio-proc-2') and label not in ('A', 'B', 'C', 'D');
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'processamento-de-produtos-rdc-15'), 'bio-proc-3', 'Produtos semicríticos usados em assistência ventilatória, anestesia e inaloterapia devem receber, no mínimo:', 'Art. 12, parágrafo único: limpeza e, no mínimo, desinfecção de nível intermediário ou termodesinfecção. O art. 13 proíbe imersão em saneantes à base de aldeídos.', 'media', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'processamento-de-produtos-rdc-15') and position = 0), 'classes', 2, 'published', '2026-10-03'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'bio-proc-3');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-proc-3'), 'A', 'esterilização a vapor.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-proc-3'), 'B', 'desinfecção de nível intermediário ou termodesinfecção, após a limpeza.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-proc-3'), 'C', 'apenas pré-limpeza.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-proc-3'), 'D', 'imersão em glutaraldeído.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'bio-proc-3') and label not in ('A', 'B', 'C', 'D');
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'processamento-de-produtos-rdc-15'), 'bio-proc-4', 'Um esfigmomanômetro, que entra em contato apenas com pele íntegra, é produto não crítico e exige, no mínimo:', 'Art. 14: não críticos devem ser submetidos, no mínimo, ao processo de limpeza.', 'facil', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'processamento-de-produtos-rdc-15') and position = 0), 'classes', 3, 'published', '2026-10-03'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'bio-proc-4');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-proc-4'), 'A', 'esterilização.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-proc-4'), 'B', 'desinfecção de alto nível.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-proc-4'), 'C', 'limpeza.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-proc-4'), 'D', 'nenhum processamento.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'bio-proc-4') and label not in ('A', 'B', 'C', 'D');
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'processamento-de-produtos-rdc-15'), 'bio-proc-5', 'Segundo a RDC 15, a desinfecção de alto nível destrói a maioria dos microrganismos de artigos semicríticos, inclusive micobactérias e fungos, EXCETO:', 'A definição do art. 4º, VIII: destrói a maioria dos microrganismos, inclusive micobactérias e fungos, exceto um número elevado de esporos bacterianos.', 'dificil', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'processamento-de-produtos-rdc-15') and position = 0), 'definicoes', 4, 'published', '2026-10-03'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'bio-proc-5');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-proc-5'), 'A', 'bactérias na forma vegetativa.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-proc-5'), 'B', 'vírus envelopados.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-proc-5'), 'C', 'um número elevado de esporos bacterianos.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-proc-5'), 'D', 'fungos filamentosos.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'bio-proc-5') and label not in ('A', 'B', 'C', 'D');
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'processamento-de-produtos-rdc-15'), 'bio-proc-6', 'No CME, o fluxo de processamento dos produtos para saúde deve seguir:', 'Art. 15: o processamento deve seguir fluxo direcionado sempre da área suja para a área limpa.', 'media', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'processamento-de-produtos-rdc-15') and position = 0), 'fluxo', 5, 'published', '2026-10-03'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'bio-proc-6');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-proc-6'), 'A', 'da área limpa para a área suja.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-proc-6'), 'B', 'qualquer direção, desde que haja barreira física.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-proc-6'), 'C', 'sempre da área suja para a área limpa.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-proc-6'), 'D', 'a ordem definida por cada profissional.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'bio-proc-6') and label not in ('A', 'B', 'C', 'D');
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'processamento-de-produtos-rdc-15'), 'bio-proc-7', 'É item obrigatório do rótulo de identificação da embalagem de um produto esterilizado:', 'Art. 85: nome do produto, número do lote, data da esterilização, data limite de uso, método de esterilização e nome do responsável pelo preparo.', 'media', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'processamento-de-produtos-rdc-15') and position = 0), 'rotulo-e-guarda', 6, 'published', '2026-10-03'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'bio-proc-7');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-proc-7'), 'A', 'o nome do paciente que vai usar o produto.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-proc-7'), 'B', 'a data limite de uso.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-proc-7'), 'C', 'o preço do produto.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-proc-7'), 'D', 'o nome do médico solicitante.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'bio-proc-7') and label not in ('A', 'B', 'C', 'D');
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'processamento-de-produtos-rdc-15'), 'bio-proc-8', 'A remoção de sujidades orgânicas e inorgânicas, com redução da carga microbiana, por meio de água, detergente e ação mecânica, preparando o produto para desinfecção ou esterilização, é a definição de:', 'É a definição de limpeza do art. 4º, XIII. Pré-limpeza é só a remoção da sujidade visível.', 'media', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'processamento-de-produtos-rdc-15') and position = 0), 'definicoes', 7, 'published', '2026-10-03'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'bio-proc-8');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-proc-8'), 'A', 'esterilização.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-proc-8'), 'B', 'limpeza.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-proc-8'), 'C', 'antissepsia.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-proc-8'), 'D', 'desinfecção de alto nível.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'bio-proc-8') and label not in ('A', 'B', 'C', 'D');

-- tema: Segurança do paciente: PNSP e RDC 36
insert into public.topics (category_id, slug, title, description, summary, key_points, sections, outline, reading_minutes, position, status, last_reviewed_at, review_notes)
values ((select id from public.categories where product_id = (select id from public.products where key = 'revisao-tecnico-enfermagem') and slug = 'biosseguranca'), 'nucleo-de-seguranca-do-paciente', 'Segurança do paciente: PNSP e RDC 36', 'Incidente × evento adverso, objetivos do PNSP, Núcleo e Plano de Segurança do Paciente e prazos de notificação.', 'A Portaria GM/MS nº 529/2013 instituiu o Programa Nacional de Segurança do Paciente (PNSP), com o objetivo geral de contribuir para a qualificação do cuidado em saúde em todos os estabelecimentos do território nacional. Seus objetivos específicos são promover iniciativas de segurança, envolver pacientes e familiares, ampliar o acesso da sociedade às informações, produzir e difundir conhecimento e incluir o tema no ensino técnico, de graduação e de pós-graduação. A portaria define segurança do paciente como a redução, a um mínimo aceitável, do risco de dano desnecessário associado ao cuidado; dano como comprometimento da estrutura ou função do corpo ou qualquer efeito dele oriundo; incidente como evento ou circunstância que poderia ter resultado, ou resultou, em dano desnecessário; evento adverso como incidente que resulta em dano; e gestão de risco como a aplicação sistêmica e contínua de iniciativas para avaliar e controlar riscos e eventos adversos. A RDC Anvisa nº 36/2013 obriga a direção do serviço a constituir o Núcleo de Segurança do Paciente (NSP), que elabora, implanta e mantém atualizado o Plano de Segurança do Paciente (PSP), implanta protocolos, analisa incidentes e notifica os eventos adversos ao Sistema Nacional de Vigilância Sanitária. O PSP inclui ações como identificação do paciente, higiene das mãos, cirurgia segura, medicamentos, sangue e hemocomponentes, equipamentos, quedas, úlceras por pressão, infecções, terapia nutricional, comunicação efetiva, participação do paciente e ambiente seguro. A notificação é mensal, até o 15º dia útil do mês seguinte; evento adverso com óbito, em até 72 horas.', array['PNSP: Portaria GM/MS nº 529/2013 — objetivo geral: qualificar o cuidado em todos os estabelecimentos.', 'Segurança do paciente: reduzir a um mínimo aceitável o risco de dano desnecessário.', 'Incidente: poderia ter resultado ou resultou em dano. Evento adverso: incidente que resulta em dano.', 'Envolver pacientes e familiares e incluir o tema no ensino técnico são objetivos específicos.', 'RDC 36: a DIREÇÃO do serviço constitui o NSP; o NSP elabora o PSP.', 'O NSP notifica eventos adversos ao Sistema Nacional de Vigilância Sanitária.', 'Notificação mensal até o 15º dia útil do mês seguinte.', 'Evento adverso com óbito: em até 72 horas.']::text[], '[{"id":"visao-geral","kind":"visao","title":"Duas normas, um sistema","lead":"A portaria cria o programa e os conceitos; a RDC diz o que cada serviço tem de fazer.","source":0,"blocks":[{"type":"compare","columns":["Portaria GM/MS nº 529/2013","RDC Anvisa nº 36/2013"],"rows":[{"label":"O que faz","cells":["Institui o ==PNSP== e define os conceitos","Institui ==ações obrigatórias== nos serviços de saúde"]},{"label":"Palavra-chave","cells":["Incidente, evento adverso, dano","NSP, PSP, notificação"]}]},{"type":"callout","variant":"lei","title":"Objetivo geral do PNSP (art. 2º)","text":"Contribuir para a ==qualificação do cuidado em saúde em todos os estabelecimentos de saúde== do território nacional."}]},{"id":"definicoes-da-portaria-529","kind":"conceito","title":"Definições da Portaria 529/2013","lead":"Diferenciar incidente de evento adverso resolve metade das questões.","source":0,"blocks":[{"type":"definition","term":"Segurança do paciente","text":"Redução, ==a um mínimo aceitável==, do risco de dano desnecessário associado ao cuidado de saúde."},{"type":"definition","term":"Dano","text":"Comprometimento da estrutura ou função do corpo e/ou qualquer efeito dele oriundo: doenças, lesão, sofrimento, morte, incapacidade ou disfunção."},{"type":"compare","columns":["Incidente","Evento adverso"],"rows":[{"label":"Definição","cells":["Evento ou circunstância que ==poderia ter resultado, ou resultou==, em dano desnecessário","Incidente que ==resulta em dano== ao paciente"]},{"label":"Houve dano?","cells":["Pode ter havido ou não","==Sim, sempre=="]}]},{"type":"definition","term":"Gestão de risco","text":"Aplicação ==sistêmica e contínua== de iniciativas, procedimentos, condutas e recursos na avaliação e controle de riscos e eventos adversos."},{"type":"definition","term":"Cultura de segurança","text":"Caracterizada por ==cinco elementos== operacionalizados pela gestão da organização."}]},{"id":"objetivos-do-pnsp","kind":"classificacao","title":"Objetivos específicos do PNSP (art. 3º)","source":0,"blocks":[{"type":"cards","items":[{"title":"Promover iniciativas","text":"Apoiar a segurança do paciente na atenção, organização e gestão dos serviços.","icon":"🚀","tone":"blue"},{"title":"Envolver o paciente","text":"Incluir ==pacientes e familiares== nas ações de segurança.","icon":"👪","tone":"green"},{"title":"Informar a sociedade","text":"Ampliar o acesso às informações sobre segurança do paciente.","icon":"📢","tone":"amber"},{"title":"Produzir conhecimento","text":"Produzir, sistematizar e difundir conhecimentos.","icon":"📚","tone":"violet"},{"title":"Levar ao ensino","text":"Incluir o tema no ==ensino técnico== e de graduação e pós-graduação.","icon":"🎓","tone":"teal"}]}]},{"id":"nsp-e-plano","kind":"etapas","title":"NSP e Plano de Segurança (RDC 36)","source":1,"blocks":[{"type":"steps","items":[{"title":"A direção constitui o NSP","text":"Art. 4º: obrigação da ==direção do serviço de saúde==.","who":"servico"},{"title":"O NSP elabora e mantém o PSP","text":"Elaborar, implantar, divulgar e manter atualizado o ==Plano de Segurança do Paciente==.","who":"servico"},{"title":"O NSP implanta protocolos e barreiras","text":"Protocolos de segurança, barreiras para prevenir incidentes, capacitação e integração multiprofissional.","who":"servico"},{"title":"O NSP monitora e analisa","text":"Analisa e avalia os dados de incidentes e eventos adversos e acompanha alertas sanitários.","who":"servico"},{"title":"O NSP notifica","text":"Notifica os eventos adversos ao ==Sistema Nacional de Vigilância Sanitária== e guarda as notificações.","who":"servico"}]},{"type":"cards","items":[{"title":"Identificação do paciente","text":"","icon":"🪪","tone":"blue"},{"title":"Higiene das mãos","text":"","icon":"🧴","tone":"green"},{"title":"Segurança cirúrgica","text":"","icon":"🔪","tone":"slate"},{"title":"Medicamentos","text":"Prescrição, uso e administração.","icon":"💊","tone":"teal"},{"title":"Sangue e hemocomponentes","text":"","icon":"🩸","tone":"rose"},{"title":"Equipamentos, órteses e próteses","text":"Uso seguro e registro adequado.","icon":"🔧","tone":"orange"},{"title":"Quedas e úlceras por pressão","text":"Prevenção.","icon":"🛏️","tone":"amber"},{"title":"Infecções e terapia nutricional","text":"Prevenção de IRAS; nutrição enteral e parenteral seguras.","icon":"🦠","tone":"violet"},{"title":"Comunicação e ambiente","text":"Comunicação efetiva, participação do paciente e família, ambiente seguro.","icon":"💬","tone":"green"}]}]},{"id":"papel-do-tecnico","kind":"tecnico","title":"Onde o técnico entra","source":1,"blocks":[{"type":"checklist","title":"Na prática diária","items":["Seguir os protocolos implantados pelo NSP (identificação, mãos, medicamentos, quedas, lesão por pressão)","Comunicar ao enfermeiro e registrar todo incidente percebido, mesmo sem dano","Participar das capacitações oferecidas pelo NSP","Envolver o paciente e a família: confirmar identidade, explicar o que será feito"]},{"type":"callout","variant":"dica","title":"Quem notifica ao SNVS?","text":"A RDC atribui ao ==NSP== a notificação ao Sistema Nacional de Vigilância Sanitária. O técnico alimenta esse sistema relatando os incidentes dentro do serviço."}]},{"id":"prazos-de-notificacao","kind":"numeros","title":"Números que caem","source":1,"blocks":[{"type":"numbers","items":[{"value":"15º dia útil","label":"notificação mensal dos eventos adversos","note":"do mês seguinte ao de vigilância"},{"value":"72 h","label":"evento adverso que evoluiu para óbito","note":"a partir do ocorrido"},{"value":"5","label":"objetivos específicos do PNSP"},{"value":"2013","label":"ano da Portaria 529 e da RDC 36"}]}]},{"id":"caso","kind":"caso","title":"Situação-problema","source":0,"blocks":[{"type":"case","title":"Medicamento quase trocado","scenario":"Na conferência à beira do leito, a técnica percebe que pegou a medicação do paciente do leito ao lado e corrige antes de administrar. Em outro plantão, um paciente recebe dose duplicada e apresenta hipotensão.","question":"Como cada situação se classifica pela Portaria 529?","answer":"A primeira é um incidente sem dano (circunstância que poderia ter resultado em dano). A segunda é um evento adverso (incidente que resultou em dano).","reasoning":["Incidente = poderia ter resultado OU resultou em dano.","Evento adverso = o incidente que efetivamente resultou em dano.","Todo evento adverso é incidente; nem todo incidente é evento adverso.","Os dois devem ser comunicados internamente para alimentar a gestão de risco do NSP."]}]},{"id":"como-a-banca-cobra","kind":"cobrado","title":"Como a banca cobra","source":0,"blocks":[{"type":"traps","items":[{"wrong":"Todo incidente é um evento adverso.","right":"Evento adverso é o incidente ==que resulta em dano==.","why":"Incidente inclui o que ''poderia ter resultado'' em dano, mesmo sem dano."},{"wrong":"Segurança do paciente é eliminar todo risco.","right":"Reduzir o risco de dano desnecessário ==a um mínimo aceitável==.","why":"A definição admite que risco zero não existe no cuidado."},{"wrong":"Óbito por evento adverso: notificar até o 15º dia útil.","right":"Óbito: ==em até 72 horas==.","why":"O 15º dia útil é a regra geral mensal; óbito tem prazo próprio."},{"wrong":"Quem constitui o NSP é a Anvisa.","right":"É a ==direção do serviço de saúde==.","why":"Art. 4º da RDC 36."},{"wrong":"O PNSP foi instituído pela RDC 36.","right":"O PNSP foi instituído pela ==Portaria GM/MS nº 529/2013==.","why":"A RDC 36 institui ações nos serviços; a portaria cria o programa."},{"wrong":"Envolver o paciente não é objetivo do PNSP, por ser tarefa técnica.","right":"Envolver ==pacientes e familiares== é objetivo específico.","why":"Art. 3º, II."},{"wrong":"O Plano de Segurança do Paciente é elaborado pela vigilância municipal.","right":"O PSP é elaborado pelo ==NSP== do próprio serviço.","why":"Competência listada no art. 7º da RDC 36."}]}]},{"id":"conexoes","kind":"conexoes","title":"Conexões","blocks":[{"type":"links","items":[{"slug":"higiene-das-maos-cinco-momentos","title":"Higiene das mãos: os 5 momentos","why":"Protocolo básico do PSP."},{"slug":"nove-certos-administracao-de-medicamentos","title":"Os 9 certos da administração de medicamentos","why":"Segurança na administração de medicamentos."},{"slug":"prevencao-de-ulcera-por-pressao","title":"Prevenção de úlcera por pressão","why":"Outro protocolo do PSP."},{"slug":"processamento-de-produtos-rdc-15","title":"Limpeza, desinfecção e esterilização (RDC 15)","why":"Uso seguro de equipamentos e materiais."}]}]}]'::jsonb, array['Duas normas, um sistema', 'Definições da Portaria 529/2013', 'Objetivos específicos do PNSP (art. 3º)', 'NSP e Plano de Segurança (RDC 36)', 'Onde o técnico entra', 'Números que caem', 'Situação-problema', 'Como a banca cobra', 'Conexões']::text[], 6, 7, 'published', '2026-10-03'::date, 'Padrão v2: cada seção foi escrita a partir do texto original da fonte, baixado e lido em 2026-10-03 (conferência automatizada durante o desenvolvimento). Revisão por enfermeiro(a) obrigatória antes da venda. A seção ''Onde o técnico entra'' é aplicação didática das competências do NSP, não texto literal.')
on conflict (slug) do update set category_id = excluded.category_id, title = excluded.title, description = excluded.description,
  summary = excluded.summary, key_points = excluded.key_points, sections = excluded.sections, outline = excluded.outline,
  reading_minutes = excluded.reading_minutes, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at, review_notes = excluded.review_notes;
insert into public.topic_sources (topic_id, position, source_title, source_organization, source_url, source_accessed_at, locator)
values ((select id from public.topics where slug = 'nucleo-de-seguranca-do-paciente'), 0, 'Portaria GM/MS nº 529, de 1º de abril de 2013 (Programa Nacional de Segurança do Paciente)', 'Ministério da Saúde — Saúde Legis', 'https://bvsms.saude.gov.br/bvs/saudelegis/gm/2013/prt0529_01_04_2013.html', '2026-10-02'::date, 'arts. 2º a 4º')
on conflict (topic_id, position) do update set source_title = excluded.source_title, source_organization = excluded.source_organization,
  source_url = excluded.source_url, source_accessed_at = excluded.source_accessed_at, locator = excluded.locator;
insert into public.topic_sources (topic_id, position, source_title, source_organization, source_url, source_accessed_at, locator)
values ((select id from public.topics where slug = 'nucleo-de-seguranca-do-paciente'), 1, 'RDC nº 36, de 25 de julho de 2013 (ações para a segurança do paciente)', 'Agência Nacional de Vigilância Sanitária (Anvisa)', 'https://bvsms.saude.gov.br/bvs/saudelegis/anvisa/2013/rdc0036_25_07_2013.html', '2026-10-02'::date, 'arts. 4º, 7º, 8º, 9º e 10')
on conflict (topic_id, position) do update set source_title = excluded.source_title, source_organization = excluded.source_organization,
  source_url = excluded.source_url, source_accessed_at = excluded.source_accessed_at, locator = excluded.locator;
delete from public.topic_sources s where s.topic_id = (select id from public.topics where slug = 'nucleo-de-seguranca-do-paciente') and s.position >= 2
  and not exists (select 1 from public.questions x where x.source_id = s.id);
insert into public.visual_maps (topic_id, title, spec, status, last_reviewed_at)
values ((select id from public.topics where slug = 'nucleo-de-seguranca-do-paciente'), 'Segurança do paciente', '{"layout":"flow","center":"Do conceito à notificação","blocks":[{"title":"Conceitos (Portaria 529)","tone":"green","icon":"📖","items":["Incidente: poderia causar ou causou dano","Evento adverso: causou dano","Segurança: risco no mínimo aceitável"]},{"title":"Estrutura (RDC 36)","tone":"blue","icon":"🏥","items":["Direção constitui o NSP","NSP elabora o Plano (PSP)","Mãos, identificação, cirurgia, medicamentos, quedas, UPP"]},{"title":"Notificação","tone":"rose","icon":"📣","items":["Mensal: até o 15º dia útil","Óbito: em até 72 h"]}]}'::jsonb, 'published', '2026-10-03'::date)
on conflict (topic_id) do update set title = excluded.title, spec = excluded.spec, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'nucleo-de-seguranca-do-paciente'), 'bio-nsp-1', 'Conforme a Portaria GM/MS nº 529/2013, ''evento adverso'' é:', 'A portaria define incidente como evento ou circunstância que poderia ter resultado, ou resultou, em dano; evento adverso é o incidente que resulta em dano.', 'facil', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'nucleo-de-seguranca-do-paciente') and position = 0), 'definicoes-da-portaria-529', 0, 'published', '2026-10-03'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'bio-nsp-1');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-nsp-1'), 'A', 'qualquer circunstância que poderia ter causado dano, mesmo sem dano.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-nsp-1'), 'B', 'o incidente que resulta em dano ao paciente.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-nsp-1'), 'C', 'a reclamação formal do paciente na ouvidoria.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-nsp-1'), 'D', 'o erro cometido exclusivamente pelo médico.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'bio-nsp-1') and label not in ('A', 'B', 'C', 'D');
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'nucleo-de-seguranca-do-paciente'), 'bio-nsp-2', 'Segundo a RDC Anvisa nº 36/2013, os eventos adversos que evoluírem para óbito devem ser notificados:', 'A regra geral é a notificação mensal até o 15º dia útil do mês subsequente; eventos adversos que evoluírem para óbito devem ser notificados em até 72 horas.', 'media', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'nucleo-de-seguranca-do-paciente') and position = 1), 'prazos-de-notificacao', 1, 'published', '2026-10-03'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'bio-nsp-2');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-nsp-2'), 'A', 'até o 15º dia útil do mês seguinte.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-nsp-2'), 'B', 'em até 72 horas a partir do ocorrido.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-nsp-2'), 'C', 'em até 30 dias.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-nsp-2'), 'D', 'apenas no relatório anual.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'bio-nsp-2') and label not in ('A', 'B', 'C', 'D');
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'nucleo-de-seguranca-do-paciente'), 'bio-nsp-3', 'Pela RDC Anvisa nº 36/2013, a constituição do Núcleo de Segurança do Paciente (NSP) é responsabilidade:', 'O art. 4º da RDC 36/2013: a direção do serviço de saúde deve constituir o NSP. O NSP, por sua vez, elabora o Plano de Segurança do Paciente.', 'facil', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'nucleo-de-seguranca-do-paciente') and position = 1), 'nsp-e-plano', 2, 'published', '2026-10-03'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'bio-nsp-3');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-nsp-3'), 'A', 'da direção do serviço de saúde.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-nsp-3'), 'B', 'da Anvisa.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-nsp-3'), 'C', 'do Conselho Municipal de Saúde.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-nsp-3'), 'D', 'da equipe de enfermagem do plantão.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'bio-nsp-3') and label not in ('A', 'B', 'C', 'D');
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'nucleo-de-seguranca-do-paciente'), 'bio-nsp-4', 'A Portaria nº 529/2013 define segurança do paciente como:', 'É a definição do art. 4º, I: redução, a um mínimo aceitável, do risco de dano desnecessário associado ao cuidado de saúde.', 'facil', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'nucleo-de-seguranca-do-paciente') and position = 0), 'definicoes-da-portaria-529', 3, 'published', '2026-10-03'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'bio-nsp-4');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-nsp-4'), 'A', 'a eliminação completa de qualquer risco no cuidado.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-nsp-4'), 'B', 'a redução, a um mínimo aceitável, do risco de dano desnecessário associado ao cuidado de saúde.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-nsp-4'), 'C', 'a garantia de que nenhum erro será cometido.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-nsp-4'), 'D', 'o conjunto de exames de rotina do paciente internado.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'bio-nsp-4') and label not in ('A', 'B', 'C', 'D');
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'nucleo-de-seguranca-do-paciente'), 'bio-nsp-5', 'O Programa Nacional de Segurança do Paciente (PNSP) foi instituído por:', 'O PNSP foi instituído pela Portaria GM/MS nº 529/2013. A RDC 36/2013 institui ações para a segurança do paciente nos serviços.', 'media', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'nucleo-de-seguranca-do-paciente') and position = 0), 'visao-geral', 4, 'published', '2026-10-03'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'bio-nsp-5');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-nsp-5'), 'A', 'RDC Anvisa nº 36/2013.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-nsp-5'), 'B', 'Portaria GM/MS nº 529/2013.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-nsp-5'), 'C', 'Lei nº 8.080/1990.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-nsp-5'), 'D', 'Resolução Cofen nº 564/2017.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'bio-nsp-5') and label not in ('A', 'B', 'C', 'D');
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'nucleo-de-seguranca-do-paciente'), 'bio-nsp-6', 'É objetivo específico do PNSP, segundo o art. 3º da Portaria nº 529/2013:', 'Os objetivos específicos incluem envolver pacientes e familiares, ampliar o acesso da sociedade às informações, produzir conhecimento e incluir o tema no ensino.', 'media', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'nucleo-de-seguranca-do-paciente') and position = 0), 'objetivos-do-pnsp', 5, 'published', '2026-10-03'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'bio-nsp-6');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-nsp-6'), 'A', 'punir os profissionais envolvidos em eventos adversos.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-nsp-6'), 'B', 'envolver os pacientes e familiares nas ações de segurança do paciente.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-nsp-6'), 'C', 'substituir as comissões de controle de infecção hospitalar.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-nsp-6'), 'D', 'credenciar hospitais para receber recursos federais.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'bio-nsp-6') and label not in ('A', 'B', 'C', 'D');
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'nucleo-de-seguranca-do-paciente'), 'bio-nsp-7', 'A técnica percebe, antes de administrar, que pegou o medicamento de outro paciente e corrige a tempo, sem dano. Pela Portaria nº 529/2013, essa situação é um:', 'Incidente é a circunstância que poderia ter resultado, ou resultou, em dano. Como não houve dano, não é evento adverso.', 'media', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'nucleo-de-seguranca-do-paciente') and position = 0), 'caso', 6, 'published', '2026-10-03'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'bio-nsp-7');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-nsp-7'), 'A', 'evento adverso.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-nsp-7'), 'B', 'incidente.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-nsp-7'), 'C', 'dano.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-nsp-7'), 'D', 'evento sentinela.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'bio-nsp-7') and label not in ('A', 'B', 'C', 'D');
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'nucleo-de-seguranca-do-paciente'), 'bio-nsp-8', 'Pela RDC nº 36/2013, é competência do Núcleo de Segurança do Paciente:', 'Entre as competências do art. 7º estão elaborar e manter o PSP, implantar protocolos, analisar incidentes e notificar eventos adversos ao SNVS.', 'dificil', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'nucleo-de-seguranca-do-paciente') and position = 1), 'nsp-e-plano', 7, 'published', '2026-10-03'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'bio-nsp-8');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-nsp-8'), 'A', 'constituir a direção do serviço de saúde.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-nsp-8'), 'B', 'elaborar, implantar, divulgar e manter atualizado o Plano de Segurança do Paciente.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-nsp-8'), 'C', 'emitir a licença sanitária do estabelecimento.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'bio-nsp-8'), 'D', 'prescrever a assistência de enfermagem.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'bio-nsp-8') and label not in ('A', 'B', 'C', 'D');

-- ═════ Urgência e Emergência
insert into public.categories (product_id, slug, title, short_title, description, tone, icon, position, status)
values ((select id from public.products where key = 'revisao-tecnico-enfermagem'), 'urgencia-e-emergencia', 'Urgência e Emergência', 'Urgência', 'Rede de Atenção às Urgências: componentes e diretrizes.', 'rose', '🚑', 3, 'published')
on conflict (product_id, slug) do update set title = excluded.title, short_title = excluded.short_title,
  description = excluded.description, tone = excluded.tone, icon = excluded.icon, position = excluded.position, status = excluded.status;

-- tema: Rede de Atenção às Urgências: componentes
insert into public.topics (category_id, slug, title, description, summary, key_points, sections, outline, reading_minutes, position, status, last_reviewed_at, review_notes)
values ((select id from public.categories where product_id = (select id from public.products where key = 'revisao-tecnico-enfermagem') and slug = 'urgencia-e-emergencia'), 'rede-de-atencao-as-urgencias-componentes', 'Rede de Atenção às Urgências: componentes', 'Os oito componentes da RUE na Portaria GM/MS nº 1.600/2011.', 'A Portaria GM/MS nº 1.600/2011 reformulou a Política Nacional de Atenção às Urgências e instituiu a Rede de Atenção às Urgências (RUE) no SUS. O art. 4º lista oito componentes: Promoção, Prevenção e Vigilância à Saúde; Atenção Básica em Saúde; Serviço de Atendimento Móvel de Urgência (SAMU 192) e suas Centrais de Regulação Médica das Urgências; Sala de Estabilização; Força Nacional de Saúde do SUS; Unidades de Pronto Atendimento (UPA 24h) e o conjunto de serviços de urgência 24 horas; Hospitalar; e Atenção Domiciliar. Na Atenção Básica, o objetivo inclui o primeiro cuidado às urgências e emergências, em ambiente adequado, até a transferência para outros pontos de atenção quando necessário, com acolhimento e avaliação de riscos e vulnerabilidades.', array['São 8 componentes (art. 4º).', 'A Atenção Básica é componente: faz o primeiro cuidado às urgências.', 'SAMU 192 vem junto das Centrais de Regulação Médica das Urgências.', 'Sala de Estabilização e Força Nacional de Saúde do SUS são componentes próprios.', 'UPA 24h + conjunto de serviços de urgência 24 horas.', 'Hospitalar e Atenção Domiciliar fecham a lista.']::text[], '[{"id":"finalidade-da-rue","kind":"conceito","title":"Para que existe a RUE","source":0,"blocks":[{"type":"definition","term":"Rede de Atenção às Urgências (Portaria 1.600/2011)","text":"Organizada para ==articular e integrar todos os equipamentos de saúde==, ampliando e qualificando o acesso humanizado e integral aos usuários em situação de urgência e emergência, de forma ágil e oportuna."},{"type":"cards","items":[{"title":"Base de tudo","text":"==Acolhimento com classificação do risco==, qualidade e resolutividade são a base dos fluxos assistenciais da RUE.","icon":"🚦","tone":"rose"},{"title":"Linhas prioritárias","text":"Cuidado ==cardiovascular, cerebrovascular e traumatológico==.","icon":"❤️","tone":"amber"}]}]},{"id":"oito-componentes","kind":"classificacao","title":"Os 8 componentes (art. 4º)","lead":"Pense no caminho do paciente: prevenir → primeiro cuidado → chegar → estabilizar → internar → casa.","source":0,"blocks":[{"type":"steps","items":[{"title":"Promoção, Prevenção e Vigilância à Saúde","text":"Antes da urgência acontecer."},{"title":"Atenção Básica em Saúde","text":"Ampliar acesso, fortalecer vínculo e fazer o ==primeiro cuidado== às urgências até a transferência, com acolhimento e avaliação de riscos e vulnerabilidades."},{"title":"SAMU 192 e Centrais de Regulação Médica das Urgências","text":"Chegar ==precocemente à vítima== após um agravo e garantir transporte a serviço adequado."},{"title":"Sala de Estabilização","text":"Ambiente para ==estabilizar pacientes críticos e/ou graves==, com assistência 24 h, articulado aos outros níveis."},{"title":"Força Nacional de Saúde do SUS","text":"Garantir a integralidade em situações de risco ou emergência para populações vulneráveis e regiões de difícil acesso."},{"title":"UPA 24h e conjunto de serviços de urgência 24 horas","text":"==Complexidade intermediária==, entre a Atenção Básica e a rede hospitalar."},{"title":"Hospitalar","text":"Portas de urgência, enfermarias de retaguarda, leitos de cuidados intensivos, diagnóstico e linhas prioritárias."},{"title":"Atenção Domiciliar","text":"Ações integradas de promoção, prevenção, tratamento e reabilitação ==no domicílio==."}]}]},{"id":"upa-entre-os-niveis","kind":"cuidados","title":"Onde cada serviço fica","source":0,"blocks":[{"type":"compare","columns":["Atenção Básica","UPA 24h","Hospitalar"],"rows":[{"label":"Papel na urgência","cells":["Primeiro cuidado até a transferência","Atendimento resolutivo a quadros agudos; complexidade intermediária","Portas de urgência, retaguarda e cuidados intensivos"]},{"label":"Posição","cells":["Porta de entrada do território","==Entre== a Atenção Básica e a rede hospitalar","Maior densidade tecnológica"]}]}]},{"id":"como-a-banca-cobra","kind":"cobrado","title":"Como a banca cobra","source":0,"blocks":[{"type":"traps","items":[{"wrong":"A Atenção Básica não faz parte da RUE.","right":"É componente: faz o ==primeiro cuidado== às urgências."},{"wrong":"A Farmácia Popular é componente da RUE.","right":"Não está entre os ==8 componentes== do art. 4º."},{"wrong":"O SAMU é componente isolado.","right":"SAMU 192 ==e suas Centrais de Regulação Médica== das Urgências formam um componente."},{"wrong":"A UPA é serviço de alta complexidade.","right":"UPA = ==complexidade intermediária==."}]}]}]'::jsonb, array['Para que existe a RUE', 'Os 8 componentes (art. 4º)', 'Onde cada serviço fica', 'Como a banca cobra']::text[], 3, 0, 'published', '2026-10-02'::date, 'Conferido contra o texto da fonte em 2026-10-02 (conferência automatizada durante o desenvolvimento). Seções visuais e 3ª questão conferidas contra o texto original em 2026-10-03. Recomenda-se revisão por enfermeiro(a) antes da venda. Conferir, na revisão humana, a redação consolidada vigente da portaria.')
on conflict (slug) do update set category_id = excluded.category_id, title = excluded.title, description = excluded.description,
  summary = excluded.summary, key_points = excluded.key_points, sections = excluded.sections, outline = excluded.outline,
  reading_minutes = excluded.reading_minutes, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at, review_notes = excluded.review_notes;
insert into public.topic_sources (topic_id, position, source_title, source_organization, source_url, source_accessed_at, locator)
values ((select id from public.topics where slug = 'rede-de-atencao-as-urgencias-componentes'), 0, 'Portaria GM/MS nº 1.600, de 7 de julho de 2011 (Rede de Atenção às Urgências)', 'Ministério da Saúde — Saúde Legis', 'https://bvsms.saude.gov.br/bvs/saudelegis/gm/2011/prt1600_07_07_2011.html', '2026-10-02'::date, 'arts. 3º, 4º e 6º a 12')
on conflict (topic_id, position) do update set source_title = excluded.source_title, source_organization = excluded.source_organization,
  source_url = excluded.source_url, source_accessed_at = excluded.source_accessed_at, locator = excluded.locator;
delete from public.topic_sources s where s.topic_id = (select id from public.topics where slug = 'rede-de-atencao-as-urgencias-componentes') and s.position >= 1
  and not exists (select 1 from public.questions x where x.source_id = s.id);
insert into public.visual_maps (topic_id, title, spec, status, last_reviewed_at)
values ((select id from public.topics where slug = 'rede-de-atencao-as-urgencias-componentes'), 'RUE — 8 componentes', '{"layout":"hub","center":"Rede de Atenção às Urgências","blocks":[{"title":"Antes da urgência","tone":"green","icon":"🌱","items":["Promoção, Prevenção e Vigilância","Atenção Básica (primeiro cuidado)"]},{"title":"Chegar rápido","tone":"rose","icon":"🚑","items":["SAMU 192 + Regulação Médica","Força Nacional de Saúde do SUS"]},{"title":"Estabilizar","tone":"amber","icon":"🏥","items":["Sala de Estabilização","UPA 24h e serviços 24 h"]},{"title":"Continuar o cuidado","tone":"blue","icon":"🏠","items":["Hospitalar","Atenção Domiciliar"]}]}'::jsonb, 'published', '2026-10-02'::date)
on conflict (topic_id) do update set title = excluded.title, spec = excluded.spec, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'rede-de-atencao-as-urgencias-componentes'), 'urg-rue-1', 'De acordo com a Portaria GM/MS nº 1.600/2011, NÃO é componente da Rede de Atenção às Urgências:', 'Os componentes do art. 4º são: Promoção, Prevenção e Vigilância; Atenção Básica; SAMU 192 e Centrais de Regulação; Sala de Estabilização; Força Nacional de Saúde do SUS; UPA 24h e serviços 24 h; Hospitalar; Atenção Domiciliar. Farmácia Popular não está na lista.', 'facil', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'rede-de-atencao-as-urgencias-componentes') and position = 0), 'oito-componentes', 0, 'published', '2026-10-02'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'urg-rue-1');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'urg-rue-1'), 'A', 'Atenção Básica em Saúde.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'urg-rue-1'), 'B', 'Sala de Estabilização.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'urg-rue-1'), 'C', 'Atenção Domiciliar.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'urg-rue-1'), 'D', 'Farmácia Popular.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'urg-rue-1') and label not in ('A', 'B', 'C', 'D');
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'rede-de-atencao-as-urgencias-componentes'), 'urg-rue-2', 'Segundo a Portaria GM/MS nº 1.600/2011, o componente Atenção Básica em Saúde da RUE tem, entre seus objetivos:', 'O art. 6º fala em ampliação do acesso, fortalecimento do vínculo e primeiro cuidado às urgências e emergências até a transferência, com acolhimento e avaliação de riscos e vulnerabilidades.', 'media', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'rede-de-atencao-as-urgencias-componentes') and position = 0), 'oito-componentes', 1, 'published', '2026-10-02'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'urg-rue-2');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'urg-rue-2'), 'A', 'realizar exclusivamente o transporte inter-hospitalar.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'urg-rue-2'), 'B', 'o primeiro cuidado às urgências e emergências, em ambiente adequado, até a transferência a outros pontos de atenção quando necessário.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'urg-rue-2'), 'C', 'substituir as UPA 24h nos municípios de pequeno porte.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'urg-rue-2'), 'D', 'atender apenas casos eletivos, encaminhando toda urgência ao hospital.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'urg-rue-2') and label not in ('A', 'B', 'C', 'D');
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'rede-de-atencao-as-urgencias-componentes'), 'urg-rue-3', 'Na Rede de Atenção às Urgências (Portaria GM/MS nº 1.600/2011), a UPA 24h é definida como estabelecimento de complexidade:', 'A portaria define a UPA 24h como estabelecimento de complexidade intermediária, entre a Atenção Básica e a Rede Hospitalar.', 'facil', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'rede-de-atencao-as-urgencias-componentes') and position = 0), 'oito-componentes', 2, 'published', '2026-10-02'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'urg-rue-3');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'urg-rue-3'), 'A', 'baixa, substituta da Atenção Básica.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'urg-rue-3'), 'B', 'intermediária, situado entre a Atenção Básica e a Rede Hospitalar.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'urg-rue-3'), 'C', 'alta, com leitos de terapia intensiva.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'urg-rue-3'), 'D', 'exclusivamente ambulatorial e eletiva.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'urg-rue-3') and label not in ('A', 'B', 'C', 'D');

-- tema: Rede de Atenção às Urgências: diretrizes
insert into public.topics (category_id, slug, title, description, summary, key_points, sections, outline, reading_minutes, position, status, last_reviewed_at, review_notes)
values ((select id from public.categories where product_id = (select id from public.products where key = 'revisao-tecnico-enfermagem') and slug = 'urgencia-e-emergencia'), 'rede-de-atencao-as-urgencias-diretrizes', 'Rede de Atenção às Urgências: diretrizes', 'Acolhimento com classificação de risco, regionalização e humanização.', 'O art. 2º da Portaria GM/MS nº 1.600/2011 traz as diretrizes da Rede de Atenção às Urgências. Entre elas: ampliação do acesso e acolhimento aos casos agudos em todos os pontos de atenção, contemplando a classificação de risco e a intervenção adequada; garantia da universalidade, equidade e integralidade no atendimento às urgências clínicas, cirúrgicas, gineco-obstétricas, psiquiátricas, pediátricas e às relacionadas a causas externas (traumatismos, violências e acidentes); regionalização do atendimento com acesso regulado; humanização da atenção, com modelo centrado no usuário; modelo de atenção multiprofissional, com trabalho em equipe e linhas de cuidado; articulação e integração dos serviços em rede; e atuação territorial, organizando as regiões de saúde a partir das necessidades da população.', array['Acolhimento aos casos agudos com classificação de risco em todos os pontos de atenção.', 'Universalidade, equidade e integralidade no atendimento às urgências.', 'Urgências clínicas, cirúrgicas, gineco-obstétricas, psiquiátricas, pediátricas e causas externas.', 'Regionalização com acesso regulado.', 'Humanização: modelo centrado no usuário.', 'Trabalho multiprofissional e linhas de cuidado.']::text[], '[{"id":"acolhimento-com-classificacao","kind":"conceito","title":"A diretriz que abre a lista","source":0,"blocks":[{"type":"definition","term":"Inciso I do art. 2º","text":"Ampliação do acesso e ==acolhimento aos casos agudos== demandados aos serviços de saúde ==em todos os pontos de atenção==, contemplando a ==classificação de risco== e a intervenção adequada e necessária aos diferentes agravos."}]},{"id":"as-diretrizes","kind":"classificacao","title":"As diretrizes do art. 2º, agrupadas","source":0,"blocks":[{"type":"cards","items":[{"title":"Acesso e justiça","text":"Acolhimento com classificação de risco. ==Universalidade, equidade e integralidade== no atendimento às urgências clínicas, cirúrgicas, gineco-obstétricas, psiquiátricas, pediátricas e por causas externas.","icon":"⚖️","tone":"blue"},{"title":"Organização em rede","text":"==Regionalização== com acesso regulado. Articulação e integração dos serviços em rede. ==Regulação articulada== entre todos os componentes.","icon":"🕸️","tone":"amber"},{"title":"Modo de cuidar","text":"==Humanização== centrada no usuário. Modelo ==multiprofissional==, trabalho em equipe e linhas de cuidado.","icon":"🤝","tone":"green"},{"title":"Território","text":"Atuação territorial, definindo regiões de saúde a partir de necessidades, riscos e vulnerabilidades.","icon":"📍","tone":"teal"},{"title":"Qualidade e gestão","text":"Monitoramento por indicadores de desempenho e resolutividade. Articulação interfederativa. ==Educação permanente== das equipes.","icon":"📈","tone":"violet"},{"title":"Sociedade e crises","text":"Participação e controle social. Projetos estratégicos para emergências, calamidades e desastres.","icon":"🌐","tone":"rose"}]}]},{"id":"causas-externas","kind":"cuidados","title":"Quais urgências a rede cobre","source":0,"blocks":[{"type":"checklist","items":["Clínicas","Cirúrgicas","Gineco-obstétricas","Psiquiátricas","Pediátricas","Causas externas: ==traumatismos, violências e acidentes=="]}]},{"id":"como-a-banca-cobra","kind":"cobrado","title":"Como a banca cobra","source":0,"blocks":[{"type":"traps","items":[{"wrong":"O acolhimento com classificação de risco só existe no pronto-socorro hospitalar.","right":"Deve ocorrer ==em todos os pontos de atenção==."},{"wrong":"Causas externas são doenças infecciosas importadas.","right":"Causas externas = ==traumatismos, violências e acidentes==."},{"wrong":"A portaria da RUE repete os princípios do art. 7º da Lei 8.080, com ''igualdade''.","right":"Aqui a diretriz fala em ==equidade==, além de universalidade e integralidade."}]}]}]'::jsonb, array['A diretriz que abre a lista', 'As diretrizes do art. 2º, agrupadas', 'Quais urgências a rede cobre', 'Como a banca cobra']::text[], 2, 1, 'published', '2026-10-02'::date, 'Conferido contra o texto da fonte em 2026-10-02 (conferência automatizada durante o desenvolvimento). Seções visuais e 3ª questão conferidas contra o texto original em 2026-10-03. Recomenda-se revisão por enfermeiro(a) antes da venda. Conferir, na revisão humana, a redação consolidada vigente da portaria.')
on conflict (slug) do update set category_id = excluded.category_id, title = excluded.title, description = excluded.description,
  summary = excluded.summary, key_points = excluded.key_points, sections = excluded.sections, outline = excluded.outline,
  reading_minutes = excluded.reading_minutes, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at, review_notes = excluded.review_notes;
insert into public.topic_sources (topic_id, position, source_title, source_organization, source_url, source_accessed_at, locator)
values ((select id from public.topics where slug = 'rede-de-atencao-as-urgencias-diretrizes'), 0, 'Portaria GM/MS nº 1.600, de 7 de julho de 2011 (Rede de Atenção às Urgências)', 'Ministério da Saúde — Saúde Legis', 'https://bvsms.saude.gov.br/bvs/saudelegis/gm/2011/prt1600_07_07_2011.html', '2026-10-02'::date, 'art. 2º')
on conflict (topic_id, position) do update set source_title = excluded.source_title, source_organization = excluded.source_organization,
  source_url = excluded.source_url, source_accessed_at = excluded.source_accessed_at, locator = excluded.locator;
delete from public.topic_sources s where s.topic_id = (select id from public.topics where slug = 'rede-de-atencao-as-urgencias-diretrizes') and s.position >= 1
  and not exists (select 1 from public.questions x where x.source_id = s.id);
insert into public.visual_maps (topic_id, title, spec, status, last_reviewed_at)
values ((select id from public.topics where slug = 'rede-de-atencao-as-urgencias-diretrizes'), 'Diretrizes da RUE', '{"layout":"hub","center":"Portaria 1.600/2011 · art. 2º","blocks":[{"title":"Porta de entrada","tone":"rose","icon":"🚦","items":["Acolhimento dos casos agudos","Classificação de risco"]},{"title":"Para todos","tone":"blue","icon":"⚖️","items":["Universalidade, equidade, integralidade","Clínicas, cirúrgicas, obstétricas, psiquiátricas, pediátricas, causas externas"]},{"title":"Em rede","tone":"amber","icon":"🕸️","items":["Regionalização e acesso regulado","Serviços articulados e integrados"]},{"title":"Jeito de cuidar","tone":"green","icon":"🤝","items":["Humanização centrada no usuário","Equipe multiprofissional, linhas de cuidado"]}],"footnote":"Aqui a portaria usa ''equidade'' — diferente do art. 7º da Lei 8.080."}'::jsonb, 'published', '2026-10-02'::date)
on conflict (topic_id) do update set title = excluded.title, spec = excluded.spec, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'rede-de-atencao-as-urgencias-diretrizes'), 'urg-dir-1', 'Entre as diretrizes da Rede de Atenção às Urgências (Portaria GM/MS nº 1.600/2011), está a ampliação do acesso e do acolhimento aos casos agudos em todos os pontos de atenção, contemplando:', 'É o inciso I do art. 2º: acolhimento aos casos agudos contemplando a classificação de risco e a intervenção adequada.', 'facil', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'rede-de-atencao-as-urgencias-diretrizes') and position = 0), 'acolhimento-com-classificacao', 0, 'published', '2026-10-02'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'urg-dir-1');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'urg-dir-1'), 'A', 'o atendimento por ordem de chegada, sem distinção de gravidade.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'urg-dir-1'), 'B', 'a classificação de risco e a intervenção adequada e necessária aos diferentes agravos.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'urg-dir-1'), 'C', 'o encaminhamento obrigatório de todos os casos ao hospital.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'urg-dir-1'), 'D', 'a cobrança de coparticipação nos casos não urgentes.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'urg-dir-1') and label not in ('A', 'B', 'C', 'D');
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'rede-de-atencao-as-urgencias-diretrizes'), 'urg-dir-2', 'Pela Portaria GM/MS nº 1.600/2011, a garantia de universalidade, equidade e integralidade no atendimento às urgências inclui as urgências relacionadas a causas externas, que são:', 'O inciso II do art. 2º descreve as causas externas como traumatismos, violências e acidentes.', 'facil', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'rede-de-atencao-as-urgencias-diretrizes') and position = 0), 'causas-externas', 1, 'published', '2026-10-02'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'urg-dir-2');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'urg-dir-2'), 'A', 'doenças crônicas descompensadas.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'urg-dir-2'), 'B', 'traumatismos, violências e acidentes.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'urg-dir-2'), 'C', 'atendimentos de outros países.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'urg-dir-2'), 'D', 'consultas eletivas de especialistas.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'urg-dir-2') and label not in ('A', 'B', 'C', 'D');
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'rede-de-atencao-as-urgencias-diretrizes'), 'urg-dir-3', 'Segundo a Portaria GM/MS nº 1.600/2011, o acolhimento aos casos agudos com classificação de risco deve ocorrer:', 'O inciso I do art. 2º fala em acolhimento aos casos agudos demandados aos serviços de saúde em todos os pontos de atenção, contemplando a classificação de risco.', 'facil', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'rede-de-atencao-as-urgencias-diretrizes') and position = 0), 'acolhimento-com-classificacao', 2, 'published', '2026-10-02'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'urg-dir-3');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'urg-dir-3'), 'A', 'somente nas portas hospitalares de urgência.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'urg-dir-3'), 'B', 'apenas nas UPAs 24h.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'urg-dir-3'), 'C', 'em todos os pontos de atenção.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'urg-dir-3'), 'D', 'somente no atendimento pré-hospitalar do SAMU.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'urg-dir-3') and label not in ('A', 'B', 'C', 'D');

-- tema: RCP no adulto: suporte básico de vida
insert into public.topics (category_id, slug, title, description, summary, key_points, sections, outline, reading_minutes, position, status, last_reviewed_at, review_notes)
values ((select id from public.categories where product_id = (select id from public.products where key = 'revisao-tecnico-enfermagem') and slug = 'urgencia-e-emergencia'), 'rcp-adulto-suporte-basico', 'RCP no adulto: suporte básico de vida', 'Parâmetros da RCP de alta qualidade (diretrizes AHA 2025).', 'PENDENTE DE REVISÃO. Este tema deve ser escrito a partir das diretrizes de 2025 da American Heart Association (frequência e profundidade das compressões, retorno do tórax, relação compressão-ventilação, interrupções). O documento oficial não pôde ser baixado para conferência durante o desenvolvimento (acesso bloqueado), então nenhum parâmetro foi publicado.', '{}'::text[], '[]'::jsonb, '{}'::text[], 2, 2, 'review_required', null, 'Fonte oficial (cpr.heart.org / ahajournals) respondeu 403 ao download automatizado em 2026-10-02. Não publicar nenhum número de memória: baixar o PDF manualmente, conferir e só então escrever resumo, mapa e questões.')
on conflict (slug) do update set category_id = excluded.category_id, title = excluded.title, description = excluded.description,
  summary = excluded.summary, key_points = excluded.key_points, sections = excluded.sections, outline = excluded.outline,
  reading_minutes = excluded.reading_minutes, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at, review_notes = excluded.review_notes;
insert into public.topic_sources (topic_id, position, source_title, source_organization, source_url, source_accessed_at, locator)
values ((select id from public.topics where slug = 'rcp-adulto-suporte-basico'), 0, 'Destaques das Diretrizes de 2025 da American Heart Association para RCP e ACE', 'American Heart Association', 'https://cpr.heart.org/-/media/CPR-Files/2025-documents-for-cpr-heart-edits-posting/Resuscitation-Science/JN1580_PTBR_Hghlghts_2025ECCGuidelines_Final_251021.pdf', '2026-10-02'::date, null)
on conflict (topic_id, position) do update set source_title = excluded.source_title, source_organization = excluded.source_organization,
  source_url = excluded.source_url, source_accessed_at = excluded.source_accessed_at, locator = excluded.locator;
delete from public.topic_sources s where s.topic_id = (select id from public.topics where slug = 'rcp-adulto-suporte-basico') and s.position >= 1
  and not exists (select 1 from public.questions x where x.source_id = s.id);
insert into public.visual_maps (topic_id, title, spec, status, last_reviewed_at)
values ((select id from public.topics where slug = 'rcp-adulto-suporte-basico'), 'RCP no adulto', '{"layout":"flow","center":"Pendente de revisão","blocks":[{"title":"Pendente","tone":"slate","items":["Conferir na fonte oficial antes de publicar"]}]}'::jsonb, 'review_required', null)
on conflict (topic_id) do update set title = excluded.title, spec = excluded.spec, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;

-- ═════ Saúde da Mulher
insert into public.categories (product_id, slug, title, short_title, description, tone, icon, position, status)
values ((select id from public.products where key = 'revisao-tecnico-enfermagem'), 'saude-da-mulher', 'Saúde da Mulher', 'Saúde da Mulher', 'Pré-natal: idade gestacional e data provável do parto.', 'violet', '🤰', 4, 'published')
on conflict (product_id, slug) do update set title = excluded.title, short_title = excluded.short_title,
  description = excluded.description, tone = excluded.tone, icon = excluded.icon, position = excluded.position, status = excluded.status;

-- tema: Cálculo da idade gestacional
insert into public.topics (category_id, slug, title, description, summary, key_points, sections, outline, reading_minutes, position, status, last_reviewed_at, review_notes)
values ((select id from public.categories where product_id = (select id from public.products where key = 'revisao-tecnico-enfermagem') and slug = 'saude-da-mulher'), 'calculo-da-idade-gestacional', 'Cálculo da idade gestacional', 'Pela DUM, quando a DUM é incerta e pela altura uterina.', 'O Caderno de Atenção Básica nº 32 (pré-natal de baixo risco) explica que os métodos para estimar a idade gestacional dependem da data da última menstruação (DUM), o primeiro dia de sangramento do último ciclo. Com a DUM conhecida e certa, usa-se o calendário (somar os dias entre a DUM e a consulta e dividir por sete, resultado em semanas) ou o disco gestograma. Se a data é desconhecida mas se sabe o período do mês, considera-se dia 5 (início), 15 (meio) ou 25 (fim). Sem data nem período, a estimativa é aproximada pela altura uterina e pelo toque vaginal, além da data de início dos movimentos fetais, que habitualmente ocorrem entre 18 e 20 semanas. Parâmetros do caderno: na 12ª semana o útero enche a pelve e é palpável na sínfise púbica; na 16ª semana o fundo uterino fica entre a sínfise e a cicatriz umbilical; na 20ª semana, na altura da cicatriz umbilical. Quando não for possível determinar clinicamente, solicita-se a ultrassonografia obstétrica o mais precocemente possível.', array['DUM = 1º dia do último sangramento menstrual.', 'Calendário: dias desde a DUM ÷ 7 = semanas.', 'DUM incerta: início, meio, fim do mês = dia 5, 15, 25.', 'Movimentos fetais: habitualmente entre 18 e 20 semanas.', '12 semanas: útero palpável na sínfise púbica.', '16 semanas: fundo entre a sínfise e a cicatriz umbilical.', '20 semanas: fundo na altura da cicatriz umbilical.']::text[], '[{"id":"o-que-e-dum","kind":"conceito","title":"Tudo começa na DUM","source":0,"blocks":[{"type":"definition","term":"DUM — data da última menstruação","text":"O ==primeiro dia de sangramento== do último ciclo menstrual referido pela mulher.","note":"O método pela DUM é o de escolha para mulheres com ciclos regulares e sem uso de anticoncepcional hormonal."}]},{"id":"qual-metodo-usar","kind":"classificacao","title":"Qual método usar: depende do que ela sabe","source":0,"blocks":[{"type":"compare","columns":["Situação","Como calcular"],"rows":[{"label":"I","cells":["DUM ==conhecida e certa==","Calendário: somar os dias entre a DUM e a consulta e ==dividir por 7== (semanas). Ou disco gestograma."]},{"label":"II","cells":["DUM desconhecida, mas sabe ==o período do mês==","Início = dia ==5== · meio = dia ==15== · fim = dia ==25==. Depois, usar calendário ou disco."]},{"label":"III","cells":["Não sabe data ==nem período==","Aproximação pela ==altura uterina== e toque vaginal, mais a data de início dos movimentos fetais."]}]},{"type":"callout","variant":"dica","title":"Movimentos fetais","text":"Habitualmente começam entre ==18 e 20 semanas==."}]},{"id":"altura-uterina","kind":"etapas","title":"Altura do útero semana a semana","lead":"Para quando não há data: o tamanho do útero conta a história.","source":0,"blocks":[{"type":"timeline","items":[{"when":"Até 6 sem","what":"Não há alteração do tamanho uterino."},{"when":"8 sem","what":"Útero = dobro do tamanho normal."},{"when":"10 sem","what":"Útero = três vezes o tamanho habitual."},{"when":"12 sem","what":"Enche a pelve: ==palpável na sínfise púbica==."},{"when":"16 sem","what":"Fundo ==entre a sínfise púbica e a cicatriz umbilical==."},{"when":"20 sem","what":"Fundo ==na altura da cicatriz umbilical==."},{"when":"Após 20 sem","what":"Relação direta entre semanas e altura uterina — menos fiel a partir de 30 semanas."}]},{"type":"callout","variant":"atencao","title":"Ainda em dúvida?","text":"Se não for possível determinar clinicamente, solicitar ==ultrassonografia obstétrica o mais precocemente possível==."}]},{"id":"exercicio-calendario","kind":"pratica","title":"Exercício: pelo calendário","source":0,"blocks":[{"type":"example","title":"Exercício de estudo","given":["DUM: 1º de março","Consulta: 31 de maio (mesmo ano)"],"steps":["Março: 31 − 1 = 30 dias","Abril: 30 dias","Maio: 31 dias","Total: 30 + 30 + 31 = 91 dias","91 ÷ 7 = 13"],"answer":"13 semanas de idade gestacional"}]},{"id":"como-a-banca-cobra","kind":"cobrado","title":"Como a banca cobra","source":0,"blocks":[{"type":"traps","items":[{"wrong":"DUM é o último dia da última menstruação.","right":"É o ==primeiro dia== de sangramento do último ciclo."},{"wrong":"''Meio do mês'' = considerar o dia 10.","right":"Início/meio/fim = dias ==5, 15 e 25==."},{"wrong":"Na 16ª semana, o fundo uterino está na cicatriz umbilical.","right":"Cicatriz umbilical = ==20ª semana==. 16ª = entre a sínfise e a cicatriz."}]}]}]'::jsonb, array['Tudo começa na DUM', 'Qual método usar: depende do que ela sabe', 'Altura do útero semana a semana', 'Exercício: pelo calendário', 'Como a banca cobra']::text[], 3, 0, 'published', '2026-10-02'::date, 'Conferido contra o texto da fonte em 2026-10-02 (conferência automatizada durante o desenvolvimento). Seções visuais e 3ª questão conferidas contra o texto original em 2026-10-03. Recomenda-se revisão por enfermeiro(a) antes da venda.')
on conflict (slug) do update set category_id = excluded.category_id, title = excluded.title, description = excluded.description,
  summary = excluded.summary, key_points = excluded.key_points, sections = excluded.sections, outline = excluded.outline,
  reading_minutes = excluded.reading_minutes, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at, review_notes = excluded.review_notes;
insert into public.topic_sources (topic_id, position, source_title, source_organization, source_url, source_accessed_at, locator)
values ((select id from public.topics where slug = 'calculo-da-idade-gestacional'), 0, 'Cadernos de Atenção Básica nº 32 — Atenção ao pré-natal de baixo risco (2012)', 'Ministério da Saúde', 'https://bvsms.saude.gov.br/bvs/publicacoes/cadernos_atencao_basica_32_prenatal.pdf', '2026-10-02'::date, 'item 5.5 — Cálculo da idade gestacional')
on conflict (topic_id, position) do update set source_title = excluded.source_title, source_organization = excluded.source_organization,
  source_url = excluded.source_url, source_accessed_at = excluded.source_accessed_at, locator = excluded.locator;
delete from public.topic_sources s where s.topic_id = (select id from public.topics where slug = 'calculo-da-idade-gestacional') and s.position >= 1
  and not exists (select 1 from public.questions x where x.source_id = s.id);
insert into public.visual_maps (topic_id, title, spec, status, last_reviewed_at)
values ((select id from public.topics where slug = 'calculo-da-idade-gestacional'), 'Idade gestacional', '{"layout":"flow","center":"Qual informação você tem?","blocks":[{"title":"DUM certa","tone":"violet","icon":"📅","items":["Dias até hoje ÷ 7","ou disco gestograma"]},{"title":"Só o período do mês","tone":"blue","icon":"🗓️","items":["Início → dia 5","Meio → dia 15","Fim → dia 25"]},{"title":"Sem data","tone":"amber","icon":"📏","items":["12 sem: palpável na sínfise","16 sem: entre sínfise e umbigo","20 sem: na cicatriz umbilical","Dúvida → USG obstétrica"]}]}'::jsonb, 'published', '2026-10-02'::date)
on conflict (topic_id) do update set title = excluded.title, spec = excluded.spec, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'calculo-da-idade-gestacional'), 'mulher-ig-1', 'Uma gestante não lembra a data da última menstruação, mas sabe que foi no meio do mês. Segundo o Caderno de Atenção Básica nº 32, para o cálculo considera-se como DUM o dia:', 'Para início, meio e fim do mês, o caderno manda considerar os dias 5, 15 e 25, respectivamente.', 'facil', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'calculo-da-idade-gestacional') and position = 0), 'qual-metodo-usar', 0, 'published', '2026-10-02'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'mulher-ig-1');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'mulher-ig-1'), 'A', '1.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'mulher-ig-1'), 'B', '10.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'mulher-ig-1'), 'C', '15.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'mulher-ig-1'), 'D', '20.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'mulher-ig-1') and label not in ('A', 'B', 'C', 'D');
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'calculo-da-idade-gestacional'), 'mulher-ig-2', 'Pelos parâmetros do Caderno de Atenção Básica nº 32, o fundo do útero encontra-se na altura da cicatriz umbilical por volta da:', '12ª semana: palpável na sínfise púbica; 16ª: entre a sínfise e a cicatriz umbilical; 20ª: na altura da cicatriz umbilical.', 'media', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'calculo-da-idade-gestacional') and position = 0), 'altura-uterina', 1, 'published', '2026-10-02'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'mulher-ig-2');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'mulher-ig-2'), 'A', '8ª semana.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'mulher-ig-2'), 'B', '12ª semana.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'mulher-ig-2'), 'C', '16ª semana.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'mulher-ig-2'), 'D', '20ª semana.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'mulher-ig-2') and label not in ('A', 'B', 'C', 'D');
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'calculo-da-idade-gestacional'), 'mulher-ig-3', 'Pelo Caderno de Atenção Básica nº 32, o início dos movimentos fetais, usado para estimar a idade gestacional quando a DUM é desconhecida, habitualmente ocorre entre:', 'O caderno diz que os movimentos fetais habitualmente ocorrem entre 18 e 20 semanas.', 'facil', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'calculo-da-idade-gestacional') and position = 0), 'qual-metodo-usar', 2, 'published', '2026-10-02'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'mulher-ig-3');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'mulher-ig-3'), 'A', '8 e 10 semanas.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'mulher-ig-3'), 'B', '12 e 14 semanas.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'mulher-ig-3'), 'C', '18 e 20 semanas.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'mulher-ig-3'), 'D', '28 e 30 semanas.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'mulher-ig-3') and label not in ('A', 'B', 'C', 'D');

-- tema: Data provável do parto: Regra de Näegele
insert into public.topics (category_id, slug, title, description, summary, key_points, sections, outline, reading_minutes, position, status, last_reviewed_at, review_notes)
values ((select id from public.categories where product_id = (select id from public.products where key = 'revisao-tecnico-enfermagem') and slug = 'saude-da-mulher'), 'regra-de-naegele-data-provavel-do-parto', 'Data provável do parto: Regra de Näegele', 'Some 7 aos dias e ajuste o mês — com exemplos resolvidos.', 'O Caderno de Atenção Básica nº 32 calcula a data provável do parto (DPP) pela duração média da gestação normal: 280 dias, ou 40 semanas, a partir da DUM, usando calendário ou disco gestograma. A outra forma é a Regra de Näegele: somar sete dias ao primeiro dia da última menstruação e subtrair três meses do mês em que ela ocorreu — ou adicionar nove meses, se a DUM for de janeiro a março. Quando o número de dias passar do total de dias do mês, os dias excedentes vão para o mês seguinte e soma-se 1 ao mês no final do cálculo. Exemplo do caderno: DUM 27/01 → 27 + 7 = 34; 34 − 31 = 3; mês 1 + 9 + 1 = 11 → DPP 03/11.', array['Gestação média: 280 dias (40 semanas) a partir da DUM.', 'Dia: DUM + 7.', 'Mês: − 3 (ou + 9 se a DUM for de janeiro a março).', 'Passou dos dias do mês: excedente vai para o mês seguinte e o mês ganha + 1.', 'Exemplo do CAB 32: DUM 13/09 → DPP 20/06.']::text[], '[{"id":"base-do-calculo","kind":"conceito","title":"A base: 280 dias","source":0,"blocks":[{"type":"definition","term":"Data provável do parto (DPP)","text":"Calculada pela duração média da gestação normal: ==280 dias ou 40 semanas a partir da DUM==, com calendário ou disco gestograma — ou pela Regra de Näegele."}]},{"id":"passo-a-passo","kind":"etapas","title":"Regra de Näegele, passo a passo","source":0,"blocks":[{"type":"steps","items":[{"title":"Dia: some 7","text":"Primeiro dia da DUM ==+ 7==."},{"title":"Mês: tire 3 (ou some 9)","text":"Abril a dezembro: ==− 3== (o parto cai no ano seguinte). Janeiro a março: ==+ 9== (mesmo ano)."},{"title":"Passou do mês? Ajuste","text":"Se os dias ultrapassarem o total do mês da DUM, os excedentes vão para o mês seguinte e soma-se ==+ 1 ao mês== no final."}]},{"type":"formula","label":"Em uma linha","expression":"DPP = (dia + 7) / (mês − 3 ou mês + 9)","legend":["Ajuste +1 no mês quando o dia passar do total de dias do mês da DUM"]}]},{"id":"exemplos-do-caderno","kind":"pratica","title":"Exemplos do Caderno 32","source":0,"blocks":[{"type":"example","title":"DUM no fim do ano","given":["DUM: 13/09"],"steps":["Dia: 13 + 7 = 20","Mês: 9 − 3 = 6"],"answer":"DPP: 20/06"},{"type":"example","title":"DUM em janeiro, com ajuste de mês","given":["DUM: 27/01"],"steps":["Dia: 27 + 7 = 34","Passou de 31 dias: 34 − 31 = 3, e soma 1 ao mês","Mês: 1 + 9 + 1 = 11"],"answer":"DPP: 03/11"}]},{"id":"como-a-banca-cobra","kind":"cobrado","title":"Como a banca cobra","source":0,"blocks":[{"type":"traps","items":[{"wrong":"Some 7 dias e 3 meses.","right":"Some 7 dias e ==subtraia== 3 meses (ou some 9 se for de janeiro a março)."},{"wrong":"DUM em maio: DPP no mesmo ano.","right":"Subtraiu 3 meses → o parto cai ==no ano seguinte==."},{"wrong":"DUM 27/01 → DPP 34/10.","right":"Passou de 31 dias: 34 − 31 = 03 e ==+1 no mês== → 03/11."}]}]}]'::jsonb, array['A base: 280 dias', 'Regra de Näegele, passo a passo', 'Exemplos do Caderno 32', 'Como a banca cobra']::text[], 2, 1, 'published', '2026-10-02'::date, 'Conferido contra o texto da fonte em 2026-10-02 (conferência automatizada durante o desenvolvimento). Seções visuais e 3ª questão conferidas contra o texto original em 2026-10-03. Recomenda-se revisão por enfermeiro(a) antes da venda. Alternativas numéricas geradas por src/core/calc/naegele (testada com os 3 exemplos do CAB 32).')
on conflict (slug) do update set category_id = excluded.category_id, title = excluded.title, description = excluded.description,
  summary = excluded.summary, key_points = excluded.key_points, sections = excluded.sections, outline = excluded.outline,
  reading_minutes = excluded.reading_minutes, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at, review_notes = excluded.review_notes;
insert into public.topic_sources (topic_id, position, source_title, source_organization, source_url, source_accessed_at, locator)
values ((select id from public.topics where slug = 'regra-de-naegele-data-provavel-do-parto'), 0, 'Cadernos de Atenção Básica nº 32 — Atenção ao pré-natal de baixo risco (2012)', 'Ministério da Saúde', 'https://bvsms.saude.gov.br/bvs/publicacoes/cadernos_atencao_basica_32_prenatal.pdf', '2026-10-02'::date, 'item 5.6 — Cálculo da data provável do parto')
on conflict (topic_id, position) do update set source_title = excluded.source_title, source_organization = excluded.source_organization,
  source_url = excluded.source_url, source_accessed_at = excluded.source_accessed_at, locator = excluded.locator;
delete from public.topic_sources s where s.topic_id = (select id from public.topics where slug = 'regra-de-naegele-data-provavel-do-parto') and s.position >= 1
  and not exists (select 1 from public.questions x where x.source_id = s.id);
insert into public.visual_maps (topic_id, title, spec, status, last_reviewed_at)
values ((select id from public.topics where slug = 'regra-de-naegele-data-provavel-do-parto'), 'Regra de Näegele', '{"layout":"flow","center":"DUM → DPP","blocks":[{"title":"1. Dia","tone":"violet","icon":"➕","items":["Dia da DUM + 7"]},{"title":"2. Mês","tone":"blue","icon":"🔁","items":["Abril a dezembro: − 3 (ano seguinte)","Janeiro a março: + 9 (mesmo ano)"]},{"title":"3. Passou do mês?","tone":"amber","icon":"↪️","items":["Tira os dias do mês da DUM","Soma 1 ao mês"]}],"footnote":"Exemplo: DUM 27/01 → 34 − 31 = 03 · 1 + 9 + 1 = 11 → DPP 03/11."}'::jsonb, 'published', '2026-10-02'::date)
on conflict (topic_id) do update set title = excluded.title, spec = excluded.spec, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'regra-de-naegele-data-provavel-do-parto'), 'mulher-dpp-1', 'Exercício de estudo: DUM em 20/05/2026. Pela Regra de Näegele, a data provável do parto é:', 'Maio é depois de março, então subtrai 3 meses e vai para o ano seguinte. Dia: 20 + 7 = 27. Mês: 5 − 3 = 2. DPP = 27/02/2027.', 'media', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'regra-de-naegele-data-provavel-do-parto') and position = 0), 'passo-a-passo', 0, 'published', '2026-10-02'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'mulher-dpp-1');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'mulher-dpp-1'), 'A', '27/02/2027', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'mulher-dpp-1'), 'B', '27/08/2026', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'mulher-dpp-1'), 'C', '13/02/2027', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'mulher-dpp-1'), 'D', '27/02/2026', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'mulher-dpp-1') and label not in ('A', 'B', 'C', 'D');
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'regra-de-naegele-data-provavel-do-parto'), 'mulher-dpp-2', 'Exercício de estudo: DUM em 26/01/2026. Pela Regra de Näegele, a data provável do parto é:', 'Janeiro está entre janeiro e março, então soma 9 meses no mesmo ano. Dia: 26 + 7 = 33. Passou de 31 dias: 33 − 31 = 2, e soma 1 ao mês. Mês: 1 + 9 + 1 = 11. DPP = 02/11/2026.', 'dificil', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'regra-de-naegele-data-provavel-do-parto') and position = 0), 'exemplos-do-caderno', 1, 'published', '2026-10-02'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'mulher-dpp-2');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'mulher-dpp-2'), 'A', '02/10/2026', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'mulher-dpp-2'), 'B', '02/11/2026', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'mulher-dpp-2'), 'C', '02/11/2027', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'mulher-dpp-2'), 'D', '01/11/2026', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'mulher-dpp-2') and label not in ('A', 'B', 'C', 'D');
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'regra-de-naegele-data-provavel-do-parto'), 'mulher-dpp-3', 'Segundo o Caderno de Atenção Básica nº 32, a data provável do parto pelo calendário considera a duração média da gestação normal de:', 'O item 5.6 usa a duração média da gestação normal: 280 dias ou 40 semanas, a partir da DUM.', 'facil', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'regra-de-naegele-data-provavel-do-parto') and position = 0), 'base-do-calculo', 2, 'published', '2026-10-02'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'mulher-dpp-3');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'mulher-dpp-3'), 'A', '240 dias (36 semanas) a partir da DUM.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'mulher-dpp-3'), 'B', '280 dias (40 semanas) a partir da DUM.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'mulher-dpp-3'), 'C', '280 dias a partir da primeira consulta de pré-natal.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'mulher-dpp-3'), 'D', '300 dias (43 semanas) a partir da DUM.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'mulher-dpp-3') and label not in ('A', 'B', 'C', 'D');

-- ═════ Saúde da Criança
insert into public.categories (product_id, slug, title, short_title, description, tone, icon, position, status)
values ((select id from public.products where key = 'revisao-tecnico-enfermagem'), 'saude-da-crianca', 'Saúde da Criança', 'Saúde da Criança', 'Amamentação e triagem neonatal (teste do pezinho).', 'amber', '👶', 5, 'published')
on conflict (product_id, slug) do update set title = excluded.title, short_title = excluded.short_title,
  description = excluded.description, tone = excluded.tone, icon = excluded.icon, position = excluded.position, status = excluded.status;

-- tema: Aleitamento materno
insert into public.topics (category_id, slug, title, description, summary, key_points, sections, outline, reading_minutes, position, status, last_reviewed_at, review_notes)
values ((select id from public.categories where product_id = (select id from public.products where key = 'revisao-tecnico-enfermagem') and slug = 'saude-da-crianca'), 'aleitamento-materno', 'Aleitamento materno', 'Exclusivo até 6 meses, continuado até 2 anos ou mais.', 'O Guia Alimentar para Crianças Brasileiras Menores de 2 Anos (Ministério da Saúde, 2019) recomenda que a criança seja amamentada já na primeira hora de vida e por 2 anos ou mais. Nos primeiros 6 meses, a recomendação é que ela receba somente leite materno — a amamentação exclusiva. Nesse período nenhum outro alimento é necessário: nem líquidos como água, água de coco, chá, suco ou outros leites, nem papinha ou mingau. Mesmo em regiões secas e quentes não é preciso oferecer água, porque o leite materno tem toda a água necessária; em dias quentes a criança pode querer mamar com mais frequência. Oferecer outros alimentos antes dos 6 meses, além de desnecessário, pode prejudicar: aumenta o risco de adoecer e pode atrapalhar a absorção de nutrientes do leite materno, como ferro e zinco. O guia orienta amamentar em livre demanda e diz que não há tempo máximo estabelecido para o fim da amamentação.', array['Amamentar já na primeira hora de vida.', 'Exclusivo até os 6 meses: só leite materno.', 'Sem água, chá, suco ou outros leites na amamentação exclusiva — nem em dias quentes.', 'Continuar até 2 anos ou mais.', 'Outros alimentos antes dos 6 meses podem prejudicar a absorção de ferro e zinco.', 'Livre demanda: sempre que a criança pedir.']::text[], '[{"id":"recomendacao","kind":"conceito","title":"A recomendação","source":0,"blocks":[{"type":"timeline","items":[{"when":"1ª hora de vida","what":"Começar a amamentar. Contato ==pele a pele== com a mãe por pelo menos 1 hora, independentemente do tipo de parto."},{"when":"0 a 6 meses","what":"Amamentação ==exclusiva==: só leite materno."},{"when":"6 meses a 2 anos ou mais","what":"Leite materno + outros alimentos. ==Não há tempo máximo== estabelecido para parar."}]},{"type":"definition","term":"Amamentação exclusiva","text":"A criança recebe ==somente leite materno==. Nenhum outro alimento é necessário: nem líquidos (água, água de coco, chá, suco, outros leites), nem papinha ou mingau."}]},{"id":"por-que-amamentar","kind":"classificacao","title":"Por que amamentar","source":0,"blocks":[{"type":"cards","items":[{"title":"Criança","text":"Protege contra ==diarreia, pneumonia e otite==; previne asma, diabetes e obesidade no futuro; exercita boca e face (respiração, mastigação, fala).","icon":"👶","tone":"amber"},{"title":"Mulher","text":"Reduz chance de ==câncer de mama, ovário e útero== e diabetes tipo 2; exclusiva até 6 meses pode aumentar o intervalo entre partos.","icon":"🤱","tone":"rose"},{"title":"Vínculo e família","text":"Aproxima mãe e filho; é mais barato que outros leites e não exige preparo.","icon":"💛","tone":"green"},{"title":"Colostro","text":"O leite dos primeiros dias: ==mais proteínas, rico em anticorpos==. A ''descida do leite'' (apojadura) costuma ocorrer do ==3º ao 5º dia== pós-parto.","icon":"🥛","tone":"blue"}]}]},{"id":"como-amamentar","kind":"cuidados","title":"Como orientar a mamada","source":0,"blocks":[{"type":"checklist","title":"Sinais de pega adequada","items":["Boca bem aberta","Lábios virados para fora","Queixo encostado na mama","Aréola mais visível acima do que abaixo da boca"]},{"type":"dodont","do":["Livre demanda: sempre que a criança quiser, dia e noite (8 a 12 vezes ao dia ou mais nos primeiros meses)","Deixar esvaziar bem uma mama antes de passar para a outra","Começar a próxima mamada pela mama oferecida por último","Retirar um pouco de leite se a mama estiver muito cheia e dura"],"dont":["Oferecer água ou chá em dias quentes no período exclusivo","Esperar a criança chorar para oferecer o peito","Oferecer mamadeira (confunde a sucção e é fonte de contaminação)","Oferecer chupeta sem refletir: a criança tende a mamar menos tempo"]}]},{"id":"como-a-banca-cobra","kind":"cobrado","title":"Como a banca cobra","source":0,"blocks":[{"type":"traps","items":[{"wrong":"Em regiões quentes, o bebê em aleitamento exclusivo precisa de água.","right":"Não precisa: o leite materno tem ==toda a água necessária==; ele pode querer mamar mais vezes."},{"wrong":"A amamentação deve terminar aos 2 anos.","right":"==2 anos ou mais==; não há tempo máximo estabelecido."},{"wrong":"Chá antes dos 6 meses é inofensivo.","right":"Outros alimentos antes dos 6 meses podem ==aumentar o risco de adoecer== e atrapalhar a absorção de ferro e zinco."}]}]}]'::jsonb, array['A recomendação', 'Por que amamentar', 'Como orientar a mamada', 'Como a banca cobra']::text[], 3, 0, 'published', '2026-10-02'::date, 'Conferido contra o texto da fonte em 2026-10-02 (conferência automatizada durante o desenvolvimento). Seções visuais e 3ª questão conferidas contra o texto original em 2026-10-03. Recomenda-se revisão por enfermeiro(a) antes da venda.')
on conflict (slug) do update set category_id = excluded.category_id, title = excluded.title, description = excluded.description,
  summary = excluded.summary, key_points = excluded.key_points, sections = excluded.sections, outline = excluded.outline,
  reading_minutes = excluded.reading_minutes, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at, review_notes = excluded.review_notes;
insert into public.topic_sources (topic_id, position, source_title, source_organization, source_url, source_accessed_at, locator)
values ((select id from public.topics where slug = 'aleitamento-materno'), 0, 'Guia alimentar para crianças brasileiras menores de 2 anos (2019)', 'Ministério da Saúde', 'http://189.28.128.100/dab/docs/portaldab/publicacoes/guia_da_crianca_2019.pdf', '2026-10-02'::date, 'capítulo ''Amamentação até os 2 anos ou mais e exclusiva até os 6 meses'' e orientações de como amamentar')
on conflict (topic_id, position) do update set source_title = excluded.source_title, source_organization = excluded.source_organization,
  source_url = excluded.source_url, source_accessed_at = excluded.source_accessed_at, locator = excluded.locator;
delete from public.topic_sources s where s.topic_id = (select id from public.topics where slug = 'aleitamento-materno') and s.position >= 1
  and not exists (select 1 from public.questions x where x.source_id = s.id);
insert into public.visual_maps (topic_id, title, spec, status, last_reviewed_at)
values ((select id from public.topics where slug = 'aleitamento-materno'), 'Aleitamento materno', '{"layout":"flow","center":"Guia Alimentar < 2 anos (MS, 2019)","blocks":[{"title":"1ª hora de vida","tone":"amber","icon":"🤱","items":["Começar a amamentar"]},{"title":"0 a 6 meses","tone":"green","icon":"🍼","items":["Só leite materno","Sem água, chá, suco, outros leites","Livre demanda"]},{"title":"6 meses a 2 anos ou mais","tone":"blue","icon":"🥣","items":["Leite materno + outros alimentos","Sem tempo máximo para parar"]}]}'::jsonb, 'published', '2026-10-02'::date)
on conflict (topic_id) do update set title = excluded.title, spec = excluded.spec, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'aleitamento-materno'), 'crianca-am-1', 'Segundo o Guia Alimentar para Crianças Brasileiras Menores de 2 Anos (MS, 2019), em dias muito quentes, um bebê de 3 meses em amamentação exclusiva:', 'O guia é explícito: mesmo em regiões secas e quentes não é necessário oferecer água a crianças alimentadas só com leite materno; em dias quentes, ela poderá querer mamar com mais frequência.', 'facil', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'aleitamento-materno') and position = 0), 'recomendacao', 0, 'published', '2026-10-02'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'crianca-am-1');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'crianca-am-1'), 'A', 'deve receber água filtrada entre as mamadas.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'crianca-am-1'), 'B', 'deve receber chá ou água de coco para hidratar.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'crianca-am-1'), 'C', 'não precisa de água, pois o leite materno tem toda a água necessária; ele pode querer mamar com mais frequência.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'crianca-am-1'), 'D', 'deve iniciar suco natural de frutas.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'crianca-am-1') and label not in ('A', 'B', 'C', 'D');
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'aleitamento-materno'), 'crianca-am-2', 'A recomendação do Ministério da Saúde no Guia Alimentar para Crianças Menores de 2 Anos é amamentação:', 'Exclusiva nos primeiros 6 meses e por 2 anos ou mais; o guia diz que não há tempo máximo estabelecido para o fim.', 'facil', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'aleitamento-materno') and position = 0), 'recomendacao', 1, 'published', '2026-10-02'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'crianca-am-2');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'crianca-am-2'), 'A', 'exclusiva até 4 meses e continuada até 1 ano.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'crianca-am-2'), 'B', 'exclusiva até 6 meses e continuada até 2 anos ou mais.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'crianca-am-2'), 'C', 'exclusiva até 1 ano.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'crianca-am-2'), 'D', 'exclusiva até 6 meses, com interrupção obrigatória aos 2 anos.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'crianca-am-2') and label not in ('A', 'B', 'C', 'D');
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'aleitamento-materno'), 'crianca-am-3', 'De acordo com o Guia Alimentar para Crianças Brasileiras Menores de 2 Anos, é sinal de pega adequada na amamentação:', 'O guia cita como sinais de pega favorável: boca bem aberta, lábios virados para fora, queixo encostado na mama e aréola aparecendo mais acima do que abaixo da boca.', 'media', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'aleitamento-materno') and position = 0), 'como-amamentar', 2, 'published', '2026-10-02'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'crianca-am-3');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'crianca-am-3'), 'A', 'lábios virados para dentro e bochechas encovadas.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'crianca-am-3'), 'B', 'boca bem aberta, lábios virados para fora e queixo encostado na mama.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'crianca-am-3'), 'C', 'o bebê abocanhar apenas o mamilo.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'crianca-am-3'), 'D', 'aréola mais visível abaixo do que acima da boca.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'crianca-am-3') and label not in ('A', 'B', 'C', 'D');

-- tema: Teste do pezinho (triagem neonatal)
insert into public.topics (category_id, slug, title, description, summary, key_points, sections, outline, reading_minutes, position, status, last_reviewed_at, review_notes)
values ((select id from public.categories where product_id = (select id from public.products where key = 'revisao-tecnico-enfermagem') and slug = 'saude-da-crianca'), 'teste-do-pezinho-triagem-neonatal', 'Teste do pezinho (triagem neonatal)', 'Período ideal de coleta, técnica e a ampliação da Lei 14.154/2021.', 'O Manual Técnico de Triagem Neonatal Biológica (Ministério da Saúde, 2016) recomenda que a primeira amostra do teste do pezinho seja colhida entre o 3º e o 5º dia de vida do bebê; coleta após o 28º dia é considerada exceção, por estar fora do período neonatal. Na técnica, o calcanhar deve ficar abaixo do nível do coração, com o bebê no colo do acompanhante em pé. A assepsia é feita com algodão ou gaze levemente umedecidos em álcool 70%, aguardando a secagem completa; álcool iodado ou antisséptico colorido não devem ser usados, porque interferem nos resultados. A punção é feita numa das laterais da região plantar do calcanhar, com lanceta própria. O manual de 2016 descreve seis doenças no escopo do programa. A Lei nº 14.154/2021 alterou o ECA e prevê a ampliação escalonada do teste no SUS em cinco etapas, começando pela fenilcetonúria, hipotireoidismo congênito, doença falciforme, fibrose cística, hiperplasia adrenal congênita, deficiência de biotinidase e toxoplasmose congênita.', array['1ª amostra: entre o 3º e o 5º dia de vida.', 'Após o 28º dia: coleta de exceção (fora do período neonatal).', 'Calcanhar abaixo do nível do coração.', 'Assepsia com álcool 70% e secagem completa; nunca álcool iodado ou antisséptico colorido.', 'Punção numa das laterais da região plantar do calcanhar.', 'Lei 14.154/2021: ampliação escalonada em 5 etapas.']::text[], '[{"id":"quando-coletar","kind":"conceito","title":"Quando coletar","source":0,"blocks":[{"type":"timeline","items":[{"when":"3º ao 5º dia de vida","what":"Período ==ideal== para a 1ª amostra."},{"when":"Após o 28º dia","what":"Coleta de ==exceção==: fora do período neonatal (ex.: dificuldade de acesso, questões culturais, negligência)."}]}]},{"id":"tecnica-de-coleta","kind":"etapas","title":"Técnica de coleta, passo a passo","source":0,"blocks":[{"type":"steps","items":[{"title":"Posicionar","text":"Acompanhante em pé, bebê com a cabeça no ombro: ==calcanhar abaixo do nível do coração==."},{"title":"Assepsia","text":"Algodão ou gaze com ==álcool 70%==; massagear para ativar a circulação; ==aguardar a secagem completa==."},{"title":"Puncionar","text":"Numa das ==laterais da região plantar do calcanhar== (menor chance de atingir o osso)."},{"title":"Descartar a 1ª gota","text":"Retirar com algodão seco ou gaze: pode conter fluidos teciduais que interferem nos testes."},{"title":"Preencher os círculos","text":"Encostar o verso do papel-filtro na gota, com movimentos circulares, até preencher ==todo o círculo==. Nunca voltar a um círculo já coletado."},{"title":"Secar","text":"Temperatura ambiente, em ==posição horizontal==, sem contato com a área com sangue."}]},{"type":"dodont","do":["Álcool 70% e esperar secar","Deixar o sangue fluir naturalmente","Secar na horizontal, em temperatura ambiente"],"dont":["Álcool iodado ou antisséptico colorido (interferem nos resultados)","Tocar com os dedos a área dos círculos","Secar ao sol, em estufa ou com ventilação forçada","Empilhar amostras"]}]},{"id":"doencas-triadas","kind":"classificacao","title":"O que o teste rastreia","source":0,"blocks":[{"type":"checklist","title":"Escopo descrito no manual de 2016 (6 doenças)","items":["Fenilcetonúria","Hipotireoidismo congênito","Doença falciforme e outras hemoglobinopatias","Fibrose cística","Hiperplasia adrenal congênita","Deficiência de biotinidase"]}]},{"id":"lei-14154","kind":"atencao","title":"Ampliação pela Lei 14.154/2021","lead":"A lei alterou o ECA e prevê ampliação escalonada no SUS, em 5 etapas.","source":1,"blocks":[{"type":"timeline","items":[{"when":"Etapa 1","what":"Fenilcetonúria e outras hiperfenilalaninemias; hipotireoidismo congênito; doença falciforme e outras hemoglobinopatias; fibrose cística; hiperplasia adrenal congênita; deficiência de biotinidase; ==toxoplasmose congênita==."},{"when":"Etapa 2","what":"Galactosemias; aminoacidopatias; distúrbios do ciclo da ureia; distúrbios da betaoxidação dos ácidos graxos."},{"when":"Etapa 3","what":"Doenças lisossômicas."},{"when":"Etapa 4","what":"Imunodeficiências primárias."},{"when":"Etapa 5","what":"==Atrofia muscular espinhal==."}]},{"type":"callout","variant":"dica","title":"Orientação no pré-natal","text":"No pré-natal e no puerpério imediato, os profissionais devem informar a gestante sobre a importância do teste e as diferenças entre as modalidades do SUS e da rede privada."}]},{"id":"como-a-banca-cobra","kind":"cobrado","title":"Como a banca cobra","source":0,"blocks":[{"type":"traps","items":[{"wrong":"O ideal é coletar nas primeiras 24 horas de vida.","right":"Ideal: entre o ==3º e o 5º dia==."},{"wrong":"Assepsia com álcool iodado garante amostra estéril.","right":"Álcool iodado/colorido ==interferem nos resultados==: usar álcool 70%."},{"wrong":"Puncionar o centro do calcanhar.","right":"Uma das ==laterais da região plantar== do calcanhar."},{"wrong":"Toxoplasmose congênita entra só na última etapa.","right":"Está na ==etapa 1== da Lei 14.154/2021."}]}]}]'::jsonb, array['Quando coletar', 'Técnica de coleta, passo a passo', 'O que o teste rastreia', 'Ampliação pela Lei 14.154/2021', 'Como a banca cobra']::text[], 3, 1, 'published', '2026-10-02'::date, 'Conferido contra o texto da fonte em 2026-10-02 (conferência automatizada durante o desenvolvimento). Seções visuais e 3ª questão conferidas contra o texto original em 2026-10-03. Recomenda-se revisão por enfermeiro(a) antes da venda. O manual é de 2016 (seis doenças no escopo). A Lei 14.154/2021 prevê ampliação escalonada: conferir na revisão humana em que etapa a implementação está.')
on conflict (slug) do update set category_id = excluded.category_id, title = excluded.title, description = excluded.description,
  summary = excluded.summary, key_points = excluded.key_points, sections = excluded.sections, outline = excluded.outline,
  reading_minutes = excluded.reading_minutes, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at, review_notes = excluded.review_notes;
insert into public.topic_sources (topic_id, position, source_title, source_organization, source_url, source_accessed_at, locator)
values ((select id from public.topics where slug = 'teste-do-pezinho-triagem-neonatal'), 0, 'Triagem neonatal biológica — Manual técnico (2016)', 'Ministério da Saúde', 'https://bvsms.saude.gov.br/bvs/publicacoes/triagem_neonatal_biologica_manual_tecnico.pdf', '2026-10-02'::date, '''Data ideal para a coleta'', ''Procedimentos de coleta'' e ''Secagem da amostra''')
on conflict (topic_id, position) do update set source_title = excluded.source_title, source_organization = excluded.source_organization,
  source_url = excluded.source_url, source_accessed_at = excluded.source_accessed_at, locator = excluded.locator;
insert into public.topic_sources (topic_id, position, source_title, source_organization, source_url, source_accessed_at, locator)
values ((select id from public.topics where slug = 'teste-do-pezinho-triagem-neonatal'), 1, 'Lei nº 14.154, de 26 de maio de 2021 (amplia o teste do pezinho)', 'Presidência da República — Planalto', 'https://www.planalto.gov.br/ccivil_03/_ato2019-2022/2021/lei/l14154.htm', '2026-10-02'::date, 'art. 1º (altera o art. 10 do ECA)')
on conflict (topic_id, position) do update set source_title = excluded.source_title, source_organization = excluded.source_organization,
  source_url = excluded.source_url, source_accessed_at = excluded.source_accessed_at, locator = excluded.locator;
delete from public.topic_sources s where s.topic_id = (select id from public.topics where slug = 'teste-do-pezinho-triagem-neonatal') and s.position >= 2
  and not exists (select 1 from public.questions x where x.source_id = s.id);
insert into public.visual_maps (topic_id, title, spec, status, last_reviewed_at)
values ((select id from public.topics where slug = 'teste-do-pezinho-triagem-neonatal'), 'Teste do pezinho', '{"layout":"flow","center":"Coleta da 1ª amostra","blocks":[{"title":"Quando","tone":"amber","icon":"📅","items":["3º ao 5º dia de vida","Após 28º dia = exceção"]},{"title":"Como","tone":"green","icon":"🦶","items":["Calcanhar abaixo do coração","Álcool 70%, esperar secar","Lateral da região plantar do calcanhar"]},{"title":"Não usar","tone":"rose","icon":"⛔","items":["Álcool iodado","Antisséptico colorido"]},{"title":"Escopo","tone":"blue","icon":"📜","items":["Lei 14.154/2021: 5 etapas","Etapa 1 inclui toxoplasmose congênita"]}]}'::jsonb, 'published', '2026-10-02'::date)
on conflict (topic_id) do update set title = excluded.title, spec = excluded.spec, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'teste-do-pezinho-triagem-neonatal'), 'crianca-pezinho-1', 'Segundo o Manual Técnico de Triagem Neonatal Biológica (MS, 2016), o período ideal para a coleta da primeira amostra do teste do pezinho é:', 'O manual recomenda a 1ª amostra entre o 3º e o 5º dia de vida; após o 28º dia a coleta é considerada exceção.', 'facil', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'teste-do-pezinho-triagem-neonatal') and position = 0), 'quando-coletar', 0, 'published', '2026-10-02'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'crianca-pezinho-1');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'crianca-pezinho-1'), 'A', 'nas primeiras 12 horas de vida.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'crianca-pezinho-1'), 'B', 'entre o 3º e o 5º dia de vida.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'crianca-pezinho-1'), 'C', 'entre o 10º e o 15º dia de vida.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'crianca-pezinho-1'), 'D', 'no 28º dia de vida.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'crianca-pezinho-1') and label not in ('A', 'B', 'C', 'D');
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'teste-do-pezinho-triagem-neonatal'), 'crianca-pezinho-2', 'Na coleta do teste do pezinho, conforme o manual do Ministério da Saúde, a assepsia do calcanhar deve ser feita com:', 'O manual orienta álcool 70% e secagem completa antes da punção, e proíbe álcool iodado ou antisséptico colorido porque interferem nos resultados.', 'media', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'teste-do-pezinho-triagem-neonatal') and position = 0), 'tecnica-de-coleta', 1, 'published', '2026-10-02'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'crianca-pezinho-2');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'crianca-pezinho-2'), 'A', 'álcool iodado, para melhor antissepsia.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'crianca-pezinho-2'), 'B', 'clorexidina alcoólica colorida.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'crianca-pezinho-2'), 'C', 'algodão ou gaze levemente umedecidos com álcool 70%, aguardando a secagem completa.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'crianca-pezinho-2'), 'D', 'água e sabão, sem secar.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'crianca-pezinho-2') and label not in ('A', 'B', 'C', 'D');
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'teste-do-pezinho-triagem-neonatal'), 'crianca-pezinho-3', 'Na coleta do teste do pezinho, conforme o manual do Ministério da Saúde, a primeira gota de sangue que se forma após a punção deve ser:', 'O manual manda aguardar uma grande gota e retirar a primeira com algodão seco ou gaze, porque ela pode conter outros fluidos teciduais.', 'media', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'teste-do-pezinho-triagem-neonatal') and position = 0), 'tecnica-de-coleta', 2, 'published', '2026-10-02'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'crianca-pezinho-3');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'crianca-pezinho-3'), 'A', 'usada para preencher o primeiro círculo.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'crianca-pezinho-3'), 'B', 'retirada com algodão seco ou gaze, pois pode conter fluidos teciduais que interferem nos testes.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'crianca-pezinho-3'), 'C', 'espalhada sobre todos os círculos do papel-filtro.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'crianca-pezinho-3'), 'D', 'misturada ao álcool da assepsia para diluir.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'crianca-pezinho-3') and label not in ('A', 'B', 'C', 'D');

-- ═════ Ética e Legislação Profissional
insert into public.categories (product_id, slug, title, short_title, description, tone, icon, position, status)
values ((select id from public.products where key = 'revisao-tecnico-enfermagem'), 'etica-e-legislacao', 'Ética e Legislação Profissional', 'Ética', 'Lei 7.498 e Decreto 94.406, sistema Cofen/Coren, Código de Ética e penalidades.', 'slate', '⚖️', 6, 'published')
on conflict (product_id, slug) do update set title = excluded.title, short_title = excluded.short_title,
  description = excluded.description, tone = excluded.tone, icon = excluded.icon, position = excluded.position, status = excluded.status;

-- tema: Lei 7.498/86: o que cabe ao técnico
insert into public.topics (category_id, slug, title, description, summary, key_points, sections, outline, reading_minutes, position, status, last_reviewed_at, review_notes)
values ((select id from public.categories where product_id = (select id from public.products where key = 'revisao-tecnico-enfermagem') and slug = 'etica-e-legislacao'), 'lei-7498-atribuicoes-do-tecnico', 'Lei 7.498/86: o que cabe ao técnico', 'Quem pode exercer a enfermagem, enfermeiro × técnico × auxiliar, atividades privativas, o que o Decreto 94.406 detalha e a supervisão.', 'A Lei nº 7.498/1986 diz que a enfermagem é exercida privativamente pelo Enfermeiro, pelo Técnico de Enfermagem, pelo Auxiliar de Enfermagem e pela Parteira, e só por pessoas legalmente habilitadas e inscritas no Conselho Regional de Enfermagem com jurisdição na área. O Enfermeiro exerce todas as atividades de enfermagem; são privativas dele, entre outras, a direção do órgão de enfermagem e a chefia de serviço e de unidade, o planejamento, a organização, a coordenação, a execução e a avaliação dos serviços de assistência de enfermagem, a consultoria, auditoria e emissão de parecer, a consulta de enfermagem, a prescrição da assistência de enfermagem, os cuidados diretos a pacientes graves com risco de vida e os cuidados de maior complexidade técnica que exijam conhecimentos científicos e capacidade de decisão imediata. O Técnico de Enfermagem exerce atividade de nível médio, com orientação e acompanhamento do trabalho em grau auxiliar e participação no planejamento da assistência: participa da programação da assistência, executa ações assistenciais exceto as privativas do enfermeiro, participa da orientação e supervisão do trabalho em grau auxiliar e integra a equipe de saúde. O Auxiliar exerce atividades de nível médio de natureza repetitiva, sob supervisão, e participa em nível de execução simples. O Decreto nº 94.406/1987 detalha que o técnico assiste o enfermeiro no planejamento, na prestação de cuidados diretos a pacientes em estado grave, na prevenção de doenças transmissíveis, no controle da infecção hospitalar e na prevenção de danos ao paciente. Em instituições e programas de saúde, as atividades do técnico e do auxiliar só podem ser desempenhadas sob orientação e supervisão de enfermeiro.', array['Exercem a enfermagem: Enfermeiro, Técnico, Auxiliar e Parteira — só com inscrição no Coren da área.', 'Enfermeiro exerce TODAS as atividades de enfermagem.', 'Privativo do enfermeiro: chefia e direção, planejamento dos serviços, consulta e prescrição da assistência, cuidados a graves com risco de vida, maior complexidade técnica.', 'Técnico: participa da programação; executa ações, exceto as privativas; participa da orientação e supervisão em grau auxiliar; integra a equipe.', 'Auxiliar: atividades repetitivas, execução simples, sob supervisão.', 'Decreto 94.406: técnico ASSISTE o enfermeiro nos cuidados a pacientes em estado grave.', 'Técnico e auxiliar em instituições e programas de saúde: só sob orientação e supervisão de enfermeiro (art. 15).', 'Decreto, art. 13: atividades do técnico e do auxiliar sob supervisão, orientação e direção de enfermeiro.']::text[], '[{"id":"visao-geral","kind":"visao","title":"A lei que define o seu limite","source":0,"blocks":[{"type":"text","text":"Saber o que é ==privativo do enfermeiro== protege o técnico de executar o que não pode e responde a muitas questões de ''é atribuição do técnico, EXCETO''. A Lei 7.498 dá o quadro geral; o Decreto 94.406 detalha."},{"type":"definition","term":"Art. 2º","text":"A enfermagem é exercida ==privativamente== pelo Enfermeiro, pelo Técnico de Enfermagem, pelo Auxiliar de Enfermagem e pela Parteira, respeitados os graus de habilitação, e só por pessoas ==inscritas no Coren== com jurisdição na área onde ocorre o exercício."}]},{"id":"quem-faz-o-que","kind":"classificacao","title":"Enfermeiro × Técnico × Auxiliar","source":0,"blocks":[{"type":"compare","columns":["Enfermeiro (art. 11)","Técnico (art. 12)","Auxiliar (art. 13)"],"rows":[{"label":"Nível","cells":["Superior; exerce ==todas== as atividades de enfermagem","Nível médio: orientação e acompanhamento em ==grau auxiliar== e participação no planejamento","Nível médio, natureza ==repetitiva==, execução simples, sob supervisão"]},{"label":"Faz","cells":["Privativo: chefia e direção, planejamento dos serviços, consulta e prescrição da assistência, cuidados a graves com risco de vida, maior complexidade técnica","Participa da programação da assistência; executa ações ==exceto as privativas==; participa da orientação e supervisão em grau auxiliar; integra a equipe","Observa, reconhece e descreve sinais e sintomas; tratamento simples; higiene e conforto; integra a equipe"]}]}]},{"id":"privativas","kind":"conceito","title":"O que é privativo do enfermeiro (art. 11, I)","lead":"As alíneas d a g foram vetadas — não caem como privativas.","source":0,"blocks":[{"type":"checklist","items":["Direção do órgão de enfermagem e ==chefia de serviço e de unidade== de enfermagem","Organização e direção dos serviços de enfermagem nas empresas prestadoras","==Planejamento, organização, coordenação, execução e avaliação== dos serviços da assistência de enfermagem","Consultoria, auditoria e emissão de parecer sobre matéria de enfermagem","==Consulta de enfermagem==","==Prescrição da assistência de enfermagem==","==Cuidados diretos a pacientes graves com risco de vida==","Cuidados de ==maior complexidade técnica== que exijam conhecimentos científicos e decisões imediatas"]},{"type":"callout","variant":"atencao","title":"Como integrante da equipe (art. 11, II)","text":"O enfermeiro também prescreve ==medicamentos estabelecidos em programas de saúde pública e em rotina aprovada== pela instituição, assiste gestante, parturiente e puérpera e executa ==parto sem distocia== — mas isso não é ''privativo''."}]},{"id":"decreto-94406","kind":"etapas","title":"O que o Decreto 94.406/1987 detalha","lead":"O técnico ASSISTE o enfermeiro — o verbo é a chave.","source":1,"blocks":[{"type":"steps","items":[{"title":"Assistir ao enfermeiro (art. 10, I)","text":"No planejamento, programação, orientação e supervisão da assistência; na prestação de cuidados diretos a ==pacientes em estado grave==; na prevenção e controle das doenças transmissíveis; no controle sistemático da infecção hospitalar; na prevenção de danos físicos ao paciente.","who":"tecnico"},{"title":"Executar a assistência (art. 10, II)","text":"Atividades de assistência de enfermagem, ==excetuadas as privativas do enfermeiro==.","who":"tecnico"},{"title":"Integrar a equipe de saúde (art. 10, III)","who":"tecnico"},{"title":"Sob supervisão (art. 13)","text":"As atividades dos arts. 10 e 11 só podem ser exercidas ==sob supervisão, orientação e direção de enfermeiro==.","who":"enfermeiro"}]},{"type":"cards","items":[{"title":"Auxiliar no decreto (art. 11)","text":"Ministrar medicamentos por via oral e parenteral, controle hídrico, curativos, oxigenoterapia, nebulização, vacinas, coleta de material para exames, cuidados pré e pós-operatórios, entre outros.","icon":"🩹","tone":"blue"}]}]},{"id":"supervisao","kind":"tecnico","title":"Supervisão do enfermeiro na prática","source":0,"blocks":[{"type":"callout","variant":"lei","title":"Art. 15 da Lei 7.498","text":"As atividades do técnico e do auxiliar, quando exercidas em ==instituições de saúde, públicas e privadas, e em programas de saúde==, somente podem ser desempenhadas ==sob orientação e supervisão de enfermeiro==."},{"type":"dodont","do":["Executar a assistência dentro do que foi planejado e prescrito pelo enfermeiro","Assistir o enfermeiro nos cuidados ao paciente grave","Comunicar ao enfermeiro alterações observadas no paciente"],"dont":["Fazer consulta de enfermagem","Prescrever a assistência de enfermagem","Assumir sozinho o cuidado direto ao paciente grave com risco de vida","Assumir chefia de unidade de enfermagem"]}]},{"id":"numeros","kind":"numeros","title":"Números que caem","source":0,"blocks":[{"type":"numbers","items":[{"value":"4","label":"categorias que exercem a enfermagem","note":"enfermeiro, técnico, auxiliar, parteira"},{"value":"Art. 11","label":"atribuições do enfermeiro (I = privativas)"},{"value":"Art. 12","label":"atribuições do técnico"},{"value":"Art. 15","label":"supervisão do enfermeiro sobre técnico e auxiliar"},{"value":"Art. 10","label":"técnico no Decreto 94.406"}]}]},{"id":"caso","kind":"caso","title":"Situação-problema","source":0,"blocks":[{"type":"case","title":"Plantão sem enfermeiro na unidade","scenario":"Numa clínica privada, o enfermeiro faltou e a coordenação pede que a técnica mais experiente faça a consulta de enfermagem dos pacientes agendados e cuide sozinha de um paciente instável em risco de vida.","question":"O que a Lei 7.498 permite à técnica?","answer":"Nenhuma das duas: consulta de enfermagem e cuidados diretos a pacientes graves com risco de vida são privativos do enfermeiro; a técnica atua sob supervisão do enfermeiro e assiste nos cuidados ao grave.","reasoning":["Art. 11, I, i e l: consulta e cuidados a graves com risco de vida são privativos.","Art. 15: em instituições públicas e privadas, a técnica atua sob orientação e supervisão de enfermeiro.","Decreto 94.406, art. 10, I, b: o técnico assiste o enfermeiro nos cuidados ao paciente grave."]}]},{"id":"como-a-banca-cobra","kind":"cobrado","title":"Como a banca cobra","source":0,"blocks":[{"type":"traps","items":[{"wrong":"O técnico pode fazer a prescrição da assistência de enfermagem.","right":"Prescrição da assistência é ==privativa do enfermeiro== (art. 11, I, j).","why":"Ao técnico cabe executar, exceto o privativo."},{"wrong":"O técnico presta cuidados diretos a pacientes graves com risco de vida.","right":"Isso é privativo; o técnico ==assiste== o enfermeiro nesses cuidados.","why":"Lei, art. 11, I, l + Decreto, art. 10, I, b."},{"wrong":"Em hospital privado, o técnico pode atuar sem supervisão.","right":"Instituições ==públicas e privadas==: sob orientação e supervisão do enfermeiro.","why":"Art. 15."},{"wrong":"Basta ter diploma de técnico para exercer a profissão.","right":"É preciso estar ==inscrito no Coren== com jurisdição na área.","why":"Art. 2º."},{"wrong":"Participar da programação da assistência é privativo do enfermeiro.","right":"O técnico ==participa== da programação (art. 12, a).","why":"Planejar e coordenar os serviços é do enfermeiro; participar da programação é do técnico."},{"wrong":"O auxiliar e o técnico têm exatamente as mesmas atribuições.","right":"O auxiliar faz atividades ==repetitivas e de execução simples==; o técnico participa do planejamento e da orientação em grau auxiliar.","why":"Arts. 12 e 13."},{"wrong":"A consulta de enfermagem pode ser delegada ao técnico em falta de pessoal.","right":"Atividade ==privativa não se delega==, exceto em emergência (CEPE, art. 91).","why":"O Código de Ética proíbe delegar atividades privativas do enfermeiro."}]}]},{"id":"conexoes","kind":"conexoes","title":"Conexões","blocks":[{"type":"links","items":[{"slug":"codigo-de-etica-cofen-564","title":"Código de Ética (Resolução Cofen 564/2017)","why":"Direitos, deveres e proibições do profissional."},{"slug":"lei-5905-sistema-cofen-coren","title":"Lei 5.905/73: o sistema Cofen/Coren","why":"Quem fiscaliza o exercício e mantém a inscrição."},{"slug":"atencao-basica-pnab","title":"Atenção Básica: a PNAB","why":"As atribuições do técnico na UBS."}]}]}]'::jsonb, array['A lei que define o seu limite', 'Enfermeiro × Técnico × Auxiliar', 'O que é privativo do enfermeiro (art. 11, I)', 'O que o Decreto 94.406/1987 detalha', 'Supervisão do enfermeiro na prática', 'Números que caem', 'Situação-problema', 'Como a banca cobra', 'Conexões']::text[], 7, 0, 'published', '2026-10-03'::date, 'Padrão v2: cada seção foi escrita a partir do texto original da fonte, baixado e lido em 2026-10-03 (conferência automatizada durante o desenvolvimento). Revisão por enfermeiro(a) obrigatória antes da venda.')
on conflict (slug) do update set category_id = excluded.category_id, title = excluded.title, description = excluded.description,
  summary = excluded.summary, key_points = excluded.key_points, sections = excluded.sections, outline = excluded.outline,
  reading_minutes = excluded.reading_minutes, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at, review_notes = excluded.review_notes;
insert into public.topic_sources (topic_id, position, source_title, source_organization, source_url, source_accessed_at, locator)
values ((select id from public.topics where slug = 'lei-7498-atribuicoes-do-tecnico'), 0, 'Lei nº 7.498, de 25 de junho de 1986 (exercício da Enfermagem)', 'Presidência da República — Planalto', 'https://www.planalto.gov.br/ccivil_03/leis/l7498.htm', '2026-10-03'::date, 'arts. 2º, 11, 12, 13 e 15')
on conflict (topic_id, position) do update set source_title = excluded.source_title, source_organization = excluded.source_organization,
  source_url = excluded.source_url, source_accessed_at = excluded.source_accessed_at, locator = excluded.locator;
insert into public.topic_sources (topic_id, position, source_title, source_organization, source_url, source_accessed_at, locator)
values ((select id from public.topics where slug = 'lei-7498-atribuicoes-do-tecnico'), 1, 'Decreto nº 94.406, de 8 de junho de 1987 (regulamenta a Lei nº 7.498/1986)', 'Presidência da República — Planalto', 'https://www.planalto.gov.br/ccivil_03/decreto/1980-1989/d94406.htm', '2026-10-03'::date, 'arts. 10, 11 e 13')
on conflict (topic_id, position) do update set source_title = excluded.source_title, source_organization = excluded.source_organization,
  source_url = excluded.source_url, source_accessed_at = excluded.source_accessed_at, locator = excluded.locator;
delete from public.topic_sources s where s.topic_id = (select id from public.topics where slug = 'lei-7498-atribuicoes-do-tecnico') and s.position >= 2
  and not exists (select 1 from public.questions x where x.source_id = s.id);
insert into public.visual_maps (topic_id, title, spec, status, last_reviewed_at)
values ((select id from public.topics where slug = 'lei-7498-atribuicoes-do-tecnico'), 'Quem faz o quê', '{"layout":"compare","center":"Lei 7.498/1986 + Decreto 94.406/1987","blocks":[{"title":"Técnico de Enfermagem","tone":"teal","icon":"🧑‍⚕️","items":["Participa da programação da assistência","Executa ações, exceto as privativas","Assiste o enfermeiro com pacientes graves","Sob orientação e supervisão do enfermeiro"]},{"title":"Privativo do Enfermeiro","tone":"slate","icon":"🔒","items":["Consulta de enfermagem","Prescrição da assistência de enfermagem","Cuidados diretos a graves com risco de vida","Maior complexidade técnica"]}]}'::jsonb, 'published', '2026-10-03'::date)
on conflict (topic_id) do update set title = excluded.title, spec = excluded.spec, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'lei-7498-atribuicoes-do-tecnico'), 'etica-7498-1', 'De acordo com a Lei nº 7.498/1986, é atividade PRIVATIVA do Enfermeiro:', 'A prescrição da assistência de enfermagem está no art. 11, I (privativo do Enfermeiro). As outras alternativas estão no art. 12, entre as atribuições do Técnico.', 'facil', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'lei-7498-atribuicoes-do-tecnico') and position = 0), 'privativas', 0, 'published', '2026-10-03'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'etica-7498-1');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'etica-7498-1'), 'A', 'participar da equipe de saúde.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'etica-7498-1'), 'B', 'prescrição da assistência de enfermagem.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'etica-7498-1'), 'C', 'participar da programação da assistência de enfermagem.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'etica-7498-1'), 'D', 'executar ações assistenciais de enfermagem.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'etica-7498-1') and label not in ('A', 'B', 'C', 'D');
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'lei-7498-atribuicoes-do-tecnico'), 'etica-7498-2', 'Pelo art. 15 da Lei nº 7.498/1986, quando exercidas em instituições de saúde, públicas e privadas, e em programas de saúde, as atividades do Técnico e do Auxiliar de Enfermagem:', 'É a redação do art. 15: só sob orientação e supervisão de Enfermeiro.', 'facil', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'lei-7498-atribuicoes-do-tecnico') and position = 0), 'supervisao', 1, 'published', '2026-10-03'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'etica-7498-2');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'etica-7498-2'), 'A', 'dispensam supervisão após 5 anos de experiência.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'etica-7498-2'), 'B', 'somente podem ser desempenhadas sob orientação e supervisão de Enfermeiro.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'etica-7498-2'), 'C', 'são supervisionadas pelo médico plantonista.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'etica-7498-2'), 'D', 'podem ser supervisionadas por outro técnico mais antigo.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'etica-7498-2') and label not in ('A', 'B', 'C', 'D');
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'lei-7498-atribuicoes-do-tecnico'), 'etica-7498-3', 'Pelo Decreto nº 94.406/1987, na prestação de cuidados diretos de enfermagem a pacientes em estado grave, cabe ao Técnico de Enfermagem:', 'O art. 10, I, b do decreto diz que o técnico assiste ao Enfermeiro na prestação de cuidados diretos a pacientes em estado grave.', 'media', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'lei-7498-atribuicoes-do-tecnico') and position = 1), 'decreto-94406', 2, 'published', '2026-10-03'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'etica-7498-3');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'etica-7498-3'), 'A', 'assumir sozinho o cuidado, por ser atividade de nível médio.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'etica-7498-3'), 'B', 'assistir ao Enfermeiro.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'etica-7498-3'), 'C', 'prescrever os cuidados de enfermagem.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'etica-7498-3'), 'D', 'nenhuma participação, pois é atividade exclusiva do médico.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'etica-7498-3') and label not in ('A', 'B', 'C', 'D');
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'lei-7498-atribuicoes-do-tecnico'), 'etica-7498-4', 'Segundo a Lei nº 7.498/1986, a enfermagem só pode ser exercida por pessoas legalmente habilitadas e:', 'Art. 2º: exercício privativo das categorias habilitadas, inscritas no Coren com jurisdição na área.', 'facil', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'lei-7498-atribuicoes-do-tecnico') and position = 0), 'visao-geral', 3, 'published', '2026-10-03'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'etica-7498-4');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'etica-7498-4'), 'A', 'filiadas a sindicato da categoria.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'etica-7498-4'), 'B', 'inscritas no Conselho Regional de Enfermagem com jurisdição na área onde ocorre o exercício.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'etica-7498-4'), 'C', 'aprovadas em concurso público.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'etica-7498-4'), 'D', 'registradas no Ministério da Saúde.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'etica-7498-4') and label not in ('A', 'B', 'C', 'D');
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'lei-7498-atribuicoes-do-tecnico'), 'etica-7498-5', 'É atribuição do Técnico de Enfermagem prevista no art. 12 da Lei nº 7.498/1986:', 'O art. 12 lista: participar da programação, executar ações exceto as privativas, participar da orientação e supervisão em grau auxiliar e participar da equipe. As demais alternativas são privativas do enfermeiro.', 'media', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'lei-7498-atribuicoes-do-tecnico') and position = 0), 'quem-faz-o-que', 4, 'published', '2026-10-03'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'etica-7498-5');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'etica-7498-5'), 'A', 'consulta de enfermagem.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'etica-7498-5'), 'B', 'participar da orientação e supervisão do trabalho de enfermagem em grau auxiliar.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'etica-7498-5'), 'C', 'direção do órgão de enfermagem da instituição.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'etica-7498-5'), 'D', 'emissão de parecer sobre matéria de enfermagem.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'etica-7498-5') and label not in ('A', 'B', 'C', 'D');
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'lei-7498-atribuicoes-do-tecnico'), 'etica-7498-6', 'NÃO é atividade privativa do Enfermeiro, segundo o art. 11, I, da Lei nº 7.498/1986:', 'Executar ações assistenciais é atribuição também do técnico (art. 12, b), exceto as privativas. As outras três são privativas do enfermeiro.', 'media', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'lei-7498-atribuicoes-do-tecnico') and position = 0), 'privativas', 5, 'published', '2026-10-03'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'etica-7498-6');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'etica-7498-6'), 'A', 'consulta de enfermagem.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'etica-7498-6'), 'B', 'cuidados diretos de enfermagem a pacientes graves com risco de vida.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'etica-7498-6'), 'C', 'executar ações assistenciais de enfermagem.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'etica-7498-6'), 'D', 'chefia de serviço e de unidade de enfermagem.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'etica-7498-6') and label not in ('A', 'B', 'C', 'D');
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'lei-7498-atribuicoes-do-tecnico'), 'etica-7498-7', 'O profissional de enfermagem que exerce atividades de nível médio, de natureza repetitiva, sob supervisão, com participação em nível de execução simples, é, pela Lei nº 7.498/1986, o:', 'É a descrição do art. 13 (Auxiliar de Enfermagem).', 'media', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'lei-7498-atribuicoes-do-tecnico') and position = 0), 'quem-faz-o-que', 6, 'published', '2026-10-03'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'etica-7498-7');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'etica-7498-7'), 'A', 'Enfermeiro.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'etica-7498-7'), 'B', 'Técnico de Enfermagem.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'etica-7498-7'), 'C', 'Auxiliar de Enfermagem.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'etica-7498-7'), 'D', 'Obstetriz.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'etica-7498-7') and label not in ('A', 'B', 'C', 'D');
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'lei-7498-atribuicoes-do-tecnico'), 'etica-7498-8', 'O art. 13 do Decreto nº 94.406/1987 estabelece que as atividades do Técnico e do Auxiliar de Enfermagem somente poderão ser exercidas:', 'Art. 13 do decreto: as atividades dos arts. 10 e 11 somente poderão ser exercidas sob supervisão, orientação e direção de Enfermeiro.', 'dificil', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'lei-7498-atribuicoes-do-tecnico') and position = 1), 'decreto-94406', 7, 'published', '2026-10-03'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'etica-7498-8');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'etica-7498-8'), 'A', 'após dois anos de formado.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'etica-7498-8'), 'B', 'sob supervisão, orientação e direção de Enfermeiro.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'etica-7498-8'), 'C', 'com autorização do diretor clínico.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'etica-7498-8'), 'D', 'em unidades de baixa complexidade.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'etica-7498-8') and label not in ('A', 'B', 'C', 'D');

-- tema: Lei 5.905/73: o sistema Cofen/Coren
insert into public.topics (category_id, slug, title, description, summary, key_points, sections, outline, reading_minutes, position, status, last_reviewed_at, review_notes)
values ((select id from public.categories where product_id = (select id from public.products where key = 'revisao-tecnico-enfermagem') and slug = 'etica-e-legislacao'), 'lei-5905-sistema-cofen-coren', 'Lei 5.905/73: o sistema Cofen/Coren', 'Natureza dos conselhos, composição, mandatos, competências do Cofen e dos Corens, receita e penas.', 'A Lei nº 5.905/1973 criou o Conselho Federal de Enfermagem (Cofen) e os Conselhos Regionais de Enfermagem (Coren), que juntos formam uma autarquia e são órgãos disciplinadores do exercício da profissão de enfermeiro e das demais profissões da enfermagem. O Cofen, ao qual os Corens são subordinados, tem jurisdição em todo o território nacional e sede na Capital da República; há um Coren em cada Estado e no Distrito Federal, com sede na capital. O Cofen tem nove membros efetivos e igual número de suplentes, brasileiros e com diploma de enfermagem de nível superior, eleitos na Assembleia dos Delegados Regionais. Os Corens têm de cinco a vinte e um membros (número sempre ímpar), na proporção de três quintos de enfermeiros e dois quintos das demais categorias, eleitos por voto pessoal, secreto e obrigatório — quem deixa de votar sem causa justa paga multa equivalente à anuidade. Os mandatos são honoríficos, de três anos, com uma reeleição. Compete ao Cofen, entre outros, elaborar o código de deontologia (ética), instalar os Corens, julgar em grau de recurso as decisões regionais e instituir o modelo da carteira profissional. Compete aos Corens deliberar sobre inscrição e cancelamento, disciplinar e fiscalizar o exercício profissional, conhecer e decidir os assuntos de ética impondo penalidades, expedir a carteira profissional — que tem fé pública e serve como documento de identidade — e fixar o valor da anuidade. As penas são advertência verbal, multa, censura, suspensão e cassação; as quatro primeiras são dos Corens e a cassação, do Cofen, ouvido o Coren interessado.', array['Cofen + Corens = uma autarquia; órgãos disciplinadores do exercício da enfermagem.', 'Cofen: jurisdição nacional, sede na capital; Corens subordinados a ele.', 'Um Coren em cada Estado e no DF, com sede na capital.', 'Cofen: 9 membros efetivos e 9 suplentes, enfermeiros de nível superior.', 'Coren: 5 a 21 membros (ímpar), 3/5 enfermeiros e 2/5 demais categorias; voto obrigatório.', 'Mandatos honoríficos de 3 anos, uma reeleição.', 'Coren: inscrição, fiscalização, ética e penalidades, carteira profissional (fé pública, identidade), anuidade.', 'Penas: advertência, multa, censura, suspensão (Coren) e cassação (Cofen, ouvido o Coren).']::text[], '[{"id":"visao-geral","kind":"visao","title":"Quem fiscaliza a enfermagem","source":0,"blocks":[{"type":"definition","term":"Arts. 1º e 2º","text":"São criados o ==Cofen== e os ==Corens==, constituindo em seu conjunto ==uma autarquia==. São ==órgãos disciplinadores do exercício da profissão== de enfermeiro e das demais profissões compreendidas nos serviços de enfermagem."},{"type":"cards","items":[{"title":"Cofen","text":"Jurisdição em ==todo o território nacional==, sede na Capital da República; os Corens são ==subordinados== a ele.","icon":"🏛️","tone":"slate"},{"title":"Coren","text":"Um em ==cada Estado e no DF==, sede na capital. Com menos de 50 profissionais, o Cofen pode formar regiões com mais de uma unidade.","icon":"🏢","tone":"teal"}]}]},{"id":"composicao","kind":"classificacao","title":"Composição, eleição e mandato","source":0,"blocks":[{"type":"compare","columns":["Cofen","Coren"],"rows":[{"label":"Membros","cells":["==9 efetivos== e 9 suplentes","==5 a 21== efetivos e outros tantos suplentes; ==número sempre ímpar=="]},{"label":"Quem pode","cells":["Brasileiros com diploma de enfermagem de ==nível superior==","Brasileiros: ==3/5 enfermeiros== e ==2/5 das demais categorias=="]},{"label":"Eleição","cells":["Maioria de votos, escrutínio secreto, na ==Assembleia dos Delegados Regionais==","Voto ==pessoal, secreto e obrigatório==; chapas separadas para enfermeiros e demais"]},{"label":"Mandato","cells":["Honorífico, ==3 anos==, uma reeleição","Honorífico, ==3 anos==, uma reeleição"]}]},{"type":"callout","variant":"atencao","title":"Faltou ao voto?","text":"Quem deixar de votar ==sem causa justa== paga multa no valor ==da anuidade==, aplicada pelo Coren."}]},{"id":"competencias","kind":"etapas","title":"O que compete a cada um","source":0,"blocks":[{"type":"compare","columns":["Cofen (art. 8º)","Coren (art. 15)"],"rows":[{"label":"Normas","cells":["Elaborar o ==código de deontologia== (ética), ouvidos os Corens; aprovar regimentos; baixar provimentos","Fazer executar as instruções do Cofen; elaborar seu regimento e orçamento para aprovação do Cofen"]},{"label":"Exercício profissional","cells":["Instalar os Corens; dirimir dúvidas; homologar, suprir ou anular atos dos Corens","==Deliberar sobre inscrição e cancelamento==; ==disciplinar e fiscalizar== o exercício; manter o registro dos profissionais"]},{"label":"Ética","cells":["Apreciar ==em grau de recurso== as decisões dos Corens","==Conhecer e decidir os assuntos de ética==, impondo as penalidades"]},{"label":"Documentos e dinheiro","cells":["Instituir o ==modelo da carteira== e as insígnias; aprovar as contas da autarquia","==Expedir a carteira profissional== (fé pública, documento de identidade); ==fixar a anuidade==; prestar contas ao Cofen até 28 de fevereiro"]}]}]},{"id":"receita-e-penas","kind":"cuidados","title":"Receita e penas","source":0,"blocks":[{"type":"compare","columns":["Cofen","Coren"],"rows":[{"label":"Carteiras, multas e anuidades","cells":["==1/4== da taxa de carteiras, das multas e das anuidades","==3/4== da taxa de carteiras, das multas e das anuidades"]}]},{"type":"steps","items":[{"title":"Penas do art. 18","text":"Advertência verbal · multa · censura · suspensão do exercício · cassação do direito ao exercício."},{"title":"Corens aplicam as quatro primeiras","text":"Advertência, multa, censura e suspensão."},{"title":"Cofen aplica a cassação","text":"==Ouvido o Conselho Regional interessado== (art. 18, § 1º)."}]}]},{"id":"para-o-tecnico","kind":"tecnico","title":"O que isso significa para o técnico","source":0,"blocks":[{"type":"checklist","items":["Inscrever-se no ==Coren do Estado== onde vai trabalhar (é o Coren que delibera sobre a inscrição)","Pagar a anuidade fixada pelo Coren","Votar nas eleições do Coren — o voto é obrigatório","Usar a carteira profissional, que tem fé pública e serve como documento de identidade","Saber que a apuração ética começa no Coren e o recurso vai ao Cofen"]}]},{"id":"numeros","kind":"numeros","title":"Números que caem","source":0,"blocks":[{"type":"numbers","items":[{"value":"9","label":"membros efetivos do Cofen"},{"value":"5 a 21","label":"membros do Coren (ímpar)"},{"value":"3/5 · 2/5","label":"enfermeiros · demais categorias no Coren"},{"value":"3 anos","label":"mandato, com uma reeleição"},{"value":"1/4 · 3/4","label":"divisão de carteiras, multas e anuidades (Cofen · Coren)"},{"value":"5","label":"faltas no ano sem licença → perda do mandato de conselheiro"}]}]},{"id":"caso","kind":"caso","title":"Situação-problema","source":0,"blocks":[{"type":"case","title":"Mudança de Estado","scenario":"Uma técnica inscrita no Coren de um Estado passa num concurso em outro Estado. Ela também deixou de votar na última eleição do Coren, sem justificativa.","question":"O que a Lei 5.905 diz sobre essas duas situações?","answer":"A inscrição é deliberada pelo Coren da jurisdição onde ela vai exercer; e quem deixa de votar sem causa justa paga multa no valor da anuidade.","reasoning":["Art. 15, I: compete aos Corens deliberar sobre inscrição e cancelamento.","Lei 7.498, art. 2º: exercício só com inscrição no Coren com jurisdição na área.","Art. 12, § 2º: multa equivalente à anuidade para quem não vota sem causa justa."]}]},{"id":"como-a-banca-cobra","kind":"cobrado","title":"Como a banca cobra","source":0,"blocks":[{"type":"traps","items":[{"wrong":"Cofen e Corens são autarquias independentes, sem subordinação.","right":"Formam ==uma autarquia==, e os Corens são ==subordinados ao Cofen==.","why":"Arts. 1º e 3º."},{"wrong":"O Cofen é composto por 15 membros efetivos.","right":"==9 efetivos== e igual número de suplentes.","why":"Art. 5º."},{"wrong":"Os Corens têm metade de enfermeiros e metade das demais categorias.","right":"==3/5 enfermeiros e 2/5== das demais categorias.","why":"Art. 11."},{"wrong":"Quem expede a carteira profissional é o Cofen.","right":"Quem ==expede== é o Coren; o Cofen institui o ==modelo==.","why":"Art. 8º, VII e art. 15, VII."},{"wrong":"O mandato dos conselheiros é remunerado e de 4 anos.","right":"==Honorífico, 3 anos==, uma reeleição.","why":"Arts. 9º e 14."},{"wrong":"O voto nas eleições do Coren é facultativo.","right":"É ==obrigatório==; ausência sem causa justa gera multa.","why":"Art. 12."},{"wrong":"O Cofen aplica a cassação sem ouvir o Coren.","right":"Cassação pelo Cofen, ==ouvido o Coren interessado==.","why":"Art. 18, § 1º."}]}]},{"id":"conexoes","kind":"conexoes","title":"Conexões","blocks":[{"type":"links","items":[{"slug":"codigo-de-etica-infracoes-e-penalidades","title":"Código de Ética: infrações e penalidades","why":"Como o código detalha as penas do art. 18."},{"slug":"lei-7498-atribuicoes-do-tecnico","title":"Lei 7.498/86: o que cabe ao técnico","why":"Inscrição no Coren como condição para exercer."},{"slug":"codigo-de-etica-cofen-564","title":"Código de Ética (Resolução Cofen 564/2017)","why":"O código de deontologia que o Cofen elabora."}]}]}]'::jsonb, array['Quem fiscaliza a enfermagem', 'Composição, eleição e mandato', 'O que compete a cada um', 'Receita e penas', 'O que isso significa para o técnico', 'Números que caem', 'Situação-problema', 'Como a banca cobra', 'Conexões']::text[], 6, 1, 'published', '2026-10-03'::date, 'Padrão v2: cada seção foi escrita a partir do texto original da fonte, baixado e lido em 2026-10-03 (conferência automatizada durante o desenvolvimento). Revisão por enfermeiro(a) obrigatória antes da venda. A lei original vincula a autarquia ao ''Ministério do Trabalho e Previdência Social'' (estrutura da época).')
on conflict (slug) do update set category_id = excluded.category_id, title = excluded.title, description = excluded.description,
  summary = excluded.summary, key_points = excluded.key_points, sections = excluded.sections, outline = excluded.outline,
  reading_minutes = excluded.reading_minutes, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at, review_notes = excluded.review_notes;
insert into public.topic_sources (topic_id, position, source_title, source_organization, source_url, source_accessed_at, locator)
values ((select id from public.topics where slug = 'lei-5905-sistema-cofen-coren'), 0, 'Lei nº 5.905, de 12 de julho de 1973 (cria os Conselhos Federal e Regionais de Enfermagem)', 'Presidência da República — Planalto', 'https://www.planalto.gov.br/ccivil_03/leis/l5905.htm', '2026-10-03'::date, 'arts. 1º a 18')
on conflict (topic_id, position) do update set source_title = excluded.source_title, source_organization = excluded.source_organization,
  source_url = excluded.source_url, source_accessed_at = excluded.source_accessed_at, locator = excluded.locator;
delete from public.topic_sources s where s.topic_id = (select id from public.topics where slug = 'lei-5905-sistema-cofen-coren') and s.position >= 1
  and not exists (select 1 from public.questions x where x.source_id = s.id);
insert into public.visual_maps (topic_id, title, spec, status, last_reviewed_at)
values ((select id from public.topics where slug = 'lei-5905-sistema-cofen-coren'), 'Sistema Cofen/Coren', '{"layout":"compare","center":"Lei 5.905/1973 — uma autarquia","blocks":[{"title":"Cofen","tone":"slate","icon":"🏛️","items":["Jurisdição nacional","9 efetivos + 9 suplentes","Código de ética e recursos","Aplica a cassação"]},{"title":"Coren","tone":"teal","icon":"🏢","items":["Um por Estado e no DF","5 a 21 membros (3/5 enfermeiros)","Inscrição, fiscalização, carteira","Aplica as outras 4 penas"]}]}'::jsonb, 'published', '2026-10-03'::date)
on conflict (topic_id) do update set title = excluded.title, spec = excluded.spec, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'lei-5905-sistema-cofen-coren'), 'etica-5905-1', 'Segundo a Lei nº 5.905/1973, o Conselho Federal e os Conselhos Regionais de Enfermagem são:', 'Arts. 1º e 2º: Cofen e Corens constituem uma autarquia e são órgãos disciplinadores do exercício profissional.', 'facil', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'lei-5905-sistema-cofen-coren') and position = 0), 'visao-geral', 0, 'published', '2026-10-03'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'etica-5905-1');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'etica-5905-1'), 'A', 'sindicatos da categoria.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'etica-5905-1'), 'B', 'órgãos disciplinadores do exercício da profissão, constituindo em conjunto uma autarquia.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'etica-5905-1'), 'C', 'associações civis sem fins lucrativos.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'etica-5905-1'), 'D', 'órgãos do Ministério da Saúde.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'etica-5905-1') and label not in ('A', 'B', 'C', 'D');
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'lei-5905-sistema-cofen-coren'), 'etica-5905-2', 'Compete aos Conselhos Regionais de Enfermagem, segundo a Lei nº 5.905/1973:', 'Art. 15, I e II. Elaborar o código e instituir o modelo da carteira são do Cofen; o Cofen aprecia recursos das decisões dos Corens.', 'media', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'lei-5905-sistema-cofen-coren') and position = 0), 'competencias', 1, 'published', '2026-10-03'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'etica-5905-2');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'etica-5905-2'), 'A', 'elaborar o Código de Deontologia de Enfermagem.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'etica-5905-2'), 'B', 'deliberar sobre inscrição e cancelamento e disciplinar e fiscalizar o exercício profissional.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'etica-5905-2'), 'C', 'apreciar em grau de recurso as decisões do Cofen.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'etica-5905-2'), 'D', 'instituir o modelo da carteira profissional.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'etica-5905-2') and label not in ('A', 'B', 'C', 'D');
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'lei-5905-sistema-cofen-coren'), 'etica-5905-3', 'O Conselho Federal de Enfermagem é composto por:', 'Art. 5º: nove membros efetivos e igual número de suplentes, brasileiros, com diploma de enfermagem de nível superior.', 'media', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'lei-5905-sistema-cofen-coren') and position = 0), 'composicao', 2, 'published', '2026-10-03'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'etica-5905-3');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'etica-5905-3'), 'A', '5 membros efetivos.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'etica-5905-3'), 'B', '9 membros efetivos e igual número de suplentes.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'etica-5905-3'), 'C', '21 membros efetivos.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'etica-5905-3'), 'D', 'um representante de cada Estado.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'etica-5905-3') and label not in ('A', 'B', 'C', 'D');
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'lei-5905-sistema-cofen-coren'), 'etica-5905-4', 'Os Conselhos Regionais de Enfermagem são compostos na proporção de:', 'Art. 11: cinco a vinte e um membros, na proporção de três quintos de enfermeiros e dois quintos das demais categorias.', 'dificil', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'lei-5905-sistema-cofen-coren') and position = 0), 'composicao', 3, 'published', '2026-10-03'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'etica-5905-4');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'etica-5905-4'), 'A', 'metade de enfermeiros e metade das demais categorias.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'etica-5905-4'), 'B', 'três quintos de enfermeiros e dois quintos das demais categorias.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'etica-5905-4'), 'C', 'dois terços de enfermeiros e um terço de técnicos.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'etica-5905-4'), 'D', 'somente enfermeiros.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'etica-5905-4') and label not in ('A', 'B', 'C', 'D');
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'lei-5905-sistema-cofen-coren'), 'etica-5905-5', 'O mandato dos membros do Cofen e dos Corens, segundo a Lei nº 5.905/1973, é:', 'Arts. 9º e 14: honorífico, três anos, uma reeleição.', 'media', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'lei-5905-sistema-cofen-coren') and position = 0), 'composicao', 4, 'published', '2026-10-03'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'etica-5905-5');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'etica-5905-5'), 'A', 'remunerado, de 4 anos, sem reeleição.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'etica-5905-5'), 'B', 'honorífico, de 3 anos, admitida uma reeleição.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'etica-5905-5'), 'C', 'vitalício.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'etica-5905-5'), 'D', 'de 2 anos, com reeleições ilimitadas.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'etica-5905-5') and label not in ('A', 'B', 'C', 'D');
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'lei-5905-sistema-cofen-coren'), 'etica-5905-6', 'Pela Lei nº 5.905/1973, a pena de cassação do direito ao exercício profissional é da alçada:', 'Art. 18, § 1º: penas I a IV são dos Corens; a cassação (V), do Cofen, ouvido o Coren interessado.', 'media', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'lei-5905-sistema-cofen-coren') and position = 0), 'receita-e-penas', 5, 'published', '2026-10-03'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'etica-5905-6');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'etica-5905-6'), 'A', 'dos Conselhos Regionais.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'etica-5905-6'), 'B', 'do Conselho Federal, ouvido o Conselho Regional interessado.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'etica-5905-6'), 'C', 'do Ministério do Trabalho.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'etica-5905-6'), 'D', 'da Justiça do Trabalho.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'etica-5905-6') and label not in ('A', 'B', 'C', 'D');
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'lei-5905-sistema-cofen-coren'), 'etica-5905-7', 'A carteira profissional expedida pelo Coren, segundo a Lei nº 5.905/1973:', 'Art. 15, VII: carteira indispensável ao exercício, com fé pública em todo o território nacional e valor de documento de identidade.', 'media', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'lei-5905-sistema-cofen-coren') and position = 0), 'competencias', 6, 'published', '2026-10-03'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'etica-5905-7');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'etica-5905-7'), 'A', 'vale apenas no Estado de expedição.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'etica-5905-7'), 'B', 'tem fé pública em todo o território nacional e serve de documento de identidade.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'etica-5905-7'), 'C', 'é dispensável para o exercício.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'etica-5905-7'), 'D', 'é expedida pelo Ministério da Educação.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'etica-5905-7') and label not in ('A', 'B', 'C', 'D');
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'lei-5905-sistema-cofen-coren'), 'etica-5905-8', 'Ao profissional que, sem causa justa, deixar de votar nas eleições do Conselho Regional, a Lei nº 5.905/1973 prevê:', 'Art. 12, § 2º: multa correspondente ao valor da anuidade, aplicada pelo Coren.', 'dificil', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'lei-5905-sistema-cofen-coren') and position = 0), 'composicao', 7, 'published', '2026-10-03'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'etica-5905-8');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'etica-5905-8'), 'A', 'suspensão do exercício por 30 dias.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'etica-5905-8'), 'B', 'multa em importância correspondente ao valor da anuidade.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'etica-5905-8'), 'C', 'cancelamento da inscrição.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'etica-5905-8'), 'D', 'nenhuma consequência, pois o voto é facultativo.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'etica-5905-8') and label not in ('A', 'B', 'C', 'D');

-- tema: Código de Ética (Resolução Cofen 564/2017)
insert into public.topics (category_id, slug, title, description, summary, key_points, sections, outline, reading_minutes, position, status, last_reviewed_at, review_notes)
values ((select id from public.categories where product_id = (select id from public.products where key = 'revisao-tecnico-enfermagem') and slug = 'etica-e-legislacao'), 'codigo-de-etica-cofen-564', 'Código de Ética (Resolução Cofen 564/2017)', 'Estrutura do código, direitos, deveres e proibições que mais caem: sigilo, prescrição, registro, consentimento e delegação.', 'O Código de Ética dos Profissionais de Enfermagem (CEPE) foi aprovado pela Resolução Cofen nº 564/2017, aplica-se a enfermeiros, técnicos, auxiliares, obstetrizes, parteiras e atendentes de enfermagem, e revogou a Resolução Cofen nº 311/2007. Organiza-se em Direitos (Capítulo I), Deveres (II), Proibições (III), Infrações e Penalidades (IV) e Aplicação das Penalidades (V). Entre os direitos: exercer a enfermagem com liberdade, segurança e autonomia; suspender as atividades quando o local não oferecer condições seguras, ressalvadas urgência e emergência, formalizando por escrito à instituição e ao Coren; negar-se a ser filmado ou fotografado durante as atividades; recusar-se a executar atividades fora de sua competência ou sem segurança. Entre os deveres: registrar no prontuário de forma clara, objetiva, cronológica, legível, completa e sem rasuras; apor nome, número e categoria de inscrição e assinatura; prestar assistência livre de danos por imperícia, negligência ou imprudência; recusar prescrição sem assinatura e número de registro do prescritor, salvo urgência e emergência, e recusar prescrição com erro ou ilegível, esclarecendo e registrando; manter sigilo, salvo casos previstos em lei, ordem judicial ou consentimento escrito, dever que permanece mesmo após o falecimento. Entre as proibições: administrar medicamento sem conhecer indicação, ação, via e riscos; executar procedimentos sem consentimento formal, exceto em iminente risco de morte; registrar ações que não executou; delegar atividades privativas do enfermeiro, exceto em emergência; e negar assistência em urgência, emergência, epidemia, desastre ou catástrofe.', array['CEPE: Resolução Cofen 564/2017; revogou a Resolução 311/2007.', '5 capítulos: Direitos, Deveres, Proibições, Infrações e Penalidades, Aplicação das Penalidades.', 'Direito de suspender atividades sem condições seguras (exceto urgência/emergência), formalizando à instituição e ao Coren.', 'Registro: claro, objetivo, cronológico, legível, completo e sem rasuras; com nome, número e categoria no Coren.', 'Recusar prescrição sem assinatura e registro do prescritor (salvo urgência/emergência) e prescrição com erro ou ilegível.', 'Sigilo permanece mesmo se o fato for público ou a pessoa falecer; violência contra criança, idoso e incapaz: comunicação obrigatória.', 'Proibido: administrar sem conhecer indicação, ação, via e riscos; procedimento sem consentimento (exceto risco iminente de morte).', 'Proibido registrar o que não executou e delegar atividade privativa do enfermeiro (exceto emergência).']::text[], '[{"id":"visao-geral","kind":"visao","title":"Como o código está organizado","source":0,"blocks":[{"type":"steps","items":[{"title":"Capítulo I — Direitos","text":"Arts. 1º a 23."},{"title":"Capítulo II — Deveres","text":"Arts. 24 a 60."},{"title":"Capítulo III — Proibições","text":"Arts. 61 a 102."},{"title":"Capítulo IV — Infrações e Penalidades","text":"Arts. 103 a 113."},{"title":"Capítulo V — Aplicação das Penalidades","text":"Arts. 114 a 119."}]},{"type":"cards","items":[{"title":"A quem se aplica","text":"Enfermeiros, técnicos, auxiliares, obstetrizes, parteiras e ==atendentes de enfermagem==.","icon":"👥","tone":"blue"},{"title":"Casos omissos","text":"Resolvidos pelo ==Conselho Federal de Enfermagem==.","icon":"❔","tone":"slate"},{"title":"Revogou","text":"A Resolução Cofen ==311/2007== (código anterior).","icon":"🔁","tone":"amber"}]}]},{"id":"direitos","kind":"classificacao","title":"Direitos que caem","source":0,"blocks":[{"type":"cards","items":[{"title":"Suspender atividades","tag":"art. 13","text":"Quando o local ==não oferecer condições seguras==, ressalvadas ==urgência e emergência==, formalizando por escrito ou e-mail à instituição e ao Coren.","icon":"✋","tone":"amber"},{"title":"Recusar o que não é seu","tag":"art. 22","text":"Atividades fora de sua competência técnica, científica, ética e legal, ou sem segurança.","icon":"🚫","tone":"rose"},{"title":"Não ser filmado","tag":"art. 21","text":"Negar-se a ser filmado, fotografado e exposto em mídias sociais durante as atividades.","icon":"📵","tone":"slate"},{"title":"Abster-se de revelar","tag":"art. 12","text":"Informações confidenciais conhecidas no exercício profissional.","icon":"🤐","tone":"violet"},{"title":"Desagravo público","tag":"art. 8º","text":"Requerer ao Coren medidas de desagravo por ofensa sofrida no exercício.","icon":"🛡️","tone":"blue"},{"title":"Processo de enfermagem","tag":"art. 14","text":"Aplicar o processo de enfermagem para planejar, implementar, avaliar e documentar o cuidado.","icon":"📋","tone":"teal"}]}]},{"id":"registro-e-prescricao","kind":"tecnico","title":"Registro e prescrição: os deveres do dia a dia","source":0,"blocks":[{"type":"checklist","title":"Ao registrar (arts. 35 e 36)","items":["Nome completo e/ou nome social, legíveis, ==número e categoria de inscrição no Coren==, assinatura ou rubrica","Carimbo é facultativo (com nome, número e categoria + assinatura)","Prontuário eletrônico: assinatura certificada","Informações ==claras, objetivas, cronológicas, legíveis, completas e sem rasuras=="]},{"type":"steps","items":[{"title":"Prescrição sem assinatura e número de registro do prescritor","text":"==Recusar==, exceto em urgência e emergência (art. 46).","who":"tecnico"},{"title":"Prescrição com erro ou ilegível","text":"==Recusar==, esclarecer com o prescritor ou outro profissional e ==registrar no prontuário== (art. 46, § 1º).","who":"tecnico"},{"title":"Prescrição à distância","text":"Vedado cumprir, exceto urgência, emergência e regulação, conforme resolução vigente (art. 46, § 2º).","who":"tecnico"}]}]},{"id":"sigilo","kind":"cuidados","title":"Sigilo profissional (art. 52)","source":0,"blocks":[{"type":"definition","term":"Dever","text":"Manter sigilo sobre fato conhecido em razão da atividade profissional, ==exceto==: casos previstos em lei, determinação judicial ou ==consentimento escrito== da pessoa ou do representante legal."},{"type":"cards","items":[{"title":"Continua valendo","tag":"§ 1º","text":"Mesmo quando o fato é ==público== e em caso de ==falecimento== da pessoa.","icon":"🤐","tone":"slate"},{"title":"Deve ser revelado","tag":"§ 2º","text":"Ameaça à vida e à dignidade, defesa própria ou atividade multiprofissional, quando necessário à assistência.","icon":"🗣️","tone":"amber"},{"title":"Intimado como testemunha","tag":"§ 3º","text":"Deve comparecer e, se for o caso, declarar suas razões éticas para manter o sigilo.","icon":"⚖️","tone":"blue"},{"title":"Comunicação obrigatória","tag":"§ 4º","text":"Violência contra ==crianças e adolescentes, idosos e pessoas incapazes== de consentir: comunicar aos órgãos de responsabilização criminal, independentemente de autorização.","icon":"🚨","tone":"rose"},{"title":"Mulher adulta e capaz","tag":"§ 5º","text":"Comunicação devida, sem autorização, se houver ==risco à comunidade ou à vítima==, a juízo do profissional e com conhecimento prévio da vítima.","icon":"👩","tone":"violet"}]}]},{"id":"proibicoes","kind":"atencao","title":"Proibições que mais caem","source":0,"blocks":[{"type":"compare","columns":["Proibição","Exceção"],"rows":[{"label":"Art. 78","cells":["Administrar medicamento ==sem conhecer indicação, ação, via e riscos==","—"]},{"label":"Art. 77","cells":["Executar procedimento ==sem consentimento formal== da pessoa ou representante","==Iminente risco de morte=="]},{"label":"Art. 76","cells":["==Negar assistência== em urgência, emergência, epidemia, desastre e catástrofe","Se houver risco à integridade física do profissional"]},{"label":"Art. 88","cells":["==Registrar e assinar ações que não executou== ou deixar outro assinar as suas","—"]},{"label":"Art. 91","cells":["==Delegar atividades privativas do enfermeiro== a outro membro da equipe","Emergência (nunca a outros membros da equipe de saúde)"]},{"label":"Art. 87","cells":["Registrar informações ==incompletas, imprecisas ou inverídicas==","—"]},{"label":"Art. 74","cells":["Promover ou participar de prática destinada a ==antecipar a morte==","—"]}]}]},{"id":"numeros","kind":"numeros","title":"Números que caem","source":0,"blocks":[{"type":"numbers","items":[{"value":"564/2017","label":"resolução do Código de Ética atual"},{"value":"311/2007","label":"código anterior, revogado"},{"value":"5","label":"capítulos"},{"value":"Art. 46","label":"prescrição sem assinatura, com erro ou à distância"},{"value":"Art. 52","label":"sigilo profissional"},{"value":"Art. 78","label":"medicamento sem conhecer indicação, ação, via e riscos"}]}]},{"id":"caso","kind":"caso","title":"Situação-problema","source":0,"blocks":[{"type":"case","title":"Fim de plantão corrido","scenario":"No fim do plantão, uma colega pede que o técnico assine a checagem das medicações que ela deu, porque ela já saiu. Na mesma noite, ele encontra uma prescrição ilegível de um antibiótico, fora de urgência.","question":"Como agir em cada situação pelo Código de Ética?","answer":"Não assinar ações que não executou (art. 88). Recusar a prescrição ilegível, esclarecer com o prescritor e registrar no prontuário (art. 46, § 1º).","reasoning":["Art. 88 proíbe registrar e assinar ações que não executou e permitir que outro assine as suas.","Art. 46, § 1º: prescrição com erro ou ilegível → recusar, esclarecer e registrar.","Art. 78: sem entender a prescrição, ele também não conhece indicação, via e dose — não pode administrar."]}]},{"id":"como-a-banca-cobra","kind":"cobrado","title":"Como a banca cobra","source":0,"blocks":[{"type":"traps","items":[{"wrong":"Com o falecimento do paciente, o sigilo deixa de existir.","right":"O dever ==permanece== após o falecimento.","why":"Art. 52, § 1º."},{"wrong":"Prescrição sem assinatura deve ser cumprida e registrada.","right":"Deve ser ==recusada==, salvo urgência e emergência.","why":"Art. 46."},{"wrong":"O profissional pode suspender as atividades por falta de condições, inclusive na emergência.","right":"Ressalvadas as ==situações de urgência e emergência==, e com comunicação escrita à instituição e ao Coren.","why":"Art. 13."},{"wrong":"Em caso de violência contra idoso, a comunicação depende de autorização do paciente.","right":"É ==obrigatória, independentemente de autorização==.","why":"Art. 52, § 4º (crianças, adolescentes, idosos e incapazes)."},{"wrong":"O procedimento sem consentimento é proibido em qualquer situação.","right":"Exceção: ==iminente risco de morte==.","why":"Art. 77."},{"wrong":"O carimbo é obrigatório nos registros.","right":"O carimbo é ==facultativo==; obrigatórios são nome, número e categoria no Coren e assinatura.","why":"Art. 35, § 1º."},{"wrong":"O enfermeiro pode delegar atividade privativa ao técnico sempre que faltar pessoal.","right":"Só em ==emergência==; e nunca a outros membros da equipe de saúde.","why":"Art. 91 e parágrafo único."}]}]},{"id":"conexoes","kind":"conexoes","title":"Conexões","blocks":[{"type":"links","items":[{"slug":"codigo-de-etica-infracoes-e-penalidades","title":"Código de Ética: infrações e penalidades","why":"O que acontece quando o código é descumprido."},{"slug":"nove-certos-administracao-de-medicamentos","title":"Os 9 certos da administração de medicamentos","why":"O art. 78 na prática: conhecer o que se administra."},{"slug":"lei-7498-atribuicoes-do-tecnico","title":"Lei 7.498/86: o que cabe ao técnico","why":"O que é privativo e não pode ser delegado."}]}]}]'::jsonb, array['Como o código está organizado', 'Direitos que caem', 'Registro e prescrição: os deveres do dia a dia', 'Sigilo profissional (art. 52)', 'Proibições que mais caem', 'Números que caem', 'Situação-problema', 'Como a banca cobra', 'Conexões']::text[], 6, 2, 'published', '2026-10-03'::date, 'Padrão v2: cada seção foi escrita a partir do texto original da fonte, baixado e lido em 2026-10-03 (conferência automatizada durante o desenvolvimento). Revisão por enfermeiro(a) obrigatória antes da venda. Texto do site do Cofen pode incorporar alterações posteriores (ex.: Res. 758/2024 sobre reabilitação); conferir na revisão humana.')
on conflict (slug) do update set category_id = excluded.category_id, title = excluded.title, description = excluded.description,
  summary = excluded.summary, key_points = excluded.key_points, sections = excluded.sections, outline = excluded.outline,
  reading_minutes = excluded.reading_minutes, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at, review_notes = excluded.review_notes;
insert into public.topic_sources (topic_id, position, source_title, source_organization, source_url, source_accessed_at, locator)
values ((select id from public.topics where slug = 'codigo-de-etica-cofen-564'), 0, 'Resolução Cofen nº 564/2017 — Código de Ética dos Profissionais de Enfermagem (texto integral)', 'Conselho Federal de Enfermagem (Cofen)', 'https://www.cofen.gov.br/resolucao-cofen-no-5642017/', '2026-10-03'::date, 'Resolução e anexo, arts. 1º a 102')
on conflict (topic_id, position) do update set source_title = excluded.source_title, source_organization = excluded.source_organization,
  source_url = excluded.source_url, source_accessed_at = excluded.source_accessed_at, locator = excluded.locator;
delete from public.topic_sources s where s.topic_id = (select id from public.topics where slug = 'codigo-de-etica-cofen-564') and s.position >= 1
  and not exists (select 1 from public.questions x where x.source_id = s.id);
insert into public.visual_maps (topic_id, title, spec, status, last_reviewed_at)
values ((select id from public.topics where slug = 'codigo-de-etica-cofen-564'), 'Código de Ética', '{"layout":"hub","center":"Resolução Cofen 564/2017","blocks":[{"title":"Sigilo (art. 52)","tone":"slate","icon":"🤐","items":["Exceções: lei, ordem judicial, consentimento escrito","Vale mesmo após o óbito"]},{"title":"Prescrição (art. 46)","tone":"blue","icon":"✍️","items":["Sem assinatura e registro → recusar","Exceto urgência e emergência","Erro ou ilegível → esclarecer e registrar"]},{"title":"Proibido (art. 78)","tone":"rose","icon":"⛔","items":["Administrar sem conhecer indicação, ação, via e riscos"]},{"title":"Registro (arts. 35, 36, 88)","tone":"amber","icon":"📝","items":["Claro, cronológico, sem rasuras","Nunca assinar o que não fez"]}]}'::jsonb, 'published', '2026-10-03'::date)
on conflict (topic_id) do update set title = excluded.title, spec = excluded.spec, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'codigo-de-etica-cofen-564'), 'etica-cofen-1', 'Pelo Código de Ética dos Profissionais de Enfermagem, diante de uma prescrição médica sem assinatura e sem número de registro do prescritor, fora de situação de urgência, o profissional deve:', 'O art. 46 é dever de recusar prescrição sem assinatura e número de registro do prescritor, exceto em urgência e emergência.', 'facil', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'codigo-de-etica-cofen-564') and position = 0), 'registro-e-prescricao', 0, 'published', '2026-10-03'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'etica-cofen-1');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'etica-cofen-1'), 'A', 'executar normalmente, pois a responsabilidade é do médico.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'etica-cofen-1'), 'B', 'recusar-se a executar a prescrição.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'etica-cofen-1'), 'C', 'executar e assinar no lugar do prescritor.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'etica-cofen-1'), 'D', 'executar metade da dose até falar com o prescritor.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'etica-cofen-1') and label not in ('A', 'B', 'C', 'D');
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'codigo-de-etica-cofen-564'), 'etica-cofen-3', 'Pelo Código de Ética dos Profissionais de Enfermagem (Resolução Cofen nº 564/2017), o dever de sigilo profissional:', 'É o § 1º do art. 52.', 'facil', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'codigo-de-etica-cofen-564') and position = 0), 'sigilo', 1, 'published', '2026-10-03'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'etica-cofen-3');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'etica-cofen-3'), 'A', 'termina com o falecimento da pessoa envolvida.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'etica-cofen-3'), 'B', 'deixa de existir quando o fato se torna público.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'etica-cofen-3'), 'C', 'permanece mesmo quando o fato é de conhecimento público e em caso de falecimento da pessoa.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'etica-cofen-3'), 'D', 'só existe se houver pedido escrito do paciente.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'etica-cofen-3') and label not in ('A', 'B', 'C', 'D');
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'codigo-de-etica-cofen-564'), 'etica-cofen-4', 'Ao atender uma criança com sinais de violência, segundo o Código de Ética, o profissional de enfermagem deve:', 'Art. 52, § 4º: comunicação externa obrigatória, independentemente de autorização, de violência contra crianças e adolescentes, idosos e pessoas incapazes.', 'media', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'codigo-de-etica-cofen-564') and position = 0), 'sigilo', 2, 'published', '2026-10-03'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'etica-cofen-4');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'etica-cofen-4'), 'A', 'manter sigilo absoluto, salvo autorização dos pais.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'etica-cofen-4'), 'B', 'comunicar aos órgãos de responsabilização criminal, independentemente de autorização.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'etica-cofen-4'), 'C', 'comunicar apenas se houver ordem judicial.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'etica-cofen-4'), 'D', 'aguardar a próxima consulta para confirmar.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'etica-cofen-4') and label not in ('A', 'B', 'C', 'D');
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'codigo-de-etica-cofen-564'), 'etica-cofen-5', 'É proibido ao profissional de enfermagem, segundo o art. 78 do Código de Ética:', 'Art. 78, respeitados os graus de formação do profissional.', 'facil', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'codigo-de-etica-cofen-564') and position = 0), 'proibicoes', 3, 'published', '2026-10-03'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'etica-cofen-5');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'etica-cofen-5'), 'A', 'recusar prescrição ilegível.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'etica-cofen-5'), 'B', 'administrar medicamentos sem conhecer indicação, ação da droga, via de administração e potenciais riscos.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'etica-cofen-5'), 'C', 'registrar intercorrências no prontuário.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'etica-cofen-5'), 'D', 'negar-se a ser filmado durante o trabalho.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'etica-cofen-5') and label not in ('A', 'B', 'C', 'D');
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'codigo-de-etica-cofen-564'), 'etica-cofen-6', 'Segundo o Código de Ética, o registro no prontuário deve ser feito de forma:', 'Art. 36: registrar as informações indispensáveis ao cuidado de forma clara, objetiva, cronológica, legível, completa e sem rasuras.', 'media', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'codigo-de-etica-cofen-564') and position = 0), 'registro-e-prescricao', 4, 'published', '2026-10-03'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'etica-cofen-6');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'etica-cofen-6'), 'A', 'resumida, apenas com intercorrências graves.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'etica-cofen-6'), 'B', 'clara, objetiva, cronológica, legível, completa e sem rasuras.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'etica-cofen-6'), 'C', 'a lápis, para permitir correções.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'etica-cofen-6'), 'D', 'somente pelo enfermeiro.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'etica-cofen-6') and label not in ('A', 'B', 'C', 'D');
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'codigo-de-etica-cofen-564'), 'etica-cofen-7', 'Executar procedimentos sem o consentimento formal da pessoa ou de seu representante é proibido pelo Código de Ética, EXCETO:', 'Art. 77: proibido sem consentimento formal, exceto em iminente risco de morte.', 'media', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'codigo-de-etica-cofen-564') and position = 0), 'proibicoes', 5, 'published', '2026-10-03'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'etica-cofen-7');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'etica-cofen-7'), 'A', 'quando o procedimento for simples.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'etica-cofen-7'), 'B', 'em iminente risco de morte.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'etica-cofen-7'), 'C', 'quando o médico autorizar verbalmente.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'etica-cofen-7'), 'D', 'em pacientes internados há mais de 24 horas.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'etica-cofen-7') and label not in ('A', 'B', 'C', 'D');
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'codigo-de-etica-cofen-564'), 'etica-cofen-8', 'É direito do profissional de enfermagem, segundo o art. 13 do Código de Ética, suspender as atividades quando o local de trabalho não oferecer condições seguras, desde que:', 'Art. 13: ressalvadas urgência e emergência, devendo formalizar por escrito e/ou correio eletrônico à instituição e ao Coren.', 'dificil', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'codigo-de-etica-cofen-564') and position = 0), 'direitos', 6, 'published', '2026-10-03'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'etica-cofen-8');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'etica-cofen-8'), 'A', 'avise verbalmente o colega de plantão.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'etica-cofen-8'), 'B', 'não se trate de situação de urgência e emergência e formalize imediatamente a decisão por escrito ou e-mail à instituição e ao Coren.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'etica-cofen-8'), 'C', 'tenha mais de cinco anos de inscrição.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'etica-cofen-8'), 'D', 'obtenha autorização prévia do sindicato.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'etica-cofen-8') and label not in ('A', 'B', 'C', 'D');
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'codigo-de-etica-cofen-564'), 'etica-cofen-9', 'A Resolução Cofen nº 564/2017, que aprovou o atual Código de Ética, revogou especialmente a Resolução:', 'O art. 5º da Resolução 564/2017 revoga as disposições em contrário, em especial a Resolução Cofen nº 311/2007.', 'media', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'codigo-de-etica-cofen-564') and position = 0), 'visao-geral', 7, 'published', '2026-10-03'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'etica-cofen-9');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'etica-cofen-9'), 'A', 'Cofen nº 311/2007.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'etica-cofen-9'), 'B', 'Cofen nº 358/2009.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'etica-cofen-9'), 'C', 'Cofen nº 429/2012.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'etica-cofen-9'), 'D', 'Cofen nº 160/1993.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'etica-cofen-9') and label not in ('A', 'B', 'C', 'D');

-- tema: Código de Ética: infrações e penalidades
insert into public.topics (category_id, slug, title, description, summary, key_points, sections, outline, reading_minutes, position, status, last_reviewed_at, review_notes)
values ((select id from public.categories where product_id = (select id from public.products where key = 'revisao-tecnico-enfermagem') and slug = 'etica-e-legislacao'), 'codigo-de-etica-infracoes-e-penalidades', 'Código de Ética: infrações e penalidades', 'O que é infração ética, as cinco penalidades com seus limites, quem aplica cada uma, gravidade, atenuantes e agravantes.', 'No Código de Ética dos Profissionais de Enfermagem (Resolução Cofen nº 564/2017), infração ética e disciplinar é a ação, omissão ou conivência que implique desobediência às disposições do código ou às normas do Sistema Cofen/Conselhos Regionais. O profissional responde pela infração que cometer ou contribuir para praticar e, quando cometida por outro, se dela obtiver benefício. A infração é apurada em processo ético-disciplinar. As penalidades, previstas no art. 18 da Lei 5.905/1973, são: advertência verbal (admoestação reservada, registrada no prontuário do infrator na presença de duas testemunhas); multa (de 1 a 10 vezes o valor da anuidade); censura (repreensão divulgada em publicações oficiais e jornais de grande circulação); suspensão do exercício profissional (até 90 dias, divulgada e comunicada aos empregadores); e cassação do direito ao exercício profissional (perda do direito por até 30 anos). Advertência, multa, censura e suspensão são aplicadas pelo Conselho Regional; a cassação é de competência do Conselho Federal. Na suspensão e na cassação, a carteira é retida. A gradação considera a gravidade, as circunstâncias atenuantes e agravantes, o dano e os antecedentes. As infrações são leves, moderadas, graves ou gravíssimas. São atenuantes, por exemplo, buscar espontaneamente minorar as consequências, bons antecedentes, confissão espontânea e colaboração; agravantes, reincidência, dano irreparável, dolo, motivo fútil ou torpe e aproveitar-se da fragilidade da vítima. Penalidades só são aplicadas cumulativamente quando houver infração a mais de um artigo.', array['Infração: ação, omissão ou conivência contra o código ou as normas do Sistema Cofen/Coren.', 'Responde quem comete, quem contribui e quem se beneficia da infração de outro.', '5 penalidades: advertência verbal → multa → censura → suspensão → cassação.', 'Advertência: reservada, registrada, com 2 testemunhas. Multa: 1 a 10 anuidades.', 'Suspensão: até 90 dias. Cassação: até 30 anos.', 'Coren aplica advertência, multa, censura e suspensão; Cofen aplica cassação.', 'Infrações: leves, moderadas, graves e gravíssimas.', 'Penalidades cumulativas só quando a infração atinge mais de um artigo.']::text[], '[{"id":"visao-geral","kind":"visao","title":"Do descumprimento à pena","source":0,"blocks":[{"type":"steps","items":[{"title":"Infração","text":"Ação, omissão ou conivência que desobedeça ao código ou às normas do Sistema Cofen/Coren (art. 104)."},{"title":"Processo ético-disciplinar","text":"Apuração conforme o Código de Processo Ético-Disciplinar aprovado pelo Cofen (art. 107)."},{"title":"Gravidade","text":"Analisada pelos fatos, atos praticados ou omissivos e resultados (art. 106)."},{"title":"Pena","text":"Escolhida conforme gravidade, atenuantes e agravantes, dano e antecedentes (art. 110)."}]},{"type":"callout","variant":"lei","title":"Quem responde (art. 105)","text":"Quem ==comete== a infração, quem ==contribui== para sua prática e, quando cometida por outro, quem ==dela obtiver benefício==."}]},{"id":"penalidades","kind":"classificacao","title":"As cinco penalidades","source":0,"blocks":[{"type":"compare","columns":["O que é","Quem aplica"],"rows":[{"label":"Advertência verbal","cells":["Admoestação ==reservada==, registrada no prontuário do infrator, na presença de ==duas testemunhas==","Coren"]},{"label":"Multa","cells":["Pagamento de ==1 a 10 vezes o valor da anuidade== da categoria","Coren"]},{"label":"Censura","cells":["Repreensão ==divulgada== nas publicações oficiais do Sistema Cofen/Coren e em jornais de grande circulação","Coren"]},{"label":"Suspensão","cells":["Proibição do exercício por ==até 90 dias==; divulgada e comunicada aos empregadores","Coren"]},{"label":"Cassação","cells":["Perda do direito ao exercício por ==até 30 anos==; divulgada","==Cofen=="]}]},{"type":"callout","variant":"atencao","title":"Carteira retida","text":"Na ==suspensão e na cassação==, a carteira é retida na notificação, em todas as categorias de inscrição; volta após cumprir a pena e, na cassação, após o processo de reabilitação."}]},{"id":"gravidade","kind":"conceito","title":"Gravidade das infrações (art. 111)","source":0,"blocks":[{"type":"timeline","items":[{"when":"Leve","what":"Ofende a integridade física, mental ou moral ==sem causar debilidade==; difama organizações da categoria ou instituições; causa danos patrimoniais ou financeiros."},{"when":"Moderada","what":"Provoca debilidade ==temporária== de membro, sentido ou função; causa danos mentais, morais, patrimoniais ou financeiros."},{"when":"Grave","what":"Provoca ==perigo de morte==, debilidade permanente, dano moral irremediável."},{"when":"Gravíssima","what":"Provoca ==a morte==, debilidade permanente de membro, sentido ou função, dano moral irremediável."}]}]},{"id":"atenuantes-agravantes","kind":"cuidados","title":"Atenuantes e agravantes","source":0,"blocks":[{"type":"dodont","do":["Procurar, logo após, por vontade própria, evitar ou minorar as consequências","Ter bons antecedentes profissionais","Agir sob coação, intimidação ou grave ameaça","Agir sob emprego real de força física","Confessar espontaneamente a autoria","Colaborar espontaneamente com a elucidação dos fatos"],"dont":["Ser reincidente","Causar danos irreparáveis","Cometer a infração dolosamente","Motivo fútil ou torpe","Aproveitar-se da fragilidade da vítima","Abuso de autoridade ou violação do dever do cargo","Ter maus antecedentes; alterar ou falsificar prova"]},{"type":"text","text":"Na coluna verde estão as ==atenuantes== (art. 112); na vermelha, as ==agravantes== (art. 113)."}]},{"id":"aplicacao","kind":"tecnico","title":"Aplicação das penalidades","source":0,"blocks":[{"type":"steps","items":[{"title":"Gradação (art. 110)","text":"Gravidade · atenuantes e agravantes · dano e resultado · antecedentes do infrator."},{"title":"Acúmulo só com mais de um artigo (art. 114)","text":"Penalidades cumulativas ==somente quando houver infração a mais de um artigo==."},{"title":"Cada artigo tem as penas cabíveis (arts. 115 a 119)","text":"O código lista, para cada pena, os artigos cuja infração a admite."},{"title":"Cassação em casos gravíssimos (art. 119)","text":"Ex.: dano por imperícia, negligência ou imprudência (art. 45), violência (art. 64), aborto fora da lei (art. 73), antecipar a morte (art. 74)."}]},{"type":"callout","variant":"dica","title":"Instância superior","text":"Em processos que começam no Cofen e nos casos de cassação, a instância superior é a ==Assembleia de Presidentes dos Conselhos de Enfermagem== (art. 109, parágrafo único)."}]},{"id":"numeros","kind":"numeros","title":"Números que caem","source":0,"blocks":[{"type":"numbers","items":[{"value":"5","label":"penalidades"},{"value":"2","label":"testemunhas na advertência verbal"},{"value":"1–10","label":"anuidades na multa"},{"value":"90 dias","label":"suspensão máxima"},{"value":"30 anos","label":"cassação máxima"},{"value":"4","label":"graus de infração","note":"leve, moderada, grave, gravíssima"}]}]},{"id":"caso","kind":"caso","title":"Situação-problema","source":0,"blocks":[{"type":"case","title":"Erro de medicação com dano temporário","scenario":"Um técnico, reincidente, administra medicamento sem conferir a prescrição e o paciente fica com debilidade temporária de uma função. Logo depois, ele confessa espontaneamente e ajuda a reverter o quadro.","question":"Como classificar a infração e o que pesa na pena?","answer":"Infração moderada (debilidade temporária). Pesam como agravante a reincidência e como atenuantes a confissão espontânea e a tentativa de minorar as consequências.","reasoning":["Art. 111, § 2º: debilidade temporária → moderada.","Art. 113, I: reincidência é agravante.","Art. 112, I e V: minorar as consequências e confessar espontaneamente são atenuantes.","A pena é aplicada pelo Coren, salvo cassação, que é do Cofen."]}]},{"id":"como-a-banca-cobra","kind":"cobrado","title":"Como a banca cobra","source":0,"blocks":[{"type":"traps","items":[{"wrong":"A cassação é aplicada pelo Coren.","right":"Cassação é competência do ==Cofen==.","why":"Art. 109 e Lei 5.905, art. 18, § 1º."},{"wrong":"A suspensão pode durar até 1 ano.","right":"Até ==90 dias==.","why":"Art. 108, § 4º."},{"wrong":"A advertência verbal é pública e divulgada em jornais.","right":"É ==reservada==, com registro e ==duas testemunhas==.","why":"Quem é divulgada é a censura."},{"wrong":"A multa vai de 1 a 5 salários mínimos.","right":"De ==1 a 10 vezes o valor da anuidade==.","why":"Art. 108, § 2º."},{"wrong":"A cassação é definitiva e perpétua.","right":"Perda do direito por ==até 30 anos==, com processo de reabilitação.","why":"Art. 108, § 5º e § 7º."},{"wrong":"Ser reincidente é circunstância atenuante.","right":"Reincidência é ==agravante==.","why":"Art. 113, I."},{"wrong":"As penalidades podem ser acumuladas em qualquer caso.","right":"Só ==quando houver infração a mais de um artigo==.","why":"Art. 114."}]}]},{"id":"conexoes","kind":"conexoes","title":"Conexões","blocks":[{"type":"links","items":[{"slug":"codigo-de-etica-cofen-564","title":"Código de Ética (Resolução Cofen 564/2017)","why":"Os deveres e proibições cuja infração gera a pena."},{"slug":"lei-5905-sistema-cofen-coren","title":"Lei 5.905/73: o sistema Cofen/Coren","why":"A lei que fixa as penas e quem as aplica."}]}]}]'::jsonb, array['Do descumprimento à pena', 'As cinco penalidades', 'Gravidade das infrações (art. 111)', 'Atenuantes e agravantes', 'Aplicação das penalidades', 'Números que caem', 'Situação-problema', 'Como a banca cobra', 'Conexões']::text[], 6, 3, 'published', '2026-10-03'::date, 'Padrão v2: cada seção foi escrita a partir do texto original da fonte, baixado e lido em 2026-10-03 (conferência automatizada durante o desenvolvimento). Revisão por enfermeiro(a) obrigatória antes da venda.')
on conflict (slug) do update set category_id = excluded.category_id, title = excluded.title, description = excluded.description,
  summary = excluded.summary, key_points = excluded.key_points, sections = excluded.sections, outline = excluded.outline,
  reading_minutes = excluded.reading_minutes, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at, review_notes = excluded.review_notes;
insert into public.topic_sources (topic_id, position, source_title, source_organization, source_url, source_accessed_at, locator)
values ((select id from public.topics where slug = 'codigo-de-etica-infracoes-e-penalidades'), 0, 'Resolução Cofen nº 564/2017 — Código de Ética dos Profissionais de Enfermagem (texto integral)', 'Conselho Federal de Enfermagem (Cofen)', 'https://www.cofen.gov.br/resolucao-cofen-no-5642017/', '2026-10-03'::date, 'arts. 103 a 119')
on conflict (topic_id, position) do update set source_title = excluded.source_title, source_organization = excluded.source_organization,
  source_url = excluded.source_url, source_accessed_at = excluded.source_accessed_at, locator = excluded.locator;
insert into public.topic_sources (topic_id, position, source_title, source_organization, source_url, source_accessed_at, locator)
values ((select id from public.topics where slug = 'codigo-de-etica-infracoes-e-penalidades'), 1, 'Lei nº 5.905, de 12 de julho de 1973 (cria os Conselhos Federal e Regionais de Enfermagem)', 'Presidência da República — Planalto', 'https://www.planalto.gov.br/ccivil_03/leis/l5905.htm', '2026-10-03'::date, 'art. 18')
on conflict (topic_id, position) do update set source_title = excluded.source_title, source_organization = excluded.source_organization,
  source_url = excluded.source_url, source_accessed_at = excluded.source_accessed_at, locator = excluded.locator;
delete from public.topic_sources s where s.topic_id = (select id from public.topics where slug = 'codigo-de-etica-infracoes-e-penalidades') and s.position >= 2
  and not exists (select 1 from public.questions x where x.source_id = s.id);
insert into public.visual_maps (topic_id, title, spec, status, last_reviewed_at)
values ((select id from public.topics where slug = 'codigo-de-etica-infracoes-e-penalidades'), 'Penalidades em escada', '{"layout":"flow","center":"Resolução Cofen 564/2017 · art. 108","blocks":[{"title":"Advertência verbal","tone":"green","icon":"🗣️","items":["Reservada","2 testemunhas","Coren"]},{"title":"Multa","tone":"teal","icon":"💵","items":["1 a 10 anuidades","Coren"]},{"title":"Censura","tone":"amber","icon":"📰","items":["Divulgada","Coren"]},{"title":"Suspensão","tone":"orange","icon":"⏸️","items":["Até 90 dias","Carteira retida","Coren"]},{"title":"Cassação","tone":"rose","icon":"⛔","items":["Até 30 anos","Carteira retida","Cofen"]}]}'::jsonb, 'published', '2026-10-03'::date)
on conflict (topic_id) do update set title = excluded.title, spec = excluded.spec, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'codigo-de-etica-infracoes-e-penalidades'), 'etica-cofen-2', 'Segundo a Resolução Cofen nº 564/2017, a penalidade de cassação do direito ao exercício profissional é de competência:', 'O art. 109 atribui ao Coren advertência verbal, multa, censura e suspensão; a cassação é de competência do Conselho Federal.', 'facil', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'codigo-de-etica-infracoes-e-penalidades') and position = 0), 'penalidades', 0, 'published', '2026-10-03'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'etica-cofen-2');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'etica-cofen-2'), 'A', 'do Conselho Regional de Enfermagem.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'etica-cofen-2'), 'B', 'da chefia de enfermagem da instituição.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'etica-cofen-2'), 'C', 'do Conselho Federal de Enfermagem.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'etica-cofen-2'), 'D', 'do Ministério da Saúde.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'etica-cofen-2') and label not in ('A', 'B', 'C', 'D');
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'codigo-de-etica-infracoes-e-penalidades'), 'etica-pen-1', 'A penalidade de suspensão do exercício profissional, prevista no Código de Ética, consiste na proibição do exercício por um período de até:', 'Art. 108, § 4º: até 90 dias, com divulgação e comunicação aos órgãos empregadores.', 'facil', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'codigo-de-etica-infracoes-e-penalidades') and position = 0), 'penalidades', 1, 'published', '2026-10-03'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'etica-pen-1');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'etica-pen-1'), 'A', '30 dias.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'etica-pen-1'), 'B', '60 dias.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'etica-pen-1'), 'C', '90 dias.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'etica-pen-1'), 'D', '1 ano.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'etica-pen-1') and label not in ('A', 'B', 'C', 'D');
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'codigo-de-etica-infracoes-e-penalidades'), 'etica-pen-2', 'A advertência verbal, segundo o Código de Ética, consiste em admoestação:', 'Art. 108, § 1º. A pena divulgada em jornais é a censura.', 'media', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'codigo-de-etica-infracoes-e-penalidades') and position = 0), 'penalidades', 2, 'published', '2026-10-03'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'etica-pen-2');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'etica-pen-2'), 'A', 'pública, divulgada em jornais de grande circulação.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'etica-pen-2'), 'B', 'reservada, registrada no prontuário do infrator, na presença de duas testemunhas.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'etica-pen-2'), 'C', 'por escrito, enviada ao empregador.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'etica-pen-2'), 'D', 'verbal, sem qualquer registro.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'etica-pen-2') and label not in ('A', 'B', 'C', 'D');
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'codigo-de-etica-infracoes-e-penalidades'), 'etica-pen-3', 'A multa aplicada pelo Sistema Cofen/Coren consiste no pagamento de:', 'Art. 108, § 2º: 1 a 10 vezes o valor da anuidade, em vigor no ato do pagamento.', 'media', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'codigo-de-etica-infracoes-e-penalidades') and position = 0), 'penalidades', 3, 'published', '2026-10-03'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'etica-pen-3');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'etica-pen-3'), 'A', '1 a 10 vezes o valor da anuidade da categoria profissional do infrator.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'etica-pen-3'), 'B', '1 a 5 salários mínimos.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'etica-pen-3'), 'C', '10% do salário do infrator por 12 meses.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'etica-pen-3'), 'D', 'valor fixo definido pelo empregador.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'etica-pen-3') and label not in ('A', 'B', 'C', 'D');
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'codigo-de-etica-infracoes-e-penalidades'), 'etica-pen-4', 'Pelo Código de Ética, a infração que provoca debilidade temporária de membro, sentido ou função é classificada como:', 'Art. 111, § 2º: moderada. Perigo de morte é grave; a morte é gravíssima.', 'media', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'codigo-de-etica-infracoes-e-penalidades') and position = 0), 'gravidade', 4, 'published', '2026-10-03'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'etica-pen-4');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'etica-pen-4'), 'A', 'leve.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'etica-pen-4'), 'B', 'moderada.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'etica-pen-4'), 'C', 'grave.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'etica-pen-4'), 'D', 'gravíssima.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'etica-pen-4') and label not in ('A', 'B', 'C', 'D');
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'codigo-de-etica-infracoes-e-penalidades'), 'etica-pen-5', 'É circunstância agravante, segundo o art. 113 do Código de Ética:', 'Reincidência é agravante; as demais alternativas são atenuantes do art. 112.', 'media', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'codigo-de-etica-infracoes-e-penalidades') and position = 0), 'atenuantes-agravantes', 5, 'published', '2026-10-03'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'etica-pen-5');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'etica-pen-5'), 'A', 'ter confessado espontaneamente a autoria.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'etica-pen-5'), 'B', 'ter bons antecedentes profissionais.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'etica-pen-5'), 'C', 'ser reincidente.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'etica-pen-5'), 'D', 'ter colaborado com a elucidação dos fatos.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'etica-pen-5') and label not in ('A', 'B', 'C', 'D');
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'codigo-de-etica-infracoes-e-penalidades'), 'etica-pen-6', 'A cassação do direito ao exercício profissional da enfermagem consiste na perda desse direito por um período de até:', 'Art. 108, § 5º: até 30 anos; a carteira é devolvida após o processo de reabilitação.', 'dificil', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'codigo-de-etica-infracoes-e-penalidades') and position = 0), 'penalidades', 6, 'published', '2026-10-03'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'etica-pen-6');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'etica-pen-6'), 'A', '5 anos.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'etica-pen-6'), 'B', '10 anos.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'etica-pen-6'), 'C', '20 anos.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'etica-pen-6'), 'D', '30 anos.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'etica-pen-6') and label not in ('A', 'B', 'C', 'D');
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'codigo-de-etica-infracoes-e-penalidades'), 'etica-pen-7', 'Segundo o art. 114 do Código de Ética, as penalidades poderão ser aplicadas cumulativamente:', 'Art. 114: cumulativamente apenas quando houver infração a mais de um artigo.', 'dificil', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'codigo-de-etica-infracoes-e-penalidades') and position = 0), 'aplicacao', 7, 'published', '2026-10-03'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'etica-pen-7');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'etica-pen-7'), 'A', 'sempre que o Coren entender conveniente.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'etica-pen-7'), 'B', 'somente quando houver infração a mais de um artigo.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'etica-pen-7'), 'C', 'apenas em casos de reincidência.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'etica-pen-7'), 'D', 'nunca.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'etica-pen-7') and label not in ('A', 'B', 'C', 'D');
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'codigo-de-etica-infracoes-e-penalidades'), 'etica-pen-8', 'Pelo art. 105 do Código de Ética, o profissional responde pela infração ética que:', 'É a redação do art. 105.', 'media', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'codigo-de-etica-infracoes-e-penalidades') and position = 0), 'visao-geral', 8, 'published', '2026-10-03'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'etica-pen-8');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'etica-pen-8'), 'A', 'apenas cometer pessoalmente.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'etica-pen-8'), 'B', 'cometer ou contribuir para sua prática e, quando cometida por outro, dela obtiver benefício.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'etica-pen-8'), 'C', 'for denunciada pelo paciente.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'etica-pen-8'), 'D', 'resultar em morte.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'etica-pen-8') and label not in ('A', 'B', 'C', 'D');

-- ═════ Cálculos de Enfermagem
insert into public.categories (product_id, slug, title, short_title, description, tone, icon, position, status)
values ((select id from public.products where key = 'revisao-tecnico-enfermagem'), 'calculos-de-enfermagem', 'Cálculos de Enfermagem', 'Cálculos', 'Conversões, regra de três, gotejamento, penicilina, rediluição e insulina — com exercícios resolvidos.', 'orange', '🧮', 7, 'published')
on conflict (product_id, slug) do update set title = excluded.title, short_title = excluded.short_title,
  description = excluded.description, tone = excluded.tone, icon = excluded.icon, position = excluded.position, status = excluded.status;

-- tema: Conversões de unidades e medidas
insert into public.topics (category_id, slug, title, description, summary, key_points, sections, outline, reading_minutes, position, status, last_reviewed_at, review_notes)
values ((select id from public.categories where product_id = (select id from public.products where key = 'revisao-tecnico-enfermagem') and slug = 'calculos-de-enfermagem'), 'conversoes-de-unidades-e-medidas', 'Conversões de unidades e medidas', 'Grama e miligrama, litro e mililitro, horas e minutos, colheres, gotas e o que significa a porcentagem de um soro.', 'Quase todo erro de cálculo começa numa conversão. O Coren-SP lembra que, na enfermagem, usam-se o litro e o grama divididos por 1.000: 1 L = 1.000 mL e 1 g = 1.000 mg; e no tempo, 1 h = 60 min e 1 min = 60 s. Para multiplicar por 1.000, a vírgula anda três casas para a direita (0,5 g = 500 mg; 0,15 L = 150 mL); para dividir, anda para a esquerda — o método da ''escada'' faz isso degrau a degrau. Nas formas de medida, os valores de colheres variam com o utensílio, mas as referências usadas são: colher de sopa 15 mL, de sobremesa 10 mL, de chá 5 mL e de café 2,5 a 3 mL. No gotejamento, os valores são padronizados no Brasil: 1 mL = 20 gotas = 60 microgotas, 1 gota = 3 microgotas e 1 gota = 1 macrogota; frascos-gotas de medicamentos podem fugir do padrão (o material cita um com 40 gotas por mL). A porcentagem de uma solução indica gramas em 100 mL: soro glicosado 5% tem 5 g de glicose em 100 mL, e soro fisiológico 0,9% tem 0,9 g de cloreto de sódio em 100 mL. Soluções isotônicas têm concentração igual ou próxima à do plasma; hipertônicas, maior; hipotônicas, menor. Para montar qualquer regra de três, unidade igual vai embaixo de unidade igual.', array['1 g = 1.000 mg · 1 L = 1.000 mL · 1 h = 60 min · 1 min = 60 s.', '× 1.000: vírgula 3 casas para a direita (0,5 g = 500 mg). ÷ 1.000: para a esquerda.', 'Colher de sopa 15 mL · sobremesa 10 mL · chá 5 mL · café 2,5 a 3 mL.', '1 mL = 20 gotas = 60 microgotas; 1 gota = 3 microgotas (padrão brasileiro).', 'Frasco-gotas de medicamento pode fugir do padrão: sempre conferir.', 'Porcentagem de solução = gramas em 100 mL (SG 5% = 5 g/100 mL; SF 0,9% = 0,9 g/100 mL).', 'Isotônica ≈ plasma · hipertônica > plasma · hipotônica < plasma.', 'Unidade igual embaixo de unidade igual em toda regra de três.']::text[], '[{"id":"visao-geral","kind":"visao","title":"Converter primeiro, calcular depois","source":0,"blocks":[{"type":"text","text":"Uma prescrição em ==gramas== e uma ampola em ==miligramas== não entram juntas na regra de três. O primeiro passo de todo cálculo é deixar ==tudo na mesma unidade==."},{"type":"callout","variant":"atencao","title":"Segurança","text":"O protocolo de medicamentos lembra que ==zero, vírgula e ponto== podem gerar doses 10 ou 100 vezes maiores. Conversão errada é exatamente esse erro."}]},{"id":"massa-volume-tempo","kind":"conceito","title":"Massa, volume e tempo","source":0,"blocks":[{"type":"compare","columns":["Base","Exemplos do material"],"rows":[{"label":"Massa","cells":["1 g = ==1.000 mg==","0,8 g = 800 mg · 0,2 g = 200 mg · 0,1 g = 100 mg"]},{"label":"Volume","cells":["1 L = ==1.000 mL==","2 L = 2.000 mL · 0,6 L = 600 mL · 0,52 L = 520 mL"]},{"label":"Tempo","cells":["1 h = ==60 min==; 1 min = 60 s","2 h 30 min = 150 min"]}]}]},{"id":"escada","kind":"etapas","title":"A escada: andar com a vírgula","source":0,"blocks":[{"type":"steps","items":[{"title":"Grama → miligrama: desce 3 degraus","text":"Cada degrau multiplica por 10: a vírgula anda ==uma casa para a direita==.","why":"Três degraus = × 1.000."},{"title":"Faltou algarismo? Completa com zero","text":"1,02 g → 10,2 → 102 → ==1.020 mg==."},{"title":"Miligrama → grama: sobe 3 degraus","text":"Cada degrau divide por 10: a vírgula anda ==uma casa para a esquerda==. 250 mg → 0,25 g."},{"title":"Vale para litro e mililitro","text":"1,5 L → 1.500 mL; 75 mL → 0,075 L."}]},{"type":"callout","variant":"atencao","title":"Erro de digitação da fonte","text":"O material traz ''1,02 g corresponde a 1020g'' — o correto é ==1.020 mg==."}]},{"id":"formas-de-medida","kind":"classificacao","title":"Colheres e gotas","source":0,"blocks":[{"type":"numbers","items":[{"value":"15 mL","label":"colher de sopa"},{"value":"10 mL","label":"colher de sobremesa"},{"value":"5 mL","label":"colher de chá"},{"value":"2,5–3 mL","label":"colher de café","note":"as antigas eram menores"},{"value":"20","label":"gotas em 1 mL"},{"value":"60","label":"microgotas em 1 mL"}]},{"type":"callout","variant":"dica","title":"Padrão só no Brasil","text":"Colher-medida varia com o utensílio. As conversões de gotejamento ==valem no Brasil==; frasco-gotas de medicamento pode fugir do padrão (o material cita um com ==40 gotas por mL==)."}]},{"id":"porcentagem","kind":"conceito","title":"O que significa a porcentagem do soro","source":1,"blocks":[{"type":"definition","term":"Porcentagem de uma solução","text":"Quantos ==gramas de soluto em 100 mL==. SG 5% = 5 g de glicose em 100 mL; SG 10% = 10 g/100 mL; SF 0,9% = 0,9 g de NaCl em 100 mL."}]},{"id":"tonicidade","kind":"tecnico","title":"Soros: tonicidade e tipos","source":1,"blocks":[{"type":"cards","items":[{"title":"Isotônica","text":"Concentração ==igual ou próxima== à do plasma.","icon":"🟰","tone":"teal"},{"title":"Hipertônica","text":"Concentração ==maior== que a do plasma.","icon":"⬆️","tone":"rose"},{"title":"Hipotônica","text":"Concentração ==menor== que a do plasma.","icon":"⬇️","tone":"blue"}]},{"type":"checklist","title":"Soros mais usados (Coren-SP)","items":["Soro glicosado 5% e 10%","Soro fisiológico 0,9%","Soro glicofisiológico","Ringer com lactato ou ringer simples"]}]},{"id":"exercicios","kind":"pratica","title":"Exercícios resolvidos","source":1,"blocks":[{"type":"example","title":"Quanto NaCl há no frasco?","given":["SF 0,9%, frasco de 500 mL"],"steps":["0,9 g — 100 mL","x g — 500 mL","x = 0,9 × 500 ÷ 100 = 4,5 g"],"answer":"4,5 g de cloreto de sódio"},{"type":"example","title":"Quanto de glicose?","given":["SG 5%, frasco de 250 mL"],"steps":["5 g — 100 mL","x g — 250 mL","x = 5 × 250 ÷ 100 = 12,5 g"],"answer":"12,5 g de glicose"},{"type":"example","title":"Converter antes","given":["Prescrito: 0,5 g","Disponível: ampola de 250 mg em 5 mL"],"steps":["0,5 g = 500 mg","250 mg — 5 mL","500 mg — x mL","x = 500 × 5 ÷ 250 = 10 mL"],"answer":"10 mL (duas ampolas)"}]},{"id":"caso","kind":"caso","title":"Situação-problema","source":0,"blocks":[{"type":"case","title":"Xarope em casa","scenario":"Na alta, a prescrição diz ''10 mL de xarope de 8/8 h''. A mãe pergunta quantas colheres de chá isso dá.","question":"Qual a equivalência pela referência do Coren-SP e qual o cuidado?","answer":"Duas colheres de chá (5 mL cada) — mas o ideal é usar o copo ou seringa dosadora, porque colheres variam conforme o utensílio.","reasoning":["Colher de chá = 5 mL na referência do material.","10 mL ÷ 5 mL = 2 colheres.","O próprio material diz que os valores de colher-medida variam com o fabricante.","O protocolo de medicamentos pede unidade do sistema métrico quando a medida é imprecisa."]}]},{"id":"como-a-banca-cobra","kind":"cobrado","title":"Como a banca cobra","source":0,"blocks":[{"type":"traps","items":[{"wrong":"0,5 g equivalem a 50 mg.","right":"0,5 g = ==500 mg==.","why":"× 1.000: a vírgula anda três casas."},{"wrong":"1 mL = 60 gotas.","right":"1 mL = ==20 gotas== = 60 microgotas.","why":"60 é o número de microgotas."},{"wrong":"SF 0,9% tem 0,9 g de NaCl por litro.","right":"0,9 g ==em 100 mL== (9 g por litro).","why":"Porcentagem = g em 100 mL."},{"wrong":"Colher de sopa equivale a 5 mL.","right":"Sopa ==15 mL==; chá 5 mL.","why":"Referências do material."},{"wrong":"2 h 30 min = 230 min.","right":"==150 min== (2 × 60 + 30).","why":"Converter horas em minutos multiplica por 60."},{"wrong":"Solução hipertônica tem concentração menor que a do plasma.","right":"Hipertônica = ==maior== que o plasma.","why":"Hiper = acima; hipo = abaixo."},{"wrong":"Todo frasco-gotas de medicamento segue 20 gotas por mL.","right":"Pode ==fugir do padrão==; conferir na bula ou no rótulo.","why":"O material cita medicamento com 40 gotas por mL."}]}]},{"id":"conexoes","kind":"conexoes","title":"Conexões","blocks":[{"type":"links","items":[{"slug":"regra-de-tres-dose-e-diluicao","title":"Regra de três: quanto aspirar","why":"Onde as conversões são usadas."},{"slug":"gotejamento-gotas-e-microgotas","title":"Gotejamento: gotas e microgotas","why":"Gotas, microgotas e minutos na fórmula."},{"slug":"nove-certos-administracao-de-medicamentos","title":"Os 9 certos da administração de medicamentos","why":"Dose certa: atenção a zero, vírgula e ponto."}]}]}]'::jsonb, array['Converter primeiro, calcular depois', 'Massa, volume e tempo', 'A escada: andar com a vírgula', 'Colheres e gotas', 'O que significa a porcentagem do soro', 'Soros: tonicidade e tipos', 'Exercícios resolvidos', 'Situação-problema', 'Como a banca cobra', 'Conexões']::text[], 6, 0, 'published', '2026-10-03'::date, 'Padrão v2: cada seção foi escrita a partir do texto original da fonte, baixado e lido em 2026-10-03 (conferência automatizada durante o desenvolvimento). Revisão por enfermeiro(a) obrigatória antes da venda. Exercícios com valores fictícios de estudo. O material do Coren-SP tem erro de digitação no exemplo da escada (1.020 g), corrigido para 1.020 mg.')
on conflict (slug) do update set category_id = excluded.category_id, title = excluded.title, description = excluded.description,
  summary = excluded.summary, key_points = excluded.key_points, sections = excluded.sections, outline = excluded.outline,
  reading_minutes = excluded.reading_minutes, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at, review_notes = excluded.review_notes;
insert into public.topic_sources (topic_id, position, source_title, source_organization, source_url, source_accessed_at, locator)
values ((select id from public.topics where slug = 'conversoes-de-unidades-e-medidas'), 0, 'Boas práticas: Cálculo seguro — Volume I: Revisão das operações básicas', 'Coren-SP (cópia publicada pelo IPPMG/UFRJ)', 'https://ippmg.ufrj.br/wp-content/uploads/2023/02/boas-praticas-calculo-seguro-volume-1-revisao-das-operacoes-basicas_0-1.pdf', '2026-10-03'::date, '''Unidades de pesos, medidas e tempo'', ''Escada'' e ''Formas de medida''')
on conflict (topic_id, position) do update set source_title = excluded.source_title, source_organization = excluded.source_organization,
  source_url = excluded.source_url, source_accessed_at = excluded.source_accessed_at, locator = excluded.locator;
insert into public.topic_sources (topic_id, position, source_title, source_organization, source_url, source_accessed_at, locator)
values ((select id from public.topics where slug = 'conversoes-de-unidades-e-medidas'), 1, 'Boas práticas: Cálculo seguro — Volume II: Cálculo e diluição de medicamentos', 'Conselho Regional de Enfermagem de São Paulo (Coren-SP)', 'https://portal.coren-sp.gov.br/sites/default/files/boas-praticas-calculo-seguro-volume-2-calculo-e-diluicao-de-medicamentos.pdf', '2026-10-03'::date, 'seção ''Soro''')
on conflict (topic_id, position) do update set source_title = excluded.source_title, source_organization = excluded.source_organization,
  source_url = excluded.source_url, source_accessed_at = excluded.source_accessed_at, locator = excluded.locator;
delete from public.topic_sources s where s.topic_id = (select id from public.topics where slug = 'conversoes-de-unidades-e-medidas') and s.position >= 2
  and not exists (select 1 from public.questions x where x.source_id = s.id);
insert into public.visual_maps (topic_id, title, spec, status, last_reviewed_at)
values ((select id from public.topics where slug = 'conversoes-de-unidades-e-medidas'), 'Tabela de bolso', '{"layout":"hub","center":"Converter antes de calcular","blocks":[{"title":"Massa","tone":"orange","icon":"⚖️","items":["1 g = 1.000 mg","0,5 g = 500 mg"]},{"title":"Volume","tone":"blue","icon":"🧪","items":["1 L = 1.000 mL","0,15 L = 150 mL"]},{"title":"Tempo","tone":"slate","icon":"⏱️","items":["1 h = 60 min","1 min = 60 s"]},{"title":"Gotas","tone":"teal","icon":"💧","items":["1 mL = 20 gotas","1 mL = 60 microgotas"]},{"title":"Porcentagem","tone":"violet","icon":"％","items":["g em 100 mL","SF 0,9% = 0,9 g/100 mL"]}]}'::jsonb, 'published', '2026-10-03'::date)
on conflict (topic_id) do update set title = excluded.title, spec = excluded.spec, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'conversoes-de-unidades-e-medidas'), 'calc-conv-1', 'Quantos miligramas há em 0,25 g?', '1 g = 1.000 mg; 0,25 × 1.000 = 250 mg (a vírgula anda três casas para a direita).', 'facil', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'conversoes-de-unidades-e-medidas') and position = 0), 'massa-volume-tempo', 0, 'published', '2026-10-03'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'calc-conv-1');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'calc-conv-1'), 'A', '2,5 mg.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'calc-conv-1'), 'B', '25 mg.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'calc-conv-1'), 'C', '250 mg.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'calc-conv-1'), 'D', '2.500 mg.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'calc-conv-1') and label not in ('A', 'B', 'C', 'D');
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'conversoes-de-unidades-e-medidas'), 'calc-conv-2', 'Pelas conversões padronizadas no Brasil citadas pelo Coren-SP, 1 mL corresponde a:', '1 mL = 20 gotas = 60 microgotas; 1 gota = 3 microgotas.', 'facil', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'conversoes-de-unidades-e-medidas') and position = 0), 'formas-de-medida', 1, 'published', '2026-10-03'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'calc-conv-2');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'calc-conv-2'), 'A', '10 gotas.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'calc-conv-2'), 'B', '20 gotas.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'calc-conv-2'), 'C', '40 gotas.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'calc-conv-2'), 'D', '60 gotas.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'calc-conv-2') and label not in ('A', 'B', 'C', 'D');
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'conversoes-de-unidades-e-medidas'), 'calc-conv-3', 'Um frasco de soro fisiológico 0,9% de 500 mL contém quantos gramas de cloreto de sódio?', '0,9% = 0,9 g em 100 mL; em 500 mL: 0,9 × 5 = 4,5 g.', 'media', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'conversoes-de-unidades-e-medidas') and position = 0), 'porcentagem', 2, 'published', '2026-10-03'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'calc-conv-3');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'calc-conv-3'), 'A', '0,9 g.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'calc-conv-3'), 'B', '4,5 g.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'calc-conv-3'), 'C', '9 g.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'calc-conv-3'), 'D', '45 g.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'calc-conv-3') and label not in ('A', 'B', 'C', 'D');
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'conversoes-de-unidades-e-medidas'), 'calc-conv-4', 'Na referência do Coren-SP, uma colher de sopa corresponde a:', 'Sopa 15 mL, sobremesa 10 mL, chá 5 mL, café 2,5 a 3 mL.', 'facil', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'conversoes-de-unidades-e-medidas') and position = 0), 'formas-de-medida', 3, 'published', '2026-10-03'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'calc-conv-4');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'calc-conv-4'), 'A', '5 mL.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'calc-conv-4'), 'B', '10 mL.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'calc-conv-4'), 'C', '15 mL.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'calc-conv-4'), 'D', '20 mL.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'calc-conv-4') and label not in ('A', 'B', 'C', 'D');
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'conversoes-de-unidades-e-medidas'), 'calc-conv-5', 'Uma infusão deve correr em 2 horas e 30 minutos. Em minutos, esse tempo é:', '2 × 60 = 120 + 30 = 150 minutos.', 'media', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'conversoes-de-unidades-e-medidas') and position = 0), 'massa-volume-tempo', 4, 'published', '2026-10-03'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'calc-conv-5');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'calc-conv-5'), 'A', '130 min.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'calc-conv-5'), 'B', '150 min.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'calc-conv-5'), 'C', '230 min.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'calc-conv-5'), 'D', '250 min.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'calc-conv-5') and label not in ('A', 'B', 'C', 'D');
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'conversoes-de-unidades-e-medidas'), 'calc-conv-6', 'Solução cuja concentração é maior que a do plasma sanguíneo é chamada de:', 'Hipertônica: concentração maior que a do plasma; isotônica, igual ou próxima; hipotônica, menor.', 'media', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'conversoes-de-unidades-e-medidas') and position = 0), 'tonicidade', 5, 'published', '2026-10-03'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'calc-conv-6');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'calc-conv-6'), 'A', 'isotônica.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'calc-conv-6'), 'B', 'hipotônica.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'calc-conv-6'), 'C', 'hipertônica.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'calc-conv-6'), 'D', 'fisiológica.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'calc-conv-6') and label not in ('A', 'B', 'C', 'D');
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'conversoes-de-unidades-e-medidas'), 'calc-conv-7', 'Exercício de estudo: prescrição de 0,5 g de um medicamento; disponível ampola de 250 mg em 5 mL. Quantos mL aspirar?', 'Converter primeiro: 0,5 g = 500 mg. 250 mg — 5 mL; 500 mg — x; x = 500 × 5 ÷ 250 = 10 mL.', 'dificil', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'conversoes-de-unidades-e-medidas') and position = 0), 'exercicios', 6, 'published', '2026-10-03'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'calc-conv-7');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'calc-conv-7'), 'A', '1 mL.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'calc-conv-7'), 'B', '2,5 mL.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'calc-conv-7'), 'C', '5 mL.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'calc-conv-7'), 'D', '10 mL.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'calc-conv-7') and label not in ('A', 'B', 'C', 'D');
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'conversoes-de-unidades-e-medidas'), 'calc-conv-8', 'No soro glicosado a 5%, a expressão ''5%'' significa:', 'Porcentagem da solução = gramas em 100 mL; SG 5% = 5 g em 100 mL.', 'media', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'conversoes-de-unidades-e-medidas') and position = 0), 'porcentagem', 7, 'published', '2026-10-03'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'calc-conv-8');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'calc-conv-8'), 'A', '5 g de glicose em 1.000 mL.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'calc-conv-8'), 'B', '5 g de glicose em 100 mL.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'calc-conv-8'), 'C', '5 mg de glicose em 100 mL.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'calc-conv-8'), 'D', '5 mL de glicose em 100 mL.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'calc-conv-8') and label not in ('A', 'B', 'C', 'D');

-- tema: Regra de três: quanto aspirar
insert into public.topics (category_id, slug, title, description, summary, key_points, sections, outline, reading_minutes, position, status, last_reviewed_at, review_notes)
values ((select id from public.categories where product_id = (select id from public.products where key = 'revisao-tecnico-enfermagem') and slug = 'calculos-de-enfermagem'), 'regra-de-tres-dose-e-diluicao', 'Regra de três: quanto aspirar', 'Como montar a regra de três sem errar: ampolas, frasco-ampola em pó, comprimidos e concentração por mL.', 'O Coren-SP explica que a regra de três relaciona grandezas proporcionais e que, na prática de enfermagem, usa-se a regra de três direta — ao aumentar um fator, o outro aumenta junto. Ela só é necessária quando não dá para resolver diretamente (três ampolas de 2 mL somam 6 mL sem regra de três). Para montar: verificar se é direta, colocar grandezas iguais na mesma coluna (mg embaixo de mg, mL embaixo de mL), na primeira linha o que se tem (a apresentação disponível) e na segunda o que se quer (a prescrição), com x no valor procurado; depois, multiplicar em cruz e dividir. Exemplo do material: ampola de aminofilina com 240 mg em 10 mL, prescrição de 120 mg → 5 mL. Para frasco-ampola em pó, primeiro se dilui: cefalotina 1 g diluída em 5 mL fica com 200 mg em cada mL; ampicilina 500 mg em 5 mL, 100 mg por mL. A capacidade da maioria dos frascos-ampola é de no máximo 10 mL, e a quantidade de diluente, se não estiver prescrita ou orientada pelo fabricante, é definida por quem prepara. Com comprimidos: se a dose prescrita é o dobro do comprimido disponível, administram-se dois; se é uma fração de um comprimido maior, dissolve-se o comprimido em volume conhecido de água e aspira-se a parte correspondente, porque partir o comprimido faz perder dose. Os exercícios usam valores de estudo e não substituem a prescrição, o protocolo institucional nem a dupla checagem.', array['Na enfermagem usa-se a regra de três DIRETA.', 'Unidade igual embaixo de unidade igual.', '1ª linha: o que tenho (apresentação). 2ª linha: o que quero (prescrição, com x).', 'x = prescrito × volume disponível ÷ quantidade disponível.', 'Aminofilina 240 mg/10 mL, prescrito 120 mg → 5 mL.', 'Frasco-ampola em pó: diluir antes (cefalotina 1 g em 5 mL = 200 mg/mL).', 'Diluente não prescrito nem orientado pelo fabricante: quem prepara define; frasco-ampola comporta no máximo cerca de 10 mL.', 'Fração de comprimido: dissolver em volume conhecido de água e aspirar a parte da dose.']::text[], '[{"id":"visao-geral","kind":"visao","title":"A ferramenta de quase todo cálculo de dose","source":0,"blocks":[{"type":"definition","term":"Regra de três","text":"Relação entre ==grandezas proporcionais==. Na ==direta==, ao aumentar um fator o outro aumenta junto. Na realidade profissional da enfermagem, ==usa-se a regra de três direta==.","note":"Só é necessária quando não dá para resolver de forma direta (ex.: 3 ampolas de 2 mL = 6 mL)."}]},{"id":"como-montar","kind":"etapas","title":"Como montar sem errar","source":0,"blocks":[{"type":"steps","items":[{"title":"Confira se é direta","text":"Mais medicamento → mais volume. Sim, é direta."},{"title":"Converta as unidades","text":"Prescrição em g e ampola em mg? Converta antes.","why":"A regra só funciona com a mesma unidade na mesma coluna."},{"title":"Unidade embaixo de unidade","text":"==mg embaixo de mg, mL embaixo de mL==."},{"title":"1ª linha: o que tenho","text":"A apresentação disponível (ex.: 240 mg — 10 mL)."},{"title":"2ª linha: o que quero","text":"A prescrição, com ==x== no que falta (ex.: 120 mg — x mL)."},{"title":"Multiplique em cruz e divida","text":"x = prescrito × volume disponível ÷ quantidade disponível."}]},{"type":"formula","label":"Fórmula prática","expression":"x (mL) = prescrito × volume ÷ disponível","legend":["Prescrito e disponível na mesma unidade (mg, g ou UI)"]}]},{"id":"ampolas","kind":"pratica","title":"Ampolas com concentração definida","source":0,"blocks":[{"type":"example","title":"Aminofilina (exemplo do Coren-SP)","given":["Prescrito: 120 mg","Disponível: ampola 240 mg em 10 mL"],"steps":["240 mg — 10 mL","120 mg — x mL","x = 120 × 10 ÷ 240 = 5 mL"],"answer":"Aspirar 5 mL"},{"type":"example","title":"Dexametasona em mg/mL (exemplo do Coren-SP)","given":["Prescrito: 8 mg","Disponível: frasco de 2,5 mL com 4 mg/mL (= 10 mg no frasco)"],"steps":["10 mg — 2,50 mL","8 mg — x mL","x = 8 × 2,50 ÷ 10 = 2 mL"],"answer":"Aspirar 2 mL"}]},{"id":"frasco-ampola","kind":"conceito","title":"Frasco-ampola em pó: diluir antes de calcular","source":1,"blocks":[{"type":"steps","items":[{"title":"Diluir o pó em volume conhecido","text":"Ex.: cefalotina 1 g + 5 mL de diluente = solução de 5 mL."},{"title":"Achar a concentração por mL","text":"1.000 mg — 5 mL; x — 1 mL → ==200 mg por mL==."},{"title":"Aplicar a regra de três da dose","text":"Com a concentração conhecida, calcular quanto aspirar."}]},{"type":"cards","items":[{"title":"Ampicilina 500 mg + 5 mL","text":"500 mg — 5 mL → ==100 mg por mL==.","icon":"💉","tone":"blue"},{"title":"Capacidade do frasco","text":"A maioria dos frascos-ampola comporta ==no máximo 10 mL==.","icon":"🧪","tone":"slate"},{"title":"Quem define o diluente","text":"Sem prescrição nem orientação do fabricante, ==quem prepara== define o volume.","icon":"🧑‍⚕️","tone":"teal"}]}]},{"id":"comprimidos","kind":"tecnico","title":"Comprimidos","source":0,"blocks":[{"type":"example","title":"Dose maior que o comprimido","given":["Prescrito: captopril 25 mg","Disponível: comprimido de 12,5 mg"],"steps":["25 ÷ 12,5 = 2"],"answer":"Administrar 2 comprimidos"},{"type":"example","title":"Fração de um comprimido maior","given":["Prescrito: 250 mg","Disponível: comprimido de 1.000 mg"],"steps":["Partir o comprimido perde dose: dissolver 1 cp em 10 mL de água","1.000 mg — 10 mL","250 mg — x mL","x = 250 × 10 ÷ 1.000 = 2,5 mL"],"answer":"Dissolver em 10 mL e aspirar 2,5 mL"},{"type":"callout","variant":"atencao","title":"Forma certa","text":"Antes de triturar ou dissolver, confira se a forma farmacêutica permite (9 certos — forma certa)."}]},{"id":"numeros","kind":"numeros","title":"Números que caem","source":1,"blocks":[{"type":"numbers","items":[{"value":"200 mg/mL","label":"cefalotina 1 g diluída em 5 mL"},{"value":"100 mg/mL","label":"ampicilina 500 mg diluída em 5 mL"},{"value":"10 mL","label":"capacidade máxima da maioria dos frascos-ampola"},{"value":"5 mL","label":"aminofilina 120 mg da ampola de 240 mg/10 mL"}]}]},{"id":"caso","kind":"caso","title":"Situação-problema","source":1,"blocks":[{"type":"case","title":"Antibiótico em pó","scenario":"Exercício de estudo: prescrição de 300 mg de um antibiótico; disponível frasco-ampola com 1 g em pó. O técnico dilui em 5 mL.","question":"Quantos mL aspirar?","answer":"1,5 mL","reasoning":["Converter: 1 g = 1.000 mg.","1000 mg — 5 mL","300 mg — x mL","x = 300 × 5 ÷ 1000 = 1,50 mL","Conferir em dupla checagem se for medicamento de alta vigilância."]}]},{"id":"como-a-banca-cobra","kind":"cobrado","title":"Como a banca cobra","source":0,"blocks":[{"type":"traps","items":[{"wrong":"Na enfermagem, usa-se a regra de três inversa para doses.","right":"Usa-se a ==direta==.","why":"Mais dose → mais volume."},{"wrong":"Pode misturar g e mg na mesma coluna.","right":"Converta antes: ==unidade igual embaixo de unidade igual==.","why":"Senão o resultado sai 1.000 vezes errado."},{"wrong":"x = quantidade disponível × volume ÷ prescrito.","right":"x = ==prescrito== × volume disponível ÷ quantidade disponível.","why":"A banca inverte o numerador."},{"wrong":"Para dar meio comprimido de 1.000 mg, basta parti-lo e dar a metade.","right":"Para frações, ==dissolver em volume conhecido== e aspirar a parte da dose.","why":"O material diz que partir o comprimido faz perder mg."},{"wrong":"Cefalotina 1 g diluída em 5 mL tem 100 mg/mL.","right":"Tem ==200 mg/mL== (1.000 ÷ 5).","why":"100 mg/mL é a ampicilina 500 mg em 5 mL."},{"wrong":"O volume de diluente é sempre definido pelo médico.","right":"Se não estiver prescrito nem orientado pelo fabricante, ==quem prepara define==.","why":"Observação do Coren-SP."}]},{"type":"callout","variant":"atencao","title":"Segurança","text":"Valores de estudo. Não substituem a prescrição, o protocolo institucional nem a ==dupla checagem== exigida na alta vigilância."}]},{"id":"conexoes","kind":"conexoes","title":"Conexões","blocks":[{"type":"links","items":[{"slug":"conversoes-de-unidades-e-medidas","title":"Conversões de unidades e medidas","why":"Converter antes de montar."},{"slug":"penicilina-cristalina-e-rediluicao","title":"Penicilina cristalina e rediluição","why":"Quando o soluto ocupa volume e a dose é muito pequena."},{"slug":"nove-certos-administracao-de-medicamentos","title":"Os 9 certos da administração de medicamentos","why":"Dose certa e dupla checagem."}]}]}]'::jsonb, array['A ferramenta de quase todo cálculo de dose', 'Como montar sem errar', 'Ampolas com concentração definida', 'Frasco-ampola em pó: diluir antes de calcular', 'Comprimidos', 'Números que caem', 'Situação-problema', 'Como a banca cobra', 'Conexões']::text[], 6, 1, 'published', '2026-10-03'::date, 'Padrão v2: cada seção foi escrita a partir do texto original da fonte, baixado e lido em 2026-10-03 (conferência automatizada durante o desenvolvimento). Revisão por enfermeiro(a) obrigatória antes da venda. Resultados numéricos gerados por src/core/calc (testes em tests/unit/calc.test.ts).')
on conflict (slug) do update set category_id = excluded.category_id, title = excluded.title, description = excluded.description,
  summary = excluded.summary, key_points = excluded.key_points, sections = excluded.sections, outline = excluded.outline,
  reading_minutes = excluded.reading_minutes, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at, review_notes = excluded.review_notes;
insert into public.topic_sources (topic_id, position, source_title, source_organization, source_url, source_accessed_at, locator)
values ((select id from public.topics where slug = 'regra-de-tres-dose-e-diluicao'), 0, 'Boas práticas: Cálculo seguro — Volume I: Revisão das operações básicas', 'Coren-SP (cópia publicada pelo IPPMG/UFRJ)', 'https://ippmg.ufrj.br/wp-content/uploads/2023/02/boas-praticas-calculo-seguro-volume-1-revisao-das-operacoes-basicas_0-1.pdf', '2026-10-03'::date, '''Regra de três'' e ''Diluição''')
on conflict (topic_id, position) do update set source_title = excluded.source_title, source_organization = excluded.source_organization,
  source_url = excluded.source_url, source_accessed_at = excluded.source_accessed_at, locator = excluded.locator;
insert into public.topic_sources (topic_id, position, source_title, source_organization, source_url, source_accessed_at, locator)
values ((select id from public.topics where slug = 'regra-de-tres-dose-e-diluicao'), 1, 'Boas práticas: Cálculo seguro — Volume II: Cálculo e diluição de medicamentos', 'Conselho Regional de Enfermagem de São Paulo (Coren-SP)', 'https://portal.coren-sp.gov.br/sites/default/files/boas-praticas-calculo-seguro-volume-2-calculo-e-diluicao-de-medicamentos.pdf', '2026-10-03'::date, '''Diluição de medicamentos''')
on conflict (topic_id, position) do update set source_title = excluded.source_title, source_organization = excluded.source_organization,
  source_url = excluded.source_url, source_accessed_at = excluded.source_accessed_at, locator = excluded.locator;
delete from public.topic_sources s where s.topic_id = (select id from public.topics where slug = 'regra-de-tres-dose-e-diluicao') and s.position >= 2
  and not exists (select 1 from public.questions x where x.source_id = s.id);
insert into public.visual_maps (topic_id, title, spec, status, last_reviewed_at)
values ((select id from public.topics where slug = 'regra-de-tres-dose-e-diluicao'), 'Regra de três', '{"layout":"flow","center":"Tenho → Quero → x","blocks":[{"title":"Tenho","tone":"orange","icon":"📦","items":["500 mg — 5 mL"]},{"title":"Quero","tone":"blue","icon":"🎯","items":["150 mg — x mL"]},{"title":"Resolvo","tone":"green","icon":"✅","items":["x = 150 × 5 ÷ 500 = 1,5 mL"]}],"footnote":"mg embaixo de mg, mL embaixo de mL. Valores de estudo."}'::jsonb, 'published', '2026-10-03'::date)
on conflict (topic_id) do update set title = excluded.title, spec = excluded.spec, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'regra-de-tres-dose-e-diluicao'), 'calc-regra3-1', 'Exercício de estudo: uma ampola tem 500 mg em 5 mL. Para obter 150 mg, quantos mL devem ser aspirados?', '500 mg — 5 mL · 150 mg — x mL · x = 150 × 5 ÷ 500 = 1,50 mL.', 'facil', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'regra-de-tres-dose-e-diluicao') and position = 0), 'como-montar', 0, 'published', '2026-10-03'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'calc-regra3-1');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'calc-regra3-1'), 'A', '0,5 mL.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'calc-regra3-1'), 'B', '1,5 mL.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'calc-regra3-1'), 'C', '3 mL.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'calc-regra3-1'), 'D', '15 mL.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'calc-regra3-1') and label not in ('A', 'B', 'C', 'D');
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'regra-de-tres-dose-e-diluicao'), 'calc-regra3-2', 'Exercício de estudo: um frasco tem 250 mg em 10 mL. Para obter 100 mg, quantos mL devem ser aspirados?', '250 mg — 10 mL · 100 mg — x mL · x = 100 × 10 ÷ 250 = 4 mL.', 'media', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'regra-de-tres-dose-e-diluicao') and position = 0), 'como-montar', 1, 'published', '2026-10-03'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'calc-regra3-2');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'calc-regra3-2'), 'A', '2,5 mL.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'calc-regra3-2'), 'B', '4 mL.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'calc-regra3-2'), 'C', '25 mL.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'calc-regra3-2'), 'D', '0,4 mL.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'calc-regra3-2') and label not in ('A', 'B', 'C', 'D');
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'regra-de-tres-dose-e-diluicao'), 'calc-regra3-3', 'Segundo o material Boas Práticas: Cálculo Seguro (Coren-SP), ao montar a regra de três para o preparo de medicamentos, deve-se:', 'O material orienta a regra de três direta, com grandezas iguais na mesma coluna: na 1ª linha o que se sabe e na 2ª o que se procura (x).', 'facil', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'regra-de-tres-dose-e-diluicao') and position = 0), 'como-montar', 2, 'published', '2026-10-03'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'calc-regra3-3');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'calc-regra3-3'), 'A', 'colocar na mesma coluna as grandezas iguais (mg embaixo de mg, mL embaixo de mL).', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'calc-regra3-3'), 'B', 'usar sempre a regra de três inversa.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'calc-regra3-3'), 'C', 'colocar a prescrição na primeira linha e a apresentação na segunda, com unidades misturadas.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'calc-regra3-3'), 'D', 'converter tudo para gotas antes de calcular.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'calc-regra3-3') and label not in ('A', 'B', 'C', 'D');
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'regra-de-tres-dose-e-diluicao'), 'calc-regra3-4', 'Um frasco-ampola de cefalotina 1 g é diluído em 5 mL de diluente. Cada mL da solução contém:', '1.000 mg — 5 mL; x — 1 mL; x = 200 mg por mL (exemplo do Coren-SP vol. II).', 'media', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'regra-de-tres-dose-e-diluicao') and position = 1), 'frasco-ampola', 3, 'published', '2026-10-03'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'calc-regra3-4');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'calc-regra3-4'), 'A', '20 mg.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'calc-regra3-4'), 'B', '100 mg.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'calc-regra3-4'), 'C', '200 mg.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'calc-regra3-4'), 'D', '500 mg.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'calc-regra3-4') and label not in ('A', 'B', 'C', 'D');
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'regra-de-tres-dose-e-diluicao'), 'calc-regra3-5', 'Prescrição de 120 mg de aminofilina; disponível ampola de 240 mg em 10 mL. Deve-se aspirar:', '240 mg — 10 mL · 120 mg — x mL · x = 120 × 10 ÷ 240 = 5 mL (exemplo do Coren-SP vol. I).', 'facil', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'regra-de-tres-dose-e-diluicao') and position = 0), 'ampolas', 4, 'published', '2026-10-03'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'calc-regra3-5');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'calc-regra3-5'), 'A', '2 mL.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'calc-regra3-5'), 'B', '2,4 mL.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'calc-regra3-5'), 'C', '5 mL.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'calc-regra3-5'), 'D', '12 mL.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'calc-regra3-5') and label not in ('A', 'B', 'C', 'D');
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'regra-de-tres-dose-e-diluicao'), 'calc-regra3-6', 'Exercício de estudo: prescritos 250 mg; disponível comprimido de 1.000 mg. A conduta descrita pelo Coren-SP é:', 'Partir o comprimido perde dose; dissolve-se em volume conhecido: 1.000 mg — 10 mL; 250 mg — x; x = 2,5 mL.', 'media', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'regra-de-tres-dose-e-diluicao') and position = 0), 'comprimidos', 5, 'published', '2026-10-03'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'calc-regra3-6');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'calc-regra3-6'), 'A', 'partir o comprimido em quatro e dar um pedaço.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'calc-regra3-6'), 'B', 'dissolver o comprimido em 10 mL de água e aspirar 2,5 mL.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'calc-regra3-6'), 'C', 'administrar o comprimido inteiro.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'calc-regra3-6'), 'D', 'dissolver em 10 mL e aspirar 25 mL.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'calc-regra3-6') and label not in ('A', 'B', 'C', 'D');
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'regra-de-tres-dose-e-diluicao'), 'calc-regra3-7', 'Exercício de estudo: prescritos 300 mg de antibiótico; frasco-ampola com 1 g em pó diluído em 5 mL. Quantos mL aspirar?', '1 g = 1.000 mg. 1000 mg — 5 mL · 300 mg — x mL · x = 300 × 5 ÷ 1000 = 1,50 mL.', 'dificil', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'regra-de-tres-dose-e-diluicao') and position = 1), 'caso', 6, 'published', '2026-10-03'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'calc-regra3-7');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'calc-regra3-7'), 'A', '0,3 mL.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'calc-regra3-7'), 'B', '1,5 mL.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'calc-regra3-7'), 'C', '3 mL.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'calc-regra3-7'), 'D', '6 mL.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'calc-regra3-7') and label not in ('A', 'B', 'C', 'D');
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'regra-de-tres-dose-e-diluicao'), 'calc-regra3-8', 'Quando o volume de diluente de um frasco-ampola não está expresso na prescrição nem há orientação do fabricante, segundo o Coren-SP:', 'Observação do vol. II: se não estiver expressa na prescrição ou na orientação do fabricante, quem determina é quem está preparando.', 'media', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'regra-de-tres-dose-e-diluicao') and position = 1), 'frasco-ampola', 7, 'published', '2026-10-03'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'calc-regra3-8');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'calc-regra3-8'), 'A', 'o medicamento não pode ser preparado.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'calc-regra3-8'), 'B', 'quem está preparando determina o volume.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'calc-regra3-8'), 'C', 'usa-se sempre 20 mL.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'calc-regra3-8'), 'D', 'usa-se o mesmo volume da dose em mg.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'calc-regra3-8') and label not in ('A', 'B', 'C', 'D');

-- tema: Gotejamento: gotas e microgotas
insert into public.topics (category_id, slug, title, description, summary, key_points, sections, outline, reading_minutes, position, status, last_reviewed_at, review_notes)
values ((select id from public.categories where product_id = (select id from public.products where key = 'revisao-tecnico-enfermagem') and slug = 'calculos-de-enfermagem'), 'gotejamento-gotas-e-microgotas', 'Gotejamento: gotas e microgotas', 'Fórmulas com tempo em horas e em minutos, o tempo para terminar o soro e o arredondamento — com exercícios resolvidos.', 'O Coren-SP lembra que, mesmo com bombas de infusão na maioria dos serviços, as fórmulas tradicionais de gotejamento são cobradas em provas e usadas em falhas de equipamento. As conversões padronizadas no Brasil são 1 mL = 20 gotas = 60 microgotas e 1 gota = 3 microgotas. Com o tempo em horas inteiras, gotas/min = volume ÷ (horas × 3) e microgotas/min = volume ÷ horas. Com o tempo em minutos (como 90 ou 150 minutos), gotas/min = volume × 20 ÷ minutos e microgotas/min = volume × 60 ÷ minutos. Como gota não se fraciona, arredonda-se para o inteiro mais próximo. Exemplos do material: 500 mL em 8 h correm a cerca de 21 gotas/min; 500 mL em 2 h 30 min, a 67 gotas/min; 100 mL em 30 minutos, a 200 microgotas/min. Também se pode calcular o tempo para a solução terminar: horas = volume ÷ (gotas/min × 3); a parte decimal das horas vira minutos por regra de três (× 60). Para 500 mL a 10 gotas/min, o tempo é 16,666... h, ou seja, 16 horas e 40 minutos. Os exercícios usam valores de estudo: a infusão real segue a prescrição e o protocolo da instituição.', array['1 mL = 20 gotas = 60 microgotas; 1 gota = 3 microgotas.', 'Tempo em horas: gotas/min = V ÷ (T × 3) · microgotas/min = V ÷ T.', 'Tempo em minutos: gotas/min = V × 20 ÷ min · microgotas/min = V × 60 ÷ min.', 'Arredondar para o inteiro mais próximo (gota não se fraciona).', 'Microgotas/min = 3 × gotas/min para o mesmo volume e tempo.', 'Tempo de término: T (h) = V ÷ (gotas/min × 3); decimal × 60 = minutos.', '500 mL em 8 h ≈ 21 gotas/min; 100 mL em 30 min = 200 microgotas/min.', 'Exercício de estudo: não programa infusão de paciente real.']::text[], '[{"id":"visao-geral","kind":"visao","title":"Por que ainda se calcula na mão","source":1,"blocks":[{"type":"text","text":"Bombas de infusão fazem o trabalho na maioria dos serviços, mas o Coren-SP lembra que as fórmulas são exigidas ==em provas e concursos== e ==quando o equipamento falha==."},{"type":"cards","items":[{"title":"1 mL = 20 gotas","text":"Equipo de gotas (macrogotas).","icon":"💧","tone":"orange"},{"title":"1 mL = 60 microgotas","text":"Equipo de microgotas.","icon":"💦","tone":"blue"},{"title":"1 gota = 3 microgotas","text":"Por isso microgotas/min = 3 × gotas/min.","icon":"🔁","tone":"teal"}]}]},{"id":"formulas","kind":"etapas","title":"As fórmulas: escolha pelo tempo","lead":"Tempo em horas inteiras ou em minutos? É isso que define a fórmula.","source":1,"blocks":[{"type":"formula","label":"Gotas/min — tempo em horas","expression":"gotas/min = V ÷ (T × 3)","legend":["V = volume em mL","T = horas inteiras","3 = constante"]},{"type":"formula","label":"Microgotas/min — tempo em horas","expression":"microgotas/min = V ÷ T"},{"type":"formula","label":"Gotas/min — tempo em minutos","expression":"gotas/min = V × 20 ÷ min","legend":["Use quando o tempo vier em minutos (90, 150...)"]},{"type":"formula","label":"Microgotas/min — tempo em minutos","expression":"microgotas/min = V × 60 ÷ min"},{"type":"callout","variant":"dica","title":"Arredondamento","text":"Gota não se fraciona: arredonde para o ==inteiro mais próximo==."}]},{"id":"exercicios-horas","kind":"pratica","title":"Exercícios: tempo em horas","source":1,"blocks":[{"type":"example","title":"SG 5% 500 mL em 8 h (exemplo do Coren-SP)","given":["500 mL","8 horas","Equipo de gotas"],"steps":["Total de gotas: 500 mL × 20 = 10000 gotas","Tempo em minutos: 8 h × 60 = 480 min","10000 ÷ 480 = 20,83 → 21 gotas/min"],"answer":"21 gotas/min"},{"type":"example","title":"300 mL em 6 h","given":["300 mL","6 horas","Equipo de microgotas"],"steps":["Total de microgotas: 300 mL × 60 = 18000 microgotas","Tempo em minutos: 6 h × 60 = 360 min","18000 ÷ 360 = 50 → 50 microgotas/min"],"answer":"50 microgotas/min"}]},{"id":"exercicios-minutos","kind":"pratica","title":"Exercícios: tempo em minutos","source":1,"blocks":[{"type":"example","title":"SF 0,9% 500 mL em 2 h 30 min (exemplo do Coren-SP)","given":["500 mL","2 h 30 min = 150 min","Equipo de gotas"],"steps":["500 mL × 20 = 10000 gotas","10000 ÷ 150 min = 66,67 → 67 gotas/min"],"answer":"67 gotas/min"},{"type":"example","title":"100 mL em 30 min (exemplo do Coren-SP)","given":["100 mL","30 min","Equipo de microgotas"],"steps":["100 mL × 60 = 6000 microgotas","6000 ÷ 30 min = 200 → 200 microgotas/min"],"answer":"200 microgotas/min"}]},{"id":"tempo-de-termino","kind":"tecnico","title":"Quanto tempo o soro leva para acabar","source":1,"blocks":[{"type":"formula","label":"Tempo de término","expression":"T (h) = V ÷ (gotas/min × 3)","legend":["Em microgotas: T = V ÷ microgotas/min","Parte decimal das horas × 60 = minutos"]},{"type":"example","title":"500 mL a 10 gotas/min","given":["500 mL","10 gotas/min"],"steps":["T = 500 ÷ (10 × 3) = 16,67 h","Parte decimal: 0,67 h × 60 = 40 min","Tempo ≈ 16 h 40 min"],"answer":"16 h 40 min"},{"type":"callout","variant":"atencao","title":"Arredondamento da fonte","text":"O material do Coren-SP usa 16,6 h e chega a 16 h 36 min; com o valor exato (16,666... h), o tempo é ==16 h 40 min==."}]},{"id":"numeros","kind":"numeros","title":"Números que caem","source":0,"blocks":[{"type":"numbers","items":[{"value":"20","label":"gotas em 1 mL"},{"value":"60","label":"microgotas em 1 mL"},{"value":"3","label":"constante da fórmula em horas","note":"60 min ÷ 20 gotas"},{"value":"21","label":"gotas/min para 500 mL em 8 h"},{"value":"67","label":"gotas/min para 500 mL em 2 h 30"},{"value":"16 h 40","label":"500 mL a 10 gotas/min"}]}]},{"id":"caso","kind":"caso","title":"Situação-problema","source":1,"blocks":[{"type":"case","title":"Bomba de infusão em falha","scenario":"Exercício de estudo: a bomba de infusão parou. A prescrição é de 1.000 mL de soro em 8 horas, em equipo de gotas.","question":"Qual o gotejamento a controlar manualmente até a troca do equipamento?","answer":"42 gotas/min","reasoning":["Total de gotas: 1000 mL × 20 = 20000 gotas","Tempo em minutos: 8 h × 60 = 480 min","20000 ÷ 480 = 41,67 → 42 gotas/min","Atalho: 1.000 ÷ (8 × 3) = 41,67 → 42.","Comunicar ao enfermeiro e seguir o protocolo da instituição."]}]},{"id":"como-a-banca-cobra","kind":"cobrado","title":"Como a banca cobra","source":0,"blocks":[{"type":"traps","items":[{"wrong":"Para microgotas, use V ÷ (T × 3).","right":"Microgotas (tempo em horas) = ==V ÷ T==.","why":"O ''× 3'' é das gotas."},{"wrong":"1 mL = 60 gotas.","right":"1 mL = ==20 gotas== = 60 microgotas.","why":"60 é de microgotas."},{"wrong":"Com tempo em minutos, use V ÷ (T × 3) colocando os minutos.","right":"Em minutos: ==V × 20 ÷ min== (gotas) ou ==V × 60 ÷ min== (microgotas).","why":"A fórmula com × 3 só vale para horas inteiras."},{"wrong":"20,8 gotas/min deve ser arredondado para 20.","right":"Arredonda-se para o ==inteiro mais próximo==: 21.","why":"Regra aritmética usada pelo material."},{"wrong":"Microgotas/min é o triplo de gotas/min só às vezes.","right":"==Sempre==, para o mesmo volume e tempo.","why":"1 gota = 3 microgotas."},{"wrong":"500 mL a 10 gotas/min termina em 16 h 06 min.","right":"Termina em ==16 h 40 min==.","why":"0,666 h × 60 = 40 min; não se lê a decimal como minutos."}]}]},{"id":"conexoes","kind":"conexoes","title":"Conexões","blocks":[{"type":"links","items":[{"slug":"conversoes-de-unidades-e-medidas","title":"Conversões de unidades e medidas","why":"Horas em minutos e mL em gotas."},{"slug":"penicilina-cristalina-e-rediluicao","title":"Penicilina cristalina e rediluição","why":"Penicilina vai em bureta de 50 ou 100 mL."},{"slug":"nove-certos-administracao-de-medicamentos","title":"Os 9 certos da administração de medicamentos","why":"Dose certa inclui conferir gotejamento e bomba."}]}]}]'::jsonb, array['Por que ainda se calcula na mão', 'As fórmulas: escolha pelo tempo', 'Exercícios: tempo em horas', 'Exercícios: tempo em minutos', 'Quanto tempo o soro leva para acabar', 'Números que caem', 'Situação-problema', 'Como a banca cobra', 'Conexões']::text[], 5, 2, 'published', '2026-10-03'::date, 'Padrão v2: cada seção foi escrita a partir do texto original da fonte, baixado e lido em 2026-10-03 (conferência automatizada durante o desenvolvimento). Revisão por enfermeiro(a) obrigatória antes da venda. O exemplo de tempo de término do Coren-SP (16 h 36 min) arredonda 16,666 h para 16,6 h; o app mostra o valor exato (16 h 40 min). O 2º exemplo do material é rotulado ''mgt/min'' mas usa a constante 20 (gotas) e responde em gotas/min — o app segue a conta.')
on conflict (slug) do update set category_id = excluded.category_id, title = excluded.title, description = excluded.description,
  summary = excluded.summary, key_points = excluded.key_points, sections = excluded.sections, outline = excluded.outline,
  reading_minutes = excluded.reading_minutes, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at, review_notes = excluded.review_notes;
insert into public.topic_sources (topic_id, position, source_title, source_organization, source_url, source_accessed_at, locator)
values ((select id from public.topics where slug = 'gotejamento-gotas-e-microgotas'), 0, 'Boas práticas: Cálculo seguro — Volume I: Revisão das operações básicas', 'Coren-SP (cópia publicada pelo IPPMG/UFRJ)', 'https://ippmg.ufrj.br/wp-content/uploads/2023/02/boas-praticas-calculo-seguro-volume-1-revisao-das-operacoes-basicas_0-1.pdf', '2026-10-03'::date, '''Formas de medida'' (conversões de gotejamento)')
on conflict (topic_id, position) do update set source_title = excluded.source_title, source_organization = excluded.source_organization,
  source_url = excluded.source_url, source_accessed_at = excluded.source_accessed_at, locator = excluded.locator;
insert into public.topic_sources (topic_id, position, source_title, source_organization, source_url, source_accessed_at, locator)
values ((select id from public.topics where slug = 'gotejamento-gotas-e-microgotas'), 1, 'Boas práticas: Cálculo seguro — Volume II: Cálculo e diluição de medicamentos', 'Conselho Regional de Enfermagem de São Paulo (Coren-SP)', 'https://portal.coren-sp.gov.br/sites/default/files/boas-praticas-calculo-seguro-volume-2-calculo-e-diluicao-de-medicamentos.pdf', '2026-10-03'::date, '''Gotejamento de soluções''')
on conflict (topic_id, position) do update set source_title = excluded.source_title, source_organization = excluded.source_organization,
  source_url = excluded.source_url, source_accessed_at = excluded.source_accessed_at, locator = excluded.locator;
delete from public.topic_sources s where s.topic_id = (select id from public.topics where slug = 'gotejamento-gotas-e-microgotas') and s.position >= 2
  and not exists (select 1 from public.questions x where x.source_id = s.id);
insert into public.visual_maps (topic_id, title, spec, status, last_reviewed_at)
values ((select id from public.topics where slug = 'gotejamento-gotas-e-microgotas'), 'Gotejamento', '{"layout":"compare","center":"1 mL = 20 gotas = 60 microgotas","blocks":[{"title":"Tempo em horas","tone":"orange","icon":"🕗","items":["gotas = V ÷ (T × 3)","microgotas = V ÷ T","500 mL / 8 h → 21 gotas/min"]},{"title":"Tempo em minutos","tone":"blue","icon":"⏱️","items":["gotas = V × 20 ÷ min","microgotas = V × 60 ÷ min","100 mL / 30 min → 200 microgotas/min"]}],"footnote":"V em mL. Exercício de estudo, não conduta clínica."}'::jsonb, 'published', '2026-10-03'::date)
on conflict (topic_id) do update set title = excluded.title, spec = excluded.spec, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'gotejamento-gotas-e-microgotas'), 'calc-gotas-1', 'Exercício de estudo: um soro de 500 mL deve correr em 8 horas. Quantas gotas por minuto, aproximadamente?', 'Total de gotas: 500 mL × 20 = 10000 gotas. Tempo em minutos: 8 h × 60 = 480 min. 10000 ÷ 480 = 20,83 → 21 gotas/min. Atalho: 500 ÷ (8 × 3) = 20,83.', 'facil', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'gotejamento-gotas-e-microgotas') and position = 1), 'exercicios-horas', 0, 'published', '2026-10-03'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'calc-gotas-1');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'calc-gotas-1'), 'A', '7 gotas/min.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'calc-gotas-1'), 'B', '21 gotas/min.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'calc-gotas-1'), 'C', '63 gotas/min.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'calc-gotas-1'), 'D', '167 gotas/min.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'calc-gotas-1') and label not in ('A', 'B', 'C', 'D');
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'gotejamento-gotas-e-microgotas'), 'calc-gotas-2', 'Exercício de estudo: 300 mL devem correr em 6 horas em equipo de microgotas. Qual o gotejamento?', 'Total de microgotas: 300 mL × 60 = 18000 microgotas. Tempo em minutos: 6 h × 60 = 360 min. 18000 ÷ 360 = 50 → 50 microgotas/min. Atalho para microgotas: volume ÷ horas = 300 ÷ 6.', 'facil', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'gotejamento-gotas-e-microgotas') and position = 1), 'exercicios-horas', 1, 'published', '2026-10-03'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'calc-gotas-2');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'calc-gotas-2'), 'A', '17 microgotas/min.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'calc-gotas-2'), 'B', '50 microgotas/min.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'calc-gotas-2'), 'C', '150 microgotas/min.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'calc-gotas-2'), 'D', '300 microgotas/min.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'calc-gotas-2') and label not in ('A', 'B', 'C', 'D');
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'gotejamento-gotas-e-microgotas'), 'calc-gotas-3', 'Exercício de estudo: 1.000 mL devem correr em 8 horas em equipo de gotas. O gotejamento aproximado é:', 'Total de gotas: 1000 mL × 20 = 20000 gotas. Tempo em minutos: 8 h × 60 = 480 min. 20000 ÷ 480 = 41,67 → 42 gotas/min. Atalho: 1.000 ÷ (8 × 3).', 'media', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'gotejamento-gotas-e-microgotas') and position = 1), 'formulas', 2, 'published', '2026-10-03'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'calc-gotas-3');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'calc-gotas-3'), 'A', '21 gotas/min.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'calc-gotas-3'), 'B', '42 gotas/min.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'calc-gotas-3'), 'C', '125 gotas/min.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'calc-gotas-3'), 'D', '63 gotas/min.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'calc-gotas-3') and label not in ('A', 'B', 'C', 'D');
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'gotejamento-gotas-e-microgotas'), 'calc-gotas-4', 'Exercício de estudo: 500 mL de soro fisiológico devem correr em 2 horas e 30 minutos, em equipo de gotas. O gotejamento é de aproximadamente:', '2 h 30 = 150 min. 500 mL × 20 = 10000 gotas. 10000 ÷ 150 min = 66,67 → 67 gotas/min (exemplo do Coren-SP).', 'media', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'gotejamento-gotas-e-microgotas') and position = 1), 'exercicios-minutos', 3, 'published', '2026-10-03'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'calc-gotas-4');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'calc-gotas-4'), 'A', '33 gotas/min.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'calc-gotas-4'), 'B', '67 gotas/min.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'calc-gotas-4'), 'C', '100 gotas/min.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'calc-gotas-4'), 'D', '200 gotas/min.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'calc-gotas-4') and label not in ('A', 'B', 'C', 'D');
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'gotejamento-gotas-e-microgotas'), 'calc-gotas-5', 'Exercício de estudo: 100 mL de um antibiótico devem correr em 30 minutos, em equipo de microgotas. O gotejamento é:', '100 mL × 60 = 6000 microgotas. 6000 ÷ 30 min = 200 → 200 microgotas/min (exemplo do Coren-SP).', 'media', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'gotejamento-gotas-e-microgotas') and position = 1), 'exercicios-minutos', 4, 'published', '2026-10-03'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'calc-gotas-5');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'calc-gotas-5'), 'A', '67 microgotas/min.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'calc-gotas-5'), 'B', '100 microgotas/min.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'calc-gotas-5'), 'C', '200 microgotas/min.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'calc-gotas-5'), 'D', '300 microgotas/min.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'calc-gotas-5') and label not in ('A', 'B', 'C', 'D');
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'gotejamento-gotas-e-microgotas'), 'calc-gotas-6', 'Exercício de estudo: um soro de 500 mL está correndo a 25 gotas/min. Em quanto tempo, aproximadamente, ele termina?', 'T = 500 ÷ (25 × 3) = 6,67 h. Parte decimal: 0,67 h × 60 = 40 min. Tempo ≈ 6 h 40 min.', 'dificil', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'gotejamento-gotas-e-microgotas') and position = 1), 'tempo-de-termino', 5, 'published', '2026-10-03'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'calc-gotas-6');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'calc-gotas-6'), 'A', '5 h.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'calc-gotas-6'), 'B', '6 h 40 min.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'calc-gotas-6'), 'C', '8 h 20 min.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'calc-gotas-6'), 'D', '20 h.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'calc-gotas-6') and label not in ('A', 'B', 'C', 'D');
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'gotejamento-gotas-e-microgotas'), 'calc-gotas-7', 'Quando o tempo de infusão é dado em minutos, a fórmula de gotas por minuto é:', 'Gotas/min com tempo em minutos = volume × 20 ÷ minutos. V × 60 ÷ min é para microgotas; V ÷ (T × 3) é com tempo em horas.', 'media', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'gotejamento-gotas-e-microgotas') and position = 1), 'formulas', 6, 'published', '2026-10-03'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'calc-gotas-7');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'calc-gotas-7'), 'A', 'V ÷ (T × 3).', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'calc-gotas-7'), 'B', 'V × 20 ÷ minutos.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'calc-gotas-7'), 'C', 'V × 60 ÷ minutos.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'calc-gotas-7'), 'D', 'V ÷ T.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'calc-gotas-7') and label not in ('A', 'B', 'C', 'D');
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'gotejamento-gotas-e-microgotas'), 'calc-gotas-8', 'Para o mesmo volume e tempo, o número de microgotas por minuto corresponde a:', '1 gota = 3 microgotas; logo, microgotas/min = 3 × gotas/min.', 'facil', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'gotejamento-gotas-e-microgotas') and position = 0), 'visao-geral', 7, 'published', '2026-10-03'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'calc-gotas-8');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'calc-gotas-8'), 'A', 'metade do número de gotas/min.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'calc-gotas-8'), 'B', 'o mesmo número de gotas/min.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'calc-gotas-8'), 'C', 'o triplo do número de gotas/min.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'calc-gotas-8'), 'D', 'vinte vezes o número de gotas/min.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'calc-gotas-8') and label not in ('A', 'B', 'C', 'D');

-- tema: Penicilina cristalina e rediluição
insert into public.topics (category_id, slug, title, description, summary, key_points, sections, outline, reading_minutes, position, status, last_reviewed_at, review_notes)
values ((select id from public.categories where product_id = (select id from public.products where key = 'revisao-tecnico-enfermagem') and slug = 'calculos-de-enfermagem'), 'penicilina-cristalina-e-rediluicao', 'Penicilina cristalina e rediluição', 'Por que o pó da penicilina ocupa volume, como chegar a 10 mL e como rediluir para obter doses muito pequenas.', 'O Coren-SP destaca a penicilina cristalina, apresentada mais comumente em frascos-ampola de 5.000.000 UI e 10.000.000 UI. Diferente da maioria dos medicamentos, no preparo da penicilina cristalina deve-se considerar o volume do soluto: o pó ocupa cerca de 2 mL no frasco de 5.000.000 UI e 4 mL no de 10.000.000 UI. Assim, 8 mL de água destilada no frasco de 5.000.000 UI resultam em 10 mL de solução, e 6 mL no frasco de 10.000.000 UI também resultam em 10 mL — volumes escolhidos para facilitar o cálculo. Se a quantidade de diluente não estiver na prescrição nem houver orientação do fabricante, quem prepara a define. Exemplo do material: prescritos 4.800.000 UI, disponível frasco de 10.000.000 UI diluído para 10 mL → aspirar 4,8 mL. A penicilina costuma ser administrada em bureta com 50 ou 100 mL, conforme a prescrição. Rediluição é diluir ainda mais, aumentando o volume do solvente sem alterar a quantidade de soluto, para obter concentrações menores num volume que possa ser aspirado com segurança — recurso usado em neonatologia, pediatria e algumas clínicas especializadas. Técnica do material: aspirar 1 mL da solução, completar até 10 mL com diluente e recalcular com a nova concentração; por exemplo, para 35.000 UI de penicilina, a primeira diluição dá 1.000.000 UI por mL, que rediluídos em 10 mL permitem aspirar 0,35 mL.', array['Penicilina cristalina: frascos comuns de 5.000.000 UI e 10.000.000 UI.', 'O pó ocupa volume: ~2 mL (5 milhões) e ~4 mL (10 milhões).', '5.000.000 UI + 8 mL AD = 10 mL · 10.000.000 UI + 6 mL AD = 10 mL.', 'Diluente não prescrito nem orientado: quem prepara define.', 'Exemplo do Coren-SP: 4.800.000 UI do frasco de 10.000.000 UI em 10 mL → 4,8 mL.', 'Rediluição: mais solvente, mesmo soluto → concentração menor, volume aspirável.', 'Técnica: aspirar 1 mL, completar 10 mL com diluente, recalcular.', 'Usada em neonatologia, pediatria e clínicas especializadas.']::text[], '[{"id":"visao-geral","kind":"visao","title":"Duas exceções ao cálculo comum","source":0,"blocks":[{"type":"cards","items":[{"title":"O pó que ocupa espaço","text":"Na penicilina cristalina, o ==volume do soluto conta== no volume final.","icon":"🧂","tone":"violet"},{"title":"A dose que não cabe na seringa","text":"Quando a dose é minúscula, a ==rediluição== aumenta o volume para aspirar com segurança.","icon":"🔬","tone":"amber"}]}]},{"id":"volume-do-po","kind":"conceito","title":"Penicilina cristalina: o volume do pó","source":0,"blocks":[{"type":"compare","columns":["Frasco de 5.000.000 UI","Frasco de 10.000.000 UI"],"rows":[{"label":"Volume do pó (soluto)","cells":["≈ ==2 mL==","≈ ==4 mL=="]},{"label":"Água destilada","cells":["==8 mL==","==6 mL=="]},{"label":"Volume final","cells":["10 mL (5.000.000 UI em 10 mL)","10 mL (10.000.000 UI em 10 mL)"]},{"label":"Concentração","cells":["500.000 UI por mL","1.000.000 UI por mL"]}]},{"type":"callout","variant":"dica","title":"Por que 8 e 6 mL?","text":"O material usa esses volumes para chegar a ==10 mL== e ==facilitar o cálculo==. Também é possível 16 mL + 4 mL de pó = 20 mL no frasco de 10.000.000 UI."}]},{"id":"calculo-penicilina","kind":"pratica","title":"Calculando a dose de penicilina","source":0,"blocks":[{"type":"example","title":"Exemplo do Coren-SP","given":["Prescrito: 4.800.000 UI","Disponível: frasco de 10.000.000 UI","Diluição: 6 mL AD + 4 mL de pó = 10 mL"],"steps":["10.000.000 UI — 10 mL","4.800.000 UI — x mL","x = 4.800.000 × 10 ÷ 10.000.000 = 4,8 mL"],"answer":"Aspirar 4,8 mL"},{"type":"example","title":"Exercício de estudo","given":["Prescrito: 3.000.000 UI","Disponível: frasco de 5.000.000 UI","Diluição: 8 mL AD + 2 mL de pó = 10 mL"],"steps":["5.000.000 UI — 10 mL","3.000.000 UI — x mL","x = 3.000.000 × 10 ÷ 5.000.000 = 6 mL"],"answer":"Aspirar 6 mL"},{"type":"callout","variant":"atencao","title":"Administração","text":"A penicilina cristalina costuma ser colocada em ==bureta com 50 ou 100 mL==, conforme a prescrição."}]},{"id":"rediluicao","kind":"etapas","title":"Rediluição, passo a passo","lead":"''Colocar mais água no feijão'': a quantidade de grãos é a mesma, o volume aumenta.","source":0,"blocks":[{"type":"steps","items":[{"title":"Fazer a primeira diluição","text":"Ex.: penicilina 10.000.000 UI + 6 mL = 10 mL.","who":"tecnico"},{"title":"Aspirar 1 mL na seringa de 10 mL","text":"Esse 1 mL contém 10.000.000 ÷ 10 = ==1.000.000 UI==.","why":"1 mL tem um décimo do frasco."},{"title":"Completar até 10 mL com diluente","text":"Agora são 1.000.000 UI em 10 mL — nova apresentação, mesmo soluto.","why":"Concentração 10 vezes menor, volume fácil de medir."},{"title":"Recalcular com a nova apresentação","text":"Regra de três com a concentração da rediluição."}]},{"type":"callout","variant":"lei","title":"Quando usar","text":"Doses muito pequenas: ==neonatologia, pediatria== e algumas clínicas especializadas (Coren-SP)."}]},{"id":"exercicios-rediluicao","kind":"tecnico","title":"Exercícios de rediluição","source":0,"blocks":[{"type":"example","title":"Penicilina G potássica 35.000 UI (exemplo do Coren-SP)","given":["Frasco de 10.000.000 UI diluído em 10 mL","1 mL (1.000.000 UI) + 9 mL AD = 10 mL"],"steps":["1.000.000 UI — 10 mL","35.000 UI — x mL","x = 35.000 × 10 ÷ 1.000.000 = 0,35 mL"],"answer":"Aspirar 0,35 mL da rediluição"},{"type":"example","title":"Aminofilina 15 mg (exercício de estudo)","given":["Ampola 240 mg em 10 mL","Aspirar 1 mL: 240 ÷ 10 = 24 mg","1 mL (24 mg) + 9 mL AD = 24 mg em 10 mL"],"steps":["24 mg — 10 mL","15 mg — x mL","x = 15 × 10 ÷ 24 = 6,25 mL"],"answer":"Aspirar 6,25 mL da rediluição"}]},{"id":"numeros","kind":"numeros","title":"Números que caem","source":0,"blocks":[{"type":"numbers","items":[{"value":"2 mL","label":"volume do pó no frasco de 5.000.000 UI"},{"value":"4 mL","label":"volume do pó no frasco de 10.000.000 UI"},{"value":"8 mL","label":"AD no frasco de 5.000.000 UI para 10 mL"},{"value":"6 mL","label":"AD no frasco de 10.000.000 UI para 10 mL"},{"value":"50–100 mL","label":"bureta usada para a penicilina"},{"value":"1 + 9","label":"mL na rediluição (1 da solução + 9 de diluente)"}]}]},{"id":"caso","kind":"caso","title":"Situação-problema","source":0,"blocks":[{"type":"case","title":"Penicilina de 10 milhões","scenario":"Exercício de estudo: a técnica coloca 10 mL de água destilada no frasco de 10.000.000 UI e calcula como se tivesse 10 mL de solução.","question":"Qual o erro?","answer":"Esqueceu o volume do pó (~4 mL): com 10 mL de água, a solução fica com ~14 mL, e a concentração não é 1.000.000 UI/mL.","reasoning":["O material manda considerar o volume do soluto na penicilina cristalina.","Para ter 10 mL no frasco de 10.000.000 UI, usam-se 6 mL de água.","Com volume errado, todas as doses aspiradas saem erradas."]}]},{"id":"como-a-banca-cobra","kind":"cobrado","title":"Como a banca cobra","source":0,"blocks":[{"type":"traps","items":[{"wrong":"O pó da penicilina cristalina não ocupa volume.","right":"Ocupa ~==2 mL== (5 mi UI) e ~==4 mL== (10 mi UI).","why":"É a exceção que o Coren-SP destaca."},{"wrong":"Para 10 mL de solução no frasco de 10.000.000 UI, usam-se 10 mL de água.","right":"Usam-se ==6 mL== de água (6 + 4 de pó).","why":"O volume final soma solvente e soluto."},{"wrong":"Rediluir aumenta a quantidade de medicamento.","right":"Rediluir aumenta o ==volume== com a ==mesma quantidade de soluto==.","why":"Só a concentração diminui."},{"wrong":"No frasco de 5.000.000 UI, usam-se 6 mL de água.","right":"Usam-se ==8 mL== (8 + 2 de pó = 10 mL).","why":"6 mL é para o frasco de 10.000.000 UI."},{"wrong":"Rediluição é usada para aumentar a dose em adultos.","right":"É usada para obter ==doses muito pequenas== (neonatologia, pediatria).","why":"Objetivo: volume que possa ser aspirado com segurança."},{"wrong":"4.800.000 UI do frasco de 10.000.000 UI em 10 mL = 48 mL.","right":"= ==4,8 mL==.","why":"4.800.000 × 10 ÷ 10.000.000."}]}]},{"id":"conexoes","kind":"conexoes","title":"Conexões","blocks":[{"type":"links","items":[{"slug":"regra-de-tres-dose-e-diluicao","title":"Regra de três: quanto aspirar","why":"A base de todo cálculo de dose."},{"slug":"insulina-calculo-e-preparo","title":"Insulina: cálculo e preparo","why":"Outra medida em UI — e a insulina não se dilui."},{"slug":"gotejamento-gotas-e-microgotas","title":"Gotejamento: gotas e microgotas","why":"Correr a bureta no tempo prescrito."}]}]}]'::jsonb, array['Duas exceções ao cálculo comum', 'Penicilina cristalina: o volume do pó', 'Calculando a dose de penicilina', 'Rediluição, passo a passo', 'Exercícios de rediluição', 'Números que caem', 'Situação-problema', 'Como a banca cobra', 'Conexões']::text[], 6, 3, 'published', '2026-10-03'::date, 'Padrão v2: cada seção foi escrita a partir do texto original da fonte, baixado e lido em 2026-10-03 (conferência automatizada durante o desenvolvimento). Revisão por enfermeiro(a) obrigatória antes da venda. O exemplo de rediluição da aminofilina no material do Coren-SP está inconsistente (prescrição e resposta não batem); o app usa exercício próprio calculado por src/core/calc.')
on conflict (slug) do update set category_id = excluded.category_id, title = excluded.title, description = excluded.description,
  summary = excluded.summary, key_points = excluded.key_points, sections = excluded.sections, outline = excluded.outline,
  reading_minutes = excluded.reading_minutes, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at, review_notes = excluded.review_notes;
insert into public.topic_sources (topic_id, position, source_title, source_organization, source_url, source_accessed_at, locator)
values ((select id from public.topics where slug = 'penicilina-cristalina-e-rediluicao'), 0, 'Boas práticas: Cálculo seguro — Volume II: Cálculo e diluição de medicamentos', 'Conselho Regional de Enfermagem de São Paulo (Coren-SP)', 'https://portal.coren-sp.gov.br/sites/default/files/boas-praticas-calculo-seguro-volume-2-calculo-e-diluicao-de-medicamentos.pdf', '2026-10-03'::date, '''Penicilina cristalina'' e ''Rediluição''')
on conflict (topic_id, position) do update set source_title = excluded.source_title, source_organization = excluded.source_organization,
  source_url = excluded.source_url, source_accessed_at = excluded.source_accessed_at, locator = excluded.locator;
delete from public.topic_sources s where s.topic_id = (select id from public.topics where slug = 'penicilina-cristalina-e-rediluicao') and s.position >= 1
  and not exists (select 1 from public.questions x where x.source_id = s.id);
insert into public.visual_maps (topic_id, title, spec, status, last_reviewed_at)
values ((select id from public.topics where slug = 'penicilina-cristalina-e-rediluicao'), 'Penicilina e rediluição', '{"layout":"flow","center":"Do frasco à dose pequena","blocks":[{"title":"1. Diluir considerando o pó","tone":"violet","icon":"🧪","items":["10 mi UI + 6 mL = 10 mL","5 mi UI + 8 mL = 10 mL"]},{"title":"2. Calcular a dose","tone":"blue","icon":"🎯","items":["Regra de três em UI","4,8 mi UI → 4,8 mL"]},{"title":"3. Dose muito pequena?","tone":"amber","icon":"🔬","items":["Aspirar 1 mL","Completar 10 mL","Recalcular"]}],"footnote":"Valores de estudo. Seguir a prescrição e o protocolo da instituição."}'::jsonb, 'published', '2026-10-03'::date)
on conflict (topic_id) do update set title = excluded.title, spec = excluded.spec, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'penicilina-cristalina-e-rediluicao'), 'calc-pen-1', 'No preparo da penicilina cristalina, segundo o Coren-SP, deve-se considerar que o pó (soluto) do frasco de 10.000.000 UI ocupa aproximadamente:', 'O soluto equivale a cerca de 2 mL no frasco de 5.000.000 UI e 4 mL no de 10.000.000 UI.', 'media', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'penicilina-cristalina-e-rediluicao') and position = 0), 'volume-do-po', 0, 'published', '2026-10-03'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'calc-pen-1');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'calc-pen-1'), 'A', 'nenhum volume.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'calc-pen-1'), 'B', '1 mL.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'calc-pen-1'), 'C', '2 mL.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'calc-pen-1'), 'D', '4 mL.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'calc-pen-1') and label not in ('A', 'B', 'C', 'D');
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'penicilina-cristalina-e-rediluicao'), 'calc-pen-2', 'Para obter 10 mL de solução no frasco de penicilina cristalina de 5.000.000 UI, adiciona-se:', '8 mL de água + cerca de 2 mL de cristais = 10 mL.', 'media', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'penicilina-cristalina-e-rediluicao') and position = 0), 'volume-do-po', 1, 'published', '2026-10-03'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'calc-pen-2');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'calc-pen-2'), 'A', '4 mL de água destilada.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'calc-pen-2'), 'B', '6 mL de água destilada.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'calc-pen-2'), 'C', '8 mL de água destilada.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'calc-pen-2'), 'D', '10 mL de água destilada.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'calc-pen-2') and label not in ('A', 'B', 'C', 'D');
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'penicilina-cristalina-e-rediluicao'), 'calc-pen-3', 'Prescritas 4.800.000 UI de penicilina cristalina; disponível frasco de 10.000.000 UI diluído para 10 mL. Deve-se aspirar:', '10.000.000 UI — 10 mL · 4.800.000 UI — x mL · x = 4.800.000 × 10 ÷ 10.000.000 = 4,8 mL (exemplo do Coren-SP).', 'facil', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'penicilina-cristalina-e-rediluicao') and position = 0), 'calculo-penicilina', 2, 'published', '2026-10-03'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'calc-pen-3');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'calc-pen-3'), 'A', '0,48 mL.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'calc-pen-3'), 'B', '4,8 mL.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'calc-pen-3'), 'C', '6 mL.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'calc-pen-3'), 'D', '48 mL.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'calc-pen-3') and label not in ('A', 'B', 'C', 'D');
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'penicilina-cristalina-e-rediluicao'), 'calc-pen-4', 'Rediluir um medicamento significa:', 'É diluir ainda mais, aumentando o solvente com a mesma massa de soluto, para doses pequenas num volume aspirável.', 'facil', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'penicilina-cristalina-e-rediluicao') and position = 0), 'rediluicao', 3, 'published', '2026-10-03'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'calc-pen-4');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'calc-pen-4'), 'A', 'aumentar a quantidade de soluto.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'calc-pen-4'), 'B', 'aumentar o volume do solvente sem alterar a quantidade de soluto, obtendo concentração menor.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'calc-pen-4'), 'C', 'descartar parte do medicamento.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'calc-pen-4'), 'D', 'misturar dois medicamentos diferentes.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'calc-pen-4') and label not in ('A', 'B', 'C', 'D');
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'penicilina-cristalina-e-rediluicao'), 'calc-pen-5', 'Exercício (Coren-SP): prescritas 35.000 UI de penicilina G potássica; frasco de 10.000.000 UI diluído em 10 mL; aspira-se 1 mL e completa-se a 10 mL. Da rediluição, deve-se aspirar:', '1 mL da primeira diluição = 1.000.000 UI; em 10 mL: 1.000.000 UI — 10 mL · 35.000 UI — x mL · x = 35.000 × 10 ÷ 1.000.000 = 0,35 mL.', 'dificil', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'penicilina-cristalina-e-rediluicao') and position = 0), 'exercicios-rediluicao', 4, 'published', '2026-10-03'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'calc-pen-5');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'calc-pen-5'), 'A', '0,035 mL.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'calc-pen-5'), 'B', '0,35 mL.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'calc-pen-5'), 'C', '3,5 mL.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'calc-pen-5'), 'D', '35 mL.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'calc-pen-5') and label not in ('A', 'B', 'C', 'D');
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'penicilina-cristalina-e-rediluicao'), 'calc-pen-6', 'Segundo o Coren-SP, a rediluição é especialmente utilizada em:', 'Utiliza-se quando se necessita de doses bem pequenas, como em neonatologia, pediatria e algumas clínicas especializadas.', 'media', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'penicilina-cristalina-e-rediluicao') and position = 0), 'rediluicao', 5, 'published', '2026-10-03'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'calc-pen-6');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'calc-pen-6'), 'A', 'terapia intensiva adulta exclusivamente.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'calc-pen-6'), 'B', 'neonatologia, pediatria e algumas clínicas especializadas.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'calc-pen-6'), 'C', 'atendimento pré-hospitalar.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'calc-pen-6'), 'D', 'vacinação de rotina.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'calc-pen-6') and label not in ('A', 'B', 'C', 'D');
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'penicilina-cristalina-e-rediluicao'), 'calc-pen-7', 'Exercício de estudo: prescritos 15 mg de aminofilina; ampola de 240 mg em 10 mL. Aspira-se 1 mL (24 mg) e completa-se a 10 mL. Quanto aspirar da rediluição?', 'Rediluição: 24 mg em 10 mL. 24 mg — 10 mL · 15 mg — x mL · x = 15 × 10 ÷ 24 = 6,25 mL.', 'dificil', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'penicilina-cristalina-e-rediluicao') and position = 0), 'exercicios-rediluicao', 6, 'published', '2026-10-03'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'calc-pen-7');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'calc-pen-7'), 'A', '0,625 mL.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'calc-pen-7'), 'B', '1,5 mL.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'calc-pen-7'), 'C', '6,25 mL.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'calc-pen-7'), 'D', '15 mL.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'calc-pen-7') and label not in ('A', 'B', 'C', 'D');
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'penicilina-cristalina-e-rediluicao'), 'calc-pen-8', 'Exercício de estudo: prescritas 3.000.000 UI; disponível frasco de 5.000.000 UI diluído com 8 mL de água destilada. Quantos mL aspirar?', '8 mL + 2 mL de pó = 10 mL. 5.000.000 UI — 10 mL · 3.000.000 UI — x mL · x = 3.000.000 × 10 ÷ 5.000.000 = 6 mL.', 'media', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'penicilina-cristalina-e-rediluicao') and position = 0), 'calculo-penicilina', 7, 'published', '2026-10-03'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'calc-pen-8');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'calc-pen-8'), 'A', '3 mL.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'calc-pen-8'), 'B', '4,8 mL.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'calc-pen-8'), 'C', '6 mL.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'calc-pen-8'), 'D', '8 mL.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'calc-pen-8') and label not in ('A', 'B', 'C', 'D');

-- tema: Insulina: cálculo e preparo
insert into public.topics (category_id, slug, title, description, summary, key_points, sections, outline, reading_minutes, position, status, last_reviewed_at, review_notes)
values ((select id from public.categories where product_id = (select id from public.products where key = 'revisao-tecnico-enfermagem') and slug = 'calculos-de-enfermagem'), 'insulina-calculo-e-preparo', 'Insulina: cálculo e preparo', 'Tipos e aspecto, a regra U-100 da seringa e do frasco, como aspirar em seringa comum e por que não se dilui insulina.', 'O material do Coren-SP descreve a insulina regular (simples ou composta), de ação rápida ou média e aspecto límpido; a NPH, de ação lenta e aspecto leitoso; e a insulina glargina, de ação contínua, em dose única a cada 24 horas e aspecto incolor. A insulina é sempre medida em unidades internacionais (UI ou U). Hoje, frascos e seringas de insulina são graduados em 100 UI por mL: quando frasco e seringa têm a mesma relação, aspira-se direto até a marca prescrita — 20 UI de NPH são aspiradas até a demarcação de 20 UI. Quando a apresentação do frasco é diferente da graduação da seringa, ou não há seringa de insulina na unidade, usa-se regra de três com seringa hipodérmica de 3 ou 5 mL, tomando como base 1 mL (o equivalente à seringa de insulina): com frasco de 100 UI/mL, 20 UI correspondem a 0,2 mL. Se a prescrição for de valores mínimos que não possam ser aspirados, o médico deve ser comunicado, porque a diluição da insulina não está indicada devido à perda de estabilidade. Os exercícios são de estudo e não substituem a prescrição, o protocolo institucional nem a dupla checagem.', array['Regular: ação rápida ou média, aspecto LÍMPIDO.', 'NPH: ação lenta, aspecto LEITOSO.', 'Glargina: ação contínua, 1 dose a cada 24 h, aspecto incolor.', 'Insulina é sempre medida em UI (ou U).', 'Frasco 100 UI/mL + seringa 100 UI/mL: aspirar direto até a marca prescrita.', 'Sem seringa de insulina: regra de três com base em 1 mL → 20 UI = 0,2 mL.', 'Dose mínima impossível de aspirar: comunicar o médico — NÃO diluir insulina (perde estabilidade).', 'Exercício de estudo: não substitui prescrição nem dupla checagem.']::text[], '[{"id":"visao-geral","kind":"visao","title":"Uma medida própria: unidades internacionais","source":0,"blocks":[{"type":"text","text":"Insulina não se calcula em mg: ela é ==sempre medida em unidades internacionais (UI ou U)==. Como frasco e seringa costumam ter a mesma graduação (100 UI/mL), a maior parte do preparo é ler a marca certa — e o cálculo só aparece quando falta a seringa própria."}]},{"id":"tipos","kind":"classificacao","title":"Tipos e aspecto (como no material)","source":0,"blocks":[{"type":"compare","columns":["Ação","Aspecto"],"rows":[{"label":"Regular (simples ou composta)","cells":["Rápida ou média","==Límpida=="]},{"label":"NPH","cells":["Lenta","==Leitosa=="]},{"label":"Glargina","cells":["Contínua — ==uma dose a cada 24 h==","Incolor"]}]},{"type":"callout","variant":"atencao","title":"O aspecto é conferência de segurança","text":"Se o frasco rotulado como regular estiver leitoso, ou a NPH estiver límpida, ==não use== e comunique — o aspecto é uma checagem do medicamento certo."}]},{"id":"seringa-de-insulina","kind":"etapas","title":"Com seringa de insulina (100 UI/mL)","source":0,"blocks":[{"type":"steps","items":[{"title":"Conferir a concentração do frasco","text":"Frasco rotulado ==100 UI/mL==.","who":"tecnico"},{"title":"Conferir a graduação da seringa","text":"Seringa graduada em ==100 UI/mL==.","who":"tecnico"},{"title":"Aspirar até a marca da dose","text":"Ex.: 20 UI de NPH → aspirar até a demarcação de 20 UI.","why":"Frasco e seringa têm a mesma relação UI/mL: não há cálculo."}]}]},{"id":"seringa-comum","kind":"tecnico","title":"Sem seringa de insulina: regra de três","source":0,"blocks":[{"type":"steps","items":[{"title":"Usar seringa hipodérmica de 3 ou 5 mL","who":"tecnico"},{"title":"Tomar 1 mL como base","text":"Equivale à seringa de insulina: 1 mL do frasco U-100 = 100 UI.","why":"Não importa o tamanho da seringa: a referência é sempre 1 mL."},{"title":"Montar frasco — seringa / prescrição — x","text":"100 UI — 1 mL; dose prescrita — x mL."},{"title":"Conferir em dupla checagem","text":"Insulina é medicamento de alta vigilância.","who":"equipe"}]},{"type":"example","title":"20 UI de NPH (exemplo do Coren-SP)","given":["Frasco 100 UI/mL","Seringa de 3 mL"],"steps":["100 UI — 1 mL","20 UI — x mL","x = 20 × 1 ÷ 100 = 0,2 mL"],"answer":"Aspirar 0,2 mL"},{"type":"example","title":"35 UI (exercício de estudo)","given":["Frasco 100 UI/mL","Seringa de 3 mL"],"steps":["100 UI — 1 mL","35 UI — x mL","x = 35 × 1 ÷ 100 = 0,35 mL"],"answer":"Aspirar 0,35 mL"}]},{"id":"nao-diluir","kind":"cuidados","title":"Dose mínima: não diluir","source":0,"blocks":[{"type":"callout","variant":"lei","title":"Regra do material","text":"Se a prescrição for de ==valores mínimos que não possam ser aspirados==, o ==médico deve ser comunicado==: a ==diluição da insulina não está indicada== por perda da estabilidade."},{"type":"dodont","do":["Usar seringa de insulina sempre que houver","Conferir tipo, aspecto e concentração do frasco","Comunicar o médico se a dose não puder ser medida com segurança","Fazer dupla checagem"],"dont":["Rediluir insulina como se faz com outros medicamentos","Aspirar ''aproximadamente'' uma dose mínima","Usar insulina com aspecto diferente do esperado"]}]},{"id":"numeros","kind":"numeros","title":"Números que caem","source":0,"blocks":[{"type":"numbers","items":[{"value":"100 UI/mL","label":"graduação atual de frascos e seringas de insulina"},{"value":"1 mL","label":"base do cálculo em seringa comum","note":"= 100 UI no frasco U-100"},{"value":"0,2 mL","label":"20 UI em seringa comum"},{"value":"24 h","label":"intervalo da dose única da glargina"},{"value":"3 ou 5 mL","label":"seringas hipodérmicas citadas para o cálculo"}]}]},{"id":"caso","kind":"caso","title":"Situação-problema","source":0,"blocks":[{"type":"case","title":"Acabaram as seringas de insulina","scenario":"Exercício de estudo: prescrição de 8 UI de insulina regular; frasco de 100 UI/mL; na unidade só há seringas de 3 mL.","question":"Quanto aspirar e o que considerar?","answer":"Pela regra de três, 0,08 mL — um volume pequeno demais para medir com segurança numa seringa de 3 mL; o médico deve ser comunicado, e a insulina não deve ser diluída.","reasoning":["100 UI — 1 mL","8 UI — x mL","x = 8 × 1 ÷ 100 = 0,08 mL","O material orienta comunicar o médico quando o valor mínimo não puder ser aspirado.","A diluição da insulina não está indicada por perda de estabilidade."]}]},{"id":"como-a-banca-cobra","kind":"cobrado","title":"Como a banca cobra","source":0,"blocks":[{"type":"traps","items":[{"wrong":"A insulina NPH tem aspecto límpido.","right":"NPH é ==leitosa==; a regular é límpida.","why":"Classificação do material do Coren-SP."},{"wrong":"20 UI de insulina U-100 em seringa comum correspondem a 2 mL.","right":"Correspondem a ==0,2 mL==.","why":"100 UI — 1 mL; 20 UI — 0,2 mL."},{"wrong":"Quando a dose é muito pequena, dilui-se a insulina como na rediluição.","right":"A diluição da insulina ==não está indicada==; comunicar o médico.","why":"Perda de estabilidade."},{"wrong":"Insulina é dosada em miligramas.","right":"É medida em ==unidades internacionais (UI)==.","why":"Por isso frasco e seringa vêm em UI/mL."},{"wrong":"Com seringa de 5 mL, a base do cálculo é 5 mL.","right":"A base é sempre ==1 mL==, equivalente à seringa de insulina.","why":"O tamanho da seringa não muda a concentração do frasco."},{"wrong":"A glargina é aplicada de 6 em 6 horas.","right":"Glargina: ação contínua, ==uma única dose a cada 24 h==.","why":"Descrição do material."}]}]},{"id":"conexoes","kind":"conexoes","title":"Conexões","blocks":[{"type":"links","items":[{"slug":"regra-de-tres-dose-e-diluicao","title":"Regra de três: quanto aspirar","why":"O mesmo raciocínio, agora em UI."},{"slug":"penicilina-cristalina-e-rediluicao","title":"Penicilina cristalina e rediluição","why":"Por que a insulina é a exceção à rediluição."},{"slug":"nove-certos-administracao-de-medicamentos","title":"Os 9 certos da administração de medicamentos","why":"Dupla checagem em medicamentos de alta vigilância."}]}]}]'::jsonb, array['Uma medida própria: unidades internacionais', 'Tipos e aspecto (como no material)', 'Com seringa de insulina (100 UI/mL)', 'Sem seringa de insulina: regra de três', 'Dose mínima: não diluir', 'Números que caem', 'Situação-problema', 'Como a banca cobra', 'Conexões']::text[], 5, 4, 'published', '2026-10-03'::date, 'Padrão v2: cada seção foi escrita a partir do texto original da fonte, baixado e lido em 2026-10-03 (conferência automatizada durante o desenvolvimento). Revisão por enfermeiro(a) obrigatória antes da venda. A classificação de tipos segue o material do Coren-SP (2011); conferir terminologia de ação (rápida/intermediária/longa) com fonte farmacológica atual na revisão humana. A orientação sobre aspecto como checagem é aplicação didática.')
on conflict (slug) do update set category_id = excluded.category_id, title = excluded.title, description = excluded.description,
  summary = excluded.summary, key_points = excluded.key_points, sections = excluded.sections, outline = excluded.outline,
  reading_minutes = excluded.reading_minutes, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at, review_notes = excluded.review_notes;
insert into public.topic_sources (topic_id, position, source_title, source_organization, source_url, source_accessed_at, locator)
values ((select id from public.topics where slug = 'insulina-calculo-e-preparo'), 0, 'Boas práticas: Cálculo seguro — Volume II: Cálculo e diluição de medicamentos', 'Conselho Regional de Enfermagem de São Paulo (Coren-SP)', 'https://portal.coren-sp.gov.br/sites/default/files/boas-praticas-calculo-seguro-volume-2-calculo-e-diluicao-de-medicamentos.pdf', '2026-10-03'::date, '''Cálculos com insulina''')
on conflict (topic_id, position) do update set source_title = excluded.source_title, source_organization = excluded.source_organization,
  source_url = excluded.source_url, source_accessed_at = excluded.source_accessed_at, locator = excluded.locator;
delete from public.topic_sources s where s.topic_id = (select id from public.topics where slug = 'insulina-calculo-e-preparo') and s.position >= 1
  and not exists (select 1 from public.questions x where x.source_id = s.id);
insert into public.visual_maps (topic_id, title, spec, status, last_reviewed_at)
values ((select id from public.topics where slug = 'insulina-calculo-e-preparo'), 'Insulina', '{"layout":"hub","center":"Insulina em UI — U-100","blocks":[{"title":"Tipos","tone":"violet","icon":"💉","items":["Regular: límpida","NPH: leitosa","Glargina: incolor, 24 h"]},{"title":"Seringa de insulina","tone":"green","icon":"✅","items":["100 UI/mL = frasco 100 UI/mL","Aspirar até a marca"]},{"title":"Seringa comum","tone":"amber","icon":"🧮","items":["Base: 1 mL = 100 UI","20 UI = 0,2 mL"]},{"title":"Não fazer","tone":"rose","icon":"⛔","items":["Diluir insulina","Aspirar ''no olho'' dose mínima"]}]}'::jsonb, 'published', '2026-10-03'::date)
on conflict (topic_id) do update set title = excluded.title, spec = excluded.spec, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'insulina-calculo-e-preparo'), 'calc-ins-1', 'Segundo o material do Coren-SP, a insulina NPH tem ação:', 'Regular: rápida ou média, límpida. NPH: lenta, leitosa. Glargina: contínua, incolor.', 'facil', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'insulina-calculo-e-preparo') and position = 0), 'tipos', 0, 'published', '2026-10-03'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'calc-ins-1');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'calc-ins-1'), 'A', 'rápida e aspecto límpido.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'calc-ins-1'), 'B', 'lenta e aspecto leitoso.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'calc-ins-1'), 'C', 'contínua e aspecto incolor.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'calc-ins-1'), 'D', 'ultrarrápida e aspecto amarelado.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'calc-ins-1') and label not in ('A', 'B', 'C', 'D');
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'insulina-calculo-e-preparo'), 'calc-ins-2', 'Prescrição de 20 UI de insulina NPH; frasco de 100 UI/mL e seringa de insulina graduada em 100 UI/mL. Deve-se:', 'Frasco e seringa com a mesma relação UI/mL: aspira-se direto até a marca de 20 UI.', 'facil', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'insulina-calculo-e-preparo') and position = 0), 'seringa-de-insulina', 1, 'published', '2026-10-03'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'calc-ins-2');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'calc-ins-2'), 'A', 'aspirar 0,2 mL da seringa até a marca de 2 UI.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'calc-ins-2'), 'B', 'aspirar até a demarcação de 20 UI.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'calc-ins-2'), 'C', 'diluir em 10 mL de água destilada.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'calc-ins-2'), 'D', 'aspirar 2 mL.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'calc-ins-2') and label not in ('A', 'B', 'C', 'D');
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'insulina-calculo-e-preparo'), 'calc-ins-3', 'Exercício (Coren-SP): 20 UI de insulina, frasco de 100 UI/mL, só há seringa hipodérmica de 3 mL. Deve-se aspirar:', '100 UI — 1 mL · 20 UI — x mL · x = 20 × 1 ÷ 100 = 0,2 mL.', 'media', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'insulina-calculo-e-preparo') and position = 0), 'seringa-comum', 2, 'published', '2026-10-03'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'calc-ins-3');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'calc-ins-3'), 'A', '0,02 mL.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'calc-ins-3'), 'B', '0,2 mL.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'calc-ins-3'), 'C', '2 mL.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'calc-ins-3'), 'D', '20 mL.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'calc-ins-3') and label not in ('A', 'B', 'C', 'D');
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'insulina-calculo-e-preparo'), 'calc-ins-4', 'Quando a dose prescrita de insulina é tão pequena que não pode ser aspirada com segurança, o Coren-SP orienta:', 'A diluição da insulina não está indicada devido à perda de estabilidade; o médico deve ser comunicado.', 'media', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'insulina-calculo-e-preparo') and position = 0), 'nao-diluir', 3, 'published', '2026-10-03'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'calc-ins-4');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'calc-ins-4'), 'A', 'diluir a insulina em soro fisiológico.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'calc-ins-4'), 'B', 'comunicar o médico, pois a diluição da insulina não está indicada.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'calc-ins-4'), 'C', 'aspirar a menor quantidade possível.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'calc-ins-4'), 'D', 'dobrar a dose e aplicar metade.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'calc-ins-4') and label not in ('A', 'B', 'C', 'D');
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'insulina-calculo-e-preparo'), 'calc-ins-5', 'A insulina de aspecto límpido e ação rápida ou média, segundo o material, é a:', 'Regular (simples ou composta): ação rápida ou média, aspecto límpido.', 'media', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'insulina-calculo-e-preparo') and position = 0), 'tipos', 4, 'published', '2026-10-03'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'calc-ins-5');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'calc-ins-5'), 'A', 'NPH.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'calc-ins-5'), 'B', 'regular.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'calc-ins-5'), 'C', 'glargina.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'calc-ins-5'), 'D', 'pré-mistura 70/30.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'calc-ins-5') and label not in ('A', 'B', 'C', 'D');
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'insulina-calculo-e-preparo'), 'calc-ins-6', 'Exercício de estudo: 35 UI de insulina; frasco de 100 UI/mL; seringa de 3 mL. Quantos mL aspirar?', '100 UI — 1 mL · 35 UI — x mL · x = 35 × 1 ÷ 100 = 0,35 mL.', 'media', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'insulina-calculo-e-preparo') and position = 0), 'seringa-comum', 5, 'published', '2026-10-03'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'calc-ins-6');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'calc-ins-6'), 'A', '0,035 mL.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'calc-ins-6'), 'B', '0,35 mL.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'calc-ins-6'), 'C', '3,5 mL.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'calc-ins-6'), 'D', '35 mL.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'calc-ins-6') and label not in ('A', 'B', 'C', 'D');
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'insulina-calculo-e-preparo'), 'calc-ins-7', 'No cálculo de insulina com seringa hipodérmica de 5 mL, o volume aspirado tem por base:', 'O material diz que o volume aspirado terá sempre por base 1 mL da seringa, não importando o tamanho dela.', 'dificil', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'insulina-calculo-e-preparo') and position = 0), 'seringa-comum', 6, 'published', '2026-10-03'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'calc-ins-7');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'calc-ins-7'), 'A', '5 mL, o tamanho da seringa.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'calc-ins-7'), 'B', 'sempre 1 mL, equivalente à seringa de insulina.', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'calc-ins-7'), 'C', '10 mL, a capacidade do frasco.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'calc-ins-7'), 'D', 'a dose em mg.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'calc-ins-7') and label not in ('A', 'B', 'C', 'D');
insert into public.questions (topic_id, key, stem, explanation, difficulty, source_id, section_key, position, status, last_reviewed_at)
values ((select id from public.topics where slug = 'insulina-calculo-e-preparo'), 'calc-ins-8', 'A insulina é medida em:', 'A insulina é sempre medida em unidades internacionais.', 'facil', (select id from public.topic_sources where topic_id = (select id from public.topics where slug = 'insulina-calculo-e-preparo') and position = 0), 'visao-geral', 7, 'published', '2026-10-03'::date)
on conflict (key) do update set topic_id = excluded.topic_id, stem = excluded.stem, explanation = excluded.explanation,
  difficulty = excluded.difficulty, source_id = excluded.source_id, section_key = excluded.section_key, position = excluded.position, status = excluded.status,
  last_reviewed_at = excluded.last_reviewed_at;
update public.question_options set is_correct = false where question_id = (select id from public.questions where key = 'calc-ins-8');
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'calc-ins-8'), 'A', 'miligramas.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'calc-ins-8'), 'B', 'mililitros apenas.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'calc-ins-8'), 'C', 'unidades internacionais (UI ou U).', true)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
insert into public.question_options (question_id, label, text, is_correct)
values ((select id from public.questions where key = 'calc-ins-8'), 'D', 'gotas.', false)
on conflict (question_id, label) do update set text = excluded.text, is_correct = excluded.is_correct;
delete from public.question_options where question_id = (select id from public.questions where key = 'calc-ins-8') and label not in ('A', 'B', 'C', 'D');

-- o que saiu do conteúdo vira rascunho (nunca apaga histórico de aluno)
update public.topics set status = 'draft' where slug not in ('sus-na-constituicao-arts-196-a-200', 'principios-do-sus-lei-8080', 'lei-8080-organizacao-e-competencias', 'participacao-da-comunidade-lei-8142', 'decreto-7508-regioes-e-portas-de-entrada', 'atencao-basica-pnab', 'nove-certos-administracao-de-medicamentos', 'prevencao-de-ulcera-por-pressao', 'higiene-das-maos-cinco-momentos', 'precaucoes-padrao-e-especificas', 'epi-paramentacao-e-desparamentacao', 'nr-32-seguranca-do-trabalhador', 'acidente-com-material-biologico', 'residuos-de-servicos-de-saude-rdc-222', 'processamento-de-produtos-rdc-15', 'nucleo-de-seguranca-do-paciente', 'rede-de-atencao-as-urgencias-componentes', 'rede-de-atencao-as-urgencias-diretrizes', 'rcp-adulto-suporte-basico', 'calculo-da-idade-gestacional', 'regra-de-naegele-data-provavel-do-parto', 'aleitamento-materno', 'teste-do-pezinho-triagem-neonatal', 'lei-7498-atribuicoes-do-tecnico', 'lei-5905-sistema-cofen-coren', 'codigo-de-etica-cofen-564', 'codigo-de-etica-infracoes-e-penalidades', 'conversoes-de-unidades-e-medidas', 'regra-de-tres-dose-e-diluicao', 'gotejamento-gotas-e-microgotas', 'penicilina-cristalina-e-rediluicao', 'insulina-calculo-e-preparo')
  and category_id in (select id from public.categories where product_id = (select id from public.products where key = 'revisao-tecnico-enfermagem'));
update public.questions set status = 'draft' where key not in ('sus-cf-1', 'sus-cf-2', 'sus-cf-3', 'sus-cf-4', 'sus-cf-5', 'sus-cf-6', 'sus-cf-7', 'sus-cf-8', 'sus-principios-1', 'sus-principios-2', 'sus-principios-3', 'sus-principios-4', 'sus-principios-5', 'sus-principios-6', 'sus-principios-7', 'sus-principios-8', 'sus-8080-1', 'sus-8080-2', 'sus-8080-3', 'sus-8080-4', 'sus-8080-5', 'sus-8080-6', 'sus-8080-7', 'sus-8080-8', 'sus-8142-1', 'sus-8142-2', 'sus-8142-3', 'sus-8142-4', 'sus-8142-5', 'sus-8142-6', 'sus-8142-7', 'sus-8142-8', 'sus-7508-1', 'sus-7508-2', 'sus-7508-3', 'sus-7508-4', 'sus-7508-5', 'sus-7508-6', 'sus-7508-7', 'sus-7508-8', 'sus-pnab-1', 'sus-pnab-2', 'sus-pnab-3', 'sus-pnab-4', 'sus-pnab-5', 'sus-pnab-6', 'sus-pnab-7', 'sus-pnab-8', 'fund-9certos-1', 'fund-9certos-2', 'fund-9certos-3', 'fund-9certos-4', 'fund-9certos-5', 'fund-9certos-6', 'fund-9certos-7', 'fund-9certos-8', 'fund-upp-1', 'fund-upp-2', 'fund-upp-3', 'fund-upp-4', 'fund-upp-5', 'fund-upp-6', 'fund-upp-7', 'fund-upp-8', 'bio-maos-1', 'bio-maos-2', 'bio-maos-3', 'bio-maos-4', 'bio-maos-5', 'bio-maos-6', 'bio-maos-7', 'bio-maos-8', 'bio-maos-9', 'bio-prec-1', 'bio-prec-2', 'bio-prec-3', 'bio-prec-4', 'bio-prec-5', 'bio-prec-6', 'bio-prec-7', 'bio-prec-8', 'bio-prec-9', 'bio-epi-1', 'bio-epi-2', 'bio-epi-3', 'bio-epi-4', 'bio-epi-5', 'bio-epi-6', 'bio-epi-7', 'bio-epi-8', 'bio-nr32-1', 'bio-nr32-2', 'bio-nr32-3', 'bio-nr32-4', 'bio-nr32-5', 'bio-nr32-6', 'bio-nr32-7', 'bio-nr32-8', 'bio-acid-1', 'bio-acid-2', 'bio-acid-3', 'bio-acid-4', 'bio-acid-5', 'bio-acid-6', 'bio-acid-7', 'bio-acid-8', 'bio-acid-9', 'bio-rss-1', 'bio-rss-2', 'bio-rss-3', 'bio-rss-4', 'bio-rss-5', 'bio-rss-6', 'bio-rss-7', 'bio-rss-8', 'bio-rss-9', 'bio-proc-1', 'bio-proc-2', 'bio-proc-3', 'bio-proc-4', 'bio-proc-5', 'bio-proc-6', 'bio-proc-7', 'bio-proc-8', 'bio-nsp-1', 'bio-nsp-2', 'bio-nsp-3', 'bio-nsp-4', 'bio-nsp-5', 'bio-nsp-6', 'bio-nsp-7', 'bio-nsp-8', 'urg-rue-1', 'urg-rue-2', 'urg-rue-3', 'urg-dir-1', 'urg-dir-2', 'urg-dir-3', 'mulher-ig-1', 'mulher-ig-2', 'mulher-ig-3', 'mulher-dpp-1', 'mulher-dpp-2', 'mulher-dpp-3', 'crianca-am-1', 'crianca-am-2', 'crianca-am-3', 'crianca-pezinho-1', 'crianca-pezinho-2', 'crianca-pezinho-3', 'etica-7498-1', 'etica-7498-2', 'etica-7498-3', 'etica-7498-4', 'etica-7498-5', 'etica-7498-6', 'etica-7498-7', 'etica-7498-8', 'etica-5905-1', 'etica-5905-2', 'etica-5905-3', 'etica-5905-4', 'etica-5905-5', 'etica-5905-6', 'etica-5905-7', 'etica-5905-8', 'etica-cofen-1', 'etica-cofen-3', 'etica-cofen-4', 'etica-cofen-5', 'etica-cofen-6', 'etica-cofen-7', 'etica-cofen-8', 'etica-cofen-9', 'etica-cofen-2', 'etica-pen-1', 'etica-pen-2', 'etica-pen-3', 'etica-pen-4', 'etica-pen-5', 'etica-pen-6', 'etica-pen-7', 'etica-pen-8', 'calc-conv-1', 'calc-conv-2', 'calc-conv-3', 'calc-conv-4', 'calc-conv-5', 'calc-conv-6', 'calc-conv-7', 'calc-conv-8', 'calc-regra3-1', 'calc-regra3-2', 'calc-regra3-3', 'calc-regra3-4', 'calc-regra3-5', 'calc-regra3-6', 'calc-regra3-7', 'calc-regra3-8', 'calc-gotas-1', 'calc-gotas-2', 'calc-gotas-3', 'calc-gotas-4', 'calc-gotas-5', 'calc-gotas-6', 'calc-gotas-7', 'calc-gotas-8', 'calc-pen-1', 'calc-pen-2', 'calc-pen-3', 'calc-pen-4', 'calc-pen-5', 'calc-pen-6', 'calc-pen-7', 'calc-pen-8', 'calc-ins-1', 'calc-ins-2', 'calc-ins-3', 'calc-ins-4', 'calc-ins-5', 'calc-ins-6', 'calc-ins-7', 'calc-ins-8')
  and topic_id in (select t.id from public.topics t join public.categories c on c.id = t.category_id where c.product_id = (select id from public.products where key = 'revisao-tecnico-enfermagem'));
commit;
