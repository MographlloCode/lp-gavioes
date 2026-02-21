import { BiLogoFacebook, BiLogoInstagram, BiLogoTwitter, BiLogoYoutube } from "react-icons/bi";
import type { FooterLink, FooterSection, SocialLink } from "./types";

export const footerSections: FooterSection[] = [
  {
    title: "GAVIÕES DA FIEL",
    links: [
      { label: "ASSOCIE-SE", href: "https://gavioes.com.br/associe-se.php" },
      { label: "QUEM SOMOS", href: "https://gavioes.com.br/quem-somos.php" },
      { label: "CONSELHO", href: "https://gavioes.com.br/conselho.php" },
      { label: "DIRETORIA", href: "https://gavioes.com.br/diretoria.php" },
      { label: "EX-PRESIDENTES", href: "https://gavioes.com.br/presidentes.php" },
      { label: "ESTATUTO", href: "https://gavioes.com.br/estatuto-gavioes-da-fiel.php" },
      { label: "PALAVRA DO PRESIDENTE", href: "https://gavioes.com.br/palavra-do-presidente.php" },
      { label: "SUBSEDE", href: "https://gavioes.com.br/sub-sede.php" },
    ],
  },
  {
    title: "TORCIDA",
    links: [
      { label: "RESPONSABILIDADE SOCIAL", href: "https://gavioes.com.br/responsabilidade-social.php" },
      { label: "IDEOLOGIA", href: "https://gavioes.com.br/ideologia.php" },
      { label: "LETRAS DE MÚSICAS", href: "https://gavioes.com.br/letra-de-musicas.php" },
    ],
  },
  {
    title: "CARNAVAL",
    links: [
      { label: "ENREDO", href: "https://gavioes.com.br/enredos.php" },
      { label: "ESCOLINHA DE BATERIA", href: "https://gavioes.com.br/escolinha-de-bateria.php" },
      { label: "HISTÓRIA", href: "https://gavioes.com.br/historia.php" },
      { label: "SHOWS", href: "https://gavioes.com.br/shows.php" },
    ],
  },
  {
    title: "CORINTHIANS",
    links: [
      { label: "BRASÕES", href: "https://gavioes.com.br/brasoes.php" },
      { label: "TÍTULOS", href: "https://gavioes.com.br/titulos.php" },
      { label: "O CLUBE", href: "https://gavioes.com.br/o-clube.php" },
      { label: "AS ORIGENS", href: "https://gavioes.com.br/as-origens.php" },
    ],
  },
  {
    title: "MULTIMÍDIA",
    links: [
      { label: "APLICATIVO GAVIÕES", href: "https://gavioes.com.br/aplicativo-gavioes.php" },
      { label: "RÁDIO", href: "https://gavioes.com.br/radio.php" },
      { label: "VÍDEOS", href: "https://gavioes.com.br/videos.php" },
      { label: "ACERVO DIGITAL", href: "https://acervogavioes.wordpress.com/" },
    ],
  },
];

export const footerLinks: FooterLink[] = [
  { label: "CONTATO", href: "/contato" },
  { label: "NOTÍCIAS", href: "/noticias" },
  { label: "POLÍTICA DE PRIVACIDADE", href: "https://gavioes.com.br/politica-de-privacidade" },
];

export const storeLink: FooterLink = {
  label: "VISITE NOSSA LOJA OFICIAL",
  href: "https://www.lojagavioes.com.br/",
};

export const socialLinks: SocialLink[] = [
  { label: "Instagram", href: "#", icon: BiLogoInstagram },
  { label: "Youtube", href: "#", icon: BiLogoYoutube },
  { label: "Twitter", href: "#", icon: BiLogoTwitter },
  { label: "Facebook", href: "#", icon: BiLogoFacebook },
];
