"use client";
import React, { useState, useRef, useEffect } from "react";
import { Play, Radio, Volume2, X, Pause, VolumeX } from "lucide-react";

const RadioWidget = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [volume, setVolume] = useState(1);
  const [showVolumeSlider, setShowVolumeSlider] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const volumeTimeoutRef = useRef<NodeJS.Timeout | undefined>(undefined);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleError = (e: ErrorEvent) => {
      console.error("Audio error:", e);
      setError("Error loading radio stream");
      setIsPlaying(false);
      setIsLoading(false);
    };

    const handleCanPlay = () => {
      setIsLoading(false);
      setError(null);
    };

    const handleWaiting = () => {
      setIsLoading(true);
    };

    audio.addEventListener("error", handleError as any);
    audio.addEventListener("canplay", handleCanPlay);
    audio.addEventListener("waiting", handleWaiting);

    return () => {
      audio.removeEventListener("error", handleError as any);
      audio.removeEventListener("canplay", handleCanPlay);
      audio.removeEventListener("waiting", handleWaiting);
    };
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const togglePlay = async () => {
    if (!audioRef.current) return;

    try {
      if (isPlaying) {
        await audioRef.current.pause();
      } else {
        setIsLoading(true);
        await audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    } catch (err) {
      console.error("Error toggling play:", err);
      setError("Error playing radio stream");
      setIsPlaying(false);
      setIsLoading(false);
    }
  };

  const handleVolumeClick = () => {
    setShowVolumeSlider(!showVolumeSlider);
    if (volumeTimeoutRef.current) {
      clearTimeout(volumeTimeoutRef.current);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);

    if (volumeTimeoutRef.current) {
      clearTimeout(volumeTimeoutRef.current);
    }

    volumeTimeoutRef.current = setTimeout(() => {
      setShowVolumeSlider(false);
    }, 2000);
  };

  const toggleMute = () => {
    setVolume(volume === 0 ? 1 : 0);
  };

  return (
    <div
      className={`fixed bottom-4 right-4 z-50 transition-all duration-300 ${
        isVisible ? "translate-y-0" : "translate-y-full opacity-0"
      }`}
    >
      <audio
        ref={audioRef}
        src="https://s38.radiolize.com/radio/8040/radio.mp3"
        preload="none"
        style={{ display: "none" }}
      />
      <div className="bg-gray-900/90 backdrop-blur-sm rounded-lg shadow-xl p-4 w-72 sm:w-80 border border-gray-700/50 shadow-[0_0_15px_rgba(16,185,129,0.1)] hover:shadow-[0_0_20px_rgba(16,185,129,0.15)] transition-all duration-300">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <Radio className="text-emerald-400 drop-shadow-[0_0_8px_rgba(16,185,129,0.3)]" />
            <h3 className="text-sm font-semibold text-emerald-400 drop-shadow-[0_0_8px_rgba(16,185,129,0.2)]">
              Radio Bethel Chile
            </h3>
          </div>
          <button
            onClick={() => {
              setIsVisible(false);
              if (isPlaying) {
                audioRef.current?.pause();
                setIsPlaying(false);
              }
            }}
            className="text-gray-400 hover:text-emerald-400 cursor-pointer transition-colors duration-200"
          >
            <X className="text-md" />
          </button>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={togglePlay}
            disabled={isLoading}
            className="cursor-pointer p-2 rounded-full bg-emerald-500 text-gray-900 hover:bg-emerald-400 transition-all duration-300 disabled:opacity-50 shadow-[0_0_10px_rgba(16,185,129,0.3)] hover:shadow-[0_0_15px_rgba(16,185,129,0.4)]"
          >
            {isLoading ? (
              <div className="w-6 h-6 border-2 border-gray-900 border-t-transparent rounded-full animate-spin" />
            ) : isPlaying ? (
              <Pause className="text-2xl" />
            ) : (
              <Play className="text-2xl" />
            )}
          </button>
          <div className="flex-1">
            <p className="text-xs text-gray-300 truncate">
              {error
                ? error
                : isLoading
                ? "Cargando..."
                : isPlaying
                ? "Transmitiendo en vivo"
                : "Radio en pausa"}
            </p>
            <div className="w-full bg-gray-700/50 rounded-full h-1.5 mt-1 border border-gray-600/30">
              <div
                className="bg-emerald-500 h-1.5 rounded-full transition-all duration-300 shadow-[0_0_8px_rgba(16,185,129,0.3)]"
                style={{ width: isPlaying ? "60%" : "0%" }}
              ></div>
            </div>
          </div>
          <div className="relative">
            <button
              onClick={handleVolumeClick}
              className="cursor-pointer p-2 rounded-full bg-transparent text-gray-400 hover:text-emerald-400 transition-all duration-200 hover:bg-gray-800/50"
            >
              {volume === 0 ? (
                <VolumeX className="text-xl" />
              ) : (
                <Volume2 className="text-xl" />
              )}
            </button>
            {showVolumeSlider && (
              <div className="absolute bottom-full right-0 mb-2 bg-gray-900/95 backdrop-blur-sm p-2 rounded-lg shadow-lg border border-gray-700/50 shadow-[0_0_15px_rgba(16,185,129,0.1)]">
                <div className="flex items-center gap-2">
                  <button
                    onClick={toggleMute}
                    className="text-gray-400 hover:text-emerald-400 transition-colors duration-200"
                  >
                    {volume === 0 ? (
                      <VolumeX className="text-sm" />
                    ) : (
                      <Volume2 className="text-sm" />
                    )}
                  </button>
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.1"
                    value={volume}
                    onChange={handleVolumeChange}
                    className="w-24 accent-emerald-500"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RadioWidget;
