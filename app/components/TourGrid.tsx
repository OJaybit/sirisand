'use client';

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const destinations = [
  { id: 1, title: "Luxor", image: "luxor.webp", slug: "6-day-egypt-desert--oasis-tour" },
  { id: 2, title: "Sharm El-Sheikh", image: "aswan.webp", slug: "classic-nile-cruise-experience" },
  { id: 3, title: "Cairo", image: "hurghada.webp", slug: "explore-egypt-from-the-pyramids-to-the-white-desert" },
  { id: 4, title: "Marsa Alam", image: "white-desert.webp", slug: "luxury-siwa-oasis-white-desert-adventure" },
  { id: 5, title: "Fayoum", image: "black-desert.webp", slug: "cairo-alexandria-highlights-tour" },
  { id: 6, title: "Siwa", image: "siwa.webp", slug: "red-sea--desert-safari-tour" },
  { id: 7, title: "Aswan", image: "cairo.webp", slug: "ancient-egypt-discovery-tour" },
  { id: 8, title: "Hurghada", image: "hurghada.webp", slug: "egypt-cultural-heritage-tour" }, // new mixing card
];

export default function DestinationCarousel() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(3);
  const [cardWidth, setCardWidth] = useState(300);
  const [cardHeight, setCardHeight] = useState(400);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const resize = () => {
      const w = window.innerWidth;

      if (w < 640) {
        setIsMobile(true);
        setVisible(3);
        setCardWidth(w * 0.94);
        setCardHeight(w * 1.25);
      } else if (w < 1024) {
        setIsMobile(false);
        setVisible(3);
        setCardWidth(280);
        setCardHeight(360);
      } else {
        setIsMobile(false);
        setVisible(5);
        setCardWidth(320);
        setCardHeight(420);
      }
    };

    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  useEffect(() => {
    const t = setTimeout(() => {
      setIndex((p) => (p + 1) % destinations.length);
    }, 4200);
    return () => clearTimeout(t);
  }, [index]);

  const total = destinations.length;
  const center = Math.floor(visible / 2);

  const peekAmount = cardWidth * 0.08;
  const mobileOffset = cardWidth - peekAmount;

  return (
    <section className="relative -mt-30 lg:-mt-60 z-10 py-6 overflow-hidden">
      <div className="relative w-full h-[75vh] sm:h-[420px] lg:h-[520px] max-w-7xl mx-auto flex items-center justify-center">
        {destinations.map((dest, i) => {
          let offset = i - index;
          if (offset > total / 2) offset -= total;
          if (offset < -total / 2) offset += total;

          const distance = Math.abs(offset);
          const isVisible = distance <= center;

          return (
            <motion.div
              key={dest.id}
              initial={false}
              drag={isMobile ? "x" : false}
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={(e, info) => {
                if (info.offset.x < -50) setIndex((p) => (p + 1) % total);
                if (info.offset.x > 50) setIndex((p) => (p - 1 + total) % total);
              }}
              animate={{
                x: isMobile ? offset * mobileOffset : offset * cardWidth,
                y: isMobile ? distance * 12 : distance * 26,
                scale: distance === 0 ? 1 : isMobile ? 0.9 : 0.92,
                opacity:
                  distance === 0
                    ? 1
                    : isMobile
                      ? 0.45
                      : isVisible
                        ? 1 - distance * 0.25
                        : 0,
              }}
              transition={{
                type: "spring",
                stiffness: 140,
                damping: 22,
              }}
              className="absolute"
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

                <div className="mt-4 text-center">
                  <Link href={`/tours/${dest.slug}`}>
                    <h3 className="text-xl font-bold text-[#0A7BBE] hover:text-[#075E94] transition">
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
      <div className="-mt-10 lg:-mt-5 flex justify-center gap-3 z-50 relative">
        {destinations.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-3 w-3 rounded-full transition ${
              i === index ? "bg-[#0a7bbe]" : "border border-black"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
