"use client";
import { usePWA } from "../../hooks/usePWA";
import { useState, useEffect } from "react";

const PWADiagnostic = () => {
  const pwaState = usePWA();
  const [diagnosticInfo, setDiagnosticInfo] = useState<
    Record<string, boolean | string | null | undefined>
  >({});

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
  }, [
    pwaState.isInstalled,
    pwaState.isInstallable,
    pwaState.canShowInstallPrompt,
    pwaState.isOnline,
  ]);

  const [isMinimized, setIsMinimized] = useState(true);

  // Solo mostrar en desarrollo
  if (process.env.NODE_ENV !== "development") return null;

  if (isMinimized) {
    return (
      <button
        onClick={() => setIsMinimized(false)}
        className="fixed bottom-4 left-4 bg-gray-900/80 backdrop-blur text-white p-2 rounded-lg text-xs font-mono z-50 border border-green-500/30 hover:bg-gray-800 transition-colors shadow-lg"
      >
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span>PWA Debug</span>
        </div>
      </button>
    );
  }

  return (
    <div className="fixed bottom-4 left-4 right-4 md:right-auto md:w-96 bg-gray-900/95 backdrop-blur text-white p-4 rounded-lg text-xs font-mono z-50 max-h-96 overflow-y-auto shadow-2xl border border-gray-800">
      <div className="flex justify-between items-center mb-4 pb-2 border-b border-gray-800">
        <div className="font-bold text-green-400 flex items-center gap-2">
          <span>PWA Diagnostic</span>
        </div>
        <button
          onClick={() => setIsMinimized(true)}
          className="p-1 hover:bg-gray-800 rounded transition-colors text-gray-400 hover:text-white"
        >
          ✕
        </button>
      </div>
      <div className="space-y-1">
        {Object.entries(diagnosticInfo).map(([key, value]) => (
          <div key={key} className="flex justify-between hover:bg-gray-800/50 p-1 rounded">
            <span className="text-gray-300">{key}:</span>
            <span
              className={
                typeof value === "boolean"
                  ? value
                    ? "text-green-400"
                    : "text-red-400"
                  : "text-blue-400 truncate max-w-[150px] text-right"
              }
              title={String(value)}
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
