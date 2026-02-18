"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Fragment, useMemo, useState } from "react";

import { DesktopEventCard } from "./DesktopEventCard";
import { EventGroupSelector } from "./EventGroupSelector";
import { eventGroups } from "./eventsData";
import { useEventsCarousel } from "./useEventsCarousel";

export function Events() {
  const [activeGroupId, setActiveGroupId] = useState<string>(eventGroups[0]?.id ?? "");

  const activeGroup = useMemo(
    () => eventGroups.find((group) => group.id === activeGroupId) ?? eventGroups[0],
    [activeGroupId],
  );

  const { carouselRef, canScrollLeft, canScrollRight, scrollCarousel } = useEventsCarousel({
    resetKey: activeGroupId,
  });

  if (!activeGroup) {
    return null;
  }

  return (
    <section className="flex w-full flex-col gap-4 px-4 sm:px-6 md:px-8">
      <EventGroupSelector
        groups={eventGroups}
        activeGroupId={activeGroup.id}
        onSelect={setActiveGroupId}
        indicatorLayoutId="events-group-indicator"
      />

      <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
        <button
          type="button"
          onClick={() => scrollCarousel("left")}
          disabled={!canScrollLeft}
          className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-full border border-zinc-800 text-xl transition-colors hover:border-zinc-600 disabled:cursor-not-allowed disabled:opacity-30 lg:flex"
          aria-label="Eventos anteriores"
        >
          &#8249;
        </button>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeGroup.id}
            className="min-w-0 flex-1"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <div
              ref={carouselRef}
              className="flex items-stretch overflow-x-auto scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
            >
              {activeGroup.events.map((event, index) => (
                <Fragment key={event.id}>
                  <DesktopEventCard event={event} index={index} />
                  {index < activeGroup.events.length - 1 && (
                    <span className="h-full w-px self-stretch bg-zinc-800" aria-hidden="true" />
                  )}
                </Fragment>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        <button
          type="button"
          onClick={() => scrollCarousel("right")}
          disabled={!canScrollRight}
          className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-full border border-zinc-800 text-xl transition-colors hover:border-zinc-600 disabled:cursor-not-allowed disabled:opacity-30 lg:flex"
          aria-label="Próximos eventos"
        >
          &#8250;
        </button>

        <div className="flex items-center justify-center gap-3 lg:hidden">
          <button
            type="button"
            onClick={() => scrollCarousel("left")}
            disabled={!canScrollLeft}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-zinc-800 text-xl transition-colors hover:border-zinc-600 disabled:cursor-not-allowed disabled:opacity-30"
            aria-label="Eventos anteriores"
          >
            &#8249;
          </button>

          <button
            type="button"
            onClick={() => scrollCarousel("right")}
            disabled={!canScrollRight}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-zinc-800 text-xl transition-colors hover:border-zinc-600 disabled:cursor-not-allowed disabled:opacity-30"
            aria-label="Próximos eventos"
          >
            &#8250;
          </button>
        </div>
      </div>
    </section>
  );
}
