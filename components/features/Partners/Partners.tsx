import Image from "next/image";
import Link from "next/link";

import { partnersData } from "./partnersData";

export function Partners() {
  return (
    <section className="w-full px-4 sm:px-6 md:px-8 min-h-150 flex justify-center">
      <div className="mx-auto flex min-h-72 w-full flex-col gap-12 sm:gap-24 items-center justify-center bg-black px-6 py-8 sm:min-h-66 sm:px-8 sm:py-10 md:px-10 lg:min-h-70">
        <h2 className="text-center font-helvetica-condensed text-[clamp(1.6rem,3vw,2.2rem)] leading-none font-black uppercase tracking-tight text-white">
          {partnersData.title}
        </h2>

        <div className="mt-7 flex w-full flex-col items-center justify-center gap-8 sm:mt-8 sm:flex-row sm:gap-10 md:gap-12">
          {partnersData.items.map((partner) => (
            <Image
              key={partner.id}
              src={partner.logoSrc}
              alt={partner.logoAlt}
              width={partner.width}
              height={partner.height}
              className="h-auto w-auto max-w-full"
              sizes="(max-width: 640px) 200px, (max-width: 1024px) 180px, 200px"
            />
          ))}
        </div>

        <Link
          href={partnersData.cta.href}
          className="mt-8 inline-flex border border-white px-5 pt-4 pb-3 font-helvetica-condensed text-[clamp(1.25rem,1.7vw,1.75rem)] leading-none font-black uppercase tracking-tight text-white transition-colors duration-300 hover:bg-white hover:text-black sm:mt-10"
        >
          {partnersData.cta.label}
        </Link>
      </div>
    </section>
  );
}
