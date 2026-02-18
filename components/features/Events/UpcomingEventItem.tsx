"use client";

import { motion } from "framer-motion";

import { EventMatchContent } from "./EventMatchContent";
import type { UpcomingEvent } from "./eventsData";

type UpcomingEventItemProps = {
  event: UpcomingEvent;
  index?: number;
};

export function UpcomingEventItem({ event, index = 0 }: UpcomingEventItemProps) {
  return (
    <motion.div
      className="flex w-full items-center gap-4 lg:border lg:border-zinc-800"
      initial={{ opacity: 0, x: -8 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.7 }}
      transition={{ duration: 0.2, ease: "easeOut", delay: Math.min(index * 0.04, 0.2) }}
      whileHover={{ x: 2 }}
    >
      <EventMatchContent event={event} mode="mobile" />
    </motion.div>
  );
}
