import React from "react";
import type { Metadata } from "next";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { zonas } from "@/data";
import IglesiaCards from "./_components/IglesiaCards";

export const metadata: Metadata = {
  title: "Iglesias Cristianas Evangélicas en Chile | MMM Chile",
  description:
    "Encuentra una iglesia cristiana evangélica del Movimiento Misionero Mundial cerca de ti. Ubicaciones, horarios de servicios cristianos y contacto de todas nuestras iglesias en Chile organizadas por zonas.",
  keywords: [
    "iglesias cristianas",
    "iglesias evangélicas",
    "iglesia cristiana cerca",
    "iglesias MMM Chile",
    "horarios de servicios",
    "iglesias evangélicas Chile",
    "movimiento misionero iglesias",
    "pastores Chile",
    "servicios dominicales",
    "iglesia cristiana chile",
    "iglesia evangélica chile",
    "cultos cristianos",
    "estudios bíblicos",
    "comunidad cristiana",
    "iglesia local",
    "ministerio cristiano",
    "evangelio",
    "fe cristiana",
    "predicación cristiana",
    "adoración cristiana",
  ],
  openGraph: {
    title: "Iglesias Cristianas Evangélicas en Chile | MMM Chile",
    description:
      "Encuentra una iglesia cristiana evangélica del Movimiento Misionero Mundial cerca de ti. Ubicaciones y horarios de servicios.",
    url: "https://mmmchile.cl/iglesias",
  },
  twitter: {
    title: "Iglesias Cristianas Evangélicas en Chile | MMM Chile",
    description:
      "Encuentra una iglesia cristiana evangélica del Movimiento Misionero Mundial cerca de ti.",
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
          <h1 className="text-white text-4xl md:text-5xl font-bold leading-tight tracking-tight">
            Directorio de Iglesias
          </h1>
          <div className="w-full flex items-center justify-center mt-4 mb-6">
            <div className="h-1 w-16 bg-[var(--primary-color)] rounded-full" />
          </div>
          <p className="text-[var(--text-muted)] text-lg max-w-2xl mx-auto">
            Encuentra tu iglesia cristiana más cercana
          </p>
          <p className="text-[var(--text-subtle)] text-base max-w-3xl mx-auto mt-3">
            Nuestras iglesias ofrecen servicios de adoración, estudios bíblicos
            y ministerios para toda la familia.
          </p>
        </div>
      </div>

      {/* ── Tabs + Cards ── */}
      <main className="flex-1 container mx-auto px-6 pb-20 pt-8">
        <Tabs defaultValue={zonas[2].name} className="w-full">
          <div className="w-full overflow-x-auto">
            <TabsList
              className="inline-flex justify-start min-w-full gap-1 px-2 pb-0 bg-transparent border-b"
              style={{ borderColor: "var(--border-subtle)" }}
            >
              {zonas.map((zona) => (
                <TabsTrigger
                  key={zona.name}
                  value={zona.name}
                  className="cursor-pointer flex-none px-4 py-3 text-xs sm:text-sm font-semibold leading-normal tracking-wide transition-all duration-200 rounded-none border-b-2 border-transparent whitespace-nowrap bg-transparent text-[var(--text-muted)] hover:text-white data-[state=active]:border-b-[var(--primary-color)] data-[state=active]:text-[var(--primary-color)]"
                >
                  {zona.name}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {zonas.map((zona) => (
            <TabsContent key={zona.name} value={zona.name}>
              <h2 className="text-white text-xl sm:text-2xl font-bold tracking-tight px-2 pt-6 pb-4">
                {zona.name}
              </h2>
              <IglesiaCards iglesias={zona.iglesias} />
            </TabsContent>
          ))}
        </Tabs>
      </main>
    </div>
  );
};

export default page;
