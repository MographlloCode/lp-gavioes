import type { Metadata } from "next";

import { ContactPageTemplate } from "@/components/features/Contact/ContactPageTemplate";

export const metadata: Metadata = {
  title: "Contato | Gaviões da Fiel",
  description:
    "Canais de contato da Gaviões da Fiel, com subsedes, pontos oficiais e formulário para atendimento.",
};

export default function ContatoPage() {
  return <ContactPageTemplate />;
}
