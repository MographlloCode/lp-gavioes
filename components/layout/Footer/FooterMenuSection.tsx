import Link from "next/link";
import type { FooterSection } from "./types";

type FooterMenuSectionProps = {
  section: FooterSection;
};

export function FooterMenuSection({ section }: FooterMenuSectionProps) {
  return (
    <div className="space-y-3">
      <h3 className="font-helvetica-condensed text-[0.95rem] leading-none font-black uppercase">
        {section.title}
      </h3>
      <ul className="space-y-1.5">
        {section.links.map((link) => (
          <li key={`${section.title}-${link.label}`}>
            <Link
              href={link.href}
              className="font-helvetica text-[0.68rem] leading-[1.15] uppercase decoration-white/85 underline-offset-2 transition-opacity hover:opacity-70"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
