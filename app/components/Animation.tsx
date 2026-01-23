'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

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

export default function HorizontalScrollSingleRow() {
  return (
    <section className="relative overflow-hidden h-100 bg-white flex items-center justify-center -mt-20 ">
      <motion.div
        className="flex gap-24"
        initial={{ x: 0 }}
        animate={{ x: ['0%', '-100%'] }}
        transition={{ x: { repeat: Infinity, repeatType: 'loop', duration: 20, ease: 'linear' } }}
      >
        {/* Original images */}
        {getSixImages(0).map((img, i) => (
          <Image
            key={`img-${i}`}
            src={img}
            alt=""
            width={140}
            height={140}
            className="object-contain"
          />
        ))}

        {/* Duplicate images for seamless loop */}
        {getSixImages(0).map((img, i) => (
          <Image
            key={`img-dup-${i}`}
            src={img}
            alt=""
            width={140}
            height={140}
            className="object-contain"
          />
        ))}
      </motion.div>
    </section>
  );
}
