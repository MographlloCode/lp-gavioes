import { institutionalPages } from "./data";

export { institutionalPages };

export function getInstitutionalPageBySlug(slug: string) {
  return institutionalPages.find((page) => page.slug === slug);
}
