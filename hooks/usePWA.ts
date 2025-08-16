"use client";
import { useState, useEffect, useCallback } from "react";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

interface PWAState {
  isInstallable: boolean;
  isInstalled: boolean;
  isOnline: boolean;
  needsUpdate: boolean;
}

export const usePWA = () => {
  const [deferredPrompt, setDeferredPrompt] =
    useState<BeforeInstallPromptEvent | null>(null);
  const [pwaState, setPwaState] = useState<PWAState>({
    isInstallable: false,
    isInstalled: false,
    isOnline: true,
    needsUpdate: false,
  });

  // Verificar si la app está instalada
  const checkIfInstalled = useCallback(() => {
    if (typeof window === "undefined" || typeof document === "undefined")
      return;

    try {
      const isInstalled = !!(
        window.matchMedia("(display-mode: standalone)").matches ||
        (window.navigator as any).standalone === true ||
        (document.referrer && document.referrer.includes("android-app://"))
      );

      setPwaState((prev) => ({ ...prev, isInstalled }));
    } catch (error) {
      console.warn("Error checking PWA installation status:", error);
    }
  }, []);

  // Verificar estado online/offline
  const updateOnlineStatus = useCallback(() => {
    if (typeof navigator === "undefined") return;
    setPwaState((prev) => ({ ...prev, isOnline: navigator.onLine }));
  }, []);

  // Manejar prompt de instalación
  const handleBeforeInstallPrompt = useCallback((e: Event) => {
    e.preventDefault();
    const event = e as BeforeInstallPromptEvent;
    setDeferredPrompt(event);
    setPwaState((prev) => ({ ...prev, isInstallable: true }));
  }, []);

  // Manejar instalación completada
  const handleAppInstalled = useCallback(() => {
    console.log("PWA installed successfully");
    setDeferredPrompt(null);
    setPwaState((prev) => ({
      ...prev,
      isInstallable: false,
      isInstalled: true,
    }));
  }, []);

  useEffect(() => {
    // Solo ejecutar en el cliente
    if (typeof window === "undefined") return;

    // Verificar estado inicial
    checkIfInstalled();
    updateOnlineStatus();

    // Registrar Service Worker
    if ("serviceWorker" in navigator) {
      registerServiceWorker();
    }

    // Event listeners
    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    window.addEventListener("appinstalled", handleAppInstalled);
    window.addEventListener("online", updateOnlineStatus);
    window.addEventListener("offline", updateOnlineStatus);

    // Verificar cambios en display mode
    const mediaQuery = window.matchMedia("(display-mode: standalone)");
    mediaQuery.addEventListener("change", checkIfInstalled);

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt
      );
      window.removeEventListener("appinstalled", handleAppInstalled);
      window.removeEventListener("online", updateOnlineStatus);
      window.removeEventListener("offline", updateOnlineStatus);
      mediaQuery.removeEventListener("change", checkIfInstalled);
    };
  }, [
    checkIfInstalled,
    updateOnlineStatus,
    handleBeforeInstallPrompt,
    handleAppInstalled,
  ]);

  // Registrar Service Worker
  const registerServiceWorker = async () => {
    // Solo ejecutar en el cliente
    if (typeof navigator === "undefined" || !("serviceWorker" in navigator))
      return;

    try {
      const registration = await navigator.serviceWorker.register("/sw.js", {
        scope: "/",
      });

      console.log("Service Worker registered successfully:", registration);

      // Esperar a que el worker esté activo antes de continuar
      if (registration.installing) {
        registration.installing.addEventListener("statechange", () => {
          if (registration.installing?.state === "installed") {
            console.log("Service Worker installed, waiting for activation");
          }
        });
      }

      // Verificar si el worker ya está activo
      if (registration.active) {
        console.log("Service Worker is already active");
      }

      // Verificar actualizaciones
      registration.addEventListener("updatefound", () => {
        const newWorker = registration.installing;
        if (newWorker) {
          newWorker.addEventListener("statechange", () => {
            if (
              newWorker.state === "installed" &&
              navigator.serviceWorker.controller
            ) {
              console.log("New service worker available");
              setPwaState((prev) => ({ ...prev, needsUpdate: true }));
            }
          });
        }
      });

      // Verificar si hay un worker esperando
      if (registration.waiting) {
        setPwaState((prev) => ({ ...prev, needsUpdate: true }));
      }
    } catch (error) {
      console.error("Service Worker registration failed:", error);
    }
  };

  // Función para instalar la PWA
  const installPWA = async (): Promise<boolean> => {
    if (!deferredPrompt) return false;

    try {
      await deferredPrompt.prompt();
      const choiceResult = await deferredPrompt.userChoice;

      if (choiceResult.outcome === "accepted") {
        console.log("User accepted the install prompt");
        setDeferredPrompt(null);
        setPwaState((prev) => ({ ...prev, isInstallable: false }));
        return true;
      } else {
        console.log("User dismissed the install prompt");
        return false;
      }
    } catch (error) {
      console.error("Error during PWA installation:", error);
      return false;
    }
  };

  // Función para actualizar la PWA
  const updatePWA = async () => {
    try {
      const registration = await navigator.serviceWorker.getRegistration();
      if (registration?.waiting) {
        registration.waiting.postMessage({ type: "SKIP_WAITING" });
        setPwaState((prev) => ({ ...prev, needsUpdate: false }));
        window.location.reload();
      }
    } catch (error) {
      console.error("Error updating PWA:", error);
    }
  };

  // Función para compartir contenido
  const shareContent = async (data: {
    title?: string;
    text?: string;
    url?: string;
  }) => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: data.title || "MMM Chile",
          text: data.text || "Movimiento Misionero Mundial Chile",
          url: data.url || window.location.href,
        });
        return true;
      } catch (error) {
        console.error("Error sharing:", error);
        return false;
      }
    }

    // Fallback para navegadores sin Web Share API
    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(data.url || window.location.href);
        return true;
      } catch (error) {
        console.error("Error copying to clipboard:", error);
        return false;
      }
    }

    return false;
  };

  // Función para verificar capacidades del dispositivo
  const getDeviceCapabilities = () => {
    // Verificar si estamos en el cliente
    if (typeof window === "undefined" || typeof navigator === "undefined") {
      return {
        hasServiceWorker: false,
        hasNotifications: false,
        hasBackgroundSync: false,
        hasShare: false,
        hasClipboard: false,
        hasCamera: false,
        hasGeolocation: false,
        hasInstallPrompt: false,
        isStandalone: false,
      };
    }

    return {
      hasServiceWorker: "serviceWorker" in navigator,
      hasNotifications: "Notification" in window,
      hasBackgroundSync:
        "serviceWorker" in navigator &&
        "sync" in window.ServiceWorkerRegistration.prototype,
      hasShare: "share" in navigator,
      hasClipboard: "clipboard" in navigator,
      hasCamera:
        "mediaDevices" in navigator && "getUserMedia" in navigator.mediaDevices,
      hasGeolocation: "geolocation" in navigator,
      hasInstallPrompt: deferredPrompt !== null,
      isStandalone: pwaState.isInstalled,
    };
  };

  return {
    ...pwaState,
    installPWA,
    updatePWA,
    shareContent,
    getDeviceCapabilities,
    canInstall: pwaState.isInstallable && !pwaState.isInstalled,
  };
};
