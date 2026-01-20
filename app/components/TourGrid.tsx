'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const destinations = [
  { id: 1, title: 'Luxor', image: 'luxor.webp', slug: 'luxor' },
  { id: 2, title: 'Aswan', image: 'aswan.webp', slug: 'aswan' },
  { id: 3, title: 'Hurghada', image: 'hurghada.webp', slug: 'hurghada' },
  { id: 4, title: 'White Desert', image: 'white-desert.webp', slug: 'white-desert' },
  { id: 5, title: 'Black Desert', image: 'black-desert.webp', slug: 'black-desert' },
  { id: 6, title: 'Siwa', image: 'siwa.webp', slug: 'siwa' },
  { id: 7, title: 'Cairo', image: 'cairo.webp', slug: 'cairo' },
  { id: 8, title: 'Marsa Alam', image: 'marsa-alam.webp', slug: 'marsa-alam' },
  { id: 9, title: 'Sharm', image: 'sharm.webp', slug: 'sharm' },
  { id: 10, title: 'Fayoum', image: 'fayoum.webp', slug: 'fayoum' },
];

export default function DestinationCarousel() {
  const [index, setIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(260);
  const [visibleCount, setVisibleCount] = useState(5);

  /* RESPONSIVE SETTINGS */
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width < 640) {
        setVisibleCount(1);
        setCardWidth(width - 40);
      } else if (width < 1024) {
        setVisibleCount(3);
        setCardWidth(260);
      } else {
        setVisibleCount(5);
        setCardWidth(260);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = destinations.length - visibleCount;

  /* AUTO SCROLL */
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 4000);

    return () => clearInterval(timer);
  }, [maxIndex]);

  return (
    <section
      className="relative bg-[#f8f4eb] py-10 overflow-hidden"
      style={{
        backgroundImage: "url('/background-image.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'overlay',
        opacity: 0.95,
      }}
    >
      {/* HEADER */}
      <div className="text-center p-10">
        <p className="text-2xl font-[cursive] text-[#0A7BBE]">
          Top Destinations
        </p>
        <h2 className="mt-2 text-5xl font-bold text-[#0A7BBE]">
          Popular Destinations
        </h2>
      </div>

      {/* CAROUSEL */}
      <div className="mt-20 overflow-hidden">
        <div
          className="flex gap-6 transition-transform duration-700 ease-out px-5 sm:px-10"
          style={{ transform: `translateX(-${index * cardWidth}px)` }}
        >
          {destinations.map((dest, i) => {
            const centerIndex = index + Math.floor(visibleCount / 2);
            const distanceFromCenter = Math.abs(i - centerIndex);

            /* ARC DEPTH (ONLY FOR LG SCREENS) */
            const isLargeScreen =
              typeof window !== 'undefined' && window.innerWidth >= 1024;

            const translateY = isLargeScreen
              ? distanceFromCenter * 30
              : 0;

            const scale =
              distanceFromCenter === 0 ? 1 : 0.92;

            return (
              <div
                key={dest.id}
                className="shrink-0 transition-all duration-500"
                style={{
                  width: cardWidth,
                  transform: `translateY(${translateY}px) scale(${scale})`,
                  opacity: distanceFromCenter === 0 ? 1 : 0.75,
                  zIndex: 10 - distanceFromCenter,
                }}
              >
                {/* IMAGE */}
                <div className="relative rounded-[48px] p-[3px] bg-white/40 backdrop-blur overflow-hidden shadow-2xl group">
                  <Image
                    src={`/images/tours/${dest.image}`}
                    alt={dest.title}
                    width={cardWidth}
                    height={240}
                    className="object-cover rounded-[44px] transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                </div>

                {/* TEXT */}
                <div className="mt-6 text-center">
                  <Link href={`/destinations/${dest.slug}`}>
                    <h3 className="text-xl font-bold text-[#0A7BBE] hover:text-[#d6b36b] transition">
                      {dest.title}
                    </h3>
                    <p className="text-gray-500 text-sm">Explore</p>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* DOTS */}
      <div className="mt-12 flex justify-center gap-4">
        {Array.from({ length: 6 }).map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-3 w-3 rounded-full transition ${
              i === index ? 'bg-[#d6b36b]' : 'border border-[#2a4b4b]'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
