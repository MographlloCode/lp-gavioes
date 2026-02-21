import type { Metadata } from "next";

import { NewsCatalogSection } from "@/components/features/NewsCatalog/NewsCatalogSection";
import { searchNewsCatalogItems } from "@/components/features/NewsCatalog/newsCatalogData";

const ITEMS_PER_PAGE = 6;

type NoticiasPageProps = {
  searchParams: Promise<{
    q?: string;
    page?: string;
  }>;
};

export const metadata: Metadata = {
  title: "Notícias | Gaviões da Fiel",
  description:
    "Central de notícias da Gaviões da Fiel com busca, paginação e destaques da torcida.",
};

function getRequestedPage(rawPage?: string) {
  if (!rawPage) {
    return 1;
  }

  const parsedPage = Number.parseInt(rawPage, 10);
  if (!Number.isFinite(parsedPage) || parsedPage < 1) {
    return 1;
  }

  return parsedPage;
}

export default async function NoticiasPage({ searchParams }: NoticiasPageProps) {
  const params = await searchParams;
  const query = (params.q ?? "").trim();
  const requestedPage = getRequestedPage(params.page);

  const filteredItems = searchNewsCatalogItems(query);
  const totalResults = filteredItems.length;
  const totalPages = Math.max(1, Math.ceil(totalResults / ITEMS_PER_PAGE));
  const currentPage = Math.min(requestedPage, totalPages);
  const featuredItems = filteredItems.slice(0, 3);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedItems = filteredItems.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <main className="w-full pt-28 sm:pt-32">
      <NewsCatalogSection
        featuredItems={featuredItems}
        items={paginatedItems}
        query={query}
        currentPage={currentPage}
        totalPages={totalPages}
        totalResults={totalResults}
      />
    </main>
  );
}
