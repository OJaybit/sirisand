"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const topImages = [
  "abu-simbel.webp",
  "balloon.webp",
  "gem.webp",
  "khan.webp",
  "luxor-tombs.webp",
  "white-desert.webp",
];

const bottomImages = [
  "marsa-alam.webp",
  "nubian.webp",
  "philae.webp",
  "sinai.webp",
  "siwa-salt.webp",
  "whale-valley.webp",
];

export default function EndlessWonder() {
  return (
    <section className="relative overflow-hidden bg-[#f8f4eb] -mt-4 py-10">
      {/* TEXT */}
      <div className="relative z-10 text-center -mt-7 mb-20 px-4">
        <p className="text-2xl font-[cursive] text-[#0A7BBE]">
          Endless Wonder
        </p>
        <h2 className="mt-3 lg:text-5xl font-bold text-[#0A7BBE] max-w-3xl mx-auto leading-tight">
          Discover 7000 Years of <br /> Egyptian Civilization
        </h2>
      </div>

      {/* TOP ROW (RIGHT → LEFT) */}
      <div className="mx-auto max-w-[95vw] overflow-hidden">
        <motion.div
          className="flex gap-4 sm:gap-8 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 40,
            ease: "linear",
          }}
        >
          {[...topImages, ...topImages].map((img, i) => (
            <div
              key={`top-${i}`}
              className="group w-[calc(33.333vw-16px)] sm:w-[320px] h-[180px] sm:h-[220px] rounded-[32px] overflow-hidden shadow-xl"
            >
              <Image
                src={`/images/trending/${img}`}
                alt="Egypt Destination"
                width={400}
                height={300}
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                priority={i < 2}
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* BOTTOM ROW (LEFT → RIGHT) */}
      <div className="mx-auto mt-12 max-w-[95vw] overflow-hidden">
        <motion.div
          className="flex gap-4 sm:gap-8 w-max"
          animate={{ x: ["-50%", "0%"] }}
          transition={{
            repeat: Infinity,
            duration: 40,
            ease: "linear",
          }}
        >
          {[...bottomImages, ...bottomImages].map((img, i) => (
            <div
              key={`bottom-${i}`}
              className="group w-[calc(33.333vw-16px)] sm:w-[320px] h-[180px] sm:h-[220px] rounded-[32px] overflow-hidden shadow-xl"
            >
              <Image
                src={`/images/trending/${img}`}
                alt="Egypt Destination"
                width={400}
                height={300}
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
