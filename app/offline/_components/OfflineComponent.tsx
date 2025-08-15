"use client";
import React, { useEffect, useState } from "react";
import { WifiOff, RefreshCw, Home, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const OfflineComponent = () => {
  const [isOnline, setIsOnline] = useState(true);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);

  useEffect(() => {
    // Verificar estado de conexión
    const updateOnlineStatus = () => {
      setIsOnline(navigator.onLine);
    };

    // Establecer fecha de última actualización
    setLastUpdated(new Date());

    // Escuchar cambios en la conexión
    window.addEventListener("online", updateOnlineStatus);
    window.addEventListener("offline", updateOnlineStatus);

    // Estado inicial
    updateOnlineStatus();

    return () => {
      window.removeEventListener("online", updateOnlineStatus);
      window.removeEventListener("offline", updateOnlineStatus);
    };
  }, []);

  const handleRetry = () => {
    if (navigator.onLine) {
      window.location.reload();
    } else {
      // Intentar reconectar
      window.location.href = "/";
    }
  };

  const handleGoHome = () => {
    window.location.href = "/";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8 text-center">
        {/* Icono de estado */}
        <div className="flex justify-center mb-6">
          <div
            className={`p-4 rounded-full ${
              isOnline
                ? "bg-green-100 text-green-600 dark:bg-green-900/20 dark:text-green-400"
                : "bg-red-100 text-red-600 dark:bg-red-900/20 dark:text-red-400"
            }`}
          >
            <WifiOff className="h-12 w-12" />
          </div>
        </div>

        {/* Título */}
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          {isOnline ? "Conexión restaurada" : "Sin conexión a internet"}
        </h1>

        {/* Descripción */}
        <div className="space-y-4 mb-8">
          {isOnline ? (
            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
              <p className="text-green-800 dark:text-green-200 text-sm">
                Tu conexión a internet se ha restaurado. Puedes continuar
                navegando normalmente.
              </p>
            </div>
          ) : (
            <>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                No tienes conexión a internet en este momento. Algunas funciones
                pueden no estar disponibles, pero puedes acceder a contenido
                almacenado previamente.
              </p>

              {/* Información de contacto offline */}
              <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
                  Contacto de emergencia
                </h3>
                <div className="space-y-2 text-sm text-blue-800 dark:text-blue-200">
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    <a href="tel:+56975587223" className="hover:underline">
                      +56 9 7558 7223
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    <span>secretariammmchile@gmail.com</span>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Estado de conexión */}
        <div className="mb-6">
          <div className="flex items-center justify-center gap-2 text-sm text-gray-500 dark:text-gray-400">
            <div
              className={`w-2 h-2 rounded-full ${
                isOnline ? "bg-green-500" : "bg-red-500"
              }`}
            />
            <span>{isOnline ? "Conectado" : "Desconectado"}</span>
          </div>

          {lastUpdated && (
            <p className="text-xs text-gray-400 dark:text-gray-500 mt-2">
              Última verificación: {lastUpdated.toLocaleTimeString("es-CL")}
            </p>
          )}
        </div>

        {/* Acciones */}
        <div className="space-y-3">
          <Button
            onClick={handleRetry}
            className={`w-full ${
              isOnline
                ? "bg-green-600 hover:bg-green-700"
                : "bg-blue-600 hover:bg-blue-700"
            } text-white`}
          >
            <RefreshCw className="h-4 w-4 mr-2" />
            {isOnline ? "Recargar página" : "Verificar conexión"}
          </Button>

          <Button onClick={handleGoHome} variant="outline" className="w-full">
            <Home className="h-4 w-4 mr-2" />
            Ir al inicio
          </Button>
        </div>

        {/* Enlaces disponibles offline */}
        {!isOnline && (
          <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
            <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-4">
              Contenido disponible offline:
            </h4>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <Link
                href="/"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                Inicio
              </Link>
              <Link
                href="/doctrina"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                Doctrina
              </Link>
              <Link
                href="/contacto"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                Contacto
              </Link>
              <Link
                href="/iglesias"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                Iglesias
              </Link>
            </div>
          </div>
        )}

        {/* Consejos */}
        <div className="mt-6 text-xs text-gray-500 dark:text-gray-400 text-left">
          <p className="font-medium mb-2">Consejos:</p>
          <ul className="space-y-1 list-disc list-inside">
            <li>Verifica tu conexión WiFi o datos móviles</li>
            <li>Algunas páginas pueden estar disponibles offline</li>
            <li>Los contenidos se actualizarán al reconectar</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default OfflineComponent;
