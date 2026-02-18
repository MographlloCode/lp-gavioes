"use client";

import { motion } from "framer-motion";

import type { EventGroup } from "./eventsData";

type EventGroupSelectorProps = {
  groups: EventGroup[];
  activeGroupId: string;
  onSelect: (groupId: string) => void;
  indicatorLayoutId: string;
  containerClassName?: string;
  buttonClassName?: string;
};

const defaultContainerClassName = "flex items-center gap-2 overflow-x-auto pb-1";
const defaultButtonClassName =
  "relative shrink-0 rounded-sm px-3 py-2 font-helvetica-condensed text-sm font-bold uppercase leading-none transition-colors sm:text-base";

export function EventGroupSelector({
  groups,
  activeGroupId,
  onSelect,
  indicatorLayoutId,
  containerClassName = defaultContainerClassName,
  buttonClassName = defaultButtonClassName,
}: EventGroupSelectorProps) {
  return (
    <div className={containerClassName}>
      {groups.map((group) => {
        const isActive = group.id === activeGroupId;

        return (
          <button
            key={group.id}
            type="button"
            onClick={() => onSelect(group.id)}
            className={`${buttonClassName} ${isActive ? "text-white" : "text-zinc-500"}`}
            aria-pressed={isActive}
          >
            {group.category}
            {isActive && (
              <motion.span
                layoutId={indicatorLayoutId}
                className="absolute inset-x-2 -bottom-px h-px bg-white"
                transition={{ duration: 0.2, ease: "easeInOut" }}
              />
            )}
          </button>
        );
      })}
    </div>
  );
}
