import Link from "next/link";

import type { InstitutionalSourceItem } from "./types";

type InstitutionalSourcesBlockProps = {
  title?: string;
  items: InstitutionalSourceItem[];
};

export function InstitutionalSourcesBlock({
  title = "Fontes",
  items,
}: InstitutionalSourcesBlockProps) {
  if (!items.length) {
    return null;
  }

  return (
    <section className="flex flex-col gap-3">
      <h3 className="font-helvetica-condensed text-2xl font-black uppercase text-zinc-950">
        {title}
      </h3>
      <ul className="space-y-2 text-sm leading-relaxed text-zinc-700">
        {items.map((item, index) => {
          const isExternal =
            !!item.href &&
            (item.href.startsWith("http://") || item.href.startsWith("https://"));

          return (
            <li key={`${item.label}-${index}`} className="list-none">
              {item.href ? (
                <Link
                  href={item.href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noreferrer" : undefined}
                  className="underline underline-offset-2 transition-colors duration-200 hover:text-zinc-950"
                >
                  {item.label}
                </Link>
              ) : (
                <span>{item.label}</span>
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
