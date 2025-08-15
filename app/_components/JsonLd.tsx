import Script from "next/script";

interface OrganizationSchemaProps {
  name: string;
  description: string;
  url: string;
  logo: string;
  address: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  contactPoint: {
    telephone: string;
    contactType: string;
  };
}

export const OrganizationSchema = ({
  name,
  description,
  url,
  logo,
  address,
  contactPoint,
}: OrganizationSchemaProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ReligiousOrganization",
    name: name,
    alternateName: [
      "MMM Chile",
      "Iglesia Cristiana MMM Chile",
      "Iglesia Evangélica MMM Chile",
    ],
    description: description,
    url: url,
    logo: logo,
    address: {
      "@type": "PostalAddress",
      streetAddress: address.streetAddress,
      addressLocality: address.addressLocality,
      addressRegion: address.addressRegion,
      postalCode: address.postalCode,
      addressCountry: address.addressCountry,
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: contactPoint.telephone,
      contactType: contactPoint.contactType,
    },
    sameAs: [
      "https://www.facebook.com/MMMCHILEORG",
      "https://www.instagram.com/chile_mmm",
      "https://www.youtube.com/@KoinoniaMMMChileOficial",
    ],
    // Información específica de iglesia cristiana
    religiousAffiliation: "Movimiento Misionero Mundial",
    denomination: "Iglesia Cristiana Evangélica Pentecostal",
    serviceType: [
      "Culto de Adoración",
      "Estudio Bíblico",
      "Oración",
      "Evangelización",
      "Ministerio de Jóvenes",
      "Ministerio de Niños",
      "Ministerio de Mujeres",
      "Ministerio de Hombres",
    ],
    areaServed: "Chile",
    foundingDate: "1990",
    // Horarios de servicios
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Servicios Religiosos",
      itemListElement: [
        {
          "@type": "Offer",
          name: "Culto Dominical",
          description: "Servicio principal de adoración y predicación",
          category: "Servicio Religioso",
        },
        {
          "@type": "Offer",
          name: "Estudio Bíblico",
          description: "Enseñanza y estudio de la Palabra de Dios",
          category: "Educación Religiosa",
        },
      ],
    },
  };

  return (
    <Script
      id="organization-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

interface EventSchemaProps {
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  location: {
    name: string;
    address: {
      streetAddress: string;
      addressLocality: string;
      addressRegion: string;
      addressCountry: string;
    };
  };
  organizer: {
    name: string;
    url: string;
  };
}

export const EventSchema = ({
  name,
  description,
  startDate,
  endDate,
  location,
  organizer,
}: EventSchemaProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: name,
    description: description,
    startDate: startDate,
    endDate: endDate,
    location: {
      "@type": "Place",
      name: location.name,
      address: {
        "@type": "PostalAddress",
        streetAddress: location.address.streetAddress,
        addressLocality: location.address.addressLocality,
        addressRegion: location.address.addressRegion,
        addressCountry: location.address.addressCountry,
      },
    },
    organizer: {
      "@type": "Organization",
      name: organizer.name,
      url: organizer.url,
    },
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  };

  return (
    <Script
      id="event-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

interface BreadcrumbSchemaProps {
  items: Array<{
    name: string;
    url: string;
  }>;
}

export const LocalChurchSchema = ({
  name,
  description,
  url,
  address,
  contactPoint,
  services,
}: {
  name: string;
  description: string;
  url: string;
  address: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    addressCountry: string;
  };
  contactPoint: {
    telephone: string;
    contactType: string;
  };
  services: Array<{
    name: string;
    description: string;
    dayOfWeek: string;
    time: string;
  }>;
}) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": url,
    name: name,
    alternateName: `${name} - Iglesia Cristiana`,
    description: description,
    url: url,
    category: "Iglesia Cristiana",
    address: {
      "@type": "PostalAddress",
      streetAddress: address.streetAddress,
      addressLocality: address.addressLocality,
      addressRegion: address.addressRegion,
      addressCountry: address.addressCountry,
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: contactPoint.telephone,
      contactType: contactPoint.contactType,
    },
    // Horarios de servicios
    openingHoursSpecification: services.map((service) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: service.dayOfWeek,
      opens: service.time,
      closes: "23:59",
      description: service.description,
    })),
    // Servicios ofrecidos
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Servicios Religiosos",
      itemListElement: services.map((service) => ({
        "@type": "Offer",
        name: service.name,
        description: service.description,
        category: "Servicio Religioso",
      })),
    },
    // Información adicional para iglesias
    additionalProperty: [
      {
        "@type": "PropertyValue",
        name: "Tipo de Iglesia",
        value: "Iglesia Cristiana Evangélica",
      },
      {
        "@type": "PropertyValue",
        name: "Denominación",
        value: "Movimiento Misionero Mundial",
      },
      {
        "@type": "PropertyValue",
        name: "Idioma Principal",
        value: "Español",
      },
    ],
  };

  return (
    <Script
      id="local-church-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export const BreadcrumbSchema = ({ items }: BreadcrumbSchemaProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <Script
      id="breadcrumb-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};
