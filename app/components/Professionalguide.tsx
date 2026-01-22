'use client';

import Image from 'next/image';
import { motion, type Variants } from 'framer-motion';
import { pacifico } from '@/app/fonts';

/* ================= ANIMATION VARIANTS ================= */

const container: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export default function TripSection() {
  return (
    <>
      <section className="w-full px-6 mt-7 lg:px-20 py-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* ================= TEXT SIDE ================= */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            className="order-1 lg:order-2 flex flex-col gap-10 max-w-xl"
          >
            <motion.p
              variants={item}
              className={`text-lg sm:text-2xl text-[#0A7BBE] whitespace-nowrap ${pacifico.className}`}
            >
              Let’s Go Together
            </motion.p>

            <motion.h1
              variants={item}
              className="text-5xl font-bold text-[#0A7BBE] -mt-5 leading-tight"
            >
              Plan Your <br /> Trip With us
            </motion.h1>

            <motion.p
              variants={item}
              className="text-gray-600 leading-relaxed -mt-5"
            >
              Explore the beauty of Egypt with unforgettable group tours to amazing
              destinations like Siwa Oasis, the White Desert, Luxor, Aswan and
              Fayoum. Let’s go together and create memories that will stay with you
              forever.
            </motion.p>

            <motion.div
              variants={item}
              className="flex flex-col gap-8"
            >
              <motion.div variants={item} className="flex gap-4 items-start group">
                <div className="w-12 h-12 min-w-[48px] rounded-full bg-[#E9D09A] group-hover:bg-[#075E94] transition-colors duration-300" />
                <div>
                  <h3 className="font-semibold text-lg text-[#0A7BBE]">
                    Exclusive Trip
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Discover exclusive trip experiences in Egypt from private
                    desert tours to hidden gems in Siwa, Luxor and Aswan.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={item} className="flex gap-4 items-start group">
                <div className="w-12 h-12 min-w-[48px] rounded-full bg-[#E9D09A] group-hover:bg-[#075E94] transition-colors duration-300" />
                <div>
                  <h3 className="font-semibold text-lg text-[#0A7BBE]">
                    Professional Guide
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Discover Egypt with a professional guide who makes every trip
                    easier, more enjoyable and full of cultural local insights.
                  </p>
                </div>
              </motion.div>
            </motion.div>

            {/* Learn More BUTTON */}
            <motion.button
              variants={item}
              className="
                relative overflow-hidden w-fit px-8 py-4 rounded-full bg-[#0A7BBE]
                border border-[#0A7BBE]
                text-white font-semibold
                group
              "
            >
              {/* background slide */}
              <span
                className="
                  absolute inset-0 bg-[#075E94]
                  translate-x-[-100%]
                  group-hover:translate-x-0
                  transition-transform duration-500 ease-out
                "
              />

              {/* content */}
              <span className="relative z-10 flex items-center gap-3 transition-colors duration-300">
                Learn More
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </span>
            </motion.button>
          </motion.div>

          {/* ================= IMAGE SIDE ================= */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1 relative lg:-mt-20 -mt-10 w-full h-[320px] sm:h-[380px] lg:h-[520px]"
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

            {/* SMALL FLOATING IMAGE */}
            <div
              className="
                absolute right-0 bottom-20
                w-[38%] h-[34%]
                sm:w-[36%] sm:h-[32%]
                lg:w-[45%] lg:h-[40%]
                overflow-hidden
                border-[5px] border-white
                shadow-2xl
              "
              style={{
                borderTopLeftRadius: '200px',
                borderTopRightRadius: '5px',
                borderBottomLeftRadius: '5px',
                borderBottomRightRadius: '200px',
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

      {/* MOBILE VIDEO ONLY */}
      <div className="block md:hidden px-6 lg:px-20">
        <video
          src="/images/tours/video1.webm"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-170 rounded-xl shadow-lg object-cover"
        />
      </div>
    </>
  );
}
