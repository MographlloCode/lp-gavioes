import { InstitutionalImageBlock } from "./InstitutionalImageBlock";
import { InstitutionalRichText } from "./InstitutionalRichText";
import type { InstitutionalImage, InstitutionalRichTextItem } from "./types";

type InstitutionalTextWithImageBlockProps = {
  image: InstitutionalImage;
  imagePosition?: "left" | "right";
  content: InstitutionalRichTextItem[];
};

export function InstitutionalTextWithImageBlock({
  image,
  imagePosition = "right",
  content,
}: InstitutionalTextWithImageBlockProps) {
  const isImageOnRight = imagePosition === "right";

  return (
    <section className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:items-start">
      <div className={isImageOnRight ? "lg:order-1" : "lg:order-2"}>
        <InstitutionalRichText content={content} />
      </div>

      <div className={isImageOnRight ? "lg:order-2" : "lg:order-1"}>
        <InstitutionalImageBlock image={image} />
      </div>
    </section>
  );
}
