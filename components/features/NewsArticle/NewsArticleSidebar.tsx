import Link from "next/link";

import { NewsAdsBanner } from "../NewsCatalog/NewsAdsBanner";
import type { NewsArticleRelatedItem } from "./types";

type NewsArticleSidebarProps = {
  related: NewsArticleRelatedItem[];
  mostRead: NewsArticleRelatedItem[];
};

export function NewsArticleSidebar({ related, mostRead }: NewsArticleSidebarProps) {
  const sidebarAdSlot = {
    id: "article-sidebar-ad",
    label: "Banner premium",
    size: "300x250",
    description:
      "Espaço lateral com alta visibilidade para campanhas e ativações de marca.",
    href: "https://gavioes.com.br/noticias.php",
    cta: "Anunciar aqui",
  };

  return (
    <aside className="flex flex-col gap-6 lg:sticky lg:top-32">
      <section className="rounded-sm border border-zinc-200 bg-white p-4">
        <h3 className="font-helvetica-condensed text-2xl font-black uppercase text-zinc-950">
          Leia também
        </h3>
        <div className="mt-4 flex flex-col gap-4">
          {related.map((item, index) => (
            <article key={`${item.title}-${index}`} className="flex flex-col gap-1">
              {item.kicker ? (
                <p className="text-xs font-semibold uppercase tracking-wide text-red-700">
                  {item.kicker}
                </p>
              ) : null}
              <Link
                href={item.href}
                className="text-sm leading-relaxed text-zinc-800 transition-colors duration-200 hover:text-zinc-950 hover:underline"
              >
                {item.title}
              </Link>
              {item.timestamp ? (
                <p className="text-xs text-zinc-500">{item.timestamp}</p>
              ) : null}
            </article>
          ))}
        </div>
      </section>

      <NewsAdsBanner slot={sidebarAdSlot} variant="rail" />

      <section className="rounded-sm border border-zinc-200 bg-white p-4">
        <h3 className="font-helvetica-condensed text-2xl font-black uppercase text-zinc-950">
          Mais lidas
        </h3>
        <ol className="mt-4 flex list-decimal flex-col gap-3 pl-5">
          {mostRead.map((item, index) => (
            <li key={`${item.title}-${index}`} className="pl-1 text-sm leading-relaxed">
              <Link
                href={item.href}
                className="text-zinc-800 transition-colors duration-200 hover:text-zinc-950 hover:underline"
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ol>
      </section>
    </aside>
  );
}
