import type { NewsArticle } from "./types";

type NewsArticleBodyProps = {
  article: NewsArticle;
};

export function NewsArticleBody({ article }: NewsArticleBodyProps) {
  return (
    <div className="flex flex-col gap-6 text-[1.08rem] leading-8 text-zinc-800">
      <p className="text-xl leading-relaxed text-zinc-700">{article.lead}</p>

      {article.body.map((block, index) => {
        const key = `${block.type}-${index}`;

        if (block.type === "paragraph") {
          return <p key={key}>{block.content}</p>;
        }

        if (block.type === "subheading") {
          return (
            <h3
              key={key}
              className="pt-2 font-helvetica-condensed text-3xl leading-tight font-black uppercase text-zinc-950"
            >
              {block.content}
            </h3>
          );
        }

        if (block.type === "quote") {
          return (
            <blockquote
              key={key}
              className="border-l-4 border-red-700 bg-zinc-50 px-4 py-3 text-zinc-700 italic"
            >
              <p>{block.content}</p>
              {block.author ? (
                <cite className="mt-3 block text-sm not-italic text-zinc-500">
                  {block.author}
                </cite>
              ) : null}
            </blockquote>
          );
        }

        return (
          <ul
            key={key}
            className="list-disc space-y-2 pl-6 marker:text-red-700"
            aria-label="Pontos principais da notícia"
          >
            {block.items.map((item, itemIndex) => (
              <li key={`${item}-${itemIndex}`}>{item}</li>
            ))}
          </ul>
        );
      })}
    </div>
  );
}
