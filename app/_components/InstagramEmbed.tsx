"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    instgrm?: {
      Embeds: {
        process: () => void;
      };
    };
  }
}

export default function InstagramEmbed() {
  useEffect(() => {
    // Solo ejecutar en el cliente
    if (typeof window === "undefined" || typeof document === "undefined")
      return;

    // Cargar el script de Instagram si aún no está
    if (!window.instgrm) {
      const script = document.createElement("script");
      script.src = "https://www.instagram.com/embed.js";
      script.async = true;
      document.body.appendChild(script);
    } else {
      window.instgrm.Embeds.process(); // Re-renderiza embebidos
    }
  }, []);

  return (
    <blockquote
      className="instagram-media"
      data-instgrm-captioned
      data-instgrm-permalink="https://www.instagram.com/reel/DKvpP3Juj5Q/?utm_source=ig_web_copy_link"
      data-instgrm-version="14"
      style={{
        background: "#FFF",
        border: 0,
        borderRadius: "3px",
        boxShadow: "0 0 1px 0 rgba(0,0,0,0.5),0 0 10px 0 rgba(0,0,0,0.15)",
        margin: "1px",
        maxWidth: "540px",
        width: "100%",
      }}
    ></blockquote>
  );
}
