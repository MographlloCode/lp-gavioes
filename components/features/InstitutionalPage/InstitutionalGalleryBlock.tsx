"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { BiChevronLeft, BiChevronRight, BiX } from "react-icons/bi";

import type { InstitutionalImage } from "./types";

type InstitutionalGalleryBlockProps = {
  title?: string;
  description?: string;
  images: InstitutionalImage[];
};

export function InstitutionalGalleryBlock({
  title,
  description,
  images,
}: InstitutionalGalleryBlockProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(images.length > 0);

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

  const updateScrollState = useCallback(() => {
    const track = trackRef.current;
    if (!track) {
      return;
    }

    const maxScrollLeft = Math.max(0, track.scrollWidth - track.clientWidth);
    setCanScrollLeft(track.scrollLeft > 4);
    setCanScrollRight(track.scrollLeft < maxScrollLeft - 4);
  }, []);

  useEffect(() => {
    updateScrollState();
  }, [images.length, updateScrollState]);

  useEffect(() => {
    function handleResize() {
      updateScrollState();
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [updateScrollState]);

  function scrollThumbnails(direction: "left" | "right") {
    const track = trackRef.current;
    if (!track) {
      return;
    }

    const amount = Math.max(360, track.clientWidth * 0.8);
    track.scrollBy({
      left: direction === "right" ? amount : -amount,
      behavior: "smooth",
    });
  }

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

      <div className="flex flex-col gap-3">
        <div
          ref={trackRef}
          onScroll={updateScrollState}
          className="flex gap-4 overflow-x-auto scroll-smooth py-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {images.map((image, index) => {
            const isExternalImage =
              image.src.startsWith("http://") || image.src.startsWith("https://");

            return (
              <button
                key={`${image.src}-${index}`}
                type="button"
                onClick={() => openModal(index)}
                className="group relative h-56 w-[320px] shrink-0 overflow-hidden rounded-sm sm:h-64 sm:w-[380px] lg:h-72 lg:w-[430px]"
                aria-label={`Abrir imagem ${index + 1} da galeria`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(min-width: 1024px) 430px, (min-width: 640px) 380px, 320px"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  unoptimized={isExternalImage}
                  referrerPolicy="no-referrer"
                />
              </button>
            );
          })}
        </div>

        <div className="flex items-center justify-end gap-2">
          <button
            type="button"
            onClick={() => scrollThumbnails("left")}
            disabled={!canScrollLeft}
            aria-label="Rolar galeria para a esquerda"
            className={`inline-flex h-12 w-12 items-center justify-center rounded-full bg-zinc-900 text-white transition-colors duration-200 ${
              canScrollLeft
                ? "hover:bg-zinc-700"
                : "pointer-events-none bg-zinc-300 text-zinc-100"
            }`}
          >
            <BiChevronLeft size={28} />
          </button>

          <button
            type="button"
            onClick={() => scrollThumbnails("right")}
            disabled={!canScrollRight}
            aria-label="Rolar galeria para a direita"
            className={`inline-flex h-12 w-12 items-center justify-center rounded-full bg-zinc-900 text-white transition-colors duration-200 ${
              canScrollRight
                ? "hover:bg-zinc-700"
                : "pointer-events-none bg-zinc-300 text-zinc-100"
            }`}
          >
            <BiChevronRight size={28} />
          </button>
        </div>
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
