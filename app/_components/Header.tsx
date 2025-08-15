"use client";
import React, { useState, useEffect } from "react";
import NavMenu from "./NavMenu";
import SocialMedia from "./SocialMedia";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import { imageConfig } from "../utils/image-placeholders";
import { useScrollLock } from "../../hooks/useScrollLock";

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // Solo ejecutar en el cliente
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      setIsVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  // Use custom hook for scroll locking
  useScrollLock(isMobileMenuOpen);

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();

    if (pathname !== "/") {
      // Si no estamos en la página principal, primero navegamos a ella
      router.push("/");
      // Esperamos a que la navegación se complete antes de hacer scroll
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 200);
    } else {
      // Si ya estamos en la página principal, solo hacemos scroll
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed w-full top-0 z-50 bg-[var(--background-light)]/10 backdrop-blur-md shadow-sm transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between whitespace-nowrap px-6 py-4">
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={handleLogoClick}
        >
          <div className="size-8">
            <Image
              src="/images/logo.png"
              alt="Logotipo del Movimiento Misionero Mundial Chile"
              className="w-full h-full object-contain"
              width={imageConfig.logo.width}
              height={imageConfig.logo.height}
              quality={imageConfig.logo.quality}
              priority={imageConfig.logo.priority}
              placeholder="blur"
              blurDataURL={imageConfig.logo.placeholder}
            />
          </div>
          <h2 className="text-xl font-bold tracking-tight text-white">
            MMM Chile
          </h2>
        </div>
        <NavMenu />
        <div className="hidden md:flex items-center gap-4">
          <SocialMedia />
        </div>
        <button
          className="md:hidden text-white p-2 rounded-md hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/50 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={
            isMobileMenuOpen
              ? "Cerrar menú de navegación"
              : "Abrir menú de navegación"
          }
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
          aria-haspopup="true"
        >
          {isMobileMenuOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-40 transition-transform duration-300 md:hidden mobile-menu-overlay ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{
          top: "64px",
          height: "calc(100vh - 64px)",
        }}
        role="dialog"
        aria-modal="true"
        aria-labelledby="mobile-menu-title"
      >
        {/* Backdrop para cerrar el menú */}
        <div
          className="absolute inset-0 bg-black/50"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-hidden="true"
        />

        <div className="relative bg-[var(--secondary-color)] flex flex-col items-center justify-center h-full gap-8 mobile-menu-overlay">
          {/* Skip to content link */}
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-white text-black px-4 py-2 rounded z-50"
          >
            Ir al contenido principal
          </a>

          <h2 id="mobile-menu-title" className="sr-only">
            Menú de navegación móvil
          </h2>
          <NavMenu isMobile onLinkClick={() => setIsMobileMenuOpen(false)} />
        </div>
      </div>
    </header>
  );
};

export default Header;
