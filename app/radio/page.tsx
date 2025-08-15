"use client";
import React, { useState, useRef, useEffect } from "react";
import {
  SkipBack,
  Rewind,
  Play,
  FastForward,
  SkipForward,
  Pause,
  Clock,
  Calendar,
} from "lucide-react";

const RadioPage = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

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
      { time: "05:00 PM", program: "The Noble Proyecto" },
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

  useEffect(() => {
    // Initialize audio element
    audioRef.current = new Audio(
      "https://s38.radiolize.com/radio/8040/radio.mp3"
    );

    // Add event listeners
    const audio = audioRef.current;

    const handleCanPlay = () => {
      setIsLoading(false);
    };

    const handlePlaying = () => {
      setIsLoading(false);
      setIsPlaying(true);
    };

    const handlePause = () => {
      setIsPlaying(false);
    };

    const handleWaiting = () => {
      setIsLoading(true);
    };

    const handleError = () => {
      setIsPlaying(false);
      setIsLoading(false);
      console.error("Error loading audio stream");
    };

    const handleStalled = () => {
      setIsLoading(true);
    };

    const handleLoadStart = () => {
      setIsLoading(true);
    };

    audio.addEventListener("canplay", handleCanPlay);
    audio.addEventListener("playing", handlePlaying);
    audio.addEventListener("pause", handlePause);
    audio.addEventListener("waiting", handleWaiting);
    audio.addEventListener("error", handleError);
    audio.addEventListener("stalled", handleStalled);
    audio.addEventListener("loadstart", handleLoadStart);

    // Cleanup
    return () => {
      audio.pause();
      audio.removeEventListener("canplay", handleCanPlay);
      audio.removeEventListener("playing", handlePlaying);
      audio.removeEventListener("pause", handlePause);
      audio.removeEventListener("waiting", handleWaiting);
      audio.removeEventListener("error", handleError);
      audio.removeEventListener("stalled", handleStalled);
      audio.removeEventListener("loadstart", handleLoadStart);
    };
  }, []);

  const togglePlay = async () => {
    if (!audioRef.current) return;

    try {
      if (isPlaying) {
        await audioRef.current.pause();
        setIsPlaying(false);
      } else {
        setIsLoading(true);
        await audioRef.current.play();
      }
    } catch (err) {
      console.error("Error toggling play:", err);
      setIsPlaying(false);
      setIsLoading(false);
    }
  };

  return (
    <div className="relative flex size-full min-h-screen flex-col group/design-root overflow-x-hidden">
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
                Radio Bethel Chile
              </h1>
              <div className="w-full flex items-center justify-center mt-4 mb-8">
                <div className="h-1 w-30 bg-[var(--primary-color)] rounded-full"></div>
              </div>
              <p className="text-gray-200 text-lg max-w-2xl mx-auto">
                Escucha nuestra radio en vivo y mantente conectado con la
                palabra de Dios.
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
                  {isLoading ? (
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
              <div className="flex items-center justify-center gap-5 pt-2">
                <button
                  className="cursor-pointer flex shrink-0 items-center justify-center rounded-full size-12 text-white hover:text-[var(--primary-color)] transition-all radio-player-button"
                  onClick={() => {
                    if (audioRef.current) {
                      audioRef.current.load();
                      setIsLoading(true);
                    }
                  }}
                >
                  <SkipBack className="size-9" />
                </button>
                <button
                  className="cursor-pointer flex shrink-0 items-center justify-center rounded-full size-12 text-white hover:text-[var(--primary-color)] transition-all radio-player-button"
                  onClick={() => {
                    if (audioRef.current) {
                      audioRef.current.currentTime = Math.max(
                        0,
                        audioRef.current.currentTime - 10
                      );
                    }
                  }}
                >
                  <Rewind className="size-9" />
                </button>
                <button
                  className="cursor-pointer flex shrink-0 items-center justify-center rounded-full size-20 bg-[var(--primary-color)] text-white shadow-md hover:bg-blue-300 transition-all radio-player-button disabled:opacity-50 disabled:cursor-not-allowed"
                  onClick={togglePlay}
                  disabled={isLoading}
                >
                  {isPlaying ? (
                    <Pause className="size-10" />
                  ) : (
                    <Play className="size-10" />
                  )}
                </button>
                <button
                  className="cursor-pointer flex shrink-0 items-center justify-center rounded-full size-12 text-white hover:text-[var(--primary-color)] transition-all radio-player-button"
                  onClick={() => {
                    if (audioRef.current) {
                      audioRef.current.currentTime = Math.min(
                        audioRef.current.duration,
                        audioRef.current.currentTime + 10
                      );
                    }
                  }}
                >
                  <FastForward className="size-9" />
                </button>
                <button
                  className="cursor-pointer flex shrink-0 items-center justify-center rounded-full size-12 text-white hover:text-[var(--primary-color)] transition-all radio-player-button"
                  onClick={() => {
                    if (audioRef.current) {
                      audioRef.current.load();
                      setIsLoading(true);
                    }
                  }}
                >
                  <SkipForward className="size-9" />
                </button>
              </div>
            </div>

            {/* Horarios de Programas */}
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-8">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <Calendar className="size-8 text-[var(--primary-color)]" />
                  <h2 className="text-white text-3xl md:text-4xl font-bold leading-tight tracking-tight">
                    Horarios de Programas
                  </h2>
                </div>
                <p className="text-gray-200 text-lg max-w-2xl mx-auto">
                  Conoce nuestra programación semanal y no te pierdas ningún
                  programa
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
    </div>
  );
};

export default RadioPage;
