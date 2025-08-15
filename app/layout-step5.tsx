import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import RadioWidget from "./_components/RadioWidget";
import ErrorBoundary from "./_components/ErrorBoundary";

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
        </ErrorBoundary>
        <Analytics />
      </body>
    </html>
  );
}
