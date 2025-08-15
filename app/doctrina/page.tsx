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
              <h1 className="text-white text-4xl sm:text-5xl font-bold leading-tight tracking-tight">
                Doctrina Cristiana Evangélica
              </h1>
              <div className="w-full flex items-center justify-center mt-4 mb-8">
                <div className="h-1 w-30 bg-[var(--primary-color)] rounded-full"></div>
              </div>
              <p className="text-gray-200 text-lg max-w-2xl mx-auto">
                Descubre los principios fundamentales de nuestra fe cristiana,
                basados en la Santa Biblia y la enseñanza evangélica.
              </p>
              <p className="text-gray-300 text-base max-w-3xl mx-auto mt-4">
                Como iglesia cristiana evangélica, nos fundamentamos en la
                Palabra de Dios para compartir el evangelio de Jesucristo y
                enseñar la sana doctrina bíblica.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {doctrina.map((doctrina) => (
                <DoctrinaCard key={doctrina.id} {...doctrina} />
              ))}
            </div>
            {/*   <div className="mt-20">
              <h2 className="text-white text-3xl font-bold leading-tight tracking-tight text-center mb-8">
                Materiales Descargables
              </h2>
              <div className="w-full flex items-center justify-center mb-12">
                <div className="h-1 w-30 bg-[var(--primary-color)] rounded-full"></div>
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                <a
                  className="download-card bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all"
                  href="#"
                >
                  <svg
                    fill="currentColor"
                    height="48px"
                    viewBox="0 0 256 256"
                    width="48px"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-white mb-4"
                  >
                    <path d="M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM160,51.31,188.69,80H160ZM200,216H56V40h88V88a8,8,0,0,0,8,8h48V216Zm-42.34-77.66a8,8,0,0,1-11.32,11.32L136,139.31V184a8,8,0,0,1-16,0V139.31l-10.34,10.35a8,8,0,0,1-11.32-11.32l24-24a8,8,0,0,1,11.32,0Z"></path>
                  </svg>
                  <h3 className="text-white text-lg font-semibold leading-tight">
                    Folleto de Doctrina
                  </h3>
                  <p className="text-gray-200 text-sm mt-2">
                    Un resumen conciso de nuestras creencias principales.
                  </p>
                  <span className="mt-4 text-sm font-medium text-[var(--primary-color)] hover:underline block">
                    Descargar PDF
                  </span>
                </a>
                <a
                  className="download-card bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all"
                  href="#"
                >
                  <svg
                    fill="currentColor"
                    height="48px"
                    viewBox="0 0 256 256"
                    width="48px"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-white mb-4"
                  >
                    <path d="M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM160,51.31,188.69,80H160ZM200,216H56V40h88V88a8,8,0,0,0,8,8h48V216Zm-42.34-77.66a8,8,0,0,1-11.32,11.32L136,139.31V184a8,8,0,0,1-16,0V139.31l-10.34,10.35a8,8,0,0,1-11.32-11.32l24-24a8,8,0,0,1,11.32,0Z"></path>
                  </svg>
                  <h3 className="text-white text-lg font-semibold leading-tight">
                    Creencias Fundamentales (PDF)
                  </h3>
                  <p className="text-gray-200 text-sm mt-2">
                    Un documento detallado sobre la base de nuestra fe.
                  </p>
                  <span className="mt-4 text-sm font-medium text-[var(--primary-color)] hover:underline block">
                    Descargar PDF
                  </span>
                </a>
              </div>
            </div> */}
          </div>
        </main>
      </div>
    </div>
  );
};

export default page;
