import Link from "next/link";
import { socialLinks } from "./data";

export function FooterSocialLinks() {
  return (
    <nav className="flex items-center gap-2.5 text-sm">
      {socialLinks.map(({ icon: Icon, href, label }) => (
        <Link
          key={label}
          href={href}
          target="_blank"
          rel="noreferrer"
          aria-label={label}
          className="transition-opacity hover:opacity-70"
        >
          <Icon size={20} />
        </Link>
      ))}
    </nav>
  );
}
