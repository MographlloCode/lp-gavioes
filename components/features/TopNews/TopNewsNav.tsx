type TopNewsNavProps = {
  total: number;
  activeIndex: number | null;
  onSelect?: (index: number) => void;
};

export function TopNewsNav({ total, activeIndex, onSelect }: TopNewsNavProps) {
  return (
    <div className="flex w-full items-center gap-2" aria-label="Navegação das notícias">
      {Array.from({ length: total }, (_, index) => (
        <button
          key={`top-news-nav-${index}`}
          type="button"
          className={`h-[5px] flex-1 cursor-pointer rounded-sm transition-colors duration-200 ${
            activeIndex === index ? "bg-white" : "bg-zinc-800"
          }`}
          onClick={() => onSelect?.(index)}
          aria-label={`Ir para notícia ${index + 1}`}
          aria-pressed={activeIndex === index}
        />
      ))}
    </div>
  );
}
