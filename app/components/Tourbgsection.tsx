'use client';

import Image from 'next/image';
import { pacifico } from '@/app/fonts'


const bgImages = [
  '/bg/bg1.png',
  '/bg/bg2.png',
  '/bg/bg3.png',
  '/bg/bg4.png',
  '/bg/bg5.png',
  '/bg/bg6.png',
  // '/bg/bg7.jpg',
  // '/bg/bg8.png',
  // '/bg/bg9.jpg',
  // '/bg/bg10.jpg',
];

// helper: get exactly 6 images per row
const getSixImages = (start: number) =>
  Array.from({ length: 6 }).map((_, i) => bgImages[(start + i) % bgImages.length]);

export default function BackgroundSection() {
  return (
    <>
      {/* ================= DESKTOP / LG (UNCHANGED) ================= */}
      <section className="relative overflow-visible h-60 bg-[#faf6ef] pt-44 pb-40 z-10 lg:z-0 hidden lg:block">
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

        {/* HEADER */}
        <div className="relative z-10 text-center mb-16">
          <p className={`text-2xl font-[cursive] text-[#0A7BBE] -mt-5 lg:-mt-15 ${pacifico.className}`}>
            Top Destinations
          </p>
          <h2 className="mt-2 text-5xl font-bold text-[#0A7BBE]">
            Popular Destinations
          </h2>
        </div>
      </section>

      {/* ================= MOBILE ONLY ================= */}
      <section className="block lg:hidden bg-white mt-4 pb-5 overflow-hidden">
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
                className="flex-shrink-0 opacity-80"
              />
            ))}
          </div>
        </div>

        {/* TEXT */}
        <div className="text-center px-4 mt-12">
          <p className={`text-base font-[cursive] text-[#0A7BBE] leading-tight ${pacifico.className} -mt-2`}>
            Top Destinations
          </p>
          <h2 className="text-2xl mt-2 font-bold text-[#0A7BBE] leading-tight">
            Popular Destinations
          </h2>
        </div>
      </section>

      {/* ================= ANIMATION ================= */}
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
