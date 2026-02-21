import { Fragment } from "react";
import Link from "next/link";

import { newsItems } from "./newsData";
import { NewsArticleCard } from "./NewsArticleCard";

export function NewsColumn() {
  return (
    <div className="flex w-full flex-col gap-6 sm:gap-8">
      {newsItems.map((item, index) => (
        <Fragment key={item.id}>
          <NewsArticleCard item={item} featured={index === 0} />
          {index < newsItems.length - 1 && <span className="h-px w-full bg-zinc-800" />}
        </Fragment>
      ))}

      <Link
        href="https://gavioes.com.br/noticias.php"
        className="font-helvetica-condensed text-xl font-black uppercase underline underline-offset-4 transition-all duration-400 ease-in-out hover:underline-offset-8 sm:text-2xl"
      >
        Ver mais notícias
      </Link>
    </div>
  );
}
