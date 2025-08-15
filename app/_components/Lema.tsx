import React from "react";
import Image from "next/image";
import { imageConfig } from "../utils/image-placeholders";

const Lema = () => {
  return (
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
            src="/images/lema.png"
            alt="Lema 2025 del Movimiento Misionero Mundial Chile"
            className="w-full md:h-[250px] object-cover"
            width={1024}
            height={512}
            quality={85}
            placeholder="blur"
            blurDataURL={imageConfig.hero.placeholder}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60vw"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default Lema;
