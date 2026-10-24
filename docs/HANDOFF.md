# Mayo Dental Center — Client Handoff, Verification Matrix & Developer Guide

**Project:** Mayo Dental Center (مركز مايو لطب الأسنان) Redesign  
**Technology:** Next.js 16 (App Router) + TypeScript + Tailwind CSS + High-Performance CSS Animations + Bilingual LTR/RTL (Arabic & English)  
**Location:** King Faisal Ibn Abd Al Aziz Road, Jubail City Center, Saudi Arabia  
**Date:** 2026-10-24  

---

## 1. Questions to Ask the Client ( Mayo Dental Center Team )

Before final public launch, the following 8 items must be reviewed and answered by Dr. Dixon or the clinic manager:

| # | Topic | Question for Client | Current State in Web App |
| :-: | :--- | :--- | :--- |
| **1** | **Doctor Credentials** | What are Dr. Dixon's official academic degrees (e.g. BDS, DDS, MSc), university of graduation, and Saudi Commission for Health Specialties (SCFHS) registration number? | Marked `{{TODO_CONFIRM_WITH_CLIENT}}` in `content/business.ts`. Rendered neutrally as "Dental Surgeon — Mayo Dental Center". |
| **2** | **Doctor Photography** | Can Dr. Dixon provide an official high-resolution clinic headshot in dental attire? | AI-generated human faces are strictly banned. Rendered with an elegant branded placeholder card ("Official Portrait Coming Soon / الصورة الرسمية قريباً"). |
| **3** | **Clinic Establishment Year** | In what year was Mayo Dental Center established in Jubail? (The previous claim "10+ years" was unverified). | Removed from UI. |
| **4** | **Sterilization Standards** | What specific autoclave and sterilization equipment does the clinic utilize (e.g., Class B vacuum autoclave, Melag, Euronda)? | Generic unverified claims removed from UI. |
| **5** | **Diagnostic Equipment** | What specific diagnostic technologies are in use (e.g., digital panoramic X-ray, 3D intraoral scanner)? | Removed from UI until confirmed. |
| **6** | **Patient Cases & Consents** | Can the clinic provide 2–4 authentic, high-resolution before-and-after smile cases with written patient marketing consent? | `showBeforeAfterSlider` is set to `false` in `content/business.ts` for demo mode to prevent showing unconsented cases. |
| **7** | **Payment Methods** | Does the reception desk accept Mada debit cards and cash alongside Visa, Mastercard, and Tabby? | Only Visa, Mastercard, and Tabby are shown in UI (verified from old site). Mada/Cash pending client signoff. |
| **8** | **Exact Rooftop Pin & Reviews** | What is the exact Google Business Profile link and coordinates for the King Faisal Road clinic? | Approximate city-center coordinates used for interactive map embed; Google rating hidden (`null`) until primary API sync. |

---

## 2. Verification Matrix: Verified Facts vs Placeholders vs Client Input

| Category | Item | Source / Primary Evidence | Classification | Current UI Treatment |
| :--- | :--- | :--- | :---: | :--- |
| **Clinic Identity** | Clinic Name | Old website header & logo | **VERIFIED** | Displayed in EN ("Mayo Dental Center") & AR ("مركز مايو لطب الأسنان") |
| **Location** | Street Address | King Faisal Ibn Abd Al Aziz Rd, Jubail City Center | **VERIFIED** | Displayed in Navbar, Footer, Contact, and JSON-LD |
| **Operating Hours** | Sat–Thu 9:00 AM – 9:00 PM | Wix booking pages & footer | **VERIFIED** | Dynamic live status indicator ("Open Now" / "Closed") synced to AST |
| **Friday Status** | Friday Closed | Wix booking pages | **VERIFIED** | Explicitly stated across schedule cards & badges |
| **Phone 1** | `+966 13 361 1399` | Old website contact section | **VERIFIED** | Click-to-call in header, footer, contact page, and mobile bottom bar |
| **Phone 2** | `+966 13 361 1747` | Old website contact section | **VERIFIED** | Secondary call action in contact page & footer |
| **WhatsApp** | `+966 55 022 0715` | Old website header button | **VERIFIED** | Integrated click-to-chat with contextual pre-filled messages |
| **Email** | `info@mayodentalcenter.com` | Old website contact page | **VERIFIED** | Clickable `mailto:` link in footer & contact section |
| **Instagram** | `mayodentalcenter1` | Old website footer social link | **VERIFIED** | Verified outbound social link in footer |
| **Doctor Name** | Dr. Dixon | Old website booking calendar | **VERIFIED** | Doctor leadership card & booking wizard |
| **Doctor Credentials** | Degrees & Certifications | Not listed on old website | **PLACEHOLDER** | Set to `{{TODO_CONFIRM_WITH_CLIENT}}`, hidden from UI |
| **Doctor Photo** | Real clinical headshot | Not found on old website | **CLIENT INPUT** | Branded clinical placeholder card shown; no AI human face |
| **Services (9 items)** | Checkup, Scaling, Fluoride, Extraction, Root Canal, Whitening, Hollywood Smile, Orthodontics, Implants | Old website booking system (`/booking-calendar/...`) | **VERIFIED** | Individual service cards and 10 dynamic dedicated detail pages |
| **Service Durations** | 15 min, 30 min, 1 hr, 2 hr | Old website booking calendar slots | **VERIFIED** | Displayed on procedure cards and detail pages |
| **Emergency Slots** | Emergency Appointments | Old website booking page | **VERIFIED** | High-visibility emergency triage banner with direct call & WhatsApp |
| **Insurance 1** | Tawuniya (التعاونية) | Old website partner logo | **VERIFIED** | Partner marquee, insurance section, and badge |
| **Insurance 2** | Medgulf (ميدغلف) | Old website partner logo | **VERIFIED** | Partner marquee, insurance section, and badge |
| **Payment 1** | Visa | Old website payment logo | **VERIFIED** | Payment marquee and footer |
| **Payment 2** | Mastercard | Old website payment logo | **VERIFIED** | Payment marquee and footer |
| **Payment 3** | Tabby (4 installments) | Old website payment logo | **VERIFIED** | Payment marquee, FAQ, and benefit pill |
| **Payment 4** | Mada / Cash | Not on old website | **PLACEHOLDER** | Hidden from UI until client confirms |
| **Patient Registration** | New Patient Registration PDF | Crawled from `/_files/ugd/...` | **VERIFIED** | Direct download button in Insurance & Patient Info pages |
| **Clinic Gallery** | 5 collection photos | Wix gallery ("Our Collection") | **VERIFIED** | Rendered as "Our Collection / معرضنا" with lightbox zoom |
| **Google Rating** | 4.4 / 200+ reviews | Web search (not primary Maps API) | **PLACEHOLDER** | Set to `null` in `business.ts`; rating UI hidden until primary API sync |
| **Years of Operation** | "10+ Years in Jubail" | Unverified marketing claim | **REMOVED** | Removed from UI; listed for client confirmation |
| **Autoclave Sterilization**| "Hospital-grade sterilization" | Unverified claim | **REMOVED** | Removed from UI; listed for client confirmation |

---

## 3. Performance Architecture & Optimizations

To achieve mobile Lighthouse performance scores ≥ 90 (previously 76 with high TBT):
1. **Framer Motion Removed from Runtime Main Bundles:** Replaced all scroll and layout animations with zero-overhead GPU-accelerated CSS transitions and transforms.
2. **Pure CSS Dynamic Accordion:** Converted the FAQ accordion to use CSS Grid `grid-template-rows: 0fr -> 1fr`, eliminating JS recalculations.
3. **Pure CSS Mobile Drawer & Sticky Bars:** Mobile menu and sticky action bars use CSS transitions instead of heavy React animation states.
4. **Optimized Next/Font Subsetting:**
   - `Tajawal` font restricted to 2 weights (`500`, `700`) with `display: swap`.
   - `Plus_Jakarta_Sans` restricted to 2 weights (`700`, `800`) with `display: swap`.
   - `Inter` restricted to 2 weights (`400`, `600`) with `display: swap`.
5. **Lazy-Loaded Map Embed:** Google Maps iframe only initializes when scrolled into view via `IntersectionObserver` with a 300px root margin.
6. **Mobile Single Action Bar:** WhatsApp floating button and floating desktop booking bar are hidden on mobile viewports (`< 640px`) to prevent any UI collision with the sticky mobile bottom bar.
7. **WebP Procedure Images:** High-resolution assets converted to WebP with responsive `sizes` attributes and `priority` on the above-the-fold hero image.

---

## 4. Local Development & Run Commands

To run and verify the website locally:

```bash
# 1. Install dependencies (if not already installed)
npm install

# 2. Type-check TypeScript codebase
npx tsc --noEmit

# 3. Run ESLint code verification
npm run lint

# 4. Build production bundle
npm run build

# 5. Start production server on port 3000
npm run start -- -p 3000

# 6. For development mode with hot-reloading:
npm run dev
```

The application will be accessible at `http://localhost:3000`.
