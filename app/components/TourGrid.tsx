'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const destinations = [
  { id: 1, title: 'Luxor', image: 'luxor.webp', slug: 'luxor' },
  { id: 2, title: 'Aswan', image: 'aswan.webp', slug: 'aswan' },
  { id: 3, title: 'Hurghada', image: 'hurghada.webp', slug: 'hurghada' },
  { id: 4, title: 'White Desert', image: 'white-desert.webp', slug: 'white-desert' },
  { id: 5, title: 'Black Desert', image: 'black-desert.webp', slug: 'black-desert' },
  { id: 6, title: 'Siwa', image: 'siwa.webp', slug: 'siwa' },
  { id: 7, title: 'Cairo', image: 'cairo.webp', slug: 'cairo' },
];

export default function DestinationCarousel() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(5);
  const [cardWidth, setCardWidth] = useState(260);
  const [cardHeight, setCardHeight] = useState(320);

  /* ------------------ RESPONSIVE ------------------ */
  useEffect(() => {
    const resize = () => {
      const w = window.innerWidth;

      if (w < 640) {
        setVisible(2);
        setCardWidth(w * 0.82);
        setCardHeight(220);
      } else if (w < 1024) {
        setVisible(3);
        setCardWidth(240);
        setCardHeight(280);
      } else {
        setVisible(5);
        setCardWidth(260);
        setCardHeight(320);
      }
    };

    resize();
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, []);

  /* ------------------ AUTOPLAY ------------------ */
  useEffect(() => {
    const t = setTimeout(() => {
      setIndex((p) => (p + 1) % destinations.length);
    }, 4200);
    return () => clearTimeout(t);
  }, [index]);

  const total = destinations.length;
  const center = Math.floor(visible / 2);

  return (
    <section className="relative z-10  lg:bg-whte py-5 lg:-mt-20 overflow-hidden bg:white">
      {/* HEADER
      <div className="text-center mb-16">
        <p className="text-2xl font-[cursive] text-[#0A7BBE]">Top Destinations</p>
        <h2 className="mt-2 text-5xl font-bold text-[#0A7BBE]">
          Popular Destinations
        </h2>
      </div> */}

      {/* CAROUSEL */}
      <div className="relative h-[260px] sm:h-[340px] lg:h-[400px] max-w-7xl mx-auto lg:-mt-20 flex items-center justify-center">
        {destinations.map((dest, i) => {
          let offset = i - index;
          if (offset > total / 2) offset -= total;
          if (offset < -total / 2) offset += total;

          const distance = Math.abs(offset);
          const isVisible = distance <= center;

          return (
            <motion.div
              key={dest.id}
              initial={false} // 🔥 critical
              animate={{
                x: offset * cardWidth,
                y: isVisible ? distance * 26 : 0,
                scale: distance === 0 ? 1 : 0.94,
                opacity: isVisible ? 1 - distance * 0.22 : 0,
              }}
              transition={{
                type: 'spring',
                stiffness: 140,
                damping: 22,
              }}
              className="absolute pointer-events-none"
              style={{ zIndex: 10 - distance }}
            >
              <div style={{ width: cardWidth }}>
                <div className="relative rounded-[32px] overflow-hidden shadow-2xl bg-white">
                  <Image
                    src={`/images/tours/${dest.image}`}
                    alt={dest.title}
                    width={cardWidth}
                    height={cardHeight}
                    priority={distance === 0}
                    className="object-cover transition-transform duration-700 hover:scale-110"
                  />
                </div>

                <div className="mt-4 text-center pointer-events-auto">
                  <Link href={`/destinations/${dest.slug}`}>
                    <h3 className="text-lg sm:text-xl font-bold text-[#0A7BBE] hover:text-[#d6b36b] transition">
                      {dest.title}
                    </h3>
                    <p className="text-gray-500 text-sm">Explore</p>
                  </Link>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* DOTS */}
      <div className="mt-14 lg:-mt-3 flex justify-center gap-3">
        {destinations.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-3 w-3 rounded-full transition ${
              i === index
                ? 'bg-[#0A7BBE]'
                : 'border border-[#2a4b4b]'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
