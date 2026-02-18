"use client";

import { AnimatePresence, motion } from "framer-motion";
import { NoiseOverlay } from "@/components/common/NoiseOverlay";
import { FlagWaveCanvas } from "@/components/loading/FlagWaveCanvas";

type FlagLoadingOverlayProps = {
  isVisible: boolean;
  showNoise: boolean;
};

export function FlagLoadingOverlay({
  isVisible,
  showNoise,
}: FlagLoadingOverlayProps) {
  return (
    <AnimatePresence>
      {isVisible ? (
        <motion.div
          key="flag-loading-overlay"
          className="fixed inset-0 z-[2000] overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.28, ease: "easeOut" }}
        >
          <FlagWaveCanvas />
          {showNoise ? (
            <NoiseOverlay
              fixed={false}
              zIndex={2}
              opacity={0.34}
              fps={18}
              blendMode="soft-light"
            />
          ) : null}
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
