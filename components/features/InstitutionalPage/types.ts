export type InstitutionalInlineNode = {
  text: string;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  link?: string;
};

export type InstitutionalRichTextItem =
  | {
      kind: "paragraph";
      nodes: InstitutionalInlineNode[];
    }
  | {
      kind: "subheading";
      nodes: InstitutionalInlineNode[];
    }
  | {
      kind: "list";
      ordered?: boolean;
      items: InstitutionalInlineNode[][];
    };

export type InstitutionalImage = {
  src: string;
  alt: string;
  caption?: string;
  credit?: string;
  aspectRatio?: "wide" | "standard" | "portrait" | "square";
};

export type InstitutionalLocation = {
  name: string;
  address: string;
  neighborhood?: string;
  zipCode?: string;
  city?: string;
  foundation?: string;
  phone?: string;
  mapQuery: string;
};

export type InstitutionalContentBlock =
  | {
      type: "title";
      kicker?: string;
      title: string;
      subtitle?: string;
    }
  | {
      type: "richText";
      content: InstitutionalRichTextItem[];
    }
  | {
      type: "quote";
      quote: string;
      author?: string;
    }
  | {
      type: "columns";
      columns: InstitutionalRichTextItem[][];
    }
  | {
      type: "image";
      image: InstitutionalImage;
    }
  | {
      type: "textWithImage";
      image: InstitutionalImage;
      imagePosition?: "left" | "right";
      content: InstitutionalRichTextItem[];
    }
  | {
      type: "gallery";
      title?: string;
      description?: string;
      images: InstitutionalImage[];
    }
  | {
      type: "location";
      title?: string;
      subtitle?: string;
      location: InstitutionalLocation;
    };

export type InstitutionalPage = {
  slug: string;
  section: string;
  title: string;
  description: string;
  blocks: InstitutionalContentBlock[];
};
