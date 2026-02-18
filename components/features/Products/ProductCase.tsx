import Image from "next/image";

interface IProductCase {
  name: string;
  imgLink: string;
  isActive?: boolean;
  onSelect?: () => void;
  preload?: boolean;
}

export function ProductCase({
  name,
  imgLink,
  isActive = false,
  onSelect,
  preload = false,
}: IProductCase) {
  return (
    <button
      type="button"
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
    </button>
  );
}
