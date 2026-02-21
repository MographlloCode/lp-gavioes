"use client";

import { useState } from "react";
import { TopNewsImage } from "./TopNewsImage";
import { TopNewsItem } from "./TopNewsItem";
import { TopNewsNav } from "./TopNewsNav";
import { topNewsData } from "./topNewsData";

export function TopNews() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const activeNews = activeIndex !== null ? topNewsData[activeIndex] : topNewsData[0];

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
          <TopNewsNav total={topNewsData.length} activeIndex={activeIndex} onSelect={selectNewsItem} />
        </div>

        <div className="order-2 flex flex-col gap-4 md:order-1 md:flex-1">
          {topNewsData.map((item, index) => (
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
              {index < topNewsData.length - 1 && <span className="mt-4 block h-px w-full bg-zinc-800" aria-hidden="true" />}
            </div>
          ))}
        </div>
      </nav>
    </section>
  );
}
