"use client";
import { useState, useEffect } from "react";

interface PWAContextType {
  isPWA: boolean;
  isMobile: boolean;
  isStandalone: boolean;
  canInstall: boolean;
  isOnline: boolean;
}

export const usePWAContext = (): PWAContextType => {
  const [pwaContext, setPwaContext] = useState<PWAContextType>({
    isPWA: false,
    isMobile: false,
    isStandalone: false,
    canInstall: false,
    isOnline: true,
  });

  useEffect(() => {
    if (typeof window === "undefined") return;

    const checkPWAStatus = () => {
      // Verificar si estamos en modo standalone (PWA instalada)
      const isStandalone =
        window.matchMedia("(display-mode: standalone)").matches ||
        (window.navigator as any).standalone === true ||
        document.referrer.includes("android-app://");

      // Verificar si es móvil
      const isMobile =
        window.innerWidth < 768 ||
        /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        );

      // Verificar si está online
      const isOnline = navigator.onLine;

      // Verificar si puede instalar (básico)
      const canInstall = !isStandalone && isMobile;

      setPwaContext({
        isPWA: isStandalone,
        isMobile,
        isStandalone,
        canInstall,
        isOnline,
      });
    };

    // Verificar estado inicial
    checkPWAStatus();

    // Escuchar cambios en display mode
    const mediaQuery = window.matchMedia("(display-mode: standalone)");
    const handleDisplayModeChange = () => checkPWAStatus();

    mediaQuery.addEventListener("change", handleDisplayModeChange);
    window.addEventListener("online", checkPWAStatus);
    window.addEventListener("offline", checkPWAStatus);
    window.addEventListener("resize", checkPWAStatus);

    return () => {
      mediaQuery.removeEventListener("change", handleDisplayModeChange);
      window.removeEventListener("online", checkPWAStatus);
      window.removeEventListener("offline", checkPWAStatus);
      window.removeEventListener("resize", checkPWAStatus);
    };
  }, []);

  return pwaContext;
};
