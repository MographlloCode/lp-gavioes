"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import type { NewsItem } from "./newsData";

type NewsArticleCardProps = {
  item: NewsItem;
  featured?: boolean;
};

export function NewsArticleCard({ item, featured = false }: NewsArticleCardProps) {
  const articleClassName = featured
    ? "flex flex-col gap-2"
    : "flex flex-col gap-2 lg:flex-row lg:items-stretch lg:gap-5";

  const imageClassName = featured
    ? "h-52 w-full overflow-hidden sm:h-64 md:h-72 lg:h-64"
    : "h-44 w-full overflow-hidden sm:h-52 md:h-56 lg:h-auto lg:w-64 lg:flex-none lg:self-stretch xl:w-72";

  return (
    <motion.article
      className={articleClassName}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      whileHover={{ y: -2 }}
    >
      <motion.div className={imageClassName} whileHover={{ scale: 1.01 }} transition={{ duration: 0.2, ease: "easeOut" }}>
        <Image src={item.imageSrc} alt={item.imageAlt} width={800} height={400} className="h-full w-full object-cover" />
      </motion.div>

      <div className="flex flex-col gap-2">
        <div className="mt-2 flex flex-col">
          <p className="-mb-1 text-xs font-light uppercase tracking-wide sm:text-sm">{item.tag}</p>
          <h1 className="font-helvetica-condensed text-xl font-bold uppercase sm:text-2xl">{item.title}</h1>
        </div>

        <p className="text-sm sm:text-base">{item.description}</p>

        <motion.div whileHover={{ x: 3 }} transition={{ duration: 0.15, ease: "easeOut" }}>
          <Link
            href={item.href}
            className="font-helvetica-condensed text-sm font-black uppercase underline underline-offset-4 transition-all duration-400 ease-in-out hover:underline-offset-8 sm:text-lg"
          >
            Ler Mais
          </Link>
        </motion.div>
      </div>
    </motion.article>
  );
}
