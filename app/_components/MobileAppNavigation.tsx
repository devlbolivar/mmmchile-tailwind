"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  Radio,
  Calendar,
  MapPin,
  Users,
  BookOpen,
  User,
} from "lucide-react";

interface MobileAppNavigationProps {
  isVisible?: boolean;
}

const MobileAppNavigation = ({
  isVisible = true,
}: MobileAppNavigationProps) => {
  const pathname = usePathname();

  const navigationItems = [
    {
      id: "home",
      label: "Inicio",
      href: "/",
      icon: Home,
      isActive: pathname === "/",
    },
    {
      id: "radio",
      label: "Radio",
      href: "/radio",
      icon: Radio,
      isActive: pathname === "/radio",
      isLive: true,
    },
    {
      id: "events",
      label: "Eventos",
      href: "/eventos",
      icon: Calendar,
      isActive: pathname === "/eventos",
    },
    {
      id: "churches",
      label: "Iglesias",
      href: "/iglesias",
      icon: MapPin,
      isActive: pathname === "/iglesias",
    },
    {
      id: "doctrine",
      label: "Doctrina",
      href: "/doctrina",
      icon: BookOpen,
      isActive: pathname === "/doctrina",
    },
    {
      id: "officials",
      label: "Oficiales",
      href: "/oficiales-internacionales",
      icon: Users,
      isActive: pathname === "/oficiales-internacionales",
    },
    {
      id: "contact",
      label: "Contacto",
      href: "/contacto",
      icon: User,
      isActive: pathname === "/contacto",
    },
  ];

  // Solo mostrar en PWA móvil, no en navegador móvil normal
  // Verificación directa: solo mostrar si estamos en modo standalone
  if (typeof window === "undefined") return null;

  const isStandalone =
    window.matchMedia("(display-mode: standalone)").matches ||
    (window.navigator as { standalone?: boolean }).standalone === true;

  if (!isVisible || !isStandalone) return null;

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-[60] bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-lg md:hidden">
      <div className="flex items-center justify-around px-2 py-2">
        {navigationItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.id}
              href={item.href}
              className={`flex flex-col items-center justify-center p-2 rounded-lg transition-all duration-200 min-w-0 flex-1 ${
                item.isActive
                  ? "text-emerald-600 bg-emerald-50"
                  : "text-gray-600 hover:text-emerald-600 hover:bg-emerald-50"
              }`}
            >
              <div className="relative">
                <Icon
                  className={`w-5 h-5 ${
                    item.isActive ? "text-emerald-600" : "text-gray-600"
                  }`}
                />
                {item.isLive && (
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                )}
              </div>
              <span className="text-xs font-medium mt-1 truncate max-w-full">
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default MobileAppNavigation;
