import Image from "next/image";
import type { FooterLogoVariant } from "./types";

const logoVariantClasses: Record<FooterLogoVariant, string> = {
  desktop: "h-[210px] w-[210px]",
  compact: "h-[clamp(82px,10vw,118px)] w-[clamp(82px,10vw,118px)]",
  mobile: "h-[clamp(58px,17vw,86px)] w-[clamp(58px,17vw,86px)]",
};

const logoVariantSize: Record<FooterLogoVariant, number> = {
  desktop: 210,
  compact: 118,
  mobile: 86,
};

type FooterLogoProps = {
  variant: FooterLogoVariant;
};

export function FooterLogo({ variant }: FooterLogoProps) {
  const size = logoVariantSize[variant];

  return (
    <Image
      src="/logo_gav.svg"
      alt="Logo Gaviões da Fiel"
      width={size}
      height={size}
      className={logoVariantClasses[variant]}
    />
  );
}
