import Image from "next/image";
import Link from "next/link";
import { BiLinkExternal } from "react-icons/bi";

import type { NewsCatalogItem } from "./types";

type NewsCatalogCardProps = {
  item: NewsCatalogItem;
};

function isExternalHref(href: string) {
  return href.startsWith("http://") || href.startsWith("https://");
}

function isExternalImage(src: string) {
  return src.startsWith("http://") || src.startsWith("https://");
}

export function NewsCatalogCard({ item }: NewsCatalogCardProps) {
  const opensExternalLink = isExternalHref(item.href);

  return (
    <article className="group overflow-hidden rounded-sm border border-zinc-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="relative h-52 w-full overflow-hidden bg-zinc-100">
        <Image
          src={item.imageSrc}
          alt={item.imageAlt}
          fill
          sizes="(min-width: 1280px) 540px, (min-width: 768px) 48vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          unoptimized={isExternalImage(item.imageSrc)}
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="flex flex-col gap-3 p-4 sm:p-5">
        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-flex rounded-full border border-red-200 bg-red-50 px-2 py-1 text-[11px] font-semibold uppercase tracking-wide text-red-700">
            {item.tag}
          </span>
          <span className="text-xs text-zinc-500">{item.source}</span>
          {item.publishedAt ? (
            <span className="text-xs text-zinc-500">• {item.publishedAt}</span>
          ) : null}
        </div>

        <h2 className="font-helvetica-condensed text-2xl leading-tight font-black uppercase text-zinc-950">
          <Link
            href={item.href}
            target={opensExternalLink ? "_blank" : undefined}
            rel={opensExternalLink ? "noreferrer" : undefined}
            className="transition-colors duration-200 group-hover:text-red-700"
          >
            {item.title}
          </Link>
        </h2>

        <p className="text-sm leading-relaxed text-zinc-700">{item.description}</p>

        <Link
          href={item.href}
          target={opensExternalLink ? "_blank" : undefined}
          rel={opensExternalLink ? "noreferrer" : undefined}
          className="inline-flex items-center gap-1 font-helvetica-condensed text-base font-black uppercase text-zinc-900 underline underline-offset-4 transition-all duration-200 hover:gap-2 hover:text-red-700 hover:underline-offset-8"
        >
          {item.isInternal ? "Ler matéria completa" : "Abrir notícia"}
          {opensExternalLink ? <BiLinkExternal aria-hidden="true" size={17} /> : null}
        </Link>
      </div>
    </article>
  );
}
