import type { FamilyMember } from './types';

export function getPerson(
  members: FamilyMember[],
  id: string
): FamilyMember | undefined {
  return members.find((p) => p.id === id);
}

export function getSpouses(members: FamilyMember[], id: string): FamilyMember[] {
  const person = getPerson(members, id);
  if (!person?.spouseIds) return [];
  return person.spouseIds
    .map((spouseId) => getPerson(members, spouseId))
    .filter((p): p is FamilyMember => Boolean(p));
}

export function getChildren(members: FamilyMember[], id: string): FamilyMember[] {
  return members.filter((p) => p.fatherId === id || p.motherId === id);
}

/** Children of a specific couple only (used to group children under the right mother/wife). */
export function getChildrenOfUnion(
  members: FamilyMember[],
  parentId: string,
  spouseId: string
): FamilyMember[] {
  return members.filter(
    (p) =>
      (p.fatherId === parentId && p.motherId === spouseId) ||
      (p.motherId === parentId && p.fatherId === spouseId)
  );
}

export function getRoots(members: FamilyMember[]): FamilyMember[] {
  return members.filter((p) => !p.fatherId && !p.motherId && p.generation === 0);
}
