import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { InstitutionalPageTemplate } from "@/components/features/InstitutionalPage/InstitutionalPageTemplate";
import { institutionalPages } from "@/components/features/InstitutionalPage/institutionalPageData";

const defaultInstitutionalPage = institutionalPages[0];

export const metadata: Metadata = defaultInstitutionalPage
  ? {
      title: "Institucional | Gavioes da Fiel",
      description:
        "Modelo institucional componentizado com galeria, textos formatados e blocos editoriais reutilizaveis.",
    }
  : {
      title: "Institucional | Gavioes da Fiel",
    };

export default function InstitutionalPage() {
  if (!defaultInstitutionalPage) {
    notFound();
  }

  return <InstitutionalPageTemplate page={defaultInstitutionalPage} />;
}
