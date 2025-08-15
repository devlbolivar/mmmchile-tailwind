import { useState, useEffect } from "react";

export function useIsPhone() {
  const [isPhone, setIsPhone] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Solo ejecutar en el cliente
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia("(max-width: 640px)");

    const handleResize = (e: MediaQueryListEvent | MediaQueryList) => {
      setIsPhone(e.matches);
    };

    // Set initial value
    handleResize(mediaQuery);

    // Add event listener
    mediaQuery.addEventListener("change", handleResize);

    // Cleanup
    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  // Retornar false hasta que esté montado
  return mounted ? isPhone : false;
}
