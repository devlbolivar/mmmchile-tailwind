"use client";
import { useState, useEffect, useCallback } from "react";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

interface PWAState {
  isInstalled: boolean;
  isInstallable: boolean;
  isOnline: boolean;
  needsUpdate: boolean;
  canShowInstallPrompt: boolean;
}

export const usePWAState = () => {
  const [deferredPrompt, setDeferredPrompt] =
    useState<BeforeInstallPromptEvent | null>(null);
  const [state, setState] = useState<PWAState>({
    isInstalled: false,
    isInstallable: false,
    isOnline: true,
    needsUpdate: false,
    canShowInstallPrompt: false,
  });

  // Detección robusta de PWA instalada
  const checkIfInstalled = useCallback(() => {
    if (typeof window === "undefined") return false;

    try {
      // Método 1: display-mode media query (más confiable)
      const isStandalone = window.matchMedia(
        "(display-mode: standalone)"
      ).matches;

      // Método 2: navigator.standalone (iOS Safari)
      const isIOSStandalone =
        (window.navigator as { standalone?: boolean }).standalone === true;

      // Método 3: referrer (Android)
      const isAndroidApp = document.referrer.includes("android-app://");

      // Método 4: Windows PWA detection
      const isWindowsPWA =
        window.matchMedia("(display-mode: minimal-ui)").matches ||
        window.matchMedia("(display-mode: fullscreen)").matches;

      // Método 5: Verificar si está en modo app (Windows/Chrome)
      const isAppMode =
        window.navigator.userAgent.includes("Chrome") &&
        window.screen.height === window.innerHeight &&
        window.screen.width === window.innerWidth &&
        !window.navigator.userAgent.includes("Mobile");

      return (
        isStandalone ||
        isIOSStandalone ||
        isAndroidApp ||
        isWindowsPWA ||
        isAppMode
      );
    } catch (error) {
      console.warn("Error checking PWA installation:", error);
      return false;
    }
  }, []);

  // Detección de capacidades de instalación
  const checkInstallability = useCallback(() => {
    if (typeof window === "undefined") return false;

    // Solo es instalable si:
    // 1. No está ya instalada
    // 2. Hay beforeinstallprompt disponible
    // 3. Es un dispositivo compatible
    const isInstalled = checkIfInstalled();
    const hasPrompt = deferredPrompt !== null;
    const isCompatible = isMobileDevice() || hasPWAFeatures();

    // También verificar que el manifest esté presente
    const hasManifest = document.querySelector('link[rel="manifest"]') !== null;

    return !isInstalled && hasPrompt && isCompatible && hasManifest;
  }, [deferredPrompt, checkIfInstalled]);

  // Detectar dispositivo móvil
  const isMobileDevice = useCallback(() => {
    if (typeof window === "undefined") return false;

    return (
      /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      ) || window.innerWidth < 768
    );
  }, []);

  // Detectar capacidades PWA
  const hasPWAFeatures = useCallback(() => {
    if (typeof window === "undefined") return false;

    return (
      "serviceWorker" in navigator &&
      "PushManager" in window &&
      "Notification" in window
    );
  }, []);

  // Manejar beforeinstallprompt
  const handleBeforeInstallPrompt = useCallback((e: Event) => {
    e.preventDefault();
    const event = e as BeforeInstallPromptEvent;
    setDeferredPrompt(event);
    setState((prev) => ({ ...prev, isInstallable: true }));

    // Debug temporal
    console.log("✅ beforeinstallprompt event received!");
  }, []);

  // Manejar instalación completada
  const handleAppInstalled = useCallback(() => {
    setDeferredPrompt(null);
    setState((prev) => ({
      ...prev,
      isInstalled: true,
      isInstallable: false,
      canShowInstallPrompt: false,
    }));

    // Guardar en localStorage que la app fue instalada
    localStorage.setItem("pwa-installed", "true");
    localStorage.setItem("pwa-installed-timestamp", Date.now().toString());
  }, []);

  // Actualizar estado online/offline
  const updateOnlineStatus = useCallback(() => {
    setState((prev) => ({ ...prev, isOnline: navigator.onLine }));
  }, []);

  // Instalar PWA
  const installPWA = useCallback(async (): Promise<boolean> => {
    if (!deferredPrompt) return false;

    try {
      await deferredPrompt.prompt();
      const choiceResult = await deferredPrompt.userChoice;

      if (choiceResult.outcome === "accepted") {
        setDeferredPrompt(null);
        setState((prev) => ({ ...prev, isInstallable: false }));
        return true;
      }
      return false;
    } catch (error) {
      console.error("Error installing PWA:", error);
      return false;
    }
  }, [deferredPrompt]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Estado inicial - verificar tanto detección automática como localStorage
    const isInstalledByDetection = checkIfInstalled();
    const isInstalledByStorage =
      localStorage.getItem("pwa-installed") === "true";

    // Si está instalada por cualquiera de los dos métodos, considerarla instalada
    const isInstalled = isInstalledByDetection || isInstalledByStorage;

    // Debug temporal
    console.log("🔍 PWA Debug:", {
      isInstalledByDetection,
      isInstalledByStorage,
      isInstalled,
      hasManifest: !!document.querySelector('link[rel="manifest"]'),
      userAgent: navigator.userAgent,
      isMobile: isMobileDevice(),
      hasPWAFeatures: hasPWAFeatures(),
      deferredPrompt: !!deferredPrompt,
    });

    setState((prev) => ({ ...prev, isInstalled }));

    // Event listeners
    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    window.addEventListener("appinstalled", handleAppInstalled);
    window.addEventListener("online", updateOnlineStatus);
    window.addEventListener("offline", updateOnlineStatus);

    // Media query para cambios en display mode
    const mediaQuery = window.matchMedia("(display-mode: standalone)");
    const handleDisplayModeChange = () => {
      const isInstalled = checkIfInstalled();
      setState((prev) => ({ ...prev, isInstalled }));
    };
    mediaQuery.addEventListener("change", handleDisplayModeChange);

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt
      );
      window.removeEventListener("appinstalled", handleAppInstalled);
      window.removeEventListener("online", updateOnlineStatus);
      window.removeEventListener("offline", updateOnlineStatus);
      mediaQuery.removeEventListener("change", handleDisplayModeChange);
    };
  }, [
    checkIfInstalled,
    handleBeforeInstallPrompt,
    handleAppInstalled,
    updateOnlineStatus,
  ]);

  // Actualizar canShowInstallPrompt cuando cambien las dependencias
  useEffect(() => {
    const canShow = checkInstallability() && state.isOnline;
    setState((prev) => ({ ...prev, canShowInstallPrompt: canShow }));
  }, [checkInstallability, state.isOnline]);

  // Función para limpiar el estado de instalación (útil para testing)
  const clearInstallationState = useCallback(() => {
    localStorage.removeItem("pwa-installed");
    localStorage.removeItem("pwa-installed-timestamp");
    setState((prev) => ({
      ...prev,
      isInstalled: false,
      isInstallable: false,
      canShowInstallPrompt: false,
    }));
  }, []);

  return {
    ...state,
    installPWA,
    deferredPrompt,
    clearInstallationState,
  };
};
