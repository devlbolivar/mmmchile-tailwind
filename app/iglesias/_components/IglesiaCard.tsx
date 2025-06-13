"use client";
import React from "react";
import { Iglesia } from "@/app/types";
import { Button } from "@/components/ui/button";
import { useIsPhone } from "@/hooks/useIsPhone";

const IglesiaCard = ({ iglesia }: { iglesia: Iglesia }) => {
  const isPhone = useIsPhone();

  if (!iglesia) return null;
  return (
    <div className="church-card flex flex-col gap-4 rounded-xl bg-white/5 backdrop-blur-sm p-5 shadow-lg overflow-hidden border border-gray-600/30 hover:bg-white/10 transition-colors duration-200">
      <div
        className="w-full aspect-[16/10] bg-center bg-no-repeat bg-cover rounded-lg"
        style={{
          backgroundImage: `url(${iglesia.image || "/images/lema-mobile.png"})`,
        }}
      ></div>
      <div className="flex flex-col gap-2">
        <h3 className="text-white text-lg font-semibold leading-tight">
          {iglesia.name}
        </h3>
        <p className="text-[var(--primary-color)] text-base font-bold leading-tight">
          Pastor: {iglesia.pastor}
        </p>
        <p className="text-gray-200 text-sm font-normal leading-normal">
          <strong className="text-gray-300">Dirección:</strong>{" "}
          {iglesia.address}
          <br />
          <strong className="text-gray-300">Horarios:</strong>{" "}
          {iglesia.services.join(", ")}
          <br />
          <strong className="text-gray-300">Contacto:</strong> {iglesia.phone}
        </p>
        {iglesia.phone && isPhone ? (
          <Button
            onClick={() => {
              window.open(`tel:${iglesia.phone}`, "_blank");
            }}
            className="mt-3 w-full rounded-lg bg-[var(--primary-color)] px-4 py-2 text-sm font-semibold text-white hover:bg-blue-600 transition-colors duration-200"
          >
            Contactar
          </Button>
        ) : null}
      </div>
    </div>
  );
};

export default IglesiaCard;
