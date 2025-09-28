"use client";
import { usePWAState } from "../../hooks/usePWAState";
import { useState, useEffect } from "react";

const PWADiagnostic = () => {
  const pwaState = usePWAState();
  const [diagnosticInfo, setDiagnosticInfo] = useState<any>({});

  useEffect(() => {
    const info = {
      // PWA State
      isInstalled: pwaState.isInstalled,
      isInstallable: pwaState.isInstallable,
      canShowPrompt: pwaState.canShowInstallPrompt,
      isOnline: pwaState.isOnline,

      // Browser Info
      userAgent: navigator.userAgent,
      isMobile: /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      ),
      isChrome: navigator.userAgent.includes("Chrome"),

      // Manifest
      hasManifest: !!document.querySelector('link[rel="manifest"]'),
      manifestHref: document
        .querySelector('link[rel="manifest"]')
        ?.getAttribute("href"),

      // PWA Features
      hasServiceWorker: "serviceWorker" in navigator,
      hasPushManager: "PushManager" in window,
      hasNotification: "Notification" in window,

      // Display Mode
      displayMode: window.matchMedia("(display-mode: standalone)").matches,
      isStandalone: (window.navigator as { standalone?: boolean }).standalone,

      // Storage
      localStorageInstalled: localStorage.getItem("pwa-installed"),
      localStorageTimestamp: localStorage.getItem("pwa-installed-timestamp"),
    };

    setDiagnosticInfo(info);
  }, [pwaState]);

  // Solo mostrar en desarrollo
  if (process.env.NODE_ENV !== "development") return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 bg-gray-900 text-white p-4 rounded-lg text-xs font-mono z-50 max-h-96 overflow-y-auto">
      <div className="font-bold mb-2 text-green-400">PWA Diagnostic</div>
      <div className="space-y-1">
        {Object.entries(diagnosticInfo).map(([key, value]) => (
          <div key={key} className="flex justify-between">
            <span className="text-gray-300">{key}:</span>
            <span
              className={
                typeof value === "boolean"
                  ? value
                    ? "text-green-400"
                    : "text-red-400"
                  : "text-blue-400"
              }
            >
              {typeof value === "boolean"
                ? value
                  ? "✅"
                  : "❌"
                : String(value)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PWADiagnostic;
