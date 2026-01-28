"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { pacifico } from "@/app/fonts";
import Link from "next/link";


/* ---------------- SLIDES DATA ---------------- */
const slides = [
  {
    title: "The sands call and the temples await; enter a story only we can tell",
    text: "Mastering the silence of the desert and the song of the sea: Welcome to our family in the heart of nature",
  },
  {
    title: "The sands call and the temples await; enter a story only we can tell",
    text: "Many travel to Egypt, but few truly experience it. Join the family that owns history",
  },
  {
    title: "The sands call and the temples await; enter a story only we can tell",
    text: "Enter as a guest, leave as a member of the family, and discover that you are like a king",
  },
   {
    title: "The sands call and the temples await; enter a story only we can tell",
    text: "Welcome to our family. We invite you to explore Egypt not as a guest, but as a member of the family",
  },
];

/* ---------------- HERO ---------------- */
export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative lg:h-200 h-screen w-full overflow-hidden">
      {/* VIDEO BACKGROUND */}
      <video
        suppressHydrationWarning
        className="absolute inset-0 h-full w-full object-cover scale-105"
        src="/hero-video.webm"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />

      {/* CONTENT */}
      <div className="relative z-10 flex h-full items-center lg:-mt-33 px-6 lg:px-20">
        <AnimatePresence mode="wait">
          <TextBlock key={current} slide={slides[current]} />
        </AnimatePresence>
      </div>
    </section>
  );
}

/* ---------------- TEXT BLOCK ---------------- */
function TextBlock({ slide }: { slide: any }) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.3, 
          },
        },
      }}
      className="
        w-full
        flex
        flex-col
        items-center
        text-center
        lg:items-start
        lg:text-left
        lg:mt-30
      "
    >
      {/* TITLE */}
      <motion.h1
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className={`
          ${pacifico.className}
          text-base sm:text-lg md:text-xl lg:text-3xl
          text-white/90
        `}
      >
        {slide.title}
      </motion.h1>

      {/* TEXT */}
      <motion.p
        variants={{
          hidden: { opacity: 0, y: 16 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="
          mt-3
          text-2xl sm:text-4xl md:text-5xl lg:text-4xl
          font-semibold leading-tight text-white
          max-w-full lg:max-w-[60vw]
        "
      >
        {slide.text}
      </motion.p>

     <motion.div
  variants={{
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2 },
    },
  }}
  className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:justify-start"
>
  {/* EXPLORE TOURS */}
  <Link href="/ourtrip">
    <motion.button
      variants={{
        hidden: { opacity: 0, y: 16 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="relative overflow-hidden px-8 py-4 h-16 w-50 rounded-full border border-white text-white font-semibold group"
    >
      <span className="absolute inset-0 bg-[#075E94] -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" />
      <span className="relative z-10 flex items-center gap-2">
        Explore Tours →
      </span>
    </motion.button>
  </Link>

  {/* CONTACT US */}
  <Link href="/contact">
    <motion.button
      variants={{
        hidden: { opacity: 0, y: 16 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="relative overflow-hidden px-8 py-4 h-16 w-50 rounded-full border border-white text-white font-semibold group"
    >
      <span className="absolute inset-0 bg-[#075E94] -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" />
      <span className="relative z-10 flex items-center gap-2">
        Contact Us →
      </span>
    </motion.button>
  </Link>
</motion.div>

    </motion.div>
  );
}
