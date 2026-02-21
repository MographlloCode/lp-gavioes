export type NewsArticleBreadcrumbItem = {
  label: string;
  href: string;
};

export type NewsArticleHero = {
  src: string;
  alt: string;
  caption: string;
  credit: string;
};

export type NewsArticleRelatedItem = {
  title: string;
  href: string;
  kicker?: string;
  timestamp?: string;
  description?: string;
  imageSrc?: string;
  imageAlt?: string;
};

export type NewsArticleBodyBlock =
  | {
      type: "paragraph";
      content: string;
    }
  | {
      type: "subheading";
      content: string;
    }
  | {
      type: "quote";
      content: string;
      author?: string;
    }
  | {
      type: "bulletList";
      items: string[];
    };

export type NewsArticle = {
  slug: string;
  section: string;
  breadcrumb: NewsArticleBreadcrumbItem[];
  title: string;
  subtitle: string;
  author: string;
  location: string;
  publishedAt: string;
  updatedAt?: string;
  readTime: string;
  hero: NewsArticleHero;
  lead: string;
  body: NewsArticleBodyBlock[];
  related: NewsArticleRelatedItem[];
  recommendations?: NewsArticleRelatedItem[];
  mostRead: NewsArticleRelatedItem[];
  tags: string[];
};
