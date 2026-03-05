"use client";
import React from "react";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Calendar,
  Clock,
  RefreshCw,
} from "lucide-react";
import RadioSeoContent from "../_components/RadioSeoContent";
import { useRadio } from "../_components/RadioContext";

const RadioClient = () => {
  const {
    isPlaying,
    isLoading,
    error,
    volume,
    togglePlay,
    handleVolumeChange,
    toggleMute,
  } = useRadio();

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
      { time: "05:00 PM", program: "The Bible Project" },
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
    <div
      className="relative flex size-full min-h-screen flex-col overflow-x-hidden"
      style={{ backgroundColor: "var(--bg-deep)" }}
    >
      {/* ── Page Hero ── */}
      <div className="page-hero">
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-white text-4xl md:text-5xl font-bold leading-tight tracking-tight">
            Radio Bethel Chile
          </h1>
          <div className="w-full flex items-center justify-center mt-4 mb-6">
            <div className="h-1 w-16 bg-[var(--primary-color)] rounded-full" />
          </div>
          <p className="text-[var(--text-muted)] text-lg max-w-2xl mx-auto">
            Transmisión en vivo 24/7 — predicaciones, adoración y palabra de Dios
          </p>
        </div>
      </div>

      <main
        className="flex-1 container mx-auto px-6 pb-20 pt-8"
        style={{ backgroundColor: "var(--bg-mid)" }}
      >
        {/* ── Player Card ── */}
        <div
          className={`max-w-lg mx-auto mb-14 rounded-2xl p-8 flex flex-col items-center gap-6 transition-all duration-500 ${
            isPlaying ? "radio-playing-glow" : ""
          }`}
          style={{
            backgroundColor: "var(--bg-card)",
            border: "1px solid var(--border-subtle)",
          }}
        >
          {/* Logo */}
          <div
            className="bg-center bg-no-repeat aspect-square rounded-xl size-40 shadow-lg bg-contain relative"
            style={{
              backgroundImage: "url('/images/logo-bethel.png')",
              boxShadow: isPlaying
                ? "0 0 32px rgba(59,130,246,0.4)"
                : "0 4px 20px rgba(0,0,0,0.4)",
            }}
          >
            {/* Audio wave when playing */}
            {isPlaying && (
              <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 flex items-end gap-1 h-6">
                {[0, 1, 2, 3, 4].map((i) => (
                  <span
                    key={i}
                    className="audio-wave-bar h-full"
                    style={{ animationDelay: `${i * 0.15}s` }}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Status */}
          <div className="text-center mt-4">
            <p className="text-white text-2xl font-bold leading-tight">
              Radio Bethel Chile
            </p>
            <p className="mt-1 text-sm font-medium">
              {error ? (
                <span className="text-red-400">Error: {error}</span>
              ) : isLoading ? (
                <span className="text-[var(--text-muted)]">Cargando...</span>
              ) : isPlaying ? (
                <span className="live-pill">
                  <span className="w-1.5 h-1.5 bg-red-400 rounded-full animate-pulse" />
                  EN VIVO
                </span>
              ) : (
                <span className="text-[var(--text-muted)]">
                  Listo para reproducir
                </span>
              )}
            </p>
          </div>

          {/* Play / Pause button */}
          <button
            className="flex items-center justify-center rounded-full size-20 text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105"
            onClick={togglePlay}
            disabled={isLoading}
            style={{
              backgroundColor: "var(--primary-color)",
              boxShadow: isPlaying
                ? "0 0 20px rgba(59,130,246,0.5)"
                : "0 4px 12px rgba(59,130,246,0.3)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = "var(--primary-dark)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = "var(--primary-color)";
            }}
            aria-label={isPlaying ? "Pausar radio" : "Reproducir radio"}
          >
            {isLoading ? (
              <RefreshCw className="size-9 animate-spin" />
            ) : isPlaying ? (
              <Pause className="size-9" />
            ) : (
              <Play className="size-9 ml-1" />
            )}
          </button>

          {/* Volume */}
          <div className="flex items-center gap-3 w-full max-w-xs">
            <button
              onClick={toggleMute}
              className="text-[var(--text-muted)] hover:text-white transition-colors"
              title={volume === 0 ? "Activar sonido" : "Silenciar"}
              aria-label={volume === 0 ? "Activar sonido" : "Silenciar"}
            >
              {volume === 0 ? (
                <VolumeX className="size-5" />
              ) : (
                <Volume2 className="size-5" />
              )}
            </button>
            <input
              type="range"
              min="0"
              max="1"
              step="0.05"
              value={volume}
              onChange={handleVolumeChange}
              className="flex-1 accent-[var(--primary-color)] cursor-pointer"
              title={`Volumen: ${Math.round(volume * 100)}%`}
              aria-label="Control de volumen"
            />
            <span className="text-[var(--text-subtle)] text-xs min-w-[2.5rem] text-right">
              {Math.round(volume * 100)}%
            </span>
          </div>
        </div>

        {/* ── Schedule ── */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-3">
              <Calendar className="size-7 text-[var(--primary-color)]" />
              <h2 className="text-white text-3xl md:text-4xl font-bold leading-tight">
                Programación Cristiana
              </h2>
            </div>
            <p className="text-[var(--text-muted)] text-base max-w-2xl mx-auto">
              Predicaciones, estudios bíblicos y música de adoración para toda la semana
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {[
              { label: "Lunes a Viernes", items: programSchedule.weekdays },
              { label: "Sábados", items: programSchedule.saturday },
              { label: "Domingos", items: programSchedule.sunday },
            ].map(({ label, items }) => (
              <div
                key={label}
                className="rounded-xl p-6"
                style={{
                  backgroundColor: "var(--bg-card)",
                  border: "1px solid var(--border-subtle)",
                }}
              >
                <div className="text-center mb-5">
                  <h3 className="text-white text-lg font-bold mb-2">{label}</h3>
                  <div
                    className="h-0.5 w-16 rounded-full mx-auto"
                    style={{ backgroundColor: "var(--primary-color)" }}
                  />
                </div>
                <div className="space-y-2">
                  {items.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3 rounded-lg transition-colors duration-150"
                      style={{ backgroundColor: "var(--bg-raised)" }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.borderColor = "var(--border-blue)";
                        (e.currentTarget as HTMLElement).style.backgroundColor = "var(--bg-raised)";
                        (e.currentTarget as HTMLElement).style.opacity = "0.9";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.opacity = "1";
                      }}
                    >
                      <div
                        className="flex items-center gap-1.5 font-semibold min-w-[76px]"
                        style={{ color: "var(--primary-light)" }}
                      >
                        <Clock className="size-3.5 flex-shrink-0" />
                        <span className="text-xs">{item.time}</span>
                      </div>
                      <div className="text-white text-sm flex-1">{item.program}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <RadioSeoContent />
    </div>
  );
};

export default RadioClient;
