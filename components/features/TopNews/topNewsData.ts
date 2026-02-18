export type TopNewsDataItem = {
  id: string;
  tag: string;
  title: string;
  tldr: string;
  link: string;
  imageLink: string;
};

export const topNewsData: TopNewsDataItem[] = [
  {
    id: "topnews_01",
    tag: "Corinthians",
    title: "MP-SP denuncia ex-presidente do Corinthians; clube afasta gerente financeiro e Andrés pede afastamento",
    tldr:
      "A publicação destaca os desdobramentos jurídicos e internos envolvendo o ex-presidente do Corinthians e a área financeira do clube. O cenário inclui medidas administrativas e pedidos de afastamento ligados ao caso.",
    link: "https://gavioes.com.br/post/mp-sp-denuncia-ex-presidente-do-corinthians-clube-afasta-gerente-financeiro-e-andres-pede-afastamento",
    imageLink: "https://gavioes.com.br/imagens/noticias/332_1_1.jpeg",
  },
  {
    id: "topnews_02",
    tag: "Torcida",
    title: "Punição mantida",
    tldr:
      "A matéria informa a manutenção da penalidade e os impactos dessa decisão para a torcida organizada. O tema permanece no centro do debate entre torcedores, autoridades e entidades esportivas.",
    link: "https://gavioes.com.br/post/punicao-mantida",
    imageLink: "https://gavioes.com.br/imagens/noticias/335_1_1.png",
  },
  {
    id: "topnews_03",
    tag: "Carnaval",
    title: "Gaviões da Fiel no Carnaval",
    tldr:
      "A cobertura reúne informações e contexto sobre a participação da Gaviões da Fiel no Carnaval paulista. O conteúdo destaca a relação entre a escola, o desfile e a visibilidade nacional da agremiação.",
    link: "https://revistaquem.globo.com/tudo-sobre/edicao-do-programa/gavioes-da-fiel/",
    imageLink:
      "https://s2-quem.glbimg.com/rLxgukdCqrTWgTLnedfwo63FsmI=/0x0:996x664/fit-in/1000x664/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_b0f0e84207c948ab8b8777be5a6a4395/internal_photos/bs/2024/W/P/mj1gCEST6ZXt5pgK3rhw/bandeira-gavioes-da-fiel-carnaval-sp-escola-samba.png",
  },
];
