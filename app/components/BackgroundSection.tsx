'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const bgImages = [
  '/bg/bg1.png',
  '/bg/bg2.png',
  '/bg/bg3.png',
  '/bg/bg4.png',
  '/bg/bg5.png',
  '/bg/bg6.png',
  '/bg/bg7.jpg',
  '/bg/bg8.png',
  '/bg/bg9.jpg',
  '/bg/bg10.jpg',
];

// helper: get exactly 6 images per row
const getSixImages = (start: number) =>
  Array.from({ length: 6 }).map((_, i) => bgImages[(start + i) % bgImages.length]);

export default function BackgroundAnimationPage() {
  return (
    <section className="relative flex items-center justify-center h-[550px] lg:h-screen bg-white">

      {/* Rounded background container (top only) */}
      <div className="relative w-full h-full rounded-t-[100px] overflow-hidden bg-[#faf6ef]">

        {/* ================= CENTERED TEXT ================= */}
        <div className="absolute top-28 left-1/2 -translate-x-1/2 text-center px-4 sm:px-10 max-w-3xl">

          <div className="text-center mb-0 -mt-5">
            <p className="text-lg sm:text-2xl font-[cursive] text-[#0A7BBE] whitespace-nowrap">
              Best Recommended Places
            </p>

            <h2 className="mt-2 text-xl sm:text-4xl lg:text-5xl font-bold text-[#0A7BBE] w-70 lg:w-220 line-clamp-2">
              Popular Destinations we offer for all
            </h2>
          </div>

          <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed break-normal">
            Explore the beauty of Egypt with unforgettable group tours to amazing destinations like
            Siwa Oasis, the White Desert, Luxor, Aswan and Fayoum. Let's go together and create
            memories that will stay with you forever.
          </p>
        </div>

        {/* ================= TOP ROW ================= */}
        <motion.div
          className="pointer-events-none absolute top-10 left-0 flex w-full justify-center gap-10 sm:gap-24 opacity-10"
          initial={{ y: 0 }}
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        >
          {getSixImages(0).map((img, i) => (
            <Image
              key={`top-${i}`}
              src={img}
              alt=""
              width={80}
              height={80}
              className="object-contain sm:w-[140px] sm:h-[140px]"
            />
          ))}
        </motion.div>

        {/* ================= MIDDLE ROW ================= */}
        <motion.div
          className="pointer-events-none absolute top-1/2 left-0 -translate-y-1/2 flex w-full justify-center gap-10 sm:gap-24 opacity-10"
          initial={{ y: 0 }}
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        >
          {getSixImages(2).map((img, i) => (
            <Image
              key={`middle-${i}`}
              src={img}
              alt=""
              width={80}
              height={80}
              className="object-contain sm:w-[140px] sm:h-[140px]"
            />
          ))}
        </motion.div>

        {/* ================= BOTTOM ROW ================= */}
        <motion.div
          className="pointer-events-none absolute bottom-10 left-0 flex w-full justify-center gap-10 sm:gap-24 opacity-10"
          initial={{ y: 0 }}
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        >
          {getSixImages(4).map((img, i) => (
            <Image
              key={`bottom-${i}`}
              src={img}
              alt=""
              width={80}
              height={80}
              className="object-contain sm:w-[140px]"
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
