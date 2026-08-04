// Shared types for every family tree on the site.
//
// The Muponda clan (totem: Nyere) is not one traceable genealogical
// trunk — it's a totem/clan affiliation shared by 10+ surname lines
// (Chademwiri is one). Each surname line gets its own self-contained
// FamilyMember[] tree; there is no attempt to link them to a single
// common ancestor, since that link isn't genealogical, it's totemic.

export interface FamilyMember {
  id: string;
  name: string;
  birthYear?: number;
  gender?: 'M' | 'F';
  /** Father's id, if known. */
  fatherId?: string;
  /** Mother's id, if known. */
  motherId?: string;
  /** Ids of this person's spouse(s). */
  spouseIds?: string[];
  /** 0 = root generation for this family. */
  generation: number;
  confirmed: boolean;
  notes?: string;
}

export interface Family {
  /** URL-safe id, used as the route segment: /family-tree/[slug] */
  slug: string;
  /** Surname / display name. */
  name: string;
  description?: string;
  members: FamilyMember[];
}
