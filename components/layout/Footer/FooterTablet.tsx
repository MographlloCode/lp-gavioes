import { FooterBottomLinks } from "./FooterBottomLinks";
import { FooterBrand } from "./FooterBrand";
import { FooterMenusGrid } from "./FooterMenusGrid";
import { FooterSocialLinks } from "./FooterSocialLinks";
import { FooterStoreLink } from "./FooterStoreLink";

export function FooterTablet() {
  return (
    <div className="hidden flex-col gap-8 sm:flex lg:hidden">
      <FooterBrand logoVariant="compact" titleVariant="compact" />

      <FooterMenusGrid className="grid grid-cols-3 gap-x-8 gap-y-8" />

      <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
        <FooterSocialLinks />
        <FooterBottomLinks />
        <FooterStoreLink />
      </div>
    </div>
  );
}
