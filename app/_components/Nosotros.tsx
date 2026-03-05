import React from "react";
import { BookOpen, Globe, Users } from "lucide-react";

const cards = [
  {
    icon: BookOpen,
    title: "Nuestra Identidad como Iglesia Cristiana",
    text: "Como parte del Movimiento Misionero Mundial, nuestra identidad se fundamenta en la fidelidad a la Palabra de Dios, la santidad como estilo de vida, y el compromiso con la evangelización mundial. Nos reconocemos como una iglesia pentecostal cristiana, nacida en el fuego del Espíritu Santo, que predica la sana doctrina y defiende la integridad bíblica.",
  },
  {
    icon: Globe,
    title: "Nuestra Misión Evangelística",
    text: "Nuestra visión es llevar el mensaje transformador del evangelio de Jesucristo a todas las naciones, formando creyentes comprometidos con la santidad, la verdad bíblica y el poder del Espíritu Santo. Anhelamos ver una iglesia encendida por el fuego misionero, que impacte a las familias, las comunidades y las generaciones con una fe viva, práctica y sin corrupción.",
  },
  {
    icon: Users,
    title: "Nuestra Comunidad de Fe",
    text: "Somos una comunidad diversa unida por el amor a Cristo y el compromiso con la Palabra de Dios. Nuestras iglesias en todo Chile ofrecen un lugar de pertenencia donde cada persona puede crecer espiritualmente, encontrar apoyo en momentos difíciles y contribuir al avance del reino de Dios con sus dones y talentos.",
  },
];

const Nosotros = () => {
  return (
    <section
      id="nosotros"
      className="relative py-24"
      style={{ backgroundColor: "var(--bg-deep)" }}
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-3 text-center">
          Nosotros
        </h2>
        <div className="w-full flex items-center justify-center mb-14">
          <div className="h-1 w-16 bg-[var(--primary-color)] rounded-full" />
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {cards.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="glass-card p-8 flex flex-col gap-5"
            >
              {/* Icon circle */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{
                  background: "rgba(59,130,246,0.15)",
                  border: "1px solid rgba(59,130,246,0.25)",
                  boxShadow: "0 0 12px rgba(59,130,246,0.2)",
                }}
              >
                <Icon className="w-6 h-6 text-blue-300" aria-hidden="true" />
              </div>

              <h3 className="text-white text-xl font-semibold leading-snug">
                {title}
              </h3>
              <p className="text-[var(--text-muted)] text-base leading-relaxed">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Nosotros;
