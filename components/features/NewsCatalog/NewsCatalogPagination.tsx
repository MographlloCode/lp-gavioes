import Link from "next/link";

type NewsCatalogPaginationProps = {
  currentPage: number;
  totalPages: number;
  query: string;
};

function getVisiblePages(currentPage: number, totalPages: number) {
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, index) => index + 1);
  }

  const pages = [1, currentPage - 1, currentPage, currentPage + 1, totalPages]
    .filter((page) => page >= 1 && page <= totalPages)
    .sort((a, b) => a - b);

  const uniquePages = [...new Set(pages)];
  const result: Array<number | "..."> = [];

  uniquePages.forEach((page, index) => {
    const previousPage = uniquePages[index - 1];
    if (previousPage && page - previousPage > 1) {
      result.push("...");
    }
    result.push(page);
  });

  return result;
}

function buildPageHref(page: number, query: string) {
  const params = new URLSearchParams();

  if (query) {
    params.set("q", query);
  }

  if (page > 1) {
    params.set("page", String(page));
  }

  const queryString = params.toString();
  return queryString ? `/noticias?${queryString}` : "/noticias";
}

export function NewsCatalogPagination({
  currentPage,
  totalPages,
  query,
}: NewsCatalogPaginationProps) {
  if (totalPages <= 1) {
    return null;
  }

  const visiblePages = getVisiblePages(currentPage, totalPages);

  return (
    <nav
      className="flex flex-wrap items-center gap-2 rounded-sm border border-zinc-200 bg-white p-3 sm:p-4"
      aria-label="Paginação de notícias"
    >
      <Link
        href={buildPageHref(Math.max(1, currentPage - 1), query)}
        aria-disabled={currentPage === 1}
        className={`inline-flex h-9 items-center justify-center rounded-sm px-3 text-sm font-semibold transition-colors duration-200 ${
          currentPage === 1
            ? "pointer-events-none bg-zinc-100 text-zinc-400"
            : "bg-zinc-900 text-white hover:bg-zinc-700"
        }`}
      >
        Anterior
      </Link>

      {visiblePages.map((pageItem, index) => {
        if (pageItem === "...") {
          return (
            <span
              key={`ellipsis-${index}`}
              className="inline-flex h-9 items-center justify-center px-1 text-sm text-zinc-500"
            >
              ...
            </span>
          );
        }

        const isCurrentPage = pageItem === currentPage;
        return (
          <Link
            key={`page-${pageItem}`}
            href={buildPageHref(pageItem, query)}
            aria-current={isCurrentPage ? "page" : undefined}
            className={`inline-flex h-9 min-w-9 items-center justify-center rounded-sm border px-3 text-sm font-semibold transition-colors duration-200 ${
              isCurrentPage
                ? "border-zinc-900 bg-zinc-900 text-white"
                : "border-zinc-300 text-zinc-700 hover:border-zinc-500 hover:text-zinc-900"
            }`}
          >
            {pageItem}
          </Link>
        );
      })}

      <Link
        href={buildPageHref(Math.min(totalPages, currentPage + 1), query)}
        aria-disabled={currentPage === totalPages}
        className={`inline-flex h-9 items-center justify-center rounded-sm px-3 text-sm font-semibold transition-colors duration-200 ${
          currentPage === totalPages
            ? "pointer-events-none bg-zinc-100 text-zinc-400"
            : "bg-zinc-900 text-white hover:bg-zinc-700"
        }`}
      >
        Próxima
      </Link>
    </nav>
  );
}
