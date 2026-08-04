export interface FamilyEvent {
  slug: string;
  title: string;
  date: string;
  location: string;
  description: string;
  details: string;
}

export const events: FamilyEvent[] = [
  {
    slug: 'annual-family-reunion',
    title: 'Annual Family Reunion',
    date: '[Date TBC]',
    location: '[Location]',
    description:
      'Details about the gathering, who should attend, and what to expect.',
    details:
      '[Placeholder] Full agenda, RSVP details, and what to bring will go here once confirmed.',
  },
  {
    slug: 'watsomba-remembrance-ceremony',
    title: 'Remembrance Ceremony — Watsomba',
    date: '[Date TBC]',
    location: 'Watsomba, the Great Fig Tree',
    description:
      'Details about this remembrance ceremony and its significance.',
    details:
      '[Placeholder] Background on the ceremony, who leads it, and how family members can take part will go here once confirmed.',
  },
];

export function getEvent(slug: string): FamilyEvent | undefined {
  return events.find((e) => e.slug === slug);
}
