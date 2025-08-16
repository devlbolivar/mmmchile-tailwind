import React from "react";

interface ChurchSeoContentProps {
  showExtendedContent?: boolean;
}

const ChurchSeoContent = ({
  showExtendedContent = true,
}: ChurchSeoContentProps) => {
  if (!showExtendedContent) return null;

  return (
    <section className="py-8 relative" id="iglesia-content">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">
            Iglesia Cristiana en Chile | MMM Chile
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">
                ¿Qué es una Iglesia Cristiana?
              </h3>
              <p className="text-gray-200 text-sm leading-relaxed mb-4">
                Una <strong>iglesia cristiana</strong> es una comunidad de
                creyentes que se reúnen para adorar a Dios, estudiar la Biblia,
                compartir el evangelio de Jesucristo y crecer juntos en la fe.
                Como <strong>iglesia cristiana</strong>, nos enfocamos en la
                autoridad de las Escrituras y la salvación por gracia a través
                de la fe en Cristo.
              </p>
              <p className="text-gray-300 text-sm leading-relaxed">
                Nuestra <strong>iglesia cristiana</strong> en Chile ofrece
                servicios de adoración, estudios bíblicos, ministerios para
                todas las edades y oportunidades de servicio comunitario.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-4">
                Servicios de Iglesia Cristiana
              </h3>
              <ul className="text-gray-200 text-sm space-y-2">
                <li>
                  • <strong>Cultos de Adoración:</strong> Servicios dominicales
                  con predicación y música cristiana
                </li>
                <li>
                  • <strong>Estudios Bíblicos:</strong> Enseñanza profunda de la
                  Palabra de Dios
                </li>
                <li>
                  • <strong>Ministerio de Jóvenes:</strong> Programas especiales
                  para adolescentes y jóvenes
                </li>
                <li>
                  • <strong>Escuela Dominical:</strong> Educación cristiana para
                  niños y adultos
                </li>
                <li>
                  • <strong>Grupos de Oración:</strong> Tiempos dedicados a la
                  intercesión
                </li>
                <li>
                  • <strong>Evangelización:</strong> Compartir el evangelio en
                  la comunidad
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 p-6 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
            <h3 className="text-lg font-semibold text-white mb-3">
              ¿Por qué visitar una Iglesia Cristiana?
            </h3>
            <p className="text-gray-200 text-sm leading-relaxed">
              Visitar una <strong>iglesia cristiana</strong> te permite
              conectarte con una comunidad de fe, aprender más sobre Dios a
              través de la Biblia, encontrar apoyo espiritual y crecer en tu
              relación personal con Jesucristo. Nuestra{" "}
              <strong>iglesia cristiana</strong> en Chile te da la bienvenida
              sin importar dónde te encuentres en tu jornada espiritual.
            </p>
          </div>

          {/* Nueva sección específica para SEO de "iglesia cristiana" */}
          <div className="mt-8 p-6 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
            <h3 className="text-lg font-semibold text-white mb-4">
              Iglesia Cristiana en Chile: Información Completa
            </h3>
            <p className="text-gray-200 text-sm leading-relaxed mb-4">
              Si estás buscando una <strong>iglesia cristiana</strong> en Chile,
              has llegado al lugar correcto. Nuestra{" "}
              <strong>iglesia cristiana</strong> es parte del Movimiento
              Misionero Mundial y ofrece servicios religiosos, estudios bíblicos
              y ministerios para toda la familia.
            </p>
            <p className="text-gray-200 text-sm leading-relaxed mb-4">
              Como <strong>iglesia cristiana</strong> en Chile, nos distinguimos
              por:
            </p>
            <ul className="text-gray-200 text-sm space-y-2 mb-4">
              <li>
                • <strong>Doctrina bíblica sólida:</strong> Enseñanza basada
                únicamente en la Palabra de Dios
              </li>
              <li>
                • <strong>Ministerio pentecostal:</strong> Experiencia del
                Espíritu Santo en nuestros servicios
              </li>
              <li>
                • <strong>Evangelismo activo:</strong> Compartimos el evangelio
                en las calles y hogares
              </li>
              <li>
                • <strong>Comunidad cristiana:</strong> Familias unidas en la fe
                y el amor de Cristo
              </li>
              <li>
                • <strong>Ministerios especializados:</strong> Programas para
                todas las edades y necesidades
              </li>
            </ul>
            <p className="text-gray-200 text-sm leading-relaxed">
              Nuestra <strong>iglesia cristiana</strong> en Chile está
              comprometida con la Gran Comisión y con servir a la comunidad
              local. Te invitamos a visitarnos y experimentar la presencia de
              Dios en nuestros servicios.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChurchSeoContent;
