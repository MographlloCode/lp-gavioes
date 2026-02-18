import Image from "next/image";
import Link from "next/link";

import type { NewsItem } from "./newsData";

type NewsDesktopCardProps = {
  item: NewsItem;
  featured?: boolean;
};

function NewsDesktopCard({ item, featured = false }: NewsDesktopCardProps) {
  return (
    <article
      className={`group relative overflow-hidden rounded-sm ${
        featured ? "min-h-[34rem]" : "min-h-[16.5rem]"
      }`}
    >
      <Image
        src={item.imageSrc}
        alt={item.imageAlt}
        fill
        sizes={featured ? "(min-width: 1024px) 50vw" : "(min-width: 1024px) 45vw"}
        className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent" />

      <div className={`absolute inset-x-0 bottom-0 z-10 flex flex-col ${featured ? "gap-3 p-8" : "gap-2 p-6"}`}>
        <p className="text-xs font-light uppercase tracking-wide text-zinc-300">{item.tag}</p>
        <h2
          className={`font-helvetica-condensed font-bold uppercase text-white ${
            featured ? "text-5xl leading-[0.95]" : "text-4xl leading-none"
          }`}
        >
          {item.title}
        </h2>
        <p className={`text-zinc-200 ${featured ? "text-sm" : "text-xs"}`}>{item.description}</p>
      </div>

      <Link href={item.href} className="absolute inset-0 z-20" aria-label={`Abrir notícia: ${item.title}`} />
    </article>
  );
}

type NewsDesktopMosaicProps = {
  items: NewsItem[];
};

export function NewsDesktopMosaic({ items }: NewsDesktopMosaicProps) {
  const [featured, ...rest] = items;
  const secondaryItems = rest.slice(0, 2);

  if (!featured || secondaryItems.length === 0) {
    return null;
  }

  return (
    <div className="hidden lg:grid lg:grid-cols-[1.15fr_1fr] lg:gap-4">
      <NewsDesktopCard item={featured} featured />

      <div className="flex flex-col gap-4">
        {secondaryItems.map((item) => (
          <NewsDesktopCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
