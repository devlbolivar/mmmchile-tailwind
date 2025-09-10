"use client";
import React from "react";
import {
  SkipBack,
  Rewind,
  Play,
  FastForward,
  SkipForward,
  Pause,
  Clock,
  Calendar,
  Volume2,
  VolumeX,
} from "lucide-react";
import Head from "next/head";
import RadioSeoContent from "../_components/RadioSeoContent";
import { useRadio } from "../_components/RadioContext";

const RadioPage = () => {
  const {
    isPlaying,
    isLoading,
    error,
    volume,
    togglePlay,
    handleVolumeChange,
    toggleMute,
  } = useRadio();

  // Horarios de programas
  const programSchedule = {
    weekdays: [
      { time: "03:00 AM", program: "Mensaje a la Conciencia" },
      { time: "08:00 AM", program: "Mensaje a la Conciencia" },
      { time: "09:00 AM", program: "Día a Día con Dios" },
      { time: "10:00 AM", program: "Biblia Maestra" },
      { time: "12:00 PM", program: "Momentos de Reflexión" },
      { time: "02:00 PM", program: "Predicaciones" },
      { time: "03:00 PM", program: "Al Ritmo del Corazón" },
      { time: "04:00 PM", program: "Belleza Espiritual" },
      { time: "05:00 PM", program: "The Bible Proyecto" },
      { time: "10:00 PM", program: "Me Contó un Amigo" },
      { time: "11:00 PM", program: "Biblia Maestra" },
    ],
    saturday: [
      { time: "10:00 AM", program: "Hogar Dulce Hogar" },
      { time: "11:00 AM", program: "Hablemos de Familia" },
      { time: "02:00 PM", program: "Tiempo para los Niños" },
      { time: "10:00 PM", program: "Entre 2 o 3" },
    ],
    sunday: [
      { time: "09:00 AM", program: "Dulce Armonía" },
      { time: "11:00 AM", program: "Transmisión de Culto" },
      { time: "03:00 PM", program: "Sostenidas por su Gracia" },
      { time: "04:00 PM", program: "Dulce Armonía Vespertino" },
    ],
  };

  return (
    <div className="relative flex size-full min-h-screen flex-col group/design-root overflow-x-hidden">
      <Head>
        <title>Radio Bethel Chile - Radio Cristiana</title>
        <meta
          name="description"
          content="Escucha nuestra radio cristiana en vivo y mantente conectado con la palabra de Dios, predicaciones cristianas y música de adoración las 24 horas del día."
        />
        <meta
          name="keywords"
          content="Radio Bethel Chile, Radio Cristiana, Radio en vivo, Predicaciones, Estudios Bíblicos, Música de Adoración, Jesucristo"
        />
        <meta name="author" content="Radio Bethel Chile" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://www.radiobethelchile.com" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="layout-container flex h-full grow flex-col">
        <main
          className="flex-1"
          style={{
            backgroundColor: "var(--secondary-color)",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <div className="container mx-auto px-6 py-20 relative">
            <div className="text-center mb-12">
              <h1 className="text-white text-4xl md:text-5xl font-bold leading-tight tracking-tight">
                Radio Bethel Chile - Radio Cristiana
              </h1>
              <div className="w-full flex items-center justify-center mt-4 mb-8">
                <div className="h-1 w-30 bg-[var(--primary-color)] rounded-full"></div>
              </div>
              <p className="text-gray-200 text-lg max-w-2xl mx-auto">
                Escucha nuestra radio cristiana en vivo y mantente conectado con
                la palabra de Dios, predicaciones cristianas y música de
                adoración las 24 horas del día.
              </p>
              <p className="text-gray-300 text-base max-w-3xl mx-auto mt-4">
                Una emisora cristiana dedicada a compartir el evangelio de
                Jesucristo, enseñanzas bíblicas y mensajes de fe para fortalecer
                tu vida espiritual.
              </p>
            </div>

            {/* Reproductor de Radio */}
            <div className="flex flex-col items-center gap-6 bg-white/10 backdrop-blur-sm px-6 py-10 text-white rounded-xl shadow-lg max-w-2xl mx-auto mb-12">
              <div
                className="bg-center bg-no-repeat aspect-square rounded-2xl size-64 shadow-md bg-contain"
                style={{
                  backgroundImage: "url('/images/logo-bethel.png')",
                }}
              ></div>
              <div className="text-center">
                <p className="text-white text-3xl font-bold leading-tight tracking-tight">
                  Radio Bethel Chile
                </p>
                <p className="text-[var(--primary-color)] text-lg font-medium leading-normal">
                  {error ? (
                    <span className="text-red-400">Error: {error}</span>
                  ) : isLoading ? (
                    "Cargando..."
                  ) : isPlaying ? (
                    "En vivo"
                  ) : (
                    <span className="flex items-center justify-center gap-2 text-yellow-300">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="inline-block size-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <circle
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="2"
                          fill="none"
                        />
                        <rect
                          x="8"
                          y="8"
                          width="8"
                          height="8"
                          rx="2"
                          fill="currentColor"
                        />
                      </svg>
                      <span>Listo para reproducir</span>
                    </span>
                  )}
                </p>
              </div>
              {/* Controles principales - Primera fila */}
              <div className="flex items-center justify-center gap-3 sm:gap-4 pt-2">
                <button
                  className="cursor-pointer flex shrink-0 items-center justify-center rounded-full size-10 sm:size-12 text-white hover:text-[var(--primary-color)] transition-all radio-player-button"
                  onClick={() => {
                    // Reload audio
                    window.location.reload();
                  }}
                  title="Reiniciar radio"
                >
                  <SkipBack className="size-7 sm:size-9" />
                </button>
                <button
                  className="cursor-pointer flex shrink-0 items-center justify-center rounded-full size-10 sm:size-12 text-white hover:text-[var(--primary-color)] transition-all radio-player-button"
                  disabled
                  title="No disponible para radio en vivo"
                >
                  <Rewind className="size-7 sm:size-9" />
                </button>
                <button
                  className="cursor-pointer flex shrink-0 items-center justify-center rounded-full size-16 sm:size-20 bg-[var(--primary-color)] text-white shadow-md hover:bg-blue-300 transition-all radio-player-button disabled:opacity-50 disabled:cursor-not-allowed"
                  onClick={togglePlay}
                  disabled={isLoading}
                >
                  {isPlaying ? (
                    <Pause className="size-8 sm:size-10" />
                  ) : (
                    <Play className="size-8 sm:size-10" />
                  )}
                </button>
                <button
                  className="cursor-pointer flex shrink-0 items-center justify-center rounded-full size-10 sm:size-12 text-white hover:text-[var(--primary-color)] transition-all radio-player-button"
                  disabled
                  title="No disponible para radio en vivo"
                >
                  <FastForward className="size-7 sm:size-9" />
                </button>
                <button
                  className="cursor-pointer flex shrink-0 items-center justify-center rounded-full size-10 sm:size-12 text-white hover:text-[var(--primary-color)] transition-all radio-player-button"
                  onClick={() => {
                    // Reload audio
                    window.location.reload();
                  }}
                  title="Reiniciar radio"
                >
                  <SkipForward className="size-7 sm:size-9" />
                </button>
              </div>

              {/* Controles de volumen - Segunda fila */}
              <div className="flex items-center justify-center gap-3 mt-4">
                <button
                  onClick={toggleMute}
                  className="cursor-pointer flex shrink-0 items-center justify-center rounded-full size-10 sm:size-12 text-white hover:text-[var(--primary-color)] transition-all radio-player-button"
                  title={volume === 0 ? "Activar sonido" : "Silenciar"}
                >
                  {volume === 0 ? (
                    <VolumeX className="size-7 sm:size-9" />
                  ) : (
                    <Volume2 className="size-7 sm:size-9" />
                  )}
                </button>
                <div className="flex items-center gap-2">
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.1"
                    value={volume}
                    onChange={handleVolumeChange}
                    className="w-16 sm:w-20 accent-[var(--primary-color)] cursor-pointer"
                    title={`Volumen: ${Math.round(volume * 100)}%`}
                  />
                  <span className="text-white/70 text-xs min-w-[2rem] sm:min-w-[2.5rem]">
                    {Math.round(volume * 100)}%
                  </span>
                </div>
              </div>
            </div>

            {/* Horarios de Programas */}
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-8">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <Calendar className="size-8 text-[var(--primary-color)]" />
                  <h2 className="text-white text-3xl md:text-4xl font-bold leading-tight tracking-tight">
                    Programación Cristiana
                  </h2>
                </div>
                <p className="text-gray-200 text-lg max-w-2xl mx-auto">
                  Conoce nuestra programación cristiana semanal con
                  predicaciones, estudios bíblicos, música de adoración y
                  mensajes de fe para toda la familia
                </p>
                <p className="text-gray-300 text-base max-w-3xl mx-auto mt-2">
                  Programas diseñados para fortalecer tu fe cristiana,
                  profundizar en el conocimiento bíblico y mantenerte conectado
                  con la palabra de Dios.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Lunes a Viernes */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-white/20">
                  <div className="text-center mb-6">
                    <h3 className="text-white text-xl font-bold mb-2">
                      Lunes a Viernes
                    </h3>
                    <div className="h-1 w-20 bg-[var(--primary-color)] rounded-full mx-auto"></div>
                  </div>
                  <div className="space-y-3">
                    {programSchedule.weekdays.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                      >
                        <div className="flex items-center gap-2 text-[var(--primary-color)] font-semibold min-w-[80px]">
                          <Clock className="size-4" />
                          <span className="text-sm">{item.time}</span>
                        </div>
                        <div className="text-white text-sm font-medium flex-1 text-left">
                          {item.program}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Sábados */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-white/20">
                  <div className="text-center mb-6">
                    <h3 className="text-white text-xl font-bold mb-2">
                      Sábados
                    </h3>
                    <div className="h-1 w-20 bg-[var(--primary-color)] rounded-full mx-auto"></div>
                  </div>
                  <div className="space-y-3">
                    {programSchedule.saturday.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                      >
                        <div className="flex items-center gap-2 text-[var(--primary-color)] font-semibold min-w-[80px]">
                          <Clock className="size-4" />
                          <span className="text-sm">{item.time}</span>
                        </div>
                        <div className="text-white text-sm font-medium flex-1 text-left">
                          {item.program}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Domingos */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-white/20">
                  <div className="text-center mb-6">
                    <h3 className="text-white text-xl font-bold mb-2">
                      Domingos
                    </h3>
                    <div className="h-1 w-20 bg-[var(--primary-color)] rounded-full mx-auto"></div>
                  </div>
                  <div className="space-y-3">
                    {programSchedule.sunday.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                      >
                        <div className="flex items-center gap-2 text-[var(--primary-color)] font-semibold min-w-[80px]">
                          <Clock className="size-4" />
                          <span className="text-sm">{item.time}</span>
                        </div>
                        <div className="text-white text-sm font-medium flex-1 text-left">
                          {item.program}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      <RadioSeoContent />
    </div>
  );
};

export default RadioPage;
