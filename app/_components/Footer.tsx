"use client";
import React from "react";
import SocialMedia from "./SocialMedia";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";

const Footer = () => {
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
  };

  return (
    <footer className="bg-[var(--secondary-color)] text-white py-8 px-10 md:px-20 lg:px-40 relative">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 relative">
        <div>
          <h3 className="text-lg font-semibold mb-3">MMM Chile</h3>
          <p className="text-sm text-gray-400">
            Movimiento Misionero Mundial en Chile. Llevando el evangelio a toda
            criatura.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-3">Enlaces Rápidos</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                className=" cursor-pointer text-gray-400 hover:text-[var(--primary-color)] transition-colors"
                onClick={(e) => handleNavClick(e, "inicio")}
              >
                Inicio
              </a>
            </li>
            <li>
              <a
                className="cursor-pointer text-gray-400 hover:text-[var(--primary-color)] transition-colors"
                onClick={(e) => handleNavClick(e, "nosotros")}
              >
                Nosotros
              </a>
            </li>
            <li>
              <Link
                className="cursor-pointer text-gray-400 hover:text-[var(--primary-color)] transition-colors"
                href="/eventos"
              >
                Eventos
              </Link>
            </li>
            <li>
              <a
                className="cursor-pointer text-gray-400 hover:text-[var(--primary-color)] transition-colors"
                onClick={(e) => handleNavClick(e, "contacto")}
              >
                Contacto
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-3">Síguenos</h3>
          <SocialMedia />
        </div>
      </div>
      <div className="mt-5 border-t border-gray-700 pt-4 text-center text-sm text-gray-400 relative">
        © 2025 MMM Chile. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;
