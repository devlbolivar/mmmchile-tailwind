"use client";
import { eventos } from "@/data";
import { useParams } from "next/navigation";
import React from "react";

const page = () => {
  const { idEvent } = useParams();
  const event = eventos.find((event) => event.id === Number(idEvent));
  return (
    <main
      className="px-4 sm:px-6 md:px-10 lg:px-20 xl:px-40 flex flex-1 justify-center py-8 pt-20"
      style={{ backgroundColor: "var(--secondary-color)" }}
    >
      <div className="layout-content-container flex flex-col max-w-4xl w-full">
        <div className="bg-white/10 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden">
          <div className="@container">
            <div
              className="bg-cover bg-center flex flex-col justify-end overflow-hidden min-h-[320px] md:min-h-[400px]"
              style={{
                backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.0) 40%), url("${event?.image}")`,
              }}
            >
              <div className="p-6 md:p-8">
                <h1 className="text-white tracking-tight text-3xl md:text-4xl font-bold leading-tight">
                  {event?.name}
                </h1>
              </div>
            </div>
          </div>
          <div className="p-6 md:p-8">
            <p className="text-gray-200 text-base font-normal leading-relaxed mb-6">
              {event?.description}
            </p>
            <section className="mb-8">
              <h3 className="text-2xl font-semibold text-white mb-4 text-center">
                Detalles del Evento
              </h3>
              <div className="w-full flex items-center justify-center mb-6">
                <div className="h-1 w-30 bg-[var(--primary-color)] rounded-full"></div>
              </div>
              <div className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-0">
                <div className="detail-item">
                  <p className="text-gray-200 text-sm font-medium leading-normal">
                    Fecha
                  </p>
                  <p className="text-gray-200 text-sm font-normal leading-normal">
                    {event?.dateStart.toLocaleDateString()} al{" "}
                    {event?.dateEnd.toLocaleDateString()}
                  </p>
                </div>
                <div className="detail-item">
                  <p className="text-gray-200 text-sm font-medium leading-normal">
                    Horarios
                  </p>
                  <p className="text-gray-200 text-sm font-normal leading-normal">
                    {event?.horarios.join(" - ")}
                  </p>
                </div>
                <div className="detail-item">
                  <p className="text-gray-200 text-sm font-medium leading-normal">
                    Ubicación
                  </p>
                  <p className="text-gray-200 text-sm font-normal leading-normal">
                    {event?.location}
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h3 className="text-2xl font-semibold text-white mb-4 text-center">
                Ubicación en el Mapa
              </h3>
              <div className="w-full flex items-center justify-center mb-6">
                <div className="h-1 w-30 bg-[var(--primary-color)] rounded-full"></div>
              </div>
              <div className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl object-cover border border-[var(--primary-color)]/30 shadow-sm">
                <iframe
                  src={event?.map}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </section>
            <section className="mb-10">
              <h3 className="text-2xl font-semibold text-white mb-4 text-center">
                Información de Contacto y Registro
              </h3>
              <div className="w-full flex items-center justify-center mb-6">
                <div className="h-1 w-30 bg-[var(--primary-color)] rounded-full"></div>
              </div>
              <p className="text-gray-200 text-base font-normal leading-relaxed mb-6">
                Para cualquier consulta o información adicional, por favor
                contacte a la oficina del MMM Chile al{" "}
                <a
                  className="text-[var(--primary-color)] hover:underline font-medium"
                  href="tel:+56975587223"
                >
                  +56 9 7558 7223
                </a>{" "}
                o envíe un correo electrónico a{" "}
                <a
                  className="text-[var(--primary-color)] hover:underline font-medium"
                  href="mailto:secretariammmchile@gmail.com"
                >
                  secretariammmchile@gmail.com
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;
