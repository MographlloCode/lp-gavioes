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
    tag: "Torcida",
    title:
      "Gaviões prepara festa com mosaico e cortejo para decisão na Neo Química Arena",
    description:
      "A organizada divulgou o plano completo para a recepção do time em Itaquera, com logística de acesso, materiais visuais e campanha de doações.",
    href: "/noticias/gavioes-prepara-festa-neo-quimica-arena",
    imageSrc: "/gavioes_torcida_2.png",
    imageAlt: "Torcida da Gaviões da Fiel nas arquibancadas",
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
