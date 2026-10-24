# Mayo Dental Center — Image Asset Audit, Classification & Provenance

**Audit Date:** 2026-10-24  
**Auditor:** Senior Product Designer & Next.js Engineer  
**Method:** Programmatic extraction via `sharp` and Node.js `fs.statSync`

---

## 1. Compliance & Ethical Boundaries

1. **Dr. Dixon Representation:** No AI-generated human face represents Dr. Dixon anywhere on the website. Replaced with an elegant branded placeholder card ("Official Portrait Coming Soon / الصورة الرسمية قريباً").
2. **Neutral Gallery Classification:** Images in "Our Collection" (`gallery-1.jpg` through `gallery-5.jpg`) are displayed under neutral clinic showcase headings. They are NOT described as verified patient clinical cases until confirmed in writing by Dr. Dixon.
3. **Orthodontics Asset Reclassification:** `service-orthodontics.jpg` in `/public/images/enhanced/` is explicitly classified as **`GENERATED`** (not `ENHANCED`), because synthetic image generation was used to create a new high-resolution clinical composition to replace a degraded 300 × 208 px thumbnail. It serves strictly as a generic procedure illustration.
4. **Before/After Whitening Feature:** The whitening demo uses generic illustrative stock (`before-whitening.jpg` / `after-whitening.jpg`). A content configuration toggle (`showBeforeAfterSlider: false`) hides this section by default for client demonstration until consented clinic photography is provided.
5. **Original Source Preservation:** All original Wix CDN assets are permanently archived in `/public/images/original/`.

---

## 2. Programmatically Audited Image Inventory (via `sharp`)

| File Name | Path on Disk | Programmatic Dimensions | File Size | Exact Category | Role & Usage Notes | Active in UI? |
| :--- | :--- | :---: | :---: | :---: | :--- | :---: |
| `mayo-logo.png` | `/public/images/original/mayo-logo.png` | 500 × 500 px | 44.8 KB | **ORIGINAL** | Official Mayo Dental Center clinic identity from Wix CDN | **Yes** (Navbar, Footer, Mobile Drawer) |
| `hero-dental-tools.webp` | `/public/images/original/hero-dental-tools.webp` | 1200 × 800 px | 44.4 KB | **ORIGINAL (Optimized)** | High-res clinical instruments photo from old Wix site (converted to high-perf WebP) | **Yes** (Homepage Hero Visual) |
| `gallery-1.jpg` | `/public/images/original/gallery-1.jpg` | 1080 × 1080 px | 362.4 KB | **ORIGINAL** | Wix "Our Collection" photo 1 (neutral clinic collection showcase) | **Yes** (Our Collection Grid) |
| `gallery-2.jpg` | `/public/images/original/gallery-2.jpg` | 1080 × 1080 px | 358.3 KB | **ORIGINAL** | Wix "Our Collection" photo 2 (neutral clinic collection showcase) | **Yes** (Our Collection Grid) |
| `gallery-3.jpg` | `/public/images/original/gallery-3.jpg` | 1080 × 1080 px | 384.2 KB | **ORIGINAL** | Wix "Our Collection" photo 3 (neutral clinic collection showcase) | **Yes** (Our Collection Grid) |
| `gallery-4.jpg` | `/public/images/original/gallery-4.jpg` | 1080 × 1080 px | 412.0 KB | **ORIGINAL** | Wix "Our Collection" photo 4 (neutral clinic collection showcase) | **Yes** (Our Collection Grid) |
| `gallery-5.jpg` | `/public/images/original/gallery-5.jpg` | 1080 × 1080 px | 389.9 KB | **ORIGINAL** | Wix "Our Collection" photo 5 (neutral clinic collection showcase) | **Yes** (Our Collection Grid) |
| `service-general-checkup.jpeg` | `/public/images/original/service-general-checkup.jpeg` | 5616 × 3420 px | 1,582.4 KB | **ORIGINAL** | Original Wix booking procedure photograph (General Checkup) | **Yes** (Service Card & Detail) |
| `service-scaling-polishing.webp` | `/public/images/original/service-scaling-polishing.webp` | 800 × 534 px | 18.5 KB | **ORIGINAL (Optimized)** | Original Wix procedure photo for Scaling & Polishing (WebP) | **Yes** (Service Card & Detail) |
| `service-fluoride.webp` | `/public/images/original/service-fluoride.webp` | 800 × 533 px | 20.7 KB | **ORIGINAL (Optimized)** | Original Wix procedure photo for Fluoride Application (WebP) | **Yes** (Service Card & Detail) |
| `service-extraction.webp` | `/public/images/original/service-extraction.webp` | 800 × 533 px | 24.5 KB | **ORIGINAL (Optimized)** | Original Wix procedure photo for Tooth Extraction (WebP) | **Yes** (Service Card & Detail) |
| `service-root-canal.webp` | `/public/images/original/service-root-canal.webp` | 800 × 533 px | 19.7 KB | **ORIGINAL (Optimized)** | Original Wix procedure photo for Root Canal Treatment (WebP) | **Yes** (Service Card & Detail) |
| `service-whitening.webp` | `/public/images/original/service-whitening.webp` | 800 × 534 px | 28.6 KB | **ORIGINAL (Optimized)** | Original Wix procedure photo for Teeth Whitening (WebP) | **Yes** (Service Card & Detail) |
| `service-hollywood-smile.webp` | `/public/images/original/service-hollywood-smile.webp` | 800 × 533 px | 10.0 KB | **ORIGINAL (Optimized)** | Original Wix procedure photo for Hollywood Smile (WebP) | **Yes** (Service Card & Detail) |
| `service-dental-implants.webp` | `/public/images/original/service-dental-implants.webp` | 800 × 533 px | 13.7 KB | **ORIGINAL (Optimized)** | Original Wix procedure photo for Dental Implants (WebP) | **Yes** (Service Card & Detail) |
| `service-emergency.jpeg` | `/public/images/original/service-emergency.jpeg` | 5472 × 3648 px | 806.2 KB | **ORIGINAL** | Original Wix procedure photo for Emergency Appointments | **Yes** (Service Card & Detail) |
| `insurance-tawuniya.png` | `/public/images/original/insurance-tawuniya.png` | 450 × 450 px | 25.0 KB | **ORIGINAL** | Official Tawuniya healthcare partner logo from Wix site | **Yes** (Marquee, Insurance Band) |
| `insurance-medgulf.png` | `/public/images/original/insurance-medgulf.png` | 1247 × 900 px | 355.1 KB | **ORIGINAL** | Official Medgulf health insurance partner logo from Wix site | **Yes** (Marquee, Insurance Band) |
| `partner-visa.png` | `/public/images/original/partner-visa.png` | 201 × 201 px | 2.6 KB | **ORIGINAL** | Verified Visa payment network badge | **Yes** (Payment strip) |
| `partner-mastercard.png` | `/public/images/original/partner-mastercard.png` | 201 × 201 px | 21.1 KB | **ORIGINAL** | Verified Mastercard payment network badge | **Yes** (Payment strip) |
| `partner-tabby.png` | `/public/images/original/partner-tabby.png` | 400 × 400 px | 8.8 KB | **ORIGINAL** | Verified Tabby 4x payment partner badge from Wix site | **Yes** (Payment strip) |
| `service-orthodontics.jpg` | `/public/images/enhanced/service-orthodontics.jpg` | 1376 × 768 px | 666.2 KB | **GENERATED** | Generic clinical illustration for Orthodontics service | **Yes** (Service Card & Detail) |
| `before-whitening.jpg` | `/public/images/generated/before-whitening.jpg` | 1200 × 896 px | 699.4 KB | **GENERATED** | Generic stock demonstration of whitening (hidden by default) | **Demo Only** (`showBeforeAfterSlider: false`) |
| `after-whitening.jpg` | `/public/images/generated/after-whitening.jpg` | 1200 × 896 px | 644.7 KB | **GENERATED** | Generic stock demonstration of whitening (hidden by default) | **Demo Only** (`showBeforeAfterSlider: false`) |
| `hero-clinic-ambiance.jpg` | `/public/images/generated/hero-clinic-ambiance.jpg` | 1376 × 768 px | 671.8 KB | **GENERATED** | Generic clinic lounge ambiance background illustration | **Yes** (About section visual) |
| `doctor-portrait.jpg` | `/public/images/generated/doctor-portrait.jpg` | 896 × 1200 px | 608.5 KB | **GENERATED** | Synthetic human face. **Permanently removed from UI** | **NO (Removed from UI)** |

---

## 3. Orthodontics Asset Detailed Provenance (`service-orthodontics.jpg`)

- **Original Wix Asset:** Downloaded from `https://static.wixstatic.com/media/5c9880_5f8adc2d41f8414299309422d61dd0c0~mv2.jpg`. The native dimensions were only **300 × 208 px** with a file size of **8.9 KB**.
- **Nature of Transformation:** Because the original file was too small to display clearly on modern retina screens without severe blurring and pixelation, an AI generation pipeline produced a clean, modern clinical scene of orthodontic braces on adult teeth with medical instruments in soft focus.
- **Classification Status:** Formally reclassified as **`GENERATED`** rather than `ENHANCED`, acknowledging that new visual details and composition were synthesized.
- **Client Action Required:** Client should provide authentic high-resolution clinical photographs of orthodontic treatments conducted at Mayo Dental Center Jubail.
