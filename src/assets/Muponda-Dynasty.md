Perfect choice 👍
Below is a **clean, production-ready `README.md`** you can **copy-paste directly into your repo**. It’s formatted for GitHub (headings, code blocks, emojis kept minimal and professional).

---

# 🏛️ Muponda Dynasty Digital Heritage Platform

A digital heritage platform dedicated to preserving the **culture, history, and genealogy of the Muponda Dynasty**, while fostering meaningful connections among family members through a secure and interactive web experience.

---

## 🎯 Project Goal

To preserve the culture, history, and genealogy of the **Muponda Dynasty** in a digital format, creating a long-term digital archive that is:
- Informative
- Secure
- Accessible
- Intergenerational

---

## 📌 Project Status

- **Phase 1 (Prototype):** ✅ Complete  
- **Current Phase:** 🚧 Phase 1.5 – Migration to Astro

---

## 🧱 Tech Stack

### Frontend
- **Framework:** Astro (Hybrid Rendering)
- **Styling:** Tailwind CSS

### Backend (Phase 2)
- **Database:** Turso (LibSQL) or Supabase (PostgreSQL)
- **Authentication:** Lucia Auth or Better-Auth

### Data Source (Initial)
- Microsoft Excel (`.xlsx`) → JSON

---

## ✅ Phase 1: Public Foundation (Completed)

### Objective
Establish a public-facing platform, validate content structure, and present available cultural knowledge.

---

### Core Content Areas

#### 🏠 Home / Landing Page
- Hero section with strong visual identity
- Feature cards highlighting culture, history, and lineage
- Call-to-action to join the platform

#### 🧬 Culture Hub
- **Detembo Teaser:** Introduction to the praise poem
- **Sacred Geography:**
  - Mt. Ruunji
  - Nyazongo
  - Watsomba
- **Full Poem View:**
  - Dedicated reading layout
  - Footnotes for historical context
- **Totem & Identity:**
  - Serval Cat (*Nyere*)
  - Core values:
    - Generosity
    - Forgiveness
    - Unity

#### 📜 History Timeline
- Migration journey from **Tanganyika to Manyika**

#### ✍️ Join Waitlist
- Verification form
- “How are you related?” validation field

---

## 📊 Data Preparation (Ongoing)

**Source File:** `muponda_family_tree_master.xlsx`

**Required Columns:**
```

ID
First_Name
Last_Name
Parent_ID
Spouse_ID
DOB
Totem
Village/Location
Bio
Photo_Url

````

---

## 🚧 Phase 1.5: Migration to Astro (Current)

### Objective
Transition from a single static HTML file to a scalable Astro-based architecture.

---

### Project Setup

```bash
npm create astro@latest
````

* Install Tailwind CSS integration
* Configure global layout and styles

---

### Component Architecture

```text
src/
├── layouts/
│   └── Layout.astro           # Head, navigation, footer
├── components/
│   ├── Hero.astro             # Landing page hero
│   ├── PoemCard.astro         # Culture hub summary card
│   └── SacredPlaceCard.astro  # Reusable sacred place card
```

---

### Routing Structure

```text
src/pages/
├── index.astro
├── culture/
│   ├── index.astro
│   └── poem.astro
├── history.astro
├── totem.astro
└── join.astro
```

---

## 🔐 Phase 2: Authentication & Inner Circle

### Objective

Protect sensitive family data and manage controlled access.

---

### Database Schema (Planned)

* Users
* Family_Profiles
* Business_Directory
* Events

---

### Gatekeeper Authentication Flow

1. User registers
2. Account created with `pending` status
3. Admin reviews:

   * Relationship verification
4. Admin decision:

   * **Approve:** Status set to `active`
   * **Reject:** Access denied

---

## 🌳 Phase 3: Interactive Features

### Family Tree Visualization

* Interactive canvas using **React Flow** or **D3.js**
* Data sourced from Excel-generated JSON
* Dynamic routes:

  ```
  /family/profile/[id]
  ```
* Protected by authentication guards

---

### Business Directory

* Protected submission route:

  ```
  /directory/submit
  ```
* Approval workflow:

  * Submitted entries saved as `draft`
  * Admin approval required before public display

---

## 📋 Roadmap Checklist

### Completed

* [x] Visual identity defined (Green / Gold / Purple)
* [x] Cultural content digitized
* [x] HTML MVP built and validated

### In Progress / Next Steps

* [ ] Populate at least 3 generations in Excel dataset
* [ ] Initialize Astro project
* [ ] Migrate HTML and Tailwind styles into Astro components
* [ ] Collect high-quality images for sacred locations
* [ ] Deploy V1 to Vercel or Netlify

---

## 🚀 Deployment (Planned)

* **Hosting:** Vercel or Netlify
* **Build:** Astro static / hybrid output

---

## 📜 License

Private family project — not licensed for public reuse.

---

## 🙏 Acknowledgement

This project exists to honor ancestors, preserve identity, and ensure the Muponda legacy lives on digitally for future generations.

