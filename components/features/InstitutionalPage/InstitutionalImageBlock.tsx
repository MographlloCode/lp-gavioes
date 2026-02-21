import Image from "next/image";

import type { InstitutionalImage } from "./types";

type InstitutionalImageBlockProps = {
  image: InstitutionalImage;
};

function getAspectClass(aspectRatio: InstitutionalImage["aspectRatio"]) {
  if (aspectRatio === "wide") {
    return "aspect-[16/9]";
  }

  if (aspectRatio === "portrait") {
    return "aspect-[3/4]";
  }

  if (aspectRatio === "square") {
    return "aspect-square";
  }

  return "aspect-[4/3]";
}

export function InstitutionalImageBlock({ image }: InstitutionalImageBlockProps) {
  const isExternalImage =
    image.src.startsWith("http://") || image.src.startsWith("https://");
  const aspectClass = getAspectClass(image.aspectRatio);

  return (
    <figure className="overflow-hidden rounded-sm">
      <div className={`relative w-full ${aspectClass}`}>
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="(min-width: 1024px) 760px, 100vw"
          className="object-cover"
          unoptimized={isExternalImage}
          referrerPolicy="no-referrer"
        />
      </div>
      {image.caption || image.credit ? (
        <figcaption className="flex flex-col gap-1 px-2 py-3 text-xs text-zinc-600 sm:px-3 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
          <span>{image.caption}</span>
          {image.credit ? (
            <span className="font-medium text-zinc-500">{image.credit}</span>
          ) : null}
        </figcaption>
      ) : null}
    </figure>
  );
}
