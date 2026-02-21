import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { NewsArticleTemplate } from "@/components/features/NewsArticle/NewsArticleTemplate";
import {
  getNewsArticleBySlug,
  newsArticles,
} from "@/components/features/NewsArticle/newsArticleData";

type NewsArticlePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return newsArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: NewsArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getNewsArticleBySlug(slug);

  if (!article) {
    return {
      title: "Notícia não encontrada | Gaviões da Fiel",
    };
  }

  return {
    title: `${article.title} | Gaviões da Fiel`,
    description: article.subtitle,
  };
}

export default async function NewsArticlePage({ params }: NewsArticlePageProps) {
  const { slug } = await params;
  const article = getNewsArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  return <NewsArticleTemplate article={article} />;
}
