export type NewsCatalogItem = {
  id: string;
  title: string;
  description: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
  tag: string;
  source: string;
  publishedAt?: string;
  keywords: string[];
  isInternal: boolean;
};

export type NewsAdSlot = {
  id: string;
  label: string;
  size: string;
  description: string;
  href: string;
  cta: string;
};
