import Link from "next/link";

import type { NewsAdSlot } from "./types";

type NewsAdsBannerProps = {
  slot: NewsAdSlot;
  variant?: "hero" | "rail";
};

export function NewsAdsBanner({ slot, variant = "hero" }: NewsAdsBannerProps) {
  const isHero = variant === "hero";

  return (
    <article
      className={`relative overflow-hidden rounded-sm border border-zinc-800 text-white ${
        isHero
          ? "bg-gradient-to-r from-zinc-950 via-zinc-900 to-zinc-700 p-5 sm:p-6"
          : "bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-800 p-4"
      }`}
    >
      <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-zinc-300/20 blur-2xl" />
      <div className="pointer-events-none absolute -bottom-16 -left-10 h-36 w-36 rounded-full bg-zinc-500/20 blur-2xl" />

      <div className="relative flex flex-col gap-3">
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-300">
          Publicidade • {slot.size}
        </p>
        <h3
          className={`font-helvetica-condensed font-black uppercase ${
            isHero ? "text-3xl sm:text-4xl" : "text-2xl"
          }`}
        >
          {slot.label}
        </h3>
        <p className="text-sm leading-relaxed text-zinc-200">{slot.description}</p>
        <Link
          href={slot.href}
          target="_blank"
          rel="noreferrer"
          className="mt-1 inline-flex w-fit rounded-sm border border-zinc-400 bg-zinc-900/50 px-4 py-2 font-helvetica-condensed text-base font-black uppercase text-white transition-colors duration-200 hover:border-white hover:bg-zinc-950"
        >
          {slot.cta}
        </Link>
      </div>
    </article>
  );
}
