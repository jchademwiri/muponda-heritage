export interface Business {
  slug: string;
  name: string;
  owner: string;
  category: string;
  description: string;
  details: string;
}

export const businesses: Business[] = [
  {
    slug: 'apex-web-solutions',
    name: 'Apex Web Solutions',
    owner: 'Jacob Chademwiri',
    category: 'Web Development',
    description: '[Details coming soon]',
    details: '[Placeholder] Services offered, contact info and location will go here once confirmed.',
  },
  {
    slug: 'tender-edge-solutions',
    name: 'Tender Edge Solutions',
    owner: 'Jacob Chademwiri',
    category: 'Tender & Procurement Services',
    description: '[Details coming soon]',
    details: '[Placeholder] Services offered, contact info and location will go here once confirmed.',
  },
  {
    slug: 'kariba-fish',
    name: 'Kariba Fish',
    owner: 'Sylvester',
    category: 'Fisheries',
    description: '[Details coming soon]',
    details: '[Placeholder] Services offered, contact info and location will go here once confirmed.',
  },
  {
    slug: 'solar-systems',
    name: 'Solar Systems',
    owner: 'Nemaunga',
    category: 'Solar Energy',
    description: '[Details coming soon]',
    details: '[Placeholder] Services offered, contact info and location will go here once confirmed.',
  },
  {
    slug: 'rhino-wood-works',
    name: 'Rhino Wood Works',
    owner: 'Rhino',
    category: 'Woodwork & Carpentry',
    description: '[Details coming soon]',
    details: '[Placeholder] Services offered, contact info and location will go here once confirmed.',
  },
];

export function getBusiness(slug: string): Business | undefined {
  return businesses.find((b) => b.slug === slug);
}
