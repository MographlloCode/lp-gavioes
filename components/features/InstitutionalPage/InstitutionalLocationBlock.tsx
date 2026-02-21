import type { InstitutionalLocation } from "./types";

type InstitutionalLocationBlockProps = {
  title?: string;
  subtitle?: string;
  location: InstitutionalLocation;
};

export function InstitutionalLocationBlock({
  title,
  subtitle,
  location,
}: InstitutionalLocationBlockProps) {
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(location.mapQuery)}&output=embed`;

  return (
    <section className="flex flex-col gap-4">
      {title ? (
        <h3 className="font-helvetica-condensed text-3xl font-black uppercase text-zinc-950">
          {title}
        </h3>
      ) : null}
      {subtitle ? (
        <p className="text-base leading-relaxed text-zinc-700">{subtitle}</p>
      ) : null}

      <article className="p-0">
        <h4 className="font-helvetica-condensed text-2xl font-black uppercase text-zinc-950">
          {location.name}
        </h4>

        <div className="mt-3 grid grid-cols-1 gap-x-5 gap-y-2 text-sm text-zinc-700 sm:grid-cols-2">
          <p>
            <span className="font-semibold text-zinc-900">Endereco:</span>{" "}
            {location.address}
          </p>
          <p>
            <span className="font-semibold text-zinc-900">Telefone:</span>{" "}
            {location.phone ?? "Nao informado"}
          </p>
          {location.neighborhood ? (
            <p>
              <span className="font-semibold text-zinc-900">Bairro:</span>{" "}
              {location.neighborhood}
            </p>
          ) : null}
          {location.zipCode ? (
            <p>
              <span className="font-semibold text-zinc-900">CEP:</span>{" "}
              {location.zipCode}
            </p>
          ) : null}
          {location.city ? (
            <p>
              <span className="font-semibold text-zinc-900">Cidade:</span>{" "}
              {location.city}
            </p>
          ) : null}
          {location.foundation ? (
            <p>
              <span className="font-semibold text-zinc-900">Fundacao:</span>{" "}
              {location.foundation}
            </p>
          ) : null}
        </div>

        <div className="mt-4 overflow-hidden rounded-sm">
          <iframe
            title={`Mapa da unidade ${location.name}`}
            src={mapSrc}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-64 w-full border-0 sm:h-72"
          />
        </div>
      </article>
    </section>
  );
}
