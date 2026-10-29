import { businessData } from "@/content/business";
import { servicesData } from "@/content/services";

export function generateClinicSchema(locale: string = "en") {
  const isAr = locale === "ar";

  return {
    "@context": "https://schema.org",
    "@type": ["Dentist", "LocalBusiness", "MedicalClinic"],
    name: isAr ? businessData.name.ar : businessData.name.en,
    alternateName: isAr ? businessData.shortName.ar : businessData.shortName.en,
    url: "https://lucidadental.com",
    logo: "https://lucidadental.com/images/original/lucida-logo.png",
    image: [
      "https://lucidadental.com/images/original/lucida-og-image.jpg",
      "https://lucidadental.com/images/original/hero-dental-tools.webp",
    ],
    telephone: businessData.contact.phones[0],
    email: businessData.contact.email,
    priceRange: "$$",
    description: isAr ? businessData.tagline.ar : businessData.tagline.en,
    address: {
      "@type": "PostalAddress",
      streetAddress: businessData.location.street,
      addressLocality: isAr ? "الوعب، الدوحة" : "Al Waab, Doha",
      addressRegion: isAr ? "الدوحة" : "Doha",
      postalCode: "Doha",
      addressCountry: "QA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: businessData.location.coordinates.lat,
      longitude: businessData.location.coordinates.lng,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Saturday",
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
        ],
        opens: "09:00",
        closes: "13:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Saturday",
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
        ],
        opens: "16:30",
        closes: "20:30",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Thursday"],
        opens: "09:00",
        closes: "17:00",
      },
    ],
    sameAs: [
      businessData.contact.instagram,
      businessData.contact.facebook,
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: isAr ? "خدمات طب وتجميل الأسنان" : "Dental & Cosmetic Treatments",
      itemListElement: servicesData.map((s, index) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "MedicalProcedure",
          name: isAr ? s.title.ar : s.title.en,
          description: isAr ? s.shortDescription.ar : s.shortDescription.en,
          procedureType: "https://schema.org/NoninvasiveProcedure",
        },
        position: index + 1,
      })),
    },
  };
}
