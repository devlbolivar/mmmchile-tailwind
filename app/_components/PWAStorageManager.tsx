"use client";
import React, { useState, useEffect } from "react";
import {
  HardDrive,
  Trash2,
  AlertTriangle,
  CheckCircle,
  RefreshCw,
  Settings,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useStorageQuota } from "@/hooks/useStorageQuota";
import { usePWA } from "@/hooks/usePWA";

const PWAStorageManager = () => {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isClearing, setIsClearing] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const {
    isStorageAvailable,
    getStorageDetails,
    cleanOldCaches,
    requestPersistentStorage,
    isNearLimit,
    isOverLimit,
    isLoading: storageLoading,
    error: storageError,
  } = useStorageQuota();

  const { isInstalled, getDeviceCapabilities } = usePWA();

  const storageDetails = getStorageDetails();
  const capabilities = getDeviceCapabilities();

  const handleClearCache = async () => {
    setIsClearing(true);
    try {
      await cleanOldCaches();
      // También limpiar datos del navegador si es posible
      if ("serviceWorker" in navigator) {
        const registration = await navigator.serviceWorker.getRegistration();
        if (registration) {
          const sw = registration.active;
          if (sw) {
            sw.postMessage({ type: "CLEAN_ALL_CACHES" });
          }
        }
      }
    } catch (error) {
      console.error("Error clearing cache:", error);
    } finally {
      setIsClearing(false);
    }
  };

  const handleRequestPersistent = async () => {
    const granted = await requestPersistentStorage();
    if (granted) {
      console.log("Persistent storage granted");
    } else {
      console.log("Persistent storage denied");
    }
  };

  const getStorageStatusColor = () => {
    if (isOverLimit) return "text-red-600";
    if (isNearLimit) return "text-yellow-600";
    return "text-green-600";
  };

  const getStorageIcon = () => {
    if (isOverLimit) return <AlertTriangle className="w-4 h-4 text-red-600" />;
    if (isNearLimit)
      return <AlertTriangle className="w-4 h-4 text-yellow-600" />;
    return <CheckCircle className="w-4 h-4 text-green-600" />;
  };

  // No renderizar nada hasta que el componente esté montado
  if (!mounted) {
    return null;
  }

  if (!isInstalled && process.env.NODE_ENV !== "development") {
    return null;
  }

  return (
    <>
      {/* Botón flotante para abrir el manager */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-20 right-4 z-40 p-3 rounded-full shadow-lg transition-colors ${
          isOverLimit
            ? "bg-red-500 hover:bg-red-600"
            : isNearLimit
            ? "bg-yellow-500 hover:bg-yellow-600"
            : "bg-blue-500 hover:bg-blue-600"
        } text-white`}
        title="Gestión de Storage PWA"
      >
        <HardDrive className="w-5 h-5" />
        {(isNearLimit || isOverLimit) && (
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse" />
        )}
      </button>

      {/* Modal del Storage Manager */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-md w-full mx-4 max-h-[90vh] overflow-y-auto">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-2">
                <Settings className="w-5 h-5" />
                <h2 className="text-lg font-semibold">Gestión PWA</h2>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Contenido */}
            <div className="p-4 space-y-6">
              {/* Estado del Storage */}
              <div>
                <h3 className="text-md font-medium mb-3 flex items-center gap-2">
                  {getStorageIcon()}
                  Estado del Almacenamiento
                </h3>

                {storageLoading ? (
                  <div className="flex items-center gap-2 text-gray-500">
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    Verificando storage...
                  </div>
                ) : storageError ? (
                  <div className="text-red-600 text-sm">{storageError}</div>
                ) : isStorageAvailable && storageDetails ? (
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Usado:</span>
                      <span className={getStorageStatusColor()}>
                        {storageDetails.used}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Total:</span>
                      <span>{storageDetails.total}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Disponible:</span>
                      <span>{storageDetails.available}</span>
                    </div>

                    {/* Barra de progreso */}
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full transition-all ${
                          isOverLimit
                            ? "bg-red-500"
                            : isNearLimit
                            ? "bg-yellow-500"
                            : "bg-green-500"
                        }`}
                        style={{
                          width: `${Math.min(storageDetails.percentage, 100)}%`,
                        }}
                      />
                    </div>
                    <div className="text-xs text-gray-500 text-center">
                      {storageDetails.percentage}% usado
                    </div>
                  </div>
                ) : (
                  <div className="text-gray-500 text-sm">
                    Storage API no disponible
                  </div>
                )}
              </div>

              {/* Capacidades del dispositivo */}
              <div>
                <h3 className="text-md font-medium mb-3">
                  Capacidades del Dispositivo
                </h3>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="flex justify-between">
                    <span>Service Worker:</span>
                    <span
                      className={
                        capabilities.hasServiceWorker
                          ? "text-green-600"
                          : "text-red-600"
                      }
                    >
                      {capabilities.hasServiceWorker ? "✓" : "✗"}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Notificaciones:</span>
                    <span
                      className={
                        capabilities.hasNotifications
                          ? "text-green-600"
                          : "text-red-600"
                      }
                    >
                      {capabilities.hasNotifications ? "✓" : "✗"}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Background Sync:</span>
                    <span
                      className={
                        capabilities.hasBackgroundSync
                          ? "text-green-600"
                          : "text-red-600"
                      }
                    >
                      {capabilities.hasBackgroundSync ? "✓" : "✗"}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Share API:</span>
                    <span
                      className={
                        capabilities.hasShare
                          ? "text-green-600"
                          : "text-red-600"
                      }
                    >
                      {capabilities.hasShare ? "✓" : "✗"}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Instalada:</span>
                    <span
                      className={
                        capabilities.isStandalone
                          ? "text-green-600"
                          : "text-gray-600"
                      }
                    >
                      {capabilities.isStandalone ? "✓" : "✗"}
                    </span>
                  </div>
                </div>
              </div>

              {/* Acciones */}
              <div>
                <h3 className="text-md font-medium mb-3">Acciones</h3>
                <div className="space-y-2">
                  <Button
                    onClick={handleClearCache}
                    disabled={isClearing}
                    variant="outline"
                    className="w-full flex items-center gap-2"
                  >
                    {isClearing ? (
                      <RefreshCw className="w-4 h-4 animate-spin" />
                    ) : (
                      <Trash2 className="w-4 h-4" />
                    )}
                    {isClearing ? "Limpiando..." : "Limpiar Cache"}
                  </Button>

                  {capabilities.hasServiceWorker && (
                    <Button
                      onClick={handleRequestPersistent}
                      variant="outline"
                      className="w-full flex items-center gap-2"
                    >
                      <HardDrive className="w-4 h-4" />
                      Solicitar Storage Persistente
                    </Button>
                  )}
                </div>
              </div>

              {/* Advertencias */}
              {(isNearLimit || isOverLimit) && (
                <div
                  className={`p-3 rounded-lg ${
                    isOverLimit
                      ? "bg-red-50 border border-red-200"
                      : "bg-yellow-50 border border-yellow-200"
                  }`}
                >
                  <div className="flex items-start gap-2">
                    <AlertTriangle
                      className={`w-4 h-4 mt-0.5 ${
                        isOverLimit ? "text-red-600" : "text-yellow-600"
                      }`}
                    />
                    <div className="text-sm">
                      {isOverLimit ? (
                        <div>
                          <p className="font-medium text-red-800">
                            Almacenamiento lleno
                          </p>
                          <p className="text-red-700">
                            El cache se está limpiando automáticamente.
                            Considera limpiar manualmente para mejor
                            rendimiento.
                          </p>
                        </div>
                      ) : (
                        <div>
                          <p className="font-medium text-yellow-800">
                            Almacenamiento casi lleno
                          </p>
                          <p className="text-yellow-700">
                            El almacenamiento está al{" "}
                            {storageDetails?.percentage}%. Considera limpiar el
                            cache.
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Info para desarrollo */}
              {process.env.NODE_ENV === "development" && (
                <div className="text-xs text-gray-500 border-t pt-3">
                  <p>🔧 Herramienta de desarrollo</p>
                  <p>
                    Este panel solo es visible en desarrollo o cuando la PWA
                    está instalada.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PWAStorageManager;
