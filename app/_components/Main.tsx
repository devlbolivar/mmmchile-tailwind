import React, { JSX } from "react";
import Contacto from "../contacto/_components/Contacto";
import Link from "next/link";

const Main = () => {
  return (
    <main className="flex-1">
      <section
        id="inicio"
        className="relative min-h-[calc(100vh-0px)] flex items-center justify-center text-center bg-cover bg-center py-20 px-4"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.1) 100%), url("/images/hero-overlay.png")',
          backgroundPosition: "center 0px",
          backgroundColor: "#0c2a44",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight mb-6">
            Bienvenido al Movimiento Misionero Mundial Chile
          </h1>
          <p className="text-gray-200 text-lg sm:text-xl font-light leading-relaxed mb-10">
            Un lugar de encuentro espiritual y crecimiento en la fe.
          </p>
          <Link href="/doctrina">
            <button className="btn-primary text-lg px-8 py-4 cursor-pointer">
              Aprender Más
            </button>
          </Link>
        </div>
      </section>
      <section
        className="py-40 bg-cover bg-center"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(61, 152, 244, 0.3), rgba(12, 42, 68, 0.3)), url("/images/lema.png")',
        }}
      ></section>
      <section id="nosotros" className="py-20 bg-[var(--background-light)]">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-[var(--secondary-color)] mb-4 text-center">
            Nosotros
          </h2>
          <div className="w-full flex items-center justify-center mb-12">
            <div className="h-1 w-30 bg-[var(--primary-color)] rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-[var(--secondary-color)] mb-4">
                Nuestra Identidad
              </h3>
              <p className="text-[var(--text-secondary)] text-base leading-relaxed mb-6">
                Como parte del Movimiento Misionero Mundial, nuestra identidad
                se fundamenta en la fidelidad a la Palabra de Dios, la santidad
                como estilo de vida, y el compromiso con la evangelización
                mundial. Nos reconocemos como una iglesia pentecostal cristiana,
                nacida en el fuego del Espíritu Santo, que predica la sana
                doctrina y defiende la integridad bíblica. Vivimos con la
                convicción de que Jesucristo salva, sana, bautiza con el
                Espíritu Santo y viene pronto, y asumimos la misión de proclamar
                ese mensaje con pasión, humildad y celo misionero en cada rincón
                donde Dios nos envíe.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-[var(--secondary-color)] mb-4">
                Nuestra Misión
              </h3>
              <p className="text-[var(--text-secondary)] text-base leading-relaxed">
                Nuestra visión es llevar el mensaje transformador del evangelio
                de Jesucristo a todas las naciones, formando creyentes
                comprometidos con la santidad, la verdad bíblica y el poder del
                Espíritu Santo. Anhelamos ver una iglesia encendida por el fuego
                misionero, que impacte a las familias, las comunidades y las
                generaciones con una fe viva, práctica y sin corrupción. Soñamos
                con una expansión global del Reino de Dios, donde cada discípulo
                se convierta en un testigo fiel y valiente, hasta que Cristo
                venga por su iglesia.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="eventos" className="py-20 bg-[var(--background-dark)]">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-[var(--secondary-color)] mb-4 text-center">
            Próximos Eventos
          </h2>
          <div className="w-full flex items-center justify-center mb-12">
            <div className="h-1 w-60 bg-[var(--primary-color)] rounded-full"></div>
          </div>
          <div className="flex gap-8 justify-items-center justify-center">
            <div className="card w-full max-w-sm">
              <div
                className="w-full h-56 bg-center bg-no-repeat bg-cover"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD4cXpb3vW88nYm_MrCLHsjIyome4IzdgVFi1blHOMWk74W1dzqgVeh0MFLqI3AjC8mDQ05HQz2x40GfZYbuYYqi46QtteeB_mSOSHnv9Meb7njGl8j9a5n9g8PI4SD_3BTZewjZPb54ji_O6RfgEZtXnZCAdakUhrMTAsus4gwyi8sP67pIXwqNGLZfkYkczAMm_AVaFg7wiVdLX7972N3Avb0xp8s6gf0vgZbNgEH3v5QYAqZBrDuLGUTLJ8LWQsKSed9hemOjuo")',
                }}
              ></div>
              <div className="p-6">
                <h4 className="text-xl font-semibold text-[var(--secondary-color)] mb-2">
                  Confraternidad Nacional 2025
                </h4>
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                  Un tiempo de aprendizaje y crecimiento espiritual para toda la
                  familia.
                </p>
                <Link
                  href="/eventos"
                  className="btn-secondary text-base mt-4 inline-block"
                >
                  Ver Evento
                </Link>
              </div>
            </div>
            <div className="card w-full max-w-sm">
              <div
                className="w-full h-56 bg-center bg-no-repeat bg-cover"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCnTGjXyb9pJeWw022SXFycCiRb7GPsZre8DuBh9-1huwlDagsEfvaRE7debUzfUakVlAZP8v7XtmfAVFJzKt_rqWdHhZ9L4RKkPrALFit9_IND7vUmDgSBgyH1pQVqNYLylauUpCYiccTIRg9cX1tn1NAJWDurrZx8Y4J78c1jOcRWuqtDa1cEvpSopHuf5viIe5-rRt8FI4_SE3AmirMi9qc0HO5I_Dgp0ylCo2MijuTPLnsnWXm0S_JqDV2XWP1YdfyTP-5gtWY")',
                }}
              ></div>
              <div className="p-6">
                <h4 className="text-xl font-semibold text-[var(--secondary-color)] mb-2">
                  Convención Nacional 2025
                </h4>
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                  Un tiempo de aprendizaje y crecimiento espiritual para toda la
                  familia.
                </p>
                <Link
                  href="/eventos"
                  className="btn-secondary text-base mt-4 inline-block"
                >
                  Ver Evento
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-[var(--background-light)]">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-[var(--secondary-color)] mb-4 text-center">
            Mensaje del Pastor
          </h2>
          <div className="w-full flex items-center justify-center mb-12">
            <div className="h-1 w-64 bg-[var(--primary-color)] rounded-full"></div>
          </div>
          <div className="card md:flex items-center gap-8 p-8">
            <div
              className="md:w-1/3 h-64 md:h-auto rounded-lg bg-cover bg-center mb-6 md:mb-0"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDQStKjd4FXhQAkisuY8Wbgeb7UaGLJuQYA6t1b1ydWrUIH-RugEWyaUWn2kfEDlEbf2euD9qUJOztap3TcI5t-XcK5RYHNfkVkI5eAiLpT5HFBAXndhL28KRe7beHCZbgQXFfvV8saYyDcRXKQHgnKztcAF0uBbE6Yj2zB4LmG9AiHZPjnbMM4Rn5YWIznrPBStj_qXqUKI6aZ8-gjqhbHsm7peRni7hY6wV53F-zK707Mvl8ny804QEOj4PkgcAqwyTQ3vmIYq5o")',
              }}
            ></div>
            <div className="md:w-2/3">
              <h3 className="text-2xl font-semibold text-[var(--secondary-color)] mb-3">
                Un Mensaje de Esperanza
              </h3>
              <p className="text-[var(--text-secondary)] text-base leading-relaxed mb-6">
                El Pastor Ricardo García comparte una reflexión sobre la
                importancia de la fe en tiempos desafiantes y nos anima a
                perseverar en la esperanza.
              </p>
              <button className="btn-secondary text-base">Ver Mensaje</button>
            </div>
          </div>
        </div>
      </section>
      <section id="contacto" className="py-20 bg-[var(--background-dark)]">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-[var(--secondary-color)] mb-4 text-center">
            Contacto
          </h2>
          <div className="w-full flex items-center justify-center mb-12">
            <div className="h-1 w-30 bg-[var(--primary-color)] rounded-full"></div>
          </div>
          <Contacto />
        </div>
      </section>
    </main>
  );
};

export default Main;
