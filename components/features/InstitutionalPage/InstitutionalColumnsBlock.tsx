import { InstitutionalRichText } from "./InstitutionalRichText";
import type { InstitutionalRichTextItem } from "./types";

type InstitutionalColumnsBlockProps = {
  columns: InstitutionalRichTextItem[][];
};

function getGridClass(columnCount: number) {
  if (columnCount >= 3) {
    return "md:grid-cols-2 xl:grid-cols-3";
  }

  return "md:grid-cols-2";
}

export function InstitutionalColumnsBlock({ columns }: InstitutionalColumnsBlockProps) {
  return (
    <section className={`grid grid-cols-1 gap-6 ${getGridClass(columns.length)}`}>
      {columns.map((column, index) => (
        <article
          key={`column-${index}`}
          className="rounded-sm border border-zinc-200 bg-zinc-50 p-4 sm:p-5"
        >
          <InstitutionalRichText content={column} />
        </article>
      ))}
    </section>
  );
}
