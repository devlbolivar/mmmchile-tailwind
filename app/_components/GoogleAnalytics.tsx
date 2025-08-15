import Script from "next/script";

const GoogleAnalytics = () => {
  const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  if (!GA_MEASUREMENT_ID) {
    return null;
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', {
            page_title: 'Iglesia Cristiana Evangélica en Chile',
            page_location: window.location.href,
            custom_map: {
              'custom_parameter_1': 'iglesia_cristiana',
              'custom_parameter_2': 'evangelio',
              'custom_parameter_3': 'fe_cristiana'
            }
          });
          
          // Enhanced ecommerce tracking for church events
          gtag('config', '${GA_MEASUREMENT_ID}', {
            custom_map: {
              'custom_parameter_4': 'eventos_cristianos',
              'custom_parameter_5': 'predicaciones',
              'custom_parameter_6': 'enseñanza_bíblica'
            }
          });
        `}
      </Script>
    </>
  );
};

export default GoogleAnalytics;
