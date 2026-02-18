import { ProductCase } from "./ProductCase";
import { useRef, type PointerEvent } from "react";

export interface ProductItem {
  id: string;
  name: string;
  img_url: string;
}

interface ProductCarousselProps {
  products: ProductItem[];
  trackIndex: number;
  isTransitioning: boolean;
  transitionMs: number;
  dragOffsetPx: number;
  onSelectTrackIndex: (nextTrackIndex: number) => void;
  onDragOffsetChange: (offsetPx: number) => void;
  onDragEnd: (offsetPx: number) => void;
  onTrackTransitionEnd: () => void;
}

const SLIDE_SIZE = 300;
const GAP = 0;
const TRACK_STEP = SLIDE_SIZE + GAP;

export function ProductCaroussel({
  products,
  trackIndex,
  isTransitioning,
  transitionMs,
  dragOffsetPx,
  onSelectTrackIndex,
  onDragOffsetChange,
  onDragEnd,
  onTrackTransitionEnd,
}: ProductCarousselProps) {
  const pointerIdRef = useRef<number | null>(null);
  const dragStartXRef = useRef(0);
  const dragOffsetRef = useRef(0);
  const didDragRef = useRef(false);
  const suppressClickRef = useRef(false);

  if (products.length === 0) {
    return null;
  }

  const repeatedProducts = [...products, ...products, ...products];
  const preloadStart = Math.max(0, trackIndex - 1);
  const preloadEnd = Math.min(repeatedProducts.length - 1, trackIndex + products.length);

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    if (
      event.pointerType !== "touch" &&
      event.pointerType !== "pen"
    ) {
      return;
    }

    if (isTransitioning) {
      return;
    }

    if (typeof window !== "undefined" && window.innerWidth >= 768) {
      return;
    }

    pointerIdRef.current = event.pointerId;
    dragStartXRef.current = event.clientX;
    dragOffsetRef.current = 0;
    didDragRef.current = false;
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (pointerIdRef.current !== event.pointerId) {
      return;
    }

    const offset = event.clientX - dragStartXRef.current;
    dragOffsetRef.current = offset;

    if (Math.abs(offset) > 10) {
      didDragRef.current = true;
    }

    onDragOffsetChange(offset);
  };

  const finishDrag = (event: PointerEvent<HTMLDivElement>) => {
    if (pointerIdRef.current !== event.pointerId) {
      return;
    }

    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }

    const finalOffset = dragOffsetRef.current;
    const didDrag = didDragRef.current;

    pointerIdRef.current = null;
    dragOffsetRef.current = 0;
    didDragRef.current = false;

    onDragEnd(finalOffset);

    if (didDrag) {
      suppressClickRef.current = true;
      window.setTimeout(() => {
        suppressClickRef.current = false;
      }, 0);
    }
  };

  const translateX = -(trackIndex * TRACK_STEP) + dragOffsetPx;

  return (
    <div className="h-[300px] w-full overflow-hidden bg-black">
      <div
        className="flex h-full items-center will-change-transform touch-pan-y"
        style={{
          transform: `translate3d(${translateX}px, 0, 0)`,
          transition: isTransitioning
            ? `transform ${transitionMs}ms cubic-bezier(0.22, 1, 0.36, 1)`
            : "none",
        }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={finishDrag}
        onPointerCancel={finishDrag}
        onTransitionEnd={(event) => {
          if (
            event.target !== event.currentTarget ||
            event.propertyName !== "transform"
          ) {
            return;
          }

          onTrackTransitionEnd();
        }}
      >
        {repeatedProducts.map((product, index) => (
          <ProductCase
            key={`${product.id}-${index}`}
            name={product.name}
            imgLink={product.img_url}
            isActive={index === trackIndex}
            onSelect={() => {
              if (suppressClickRef.current) {
                return;
              }

              onSelectTrackIndex(index);
            }}
            preload={index >= preloadStart && index <= preloadEnd}
          />
        ))}
      </div>
    </div>
  );
}
