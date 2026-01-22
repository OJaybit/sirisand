'use client';

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { pacifico } from '@/app/fonts';

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

/* ================= ANIMATION VARIANTS ================= */
const container: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function EndlessWonder() {
  return (
    <section className="relative mt-10 overflow-hidden bg-white lg:mt-12 py-6 lg:py-4">

      {/* TEXT */}
      <motion.div
        className="relative z-10 text-center lg:mt-3 mb-20 px-4"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.6 }}
      >
        <motion.p
          variants={item}
          className={`text-4xl font-[cursive] text-[#0A7BBE] ${pacifico.className}`}
        >
          Endless Wonder
        </motion.p>
   <motion.h2
  variants={item}
  className="mt-3 font-bold text-[#0A7BBE] leading-tight text-center flex justify-center lg:text-left"
>
  {/* Mobile version (broken, larger text) */}
  <span className="block lg:hidden text-3xl sm:text-5xl md:text-6xl">
    Discover 7000 Years of <br /> Egyptian Civilization
  </span>

  {/* Large screens (single line, slightly smaller if needed) */}
  <span className="hidden lg:inline lg:text-4xl xl:text-5xl">
    Discover 7000 Years of Egyptian Civilization
  </span>
</motion.h2>

      </motion.div>

      {/* TOP ROW (RIGHT → LEFT) */}
     <div className="mx-auto mt-4 lg:mt-2 max-w-[95vw] overflow-hidden">

        <motion.div
          className="flex gap-4 sm:gap-4 lg:gap-3 w-max"
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
            className="
              group
              w-[calc(30vw-12px)]
              sm:w-[280px]
              lg:w-[200px]      /* narrower */
              h-[160px]
              sm:h-[200px]
              lg:h-[280px]      /* shorter */
              rounded-[28px]
              overflow-hidden
              shadow-lg lg:shadow-md
            "


            >
              <Image
                src={`/images/trending/${img}`}
                alt="Egypt Destination"
                width={400}
                height={400}
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                priority={i < 2}
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* BOTTOM ROW (LEFT → RIGHT) */}
     <div className="mx-auto mt-5 lg:mt-6s max-w-[95vw] overflow-hidden">

        <motion.div
          className="flex gap-4 sm:gap-4 lg:-3 w-max"
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
               className="
                group
                w-[calc(30vw-12px)]
                sm:w-[280px]
                lg:w-[200px]      /* narrower */
                h-[160px]
                sm:h-[200px]
                lg:h-[280px]      /* shorter */
                rounded-[28px]
                overflow-hidden
                shadow-lg lg:shadow-md
              "
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

        {/* MOBILE MAP IMAGE */}
        <div className="mt-5 w-90 h-124 overflow-hidden shadow-xl mx-auto block sm:hidden">
          <Image
            src={`/images/trending/map.webp`}
            alt="Egypt Destination"
            width={400}
            height={300}
            className="h-full w-full object-cover mt-5 transition-transform duration-700 ease-out group-hover:scale-110"
          />
        </div>
      </div>
    </section>
  );
}
