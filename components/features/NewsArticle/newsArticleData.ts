import type { NewsArticle } from "./types";

export const newsArticles: NewsArticle[] = [
  {
    slug: "gavioes-prepara-festa-neo-quimica-arena",
    section: "Torcida",
    breadcrumb: [
      { label: "Home", href: "/" },
      { label: "Notícias", href: "/noticias" },
      { label: "Corinthians", href: "/#topnews" },
    ],
    title:
      "Gaviões prepara festa com mosaico e cortejo para decisão na Neo Química Arena",
    subtitle:
      "Organizada detalha esquema de entrada, distribuição de materiais e ações sociais para o jogo deste fim de semana.",
    author: "Por Redação Gaviões",
    location: "São Paulo",
    publishedAt: "21/02/2026 06h10",
    updatedAt: "21/02/2026 09h42",
    readTime: "6 min de leitura",
    hero: {
      src: "/gavioes_torcida_2.png",
      alt: "Torcida da Gaviões da Fiel com bandeiras na arquibancada",
      caption:
        "Ação da torcida prevê mosaico em três setores e recepção do ônibus com fumaça e bandeiras.",
      credit: "Foto: Acervo Gaviões da Fiel",
    },
    lead:
      "A Gaviões da Fiel divulgou nesta sexta-feira (20) o plano completo para a festa da torcida na decisão em Itaquera, com foco em organização, segurança e participação coletiva.",
    body: [
      {
        type: "paragraph",
        content:
          "Segundo a diretoria, a concentração vai começar quatro horas antes da partida, com orientação para que os associados cheguem cedo aos pontos de encontro definidos no entorno da arena. O objetivo é evitar filas de última hora e facilitar a distribuição dos kits visuais.",
      },
      {
        type: "subheading",
        content: "Logística definida até a abertura dos portões",
      },
      {
        type: "paragraph",
        content:
          "A organização informou que voluntários vão atuar em turnos para coordenar o acesso aos setores Leste, Norte e Sul. Além disso, haverá comunicação em tempo real por meio dos canais oficiais para avisos sobre mudanças de fluxo e orientações de segurança.",
      },
      {
        type: "bulletList",
        items: [
          "Concentração principal na Praça da Fiel a partir das 12h.",
          "Distribuição de bandeirolas e cartazes até 1h antes do jogo.",
          "Entrada com prioridade para associados cadastrados na ação.",
        ],
      },
      {
        type: "subheading",
        content: "Campanha de doação acompanha mobilização",
      },
      {
        type: "paragraph",
        content:
          "Paralelamente à festa, a torcida também vai arrecadar alimentos não perecíveis e itens de higiene. A ideia é direcionar as doações para projetos sociais parceiros na Zona Leste, mantendo a agenda solidária junto às mobilizações esportivas.",
      },
      {
        type: "quote",
        content:
          "Queremos uma festa forte nas arquibancadas, mas com responsabilidade e respeito ao nosso bairro. A mobilização também é para ajudar quem precisa.",
        author: "Diretoria da Gaviões da Fiel",
      },
      {
        type: "paragraph",
        content:
          "A recomendação final é que torcedores evitem objetos proibidos e respeitem os protocolos de entrada. A expectativa da organizada é repetir o modelo de operação utilizado em clássicos recentes, com atuação integrada entre torcida, clube e equipe de segurança do estádio.",
      },
    ],
    related: [
      {
        kicker: "Carnaval",
        title:
          "Gaviões garante vaga no desfile das campeãs e confirma agenda de ensaios",
        href: "https://gavioes.com.br/noticias.php",
        timestamp: "Há 2 horas",
      },
      {
        kicker: "Clube",
        title:
          "Conselho da torcida convoca reunião aberta para discutir calendário de 2026",
        href: "https://gavioes.com.br/noticias.php",
        timestamp: "Há 5 horas",
      },
      {
        kicker: "Arena",
        title:
          "Neo Química Arena terá operação especial de acesso para o próximo jogo",
        href: "https://gavioes.com.br/noticias.php",
        timestamp: "Ontem",
      },
    ],
    recommendations: [
      {
        kicker: "Mais lidas",
        title:
          "Gaviões da Fiel é segunda colocada no Carnaval e garante vaga no desfile das campeãs",
        description:
          "A agremiação manteve protagonismo no Grupo Especial e confirmou presença no desfile das campeãs de 2026.",
        href: "https://www.meutimao.com.br/noticias-do-corinthians/527346/gavioes-da-fiel-e-segunda-colocada-no-carnaval-e-garante-vaga-no-desfile-das-campeas-de-2026",
        imageSrc:
          "https://cdn.meutimao.com.br/_upload/noticia/2026/02/17/gavioes-da-fiel-e-vice-campea-no-carnaval-de-2026-g941w.jpg",
        imageAlt: "Desfile da Gaviões da Fiel no Carnaval",
      },
      {
        kicker: "Torcida",
        title:
          "Gaviões da Fiel reverte punição e está de volta aos jogos do Corinthians",
        description:
          "A decisão foi revista e a organizada voltou a acompanhar presencialmente os compromissos do Timão.",
        href: "https://www.meutimao.com.br/noticias-do-corinthians/525242/gavioes-da-fiel-reverte-punicao-e-esta-de-volta-aos-jogos-do-corinthians",
        imageSrc:
          "https://www.meutimao.com.br/fotos-do-corinthians/w941/2023/05/14/gavioes_da_fiel_marcou_presenca_novamente_nas_im3r.jpg",
        imageAlt: "Torcida da Gaviões da Fiel nas arquibancadas",
      },
      {
        kicker: "Clube",
        title:
          "Presidente da Gaviões pede humildade para debate sobre SAF no Corinthians",
        description:
          "Declaração reforça que o tema deve ser tratado com cautela e foco no futuro esportivo e financeiro do clube.",
        href: "https://www.meutimao.com.br/noticias-do-corinthians/519192/presidente-da-gavioes-da-fiel-pede-humildade-para-debate-sobre-saf-no-corinthians",
        imageSrc:
          "https://cdn.meutimao.com.br/_upload/noticia/2025/10/28/ale-domenico-falou-sobre-a-apresentacao-da-nz941w.jpg",
        imageAlt: "Presidente da Gaviões em entrevista",
      },
    ],
    mostRead: [
      {
        title:
          "Gaviões da Fiel é segunda colocada no Carnaval e garante vaga no desfile das campeãs",
        href: "https://www.meutimao.com.br/noticias-do-corinthians/527346/gavioes-da-fiel-e-segunda-colocada-no-carnaval-e-garante-vaga-no-desfile-das-campeas-de-2026",
      },
      {
        title:
          "Gaviões da Fiel reverte punição e está de volta aos jogos do Corinthians",
        href: "https://www.meutimao.com.br/noticias-do-corinthians/525242/gavioes-da-fiel-reverte-punicao-e-esta-de-volta-aos-jogos-do-corinthians",
      },
      {
        title:
          "Presidente da Gaviões pede humildade para debate sobre SAF no Corinthians",
        href: "https://www.meutimao.com.br/noticias-do-corinthians/519192/presidente-da-gavioes-da-fiel-pede-humildade-para-debate-sobre-saf-no-corinthians",
      },
      {
        title:
          "Corinthians projeta esquema de segurança reforçado para clássico em Itaquera",
        href: "https://gavioes.com.br/noticias.php",
      },
    ],
    tags: [
      "Gaviões da Fiel",
      "Corinthians",
      "Neo Química Arena",
      "Torcida organizada",
      "Itaquera",
    ],
  },
];

export function getNewsArticleBySlug(slug: string) {
  return newsArticles.find((article) => article.slug === slug);
}
