type ContactMapEmbedProps = {
  query: string;
  title: string;
};

export function ContactMapEmbed({ query, title }: ContactMapEmbedProps) {
  const src = `https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed`;

  return (
    <div className="overflow-hidden rounded-sm border border-zinc-300 bg-zinc-100">
      <iframe
        title={title}
        src={src}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="h-56 w-full border-0"
      />
    </div>
  );
}
