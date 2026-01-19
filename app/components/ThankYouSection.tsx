'use client'

import Image from 'next/image'
import { motion, Variants } from 'framer-motion'

/* ---------------- ANIMATION ---------------- */

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
}

const stepUp: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.16, 1, 0.3, 1],
    },
  },
}

/* ---------------- COMPONENT ---------------- */

export default function ThankYouSection() {
  return (
    <motion.section
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className="w-full bg-white lg:-mt-20 py-4  lg:-mb-3.5"
    >
      <div className="mx-auto max-w-[1440px] px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center relative">

          {/* LEFT: IMAGE */}
          <motion.div
            variants={stepUp}
            className="relative z-0 h-[520px] sm:h-[600px] lg:h-[780px]"
          >
            <Image
              src="/images/Thank-you.webp"
              alt="Resort pool"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </motion.div>

          {/* RIGHT: THANK YOU BOX */}
          <div className="relative lg:-translate-x-1/3 z-10">
            <motion.div
              variants={container}
              className="
                bg-[#0b72b9]
                w-full
                max-w-[560px]
                px-10
                py-12
                lg:px-14
                lg:py-10
                mt-8
                lg:-mt-65
                relative
                rounded-0
                shadow-xl
              "
            >
              <motion.h1
                variants={stepUp}
                className="text-white text-4xl sm:text-5xl lg:text-[56px] font-bold leading-[1.05] mb-4"
              >
                THANK YOU
              </motion.h1>

              <motion.p
                variants={stepUp}
                className="text-[#e6f2fb] text-base sm:text-lg leading-relaxed"
              >
                Let us create unforgettable memories for you, filled with
                relaxation, adventure, and luxury.
              </motion.p>
            </motion.div>
          </div>

        </div>
      </div>
    </motion.section>
  )
}
