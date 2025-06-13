import React from "react";
import IglesiaCard from "./IglesiaCard";
import { Iglesia } from "@/app/types";

const IglesiaCards = ({ iglesias }: { iglesias: Iglesia[] }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {iglesias?.map((iglesia) => (
        <IglesiaCard key={iglesia.id} iglesia={iglesia} />
      ))}
    </div>
  );
};

export default IglesiaCards;
