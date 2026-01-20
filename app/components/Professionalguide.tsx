'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function TripSection() {
  return (
    <section className="w-full px-6 lg:px-20 py-24">
      <div className="grid lg:grid-cols-2 gap-16 items-center">

        {/* ================= TEXT SIDE (MOBILE FIRST) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="order-1 lg:order-2 flex flex-col gap-10 max-w-xl"
        >
          <p className="font-[cursive] text-[#0A3D40] text-xl">
            Let’s Go Together
          </p>

          <h1 className="text-5xl font-bold text-[#0A3D40] leading-tight">
            Plan Your <br /> Trip With us
          </h1>

          <p className="text-gray-600 leading-relaxed">
            Explore the beauty of Egypt with unforgettable group tours to amazing
            destinations like Siwa Oasis, the White Desert, Luxor, Aswan and
            Fayoum. Let’s go together and create memories that will stay with you
            forever.
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
                <h3 className="font-semibold text-lg text-[#0A3D40]">
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
                <h3 className="font-semibold text-lg text-[#0A3D40]">
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


        </motion.div>

        {/* ================= IMAGE SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="order-2 lg:order-1 relative w-full h-[420px] lg:h-[520px]"
        >
          {/* Large Image with diagonal shape */}
          <div
            className="absolute left-0 top-0 w-[70%] h-full overflow-hidden"
            style={{
              borderTopLeftRadius: '120px',
              borderBottomRightRadius: '120px',
              borderTopRightRadius: '0px',
              borderBottomLeftRadius: '0px',
            }}
          >
            <Image
              src="/group.jpg"
              alt="Tour Group"
              fill
              sizes="(max-width: 768px) 90vw, 40vw"
              className="object-cover"
            />
          </div>

         {/* SMALL FLOATING IMAGE (NOT CIRCLE) */}
<div
  className="
    absolute right-0 bottom-6
    w-[38%] h-[34%]
    sm:w-[42%] sm:h-[38%]
    lg:w-[45%] lg:h-[40%]
    overflow-hidden
    border-[10px] border-white
    shadow-2xl
  "
  style={{
    borderTopLeftRadius: "60px",
    borderTopRightRadius: "24px",
    borderBottomLeftRadius: "24px",
    borderBottomRightRadius: "60px",
  }}
>
  <Image
    src="/sunset.jpg"
    alt="Sunset Tour"
    fill
    sizes="(max-width: 768px) 60vw, 20vw"
    className="object-cover"
  />
</div>

        </motion.div>

      </div>
    </section>
  );
}
