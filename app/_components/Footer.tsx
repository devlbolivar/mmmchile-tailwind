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
    <footer className="bg-[var(--secondary-color)] text-white pt-12 pb-6 px-6 md:px-10 lg:px-20 relative border-t border-white/5">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 relative">
        {/* Brand */}
        <div className="sm:col-span-2 md:col-span-1">
          <h3 className="text-lg font-bold mb-3 text-white">MMM Chile</h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            Movimiento Misionero Mundial en Chile. Llevando el evangelio de
            Jesucristo a toda criatura.
          </p>
        </div>

        {/* Páginas */}
        <div>
          <h3 className="text-sm font-semibold mb-4 text-gray-300 uppercase tracking-wider">Páginas</h3>
          <ul className="space-y-2.5 text-sm">
            <li>
              <a
                className="cursor-pointer text-gray-400 hover:text-[var(--primary-color)] transition-colors"
                onClick={(e) => handleNavClick(e, "nosotros")}
              >
                Nosotros
              </a>
            </li>
            <li>
              <Link className="text-gray-400 hover:text-[var(--primary-color)] transition-colors" href="/doctrina">
                Doctrina
              </Link>
            </li>
            <li>
              <Link className="text-gray-400 hover:text-[var(--primary-color)] transition-colors" href="/iglesias">
                Iglesias
              </Link>
            </li>
            <li>
              <Link className="text-gray-400 hover:text-[var(--primary-color)] transition-colors" href="/aniversario">
                Aniversario
              </Link>
            </li>
            <li>
              <Link className="text-gray-400 hover:text-[var(--primary-color)] transition-colors" href="/oficiales-internacionales">
                Oficiales Int.
              </Link>
            </li>
          </ul>
        </div>

        {/* Info */}
        <div>
          <h3 className="text-sm font-semibold mb-4 text-gray-300 uppercase tracking-wider">Más</h3>
          <ul className="space-y-2.5 text-sm">
            <li>
              <Link className="text-gray-400 hover:text-[var(--primary-color)] transition-colors" href="/radio">
                Radio en Vivo
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
            <li>
              <Link className="text-gray-400 hover:text-[var(--primary-color)] transition-colors" href="/sitemap-page">
                Mapa del Sitio
              </Link>
            </li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-sm font-semibold mb-4 text-gray-300 uppercase tracking-wider">Síguenos</h3>
          <SocialMedia />
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto mt-10 border-t border-white/10 pt-5 text-center text-sm text-gray-500">
        © 2026 Movimiento Misionero Mundial Chile. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;
