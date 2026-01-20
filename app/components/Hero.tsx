"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

/* ---------------- SLIDES DATA ---------------- */

const slides = [
  {
    title: "Discover Timeless Egyptian Adventures",
    text: "Explore deserts, oases, and ancient wonders with expert local guides.",
  },
  {
    title: "Journey Through The Sahara",
    text: "Experience the White Desert, Black Desert, and the magic of Siwa Oasis.",
  },
  {
    title: "Travel With Siri Sand TOur",
    text: "Authentic experiences led by people who truly live the land.",
  },
];

/* ---------------- HERO ---------------- */

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* 🎥 VIDEO BACKGROUND */}
      <video
        suppressHydrationWarning
        className="absolute inset-0 h-[700px] w-full object-cover scale-105"
        src="/hero-video.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />

      {/* TEXT LAYER */}
      <div className="relative z-10 flex h-full items-center justify-start px-6 lg:px-20">
        <AnimatePresence mode="wait">
          <TextBlock key={current} slide={slides[current]} />
        </AnimatePresence>
      </div>
    </section>
  );
}

/* ---------------- TEXT BLOCK ---------------- */

function TextBlock({ slide }: { slide: any }) {
  return (
    <motion.div
      className="max-w-4xl text-left text-white lg mt-15"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
        className="text-2xl sm:text-3xl md:text-6xl font-bold leading-tight"
      >
        {slide.title}
      </motion.h1>

      {/* Sub Text */}
      <motion.p
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
        className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-white/90 max-w-2xl"
      >
        {slide.text}
      </motion.p>

      {/* BUTTONS */}
      <div className="mt-6 sm:mt-8 flex flex-wrap gap-4 sm:gap-6">
        {/* CTA 1 */}
        <button
          className="
            relative overflow-hidden w-fit px-8 py-4 rounded-full
            bg-[#d6b36b] border border-[#2a4b4b]
            text-white font-semibold
            group
          "
        >
          <span
            className="
              absolute inset-0 bg-[#0A7BBE]
              translate-x-[-100%]
              group-hover:translate-x-0
              transition-transform duration-500 ease-out
            "
          />
          <span className="relative z-10 flex items-center gap-3">
            Explore Tours
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </span>
        </button>

        {/* CTA 2 */}
        <button
          className="
            relative overflow-hidden w-fit px-8 py-4 rounded-full
            border border-white
            text-white font-semibold
            group
          "
        >
          <span
            className="
              absolute inset-0 bg-[#0A7BBE]
              translate-x-[-100%]
              group-hover:translate-x-0
              transition-transform duration-500 ease-out
            "
          />
          <span className="relative z-10 flex items-center gap-3">
            Contact us
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </span>
        </button>
      </div>
    </motion.div>
  );
}
