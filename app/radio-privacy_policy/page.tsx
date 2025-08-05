import { redirect } from "next/navigation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidad de Radio - Redirigiendo",
  description: "Esta página ha sido movida. Redirigiendo a la nueva ubicación.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function RadioPrivacyPolicyPage() {
  // Redirección 301 permanente a la página principal
  redirect("/");
}
