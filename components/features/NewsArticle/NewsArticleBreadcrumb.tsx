import Link from "next/link";
import { BiChevronRight } from "react-icons/bi";

import type { NewsArticleBreadcrumbItem } from "./types";

type NewsArticleBreadcrumbProps = {
  items: NewsArticleBreadcrumbItem[];
};

export function NewsArticleBreadcrumb({ items }: NewsArticleBreadcrumbProps) {
  return (
    <nav
      aria-label="Navegação da notícia"
      className="flex flex-wrap items-center gap-1 text-xs text-zinc-500 sm:text-sm"
    >
      {items.map((item, index) => (
        <div key={`${item.label}-${index}`} className="flex items-center gap-1">
          <Link
            href={item.href}
            className="transition-colors duration-200 hover:text-zinc-900"
          >
            {item.label}
          </Link>
          {index < items.length - 1 && (
            <BiChevronRight aria-hidden="true" className="text-zinc-400" />
          )}
        </div>
      ))}
    </nav>
  );
}
