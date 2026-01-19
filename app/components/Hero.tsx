'use client';
import { motion, Variants } from "framer-motion";

export default function Hero() {

  // ===== VARIANTS =====
  const leftStagger: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.05,
      },
    },
  };

  const stepUp: Variants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.35,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const bgFade: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.25, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="relative w-full h-screen overflow-hidden">
      <div className="relative h-full w-full grid sm:grid-cols-[43%_57%] md:grid-cols-[40%_60%] lg:grid-cols-[30%_70%]">

        {/* ================= LEFT SIDE (DESKTOP) ================= */}
        <motion.div
          variants={leftStagger}
          initial="hidden"
          animate="visible"
          className="relative z-30 flex flex-col px-6 sm:px-12 pt-20 sm:pt-40 bg-white hidden sm:flex"
        >
          <motion.div variants={bgFade} className="absolute inset-0 bg-white z-[-1]" />

          <motion.p variants={stepUp} className="text-[14px] sm:text-[16px] tracking-[0.55em] text-[#0A7BBE] mb-4 sm:mb-6">
            WELCOME TO
          </motion.p>

          <motion.h1 variants={stepUp} className="text-[48px] sm:text-[72px] leading-[1.05] font-bold tracking-[-0.02em] text-[#1F4E79]">
            SIRISAND <br /> TOUR
          </motion.h1>

          <motion.p variants={stepUp} className="mt-6 lg:mt-5 sm:mt-14 text-[#0A7BBE] leading-snug break-normal text-base sm:text-lg md:text-xl lg:text-2xl max-w-full sm:max-w-[500px] md:max-w-[650px] lg:max-w-[700px]">
            Where Luxury Meets Tranquility and Every Moment Becomes a Cherished Memory
          </motion.p>
        </motion.div>

        {/* ================= RIGHT SIDE / VIDEO ================= */}
        <div className="relative h-full w-full">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            poster="/hero-poster.png"
            className="absolute inset-0 w-full h-full object-cover z-0"
          >
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>

          <div className="absolute inset-y-0 left-0 w-[35%] bg-gradient-to-r from-white/95 to-transparent z-20 hidden sm:block" />

          {/* ================= MOBILE TEXT WITH SCROLL REVEAL ================= */}
          <motion.div
            variants={leftStagger}        // parent stagger
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            className="absolute mt-10 inset-0 flex flex-col justify-center items-center px-6 z-20 text-center sm:hidden"
          >
            <motion.p variants={stepUp} className="text-[14px] tracking-[0.55em] text-[#0A7BBE] mb-2">
              WELCOME TO
            </motion.p>

            <motion.h1 variants={stepUp} className="text-[32px] sm:text-[40px] font-bold leading-snug text-[#1F4E79]">
              SIRISAND <br /> TOUR
            </motion.h1>

            <motion.p variants={stepUp} className="mt-4 text-[#0A7BBE] text-sm sm:text-base md:text-lg leading-snug break-normal max-w-full md:max-w-[300px] text-center">
              Where Luxury Meets Tranquility and Every Moment Becomes a Cherished Memory
            </motion.p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
