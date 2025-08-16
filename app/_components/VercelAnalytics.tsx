"use client";

import { useEffect, useState } from "react";
import { Analytics } from "@vercel/analytics/next";

const VercelAnalytics = () => {
  const [mounted, setMounted] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    // Solo ejecutar en el cliente
    if (typeof window === "undefined") return;

    try {
      setMounted(true);
    } catch (error) {
      console.warn("Vercel Analytics error:", error);
      setHasError(true);
    }
  }, []);

  // No renderizar nada hasta estar montado o si hay error
  if (!mounted || hasError) {
    return null;
  }

  return <Analytics />;
};

export default VercelAnalytics;
