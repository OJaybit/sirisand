'use client';

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutUs() {
  const textContainer = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 },
    },
  };

  const textItem = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const imageFade = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="relative w-full bg-white overflow-hidden">
      
      {/* ⭐ STARFISH — ALWAYS VISIBLE */}
      <div className="absolute top-4 right-4 sm:top-6 sm:right-6 lg:-top-12 lg:-right-16 
                     w-16 h-16 sm:w-24 sm:h-24 lg:w-48 lg:h-48
                      opacity-30 pointer-events-none z-0">
        <Image
          src="/starfish.png"
          alt="Decoration"
          fill
          className="object-contain"
        />
      </div>

      <div className="relative grid lg:grid-cols-[220px_460px_1fr] min-h-[320px] sm:min-h-[420px] lg:min-h-[600px]
 z-10">

        {/* LEFT BLUE STRIP (LG ONLY) */}
        <div className="hidden lg:min-h-[650px] lg:flex bg-[#0A7BBE]" />

        {/* ROTATED DECOR (LG ONLY) */}
        <div className="absolute hidden lg:block rotate-90 -left-72 top-32 
                        w-[700px] h-[600px] opacity-5 pointer-events-none">
          <Image
            src="/rebune.png"
            alt="Decoration"
            fill
            className="object-contain"
          />
        </div>

        {/* IMAGE (LG ONLY) */}
        <motion.div
          variants={imageFade}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="relative hidden lg:block w-[380px]"
        >
          <Image
  src="/about-image.webp"
  priority // only if above the fold
 alt="SIRISAND TOUR"
            fill
            className="object-contain translate-y-10 -translate-x-24"
      
          />
        </motion.div>

        {/* TEXT CONTENT */}
        <div className="flex items-center justify-center px-6 sm:px-10 lg:-mb-40 lg:px-20 py-12 sm:py-16 lg:py-0
 lg:-ml-60">
          <motion.div
            className="max-w-xl w-full text-center lg:text-left flex flex-col items-center lg:items-start"
            variants={textContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.p
              variants={textItem}
              className="text-[12px] tracking-[0.35em] text-[#0A7BBE] mb-4"
            >
              SIRISAND TOUR
            </motion.p>

            <motion.h2
              variants={textItem}
              className="text-[28px] sm:text-[38px] lg:text-[56px] font-bold text-[#2C1E1E] mb-10 sm:mb-4 lg:mb-6 sm:mb-10"
            >
              ABOUT US
            </motion.h2>

           <motion.div variants={textItem} className="flex flex-col gap-4">
  <motion.p
    variants={textItem}
    className="text-gray-600 leading-relaxed sm:leading-[1.7] text-base sm:text-lg max-w-prose mx-auto text-center lg:text-left"
  >
    Welcome to Sirisand Tour, your gateway to the wonders of Egypt. From the timeless pyramids of Giza to the vibrant streets of Cairo, we craft journeys that blend adventure, culture, and luxury.
  </motion.p>

  <motion.p
    variants={textItem}
    className="text-gray-600 leading-relaxed sm:leading-[1.7] text-base sm:text-lg max-w-prose mx-auto text-center -mt-2 lg:text-left"
  >
    Whether you’re seeking historic explorations, family-friendly adventures, or bespoke luxury experiences, we design every tour to leave you with memories that last a lifetime. With personalized service, expert guides, and attention to every detail, your Egyptian adventure becomes effortless, unforgettable, and uniquely yours.
  </motion.p>
</motion.div>


            <motion.button
              variants={textItem}
              className="px-7 py-3 rounded-full bg-[#0A7BBE] text-white text-sm hover:opacity-90 mt-3 transition"
            >
              @sirisandtour
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
