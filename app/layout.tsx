import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import VercelAnalytics from "./_components/VercelAnalytics";
import GoogleAnalytics from "./_components/GoogleAnalytics";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import RadioWidget from "./_components/RadioWidget";
import ErrorBoundary from "./_components/ErrorBoundary";
import PWAComponents from "./_components/PWAComponents";
import { RadioProvider } from "./_components/RadioContext";

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
    default: "Iglesia Cristiana en Chile | MMM Chile",
    template: "%s | MMM Chile",
  },
  description:
    "Iglesia cristiana en Chile. Somos una iglesia cristiana que predica el evangelio de Jesucristo, enseña la Biblia y comparte la fe cristiana. Encuentra una iglesia cristiana cerca de ti en Chile.",
  keywords: [
    "iglesia cristiana",
    "iglesia cristiana chile",
    "iglesia cristiana evangélica",
    "iglesia evangélica",
    "iglesia evangélica chile",
    "iglesia pentecostal",
    "iglesia evangélica pentecostal",
    "iglesia evangélica pentecostal chile",
    "evangelio",
    "fe cristiana",
    "predicación cristiana",
    "enseñanza bíblica",
    "movimiento misionero mundial",
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
    "iglesia protestante",
    "iglesia bíblica",
    "iglesia de fe",
    "iglesia cristiana santiago",
    "iglesia evangélica santiago",
    "iglesia cristiana chile horarios",
    "iglesia evangélica chile horarios",
    "servicios iglesia cristiana",
    "cultos iglesia cristiana",
    "estudios bíblicos chile",
    "ministerio cristiano chile",
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
    title: "Iglesia Cristiana en Chile | MMM Chile",
    description:
      "Iglesia cristiana en Chile. Somos una iglesia cristiana que predica el evangelio de Jesucristo, enseña la Biblia y comparte la fe cristiana. Encuentra una iglesia cristiana cerca de ti.",
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
    title: "Iglesia Cristiana en Chile | MMM Chile",
    description:
      "Iglesia cristiana en Chile. Somos una iglesia cristiana que predica el evangelio de Jesucristo, enseña la Biblia y comparte la fe cristiana.",
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
    google: "Vhprklzmepe_JktZIkao5SVs37T1qM8VmW0zkkQDTzc",
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
          <RadioProvider>
            <Header />
            <main id="main-content" role="main">
              <ErrorBoundary>{children}</ErrorBoundary>
            </main>
            <Footer />
            <PWAComponents />
            <RadioWidget />
          </RadioProvider>
        </ErrorBoundary>
        <VercelAnalytics />
        <GoogleAnalytics />
      </body>
    </html>
  );
}
