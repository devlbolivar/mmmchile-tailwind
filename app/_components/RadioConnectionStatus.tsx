"use client";
import React, { useState, useEffect } from "react";
import { Wifi, WifiOff, Radio, AlertCircle } from "lucide-react";

const RadioConnectionStatus = () => {
  const [isOnline, setIsOnline] = useState(true);
  const [connectionQuality, setConnectionQuality] = useState<
    "good" | "poor" | "offline"
  >("good");

  useEffect(() => {
    const updateOnlineStatus = () => {
      setIsOnline(navigator.onLine);
    };

    // Verificar estado inicial
    updateOnlineStatus();

    // Escuchar cambios de conexión
    window.addEventListener("online", updateOnlineStatus);
    window.addEventListener("offline", updateOnlineStatus);

    // Simular verificación de calidad de conexión
    const checkConnectionQuality = () => {
      if (!navigator.onLine) {
        setConnectionQuality("offline");
        return;
      }

      // Simular verificación de calidad basada en navigator.connection si está disponible
      if ("connection" in navigator) {
        const connection = (navigator as any).connection;
        if (
          connection.effectiveType === "slow-2g" ||
          connection.effectiveType === "2g"
        ) {
          setConnectionQuality("poor");
        } else {
          setConnectionQuality("good");
        }
      } else {
        // Fallback: asumir buena conexión si no se puede verificar
        setConnectionQuality("good");
      }
    };

    checkConnectionQuality();
    const interval = setInterval(checkConnectionQuality, 10000); // Verificar cada 10 segundos

    return () => {
      window.removeEventListener("online", updateOnlineStatus);
      window.removeEventListener("offline", updateOnlineStatus);
      clearInterval(interval);
    };
  }, []);

  if (isOnline && connectionQuality === "good") {
    return null; // No mostrar nada si la conexión es buena
  }

  return (
    <div
      className={`fixed top-16 left-0 right-0 z-40 p-3 ${
        connectionQuality === "offline" ? "bg-red-500/90" : "bg-yellow-500/90"
      } backdrop-blur-sm`}
    >
      <div className="flex items-center justify-center gap-2 text-white">
        {connectionQuality === "offline" ? (
          <>
            <WifiOff className="w-4 h-4" />
            <span className="text-sm font-medium">
              Sin conexión a internet - La radio no está disponible
            </span>
          </>
        ) : (
          <>
            <Wifi className="w-4 h-4" />
            <span className="text-sm font-medium">
              Conexión lenta - La radio puede experimentar interrupciones
            </span>
          </>
        )}
      </div>
    </div>
  );
};

export default RadioConnectionStatus;
