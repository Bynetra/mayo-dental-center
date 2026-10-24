# Mayo Dental Center — Design System Specification

**Version:** 2.0.0  
**Target:** Jubail, Eastern Province, Saudi Arabia  
**Brand Persona:** Premium Medical, Calm, Authoritative, Trustworthy, Modern, Patient-Centric.

---

## 1. Color System (Derived from Brand & Medical Teal)

All colors meet WCAG AA contrast standards (minimum 4.5:1 for body text, 3:1 for large display titles).

### 1.1 Core Palette Tokens

```css
:root {
  /* Brand Teal / Primary */
  --color-primary-50: #f0fdfa;
  --color-primary-100: #ccfbf1;
  --color-primary-200: #99f6e4;
  --color-primary-300: #5eead4;
  --color-primary-400: #2dd4bf;
  --color-primary-500: #14b8a6;
  --color-primary-600: #0d9488; /* Dominant Brand Primary */
  --color-primary-700: #0f766e; /* Deep Interactive Teal */
  --color-primary-800: #115e59;
  --color-primary-900: #134e4a;
  --color-primary-950: #042f2e;

  /* Accent Gold / Warm Sand (Subtle luxury medical accent) */
  --color-accent-50: #fffbeb;
  --color-accent-100: #fef3c7;
  --color-accent-200: #fde68a;
  --color-accent-500: #f59e0b;
  --color-accent-600: #d97706;

  /* Clean Off-White & Backgrounds */
  --color-bg-base: #fcfdfd;
  --color-bg-subtle: #f8fafc;
  --color-bg-card: #ffffff;
  --color-bg-glass: rgba(255, 255, 255, 0.85);

  /* Deep Slate & Navy for High-Contrast Text & Footers */
  --color-navy-950: #090e1a; /* Footer & Deep Banner */
  --color-navy-900: #0f172a; /* Heavy Display Headings */
  --color-navy-800: #1e293b; /* Primary Body Text */
  --color-navy-600: #475569; /* Secondary / Subtext */
  --color-navy-400: #94a3b8; /* Muted & Placeholders */

  /* Semantic Feedback */
  --color-success: #10b981;
  --color-warning: #f59e0b;
  --color-danger: #ef4444;
  --color-emergency: #dc2626; /* High-contrast emergency appointment alert */
}
```

---

## 2. Typography & Bilingual Type Scale

* **Display Font (English):** `Plus Jakarta Sans` / `Outfit` (Bold, friendly, clean geometric sans)
* **Body Font (English):** `Inter` / `Plus Jakarta Sans` (Maximum screen legibility)
* **Arabic Font:** `Tajawal` & `IBM Plex Sans Arabic` (Native balance with Latin sans, beautiful Arabic ligatures and numerals)

### 2.1 Fluid Type Scale (CSS Clamp)

* **Hero Display H1:** `clamp(2.5rem, 5vw + 1rem, 4.25rem)` (40px -> 68px)
* **Section Title H2:** `clamp(1.85rem, 3.5vw + 0.5rem, 2.75rem)` (30px -> 44px)
* **Card Title H3:** `clamp(1.25rem, 2vw + 0.5rem, 1.65rem)` (20px -> 26px)
* **Subheading / Lead:** `clamp(1.05rem, 1.2vw + 0.2rem, 1.25rem)` (17px -> 20px)
* **Body Copy:** `1rem` (16px, line-height: 1.65)
* **Caption / Small:** `0.875rem` (14px, line-height: 1.5)

---

## 3. Spacing, Elevation & Layout Rhythm

* **Grid Base:** 8px rhythm (4, 8, 12, 16, 24, 32, 48, 64, 96, 128px)
* **Max Container Width:** 1280px (`max-w-7xl` with `px-4 sm:px-6 lg:px-8`)
* **Radii System:**
  * Small (Buttons, Badges): `rounded-full` or `rounded-xl` (12px)
  * Medium (Cards, Modals): `rounded-2xl` (20px)
  * Large (Featured Bento Cards, Hero Frames): `rounded-3xl` (28px)
* **Layered Shadows:**
  * Soft: `0 2px 10px -2px rgba(13, 148, 136, 0.05), 0 1px 3px rgba(15, 23, 42, 0.04)`
  * Card Hover Lift: `0 20px 35px -10px rgba(13, 148, 136, 0.12), 0 4px 6px -2px rgba(15, 23, 42, 0.04)`
  * Floating Glass Bar: `0 10px 30px -5px rgba(15, 23, 42, 0.08), 0 0 0 1px rgba(255, 255, 255, 0.6) inset`

---

## 4. Component Standards

1. **Button:**
   * Primary: Solid medical teal (`bg-teal-600 hover:bg-teal-700 text-white shadow-md active:scale-95`)
   * Secondary: Soft teal tint with border (`bg-teal-50 text-teal-800 border border-teal-200 hover:bg-teal-100`)
   * WhatsApp Fast-Track: Distinctive WhatsApp green (`bg-emerald-600 hover:bg-emerald-700 text-white`)
   * Ghost: Subtle hover background with animated directional arrow
2. **Card:** High-quality white/glass backdrop with 1px border (`border-slate-200/80 hover:border-teal-400/50 transition-all duration-300`)
3. **Bilingual RTL Support:**
   * Logical properties: `start-0`, `end-0`, `ms-2`, `me-2`, `ps-4`, `pe-4`
   * Directional icons: Lucide `ChevronRight` flips automatically in `dir="rtl"`
   * Arabic typographic line-height increased to 1.7 to prevent diacritic clipping.
4. **Accessibility:**
   * Minimum touch target: 44 × 44px
   * Focus visible rings: `focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2`
   * Reduced motion respected via `useReducedMotion()` from `motion/react`

---

## 5. Animation Guidelines (`lib/motion.ts`)

* **Shared Easing:** `[0.22, 1, 0.36, 1]` (custom spring-like cubic bezier)
* **Durations:** 0.4s (micro-interactions) to 0.75s (section reveals)
* **Stagger Delay:** `0.08s` per card / item
* **Transforms Only:** Animate `y`, `x`, `scale`, and `opacity` to avoid layout reflows and guarantee 60fps performance on mobile.

