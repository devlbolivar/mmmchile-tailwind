import React from "react";

const JsonLd = () => {
  const churchSchema = {
    "@context": "https://schema.org",
    "@type": "Church",
    name: "Iglesia Cristiana MMM Chile",
    alternateName: [
      "MMM Chile",
      "Iglesia Cristiana Evangélica MMM Chile",
      "Iglesia Evangélica Pentecostal MMM Chile",
      "Iglesia Cristiana en Chile",
      "Iglesia Cristiana Chile",
    ],
    description:
      "Iglesia cristiana pentecostal en Chile que predica el evangelio de Jesucristo, enseña la Biblia y comparte la fe cristiana. Somos una iglesia cristiana comprometida con la predicación del evangelio y la enseñanza bíblica.",
    url: "https://mmmchile.cl",
    logo: "https://mmmchile.cl/images/logo.png",
    image: "https://mmmchile.cl/images/hero-overlay.png",
    telephone: "+56-9-7558-7223",
    email: "secretariammmchile@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "General Gana 924",
      addressLocality: "Santiago",
      addressRegion: "Región Metropolitana",
      addressCountry: "CL",
      postalCode: "8320000",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -33.4489,
      longitude: -70.6693,
    },
    openingHours: [
      "Mo 19:00-22:00",
      "Tu 19:00-22:00",
      "Th 19:00-22:00",
      "Fr 19:00-22:00",
      "Sa 09:00-19:00",
      "Su 09:00-19:00",
    ],
    serviceType: [
      "Servicios de Adoración",
      "Estudios Bíblicos",
      "Ministerio de Jóvenes",
      "Escuela Dominical",
      "Grupos de Oración",
      "Evangelización",
      "Ministerio Pentecostal",
      "Sanidad Divina",
      "Profecía",
      "Discipulado Cristiano",
    ],
    religiousAffiliation: "Movimiento Misionero Mundial",
    denomination: "Iglesia Evangélica Pentecostal",
    theology: "Evangélica Pentecostal",
    foundingDate: "1980",
    numberOfEmployees: "50",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Servicios Religiosos",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Servicio Dominical",
            description:
              "Culto de adoración con predicación bíblica y música cristiana",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Estudio Bíblico",
            description: "Enseñanza profunda de la Palabra de Dios",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Ministerio de Jóvenes",
            description: "Programas especiales para adolescentes y jóvenes",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Ministerio Pentecostal",
            description: "Servicios con manifestaciones del Espíritu Santo",
          },
        },
      ],
    },
    sameAs: [
      "https://web.facebook.com/MMMCHILEORG/",
      "https://www.instagram.com/chile_mmm/",
      "https://www.youtube.com/@KoinoniaMMMChileOficial",
      "https://wa.me/56975587223",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+56-9-7558-7223",
      contactType: "customer service",
      availableLanguage: ["Spanish", "English"],
    },
    areaServed: {
      "@type": "Country",
      name: "Chile",
    },
    slogan: "Predicando el evangelio de Jesucristo en Chile",
    knowsAbout: [
      "Evangelio de Jesucristo",
      "Doctrina Cristiana",
      "Enseñanza Bíblica",
      "Pentecostalismo",
      "Evangelismo",
      "Discipulado Cristiano",
      "Iglesia Cristiana",
      "Iglesia Evangélica",
      "Pentecostalismo Bíblico",
      "Ministerio del Espíritu Santo",
    ],
    additionalProperty: [
      {
        "@type": "PropertyValue",
        name: "Tipo de Iglesia",
        value: "Iglesia Cristiana Evangélica Pentecostal",
      },
      {
        "@type": "PropertyValue",
        name: "Ubicación",
        value: "Chile",
      },
      {
        "@type": "PropertyValue",
        name: "Denominación",
        value: "Evangélica Pentecostal",
      },
    ],
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "ReligiousOrganization",
    name: "Movimiento Misionero Mundial Chile",
    alternateName: ["MMM Chile", "Iglesia Cristiana Evangélica MMM Chile"],
    description:
      "Organización religiosa cristiana dedicada a la predicación del evangelio y la enseñanza bíblica en Chile. Somos una iglesia cristiana comprometida con la Gran Comisión.",
    url: "https://mmmchile.cl",
    foundingDate: "1980",
    religiousAffiliation: "Movimiento Misionero Mundial",
    denomination: "Iglesia Evangélica Pentecostal",
    areaServed: "Chile",
    mission:
      "Predicar el evangelio de Jesucristo y hacer discípulos en Chile y el mundo",
    slogan: "Id y haced discípulos a todas las naciones",
    knowsAbout: [
      "Iglesia Cristiana",
      "Iglesia Evangélica",
      "Pentecostalismo",
      "Evangelio",
      "Doctrina Cristiana",
      "Ministerio Cristiano",
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "General Gana 924",
      addressLocality: "Santiago",
      addressRegion: "Región Metropolitana",
      addressCountry: "CL",
      postalCode: "8320000",
    },
    telephone: "+56-9-7558-7223",
    email: "contacto@mmmchile.cl",
    sameAs: [
      "https://web.facebook.com/MMMCHILEORG/",
      "https://www.instagram.com/chile_mmm/",
      "https://www.youtube.com/@KoinoniaMMMChileOficial",
      "https://wa.me/56975587223",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "MMM Chile - Iglesia Cristiana en Chile",
    description:
      "Sitio web oficial de la Iglesia Cristiana MMM Chile. Encuentra información sobre servicios, doctrina, ubicaciones de iglesias cristianas y más. Somos una iglesia cristiana en Chile.",
    url: "https://mmmchile.cl",
    publisher: {
      "@type": "Organization",
      name: "Iglesia Cristiana MMM Chile",
      address: {
        "@type": "PostalAddress",
        streetAddress: "General Gana 924",
        addressLocality: "Santiago",
        addressRegion: "Región Metropolitana",
        addressCountry: "CL",
        postalCode: "8320000",
      },
      telephone: "+56-9-7558-7223",
      email: "contacto@mmmchile.cl",
    },
    potentialAction: {
      "@type": "SearchAction",
      target: "https://mmmchile.cl/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
    about: [
      {
        "@type": "Thing",
        name: "Iglesia Cristiana Evangélica",
        description: "Iglesia cristiana evangélica pentecostal en Chile",
      },
      {
        "@type": "Thing",
        name: "Iglesia Evangélica Pentecostal",
        description: "Iglesia evangélica con doctrina pentecostal bíblica",
      },
    ],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Inicio",
        item: "https://mmmchile.cl",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Iglesias Cristianas",
        item: "https://mmmchile.cl/iglesias",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Doctrina Cristiana",
        item: "https://mmmchile.cl/doctrina",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Eventos Cristianos",
        item: "https://mmmchile.cl/eventos",
      },
    ],
  };

  // Nuevo esquema específico para Iglesia Evangélica
  const evangelicalChurchSchema = {
    "@context": "https://schema.org",
    "@type": "PlaceOfWorship",
    name: "Iglesia Cristiana MMM Chile",
    description:
      "Iglesia cristiana pentecostal en Chile que predica el evangelio de Jesucristo",
    url: "https://mmmchile.cl",
    religiousAffiliation: "Movimiento Misionero Mundial",
    denomination: "Evangélica Pentecostal",
    areaServed: "Chile",
    hasMap: "https://maps.google.com/?q=General+Gana+924,+Santiago,+Chile",
    openingHours: [
      "Mo 19:00-22:00",
      "Tu 19:00-22:00",
      "Th 19:00-22:00",
      "Fr 19:00-22:00",
      "Sa 09:00-19:00",
      "Su 09:00-19:00",
    ],
    telephone: "+56-9-7558-7223",
    email: "contacto@mmmchile.cl",
    address: {
      "@type": "PostalAddress",
      streetAddress: "General Gana 924",
      addressLocality: "Santiago",
      addressRegion: "Región Metropolitana",
      addressCountry: "CL",
      postalCode: "8320000",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -33.4489,
      longitude: -70.6693,
    },
  };

  // Nuevo esquema específico para SEO de "iglesia cristiana"
  const evangelicalChurchSeoSchema = {
    "@context": "https://schema.org",
    "@type": "ReligiousOrganization",
    name: "Iglesia Cristiana en Chile",
    alternateName: [
      "Iglesia Cristiana Chile",
      "Iglesia Cristiana MMM Chile",
      "Iglesia Cristiana Pentecostal Chile",
    ],
    description:
      "Iglesia cristiana en Chile que predica el evangelio de Jesucristo. Somos una iglesia cristiana pentecostal comprometida con la enseñanza bíblica y el evangelismo.",
    url: "https://mmmchile.cl",
    religiousAffiliation: "Movimiento Misionero Mundial",
    denomination: "Cristiana Pentecostal",
    areaServed: "Chile",
    mission:
      "Predicar el evangelio de Jesucristo como iglesia cristiana en Chile",
    slogan: "Iglesia Cristiana en Chile predicando el evangelio",
    address: {
      "@type": "PostalAddress",
      streetAddress: "General Gana 924",
      addressLocality: "Santiago",
      addressRegion: "Región Metropolitana",
      addressCountry: "CL",
      postalCode: "8320000",
    },
    telephone: "+56-9-7558-7223",
    email: "contacto@mmmchile.cl",
    openingHours: [
      "Mo 19:00-22:00",
      "Tu 19:00-22:00",
      "Th 19:00-22:00",
      "Fr 19:00-22:00",
      "Sa 09:00-19:00",
      "Su 09:00-19:00",
    ],
    knowsAbout: [
      "Iglesia Cristiana",
      "Iglesia Cristiana Chile",
      "Evangelio de Jesucristo",
      "Doctrina Cristiana",
      "Pentecostalismo",
      "Ministerio Cristiano",
    ],
    sameAs: [
      "https://web.facebook.com/MMMCHILEORG/",
      "https://www.instagram.com/chile_mmm/",
      "https://www.youtube.com/@KoinoniaMMMChileOficial",
      "https://wa.me/56975587223",
    ],
    additionalProperty: [
      {
        "@type": "PropertyValue",
        name: "Tipo de Iglesia",
        value: "Iglesia Cristiana",
      },
      {
        "@type": "PropertyValue",
        name: "Ubicación",
        value: "Chile",
      },
      {
        "@type": "PropertyValue",
        name: "Denominación",
        value: "Cristiana Pentecostal",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(churchSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(evangelicalChurchSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(evangelicalChurchSeoSchema),
        }}
      />
    </>
  );
};

export default JsonLd;
