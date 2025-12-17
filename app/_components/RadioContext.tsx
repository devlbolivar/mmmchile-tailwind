"use client";
import React, {
  createContext,
  useContext,
  useState,
  useRef,
  useEffect,
  ReactNode,
} from "react";

interface RadioContextType {
  isPlaying: boolean;
  isLoading: boolean;
  error: string | null;
  volume: number;
  showVolumeSlider: boolean;
  togglePlay: () => Promise<void>;
  handleVolumeClick: () => void;
  handleVolumeChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  toggleMute: () => void;
  setShowVolumeSlider: (show: boolean) => void;
}

const RadioContext = createContext<RadioContextType | undefined>(undefined);

export const useRadio = () => {
  const context = useContext(RadioContext);
  if (context === undefined) {
    throw new Error("useRadio must be used within a RadioProvider");
  }
  return context;
};

interface RadioProviderProps {
  children: ReactNode;
}

export const RadioProvider = ({ children }: RadioProviderProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [volume, setVolume] = useState(1);
  const [showVolumeSlider, setShowVolumeSlider] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const volumeTimeoutRef = useRef<NodeJS.Timeout | undefined>(undefined);

  // Ref to keep track of playing state inside event listeners without triggering re-renders
  const isPlayingRef = useRef(isPlaying);

  useEffect(() => {
    isPlayingRef.current = isPlaying;
  }, [isPlaying]);

  useEffect(() => {
    // Initialize audio element with optimized settings for iOS
    const audio = new Audio("https://s38.radiolize.com/radio/8040/radio.mp3");
    audio.preload = "auto";
    // @ts-expect-error - playsInline property exists but might not be in standard definitions
    audio.playsInline = true;
    audioRef.current = audio;

    // Add event listeners
    const handleCanPlay = () => {
      setIsLoading(false);
      setError(null);
    };

    const handlePlaying = () => {
      setIsLoading(false);
      setError(null);

      // Update Media Session State
      if ("mediaSession" in navigator) {
        navigator.mediaSession.playbackState = "playing";
      }
    };

    const handlePause = () => {
      setIsPlaying(false);
      setIsLoading(false); // Force clear loading state

      // Update Media Session State
      if ("mediaSession" in navigator) {
        navigator.mediaSession.playbackState = "paused";
      }
    };

    const handleWaiting = () => {
      setIsLoading(true);
    };

    const handleError = () => {
      // Try to recover from error by reloading
      // Use ref to access current state without adding dependency
      if (audioRef.current && isPlayingRef.current) {
        console.warn("Audio error detected, attempting to recover...");
        setTimeout(() => {
          audioRef.current?.load();
          audioRef.current?.play().catch(e => console.error("Recovery failed", e));
        }, 1000);
      } else {
        setError("Error al reproducir la radio");
        setIsLoading(false);
        setIsPlaying(false);
      }
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

    // Setup Media Session API
    if ("mediaSession" in navigator) {
      navigator.mediaSession.metadata = new MediaMetadata({
        title: "Radio Bethel Chile",
        artist: "Movimiento Misionero Mundial",
        album: "Señal en Vivo",
        artwork: [
          { src: "/web-app-manifest-192x192.png", sizes: "192x192", type: "image/png" },
          { src: "/web-app-manifest-512x512.png", sizes: "512x512", type: "image/png" },
        ],
      });

      navigator.mediaSession.setActionHandler("play", async () => {
        setIsPlaying(true);
        await audio.play();
      });

      navigator.mediaSession.setActionHandler("pause", () => {
        setIsPlaying(false);
        audio.pause();
      });

      navigator.mediaSession.setActionHandler("stop", () => {
        setIsPlaying(false);
        audio.pause();
        audio.currentTime = 0;
      });
    }

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

      // Clear handlers
      if ("mediaSession" in navigator) {
        navigator.mediaSession.setActionHandler("play", null);
        navigator.mediaSession.setActionHandler("pause", null);
        navigator.mediaSession.setActionHandler("stop", null);
      }
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
        setIsPlaying(false);
      } else {
        setIsLoading(true);
        // Ensure AudioContext is resumed (browser policy)
        // Note: Generic Audio element handles this mostly, but good to be aware
        setIsPlaying(true);
        await audioRef.current.play();

        // Ensure Media Session is updated immediately
        if ("mediaSession" in navigator) {
          navigator.mediaSession.playbackState = "playing";
        }
      }
    } catch (err) {
      console.error("Error toggling play:", err);
      // Don't show error immediately on user interaction fail, try to recover or ignore if minor
      if (err instanceof Error && err.name !== 'AbortError') {
        setError("Error al reproducir la radio");
      }
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

  const value: RadioContextType = {
    isPlaying,
    isLoading,
    error,
    volume,
    showVolumeSlider,
    togglePlay,
    handleVolumeClick,
    handleVolumeChange,
    toggleMute,
    setShowVolumeSlider,
  };

  return (
    <RadioContext.Provider value={value}>{children}</RadioContext.Provider>
  );
};
