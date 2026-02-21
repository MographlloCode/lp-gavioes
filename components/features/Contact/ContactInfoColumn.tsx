import { ContactForm } from "./ContactForm";
import { ContactSocialLinks } from "./ContactSocialLinks";

export function ContactInfoColumn() {
  return (
    <section className="flex flex-col gap-5 rounded-sm border border-zinc-200 bg-white p-4 sm:p-6">
      <ContactSocialLinks />

      <div className="pt-2 sm:pt-3">
        <h2 className="font-helvetica-condensed text-4xl leading-tight font-black uppercase text-zinc-950 sm:text-5xl">
          Central de contato
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-zinc-700">
          Use o formulário para dúvidas, solicitações ou informações sobre
          atividades da torcida. Para atendimento local, consulte também as
          subsedes e pontos oficiais ao lado.
        </p>
      </div>

      <ContactForm />
    </section>
  );
}
