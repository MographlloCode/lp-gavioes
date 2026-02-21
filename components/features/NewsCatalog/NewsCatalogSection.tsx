import Link from "next/link";

import {
  getNewsCatalogTags,
  newsAdSlots,
  newsCatalogItems,
} from "./newsCatalogData";
import { NewsAdsBanner } from "./NewsAdsBanner";
import { NewsAdsRail } from "./NewsAdsRail";
import { NewsCatalogCard } from "./NewsCatalogCard";
import { NewsCatalogMosaic } from "./NewsCatalogMosaic";
import { NewsCatalogPagination } from "./NewsCatalogPagination";
import { NewsCatalogSearch } from "./NewsCatalogSearch";
import type { NewsCatalogItem } from "./types";

type NewsCatalogSectionProps = {
  featuredItems: NewsCatalogItem[];
  items: NewsCatalogItem[];
  query: string;
  currentPage: number;
  totalPages: number;
  totalResults: number;
};

export function NewsCatalogSection({
  featuredItems,
  items,
  query,
  currentPage,
  totalPages,
  totalResults,
}: NewsCatalogSectionProps) {
  const tags = getNewsCatalogTags();
  const [heroAdSlot, ...railAdSlots] = newsAdSlots;
  const clearSearchHref = "/noticias";

  return (
    <section className="w-full bg-zinc-100 px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
      <div className="mx-auto flex w-full max-w-[1240px] flex-col gap-6">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_360px]">
          <NewsCatalogSearch
            initialQuery={query}
            totalResults={totalResults}
            totalItems={newsCatalogItems.length}
          />

          <div className="rounded-sm border border-zinc-200 bg-white p-4 sm:p-5">
            <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
              Tópicos em alta
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <Link
                  key={tag}
                  href={`/noticias?q=${encodeURIComponent(tag)}`}
                  className={`inline-flex rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wide transition-colors duration-200 ${
                    query.toLocaleLowerCase("pt-BR") ===
                    tag.toLocaleLowerCase("pt-BR")
                      ? "border-zinc-900 bg-zinc-900 text-white"
                      : "border-zinc-300 text-zinc-700 hover:border-zinc-500 hover:text-zinc-950"
                  }`}
                >
                  {tag}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <NewsCatalogMosaic items={featuredItems} />
        {heroAdSlot ? <NewsAdsBanner slot={heroAdSlot} /> : null}

        <div className="grid w-full grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-8">
          <div className="flex min-w-0 flex-col gap-5">
            {items.length ? (
              <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                {items.map((item) => (
                  <NewsCatalogCard key={item.id} item={item} />
                ))}
              </div>
            ) : (
              <section className="rounded-sm border border-zinc-200 bg-white p-6 text-center">
                <h2 className="font-helvetica-condensed text-3xl font-black uppercase text-zinc-950">
                  Nenhuma notícia encontrada
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                  Tente ajustar os termos da busca para encontrar outros assuntos.
                </p>
                <Link
                  href={clearSearchHref}
                  className="mt-4 inline-flex rounded-sm bg-zinc-900 px-4 py-2 font-helvetica-condensed text-base font-black uppercase text-white transition-colors duration-200 hover:bg-zinc-700"
                >
                  Limpar filtros
                </Link>
              </section>
            )}

            <NewsCatalogPagination
              currentPage={currentPage}
              totalPages={totalPages}
              query={query}
            />
          </div>

          <NewsAdsRail slots={railAdSlots} />
        </div>
      </div>
    </section>
  );
}
