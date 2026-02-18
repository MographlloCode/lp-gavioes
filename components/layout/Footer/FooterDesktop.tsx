import Image from "next/image";
import { FooterBottomLinks } from "./FooterBottomLinks";
import { FooterMenusGrid } from "./FooterMenusGrid";
import { FooterSocialLinks } from "./FooterSocialLinks";
import { FooterStoreLink } from "./FooterStoreLink";
import { FooterTitle } from "./FooterTitle";

export function FooterDesktop() {
  return (
    <div className="hidden gap-8 lg:grid lg:grid-cols-[clamp(170px,24vw,380px)_minmax(0,1fr)] xl:gap-10">
      <div className="flex h-full items-start">
        <Image
          src="/logo_gav.svg"
          alt="Logo Gaviões da Fiel"
          width={667}
          height={667}
          sizes="(min-width: 1280px) 24vw, (min-width: 1024px) 22vw, 100vw"
          className="h-auto w-full"
        />
      </div>

      <div className="flex min-w-0 flex-col gap-10">
        <FooterTitle variant="desktop" />

        <FooterMenusGrid className="grid grid-cols-5 gap-10" />

        <div className="flex items-center gap-6">
          <FooterSocialLinks />
          <FooterBottomLinks />
          <FooterStoreLink className="ml-auto" />
        </div>
      </div>
    </div>
  );
}
