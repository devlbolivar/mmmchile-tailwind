import React from "react";
import EventCard from "./_components/EventCard";
import { eventos } from "@/data";
import { Evento } from "../types";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Eventos Cristianos Evangélicos en Chile | MMM Chile",
  description:
    "Descubre los próximos eventos cristianos y actividades del Movimiento Misionero Mundial en Chile. Convenciones, conferencias cristianas, talleres bíblicos y eventos especiales para toda la familia cristiana.",
  keywords: [
    "eventos cristianos",
    "eventos evangélicos",
    "convención MMM",
    "conferencias cristianas",
    "eventos iglesia Chile",
    "actividades cristianas",
    "movimiento misionero eventos",
    "eventos cristianos chile",
    "conferencias evangélicas",
    "talleres bíblicos",
    "eventos familia cristiana",
    "convenciones cristianas",
    "ministerio cristiano",
    "evangelización",
    "discipulado",
    "iglesia cristiana",
    "comunidad cristiana",
    "fe cristiana",
    "evangelio",
    "predicación cristiana",
  ],
  openGraph: {
    title: "Eventos Cristianos Evangélicos en Chile | MMM Chile",
    description:
      "Descubre los próximos eventos cristianos y actividades del Movimiento Misionero Mundial en Chile. Convenciones y conferencias cristianas.",
    url: "https://mmmchile.cl/eventos",
  },
  twitter: {
    title: "Eventos Cristianos Evangélicos en Chile | MMM Chile",
    description:
      "Descubre los próximos eventos cristianos y actividades del Movimiento Misionero Mundial en Chile.",
  },
};

const page = () => {
  return (
    <div className="relative flex size-full min-h-screen flex-col group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <main
          className="flex-1"
          style={{
            backgroundColor: "var(--secondary-color)",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <div className="container mx-auto px-6 py-20 relative">
            <div className="text-center mb-12">
              <h1 className="text-white text-4xl md:text-5xl font-bold leading-tight tracking-tight">
                Eventos Cristianos Evangélicos
              </h1>
              <div className="w-full flex items-center justify-center mt-4 mb-8">
                <div className="h-1 w-30 bg-[var(--primary-color)] rounded-full"></div>
              </div>
              <p className="text-gray-200 text-lg max-w-2xl mx-auto">
                Mantente informado sobre los próximos eventos cristianos y
                actividades de la MMM en Chile. ¡No te pierdas la oportunidad de
                crecer en fe y comunidad cristiana!
              </p>
              <p className="text-gray-300 text-base max-w-3xl mx-auto mt-4">
                Nuestros eventos cristianos incluyen convenciones, conferencias
                evangélicas, talleres bíblicos y actividades especiales
                diseñadas para fortalecer tu fe y edificar la comunidad
                cristiana.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {eventos.map((event: Evento) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default page;
