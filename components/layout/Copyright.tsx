import Link from "next/link";

export function Copyright() {
  return (
    <div className="w-full border-t border-white/10 bg-black px-4 py-4 text-white sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-[1880px] flex-col gap-2 font-helvetica-condensed text-xs font-bold uppercase tracking-wide text-white/80 lg:flex-row lg:flex-wrap lg:items-center lg:justify-between">
        <p>Gaviões da Fiel 2026 © Todos os direitos reservado</p>
        <p>
          Criado pelo corinthiano{" "}
          <Link
            href="https://www.linkedin.com/in/mographllo"
            target="_blank"
            rel="noreferrer"
            className="text-white transition-opacity duration-200 hover:opacity-80"
          >
            Gustavo Mello
          </Link>
        </p>
        <p>Mantido pelo departamento de comunicação gaviões</p>
      </div>
    </div>
  );
}
