import React from "react";
import type { Metadata } from "next";
import RadioClient from "./RadioClient";

export const metadata: Metadata = {
  title: "Radio Bethel Chile | Radio Cristiana en Vivo",
  description:
    "Escucha Radio Bethel Chile en vivo. Radio cristiana con predicaciones, estudios bíblicos y música de adoración las 24 horas. Sintoniza la palabra de Dios.",
  keywords: [
    "Radio Bethel Chile",
    "radio cristiana",
    "radio evangélica",
    "radio en vivo",
    "predicaciones cristianas",
    "música de adoración",
    "estudios bíblicos",
    "MMM Chile radio",
  ],
  openGraph: {
    title: "Radio Bethel Chile | Radio Cristiana en Vivo",
    description:
      "Escucha nuestra radio cristiana en vivo y mantente conectado con la palabra de Dios las 24 horas del día.",
    url: "https://mmmchile.cl/radio",
    images: [
      {
        url: "/images/logo-bethel.png",
        width: 800,
        height: 800,
        alt: "Radio Bethel Chile Logo",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Radio Bethel Chile | Radio Cristiana en Vivo",
    description: "Sintoniza Radio Bethel Chile y escucha la palabra de Dios en vivo.",
    images: ["/images/logo-bethel.png"],
  },
};

export default function Page() {
  return <RadioClient />;
}
