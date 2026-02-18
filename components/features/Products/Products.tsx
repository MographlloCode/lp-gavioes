"use client";

import { useCallback, useState } from "react";
import { ProductCaroussel, type ProductItem } from "./ProductCaroussel";
import { ProductsInfo } from "./ProductsInfo";

const SWIPE_TRIGGER_PX = 72;
const MAX_DRAG_OFFSET_PX = 180;
const TAP_TOLERANCE_PX = 4;

const products: ProductItem[] = [
  {
    id: "product_01",
    name: "camisa_gavioes_01",
    img_url: "/camisa_gavioes_01.png",
  },
  {
    id: "product_02",
    name: "camisa_gavioes_02",
    img_url: "/camisa_gavioes_02.png",
  },
  {
    id: "product_03",
    name: "camisa_gavioes_03",
    img_url: "/camisa_gavioes_03.png",
  },
  {
    id: "product_04",
    name: "shorts_gavioes_01",
    img_url: "/shorts_gavioes_01.png",
  },
];

export function Products() {
  const totalProducts = products.length;
  const [trackIndex, setTrackIndex] = useState(totalProducts);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [transitionMs, setTransitionMs] = useState(420);
  const [dragOffsetPx, setDragOffsetPx] = useState(0);

  const moveTrack = useCallback(
    (direction: -1 | 1) => {
      if (isTransitioning || totalProducts <= 1) {
        return;
      }

      setTransitionMs(420);
      setIsTransitioning(true);
      setDragOffsetPx(0);
      setTrackIndex((currentTrack) => currentTrack + direction);
    },
    [isTransitioning, totalProducts],
  );

  const handlePrev = useCallback(() => moveTrack(-1), [moveTrack]);
  const handleNext = useCallback(() => moveTrack(1), [moveTrack]);

  const handleSelectTrackIndex = useCallback(
    (nextTrackIndex: number) => {
      if (
        isTransitioning ||
        totalProducts <= 1 ||
        nextTrackIndex === trackIndex
      ) {
        return;
      }

      const distance = Math.abs(nextTrackIndex - trackIndex);
      const adaptiveDuration = Math.min(300 + distance * 160, 820);
      setTransitionMs(adaptiveDuration);
      setIsTransitioning(true);
      setDragOffsetPx(0);
      setTrackIndex(nextTrackIndex);
    },
    [isTransitioning, totalProducts, trackIndex],
  );

  const handleDragOffsetChange = useCallback(
    (offsetPx: number) => {
      if (isTransitioning || totalProducts <= 1) {
        return;
      }

      const clampedOffset = Math.max(
        -MAX_DRAG_OFFSET_PX,
        Math.min(MAX_DRAG_OFFSET_PX, offsetPx),
      );
      setDragOffsetPx(clampedOffset);
    },
    [isTransitioning, totalProducts],
  );

  const handleDragEnd = useCallback(
    (offsetPx: number) => {
      if (isTransitioning || totalProducts <= 1) {
        return;
      }

      const clampedOffset = Math.max(
        -MAX_DRAG_OFFSET_PX,
        Math.min(MAX_DRAG_OFFSET_PX, offsetPx),
      );

      if (Math.abs(clampedOffset) <= TAP_TOLERANCE_PX) {
        setDragOffsetPx(0);
        return;
      }

      if (Math.abs(clampedOffset) < SWIPE_TRIGGER_PX) {
        setTransitionMs(240);
        setIsTransitioning(true);
        setDragOffsetPx(0);
        return;
      }

      setTransitionMs(360);
      setIsTransitioning(true);
      setDragOffsetPx(0);
      setTrackIndex((currentTrack) =>
        currentTrack + (clampedOffset < 0 ? 1 : -1),
      );
    },
    [isTransitioning, totalProducts],
  );

  const handleTrackTransitionEnd = useCallback(() => {
    setTrackIndex((currentTrack) => {
      if (currentTrack < totalProducts) {
        return currentTrack + totalProducts;
      }

      if (currentTrack >= totalProducts * 2) {
        return currentTrack - totalProducts;
      }

      return currentTrack;
    });

    setIsTransitioning(false);
    setDragOffsetPx(0);
  }, [totalProducts]);

  return (
    <section className="w-full bg-black">
      <div className="mx-auto flex w-full flex-col overflow-hidden md:flex-row gap-4 md:gap-8">
        <ProductsInfo
          onPrev={handlePrev}
          onNext={handleNext}
        />
        <ProductCaroussel
          products={products}
          trackIndex={trackIndex}
          isTransitioning={isTransitioning}
          transitionMs={transitionMs}
          dragOffsetPx={dragOffsetPx}
          onSelectTrackIndex={handleSelectTrackIndex}
          onDragOffsetChange={handleDragOffsetChange}
          onDragEnd={handleDragEnd}
          onTrackTransitionEnd={handleTrackTransitionEnd}
        />
      </div>
    </section>
  );
}
