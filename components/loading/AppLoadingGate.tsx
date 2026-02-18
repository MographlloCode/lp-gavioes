"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { NoiseOverlay } from "@/components/common/NoiseOverlay";
import { FlagLoadingOverlay } from "@/components/loading/FlagLoadingOverlay";

type AppLoadingGateProps = {
  children: React.ReactNode;
  durationMs?: number;
};

export function AppLoadingGate({ children, durationMs = 1000 }: AppLoadingGateProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [showNoise, setShowNoise] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, durationMs);

    return () => {
      clearTimeout(timeout);
    };
  }, [durationMs]);

  useEffect(() => {
    const noiseDelay = setTimeout(() => {
      setShowNoise(true);
    }, 500);

    return () => {
      clearTimeout(noiseDelay);
    };
  }, []);

  return (
    <>
      <FlagLoadingOverlay isVisible={isLoading} showNoise={showNoise} />
      {showNoise ? <NoiseOverlay /> : null}
      <motion.div
        className={isLoading ? "pointer-events-none bg-black" : "bg-black"}
        initial={false}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </>
  );
}
