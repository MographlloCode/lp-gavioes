import Image from "next/image";
import Link from "next/link";

import type { NewsCatalogItem } from "./types";

type NewsCatalogMosaicCardProps = {
  item: NewsCatalogItem;
  featured?: boolean;
};

function NewsCatalogMosaicCard({
  item,
  featured = false,
}: NewsCatalogMosaicCardProps) {
  const isExternalImage =
    item.imageSrc.startsWith("http://") || item.imageSrc.startsWith("https://");
  const isExternalLink =
    item.href.startsWith("http://") || item.href.startsWith("https://");

  return (
    <article
      className={`group relative overflow-hidden rounded-sm ${
        featured ? "min-h-[30rem] sm:min-h-[34rem]" : "min-h-[15rem] sm:min-h-[16.5rem]"
      }`}
    >
      <Image
        src={item.imageSrc}
        alt={item.imageAlt}
        fill
        sizes={featured ? "(min-width: 1024px) 50vw" : "(min-width: 1024px) 45vw"}
        unoptimized={isExternalImage}
        referrerPolicy="no-referrer"
        className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent" />

      <div
        className={`absolute inset-x-0 bottom-0 z-10 flex flex-col ${
          featured ? "gap-3 p-6 sm:p-8" : "gap-2 p-5 sm:p-6"
        }`}
      >
        <p className="text-xs font-light uppercase tracking-wide text-zinc-300">
          {item.tag}
        </p>
        <h2
          className={`font-helvetica-condensed font-bold uppercase text-white ${
            featured ? "text-4xl leading-[0.95] sm:text-5xl" : "text-3xl leading-none sm:text-4xl"
          }`}
        >
          {item.title}
        </h2>
        <p className={`text-zinc-200 ${featured ? "text-sm" : "text-xs"}`}>
          {item.description}
        </p>
      </div>

      <Link
        href={item.href}
        target={isExternalLink ? "_blank" : undefined}
        rel={isExternalLink ? "noreferrer" : undefined}
        className="absolute inset-0 z-20"
        aria-label={`Abrir notícia: ${item.title}`}
      />
    </article>
  );
}

type NewsCatalogMosaicProps = {
  items: NewsCatalogItem[];
};

export function NewsCatalogMosaic({ items }: NewsCatalogMosaicProps) {
  const [featured, ...rest] = items;
  const secondaryItems = rest.slice(0, 2);

  if (!featured || secondaryItems.length < 2) {
    return null;
  }

  return (
    <section className="flex flex-col gap-3">
      <h2 className="font-helvetica-condensed text-3xl font-black uppercase text-zinc-950 sm:text-4xl">
        Destaques
      </h2>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-[1.15fr_1fr]">
        <NewsCatalogMosaicCard item={featured} featured />
        <div className="flex flex-col gap-4">
          {secondaryItems.map((item) => (
            <NewsCatalogMosaicCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
