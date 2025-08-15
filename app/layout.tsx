import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import RadioWidget from "./_components/RadioWidget";
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
    "Movimiento Misionero Mundial en Chile. Predicamos el evangelio de Jesucristo, enseñamos la Biblia y compartimos la fe cristiana. Encuentra una iglesia cerca de ti para crecer en tu fe.",
  keywords: [
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
    "iglesia local",
    "ministerio cristiano",
    "evangelización",
    "discipulado",
    "santidad cristiana",
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
    title: "Iglesia Cristiana Evangélica en Chile | MMM Chile",
    description:
      "Iglesia cristiana evangélica en Chile. Predicamos el evangelio de Jesucristo, enseñamos la Biblia y compartimos la fe cristiana.",
    siteName: "Movimiento Misionero Mundial Chile",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Iglesia Cristiana MMM Chile - Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Iglesia Cristiana Evangélica en Chile | MMM Chile",
    description:
      "Iglesia cristiana evangélica en Chile. Predicamos el evangelio de Jesucristo, enseñamos la Biblia y compartimos la fe cristiana.",
    images: ["/images/logo.png"],
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
    google: "your-google-verification-code", // Reemplazar con el código real
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
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
