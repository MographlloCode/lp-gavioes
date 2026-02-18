export type PartnerItem = {
  id: string;
  logoSrc: string;
  logoAlt: string;
  width: number;
  height: number;
};

type PartnersSectionData = {
  title: string;
  cta: {
    label: string;
    href: string;
  };
  items: PartnerItem[];
};

export const partnersData: PartnersSectionData = {
  title: "Nossos Parceiros",
  cta: {
    label: "Seja Parceiro",
    href: "/",
  },
  items: [
    {
      id: "blink_planet",
      logoSrc: "/blink_planet.svg",
      logoAlt: "Logo da Blink Planet",
      width: 150,
      height: 84,
    },
    {
      id: "esportes_da_sorte",
      logoSrc: "/esportes_da_sorte.svg",
      logoAlt: "Logo da Esportes da Sorte",
      width: 200,
      height: 69,
    },
  ],
};
