import { Doctrina } from "@/app/types";
import React from "react";

const doctrinaCard = ({ name, description, verses }: Doctrina) => {
  return (
    <div className="glass-card group flex flex-col gap-4 p-6 h-full">
      <h3 className="text-white text-lg font-semibold leading-snug group-hover:text-[var(--primary-light)] transition-colors duration-200">
        {name}
      </h3>

      <p className="text-[var(--text-muted)] text-sm font-normal leading-relaxed flex-1">
        {description}
      </p>

      {/* Verse badges */}
      <div className="flex flex-wrap gap-2 mt-auto pt-2">
        {verses.map((verse) => (
          <span
            key={verse}
            className="inline-block px-2.5 py-1 rounded-full text-xs font-semibold"
            style={{
              backgroundColor: "rgba(59,130,246,0.12)",
              border: "1px solid rgba(59,130,246,0.25)",
              color: "var(--primary-light)",
            }}
          >
            {verse}
          </span>
        ))}
      </div>
    </div>
  );
};

export default doctrinaCard;
