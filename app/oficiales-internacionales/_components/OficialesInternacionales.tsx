"use client";

import { useState } from "react";
import OficialCard from "./OficialCard";
import Image from "next/image";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

interface Oficial {
  nombre: string;
  cargo: string;
  descripcion: string;
  imagen: string;
}

const oficialesData: Oficial[] = [
  {
    nombre: "Rev. José Arturo Soto Benavides",
    cargo: "Presidente del M.M.M.",
    imagen: "/images/oficiales/jose-soto-benavides.jpg",
    descripcion:
      'El pastor José Arturo Soto Benavides es un reconocido líder cristiano nacido el 28 de junio de 1953 en San José, Costa Rica. Desde muy joven sintió el llamado al ministerio y a los 19 años fue enviado como misionero a Panamá, convirtiéndose en el primer obrero reconocido de la obra del Movimiento Misionero Mundial en ese país. Su trabajo allí fue fundamental para el establecimiento y expansión del MMM en Panamá y posteriormente en Centroamérica y Europa. El pastor Soto realizó estudios de Teología Bíblica en el Instituto Bíblico ELIM de Puerto Rico y posee un Doctorado en Teología "Honoris Causa" otorgado por la Universidad Teológica y Científica de Costa Rica. Durante su ministerio, se ha destacado por su liderazgo y pasión por el evangelio. Sirvió como Supervisor Nacional del MMM en Panamá y Centroamérica durante alrededor de 30 años, y luego fue promovido a cargos internacionales como Director Internacional, Vicepresidente Internacional, Supervisor Misionero para Europa y, desde enero de 2018, es el Presidente Internacional del Movimiento Misionero Mundial. El pastor Soto es conocido por su compromiso con la evangelización, la enseñanza bíblica y el liderazgo de iglesias en diferentes continentes. Ha predicado y realizado labores misioneras en países de África, Asia, Oceanía y, por supuesto, en América Latina. Además, es muy activo en eventos internacionales y suele participar en convenciones y campañas evangelísticas por todo el mundo. En resumen, el pastor José Arturo Soto es una figura relevante dentro del cristianismo evangélico latinoamericano, especialmente dentro del Movimiento Misionero Mundial, donde ha servido durante varias décadas con una trayectoria que abarca servicio local, regional y mundial.',
  },
  {
    nombre: "Rev. Jorge Humberto Henao",
    cargo: "Vicepresidente del M.M.M.",
    imagen: "/images/oficiales/jorge-henao.jpg",
    descripcion:
      'El pastor Jorge Humberto Henao Lotero nació el 5 de junio de 1957 en Riofrío, Colombia. A los 19 años entregó su vida a Cristo y comenzó su ministerio en el pequeño pueblo de Lleras, en la frontera con Venezuela. Tiene un doctorado en Teología homologado por la universidad "La Viña" de Denver, Colorado, EE. UU., además de un título técnico en Teología y Ciencias Religiosas bajo la iglesia anglicana de Barranquilla, Colombia, y un diplomado en Pastorado y Consejería Bíblica de la Universidad de Cali. En su trayectoria ministerial, asumió diversos cargos dentro del Movimiento Misionero Mundial, llegando a ser director internacional a finales de los años 1990 y vicepresidente internacional desde el 10 de enero de 2018, sucediendo al pastor José Arturo Soto Benavides en ese cargo. Ha sido un referente misionero y teológico en Colombia y a nivel internacional, predicando en Latinoamérica, Europa y Estados Unidos. Durante muchos años pastoreó en la ciudad de Bucaramanga, Colombia, inicialmente en el templo del barrio Cañaveral y después en otro templo en la misma ciudad. Ha sido conocido no solo por su predicación bíblica sino también por su enfoque social y comunitario, organizando jornadas de apoyo a sectores vulnerables en Bucaramanga. Su estilo de predicación se basa en fundamentos teológicos del pentecostalismo, con un énfasis analítico y un lenguaje claro. Ha dirigido numerosas campañas evangelísticas, convenciones y eventos misioneros tanto en Colombia como internacionalmente. También es autor de libros como "Enseñanzas de vida" y "Enseñanzas Dominicales", publicados en 2025. En resumen, el pastor Jorge Humberto Henao es una figura clave del Movimiento Misionero Mundial, con una amplia labor evangelística, pastoral y teológica, reconocido como vicepresidente internacional de esta organización evangélica.',
  },
  {
    nombre: "Rev. Mario Lima Vacaflor",
    cargo: "Director del M.M.M.",
    imagen: "/images/oficiales/mario-lima.jpg",
    descripcion:
      "El pastor Mario Lima Vacaflor nació el 20 de octubre de 1963 en La Paz, Bolivia. Creció en un hogar humilde y, tras graduarse del colegio, estudió derecho, carrera que llegó a ejercer antes de ser llamado a la obra misionera. En 1997 recibió el llamado misionero junto a su esposa, la hermana Liliana Acebey, y sus cuatro hijos, y se trasladaron a Cochabamba para fundar y pastorear la iglesia central de esa ciudad. Esta iglesia es actualmente la sede de las oficinas nacionales del Movimiento Misionero Mundial en Bolivia y la congregación con más feligreses en el país, en constante crecimiento desde 2004 gracias al favor de Dios y el uso de medios de comunicación para expandir su obra. El pastor Mario Lima es conocido por su dedicación al evangelio y su testimonio, y es miembro activo del Movimiento Misionero Mundial desde hace más de 30 años. A lo largo de su ministerio ha enseñado y liderado diversas campañas evangelísticas, seminarios y convenciones, manteniendo un fuerte compromiso con la santidad, la fortaleza espiritual y el cuidado del testimonio cristiano. También ha hablado sobre la importancia de un testimonio transparente y buscar agradar a Dios ante todo, incluso frente a las dificultades y tentaciones que enfrentan los creyentes. En resumen, el pastor Mario Lima Vacaflor es un pastor boliviano que combina su formación profesional con su llamado misionero, haciendo una labor relevante en el crecimiento del Movimiento Misionero Mundial en Bolivia y la región.",
  },
  {
    nombre: "Rev. Luis Meza Bocanegra",
    cargo: "Tesorero del M.M.M.",
    imagen: "/images/oficiales/luis-meza.jpg",
    descripcion:
      'El pastor Luis Meza Bocanegra nació el 5 de septiembre de 1962. Es miembro de la Junta de Oficiales Internacionales del Movimiento Misionero Mundial y actualmente desempeña el cargo de Supervisor del MMM en Perú. Además, es Vicepresidente en Bethel Televisión. Ha estudiado en el Instituto Bíblico y Teológico Elim. El pastor Luis Meza es conocido por su participación activa en el liderazgo y administración de las obras del MMM, así como por su enseñanza y predicación. También es editor de la revista misionera "Impacto Evangelístico" y figura relevante en la difusión de la doctrina y actividades del movimiento. Su ministerio está enfocado en fortalecer la iglesia, promover la unidad y la edificación espiritual, y también ha hablado sobre la importancia de la fidelidad en el servicio y la diversidad de dones ministeriales en la iglesia.',
  },
  {
    nombre: "Rev. Rubén Concepción Báez",
    cargo: "Secretario del M.M.M.",
    imagen: "/images/oficiales/ruben-baez.jpg",
    descripcion:
      "El pastor Rubén Concepción Báez es puertorriqueño nacido el 24 de diciembre de 1958. Inició su ministerio el 30 de junio de 1995. Ha tenido una importante labor dentro del Movimiento Misionero Mundial, específicamente en la República Dominicana, donde se desempeñó como Supervisor Nacional interino a partir de noviembre de 2008, tras el fallecimiento del pastor Sinaí Santiago Díaz. Posteriormente, en abril de 2009, fue nombrado Supervisor Nacional oficialmente para el período 2009-2012, y su labor fue reconfirmada para un segundo período hasta 2015. Durante su supervisión en la República Dominicana, se enfocó en organizar y preparar la obra nacional para alcanzar mayores logros, incluyendo la transmisión de convenciones a través de medios de comunicación. Bajo su liderazgo, se llevaron a cabo celebraciones importantes como el 50 aniversario del MMM en ese país, junto con remodelaciones y ampliaciones de instalaciones para fortalecer la obra. Su estilo de liderazgo se caracteriza por procurar continuidad y seguimiento a la labor realizada por sus predecesores, con visión hacia el futuro de la iglesia en la nación.",
  },
  {
    nombre: "Rev. Carlos Enrique Medina Herrera",
    cargo: "Director del M.M.M.",
    imagen: "/images/oficiales/carlos-medina.jpg",
    descripcion:
      "El pastor Carlos Enrique Medina Herrera es un líder del Movimiento Misionero Mundial  nacido el 17 de enero de 1959 en Puerto La Cruz, estado Anzoátegui, Venezuela. Desde muy joven, a los 21 años, se consagró al servicio del Señor, desarrollando su ministerio en diferentes áreas y regiones. Actualmente, es Supervisor del bloque A del MMM en España, donde lidera la iglesia central en Barcelona, conocida como Bon Pastor. Es reconocido por su predicación clara y apasionada, enfatizando temas como la autoridad espiritual, la santidad, la necesidad de disciplina y obediencia a la autoridad divina y eclesiástica. También destaca por su enseñanza sobre la firmeza en la fe y la lucha espiritual dentro de la iglesia. Además, Carlos Medina fue nombrado Oficial Internacional del MMM, lo que refleja su importancia y liderazgo dentro de la organización a nivel mundial. Su ministerio no solo se limita a España, sino que también ha participado en eventos y retiros de pastores en diversas regiones, contribuyendo al crecimiento y fortalecimiento de la obra misionera en Europa y otros lugares. Su mensaje se caracteriza por la exhortación a la unidad, la disciplina y la fidelidad en la iglesia, con un fuerte llamado a enfrentar la rebelión espiritual y a mantener la santidad y la doctrina pura entre los creyentes.",
  },
  {
    nombre: "Rev. Clemente Vergara",
    cargo: "Director del M.M.M.",
    imagen: "/images/oficiales/clemente-vergara.jpg",
    descripcion:
      "El pastor Clemente Vergara es un líder del Movimiento Misionero Mundial que actualmente desempeña su labor pastoral en la ciudad de Curacao. Ha sido designado como nuevo director a nivel internacional dentro del MMM, lo que indica una importante posición de liderazgo en la organización. Además de su ministerio, el pastor Clemente Vergara es activo en redes sociales como Facebook, TikTok e Instagram, donde se presenta como misionero, siervo de Cristo, padre, esposo, abuelo y pastor del MMM. Se le puede ver participando en eventos y convenciones misioneras, incluyendo testimonios y cultos evangelísticos en diferentes países, como Colombia, donde tiene presencia y participación activa en la obra y la formación de creyentes. En resumen, el pastor Clemente Vergara es una figura pastoral relevante dentro del Movimiento Misionero Mundial, con liderazgo internacional y activo en la predicación y formación espiritual en varias regiones.",
  },
  {
    nombre: "Rev. Albert Rivera",
    cargo: "Director del M.M.M.",
    imagen: "/images/oficiales/albert-rivera.jpg",
    descripcion:
      "El pastor Albert Rivera nació el 27 de diciembre de 1961. A los 17 años entregó su vida a Cristo y comenzó su ministerio en Peñuelas, Puerto Rico. Tiene estudios en Pedagogía del Idioma Inglés y ha recibido formación teológica en el Instituto Elim y en la Universidad Teológica de Consejería Bíblica de Puerto Rico. Actualmente, es pastor en la iglesia de Pueblo de Comerio, Puerto Rico. Además, ha sido designado por la Junta Internacional del Movimiento Misionero Mundial como Director Internacional del MMM y Supervisor de Puerto Rico. Su labor ministerial se destaca por su compromiso con la enseñanza bíblica y la formación de nuevas generaciones en la fe, siendo un referente en la obra tanto a nivel local como internacional. Participa activamente en eventos y cultos del MMM, donde predica y guía espiritualmente a la congregación.",
  },
  {
    nombre: "Rev. Alberto Ortega",
    cargo: "Director del M.M.M.",
    imagen: "/images/oficiales/alberto-ortega.jpg",
    descripcion:
      "El pastor Alberto Ortega nació el 2 de enero de 1952 en España y pasó su niñez en el norte de África, estudiando en Marruecos y Argelia. Conoció a Dios a una temprana edad y comenzó su ministerio a los 20 años, luego de un llamado recibido a través del pastor Luis M. Ortiz. Durante su tiempo de pastoreo se ha empapado de las culturas y lenguas de los países donde ha evangelizado, y habla francés, español e inglés. Posee una Maestría Industrial en España y un Doctorado en Teología. Actualmente, es Supervisor Nacional del Movimiento Misionero Mundial en Estados Unidos. Alberto Ortega es conocido por sus predicaciones y enseñanzas y ha participado en distintos eventos y cultos dentro del MMM, con mensajes enfocados en la gracia de Dios, el perdón y la transformación espiritual. Su ministerio es reconocido por la profundidad en el conocimiento bíblico y su habilidad para transmitir consejos y pensamientos de Dios que inspiran a la congregación y a los creyentes en general.",
  },
];

export default function OficialesInternacionales() {
  const [selectedOficial, setSelectedOficial] = useState<Oficial | null>(null);

  return (
    <div className="relative flex size-full min-h-screen flex-col group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <main
          className="flex-1"
          style={{
            backgroundColor: "var(--secondary-color)",
          }}
        >
          {/* Hero Section */}
          <section className="relative py-20">
            <div className="absolute inset-0 bg-black opacity-40"></div>
            <div className="container mx-auto px-6 relative">
              <div className="text-center">
                <h1 className="text-white text-4xl md:text-5xl font-bold leading-tight tracking-tight mb-4">
                  Oficiales Internacionales
                </h1>
                <div className="w-full flex items-center justify-center mt-4 mb-8">
                  <div className="h-1 w-30 bg-[var(--primary-color)] rounded-full"></div>
                </div>
                <p className="text-gray-200 text-lg max-w-3xl mx-auto">
                  Líderes del Movimiento Misionero Mundial
                </p>
                <p className="text-gray-300 text-base max-w-3xl mx-auto mt-4">
                  El Movimiento Misionero Mundial es dirigido por un equipo de
                  líderes comprometidos con la misión de llevar el evangelio a
                  todas las naciones. Conoce a quienes guían nuestra
                  organización a nivel internacional.
                </p>
              </div>
            </div>
          </section>

          {/* Content Section */}
          <div className="container mx-auto px-6 pb-20 mt-12">
            {/* Officials Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {oficialesData.map((oficial, index) => (
                <OficialCard
                  key={index}
                  oficial={oficial}
                  onClick={() => setSelectedOficial(oficial)}
                />
              ))}
            </div>
          </div>
        </main>
      </div>

      {/* Modal for detailed view */}
      <AlertDialog
        open={!!selectedOficial}
        onOpenChange={() => setSelectedOficial(null)}
      >
        <AlertDialogContent className="max-w-2xl h-[90vh] bg-white border border-gray-200/50 p-0 overflow-hidden flex flex-col shadow-2xl">
          {/* Botón de cerrar en esquina superior */}
          <button
            onClick={() => setSelectedOficial(null)}
            className="absolute top-4 right-4 z-10 text-gray-500 hover:text-gray-700 text-xl sm:text-2xl hover:bg-gray-100 rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center transition-all duration-200"
          >
            ×
          </button>

          {/* Header fijo - siempre visible */}
          <div className="text-center p-6 sm:p-8 border-b border-gray-200/50 flex-shrink-0">
            {/* Avatar with ring */}
            <div className="relative inline-block mb-4 sm:mb-6">
              <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-full mx-auto overflow-hidden shadow-2xl ring-4 sm:ring-5 lg:ring-6 ring-white/80">
                <Image
                  src={selectedOficial?.imagen || ""}
                  alt={`Foto de ${selectedOficial?.nombre}`}
                  width={112}
                  height={112}
                  className="w-full h-full object-cover"
                  onError={() => {
                    // Fallback a inicial si la imagen falla
                    const fallbackElement = document.querySelector(
                      `[data-fallback-modal="${selectedOficial?.nombre}"]`
                    );
                    if (fallbackElement) {
                      fallbackElement.classList.remove("hidden");
                    }
                  }}
                  unoptimized
                />
                {/* Fallback inicial si no hay imagen */}
                <div
                  data-fallback-modal={selectedOficial?.nombre}
                  className="w-full h-full flex items-center justify-center text-white text-2xl sm:text-3xl lg:text-4xl font-bold hidden"
                  style={{
                    background:
                      "radial-gradient(circle at center top, var(--primary-color) 0%, var(--secondary-color) 100%)",
                  }}
                >
                  {selectedOficial?.nombre.charAt(0)}
                </div>
              </div>
              {/* Status indicator */}
              <div className="absolute -bottom-1 -right-1 sm:-bottom-2 sm:-right-2 w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 bg-green-500 rounded-full border-2 sm:border-3 border-white shadow-lg flex items-center justify-center">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 lg:w-3 lg:h-3 bg-white rounded-full"></div>
              </div>
            </div>

            {/* Name and Position */}
            <AlertDialogTitle className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
              {selectedOficial?.nombre}
            </AlertDialogTitle>
            <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-gray-100 rounded-full border border-gray-200">
              <span className="text-gray-700 font-semibold text-sm sm:text-base">
                {selectedOficial?.cargo}
              </span>
            </div>
          </div>

          {/* Contenido scrolleable - ocupa el espacio disponible */}
          <div className="flex-1 p-6 sm:p-8 overflow-y-auto min-h-0">
            <div className="bg-gray-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 text-left border border-gray-200">
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                {selectedOficial?.descripcion}
              </p>
            </div>
          </div>

          {/* Botón de cerrar en la parte inferior - siempre visible */}
          <div className="p-6 sm:p-8 border-t border-gray-200 text-center flex-shrink-0">
            <button
              onClick={() => setSelectedOficial(null)}
              className="inline-flex items-center justify-center px-6 py-3 bg-gray-800 text-white font-medium rounded-xl hover:bg-gray-700 transition-all duration-200 shadow-md hover:shadow-lg"
            >
              <span>Cerrar</span>
              <svg
                className="ml-2 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
