import { ContactLocationDrawer } from "@/components/features/Contact/ContactLocationDrawer";
import { contactLocationGroups } from "@/components/features/Contact/contactData";

type InstitutionalSubsedesDirectoryBlockProps = {
  title?: string;
  subtitle?: string;
};

export function InstitutionalSubsedesDirectoryBlock({
  title = "Subsedes oficiais",
  subtitle = "Selecione uma subsede para visualizar endereco, telefone e mapa.",
}: InstitutionalSubsedesDirectoryBlockProps) {
  const subsedesGroup = contactLocationGroups.find((group) => group.id === "subsedes");

  if (!subsedesGroup?.locations.length) {
    return null;
  }

  return (
    <section className="flex flex-col gap-4">
      <h3 className="font-helvetica-condensed text-3xl font-black uppercase text-zinc-950">
        {title}
      </h3>
      <p className="text-base leading-relaxed text-zinc-700">{subtitle}</p>

      <div className="flex flex-col gap-3">
        {subsedesGroup.locations.map((location) => (
          <ContactLocationDrawer key={location.id} location={location} />
        ))}
      </div>
    </section>
  );
}
