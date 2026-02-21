import Image from "next/image";
import Link from "next/link";
import { BiLinkExternal } from "react-icons/bi";

import type { NewsArticleRelatedItem } from "./types";

type NewsArticleRecommendationsProps = {
  items: NewsArticleRelatedItem[];
};

function isExternalHref(href: string) {
  return href.startsWith("http://") || href.startsWith("https://");
}

export function NewsArticleRecommendations({
  items,
}: NewsArticleRecommendationsProps) {
  if (!items.length) {
    return null;
  }

  return (
    <section className="flex flex-col gap-4 border-b border-zinc-200 pb-6">
      <h3 className="font-helvetica-condensed text-3xl font-black uppercase text-zinc-950">
        Recomendado para você
      </h3>

      <div className="flex flex-col gap-3">
        {items.slice(0, 3).map((item, index) => {
          const external = isExternalHref(item.href);
          const hasExternalImage =
            (item.imageSrc ?? "").startsWith("http://") ||
            (item.imageSrc ?? "").startsWith("https://");
          const description =
            item.description ??
            "Aprofunde a leitura com uma matéria relacionada ao tema desta notícia.";
          const imageSrc = item.imageSrc ?? "/gavioes_torcida_2.png";
          const imageAlt = item.imageAlt ?? item.title;

          return (
            <Link
              key={`${item.title}-${index}`}
              href={item.href}
              target={external ? "_blank" : undefined}
              rel={external ? "noreferrer" : undefined}
              className="group grid grid-cols-[120px_1fr] gap-3 rounded-sm border border-zinc-200 bg-zinc-50 p-3 transition-colors duration-200 hover:border-zinc-400 hover:bg-zinc-100 sm:grid-cols-[164px_1fr] sm:gap-4 sm:p-4"
            >
              <div className="relative h-full min-h-[92px] overflow-hidden rounded-sm sm:min-h-[108px]">
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  fill
                  sizes="(min-width: 640px) 164px, 120px"
                  unoptimized={hasExternalImage}
                  referrerPolicy="no-referrer"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <div className="flex h-full flex-col gap-2">
                {item.kicker ? (
                  <p className="text-[11px] font-semibold uppercase tracking-wide text-red-700">
                    {item.kicker}
                  </p>
                ) : null}
                <h4 className="font-helvetica-condensed text-lg leading-tight font-black uppercase text-zinc-950 sm:text-2xl">
                  {item.title}
                </h4>
                <p className="text-sm leading-relaxed text-zinc-700">{description}</p>
                <span className="mt-auto inline-flex w-fit items-center gap-1 rounded-sm border border-zinc-900 px-3 py-1.5 font-helvetica-condensed text-sm font-black uppercase text-zinc-900 transition-all duration-200 group-hover:gap-2 group-hover:bg-zinc-900 group-hover:text-white">
                  Ler recomendação
                  {external ? <BiLinkExternal aria-hidden="true" size={15} /> : null}
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
