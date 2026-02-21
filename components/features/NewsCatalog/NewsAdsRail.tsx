import { NewsAdsBanner } from "./NewsAdsBanner";
import type { NewsAdSlot } from "./types";

type NewsAdsRailProps = {
  slots: NewsAdSlot[];
};

export function NewsAdsRail({ slots }: NewsAdsRailProps) {
  if (!slots.length) {
    return null;
  }

  return (
    <aside className="flex flex-col gap-4 lg:sticky lg:top-32">
      {slots.map((slot) => (
        <NewsAdsBanner key={slot.id} slot={slot} variant="rail" />
      ))}
    </aside>
  );
}
