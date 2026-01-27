'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { pacifico } from '@/app/fonts';

export default function AboutUs() {
  return (
    <section className="w-full px-6 lg:px-20 py-10 mt-20">
      <div className="grid lg:grid-cols-2 gap-16 items-center">

        {/* ================= TEXT SIDE (MOBILE FIRST) ================= */}
        <div className="order-1 lg:order-2 flex flex-col -mt-40 gap-10 max-w-xl">
          {/* Script title */}
          <p
            className={`text-lg sm:text-2xl text-[#0A7BBE] mt-30 whitespace-nowrap ${pacifico.className}`}
          >
            Siri Sand Tours
          </p>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl font-bold text-[#0A7BBE] -mt-5 leading-tight">
            Experience Egypt<br /> Like Never Before
          </h1>

          {/* Description */}
          <p className="text-gray-600 leading-relaxed -mt-5">
<span className="block mt-5">              Siri Sand Tours was born from our love for the desert and a desire to share its magic in a way that truly transforms you. Egypt is more than pyramids and museums; it’s vast, silent dunes, hidden oases, and starlit skies that make time feel infinite. Here, the world slows down. You walk across endless sands, sleep under the stars, and share stories with Bedouins who know the land like the back of their hand.
            </span>
<span className="block mt-5">              Our journeys are real, grounded, and designed to awaken your senses. You’ll taste simple, authentic meals that somehow taste better than anything else, feel the warm desert breeze on your face, and leave the noise of everyday life behind. Every detail matters from the moment you arrive to the moment you depart so each adventure becomes a story you’ll remember and share for years to come.
            </span>
<span className="block mt-5">              At Siri Sand Tours, every trip is more than a tour it’s an experience. A chance to step into nature, reconnect with what matters, and feel the desert’s quiet magic in ways most travelers never get to. It’s adventure, laughter, peace, and soul—all rolled into one unforgettable journey through Egypt’s most breathtaking landscapes.
            </span>
          </p>

          {/* Features */}
          <div className="flex flex-col gap-8">
            {/* Exclusive Trip */}
            <div className="flex gap-4 items-start group">
              <div
                className="w-12 h-12 min-w-[48px] rounded-full bg-[#E9D09A]
                           group-hover:bg-[#0A7BBE]
                           transition-colors duration-300"
              />
              <div>
                <h3 className="font-semibold text-lg text-[#0A7BBE]">
                  Exclusive Trip
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Discover exclusive trip experiences in Egypt from private
                  desert tours to hidden gems in Siwa, Luxor and Aswan.
                </p>
              </div>
            </div>

            {/* Professional Guide */}
            <div className="flex gap-4 items-start group">
              <div
                className="w-12 h-12 min-w-[48px] rounded-full bg-[#E9D09A]
                           group-hover:bg-[#0A7BBE]
                           transition-colors duration-300"
              />
              <div>
                <h3 className="font-semibold text-lg text-[#0A7BBE]">
                  Professional Guide
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Discover Egypt with a professional guide who makes every trip
                  easier, more enjoyable and full of cultural local insights.
                </p>
              </div>
            </div>
          </div>

          {/* Learn More BUTTON */}
          <button
            className="
              relative overflow-hidden w-fit px-8 py-4 rounded-full
              border border-[#0A7BBE]
              text-[#0A7BBE] font-semibold
              group
            "
          >
            {/* background slide */}
            <span
              className="
                absolute inset-0 bg-[#0A7BBE]
                translate-x-[-100%]
                group-hover:translate-x-0
                transition-transform duration-500 ease-out
              "
            />

            {/* content */}
            <span className="relative z-10 flex items-center gap-3 group-hover:text-white transition-colors duration-300">
              Learn More
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </span>
          </button>
        </div>

        {/* ================= IMAGE SIDE ================= */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="order-2 -mt-50 lg:order-1 w-full flex flex-col gap-6"
        >
          {/* TOP IMAGE */}
          <div
            className="relative w-full h-[320px] sm:h-[380px] lg:h-[520px] overflow-hidden rounded-[40px]"
          >
            <Image
              src="/group.jpg"
              alt="Tour Group"
              fill
              sizes="(max-width: 768px) 90vw, 40vw"
              className="object-cover"
            />
          </div>

          {/* BOTTOM IMAGE (Animated) */}
          <motion.div
            className="
              relative w-full h-[240px] sm:h-[280px] lg:h-[320px]
              overflow-hidden
              border-[5px] border-white
              shadow-2xl
              rounded-[40px]
            "
            animate={{
              x: [-20, 20, -20], // move left -> right -> left
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Image
              src="/sunset.jpg"
              alt="Sunset Tour"
              fill
              sizes="(max-width: 768px) 90vw, 40vw"
              className="object-cover"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
