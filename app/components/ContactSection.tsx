'use client';

import { motion, Variants } from 'framer-motion';
import Image from 'next/image';

/* ---------------- ANIMATION (SAME AS THANK YOU) ---------------- */

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const stepUp: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

/* ---------------- COMPONENT ---------------- */

export default function ContactSection() {
  return (
    <motion.section
      className="relative bg-white overflow-hidden -mt-15"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      {/* ======================== STARFISH ======================== */}
      <div className="absolute top-8 -right-14 w-36 h-36 opacity-20 pointer-events-none z-0">
        <Image src="/starfish.png" alt="Star" fill className="object-contain" />
      </div>

      {/* ======================== MOBILE ======================== */}
      <div className="block lg:hidden max-w-7xl mx-auto px-6 py-12 sm:py-16 flex flex-col gap-6 relative z-10">

        {/* Text */}
        <motion.div
          variants={container}
          className="flex flex-col items-center text-center"
        >
          <motion.span
            variants={stepUp}
            className="text-[#0A7BBE] tracking-widest text-sm font-bold uppercase -mt-6 mb-2 sm:mb-3"
          >
            Sirisand tour
          </motion.span>

          <motion.h2
            variants={stepUp}
            className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 mb-3 sm:mb-4"
          >
            Contact Us
          </motion.h2>

          <motion.p
            variants={stepUp}
            className="text-slate-600 text-base sm:text-lg leading-[1.6] max-w-lg"
          >
            Have questions or need assistance? Our team is always ready to help
            you plan the perfect tour. Reach out using any of the options below.
          </motion.p>
        </motion.div>

        {/* Video */}
        <motion.div
          variants={stepUp}
          className="relative h-[680px] lg:h-full w-full overflow-hidden"
        >
          <div className="absolute -left-8 -bottom-30 h-[200px] w-[200px] opacity-50 -z-10 pointer-events-none">
            <img src="/rebune.png" alt="" className="w-full h-full object-contain" />
          </div>

          <video
            src="/video2.webm"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Boxes */}
        <motion.div variants={container} className="flex flex-col gap-4">
          <motion.div
            variants={stepUp}
            whileHover={{ y: -4 }}
            className="bg-[#0A7BBE] text-white rounded-xl p-5 shadow-md"
          >
            <h3 className="text-lg font-bold mb-1">Call Us</h3>
            <p className="text-sm leading-relaxed">
              Speak directly with our support team at
              <strong> +1 234 567 890</strong>
            </p>
          </motion.div>

          <motion.div
            variants={stepUp}
            whileHover={{ y: -4 }}
            className="bg-[#0A7BBE] text-white rounded-xl p-5 shadow-md"
          >
            <h3 className="text-lg font-bold mb-1">Email Us</h3>
            <p className="text-sm leading-relaxed">
              Send your inquiries to
              <strong> contact@Sirisand.com</strong>
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* ======================== DESKTOP ======================== */}
      <div className="hidden lg:grid max-w-7xl mx-auto px-6 py-24 grid-cols-2 gap-12 items-start relative z-10">

        {/* Video */}
        <motion.div variants={stepUp} className="relative w-[600px] h-[500px] overflow-hidden">
          <div className="absolute -left-8 -bottom-50 w-[300px] h-[400px] opacity-20 -z-10 pointer-events-none">
            <img src="/rebune.png" alt="" className="w-full h-full object-contain" />
          </div>

          <video
            src="/video2.webm"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Text */}
        <motion.div variants={container} className="flex flex-col text-left">
          <motion.span
            variants={stepUp}
            className="text-[#0A7BBE] tracking-widest text-sm font-bold uppercase mb-3"
          >
            Sirisand tour
          </motion.span>

          <motion.h2
            variants={stepUp}
            className="text-4xl md:text-5xl font-black text-slate-900 mb-6"
          >
            Contact Us
          </motion.h2>

          <motion.p
            variants={stepUp}
            className="text-slate-600 text-lg mb-10 max-w-lg leading-[1.7]"
          >
            Have questions or need assistance? Our team is always ready to help
            you plan the perfect tour. Reach out using any of the options below.
          </motion.p>

          <motion.div variants={container} className="flex flex-col gap-6">
            <motion.div variants={stepUp} className="bg-[#0A7BBE] text-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold mb-2">Call Us</h3>
              <p className="text-sm">
                Speak directly with our support team at
                <strong> +1 234 567 890</strong>
              </p>
            </motion.div>

            <motion.div variants={stepUp} className="bg-[#0A7BBE] text-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold mb-2">Email Us</h3>
              <p className="text-sm">
                Send your inquiries to
                <strong> contact@Sirisand.com</strong>
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
