"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";

const PLANE_WIDTH = 18;
const PLANE_HEIGHT = 10;
const SEGMENTS_X = 220;
const SEGMENTS_Y = 140;
const FLAG_BASE_ROTATION_X = -0.19;
const FLAG_BASE_ROTATION_Y = 0.42;
const CIRCLE_COMPENSATION_SCALE = 0.94;

type FlagViewportConfig = {
  cameraPosition: [number, number, number];
  fov: number;
  scale: [number, number, number];
  meshOffsetX: number;
  meshOffsetY: number;
  emblemScale: number;
};

const DESKTOP_CONFIG: FlagViewportConfig = {
  cameraPosition: [2.25, 0.2, 8.45],
  fov: 48,
  scale: [1.44, 1.44, 1],
  meshOffsetX: -0.2,
  meshOffsetY: -0.15,
  emblemScale: 0.34,
};

const MOBILE_CONFIG: FlagViewportConfig = {
  cameraPosition: [1.7, 0.2, 9.25],
  fov: 58,
  scale: [1.24, 1.52, 1],
  meshOffsetX: -0.1,
  meshOffsetY: 0.18,
  emblemScale: 0.28,
};

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 768px)");
    const handleChange = () => {
      setIsMobile(media.matches);
    };

    handleChange();
    media.addEventListener("change", handleChange);
    return () => {
      media.removeEventListener("change", handleChange);
    };
  }, []);

  return isMobile;
}

function drawFlagTexture(
  canvas: HTMLCanvasElement,
  emblemScale: number,
  logo?: HTMLImageElement | null,
) {
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  const width = canvas.width;
  const height = canvas.height;
  const cx = width / 2;
  const cy = height / 2;
  const radius = Math.hypot(width, height);
  const rays = 14;

  ctx.clearRect(0, 0, width, height);

  for (let i = 0; i < rays; i += 1) {
    const start = (i / rays) * Math.PI * 2;
    const end = ((i + 1) / rays) * Math.PI * 2;
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.arc(cx, cy, radius, start, end);
    ctx.closePath();
    ctx.fillStyle = i % 2 === 0 ? "#fbfbfb" : "#010101";
    ctx.fill();
  }

  const topHighlight = ctx.createLinearGradient(0, 0, 0, height * 0.62);
  topHighlight.addColorStop(0, "rgba(255,255,255,0.24)");
  topHighlight.addColorStop(0.48, "rgba(255,255,255,0.07)");
  topHighlight.addColorStop(1, "rgba(255,255,255,0)");
  ctx.fillStyle = topHighlight;
  ctx.fillRect(0, 0, width, height);

  const contrastSweep = ctx.createLinearGradient(0, height * 0.15, width, height * 0.9);
  contrastSweep.addColorStop(0, "rgba(255,255,255,0.08)");
  contrastSweep.addColorStop(0.58, "rgba(0,0,0,0)");
  contrastSweep.addColorStop(1, "rgba(0,0,0,0.13)");
  ctx.fillStyle = contrastSweep;
  ctx.fillRect(0, 0, width, height);

  const vignette = ctx.createRadialGradient(cx, cy, height * 0.05, cx, cy, radius);
  vignette.addColorStop(0, "rgba(255,255,255,0.16)");
  vignette.addColorStop(0.52, "rgba(0,0,0,0.05)");
  vignette.addColorStop(1, "rgba(0,0,0,0.34)");
  ctx.fillStyle = vignette;
  ctx.fillRect(0, 0, width, height);

  const circleSize = Math.min(width, height) * emblemScale;
  const circleRadius = (circleSize * CIRCLE_COMPENSATION_SCALE) / 2;

  ctx.beginPath();
  ctx.arc(cx, cy, circleRadius, 0, Math.PI * 2);
  ctx.fillStyle = "#ffffff";
  ctx.fill();

  if (logo) {
    const logoSize = circleSize;
    const x = cx - logoSize / 2;
    const y = cy - logoSize / 2;
    ctx.drawImage(logo, x, y, logoSize, logoSize);
  }
}

function useFlagTexture(emblemScale: number) {
  const texture = useMemo(() => {
    const canvas = document.createElement("canvas");
    canvas.width = 2048;
    canvas.height = 1200;
    drawFlagTexture(canvas, emblemScale, null);

    const canvasTexture = new THREE.CanvasTexture(canvas);
    canvasTexture.colorSpace = THREE.SRGBColorSpace;
    canvasTexture.wrapS = THREE.ClampToEdgeWrapping;
    canvasTexture.wrapT = THREE.ClampToEdgeWrapping;
    canvasTexture.anisotropy = 8;
    canvasTexture.needsUpdate = true;

    return canvasTexture;
  }, [emblemScale]);

  useEffect(() => {
    const canvas = texture.image as HTMLCanvasElement;
    const logo = new Image();
    logo.onload = () => {
      drawFlagTexture(canvas, emblemScale, logo);
      texture.needsUpdate = true;
    };
    logo.src = "/logo_gavioes_subsede.png";

    return () => {
      logo.onload = null;
    };
  }, [emblemScale, texture]);

  return texture;
}

function FlagSurface({ config }: { config: FlagViewportConfig }) {
  const meshRef = useRef<THREE.Mesh<THREE.PlaneGeometry>>(null);
  const geometryRef = useRef<THREE.PlaneGeometry>(null);
  const texture = useFlagTexture(config.emblemScale);
  const basePositionsRef = useRef<Float32Array | null>(null);

  useEffect(() => {
    const geometry = geometryRef.current;
    if (geometry) {
      basePositionsRef.current = Float32Array.from(
        geometry.attributes.position.array as Float32Array,
      );
    }

    return () => {
      texture.dispose();
    };
  }, [texture]);

  useFrame(({ clock }) => {
    const geometry = geometryRef.current;
    const basePositions = basePositionsRef.current;
    if (!geometry || !basePositions) return;

    const t = clock.getElapsedTime();
    const attr = geometry.attributes.position as THREE.BufferAttribute;

    for (let i = 0; i < attr.count; i += 1) {
      const i3 = i * 3;
      const x = basePositions[i3];
      const y = basePositions[i3 + 1];
      const distanceFromMast = (PLANE_WIDTH / 2 - x) / PLANE_WIDTH;
      const travel = THREE.MathUtils.clamp(distanceFromMast, 0, 1);
      const amplitude = 0.12 + travel * 0.88;

      const primaryWave = Math.sin(x * 1.55 + t * 4.8) * 0.3 * amplitude;
      const secondaryWave = Math.cos(y * 2.1 - t * 2.5) * 0.085 * amplitude;
      const gust = Math.sin(t * 3.1 + travel * 7.2) * 0.05 * amplitude;

      attr.setXYZ(i, x, y, primaryWave + secondaryWave + gust);
    }

    attr.needsUpdate = true;
    geometry.computeVertexNormals();

    if (meshRef.current) {
      meshRef.current.rotation.x = FLAG_BASE_ROTATION_X + Math.cos(t * 0.8) * 0.03;
      meshRef.current.rotation.y = FLAG_BASE_ROTATION_Y + Math.sin(t * 0.6) * 0.04;
      meshRef.current.position.x = config.meshOffsetX;
      meshRef.current.position.y = config.meshOffsetY;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <planeGeometry
        ref={geometryRef}
        args={[PLANE_WIDTH, PLANE_HEIGHT, SEGMENTS_X, SEGMENTS_Y]}
      />
      <meshStandardMaterial map={texture} roughness={0.88} metalness={0.02} />
    </mesh>
  );
}

export function FlagWaveCanvas() {
  const isMobile = useIsMobile();
  const config = isMobile ? MOBILE_CONFIG : DESKTOP_CONFIG;

  return (
    <div className="absolute inset-0">
      <Canvas camera={{ position: config.cameraPosition, fov: config.fov }} dpr={[1, 1.8]}>
        <color attach="background" args={["#000000"]} />
        <ambientLight intensity={0.9} />
        <directionalLight position={[-4, 6, 4]} intensity={1.28} />
        <directionalLight position={[5, -3, 2]} intensity={0.58} />
        <group scale={config.scale}>
          <FlagSurface config={config} />
        </group>
      </Canvas>
    </div>
  );
}
