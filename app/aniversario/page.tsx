import React from "react";
import Slider from "./_components/Slider";
import Timeline from "./_components/Timeline";
import Image from "next/image";

const AniversarioPage = () => {
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
          <section
            id="inicio"
            className="relative h-[80vh] md:min-h-[100vh] flex items-start justify-start px-4 -top-20 md:top-0 lg:mt-10"
            style={{
              background:
                "radial-gradient(circle at center top, var(--primary-color) 0%, var(--secondary-color) 40%)",
            }}
          >
            <div className="absolute inset-0 bg-black opacity-40"></div>
            <div className="relative w-full h-full">
              <Image
                src="/images/aniversario-cover.png"
                alt="Movimiento Misionero Mundial"
                className="object-cover w-full h-full rounded-lg"
                priority
                width={1920}
                height={1080}
                quality={100}
                style={{
                  maskImage: `
      linear-gradient(to bottom,
        rgba(0, 0, 0, 1) 0%,
        rgba(0, 0, 0, 1) 20%,
        rgba(0, 0, 0, 0.95) 30%,
        rgba(0, 0, 0, 0.8) 40%,
        rgba(0, 0, 0, 0.6) 50%,
        rgba(0, 0, 0, 0.3) 60%,
        rgba(0, 0, 0, 0.1) 70%,
        rgba(0, 0, 0, 0) 90%
      ),
      linear-gradient(to right,
        rgba(0, 0, 0, 0) 0%,
        rgba(0, 0, 0, 0.1) 10%,
        rgba(0, 0, 0, 0.3) 20%,
        rgba(0, 0, 0, 0.6) 30%,
        rgba(0, 0, 0, 0.8) 40%,
        rgba(0, 0, 0, 1) 50%,
        rgba(0, 0, 0, 0.8) 60%,
        rgba(0, 0, 0, 0.6) 70%,
        rgba(0, 0, 0, 0.3) 80%,
        rgba(0, 0, 0, 0.1) 90%,
        rgba(0, 0, 0, 0) 100%
      )
    `,
                  WebkitMaskImage: `
      linear-gradient(to bottom,
        rgba(0, 0, 0, 1) 0%,
        rgba(0, 0, 0, 1) 20%,
        rgba(0, 0, 0, 0.95) 30%,
        rgba(0, 0, 0, 0.8) 40%,
        rgba(0, 0, 0, 0.6) 50%,
        rgba(0, 0, 0, 0.3) 60%,
        rgba(0, 0, 0, 0.1) 70%,
        rgba(0, 0, 0, 0) 90%
      ),
      linear-gradient(to right,
        rgba(0, 0, 0, 0) 0%,
        rgba(0, 0, 0, 0.1) 10%,
        rgba(0, 0, 0, 0.3) 20%,
        rgba(0, 0, 0, 0.6) 30%,
        rgba(0, 0, 0, 0.8) 40%,
        rgba(0, 0, 0, 1) 50%,
        rgba(0, 0, 0, 0.8) 60%,
        rgba(0, 0, 0, 0.6) 70%,
        rgba(0, 0, 0, 0.3) 80%,
        rgba(0, 0, 0, 0.1) 90%,
        rgba(0, 0, 0, 0) 100%
      )
    `,
                  maskComposite: "intersect",
                  WebkitMaskComposite: "destination-in",
                }}
              />
            </div>
          </section>
          <section className="-mt-30 md:mt-1 px-2 py-4 bg-white/10 backdrop-blur-sm rounded-lg shadow-lg mx-5">
            <div className="flex justify-center items-center h-full w-full">
              <Image
                src="/images/logo-aniversario.png"
                alt="Movimiento Misionero Mundial"
                className="md:w-[300px] md:h-[300px] w-[200px] h-[200px] rounded-lg"
                priority
                quality={100}
                width={1920}
                height={1080}
              />
            </div>

            <p className="mt-4 text-gray-200 text-base font-normal leading-relaxed text-center max-w-3xl mx-auto">
              Acompáñanos a conmemorar los 40 años de la notable trayectoria del
              Pastor Gerardo Martínez — una vida de fe, liderazgo y entrega
              incansable a nuestro País. Este hito es un testimonio de su
              profundo impacto en innumerables vidas y de su compromiso
              constante con el crecimiento espiritual y el servicio. Te
              invitamos a ser parte de esta celebración especial, honrando su
              legado y dando gracias por la bendición de su ministerio.
            </p>
          </section>
          <Slider />
          <Timeline />
        </main>{" "}
      </div>
    </div>
  );
};

export default AniversarioPage;
