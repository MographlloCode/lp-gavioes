import { BiPause, BiPlay } from "react-icons/bi";
import { AnimatePresence, motion } from "framer-motion";

type RadioPlayPauseProps = {
  isPlaying: boolean;
  onToggle: () => void;
};

export function RadioPlayPause({ isPlaying, onToggle }: RadioPlayPauseProps) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className="relative flex items-center justify-center h-5 w-5 text-white/90 hover:text-white transition-colors"
      aria-label={isPlaying ? "Pausar rádio" : "Tocar rádio"}
      title={isPlaying ? "Pausar" : "Tocar"}
    >
      <AnimatePresence mode="wait" initial={false}>
        {isPlaying ? (
          <motion.span
            key="pause"
            initial={{ opacity: 0, scale: 0.65, rotate: -65 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.65, rotate: 65 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <BiPause size={20} />
          </motion.span>
        ) : (
          <motion.span
            key="play"
            initial={{ opacity: 0, scale: 0.65, rotate: 65 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.65, rotate: -65 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <BiPlay size={20} />
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
}
