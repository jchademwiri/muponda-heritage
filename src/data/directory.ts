export interface Business {
  slug: string;
  name: string;
  owner: string;
  category: string;
  description: string;
  details: string;
  website?: string;
  phone?: string;
  email?: string;
  location?: string;
}

export const businesses: Business[] = [
  {
    slug: 'apex-web-solutions',
    name: 'Apex Web Solutions',
    owner: 'Jacob Chademwiri',
    category: 'Web Development',
    description:
      'Professional web development studio building custom, high-performance websites and e-commerce solutions with modern tech (Astro, React).',
    details:
      'Services: Custom Development, E-commerce Solutions, Performance Optimization, and UI/UX Design. Pricing runs from a R299/month Starter plan to a R999/month Premium plan (custom web apps, advanced analytics), plus a R499 setup fee. Portfolio includes OEL Global Services, Becca’s Mobile Spa, and Tender Edge Solutions.',
    website: 'https://apexwebsolutions.co.za/',
    phone: '+27 74 049 1433',
    email: 'info@apexwebsolutions.co.za',
  },
  {
    slug: 'tender-edge-solutions',
    name: 'Tender Edge Solutions',
    owner: 'Jacob Chademwiri',
    category: 'Tender & Procurement Services',
    description:
      "Gauteng-based tender compliance specialists — CSD registration, CIDB grading, B-BBEE affidavits, COIDA registration and full tender document compilation.",
    details:
      'A Playhouse Media Group division. Offers three tiers: Compliance Ready (CSD, B-BBEE, COIDA, CIDB registrations), Full Tender Compilation (their flagship — complete bid review, sourcing and packaging of a submission-ready tender), and Bid Support & Review (quoted per requirement). First Tender Readiness Assessment is free.',
    website: 'https://www.tenderedgesolutions.co.za/',
    phone: '074 501 7094',
    email: 'tenders@tenderedgesolutions.co.za',
    location: 'Centurion, Gauteng',
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
