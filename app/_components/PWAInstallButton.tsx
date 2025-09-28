"use client";
import React, { useState, useEffect } from "react";
import { Download, Smartphone, X } from "lucide-react";
import { usePWA } from "../../hooks/usePWA";

interface PWAInstallButtonProps {
  variant?: "banner" | "button" | "floating";
  className?: string;
}

const PWAInstallButton = ({
  variant = "button",
  className = "",
}: PWAInstallButtonProps) => {
  const [showPrompt, setShowPrompt] = useState(false);
  const [isInstalling, setIsInstalling] = useState(false);
  const [isOnline, setIsOnline] = useState(true);
  const [isPWA, setIsPWA] = useState(false);
  const { canInstall, isInstalled, installPWA } = usePWA();

  useEffect(() => {
    // Verificar estado online/offline y PWA
    const updateStatus = () => {
      setIsOnline(navigator.onLine);

      // Verificar si estamos en modo PWA
      const isStandalone =
        window.matchMedia("(display-mode: standalone)").matches ||
        (window.navigator as { standalone?: boolean }).standalone === true ||
        document.referrer.includes("android-app://");

      setIsPWA(isStandalone);
    };

    // Verificar estado inicial
    updateStatus();

    // Escuchar cambios de conectividad y display mode
    window.addEventListener("online", updateStatus);
    window.addEventListener("offline", updateStatus);

    const mediaQuery = window.matchMedia("(display-mode: standalone)");
    mediaQuery.addEventListener("change", updateStatus);

    return () => {
      window.removeEventListener("online", updateStatus);
      window.removeEventListener("offline", updateStatus);
      mediaQuery.removeEventListener("change", updateStatus);
    };
  }, []);

  useEffect(() => {
    // Mostrar prompt solo si puede instalar, no está instalado, está online y NO estamos en PWA
    if (canInstall && !isInstalled && isOnline && !isPWA) {
      setShowPrompt(true);
    }
  }, [canInstall, isInstalled, isOnline, isPWA]);

  const handleInstall = async () => {
    setIsInstalling(true);
    try {
      const success = await installPWA();
      if (success) {
        setShowPrompt(false);
        // Mostrar notificación de éxito
        if ("Notification" in window && Notification.permission === "granted") {
          new Notification("Radio Bethel Chile", {
            body: "¡App instalada exitosamente! Ahora puedes acceder a la radio desde tu pantalla de inicio.",
            icon: "/web-app-manifest-192x192.png",
            badge: "/favicon-96x96.png",
            tag: "radio-app-installed",
          });
        }
      }
    } catch (error) {
      console.error("Error installing PWA:", error);
    } finally {
      setIsInstalling(false);
    }
  };

  const handleDismiss = () => {
    setShowPrompt(false);
    // Recordar que el usuario rechazó la instalación por esta sesión
    sessionStorage.setItem("pwa-install-dismissed", "true");
  };

  // No mostrar si ya está instalado, si el usuario rechazó, si está offline, o si estamos en PWA
  if (
    isInstalled ||
    !showPrompt ||
    sessionStorage.getItem("pwa-install-dismissed") ||
    !isOnline ||
    isPWA
  ) {
    return null;
  }

  // Variante banner
  if (variant === "banner") {
    return (
      <div
        className={`bg-gradient-to-r from-emerald-500 to-blue-600 text-white p-4 rounded-lg shadow-lg ${className}`}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <Smartphone className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-semibold">Instala la App de Radio</h3>
              <p className="text-sm text-emerald-100">
                Accede rápidamente a Radio Bethel Chile
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleInstall}
              disabled={isInstalling}
              className="px-4 py-2 bg-white text-emerald-600 rounded-lg font-medium hover:bg-emerald-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
            >
              {isInstalling ? (
                <>
                  <div className="w-4 h-4 border-2 border-emerald-600 border-t-transparent rounded-full animate-spin" />
                  Instalando...
                </>
              ) : (
                <>
                  <Download className="w-4 h-4" />
                  Instalar
                </>
              )}
            </button>
            <button
              onClick={handleDismiss}
              className="p-1 rounded-full hover:bg-white/20 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Variante floating
  if (variant === "floating") {
    return (
      <div className={`fixed bottom-20 right-4 z-50 ${className}`}>
        <div className="bg-white rounded-lg shadow-xl border border-gray-200 p-4 max-w-xs">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
              <Smartphone className="w-4 h-4 text-white" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 text-sm">
                Instalar App
              </h4>
              <p className="text-xs text-gray-600">Radio Bethel Chile</p>
            </div>
            <button
              onClick={handleDismiss}
              className="ml-auto p-1 rounded-full hover:bg-gray-100 transition-colors"
            >
              <X className="w-4 h-4 text-gray-500" />
            </button>
          </div>
          <button
            onClick={handleInstall}
            disabled={isInstalling}
            className="w-full px-3 py-2 bg-emerald-500 text-white rounded-lg text-sm font-medium hover:bg-emerald-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isInstalling ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                Instalando...
              </>
            ) : (
              <>
                <Download className="w-4 h-4" />
                Instalar App
              </>
            )}
          </button>
        </div>
      </div>
    );
  }

  // Variante button (default)
  return (
    <button
      onClick={handleInstall}
      disabled={isInstalling}
      className={`px-4 py-2 bg-emerald-500 text-white rounded-lg font-medium hover:bg-emerald-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 ${className}`}
    >
      {isInstalling ? (
        <>
          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
          Instalando...
        </>
      ) : (
        <>
          <Download className="w-4 h-4" />
          Instalar App
        </>
      )}
    </button>
  );
};

export default PWAInstallButton;
