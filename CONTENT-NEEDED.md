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

This will need the most structured data. Ideally as a spreadsheet with columns:

```
ID | First_Name | Last_Name | Parent_ID | Spouse_ID | DOB | Totem | Village/Location | Bio | Photo_Url
```

- [ ] At least 3 generations of names and relationships
- [ ] Confirm the family tree should eventually be an interactive/searchable tool (vs. a static chart)

---

## Group 6 — Family Stories (`/stories`)

For each story:
- [ ] Title
- [ ] Who told/wrote it
- [ ] The story text (oral history, memory, anecdote)

---

## Group 7 — Events (`/events`)

For each upcoming or recurring event:
- [ ] Event name
- [ ] Date (or recurrence, e.g. "first Saturday of December")
- [ ] Location
- [ ] Description / who should attend

---

## Group 8 — Business Directory (`/directory`)

For each family-owned business to list:
- [ ] Business name
- [ ] Owner (family member name)
- [ ] Category (e.g. Retail, Services, Agriculture)
- [ ] Description
- [ ] Contact info (phone/email/social)

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
