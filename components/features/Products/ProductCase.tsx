import Image from "next/image";
import Link from "next/link";
import type { MouseEvent } from "react";

interface IProductCase {
  name: string;
  imgLink: string;
  href: string;
  isActive?: boolean;
  onSelect?: (event: MouseEvent<HTMLAnchorElement>) => void;
  preload?: boolean;
}

export function ProductCase({
  name,
  imgLink,
  href,
  isActive = false,
  onSelect,
  preload = false,
}: IProductCase) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noreferrer"
      onClick={onSelect}
      aria-label={`Ir para ${name}`}
      className="relative h-[300px] w-[300px] shrink-0 cursor-pointer overflow-hidden bg-black text-left"
    >
      <Image
        src={imgLink}
        alt={name}
        fill
        sizes="300px"
        loading={preload ? "eager" : "lazy"}
        className={[
          "object-cover hover:scale-110 transition-all ease-in-out duration-200",
          isActive
            ? "brightness-100 opacity-100 hover:brightness-100"
            : "brightness-50 opacity-95 hover:brightness-75",
        ].join(" ")}
      />
    </Link>
  );
}
