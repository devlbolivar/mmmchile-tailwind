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
    <nav className={navClasses}>
      <a className={linkClasses} onClick={(e) => handleNavClick(e, "inicio")}>
        Inicio
      </a>
      <a className={linkClasses} onClick={(e) => handleNavClick(e, "nosotros")}>
        Nosotros
      </a>
      <Link className={linkClasses} href="/doctrina" onClick={onLinkClick}>
        Doctrina
      </Link>
      <Link className={linkClasses} href="/eventos" onClick={onLinkClick}>
        Eventos
      </Link>
      <Link className={linkClasses} href="/iglesias" onClick={onLinkClick}>
        Iglesias
      </Link>
      <a className={linkClasses} onClick={(e) => handleNavClick(e, "contacto")}>
        Contacto
      </a>
      <Link className={linkClasses} href="/radio" onClick={onLinkClick}>
        Radio <RadioIcon className="inline-block ml-1 h-4 w-4 text-green-500" />
      </Link>
    </nav>
  );
};

export default NavMenu;
