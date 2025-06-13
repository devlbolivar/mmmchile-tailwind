import { useState, useEffect } from "react";

export function useIsPhone() {
  const [isPhone, setIsPhone] = useState(false);

  useEffect(() => {
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

  return isPhone;
}
