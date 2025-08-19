import Image from "next/image";

interface Oficial {
  nombre: string;
  cargo: string;
  descripcion: string;
  imagen: string;
}

interface OficialCardProps {
  oficial: Oficial;
  onClick: () => void;
}

export default function OficialCard({ oficial, onClick }: OficialCardProps) {
  return (
    <div
      onClick={onClick}
      className="group relative bg-white/5 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden hover:-translate-y-2 border border-gray-600/30 hover:bg-white/10"
    >
      {/* Top accent bar */}
      <div
        className="h-2 w-full"
        style={{
          background:
            "linear-gradient(90deg, var(--primary-color) 0%, var(--secondary-color) 100%)",
        }}
      />

      {/* Card content */}
      <div className="p-8">
        {/* Header section */}
        <div className="text-center mb-6">
          {/* Avatar with ring */}
          <div className="relative inline-block mb-4">
            <div className="w-20 h-20 rounded-full overflow-hidden shadow-xl ring-4 ring-white/80">
              <Image
                src={oficial.imagen}
                alt={`Foto de ${oficial.nombre}`}
                width={80}
                height={80}
                className="w-full h-full object-cover"
                onError={() => {
                  // Fallback a inicial si la imagen falla
                  const fallbackElement = document.querySelector(
                    `[data-fallback="${oficial.nombre}"]`
                  );
                  if (fallbackElement) {
                    fallbackElement.classList.remove("hidden");
                  }
                }}
                unoptimized
              />
              {/* Fallback inicial si no hay imagen */}
              <div
                data-fallback={oficial.nombre}
                className="w-full h-full flex items-center justify-center text-white text-2xl font-bold hidden"
                style={{
                  background:
                    "radial-gradient(circle at center top, var(--primary-color) 0%, var(--secondary-color) 100%)",
                }}
              >
                {oficial.nombre.charAt(0)}
              </div>
            </div>
            {/* Status indicator */}
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white shadow-md flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
          </div>

          {/* Name and position */}
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-gray-100 transition-colors duration-300">
            {oficial.nombre}
          </h3>
          <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
            <span className="text-white font-semibold text-sm">
              {oficial.cargo}
            </span>
          </div>
        </div>

        {/* Description */}
        <div className="text-center mb-6">
          <p className="text-gray-200 text-sm leading-relaxed line-clamp-3">
            {oficial.descripcion}
          </p>
        </div>

        {/* Action button */}
        <div className="text-center">
          <button className="inline-flex items-center justify-center w-full py-3 px-6 bg-[var(--primary-color)] text-white font-medium rounded-xl hover:bg-[var(--primary-hover-color)] transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg">
            <span>Ver Perfil Completo</span>
            <svg
              className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Hover overlay effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary-color)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </div>
  );
}
