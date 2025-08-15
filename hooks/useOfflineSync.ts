"use client";
import { useState, useEffect, useCallback, useRef } from "react";

interface OfflineAction {
  id: string;
  type: string;
  data: any;
  timestamp: number;
  retryCount: number;
  maxRetries: number;
  url: string;
  method: string;
  headers?: Record<string, string>;
}

interface OfflineSyncState {
  isOnline: boolean;
  queuedActions: OfflineAction[];
  isProcessing: boolean;
  lastSyncAttempt: Date | null;
  syncErrors: Array<{ action: OfflineAction; error: string }>;
}

interface OfflineSyncConfig {
  maxRetries: number;
  retryDelay: number;
  maxQueueSize: number;
  syncInterval: number;
  storageKey: string;
}

const defaultConfig: OfflineSyncConfig = {
  maxRetries: 3,
  retryDelay: 5000, // 5 segundos
  maxQueueSize: 50,
  syncInterval: 30000, // 30 segundos
  storageKey: "mmm-offline-actions",
};

export const useOfflineSync = (config: Partial<OfflineSyncConfig> = {}) => {
  const finalConfig = { ...defaultConfig, ...config };
  const processingRef = useRef(false);

  const [state, setState] = useState<OfflineSyncState>({
    isOnline: typeof navigator !== "undefined" ? navigator.onLine : true,
    queuedActions: [],
    isProcessing: false,
    lastSyncAttempt: null,
    syncErrors: [],
  });

  // Cargar acciones desde localStorage
  const loadQueuedActions = useCallback((): OfflineAction[] => {
    if (typeof localStorage === "undefined") return [];

    try {
      const stored = localStorage.getItem(finalConfig.storageKey);
      if (!stored) return [];

      const parsed = JSON.parse(stored);
      return Array.isArray(parsed) ? parsed : [];
    } catch (error) {
      console.error("Error loading queued actions:", error);
      return [];
    }
  }, [finalConfig.storageKey]);

  // Guardar acciones en localStorage
  const saveQueuedActions = useCallback(
    (actions: OfflineAction[]) => {
      if (typeof localStorage === "undefined") return;

      try {
        localStorage.setItem(finalConfig.storageKey, JSON.stringify(actions));
      } catch (error) {
        console.error("Error saving queued actions:", error);
      }
    },
    [finalConfig.storageKey]
  );

  // Generar ID único para acción
  const generateActionId = useCallback((): string => {
    return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  }, []);

  // Agregar acción a la cola
  const queueAction = useCallback(
    (
      type: string,
      url: string,
      method: string,
      data: any,
      headers?: Record<string, string>,
      maxRetries: number = finalConfig.maxRetries
    ): string => {
      const action: OfflineAction = {
        id: generateActionId(),
        type,
        data,
        timestamp: Date.now(),
        retryCount: 0,
        maxRetries,
        url,
        method,
        headers,
      };

      setState((prev) => {
        const newActions = [...prev.queuedActions, action];

        // Limitar tamaño de la cola
        if (newActions.length > finalConfig.maxQueueSize) {
          newActions.splice(0, newActions.length - finalConfig.maxQueueSize);
        }

        saveQueuedActions(newActions);

        return {
          ...prev,
          queuedActions: newActions,
        };
      });

      return action.id;
    },
    [
      generateActionId,
      finalConfig.maxRetries,
      finalConfig.maxQueueSize,
      saveQueuedActions,
    ]
  );

  // Remover acción de la cola
  const removeAction = useCallback(
    (actionId: string) => {
      setState((prev) => {
        const newActions = prev.queuedActions.filter(
          (action) => action.id !== actionId
        );
        saveQueuedActions(newActions);

        return {
          ...prev,
          queuedActions: newActions,
          syncErrors: prev.syncErrors.filter(
            (error) => error.action.id !== actionId
          ),
        };
      });
    },
    [saveQueuedActions]
  );

  // Ejecutar una acción
  const executeAction = useCallback(
    async (action: OfflineAction): Promise<boolean> => {
      try {
        const response = await fetch(action.url, {
          method: action.method,
          headers: {
            "Content-Type": "application/json",
            ...action.headers,
          },
          body:
            action.method !== "GET" ? JSON.stringify(action.data) : undefined,
        });

        if (!response.ok) {
          throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }

        console.log(
          `[OfflineSync] Action ${action.type} executed successfully`
        );
        return true;
      } catch (error) {
        console.error(`[OfflineSync] Action ${action.type} failed:`, error);
        return false;
      }
    },
    []
  );

  // Procesar cola de acciones
  const processQueue = useCallback(async () => {
    if (
      processingRef.current ||
      !state.isOnline ||
      state.queuedActions.length === 0
    ) {
      return;
    }

    processingRef.current = true;
    setState((prev) => ({
      ...prev,
      isProcessing: true,
      lastSyncAttempt: new Date(),
    }));

    const actionsToProcess = [...state.queuedActions];
    const newErrors: Array<{ action: OfflineAction; error: string }> = [];

    for (const action of actionsToProcess) {
      try {
        const success = await executeAction(action);

        if (success) {
          // Acción exitosa, remover de la cola
          removeAction(action.id);
        } else {
          // Acción falló, incrementar contador de reintentos
          setState((prev) => {
            const updatedActions = prev.queuedActions
              .map((a) => {
                if (a.id === action.id) {
                  const newRetryCount = a.retryCount + 1;

                  if (newRetryCount >= a.maxRetries) {
                    // Máximo de reintentos alcanzado
                    newErrors.push({
                      action: a,
                      error: `Max retries (${a.maxRetries}) reached`,
                    });
                    return null; // Marcar para eliminación
                  } else {
                    return { ...a, retryCount: newRetryCount };
                  }
                }
                return a;
              })
              .filter(Boolean) as OfflineAction[];

            saveQueuedActions(updatedActions);

            return {
              ...prev,
              queuedActions: updatedActions,
            };
          });
        }

        // Delay entre acciones para no sobrecargar el servidor
        await new Promise((resolve) => setTimeout(resolve, 500));
      } catch (error) {
        console.error("Error processing action:", error);
        newErrors.push({
          action,
          error: (error as Error).message,
        });
      }
    }

    // Agregar errores nuevos
    if (newErrors.length > 0) {
      setState((prev) => ({
        ...prev,
        syncErrors: [...prev.syncErrors, ...newErrors],
      }));
    }

    processingRef.current = false;
    setState((prev) => ({ ...prev, isProcessing: false }));
  }, [
    state.isOnline,
    state.queuedActions,
    executeAction,
    removeAction,
    saveQueuedActions,
  ]);

  // Limpiar errores
  const clearErrors = useCallback(() => {
    setState((prev) => ({ ...prev, syncErrors: [] }));
  }, []);

  // Limpiar toda la cola
  const clearQueue = useCallback(() => {
    setState((prev) => {
      saveQueuedActions([]);
      return {
        ...prev,
        queuedActions: [],
        syncErrors: [],
      };
    });
  }, [saveQueuedActions]);

  // Reintentar acción específica
  const retryAction = useCallback(
    (actionId: string) => {
      setState((prev) => {
        const updatedActions = prev.queuedActions.map((action) => {
          if (action.id === actionId) {
            return { ...action, retryCount: 0 };
          }
          return action;
        });

        saveQueuedActions(updatedActions);

        return {
          ...prev,
          queuedActions: updatedActions,
          syncErrors: prev.syncErrors.filter(
            (error) => error.action.id !== actionId
          ),
        };
      });
    },
    [saveQueuedActions]
  );

  // Shorthand para acciones comunes
  const queueFormSubmission = useCallback(
    (formData: any, endpoint: string, method: string = "POST") => {
      return queueAction("form-submission", endpoint, method, formData);
    },
    [queueAction]
  );

  const queueAnalyticsEvent = useCallback(
    (eventData: any) => {
      return queueAction("analytics", "/api/analytics", "POST", eventData);
    },
    [queueAction]
  );

  const queueErrorLog = useCallback(
    (errorData: any) => {
      return queueAction("error-log", "/api/log-error", "POST", errorData);
    },
    [queueAction]
  );

  // Efecto para cargar acciones al inicializar
  useEffect(() => {
    if (typeof window === "undefined") return;

    const savedActions = loadQueuedActions();
    if (savedActions.length > 0) {
      setState((prev) => ({ ...prev, queuedActions: savedActions }));
    }
  }, [loadQueuedActions]);

  // Efecto para manejar cambios de conectividad
  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleOnline = () => {
      setState((prev) => ({ ...prev, isOnline: true }));
    };

    const handleOffline = () => {
      setState((prev) => ({ ...prev, isOnline: false }));
    };

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  // Efecto para procesar cola cuando se conecta
  useEffect(() => {
    if (state.isOnline && state.queuedActions.length > 0) {
      const timer = setTimeout(processQueue, 1000); // Delay inicial
      return () => clearTimeout(timer);
    }
  }, [state.isOnline, state.queuedActions.length, processQueue]);

  // Efecto para sincronización periódica
  useEffect(() => {
    if (state.isOnline) {
      const interval = setInterval(processQueue, finalConfig.syncInterval);
      return () => clearInterval(interval);
    }
  }, [state.isOnline, processQueue, finalConfig.syncInterval]);

  return {
    ...state,
    queueAction,
    removeAction,
    processQueue,
    clearErrors,
    clearQueue,
    retryAction,
    // Shortcuts
    queueFormSubmission,
    queueAnalyticsEvent,
    queueErrorLog,
    // Computed values
    hasQueuedActions: state.queuedActions.length > 0,
    hasErrors: state.syncErrors.length > 0,
    queueSize: state.queuedActions.length,
    errorCount: state.syncErrors.length,
  };
};
