import Link from "next/link";

import type { InstitutionalYouTubeVideo } from "./types";

type InstitutionalYoutubeVideoBlockProps = {
  title?: string;
  subtitle?: string;
  video: InstitutionalYouTubeVideo;
};

function getYoutubeVideoId(url: string) {
  try {
    const parsedUrl = new URL(url);
    const host = parsedUrl.hostname.replace(/^www\./, "");

    if (host === "youtube.com" || host === "m.youtube.com") {
      if (parsedUrl.pathname === "/watch") {
        return parsedUrl.searchParams.get("v");
      }

      if (parsedUrl.pathname.startsWith("/shorts/")) {
        return parsedUrl.pathname.split("/")[2] ?? null;
      }

      if (parsedUrl.pathname.startsWith("/embed/")) {
        return parsedUrl.pathname.split("/")[2] ?? null;
      }
    }

    if (host === "youtu.be") {
      const id = parsedUrl.pathname.replace("/", "").trim();
      return id || null;
    }
  } catch {
    return null;
  }

  return null;
}

export function InstitutionalYoutubeVideoBlock({
  title,
  subtitle,
  video,
}: InstitutionalYoutubeVideoBlockProps) {
  const videoId = getYoutubeVideoId(video.url);

  if (!videoId) {
    return (
      <section className="flex flex-col gap-3">
        {title ? (
          <h3 className="font-helvetica-condensed text-3xl font-black uppercase text-zinc-950">
            {title}
          </h3>
        ) : null}
        {subtitle ? (
          <p className="text-base leading-relaxed text-zinc-700">{subtitle}</p>
        ) : null}
        <p className="text-sm text-zinc-700">
          Nao foi possivel incorporar este video.{" "}
          <Link
            href={video.url}
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-2"
          >
            Abrir no YouTube
          </Link>
        </p>
      </section>
    );
  }

  const embedUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <section className="flex flex-col gap-3">
      {title ? (
        <h3 className="font-helvetica-condensed text-3xl font-black uppercase text-zinc-950">
          {title}
        </h3>
      ) : null}
      {subtitle ? (
        <p className="text-base leading-relaxed text-zinc-700">{subtitle}</p>
      ) : null}
      <div className="overflow-hidden rounded-sm border border-zinc-200 bg-zinc-100">
        <iframe
          title={video.title ?? "Video institucional"}
          src={embedUrl}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="aspect-video w-full border-0"
        />
      </div>
    </section>
  );
}
