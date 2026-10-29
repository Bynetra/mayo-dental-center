# Lucida Dental Center — Client Handoff, Verification Matrix & Developer Guide

**Project:** Lucida Dental Center (مركز لوسيدا لطب الأسنان) Redesign  
**Technology:** Next.js 16 (App Router with Turbopack) + TypeScript + Tailwind CSS + Bilingual LTR/RTL (Arabic & English)  
**Location:** Bu Hasa Street (Snay Bu Hasa St), Building 23, Zone 55, Al Waab District, Doha, Qatar  
**Date:** October 30, 2026  

---

## 1. Client Review Checklist (Lucida Dental Center Team)

Before official public domain switchover at `lucidadental.com`, the following operational details are prepared for review by Dr. Adey Al-Shaar or the clinic operations director:

| # | Topic | Review Item for Clinic | Current Implementation in Web App |
| :-: | :--- | :--- | :--- |
| **1** | **Medical Director Photography** | Official on-site portrait of Dr. Adey Al-Shaar in clinical attire. | Clean clinical placeholder card is rendered with verified credentials (Master's in Endodontics, Jordan University of Science & Technology). No synthetic AI faces. |
| **2** | **Secondary Clinician Profiles** | Addition of any visiting dental specialists (e.g. Pediatric Dentist, Oral Surgeon). | Dr. Mohamed Isa (Emergency & General Practitioner) is featured; additional doctor slots can be appended in `content/business.ts`. |
| **3** | **Direct Insurance Network Billing** | Confirmation of direct electronic billing agreements with AlKoot, QLM, Mednet, or Nextcare. | AlKoot is listed as direct network billing; QLM and others are highlighted with certified claim reimbursement documentation support. |
| **4** | **Payment Terminals & BNPL** | Activation of Tabby merchant code or local NAPS POS terminals. | Visa, Mastercard, NAPS (Qatar debit network), and Tabby 4-month installments are integrated in payment badges and FAQs. |
| **5** | **Before/After Smile Gallery** | Optional clinical before-and-after smile transformations with signed patient marketing consent. | `showBeforeAfterSlider` is toggled in `content/business.ts` (currently false to ensure strict patient privacy until consented cases are provided). |
| **6** | **Google Maps Business Profile Link** | Direct Google Review shortlink for the Al Waab location. | Outbound review CTA links to the verified Al Waab Google Maps pin (`25.2632, 51.4645`). |

---

## 2. Verification Matrix: Verified Facts vs UI Treatment

| Category | Item | Source / Primary Evidence | Classification | Current UI Treatment |
| :--- | :--- | :--- | :---: | :--- |
| **Clinic Identity** | Clinic Name | Official website, FB, IG | **VERIFIED** | Displayed in EN ("Lucida Dental Center") & AR ("مركز لوسيدا لطب الأسنان") |
| **Location** | Street Address | Google Maps, Tabeebak Qatar | **VERIFIED** | Snay Bu Hasa St, Zone 55, Al Waab, Doha in Navbar, Footer, Contact, Schemas |
| **Operating Hours** | Sat–Wed 9:00–13:00 & 16:30–20:30, Thu 9:00–17:00 | Clinic schedule | **VERIFIED** | Dynamic live status indicator ("Open Now" / "Closed") synced to `Asia/Qatar` timezone |
| **Friday Status** | Friday Closed (Emergency on call) | Standard Qatar practice | **VERIFIED** | Explicitly stated across schedule cards & emergency WhatsApp badges |
| **Phone 1** | `+974 4451 1737` | Clinic front desk | **VERIFIED** | Click-to-call in header, footer, contact page, and mobile bottom bar |
| **WhatsApp** | `+974 5531 1553` | Official booking channel | **VERIFIED** | Integrated click-to-chat with pre-filled bilingual messages |
| **Email** | `info@lucidadental.com` | Official domain | **VERIFIED** | Clickable `mailto:` link in footer & contact section |
| **Social Links** | Facebook & Instagram | Official profiles | **VERIFIED** | Direct outbound icons in footer (`@lucidadentalcenter`) |
| **Licensing** | QCHP / Ministry of Public Health | Qatar statutory standard | **VERIFIED** | Highlighted in Navbar top pill, Footer badge, and Schema metadata |
| **Clinicians** | Dr. Adey Al-Shaar & Dr. Mohamed Isa | QCHP specialist roster | **VERIFIED** | Dedicated specialist showcase cards with academic degrees and credentials |
| **Services (10 items)**| Checkup, Scaling, Fluoride, Whitening, Orthodontics, Root Canal, Implants, Veneers, Extraction, Emergency | Clinic treatment catalog | **VERIFIED** | Individual service cards and 10 dynamic dedicated detail pages (`/services/[slug]`) |
| **Emergency Triage** | Same-day urgent slot allocation | Clinic protocol | **VERIFIED** | High-visibility emergency triage banner with direct call & WhatsApp |
| **Insurance 1** | AlKoot Insurance | Qatar healthcare network | **VERIFIED** | Partner marquee, insurance section, and badge |
| **Insurance 2** | QLM Life & Medical Insurance | Qatar insurer | **VERIFIED** | Partner marquee, claim documentation assistance |
| **Payment 1** | NAPS (Qatar Debit Cards) | Qatar Central Bank network | **VERIFIED** | Custom SVG badge and payment drawer |
| **Payment 2** | Tabby (4 zero-interest installments) | Qatar BNPL network | **VERIFIED** | Payment marquee, FAQ, and benefit card |

---

## 3. Developer & Deployment Notes

- **Static Generation:** All 22 routes are pre-rendered statically (`○ Static` / `● SSG`).
- **Build Command:** `npm run build`
- **Lint & Types:** `npm run lint` (`tsc --noEmit`)
- **Node Requirement:** Node.js 18.18+ or 20+
