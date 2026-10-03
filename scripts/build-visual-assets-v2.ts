import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

type Tone = "blue" | "teal" | "green" | "amber" | "rose" | "violet" | "orange" | "slate";
type Label = { text: string; x: number; y: number; targetX: number; targetY: number; tone: Tone };
type Plate = {
  id: string;
  category: string;
  topicSlug: string;
  base: string;
  file: string;
  title: string;
  description: string;
  labels: Label[];
};

const colors: Record<Tone, { main: string; dark: string }> = {
  blue: { main: "#2563EB", dark: "#1E3A8A" },
  teal: { main: "#0F9F95", dark: "#115E59" },
  green: { main: "#16A34A", dark: "#166534" },
  amber: { main: "#D97706", dark: "#92400E" },
  rose: { main: "#E11D48", dark: "#9F1239" },
  violet: { main: "#7C3AED", dark: "#5B21B6" },
  orange: { main: "#EA580C", dark: "#9A3412" },
  slate: { main: "#475569", dark: "#1E293B" },
};

const L = (text: string, x: number, y: number, targetX: number, targetY: number, tone: Tone): Label => ({ text, x, y, targetX, targetY, tone });

const plates: Plate[] = [
  { id: "V2-SUS-01", category: "sus", topicSlug: "sus-na-constituicao-arts-196-a-200", base: "sus-constituicao-base-v2.png", file: "sus-constituicao-ilustrado.svg", title: "SUS na Constituição", description: "Direito à saúde, organização do sistema e competências do SUS em cenas integradas.", labels: [L("Direito de todos", 190, 45, 270, 520, "blue"), L("Rede regionalizada", 490, 45, 520, 245, "teal"), L("Participação", 1010, 45, 1060, 205, "amber"), L("Vigilâncias e formação", 1280, 965, 1270, 640, "orange")] },
  { id: "V2-SUS-02", category: "sus", topicSlug: "principios-do-sus-lei-8080", base: "sus-principios-base.png", file: "sus-principios-ilustrado.svg", title: "Princípios do SUS", description: "Os princípios legais traduzidos em acesso, cuidado, informação, território e participação.", labels: [L("Acesso sem privilégios", 185, 45, 760, 700, "blue"), L("Prevenir e cuidar", 500, 45, 250, 210, "teal"), L("Informação e autonomia", 1035, 45, 1230, 230, "amber"), L("Rede e comunidade", 1250, 965, 1120, 650, "green")] },
  { id: "V2-SUS-03", category: "sus", topicSlug: "lei-8080-organizacao-e-competencias", base: "sus-lei-8080-organizacao-base.png", file: "sus-lei-8080-organizacao-ilustrado.svg", title: "Lei 8.080: organização e competências", description: "Determinantes sociais, campo de atuação e níveis de gestão do SUS.", labels: [L("Determinantes sociais", 210, 45, 420, 330, "green"), L("Pessoa e família", 640, 45, 770, 500, "teal"), L("Três esferas", 1110, 45, 790, 110, "blue"), L("Campo de atuação", 1260, 965, 1060, 800, "orange")] },
  { id: "V2-SUS-04", category: "sus", topicSlug: "participacao-da-comunidade-lei-8142", base: "sus-participacao-base.png", file: "sus-participacao-ilustrado.svg", title: "Conferências e Conselhos de Saúde", description: "Participação social e transferência de recursos segundo a Lei 8.142.", labels: [L("Conferência periódica", 230, 45, 400, 200, "orange"), L("Conselho permanente", 620, 45, 770, 430, "blue"), L("Usuários em paridade", 1080, 45, 1150, 220, "teal"), L("Recursos e requisitos", 1240, 965, 1180, 790, "green")] },
  { id: "V2-SUS-05", category: "sus", topicSlug: "decreto-7508-regioes-e-portas-de-entrada", base: "sus-decreto-7508-base.png", file: "sus-decreto-7508-ilustrado.svg", title: "Regiões e portas de entrada", description: "Municípios articulados, portas de entrada e referências na Região de Saúde.", labels: [L("Atenção primária", 195, 45, 190, 170, "green"), L("Urgência", 610, 45, 1280, 170, "rose"), L("Região de Saúde", 1040, 45, 760, 430, "blue"), L("Serviço especializado", 1230, 965, 1310, 630, "violet")] },
  { id: "V2-SUS-06", category: "sus", topicSlug: "atencao-basica-pnab", base: "sus-pnab-base.png", file: "sus-pnab-ilustrado.svg", title: "Atenção Básica e PNAB", description: "UBS, equipe de Saúde da Família, território e coordenação do cuidado.", labels: [L("Território adscrito", 190, 45, 280, 160, "green"), L("Equipe de Saúde da Família", 650, 45, 760, 500, "blue"), L("UBS coordena", 1110, 45, 750, 330, "teal"), L("Cuidado no domicílio", 1240, 965, 1210, 790, "orange")] },
  { id: "V2-FUN-01", category: "fundamentos", topicSlug: "nove-certos-administracao-de-medicamentos", base: "fundamentos-nove-certos-base.png", file: "fundamentos-nove-certos-ilustrado.svg", title: "Os 9 certos", description: "Verificações seguras antes, durante e depois da administração de medicamentos.", labels: [L("Paciente + prescrição", 220, 45, 300, 190, "blue"), L("Medicamento + dose", 650, 45, 820, 190, "teal"), L("Via + hora", 1110, 45, 1260, 190, "amber"), L("Registro + resposta", 1220, 965, 1180, 780, "green")] },
  { id: "V2-FUN-02", category: "fundamentos", topicSlug: "prevencao-de-ulcera-por-pressao", base: "fundamentos-lesao-pressao-base.png", file: "fundamentos-lesao-pressao-ilustrado.svg", title: "Prevenção de lesão por pressão", description: "Reposicionamento, alívio de pressão, proteção da pele e profundidade das lesões.", labels: [L("Profundidade da lesão", 250, 45, 760, 135, "rose"), L("Lateral a 30°", 610, 965, 530, 600, "blue"), L("Calcâneos flutuantes", 1040, 45, 1120, 360, "teal"), L("Barreira de umidade", 1260, 965, 1280, 520, "green")] },
  { id: "V2-BIO-01", category: "biosseguranca", topicSlug: "higiene-das-maos-cinco-momentos", base: "biosseguranca-cinco-momentos-base.png", file: "biosseguranca-cinco-momentos-ilustrado.svg", title: "Os 5 momentos", description: "Higiene das mãos distribuída ao redor do ponto de assistência.", labels: [L("Antes do contato", 190, 45, 190, 230, "blue"), L("Antes de procedimento", 570, 45, 690, 260, "teal"), L("Após risco de fluidos", 1110, 45, 1290, 270, "orange"), L("Após paciente e entorno", 1200, 965, 1190, 780, "green")] },
  { id: "V2-BIO-02", category: "biosseguranca", topicSlug: "precaucoes-padrao-e-especificas", base: "biosseguranca-precaucoes-base.png", file: "biosseguranca-precaucoes-ilustrado.svg", title: "Precauções padrão e específicas", description: "Barreiras adequadas às vias de transmissão no cuidado e transporte.", labels: [L("Padrão", 170, 45, 210, 300, "blue"), L("Contato", 540, 45, 520, 300, "amber"), L("Gotículas", 970, 45, 980, 280, "green"), L("Aerossóis", 1320, 45, 1310, 290, "violet")] },
  { id: "V2-BIO-03", category: "biosseguranca", topicSlug: "epi-paramentacao-e-desparamentacao", base: "biosseguranca-epi-base.png", file: "biosseguranca-epi-ilustrado.svg", title: "Paramentação e desparamentação", description: "Ordem visual de colocação e retirada dos equipamentos de proteção.", labels: [L("Higienizar mãos", 180, 45, 70, 735, "teal"), L("Colocar EPI", 520, 45, 500, 330, "blue"), L("Retirar sem tocar", 1010, 45, 1040, 330, "orange"), L("Higienizar novamente", 1280, 965, 1450, 735, "green")] },
  { id: "V2-BIO-04", category: "biosseguranca", topicSlug: "nr-32-seguranca-do-trabalhador", base: "biosseguranca-nr32-base.png", file: "biosseguranca-nr32-ilustrado.svg", title: "NR 32", description: "Proteção do trabalhador, vacinação, descarte e proibições no posto.", labels: [L("Vacinação", 170, 45, 220, 180, "green"), L("Descarte imediato", 610, 45, 740, 570, "amber"), L("EPI no serviço", 1110, 45, 1220, 190, "blue"), L("Proibições no posto", 1250, 965, 1290, 760, "rose")] },
  { id: "V2-BIO-05", category: "biosseguranca", topicSlug: "acidente-com-material-biologico", base: "biosseguranca-acidente-biologico-base.png", file: "biosseguranca-acidente-biologico-ilustrado.svg", title: "Acidente com material biológico", description: "Cuidados imediatos, comunicação, avaliação, profilaxia e seguimento.", labels: [L("Lavar sem espremer", 210, 45, 600, 180, "blue"), L("Comunicar e registrar", 660, 45, 1140, 170, "orange"), L("Avaliar o risco", 1110, 45, 1030, 560, "teal"), L("Acompanhar", 1260, 965, 1240, 780, "green")] },
  { id: "V2-BIO-06", category: "biosseguranca", topicSlug: "residuos-de-servicos-de-saude-rdc-222", base: "biosseguranca-residuos-base.png", file: "biosseguranca-residuos-ilustrado.svg", title: "Resíduos de serviços de saúde", description: "Cinco grupos de resíduos e descarte seguro de perfurocortantes.", labels: [L("Biológico", 170, 45, 150, 450, "rose"), L("Químico", 520, 45, 360, 450, "orange"), L("Comum", 920, 45, 720, 450, "slate"), L("Perfurocortante", 1270, 965, 1280, 460, "amber")] },
  { id: "V2-BIO-07", category: "biosseguranca", topicSlug: "processamento-de-produtos-rdc-15", base: "biosseguranca-processamento-base.png", file: "biosseguranca-processamento-ilustrado.svg", title: "Processamento de produtos", description: "Fluxo unidirecional do material sujo ao material esterilizado e armazenado.", labels: [L("Área suja", 180, 45, 210, 480, "rose"), L("Limpar e inspecionar", 590, 45, 610, 460, "orange"), L("Esterilizar", 1030, 45, 1110, 430, "blue"), L("Armazenar e distribuir", 1270, 965, 1350, 600, "green")] },
  { id: "V2-BIO-08", category: "biosseguranca", topicSlug: "nucleo-de-seguranca-do-paciente", base: "biosseguranca-pnsp-base.png", file: "biosseguranca-pnsp-ilustrado.svg", title: "PNSP e RDC 36", description: "Núcleo de Segurança, protocolos, análise e notificação de eventos.", labels: [L("Protocolos de segurança", 230, 45, 430, 230, "blue"), L("Núcleo de Segurança", 690, 45, 770, 450, "teal"), L("Prevenir incidentes", 1120, 45, 1200, 360, "green"), L("Analisar e notificar", 1260, 965, 1240, 820, "orange")] },
  { id: "V2-URG-01", category: "urgencia-e-emergencia", topicSlug: "rede-de-atencao-as-urgencias-componentes", base: "urgencia-rue-componentes-base.png", file: "urgencia-rue-componentes-ilustrado.svg", title: "Componentes da RUE", description: "Jornada do cuidado desde promoção e Atenção Básica até hospital e domicílio.", labels: [L("Promoção e Atenção Básica", 250, 45, 300, 190, "green"), L("SAMU e regulação", 700, 45, 1250, 180, "rose"), L("UPA e hospital", 1110, 45, 790, 560, "blue"), L("Atenção domiciliar", 1240, 965, 480, 810, "teal")] },
  { id: "V2-URG-02", category: "urgencia-e-emergencia", topicSlug: "rede-de-atencao-as-urgencias-diretrizes", base: "urgencia-rue-diretrizes-base.png", file: "urgencia-rue-diretrizes-ilustrado.svg", title: "Diretrizes da RUE", description: "Acolhimento, classificação de risco, regulação e cuidado multiprofissional.", labels: [L("Acolher", 190, 45, 730, 340, "teal"), L("Classificar o risco", 620, 45, 780, 380, "orange"), L("Atender todos os perfis", 1110, 45, 1180, 280, "violet"), L("Regular em rede", 1260, 965, 820, 780, "blue")] },
  { id: "V2-MUL-01", category: "saude-da-mulher", topicSlug: "calculo-da-idade-gestacional", base: "mulher-idade-gestacional-base.png", file: "mulher-idade-gestacional-ilustrado.svg", title: "Cálculo da idade gestacional", description: "DUM, altura uterina e ultrassonografia na estimativa da idade gestacional.", labels: [L("DUM conhecida", 190, 45, 290, 220, "rose"), L("12 · 16 · 20 semanas", 720, 45, 800, 260, "violet"), L("Medir altura uterina", 350, 965, 420, 720, "blue"), L("Confirmar por ultrassom", 1240, 965, 1190, 740, "teal")] },
  { id: "V2-MUL-02", category: "saude-da-mulher", topicSlug: "regra-de-naegele-data-provavel-do-parto", base: "mulher-naegele-base.png", file: "mulher-naegele-ilustrado.svg", title: "Regra de Näegele", description: "A data da última menstruação transformada em data provável do parto.", labels: [L("Partir da DUM", 180, 45, 640, 210, "rose"), L("Somar 7 dias", 590, 45, 800, 220, "orange"), L("Ajustar 3 meses", 1050, 45, 900, 480, "green"), L("Chegar à DPP", 1260, 965, 1240, 320, "blue")] },
  { id: "V2-CRI-01", category: "saude-da-crianca", topicSlug: "aleitamento-materno", base: "crianca-aleitamento-base.png", file: "crianca-aleitamento-ilustrado.svg", title: "Aleitamento materno", description: "Primeira hora, exclusividade até seis meses e continuidade com alimentação complementar.", labels: [L("Primeira hora", 220, 45, 260, 420, "amber"), L("Só leite materno", 770, 45, 770, 430, "green"), L("Livre demanda", 360, 965, 760, 500, "teal"), L("Complementar e continuar", 1260, 965, 1260, 480, "blue")] },
  { id: "V2-CRI-02", category: "saude-da-crianca", topicSlug: "teste-do-pezinho-triagem-neonatal", base: "crianca-teste-pezinho-base.png", file: "crianca-teste-pezinho-ilustrado.svg", title: "Teste do pezinho", description: "Posição do bebê, regiões laterais, punção e preenchimento do papel-filtro.", labels: [L("Calcanhar abaixo do coração", 260, 45, 350, 540, "blue"), L("Laterais seguras", 730, 45, 690, 210, "rose"), L("Punção lateral", 1110, 45, 1230, 500, "orange"), L("Preencher o papel-filtro", 1230, 965, 1190, 800, "teal")] },
  { id: "V2-ETI-01", category: "etica-e-legislacao", topicSlug: "lei-7498-atribuicoes-do-tecnico", base: "etica-atribuicoes-base.png", file: "etica-atribuicoes-ilustrado.svg", title: "Atribuições profissionais", description: "Planejamento do enfermeiro, execução do técnico e apoio do auxiliar sob supervisão.", labels: [L("Enfermeiro planeja", 230, 45, 390, 350, "blue"), L("Técnico executa", 760, 45, 880, 420, "teal"), L("Auxiliar apoia", 1250, 45, 1320, 430, "amber"), L("Sempre sob supervisão", 780, 965, 780, 150, "violet")] },
  { id: "V2-ETI-02", category: "etica-e-legislacao", topicSlug: "lei-5905-sistema-cofen-coren", base: "etica-cofen-coren-base.png", file: "etica-cofen-coren-ilustrado.svg", title: "Sistema Cofen/Coren", description: "Relação entre instância federal, conselhos regionais, inscrição, fiscalização e recurso.", labels: [L("Inscrição profissional", 190, 45, 170, 240, "green"), L("Conselhos regionais", 650, 45, 720, 500, "blue"), L("Fiscalização e ética", 1140, 45, 1260, 500, "orange"), L("Recurso ao federal", 1250, 965, 1200, 220, "rose")] },
  { id: "V2-ETI-03", category: "etica-e-legislacao", topicSlug: "codigo-de-etica-cofen-564", base: "etica-codigo-base.png", file: "etica-codigo-ilustrado.svg", title: "Código de Ética", description: "Direitos, deveres, registro, sigilo, recusa segura e assistência em urgência.", labels: [L("Escutar e preservar sigilo", 250, 45, 230, 220, "teal"), L("Esclarecer prescrição", 750, 45, 770, 190, "orange"), L("Recusar sem segurança", 1240, 45, 1210, 220, "rose"), L("Registrar e assistir", 760, 965, 760, 720, "blue")] },
  { id: "V2-ETI-04", category: "etica-e-legislacao", topicSlug: "codigo-de-etica-infracoes-e-penalidades", base: "etica-penalidades-base.png", file: "etica-penalidades-ilustrado.svg", title: "Infrações e penalidades", description: "Da apuração ética às cinco consequências disciplinares.", labels: [L("Apurar a infração", 260, 45, 760, 210, "blue"), L("Considerar gravidade", 760, 45, 1100, 240, "violet"), L("Aplicar a penalidade", 280, 965, 630, 720, "orange"), L("Suspensão ou cassação", 1240, 965, 1320, 760, "rose")] },
  { id: "V2-CAL-01", category: "calculos-de-enfermagem", topicSlug: "conversoes-de-unidades-e-medidas", base: "calculos-conversoes-base.png", file: "calculos-conversoes-ilustrado.svg", title: "Conversões de unidades", description: "Massa, volume, medidas caseiras e tonicidade traduzidos em objetos.", labels: [L("Massa", 170, 45, 230, 190, "amber"), L("Volume", 660, 45, 1070, 200, "blue"), L("Gotas e colheres", 400, 965, 400, 650, "teal"), L("Tonicidade", 1230, 965, 1190, 760, "violet")] },
  { id: "V2-CAL-02", category: "calculos-de-enfermagem", topicSlug: "regra-de-tres-dose-e-diluicao", base: "calculos-regra-tres-base.png", file: "calculos-regra-tres-ilustrado.svg", title: "Regra de três", description: "Prescrição, apresentação disponível e volume a aspirar na mesma bancada.", labels: [L("O que foi prescrito", 210, 45, 220, 240, "blue"), L("O que está disponível", 730, 45, 670, 210, "amber"), L("Diluir antes", 380, 965, 390, 680, "violet"), L("Volume a aspirar", 1250, 965, 1110, 600, "teal")] },
  { id: "V2-CAL-03", category: "calculos-de-enfermagem", topicSlug: "gotejamento-gotas-e-microgotas", base: "calculos-gotejamento-base.png", file: "calculos-gotejamento-ilustrado.svg", title: "Gotas e microgotas", description: "Bolsa, câmaras de gotejo, tempo e volume compondo a velocidade de infusão.", labels: [L("Volume da solução", 200, 45, 480, 170, "blue"), L("Macrogotas", 690, 45, 790, 230, "teal"), L("Microgotas", 1140, 45, 1260, 230, "green"), L("Tempo de infusão", 1130, 965, 1080, 680, "amber")] },
  { id: "V2-CAL-04", category: "calculos-de-enfermagem", topicSlug: "penicilina-cristalina-e-rediluicao", base: "calculos-penicilina-base.png", file: "calculos-penicilina-ilustrado.svg", title: "Penicilina e rediluição", description: "Volume do pó, reconstituição, aspiração e nova diluição em sequência.", labels: [L("Volume do pó", 190, 45, 180, 410, "amber"), L("Adicionar diluente", 590, 45, 520, 340, "blue"), L("Solução final", 980, 45, 880, 380, "teal"), L("Rediluir", 1270, 965, 1300, 470, "violet")] },
  { id: "V2-CAL-05", category: "calculos-de-enfermagem", topicSlug: "insulina-calculo-e-preparo", base: "calculos-insulina-base.png", file: "calculos-insulina-ilustrado.svg", title: "Insulina: cálculo e preparo", description: "Aspecto das insulinas, seringa U-100, volume proporcional e dupla checagem.", labels: [L("Regular: límpida", 170, 45, 150, 570, "blue"), L("NPH: leitosa", 540, 45, 330, 570, "slate"), L("Seringa U-100", 1040, 45, 960, 420, "orange"), L("Dupla checagem", 1260, 965, 1160, 260, "green")] },
];

function esc(value: string) {
  return value.replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&apos;" })[char] ?? char);
}

function render(plate: Plate, imageData: string) {
  const markers = Object.entries(colors).map(([tone, color]) => `<marker id="arrow-${tone}" viewBox="0 0 12 12" refX="10" refY="6" markerWidth="9" markerHeight="9" orient="auto"><path d="M 0 0 L 12 6 L 0 12 z" fill="${color.main}"/></marker>`).join("");
  const labels = plate.labels.map((label) => {
    const color = colors[label.tone];
    const width = Math.max(150, Math.min(330, label.text.length * 12 + 54));
    const left = Math.max(16, Math.min(1536 - width - 16, label.x - width / 2));
    const centerX = left + width / 2;
    const fromY = label.y < label.targetY ? label.y + 25 : label.y - 25;
    const bendY = Math.round((fromY + label.targetY) / 2);
    return `<g>
      <path d="M ${centerX} ${fromY} C ${centerX} ${bendY}, ${label.targetX} ${bendY}, ${label.targetX} ${label.targetY}" fill="none" stroke="#FFFFFF" stroke-width="9" stroke-linecap="round" opacity="0.92"/>
      <path d="M ${centerX} ${fromY} C ${centerX} ${bendY}, ${label.targetX} ${bendY}, ${label.targetX} ${label.targetY}" fill="none" stroke="${color.main}" stroke-width="4" stroke-linecap="round" marker-end="url(#arrow-${label.tone})"/>
      <circle cx="${label.targetX}" cy="${label.targetY}" r="8" fill="#FFFFFF" stroke="${color.main}" stroke-width="4"/>
      <rect x="${left}" y="${label.y - 25}" width="${width}" height="50" rx="25" fill="#FFFFFF" fill-opacity="0.96" stroke="${color.main}" stroke-width="3"/>
      <text x="${centerX}" y="${label.y + 8}" text-anchor="middle" font-family="Inter, Arial, sans-serif" font-size="21" font-weight="800" fill="${color.dark}">${esc(label.text)}</text>
    </g>`;
  }).join("");
  return `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1536" height="1024" viewBox="0 0 1536 1024" role="img" aria-labelledby="title desc">
  <title id="title">${esc(plate.title)}</title>
  <desc id="desc">${esc(plate.description)}</desc>
  <defs>${markers}</defs>
  <rect width="1536" height="1024" fill="#FFFFFF"/>
  <image href="${imageData}" xlink:href="${imageData}" x="0" y="0" width="1536" height="1024" preserveAspectRatio="xMidYMid meet"/>
  ${labels}
  <text x="1518" y="1006" text-anchor="end" font-family="Inter, Arial, sans-serif" font-size="14" font-weight="700" fill="#64748B">${plate.id}</text>
</svg>`;
}

async function main() {
  const root = path.join(process.cwd(), "public", "content", "visual-v2");
  for (const plate of plates) {
    const dir = path.join(root, plate.category);
    await mkdir(dir, { recursive: true });
    const pngPath = path.join(dir, plate.base);
    const webpPath = pngPath.replace(/\.png$/i, ".webp");
    await sharp(pngPath).webp({ quality: 92, smartSubsample: true }).toFile(webpPath);
    const bytes = await readFile(webpPath);
    const imageData = `data:image/webp;base64,${bytes.toString("base64")}`;
    await writeFile(path.join(dir, plate.file), render(plate, imageData), "utf8");
  }
  console.log(`Generated ${plates.length} self-contained illustrated SVG plates in ${root}`);
}

void main().catch((error: unknown) => {
  console.error(error);
  process.exitCode = 1;
});
