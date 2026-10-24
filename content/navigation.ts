export interface NavItem {
  id: string;
  href: string;
  label: {
    en: string;
    ar: string;
  };
}

export const mainNavItems: NavItem[] = [
  {
    id: "home",
    href: "/",
    label: { en: "Home", ar: "الرئيسية" },
  },
  {
    id: "services",
    href: "/services",
    label: { en: "Services", ar: "الخدمات" },
  },
  {
    id: "about",
    href: "/about",
    label: { en: "About & Dr. Dixon", ar: "عن المركز والطبيب" },
  },
  {
    id: "patient-info",
    href: "/patient-info",
    label: { en: "Patient Info", ar: "معلومات المرضى" },
  },
  {
    id: "contact",
    href: "/contact",
    label: { en: "Contact", ar: "اتصل بنا" },
  },
];

