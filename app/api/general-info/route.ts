import { NextResponse } from "next/server";

export async function GET() {
  const data = {
    url: "https://s38.radiolize.com/radio/8040/radio.mp3",
    wspLink: "https://wa.me/+56928026410/?text=Hola Radio Bethel Chile",
    webLink: "https://mmmchile.cl/radio",
    facebookLink: "https://web.facebook.com/profile.php?id=61559256342757",
    instagramLink: "",
    horario: [
      { dia: "Lunes", hora: "19:30", culto: "Caballeros" },
      { dia: "Martes", hora: "19:30", culto: "General" },
      { dia: "Jueves", hora: "19:30", culto: "General" },
      { dia: "Viernes", hora: "19:30", culto: "Damas" },
      { dia: "Sábado", hora: "17:00", culto: "Jóvenes" },
      { dia: "Domingo", hora: "11:00", culto: "General" },
      { dia: "Domingo", hora: "17:00", culto: "General" },
    ],
    sobre_nosotros: `Somos una organización que nació en el corazón de Dios para esta hora final, cuando tantos creyentes, congregaciones y concilios, se están deslizando por la corriente del pecado; una obra con fundamento bíblico que defiende la sana doctrina. Nuestra organización Cristiana Evangélica, Movimiento Misionero Mundial está presente en todo el mundo, las actividades que ejercemos radican en la predicación de los Santos Evangelios, enfatizado en la Sana Doctrina Bíblica. Realizamos también campañas de evangelización, instaurando iglesias, estudios bíblicos, formando obreros y estableciendo nuevos templos. Con casi 50 años de constitución, hemos llegado a más de 60 países, naciones que han reconocido a Jesucristo como su Señor; alrededor de 6,000 congregaciones doblan sus rodillas ante el soberano Dios y un cuerpo ministerial que sobrepasa los 8,000 obreros, claman día y noche para que la misericordia de Dios se extienda a más naciones. Nuestro fundador es el Rev. Luis M. Ortiz, las oficinas principales se establecen en Puerto Rico, la Junta Oficial de esta institución tiene la siguiente estructura: Presidente, Vicepresidente, Secretario, Tesorero y Vocales; aquellos que velan y dirigen los principios, objetivos y metas de esta gran organización. También está constituida por Supervisores Misioneros, Supervisores Nacionales y Representantes de la Misión, los cuales son nombrados por la Junta Oficial. "La fuerza que nos impulsa y motiva es el Espíritu Santo; la pasión que nos conmueve es la situación de las almas y el motivo que nos inspira es la Gloria de Dios; la fuente que nos somete es el crecimiento de la obra misionera; la urgencia que nos moviliza es la brevedad del tiempo y la realidad que nos alienta es el abundante fruto". Rev. Luis M. Ortiz.`,
  };

  return NextResponse.json(data);
}
