import { ContactInfoColumn } from "./ContactInfoColumn";
import { ContactLocationsColumn } from "./ContactLocationsColumn";

export function ContactPageTemplate() {
  return (
    <main className="w-full pt-28 sm:pt-32">
      <section className="w-full bg-zinc-100 px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
        <div className="mx-auto grid w-full max-w-[1240px] grid-cols-1 gap-6 xl:grid-cols-[1.15fr_0.85fr] xl:items-start xl:gap-8">
          <ContactLocationsColumn />
          <ContactInfoColumn />
        </div>
      </section>
    </main>
  );
}
