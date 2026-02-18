import Image from "next/image";

type TopNewsImageProps = {
  imageLink: string;
  alt?: string;
};

export function TopNewsImage({ imageLink, alt = "" }: TopNewsImageProps) {
  const isExternalImage = imageLink.startsWith("http://") || imageLink.startsWith("https://");

  return (
    <div className="relative h-64 w-full overflow-hidden bg-zinc-950 sm:h-80 md:h-full">
      <Image
        src={imageLink}
        alt={alt}
        fill
        sizes="(min-width: 768px) 58vw, 100vw"
        unoptimized={isExternalImage}
        referrerPolicy="no-referrer"
        className="object-cover"
      />
    </div>
  )
}
