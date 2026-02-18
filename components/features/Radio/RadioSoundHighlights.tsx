type RadioSoundHighlightsProps = {
  levels: number[];
  isActive: boolean;
};

const FALLBACK_PATTERN = [0.4, 0.65, 0.28, 0.8, 0.45, 0.7, 0.33, 0.56, 0.38, 0.78];

export function RadioSoundHighlights({
  levels,
  isActive,
}: RadioSoundHighlightsProps) {
  const bars = levels.length > 0 ? levels : FALLBACK_PATTERN;

  return (
    <div className="flex items-end justify-center gap-1.5 h-5 w-24 sm:w-28 -ms-4">
      {bars.map((level, index) => {
        const safeLevel = Number.isFinite(level) ? Math.max(0, Math.min(level, 1)) : 0;
        const minHeight = 4;
        const maxHeight = 20;
        const height = isActive
          ? Math.round(minHeight + safeLevel * (maxHeight - minHeight))
          : Math.round(minHeight + FALLBACK_PATTERN[index % FALLBACK_PATTERN.length] * 4);

        return (
          <span
            key={`bar-${index}`}
            className="block w-[2px] rounded-sm bg-white/90 transition-[height,opacity] duration-75 ease-linear"
            style={{ height: `${height}px`, opacity: isActive ? 1 : 0.6 }}
          />
        );
      })}
    </div>
  );
}
