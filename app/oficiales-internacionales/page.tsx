import { redirect } from "next/navigation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Oficiales Internacionales - Redirigiendo",
  description: "Esta página ha sido movida. Redirigiendo a la nueva ubicación.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function OficialesInternacionalesPage() {
  // Redirección 301 permanente a la página principal
  redirect("/");
}
