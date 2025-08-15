import { Metadata } from "next";
import OfflineComponent from "./_components/OfflineComponent";

export const metadata: Metadata = {
  title: "Sin conexión",
  description: "Página offline de MMM Chile",
  robots: {
    index: false,
    follow: false,
  },
};

export default function OfflinePage() {
  return <OfflineComponent />;
}
