import React from "react";
import Link from "next/link";

export default function SitemapPage() {
  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
          Mapa del Sitio - MMM Chile
        </h1>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Página Principal */}
          <section className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Página Principal
            </h2>
            <Link
              href="/"
              className="text-blue-600 hover:text-blue-800 text-lg font-medium"
            >
              Iglesia Cristiana en Chile | MMM Chile
            </Link>
            <p className="text-gray-600 mt-2">
              Página principal con información sobre nuestra iglesia cristiana
              en Chile
            </p>
          </section>

          {/* Iglesias */}
          <section className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Iglesias
            </h2>
            <Link
              href="/iglesias"
              className="text-blue-600 hover:text-blue-800 text-lg font-medium"
            >
              Encuentra una Iglesia Cristiana
            </Link>
            <p className="text-gray-600 mt-2">
              Ubicaciones de nuestras iglesias cristianas en Chile
            </p>
          </section>

          {/* Doctrina */}
          <section className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Doctrina
            </h2>
            <Link
              href="/doctrina"
              className="text-blue-600 hover:text-blue-800 text-lg font-medium"
            >
              Nuestra Fe Cristiana
            </Link>
            <p className="text-gray-600 mt-2">
              Enseñanza bíblica y doctrina de nuestra iglesia cristiana
            </p>
          </section>

          {/* Eventos */}
          <section className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Eventos
            </h2>
            <Link
              href="/eventos"
              className="text-blue-600 hover:text-blue-800 text-lg font-medium"
            >
              Eventos de la Iglesia Cristiana
            </Link>
            <p className="text-gray-600 mt-2">
              Próximos eventos y actividades de nuestra iglesia cristiana
            </p>
          </section>

          {/* Radio */}
          <section className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Radio</h2>
            <Link
              href="/radio"
              className="text-blue-600 hover:text-blue-800 text-lg font-medium"
            >
              Radio Bethel Chile
            </Link>
            <p className="text-gray-600 mt-2">
              Escucha nuestra radio cristiana evangélica en línea
            </p>
          </section>

          {/* Aniversario */}
          <section className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Aniversario
            </h2>
            <Link
              href="/aniversario"
              className="text-blue-600 hover:text-blue-800 text-lg font-medium"
            >
              Celebración del Aniversario
            </Link>
            <p className="text-gray-600 mt-2">
              Celebración especial de nuestra iglesia cristiana
            </p>
          </section>

          {/* Contacto */}
          <section className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Contacto
            </h2>
            <Link
              href="/contacto"
              className="text-blue-600 hover:text-blue-800 text-lg font-medium"
            >
              Contacta con Nuestra Iglesia Cristiana
            </Link>
            <p className="text-gray-600 mt-2">
              Información de contacto de nuestra iglesia cristiana en Chile
            </p>
          </section>
        </div>

        <div className="text-center mt-12">
          <Link
            href="/"
            className="text-blue-600 hover:text-blue-800 text-lg font-medium"
          >
            ← Volver al Inicio
          </Link>
        </div>
      </div>
    </div>
  );
}
