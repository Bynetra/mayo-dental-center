# Lucida Dental Center — Design System Specification

**Version:** 3.0.0  
**Target:** Al Waab District, Doha, State of Qatar  
**Brand Persona:** Precision Dentistry, Welcoming, Calming, Meticulous, Modern, Patient-Centric.

---

## 1. Color System (Derived from Lucida Brand Tokens)

All colors meet WCAG AA contrast standards (minimum 4.5:1 for body text, 3:1 for large display titles).

### 1.1 Core Palette Tokens

```css
:root {
  /* Lucida Brand Teal / Primary */
  --color-primary-50: #f0fbfd;
  --color-primary-100: #dcf5fa;
  --color-primary-200: #beeaf4;
  --color-primary-300: #8fdbe9;
  --color-primary-400: #55c4dc;
  --color-primary-500: #0aabcb; /* Dominant Brand Primary */
  --color-primary-600: #0789a4; /* Deep Interactive Teal */
  --color-primary-700: #086e85;
  --color-primary-800: #0c596b;
  --color-primary-900: #0f4a5a;
  --color-primary-950: #05303c;

  /* Vitality Spring Green / Accent */
  --color-accent-50: #f4fbe9;
  --color-accent-100: #e7f7ce;
  --color-accent-200: #d0f0a2;
  --color-accent-300: #b2e46f;
  --color-accent-400: #8dc63f; /* Luminous Vitality Accent */
  --color-accent-500: #7bb828;
  --color-accent-600: #5f931d;
  --color-accent-700: #49711a;
  --color-accent-800: #3c591a;
  --color-accent-900: #344c1b;

  /* Clean Off-White & Backgrounds */
  --color-bg-base: #fbfaf6;   /* Lucida Warm Bone */
  --color-bg-subtle: #f4f8fa; /* Lucida Ice Mist */
  --color-bg-card: #ffffff;
  --color-bg-glass: rgba(255, 255, 255, 0.85);

  /* Deep Ink & Navy for High-Contrast Text & Footers */
  --color-navy-950: #09131c; /* Footer & Deep Banner */
  --color-navy-900: #0e1f2c; /* Dominant Display Headings & Brand Ink */
  --color-navy-800: #1b2f3f; /* Primary Body Text */
  --color-navy-600: #3d5160; /* Secondary / Subtext */
  --color-navy-400: #849aa8; /* Muted & Placeholders */

  /* Semantic Feedback */
  --color-emergency: #e11d48; /* Red urgency for emergency triage */
  --color-emergency-dark: #be123c;
  --color-whatsapp: #047857;  /* Verified WhatsApp messaging */
}
```

---

## 2. Typography

- **Display Headings (English):** Geometric Sans (`Plus Jakarta Sans` or modern system display fonts) with tracking `-0.02em`.
- **Arabic Typography:** High-legibility modern Arabic typeface with balanced baseline alignment and natural calligraphic flow.
- **Body:** Neutral, readable grotesque sans with line-height `1.65` for optimal clinical clarity.

---

## 3. Brand Assets & Logos

- `public/images/original/lucida-logo-mark.svg`: Vector emblem of the signature tooth silhouette within tilted oval.
- `public/images/original/lucida-logo-full.svg`: Full vector logo lockup with bilingual wordmark.
- `public/images/original/lucida-logo-refined.png`: High-resolution transparent PNG with anti-aliasing.
- `public/images/original/lucida-logo-supplied.png`: Unaltered user-supplied brand asset.
