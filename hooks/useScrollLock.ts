import { useEffect, useRef } from "react";

export const useScrollLock = (isLocked: boolean) => {
  const scrollPosition = useRef(0);

  useEffect(() => {
    if (typeof document === "undefined") return;

    if (isLocked) {
      // Guardar la posición actual del scroll
      scrollPosition.current = window.scrollY;

      // Aplicar bloqueo de scroll solo al body, no a los modales
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollPosition.current}px`;
      document.body.style.width = "100%";

      // Solo prevenir scroll en el body, no en elementos hijos
      const preventBodyScroll = (e: Event) => {
        if (
          e.target === document.body ||
          e.target === document.documentElement
        ) {
          e.preventDefault();
          e.stopPropagation();
          return false;
        }
      };

      // Prevenir scroll solo en el body
      document.addEventListener("scroll", preventBodyScroll, {
        passive: false,
        capture: true,
      });

      return () => {
        document.removeEventListener("scroll", preventBodyScroll, {
          capture: true,
        });
      };
    } else {
      // Restaurar scroll
      document.body.style.overflow = "";
      document.body.style.position = "";
      const currentTop = document.body.style.top;
      document.body.style.top = "";
      document.body.style.width = "";

      if (currentTop) {
        const scrollY = parseInt(currentTop.replace("-", ""));
        if (!isNaN(scrollY)) {
          window.scrollTo(0, scrollY);
        }
      }
    }
  }, [isLocked]);

  // Cleanup al desmontar
  useEffect(() => {
    return () => {
      if (typeof document !== "undefined") {
        document.body.style.overflow = "";
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.width = "";
      }
    };
  }, []);
};
