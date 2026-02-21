import Link from "next/link";
import { footerLinks } from "./data";
import { getPhpLinkTargetProps } from "../linkUtils";

export function FooterBottomLinks() {
  return (
    <nav className="flex flex-wrap items-center gap-x-8 gap-y-2 mt-1">
      {footerLinks.map((link) => {
        const phpLinkTargetProps = getPhpLinkTargetProps(link.href);

        return (
          <Link
            key={link.label}
            href={link.href}
            {...phpLinkTargetProps}
            className="font-helvetica-condensed text-[0.95rem] leading-none font-black uppercase transition-opacity hover:opacity-70"
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
