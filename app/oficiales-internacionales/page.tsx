import { Metadata } from "next";
import OficialesInternacionales from "./_components/OficialesInternacionales";

export const metadata: Metadata = {
  title: "Oficiales Internacionales - Movimiento Misionero Mundial",
  description:
    "Conoce a los líderes internacionales del Movimiento Misionero Mundial. Presidente, Vicepresidente, Directores y más autoridades del MMM.",
  keywords:
    "oficiales internacionales, MMM, Movimiento Misionero Mundial, liderazgo, presidente, vicepresidente",
  openGraph: {
    title: "Oficiales Internacionales - MMM",
    description: "Líderes internacionales del Movimiento Misionero Mundial",
    type: "website",
  },
};

export default function OficialesInternacionalesPage() {
  return <OficialesInternacionales />;
}
