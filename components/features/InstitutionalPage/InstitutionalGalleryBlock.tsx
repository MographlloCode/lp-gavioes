"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { BiChevronLeft, BiChevronRight, BiX } from "react-icons/bi";

import type { InstitutionalImage } from "./types";

type InstitutionalGalleryBlockProps = {
  title?: string;
  description?: string;
  images: InstitutionalImage[];
};

function getAspectClass(aspectRatio: InstitutionalImage["aspectRatio"]) {
  if (aspectRatio === "wide") {
    return "aspect-[16/10]";
  }

  if (aspectRatio === "portrait") {
    return "aspect-[3/4]";
  }

  if (aspectRatio === "square") {
    return "aspect-square";
  }

  return "aspect-[4/3]";
}

export function InstitutionalGalleryBlock({
  title,
  description,
  images,
}: InstitutionalGalleryBlockProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  function openModal(index: number) {
    setSelectedIndex(index);
  }

  function closeModal() {
    setSelectedIndex(null);
  }

  const goToPrevious = useCallback(() => {
    setSelectedIndex((currentIndex) => {
      if (currentIndex === null) return 0;
      return (currentIndex - 1 + images.length) % images.length;
    });
  }, [images.length]);

  const goToNext = useCallback(() => {
    setSelectedIndex((currentIndex) => {
      if (currentIndex === null) return 0;
      return (currentIndex + 1) % images.length;
    });
  }, [images.length]);

  useEffect(() => {
    if (selectedIndex === null) {
      return;
    }

    function handleKeydown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setSelectedIndex(null);
      }

      if (event.key === "ArrowLeft") {
        goToPrevious();
      }

      if (event.key === "ArrowRight") {
        goToNext();
      }
    }

    window.addEventListener("keydown", handleKeydown);
    return () => window.removeEventListener("keydown", handleKeydown);
  }, [goToNext, goToPrevious, selectedIndex]);

  const selectedImage = selectedIndex !== null ? images[selectedIndex] : null;

  return (
    <section className="flex flex-col gap-4">
      {title ? (
        <h3 className="font-helvetica-condensed text-3xl font-black uppercase text-zinc-950">
          {title}
        </h3>
      ) : null}
      {description ? (
        <p className="text-base leading-relaxed text-zinc-700">{description}</p>
      ) : null}

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {images.map((image, index) => {
          const isExternalImage =
            image.src.startsWith("http://") || image.src.startsWith("https://");
          const aspectClass = getAspectClass(image.aspectRatio);

          return (
            <button
              key={`${image.src}-${index}`}
              type="button"
              onClick={() => openModal(index)}
              className={`group relative w-full overflow-hidden rounded-sm border border-zinc-300 ${aspectClass}`}
              aria-label={`Abrir imagem ${index + 1} da galeria`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(min-width: 640px) 33vw, 50vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                unoptimized={isExternalImage}
                referrerPolicy="no-referrer"
              />
            </button>
          );
        })}
      </div>

      {selectedImage ? (
        <div
          className="fixed inset-0 z-[120] flex items-center justify-center bg-black/90 px-3"
          role="dialog"
          aria-modal="true"
          aria-label="Galeria de imagens"
        >
          <button
            type="button"
            onClick={closeModal}
            className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/40 text-white transition-colors duration-200 hover:border-white hover:bg-white/10"
            aria-label="Fechar galeria"
          >
            <BiX size={22} />
          </button>

          <button
            type="button"
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 text-white transition-colors duration-200 hover:border-white hover:bg-white/10"
            aria-label="Imagem anterior"
          >
            <BiChevronLeft size={24} />
          </button>

          <button
            type="button"
            onClick={goToNext}
            className="absolute right-4 top-1/2 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 text-white transition-colors duration-200 hover:border-white hover:bg-white/10"
            aria-label="Próxima imagem"
          >
            <BiChevronRight size={24} />
          </button>

          <figure className="mx-auto flex w-full max-w-5xl flex-col gap-3">
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-sm border border-white/20 bg-black">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                sizes="(min-width: 1280px) 1100px, 95vw"
                className="object-contain"
                unoptimized={
                  selectedImage.src.startsWith("http://") ||
                  selectedImage.src.startsWith("https://")
                }
                referrerPolicy="no-referrer"
              />
            </div>

            {selectedImage.caption || selectedImage.credit ? (
              <figcaption className="flex flex-col gap-1 text-sm text-zinc-200 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                <span>{selectedImage.caption}</span>
                {selectedImage.credit ? (
                  <span className="font-medium text-zinc-300">
                    {selectedImage.credit}
                  </span>
                ) : null}
              </figcaption>
            ) : null}
          </figure>
        </div>
      ) : null}
    </section>
  );
}
