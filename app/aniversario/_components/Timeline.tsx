import React from "react";
import {
  EarthIcon,
  EarIcon,
  PlaneIcon,
  HeartIcon,
  TrendingUpIcon,
  BuildingIcon,
  NetworkIcon,
  HouseIcon,
} from "lucide-react";

const Timeline = () => {
  return (
    <section className="relative py-8 sm:py-10 lg:py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="layout-content-container flex flex-col max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-white text-4xl sm:text-5xl font-bold leading-tight tracking-tight">
              Celebrando 40 años de labor misionera
            </h2>
            <div className="w-full flex items-center justify-center mt-4 mb-8">
              <div className="h-1 w-30 bg-[var(--primary-color)] rounded-full"></div>
            </div>
            <p className="text-gray-200 text-lg sm:text-xl font-normal leading-relaxed max-w-2xl mx-auto">
              Un recorrido a través de los 40 años de labor misionera del Pastor
              Gerardo Martínez, desde su inicio en Chile hasta la actualidad.
            </p>
          </div>
          <div className="grid grid-cols-[auto_1fr] gap-x-6 px-4">
            <div className="flex flex-col items-center gap-1.5 pt-4 timeline-item">
              <div
                className="text-[var(--primary-color)] timeline-icon transition-all duration-300 ease-in-out"
                data-icon="world"
                data-size="32px"
                data-weight="regular"
              >
                <EarthIcon />
              </div>
              <div className="w-0.5 bg-[var(--primary-color)] h-full timeline-line"></div>
            </div>
            <div className="flex flex-1 flex-col py-4 pb-10 border-b border-dashed border-white/20">
              <p className="text-white text-lg font-semibold leading-normal">
                1981
              </p>
              <ul className="list-disc list-inside flex flex-col gap-4 text-gray-200   leading-normal mb-1">
                <li>
                  Febrero: Inicio de la obra en Chile con la llegada de la
                  misionera Elizabeth Castro desde Puerto Rico.
                </li>

                <li>
                  Campaña inicial en La Cisterna con participación del fundador
                  Pastor Luis M. Ortiz.
                </li>

                <li>
                  Se presenta una división debido a un ataque espiritual, pero
                  se restaura un remanente con la llegada de dos misioneras más
                  desde Puerto Rico.
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-center gap-1.5 timeline-item">
              <div className="w-0.5 bg-[var(--primary-color)] h-4 timeline-line"></div>
              <div
                className="text-[var(--primary-color)] timeline-icon transition-all duration-300 ease-in-out"
                data-icon="ear"
                data-size="32px"
                data-weight="regular"
              >
                <EarIcon />
              </div>
              <div className="w-0.5 bg-[var(--primary-color)] h-full timeline-line"></div>
            </div>
            <div className="flex flex-1 flex-col py-4 pb-10 border-b border-dashed border-white/20">
              <p className="text-white text-lg font-semibold leading-normal">
                1979-1984{" "}
              </p>
              <ul className="list-disc list-inside flex flex-col gap-4 text-gray-200   leading-normal mb-1">
                <li>
                  Dios confirma el llamado misionero al Pastor Gerardo Martínez
                  en dos ocasiones distintas mientras estudiaba en Colombia.
                </li>

                <li>
                  Inicialmente, autoridades rechazan su solicitud por estar
                  soltero, enviando a su hermano, quien luego facilita su
                  llamado al comunicar su convicción a los líderes.
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-center gap-1.5 timeline-item">
              <div className="w-0.5 bg-[var(--primary-color)] h-4 timeline-line"></div>
              <div
                className="text-[var(--primary-color)] timeline-icon transition-all duration-300 ease-in-out"
                data-icon="plane"
                data-size="32px"
                data-weight="regular"
              >
                <PlaneIcon />
              </div>
              <div className="w-0.5 bg-[var(--primary-color)] h-full timeline-line"></div>
            </div>
            <div className="flex flex-1 flex-col py-4 pb-10 border-b border-dashed border-white/20">
              <p className="text-white text-lg font-semibold leading-normal">
                1985{" "}
              </p>
              <ul className="list-disc list-inside flex flex-col gap-4 text-gray-200   leading-normal mb-1">
                <li>
                  2 de junio: Llega el Pastor Gerardo Martínez a Santiago, Chile
                  junto al Pastor Aminto López.
                </li>
                <li>
                  Encuentra un grupo inicial de aproximadamente 10 hermanos.
                </li>
                <li>
                  Se enfrenta a dificultades: atraviesa Sudamérica por tierra,
                  pérdida de su madre, y seis meses sin conversiones.
                </li>
                <li>
                  Diciembre: Primer crecimiento significativo, llegando un grupo
                  de nuevos creyentes.{" "}
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-center gap-1.5 timeline-item">
              <div className="w-0.5 bg-[var(--primary-color)] h-4 timeline-line"></div>
              <div
                className="text-[var(--primary-color)] timeline-icon transition-all duration-300 ease-in-out"
                data-icon="heart"
                data-size="32px"
                data-weight="regular"
              >
                <HeartIcon />
              </div>
              <div className="w-0.5 bg-[var(--primary-color)] h-full timeline-line"></div>
            </div>
            <div className="flex flex-1 flex-col py-4 pb-10 border-b border-dashed border-white/20">
              <p className="text-white text-lg font-semibold leading-normal">
                1988-1989{" "}
              </p>
              <ul className="list-disc list-inside flex flex-col gap-4 text-gray-200   leading-normal mb-1">
                <li>
                  El pastor Gerardo Martínez viaja temporalmente a Colombia,
                  contrae matrimonio y vuelve a Chile con su esposa.
                </li>
                <li>
                  Comienza una etapa familiar en Chile, con la bendición
                  posterior de cuatro hijas.
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-center gap-1.5 pb-4 timeline-item">
              <div className="w-0.5 bg-[var(--primary-color)] h-4 timeline-line"></div>
              <div
                className="text-[var(--primary-color)] timeline-icon transition-all duration-300 ease-in-out"
                data-icon="trending-up"
                data-size="32px"
                data-weight="regular"
              >
                <TrendingUpIcon />
              </div>
              <div className="w-0.5 bg-[var(--primary-color)] h-full timeline-line"></div>
            </div>
            <div className="flex flex-1 flex-col py-4 pb-10 border-b border-dashed border-white/20">
              <p className="text-white text-lg font-semibold leading-normal">
                1990-2000
              </p>
              <ul className="list-disc list-inside flex flex-col gap-4 text-gray-200   leading-normal mb-1">
                <li>
                  Expansión sostenida: la obra comienza a extenderse a diversas
                  regiones del país.|
                </li>
                <li>
                  Desarrollo de actividades evangelísticas como programas de
                  radio, evangelismo callejero, labor en cárceles, ayunos
                  pastorales, confraternidades y formación ministerial.
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-center gap-1.5 pt-4 timeline-item">
              <div
                className="text-[var(--primary-color)] timeline-icon transition-all duration-300 ease-in-out"
                data-icon="world"
                data-size="32px"
                data-weight="regular"
              >
                <NetworkIcon />
              </div>
              <div className="w-0.5 bg-[var(--primary-color)] h-full timeline-line"></div>
            </div>
            <div className="flex flex-1 flex-col py-4 pb-10 border-b border-dashed border-white/20">
              <p className="text-white text-lg font-semibold leading-normal">
                2000-2010{" "}
              </p>
              <ul className="list-disc list-inside flex flex-col gap-4 text-gray-200   leading-normal mb-1">
                <li>
                  Continuación del crecimiento con adquisición de múltiples
                  propiedades para la obra.
                </li>
                <li>
                  Se consolida presencia en diferentes regiones, estableciendo
                  pastores locales y misioneros extranjeros.
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-center gap-1.5 pt-4 timeline-item">
              <div
                className="text-[var(--primary-color)] timeline-icon transition-all duration-300 ease-in-out"
                data-icon="House"
                data-size="32px"
                data-weight="regular"
              >
                <HouseIcon />
              </div>
              <div className="w-0.5 bg-[var(--primary-color)] h-full timeline-line"></div>
            </div>
            <div className="flex flex-1 flex-col py-4 pb-10 border-b border-dashed border-white/20">
              <p className="text-white text-lg font-semibold leading-normal">
                2010{" "}
              </p>
              <ul className="list-disc list-inside flex flex-col gap-4 text-gray-200   leading-normal mb-1">
                <li>
                  Traslado estratégico al centro de Santiago por indicación de
                  Dios, a pesar de desafíos económicos iniciales.
                </li>
                <li>
                  Alquila inicialmente un local en el centro de Santiago para
                  expandir el alcance del ministerio.
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-center gap-1.5 pt-4 timeline-item">
              <div
                className="text-[var(--primary-color)] timeline-icon transition-all duration-300 ease-in-out"
                data-icon="world"
                data-size="32px"
                data-weight="regular"
              >
                <BuildingIcon />
              </div>
              <div className="w-0.5 bg-[var(--primary-color)] h-full timeline-line"></div>
            </div>
            <div className="flex flex-1 flex-col py-4 pb-10 border-b border-dashed border-white/20">
              <p className="text-white text-lg font-semibold leading-normal">
                2010-2025{" "}
              </p>
              <ul className="list-disc list-inside flex flex-col gap-4 text-gray-200   leading-normal mb-1">
                <li>
                  Se adquiere un terreno céntrico en Santiago y se construye un
                  edificio propio de tres pisos con capacidad para más de 500
                  personas.
                </li>
                <li>
                  Crecimiento significativo en número de miembros, alcanzando
                  una capacidad máxima rápidamente.
                </li>
                <li>
                  Actualmente, se proyecta la adquisición de un terreno para la
                  construcción de un centro de convenciones.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
