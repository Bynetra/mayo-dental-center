export interface BusinessConfig {
  name: {
    en: string;
    ar: string;
  };
  shortName: {
    en: string;
    ar: string;
  };
  tagline: {
    en: string;
    ar: string;
  };
  doctor: {
    name: {
      en: string;
      ar: string;
    };
    title: {
      en: string;
      ar: string;
    };
    credentialsPlaceholder: string;
    bio: {
      en: string;
      ar: string;
    };
    image: string;
  };
  contact: {
    phones: string[];
    whatsapp: string;
    whatsappFormatted: string;
    email: string;
    instagram: string;
    bookingUrl: string;
  };
  location: {
    address: {
      en: string;
      ar: string;
    };
    street: string;
    district: {
      en: string;
      ar: string;
    };
    city: {
      en: string;
      ar: string;
    };
    country: {
      en: string;
      ar: string;
    };
    postalCode: string;
    coordinates: {
      lat: number;
      lng: number;
    };
    googleMapsEmbedUrl: string;
    needsClientConfirmation: boolean;
  };
  hours: {
    timezone: string;
    days: {
      day: string;
      dayAr: string;
      open: string;
      close: string;
      isClosed: boolean;
    }[];
    fridayClosedNote: {
      en: string;
      ar: string;
    };
  };
  /**
   * CORRECTION: Google rating must not be displayed on site as a fact unless verified from primary source.
   * Kept null so rating UI only renders if an authorized value is injected.
   */
  googleRating: number | null; // {{TODO_CONFIRM_WITH_CLIENT: Verified Google Maps primary rating sync}}
  reviewCount: number | null;

  insurance: {
    id: string;
    name: string;
    nameAr: string;
    logo: string;
  }[];

  paymentMethods: {
    id: string;
    name: string;
    nameAr: string;
    logo: string;
    isInstallment?: boolean;
  }[];

  /**
   * Toggle to display Before/After Slider demo.
   * Default: false for client demo until client provides authentic consented clinical cases.
   */
  showBeforeAfterSlider: boolean;

  /**
   * Pending payment methods not visible on old site
   */
  pendingPaymentMethods: {
    cashMada: string; // "{{TODO_CONFIRM_WITH_CLIENT: Confirm if Cash and Mada POS are officially accepted}}"
  };
}

export const businessData: BusinessConfig = {
  name: {
    en: "Mayo Dental Center",
    ar: "مركز مايو لطب الأسنان",
  },
  shortName: {
    en: "Mayo Dental",
    ar: "عيادة مايو",
  },
  tagline: {
    en: "Experience top-notch dental care with a gentle touch. Changing smiles in Jubail with modern expertise and compassion.",
    ar: "اختبر رعاية أسنان فائقة الجودة بعناية فائقة. نصنع ابتسامات صحية ومشرقة في الجبيل بأحدث التقنيات وأعلى معايير الراحة.",
  },
  doctor: {
    name: {
      en: "Dr. Dixon",
      ar: "د. ديكسون",
    },
    title: {
      en: "Dental Surgeon — Mayo Dental Center",
      ar: "طبيب الأسنان — مركز مايو لطب الأسنان",
    },
    credentialsPlaceholder: "{{TODO_CONFIRM_WITH_CLIENT: Provide Dr. Dixon's academic degrees, university, and board certifications}}",
    bio: {
      en: "Leading the clinical team at Mayo Dental Center, Dr. Dixon brings extensive clinical experience in restorative, cosmetic, and orthodontic dentistry. Known for a calm and meticulous chairside manner, Dr. Dixon specializes in creating personalized treatment plans that prioritize long-term oral health and patient comfort.",
      ar: "يقود الفريق الطبي في مركز مايو لطب الأسنان، ويتمتع بخبرة سريرية واسعة في علاج وتجميل وتقويم الأسنان. يشتهر بأسلوبه الهادئ والدقيق، وتفانيه في وضع خطط علاجية مخصصة تضمن صحة الفم وراحة المراجعين على المدى الطويل.",
    },
    image: "", // AI-generated human face removed per medical image ethics policy. Awaiting official photography.
  },
  contact: {
    phones: ["+966 13 361 1399", "+966 13 361 1747"],
    whatsapp: "+966550220715",
    whatsappFormatted: "+966 55 022 0715",
    email: "info@mayodentalcenter.com",
    instagram: "https://www.instagram.com/mayodentalcenter1/",
    bookingUrl: "https://www.mayodentalcenter.com/book-online",
  },
  location: {
    address: {
      en: "3107 King Faisal North (King Faisal Ibn Abd Al Aziz Road), Al Dana District, Jubail City Center, Saudi Arabia",
      ar: "3107 شارع الملك فيصل الشمالي، حي الدانة، مركز مدينة الجبيل (البلد)، المملكة العربية السعودية",
    },
    street: "3107 King Faisal North",
    district: {
      en: "Al Dana District",
      ar: "حي الدانة",
    },
    city: {
      en: "Al Jubail",
      ar: "الجبيل",
    },
    country: {
      en: "Saudi Arabia",
      ar: "المملكة العربية السعودية",
    },
    postalCode: "35514-9290",
    coordinates: {
      lat: 27.0112,
      lng: 49.6583,
    },
    googleMapsEmbedUrl: "https://maps.google.com/maps?q=Mayo%20Dental%20Center%20King%20Faisal%20North%20Jubail&t=&z=15&ie=UTF8&iwloc=&output=embed",
    needsClientConfirmation: true,
  },
  hours: {
    timezone: "Asia/Riyadh",
    days: [
      { day: "Saturday", dayAr: "السبت", open: "09:00", close: "21:00", isClosed: false },
      { day: "Sunday", dayAr: "الأحد", open: "09:00", close: "21:00", isClosed: false },
      { day: "Monday", dayAr: "الاثنين", open: "09:00", close: "21:00", isClosed: false },
      { day: "Tuesday", dayAr: "الثلاثاء", open: "09:00", close: "21:00", isClosed: false },
      { day: "Wednesday", dayAr: "الأربعاء", open: "09:00", close: "21:00", isClosed: false },
      { day: "Thursday", dayAr: "الخميس", open: "09:00", close: "21:00", isClosed: false },
      { day: "Friday", dayAr: "الجمعة", open: "", close: "", isClosed: true },
    ],
    fridayClosedNote: {
      en: "Closed on Fridays. Emergency on-call support available via WhatsApp.",
      ar: "مغلق يوم الجمعة. الحالات الطارئة يمكنها التواصل عبر الواتساب.",
    },
  },
  googleRating: null, // Stored as null per brief requirement: only renders if verified
  reviewCount: null,
  insurance: [
    {
      id: "tawuniya",
      name: "Tawuniya Insurance",
      nameAr: "التعاونية للتأمين",
      logo: "/images/original/insurance-tawuniya.png",
    },
    {
      id: "medgulf",
      name: "Medgulf Insurance",
      nameAr: "ميدغلف للتأمين",
      logo: "/images/original/insurance-medgulf.png",
    },
  ],
  paymentMethods: [
    {
      id: "visa",
      name: "Visa",
      nameAr: "فيزا",
      logo: "/images/original/partner-visa.png",
    },
    {
      id: "mastercard",
      name: "Mastercard",
      nameAr: "ماستركارد",
      logo: "/images/original/partner-mastercard.png",
    },
    {
      id: "tabby",
      name: "Tabby (Split in 4)",
      nameAr: "تابي (قسّمها على 4 دفعات)",
      logo: "/images/original/partner-tabby.png",
      isInstallment: true,
    },
  ],
  showBeforeAfterSlider: false, // Default: hidden for client demo until client provides authentic clinical cases
  pendingPaymentMethods: {
    cashMada: "{{TODO_CONFIRM_WITH_CLIENT: Confirm if Cash and Mada POS are officially accepted}}",
  },
};

