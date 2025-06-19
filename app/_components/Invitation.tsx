import React from "react";
import InstagramEmbed from "./InstagramEmbed";

const Invitation = () => {
  return (
    <section className="py-10 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-4 text-center">
          Invitación
        </h2>
        <div className="w-full flex items-center justify-center mb-12">
          <div className="h-1 w-64 bg-[var(--primary-color)] rounded-full"></div>
        </div>
        <div className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden md:flex items-center gap-8 p-8">
          <div className="w-full md:w-1/2 h-110 md:h-[500px] rounded-lg overflow-hidden mb-6 md:mb-0">
            <InstagramEmbed />
          </div>
          <div className="md:w-2/3">
            <h3 className="text-2xl font-semibold text-white mb-3">
              Invitación a la Confraternidad Nacional
            </h3>
            <p className="text-gray-200 text-base leading-relaxed mb-6">
              El Pastor Gerardo Martínez nos invita a participar en la
              Confraternidad Nacional 2025, un evento trascendental que
              fortalecerá nuestra fe y unidad como iglesia. Este encuentro
              espiritual será una oportunidad única para crecer en comunión,
              recibir enseñanza bíblica sólida y experimentar un avivamiento que
              transformará nuestras vidas y ministerios. Juntos, buscaremos la
              dirección del Espíritu Santo para avanzar en la misión que Dios
              nos ha encomendado.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Invitation;
