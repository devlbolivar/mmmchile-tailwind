import React from "react";
import Contacto from "../contacto/_components/Contacto";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import Nosotros from "./Nosotros";
import Lema from "./Lema";
import EventsSection from "./EventsSection";
import ChurchSeoContent from "./ChurchSeoContent";
import { imageConfig } from "../utils/image-placeholders";
const Main = () => {
  return (
    <main
      className="flex-1"
      style={{
        backgroundColor: "var(--secondary-color)",
      }}
    >
      <section
        id="inicio"
        className="relative min-h-screen min-h-[100dvh] flex items-center justify-center py-8 sm:py-12 md:py-16 mobile-full-height"
        style={{
          background:
            "radial-gradient(circle at center top, var(--primary-color) 0%, var(--secondary-color) 40%)",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="container mx-auto relative px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-12 xl:gap-16">
            <div className="text-center lg:text-left order-2 lg:order-1 relative z-20 space-y-6">
              <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight tracking-tight">
                Movimiento Misionero Mundial en Chile
              </h1>
              <p className="text-gray-200 text-base sm:text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Somos una <strong>iglesia cristiana</strong> pentecostal donde
                encontrarás el evangelio de Jesucristo, enseñanza bíblica sólida
                y una comunidad de fe que te ayudará a crecer espiritualmente.
              </p>
              <p className="text-gray-300 text-sm sm:text-base font-light leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Como <strong>iglesia cristiana</strong> en Chile, somos parte
                del Movimiento Misionero Mundial, predicando la Palabra de Dios
                y compartiendo el amor de Cristo con todos. Nuestra{" "}
                <strong>iglesia cristiana</strong> te da la bienvenida.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                <Link href="/doctrina" className="w-full sm:w-auto">
                  <Button className="btn-primary bg-[var(--primary-color)] text-base sm:text-lg px-4 sm:px-6 lg:px-8 py-3 sm:py-4 cursor-pointer w-full sm:w-auto hover:scale-105 transition-transform duration-200">
                    Conoce Nuestra Fe
                    <ArrowRightIcon className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <Link href="/iglesias" className="w-full sm:w-auto">
                  <Button className="btn-secondary bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 text-base sm:text-lg px-4 sm:px-6 lg:px-8 py-3 sm:py-4 cursor-pointer w-full sm:w-auto hover:scale-105 transition-transform duration-200">
                    Encuentra una Iglesia
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative h-[250px] sm:h-[300px] md:h-[400px] lg:h-[550px] xl:h-[555px] w-full order-1 lg:order-2">
              <Image
                src="/images/hero-overlay.png"
                alt="Movimiento Misionero Mundial Chile - Congregación unida en oración"
                className="object-cover w-full h-full rounded-lg shadow-2xl"
                priority={imageConfig.hero.priority}
                width={imageConfig.hero.width}
                height={imageConfig.hero.height}
                quality={imageConfig.hero.quality}
                placeholder="blur"
                blurDataURL={imageConfig.hero.placeholder}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
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
      <Nosotros />
      <Lema />
      <EventsSection />
      <ChurchSeoContent />
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
