import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import RadioWidget from "./_components/RadioWidget";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import { Analytics } from "@vercel/analytics/next";
import { OrganizationSchema } from "./_components/JsonLd";
import ErrorBoundary from "./_components/ErrorBoundary";
import PWAComponents from "./_components/PWAComponents";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Movimiento Misionero Mundial en Chile | Iglesia Cristiana",
    template: "%s | MMM Chile",
  },
  description:
    "Movimiento Misionero Mundial en Chile. Iglesia cristiana evangélica dedicada a la evangelización, enseñanza bíblica y servicio comunitario. Encuentra una iglesia cerca de ti.",
  keywords: [
    "Movimiento Misionero Mundial",
    "MMM Chile",
    "iglesia cristiana",
    "evangelización",
    "pastor Gerardo Martínez",
    "iglesia evangélica Chile",
    "cristianismo",
    "fe cristiana",
    "biblia",
    "evangelio",
    "iglesias en Chile",
    "comunidad cristiana",
  ],
  authors: [{ name: "Movimiento Misionero Mundial Chile" }],
  creator: "Movimiento Misionero Mundial Chile",
  publisher: "Movimiento Misionero Mundial Chile",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://mmmchile.cl"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_CL",
    url: "https://mmmchile.cl",
    siteName: "Movimiento Misionero Mundial Chile",
    title: "Movimiento Misionero Mundial en Chile | Iglesia Cristiana",
    description:
      "Movimiento Misionero Mundial en Chile. Iglesia cristiana evangélica dedicada a la evangelización, enseñanza bíblica y servicio comunitario.",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Movimiento Misionero Mundial Chile",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Movimiento Misionero Mundial en Chile | Iglesia Cristiana",
    description:
      "Movimiento Misionero Mundial en Chile. Iglesia cristiana evangélica dedicada a la evangelización, enseñanza bíblica y servicio comunitario.",
    images: ["/images/logo.png"],
    creator: "@mmmchile",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "tu-codigo-de-verificacion-google",
    yandex: "tu-codigo-de-verificacion-yandex",
    yahoo: "tu-codigo-de-verificacion-yahoo",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/favicon.svg",
        color: "#000000",
      },
    ],
  },
  manifest: "/site.webmanifest",
  category: "religion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        {/* PWA Meta Tags */}
        <meta name="application-name" content="MMM Chile" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="MMM Chile" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-TileColor" content="#3d98f4" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="theme-color" content="#3d98f4" />

        {/* Apple Touch Icons */}
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />

        {/* Splash Screens for iOS */}
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <link
          rel="apple-touch-startup-image"
          href="/images/splash-640x1136.png"
          media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)"
        />
        <link
          rel="apple-touch-startup-image"
          href="/images/splash-750x1334.png"
          media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)"
        />
        <link
          rel="apple-touch-startup-image"
          href="/images/splash-1242x2208.png"
          media="(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3)"
        />

        <OrganizationSchema
          name="Movimiento Misionero Mundial Chile"
          description="Iglesia cristiana evangélica dedicada a la evangelización, enseñanza bíblica y servicio comunitario en Chile."
          url="https://mmmchile.cl"
          logo="https://mmmchile.cl/images/logo.png"
          address={{
            streetAddress: "General Gana #924",
            addressLocality: "Santiago",
            addressRegion: "Región Metropolitana",
            postalCode: "8320000",
            addressCountry: "CL",
          }}
          contactPoint={{
            telephone: "+56 975587223",
            contactType: "customer service",
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Skip to main content for screen readers */}
        <a
          href="#main-content"
          className="skip-link sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-black text-white px-4 py-2 rounded z-[9999] text-sm font-medium"
        >
          Saltar al contenido principal
        </a>

        <ErrorBoundary showDetails={process.env.NODE_ENV === "development"}>
          <Header />
          <main id="main-content" role="main">
            <ErrorBoundary>{children}</ErrorBoundary>
          </main>
          <Footer />
          <RadioWidget />
          <PWAComponents />
        </ErrorBoundary>
        <Analytics />
      </body>
    </html>
  );
}
