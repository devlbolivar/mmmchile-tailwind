"use client";
import React, { useState } from "react";
import { Download, Smartphone } from "lucide-react";
import { usePWA } from "../../hooks/usePWA";

interface PWAInstallButtonProps {
  variant?: "banner" | "button" | "floating";
  className?: string;
}

const PWAInstallButton = ({
  variant = "button",
  className = "",
}: PWAInstallButtonProps) => {
  // Estado para controlar el modal de instrucciones iOS
  const [showIOSInstructions, setShowIOSInstructions] = useState(false);
  const [isInstalling, setIsInstalling] = useState(false);
  const { isInstalled, canInstall, isOnline, installPWA, showManualInstall } =
    usePWA();

  // No mostrar si ya está instalado, está offline, o no puede instalar (ni nativo ni manual)
  if (isInstalled || !isOnline || (!canInstall && !showManualInstall)) {
    return null;
  }

  const handleInstall = async () => {
    if (showManualInstall) {
      setShowIOSInstructions(true);
      return;
    }

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

  const IOSInstructionsModal = () => {
    if (!showIOSInstructions) return null;

    return (
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
        <div className="bg-white rounded-2xl max-w-sm w-full p-6 shadow-2xl relative animate-in fade-in zoom-in duration-200">
          <button
            onClick={() => setShowIOSInstructions(false)}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 p-1"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
          </button>

          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mb-4 shadow-inner">
              <img src="/web-app-manifest-192x192.png" alt="App Icon" className="w-12 h-12 rounded-xl" />
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-2">Instalar en iPhone / iPad</h3>
            <p className="text-gray-600 text-sm mb-6">Sigue estos pasos para instalar la app:</p>

            <div className="w-full space-y-4 text-left">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-bold">1</div>
                <p className="text-sm text-gray-700">Toca el botón <span className="font-semibold text-blue-600">Compartir</span> <span className="inline-block align-middle"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-share-2"><circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" /><line x1="8.59" x2="15.42" y1="13.51" y2="17.49" /><line x1="15.41" x2="8.59" y1="6.51" y2="10.49" /></svg></span> en la barra de navegación.</p>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-bold">2</div>
                <p className="text-sm text-gray-700">Desliza hacia abajo y selecciona <span className="font-semibold text-gray-900">"Agregar a Inicio"</span>.</p>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-bold">3</div>
                <p className="text-sm text-gray-700">Confirma tocando <span className="font-semibold text-blue-600">Agregar</span> en la esquina superior derecha.</p>
              </div>
            </div>

            <button
              onClick={() => setShowIOSInstructions(false)}
              className="mt-8 w-full py-2.5 bg-gray-900 text-white rounded-xl font-medium hover:bg-gray-800 transition-colors"
            >
              Entendido
            </button>
          </div>
        </div>
      </div>
    );
  };

  // Variante banner
  if (variant === "banner") {
    return (
      <>
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
                  {showManualInstall
                    ? "Instala en tu iPhone/iPad para mejor experiencia"
                    : "Accede rápidamente a MMM Chile desde tu pantalla de inicio"}
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
                  {showManualInstall ? "Ver cómo" : "Instalar"}
                </>
              )}
            </button>
          </div>
        </div>
        <IOSInstructionsModal />
      </>
    );
  }

  // Variante floating
  if (variant === "floating") {
    return (
      <>
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
                  {showManualInstall ? "Instrucciones iOS" : "Instalar App"}
                </>
              )}
            </button>
          </div>
        </div>
        <IOSInstructionsModal />
      </>
    );
  }

  // Variante button (default)
  return (
    <>
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
            {showManualInstall ? "Instalar en iOS" : "Instalar App"}
          </>
        )}
      </button>
      <IOSInstructionsModal />
    </>
  );
};

export default PWAInstallButton;
