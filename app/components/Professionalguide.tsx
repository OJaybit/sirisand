'use client';

import { useRef } from 'react';
import Image from 'next/image';
import {
  motion,
  useScroll,
  useTransform,
  type Variants,
} from 'framer-motion';
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
  /* ================= SCROLL ZOOM VIDEO ================= */
  const videoRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: videoRef,
    offset: ['start end', 'end start'],
  });

  // Zoom strength: adjust 1.15 → 1.4 if you want stronger
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.25]);

  return (
    <>
      {/* ================= MAIN SECTION ================= */}
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
              Explore the beauty of Egypt with unforgettable group tours to
              amazing destinations like Siwa Oasis, the White Desert, Luxor,
              Aswan and Fayoum. Let’s go together and create memories that will
              stay with you forever.
            </motion.p>

            <motion.div variants={item} className="flex flex-col gap-8">
              <motion.div className="flex gap-4 items-start group">
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

              <motion.div className="flex gap-4 items-start group">
                <div className="w-12 h-12 min-w-[48px] rounded-full bg-[#E9D09A] group-hover:bg-[#075E94] transition-colors duration-300" />
                <div>
                  <h3 className="font-semibold text-lg text-[#0A7BBE]">
                    Professional Guide
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Discover Egypt with a professional guide who makes every
                    trip easier, more enjoyable and full of cultural local
                    insights.
                  </p>
                </div>
              </motion.div>
            </motion.div>

            {/* ================= BUTTON ================= */}
            <motion.button
              variants={item}
              className="
                relative overflow-hidden w-fit px-8 py-4 rounded-full
                bg-[#0A7BBE] border border-[#0A7BBE]
                text-white font-semibold group
              "
            >
              <span
                className="
                  absolute inset-0 bg-[#075E94]
                  translate-x-[-100%] group-hover:translate-x-0
                  transition-transform duration-500 ease-out
                "
              />
              <span className="relative z-10 flex items-center gap-3">
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
            {/* Large Image */}
            <div
              className="absolute left-0 top-0 w-[70%] h-full overflow-hidden"
              style={{
                borderTopLeftRadius: '120px',
                borderBottomRightRadius: '120px',
              }}
            >
              <Image
                src="/group.jpg"
                alt="Tour Group"
                fill
                className="object-cover"
              />
            </div>

            {/* Floating Image */}
            <div
              className="
                absolute right-0 bottom-20
                w-[38%] h-[34%]
                overflow-hidden border-[5px] border-white shadow-2xl
              "
              style={{
                borderTopLeftRadius: '200px',
                borderBottomRightRadius: '200px',
              }}
            >
              <Image
                src="/sunset.jpg"
                alt="Sunset Tour"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= MOBILE VIDEO (ZOOM ON SCROLL) ================= */}
 <div
  ref={videoRef}
  className="
    block md:hidden
    px-6 mt-15
    w-screen
    flex justify-center items-center
    overflow-hidden
  "
>
  <motion.video
    src="/images/tours/video1.mp4"
    autoPlay
    muted
    loop
    playsInline
    style={{ scale }}
    className="w-full h-230 object-cover"
  />
</div>

    </>
  );
}
