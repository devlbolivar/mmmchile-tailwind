"use client";
import { useState, useEffect, useCallback, useMemo } from "react";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

interface PWAState {
  isInstalled: boolean;
  isInstallable: boolean;
  isOnline: boolean;
  needsUpdate: boolean;
  canShowInstallPrompt: boolean;
  isIOS: boolean;
  showManualInstall: boolean;
  isMobile: boolean;
  isStandalone: boolean;
  isPWA: boolean; // Alias for isStandalone for backward compatibility
}

export const usePWA = () => {
  const [deferredPrompt, setDeferredPrompt] =
    useState<BeforeInstallPromptEvent | null>(null);
  const [state, setState] = useState<PWAState>({
    isInstalled: false,
    isInstallable: false,
    isOnline: true,
    needsUpdate: false,
    canShowInstallPrompt: false,
    isIOS: false,
    showManualInstall: false,
    isMobile: false,
    isStandalone: false,
    isPWA: false,
  });

  // Detect Mobile/iOS
  const isIOSDevice = useCallback(() => {
    if (typeof window === "undefined") return false;
    return (
      /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream
    );
  }, []);

  const isMobileDevice = useCallback(() => {
    if (typeof window === "undefined") return false;
    return (
      /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      ) || window.innerWidth < 768
    );
  }, []);

  // Robust installation check
  const checkIfInstalled = useCallback(() => {
    if (typeof window === "undefined") return false;

    try {
      // 1. Check standard display modes
      const isStandalone = window.matchMedia(
        "(display-mode: standalone)"
      ).matches;

      // 2. Check iOS standalone
      const isIOSStandalone =
        (window.navigator as any).standalone === true;

      // 3. Check Android Trusted Web Activity
      const isAndroidApp = document.referrer.includes("android-app://");

      // 4. Check LocalStorage fallback (user previously installed via our button)
      const isInstalledByStorage = localStorage.getItem("pwa-installed") === "true";

      return isStandalone || isIOSStandalone || isAndroidApp || isInstalledByStorage;
    } catch (error) {
      console.warn("Error checking PWA installation:", error);
      return false;
    }
  }, []);

  const updateState = useCallback(() => {
    if (typeof window === "undefined") return;

    const installed = checkIfInstalled();
    const ios = isIOSDevice();
    const mobile = isMobileDevice();
    const online = navigator.onLine;
    const hasPrompt = !!deferredPrompt;

    // Determine installability
    // Installable if: Not installed AND (Has native prompt OR (Is iOS AND Online))
    const installable = !installed && (hasPrompt || (ios && online));

    // Show native prompt if we have the event
    const canShowPrompt = !installed && hasPrompt && online;

    // Show manual instructions if iOS, not installed, and online
    const showManual = !installed && ios && online && !hasPrompt;

    setState((prev) => {
      const newState = {
        ...prev,
        isInstalled: installed,
        isInstallable: installable,
        isOnline: online,
        canShowInstallPrompt: canShowPrompt,
        isIOS: ios,
        showManualInstall: showManual,
        isMobile: mobile,
        isStandalone: installed,
        isPWA: installed,
      };

      // Simple shallow comparison to prevent unnecessary re-renders
      const hasChanged = Object.keys(newState).some(
        (key) => newState[key as keyof PWAState] !== prev[key as keyof PWAState]
      );

      return hasChanged ? newState : prev;
    });
  }, [checkIfInstalled, isIOSDevice, isMobileDevice, deferredPrompt]);

  // Event Handlers
  const handleBeforeInstallPrompt = useCallback((e: Event) => {
    e.preventDefault();
    setDeferredPrompt(e as BeforeInstallPromptEvent);
  }, []);

  const handleAppInstalled = useCallback(() => {
    setDeferredPrompt(null);
    updateState();
  }, [updateState]);

  const updateOnlineStatus = useCallback(() => {
    updateState();
  }, [updateState]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    updateState();

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    window.addEventListener("appinstalled", handleAppInstalled);
    window.addEventListener("online", updateOnlineStatus);
    window.addEventListener("offline", updateOnlineStatus);
    window.addEventListener("resize", updateState); // Check mobile status on resize

    const mediaQuery = window.matchMedia("(display-mode: standalone)");
    mediaQuery.addEventListener("change", updateState);

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
      window.removeEventListener("appinstalled", handleAppInstalled);
      window.removeEventListener("online", updateOnlineStatus);
      window.removeEventListener("offline", updateOnlineStatus);
      window.removeEventListener("resize", updateState);
      mediaQuery.removeEventListener("change", updateState);
    };
  }, [handleBeforeInstallPrompt, handleAppInstalled, updateOnlineStatus, updateState]);

  // Actions
  const installPWA = useCallback(async (): Promise<boolean> => {
    if (!deferredPrompt) return false;
    try {
      await deferredPrompt.prompt();
      const choice = await deferredPrompt.userChoice;
      if (choice.outcome === "accepted") {
        setDeferredPrompt(null);
        // Save installed state
        if (typeof window !== "undefined") {
          localStorage.setItem("pwa-installed", "true");
        }
        // Force state update
        updateState();
        return true;
      }
      return false;
    } catch (err) {
      console.error("Install failed", err);
      return false;
    }
  }, [deferredPrompt, updateState]);

  const shareContent = useCallback(async (data: { title?: string; text?: string; url?: string }) => {
    if (navigator.share) {
      try {
        await navigator.share(data);
        return true;
      } catch (error) {
        console.error("Share failed", error);
        return false;
      }
    }
    return false;
  }, []);

  const contextValue = useMemo(() => ({
    ...state,
    deferredPrompt,
    installPWA,
    shareContent,
    canInstall: state.isInstallable, // Alias
  }), [state, deferredPrompt, installPWA, shareContent]);

  return contextValue;
};
