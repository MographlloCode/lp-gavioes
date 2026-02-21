export type ContactLocation = {
  id: string;
  name: string;
  address: string;
  neighborhood?: string;
  zipCode?: string;
  city?: string;
  foundation?: string;
  phone?: string;
  mapQuery: string;
};

export type ContactLocationGroup = {
  id: string;
  title: string;
  locations: ContactLocation[];
};

export type ContactSocialLabel =
  | "Instagram"
  | "YouTube"
  | "X / Twitter"
  | "Facebook";

export type ContactSocialLink = {
  id: string;
  label: ContactSocialLabel;
  href: string;
};
