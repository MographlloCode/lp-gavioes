"use client";

import { useEffect, useState } from "react";
import { BiChevronUp } from "react-icons/bi";

const SHOW_BUTTON_AT_PX = 240;

export function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateVisibility = () => {
      setIsVisible(window.scrollY > SHOW_BUTTON_AT_PX);
    };

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });

    return () => {
      window.removeEventListener("scroll", updateVisibility);
    };
  }, []);

  return (
    <button
      type="button"
      aria-label="Voltar ao topo"
      title="Voltar ao topo"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={[
        "fixed bottom-4 right-4 z-[95] flex h-11 w-11 items-center justify-center rounded-full bg-zinc-800 text-white shadow-lg transition-all duration-200",
        "hover:bg-zinc-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70",
        "md:bottom-6 md:right-6",
        isVisible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-2 opacity-0",
      ].join(" ")}
    >
      <BiChevronUp size={24} />
    </button>
  );
}
