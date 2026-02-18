"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { BiChevronDown } from "react-icons/bi";

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.defaultMuted = true;
    video.muted = true;
    video.playsInline = true;
    video.preload = "auto";
    video.setAttribute("playsinline", "true");
    video.setAttribute("webkit-playsinline", "true");
    video.setAttribute("muted", "");
    video.load();

    const ensureAutoplay = () => {
      if (!video.paused) return;
      video.muted = true;
      const promise = video.play();
      if (promise) {
        promise.catch(() => {});
      }
    };

    if (video.readyState >= 2) {
      ensureAutoplay();
    }

    video.addEventListener("loadedmetadata", ensureAutoplay);
    video.addEventListener("loadeddata", ensureAutoplay);
    video.addEventListener("canplay", ensureAutoplay);
    video.addEventListener("canplaythrough", ensureAutoplay);

    const retryIntervalId = window.setInterval(() => {
      if (!video.paused) {
        window.clearInterval(retryIntervalId);
        return;
      }

      ensureAutoplay();
    }, 250);

    const retryTimeoutId = window.setTimeout(() => {
      window.clearInterval(retryIntervalId);
    }, 10000);

    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        ensureAutoplay();
      }
    };

    const handleFocus = () => {
      ensureAutoplay();
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    window.addEventListener("focus", handleFocus);
    window.addEventListener("pageshow", handleFocus);
    document.addEventListener("pointerdown", handleFocus, {
      once: true,
      passive: true,
    });
    document.addEventListener("touchstart", handleFocus, {
      once: true,
      passive: true,
    });

    let observer: IntersectionObserver | null = null;

    if ("IntersectionObserver" in window) {
      observer = new IntersectionObserver(
        (entries) => {
          if (entries.some((entry) => entry.isIntersecting)) {
            ensureAutoplay();
          }
        },
        { threshold: 0.1 }
      );

      observer.observe(video);
    }

    return () => {
      window.clearInterval(retryIntervalId);
      window.clearTimeout(retryTimeoutId);
      video.removeEventListener("loadedmetadata", ensureAutoplay);
      video.removeEventListener("loadeddata", ensureAutoplay);
      video.removeEventListener("canplay", ensureAutoplay);
      video.removeEventListener("canplaythrough", ensureAutoplay);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("focus", handleFocus);
      window.removeEventListener("pageshow", handleFocus);
      document.removeEventListener("pointerdown", handleFocus);
      document.removeEventListener("touchstart", handleFocus);
      observer?.disconnect();
    };
  }, []);

  return (
    <section className="relative w-screen h-screen overflow-hidden">
        <div className="absolute flex items-center justify-center w-full h-full z-10">
            <Image src={'/logo_gav.svg'} alt="" width={300} height={300} className="-ms-4 max-w-sm lg:max-w-lg brightness-90 pointer-events-none" />
            <div className="absolute w-full h-full flex items-end justify-center py-3">
                <Link href={"#topnews"} className="w-14 h-10 group bg-black rounded-t-full flex items-center justify-center cursor-pointer hover:text-white hover:bg-zinc-950 transition-all ease-in-out duration-200">
                    <BiChevronDown size={40} className="text-white/50 transition-all ease-in-out duration-200 group-hover:text-white"/>
                </Link>
            </div>
        </div>
        <video
          ref={videoRef}
          suppressHydrationWarning
          width="320"
          height="240"
          muted
          loop
          autoPlay
          playsInline
          preload="auto"
          disablePictureInPicture
          disableRemotePlayback
          className="brightness-25 border-14 border-black object-cover w-full h-full"
        >
            <source src="/gavioes_vid.mp4" media="(max-width: 1023px)" type="video/mp4" />
            <source src="/gavioes_vid_2.mp4" media="(min-width: 1024px)" type="video/mp4" />
            <source src="/gavioes_vid.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    </section>
  )
}
