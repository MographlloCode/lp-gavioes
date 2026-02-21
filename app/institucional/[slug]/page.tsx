import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { InstitutionalPageTemplate } from "@/components/features/InstitutionalPage/InstitutionalPageTemplate";
import {
  getInstitutionalPageBySlug,
  institutionalPages,
} from "@/components/features/InstitutionalPage/institutionalPageData";

type InstitutionalSlugPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return institutionalPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({
  params,
}: InstitutionalSlugPageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getInstitutionalPageBySlug(slug);

  if (!page) {
    return {
      title: "Pagina institucional nao encontrada | Gavioes da Fiel",
    };
  }

  return {
    title: `${page.title} | Gavioes da Fiel`,
    description: page.description,
  };
}

export default async function InstitutionalSlugPage({
  params,
}: InstitutionalSlugPageProps) {
  const { slug } = await params;
  const page = getInstitutionalPageBySlug(slug);

  if (!page) {
    notFound();
  }

  return <InstitutionalPageTemplate page={page} />;
}
