import { FooterLogo } from "./FooterLogo";
import { FooterTitle } from "./FooterTitle";
import type { FooterLogoVariant, FooterTitleVariant } from "./types";

type FooterBrandProps = {
  logoVariant: FooterLogoVariant;
  titleVariant: FooterTitleVariant;
  className?: string;
  gapClassName?: string;
};

export function FooterBrand({
  logoVariant,
  titleVariant,
  className = "",
  gapClassName = "gap-4",
}: FooterBrandProps) {
  return (
    <div
      className={`flex w-full min-w-0 items-center justify-center ${gapClassName} ${className}`.trim()}
    >
      <FooterLogo variant={logoVariant} />
      <FooterTitle variant={titleVariant} />
    </div>
  );
}
