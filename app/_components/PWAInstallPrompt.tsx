"use client";
import React, { useState, useEffect } from "react";
import { Download, X, Smartphone, Monitor, Share } from "lucide-react";
import { Button } from "@/components/ui/button";
import { usePWA } from "@/hooks/usePWA";
import Image from "next/image";

const PWAInstallPrompt = () => {
  const [mounted, setMounted] = useState(false);
  const {
    canInstall,
    installPWA,
    shareContent,
    isInstalled,
    needsUpdate,
    updatePWA,
  } = usePWA();
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [showUpdatePrompt, setShowUpdatePrompt] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    // Solo ejecutar en el cliente
    if (typeof sessionStorage === "undefined") return;

    // Verificar si el prompt ya fue rechazado en esta sesión
    try {
      const wasPromptDismissed =
        sessionStorage.getItem("pwa-prompt-dismissed") === "true";
      if (wasPromptDismissed) {
        setIsDismissed(true);
        return;
      }
    } catch (error) {
      console.warn("Error accessing sessionStorage:", error);
    }

    // Mostrar prompt después de unos segundos si puede instalar
    if (canInstall && !isDismissed) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 5000); // Esperar 5 segundos antes de mostrar

      return () => clearTimeout(timer);
    }
  }, [canInstall, isDismissed, mounted]);

  useEffect(() => {
    // Mostrar prompt de actualización
    if (needsUpdate) {
      setShowUpdatePrompt(true);
    }
  }, [needsUpdate]);

  useEffect(() => {
    // Ocultar prompt si se instaló
    if (isInstalled) {
      setIsVisible(false);
      setIsDismissed(true);
    }
  }, [isInstalled]);

  const handleInstall = async () => {
    const success = await installPWA();
    if (success) {
      setIsVisible(false);
      setIsDismissed(true);
    }
  };

  const handleDismiss = () => {
    setIsVisible(false);
    setIsDismissed(true);

    // Solo ejecutar en el cliente
    if (typeof sessionStorage !== "undefined") {
      try {
        // Recordar que fue rechazado por esta sesión
        sessionStorage.setItem("pwa-prompt-dismissed", "true");
      } catch (error) {
        console.warn("Error setting sessionStorage:", error);
      }
    }
  };

  const handleUpdate = async () => {
    await updatePWA();
    setShowUpdatePrompt(false);
  };

  const handleShare = async () => {
    // Solo ejecutar en el cliente
    if (typeof window === "undefined") return;

    try {
      const success = await shareContent({
        title: "MMM Chile",
        text: "Descubre el Movimiento Misionero Mundial Chile",
        url: window.location.origin,
      });

      if (success) {
        console.log("Content shared successfully");
        // Opcional: mostrar feedback al usuario
      }
    } catch (error) {
      console.error("Error sharing content:", error);
      // Fallback: copiar URL al clipboard
      try {
        if (typeof navigator !== "undefined" && navigator.clipboard) {
          await navigator.clipboard.writeText(window.location.origin);
          // Opcional: mostrar mensaje "URL copiada"
        }
      } catch (clipboardError) {
        console.error("Clipboard fallback failed:", clipboardError);
      }
    }
  };

  // No renderizar nada hasta que el componente esté montado
  if (!mounted) {
    return null;
  }

  // Prompt de actualización
  if (showUpdatePrompt) {
    return (
      <div className="fixed top-4 right-4 z-50 max-w-sm">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 p-4">
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center">
                <Download className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              </div>
            </div>

            <div className="flex-1 min-w-0">
              <h3 className="text-sm font-medium text-gray-900 dark:text-white">
                Actualización disponible
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                Una nueva versión de la app está lista para instalar.
              </p>

              <div className="flex gap-2 mt-3">
                <Button
                  onClick={handleUpdate}
                  size="sm"
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                >
                  Actualizar
                </Button>
                <Button
                  onClick={() => setShowUpdatePrompt(false)}
                  variant="outline"
                  size="sm"
                >
                  Después
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Prompt de instalación
  if (!isVisible || !canInstall) {
    return null;
  }

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 max-w-sm mx-auto sm:left-auto sm:mx-0 sm:right-4">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 p-4">
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
              <Image
                src="/favicon-96x96.png"
                alt="MMM Chile"
                width={24}
                height={24}
                className="rounded"
              />
            </div>
          </div>

          <div className="flex-1 min-w-0">
            <h3 className="text-sm font-medium text-gray-900 dark:text-white">
              Instalar MMM Chile
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              Accede rápidamente desde tu pantalla de inicio
            </p>

            {/* Beneficios */}
            <div className="flex items-center gap-4 mt-2 text-xs text-gray-400 dark:text-gray-500">
              <div className="flex items-center gap-1">
                <Monitor className="w-3 h-3" />
                <span>Acceso offline</span>
              </div>
              <div className="flex items-center gap-1">
                <Smartphone className="w-3 h-3" />
                <span>Carga rápida</span>
              </div>
            </div>

            <div className="flex gap-2 mt-3">
              <Button
                onClick={handleInstall}
                size="sm"
                className="bg-blue-600 hover:bg-blue-700 text-white flex-1"
              >
                <Download className="w-4 h-4 mr-1" />
                Instalar
              </Button>
              <Button
                onClick={handleShare}
                variant="outline"
                size="sm"
                className="px-3"
                title="Compartir"
              >
                <Share className="w-4 h-4" />
              </Button>
              <Button
                onClick={handleDismiss}
                variant="ghost"
                size="sm"
                className="px-3 text-gray-400 hover:text-gray-600"
                title="Cerrar"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PWAInstallPrompt;
