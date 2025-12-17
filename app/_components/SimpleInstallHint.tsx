"use client";
import { useState, useEffect } from "react";
import { Smartphone, X } from "lucide-react";
import { usePWA } from "../../hooks/usePWA";

const SimpleInstallHint = () => {
  const [showHint, setShowHint] = useState(false);
  const { isInstalled, canShowInstallPrompt } = usePWA();

  useEffect(() => {
    // Solo mostrar si:
    // 1. No está instalada
    // 2. No puede mostrar prompt (no hay beforeinstallprompt)
    // 3. Después de 5 segundos
    const timer = setTimeout(() => {
      if (!isInstalled && !canShowInstallPrompt) {
        setShowHint(true);
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, [isInstalled, canShowInstallPrompt]);

  if (!showHint) return null;

  return (
    <div className="fixed bottom-24 left-4 right-4 bg-blue-600 text-white p-3 rounded-lg shadow-lg z-[70] md:left-auto md:right-4 md:max-w-sm">
      <div className="flex items-center gap-3">
        <Smartphone className="w-5 h-5 flex-shrink-0" />
        <div className="flex-1">
          <p className="text-sm font-medium">
            Para instalar la app, busca el ícono de instalación en la barra de
            direcciones
          </p>
        </div>
        <button
          onClick={() => setShowHint(false)}
          className="p-1 rounded-full hover:bg-blue-700 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default SimpleInstallHint;
