"use client";
import React, { JSX, useEffect, useState } from "react";
import Contacto from "../contacto/_components/Contacto";
import Link from "next/link";
import { Evento } from "../types";
import EventCard from "../eventos/_components/EventCard";
import { eventos } from "@/data";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon, X } from "lucide-react";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import Image from "next/image";

const Main = () => {
  const [showDialog, setShowDialog] = useState(false);

  useEffect(() => {
    // Show dialog after a short delay when page loads
    const timer = setTimeout(() => {
      setShowDialog(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main
      className="flex-1"
      style={{
        backgroundColor: "var(--secondary-color)",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <section
        id="inicio"
        className="relative min-h-[calc(100vh-0px)]  flex items-center justify-center  px-4"
        style={{
          background:
            "radial-gradient(circle at center top, var(--primary-color) 0%, var(--secondary-color) 40%)",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="container mx-auto relative">
          <div className="grid md:grid-cols-2  items-center">
            <div className="text-left order-2 md:order-1 -mt-30 md:mt-0 relative z-20">
              <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight mb-4">
                Movimiento Misionero Mundial en Chile
              </h1>
              <p className="text-gray-200 text-lg sm:text-xl font-light leading-relaxed mb-4">
                Un lugar de encuentro espiritual y crecimiento en la fe.
              </p>
              <Link href="/doctrina">
                <Button className="btn-primary bg-[var(--primary-color)] text-lg px-8 py-4 cursor-pointer">
                  Conócenos
                  <ArrowRightIcon className="w-4 h-4" />
                </Button>
              </Link>
            </div>
            <div className="relative h-[500px] md:h-[600px] w-full order-1 md:order-2">
              <img
                src="/images/hero-overlay.png"
                alt="Movimiento Misionero Mundial"
                className="object-cover w-full h-full rounded-lg"
                style={{
                  maskImage: `linear-gradient(
                    to bottom,
                    rgba(0, 0, 0, 1) 0%,
                    rgba(0, 0, 0, 1) 20%,
                    rgba(0, 0, 0, 0.95) 30%,
                    rgba(0, 0, 0, 0.8) 40%,
                    rgba(0, 0, 0, 0.6) 50%,
                    rgba(0, 0, 0, 0.3) 60%,
                    rgba(0, 0, 0, 0.1) 70%,
                    rgba(0, 0, 0, 0) 80%
                  )`,
                  WebkitMaskImage: `linear-gradient(
                    to bottom,
                    rgba(0, 0, 0, 1) 0%,
                    rgba(0, 0, 0, 1) 20%,
                    rgba(0, 0, 0, 0.95) 30%,
                    rgba(0, 0, 0, 0.8) 40%,
                    rgba(0, 0, 0, 0.6) 50%,
                    rgba(0, 0, 0, 0.3) 60%,
                    rgba(0, 0, 0, 0.1) 70%,
                    rgba(0, 0, 0, 0) 80%
                  )`,
                }}
              />
            </div>
          </div>
        </div>
      </section>
      <section id="nosotros" className="relative">
        <div className="container mx-auto px-6 ">
          <h2 className="text-3xl font-bold text-white mb-4 text-center">
            Nosotros
          </h2>
          <div className="w-full flex items-center justify-center mb-12">
            <div className="h-1 w-30 bg-[var(--primary-color)] rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-4">
                Nuestra Identidad
              </h3>
              <p className="text-gray-200 text-base leading-relaxed mb-6">
                Como parte del Movimiento Misionero Mundial, nuestra identidad
                se fundamenta en la fidelidad a la Palabra de Dios, la santidad
                como estilo de vida, y el compromiso con la evangelización
                mundial. Nos reconocemos como una iglesia pentecostal cristiana,
                nacida en el fuego del Espíritu Santo, que predica la sana
                doctrina y defiende la integridad bíblica. Vivimos con la
                convicción de que Jesucristo salva, sana, bautiza con el
                Espíritu Santo y viene pronto, y asumimos la misión de proclamar
                ese mensaje con pasión, humildad y celo misionero en cada rincón
                donde Dios nos envíe.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-white mb-4">
                Nuestra Misión
              </h3>
              <p className="text-gray-200 text-base leading-relaxed">
                Nuestra visión es llevar el mensaje transformador del evangelio
                de Jesucristo a todas las naciones, formando creyentes
                comprometidos con la santidad, la verdad bíblica y el poder del
                Espíritu Santo. Anhelamos ver una iglesia encendida por el fuego
                misionero, que impacte a las familias, las comunidades y las
                generaciones con una fe viva, práctica y sin corrupción. Soñamos
                con una expansión global del Reino de Dios, donde cada discípulo
                se convierta en un testigo fiel y valiente, hasta que Cristo
                venga por su iglesia.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-10 relative">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-4 text-center">
            Lema 2025
          </h2>
          <div className="w-full flex items-center justify-center mb-4">
            <div className="h-1 w-30 bg-[var(--primary-color)] rounded-full"></div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden">
            <Image
              src="/images/lema.PNG"
              alt="Lema 2025"
              className="w-full md:h-[250px] object-cover"
              width={500}
              height={500}
            />
          </div>
        </div>
      </section>
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
      <section className="py-10 relative">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-4 text-center">
            Invitación
          </h2>
          <div className="w-full flex items-center justify-center mb-12">
            <div className="h-1 w-64 bg-[var(--primary-color)] rounded-full"></div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden md:flex items-center gap-8 p-8">
            <div className="md:w-1/4 h-48 md:h-auto rounded-lg overflow-hidden mb-6 md:mb-0">
              <video
                className="w-full h-full object-contain md:object-cover"
                controls
                playsInline
              >
                <source src="/videos/invitacion_confra.MP4" type="video/mp4" />
                Tu navegador no soporta el elemento de video.
              </video>
            </div>
            <div className="md:w-2/3">
              <h3 className="text-2xl font-semibold text-white mb-3">
                Invitación a la Confraternidad Nacional
              </h3>
              <p className="text-gray-200 text-base leading-relaxed mb-6">
                El Pastor Gerardo Martínez nos invita a participar en la
                Confraternidad Nacional 2025, un evento trascendental que
                fortalecerá nuestra fe y unidad como iglesia. Este encuentro
                espiritual será una oportunidad única para crecer en comunión,
                recibir enseñanza bíblica sólida y experimentar un avivamiento
                que transformará nuestras vidas y ministerios. Juntos,
                buscaremos la dirección del Espíritu Santo para avanzar en la
                misión que Dios nos ha encomendado.
              </p>
              <AlertDialog open={showDialog} onOpenChange={setShowDialog}>
                <AlertDialogContent className="max-w-3xl bg-[var(--secondary-color)]/95 backdrop-blur-sm border border-[var(--primary-color)]/30 shadow-xl">
                  <div className="absolute right-4 top-4">
                    <AlertDialogCancel className=" h-15 w-15 px-10 bg-transparent border-0 hover:bg-transparent">
                      <Button className="cursor-pointer hover:bg-[var(--primary-color)]/20 h-10 w-10 text-gray-400 hover:text-white transition-colors">
                        <X className=" h-10 w-10 text-gray-400 hover:text-white transition-colors" />
                      </Button>
                    </AlertDialogCancel>
                  </div>
                  <AlertDialogHeader>
                    <AlertDialogTitle className="w-[85%] text-2xl font-bold text-center text-white">
                      Confraternidad Nacional 2025
                    </AlertDialogTitle>
                    <AlertDialogDescription className="text-center">
                      <div className="mt-6">
                        <img
                          src="/images/portada_confra.PNG"
                          alt="Confraternidad Nacional 2025"
                          className="w-full h-auto rounded-lg mb-6 shadow-lg"
                        />
                        <div className="space-y-4">
                          <p className="text-gray-200 text-lg">
                            Te invitamos a ser parte de este gran evento que
                            transformará tu vida espiritual. Una oportunidad
                            única para crecer en la fe y fortalecer tu relación
                            con Dios.
                          </p>
                        </div>
                      </div>
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter className="mt-6">
                    <AlertDialogCancel className="cursor-pointer bg-gray-700 hover:bg-gray-600 text-white border-gray-600">
                      Cerrar
                    </AlertDialogCancel>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </div>
        </div>
      </section>
      <section id="contacto" className="py-10 relative">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-white  text-center ">
            Contacto
          </h2>
          <div className="w-full flex items-center justify-center mb-4">
            <div className="h-1 w-30 bg-[var(--primary-color)] rounded-full"></div>
          </div>
          <Contacto />
        </div>
      </section>
    </main>
  );
};

export default Main;
