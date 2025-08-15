"use client";
import { useState, useEffect, useCallback } from "react";

interface NetworkInformation extends EventTarget {
  downlink?: number;
  effectiveType?: "slow-2g" | "2g" | "3g" | "4g";
  rtt?: number;
  saveData?: boolean;
  type?:
    | "bluetooth"
    | "cellular"
    | "ethernet"
    | "none"
    | "wifi"
    | "wimax"
    | "other"
    | "unknown";
}

interface NetworkQualityState {
  isOnline: boolean;
  downlink: number | null; // Mbps
  effectiveType: string | null;
  rtt: number | null; // ms
  saveData: boolean;
  connectionType: string | null;
  isSlowConnection: boolean;
  isFastConnection: boolean;
  isSupported: boolean;
  lastChecked: Date | null;
}

interface NetworkQualityConfig {
  slowThreshold: number; // Mbps below which is considered slow
  fastThreshold: number; // Mbps above which is considered fast
  rttThreshold: number; // ms above which is considered slow
  checkInterval: number; // ms
}

const defaultConfig: NetworkQualityConfig = {
  slowThreshold: 1.5, // 1.5 Mbps
  fastThreshold: 10, // 10 Mbps
  rttThreshold: 500, // 500ms
  checkInterval: 30000, // 30 segundos
};

declare global {
  interface Navigator {
    connection?: NetworkInformation;
    mozConnection?: NetworkInformation;
    webkitConnection?: NetworkInformation;
  }
}

export const useNetworkQuality = (
  config: Partial<NetworkQualityConfig> = {}
) => {
  const finalConfig = { ...defaultConfig, ...config };

  const [state, setState] = useState<NetworkQualityState>({
    isOnline: true,
    downlink: null,
    effectiveType: null,
    rtt: null,
    saveData: false,
    connectionType: null,
    isSlowConnection: false,
    isFastConnection: false,
    isSupported: false,
    lastChecked: null,
  });

  // Obtener información de conexión
  const getConnection = useCallback((): NetworkInformation | null => {
    if (typeof navigator === "undefined") return null;
    return (
      navigator.connection ||
      navigator.mozConnection ||
      navigator.webkitConnection ||
      null
    );
  }, []);

  // Verificar si Network Information API está soportada
  const checkSupport = useCallback(() => {
    return getConnection() !== null;
  }, [getConnection]);

  // Actualizar información de red
  const updateNetworkInfo = useCallback(() => {
    if (typeof navigator === "undefined") return;

    const connection = getConnection();
    const isOnline = navigator.onLine;
    const isSupported = connection !== null;

    if (!isSupported) {
      setState((prev) => ({
        ...prev,
        isOnline,
        isSupported: false,
        lastChecked: new Date(),
      }));
      return;
    }

    const downlink = connection.downlink || null;
    const effectiveType = connection.effectiveType || null;
    const rtt = connection.rtt || null;
    const saveData = connection.saveData || false;
    const connectionType = connection.type || null;

    // Determinar si es conexión lenta o rápida
    const isSlowByDownlink =
      downlink !== null && downlink < finalConfig.slowThreshold;
    const isSlowByRTT = rtt !== null && rtt > finalConfig.rttThreshold;
    const isSlowByType = effectiveType === "slow-2g" || effectiveType === "2g";

    const isSlowConnection = isSlowByDownlink || isSlowByRTT || isSlowByType;
    const isFastConnection =
      downlink !== null && downlink > finalConfig.fastThreshold;

    setState({
      isOnline,
      downlink,
      effectiveType,
      rtt,
      saveData,
      connectionType,
      isSlowConnection,
      isFastConnection,
      isSupported,
      lastChecked: new Date(),
    });
  }, [getConnection, finalConfig]);

  // Medir velocidad de conexión empíricamente
  const measureConnectionSpeed = useCallback(async (): Promise<
    number | null
  > => {
    try {
      const startTime = performance.now();

      // Descargar un pequeño archivo para medir velocidad
      const testUrl = "/favicon-96x96.png?" + Date.now(); // Cache busting
      const response = await fetch(testUrl, {
        method: "GET",
        cache: "no-cache",
      });

      if (!response.ok) {
        throw new Error("Failed to fetch test file");
      }

      const blob = await response.blob();
      const endTime = performance.now();

      const durationMs = endTime - startTime;
      const durationSeconds = durationMs / 1000;
      const sizeMb = blob.size / (1024 * 1024);
      const speedMbps = sizeMb / durationSeconds;

      return speedMbps;
    } catch (error) {
      console.error("Error measuring connection speed:", error);
      return null;
    }
  }, []);

  // Obtener recomendaciones basadas en la calidad de red
  const getNetworkRecommendations = useCallback(() => {
    const recommendations: string[] = [];

    if (state.isSlowConnection) {
      recommendations.push("Reduce image quality");
      recommendations.push("Defer non-critical resources");
      recommendations.push("Use smaller payload sizes");
      recommendations.push("Enable aggressive caching");
    }

    if (state.saveData) {
      recommendations.push("Minimize data usage");
      recommendations.push("Compress images heavily");
      recommendations.push("Disable autoplay videos");
      recommendations.push("Load minimal content");
    }

    if (!state.isOnline) {
      recommendations.push("Use cached content only");
      recommendations.push("Show offline indicators");
      recommendations.push("Queue actions for when online");
    }

    if (state.isFastConnection) {
      recommendations.push("Can preload content");
      recommendations.push("Use high quality images");
      recommendations.push("Enable advanced features");
    }

    return recommendations;
  }, [state]);

  // Obtener configuración optimizada para la red actual
  const getOptimizedConfig = useCallback(() => {
    return {
      imageQuality: state.isSlowConnection ? 60 : state.saveData ? 70 : 85,
      preloadPages: state.isFastConnection && !state.saveData,
      enableAnimations: !state.isSlowConnection && !state.saveData,
      cacheStrategy: state.isSlowConnection ? "aggressive" : "normal",
      maxConcurrentRequests: state.isSlowConnection
        ? 2
        : state.isFastConnection
        ? 6
        : 4,
      timeout: state.isSlowConnection ? 30000 : 10000,
    };
  }, [state]);

  // Formatear información de red para mostrar
  const getFormattedInfo = useCallback(() => {
    return {
      status: state.isOnline ? "Online" : "Offline",
      quality: state.isSlowConnection
        ? "Slow"
        : state.isFastConnection
        ? "Fast"
        : "Normal",
      speed: state.downlink ? `${state.downlink} Mbps` : "Unknown",
      type: state.effectiveType || "Unknown",
      latency: state.rtt ? `${state.rtt} ms` : "Unknown",
      saveData: state.saveData ? "Enabled" : "Disabled",
      connection: state.connectionType || "Unknown",
    };
  }, [state]);

  // Event listeners para cambios de red
  useEffect(() => {
    if (typeof window === "undefined") return;

    const connection = getConnection();

    // Actualizar estado inicial
    updateNetworkInfo();

    // Listeners para cambios de estado online/offline
    const handleOnline = () => updateNetworkInfo();
    const handleOffline = () => updateNetworkInfo();

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    // Listener para cambios en la conexión (si está soportado)
    if (connection) {
      const handleChange = () => updateNetworkInfo();
      connection.addEventListener("change", handleChange);

      return () => {
        window.removeEventListener("online", handleOnline);
        window.removeEventListener("offline", handleOffline);
        connection.removeEventListener("change", handleChange);
      };
    }

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, [getConnection, updateNetworkInfo]);

  // Verificación periódica de la calidad de red
  useEffect(() => {
    const interval = setInterval(updateNetworkInfo, finalConfig.checkInterval);
    return () => clearInterval(interval);
  }, [updateNetworkInfo, finalConfig.checkInterval]);

  return {
    ...state,
    updateNetworkInfo,
    measureConnectionSpeed,
    getNetworkRecommendations,
    getOptimizedConfig,
    getFormattedInfo,
    // Computed values
    isDataSaverMode: state.saveData,
    networkQuality: state.isSlowConnection
      ? "slow"
      : state.isFastConnection
      ? "fast"
      : "normal",
    canPreload: state.isFastConnection && !state.saveData && state.isOnline,
    shouldOptimize: state.isSlowConnection || state.saveData,
  };
};
