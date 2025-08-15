import React from "react";

const Nosotros = () => {
  return (
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
              Nuestra Identidad como Iglesia Cristiana
            </h3>
            <p className="text-gray-200 text-base leading-relaxed mb-6">
              Como parte del Movimiento Misionero Mundial, nuestra identidad se
              fundamenta en la fidelidad a la Palabra de Dios, la santidad como
              estilo de vida, y el compromiso con la evangelización mundial. Nos
              reconocemos como una iglesia pentecostal cristiana, nacida en el
              fuego del Espíritu Santo, que predica la sana doctrina y defiende
              la integridad bíblica. Vivimos con la convicción de que Jesucristo
              salva, sana, bautiza con el Espíritu Santo y viene pronto, y
              asumimos la misión de proclamar ese mensaje con pasión, humildad y
              celo misionero en cada rincón donde Dios nos envíe.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-white mb-4">
              Nuestra Misión Evangelística
            </h3>
            <p className="text-gray-200 text-base leading-relaxed">
              Nuestra visión es llevar el mensaje transformador del evangelio de
              Jesucristo a todas las naciones, formando creyentes comprometidos
              con la santidad, la verdad bíblica y el poder del Espíritu Santo.
              Anhelamos ver una iglesia encendida por el fuego misionero, que
              impacte a las familias, las comunidades y las generaciones con una
              fe viva, práctica y sin corrupción. Soñamos con una expansión
              global del Reino de Dios, donde cada discípulo se convierta en un
              testigo fiel y valiente, hasta que Cristo venga por su iglesia.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Nosotros;
