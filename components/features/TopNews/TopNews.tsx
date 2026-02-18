"use client";

import { useState } from "react";
import { TopNewsImage } from "./TopNewsImage";
import { TopNewsItem } from "./TopNewsItem";
import { TopNewsNav } from "./TopNewsNav";

const news = [
  {
    id: "topnews_01",
    tag: "torcida",
    title: "Torcida do Corinthians prepara festa especial para Supercopa",
    tldr:
      "A Gaviões da Fiel, principal torcida organizada do Corinthians, prepara uma festa especial para o duelo contra o Flamengo, pela Supercopa do Brasil, neste domingo (1º). A bola rola às 16h, no estádio Mané Garrincha, em Brasília (DF).",
    link: "/",
    imageLink: "/gavioes_torcida_2.png",
  },
  {
    id: "topnews_02",
    tag: "carnaval",
    title: "Torcida do Corinthians prepara festa especial para Supercopa",
    tldr:
      "A Gaviões da Fiel, principal torcida organizada do Corinthians, prepara uma festa especial para o duelo contra o Flamengo, pela Supercopa do Brasil, neste domingo (1º). A bola rola às 16h, no estádio Mané Garrincha, em Brasília (DF).",
    link: "/",
    imageLink: "/gavioes_torcida.png",
  },
  {
    id: "topnews_03",
    tag: "corinthians",
    title: "Torcida do Corinthians prepara festa especial para Supercopa",
    tldr:
      "A Gaviões da Fiel, principal torcida organizada do Corinthians, prepara uma festa especial para o duelo contra o Flamengo, pela Supercopa do Brasil, neste domingo (1º). A bola rola às 16h, no estádio Mané Garrincha, em Brasília (DF).",
    link: "/",
    imageLink: "/gavioes_torcida_2.png",
  },
];

export function TopNews() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const activeNews = activeIndex !== null ? news[activeIndex] : news[0];

  const toggleNewsItem = (index: number) => {
    setActiveIndex((current) => (current === index ? null : index));
  };

  const selectNewsItem = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section id="topnews" className="flex w-full flex-col gap-4 md:flex-row md:items-stretch md:gap-8 h-fit">
      <div className="hidden w-full md:block md:flex-[1.7] md:self-stretch">
        <TopNewsImage imageLink={activeNews.imageLink} alt={activeNews.title} />
      </div>

      <nav className="flex w-full flex-col gap-4 bg-black pe-8 md:min-w-96 md:flex-1 lg:min-w-150">
        <div className="order-1 md:order-2">
          <TopNewsNav total={news.length} activeIndex={activeIndex} onSelect={selectNewsItem} />
        </div>

        <div className="order-2 flex flex-col gap-4 md:order-1 md:flex-1">
          {news.map((item, index) => (
            <div key={item.id}>
              <div
                role="button"
                tabIndex={0}
                className="cursor-pointer rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-300"
                onClick={() => toggleNewsItem(index)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    toggleNewsItem(index);
                  }
                }}
              >
                {activeIndex === index && (
                  <div className="mb-3 md:hidden">
                    <TopNewsImage imageLink={item.imageLink} alt={item.title} />
                  </div>
                )}
                <TopNewsItem
                  active={activeIndex === index}
                  tag={item.tag}
                  title={item.title}
                  description={item.tldr}
                  href={item.link}
                />
              </div>
              {index < news.length - 1 && <span className="mt-4 block h-px w-full bg-zinc-800" aria-hidden="true" />}
            </div>
          ))}
        </div>
      </nav>
    </section>
  );
}
