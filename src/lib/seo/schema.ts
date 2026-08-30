import { PRACTITIONER, SITE } from "@/lib/constants";

export function clinicSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalClinic",
        "@id": `${SITE.url}/#clinic`,
        name: SITE.name,
        description:
          "Prenatal ultrasound services in Lenasia, Johannesburg South, including 2D gender scans, 4D bonding scans, antenatal checkups, anatomy scans, and nuchal translucency screening.",
        url: SITE.url,
        telephone: SITE.phone,
        email: SITE.email,
        priceRange: "ZAR 250 - ZAR 1000",
        image: `${SITE.url}/og.jpg`,
        address: {
          "@type": "PostalAddress",
          streetAddress: SITE.address.street,
          addressLocality: SITE.address.locality,
          addressRegion: SITE.address.region,
          postalCode: SITE.address.postalCode,
          addressCountry: SITE.address.country,
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: SITE.geo.lat,
          longitude: SITE.geo.lng,
        },
        areaServed: SITE.areas.map((name) => ({
          "@type": "City",
          name,
        })),
        founder: { "@id": `${SITE.url}/#nasreen-ali` },
        medicalSpecialty: "https://schema.org/Obstetric",
      },
      {
        "@type": "Person",
        "@id": `${SITE.url}/#nasreen-ali`,
        name: PRACTITIONER.name,
        jobTitle: PRACTITIONER.title,
        description:
          "Qualified radiographer (B.Tech Radiography, UJ, 2006) with specialised fetal and 4D ultrasound training from 2009.",
        alumniOf: {
          "@type": "CollegeOrUniversity",
          name: "University of Johannesburg",
          sameAs: "https://en.wikipedia.org/wiki/University_of_Johannesburg",
        },
        worksFor: { "@id": `${SITE.url}/#clinic` },
        knowsAbout: [
          "4D Ultrasound",
          "2D Gender Scan",
          "Nuchal Translucency Scan",
          "Fetal Anatomy Scan",
          "Prenatal Imaging",
        ],
      },
    ],
  };
}
