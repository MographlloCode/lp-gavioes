import { InstitutionalColumnsBlock } from "./InstitutionalColumnsBlock";
import { InstitutionalGalleryBlock } from "./InstitutionalGalleryBlock";
import { InstitutionalImageBlock } from "./InstitutionalImageBlock";
import { InstitutionalLocationBlock } from "./InstitutionalLocationBlock";
import { InstitutionalQuoteBlock } from "./InstitutionalQuoteBlock";
import { InstitutionalRichText } from "./InstitutionalRichText";
import { InstitutionalSubsedesDirectoryBlock } from "./InstitutionalSubsedesDirectoryBlock";
import { InstitutionalSourcesBlock } from "./InstitutionalSourcesBlock";
import { InstitutionalTextWithImageBlock } from "./InstitutionalTextWithImageBlock";
import { InstitutionalYoutubeVideoBlock } from "./InstitutionalYoutubeVideoBlock";
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

  if (block.type === "location") {
    return (
      <InstitutionalLocationBlock
        title={block.title}
        subtitle={block.subtitle}
        location={block.location}
      />
    );
  }

  if (block.type === "sources") {
    return <InstitutionalSourcesBlock title={block.title} items={block.items} />;
  }

  if (block.type === "youtubeVideo") {
    return (
      <InstitutionalYoutubeVideoBlock
        title={block.title}
        subtitle={block.subtitle}
        video={block.video}
      />
    );
  }

  if (block.type === "subsedesDirectory") {
    return (
      <InstitutionalSubsedesDirectoryBlock
        title={block.title}
        subtitle={block.subtitle}
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
