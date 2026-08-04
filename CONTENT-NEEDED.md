# Muponda Dynasty Website — Content Needed

This file lists every placeholder currently on the site, grouped so you can
work through one group at a time. Send answers for a group and I'll update
the corresponding page(s).

---

## Group 0 — Site Basics

- [ ] Final domain name (site currently set to `https://mupondadynasty.com` in `astro.config.mjs` — confirm or correct)
- [ ] Real favicon / logo (currently a generic "M" circle)
- [ ] Preferred social preview image (used for link previews on WhatsApp/Facebook/Twitter — 1200x630px)
- [ ] Any social media links to add to the footer (Facebook/Instagram/WhatsApp group/YouTube)

---

## Group 1 — About / Mission (`/about`)

- [ ] Final mission statement wording
- [ ] Who leads/maintains the project (name(s) + role, e.g. "Administrator")
- [ ] Anything to correct in the roadmap/phase descriptions

---

## Group 2 — Elders & Leaders (`/elders`)

For each elder/king/leader you want featured:
- [ ] Full name
- [ ] Title (King, Chief, Elder, etc.)
- [ ] Approximate years (birth–death, or era)
- [ ] Short biography (2–4 sentences)
- [ ] Photo (if available)

---

## Group 3 — Sacred Sites & Gallery (`/culture`, `/gallery`)

- [ ] Photos of Mt. Ruunji, Nyazongo, Chikwira chaSaka, Watsomba (or any you have)
- [ ] Photos from family gatherings/ceremonies to populate `/gallery`
- [ ] Captions for each photo (who/what/when/where)
- [ ] Any additional sacred sites not yet listed

---

## Group 4 — History Timeline (`/history`)

- [ ] Additional milestones beyond the 3 currently listed (Tanganyika origins, Great Migration, Settlement in Manyika)
- [ ] Approximate dates/years for each milestone, if known
- [ ] Photos or maps to accompany the timeline

---

## Group 5 — Family Tree Data (`/family-tree`)

**Structure confirmed:** Muponda is the clan/totem (Nyere), not one traceable
genealogical trunk — it's the shared identity across 10+ surname lines.
Each surname gets its own family tree at `/family-tree/[slug]`, registered
in `src/data/families/index.ts`. Data lives in
`src/data/families/<surname>.ts` as a flat `FamilyMember[]` (see
`src/data/families/types.ts` for the shape).

**Chademwiri — done, built into the site:**
- [x] Isaac & David Chademuwiri as root (brothers)
- [x] Isaac's children: Juliet, Caleb, Edward, Abisha, Joel, Ambrose
- [x] Jonathan's branch (3 wives) and George's branch (5 wives), including
      the fully-confirmed Mai Rhino line down to great-grandchildren
- [x] Mai Emma's full children list confirmed: Emma, Emah, Jairos, Naison,
      Aaron, George (named after his father), Nelson, Peter, Judah,
      Jeremiah, Prisca, Amon (still flagging "Emma"/"Emah" as possibly the
      same person with two spellings — merge if so)
- [x] Nelson's children (with Mai Talent): Talent, George
- [x] Mai Fatima's second child, Mukundi, added under Sylvester '78

**Still open for Chademwiri:**
- [ ] Isaac's grandchildren — the earlier list (Esther, Stephen, Langton,
      Nhamo) and the notes attached to his children ("Mai Muchona",
      "Makwasa Team", "Green Team", "Masere — father of Langton") still
      need to be placed correctly in the tree
- [ ] Birth years / dates for anyone not already dated
- [ ] Photos

**For every other Muponda surname line (10+ to go):**
- [ ] Surname name
- [ ] Root ancestor(s)
- [ ] Generations and relationships, in the same format as Chademwiri (a
      spreadsheet with ID / First_Name / Parent_ID / Mother_ID / Spouse_ID /
      DOB works well, or plain family-tree screenshots like the ones
      already used)

---

## Group 6 — Family Stories (`/stories`)

For each story:
- [ ] Title
- [ ] Who told/wrote it
- [ ] The story text (oral history, memory, anecdote)

---

## Group 7 — Events (`/events`)

Structure is built — each event now has its own detail page at
`/events/[slug]` (data lives in `src/data/events.ts`). Still placeholder:
- [ ] Event name, date, location for the Annual Family Reunion and the
      Watsomba Remembrance Ceremony (both exist as entries, no real date yet)
- [ ] Full agenda / what-to-expect copy for each event's detail page
- [ ] Any other recurring events to add

---

## Group 8 — Business Directory (`/directory`)

**Fully detailed (category, description, contact, website all confirmed):**
- [x] Apex Web Solutions — owner: Jacob Chademwiri — apexwebsolutions.co.za, info@apexwebsolutions.co.za, +27 74 049 1433
- [x] Tender Edge Solutions — owner: Jacob Chademwiri — tenderedgesolutions.co.za, tenders@tenderedgesolutions.co.za, 074 501 7094, Centurion, Gauteng

**Owner confirmed, still need category/description/contact:**
- [x] Kariba Fish — owner: Sylvester
- [x] Solar Systems — owner: Nemaunga
- [x] Rhino Wood Works — owner: Rhino

Still needed for these three:
- [ ] Confirm/correct category (currently a best guess from the business name)
- [ ] Description
- [ ] Contact info (phone/email/social)
- [ ] For "Sylvester" and "Rhino" specifically — there are two people with
      each name in the Chademwiri tree (Sylvester '78 and his son; Rhino '76
      and his grandson) — which one owns the business, so it can link to
      the right family-tree entry?
- [ ] Who/what is "Nemaunga" — a family member not yet in the tree, or a
      different spelling of an existing name?

*Also confirm: should this be public immediately, or should it wait until
the member portal/approval workflow exists (Phase 2)?*

---

## Group 9 — Contact Info (`/contact`)

- [ ] Admin email address
- [ ] Phone / WhatsApp number
- [ ] Region/location to display
- [ ] Where should the contact form actually send messages (email inbox, WhatsApp, a form service)?

---

## Group 10 — FAQ (`/faq`)

- [ ] Who is eligible to join the family portal?
- [ ] How is membership/identity verified?
- [ ] Can members contribute photos/stories directly, and how?
- [ ] What is the data privacy policy for member information?

---

## Group 11 — Join Family Portal (`/join`)

The form currently just shows a confirmation alert — it doesn't send data anywhere yet.
- [ ] Where should submissions go (email, database, spreadsheet)?
- [ ] What fields are actually required (currently: first name, last name, email — do you want "how are you related?" or other fields, per the original spec)?
- [ ] What happens after someone registers — manual admin approval? Automatic email?

---

## Group 12 — Hosting / Deployment

- [ ] Vercel account/project to deploy to (I removed all Cloudflare-specific config; the site now builds as a plain static Astro site, ready for Vercel)
- [ ] Any environment variables/secrets needed once a backend (auth, database, form handling) is added in Phase 2
