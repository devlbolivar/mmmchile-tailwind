"use client";
import React, { useState } from "react";
import { Download, Smartphone } from "lucide-react";
import { usePWAState } from "../../hooks/usePWAState";

interface PWAInstallButtonProps {
  variant?: "banner" | "button" | "floating";
  className?: string;
}

const PWAInstallButton = ({
  variant = "button",
  className = "",
}: PWAInstallButtonProps) => {
  const [isInstalling, setIsInstalling] = useState(false);
  const { isInstalled, canShowInstallPrompt, isOnline, installPWA } =
    usePWAState();

  // No mostrar si ya está instalado, está offline, o no puede mostrar prompt
  if (isInstalled || !isOnline || !canShowInstallPrompt) {
    return null;
  }

  const handleInstall = async () => {
    if (isInstalling) return;

    setIsInstalling(true);

    try {
      const success = await installPWA();

      if (success) {
        // Mostrar notificación de éxito
        if ("Notification" in window && Notification.permission === "granted") {
          new Notification("MMM Chile", {
            body: "¡App instalada exitosamente! Ahora puedes acceder a MMM Chile desde tu pantalla de inicio.",
            icon: "/web-app-manifest-192x192.png",
            badge: "/favicon-96x96.png",
            tag: "mmm-chile-app-installed",
          });
        }
      }
    } catch (error) {
      console.error("Error installing PWA:", error);
    } finally {
      setIsInstalling(false);
    }
  };

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
              <h3 className="font-semibold">Instala la App MMM Chile</h3>
              <p className="text-sm text-emerald-100">
                Accede rápidamente a MMM Chile desde tu pantalla de inicio
              </p>
            </div>
          </div>
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
              <p className="text-xs text-gray-600">MMM Chile</p>
            </div>
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
