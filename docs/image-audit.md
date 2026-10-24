# Mayo Dental Center — Image Asset Audit

**Date:** 2026-10-24  
**Audit Directory:** `/public/images/original/`  
**Purpose:** Evaluate visual fidelity, native resolution vs. 2x retina display needs, artifacts, and determine `OK` / `ENHANCE` / `REPLACE` verdict per the AI Image Enhancement Pipeline.

---

## 1. Full Image Audit Matrix

| Filename | Native Dimensions | File Size | Primary Placement | Max Display Size (1x / 2x Retina) | Verdict | Audit Notes & Remediation Action |
|---|---|---|---|---|---|---|
| `mayo-logo.png` | 1247 × 900 px | 355 KB | Navbar & Footer brand mark | 200 × 60 px / 400 × 120 px | **OK** | Sharp transparent PNG. Preserved untouched per logo policy. |
| `hero-dental-tools.jpg` | 4928 × 3280 px | 792 KB | Home Hero floating card / visual | 600 × 600 px / 1200 × 1200 px | **OK** | Ultra-high resolution native capture. Minor color grade via CSS token. |
| `orthodontic-checkup.jpg` | 5000 × 3333 px | 1,104 KB | "Meet Dr. Dixon" / About section | 600 × 750 px / 1200 × 1500 px | **OK** | High clarity, professional lighting. Matches editorial layout. |
| `service-general-checkup.jpeg` | 5616 × 3420 px | 1,582 KB | Service 1 Card & Detail Page | 600 × 400 px / 1200 × 800 px | **OK** | High resolution, pristine clinical detail. |
| `service-scaling-polishing.jpg` | 4999 × 3333 px | 772 KB | Service 2 Card & Detail Page | 600 × 400 px / 1200 × 800 px | **OK** | Sharp, proper depth of field. |
| `service-fluoride.jpg` | 4800 × 3200 px | 709 KB | Service 3 Card & Detail Page | 600 × 400 px / 1200 × 800 px | **OK** | Clean studio clinical capture. |
| `service-extraction.jpg` | 4800 × 3200 px | 819 KB | Service 4 Card & Detail Page | 600 × 400 px / 1200 × 800 px | **OK** | High resolution, professional medical gear. |
| `service-root-canal.jpg` | 4680 × 3120 px | 547 KB | Service 5 Card & Detail Page | 600 × 400 px / 1200 × 800 px | **OK** | High resolution, focused operative lighting. |
| `service-whitening.jpg` | 4997 × 3333 px | 1,016 KB | Service 6 Card & Detail Page | 600 × 400 px / 1200 × 800 px | **OK** | Vivid, high contrast dental aesthetics. |
| `service-hollywood-smile.jpg` | 5000 × 3333 px | 477 KB | Service 7 Card & Detail Page | 600 × 400 px / 1200 × 800 px | **OK** | Clean cosmetic dental aesthetic. |
| `service-orthodontics.jpg` | **300 × 208 px** | **9 KB** | Service 8 Card & Detail Page | 600 × 400 px / 1200 × 800 px | **REPLACE / ENHANCE** | **CRITICAL DEFECT:** 300x208 thumbnail heavily pixelated when rendered at 2x (1200px wide). Needs high-resolution modern orthodontic treatment photography matching the teal palette. |
| `service-dental-implants.jpg` | 3750 × 2499 px | 385 KB | Service 9 Card & Detail Page | 600 × 400 px / 1200 × 800 px | **OK** | High resolution implantology fixture visualization. |
| `service-emergency.jpeg` | 5472 × 3648 px | 806 KB | Service 10 Card & Emergency Banner | 1200 × 500 px / 2400 × 1000 px | **OK** | High resolution, urgent medical consultation framing. |
| `gallery-1.jpg` | 1280 × 1280 px | 215 KB | "Our Collection" Masonry | 400 × 400 px / 800 × 800 px | **OK** | Good native 1:1 ratio, real client portfolio asset. |
| `gallery-2.jpg` | 1280 × 1280 px | 121 KB | "Our Collection" Masonry | 400 × 400 px / 800 × 800 px | **OK** | Real client orthodontic procedure capture. |
| `gallery-3.jpg` | 1280 × 1280 px | 166 KB | "Our Collection" Masonry | 400 × 400 px / 800 × 800 px | **OK** | Real client clinical consultation capture. |
| `gallery-4.jpg` | 1024 × 1024 px | 67 KB | "Our Collection" Masonry | 400 × 400 px / 800 × 800 px | **OK** | Real client clinical consultation capture. |
| `gallery-5.webp` | 2560 × 1276 px | 87 KB | "Our Collection" Masonry | 600 × 300 px / 1200 × 600 px | **OK** | Wide aspect showcase. |
| `cta-banner-bg.jpg` | 3500 × 2335 px | 195 KB | Schedule CTA background banner | Full width 1440 × 400 px | **OK** | Crisp panoramic interior with warm medical lighting. |
| `partner-visa.png` | 728 × 477 px | 102 KB | Payment Marquee / Card | 80 × 32 px / 160 × 64 px | **OK** | Official logo asset. Untouched per policy. |
| `partner-mastercard.png` | 1000 × 714 px | 82 KB | Payment Marquee / Card | 80 × 32 px / 160 × 64 px | **OK** | Official logo asset. Untouched per policy. |
| `partner-tabby.png` | 512 × 204 px | 32 KB | Payment Marquee / Card | 80 × 32 px / 160 × 64 px | **OK** | Official logo asset. Untouched per policy. |
| `insurance-medgulf.png` | 450 × 450 px | 25 KB | Insurance Marquee / Card | 100 × 40 px / 200 × 80 px | **OK** | Official logo asset. Untouched per policy. |
| `insurance-tawuniya.png` | 1200 × 371 px | 63 KB | Insurance Marquee / Card | 120 × 40 px / 240 × 80 px | **OK** | Official logo asset. Untouched per policy. |
| `icon-facebook.png` | 201 × 201 px | 3 KB | Social footer | 24 × 24 px / 48 × 48 px | **OK** | Standard icon; replaced with Lucide SVG in UI for vector sharpness. |
| `icon-instagram.png` | 201 × 201 px | 21 KB | Social footer | 24 × 24 px / 48 × 48 px | **OK** | Standard icon; replaced with Lucide SVG in UI for vector sharpness. |

---

## 2. Enhancement & Generation Directives

1. **`service-orthodontics.jpg` Replacement:**
   * **Problem:** Original was a tiny 300x208px thumbnail (9KB).
   * **Resolution:** Generate or provide a premium high-resolution orthodontic photography asset (`≥ 2400 × 1600 px`) featuring modern ceramic / clear braces consultation in a clean medical setting, consistent with the clinic's teal/white palette. Save to `/public/images/enhanced/service-orthodontics.jpg`.
2. **Hero Aesthetic Upgrade:**
   * In addition to `hero-dental-tools.jpg`, generate a photorealistic premium clinic reception / interior background (`hero-clinic-ambiance.jpg`, 2400 × 1600 px) to support the split hero layout with subtle depth. Save to `/public/images/generated/`.
3. **Doctor Dixon Editorial Portrait:**
   * Since no high-res doctor headshot existed on Wix (only `orthodontic-checkup.jpg` consultation scene), create a clean professional doctor consultation visual or labeled placeholder per Phase 5 guidelines.
4. **Before/After Case Study Visuals:**
   * Provide photorealistic, honest aesthetic comparison placeholders for the `BeforeAfterSlider` component, clearly labeled.

