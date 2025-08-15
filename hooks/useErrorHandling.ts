import { useCallback, useEffect } from "react";

interface ErrorHandlerOptions {
  enableGlobalErrorHandling?: boolean;
  enableUnhandledRejectionHandling?: boolean;
  logToConsole?: boolean;
  logToServer?: boolean;
}

interface ErrorData {
  message: string;
  stack?: string;
  url: string;
  userAgent: string;
  timestamp: string;
  type: "javascript" | "unhandledRejection" | "component";
}

const defaultOptions: ErrorHandlerOptions = {
  enableGlobalErrorHandling: true,
  enableUnhandledRejectionHandling: true,
  logToConsole: true,
  logToServer: true,
};

export const useErrorHandling = (options: ErrorHandlerOptions = {}) => {
  const config = { ...defaultOptions, ...options };

  const logError = useCallback(
    async (errorData: ErrorData) => {
      if (config.logToConsole) {
        console.error("Error logged:", errorData);
      }

      if (config.logToServer) {
        try {
          await fetch("/api/log-error", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(errorData),
          });
        } catch (err) {
          console.error("Failed to log error to server:", err);
        }
      }
    },
    [config]
  );

  const handleError = useCallback(
    (error: Error, type: ErrorData["type"] = "javascript") => {
      const errorData: ErrorData = {
        message: error.message,
        stack: error.stack,
        url: window.location.href,
        userAgent: navigator.userAgent,
        timestamp: new Date().toISOString(),
        type,
      };

      logError(errorData);
    },
    [logError]
  );

  const handleAsyncError = useCallback(
    async (asyncFn: () => Promise<any>) => {
      try {
        return await asyncFn();
      } catch (error) {
        handleError(error as Error, "component");
        throw error; // Re-throw para que el componente pueda manejar el error
      }
    },
    [handleError]
  );

  const safeAsyncCall = useCallback(
    async (asyncFn: () => Promise<any>, fallbackValue?: any) => {
      try {
        return await asyncFn();
      } catch (error) {
        handleError(error as Error, "component");
        return fallbackValue;
      }
    },
    [handleError]
  );

  useEffect(() => {
    if (
      !config.enableGlobalErrorHandling &&
      !config.enableUnhandledRejectionHandling
    ) {
      return;
    }

    const handleGlobalError = (event: ErrorEvent) => {
      const errorData: ErrorData = {
        message: event.message,
        stack: event.error?.stack,
        url: window.location.href,
        userAgent: navigator.userAgent,
        timestamp: new Date().toISOString(),
        type: "javascript",
      };

      logError(errorData);
    };

    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      const errorData: ErrorData = {
        message: event.reason?.message || "Unhandled Promise Rejection",
        stack: event.reason?.stack,
        url: window.location.href,
        userAgent: navigator.userAgent,
        timestamp: new Date().toISOString(),
        type: "unhandledRejection",
      };

      logError(errorData);
    };

    if (config.enableGlobalErrorHandling) {
      window.addEventListener("error", handleGlobalError);
    }

    if (config.enableUnhandledRejectionHandling) {
      window.addEventListener("unhandledrejection", handleUnhandledRejection);
    }

    return () => {
      if (config.enableGlobalErrorHandling) {
        window.removeEventListener("error", handleGlobalError);
      }
      if (config.enableUnhandledRejectionHandling) {
        window.removeEventListener(
          "unhandledrejection",
          handleUnhandledRejection
        );
      }
    };
  }, [config, logError]);

  return {
    handleError,
    handleAsyncError,
    safeAsyncCall,
    logError,
  };
};

// Hook específico para formularios
export const useFormErrorHandling = () => {
  const { handleError, safeAsyncCall } = useErrorHandling();

  const handleFormSubmit = useCallback(
    async (submitFn: () => Promise<any>, onError?: (error: Error) => void) => {
      try {
        return await submitFn();
      } catch (error) {
        const err = error as Error;
        handleError(err, "component");

        if (onError) {
          onError(err);
        } else {
          // Manejo por defecto de errores de formulario
          console.error("Form submission error:", err);
        }

        throw error;
      }
    },
    [handleError]
  );

  const safeFieldValidation = useCallback(
    async (validationFn: () => Promise<boolean>, fieldName: string) => {
      try {
        return await validationFn();
      } catch (error) {
        console.error(`Validation error for field ${fieldName}:`, error);
        handleError(error as Error, "component");
        return false; // Fallar la validación en caso de error
      }
    },
    [handleError]
  );

  return {
    handleFormSubmit,
    safeFieldValidation,
    safeAsyncCall,
  };
};

// Hook para manejo de errores de red
export const useNetworkErrorHandling = () => {
  const { handleError } = useErrorHandling();

  const handleNetworkError = useCallback(
    (error: Error, context?: string) => {
      const networkError = new Error(
        `Network error${context ? ` in ${context}` : ""}: ${error.message}`
      );
      networkError.stack = error.stack;

      handleError(networkError, "component");
    },
    [handleError]
  );

  const safeFetch = useCallback(
    async (input: RequestInfo | URL, init?: RequestInit) => {
      try {
        const response = await fetch(input, init);

        if (!response.ok) {
          throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }

        return response;
      } catch (error) {
        handleNetworkError(error as Error, "fetch");
        throw error;
      }
    },
    [handleNetworkError]
  );

  return {
    handleNetworkError,
    safeFetch,
  };
};
