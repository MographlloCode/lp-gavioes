"use client";

import type { CSSProperties } from "react";
import { useEffect, useRef } from "react";

type NoiseOverlayProps = {
  className?: string;
  fixed?: boolean;
  opacity?: number;
  fps?: number;
  blendMode?: CSSProperties["mixBlendMode"];
  zIndex?: number;
};

function fillNoise(data: Uint8ClampedArray) {
  for (let i = 0; i < data.length; i += 4) {
    const value = (Math.random() * 255) | 0;
    const alpha = 110 + ((Math.random() * 145) | 0);
    data[i] = value;
    data[i + 1] = value;
    data[i + 2] = value;
    data[i + 3] = alpha;
  }
}

export function NoiseOverlay({
  className = "",
  fixed = true,
  opacity = 0.13,
  fps = 14,
  blendMode = "soft-light",
  zIndex = 999,
}: NoiseOverlayProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const tileCanvas = document.createElement("canvas");
    const tileCtx = tileCanvas.getContext("2d", { alpha: true });
    if (!tileCtx) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    let rafId = 0;
    let lastFrame = 0;
    let tileSize = 0;
    let imageData: ImageData;
    let disposed = false;

    const resize = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 2.2);
      const width = Math.max(1, Math.floor(window.innerWidth * ratio));
      const height = Math.max(1, Math.floor(window.innerHeight * ratio));

      canvas.width = width;
      canvas.height = height;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;

      tileSize = Math.max(160, Math.floor(170 * ratio));
      tileCanvas.width = tileSize;
      tileCanvas.height = tileSize;
      imageData = tileCtx.createImageData(tileSize, tileSize);
    };

    const paint = (timestamp: number) => {
      if (disposed) return;

      const targetFrameMs = 1000 / fps;
      if (
        !prefersReducedMotion.matches &&
        timestamp - lastFrame < targetFrameMs
      ) {
        rafId = window.requestAnimationFrame(paint);
        return;
      }
      lastFrame = timestamp;

      fillNoise(imageData.data);
      tileCtx.putImageData(imageData, 0, 0);

      const pattern = ctx.createPattern(tileCanvas, "repeat");
      if (!pattern) return;

      const offsetX = (timestamp * 0.018) % tileSize;
      const offsetY = (timestamp * 0.013) % tileSize;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.save();
      ctx.translate(-offsetX, -offsetY);
      ctx.fillStyle = pattern;
      ctx.fillRect(0, 0, canvas.width + tileSize, canvas.height + tileSize);
      ctx.restore();

      if (!prefersReducedMotion.matches) {
        rafId = window.requestAnimationFrame(paint);
      }
    };

    const start = () => {
      window.cancelAnimationFrame(rafId);
      paint(performance.now());
    };

    const handleMotionPreference = () => {
      start();
    };

    resize();
    start();

    window.addEventListener("resize", resize);
    prefersReducedMotion.addEventListener("change", handleMotionPreference);

    return () => {
      disposed = true;
      window.cancelAnimationFrame(rafId);
      window.removeEventListener("resize", resize);
      prefersReducedMotion.removeEventListener("change", handleMotionPreference);
    };
  }, [fps]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className={`${fixed ? "fixed" : "absolute"} inset-0 pointer-events-none ${className}`.trim()}
      style={{ mixBlendMode: blendMode, opacity, zIndex }}
    />
  );
}
