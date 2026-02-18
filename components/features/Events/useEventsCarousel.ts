import { useCallback, useEffect, useRef, useState } from "react";

type ScrollDirection = "left" | "right";

type UseEventsCarouselOptions = {
  resetKey: string;
};

export function useEventsCarousel({ resetKey }: UseEventsCarouselOptions) {
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateControls = useCallback(() => {
    const carousel = carouselRef.current;
    if (!carousel) {
      return;
    }

    const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;
    setCanScrollLeft(carousel.scrollLeft > 2);
    setCanScrollRight(carousel.scrollLeft < maxScrollLeft - 2);
  }, []);

  const scrollCarousel = useCallback((direction: ScrollDirection) => {
    const carousel = carouselRef.current;
    if (!carousel) {
      return;
    }

    const firstCard = carousel.firstElementChild as HTMLElement | null;
    const firstSeparator = firstCard?.nextElementSibling as HTMLElement | null;
    const separatorWidth = firstSeparator ? firstSeparator.offsetWidth : 0;
    const step = (firstCard?.offsetWidth ?? carousel.clientWidth) + separatorWidth;

    carousel.scrollBy({
      left: direction === "right" ? step : -step,
      behavior: "smooth",
    });
  }, []);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) {
      return;
    }

    const handleScroll = () => updateControls();
    handleScroll();

    carousel.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      carousel.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [resetKey, updateControls]);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) {
      return;
    }

    carousel.scrollTo({ left: 0, behavior: "auto" });
    updateControls();
  }, [resetKey, updateControls]);

  return {
    carouselRef,
    canScrollLeft,
    canScrollRight,
    scrollCarousel,
  };
}
