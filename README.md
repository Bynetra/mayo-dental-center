# Lucida Dental Center (مركز لوسيدا لطب الأسنان) — Website Redesign

Premium, high-performance, bilingual (English & Arabic) digital web application for **Lucida Dental Center**, located on Bu Hasa Street, Al Waab District, Doha, State of Qatar.

---

## 🏥 About the Project

This application is built with **Next.js 16 (App Router with Turbopack)**, **TypeScript**, and **Tailwind CSS**. It delivers a clinical presentation designed specifically for Lucida Dental Center's patients in Doha, Qatar.

### Core Features
- **Bilingual English & Arabic (العربية):** Full RTL (Right-to-Left) and LTR layout support with instant, fluid language switching and persistent locale preferences.
- **Doha Shift Status Indicator:** Real-time clinic open/closed computation linked to Qatar local time (`Asia/Qatar`), accurately reflecting the clinic's split shift schedule (Sat–Wed: 9:00 AM – 1:00 PM & 4:30 PM – 8:30 PM; Thu: 9:00 AM – 5:00 PM; Fri: Closed).
- **Verified Clinical Leadership:** Highlighting **Dr. Adey Al-Shaar** (Master's in Endodontics, Jordan University of Science and Technology; Medical Director) and **Dr. Mohamed Isa** (General & Urgent Dental Care).
- **Comprehensive Clinical Services (10 Treatments):** Dedicated statically pre-rendered routes (`/services/[slug]`) for each dental procedure including root canal therapy, digital smile design, Zoom teeth whitening, dental implants, and emergency dental care.
- **Qatar Insurance & Payment Integrations:** Support for **AlKoot**, **QLM Life & Medical**, **Mednet**, **Nextcare**, **NAPS (Qatar National ATM/Debit Network)**, and **Tabby 4-month interest-free installments**.
- **Interactive Multi-Step Booking Wizard:** Patient appointment intake with treatment selector, shift time-slot picker, and direct WhatsApp handoff.
- **Ethical Review Architecture:** Transparent integration linking directly to verified patient feedback on Google Maps without fabricated star ratings.
- **Full Regulatory & Legal Compliance:** Licensed under the **Qatar Council for Healthcare Practitioners (QCHP / MOPH)**, with patient data handled in accordance with the Qatar Personal Data Privacy Protection Law (PDPPL - Law No. 13 of 2016).

---

## 🎨 Brand Identity & Design System

The visual design is grounded in Lucida Dental Center's verified brand palette:

| Token | Hex Value | Role |
| :--- | :--- | :--- |
| **Lucida Teal** | `#0AABCB` | Dominant primary brand color, interactive elements, badges |
| **Deep Teal** | `#0789A4` | Hover states, active links, gradient accents |
| **Vitality Green** | `#8DC63F` | Secondary accent, clinical health indicators, success badges |
| **Deep Green** | `#6FA52B` | Green hover states and Arabic typographic accents |
| **Navy Ink** | `#0E1F2C` | Headings, high-contrast dark surfaces, footers |
| **Ice Mist** | `#F4F8FA` | Subtle background tinting, alternate card surfaces |

Brand assets are located in `public/images/original/`:
- `lucida-logo-mark.svg`: Pure scalable vector mark.
- `lucida-logo-full.svg`: Full bilingual vector logo lockup.
- `lucida-logo-refined.png`: High-resolution transparent PNG with anti-aliasing.
- `lucida-logo-supplied.png`: Original supplied brand asset preserved intact.

---

## 🚀 Getting Started

### Prerequisites
- **Node.js:** v18.18+ or v20+ recommended
- **Package Manager:** npm (or pnpm / yarn)

### Installation
```bash
# Clone or navigate to the project directory
cd mayo-dental-center

# Install dependencies
npm install
```

### Environment Configuration
Copy `.env.example` to `.env.local` and adjust variables as needed:
```bash
cp .env.example .env.local
```

| Variable | Description | Default |
| :--- | :--- | :--- |
| `NEXT_PUBLIC_SITE_URL` | Canonical URL for metadata & sitemaps | `https://lucidadental.com` |
| `CONTACT_TO_EMAIL` | Destination email for contact submissions | `info@lucidadental.com` |
| `RESEND_API_KEY` | Optional Resend API key for direct email delivery | _Optional_ (falls back to WhatsApp) |
| `NEXT_PUBLIC_ALLOW_INDEXING` | Toggle indexing (`true` for production release) | `false` |

### Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the application.

### Quality Assurance & Production Build
```bash
# Type check and lint
npm run lint

# Compile optimized production build (Turbopack + SSG)
npm run build

# Start production server
npm run start
```

---

## 📁 Project Structure

```
├── app/
│   ├── about/             # Clinic story, clinical philosophy & facility standards
│   ├── api/contact/       # Contact inquiry handler with WhatsApp & email routing
│   ├── book/              # Multi-step appointment booking wizard
│   ├── contact/           # Google Maps embed, Bu Hasa St address, and inquiry form
│   ├── services/          # Services catalog overview
│   │   └── [slug]/        # Dedicated dynamic SSG treatment pages (10 routes)
│   ├── layout.tsx         # Root layout, Google Fonts, JSON-LD Schema & metadata
│   ├── page.tsx           # Modular homepage assembling all sections
│   ├── robots.ts          # Automated robots.txt generator
│   └── sitemap.ts         # Automated XML sitemap generator
├── components/
│   ├── layout/            # Navbar with live shift timer, Footer, and mobile menus
│   ├── sections/          # Hero, WhyChooseLucida, Doctors, Gallery, Insurance, Contact
│   └── ui/                # Button, Card, SectionHeading, DoctorCard, StickyBars
├── content/
│   ├── business.ts        # Central business data dictionary for Lucida Dental Center
│   ├── faq.ts             # 8 verified FAQs (Zoom whitening, AlKoot/QLM, Tabby, location)
│   ├── services.ts        # Detailed clinical treatment descriptions, steps, and aftercare
│   └── translations.ts    # Comprehensive EN/AR bilingual dictionary
├── docs/
│   ├── lucida-content-audit.md # Full page-by-page, component-by-component audit checklist
│   └── lucida-research.md      # Verified clinical research notes and citation records
└── public/
    ├── docs/              # Patient registration intake PDF
    └── images/            # Clinic gallery, treatment photography, and brand vector assets
```

---

## 📍 Clinic Verification Details

- **Official Name:** Lucida Dental Center (مركز لوسيدا لطب الأسنان)
- **Address:** Bu Hasa Street (Snay Bu Hasa St), Building 23, Zone 55, Al Waab District, Doha, Qatar
- **Landline:** `+974 4451 1737`
- **WhatsApp:** `+974 5531 1553`
- **Email:** `info@lucidadental.com`
- **Website:** `https://lucidadental.com`
- **Social:** [Facebook](https://www.facebook.com/LucidaDentalCenter/) • [Instagram](https://www.instagram.com/lucidadentalcenter/?hl=en)
- **Regulator:** Qatar Council for Healthcare Practitioners (QCHP / MOPH)

