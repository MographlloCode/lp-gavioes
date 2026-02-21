import Image from "next/image";
import Link from "next/link";

import type { InstitutionalCatalogItem } from "./types";

type InstitutionalCatalogCardProps = {
  item: InstitutionalCatalogItem;
};

export function InstitutionalCatalogCard({ item }: InstitutionalCatalogCardProps) {
  const isExternalImage =
    item.imageSrc.startsWith("http://") || item.imageSrc.startsWith("https://");
  const isExternalLink =
    item.href.startsWith("http://") || item.href.startsWith("https://");

  return (
    <article className="overflow-hidden rounded-sm border border-zinc-200 bg-white">
      <div className="grid grid-cols-1 gap-0 md:grid-cols-[280px_1fr]">
        <div className="relative h-52 md:h-full">
          <Image
            src={item.imageSrc}
            alt={item.imageAlt}
            fill
            sizes="(min-width: 768px) 280px, 100vw"
            className="object-cover"
            unoptimized={isExternalImage}
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="flex flex-col gap-3 p-4 sm:p-5">
          <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
            {item.section} • {item.source}
          </p>
          <h2 className="font-helvetica-condensed text-3xl leading-tight font-black uppercase text-zinc-950 sm:text-4xl">
            {item.title}
          </h2>
          <p className="text-sm leading-relaxed text-zinc-700">{item.description}</p>
          <div className="flex flex-wrap gap-2">
            {item.tags.map((tag) => (
              <span
                key={`${item.id}-${tag}`}
                className="inline-flex rounded-full border border-zinc-300 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-zinc-700"
              >
                {tag}
              </span>
            ))}
          </div>
          <Link
            href={item.href}
            target={isExternalLink ? "_blank" : undefined}
            rel={isExternalLink ? "noreferrer" : undefined}
            className="mt-2 inline-flex w-fit font-helvetica-condensed text-base font-black uppercase text-zinc-900 underline underline-offset-4 transition-all duration-200 hover:underline-offset-8"
          >
            {isExternalLink ? "Acessar conteudo" : "Ler pagina institucional"}
          </Link>
        </div>
      </div>
    </article>
  );
}
