export type NewsItem = {
  id: string;
  tag: string;
  title: string;
  description: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
};

export const newsItems: NewsItem[] = [
  {
    id: "news_01",
    tag: "Carnaval",
    title: "Gaviões da Fiel é segunda colocada no Carnaval e garante vaga no desfile das campeãs de 2026",
    description:
      "A escola da Gaviões encerrou a apuração entre as primeiras colocadas do Grupo Especial e confirmou presença no Desfile das Campeãs. O resultado mantém a agremiação em destaque no Carnaval paulista e reforça a boa sequência recente.",
    href: "https://www.meutimao.com.br/noticias-do-corinthians/527346/gavioes-da-fiel-e-segunda-colocada-no-carnaval-e-garante-vaga-no-desfile-das-campeas-de-2026",
    imageSrc:
      "https://cdn.meutimao.com.br/_upload/noticia/2026/02/17/gavioes-da-fiel-e-vice-campea-no-carnaval-de-2026-g941w.jpg",
    imageAlt: "Desfile da Gaviões da Fiel no Carnaval de 2026",
  },
  {
    id: "news_02",
    tag: "Torcida",
    title: "Gaviões da Fiel reverte punição e está de volta aos jogos do Corinthians",
    description:
      "A decisão que afastava a organizada dos estádios foi revista, liberando o retorno da Gaviões às partidas do Corinthians. Com a reviravolta, a torcida volta a acompanhar o time presencialmente nos compromissos da temporada.",
    href: "https://www.meutimao.com.br/noticias-do-corinthians/525242/gavioes-da-fiel-reverte-punicao-e-esta-de-volta-aos-jogos-do-corinthians",
    imageSrc:
      "https://www.meutimao.com.br/fotos-do-corinthians/w941/2023/05/14/gavioes_da_fiel_marcou_presenca_novamente_nas_im3r.jpg",
    imageAlt: "Torcida da Gaviões da Fiel nas arquibancadas",
  },
  {
    id: "news_03",
    tag: "Clube",
    title: "Presidente da Gaviões da Fiel pede humildade para debate sobre SAF no Corinthians",
    description:
      "O presidente da Gaviões defendeu que a discussão sobre SAF no Corinthians seja conduzida com cautela e sem radicalização. A fala reforça que o tema exige foco no futuro esportivo e financeiro do clube.",
    href: "https://www.meutimao.com.br/noticias-do-corinthians/519192/presidente-da-gavioes-da-fiel-pede-humildade-para-debate-sobre-saf-no-corinthians",
    imageSrc:
      "https://cdn.meutimao.com.br/_upload/noticia/2025/10/28/ale-domenico-falou-sobre-a-apresentacao-da-nz941w.jpg",
    imageAlt: "Presidente da Gaviões da Fiel em entrevista",
  },
];
