import { Doctrina } from "./app/types";

export const zonas = [
  {
    id: 1,
    name: "Zona Norte",
    description: "Zona Norte",
    iglesias: [
      {
        id: 1,
        name: "Iglesia de Arica",
        description: "Iglesia de Arica",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuAJHkVESH5u-hdfZ02CN0CNBmcTYQAdW0uSoBaSr9BsOiQzVgxVu6Z6xJcCt8ATkvkM6_8IMjeBkRpkgQlKxTIXlXlyAOTeYPOFW0m42_Ljnjb0brSUpLBEG7sH0fTwQy2N1xcao7a-bF8PcXdeqqtvdmg78iVWP_cr2yrD9PROlfmSdckDZpRPdeVNv4TKj7tYfKCU8iseT6dwi0keNFMQ-HZ_0Y-OcJg_1gmlEFEFG3HwIGRdMT24bTHfBXPGz3hmrPrwPw3ilZc",
        address: "Calle Principal 123, Arica",
        phone: "9 1234 5678",
        email: "info@iglesiaarica.cl",
        website: "https://www.iglesiaarica.cl",
        pastor: "José Ramírez",
        services: ["Domingos 10 AM y 6 PM", "Miércoles 7 PM"],
        city: "Arica",
        region: "Arica y Parinacota",
        country: "Chile",
        latitude: -18.4719,
        longitude: -70.2961,
        createdAt: new Date(),
        updatedAt: new Date(),
        status: "active",
      },
      {
        id: 2,
        name: "Iglesia de Iquique",
        description: "Iglesia de Iquique",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuCstyja30Ifnev76RFaTPLHZv13ZG7SKH70TA1TvwijP4iWz3jWWueAMYzdvhB-gzB93k-I7Z1QVmTP7R077-73n4Evpi_CkkJgssS45xyEkSa2hsi4L_U-UyC1L2kKOmCdV6LXiROFKTAKBJhoskQvdoY9G8l9V1qd-NQdLlXw8qgqAKsDU8pjbK_B9SzUtVSqDLYVeRYo_HGysgfEGkAv2aYpQcueEpoYujmxYuUJS2pLUtw3RhOt6rBFrGqqYGAuxi_E4zPuynE",
        address: "Avenida Central 456, Iquique",
        phone: "9 8765 4321",
        email: "info@iglesiaiquique.cl",
        website: "https://www.iglesiaiquique.cl",
        pastor: "María González",
        services: ["Domingos 10 AM y 6 PM", "Miércoles 7 PM"],
        city: "Iquique",
        region: "Iquique",
        country: "Chile",
        latitude: -18.4719,
        longitude: -70.2961,
        createdAt: new Date(),
        updatedAt: new Date(),
        status: "active",
      },
      {
        id: 3,
        name: "Iglesia de Antofagasta",
        description: "Iglesia de Antofagasta",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuCstyja30Ifnev76RFaTPLHZv13ZG7SKH70TA1TvwijP4iWz3jWWueAMYzdvhB-gzB93k-I7Z1QVmTP7R077-73n4Evpi_CkkJgssS45xyEkSa2hsi4L_U-UyC1L2kKOmCdV6LXiROFKTAKBJhoskQvdoY9G8l9V1qd-NQdLlXw8qgqAKsDU8pjbK_B9SzUtVSqDLYVeRYo_HGysgfEGkAv2aYpQcueEpoYujmxYuUJS2pLUtw3RhOt6rBFrGqqYGAuxi_E4zPuynE",
        address: "Avenida Central 456, Antofagasta",
        phone: "9 8765 4321",
        email: "info@iglesiaantofagasta.cl",
        website: "https://www.iglesiaantofagasta.cl",
        pastor: "Juan Pérez",
        services: ["Domingos 10 AM y 6 PM", "Miércoles 7 PM"],
        city: "Antofagasta",
        region: "Antofagasta",
        country: "Chile",
        latitude: -18.4719,
        longitude: -70.2961,
        createdAt: new Date(),
        updatedAt: new Date(),
        status: "active",
      },
    ],
  },
  {
    id: 2,
    name: "Zona Centro-Norte",
    description: "Zona Centro-Norte",
    iglesias: [],
  },
  {
    id: 3,
    name: "Zona Centro",
    description: "Zona Centro",
    iglesias: [
      {
        id: 4,
        name: "Iglesia de Santiago",
        description: "Iglesia de Santiago",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuCstyja30Ifnev76RFaTPLHZv13ZG7SKH70TA1TvwijP4iWz3jWWueAMYzdvhB-gzB93k-I7Z1QVmTP7R077-73n4Evpi_CkkJgssS45xyEkSa2hsi4L_U-UyC1L2kKOmCdV6LXiROFKTAKBJhoskQvdoY9G8l9V1qd-NQdLlXw8qgqAKsDU8pjbK_B9SzUtVSqDLYVeRYo_HGysgfEGkAv2aYpQcueEpoYujmxYuUJS2pLUtw3RhOt6rBFrGqqYGAuxi_E4zPuynE",
        address: "Avenida Central 456, Santiago",
        phone: "9 8765 4321",
        email: "info@iglesiaantofagasta.cl",
        website: "https://www.iglesiaantofagasta.cl",
        pastor: "Juan Pérez",
        services: ["Domingos 10 AM y 6 PM", "Miércoles 7 PM"],
        city: "Antofagasta",
        region: "Antofagasta",
        country: "Chile",
        latitude: -18.4719,
        longitude: -70.2961,
        createdAt: new Date(),
        updatedAt: new Date(),
        status: "active",
      },
    ],
  },
  {
    id: 4,
    name: "Zona Centro-Sur",
    description: "Zona Centro-Sur",
    iglesias: [],
  },
  {
    id: 5,
    name: "Zona Sur",
    description: "Zona Sur",
    iglesias: [
      {
        id: 5,
        name: "Iglesia de Concepción",
        description: "Iglesia de Concepción",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuCstyja30Ifnev76RFaTPLHZv13ZG7SKH70TA1TvwijP4iWz3jWWueAMYzdvhB-gzB93k-I7Z1QVmTP7R077-73n4Evpi_CkkJgssS45xyEkSa2hsi4L_U-UyC1L2kKOmCdV6LXiROFKTAKBJhoskQvdoY9G8l9V1qd-NQdLlXw8qgqAKsDU8pjbK_B9SzUtVSqDLYVeRYo_HGysgfEGkAv2aYpQcueEpoYujmxYuUJS2pLUtw3RhOt6rBFrGqqYGAuxi_E4zPuynE",
        address: "Avenida Central 456, Concepción",
        phone: "9 8765 4321",
        email: "info@iglesiaantofagasta.cl",
        website: "https://www.iglesiaantofagasta.cl",
        pastor: "Juan Pérez",
        services: ["Domingos 10 AM y 6 PM", "Miércoles 7 PM"],
        city: "Antofagasta",
        region: "Antofagasta",
        country: "Chile",
        latitude: -18.4719,
        longitude: -70.2961,
        createdAt: new Date(),
        updatedAt: new Date(),
        status: "active",
      },
    ],
  },
];

export const doctrina: Doctrina[] = [
  {
    id: 1,
    name: "La Inspiración De Las Sagradas Escrituras",
    description:
      "La Biblia es la Palabra inspirada de Dios... regla infalible de fe y conducta.",
    verses: ["2 Timoteo 3:15-17", "2 Pedro 1:19-21"],
  },
  {
    id: 2,
    name: "La Salvación Por La Fe En Cristo",
    description:
      "La salvación del alma es una transformación... nuevo nacimiento.",
    verses: [
      "Lucas 24:47",
      "Juan 3:16",
      "Romanos 10:13",
      "Tito 2:11",
      "Tito 3:5-7",
    ],
  },
  {
    id: 3,
    name: "Justificación Por La Fe",
    description:
      "Por medio de la fe el hombre puede ser salvo... Cristo es el único mediador.",
    verses: ["Romanos 5:1", "Tito 3:7"],
  },
  {
    id: 4,
    name: "El Bautismo En Agua Por Inmersión",
    description:
      "Toda persona arrepentida debe cumplir el mandato bíblico de bautizarse en agua.",
    verses: ["Mateo 28:19", "Hechos 8:36-39"],
  },
  {
    id: 5,
    name: "El Bautismo En El Espíritu Santo",
    description:
      "El bautismo en el Espíritu Santo es la investidura de poder... hablando en otras lenguas.",
    verses: ["Lucas 24:49", "Hechos 1:4", "Hechos 1:8", "Hechos 2:4"],
  },
  {
    id: 6,
    name: "La Sanidad Divina",
    description:
      "La enfermedad es consecuencia del pecado... provisión para el perdón y la enfermedad.",
    verses: [
      "Isaías 53:4",
      "Mateo 8:16-17",
      "Marcos 16:18",
      "Santiago 5:14-15",
    ],
  },
  {
    id: 7,
    name: "El Fruto Del Espíritu",
    description:
      "Cuando los dones operan, la iglesia no debe olvidar el amor y frutos del Espíritu.",
    verses: ["Gálatas 5:22-26", "Efesios 4:13"],
  },
  {
    id: 8,
    name: "La Santificación",
    description:
      "La verdadera santidad tiene aspecto interno y externo... creer santificado.",
    verses: [
      "1 Tesalonicenses 4:3",
      "1 Tesalonicenses 5:23",
      "Hebreos 12:14",
      "1 Pedro 1:15-16",
      "1 Juan 2:6",
    ],
  },
  {
    id: 9,
    name: "El Ministerio Y La Evangelización",
    description:
      "Los cristianos deben esforzarse en reunión, comunión, servicio, adoración y evangelización.",
    verses: ["Marcos 16:15-20", "Romanos 10:15"],
  },
  {
    id: 10,
    name: "El Diezmo Y El Sostenimiento De La Iglesia",
    description:
      "El creyente debe cumplir obligaciones para sostener a su obra y al obrero.",
    verses: [
      "Génesis 14:20",
      "Génesis 28:22",
      "Levítico 27:30",
      "Números 18:21-26",
      "Malaquías 3:7-10",
      "Mateo 10:10",
      "Mateo 23:23",
    ],
  },
  {
    id: 11,
    name: "El Levantamiento De La Iglesia",
    description:
      "Promesa de Dios de resurrección de los muertos en Cristo para estar con el Señor.",
    verses: [
      "Romanos 8:23",
      "1 Corintios 15:51-52",
      "1 Tesalonicenses 4:16-17",
    ],
  },
  {
    id: 12,
    name: "La Segunda Venida De Cristo",
    description:
      "Después del rapto vendrá la aparición de Cristo... librará Israel del Anticristo.",
    verses: [
      "Zacarías 14:1-9",
      "Mateo 24:30-31",
      "2 Tesalonicenses 1:7",
      "Tito 2:13",
      "Judas 14-15",
    ],
  },
  {
    id: 13,
    name: "El Reino Milenial",
    description:
      "Periodo de mil años donde Cristo reinará sobre la tierra, comenzando tras su segunda venida.",
    verses: [
      "Isaías 2:1-4",
      "Isaías 11:5-10",
      "Zacarías 9:10",
      "Apocalipsis 19:20",
      "Apocalipsis 20:3-10",
    ],
  },
  {
    id: 14,
    name: "Cielos Nuevos Y Tierras Nuevas",
    description:
      "Lugar físico donde moraremos con cuerpos glorificados, libre de pecado y sufrimiento.",
    verses: [
      "Isaías 65:17",
      "Isaías 66:22",
      "2 Pedro 3:13",
      "Apocalipsis 21:1",
    ],
  },
];
