"use client";
import { useState, useEffect } from "react";

// PASO 1: Probando PWAInstallPrompt solo
import PWAInstallPrompt from "./PWAInstallPrompt";
// import PWAStorageManager from "./PWAStorageManager";
// import PWAStatus from "./PWAStatus";

// Componentes PWA restantes temporalmente deshabilitados para debugging
// const PWAInstallPrompt = () => null;
const PWAStorageManager = () => null;
const PWAStatus = () => null;

export default function PWAComponents() {
  const [mounted, setMounted] = useState(false);
  const [enablePWA, setEnablePWA] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    try {
      setMounted(true);
      // Esperar un poco más antes de activar PWA para asegurar hidratación completa
      const timer = setTimeout(() => {
        try {
          setEnablePWA(true);
        } catch (error) {
          console.warn("Error enabling PWA:", error);
          setHasError(true);
        }
      }, 5000); // Aumenté a 5 segundos para máxima seguridad

      return () => clearTimeout(timer);
    } catch (error) {
      console.warn("Error in PWAComponents useEffect:", error);
      setHasError(true);
    }
  }, []);

  // No renderizar nada hasta estar completamente montado
  if (!mounted || hasError) {
    return null;
  }

  return (
    <div className="pwa-components">
      {/* Solo cargar PWA después de la hidratación completa */}
      {enablePWA && (
        <>
          {/* Renderizar cada componente en su propio try-catch */}
          <SafePWAComponent>
            <PWAInstallPrompt />
          </SafePWAComponent>
          <SafePWAComponent>
            <PWAStorageManager />
          </SafePWAComponent>
          {process.env.NODE_ENV === "development" && (
            <SafePWAComponent>
              <PWAStatus />
            </SafePWAComponent>
          )}
        </>
      )}
    </div>
  );
}

// Componente wrapper para manejo seguro de errores
function SafePWAComponent({ children }: { children: React.ReactNode }) {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    // Solo ejecutar en el cliente
    if (typeof window === "undefined") return;

    const handleError = (error: ErrorEvent) => {
      console.warn("PWA Component Error:", error);
      setHasError(true);
    };

    window.addEventListener("error", handleError);
    return () => window.removeEventListener("error", handleError);
  }, []);

  if (hasError) {
    return null;
  }

  try {
    return <>{children}</>;
  } catch (error) {
    console.warn("PWA Component Render Error:", error);
    return null;
  }
}
