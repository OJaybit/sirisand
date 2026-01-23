'use client';

import Image from 'next/image';
import { pacifico } from '@/app/fonts';
import { motion, type Variants } from 'framer-motion';

const bgImages = [
  '/bg/bg1.png',
  '/bg/bg2.png',
  '/bg/bg3.png',
  '/bg/bg4.png',
  '/bg/bg5.png',
];

// helper: get exactly 6 images per row
const getSixImages = (start: number) =>
  Array.from({ length: 6 }).map((_, i) => bgImages[(start + i) % bgImages.length]);

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

export default function BackgroundSection() {
  return (
    <>
      {/* ================= DESKTOP / LG (UNCHANGED) ================= */}
      <section className="relative overflow-visible h-60 bg-[#faf6ef] pt-42 pb-40 z-10 lg:z-0 hidden lg:block">
        {/* TOP ROW */}
        <div className="pointer-events-none absolute -top-2 left-0 flex w-full justify-center gap-24 opacity-[0.08] z-0">
          {getSixImages(0).map((img, i) => (
            <Image
              key={`top-${i}`}
              src={img}
              alt=""
              width={140}
              height={140}
              className="object-contain"
            />
          ))}
        </div>

        {/* MIDDLE ROW */}
        <div className="pointer-events-none absolute mt-10 left-0 -translate-y-1/2 flex w-full justify-center gap-24 opacity-[0.08] z-0">
          {getSixImages(2).map((img, i) => (
            <Image
              key={`middle-${i}`}
              src={img}
              alt=""
              width={140}
              height={140}
              className="object-contain"
            />
          ))}
        </div>

        {/* HEADER WITH ANIMATION */}
        <motion.div
          className="relative z-10 text-center mb-16"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
        >
          <motion.p
            variants={item}
            className={`text-2xl font-[cursive] text-[#0A7BBE] lg:-mt-20 ${pacifico.className}`}
          >
            Top Destinations
          </motion.p>
          <motion.h2
            variants={item}
            className="mt-2 text-5xl font-bold text-[#0A7BBE]"
          >
            Popular Destinations
          </motion.h2>
        </motion.div>
      </section>

      {/* ================= MOBILE ONLY ================= */}
      <section className="block  lg:hidden bg-white mt-8 pb-5 overflow-hidden">
        {/* MOVING IMAGES */}
        <div className="relative w-full overflow-hidden">
          <div className="flex gap-6 animate-marquee-slow">
            {[...bgImages, ...bgImages].map((img, i) => (
              <Image
                key={i}
                src={img}
                alt=""
                width={64}
                height={64}
                className="flex-shrink-0 opacity-80 w-23"
              />
            ))}
          </div>
        </div>

        {/* TEXT WITH ANIMATION */}
        <motion.div
          className="text-center px-4 mt-15"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
        >
          <motion.p
            variants={item}
            className={`text-base font-[cursive] text-[#0A7BBE] leading-tight ${pacifico.className} mt2`}
          >
            Top Destinations
          </motion.p>
          <motion.h2
            variants={item}
            className="text-2xl mt-2 font-bold text-[#0A7BBE] leading-tight"
          >
            Popular Destinations
          </motion.h2>
        </motion.div>
      </section>

      {/* ================= ANIMATION FOR MARQUEE ================= */}
      <style jsx>{`
        .animate-marquee-slow {
          width: max-content;
          animation: marquee-slow 45s linear infinite;
        }

        @keyframes marquee-slow {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </>
  );
}
