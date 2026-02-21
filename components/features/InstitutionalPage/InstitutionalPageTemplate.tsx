import Link from "next/link";

import { InstitutionalBlockRenderer } from "./InstitutionalBlockRenderer";
import type { InstitutionalPage } from "./types";

type InstitutionalPageTemplateProps = {
  page: InstitutionalPage;
};

export function InstitutionalPageTemplate({ page }: InstitutionalPageTemplateProps) {
  const shouldShowSectionCrumb =
    page.section.trim().toLocaleLowerCase("pt-BR") !== "institucional";

  return (
    <main className="w-full pt-28 sm:pt-32">
      <section className="w-full bg-white text-zinc-900">
        <div className="mx-auto flex w-full max-w-[1240px] flex-col gap-6 px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
          <nav
            aria-label="Navegacao institucional"
            className="flex flex-wrap items-center gap-1 text-xs text-zinc-500 sm:text-sm"
          >
            <Link href="/" className="transition-colors duration-200 hover:text-zinc-900">
              Home
            </Link>
            <span>/</span>
            <Link
              href="/institucional"
              className="transition-colors duration-200 hover:text-zinc-900"
            >
              Institucional
            </Link>
            {shouldShowSectionCrumb ? (
              <>
                <span>/</span>
                <span className="text-zinc-700">{page.section}</span>
              </>
            ) : null}
            <span>/</span>
            <span className="text-zinc-700">{page.title}</span>
          </nav>

          <article className="mx-auto flex w-full max-w-[860px] flex-col gap-8">
            {page.blocks.map((block, index) => (
              <section key={`${block.type}-${index}`}>
                <InstitutionalBlockRenderer block={block} />
              </section>
            ))}
          </article>
        </div>
      </section>
    </main>
  );
}
