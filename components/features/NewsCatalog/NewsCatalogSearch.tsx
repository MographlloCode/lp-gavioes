"use client";

import { FormEvent, useCallback, useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { BiSearch, BiX } from "react-icons/bi";

type NewsCatalogSearchProps = {
  initialQuery: string;
  totalResults: number;
  totalItems: number;
};

const SEARCH_DEBOUNCE_MS = 500;

export function NewsCatalogSearch({
  initialQuery,
  totalResults,
  totalItems,
}: NewsCatalogSearchProps) {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [query, setQuery] = useState(initialQuery);

  useEffect(() => {
    setQuery(initialQuery);
  }, [initialQuery]);

  const updateQuery = useCallback(
    (nextQuery: string, mode: "push" | "replace" = "push") => {
      const params = new URLSearchParams(searchParams.toString());
      const trimmedQuery = nextQuery.trim();

      if (trimmedQuery) {
        params.set("q", trimmedQuery);
      } else {
        params.delete("q");
      }

      params.delete("page");

      const queryString = params.toString();
      const nextHref = queryString ? `${pathname}?${queryString}` : pathname;
      const currentQueryString = searchParams.toString();
      const currentHref = currentQueryString
        ? `${pathname}?${currentQueryString}`
        : pathname;

      if (nextHref === currentHref) {
        return;
      }

      if (mode === "replace") {
        router.replace(nextHref);
        return;
      }

      router.push(nextHref);
    },
    [pathname, router, searchParams],
  );

  useEffect(() => {
    if (query.trim() === initialQuery.trim()) {
      return;
    }

    const timeoutId = window.setTimeout(() => {
      updateQuery(query, "replace");
    }, SEARCH_DEBOUNCE_MS);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [initialQuery, query, updateQuery]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    updateQuery(query, "push");
  }

  function handleClear() {
    setQuery("");
    updateQuery("", "push");
  }

  return (
    <section className="rounded-sm border border-zinc-200 bg-white p-4 sm:p-5">
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
        <label htmlFor="news-search" className="sr-only">
          Buscar notícias
        </label>
        <div className="relative flex-1">
          <BiSearch
            aria-hidden="true"
            className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500"
            size={18}
          />
          <input
            id="news-search"
            name="q"
            type="search"
            placeholder="Busque por tema, título, fonte ou palavra-chave"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            className="h-11 w-full rounded-sm border border-zinc-300 bg-white pl-10 pr-11 text-sm text-zinc-800 outline-none transition-colors duration-200 placeholder:text-zinc-500 focus:border-zinc-600"
          />
          {query ? (
            <button
              type="button"
              onClick={handleClear}
              aria-label="Limpar busca"
              className="absolute right-2 top-1/2 inline-flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full text-zinc-500 transition-colors duration-200 hover:bg-zinc-100 hover:text-zinc-800"
            >
              <BiX size={18} />
            </button>
          ) : null}
        </div>
        <button
          type="submit"
          className="inline-flex h-11 items-center justify-center rounded-sm bg-zinc-900 px-5 font-helvetica-condensed text-base font-black uppercase text-white transition-colors duration-200 hover:bg-zinc-700"
        >
          Buscar
        </button>
      </form>

      <p className="mt-3 text-sm text-zinc-600">
        {initialQuery
          ? `${totalResults} resultado(s) para "${initialQuery}" em ${totalItems} notícia(s) cadastradas`
          : `${totalItems} notícia(s) disponíveis para leitura`}
      </p>
    </section>
  );
}
