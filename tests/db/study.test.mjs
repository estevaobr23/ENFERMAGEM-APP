// Teste de banco: aplica TODAS as migrations + seeds num Postgres embutido
// (PGlite), simula os papéis do Supabase e tenta os fluxos e ataques que
// importam para este produto. Uso: npm run test:db
//
// Sai com código 1 se qualquer verificação falhar.
import { readFileSync, readdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { PGlite } from "@electric-sql/pglite";

const here = dirname(fileURLToPath(import.meta.url));
const root = join(here, "..", "..");
const db = new PGlite();

await db.exec(readFileSync(join(here, "supabase-stub.sql"), "utf8"));
const migrations = readdirSync(join(root, "supabase", "migrations")).filter((f) => f.endsWith(".sql")).sort();
const seeds = readdirSync(join(root, "supabase", "seeds")).filter((f) => f.endsWith(".sql")).sort();
for (const [dir, file] of [...migrations.map((f) => ["migrations", f]), ...seeds.map((f) => ["seeds", f])]) {
  try {
    await db.exec(readFileSync(join(root, "supabase", dir, file), "utf8"));
  } catch (err) {
    console.error(`FALHA ao aplicar ${dir}/${file}: ${err.message}`);
    process.exit(1);
  }
}
// seed é idempotente: aplicar de novo não pode quebrar nem duplicar
const countsBefore = (await db.query(`select (select count(*) from topics)::int t, (select count(*) from questions)::int q, (select count(*) from question_options)::int o`)).rows[0];
await db.exec(readFileSync(join(root, "supabase", "seeds", "20_content.sql"), "utf8"));
const countsAfter = (await db.query(`select (select count(*) from topics)::int t, (select count(*) from questions)::int q, (select count(*) from question_options)::int o`)).rows[0];

let failures = 0;
let passes = 0;
function check(name, ok, detail = "") {
  if (ok) passes++;
  else failures++;
  console.log(`${ok ? "PASS" : "FAIL"}  ${name}${!ok && detail ? `  -> ${detail}` : ""}`);
}

async function as(role, uid, sql, params = []) {
  try {
    const rows = await db.transaction(async (tx) => {
      await tx.query("select set_config('request.jwt.claims', $1, true)", [JSON.stringify(uid ? { sub: uid, role } : { role })]);
      await tx.exec(`set local role ${role}`);
      return (await tx.query(sql, params)).rows;
    });
    return { rows };
  } catch (error) {
    return { error: error.message };
  }
}
const su = async (sql, params = []) => (await db.query(sql, params)).rows;
const apply = (id, email, status, at = "now()") =>
  su(`select apply_purchase_event('cakto', $1, 'OFERTA-TESTE-LOCAL', $2, $3, 1000, 'BRL', ${at}) as r`, [id, email, status]);

check("seed idempotente (reaplicar não duplica)", JSON.stringify(countsBefore) === JSON.stringify(countsAfter), JSON.stringify([countsBefore, countsAfter]));
check("core 001/002 aplicados sem edição + seed do produto",
  (await su(`select count(*)::int c from products where key = 'revisao-tecnico-enfermagem'`))[0].c === 1);
check("toda questão tem exatamente 1 alternativa correta",
  (await su(`select count(*)::int c from questions q where (select count(*) from question_options o where o.question_id = q.id and o.is_correct) <> 1`))[0].c === 0);

// --- usuários ----------------------------------------------------------------
const [ana] = await su(`insert into auth.users (email, email_confirmed_at, raw_user_meta_data) values ('ana@ex.com', now(), '{"name":"Ana"}') returning id`);
const [bia] = await su(`insert into auth.users (email, email_confirmed_at) values ('bia@ex.com', now()) returning id`);
const [eva] = await su(`insert into auth.users (email, email_confirmed_at) values ('eva@ex.com', null) returning id`);

const topicCount = async (uid) => (await as("authenticated", uid, `select count(*)::int c from topics`)).rows?.[0]?.c;

// --- sem direito não acessa ---------------------------------------------------
check("sem entitlement: não lê temas", (await topicCount(bia.id)) === 0);
check("sem entitlement: não lê questões", (await as("authenticated", bia.id, `select count(*)::int c from questions`)).rows[0].c === 0);
check("anônimo: não lê conteúdo", /permission denied/.test((await as("anon", null, `select count(*) from topics`)).error ?? ""));
const [anyQ] = await su(`select q.id, (select id from question_options o where o.question_id = q.id and o.is_correct) ok from questions q where q.key = 'bio-maos-1'`);
let r = await as("authenticated", bia.id, `select answer_question($1, $2)`, [anyQ.id, anyQ.ok]);
check("sem entitlement: answer_question bloqueado", /no_access/.test(r.error ?? ""), r.error);

// --- compra → direito → acesso (e idempotência do webhook) --------------------
await apply("TX-ANA", "  ANA@ex.com ", "approved");
await apply("TX-ANA", "ana@ex.com", "approved");
check("webhook duplicado: 1 compra e 1 direito",
  (await su(`select (select count(*) from purchases)::int p, (select count(*) from entitlements)::int e`))[0].p === 1 &&
  (await su(`select count(*)::int e from entitlements`))[0].e === 1);
const published = (await su(`select count(*)::int c from topics where status = 'published'`))[0].c;
check("com entitlement ativo: lê os temas publicados", (await topicCount(ana.id)) === published, `${await topicCount(ana.id)} vs ${published}`);
check("conteúdo não publicado não aparece (RCP review_required)",
  (await as("authenticated", ana.id, `select count(*)::int c from topics where slug = 'rcp-adulto-suporte-basico'`)).rows[0].c === 0);
check("gabarito fora do alcance (is_correct)",
  /permission denied/.test((await as("authenticated", ana.id, `select is_correct from question_options limit 1`)).error ?? ""));
check("explicação fora do alcance antes de responder",
  /permission denied/.test((await as("authenticated", ana.id, `select explanation from questions limit 1`)).error ?? ""));
check("notas internas da curadoria fora do alcance",
  /permission denied/.test((await as("authenticated", ana.id, `select review_notes from topics limit 1`)).error ?? ""));

// e-mail não confirmado não herda compra
await apply("TX-EVA", "eva@ex.com", "approved");
check("compra com e-mail NÃO confirmado não vincula", (await topicCount(eva.id)) === 0);
await su(`update auth.users set email_confirmed_at = now() where id = $1`, [eva.id]);
check("confirmou o e-mail: direito vinculado pela trigger", (await topicCount(eva.id)) === published);

// --- responder: tentativa, progresso, fila ------------------------------------
const [wrongOpt] = await su(`select id from question_options where question_id = $1 and not is_correct limit 1`, [anyQ.id]);
r = await as("authenticated", ana.id, `select answer_question($1, $2, 'review') as r`, [anyQ.id, wrongOpt.id]);
const res1 = r.rows?.[0]?.r;
check("errou: resposta corrigida no banco", res1?.is_correct === false && res1?.correct_option_id === anyQ.ok && !!res1?.explanation, JSON.stringify(r));
check("errou: entrou em 'Revisar novamente'",
  (await as("authenticated", ana.id, `select count(*)::int c from review_queue where status = 'pending'`)).rows[0].c === 1);
await as("authenticated", ana.id, `select answer_question($1, $2)`, [anyQ.id, wrongOpt.id]);
check("errar de novo não duplica o item pendente",
  (await as("authenticated", ana.id, `select count(*)::int c from review_queue where status = 'pending'`)).rows[0].c === 1);
r = await as("authenticated", ana.id, `select answer_question($1, $2, 'retry') as r`, [anyQ.id, anyQ.ok]);
check("acertou depois: item resolvido", r.rows?.[0]?.r?.resolved === true &&
  (await as("authenticated", ana.id, `select count(*)::int c from review_queue where status = 'pending'`)).rows[0].c === 0, JSON.stringify(r));
const prog = (await as("authenticated", ana.id, `select questions_answered a, questions_correct c from user_topic_progress`)).rows[0];
check("progresso atualizado (3 respondidas, 1 certa)", prog?.a === 3 && prog?.c === 1, JSON.stringify(prog));
check("tentativas pertencem ao usuário certo",
  (await su(`select count(*)::int c from question_attempts where user_id <> $1`, [ana.id]))[0].c === 0 &&
  (await su(`select count(*)::int c from question_attempts where user_id = $1`, [ana.id]))[0].c === 3);
r = await as("authenticated", ana.id, `insert into question_attempts (user_id, question_id, topic_id, selected_option_id, is_correct) select $1, q.id, q.topic_id, $2, true from questions q where q.id = $3`, [bia.id, anyQ.ok, anyQ.id]);
check("não grava tentativa direto (nem em nome de outro)", /permission denied/.test(r.error ?? ""), r.error);
r = await as("authenticated", ana.id, `update user_topic_progress set questions_correct = 99`);
check("não edita o próprio progresso direto", /permission denied/.test(r.error ?? ""), r.error);
r = await as("authenticated", ana.id, `select answer_question($1, (select id from question_options where question_id <> $1 limit 1))`, [anyQ.id]);
check("alternativa de outra questão é recusada", /permission denied|invalid_option/.test(r.error ?? ""), r.error);

const [topic] = await su(`select id from topics where slug = 'higiene-das-maos-cinco-momentos'`);
r = await as("authenticated", ana.id, `select mark_topic_reviewed($1) as r`, [topic.id]);
check("mark_topic_reviewed registra a revisão", r.rows?.[0]?.r?.review_count === 1, JSON.stringify(r));

// --- isolamento A × B ---------------------------------------------------------
await apply("TX-BIA", "bia@ex.com", "approved");
check("B ganhou acesso", (await topicCount(bia.id)) === published);
check("B não vê progresso de A", (await as("authenticated", bia.id, `select count(*)::int c from user_topic_progress`)).rows[0].c === 0);
check("B não vê tentativas de A", (await as("authenticated", bia.id, `select count(*)::int c from question_attempts`)).rows[0].c === 0);
check("B não vê fila de A", (await as("authenticated", bia.id, `select count(*)::int c from review_queue`)).rows[0].c === 0);
r = await as("authenticated", ana.id, `insert into favorites (user_id, topic_id) values ($1, $2)`, [ana.id, topic.id]);
check("A favorita um tema", !r.error, r.error);
check("B não vê favoritos de A", (await as("authenticated", bia.id, `select count(*)::int c from favorites`)).rows[0].c === 0);
r = await as("authenticated", bia.id, `insert into favorites (user_id, topic_id) values ($1, $2)`, [ana.id, topic.id]);
check("B não cria favorito em nome de A", /row-level security|permission denied/.test(r.error ?? ""), r.error);
r = await as("authenticated", bia.id, `delete from favorites where user_id = $1 returning 1`, [ana.id]);
check("B não apaga favorito de A", (r.rows ?? []).length === 0 && (await su(`select count(*)::int c from favorites`))[0].c === 1);
r = await as("authenticated", bia.id, `select * from my_answered_feedback(array[$1::uuid])`, [anyQ.id]);
check("B não recebe gabarito de questão que não respondeu", (r.rows ?? []).length === 0, JSON.stringify(r));
r = await as("authenticated", ana.id, `select * from my_answered_feedback(array[$1::uuid])`, [anyQ.id]);
check("A recebe gabarito da questão que respondeu", r.rows?.[0]?.correct_option_id === anyQ.ok, JSON.stringify(r));
check("B não lê compras, ofertas nem eventos",
  /permission denied/.test((await as("authenticated", bia.id, `select * from purchases`)).error ?? "") &&
  /permission denied/.test((await as("authenticated", bia.id, `select * from offers`)).error ?? "") &&
  /permission denied/.test((await as("authenticated", bia.id, `select * from webhook_events`)).error ?? ""));
check("aluno não chama apply_purchase_event",
  /permission denied/.test((await as("authenticated", bia.id, `select apply_purchase_event('cakto','X','OFERTA-TESTE-LOCAL','bia@ex.com','approved')`)).error ?? ""));
check("aluno não se dá direito (insert em entitlements)",
  /permission denied/.test((await as("authenticated", bia.id, `insert into entitlements (product_id, plan_id, buyer_email, user_id, source) select product_id, id, 'bia@ex.com', $1, 'manual' from plans limit 1`, [bia.id])).error ?? ""));

// --- busca --------------------------------------------------------------------
r = await as("authenticated", ana.id, `select slug from search_topics('higiene maos')`);
check("busca acha tema sem acento", (r.rows ?? []).some((x) => x.slug === "higiene-das-maos-cinco-momentos"), JSON.stringify(r));
r = await as("authenticated", eva.id, `select count(*)::int c from search_topics('sus')`);
r = await as("authenticated", "00000000-0000-0000-0000-000000000000", `select count(*)::int c from search_topics('sus')`);
check("busca sem direito volta vazia", r.rows?.[0]?.c === 0, JSON.stringify(r));

r = await as("authenticated", ana.id, `select slug from search_topics('apojadura')`);
check("busca encontra texto que só existe nas seções", (r.rows ?? []).some((x) => x.slug === "aleitamento-materno"), JSON.stringify(r));

// --- seções, quiz final e pontos salvos (120) ------------------------------------
r = await as("authenticated", ana.id, `select jsonb_array_length(sections)::int n, cardinality(outline)::int o, reading_minutes m from topics where id = $1`, [topic.id]);
check("aluno lê seções, sumário e tempo de leitura", r.rows?.[0]?.n >= 3 && r.rows[0].o === r.rows[0].n && r.rows[0].m > 0, JSON.stringify(r));
check("toda questão publicada aponta para uma seção existente do tema",
  (await su(`select count(*)::int c from questions q join topics t on t.id = q.topic_id
             where q.status = 'published' and (q.section_key is null or not exists (
               select 1 from jsonb_array_elements(t.sections) s where s ->> 'id' = q.section_key))`))[0].c === 0);
const quizQs = await su(`select q.id, (select id from question_options o where o.question_id = q.id and o.is_correct) ok,
                                (select id from question_options o where o.question_id = q.id and not o.is_correct limit 1) bad
                           from questions q where q.topic_id = $1 and q.status = 'published' order by q.position`, [topic.id]);
// anyQ (bio-maos-1) já foi respondida certa no retry; responde as demais menos a última
for (const q of quizQs.slice(1, -1)) await as("authenticated", bia.id, `select answer_question($1, $2)`, [q.id, q.ok]);
r = await as("authenticated", bia.id, `select finish_topic_quiz($1) as r`, [topic.id]);
check("quiz incompleto não fecha", /quiz_incomplete/.test(r.error ?? ""), r.error);
await as("authenticated", bia.id, `select answer_question($1, $2)`, [quizQs[0].id, quizQs[0].bad]);
await as("authenticated", bia.id, `select answer_question($1, $2)`, [quizQs.at(-1).id, quizQs.at(-1).ok]);
r = await as("authenticated", bia.id, `select finish_topic_quiz($1) as r`, [topic.id]);
const quiz = r.rows?.[0]?.r;
check("placar do quiz calculado no banco pela última tentativa", quiz?.total === quizQs.length && quiz?.correct === quizQs.length - 1, JSON.stringify(r));
await as("authenticated", bia.id, `select answer_question($1, $2)`, [quizQs[0].id, quizQs[0].ok]);
r = await as("authenticated", bia.id, `select finish_topic_quiz($1) as r`, [topic.id]);
check("refazer o quiz atualiza último e melhor placar", r.rows?.[0]?.r?.best === quizQs.length && r.rows[0].r.count === 2, JSON.stringify(r));
check("concluir o quiz conta como revisão do tema",
  (await as("authenticated", bia.id, `select last_reviewed_at is not null ok, quiz_last_correct c from user_topic_progress where topic_id = $1`, [topic.id])).rows[0]?.ok === true);
r = await as("authenticated", bia.id, `update user_topic_progress set quiz_best_correct = 99`);
check("não edita o placar do quiz direto", /permission denied/.test(r.error ?? ""), r.error);

r = await as("authenticated", ana.id, `insert into saved_sections (user_id, topic_id, section_key) values ($1, $2, 'os-cinco-momentos')`, [ana.id, topic.id]);
check("A salva um ponto (seção)", !r.error, r.error);
check("B não vê pontos salvos de A", (await as("authenticated", bia.id, `select count(*)::int c from saved_sections`)).rows[0].c === 0);
r = await as("authenticated", bia.id, `insert into saved_sections (user_id, topic_id, section_key) values ($1, $2, 'x')`, [ana.id, topic.id]);
check("B não salva ponto em nome de A", /row-level security|permission denied/.test(r.error ?? ""), r.error);
const [draftTopic] = await su(`select id from topics where status <> 'published' limit 1`);
r = await as("authenticated", ana.id, `insert into saved_sections (user_id, topic_id, section_key) values ($1, $2, 'pendente')`, [ana.id, draftTopic.id]);
check("não salva ponto de tema não publicado", /row-level security|permission denied/.test(r.error ?? ""), r.error);

// --- reembolso / chargeback revogam; nova compra devolve ----------------------
await apply("TX-ANA", "ana@ex.com", "refunded", "now() + interval '1 minute'");
check("reembolso revoga: A não lê mais conteúdo", (await topicCount(ana.id)) === 0);
check("reembolso não apaga dados de estudo de A",
  (await as("authenticated", ana.id, `select count(*)::int c from question_attempts`)).rows[0].c === 3);
r = await as("authenticated", ana.id, `select answer_question($1, $2)`, [anyQ.id, anyQ.ok]);
check("reembolso: não responde mais questões", /no_access/.test(r.error ?? ""), r.error);
await apply("TX-ANA", "ana@ex.com", "approved", "now() - interval '1 day'");
check("evento antigo fora de ordem não reativa", (await topicCount(ana.id)) === 0);
await apply("TX-ANA-2", "ana@ex.com", "approved");
check("nova compra válida devolve o acesso", (await topicCount(ana.id)) === published);
await apply("TX-BIA", "bia@ex.com", "chargeback", "now() + interval '1 minute'");
check("chargeback revoga B", (await topicCount(bia.id)) === 0);

console.log(`\n${passes} passaram, ${failures} falharam`);
process.exit(failures ? 1 : 0);
