import { footerSections } from "@/components/layout/Footer/data";
import { navbarData } from "@/components/layout/navbarData";

import { institutionalPages } from "../InstitutionalPage/institutionalPageData";
import type { InstitutionalCatalogItem } from "./types";

const fallbackImageSrc = "/gavioes_torcida_2.png";
const fallbackImageAlt = "Torcida da Gavioes da Fiel";

const sectionImages: Record<string, { src: string; alt: string }> = {
  "Gavioes da Fiel": {
    src: "/gavioes_torcida_2.png",
    alt: "Torcida da Gavioes da Fiel em dia de jogo",
  },
  Torcida: {
    src: "/gavioes_torcida.png",
    alt: "Setor da torcida da Gavioes da Fiel",
  },
  Carnaval: {
    src: "/camisa_gavioes_03.png",
    alt: "Linha visual e identidade do carnaval da Gavioes",
  },
  Corinthians: {
    src: "/logo_gavioes_subsede.png",
    alt: "Simbolo institucional ligado ao Corinthians",
  },
  Multimidia: {
    src: "/camisa_gavioes_01.png",
    alt: "Material visual da area multimidia da Gavioes",
  },
};

type CatalogSeed = {
  title: string;
  href: string;
  section: string;
  tags: string[];
  source: string;
  description: string;
  imageSrc?: string;
  imageAlt?: string;
};

function normalizeText(value: string) {
  return value
    .toLocaleLowerCase("pt-BR")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function slugify(value: string) {
  return normalizeText(value)
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function isInternalHref(href: string) {
  return href.startsWith("/");
}

function getImageForSection(section: string) {
  return sectionImages[section] ?? {
    src: fallbackImageSrc,
    alt: fallbackImageAlt,
  };
}

function getUniqueItems(items: InstitutionalCatalogItem[]) {
  const seen = new Set<string>();

  return items.filter((item) => {
    const key = `${item.href}|${item.title}`;
    if (seen.has(key)) {
      return false;
    }

    seen.add(key);
    return true;
  });
}

function collectInternalSeeds(): CatalogSeed[] {
  return institutionalPages.map((page) => {
    let imageSrc = fallbackImageSrc;
    let imageAlt = fallbackImageAlt;

    for (const block of page.blocks) {
      if (block.type === "image" || block.type === "textWithImage") {
        imageSrc = block.image.src;
        imageAlt = block.image.alt;
        break;
      }

      if (block.type === "gallery" && block.images.length > 0) {
        imageSrc = block.images[0].src;
        imageAlt = block.images[0].alt;
        break;
      }
    }

    return {
      title: page.title,
      href: `/institucional/${page.slug}`,
      section: page.section,
      tags: [page.section, "Conteudo interno", "Historia"],
      source: "Portal Gavioes",
      description: page.description,
      imageSrc,
      imageAlt,
    };
  });
}

function collectNavbarSeeds(): CatalogSeed[] {
  const seeds: CatalogSeed[] = [];

  for (const navItem of navbarData.navItems) {
    if (!navItem.dropdown?.length) {
      continue;
    }

    for (const group of navItem.dropdown) {
      for (const item of group.items) {
        const secondaryTag = group.name ?? "Institucional";

        seeds.push({
          title: item.name,
          href: item.link,
          section: navItem.name,
          tags: [navItem.name, secondaryTag, "Menu superior"],
          source: "Menu superior",
          description: `Guia institucional sobre ${item.name.toLocaleLowerCase("pt-BR")} dentro de ${navItem.name}.`,
        });
      }
    }
  }

  return seeds;
}

function collectFooterSeeds(): CatalogSeed[] {
  const seeds: CatalogSeed[] = [];

  for (const section of footerSections) {
    for (const link of section.links) {
      const normalizedSection = section.title
        .toLocaleLowerCase("pt-BR")
        .replace(/\b\w/g, (letter) => letter.toLocaleUpperCase("pt-BR"));

      seeds.push({
        title: link.label,
        href: link.href,
        section: normalizedSection,
        tags: [normalizedSection, "Rodape", "Informacoes oficiais"],
        source: "Rodape oficial",
        description: `Material institucional de ${link.label.toLocaleLowerCase("pt-BR")} organizado no rodape oficial.`,
      });
    }
  }

  return seeds;
}

function mapSeedToCatalogItem(seed: CatalogSeed, index: number): InstitutionalCatalogItem {
  const image = getImageForSection(seed.section);
  const uniqueTags = [...new Set(seed.tags)];
  const slug = isInternalHref(seed.href)
    ? seed.href.replace(/^\/+/, "").replace(/\//g, "-")
    : slugify(seed.title);

  return {
    id: `institutional-${slug}-${index + 1}`,
    slug,
    section: seed.section,
    title: seed.title,
    description: seed.description,
    href: seed.href,
    imageSrc: seed.imageSrc ?? image.src,
    imageAlt: seed.imageAlt ?? image.alt,
    tags: uniqueTags,
    source: seed.source,
    keywords: [seed.title, seed.section, seed.source, ...uniqueTags],
    isInternal: isInternalHref(seed.href),
  };
}

const allSeeds = [
  ...collectInternalSeeds(),
  ...collectNavbarSeeds(),
  ...collectFooterSeeds(),
];

export const institutionalCatalogItems = getUniqueItems(
  allSeeds.map(mapSeedToCatalogItem),
).slice(0, 20);

export function searchInstitutionalCatalogItems(query: string, tag?: string) {
  const normalizedQuery = normalizeText(query.trim());
  const normalizedTag = normalizeText((tag ?? "").trim());

  return institutionalCatalogItems.filter((item) => {
    const matchesTag =
      !normalizedTag ||
      item.tags.some((itemTag) => normalizeText(itemTag) === normalizedTag);

    if (!matchesTag) {
      return false;
    }

    if (!normalizedQuery) {
      return true;
    }

    const searchText = normalizeText(
      [
        item.title,
        item.description,
        item.section,
        item.source,
        ...item.tags,
        ...item.keywords,
      ].join(" "),
    );

    return searchText.includes(normalizedQuery);
  });
}

export function getInstitutionalCatalogTags(limit = 12) {
  const tagCounts = new Map<string, number>();

  for (const item of institutionalCatalogItems) {
    for (const tag of item.tags) {
      const currentCount = tagCounts.get(tag) ?? 0;
      tagCounts.set(tag, currentCount + 1);
    }
  }

  return [...tagCounts.entries()]
    .sort((a, b) => {
      if (b[1] === a[1]) {
        return a[0].localeCompare(b[0], "pt-BR");
      }

      return b[1] - a[1];
    })
    .slice(0, limit)
    .map(([tag]) => tag);
}
