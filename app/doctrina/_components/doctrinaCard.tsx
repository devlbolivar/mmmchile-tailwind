import { Doctrina } from "@/app/types";
import React from "react";

const doctrinaCard = ({ name, description, verses }: Doctrina) => {
  return (
    <div className="doctrine-card bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-gray-600/30 hover:bg-white/10 transition-colors duration-200">
      <h3 className="text-white text-xl font-semibold leading-tight tracking-[-0.015em] mb-3">
        {name}
      </h3>
      <p className="text-gray-200 text-sm font-normal leading-relaxed mb-4">
        {description}
      </p>
      <p className="text-gray-300 text-xs font-medium italic">
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
