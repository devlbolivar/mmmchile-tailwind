import React from "react";
import IglesiaCard from "./IglesiaCard";
import { Iglesia } from "@/app/types";

const IglesiaCards = ({ iglesias }: { iglesias: Iglesia[] }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {iglesias.map((iglesia) => (
        <IglesiaCard key={iglesia.id} iglesia={iglesia} />
      ))}
    </div>
  );
};

export default IglesiaCards;

/* <div className="church-card flex flex-col gap-4 rounded-xl bg-[var(--background-light)] p-5 shadow-lg overflow-hidden">
        <div
          className="w-full aspect-[16/10] bg-center bg-no-repeat bg-cover rounded-lg"
          style={{
            backgroundImage:
              'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAJHkVESH5u-hdfZ02CN0CNBmcTYQAdW0uSoBaSr9BsOiQzVgxVu6Z6xJcCt8ATkvkM6_8IMjeBkRpkgQlKxTIXlXlyAOTeYPOFW0m42_Ljnjb0brSUpLBEG7sH0fTwQy2N1xcao7a-bF8PcXdeqqtvdmg78iVWP_cr2yrD9PROlfmSdckDZpRPdeVNv4TKj7tYfKCU8iseT6dwi0keNFMQ-HZ_0Y-OcJg_1gmlEFEFG3HwIGRdMT24bTHfBXPGz3hmrPrwPw3ilZc")',
          }}
        ></div>
        <div className="flex flex-col gap-2">
          <h3 className="text-[var(--primary-color)] text-lg font-semibold leading-tight">
            Iglesia de Arica
          </h3>
          <p className="text-[var(--text-primary)] text-base font-bold leading-tight">
            Pastor: José Ramírez
          </p>
          <p className="text-[var(--text-secondary)] text-sm font-normal leading-normal">
            <strong className="text-slate-600">Dirección:</strong> Calle
            Principal 123, Arica.
            <br />
            <strong className="text-slate-600">Horarios:</strong> Domingos 10 AM
            y 6 PM, Miércoles 7 PM.
            <br />
            <strong className="text-slate-600">Contacto:</strong> +56 9 1234
            5678
          </p>
          <button className="mt-3 w-full rounded-lg bg-[var(--primary-color)] px-4 py-2 text-sm font-semibold text-white hover:bg-blue-600 transition-colors duration-200">
            Contactar
          </button>
        </div>
      </div>
      <div className="church-card flex flex-col gap-4 rounded-xl bg-[var(--background-light)] p-5 shadow-lg overflow-hidden">
        <div
          className="w-full aspect-[16/10] bg-center bg-no-repeat bg-cover rounded-lg"
          style={{
            backgroundImage:
              'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCstyja30Ifnev76RFaTPLHZv13ZG7SKH70TA1TvwijP4iWz3jWWueAMYzdvhB-gzB93k-I7Z1QVmTP7R077-73n4Evpi_CkkJgssS45xyEkSa2hsi4L_U-UyC1L2kKOmCdV6LXiROFKTAKBJhoskQvdoY9G8l9V1qd-NQdLlXw8qgqAKsDU8pjbK_B9SzUtVSqDLYVeRYo_HGysgfEGkAv2aYpQcueEpoYujmxYuUJS2pLUtw3RhOt6rBFrGqqYGAuxi_E4zPuynE")',
          }}
        ></div>
        <div className="flex flex-col gap-2">
          <h3 className="text-[var(--primary-color)] text-lg font-semibold leading-tight">
            Iglesia de Iquique
          </h3>
          <p className="text-[var(--text-primary)] text-base font-bold leading-tight">
            Pastor: María González
          </p>
          <p className="text-[var(--text-secondary)] text-sm font-normal leading-normal">
            <strong className="text-slate-600">Dirección:</strong> Avenida
            Central 456, Iquique.
            <br />
            <strong className="text-slate-600">Horarios:</strong> Sábados 7 PM,
            Domingos 9 AM.
            <br />
            <strong className="text-slate-600">Contacto:</strong> +56 9 8765
            4321
          </p>
          <button className="mt-3 w-full rounded-lg bg-[var(--primary-color)] px-4 py-2 text-sm font-semibold text-white hover:bg-blue-600 transition-colors duration-200">
            Contactar
          </button>
        </div>
      </div>
      <div className="church-card flex flex-col gap-4 rounded-xl bg-[var(--background-light)] p-5 shadow-lg overflow-hidden">
        <div
          className="w-full aspect-[16/10] bg-center bg-no-repeat bg-cover rounded-lg"
          style={{
            backgroundImage:
              'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDUAnTv_3wCKJw2_QuiNU-7CqdVSC32HH3Kp_Ee8_kkhtB--3mz_c0yXXsdTOYCMG6OQTFMT9o93sOdCA40ih2gTW8X_5P9MTIOdqdvRSNm0GEyrjhBMTq3ZmYMDDL-QHnsEFs--9sPZ-ScetiyVU9YujPAVL3uUHW9JWHan8T1cdPQwcveHCTqbszZaym0sZgbZNOaSK5mATXONWN3FVWZq38xldZEufWXt9pk_2RF3huOELdoogQVEOlCgOpuk50KSTBr6CIK4o8")',
          }}
        ></div>
        <div className="flex flex-col gap-2">
          <h3 className="text-[var(--primary-color)] text-lg font-semibold leading-tight">
            Iglesia de Antofagasta
          </h3>
          <p className="text-[var(--text-primary)] text-base font-bold leading-tight">
            Pastor: Carlos López
          </p>
          <p className="text-[var(--text-secondary)] text-sm font-normal leading-normal">
            <strong className="text-slate-600">Dirección:</strong> Calle
            Secundaria 789, Antofagasta.
            <br />
            <strong className="text-slate-600">Horarios:</strong> Domingos 11 AM
            y 7 PM, Jueves 8 PM.
            <br />
            <strong className="text-slate-600">Contacto:</strong> +56 9 1122
            3344
          </p>
          <button className="mt-3 w-full rounded-lg bg-[var(--primary-color)] px-4 py-2 text-sm font-semibold text-white hover:bg-blue-600 transition-colors duration-200">
            Contactar
          </button>
        </div>
      </div> */
