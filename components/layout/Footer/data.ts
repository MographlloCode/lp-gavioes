import { BiLogoFacebook, BiLogoInstagram, BiLogoTwitter, BiLogoYoutube } from "react-icons/bi";
import type { FooterLink, FooterSection, SocialLink } from "./types";

export const footerSections: FooterSection[] = [
  {
    title: "GAVIÕES DA FIEL",
    links: [
      { label: "ASSOCIE-SE", href: "/institucional/associe-se" },
      { label: "QUEM SOMOS", href: "/institucional/quem-somos" },
      { label: "CONSELHO", href: "/institucional/conselho" },
      { label: "DIRETORIA", href: "/institucional/diretoria" },
      { label: "EX-PRESIDENTES", href: "/institucional/ex-presidentes" },
      { label: "ESTATUTO", href: "/institucional/estatuto" },
      { label: "PALAVRA DO PRESIDENTE", href: "/institucional/palavra-do-presidente" },
      { label: "SUBSEDES", href: "/institucional/subsedes" },
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
