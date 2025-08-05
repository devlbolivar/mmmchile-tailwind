import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import RadioWidget from "./_components/RadioWidget";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import { Analytics } from "@vercel/analytics/next";
import { OrganizationSchema } from "./_components/JsonLd";

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
        <Header />
        {children}
        <Footer />
        <RadioWidget />
        <Analytics />
      </body>
    </html>
  );
}
