import { Doctrina } from "@/app/types";
import React from "react";

const doctrinaCard = ({ name, description, verses }: Doctrina) => {
  return (
    <div className="doctrine-card">
      <h3 className="text-[var(--secondary-color)] text-xl font-semibold leading-tight tracking-[-0.015em] mb-2">
        {name}
      </h3>
      <p className="text-slate-600 text-sm font-normal leading-relaxed mb-3">
        {description}
      </p>
      <p className="text-slate-500 text-xs font-medium italic">
        {verses.map((verse, index) => (
          <span key={verse}>
            {verse}
            {index < verses.length - 1 ? " | " : ""}
          </span>
        ))}
      </p>
    </div>
  );
};

export default doctrinaCard;
