# Lucida Dental Center — Image Asset Audit, Classification & Provenance

**Audit Date:** 2026-10-30  
**Auditor:** Senior Product Designer & Next.js Engineer  
**Method:** Node.js file system inspection & visual fidelity audit

---

## 1. Compliance & Ethical Boundaries

1. **Dr. Adey Al-Shaar & Dr. Mohamed Isa Representation:** No artificial intelligence human faces represent the doctors anywhere on the website. Displayed with branded clinical credential cards until official studio headshots are conducted.
2. **Neutral Gallery Classification:** Images in the clinic gallery (`gallery-1.webp` through `gallery-5.webp` and `hero-clinic-ambiance.webp`) are displayed under neutral facility showcase headings. They are NOT described as verified patient clinical cases.
3. **Orthodontics Asset Classification:** `service-orthodontics.jpg` serves strictly as a generic high-resolution procedure illustration matching the teal/clean medical palette.
4. **Before/After Whitening Feature:** The whitening comparison uses generic illustrative material (`before-whitening.jpg` / `after-whitening.jpg`). The content configuration toggle (`showBeforeAfterSlider: false`) hides this section by default for client demonstration until consented clinic photography is provided.
5. **Original Source Preservation:** The original user-supplied Lucida logo mark is permanently archived at `/public/images/original/lucida-logo-supplied.png`.

---

## 2. Programmatically Audited Image Inventory

| File Name | Path on Disk | Programmatic Dimensions | File Size | Exact Category | Role & Usage Notes | Active in UI? |
| :--- | :--- | :---: | :---: | :---: | :--- | :---: |
| `lucida-logo-mark.svg` | `/public/images/original/lucida-logo-mark.svg` | Scalable Vector | 1.8 KB | **BRAND SVG** | Pure scalable vector mark of Lucida tooth emblem | **Yes** (Brand identity) |
| `lucida-logo-full.svg` | `/public/images/original/lucida-logo-full.svg` | Scalable Vector | 2.5 KB | **BRAND SVG** | Full bilingual vector logo lockup | **Yes** (Header & presentation) |
| `lucida-logo-refined.png`| `/public/images/original/lucida-logo-refined.png` | 335 × 335 px | 91 KB | **BRAND RASTER** | Refined transparent logo with luminous spring green | **Yes** (Fallback & App icons) |
| `lucida-logo-supplied.png`| `/public/images/original/lucida-logo-supplied.png` | 335 × 335 px | 93 KB | **SOURCE ARCHIVE** | Preserved user-supplied logo asset | **No** (Archival reference) |
| `hero-clinic-ambiance.webp`| `/public/images/generated/hero-clinic-ambiance.webp` | 2400 × 1600 px | 60.4 KB | **FACILITY SHOWCASE**| Modern diagnostic operatory with digital chairs | **Yes** (Gallery & Hero) |
| `hero-dental-tools.webp` | `/public/images/original/hero-dental-tools.webp` | 1200 × 800 px | 44.4 KB | **CLINICAL GEAR** | High-res clinical sterilization tray instruments | **Yes** (Hero Floating Card) |
| `gallery-1.webp` | `/public/images/original/gallery-1.webp` | 800 × 800 px | 70.2 KB | **CLINICAL SUITE** | Patient treatment operatory suite in Al Waab | **Yes** (Gallery Grid) |
| `gallery-2.webp` | `/public/images/original/gallery-2.webp` | 800 × 800 px | 32.8 KB | **STERILIZATION** | Hygiene and sterilization workflow station | **Yes** (Gallery Grid) |
| `gallery-3.webp` | `/public/images/original/gallery-3.webp` | 800 × 800 px | 55.2 KB | **RECEPTION** | Welcoming patient reception & consultation lounge | **Yes** (Gallery Grid) |
| `gallery-4.webp` | `/public/images/original/gallery-4.webp` | 800 × 800 px | 25.5 KB | **OPERATORY** | Modern digital operatory chairs | **Yes** (Gallery Grid) |
| `gallery-5.webp` | `/public/images/original/gallery-5.webp` | 800 × 800 px | 88.9 KB | **CARE SETTING** | Tranquil patient care environment | **Yes** (Gallery Grid) |
| `insurance-alkoot.svg` | `/public/images/original/insurance-alkoot.svg` | Scalable Vector | 424 B | **INSURANCE BADGE**| AlKoot Insurance Qatar network badge | **Yes** (Insurance Marquee) |
| `insurance-qlm.svg` | `/public/images/original/insurance-qlm.svg` | Scalable Vector | 402 B | **INSURANCE BADGE**| QLM Life & Medical Insurance Qatar badge | **Yes** (Insurance Marquee) |
| `partner-naps.svg` | `/public/images/original/partner-naps.svg` | Scalable Vector | 414 B | **PAYMENT BADGE** | NAPS Qatar National ATM & POS network | **Yes** (Payment Marquee) |

---

## 3. Purged Legacy Assets

- `mayo-logo.png` — **PURGED**
- `insurance-tawuniya.png` — **PURGED**
- `insurance-medgulf.png` — **PURGED**
