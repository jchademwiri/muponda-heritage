import type { Family } from './types';
import { chademwiriMembers } from './chademwiri';

export * from './types';
export * from './helpers';

// Registry of surname-lines under the Muponda clan (totem: Nyere).
// Muponda itself has no single traceable genealogical trunk — it's a
// clan/totem affiliation shared across 10+ surnames. Add new families
// here as their data becomes available; each gets its own page at
// /family-tree/[slug] automatically.
export const families: Family[] = [
  {
    slug: 'chademwiri',
    name: 'Chademwiri',
    description:
      'Descends from two brothers, Isaac and David Chademuwiri. One of the surname lines under the Muponda clan, sharing the Nyere/Nzvidzi totem.',
    members: chademwiriMembers,
  },
];

export function getFamily(slug: string): Family | undefined {
  return families.find((f) => f.slug === slug);
}
