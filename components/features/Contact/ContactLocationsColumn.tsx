import { contactLocationGroups } from "./contactData";
import { ContactLocationDrawer } from "./ContactLocationDrawer";

export function ContactLocationsColumn() {
  return (
    <section className="flex flex-col gap-6 rounded-sm border border-zinc-200 bg-zinc-50 p-4 sm:p-6">
      <div>
        <h1 className="font-helvetica-condensed text-4xl leading-tight font-black uppercase text-zinc-950 sm:text-5xl">
          Sedes e pontos de encontro
        </h1>
        <p className="mt-2 text-sm leading-relaxed text-zinc-700">
          Selecione uma unidade para visualizar endereço, telefone e mapa no Google
          Maps.
        </p>
      </div>

      {contactLocationGroups.map((group) => (
        <section key={group.id} className="flex flex-col gap-3">
          <h2 className="font-helvetica-condensed text-2xl font-black uppercase text-zinc-950">
            {group.title}
          </h2>
          <div className="flex flex-col gap-3">
            {group.locations.map((location) => (
              <ContactLocationDrawer key={location.id} location={location} />
            ))}
          </div>
        </section>
      ))}
    </section>
  );
}
