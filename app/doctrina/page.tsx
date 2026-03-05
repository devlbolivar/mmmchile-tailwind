import { doctrina } from "@/data";
import React from "react";
import DoctrinaCard from "./_components/doctrinaCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Doctrina Cristiana | Iglesia Evangélica en Chile",
  description:
    "Conoce los principios fundamentales de nuestra fe cristiana basados en la Santa Biblia. Doctrina evangélica, creencias fundamentales y enseñanza bíblica de nuestra iglesia cristiana en Chile.",
  keywords: [
    "doctrina cristiana",
    "doctrina evangélica",
    "creencias fundamentales",
    "enseñanza bíblica",
    "principios de fe",
    "doctrina MMM",
    "biblia",
    "fe cristiana",
    "evangelio",
    "iglesia cristiana",
    "iglesia evangélica",
    "cristianismo",
    "jesucristo",
    "palabra de dios",
    "sana doctrina",
    "iglesia pentecostal",
    "movimiento misionero mundial",
    "doctrina bíblica",
    "teología cristiana",
    "fundamentos de la fe",
  ],
  openGraph: {
    title: "Doctrina Cristiana | Iglesia Evangélica MMM Chile",
    description:
      "Conoce los principios fundamentales de nuestra fe cristiana basados en la Santa Biblia. Doctrina evangélica y enseñanza bíblica.",
    url: "https://mmmchile.cl/doctrina",
  },
  twitter: {
    title: "Doctrina Cristiana | Iglesia Evangélica MMM Chile",
    description:
      "Conoce los principios fundamentales de nuestra fe cristiana basados en la Santa Biblia.",
  },
};

const page = () => {
  return (
    <div
      className="relative flex size-full min-h-screen flex-col overflow-x-hidden"
      style={{ backgroundColor: "var(--bg-deep)" }}
    >
      {/* ── Page Hero ── */}
      <div className="page-hero">
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-white text-4xl sm:text-5xl font-bold leading-tight tracking-tight">
            Doctrina y Fe
          </h1>
          <div className="w-full flex items-center justify-center mt-4 mb-6">
            <div className="h-1 w-16 bg-[var(--primary-color)] rounded-full" />
          </div>
          <p className="text-[var(--text-muted)] text-lg max-w-2xl mx-auto">
            Lo que creemos como iglesia
          </p>
          <p className="text-[var(--text-subtle)] text-base max-w-3xl mx-auto mt-3">
            Principios fundamentales de nuestra fe cristiana basados en la Santa
            Biblia y la enseñanza evangélica.
          </p>
        </div>
      </div>

      {/* ── Cards grid ── */}
      <main className="flex-1 container mx-auto px-6 pb-20 pt-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {doctrina.map((item) => (
            <DoctrinaCard key={item.id} {...item} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default page;
