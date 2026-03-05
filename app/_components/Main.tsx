"use client";
import React from "react";
import Contacto from "./Contacto";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import Image, { getImageProps } from "next/image";
import Nosotros from "./Nosotros";
import Lema from "./Lema";
import ChurchSeoContent from "./ChurchSeoContent";
import { imageConfig } from "../utils/image-placeholders";
import { motion } from "framer-motion";

const Main = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" },
  } as const;

  const commonProps = { alt: "Movimiento Misionero Mundial Chile — congregación", fill: true, sizes: "100vw", quality: 85 };

  const {
    props: { srcSet: desktopSrcSet, ...desktopImages },
  } = getImageProps({
    ...commonProps,
    src: "/images/hero-overlay.png",
    priority: imageConfig.hero.priority,
    quality: imageConfig.hero.quality,
  });

  const {
    props: { srcSet: mobileSrcSet, ...fallbackImage },
  } = getImageProps({
    ...commonProps,
    src: "/images/mobile_hero_bg.png",
    priority: true,
  });

  return (
    <main className="flex-1" style={{ backgroundColor: "var(--bg-deep)" }}>
      {/* ── Hero Full-Screen ── */}
      <section
        id="inicio"
        className="relative flex items-center justify-center overflow-hidden"
        style={{ height: "100dvh", minHeight: "600px" }}
      >
        <picture>
          <source
            media="(min-width: 640px)"
            srcSet={desktopSrcSet}
          />
          <img
            {...fallbackImage}
            className="w-full h-full object-cover"
          />
        </picture>

        {/* Dark overlay fading into page bg */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(6,13,26,0.72) 55%, #060d1a 100%)",
          }}
        />

        {/* Blue glow at top */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 40% at 50% 0%, rgba(59,130,246,0.35) 0%, transparent 70%)",
          }}
        />

        {/* Dot grid texture */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="flex flex-col items-center gap-6 max-w-4xl"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-blue-500/15 border border-blue-400/25 rounded-full px-4 py-1.5 text-blue-300 text-xs font-semibold tracking-wider uppercase">
              <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse" />
              Iglesia Cristiana Pentecostal
            </div>

            {/* Title */}
            <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight">
              Movimiento Misionero{" "}
              <span className="text-blue-300">Mundial</span> en Chile
            </h1>

            {/* Description */}
            <p className="text-gray-300 text-base sm:text-lg md:text-xl font-light leading-relaxed max-w-2xl">
              Iglesia cristiana pentecostal donde encontrarás el evangelio de
              Jesucristo, enseñanza bíblica sólida y una comunidad de fe que te
              ayudará a crecer espiritualmente.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
              <Link href="/doctrina" className="w-full sm:w-auto">
                <Button className="btn-primary text-base px-8 py-4 cursor-pointer w-full sm:w-auto">
                  Conoce Nuestra Fe
                  <ArrowRightIcon className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link href="/iglesias" className="w-full sm:w-auto">
                <Button className="btn-secondary text-base px-8 py-4 cursor-pointer w-full sm:w-auto">
                  Encuentra una Iglesia
                </Button>
              </Link>
            </div>

            {/* Stats strip */}
            <div className="flex items-center gap-8 pt-4 mt-2 border-t border-white/10">
              <div className="flex flex-col items-center">
                <span className="hero-stat-value">+40</span>
                <span className="hero-stat-label">Iglesias</span>
              </div>
              <div className="w-px h-10 bg-white/15" />
              <div className="flex flex-col items-center">
                <span className="hero-stat-value">+40</span>
                <span className="hero-stat-label">Años</span>
              </div>
              <div className="w-px h-10 bg-white/15" />
              <div className="flex flex-col items-center">
                <span className="hero-stat-value">Todo</span>
                <span className="hero-stat-label">Chile</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Nosotros ── */}
      <motion.div {...fadeInUp}>
        <Nosotros />
      </motion.div>

      {/* ── Lema ── */}
      <motion.div {...fadeInUp}>
        <Lema />
      </motion.div>

      <ChurchSeoContent />

      {/* ── Contacto ── */}
      <motion.section id="contacto" className="py-16 relative" {...fadeInUp}>
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-white text-center">
            Contacto
          </h2>
          <div className="w-full flex items-center justify-center mb-8 mt-3">
            <div className="h-1 w-16 bg-[var(--primary-color)] rounded-full" />
          </div>
          <Contacto />
        </div>
      </motion.section>
    </main>
  );
};

export default Main;
