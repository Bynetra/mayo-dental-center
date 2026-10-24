import { businessData } from "@/content/business";
import { servicesData } from "@/content/services";

export function generateClinicSchema(locale: string = "en") {
  const isAr = locale === "ar";

  return {
    "@context": "https://schema.org",
    "@type": ["Dentist", "LocalBusiness", "MedicalClinic"],
    name: isAr ? businessData.name.ar : businessData.name.en,
    alternateName: isAr ? businessData.shortName.ar : businessData.shortName.en,
    url: "https://www.mayodentalcenter.com",
    logo: "https://www.mayodentalcenter.com/images/original/mayo-logo.png",
    image: [
      "https://www.mayodentalcenter.com/images/original/hero-dental-tools.jpg",
      "https://www.mayodentalcenter.com/images/generated/hero-clinic-ambiance.jpg",
    ],
    telephone: businessData.contact.phones[0],
    email: businessData.contact.email,
    priceRange: "$$",
    description: isAr ? businessData.tagline.ar : businessData.tagline.en,
    address: {
      "@type": "PostalAddress",
      streetAddress: businessData.location.street,
      addressLocality: isAr ? businessData.location.city.ar : businessData.location.city.en,
      addressRegion: "Eastern Province",
      postalCode: businessData.location.postalCode,
      addressCountry: "SA",
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
          "Thursday",
        ],
        opens: "09:00",
        closes: "21:00",
      },
    ],
    sameAs: [
      businessData.contact.instagram,
      businessData.contact.bookingUrl,
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: isAr ? "خدمات طب الأسنان" : "Dental Care Services",
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

