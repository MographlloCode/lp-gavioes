import Link from "next/link";

import { NewsDesktopMosaic } from "./NewsDesktopMosaic";
import { NewsColumn } from "./NewsColumn";
import { newsItems } from "./newsData";

export function News() {
  return (
    <section className="flex w-full flex-col gap-6 px-4 sm:px-6 md:px-8">
      <h1 className="font-helvetica-condensed text-4xl font-black uppercase sm:text-5xl">Notícias</h1>

      <div className="lg:hidden">
        <NewsColumn />
      </div>

      <NewsDesktopMosaic items={newsItems} />

      <Link
        href="/noticias"
        className="hidden font-helvetica-condensed text-2xl font-black uppercase underline underline-offset-4 transition-all duration-400 ease-in-out hover:underline-offset-8 lg:inline-flex"
      >
        Ver mais notícias
      </Link>
    </section>
  );
}
