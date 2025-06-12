import React from "react";
import { Iglesia } from "@/app/types";

const IglesiaCard = ({ iglesia }: { iglesia: Iglesia }) => {
  if (!iglesia) return null;
  return (
    <div className="church-card flex flex-col gap-4 rounded-xl bg-[var(--background-light)] p-5 shadow-lg overflow-hidden">
      <div
        className="w-full aspect-[16/10] bg-center bg-no-repeat bg-cover rounded-lg"
        style={{
          backgroundImage: `url(${iglesia.image})`,
        }}
      ></div>
      <div className="flex flex-col gap-2">
        <h3 className="text-[var(--primary-color)] text-lg font-semibold leading-tight">
          {iglesia.name}
        </h3>
        <p className="text-[var(--text-primary)] text-base font-bold leading-tight">
          Pastor: {iglesia.pastor}
        </p>
        <p className="text-[var(--text-secondary)] text-sm font-normal leading-normal">
          <strong className="text-slate-600">Dirección:</strong>{" "}
          {iglesia.address}
          <br />
          <strong className="text-slate-600">Horarios:</strong>{" "}
          {iglesia.services.join(", ")}
          <br />
          <strong className="text-slate-600">Contacto:</strong> {iglesia.phone}
        </p>
        <button className="mt-3 w-full rounded-lg bg-[var(--primary-color)] px-4 py-2 text-sm font-semibold text-white hover:bg-blue-600 transition-colors duration-200">
          Contactar
        </button>
      </div>
    </div>
  );
};

export default IglesiaCard;
