"use client";
import React from "react";
import Head from "next/head";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  SkipBack,
  SkipForward,
  Clock,
  Calendar,
  Radio,
  Share2,
} from "lucide-react";
import { useRadio } from "../_components/RadioContext";
import { usePWA } from "../../hooks/usePWA";
import MobileAppNavigation from "../_components/MobileAppNavigation";
import RadioNotifications from "../_components/RadioNotifications";
import RadioConnectionStatus from "../_components/RadioConnectionStatus";
import PWAInstallButton from "../_components/PWAInstallButton";

const RadioPWAPage = () => {
  const { isPWA, isMobile } = usePWA();
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
      { time: "05:00 PM", program: "The Bible project" },
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

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Radio Bethel Chile",
          text: "Escucha Radio Bethel Chile en vivo",
          url: window.location.href,
        });
      } catch (error) {
        console.log("Error sharing:", error);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <RadioConnectionStatus />
      <Head>
        <title>Radio Bethel Chile - App</title>
        <meta
          name="description"
          content="Escucha Radio Bethel Chile en vivo - Radio cristiana con predicaciones, música de adoración y estudios bíblicos las 24 horas del día."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="manifest" href="/radio-app.webmanifest" />
        <meta name="theme-color" content="#10b981" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta name="apple-mobile-web-app-title" content="Radio Bethel" />
        <link rel="apple-touch-icon" href="/web-app-manifest-192x192.png" />
      </Head>

      {/* Header para PWA */}
      {isPWA && (
        <div className="sticky top-0 z-30 bg-black/20 backdrop-blur-md border-b border-white/10">
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
                <Radio className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-white font-bold text-lg">Radio Bethel</h1>
                <p className="text-emerald-400 text-sm">En vivo</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={handleShare}
                className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
              >
                <Share2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}

      <main className={`${isPWA && isMobile ? "pb-20" : "pb-4"} pt-4`}>
        <div className="container mx-auto px-4">
          {/* Reproductor Principal */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-6 shadow-xl border border-white/20">
            <div className="text-center mb-6">
              <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-full flex items-center justify-center shadow-2xl">
                <Radio className="w-16 h-16 text-white" />
              </div>
              <h2 className="text-white text-2xl font-bold mb-2">
                Radio Bethel Chile
              </h2>
              <p className="text-emerald-400 text-lg font-medium">
                {error ? (
                  <span className="text-red-400">Error: {error}</span>
                ) : isLoading ? (
                  "Cargando..."
                ) : isPlaying ? (
                  "En vivo"
                ) : (
                  "Listo para reproducir"
                )}
              </p>
            </div>

            {/* Controles principales */}
            <div className="flex items-center justify-center gap-4 mb-6">
              <button
                className="p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                disabled
                title="No disponible para radio en vivo"
              >
                <SkipBack className="w-6 h-6" />
              </button>

              <button
                onClick={togglePlay}
                disabled={isLoading}
                className="p-4 rounded-full bg-emerald-500 text-white shadow-lg hover:bg-emerald-400 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isPlaying ? (
                  <Pause className="w-8 h-8" />
                ) : (
                  <Play className="w-8 h-8" />
                )}
              </button>

              <button
                className="p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                disabled
                title="No disponible para radio en vivo"
              >
                <SkipForward className="w-6 h-6" />
              </button>
            </div>

            {/* Controles de volumen */}
            <div className="flex items-center justify-center gap-4">
              <button
                onClick={toggleMute}
                className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
              >
                {volume === 0 ? (
                  <VolumeX className="w-5 h-5" />
                ) : (
                  <Volume2 className="w-5 h-5" />
                )}
              </button>
              <div className="flex-1 max-w-48">
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.1"
                  value={volume}
                  onChange={handleVolumeChange}
                  className="w-full accent-emerald-500"
                />
              </div>
              <span className="text-white/70 text-sm min-w-[2rem]">
                {Math.round(volume * 100)}%
              </span>
            </div>
          </div>

          {/* Notificaciones */}
          <div className="mb-6">
            <RadioNotifications />
          </div>

          {/* Botón de instalación PWA */}
          <div className="mb-6">
            <PWAInstallButton variant="banner" />
          </div>

          {/* Programación */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/20">
            <div className="text-center mb-6">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Calendar className="w-6 h-6 text-emerald-400" />
                <h3 className="text-white text-xl font-bold">Programación</h3>
              </div>
              <p className="text-gray-300 text-sm">
                Conoce nuestra programación cristiana semanal
              </p>
            </div>

            <div className="space-y-4">
              {Object.entries(programSchedule).map(([day, programs]) => (
                <div key={day} className="bg-white/5 rounded-lg p-4">
                  <h4 className="text-emerald-400 font-semibold mb-3 capitalize">
                    {day === "weekdays"
                      ? "Lunes a Viernes"
                      : day === "saturday"
                        ? "Sábados"
                        : "Domingos"}
                  </h4>
                  <div className="space-y-2">
                    {programs.map((program, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 p-2 bg-white/5 rounded hover:bg-white/10 transition-colors"
                      >
                        <div className="flex items-center gap-2 text-emerald-400 font-medium min-w-[80px]">
                          <Clock className="w-4 h-4" />
                          <span className="text-sm">{program.time}</span>
                        </div>
                        <div className="text-white text-sm flex-1">
                          {program.program}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Navegación móvil para PWA */}
      {isPWA && isMobile && <MobileAppNavigation />}
    </div>
  );
};

export default RadioPWAPage;
