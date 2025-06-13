import { Evento } from "@/app/types";
import React from "react";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";

const EventCard = ({ event }: { event: Evento }) => {
  return (
    <div className="event-card flex flex-col md:flex-row items-stretch bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden">
      <div
        className="md:w-2/5 h-64 md:h-auto bg-center bg-no-repeat bg-cover rounded-t-xl md:rounded-l-xl md:rounded-t-none"
        style={{
          backgroundImage: `url("${event.image}")`,
          backgroundPosition: "center center",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div className="flex flex-col flex-1 p-6 justify-between">
        <div>
          <h3 className="text-white text-xl font-bold leading-tight mb-2">
            {event.name}
          </h3>
          <p className="text-gray-200 text-sm font-normal leading-normal mb-1">
            <span className="font-semibold">Fecha:</span>{" "}
            {event.dateStart.toLocaleDateString()} -{" "}
            {event.dateEnd.toLocaleDateString()}
          </p>
          <p className="text-gray-200 text-sm font-normal leading-normal mb-1">
            <span className="font-semibold">Lugar:</span> {event.location}
          </p>
          <p className="text-gray-200 text-sm font-normal leading-normal mb-4">
            {event.description.length > 100
              ? `${event.description.slice(0, 100)}...`
              : event.description}
          </p>
        </div>
        <Link
          className="inline-flex items-center justify-center rounded-lg h-10 px-6 bg-[var(--primary-color)] text-white text-sm font-semibold leading-normal tracking-wide transition-colors hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 mt-auto w-full"
          href={`/eventos/${event.id}`}
        >
          Más información
          <ArrowRightIcon className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
};

export default EventCard;
