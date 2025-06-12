import React from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

const NavMenu = () => {
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
      }, 100);
    } else {
      // Si ya estamos en la página principal, solo hacemos scroll
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav className="hidden md:flex items-center gap-6">
      <a
        className="nav-link text-sm font-medium cursor-pointer"
        onClick={(e) => handleNavClick(e, "inicio")}
      >
        Inicio
      </a>
      <a
        className="nav-link text-sm font-medium cursor-pointer"
        onClick={(e) => handleNavClick(e, "nosotros")}
      >
        Nosotros
      </a>
      <Link className="nav-link text-sm font-medium" href="/doctrina">
        Doctrina
      </Link>
      <a
        className="nav-link text-sm font-medium cursor-pointer"
        onClick={(e) => handleNavClick(e, "eventos")}
      >
        Eventos
      </a>
      <Link className="nav-link text-sm font-medium" href="/iglesias">
        Iglesias
      </Link>
      <a
        className="nav-link text-sm font-medium cursor-pointer"
        onClick={(e) => handleNavClick(e, "contacto")}
      >
        Contacto
      </a>
    </nav>
  );
};

export default NavMenu;
