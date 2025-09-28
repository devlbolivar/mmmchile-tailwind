"use client";
import { usePWA } from "../../hooks/usePWA";

const PWADebug = () => {
  const pwaState = usePWA();

  // Solo mostrar en desarrollo
  if (process.env.NODE_ENV !== "development") return null;

  return (
    <div className="fixed bottom-4 left-4 bg-black bg-opacity-80 text-white p-3 rounded-lg text-xs font-mono z-50 max-w-xs">
      <div className="font-bold mb-2">PWA Debug:</div>
      <div>canInstall: {pwaState.canInstall ? "✅" : "❌"}</div>
      <div>isInstalled: {pwaState.isInstalled ? "✅" : "❌"}</div>
      <div>isOnline: {pwaState.isOnline ? "✅" : "❌"}</div>
      <div>isInstallable: {pwaState.isInstallable ? "✅" : "❌"}</div>
      <div>needsUpdate: {pwaState.needsUpdate ? "✅" : "❌"}</div>
    </div>
  );
};

export default PWADebug;
