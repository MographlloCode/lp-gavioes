"use client";

import { motion } from "framer-motion";

import { EventMatchContent } from "./EventMatchContent";
import type { UpcomingEvent } from "./eventsData";

type DesktopEventCardProps = {
  event: UpcomingEvent;
  index: number;
};

export function DesktopEventCard({ event, index }: DesktopEventCardProps) {
  return (
    <motion.article
      className="flex min-w-full shrink-0 items-center gap-3 px-3 py-3 sm:min-w-[20rem] sm:px-4 lg:min-w-[16rem] xl:min-w-[18rem]"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, ease: "easeOut", delay: Math.min(index * 0.04, 0.2) }}
      whileHover={{ y: -2 }}
    >
      <EventMatchContent event={event} mode="desktop" />
    </motion.article>
  );
}
