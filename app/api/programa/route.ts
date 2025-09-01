import { NextResponse } from "next/server";

export async function GET() {
  const data = {
    programacion: [
      {
        dia: "Lunes",
        titulo: "Programación de Lunes",
        programas: [
          {
            hora: "03H /08H CL",
            nombre: "Mensaje a la Conciencia",
          },
          {
            hora: "09H CL",
            nombre: "Día a Día con Dios",
          },
          {
            hora: "10H / 22H CL",
            nombre: "Biblia Maestra",
          },
          {
            hora: "12:05H CL",
            nombre: "Prédicas",
          },
          {
            hora: "14:30H CL",
            nombre: "The Bible Project",
          },
          {
            hora: "18H CL",
            nombre: "Devocional: Belleza Espiritual",
          },
          {
            hora: "23H CL",
            nombre: "Me Contó un Amigo",
          },
        ],
      },
      {
        dia: "Martes",
        titulo: "Programación de Martes",
        programas: [
          {
            hora: "03H /08H CL",
            nombre: "Mensaje a la Conciencia",
          },
          {
            hora: "09H CL",
            nombre: "Día a Día con Dios",
          },
          {
            hora: "10H / 22H CL",
            nombre: "Biblia Maestra",
          },
          {
            hora: "12:05H CL",
            nombre: "Prédicas",
          },
          {
            hora: "14:30H CL",
            nombre: "The Bible Project",
          },
          {
            hora: "18H CL",
            nombre: "Devocional: Belleza Espiritual",
          },
          {
            hora: "19:15H CL",
            nombre: "En vivo: Culto Templo Central",
          },
          {
            hora: "23H CL",
            nombre: "Me Contó un Amigo",
          },
        ],
      },
      {
        dia: "Miércoles",
        titulo: "Programación de Miércoles",
        programas: [
          {
            hora: "03H /08H CL",
            nombre: "Mensaje a la Conciencia",
          },
          {
            hora: "09H CL",
            nombre: "Día a Día con Dios",
          },
          {
            hora: "10H / 22H CL",
            nombre: "Biblia Maestra",
          },
          {
            hora: "12:05H CL",
            nombre: "Prédicas",
          },
          {
            hora: "14:30H CL",
            nombre: "The Bible Project",
          },
          {
            hora: "18H CL",
            nombre: "Devocional: Belleza Espiritual",
          },
          {
            hora: "23H CL",
            nombre: "Me Contó un Amigo",
          },
        ],
      },
      {
        dia: "Jueves",
        titulo: "Programación de Jueves",
        programas: [
          {
            hora: "03H /08H CL",
            nombre: "Mensaje a la Conciencia",
          },
          {
            hora: "09H CL",
            nombre: "Día a Día con Dios",
          },
          {
            hora: "10H / 22H CL",
            nombre: "Biblia Maestra",
          },
          {
            hora: "12:05H CL",
            nombre: "Prédicas",
          },
          {
            hora: "14:30H CL",
            nombre: "The Bible Project",
          },
          {
            hora: "18H CL",
            nombre: "Devocional: Belleza Espiritual",
          },
          {
            hora: "19:15H CL",
            nombre: "En vivo: Culto Templo Central",
          },
          {
            hora: "23H CL",
            nombre: "Me Contó un Amigo",
          },
        ],
      },
      {
        dia: "Viernes",
        titulo: "Programación de Viernes",
        programas: [
          {
            hora: "03H /08H CL",
            nombre: "Mensaje a la Conciencia",
          },
          {
            hora: "09H CL",
            nombre: "Día a Día con Dios",
          },
          {
            hora: "10H / 22H CL",
            nombre: "Biblia Maestra",
          },
          {
            hora: "12:05H CL",
            nombre: "Prédicas",
          },
          {
            hora: "14:30H CL",
            nombre: "The Bible Project",
          },
          {
            hora: "18H CL",
            nombre: "Devocional: Belleza Espiritual",
          },
          {
            hora: "23H CL",
            nombre: "Me Contó un Amigo",
          },
        ],
      },
      {
        dia: "Sábado",
        titulo: "Programación de Sábado",
        programas: [
          {
            hora: "03H /08H CL",
            nombre: "Mensaje a la Conciencia",
          },
          {
            hora: "09H CL",
            nombre: "Día a Día con Dios",
          },
          {
            hora: "10H CL",
            nombre: "Hablemos de Familia",
          },
          {
            hora: "10:07H CL",
            nombre: "Hogar Dulce Hogar",
          },
          {
            hora: "12:05H CL",
            nombre: "Prédicas",
          },
          {
            hora: "14H CL",
            nombre: "Joyitas del Eterno",
          },
          {
            hora: "18H CL",
            nombre: "Devocional: Belleza Espiritual",
          },
          {
            hora: "23H CL",
            nombre: "Me Contó un Amigo",
          },
        ],
      },
    ],
  };

  return NextResponse.json(data);
}
