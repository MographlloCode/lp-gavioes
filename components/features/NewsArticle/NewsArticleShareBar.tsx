"use client";

import {
  BiEnvelope,
  BiLinkAlt,
  BiLogoFacebook,
  BiLogoTwitter,
  BiLogoWhatsapp,
} from "react-icons/bi";

type NewsArticleShareBarProps = {
  orientation?: "vertical" | "horizontal";
};

const shareActions = [
  { label: "Compartilhar no WhatsApp", icon: BiLogoWhatsapp },
  { label: "Compartilhar no Facebook", icon: BiLogoFacebook },
  { label: "Compartilhar no X", icon: BiLogoTwitter },
  { label: "Enviar por e-mail", icon: BiEnvelope },
  { label: "Copiar link da matéria", icon: BiLinkAlt },
];

export function NewsArticleShareBar({
  orientation = "vertical",
}: NewsArticleShareBarProps) {
  const containerClasses =
    orientation === "vertical"
      ? "sticky top-32 hidden lg:flex lg:flex-col lg:items-center lg:gap-2"
      : "flex flex-wrap items-center gap-2";

  return (
    <div className={containerClasses} aria-label="Compartilhamento">
      {shareActions.map((action) => (
        <button
          key={action.label}
          type="button"
          aria-label={action.label}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-300 text-zinc-600 transition-colors duration-200 hover:border-zinc-500 hover:text-zinc-900"
        >
          <action.icon size={18} />
        </button>
      ))}
    </div>
  );
}
