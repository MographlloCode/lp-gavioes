import { BiVolumeFull, BiVolumeMute } from "react-icons/bi";
import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";

type RadioVolumeSettingsProps = {
  volume: number;
  isMuted: boolean;
  onToggleMute: () => void;
  onVolumeChange: (value: number) => void;
};

export default function RadioVolumeSettings({
  volume,
  isMuted,
  onToggleMute,
  onVolumeChange,
}: RadioVolumeSettingsProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const closeTimeoutRef = useRef<number | null>(null);
  const isEffectivelyMuted = isMuted || volume === 0;
  const sliderValue = Math.round((isMuted ? 0 : volume) * 100);
  const fill = `${sliderValue}%`;

  const clearCloseTimeout = useCallback(() => {
    if (closeTimeoutRef.current !== null) {
      window.clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  }, []);

  const scheduleClose = useCallback(
    (delayMs: number) => {
      clearCloseTimeout();
      closeTimeoutRef.current = window.setTimeout(() => {
        setIsOpen(false);
        closeTimeoutRef.current = null;
      }, delayMs);
    },
    [clearCloseTimeout]
  );

  const handleOpen = () => {
    setIsOpen(true);
    scheduleClose(2000);
  };

  const handleClose = () => {
    clearCloseTimeout();
    setIsOpen(false);
  };

  const handleMuteToggle = () => {
    onToggleMute();
    scheduleClose(2000);
  };

  const handleSliderChange = (value: number) => {
    onVolumeChange(value);
    scheduleClose(1000);
  };

  useEffect(() => {
    return () => {
      clearCloseTimeout();
    };
  }, [clearCloseTimeout]);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 767px)");
    const syncIsMobile = () => {
      setIsMobile(media.matches);
      if (media.matches) {
        setIsOpen(false);
      }
    };

    syncIsMobile();
    media.addEventListener("change", syncIsMobile);

    return () => {
      media.removeEventListener("change", syncIsMobile);
    };
  }, []);

  if (isMobile) {
    return (
      <div className="flex items-center justify-center min-w-[18px]">
        <motion.button
          type="button"
          onClick={onToggleMute}
          className="text-white/85 hover:text-white transition-colors"
          aria-label={isEffectivelyMuted ? "Ativar áudio" : "Silenciar áudio"}
          title={isEffectivelyMuted ? "Ativar áudio" : "Silenciar áudio"}
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.16, ease: "easeOut" }}
        >
          {isEffectivelyMuted ? <BiVolumeMute size={17} /> : <BiVolumeFull size={17} />}
        </motion.button>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-w-[18px]">
      <AnimatePresence mode="wait" initial={false}>
        {!isOpen ? (
          <motion.button
            key="volume-closed"
            type="button"
            onClick={handleOpen}
            className="text-white/85 hover:text-white transition-colors"
            aria-label="Abrir controle de volume"
            title="Abrir controle de volume"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.85 }}
            transition={{ duration: 0.16, ease: "easeOut" }}
          >
            <BiVolumeFull size={17} />
          </motion.button>
        ) : (
          <motion.div
            key="volume-open"
            className="flex items-center justify-center w-36 sm:w-44 gap-2 overflow-hidden"
            initial={{ opacity: 0, width: 22, x: -8 }}
            animate={{ opacity: 1, width: "11rem", x: 0 }}
            exit={{ opacity: 0, width: 22, x: -8 }}
            transition={{ duration: 0.22, ease: [0.2, 0.9, 0.3, 1] }}
          >
            <motion.button
              type="button"
              onClick={handleMuteToggle}
              className="text-white/85 hover:text-white transition-colors shrink-0"
              aria-label={isEffectivelyMuted ? "Ativar áudio" : "Silenciar áudio"}
              title={isEffectivelyMuted ? "Ativar áudio" : "Silenciar áudio"}
              initial={{ opacity: 0, x: -6 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -6 }}
              transition={{ duration: 0.15, delay: 0.05 }}
            >
              <BiVolumeMute size={17} />
            </motion.button>

            <motion.div
              className="flex items-center justify-center w-full"
              initial={{ opacity: 0, scaleX: 0.85 }}
              animate={{ opacity: 1, scaleX: 1 }}
              exit={{ opacity: 0, scaleX: 0.85 }}
              transition={{ duration: 0.16, delay: 0.06 }}
            >
              <input
                type="range"
                min={0}
                max={100}
                step={1}
                value={sliderValue}
                onChange={(event) => handleSliderChange(Number(event.target.value) / 100)}
                onPointerDown={clearCloseTimeout}
                onPointerUp={() => scheduleClose(1000)}
                onKeyUp={() => scheduleClose(1000)}
                aria-label="Volume da rádio"
                className="w-full h-4 appearance-none bg-transparent cursor-pointer
                  [&::-webkit-slider-runnable-track]:h-px
                  [&::-webkit-slider-runnable-track]:bg-white/70
                  [&::-moz-range-track]:h-px
                  [&::-moz-range-track]:bg-white/70
                  [&::-webkit-slider-thumb]:appearance-none
                  [&::-webkit-slider-thumb]:mt-[-5px]
                  [&::-webkit-slider-thumb]:h-3
                  [&::-webkit-slider-thumb]:w-3
                  [&::-webkit-slider-thumb]:rounded-full
                  [&::-webkit-slider-thumb]:bg-white
                  [&::-moz-range-thumb]:h-3
                  [&::-moz-range-thumb]:w-3
                  [&::-moz-range-thumb]:rounded-full
                  [&::-moz-range-thumb]:bg-white
                  [&::-moz-range-thumb]:border-0"
                style={{
                  backgroundImage: `linear-gradient(to right, white 0 ${fill}, rgba(255,255,255,.3) ${fill} 100%)`,
                  backgroundSize: "100% 1px",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
              />
            </motion.div>

            <motion.button
              type="button"
              onClick={handleClose}
              className="text-white/85 hover:text-white transition-colors shrink-0"
              aria-label="Fechar controle de volume"
              title="Fechar controle de volume"
              initial={{ opacity: 0, x: 6 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 6 }}
              transition={{ duration: 0.15, delay: 0.05 }}
            >
              <BiVolumeFull size={17} />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
