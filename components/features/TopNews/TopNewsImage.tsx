import Image from "next/image";

type TopNewsImageProps = {
  imageLink: string;
  alt?: string;
};

export function TopNewsImage({ imageLink, alt = "" }: TopNewsImageProps) {
  return (
    <div className="relative h-64 w-full overflow-hidden bg-zinc-950 sm:h-80 md:h-full">
      <Image
        src={imageLink}
        alt={alt}
        fill
        sizes="(min-width: 768px) 58vw, 100vw"
        className="object-cover"
      />
    </div>
  )
}
