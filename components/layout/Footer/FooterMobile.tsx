import { FooterBottomLinks } from "./FooterBottomLinks";
import { FooterBrand } from "./FooterBrand";
import { FooterMenusGrid } from "./FooterMenusGrid";
import { FooterSocialLinks } from "./FooterSocialLinks";
import { FooterStoreLink } from "./FooterStoreLink";

export function FooterMobile() {
  return (
    <div className="flex min-w-0 flex-col gap-10 sm:hidden">
      <FooterBrand
        logoVariant="mobile"
        titleVariant="mobile"
        gapClassName="gap-2"
      />

      <FooterMenusGrid className="grid grid-cols-2 gap-x-5 gap-y-6" />

      <div className="space-y-4 pt-1">
        <FooterBottomLinks />
        <div className="flex items-center justify-between gap-4">
          <FooterSocialLinks />
          <FooterStoreLink className="text-right" />
        </div>
      </div>
    </div>
  );
}
