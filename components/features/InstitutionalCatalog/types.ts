export type InstitutionalCatalogItem = {
  id: string;
  slug: string;
  section: string;
  title: string;
  description: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
  tags: string[];
  source: string;
  keywords: string[];
  isInternal: boolean;
};
