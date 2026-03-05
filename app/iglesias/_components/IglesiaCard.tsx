"use client";
import React from "react";
import { Iglesia } from "@/app/types";
import { Button } from "@/components/ui/button";
import { useIsPhone } from "@/hooks/useIsPhone";
import { motion } from "framer-motion";

const IglesiaCard = ({ iglesia }: { iglesia: Iglesia }) => {
  const isPhone = useIsPhone();

  if (!iglesia) return null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      viewport={{ once: true }}
      className="flex flex-col rounded-xl overflow-hidden h-full transition-all duration-200"
      style={{
        backgroundColor: "var(--bg-card)",
        border: "1px solid var(--border-subtle)",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "var(--border-blue)";
        (e.currentTarget as HTMLElement).style.boxShadow = "0 0 20px var(--primary-glow)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "var(--border-subtle)";
        (e.currentTarget as HTMLElement).style.boxShadow = "none";
      }}
    >
      {/* Image 16:9 */}
      <div className="relative w-full aspect-video overflow-hidden">
        <motion.div
          whileHover={{ scale: 1.06 }}
          transition={{ duration: 0.5 }}
          className="w-full h-full"
          style={{
            backgroundImage: `url(${iglesia.image || "/images/lema-mobile.png"})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        {/* Gradient overlay at bottom */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(13,30,53,0.7) 0%, transparent 50%)",
          }}
        />
      </div>

      {/* Info */}
      <div className="flex flex-col gap-2 flex-grow p-5">
        <h3 className="text-white text-lg font-semibold leading-tight hover:text-[var(--primary-light)] transition-colors">
          <a href={`/iglesias/${iglesia.id}`}>{iglesia.name}</a>
        </h3>

        <p className="text-[var(--primary-light)] text-sm font-semibold">
          Pastor: {iglesia.pastor}
        </p>

        <p className="text-[var(--text-muted)] text-sm leading-relaxed line-clamp-2">
          <span className="text-[var(--text-muted)] font-medium">Dirección: </span>
          {iglesia.address}
        </p>

        <p className="text-[var(--text-muted)] text-sm leading-relaxed mt-auto">
          <span className="text-[var(--text-muted)] font-medium">Horarios: </span>
          {iglesia.services.slice(0, 2).join(", ")}
          {iglesia.services.length > 2 ? "..." : ""}
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-2 mt-4">
          <a
            href={`/iglesias/${iglesia.id}`}
            className="flex-1 rounded-lg px-4 py-2 text-sm font-semibold text-white text-center transition-all duration-200"
            style={{
              backgroundColor: "var(--primary-color)",
              border: "1px solid var(--primary-color)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = "var(--primary-dark)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = "var(--primary-color)";
            }}
          >
            Ver detalles
          </a>

          {iglesia.phone && isPhone ? (
            <Button
              onClick={() => window.open(`tel:${iglesia.phone}`, "_blank")}
              className="flex-1 rounded-lg px-4 py-2 text-sm font-semibold text-white transition-all duration-200 bg-transparent border"
              style={{
                borderColor: "var(--border-blue)",
                color: "var(--primary-light)",
              }}
            >
              Contactar
            </Button>
          ) : null}
        </div>
      </div>
    </motion.div>
  );
};

export default IglesiaCard;
