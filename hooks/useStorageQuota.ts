"use client";
import { useState, useEffect, useCallback } from "react";

interface StorageEstimate {
  quota?: number;
  usage?: number;
  usageByOrigin?: Array<{ origin: string; usage: number }>;
}

interface StorageQuotaState {
  estimate: StorageEstimate | null;
  isSupported: boolean;
  isLoading: boolean;
  error: string | null;
  percentageUsed: number;
  isNearLimit: boolean;
  isOverLimit: boolean;
}

interface StorageQuotaConfig {
  warningThreshold: number; // Porcentaje para mostrar advertencia
  maxThreshold: number; // Porcentaje máximo antes de limpiar cache
  checkInterval: number; // Intervalo en ms para verificar cuota
}

const defaultConfig: StorageQuotaConfig = {
  warningThreshold: 80, // 80%
  maxThreshold: 95, // 95%
  checkInterval: 300000, // 5 minutos
};

export const useStorageQuota = (config: Partial<StorageQuotaConfig> = {}) => {
  const finalConfig = { ...defaultConfig, ...config };

  const [state, setState] = useState<StorageQuotaState>({
    estimate: null,
    isSupported: false,
    isLoading: true,
    error: null,
    percentageUsed: 0,
    isNearLimit: false,
    isOverLimit: false,
  });

  // Verificar si Storage API está soportada
  const checkSupport = useCallback(() => {
    if (typeof navigator === "undefined") return false;
    return "storage" in navigator && "estimate" in navigator.storage;
  }, []);

  // Obtener estimación del storage
  const getStorageEstimate =
    useCallback(async (): Promise<StorageEstimate | null> => {
      if (!checkSupport()) {
        return null;
      }

      try {
        const estimate = await navigator.storage.estimate();
        return estimate;
      } catch (error) {
        console.error("Error getting storage estimate:", error);
        return null;
      }
    }, [checkSupport]);

  // Calcular porcentaje usado
  const calculatePercentage = useCallback(
    (estimate: StorageEstimate): number => {
      if (!estimate.quota || !estimate.usage) return 0;
      return Math.round((estimate.usage / estimate.quota) * 100);
    },
    []
  );

  // Actualizar estado del storage
  const updateStorageState = useCallback(async () => {
    setState((prev) => ({ ...prev, isLoading: true, error: null }));

    try {
      const isSupported = checkSupport();

      if (!isSupported) {
        setState((prev) => ({
          ...prev,
          isSupported: false,
          isLoading: false,
          error: "Storage API no soportada",
        }));
        return;
      }

      const estimate = await getStorageEstimate();

      if (!estimate) {
        setState((prev) => ({
          ...prev,
          isSupported,
          isLoading: false,
          error: "No se pudo obtener estimación de storage",
        }));
        return;
      }

      const percentageUsed = calculatePercentage(estimate);
      const isNearLimit = percentageUsed >= finalConfig.warningThreshold;
      const isOverLimit = percentageUsed >= finalConfig.maxThreshold;

      setState({
        estimate,
        isSupported,
        isLoading: false,
        error: null,
        percentageUsed,
        isNearLimit,
        isOverLimit,
      });

      // Si está sobre el límite, limpiar cache automáticamente
      if (isOverLimit) {
        await cleanOldCaches();
      }
    } catch (error) {
      setState((prev) => ({
        ...prev,
        isLoading: false,
        error: (error as Error).message,
      }));
    }
  }, [checkSupport, getStorageEstimate, calculatePercentage, finalConfig]);

  // Limpiar caches antiguos
  const cleanOldCaches = useCallback(async (): Promise<void> => {
    try {
      const cacheNames = await caches.keys();

      // Mantener solo las versiones más recientes
      const currentVersion = "v1.0.0"; // Debería coincidir con SW
      const cachesToDelete = cacheNames.filter(
        (name) => name.includes("mmm-chile-") && !name.includes(currentVersion)
      );

      await Promise.all(
        cachesToDelete.map((cacheName) => {
          console.log("[Storage] Deleting old cache:", cacheName);
          return caches.delete(cacheName);
        })
      );

      // Actualizar estimación después de limpiar
      await updateStorageState();
    } catch (error) {
      console.error("Error cleaning old caches:", error);
    }
  }, [updateStorageState]);

  // Solicitar almacenamiento persistente
  const requestPersistentStorage = useCallback(async (): Promise<boolean> => {
    if (
      typeof navigator === "undefined" ||
      !("storage" in navigator && "persist" in navigator.storage)
    ) {
      console.warn("Persistent storage no soportado");
      return false;
    }

    try {
      const isPersistent = await navigator.storage.persist();
      console.log("Persistent storage:", isPersistent ? "granted" : "denied");
      return isPersistent;
    } catch (error) {
      console.error("Error requesting persistent storage:", error);
      return false;
    }
  }, []);

  // Verificar si el storage es persistente
  const checkPersistentStorage = useCallback(async (): Promise<boolean> => {
    if (
      typeof navigator === "undefined" ||
      !("storage" in navigator && "persisted" in navigator.storage)
    ) {
      return false;
    }

    try {
      const isPersistent = await navigator.storage.persisted();
      return isPersistent;
    } catch (error) {
      console.error("Error checking persistent storage:", error);
      return false;
    }
  }, []);

  // Formatear bytes
  const formatBytes = useCallback((bytes: number): string => {
    if (bytes === 0) return "0 Bytes";

    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  }, []);

  // Obtener información detallada del storage
  const getStorageDetails = useCallback(() => {
    if (!state.estimate) return null;

    const { quota = 0, usage = 0 } = state.estimate;

    return {
      total: formatBytes(quota),
      used: formatBytes(usage),
      available: formatBytes(quota - usage),
      percentage: state.percentageUsed,
      isNearLimit: state.isNearLimit,
      isOverLimit: state.isOverLimit,
    };
  }, [
    state.estimate,
    state.percentageUsed,
    state.isNearLimit,
    state.isOverLimit,
    formatBytes,
  ]);

  // Efecto para verificación inicial y periódica
  useEffect(() => {
    if (typeof window === "undefined") return;

    updateStorageState();

    // Verificar periódicamente
    const interval = setInterval(updateStorageState, finalConfig.checkInterval);

    return () => clearInterval(interval);
  }, [updateStorageState, finalConfig.checkInterval]);

  // Efecto para limpiar automáticamente cuando sea necesario
  useEffect(() => {
    if (state.isOverLimit && !state.isLoading) {
      console.warn("Storage over limit, cleaning old caches...");
      cleanOldCaches();
    }
  }, [state.isOverLimit, state.isLoading, cleanOldCaches]);

  return {
    ...state,
    updateStorageState,
    cleanOldCaches,
    requestPersistentStorage,
    checkPersistentStorage,
    getStorageDetails,
    formatBytes,
    // Computed values
    isStorageAvailable: state.isSupported && !state.error,
    needsCleanup: state.isNearLimit,
    criticalStorage: state.isOverLimit,
  };
};
