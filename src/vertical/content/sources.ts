import type { SourceRef } from "@/core/content/types";

/**
 * Fontes conferidas. Cada uma foi baixada e lida no texto original na data
 * indicada (accessedAt). Ao reconferir, atualize accessedAt e o
 * lastReviewedAt dos temas que a usam.
 */
const ACCESSED = "2026-10-02";

export const SRC = {
  lei8080: {
    title: "Lei nº 8.080, de 19 de setembro de 1990 (Lei Orgânica da Saúde)",
    organization: "Presidência da República — Planalto",
    url: "https://www.planalto.gov.br/ccivil_03/leis/l8080.htm",
    accessedAt: ACCESSED,
  },
  lei8142: {
    title: "Lei nº 8.142, de 28 de dezembro de 1990",
    organization: "Presidência da República — Planalto",
    url: "https://www.planalto.gov.br/ccivil_03/leis/l8142.htm",
    accessedAt: ACCESSED,
  },
  lei7498: {
    title: "Lei nº 7.498, de 25 de junho de 1986 (exercício da Enfermagem)",
    organization: "Presidência da República — Planalto",
    url: "https://www.planalto.gov.br/ccivil_03/leis/l7498.htm",
    accessedAt: ACCESSED,
  },
  decreto94406: {
    title: "Decreto nº 94.406, de 8 de junho de 1987 (regulamenta a Lei nº 7.498/1986)",
    organization: "Presidência da República — Planalto",
    url: "https://www.planalto.gov.br/ccivil_03/decreto/1980-1989/d94406.htm",
    accessedAt: ACCESSED,
  },
  cofen564: {
    title: "Resolução Cofen nº 564/2017 — Código de Ética dos Profissionais de Enfermagem",
    organization: "Conselho Federal de Enfermagem (Cofen)",
    url: "https://www.cofen.gov.br/resolucao-cofen-no-5642017/",
    accessedAt: ACCESSED,
  },
  portaria529: {
    title: "Portaria GM/MS nº 529, de 1º de abril de 2013 (Programa Nacional de Segurança do Paciente)",
    organization: "Ministério da Saúde — Saúde Legis",
    url: "https://bvsms.saude.gov.br/bvs/saudelegis/gm/2013/prt0529_01_04_2013.html",
    accessedAt: ACCESSED,
  },
  rdc36: {
    title: "RDC nº 36, de 25 de julho de 2013 (ações para a segurança do paciente)",
    organization: "Agência Nacional de Vigilância Sanitária (Anvisa)",
    url: "https://bvsms.saude.gov.br/bvs/saudelegis/anvisa/2013/rdc0036_25_07_2013.html",
    accessedAt: ACCESSED,
  },
  protHigieneMaos: {
    title: "Anexo 01: Protocolo para a prática de higiene das mãos em serviços de saúde (2013)",
    organization: "Ministério da Saúde / Anvisa / Fiocruz (cópia publicada pelo Proqualis/Fiocruz)",
    url: "https://proqualis.fiocruz.br/sites/proqualis.fiocruz.br/files/000002347fQHsQg.pdf",
    accessedAt: ACCESSED,
  },
  protUpp: {
    title: "Anexo 02: Protocolo para prevenção de úlcera por pressão (2013)",
    organization: "Ministério da Saúde / Anvisa / Fiocruz (cópia publicada pelo Proqualis/Fiocruz)",
    url: "https://proqualis.fiocruz.br/sites/proqualis.fiocruz.br/files/000002347fQHsQg.pdf",
    accessedAt: ACCESSED,
  },
  protMedicamentos: {
    title: "Anexo 03: Protocolo de segurança na prescrição, uso e administração de medicamentos (2013)",
    organization: "Ministério da Saúde / Anvisa, com Fiocruz e Fhemig (cópia publicada pelo Proqualis/Fiocruz)",
    url: "https://proqualis.fiocruz.br/sites/proqualis.fiocruz.br/files/000002490IQmwD8.pdf",
    accessedAt: ACCESSED,
  },
  portaria1600: {
    title: "Portaria GM/MS nº 1.600, de 7 de julho de 2011 (Rede de Atenção às Urgências)",
    organization: "Ministério da Saúde — Saúde Legis",
    url: "https://bvsms.saude.gov.br/bvs/saudelegis/gm/2011/prt1600_07_07_2011.html",
    accessedAt: ACCESSED,
  },
  aha2025: {
    title: "Destaques das Diretrizes de 2025 da American Heart Association para RCP e ACE",
    organization: "American Heart Association",
    url: "https://cpr.heart.org/-/media/CPR-Files/2025-documents-for-cpr-heart-edits-posting/Resuscitation-Science/JN1580_PTBR_Hghlghts_2025ECCGuidelines_Final_251021.pdf",
    accessedAt: ACCESSED,
  },
  cab32: {
    title: "Cadernos de Atenção Básica nº 32 — Atenção ao pré-natal de baixo risco (2012)",
    organization: "Ministério da Saúde",
    url: "https://bvsms.saude.gov.br/bvs/publicacoes/cadernos_atencao_basica_32_prenatal.pdf",
    accessedAt: ACCESSED,
  },
  guiaAlimentar2: {
    title: "Guia alimentar para crianças brasileiras menores de 2 anos (2019)",
    organization: "Ministério da Saúde",
    url: "http://189.28.128.100/dab/docs/portaldab/publicacoes/guia_da_crianca_2019.pdf",
    accessedAt: ACCESSED,
  },
  triagemNeonatal: {
    title: "Triagem neonatal biológica — Manual técnico (2016)",
    organization: "Ministério da Saúde",
    url: "https://bvsms.saude.gov.br/bvs/publicacoes/triagem_neonatal_biologica_manual_tecnico.pdf",
    accessedAt: ACCESSED,
  },
  lei14154: {
    title: "Lei nº 14.154, de 26 de maio de 2021 (amplia o teste do pezinho)",
    organization: "Presidência da República — Planalto",
    url: "https://www.planalto.gov.br/ccivil_03/_ato2019-2022/2021/lei/l14154.htm",
    accessedAt: ACCESSED,
  },
  calculoSeguro1: {
    title: "Boas práticas: Cálculo seguro — Volume I: Revisão das operações básicas",
    organization: "Coren-SP (cópia publicada pelo IPPMG/UFRJ)",
    url: "https://ippmg.ufrj.br/wp-content/uploads/2023/02/boas-praticas-calculo-seguro-volume-1-revisao-das-operacoes-basicas_0-1.pdf",
    accessedAt: ACCESSED,
  },
  // ── Biossegurança (conferidas em 2026-10-03) ──
  rdc222: {
    title: "RDC nº 222, de 28 de março de 2018 (boas práticas de gerenciamento dos resíduos de serviços de saúde)",
    organization: "Agência Nacional de Vigilância Sanitária (Anvisa)",
    url: "https://bvsms.saude.gov.br/bvs/saudelegis/anvisa/2018/rdc0222_28_03_2018.pdf",
    accessedAt: "2026-10-03",
  },
  rdc15: {
    title: "RDC nº 15, de 15 de março de 2012 (boas práticas para o processamento de produtos para saúde)",
    organization: "Agência Nacional de Vigilância Sanitária (Anvisa)",
    url: "https://bvsms.saude.gov.br/bvs/saudelegis/anvisa/2012/rdc0015_15_03_2012.html",
    accessedAt: "2026-10-03",
  },
  nr32: {
    title: "NR 32 — Segurança e Saúde no Trabalho em Serviços de Saúde (texto atualizado até a Portaria MTP nº 4.219/2022)",
    organization: "Ministério do Trabalho e Emprego",
    url: "https://www.gov.br/trabalho-e-emprego/pt-br/acesso-a-informacao/participacao-social/conselhos-e-orgaos-colegiados/comissao-tripartite-partitaria-permanente/arquivos/normas-regulamentadoras/nr-32-atualizada-2022-2.pdf",
    accessedAt: "2026-10-03",
  },
  expBiologica: {
    title: "Exposição a materiais biológicos — Protocolo de complexidade diferenciada (Saúde do Trabalhador, 2006)",
    organization: "Ministério da Saúde",
    url: "https://bvsms.saude.gov.br/bvs/publicacoes/protocolo_expos_mat_biologicos.pdf",
    accessedAt: "2026-10-03",
  },
  precaucoesEbserh: {
    title: "Protocolo PRT.STGQ.008 — Medidas de precaução para prevenção de infecções relacionadas à assistência à saúde (v.3, 2024)",
    organization: "Ebserh — Hospital Universitário Júlio Bandeira (UFCG)",
    url: "https://www.gov.br/hubrasil/pt-br/hospitais-universitarios/regiao-nordeste/hujb-ufcg/acesso-a-informacao/gestao-documental/superintendencia/copy_of_PRT.SVSSP.008MedidasDePrecauoParaPrevenoDeInfecesRelacionadaAssistnciaSade.pdf",
    accessedAt: "2026-10-03",
  },
  nt04Anvisa: {
    title: "Nota Técnica GVIMS/GGTES/Anvisa nº 04/2020 — medidas de prevenção e controle na assistência (atualizada em 27/10/2020)",
    organization: "Agência Nacional de Vigilância Sanitária (Anvisa) (cópia publicada pela Renast/Fiocruz)",
    url: "https://renastonline.ensp.fiocruz.br/sites/default/files/arquivos/recursos/nota_tecnica_n_04-2020_gvims-ggtes-anvisa-atualizada-27-10-2020.pdf",
    accessedAt: "2026-10-03",
  },
  // ── SUS (conferidas em 2026-10-03) ──
  cf88: {
    title: "Constituição da República Federativa do Brasil de 1988 — arts. 196 a 200 (Seção II — Da Saúde)",
    organization: "Presidência da República — Planalto",
    url: "https://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm",
    accessedAt: "2026-10-03",
  },
  lei8080v2: {
    title: "Lei nº 8.080, de 19 de setembro de 1990 (Lei Orgânica da Saúde)",
    organization: "Presidência da República — Planalto",
    url: "https://www.planalto.gov.br/ccivil_03/leis/l8080.htm",
    accessedAt: "2026-10-03",
  },
  lei8142v2: {
    title: "Lei nº 8.142, de 28 de dezembro de 1990",
    organization: "Presidência da República — Planalto",
    url: "https://www.planalto.gov.br/ccivil_03/leis/l8142.htm",
    accessedAt: "2026-10-03",
  },
  decreto7508: {
    title: "Decreto nº 7.508, de 28 de junho de 2011 (regulamenta a Lei nº 8.080/1990)",
    organization: "Presidência da República — Planalto",
    url: "https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2011/decreto/d7508.htm",
    accessedAt: "2026-10-03",
  },
  pnab2436: {
    title: "Portaria nº 2.436, de 21 de setembro de 2017 (Política Nacional de Atenção Básica)",
    organization: "Ministério da Saúde — Saúde Legis",
    url: "https://bvsms.saude.gov.br/bvs/saudelegis/gm/2017/prt2436_22_09_2017.html",
    accessedAt: "2026-10-03",
  },
  // ── Ética (conferidas em 2026-10-03) ──
  cofen564v2: {
    title: "Resolução Cofen nº 564/2017 — Código de Ética dos Profissionais de Enfermagem (texto integral)",
    organization: "Conselho Federal de Enfermagem (Cofen)",
    url: "https://www.cofen.gov.br/resolucao-cofen-no-5642017/",
    accessedAt: "2026-10-03",
  },
  lei5905: {
    title: "Lei nº 5.905, de 12 de julho de 1973 (cria os Conselhos Federal e Regionais de Enfermagem)",
    organization: "Presidência da República — Planalto",
    url: "https://www.planalto.gov.br/ccivil_03/leis/l5905.htm",
    accessedAt: "2026-10-03",
  },
  lei7498v2: {
    title: "Lei nº 7.498, de 25 de junho de 1986 (exercício da Enfermagem)",
    organization: "Presidência da República — Planalto",
    url: "https://www.planalto.gov.br/ccivil_03/leis/l7498.htm",
    accessedAt: "2026-10-03",
  },
  decreto94406v2: {
    title: "Decreto nº 94.406, de 8 de junho de 1987 (regulamenta a Lei nº 7.498/1986)",
    organization: "Presidência da República — Planalto",
    url: "https://www.planalto.gov.br/ccivil_03/decreto/1980-1989/d94406.htm",
    accessedAt: "2026-10-03",
  },
  // ── Cálculos (conferidas em 2026-10-03) ──
  calculoSeguro1v2: {
    title: "Boas práticas: Cálculo seguro — Volume I: Revisão das operações básicas",
    organization: "Coren-SP (cópia publicada pelo IPPMG/UFRJ)",
    url: "https://ippmg.ufrj.br/wp-content/uploads/2023/02/boas-praticas-calculo-seguro-volume-1-revisao-das-operacoes-basicas_0-1.pdf",
    accessedAt: "2026-10-03",
  },
  calculoSeguro2: {
    title: "Boas práticas: Cálculo seguro — Volume II: Cálculo e diluição de medicamentos",
    organization: "Conselho Regional de Enfermagem de São Paulo (Coren-SP)",
    url: "https://portal.coren-sp.gov.br/sites/default/files/boas-praticas-calculo-seguro-volume-2-calculo-e-diluicao-de-medicamentos.pdf",
    accessedAt: "2026-10-03",
  },
  // ── Fundamentos (conferidas em 2026-10-03) ──
  protMedicamentosV2: {
    title: "Anexo 03: Protocolo de segurança na prescrição, uso e administração de medicamentos (2013)",
    organization: "Ministério da Saúde / Anvisa, com Fiocruz e Fhemig (cópia publicada pelo Proqualis/Fiocruz)",
    url: "https://proqualis.fiocruz.br/sites/proqualis.fiocruz.br/files/000002490IQmwD8.pdf",
    accessedAt: "2026-10-03",
  },
  protUppV2: {
    title: "Anexo 02: Protocolo para prevenção de úlcera por pressão (2013)",
    organization: "Ministério da Saúde / Anvisa / Fiocruz (cópia publicada pelo Proqualis/Fiocruz)",
    url: "https://proqualis.fiocruz.br/sites/proqualis.fiocruz.br/files/000002347fQHsQg.pdf",
    accessedAt: "2026-10-03",
  },
  protIdentificacao: {
    title: "Anexo 02: Protocolo de identificação do paciente (2013)",
    organization: "Ministério da Saúde / Anvisa / Fiocruz (publicado pelo Proqualis/Fiocruz)",
    url: "https://proqualis.fiocruz.br/sites/proqualis.fiocruz.br/files/Protocolo%20de%20Identifica%C3%A7%C3%A3o%20do%20Paciente.pdf",
    accessedAt: "2026-10-03",
  },
  protQuedas: {
    title: "Anexo 01: Protocolo prevenção de quedas (2013)",
    organization: "Ministério da Saúde / Anvisa / Fiocruz (publicado pelo Proqualis/Fiocruz)",
    url: "https://proqualis.fiocruz.br/sites/proqualis.fiocruz.br/files/Protocolo%20-%20Preven%C3%A7%C3%A3o%20de%20Quedas.pdf",
    accessedAt: "2026-10-03",
  },
  cofen514: {
    title: "Resolução Cofen nº 514/2016 — Guia de recomendações para registro de enfermagem no prontuário do paciente",
    organization: "Conselho Federal de Enfermagem (Cofen)",
    url: "https://www.cofen.gov.br/wp-content/uploads/2016/06/RESOLU%C3%87%C3%83O-COFEN-N%C2%BA-0514-2016-GUIA-DE-RECOMENDA%C3%87%C3%95ES-vers%C3%A3o-web.pdf",
    accessedAt: "2026-10-03",
  },
  cofen736: {
    title: "Resolução Cofen nº 736, de 17 de janeiro de 2024 (Processo de Enfermagem)",
    organization: "Conselho Federal de Enfermagem (Cofen)",
    url: "https://cofen.gov.br/wp-content/uploads/2024/01/Resolucao-736-2024.pdf",
    accessedAt: "2026-10-03",
  },
} satisfies Record<string, SourceRef>;

export const REVIEWED_V2 = "2026-10-03";
export const V2_REVIEW_NOTE =
  "Padrão v2: cada seção foi escrita a partir do texto original da fonte, baixado e lido em 2026-10-03 (conferência automatizada durante o desenvolvimento). Revisão por enfermeiro(a) obrigatória antes da venda.";

export const REVIEWED_ON = ACCESSED;
export const AUTO_REVIEW_NOTE =
  "Conferido contra o texto da fonte em 2026-10-02 (conferência automatizada durante o desenvolvimento). Seções visuais e 3ª questão conferidas contra o texto original em 2026-10-03. Recomenda-se revisão por enfermeiro(a) antes da venda.";

export function at(src: SourceRef, locator: string): SourceRef {
  return { ...src, locator };
}
