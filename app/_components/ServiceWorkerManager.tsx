"use client";
import { useEffect, useState } from "react";

const ServiceWorkerManager = () => {
  const [swError, setSwError] = useState(false);

  useEffect(() => {
    // Detectar errores de Service Worker
    const handleError = (event: ErrorEvent) => {
      if (event.message?.includes("Cannot read properties of undefined")) {
        setSwError(true);
      }
    };

    window.addEventListener("error", handleError);

    // Verificar si hay un Service Worker problemático
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.getRegistrations().then((registrations) => {
        if (registrations.length > 0) {
          // Verificar si el Service Worker está funcionando correctamente
          navigator.serviceWorker.ready
            .then((registration) => {
              if (registration.active) {
                // Enviar mensaje de prueba al Service Worker
                registration.active.postMessage({ type: "PING" });
              }
            })
            .catch(() => {
              setSwError(true);
            });
        }
      });
    }

    return () => {
      window.removeEventListener("error", handleError);
    };
  }, []);

  const clearServiceWorker = async () => {
    if ("serviceWorker" in navigator) {
      try {
        const registrations = await navigator.serviceWorker.getRegistrations();
        await Promise.all(
          registrations.map((registration) => registration.unregister())
        );

        // Limpiar caches
        if ("caches" in window) {
          const cacheNames = await caches.keys();
          await Promise.all(
            cacheNames.map((cacheName) => caches.delete(cacheName))
          );
        }

        setSwError(false);
        window.location.reload();
      } catch (error) {
        console.error("Error clearing Service Worker:", error);
      }
    }
  };

  if (!swError) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg p-6 max-w-md w-full">
        <h2 className="text-xl font-bold text-gray-900 mb-4">
          Error de Service Worker
        </h2>
        <p className="text-gray-600 mb-4">
          Se detectó un problema con el Service Worker que está causando
          errores. Esto es común en desarrollo.
        </p>
        <div className="flex gap-3">
          <button
            onClick={clearServiceWorker}
            className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            Limpiar y Recargar
          </button>
          <button
            onClick={() => setSwError(false)}
            className="flex-1 bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400 transition-colors"
          >
            Ignorar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceWorkerManager;
