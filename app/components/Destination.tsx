'use client';

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { useRef } from "react";

const trendingItems = [
  { id: 1, title: "Nubian Village", image: "/images/trending/nubian.webp" },
  { id: 2, title: "Marsa Alam Diving", image: "/images/trending/marsa-alam.webp" },
  { id: 3, title: "Khan el-Khalili", image: "/images/trending/khan.webp" },
  { id: 4, title: "Sanctuary of Abu Simbel", image: "/images/trending/abu-simbel.webp" },
  { id: 5, title: "Royal Tombs of Luxor", image: "/images/trending/luxor-tombs.webp" },
  { id: 6, title: "The White Desert", image: "/images/trending/white-desert.webp" },
  { id: 7, title: "Siwa Salt Lakes", image: "/images/trending/siwa-salt.webp" },
  { id: 8, title: "Sunset at Philae", image: "/images/trending/philae.webp" },
  { id: 9, title: "Wadi Al-Hitan", image: "/images/trending/whale-valley.webp" },
  { id: 10, title: "Grand Egyptian Museum", image: "/images/trending/gem.webp" },
  { id: 11, title: "Sunrise Balloon", image: "/images/trending/balloon.webp" },
  { id: 12, title: "Mount Sinai Hike", image: "/images/trending/sinai.webp" },
];

/* === SAME ANIMATION SYSTEM AS TourGrid === */

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const card: Variants = {
  hidden: {
    opacity: 0,
    y: 60,
    scale: 0.9,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

export default function Destinations() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  return (
    <section
      ref={sectionRef}
      className="py-16 lg:-mt-5 -mt-17 bg-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 relative">

        {/* Decorative starfish */}
        <div className="absolute top-40 right-20 w-64 h-64 opacity-25 -z-10 pointer-events-none">
          <Image
            src="/starfish.png"
            alt="Decoration"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-contain"
          />
        </div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-[#0A7BBE] text-xs tracking-[0.3em] font-semibold uppercase block mb-3">
          Sirisand Collection
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-2">
            Signature Journeys
          </h2>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.05, margin: "-50px" }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 -mt-12 lg:-mt-5">
            {trendingItems.map((item) => (
              <motion.div
                key={item.id}
                variants={card}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group bg-white border border-slate-200 shadow-sm hover:shadow-md transition overflow-hidden rounded-xl"
              >
                {/* Image (LCP FIX APPLIED) */}
                <div className="relative h-[320px] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority={item.id <= 3}
                    loading={item.id <= 3 ? "eager" : "lazy"}
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Title */}
                <div className="bg-[#0A7BBE] py-4 text-center">
                  <h3 className="text-white font-semibold">
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
