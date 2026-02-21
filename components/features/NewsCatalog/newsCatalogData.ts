import { newsItems } from "../News/newsData";
import { newsArticles } from "../NewsArticle/newsArticleData";
import type { NewsAdSlot, NewsCatalogItem } from "./types";

const fallbackImageSrc = "/gavioes_torcida.png";
const fallbackImageAlt = "Torcida da Gaviões da Fiel";

function normalizeText(value: string) {
  return value
    .toLocaleLowerCase("pt-BR")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function isInternalHref(href: string) {
  return href.startsWith("/");
}

function getSourceFromHref(href: string) {
  if (isInternalHref(href)) {
    return "Gaviões da Fiel";
  }

  if (href.includes("meutimao.com.br")) {
    return "Meu Timão";
  }

  if (href.includes("gavioes.com.br")) {
    return "Portal Gaviões";
  }

  return "Fonte externa";
}

function getUniqueItems(items: NewsCatalogItem[]) {
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

const internalArticles: NewsCatalogItem[] = newsArticles.map((article) => ({
  id: `article-${article.slug}`,
  title: article.title,
  description: article.subtitle,
  href: `/noticias/${article.slug}`,
  imageSrc: article.hero.src,
  imageAlt: article.hero.alt,
  tag: article.section,
  source: "Gaviões da Fiel",
  publishedAt: article.publishedAt,
  keywords: [article.section, ...article.tags, article.location],
  isInternal: true,
}));

const highlightedNews: NewsCatalogItem[] = newsItems.map((item) => ({
  id: `highlight-${item.id}`,
  title: item.title,
  description: item.description,
  href: item.href,
  imageSrc: item.imageSrc,
  imageAlt: item.imageAlt,
  tag: item.tag,
  source: getSourceFromHref(item.href),
  keywords: [item.tag],
  isInternal: isInternalHref(item.href),
}));

const relatedNews: NewsCatalogItem[] = newsArticles.flatMap((article) =>
  article.related.map((item, index) => ({
    id: `related-${article.slug}-${index + 1}`,
    title: item.title,
    description:
      item.kicker && item.timestamp
        ? `${item.kicker} · ${item.timestamp}`
        : item.kicker
          ? `Cobertura: ${item.kicker}`
          : "Cobertura complementar sobre torcida, clube e arena.",
    href: item.href,
    imageSrc: article.hero.src || fallbackImageSrc,
    imageAlt: article.hero.alt || fallbackImageAlt,
    tag: item.kicker ?? article.section,
    source: getSourceFromHref(item.href),
    publishedAt: item.timestamp,
    keywords: [article.section, ...article.tags],
    isInternal: isInternalHref(item.href),
  })),
);

const mostReadNews: NewsCatalogItem[] = newsArticles.flatMap((article) =>
  article.mostRead.map((item, index) => ({
    id: `most-read-${article.slug}-${index + 1}`,
    title: item.title,
    description:
      "Conteúdo em destaque entre os assuntos mais buscados pela torcida.",
    href: item.href,
    imageSrc: article.hero.src || fallbackImageSrc,
    imageAlt: article.hero.alt || fallbackImageAlt,
    tag: "Mais lidas",
    source: getSourceFromHref(item.href),
    keywords: ["mais lidas", article.section, ...article.tags],
    isInternal: isInternalHref(item.href),
  })),
);

export const newsCatalogItems = getUniqueItems([
  ...internalArticles,
  ...highlightedNews,
  ...relatedNews,
  ...mostReadNews,
]);

export function searchNewsCatalogItems(query: string) {
  const normalizedQuery = normalizeText(query.trim());

  if (!normalizedQuery) {
    return newsCatalogItems;
  }

  return newsCatalogItems.filter((item) => {
    const searchText = normalizeText(
      [
        item.title,
        item.description,
        item.tag,
        item.source,
        item.publishedAt ?? "",
        item.keywords.join(" "),
      ].join(" "),
    );

    return searchText.includes(normalizedQuery);
  });
}

export function getNewsCatalogTags(limit = 8) {
  const tagCounts = new Map<string, number>();

  for (const item of newsCatalogItems) {
    const currentCount = tagCounts.get(item.tag) ?? 0;
    tagCounts.set(item.tag, currentCount + 1);
  }

  return [...tagCounts.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, limit)
    .map(([tag]) => tag);
}

export const newsAdSlots: NewsAdSlot[] = [
  {
    id: "catalog-hero-ad",
    label: "Banner premium",
    size: "970x250",
    description:
      "Alcance em destaque no topo da Central de Notícias com alta visibilidade.",
    href: "https://gavioes.com.br/noticias.php",
    cta: "Quero anunciar",
  },
  {
    id: "catalog-side-ad-1",
    label: "Destaque lateral",
    size: "300x600",
    description:
      "Formato vertical ideal para campanhas de performance e presença de marca.",
    href: "https://gavioes.com.br/noticias.php",
    cta: "Reservar espaço",
  },
  {
    id: "catalog-side-ad-2",
    label: "Retângulo médio",
    size: "300x250",
    description:
      "Posição estratégica para divulgar produtos, eventos e ações promocionais.",
    href: "https://gavioes.com.br/noticias.php",
    cta: "Anuncie aqui",
  },
];
