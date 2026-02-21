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

export type ContactSocialLink = {
  id: string;
  label: string;
  href: string;
};
