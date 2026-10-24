# Mayo Dental Center — Complete Site Inventory & Content Audit

**Source Site:** [https://www.mayodentalcenter.com](https://www.mayodentalcenter.com)  
**Date Crawled:** 2026-10-24  
**Platform:** Wix CMS (Original)  
**Target:** Next.js App Router (Redesign)

---

## 1. Page Inventory & Routing Map

| Original URL | Purpose / Scope | Target Redesign Route |
|---|---|---|
| `https://www.mayodentalcenter.com/` | Home Page (Hero, Features, Services, Gallery, Insurance, Contact) | `/` (Home) |
| `https://www.mayodentalcenter.com/book-online` | Booking Directory & Service Selection | `/book` |
| `https://www.mayodentalcenter.com/service-page/general-checkup-with-treatment-planning` | Service: General Checkup with Treatment Planning | `/services/general-checkup-with-treatment-planning` |
| `https://www.mayodentalcenter.com/service-page/scaling-and-polishing` | Service: Scaling and Polishing | `/services/scaling-and-polishing` |
| `https://www.mayodentalcenter.com/service-page/fluoride-application` | Service: Fluoride Application | `/services/fluoride-application` |
| `https://www.mayodentalcenter.com/service-page/tooth-extraction` | Service: Tooth Extraction | `/services/tooth-extraction` |
| `https://www.mayodentalcenter.com/service-page/root-canal-treatment` | Service: Root Canal Treatment | `/services/root-canal-treatment` |
| `https://www.mayodentalcenter.com/service-page/tooth-whitening` | Service: Tooth Whitening | `/services/tooth-whitening` |
| `https://www.mayodentalcenter.com/service-page/hollywood-smile` | Service: Hollywood Smile | `/services/hollywood-smile` |
| `https://www.mayodentalcenter.com/service-page/orthodontics` | Service: Orthodontics | `/services/orthodontics` |
| `https://www.mayodentalcenter.com/service-page/dental-implants` | Service: Dental Implants | `/services/dental-implants` |
| `https://www.mayodentalcenter.com/service-page/emergency-appointments` | Service: Emergency Appointments | `/services/emergency-appointments` |
| `https://www.mayodentalcenter.com/_files/ugd/7d7c19_1a75fb9c679148c9a651af6cdb37eaa8.pdf` | New Patient Registration Document (PDF) | `/docs/new-patient-registration.pdf` |
| `#services` (Nav item: "Services") | Anchor link to Services section on Home | `/services` & `/#services` |
| `#patient-info` (Nav item: "Patient Info") | Anchor link to Insurance/Registration section | `/patient-info` |
| `#contact` (Nav item: "Contact") | Anchor link to Contact/Hours section | `/contact` & `/#contact` |

---

## 2. Global Elements & Navigation

### 2.1 Navigation Bar
* **Brand:** Mayo Dental Center (مركز مايو لطب الأسنان)
* **Logo Asset:** `5c9880_2631d3dc621d47279ffb9e1eb4d5261a~mv2.png` -> `/public/images/original/mayo-logo.png`
* **Nav Links:**
  * Services (`/services`)
  * Patient Info (`/patient-info`)
  * About / Meet Dr. Dixon (`/about`)
  * Gallery ("Our Collection")
  * Contact (`/contact`)
* **Actions:**
  * Language Toggle (EN / العربية)
  * "Book an Appointment" CTA (Links to `/book` with WhatsApp fast path)

### 2.2 Global Footer
* **Logo:** Mayo Dental Center
* **Tagline:** Experience top-notch dental care at Mayo Dental Center. Conveniently located in Al-Jubail, our dentistry team is here to help you achieve and maintain a healthy, beautiful smile. New patients welcome!
* **Address:** Mayo Dental Center, 3107 King Faisal North (King Faisal Ibn Abd Al Aziz Road), Al Dana District, Jubail City Center, Saudi Arabia 35514-9290
* **Phone Lines:**
  * Landline 1: `+966 13 361 1399`
  * Landline 2: `+966 13 361 1747`
* **WhatsApp:** `+966 550220715`
* **Email:** `info@mayodentalcenter.com`
* **Instagram:** `https://www.instagram.com/mayodentalcenter1/`
* **Working Hours:** Saturday – Thursday: 9:00 AM – 9:00 PM | Friday: Closed
* **Copyright:** `© Mayo Dental Center`

---

## 3. Home Page Sections & Exact Copy Inventory

### Section 1: Hero
* **Tagline / Badge:** Welcome to Mayo Dental Center | مرحباً بكم في مركز مايو لطب الأسنان
* **Main Headline (English):** "Change your smile today!"
* **Main Headline (Arabic):** "غيّر ابتسامتك اليوم!"
* **Subheadline (English):** "Experience top-notch dental care at Mayo Dental Center. Conveniently located in Al-Jubail, our dentistry team is here to help you achieve and maintain a healthy, beautiful smile. New patients welcome!"
* **Subheadline (Arabic):** "اختبر رعاية أسنان فائقة الجودة في مركز مايو لطب الأسنان. موقعنا في الجبيل، فريقنا الطبي المتخصص هنا لمساعدتك في الحصول على ابتسامة صحية وجميلة والحفاظ عليها. نرحب بالمرضى الجدد!"
* **Primary CTA:** "Book your appointment" / "احجز موعدك الآن" (Links to `/book`)
* **Secondary CTA:** "Chat on WhatsApp" / "تواصل عبر واتساب" (`+966 550220715`)
* **Hero Image Asset:**
  * Original URL: `https://static.wixstatic.com/media/11062b_3893b044d74249fe98a16f1de1a0f2ac~mv2.jpg`
  * Local File: `/public/images/original/hero-dental-tools.jpg`

---

### Section 2: Value Pillars & Commitment Cards

#### Pillar 1: 👨‍⚕️ About us / من نحن
* **English:** "Mayo Dental Center consists of a specialized and experienced team to care for the health of your teeth and the teeth of all your family members. Our center offers a wide range of services including routine checkups, teeth cleanings, cosmetic dentistry, orthodontics and more."
* **Arabic:** "يتكون مركز مايو لطب الأسنان من فريق متخصص وذي خبرة عالية للعناية بصحة أسنانك وأسنان جميع أفراد عائلتك. يقدم مركزنا مجموعة شاملة من الخدمات بما في ذلك الفحوصات الدورية، وتنظيف الأسنان، وطب الأسنان التجميلي، والتقويم، والمزيد."

#### Pillar 2: 🏥 Our commitment / التزامنا
* **English:** "Your comfort and satisfaction are our top priorities. We strive to create a welcoming environment where you feel comfortable and confident in the care you receive. Our team is always here to answer any questions you have."
* **Arabic:** "راحتك ورضاك هما أهم أولوياتنا. نسعى جاهدين لخلق بيئة مرحبة ومريحة تشعرك بالثقة والاطمئنان في الرعاية التي تتلقاها. فريقنا الطبي متاح دائماً للإجابة على جميع استفساراتك."

#### Pillar 3: 📅 Book an appointment / حجز المواعيد
* **English:** "Are you ready for your next visit to the dentist? You can easily book an appointment through our website, or talk to us via WhatsApp on +966 550220715."
* **Arabic:** "هل أنت مستعد لزيارتك القادمة لطبيب الأسنان؟ يمكنك حجز موعدك بسهولة من خلال موقعنا الإلكتروني، أو التحدث معنا مباشرة عبر الواتساب على 0550220715 966+."

#### Pillar 4: 🔗 Stay connected / ابقَ على تواصل
* **English:** "If you have any questions please feel free to contact us. We are always happy to hear from our patients and look forward to providing you with the best care possible."
* **Arabic:** "إذا كانت لديك أي استفسارات، فلا تتردد في الاتصال بنا. يسعدنا دائماً الاستماع إلى مرضانا ونتطلع إلى تقديم أفضل رعاية طبية ممكنة لك."

---

### Section 3: Meet Dr. Dixon
* **Original Copy Callout:** "Meet Dr. Dixon"
* **Image Asset:** Orthodontic checkup consultation
  * Original URL: `https://static.wixstatic.com/media/11062b_e69085f5354c4f5c8cfb8be5a2b48d38~mv2.jpg`
  * Local File: `/public/images/original/orthodontic-checkup.jpg`
* **Credentials Note:** `{{TODO_CONFIRM_WITH_CLIENT: Provide Dr. Dixon's exact academic degrees, specialization certification, and years of experience.}}`

---

### Section 4: All 10 Services (Complete Details)

| # | Service Name (EN) | Arabic Title | Duration | Description | Local Image Asset |
|---|---|---|---|---|---|
| 1 | General checkup with treatment planning | فحص عام مع تخطيط العلاج | 30 min | Regular dental checkups are essential to maintaining a healthy smile. Our general dental exam includes a comprehensive examination of your teeth, gums and mouth to detect any potential problems early. We will discuss any findings and develop a personalized treatment plan tailored to your specific needs and goals. | `/public/images/original/service-general-checkup.jpeg` |
| 2 | Scaling and polishing | ازالة الترسبات و تلميع الاسنان | 30 min | Keep your smile sparkling and your gums healthy with our professional plaque removal and teeth polishing service. | `/public/images/original/service-scaling-polishing.jpg` |
| 3 | Fluoride application | تطبيق الفلورايد لمنع تسوس الأسنان | 15 min | Protect your teeth and prevent tooth decay with our fluoride application service. Fluoride is a natural mineral that strengthens teeth, helps fight tooth decay and is ideal for patients of all ages. | `/public/images/original/service-fluoride.jpg` |
| 4 | Tooth extraction | خلع الأسنان | 1 hr | When a tooth needs to be removed due to decay or damage, our tooth extraction service ensures a safe and comfortable experience. | `/public/images/original/service-extraction.jpg` |
| 5 | Root canal treatment | علاج الجذور | 1 hr | Preserve your natural teeth and relieve pain with our root canal treatment. This procedure treats any infections in the dental root, preventing further decay and restoring dental health. | `/public/images/original/service-root-canal.jpg` |
| 6 | Tooth whitening | تبييض الأسنان | 1 hr | Get a brighter, more confident smile with our professional teeth whitening services. | `/public/images/original/service-whitening.jpg` |
| 7 | Hollywood smile | ابتسامة هوليود | 1 hr | Transform your smile into a dazzling masterpiece through our Hollywood Smile services. These services combine multiple different treatments to achieve a bright, flawless smile. | `/public/images/original/service-hollywood-smile.jpg` |
| 8 | Orthodontics | علاج وتقويم الأسنان | 1 hr | Get a beautifully symmetrical smile and improve your oral health with our comprehensive orthodontic treatment. Whether you have crooked teeth, gaps, or bite issues, our orthodontists are here to help. | `/public/images/original/service-orthodontics.jpg` |
| 9 | Dental implants | زراعة الأسنان | 2 hr | Restore your smile with our advanced dental implant services. Dental implants provide a permanent solution to replace missing teeth. | `/public/images/original/service-dental-implants.jpg` |
| 10 | Emergency appointments | موعد فوري للحالات الطارئة | 30 min | If you are experiencing sudden or severe tooth pain, our emergency dental service is here to provide you with immediate care and pain relief. | `/public/images/original/service-emergency.jpeg` |

---

### Section 5: Gallery ("Our Collection")
The clinic presents a curated photo collection of dental cases, equipment, and facility views:
1. `gallery-1.jpg` (`5c9880_86a4f1bc60054e10b20779cf14cde244~mv2.jpg`, 220 KB)
2. `gallery-2.jpg` (`5c9880_c331f671edbe4b838ecf2fc41f565c49~mv2.jpg`, 124 KB)
3. `gallery-3.jpg` (`5c9880_3c0e8fe17ceb48c3908789c941a67897~mv2.jpg`, 170 KB)
4. `gallery-4.jpg` (`5c9880_8eb28085757e4e1fb5e6ecf87e8cf3a2~mv2.jpg`, 68 KB)
5. `gallery-5.webp` (`5c9880_49beef1e75754bc09585c4166447e022~mv2.webp`, 89 KB)

---

### Section 6: Schedule an Appointment CTA Band
* **Headline:** "Schedule an Appointment Today" / "احجز موعدك اليوم"
* **Background Image:** `/public/images/original/cta-banner-bg.jpg` (`11062b_bef57164592d4de195baced563e69721~mv2.jpg`, 199 KB)
* **CTA Button:** "Book Now" (links to `/book`)

---

### Section 7: Insurance and Payment Options
* **Headline:** Insurance and Payment Options / خيارات التأمين والدفع
* **Body Copy:** "At Mayo Dental Center, we strive to make healthcare accessible. We offer a wide range of payment plans, discounts and are working with our insurance partners to offer our services to as many individuals as possible."
* **Arabic Body Copy:** "في مركز مايو لطب الأسنان، نسعى جاهدين لجعل الرعاية الصحية ميسرة وفي متناول الجميع. نقدم مجموعة واسعة من خطط الدفع والخصومات، ونعمل باستمرار مع شركائنا في التأمين لتقديم خدماتنا لأكبر عدد ممكن من المراجعين."
* **Partner Logos (Downloaded):**
  * Visa (`partner-visa.png`, 104 KB)
  * Mastercard (`partner-mastercard.png`, 84 KB)
  * Tabby (`partner-tabby.png`, 32 KB)
  * Medgulf Insurance (`insurance-medgulf.png`, 26 KB)
  * Tawuniya Insurance (`insurance-tawuniya.png`, 65 KB)
* **New Patient Registration Document:**
  * Label: "New Patient Registration" / "استمارة تسجيل مريض جديد"
  * Local Asset: `/public/docs/new-patient-registration.pdf` (567 KB)
  * Direct Link to PDF Download

---

### Section 8: Get In Touch (Contact & Location)
* **Section Title:** Get In Touch / تواصل معنا
* **Form Fields:** Name, Phone Number, Email, Subject/Service, Date, Message
* **Submit Action:** "Send Message"
* **Success Feedback:** "Thank You for Reaching Out!" / "شكراً لتواصلك معنا! سنرد عليك في أقرب وقت."
* **Opening Hours:**
  * Saturday – Thursday: 9:00 AM to 9:00 PM
  * Friday: Closed
* **Location Address:** Mayo Dental Center, King Faisal Ibn Abd Al Aziz Road (King Faisal North), Jubail City Center, Saudi Arabia
* **Phone Numbers:**
  * Landline 1: `+966 13 361 1399`
  * Landline 2: `+966 13 361 1747`
* **Email:** `info@mayodentalcenter.com`
* **Social Links:**
  * Instagram: `https://www.instagram.com/mayodentalcenter1/`
  * Facebook: Active clinic link

---

## 4. Complete Asset Inventory

All 26 assets have been downloaded from Wix CDN at native resolution and preserved in `/public/images/original/` with dual access (original Wix hash + human-friendly semantic names):

```
public/
├── docs/
│   └── new-patient-registration.pdf          (567 KB)
└── images/
    └── original/
        ├── mayo-logo.png                      (364 KB, 5c9880_2631d3dc...png)
        ├── hero-dental-tools.jpg              (811 KB, 11062b_3893b044...jpg)
        ├── orthodontic-checkup.jpg            (1.13 MB, 11062b_e69085f5...jpg)
        ├── service-general-checkup.jpeg       (1.62 MB, 11062b_867346f7...jpeg)
        ├── service-scaling-polishing.jpg      (790 KB, 11062b_bb953b3d...jpg)
        ├── service-fluoride.jpg               (726 KB, 11062b_24fb6145...jpg)
        ├── service-extraction.jpg             (838 KB, 11062b_28c200f4...jpg)
        ├── service-root-canal.jpg             (560 KB, 11062b_99fbe0c0...jpg)
        ├── service-whitening.jpg              (1.04 MB, 11062b_85cbf868...jpg)
        ├── service-hollywood-smile.jpg        (488 KB, 11062b_b3ae5535...jpg)
        ├── service-orthodontics.jpg           (9 KB,   5c9880_5f8adc2d...jpg)
        ├── service-dental-implants.jpg        (395 KB, nsplsh_55316776...jpg)
        ├── service-emergency.jpeg             (826 KB, 11062b_24fa7fc7...jpeg)
        ├── gallery-1.jpg                      (220 KB, 5c9880_86a4f1bc...jpg)
        ├── gallery-2.jpg                      (124 KB, 5c9880_c331f671...jpg)
        ├── gallery-3.jpg                      (170 KB, 5c9880_3c0e8fe1...jpg)
        ├── gallery-4.jpg                      (68 KB,  5c9880_8eb28085...jpg)
        ├── gallery-5.webp                     (89 KB,  5c9880_49beef1e...webp)
        ├── cta-banner-bg.jpg                  (199 KB, 11062b_bef57164...jpg)
        ├── partner-visa.png                   (104 KB, 5c9880_896eb228...png)
        ├── partner-mastercard.png             (84 KB,  5c9880_e0a3d72b...png)
        ├── partner-tabby.png                  (32 KB,  5c9880_888f4e7b...png)
        ├── insurance-medgulf.png              (26 KB,  5c9880_150c1760...png)
        ├── insurance-tawuniya.png             (65 KB,  5c9880_a85ae91c...png)
        ├── icon-facebook.png                  (3 KB,   11062b_2381e8a6...png)
        └── icon-instagram.png                 (22 KB,  11062b_55e4be1e...png)
```

