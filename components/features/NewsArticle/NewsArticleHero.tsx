import Image from "next/image";

import type { NewsArticleHero as NewsArticleHeroData } from "./types";

type NewsArticleHeroProps = {
  hero: NewsArticleHeroData;
};

export function NewsArticleHero({ hero }: NewsArticleHeroProps) {
  return (
    <figure className="overflow-hidden rounded-sm">
      <div className="relative aspect-[16/9] w-full">
        <Image
          src={hero.src}
          alt={hero.alt}
          fill
          sizes="(min-width: 1024px) 760px, 100vw"
          className="object-cover"
        />
      </div>
      <figcaption className="flex flex-col gap-2 px-2 py-3 text-xs leading-relaxed text-zinc-600 sm:px-3 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
        <span>{hero.caption}</span>
        <span className="font-medium text-zinc-500">{hero.credit}</span>
      </figcaption>
    </figure>
  );
}
