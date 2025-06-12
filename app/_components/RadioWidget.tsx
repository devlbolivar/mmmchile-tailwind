"use client";
import React, { useState } from "react";
import { Play, Radio, Volume2, X } from "lucide-react";

const RadioWidget = () => {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <div
      className={`fixed bottom-4 right-4 z-50 transition-all duration-300 ${
        isVisible ? "translate-y-0" : "translate-y-full opacity-0"
      }`}
    >
      <div className="bg-[var(--background-light)] rounded-lg shadow-xl p-4 w-72 sm:w-80">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <Radio />
            <h3 className="text-sm font-semibold text-[var(--secondary-color)]">
              Radio Bethel Chile
            </h3>
          </div>
          <button
            onClick={() => {
              setIsVisible(false);
            }}
            className="text-[var(--text-secondary)] hover:text-[var(--primary-color)] cursor-pointer"
          >
            <X className="text-md" />
          </button>
        </div>
        <div className="flex items-center gap-3">
          <button className="p-2 rounded-full bg-[var(--accent-color)] text-[var(--primary-color)] hover:bg-blue-200 transition-colors">
            <Play className="text-2xl" />
          </button>
          <div className="flex-1">
            <p className="text-xs text-[var(--text-secondary)] truncate">
              Transmitiendo en vivo
            </p>
            <div className="w-full bg-gray-200 rounded-full h-1.5 mt-1">
              <div
                className="bg-[var(--primary-color)] h-1.5 rounded-full"
                style={{ width: "60%" }}
              ></div>
            </div>
          </div>
          <button className="p-2 rounded-full bg-transparent text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-colors">
            <Volume2 className="text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default RadioWidget;
