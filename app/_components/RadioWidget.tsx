"use client";
import React, { useState } from "react";
import {
  Play,
  Radio,
  Volume2,
  Pause,
  VolumeX,
  ChevronRight,
} from "lucide-react";
import { useRadio } from "./RadioContext";
import { motion, AnimatePresence } from "framer-motion";

const RadioWidget = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const {
    isPlaying,
    isLoading,
    error,
    volume,
    showVolumeSlider,
    togglePlay,
    handleVolumeClick,
    handleVolumeChange,
    toggleMute,
  } = useRadio();

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="fixed bottom-4 right-0 z-[9999]">
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ type: "spring", damping: 20, stiffness: 100 }}
            className="bg-gray-900/90 backdrop-blur-md rounded-l-xl shadow-2xl p-4 pr-6 sm:pr-8 border border-gray-700/50 w-72 sm:w-80"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <Radio className="text-emerald-400 drop-shadow-[0_0_8px_rgba(16,185,129,0.3)]" />
                <h3 className="text-sm font-semibold text-emerald-400 drop-shadow-[0_0_8px_rgba(16,185,129,0.2)]">
                  Radio Bethel Chile
                </h3>
              </div>
              <button
                onClick={toggleExpanded}
                className="text-gray-400 hover:text-emerald-400 cursor-pointer transition-colors duration-200 mr-2"
              >
                <ChevronRight className="text-md" />
              </button>
            </div>
            <div className="flex items-center gap-3">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={togglePlay}
                disabled={isLoading}
                className="cursor-pointer p-2 rounded-full bg-emerald-500 text-gray-900 hover:bg-emerald-400 transition-all duration-300 disabled:opacity-50 shadow-[0_0_10px_rgba(16,185,129,0.3)]"
              >
                {isLoading ? (
                  <div className="w-6 h-6 border-2 border-gray-900 border-t-transparent rounded-full animate-spin" />
                ) : isPlaying ? (
                  <Pause className="text-2xl" />
                ) : (
                  <Play className="text-2xl" />
                )}
              </motion.button>
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
                  <motion.div
                    className="bg-emerald-500 h-1.5 rounded-full shadow-[0_0_8px_rgba(16,185,129,0.3)]"
                    initial={{ width: 0 }}
                    animate={{ width: isPlaying ? "80%" : "0%" }}
                    transition={{ duration: 1, repeat: isPlaying ? Infinity : 0, repeatType: "reverse" }}
                  />
                </div>
              </div>
              <div className="relative">
                <button
                  onClick={handleVolumeClick}
                  className="cursor-pointer p-2 rounded-full bg-transparent text-gray-400 hover:text-emerald-400 transition-colors duration-200 hover:bg-gray-800/50"
                >
                  {volume === 0 ? (
                    <VolumeX className="text-xl" />
                  ) : (
                    <Volume2 className="text-xl" />
                  )}
                </button>
                <AnimatePresence>
                  {showVolumeSlider && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute bottom-full right-0 mb-2 bg-gray-900/95 backdrop-blur-sm p-2 rounded-lg shadow-lg border border-gray-700/50"
                    >
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
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {!isExpanded && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            whileHover={{ scale: 1.05 }}
            className="bg-emerald-500 hover:bg-emerald-400 rounded-l-xl p-3 shadow-lg cursor-pointer transition-all duration-300 absolute bottom-0 right-0 group"
            onClick={toggleExpanded}
          >
            <div className="relative">
              <Radio className="text-white text-xl group-hover:rotate-12 transition-transform duration-300" />
              {isPlaying && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white"
                />
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default RadioWidget;

