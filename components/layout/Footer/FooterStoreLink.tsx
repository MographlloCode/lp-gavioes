import Link from "next/link";
import { storeLink } from "./data";

type FooterStoreLinkProps = {
  className?: string;
};

export function FooterStoreLink({ className = "" }: FooterStoreLinkProps) {
  return (
    <Link
      href={storeLink.href}
      target="_blank"
      rel="noreferrer"
      className={`font-helvetica-condensed text-[0.95rem] leading-none font-black uppercase transition-opacity hover:opacity-70 ${className}`}
    >
      {storeLink.label}
    </Link>
  );
}
