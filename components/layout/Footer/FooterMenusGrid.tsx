import { footerSections } from "./data";
import { FooterMenuSection } from "./FooterMenuSection";

type FooterMenusGridProps = {
  className: string;
};

export function FooterMenusGrid({ className }: FooterMenusGridProps) {
  return (
    <div className={className}>
      {footerSections.map((section) => (
        <FooterMenuSection key={section.title} section={section} />
      ))}
    </div>
  );
}
