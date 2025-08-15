import React from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { RadioIcon } from "lucide-react";

interface NavMenuProps {
  isMobile?: boolean;
  onLinkClick?: () => void;
}

const NavMenu = ({ isMobile = false, onLinkClick }: NavMenuProps) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleNavClick = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();

    if (pathname !== "/") {
      // Si no estamos en la página principal, primero navegamos a ella
      router.push("/");
      // Esperamos a que la navegación se complete antes de hacer scroll
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 200);
    } else {
      // Si ya estamos en la página principal, solo hacemos scroll
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
    onLinkClick?.();
  };

  const navClasses = isMobile
    ? "flex flex-col items-center justify-center gap-8 text-white"
    : "hidden md:flex items-center gap-6 text-white";

  const linkClasses = isMobile
    ? "nav-link text-lg font-medium cursor-pointer hover:text-[var(--primary-color)] transition-colors text-white"
    : "nav-link text-sm font-medium cursor-pointer text-white hover:text-[var(--primary-color)]";

  return (
    <nav
      className={navClasses}
      role="navigation"
      aria-label="Navegación principal"
    >
      <button
        className={linkClasses}
        onClick={(e) => handleNavClick(e, "inicio")}
        type="button"
        aria-describedby="inicio-desc"
      >
        Inicio
        <span id="inicio-desc" className="sr-only">
          Ir a la sección de inicio
        </span>
      </button>

      <button
        className={linkClasses}
        onClick={(e) => handleNavClick(e, "nosotros")}
        type="button"
        aria-describedby="nosotros-desc"
      >
        Nosotros
        <span id="nosotros-desc" className="sr-only">
          Conocer sobre el movimiento
        </span>
      </button>

      <Link
        className={linkClasses}
        href="/doctrina"
        onClick={onLinkClick}
        aria-describedby="doctrina-desc"
      >
        Doctrina
        <span id="doctrina-desc" className="sr-only">
          Ver doctrina y creencias
        </span>
      </Link>

      <Link
        className={linkClasses}
        href="/eventos"
        onClick={onLinkClick}
        aria-describedby="eventos-desc"
      >
        Eventos
        <span id="eventos-desc" className="sr-only">
          Ver eventos y actividades
        </span>
      </Link>

      <Link
        className={linkClasses}
        href="/iglesias"
        onClick={onLinkClick}
        aria-describedby="iglesias-desc"
      >
        Iglesias
        <span id="iglesias-desc" className="sr-only">
          Encontrar iglesias cercanas
        </span>
      </Link>

      <button
        className={linkClasses}
        onClick={(e) => handleNavClick(e, "contacto")}
        type="button"
        aria-describedby="contacto-desc"
      >
        Contacto
        <span id="contacto-desc" className="sr-only">
          Ir a la sección de contacto
        </span>
      </button>

      <Link
        className={linkClasses}
        href="/aniversario"
        onClick={onLinkClick}
        aria-describedby="aniversario-desc"
      >
        Aniversario
        <span id="aniversario-desc" className="sr-only">
          Ver celebración del aniversario
        </span>
      </Link>

      <Link
        className={linkClasses}
        href="/radio"
        onClick={onLinkClick}
        aria-describedby="radio-desc"
        aria-label="Radio en vivo"
      >
        Radio
        <RadioIcon
          className="inline-block ml-1 h-4 w-4 text-green-500"
          aria-hidden="true"
        />
        <span className="sr-only">- Escuchar radio en vivo</span>
        <span id="radio-desc" className="sr-only">
          Escuchar transmisión de radio en vivo
        </span>
      </Link>
    </nav>
  );
};

export default NavMenu;
