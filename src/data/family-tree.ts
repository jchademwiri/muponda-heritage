// Chademwiri family tree data.
//
// Model: every person is a flat record. A child links to their
// `fatherId` and `motherId` directly (rather than a generic parentIds
// list) because this family is polygamous — the father is shared across
// several unions, but each union has one mother, and that mother/father
// pair is what actually groups full siblings together.
//
// `confirmed: false` marks entries that came from an earlier, less
// reliable source and haven't been verified against the family — see
// the `notes` field on those entries for what's uncertain.

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
  /** 0 = root generation (Isaac / David Chademuwiri). */
  generation: number;
  confirmed: boolean;
  notes?: string;
}

export const familyMembers: FamilyMember[] = [
  // --- Generation 0: Root ---
  {
    id: 'isaac',
    name: 'Isaac',
    generation: 0,
    confirmed: true,
    notes:
      'Brother of David Chademuwiri. Descendants ("Edward Family" branch) not yet confirmed — see CONTENT-NEEDED.md.',
  },
  {
    id: 'david-chademuwiri',
    name: 'David Chademuwiri',
    generation: 0,
    confirmed: true,
    notes: 'Brother of Isaac.',
  },

  // --- Generation 1: Children of David Chademuwiri, and their wives ---
  { id: 'jonathan', name: 'Jonathan', fatherId: 'david-chademuwiri', generation: 1, confirmed: true, spouseIds: ['mai-israel', 'mai-rose', 'mai-nomia'] },
  { id: 'george', name: 'George', fatherId: 'david-chademuwiri', generation: 1, confirmed: true, spouseIds: ['mai-tabitha', 'mai-emma', 'mai-elisha', 'mai-rhino', 'mai-tambudzai'] },

  // Jonathan's wives
  { id: 'mai-israel', name: 'Mai Israel', generation: 1, confirmed: true, spouseIds: ['jonathan'], notes: 'Named for firstborn, Israel.' },
  { id: 'mai-rose', name: 'Mai Rose', generation: 1, confirmed: true, spouseIds: ['jonathan'], notes: 'Named for firstborn, Rose.' },
  { id: 'mai-nomia', name: 'Mai Nomia', generation: 1, confirmed: true, spouseIds: ['jonathan'], notes: 'Named for firstborn, Nomia.' },

  // George's wives
  { id: 'mai-tabitha', name: 'Mai Tabitha', generation: 1, confirmed: true, spouseIds: ['george'], notes: 'Named for firstborn, Tabitha.' },
  { id: 'mai-emma', name: 'Mai Emma', generation: 1, confirmed: true, spouseIds: ['george'], notes: 'Named for firstborn, Emah/Emma.' },
  { id: 'mai-elisha', name: 'Mai Elisha', generation: 1, confirmed: true, spouseIds: ['george'], notes: 'Named for firstborn, Elisha.' },
  { id: 'mai-rhino', name: 'Mai Rhino (Christine Nyabadza)', generation: 1, confirmed: true, spouseIds: ['george'], notes: 'Named for firstborn, Rhino. Fully confirmed line, down to great-grandchildren.' },
  { id: 'mai-tambudzai', name: 'Mai Tambudzai', generation: 1, confirmed: true, spouseIds: ['george'], notes: 'Named for firstborn, Tambudzai.' },

  // --- Generation 2: Children of Jonathan ---
  { id: 'israel', name: 'Israel', fatherId: 'jonathan', motherId: 'mai-israel', generation: 2, confirmed: true },
  { id: 'noah-mai-israel', name: 'Noah', fatherId: 'jonathan', motherId: 'mai-israel', generation: 2, confirmed: true },
  { id: 'anold', name: 'Anold', fatherId: 'jonathan', motherId: 'mai-israel', generation: 2, confirmed: true },
  { id: 'martha', name: 'Martha', fatherId: 'jonathan', motherId: 'mai-israel', generation: 2, confirmed: true },
  { id: 'hilda', name: 'Hilda', fatherId: 'jonathan', motherId: 'mai-israel', generation: 2, confirmed: true },
  { id: 'aprose', name: 'Aprose', fatherId: 'jonathan', motherId: 'mai-israel', generation: 2, confirmed: true },

  { id: 'rose', name: 'Rose', fatherId: 'jonathan', motherId: 'mai-rose', generation: 2, confirmed: true },
  { id: 'edmond', name: 'Edmond', fatherId: 'jonathan', motherId: 'mai-rose', generation: 2, confirmed: true },
  { id: 'sarah', name: 'Sarah', fatherId: 'jonathan', motherId: 'mai-rose', generation: 2, confirmed: true },
  { id: 'media', name: 'Media', fatherId: 'jonathan', motherId: 'mai-rose', generation: 2, confirmed: true },

  { id: 'nomia', name: 'Nomia', fatherId: 'jonathan', motherId: 'mai-nomia', generation: 2, confirmed: true },

  // --- Generation 2: Children of George ---
  { id: 'tabitha', name: 'Tabitha', fatherId: 'george', motherId: 'mai-tabitha', generation: 2, confirmed: true },
  { id: 'lucia', name: 'Lucia', fatherId: 'george', motherId: 'mai-tabitha', generation: 2, confirmed: true },

  { id: 'emah', name: 'Emah', fatherId: 'george', motherId: 'mai-emma', generation: 2, confirmed: true },
  { id: 'jairos', name: 'Jairos', fatherId: 'george', motherId: 'mai-emma', generation: 2, confirmed: true },
  { id: 'naison', name: 'Naison', fatherId: 'george', motherId: 'mai-emma', generation: 2, confirmed: true },
  { id: 'aaron', name: 'Aaron', fatherId: 'george', motherId: 'mai-emma', generation: 2, confirmed: true },
  { id: 'peter', name: 'Peter', fatherId: 'george', motherId: 'mai-emma', generation: 2, confirmed: false, notes: 'From an earlier list under Mai Emma — needs confirming.' },
  { id: 'judah', name: 'Judah', fatherId: 'george', motherId: 'mai-emma', generation: 2, confirmed: false, notes: 'From an earlier list under Mai Emma — needs confirming.' },
  { id: 'jeremiah', name: 'Jeremiah', fatherId: 'george', motherId: 'mai-emma', generation: 2, confirmed: false, notes: 'From an earlier list under Mai Emma — needs confirming.' },
  { id: 'prisca', name: 'Prisca', fatherId: 'george', motherId: 'mai-emma', generation: 2, confirmed: false, notes: 'From an earlier list under Mai Emma — needs confirming.' },
  { id: 'amon', name: 'Amon', fatherId: 'george', motherId: 'mai-emma', generation: 2, confirmed: false, notes: 'From an earlier list under Mai Emma — needs confirming.' },

  { id: 'elisha-1971', name: "Elisha", birthYear: 1971, fatherId: 'george', motherId: 'mai-elisha', generation: 2, confirmed: true },
  { id: 'grace-1974', name: 'Grace', birthYear: 1974, fatherId: 'george', motherId: 'mai-elisha', generation: 2, confirmed: true },
  { id: 'noah-1975', name: 'Noah', birthYear: 1975, fatherId: 'george', motherId: 'mai-elisha', generation: 2, confirmed: true },
  { id: 'miriam-1978', name: 'Miriam', birthYear: 1978, fatherId: 'george', motherId: 'mai-elisha', generation: 2, confirmed: true },
  { id: 'cornelius-1982', name: 'Cornelius', birthYear: 1982, fatherId: 'george', motherId: 'mai-elisha', generation: 2, confirmed: true },

  { id: 'rhino-1976', name: 'Rhino', birthYear: 1976, fatherId: 'george', motherId: 'mai-rhino', generation: 2, confirmed: true, spouseIds: ['mai-christine', 'mai-tadiwa', 'mai-tanyaradzwa'] },
  { id: 'sylvester-1978', name: 'Sylvester', birthYear: 1978, fatherId: 'george', motherId: 'mai-rhino', generation: 2, confirmed: true, spouseIds: ['mai-sylvester', 'mai-fatima'] },
  { id: 'settie-1985', name: 'Settie', birthYear: 1985, fatherId: 'george', motherId: 'mai-rhino', generation: 2, confirmed: true, spouseIds: ['mai-tanatswa'] },
  { id: 'rahabe-1985', name: 'Rahabe', birthYear: 1985, fatherId: 'george', motherId: 'mai-rhino', generation: 2, confirmed: true, spouseIds: ['machaka'] },
  { id: 'sophia-1989', name: 'Sophia', birthYear: 1989, fatherId: 'george', motherId: 'mai-rhino', generation: 2, confirmed: true, spouseIds: ['gonzo'] },
  { id: 'jacob-1991', name: 'Jacob', birthYear: 1991, fatherId: 'george', motherId: 'mai-rhino', generation: 2, confirmed: true, spouseIds: ['youlanda'] },

  { id: 'tambudzai', name: 'Tambudzai', fatherId: 'george', motherId: 'mai-tambudzai', generation: 2, confirmed: true },
  { id: 'tracy', name: 'Tracy', fatherId: 'george', motherId: 'mai-tambudzai', generation: 2, confirmed: true },
  { id: 'edinah', name: 'Edinah', fatherId: 'george', motherId: 'mai-tambudzai', generation: 2, confirmed: true },
  { id: 'rumbidzai', name: 'Rumbidzai', fatherId: 'george', motherId: 'mai-tambudzai', generation: 2, confirmed: true },
  { id: 'mazvita', name: 'Mazvita', fatherId: 'george', motherId: 'mai-tambudzai', generation: 2, confirmed: true },
  { id: 'prince', name: 'Prince', fatherId: 'george', motherId: 'mai-tambudzai', generation: 2, confirmed: true },

  // --- Generation 2: Spouses of Mai Rhino's children (fully confirmed line) ---
  { id: 'mai-christine', name: 'Mai Christine', generation: 2, confirmed: true, spouseIds: ['rhino-1976'], notes: 'Named for firstborn, Christine.' },
  { id: 'mai-tadiwa', name: 'Mai Tadiwa (Miriam)', generation: 2, confirmed: true, spouseIds: ['rhino-1976'], notes: 'Named for firstborn, Tadiwa.' },
  { id: 'mai-tanyaradzwa', name: 'Mai Tanyaradzwa', generation: 2, confirmed: true, spouseIds: ['rhino-1976'], notes: 'Named for firstborn, Tanyaradzwa.' },
  { id: 'mai-sylvester', name: 'Mai Sylvester', generation: 2, confirmed: true, spouseIds: ['sylvester-1978'] },
  { id: 'mai-fatima', name: 'Mai Fatima', generation: 2, confirmed: true, spouseIds: ['sylvester-1978'] },
  { id: 'mai-tanatswa', name: 'Mai Tanatswa', generation: 2, confirmed: true, spouseIds: ['settie-1985'] },
  { id: 'machaka', name: 'Machaka', generation: 2, confirmed: true, spouseIds: ['rahabe-1985'] },
  { id: 'gonzo', name: 'Gonzo', generation: 2, confirmed: true, spouseIds: ['sophia-1989'] },
  { id: 'youlanda', name: 'Youlanda (Mai Jewel)', generation: 2, confirmed: true, spouseIds: ['jacob-1991'] },

  // --- Generation 3: Children of Rhino '76 ---
  { id: 'christine', name: 'Christine', fatherId: 'rhino-1976', motherId: 'mai-christine', generation: 3, confirmed: true },
  { id: 'batsirai', name: 'Batsirai', fatherId: 'rhino-1976', motherId: 'mai-christine', generation: 3, confirmed: true },
  { id: 'tadiwa', name: 'Tadiwa', fatherId: 'rhino-1976', motherId: 'mai-tadiwa', generation: 3, confirmed: true },
  { id: 'johane', name: 'Johane', fatherId: 'rhino-1976', motherId: 'mai-tadiwa', generation: 3, confirmed: true },
  { id: 'tanaka', name: 'Tanaka', fatherId: 'rhino-1976', motherId: 'mai-tadiwa', generation: 3, confirmed: true },
  { id: 'tanyaradzwa', name: 'Tanyaradzwa', fatherId: 'rhino-1976', motherId: 'mai-tanyaradzwa', generation: 3, confirmed: true },
  { id: 'rhino-ii', name: 'Rhino', fatherId: 'rhino-1976', motherId: 'mai-tanyaradzwa', generation: 3, confirmed: true, notes: 'Named after his grandfather, Rhino \'76.' },
  { id: 'rhyn', name: 'Rhyn', fatherId: 'rhino-1976', motherId: 'mai-tanyaradzwa', generation: 3, confirmed: true },

  // --- Generation 3: Children of Sylvester '78 ---
  { id: 'sylvester-ii', name: 'Sylvester', fatherId: 'sylvester-1978', motherId: 'mai-sylvester', generation: 3, confirmed: true, notes: "Named after his father, Sylvester '78." },
  { id: 'shown', name: 'Shown', fatherId: 'sylvester-1978', motherId: 'mai-sylvester', generation: 3, confirmed: true },
  { id: 'fatima', name: 'Fatima', fatherId: 'sylvester-1978', motherId: 'mai-fatima', generation: 3, confirmed: true },

  // --- Generation 3: Children of Settie '85 ---
  { id: 'tanatswa', name: 'Tanatswa', fatherId: 'settie-1985', motherId: 'mai-tanatswa', generation: 3, confirmed: true },
  { id: 'fortune', name: 'Fortune', fatherId: 'settie-1985', motherId: 'mai-tanatswa', generation: 3, confirmed: true },
  { id: 'tinotenda', name: 'Tinotenda', fatherId: 'settie-1985', motherId: 'mai-tanatswa', generation: 3, confirmed: true },

  // --- Generation 3: Children of Rahabe '85 & Machaka ---
  { id: 'panashe', name: 'Panashe', fatherId: 'rahabe-1985', motherId: 'machaka', generation: 3, confirmed: true },
  { id: 'pardon', name: 'Pardon', fatherId: 'rahabe-1985', motherId: 'machaka', generation: 3, confirmed: true },
  { id: 'ngenyasha', name: 'Ngenyasha', fatherId: 'rahabe-1985', motherId: 'machaka', generation: 3, confirmed: true },
  { id: 'anabel', name: 'Anabel', fatherId: 'rahabe-1985', motherId: 'machaka', generation: 3, confirmed: true },

  // --- Generation 3: Children of Sophia '89 & Gonzo ---
  { id: 'tatenda', name: 'Tatenda', fatherId: 'sophia-1989', motherId: 'gonzo', generation: 3, confirmed: true },

  // --- Generation 3: Children of Jacob '91 & Youlanda ---
  { id: 'jewel', name: 'Jewel', fatherId: 'jacob-1991', motherId: 'youlanda', generation: 3, confirmed: true },
  { id: 'janaiah', name: 'Janaiah', fatherId: 'jacob-1991', motherId: 'youlanda', generation: 3, confirmed: true },
];

export function getPerson(id: string): FamilyMember | undefined {
  return familyMembers.find((p) => p.id === id);
}

export function getSpouses(id: string): FamilyMember[] {
  const person = getPerson(id);
  if (!person?.spouseIds) return [];
  return person.spouseIds
    .map((spouseId) => getPerson(spouseId))
    .filter((p): p is FamilyMember => Boolean(p));
}

export function getChildren(id: string): FamilyMember[] {
  return familyMembers.filter((p) => p.fatherId === id || p.motherId === id);
}

/** Children of a specific couple only (used to group children under the right mother/wife). */
export function getChildrenOfUnion(
  parentId: string,
  spouseId: string
): FamilyMember[] {
  return familyMembers.filter(
    (p) =>
      (p.fatherId === parentId && p.motherId === spouseId) ||
      (p.motherId === parentId && p.fatherId === spouseId)
  );
}

export function getRoots(): FamilyMember[] {
  return familyMembers.filter((p) => !p.fatherId && !p.motherId && p.generation === 0);
}
