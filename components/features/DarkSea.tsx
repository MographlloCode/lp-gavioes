export function DarkSea() {
  return (
    <section className="flex min-h-[31rem] w-full items-center justify-center bg-black p-8 text-white sm:px-3 sm:py-10">
      <div className="mx-auto flex w-full flex-col items-center justify-center">
        <h1 className="m-0 w-full text-center font-helvetica-condensed text-[clamp(3.6rem,18.5vw,6.8rem)] leading-[0.9] font-black uppercase tracking-[-0.032em] sm:text-[clamp(5.6rem,14.2vw,8.8rem)] lg:text-[clamp(6.4rem,9.6vw,9.8rem)]">
          <span className="sm:hidden">
            Mar Negro
            <br />
            É Tradição
          </span>
          <span className="hidden sm:inline lg:hidden">
            Mar Negro É
            <br />
            Tradição
          </span>
          <span className="hidden lg:inline">Mar Negro É Tradição</span>
        </h1>

        <h2 className="mt-2 max-w-[18ch] text-center font-helvetica-condensed text-[clamp(1.2rem,6.2vw,2rem)] leading-[1.04] font-bold uppercase sm:mt-3 sm:max-w-[28ch] sm:text-[clamp(1.55rem,4.4vw,2.7rem)] lg:max-w-none lg:text-[clamp(1.7rem,2.7vw,3rem)]">
          <span className="sm:hidden">
            Vá Para Os Jogos
            <br />
            De Camisa Preta Ou
            <br />
            Oficial Gaviões
          </span>
          <span className="hidden sm:inline lg:hidden">
            Vá Para Os Jogos De Camisa Preta Ou
            <br />
            Oficial Gaviões
          </span>
          <span className="hidden lg:inline">
            Vá Para Os Jogos De Camisa Preta Ou Oficial Gaviões
          </span>
        </h2>
      </div>
    </section>
  );
}
