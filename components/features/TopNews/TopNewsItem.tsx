"use client";

import { motion } from "framer-motion";
import Link from "next/link";

type TopNewsItemProps = {
  active?: boolean;
  tag?: string;
  title?: string;
  description?: string;
  href?: string;
};

export function TopNewsItem({
  active = false,
  tag = "Torcida",
  title = "Torcida do Corinthians prepara festa especial para Supercopa",
  description = "A Gaviões da Fiel, principal torcida organizada do Corinthians, prepara uma festa especial para o duelo contra o Flamengo, pela Supercopa do Brasil, neste domingo (1º). A bola rola às 16h, no estádio Mané Garrincha, em Brasília (DF).",
  href = "/",
}: TopNewsItemProps) {
  return (
    <motion.article
      layout
      className={`flex flex-col gap-2 ${active ? "" : "text-zinc-700"}`}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      whileHover={{ x: 4 }}
    >
      <motion.div className="flex flex-col" layout transition={{ duration: 0.2 }}>
        <p className="font-light uppercase">{tag}</p>
        <h1 className="font-helvetica-condensed font-bold uppercase text-2xl">{title}</h1>
      </motion.div>

      <motion.div
        className="flex flex-col gap-4 overflow-hidden"
        initial={false}
        animate={{
          height: active ? "auto" : 0,
          opacity: active ? 1 : 0,
        }}
        transition={{
          height: { duration: 0.28, ease: [0.22, 1, 0.36, 1] },
          opacity: { duration: active ? 0.2 : 0.15, ease: "easeOut" },
        }}
        style={{ pointerEvents: active ? "auto" : "none" }}
        aria-hidden={!active}
      >
        <p>{description}</p>
        <motion.div whileHover={{ x: 3 }} transition={{ duration: 0.15 }}>
          <Link
            href={href}
            onClick={(event) => event.stopPropagation()}
            tabIndex={active ? 0 : -1}
            className="font-helvetica-condensed font-bold uppercase underline underline-offset-4"
          >
            Ler mais
          </Link>
        </motion.div>
      </motion.div>
    </motion.article>
  );
}
