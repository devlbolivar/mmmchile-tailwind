import Link from "next/link";

export default function NotFound() {
  console.log("NotFound component is rendering");

  return (
    <main
      className="min-h-screen flex items-center justify-center"
      style={{
        backgroundColor: "#0c2a44",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-white text-6xl md:text-8xl font-bold leading-tight tracking-tight mb-4">
            404
          </h1>
          <div className="w-full flex items-center justify-center mt-4 mb-8">
            <div className="h-1 w-30 bg-[#3d98f4] rounded-full"></div>
          </div>
          <h2 className="text-white text-3xl md:text-4xl font-bold leading-tight tracking-tight mb-6">
            Página No Encontrada
          </h2>
          <p className="text-gray-200 text-lg max-w-2xl mx-auto mb-8">
            Lo sentimos, la página que buscas no existe o ha sido movida. Te
            invitamos a explorar nuestro sitio y descubrir todo lo que tenemos
            para ti.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <Link
            href="/"
            className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all text-center group"
          >
            <div className="text-[#3d98f4] text-4xl mb-4 group-hover:scale-110 transition-transform">
              🏠
            </div>
            <h3 className="text-white text-xl font-semibold mb-2">Inicio</h3>
            <p className="text-gray-300 text-sm">
              Regresa a la página principal
            </p>
          </Link>

          <Link
            href="/eventos"
            className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all text-center group"
          >
            <div className="text-[#3d98f4] text-4xl mb-4 group-hover:scale-110 transition-transform">
              📅
            </div>
            <h3 className="text-white text-xl font-semibold mb-2">Eventos</h3>
            <p className="text-gray-300 text-sm">
              Descubre nuestros próximos eventos
            </p>
          </Link>

          <Link
            href="/iglesias"
            className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all text-center group"
          >
            <div className="text-[#3d98f4] text-4xl mb-4 group-hover:scale-110 transition-transform">
              ⛪
            </div>
            <h3 className="text-white text-xl font-semibold mb-2">Iglesias</h3>
            <p className="text-gray-300 text-sm">
              Encuentra una iglesia cerca de ti
            </p>
          </Link>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400 text-sm mb-4">
            ¿Necesitas ayuda? Contáctanos
          </p>
          <Link
            href="/contacto"
            className="bg-[#3d98f4] hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg inline-block"
          >
            Contactar
          </Link>
        </div>
      </div>
    </main>
  );
}
