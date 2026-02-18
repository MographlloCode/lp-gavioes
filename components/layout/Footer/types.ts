import type { IconType } from "react-icons";

export type FooterLink = {
  label: string;
  href: string;
};

export type FooterSection = {
  title: string;
  links: FooterLink[];
};

export type SocialLink = FooterLink & {
  icon: IconType;
};

export type FooterLogoVariant = "desktop" | "compact" | "mobile";

export type FooterTitleVariant = "desktop" | "compact" | "mobile";
