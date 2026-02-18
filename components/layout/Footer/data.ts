import { BiLogoFacebook, BiLogoInstagram, BiLogoTwitter, BiLogoYoutube } from "react-icons/bi";
import type { FooterLink, FooterSection, SocialLink } from "./types";

export const footerSections: FooterSection[] = [
  {
    title: "GAVIÕES DA FIEL",
    links: [
      { label: "ASSOCIE-SE", href: "#" },
      { label: "CONSELHO", href: "#" },
      { label: "DIRETORIA", href: "#" },
      { label: "EX-PRESIDENTES", href: "#" },
      { label: "ESTATUTO", href: "#" },
      { label: "PALAVRA DO PRESIDENTE", href: "#" },
      { label: "SUBSEDE", href: "#" },
    ],
  },
  {
    title: "TORCIDA",
    links: [
      { label: "RESPONSABILIDADE SOCIAL", href: "#" },
      { label: "IDEOLOGIA", href: "#" },
      { label: "LETRAS DE MÚSICAS", href: "#" },
    ],
  },
  {
    title: "CARNAVAL",
    links: [
      { label: "ENREDO", href: "#" },
      { label: "ESCOLINHA DE BATERIA", href: "#" },
      { label: "HISTÓRIA", href: "#" },
      { label: "SHOWS", href: "#" },
    ],
  },
  {
    title: "CORINTHIANS",
    links: [
      { label: "ENREDO", href: "#" },
      { label: "ESCOLINHA DE BATERIA", href: "#" },
      { label: "HISTÓRIA", href: "#" },
      { label: "SHOWS", href: "#" },
    ],
  },
  {
    title: "MULTIMÍDIA",
    links: [
      { label: "ENREDO", href: "#" },
      { label: "ESCOLINHA DE BATERIA", href: "#" },
      { label: "HISTÓRIA", href: "#" },
      { label: "SHOWS", href: "#" },
    ],
  },
];

export const footerLinks: FooterLink[] = [
  { label: "CONTATO", href: "#" },
  { label: "NOTÍCIAS", href: "#" },
  { label: "POLÍTICA DE PRIVACIDADE", href: "#" },
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
