import { eventos } from "@/data";
import React from "react";
import { Evento } from "../types";
import EventCard from "../eventos/_components/EventCard";

const EventsSection = () => {
  return (
    <section id="eventos" className="py-10 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-4 text-center">
          Próximos Eventos
        </h2>
        <div className="w-full flex items-center justify-center mb-4">
          <div className="h-1 w-60 bg-[var(--primary-color)] rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {eventos.map((event: Evento) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
