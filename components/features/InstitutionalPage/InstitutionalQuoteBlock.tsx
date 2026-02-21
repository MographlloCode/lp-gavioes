type InstitutionalQuoteBlockProps = {
  quote: string;
  author?: string;
};

export function InstitutionalQuoteBlock({
  quote,
  author,
}: InstitutionalQuoteBlockProps) {
  return (
    <blockquote className="rounded-sm border-l-4 border-zinc-900 bg-zinc-100 px-5 py-4 text-zinc-800">
      <p className="text-xl leading-relaxed italic">&ldquo;{quote}&rdquo;</p>
      {author ? (
        <cite className="mt-3 block text-sm font-medium not-italic text-zinc-600">
          {author}
        </cite>
      ) : null}
    </blockquote>
  );
}
