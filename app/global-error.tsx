"use client";

import { useEffect } from "react";
import { AlertTriangle, RefreshCw, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

interface GlobalErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function GlobalError({ error, reset }: GlobalErrorProps) {
  useEffect(() => {
    // Log del error
    console.error("Global error:", error);

    // Enviar error al servicio de logging
    const errorData = {
      message: error.message,
      stack: error.stack,
      digest: error.digest,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      url: window.location.href,
      type: "global",
    };

    fetch("/api/log-error", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(errorData),
    }).catch((err) => console.error("Failed to log global error:", err));
  }, [error]);

  const handleGoHome = () => {
    window.location.href = "/";
  };

  return (
    <html lang="es">
      <body>
        <div className="min-h-screen bg-gradient-to-br from-red-50 to-red-100 flex items-center justify-center px-4">
          <div className="max-w-lg w-full bg-white rounded-lg shadow-xl p-8 text-center">
            <div className="flex justify-center mb-6">
              <AlertTriangle className="h-20 w-20 text-red-500" />
            </div>

            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Error Crítico
            </h1>

            <p className="text-gray-600 mb-6">
              Ha ocurrido un error crítico en la aplicación. Nuestro equipo
              técnico ha sido notificado automáticamente y está trabajando para
              solucionarlo.
            </p>

            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
              <h3 className="text-sm font-medium text-red-800 mb-2">
                Detalles del error:
              </h3>
              <p className="text-sm text-red-700 font-mono">{error.message}</p>
              {error.digest && (
                <p className="text-xs text-red-600 mt-2">
                  ID de error: {error.digest}
                </p>
              )}
            </div>

            <div className="space-y-3">
              <Button
                onClick={reset}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
              >
                <RefreshCw className="h-4 w-4 mr-2" />
                Intentar recuperar la aplicación
              </Button>

              <Button
                onClick={handleGoHome}
                variant="outline"
                className="w-full"
              >
                <Home className="h-4 w-4 mr-2" />
                Recargar página principal
              </Button>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <h3 className="text-sm font-medium text-gray-700 mb-2">
                ¿Necesitas ayuda inmediata?
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                Si el problema persiste, puedes contactarnos directamente:
              </p>
              <div className="space-y-2 text-sm">
                <div>
                  <strong>Teléfono:</strong>{" "}
                  <a
                    href="tel:+56975587223"
                    className="text-blue-600 hover:underline"
                  >
                    +56 975587223
                  </a>
                </div>
                <div>
                  <strong>Email:</strong>{" "}
                  <a
                    href="mailto:secretariammmchile@gmail.com"
                    className="text-blue-600 hover:underline"
                  >
                    secretariammmchile@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
