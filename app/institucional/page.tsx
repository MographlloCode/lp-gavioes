import type { Metadata } from "next";

import { InstitutionalCatalogSection } from "@/components/features/InstitutionalCatalog/InstitutionalCatalogSection";
import {
  institutionalCatalogItems,
  searchInstitutionalCatalogItems,
} from "@/components/features/InstitutionalCatalog/institutionalCatalogData";

const ITEMS_PER_PAGE = 6;

type InstitutionalPageProps = {
  searchParams: Promise<{
    q?: string;
    tag?: string;
    page?: string;
  }>;
};

export const metadata: Metadata = {
  title: "Institucional | Gavioes da Fiel",
  description:
    "Catalogo institucional da Gavioes da Fiel com busca, tags e paginacao.",
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

export default async function InstitutionalPage({
  searchParams,
}: InstitutionalPageProps) {
  const params = await searchParams;
  const query = (params.q ?? "").trim();
  const selectedTag = (params.tag ?? "").trim();
  const requestedPage = getRequestedPage(params.page);

  const filteredItems = searchInstitutionalCatalogItems(query, selectedTag);
  const totalResults = filteredItems.length;
  const totalPages = Math.max(1, Math.ceil(totalResults / ITEMS_PER_PAGE));
  const currentPage = Math.min(requestedPage, totalPages);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedItems = filteredItems.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <main className="w-full pt-28 sm:pt-32">
      <InstitutionalCatalogSection
        items={paginatedItems}
        query={query}
        selectedTag={selectedTag}
        currentPage={currentPage}
        totalPages={totalPages}
        totalResults={totalResults}
        totalItems={institutionalCatalogItems.length}
      />
    </main>
  );
}
