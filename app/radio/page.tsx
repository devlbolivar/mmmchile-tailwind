"use client";
import React, { useState, useRef, useEffect } from "react";
import {
  SkipBack,
  Rewind,
  Play,
  FastForward,
  SkipForward,
  Pause,
} from "lucide-react";

const RadioPage = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

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
            <div className="flex flex-col items-center gap-6 bg-white/10 backdrop-blur-sm px-6 py-10 text-white rounded-xl shadow-lg max-w-2xl mx-auto">
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
                  {isLoading
                    ? "Cargando..."
                    : isPlaying
                    ? "En vivo"
                    : "En pausa"}
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
          </div>
        </main>
      </div>
    </div>
  );
};

export default RadioPage;
