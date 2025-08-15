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
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <section
        id="inicio"
        className="relative min-h-[calc(100vh-0px)] flex items-center justify-center px-4"
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
                Una iglesia cristiana donde encontrarás el evangelio de
                Jesucristo, enseñanza bíblica sólida y una comunidad de fe que
                te ayudará a crecer espiritualmente.
              </p>
              <p className="text-gray-300 text-base font-light leading-relaxed mb-6">
                Somos parte del Movimiento Misionero Mundial, predicando la
                Palabra de Dios y compartiendo el amor de Cristo con todos.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/doctrina">
                  <Button className="btn-primary bg-[var(--primary-color)] text-lg px-8 py-4 cursor-pointer">
                    Conoce Nuestra Fe
                    <ArrowRightIcon className="w-4 h-4" />
                  </Button>
                </Link>
                <Link href="/iglesias">
                  <Button className="btn-secondary bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 text-lg px-8 py-4 cursor-pointer">
                    Encuentra una Iglesia
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative h-[500px] md:h-[600px] w-full order-1 md:order-2">
              <Image
                src="/images/hero-overlay.png"
                alt="Movimiento Misionero Mundial Chile - Congregación unida en oración"
                className="object-cover w-full h-full rounded-lg"
                priority={imageConfig.hero.priority}
                width={imageConfig.hero.width}
                height={imageConfig.hero.height}
                quality={imageConfig.hero.quality}
                placeholder="blur"
                blurDataURL={imageConfig.hero.placeholder}
                sizes="(max-width: 768px) 100vw, 50vw"
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
