'use client'

import Image from 'next/image'
import { motion, Variants } from 'framer-motion'

/* ---------------- ANIMATION ---------------- */
const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.07,
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.16, 1, 0.3, 1],
    },
  },
}

/* ---------------- COMPONENT ---------------- */
export default function SustainabilityPage() {
  return (
    <motion.section
      className="relative w-full bg-white -mt-10 px-6 py-16 lg:px-10"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      <div className="mx-auto -mt-10 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

          {/* MAIN GRID */}
          <div className="lg:col-span-12 grid grid-cols-1 lg:grid-cols-12 lg:grid-rows-2 gap-3">

            {/* LEFT IMAGE 1 */}
            <motion.div
              variants={itemVariants}
              className="relative lg:col-span-4 aspect-[4/3] overflow-hidden order-2 lg:order-1"
            >
              <Image
                src="/images/trending/whale-valley.webp"
                alt="Whale Valley"
                fill
                priority
                className="object-cover"
              />
            </motion.div>

            {/* RIGHT IMAGE */}
            <motion.div
              variants={itemVariants}
              className="relative lg:col-span-8 lg:aspect-[24.5/9] overflow-hidden order-3 lg:order-2"
            >
              <Image
                src="/images/trending/marsa-alam.webp"
                alt="Marsa Alam"
                fill
                className="object-cover"
              />
            </motion.div>

            {/* LEFT IMAGE 2 */}
            <motion.div
              variants={itemVariants}
              className="relative lg:col-span-4 aspect-[4/3] overflow-hidden order-4 lg:order-3"
            >
              <Image
                src="/images/trending/philae.webp"
                alt="Philae"
                fill
                className="object-cover"
              />
            </motion.div>

            {/* RIGHT TEXT */}
            <motion.div
              variants={containerVariants}
              className="
                lg:col-span-8
                flex
                flex-col
                items-center
                lg:items-start
                justify-start
                pt-2
                order-1 lg:order-4
              "
            >
             <motion.p
  variants={itemVariants}
  className="text-sm tracking-widest text-[#0A7BBE] font-semibold uppercase lg:mt-15 mt-4 mb-2"
>
  Sirisand Tour
</motion.p>

<motion.h2
  variants={itemVariants}
  className="text-2xl lg:text-4xl font-bold text-gray-900 mb-3"
>
  Sustainability Practices
</motion.h2>

<motion.p
  variants={itemVariants}
  className="text-gray-600 text-lg leading-relaxed max-w-prose text-center lg:text-left"
>
  We are committed to responsible travel supporting local communities and minimizing environmental impact while ensuring every experience is memorable.
</motion.p>


            </motion.div>

          </div>
        </div>
      </div>
    </motion.section>
  )
}
