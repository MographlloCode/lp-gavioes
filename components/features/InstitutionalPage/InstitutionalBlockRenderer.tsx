import { InstitutionalColumnsBlock } from "./InstitutionalColumnsBlock";
import { InstitutionalGalleryBlock } from "./InstitutionalGalleryBlock";
import { InstitutionalImageBlock } from "./InstitutionalImageBlock";
import { InstitutionalQuoteBlock } from "./InstitutionalQuoteBlock";
import { InstitutionalRichText } from "./InstitutionalRichText";
import { InstitutionalTextWithImageBlock } from "./InstitutionalTextWithImageBlock";
import type { InstitutionalContentBlock } from "./types";

type InstitutionalBlockRendererProps = {
  block: InstitutionalContentBlock;
};

export function InstitutionalBlockRenderer({
  block,
}: InstitutionalBlockRendererProps) {
  if (block.type === "title") {
    return (
      <header className="flex flex-col gap-3 border-b border-zinc-200 pb-6">
        {block.kicker ? (
          <p className="font-helvetica-condensed text-sm font-black uppercase tracking-[0.15em] text-red-700 sm:text-base">
            {block.kicker}
          </p>
        ) : null}
        <h1 className="font-helvetica-condensed text-4xl leading-tight font-black uppercase text-zinc-950 sm:text-5xl lg:text-6xl">
          {block.title}
        </h1>
        {block.subtitle ? (
          <p className="max-w-3xl text-lg leading-relaxed text-zinc-700 sm:text-xl">
            {block.subtitle}
          </p>
        ) : null}
      </header>
    );
  }

  if (block.type === "richText") {
    return <InstitutionalRichText content={block.content} />;
  }

  if (block.type === "quote") {
    return <InstitutionalQuoteBlock quote={block.quote} author={block.author} />;
  }

  if (block.type === "columns") {
    return <InstitutionalColumnsBlock columns={block.columns} />;
  }

  if (block.type === "image") {
    return <InstitutionalImageBlock image={block.image} />;
  }

  if (block.type === "textWithImage") {
    return (
      <InstitutionalTextWithImageBlock
        image={block.image}
        imagePosition={block.imagePosition}
        content={block.content}
      />
    );
  }

  return (
    <InstitutionalGalleryBlock
      title={block.title}
      description={block.description}
      images={block.images}
    />
  );
}
