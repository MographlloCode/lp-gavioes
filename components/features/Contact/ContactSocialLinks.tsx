import Link from "next/link";
import {
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoTwitter,
  BiLogoYoutube,
} from "react-icons/bi";

import { contactSocialLinks } from "./contactData";

const socialIcons = {
  Instagram: BiLogoInstagram,
  YouTube: BiLogoYoutube,
  "X / Twitter": BiLogoTwitter,
  Facebook: BiLogoFacebook,
} as const;

export function ContactSocialLinks() {
  return (
    <section className="flex flex-col gap-3">
      <h3 className="font-helvetica-condensed text-2xl font-black uppercase text-zinc-950">
        Redes sociais
      </h3>

      <div className="flex flex-wrap gap-2 sm:gap-3">
        {contactSocialLinks.map((social) => {
          const Icon = socialIcons[social.label];

          return (
            <Link
              key={social.id}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-zinc-300 bg-white px-4 py-2 text-sm font-medium text-zinc-800 transition-colors duration-200 hover:border-zinc-500 hover:text-zinc-950"
            >
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-zinc-100 text-zinc-700">
                <Icon size={18} />
              </span>
              {social.label}
            </Link>
          );
        })}
      </div>
    </section>
  );
}
