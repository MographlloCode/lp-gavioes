import type { NavItem } from "./NavLink";

export const navbarData: { navItems: NavItem[] } = {
  navItems: [
    {
      id: "gavioes",
      name: "Gaviões da Fiel",
      dropdown: [
        {
          id: "group_01",
          items: [
            { id: "nos_subitem_01", name: "Associe-se", link: "https://gavioes.com.br/associe-se.php" },
            { id: "nos_subitem_02", name: "Quem Somos", link: "https://gavioes.com.br/quem-somos.php" },
            { id: "nos_subitem_03", name: "Conselho", link: "https://gavioes.com.br/conselho.php" },
            { id: "nos_subitem_04", name: "Diretoria", link: "https://gavioes.com.br/diretoria.php" },
            { id: "nos_subitem_05", name: "Ex-presidentes", link: "https://gavioes.com.br/presidentes.php" },
            { id: "nos_subitem_06", name: "Estatuto Gaviões da Fiel", link: "https://gavioes.com.br/estatuto-gavioes-da-fiel.php" },
            { id: "nos_subitem_07", name: "Subsedes", link: "https://gavioes.com.br/sub-sede.php" },
          ],
        },
        {
          id: "group_02",
          name: "Torcida",
          items: [
            { id: "torcida_subitem_01", name: "Responsabilidade Social", link: "https://gavioes.com.br/responsabilidade-social.php" },
            { id: "torcida_subitem_02", name: "Ideologia", link: "https://gavioes.com.br/ideologia.php" },
            { id: "torcida_subitem_03", name: "Letras de Músicas", link: "https://gavioes.com.br/letra-de-musicas.php" },
          ],
        },
        {
          id: "group_03",
          name: "Carnaval",
          items: [
            { id: "carnaval_subitem_01", name: "Enredo", link: "https://gavioes.com.br/enredos.php" },
            { id: "carnaval_subitem_02", name: "Escolinha de Bateria", link: "https://gavioes.com.br/escolinha-de-bateria.php" },
            { id: "carnaval_subitem_03", name: "História", link: "https://gavioes.com.br/historia.php" },
            { id: "carnaval_subitem_04", name: "Shows", link: "https://gavioes.com.br/shows.php" },
          ],
        },
      ],
    },
    {
      id: "corinthians",
      name: "Corinthians",
      dropdown: [
        {
          id: "corinthians_group",
          items: [
            { id: "corinthians_subitem_01", name: "Brasões", link: "https://gavioes.com.br/brasoes.php" },
            { id: "corinthians_subitem_02", name: "Títulos", link: "https://gavioes.com.br/titulos.php" },
            { id: "corinthians_subitem_03", name: "O Clube", link: "https://gavioes.com.br/o-clube.php" },
            { id: "corinthians_subitem_04", name: "As Origens", link: "https://gavioes.com.br/as-origens.php" },
          ],
        },
      ],
    },
    {
      id: "multimidia",
      name: "Multimídia",
      dropdown: [
        {
          id: "multimidia_group",
          items: [
            { id: "multimidia_subitem_01", name: "Aplicativo Gaviões", link: "https://gavioes.com.br/aplicativo-gavioes.php" },
            { id: "multimidia_subitem_02", name: "Rádio", link: "https://gavioes.com.br/radio.php" },
            { id: "multimidia_subitem_03", name: "Vídeos", link: "https://gavioes.com.br/videos.php" },
            { id: "multimidia_subitem_04", name: "Acervo Digital", link: "https://acervogavioes.wordpress.com/" },
          ],
        },
      ],
    },
    { id: "noticias", name: "Notícias", link: "/noticias" },
    { id: "contato", name: "Contato", link: "/contato" },
  ],
};
