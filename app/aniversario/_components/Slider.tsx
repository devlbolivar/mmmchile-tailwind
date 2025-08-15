"use client";
import React, { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { aniversarioPics } from "@/data";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Loader2 } from "lucide-react";
import { imageConfig } from "../../utils/image-placeholders";

const Slider = () => {
  const [loadingMap, setLoadingMap] = useState<Record<string, boolean>>(
    Object.fromEntries(aniversarioPics.map((pic) => [pic.id, true]))
  );

  const handleLoad = (id: string) => {
    setLoadingMap((prev) => ({ ...prev, [id]: false }));
  };

  return (
    <section className="relative pt-20 pb-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="layout-content-container flex flex-col max-w-5xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-white text-3xl sm:text-4xl font-bold tracking-tight">
              Un Viaje a Través del Tiempo
            </h2>
            <div className="w-full flex items-center justify-center mt-4 mb-8">
              <div className="h-1 w-30 bg-[var(--primary-color)] rounded-full"></div>
            </div>
            <p className="text-gray-200 text-base sm:text-lg font-normal leading-relaxed max-w-2xl mx-auto">
              Explora los momentos y recuerdos que han marcado el ministerio de
              nuestro Pastor durante los últimos 40 años.
            </p>
          </div>
          <div className="relative @container group/slider">
            <Carousel>
              <CarouselContent>
                {aniversarioPics.map((pic) => (
                  <CarouselItem key={pic.id}>
                    <Card className="relative overflow-hidden rounded-xl shadow-2xl p-0 m-0 w-full h-[300px] md:h-[800px] bg-transparent">
                      <CardContent className="relative w-full h-full p-0 m-0 bg-transparent">
                        <div className="w-full h-full relative">
                          {loadingMap[pic.id] && (
                            <div className="absolute inset-0 flex items-center justify-center z-20 bg-black/10">
                              <Loader2 className="animate-spin text-white" />
                            </div>
                          )}
                          <Image
                            src={pic.image}
                            alt={`Fotografía del aniversario MMM Chile: ${pic.name}`}
                            width={imageConfig.gallery.width}
                            height={imageConfig.gallery.height}
                            className="object-cover object-center w-full h-full rounded-xl"
                            onLoad={() => handleLoad(pic.id.toString())}
                            placeholder="blur"
                            blurDataURL={imageConfig.gallery.placeholder}
                            quality={imageConfig.gallery.quality}
                            sizes="100vw"
                            loading="lazy"
                          />

                          {/* Overlay de texto */}
                          <div className="absolute inset-0 flex items-end bg-black/30 rounded-xl">
                            <div className="w-full p-4 text-white text-sm font-semibold bg-gradient-to-t from-black/80 to-transparent rounded-b-xl">
                              {pic.subtitle}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-4" />
              <CarouselNext className="right-4" />
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slider;
