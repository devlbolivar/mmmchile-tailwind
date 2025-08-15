import React from "react";

const RadioSeoContent = () => {
  return (
    <section
      className="py-8 relative"
      style={{ backgroundColor: "var(--secondary-color)" }}
    >
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">
            Radio Cristiana en Chile
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">
                ¿Qué es Radio Bethel Chile?
              </h3>
              <p className="text-gray-200 text-sm leading-relaxed mb-4">
                Radio Bethel Chile es una emisora cristiana que transmite las 24
                horas del día programación dedicada a compartir el evangelio de
                Jesucristo, enseñanzas bíblicas y música de adoración cristiana.
                Como radio cristiana, nuestro objetivo es llevar la palabra de
                Dios a todos los hogares de Chile.
              </p>
              <p className="text-gray-300 text-sm leading-relaxed">
                Nuestra radio cristiana ofrece predicaciones, estudios bíblicos,
                música de adoración y mensajes de fe para fortalecer la vida
                espiritual de nuestros oyentes.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-4">
                Programación Cristiana
              </h3>
              <ul className="text-gray-200 text-sm space-y-2">
                <li>
                  • <strong>Predicaciones:</strong> Mensajes bíblicos y
                  enseñanzas cristianas
                </li>
                <li>
                  • <strong>Estudios Bíblicos:</strong> Análisis profundo de las
                  Escrituras
                </li>
                <li>
                  • <strong>Música de Adoración:</strong> Alabanzas y canciones
                  cristianas
                </li>
                <li>
                  • <strong>Programas Familiares:</strong> Contenido para toda
                  la familia
                </li>
                <li>
                  • <strong>Noticias Cristianas:</strong> Información relevante
                  para la comunidad
                </li>
                <li>
                  • <strong>Oración en Vivo:</strong> Momentos de intercesión
                  comunitaria
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 p-6 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
            <h3 className="text-lg font-semibold text-white mb-3">
              ¿Por qué escuchar Radio Cristiana?
            </h3>
            <p className="text-gray-200 text-sm leading-relaxed">
              Escuchar radio cristiana te permite mantenerte conectado con Dios
              durante todo el día, recibir enseñanza bíblica, escuchar música de
              adoración y fortalecer tu fe cristiana. Nuestra radio cristiana en
              Chile está disponible las 24 horas para acompañarte en tu jornada
              espiritual y ayudarte a crecer en el conocimiento de Jesucristo.
            </p>
          </div>

          <div className="mt-6 text-center sr-only">
            <p className="text-gray-400 text-sm">
              <strong>Palabras clave relacionadas:</strong> Radio Bethel Chile,
              Radio Cristiana, Radio en vivo, Predicaciones cristianas, Estudios
              bíblicos, Música de adoración, Evangelio, Jesucristo, Iglesia
              cristiana, Fe cristiana, Palabra de Dios
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RadioSeoContent;
