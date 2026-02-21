import Link from "next/link";

import { NewsAdsBanner } from "../NewsCatalog/NewsAdsBanner";
import { getInstitutionalCatalogTags } from "./institutionalCatalogData";
import { InstitutionalCatalogCard } from "./InstitutionalCatalogCard";
import { InstitutionalCatalogPagination } from "./InstitutionalCatalogPagination";
import { InstitutionalCatalogSearch } from "./InstitutionalCatalogSearch";
import type { InstitutionalCatalogItem } from "./types";

type InstitutionalCatalogSectionProps = {
  items: InstitutionalCatalogItem[];
  query: string;
  selectedTag: string;
  currentPage: number;
  totalPages: number;
  totalResults: number;
  totalItems: number;
};

const premiumBanner = {
  id: "institutional-catalog-premium",
  label: "Banner premium",
  size: "970x250",
  description:
    "Espaco principal para campanhas de marca dentro do catalogo institucional.",
  href: "https://gavioes.com.br/noticias.php",
  cta: "Quero anunciar",
};

const sideBanner = {
  id: "institutional-catalog-side",
  label: "Destaque lateral",
  size: "300x250",
  description:
    "Posicao lateral dedicada para comunicacao institucional e acoes patrocinadas.",
  href: "https://gavioes.com.br/noticias.php",
  cta: "Reservar espaco",
};

function normalizeText(value: string) {
  return value
    .toLocaleLowerCase("pt-BR")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function buildTagHref(tag: string, query: string) {
  const params = new URLSearchParams();

  if (query) {
    params.set("q", query);
  }

  params.set("tag", tag);

  const queryString = params.toString();
  return queryString ? `/institucional?${queryString}` : "/institucional";
}

function buildClearHref(query: string) {
  const params = new URLSearchParams();

  if (query) {
    params.set("q", query);
  }

  const queryString = params.toString();
  return queryString ? `/institucional?${queryString}` : "/institucional";
}

export function InstitutionalCatalogSection({
  items,
  query,
  selectedTag,
  currentPage,
  totalPages,
  totalResults,
  totalItems,
}: InstitutionalCatalogSectionProps) {
  const tags = getInstitutionalCatalogTags();
  const normalizedSelectedTag = normalizeText(selectedTag);
  const clearFiltersHref = "/institucional";
  const clearTagHref = buildClearHref(query);

  return (
    <section className="w-full bg-zinc-100 px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
      <div className="mx-auto flex w-full max-w-[1240px] flex-col gap-6">
        <NewsAdsBanner slot={premiumBanner} />

        <header className="rounded-sm border border-zinc-200 bg-white p-4 sm:p-5">
          <h1 className="font-helvetica-condensed text-4xl leading-tight font-black uppercase text-zinc-950 sm:text-5xl">
            Catalogo institucional
          </h1>
          <p className="mt-2 text-sm leading-relaxed text-zinc-700">
            Conteudos institucionais oficiais com busca, filtros por tags e
            navegacao paginada.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_360px]">
          <InstitutionalCatalogSearch
            initialQuery={query}
            totalResults={totalResults}
            totalItems={totalItems}
          />

          <div className="rounded-sm border border-zinc-200 bg-white p-4 sm:p-5">
            <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
              Topicos institucionais
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              <Link
                href={clearTagHref}
                className={`inline-flex rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wide transition-colors duration-200 ${
                  selectedTag
                    ? "border-zinc-300 text-zinc-700 hover:border-zinc-500 hover:text-zinc-950"
                    : "border-zinc-900 bg-zinc-900 text-white"
                }`}
              >
                Todos
              </Link>
              {tags.map((tag) => {
                const isSelected = normalizeText(tag) === normalizedSelectedTag;

                return (
                  <Link
                    key={tag}
                    href={buildTagHref(tag, query)}
                    className={`inline-flex rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wide transition-colors duration-200 ${
                      isSelected
                        ? "border-zinc-900 bg-zinc-900 text-white"
                        : "border-zinc-300 text-zinc-700 hover:border-zinc-500 hover:text-zinc-950"
                    }`}
                  >
                    {tag}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        <div className="grid w-full grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-8">
          <div className="flex min-w-0 flex-col gap-5">
            {items.length ? (
              <section className="flex flex-col gap-4">
                {items.map((item) => (
                  <InstitutionalCatalogCard key={item.id} item={item} />
                ))}
              </section>
            ) : (
              <section className="rounded-sm border border-zinc-200 bg-white p-6 text-center">
                <h2 className="font-helvetica-condensed text-3xl font-black uppercase text-zinc-950">
                  Nenhum conteudo encontrado
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                  Tente ajustar a busca ou trocar a tag selecionada.
                </p>
                <Link
                  href={clearFiltersHref}
                  className="mt-4 inline-flex rounded-sm bg-zinc-900 px-4 py-2 font-helvetica-condensed text-base font-black uppercase text-white transition-colors duration-200 hover:bg-zinc-700"
                >
                  Limpar filtros
                </Link>
              </section>
            )}

            <InstitutionalCatalogPagination
              currentPage={currentPage}
              totalPages={totalPages}
              query={query}
              tag={selectedTag}
            />
          </div>

          <aside className="lg:sticky lg:top-32">
            <NewsAdsBanner slot={sideBanner} variant="rail" />
          </aside>
        </div>
      </div>
    </section>
  );
}
