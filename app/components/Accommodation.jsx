'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Accommodation() {

  /* ===== animations ONLY ===== */

  const pageFade = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const stagger = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  const imagePan = {
    hidden: { opacity: 0, scale: 1.05 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.9, ease: 'easeOut' },
    },
  };

  return (
    <motion.section
      variants={pageFade}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="relative w-full bg-white overflow-hidden py-16 lg:py-10 -mt-5"
    >

      {/* ⭐ Starfish */}
      <div className="absolute -top-10 -right-20 w-32 h-32 lg:w-48 lg:h-8 opacity-20 pointer-events-none z-0">
        <img src="/starfish.png" alt="Decoration" className="w-full h-full object-contain" />
      </div>

      {/* 🌊 Rebune */}
      <div className="absolute -bottom-40 left-40 -translate-x-1/2 w-[280px] h-[180px] lg:w-[700px] lg:h-[400px] opacity-20 pointer-events-none z-10">
        <img src="/rebune.png" alt="Decoration" className="w-full h-full object-contain" />
      </div>

      <div className="max-w-7xl lg:max-h-[100vh] mx-auto px-6 relative z-10">

        {/* ================= MOBILE ================= */}
        <div className="block lg:hidden space-y-10">

          {/* TEXT */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center -mt-10"
          >
            <motion.p variants={item} className="text-sm tracking-[0.35em] text-[#0A7BBE] mb-3">
            Sirisandtour
          </motion.p>

          <motion.h2 variants={item} className="text-3xl font-bold text-[#2C1E1E] mb-4">
            Stay in Comfort
          </motion.h2>

          <motion.p variants={item} className="text-gray-600 leading-relaxed">
            Enjoy ultimate relaxation with our carefully selected accommodations. From elegant rooms to spacious suites and private villas, each stay is designed to be a perfect retreat for every traveler.
          </motion.p>

          </motion.div>

          {/* IMAGE */}
          <motion.div
            variants={imagePan}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative w-full h-[320px]"
          >
            <Image
              src="/room.webp"
              alt="Luxury accommodation"
              fill
              className="object-cover"
              priority
            />
          </motion.div>

          {/* BOXES */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <motion.div variants={item} className="bg-[#0A7BBE] text-white p-6">
              <div className="mb-3">🛏️</div>
<h3 className="text-lg font-semibold mb-2">Deluxe Rooms</h3>
<p className="text-sm leading-relaxed">
  Cozy sophistication with modern interiors, plush bedding, and peaceful garden views.
</p>

            </motion.div>

            <motion.div variants={item} className="bg-[#0A7BBE] text-white p-6">
                    <div className="mb-3">🌊</div>
        <h3 className="text-lg font-semibold mb-2">Ocean View Suites</h3>
        <p className="text-sm leading-relaxed">
          Enjoy stunning sea views from your private balcony in these elegant suites.
        </p>

            </motion.div>
          </motion.div>
        </div>

        {/* ================= DESKTOP ================= */}
        <div className="hidden lg:block">

          <div className="grid grid-cols-[1.3fr_0.9fr] gap-12 items-start">

            {/* IMAGE */}
            <motion.div
              variants={imagePan}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative w-full h-[520px] -mt-20"
            >
              <Image
                src="/room.webp"
                alt="Luxury accommodation"
                fill
                className="object-cover"
                priority
              />
            </motion.div>

            {/* CARDS */}
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-col gap-10 mt-10"
            >
              <motion.div variants={item} className="bg-[#0A7BBE] text-white p-8">
                <div className="mb-4">🛏️</div>
                <h3 className="text-xl font-semibold mb-3">Deluxe Rooms</h3>
                <p className="leading-relaxed">
                  Experience cozy sophistication with modern interiors,
                  plush bedding, and serene garden views.
                </p>
              </motion.div>

              <motion.div variants={item} className="bg-[#0A7BBE] text-white p-8">
                <div className="mb-4">🌊</div>
                <h3 className="text-xl font-semibold mb-3">Ocean View Suites</h3>
                <p className="leading-relaxed">
                  Wake up to stunning panoramic views of the sea from
                  your private balcony.
                </p>
              </motion.div>
            </motion.div>
          </div>

          {/* BOTTOM TEXT */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 ml-10 gap-10 mt-9"
          >
            <motion.div variants={item}>
              <p className="text-sm tracking-[0.35em] text-[#0A7BBE] mb-3">
                Sirisandtour
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-[#2C1E1E]">
                Stay in Comfort
              </h2>
            </motion.div>

            <motion.p variants={item} className="text-gray-600 leading-relaxed">
              Indulge in the ultimate relaxation with our diverse selection
              of accommodations, designed to cater to every traveler’s needs.
              Choose from elegant rooms, spacious suites, or private villas,
              each thoughtfully crafted to provide the perfect retreat.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
