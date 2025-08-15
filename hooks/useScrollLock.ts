import { useEffect, useRef } from "react";

export const useScrollLock = (isLocked: boolean) => {
  const scrollPosition = useRef(0);

  useEffect(() => {
    if (typeof document === "undefined") return;

    if (isLocked) {
      // Guardar la posición actual del scroll
      scrollPosition.current = window.scrollY;

      // Aplicar bloqueo de scroll
      document.body.classList.add("mobile-menu-open");
      document.body.style.top = `-${scrollPosition.current}px`;

      // Prevenir scroll en todos los dispositivos móviles
      const preventScroll = (e: Event) => {
        e.preventDefault();
        e.stopPropagation();
        return false;
      };

      // Prevenir scroll en diferentes tipos de eventos
      document.addEventListener("touchmove", preventScroll, {
        passive: false,
        capture: true,
      });
      document.addEventListener("wheel", preventScroll, {
        passive: false,
        capture: true,
      });
      document.addEventListener("scroll", preventScroll, {
        passive: false,
        capture: true,
      });
      document.addEventListener(
        "keydown",
        (e) => {
          if (
            [
              "ArrowUp",
              "ArrowDown",
              "PageUp",
              "PageDown",
              "Home",
              "End",
              " ",
            ].includes(e.key)
          ) {
            e.preventDefault();
          }
        },
        { passive: false }
      );

      return () => {
        document.removeEventListener("touchmove", preventScroll, {
          capture: true,
        });
        document.removeEventListener("wheel", preventScroll, { capture: true });
        document.removeEventListener("scroll", preventScroll, {
          capture: true,
        });
      };
    } else {
      // Restaurar scroll
      document.body.classList.remove("mobile-menu-open");
      const currentTop = document.body.style.top;
      document.body.style.top = "";

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
        document.body.classList.remove("mobile-menu-open");
        document.body.style.top = "";
      }
    };
  }, []);
};
