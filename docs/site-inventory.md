# Lucida Dental Center — Complete Site Inventory & Content Architecture

**Business:** Lucida Dental Center (مركز لوسيدا لطب الأسنان)  
**Location:** Bu Hasa Street, Building 23, Zone 55, Al Waab District, Doha, Qatar  
**Domain:** `https://lucidadental.com`  
**Platform:** Next.js 16 (App Router with Turbopack)  

---

## 1. Page Inventory & Routing Map

| Route | Scope / Purpose | Static Rendering Mode | Key Components & Features |
|---|---|---|---|
| `/` | Landing page | `○ Static` (Pre-rendered) | Hero, WhyChooseLucida, Doctors, Services, Gallery, Insurance, Contact |
| `/about` | Clinic narrative & clinical philosophy | `○ Static` (Pre-rendered) | Dr. Adey Al-Shaar bio, QCHP standards, Al Waab facility profile |
| `/services` | 10 clinical services catalog | `○ Static` (Pre-rendered) | Category filter, procedure badges, duration, pricing notes |
| `/services/[slug]` | 10 dedicated procedure deep-dives | `● SSG` (generateStaticParams) | Step-by-step procedures, aftercare, clinician attribution, FAQs |
| `/book` | Multi-step appointment wizard | `○ Static` (Pre-rendered) | Treatment selector, shift time picker (Sat–Thu), WhatsApp handoff |
| `/contact` | Location, hours & contact form | `○ Static` (Pre-rendered) | Google Maps embed, phone dialers, Bu Hasa St directions |
| `/api/contact` | Inquiries API endpoint | `ƒ Dynamic` (Server-rendered) | Form handler with WhatsApp routing and email notification |
| `/robots.txt` & `/sitemap.xml` | Search crawler directives | `○ Static` (Pre-rendered) | Production indexing for `https://lucidadental.com` |

---

## 2. Dedicated Treatment Detail Routes (`/services/[slug]`)

1. `/services/general-checkup-with-treatment-planning`
2. `/services/scaling-and-polishing`
3. `/services/fluoride-application`
4. `/services/surgical-tooth-extractions`
5. `/services/root-canal-treatment`
6. `/services/teeth-whitening`
7. `/services/cosmetic-veneers-hollywood-smile`
8. `/services/orthodontic-consultation`
9. `/services/dental-implants`
10. `/services/emergency-dental-care`

---

## 3. Global Navigation & Layout Architecture

### 3.1 Top Notification Header
* **Live Shift Status:** Dynamic open/closed state computed against `Asia/Qatar` timezone for split shifts.
* **Operating Hours:** Sat–Wed 9:00 AM – 1:00 PM & 4:30 PM – 8:30 PM; Thu 9:00 AM – 5:00 PM; Fri Closed.
* **Location:** Bu Hasa Street, Al Waab, Doha.
* **QCHP Badge:** Licensed by Qatar Council for Healthcare Practitioners.
* **Phone Link:** Direct tap-to-call `+974 4451 1737`.

### 3.2 Main Navbar
* **Brand Logo:** Refined Lucida logo emblem + bilingual typography.
* **Desktop Links:** Home (`/`), Treatments (`/services`), About (`/about`), Contact (`/contact`).
* **Language Switcher:** Instant English / Arabic (العربية) toggle with persistent locale memory.
* **Book Action:** Primary CTA leading to `/book`.

### 3.3 Footer
* **Bilingual Summary:** Lucida Dental Center brand statement and QCHP licensure badge.
* **Verified Social Channels:** Facebook and Instagram icons linking directly to verified profiles.
* **Location & Hours:** Bu Hasa Street, Al Waab, Doha; complete weekly schedule.
* **Compliance & Legal:** Qatar Personal Data Privacy Protection Law (PDPPL) disclaimer and copyright notice.
