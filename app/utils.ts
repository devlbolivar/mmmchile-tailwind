import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export const handleNavClick = (
  e: React.MouseEvent,
  sectionId: string,
  pathname: string,
  router: AppRouterInstance
) => {
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
