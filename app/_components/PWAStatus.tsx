"use client";
import React, { useState, useEffect } from "react";
import { Wifi, WifiOff, Download, Smartphone } from "lucide-react";
import { usePWA } from "@/hooks/usePWA";

const PWAStatus = () => {
  const [mounted, setMounted] = useState(false);
  const { isOnline, isInstalled, canInstall, needsUpdate } = usePWA();

  useEffect(() => {
    setMounted(true);
  }, []);

  // No renderizar nada hasta que el componente esté montado en el cliente
  if (!mounted) {
    return null;
  }

  return (
    <div className="fixed top-4 left-4 z-40">
      <div className="flex gap-2">
        {/* Indicador de conexión */}
        <div
          className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${
            isOnline
              ? "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400"
              : "bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400"
          }`}
        >
          {isOnline ? (
            <Wifi className="w-3 h-3" />
          ) : (
            <WifiOff className="w-3 h-3" />
          )}
          <span className="hidden sm:inline">
            {isOnline ? "Online" : "Offline"}
          </span>
        </div>

        {/* Indicador PWA */}
        {(isInstalled || canInstall) && (
          <div
            className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${
              isInstalled
                ? "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400"
                : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400"
            }`}
          >
            {isInstalled ? (
              <Smartphone className="w-3 h-3" />
            ) : (
              <Download className="w-3 h-3" />
            )}
            <span className="hidden sm:inline">
              {isInstalled ? "Instalada" : "Instalable"}
            </span>
          </div>
        )}

        {/* Indicador de actualización */}
        {needsUpdate && (
          <div className="flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-400">
            <Download className="w-3 h-3 animate-pulse" />
            <span className="hidden sm:inline">Actualización</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default PWAStatus;
