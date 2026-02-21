import type { NewsArticle } from "./types";

type NewsArticleHeaderProps = {
  article: NewsArticle;
};

export function NewsArticleHeader({ article }: NewsArticleHeaderProps) {
  return (
    <header className="flex flex-col gap-4 border-b border-zinc-200 pb-6">
      <p className="font-helvetica-condensed text-sm font-black uppercase tracking-wide text-red-700 sm:text-base">
        {article.section}
      </p>

      <h1 className="font-helvetica-condensed text-4xl leading-tight font-black uppercase text-zinc-950 sm:text-5xl">
        {article.title}
      </h1>

      <h2 className="text-lg leading-relaxed text-zinc-700 sm:text-xl">
        {article.subtitle}
      </h2>

      <div className="flex flex-col gap-2 text-sm text-zinc-600">
        <p>
          <span className="font-bold text-zinc-900">{article.author}</span>{" "}
          <span>- {article.location}</span>{" "}
          <span className="font-medium text-zinc-500">| {article.readTime}</span>
        </p>
        <p>
          Publicado em {article.publishedAt}
          {article.updatedAt ? ` • Atualizado em ${article.updatedAt}` : ""}
        </p>
      </div>
    </header>
  );
}
