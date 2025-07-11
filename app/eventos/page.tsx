import React from "react";
import EventCard from "./_components/EventCard";
import { eventos } from "@/data";
import { Evento } from "../types";

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
              <h2 className="text-white text-4xl md:text-5xl font-bold leading-tight tracking-tight">
                Próximos Eventos
              </h2>
              <div className="w-full flex items-center justify-center mt-4 mb-8">
                <div className="h-1 w-30 bg-[var(--primary-color)] rounded-full"></div>
              </div>
              <p className="text-gray-200 text-lg max-w-2xl mx-auto">
                Mantente informado sobre los próximos eventos y actividades de
                la MMM en Chile. ¡No te pierdas la oportunidad de crecer en fe y
                comunidad!
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
