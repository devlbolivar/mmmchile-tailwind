"use client";
import React, { useState, useEffect } from "react";
import { Download, X, Radio, Smartphone, Share2, PlusSquare } from "lucide-react";
import { usePWA } from "../../hooks/usePWA";

const PWAInstallPrompt = () => {
  const [showPrompt, setShowPrompt] = useState(false);
  const [isInstalling, setIsInstalling] = useState(false);
  const { canInstall, isInstalled, installPWA, showManualInstall } = usePWA();

  useEffect(() => {
    // Mostrar prompt si puede instalar y no está instalado
    // O si es iOS y debemos mostrar instrucciones manuales
    if ((canInstall || showManualInstall) && !isInstalled) {
      // Esperar un poco antes de mostrar el prompt
      const timer = setTimeout(() => {
        setShowPrompt(true);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [canInstall, isInstalled, showManualInstall]);

  const handleInstall = async () => {
    if (showManualInstall) {
      // En iOS no podemos forzar la instalación, solo mostrar instrucciones
      // El usuario tendrá que hacerlo manualmente
      handleDismiss();
      return;
    }

    setIsInstalling(true);
    try {
      const success = await installPWA();
      if (success) {
        setShowPrompt(false);
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

  // No mostrar si ya está instalado o si el usuario rechazó
  if (
    isInstalled ||
    !showPrompt ||
    sessionStorage.getItem("pwa-install-dismissed")
  ) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center p-4 sm:items-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={handleDismiss}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 overflow-hidden animate-in fade-in zoom-in duration-300">
        {/* Header */}
        <div className="bg-gradient-to-r from-emerald-500 to-blue-600 p-6 text-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <Radio className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Instalar App</h3>
                <p className="text-emerald-100 text-sm">Radio Bethel Chile</p>
              </div>
            </div>
            <button
              onClick={handleDismiss}
              className="p-2 rounded-full hover:bg-white/20 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Smartphone className="w-8 h-8 text-emerald-600" />
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">
              {showManualInstall ? "Instalar en iPhone/iPad" : "Instala Radio Bethel Chile"}
            </h4>
            <p className="text-gray-600 text-sm leading-relaxed">
              {showManualInstall
                ? "Para instalar la app en tu dispositivo iOS, sigue estos pasos:"
                : "Accede rápidamente a la radio cristiana, eventos, iglesias y más. Funciona offline y se siente como una app nativa."
              }
            </p>
          </div>

          {/* Features / Instructions */}
          <div className="space-y-3 mb-6">
            {showManualInstall ? (
              <div className="bg-gray-50 p-4 rounded-xl space-y-4 text-left">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                    <Share2 className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">1. Toca 'Compartir'</p>
                    <p className="text-xs text-gray-500 mt-0.5">Busca el ícono en la barra inferior de tu navegador.</p>
                  </div>
                </div>

                <div className="w-full h-px bg-gray-200" />

                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600">
                    <PlusSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">2. Selecciona 'Agregar al inicio'</p>
                    <p className="text-xs text-gray-500 mt-0.5">Desliza hacia abajo en el menú de opciones hasta encontrarlo.</p>
                  </div>
                </div>

                <div className="w-full h-px bg-gray-200" />

                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600">
                    <span className="font-bold text-xs">Add</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">3. Confirma con 'Agregar'</p>
                    <p className="text-xs text-gray-500 mt-0.5">Toca el botón en la esquina superior derecha.</p>
                  </div>
                </div>
              </div>
            ) : (
              <>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  <span>Escucha radio en vivo las 24 horas</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  <span>Funciona sin conexión a internet</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  <span>Navegación rápida tipo app móvil</span>
                </div>
              </>
            )}
          </div>

          {/* Actions */}
          <div className="flex gap-3">
            <button
              onClick={handleDismiss}
              className="flex-1 px-4 py-3 text-gray-600 font-medium rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors"
            >
              {showManualInstall ? "Entendido" : "Ahora no"}
            </button>

            {!showManualInstall && (
              <button
                onClick={handleInstall}
                disabled={isInstalling}
                className="flex-1 px-4 py-3 bg-emerald-500 text-white font-medium rounded-lg hover:bg-emerald-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isInstalling ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Instalando...
                  </>
                ) : (
                  <>
                    <Download className="w-4 h-4" />
                    Instalar
                  </>
                )}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PWAInstallPrompt;
