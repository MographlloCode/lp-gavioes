import Link from "next/link";

import { NewsAdsBanner } from "../NewsCatalog/NewsAdsBanner";
import { NewsArticleBody } from "./NewsArticleBody";
import { NewsArticleBreadcrumb } from "./NewsArticleBreadcrumb";
import { NewsArticleHeader } from "./NewsArticleHeader";
import { NewsArticleHero } from "./NewsArticleHero";
import { NewsArticleRecommendations } from "./NewsArticleRecommendations";
import { NewsArticleShareBar } from "./NewsArticleShareBar";
import { NewsArticleSidebar } from "./NewsArticleSidebar";
import type { NewsArticle } from "./types";

type NewsArticleTemplateProps = {
  article: NewsArticle;
};

export function NewsArticleTemplate({ article }: NewsArticleTemplateProps) {
  const premiumTopSlot = {
    id: "article-premium-top",
    label: "Banner premium",
    size: "970x250",
    description:
      "Espaço nobre para campanhas com máxima visibilidade na abertura da matéria.",
    href: "https://gavioes.com.br/noticias.php",
    cta: "Anuncie com a gente",
  };

  const inlineArticleSlot = {
    id: "article-inline-mid",
    label: "Destaque publicitário",
    size: "728x90",
    description:
      "Formato estratégico para divulgar produtos, ações e ativações de marca.",
    href: "https://gavioes.com.br/noticias.php",
    cta: "Reservar espaço",
  };

  const recommendedItems = (
    article.recommendations?.length
      ? article.recommendations
      : [...article.related, ...article.mostRead]
  )
    .filter(
      (item, index, items) =>
        items.findIndex((candidate) => candidate.title === item.title) === index,
    )
    .slice(0, 3);

  return (
    <main className="w-full pt-28 sm:pt-32">
      <section className="w-full bg-white text-zinc-900">
        <div className="mx-auto w-full max-w-[1240px] px-4 pt-8 sm:px-6 lg:px-8 lg:pt-10">
          <NewsAdsBanner slot={premiumTopSlot} />
        </div>

        <div className="mx-auto grid w-full max-w-[1240px] grid-cols-1 gap-8 px-4 py-8 sm:px-6 lg:grid-cols-[56px_minmax(0,1fr)_320px] lg:gap-8 lg:px-8 lg:py-10">
          <NewsArticleShareBar orientation="vertical" />

          <article className="min-w-0">
            <div className="mx-auto flex w-full max-w-[760px] flex-col gap-8">
              <NewsArticleBreadcrumb items={article.breadcrumb} />
              <NewsArticleHeader article={article} />
              <NewsArticleHero hero={article.hero} />

              <div className="lg:hidden">
                <NewsArticleShareBar orientation="horizontal" />
              </div>

              <NewsArticleBody article={article} />

              <section className="border-t border-zinc-200 pt-5">
                <h3 className="font-helvetica-condensed text-2xl font-black uppercase text-zinc-950">
                  Assuntos relacionados
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {article.tags.map((tag) => (
                    <Link
                      key={tag}
                      href={`/noticias?q=${encodeURIComponent(tag)}`}
                      className="rounded-full border border-zinc-300 px-3 py-1 text-xs font-medium text-zinc-700 transition-colors duration-200 hover:border-zinc-500 hover:text-zinc-950"
                    >
                      {tag}
                    </Link>
                  ))}
                </div>
              </section>

              <NewsAdsBanner slot={inlineArticleSlot} variant="rail" />

              <NewsArticleRecommendations items={recommendedItems} />
            </div>
          </article>

          <NewsArticleSidebar related={article.related} mostRead={article.mostRead} />
        </div>
      </section>
    </main>
  );
}
