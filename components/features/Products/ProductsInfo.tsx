import Link from "next/link";
import { BiLeftArrowCircle, BiRightArrowCircle } from "react-icons/bi";

interface ProductsInfoProps {
  onPrev: () => void;
  onNext: () => void;
}

export function ProductsInfo({ onPrev, onNext }: ProductsInfoProps) {
  return (
    <aside className="flex h-[300px] w-full lg:min-w-[600px] flex-col justify-between bg-black px-6 py-8 font-helvetica text-white md:w-[300px] md:min-w-[300px]">
      <div className="flex flex-col gap-5 lg:self-end lg:w-96">
        <div className="flex flex-col gap-2">
          <p className="leading-none font-light uppercase text-zinc-300 sm:text-base mb-2 text-sm">
            Camisas Oficiais
          </p>
          <h2 className="font-helvetica-condensed text-[38px] leading-[0.88] font-black uppercase sm:text-[40px] whitespace-nowrap">
            Gaviões da Fiel
          </h2>
        </div>

        <Link
          href="https://lojagavioes.com.br"
          target="__blank"
          className="inline-flex w-fit items-center border border-white px-3 pt-3 pb-2 font-helvetica-condensed text-sm leading-none font-bold uppercase transition-colors duration-200 hover:bg-white hover:text-black"
        >
          Ver Loja Online
        </Link>
      </div>

      <div className="flex items-center justify-between gap-3 lg:self-end lg:w-96">
        <nav className="flex items-center gap-0.5">
          <button
            type="button"
            onClick={onPrev}
            aria-label="Produto anterior"
            className="group inline-flex h-8 w-8 items-center justify-center text-white transition-all duration-200 hover:scale-105 active:scale-95"
          >
            <BiLeftArrowCircle
              size={24}
              className="transition-colors duration-200 group-hover:text-zinc-300"
            />
          </button>

          <button
            type="button"
            onClick={onNext}
            aria-label="Próximo produto"
            className="group inline-flex h-8 w-8 items-center justify-center text-white transition-all duration-200 hover:scale-105 active:scale-95"
          >
            <BiRightArrowCircle
              size={24}
              className="transition-colors duration-200 group-hover:text-zinc-300"
            />
          </button>
        </nav>
      </div>
    </aside>
  );
}
