type NewsCatalogHeroProps = {
  totalItems: number;
  query: string;
};

export function NewsCatalogHero({ totalItems, query }: NewsCatalogHeroProps) {
  return (
    <section className="relative overflow-hidden bg-zinc-950 px-4 py-12 text-white sm:px-6 sm:py-16 lg:px-8">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(220,38,38,0.35),_transparent_45%),radial-gradient(circle_at_bottom_left,_rgba(113,113,122,0.22),_transparent_45%)]" />
      <div className="relative mx-auto flex w-full max-w-[1240px] flex-col gap-4">
        <p className="font-helvetica-condensed text-base font-black uppercase tracking-[0.12em] text-red-400">
          Notícias
        </p>
        <h1 className="max-w-4xl font-helvetica-condensed text-4xl leading-tight font-black uppercase sm:text-5xl lg:text-6xl">
          Central de notícias da Gaviões da Fiel
        </h1>
        <p className="max-w-3xl text-base leading-relaxed text-zinc-200 sm:text-lg">
          Acompanhe atualizações da torcida, bastidores, agenda e cobertura de
          assuntos relevantes para quem vive o Corinthians dentro e fora da
          arquibancada.
        </p>
        <p className="text-sm text-zinc-300">
          {query
            ? `Busca ativa por "${query}" em ${totalItems} notícia(s) indexada(s).`
            : `${totalItems} notícia(s) indexada(s) para navegação.`}
        </p>
      </div>
    </section>
  );
}
