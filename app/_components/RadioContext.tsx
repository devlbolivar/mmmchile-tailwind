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

  useEffect(() => {
    // Initialize audio element
    audioRef.current = new Audio(
      "https://s38.radiolize.com/radio/8040/radio.mp3"
    );

    // Add event listeners
    const audio = audioRef.current;

    const handleCanPlay = () => {
      setIsLoading(false);
      setError(null);
    };

    const handlePlaying = () => {
      setIsLoading(false);
      setError(null);
    };

    const handlePause = () => {
      setIsPlaying(false);
    };

    const handleWaiting = () => {
      setIsLoading(true);
    };

    const handleError = () => {
      setError("Error al reproducir la radio");
      setIsLoading(false);
      setIsPlaying(false);
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
        setIsPlaying(true);
        await audioRef.current.play();
      }
    } catch (err) {
      console.error("Error toggling play:", err);
      setError("Error al reproducir la radio");
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
