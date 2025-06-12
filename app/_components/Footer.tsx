import React from "react";
import SocialMedia from "./SocialMedia";

const Footer = () => {
  return (
    <footer className="bg-[var(--secondary-color)] text-white py-12 px-10 md:px-20 lg:px-40">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
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
                className="text-gray-400 hover:text-[var(--primary-color)] transition-colors"
                href="#"
              >
                Inicio
              </a>
            </li>
            <li>
              <a
                className="text-gray-400 hover:text-[var(--primary-color)] transition-colors"
                href="#"
              >
                Nosotros
              </a>
            </li>
            <li>
              <a
                className="text-gray-400 hover:text-[var(--primary-color)] transition-colors"
                href="#"
              >
                Eventos
              </a>
            </li>
            <li>
              <a
                className="text-gray-400 hover:text-[var(--primary-color)] transition-colors"
                href="#"
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
      <div className="mt-10 border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
        © 2025 MMM Chile. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;
