export type NewsItem = {
  id: string;
  tag: string;
  title: string;
  description: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
};

const defaultNewsDescription =
  "A Gaviões da Fiel, principal torcida organizada do Corinthians, prepara uma festa especial para o duelo contra o Flamengo, pela Supercopa do Brasil, neste domingo (1º). A bola rola às 16h, no estádio Mané Garrincha, em Brasília (DF).";

export const newsItems: NewsItem[] = [
  {
    id: "news_01",
    tag: "Torcida",
    title: "Torcida do Corinthians prepara festa especial para Supercopa",
    description: defaultNewsDescription,
    href: "/",
    imageSrc: "/gavioes_torcida.png",
    imageAlt: "Torcida do Corinthians",
  },
  {
    id: "news_02",
    tag: "Torcida",
    title: "Torcida do Corinthians prepara festa especial para Supercopa",
    description: defaultNewsDescription,
    href: "/",
    imageSrc: "/gavioes_torcida.png",
    imageAlt: "Torcida do Corinthians",
  },
  {
    id: "news_03",
    tag: "Torcida",
    title: "Torcida do Corinthians prepara festa especial para Supercopa",
    description: defaultNewsDescription,
    href: "/",
    imageSrc: "/gavioes_torcida.png",
    imageAlt: "Torcida do Corinthians",
  },
];
