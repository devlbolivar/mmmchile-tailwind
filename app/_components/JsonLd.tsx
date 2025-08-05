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
