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
  license: {
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
    specialty: {
      en: string;
      ar: string;
    };
    bio: {
      en: string;
      ar: string;
    };
    image: string;
  };
  emergencyDoctor: {
    name: {
      en: string;
      ar: string;
    };
    title: {
      en: string;
      ar: string;
    };
    specialty: {
      en: string;
      ar: string;
    };
    bio: {
      en: string;
      ar: string;
    };
  };
  contact: {
    phones: string[];
    whatsapp: string;
    whatsappFormatted: string;
    email: string;
    instagram: string;
    facebook: string;
    website: string;
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
    googleMapsUrl: string;
    googleReviewUrl: string;
    needsClientConfirmation: boolean;
  };
  hours: {
    timezone: string;
    days: {
      day: string;
      dayAr: string;
      open: string;
      close: string;
      morningShift?: string;
      eveningShift?: string;
      isClosed: boolean;
    }[];
    fridayClosedNote: {
      en: string;
      ar: string;
    };
  };
  /**
   * Google rating is not displayed as a fabricated fact.
   * Kept null so rating UI does not manufacture unverified numbers.
   */
  googleRating: number | null;
  reviewCount: number | null;

  insurance: {
    id: string;
    name: string;
    nameAr: string;
    logo: string;
    note?: {
      en: string;
      ar: string;
    };
  }[];

  paymentMethods: {
    id: string;
    name: string;
    nameAr: string;
    logo: string;
    isInstallment?: boolean;
  }[];

  showBeforeAfterSlider: boolean;
}

export const businessData: BusinessConfig = {
  name: {
    en: "Lucida Dental Center",
    ar: "مركز لوسيدا لطب الأسنان",
  },
  shortName: {
    en: "Lucida Dental",
    ar: "عيادة لوسيدا",
  },
  tagline: {
    en: "Precision dentistry and personalized smile aesthetics in Al Waab, Doha. Experience gentle, specialized dental care in a welcoming clinical setting.",
    ar: "طب أسنان دقيق وجماليات ابتسامة مخصصة في الوعب، الدوحة. استمتع برعاية أسنان هادئة ومتقدمة في بيئة سريرية مريحة.",
  },
  license: {
    en: "Licensed by Qatar Council for Healthcare Practitioners (QCHP)",
    ar: "مرخص من المجلس القطري للتخصصات الصحية (QCHP)",
  },
  doctor: {
    name: {
      en: "Dr. Adey Al-Shaar",
      ar: "د. عدي الشعار",
    },
    title: {
      en: "Endodontist & Medical Director — Lucida Dental Center",
      ar: "أخصائي علاج الجذور والمدير الطبي — مركز لوسيدا لطب الأسنان",
    },
    credentialsPlaceholder: "Master's Degree in Endodontics (Jordan University of Science & Technology)",
    specialty: {
      en: "Microscopic Root Canal Therapy, Dental Implants & Advanced Restorations",
      ar: "علاج الجذور المجهري، زراعة الأسنان، والترميمات السريرية المتقدمة",
    },
    bio: {
      en: "Leading the clinical team at Lucida Dental Center, Dr. Adey Al-Shaar holds a Master's degree in Endodontics from the Jordan University of Science and Technology (JUST). Renowned for his meticulous clinical precision and calm chairside presence, Dr. Al-Shaar specializes in microscopic root canal therapy, complex retreatment, and durable implant solutions designed to safeguard your natural oral foundation.",
      ar: "يقود الفريق الطبي في مركز لوسيدا لطب الأسنان، حائز على درجة الماجستير في علاج جذور وعصب الأسنان من جامعة العلوم والتكنولوجيا الأردنية (JUST). يشتهر بدقته السريرية العالية وأسلوبه الهادئ والمطمئن، ويتخصص في علاج الجذور المجهري الدقيق، وإعادة معالجة العصب، وزراعة الأسنان بهدف الحفاظ على البنية الطبيعية للأسنان.",
    },
    image: "", // Authentic on-site clinic photography awaiting scheduled session
  },
  emergencyDoctor: {
    name: {
      en: "Dr. Mohamed Isa",
      ar: "د. محمد عيسى",
    },
    title: {
      en: "Emergency & General Dental Practitioner",
      ar: "طبيب الأسنان العام والطوارئ",
    },
    specialty: {
      en: "Acute Pain Relief, Restorative Care & Urgent Dental Triage",
      ar: "تسكين الألم الحاد، الحشوات الترميمية، وطوارئ الأسنان العاجلة",
    },
    bio: {
      en: "Dr. Mohamed Isa holds a Bachelor of Dental and Oral Surgery (October 6 University, 2014) with clinical training completed at Kasr Al Ainy Hospital. As an emergency dental practitioner at Lucida Dental Center, he provides compassionate, prompt relief for acute toothaches, sudden dental fractures, and routine restorative dentistry.",
      ar: "حاصل على بكالوريوس طب وجراحة الفم والأسنان (جامعة 6 أكتوبر، 2014) وأتم تدريبه السريري في مستشفى قصر العيني. يقدم رعاية عاجلة للحالات الطارئة والآلام المفاجئة وكسور الأسنان بالإضافة للحشوات التجميلية والفحص الدوري.",
    },
  },
  contact: {
    phones: ["+974 4451 1737", "+974 5531 1553"],
    whatsapp: "+97455311553",
    whatsappFormatted: "+974 5531 1553",
    email: "info@lucidadental.com",
    instagram: "https://www.instagram.com/lucidadentalcenter/?hl=en",
    facebook: "https://www.facebook.com/LucidaDentalCenter/",
    website: "https://lucidadental.com",
  },
  location: {
    address: {
      en: "Bu Hasa Street (Snay Bu Hasa St), Al Waab District, Doha, Qatar",
      ar: "شارع بوحصا (شارع صنيع بو حصى)، منطقة الوعب، الدوحة، دولة قطر",
    },
    street: "Bu Hasa Street (Snay Bu Hasa St)",
    district: {
      en: "Al Waab",
      ar: "الوعب",
    },
    city: {
      en: "Doha",
      ar: "الدوحة",
    },
    country: {
      en: "Qatar",
      ar: "دولة قطر",
    },
    postalCode: "Doha, Qatar",
    coordinates: {
      lat: 25.258,
      lng: 51.462,
    },
    googleMapsEmbedUrl:
      "https://maps.google.com/maps?q=Lucida%20Dental%20Center%20Al%20Waab%20Doha%20Qatar&t=&z=15&ie=UTF8&iwloc=&output=embed",
    googleMapsUrl: "https://maps.google.com/?q=Lucida+Dental+Center+Al+Waab+Doha+Qatar",
    googleReviewUrl: "https://maps.google.com/?q=Lucida+Dental+Center+Al+Waab+Doha+Qatar",
    needsClientConfirmation: false,
  },
  hours: {
    timezone: "Asia/Qatar",
    days: [
      {
        day: "Saturday",
        dayAr: "السبت",
        open: "09:00",
        close: "20:30",
        morningShift: "9:00 AM – 1:00 PM",
        eveningShift: "4:30 PM – 8:30 PM",
        isClosed: false,
      },
      {
        day: "Sunday",
        dayAr: "الأحد",
        open: "09:00",
        close: "20:30",
        morningShift: "9:00 AM – 1:00 PM",
        eveningShift: "4:30 PM – 8:30 PM",
        isClosed: false,
      },
      {
        day: "Monday",
        dayAr: "الاثنين",
        open: "09:00",
        close: "20:30",
        morningShift: "9:00 AM – 1:00 PM",
        eveningShift: "4:30 PM – 8:30 PM",
        isClosed: false,
      },
      {
        day: "Tuesday",
        dayAr: "الثلاثاء",
        open: "09:00",
        close: "20:30",
        morningShift: "9:00 AM – 1:00 PM",
        eveningShift: "4:30 PM – 8:30 PM",
        isClosed: false,
      },
      {
        day: "Wednesday",
        dayAr: "الأربعاء",
        open: "09:00",
        close: "20:30",
        morningShift: "9:00 AM – 1:00 PM",
        eveningShift: "4:30 PM – 8:30 PM",
        isClosed: false,
      },
      {
        day: "Thursday",
        dayAr: "الخميس",
        open: "09:00",
        close: "17:00",
        morningShift: "9:00 AM – 5:00 PM (Continuous)",
        isClosed: false,
      },
      {
        day: "Friday",
        dayAr: "الجمعة",
        open: "",
        close: "",
        isClosed: true,
      },
    ],
    fridayClosedNote: {
      en: "Closed on Fridays. Emergency on-call assistance available via WhatsApp.",
      ar: "مغلق يوم الجمعة. الحالات الطارئة يمكنها التواصل عبر الواتساب.",
    },
  },
  googleRating: null, // Transparently preserved as null: no manufactured fake ratings
  reviewCount: null,
  insurance: [
    {
      id: "alkoot",
      name: "AlKoot Insurance",
      nameAr: "الكوت للتأمين",
      logo: "/images/original/insurance-alkoot.svg",
      note: {
        en: "Direct network billing for eligible medical & corporate tiers",
        ar: "تغطية مباشرة للمشتركين المؤهلين ضمن شبكة الكوت",
      },
    },
    {
      id: "qlm",
      name: "QLM Life & Medical Insurance",
      nameAr: "كيو إل إم (QLM) للتأمين",
      logo: "/images/original/insurance-qlm.svg",
      note: {
        en: "Direct verification or full reimbursement claim documentation",
        ar: "مطالبات مباشرة ووثائق كاملة للاسترداد السريع",
      },
    },
    {
      id: "mednet",
      name: "Mednet Qatar",
      nameAr: "ميدنت قطر",
      logo: "/images/original/insurance-alkoot.svg",
      note: {
        en: "Claims support for approved healthcare provider cards",
        ar: "دعم مطالبات التأمين للبطاقات المعتمدة",
      },
    },
    {
      id: "nextcare",
      name: "Nextcare / Allianz",
      nameAr: "نكست كير / أليانز",
      logo: "/images/original/insurance-qlm.svg",
      note: {
        en: "Approved provider paperwork and diagnostic submission",
        ar: "تقارير طبية وفواتير مفصلة للمطالبات السريعة",
      },
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
      id: "naps",
      name: "NAPS (Qatar Debit Cards)",
      nameAr: "شبكة نافس للبطاقات القطرية",
      logo: "/images/original/partner-naps.svg",
    },
    {
      id: "tabby",
      name: "Tabby (Split in 4)",
      nameAr: "تابي (قسّمها على 4 دفعات)",
      logo: "/images/original/partner-tabby.png",
      isInstallment: true,
    },
  ],
  showBeforeAfterSlider: false,
};
