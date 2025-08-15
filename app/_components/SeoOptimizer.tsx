import Head from "next/head";

interface SeoOptimizerProps {
  title?: string;
  description?: string;
  keywords?: string[];
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  articleAuthor?: string;
  articlePublishedTime?: string;
  articleModifiedTime?: string;
}

const SeoOptimizer = ({
  title = "Iglesia Cristiana Evangélica en Chile | MMM Chile",
  description = "Iglesia cristiana evangélica en Chile. Predicamos el evangelio de Jesucristo, enseñamos la Biblia y compartimos la fe cristiana. Encuentra una iglesia cerca de ti.",
  keywords = [
    "iglesia cristiana",
    "iglesia evangélica",
    "iglesia cristiana chile",
    "evangelio",
    "fe cristiana",
    "predicación cristiana",
    "enseñanza bíblica",
    "movimiento misionero mundial",
    "iglesia pentecostal",
    "cristianismo",
    "jesucristo",
    "biblia",
    "oración",
    "adoración",
    "comunidad cristiana",
  ],
  canonicalUrl,
  ogImage = "/images/logo.png",
  ogType = "website",
  articleAuthor,
  articlePublishedTime,
  articleModifiedTime,
}: SeoOptimizerProps) => {
  const baseUrl = "https://mmmchile.cl";
  const fullCanonicalUrl = canonicalUrl ? `${baseUrl}${canonicalUrl}` : baseUrl;

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(", ")} />
      <meta name="author" content="Movimiento Misionero Mundial Chile" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="es" />
      <meta name="revisit-after" content="7 days" />

      {/* Canonical URL */}
      <link rel="canonical" href={fullCanonicalUrl} />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonicalUrl} />
      <meta property="og:image" content={`${baseUrl}${ogImage}`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta
        property="og:site_name"
        content="Movimiento Misionero Mundial Chile"
      />
      <meta property="og:locale" content="es_CL" />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${baseUrl}${ogImage}`} />

      {/* Additional SEO Meta Tags */}
      <meta name="theme-color" content="#1e40af" />
      <meta name="msapplication-TileColor" content="#1e40af" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="MMM Chile" />

      {/* Article specific meta tags */}
      {articleAuthor && (
        <meta property="article:author" content={articleAuthor} />
      )}
      {articlePublishedTime && (
        <meta
          property="article:published_time"
          content={articlePublishedTime}
        />
      )}
      {articleModifiedTime && (
        <meta property="article:modified_time" content={articleModifiedTime} />
      )}

      {/* Local Business Schema hints */}
      <meta name="geo.region" content="CL" />
      <meta name="geo.placename" content="Chile" />
      <meta name="geo.position" content="-33.4489;-70.6693" />
      <meta name="ICBM" content="-33.4489, -70.6693" />

      {/* Religious organization specific */}
      <meta name="religion" content="Christianity" />
      <meta name="denomination" content="Evangelical Pentecostal" />
      <meta
        name="religious-affiliation"
        content="Movimiento Misionero Mundial"
      />

      {/* Preconnect to external domains for performance */}
      <link rel="preconnect" href="https://www.google-analytics.com" />
      <link rel="preconnect" href="https://www.googletagmanager.com" />
      <link rel="dns-prefetch" href="https://www.google-analytics.com" />
      <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
    </Head>
  );
};

export default SeoOptimizer;
