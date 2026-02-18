import type { FooterTitleVariant } from "./types";

const titleVariantClasses: Record<FooterTitleVariant, string> = {
  desktop:
    "w-full font-helvetica-condensed text-[clamp(5.4rem,8.8vw,10.5rem)] leading-[0.8] font-black uppercase",
  compact:
    "min-w-0 flex-1 whitespace-normal font-helvetica-condensed text-[clamp(2.7rem,7.2vw,5.4rem)] leading-[0.84] font-black uppercase",
  mobile:
    "min-w-0 flex-1 whitespace-normal font-helvetica-condensed text-[clamp(1.9rem,9.8vw,3.5rem)] leading-[0.84] font-black uppercase",
};

type FooterTitleProps = {
  variant: FooterTitleVariant;
};

export function FooterTitle({ variant }: FooterTitleProps) {
  return <h2 className={titleVariantClasses[variant]}>GAVIÕES DA FIEL</h2>;
}
