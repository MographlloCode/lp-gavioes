import type { InstitutionalPage } from "../types";

export const subsedesPage: InstitutionalPage = {
  slug: "subsedes",
  section: "Institucional",
  title: "Subsedes",
  description:
    "Catalogo de subsedes oficiais da Gavioes da Fiel com endereco, telefone e mapa.",
  blocks: [
    {
      type: "title",
      kicker: "Institucional",
      title: "Subsedes",
      subtitle:
        "Unidades representativas oficiais da Gavioes da Fiel no Brasil e no exterior.",
    },
    {
      type: "subsedesDirectory",
      title: "Subsedes oficiais",
      subtitle:
        "Visualize os dados de cada unidade e abra para ver mapa, telefone e informacoes complementares.",
    },
  ],
};
