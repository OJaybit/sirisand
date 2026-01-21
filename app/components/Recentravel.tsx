'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  HiChevronLeft,
  HiChevronRight,
  HiX,
  HiArrowsExpand,
  HiOutlineShare,
} from 'react-icons/hi';
import { pacifico } from '@/app/fonts';

const images = [
  '/images/gallery/1.jpg',
  '/images/gallery/2.jpg',
  '/images/gallery/3.jpg',
  '/images/gallery/4.jpg',
  '/images/gallery/5.jpg',
  '/images/gallery/6.jpg',
  '/images/gallery/7.jpg',
];

/* ---------------- IMAGE CARD ---------------- */
function ImageCard({
  src,
  index,
  onOpen,
}: {
  src: string;
  index: number;
  onOpen: (i: number) => void;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.04 }}
      className="group relative cursor-pointer overflow-hidden rounded-[32px] shadow-lg"
      onClick={() => onOpen(index)}
    >
      <Image
        src={src}
        alt="Travel moment"
        width={420}
        height={520}
        className="w-full object-cover"
      />
      {/* ZOOM ICON OVERLAY */}
      <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 transition group-hover:opacity-100">
        <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-white">
          <div className="relative h-4 w-4">
            <span className="absolute inset-x-0 top-1/2 h-[2px] bg-white" />
            <span className="absolute inset-y-0 left-1/2 w-[2px] bg-white" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ---------------- MAIN COMPONENT ---------------- */
export default function RecentTravelMoments() {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState(0);
  const [fullScreen, setFullScreen] = useState(false);
  const [zoomed, setZoomed] = useState(false);
  const [shareOpen, setShareOpen] = useState(false);

  const next = () => setCurrent((p) => (p + 1) % images.length);
  const prev = () => setCurrent((p) => (p === 0 ? images.length - 1 : p - 1));

  return (
    <>
    
      {/* GALLERY */}
      <section className="bg-white py-28">
        <div className="mx-auto max-w-7xl px-4">
          {/* HEADER */}
          <div className="mb-24 text-center">
            <p className={`${pacifico.className} mb-4 font-[cursive] text-2xl text-[#0A7BBE]`}>
              Embark on a soul-stirring journey
            </p>
            <h2 className="text-5xl font-bold -mb-15 text-[#0A7BBE]">
              Recent travel moments
            </h2>
          </div>

          {/* DESKTOP GRID */}
          <div className="hidden lg:grid grid-cols-5 gap-10">
            <div className="translate-y-32">
              <ImageCard
                src={images[0]}
                index={0}
                onOpen={(i) => {
                  setCurrent(i);
                  setOpen(true);
                }}
              />
            </div>
            <div className="flex flex-col gap-10 translate-y-12">
              <ImageCard
                src={images[1]}
                index={1}
                onOpen={(i) => {
                  setCurrent(i);
                  setOpen(true);
                }}
              />
              <ImageCard
                src={images[2]}
                index={2}
                onOpen={(i) => {
                  setCurrent(i);
                  setOpen(true);
                }}
              />
            </div>
            <div className="translate-y-32">
              <ImageCard
                src={images[3]}
                index={3}
                onOpen={(i) => {
                  setCurrent(i);
                  setOpen(true);
                }}
              />
            </div>
            <div className="flex flex-col gap-10 translate-y-12">
              <ImageCard
                src={images[4]}
                index={4}
                onOpen={(i) => {
                  setCurrent(i);
                  setOpen(true);
                }}
              />
              <ImageCard
                src={images[5]}
                index={5}
                onOpen={(i) => {
                  setCurrent(i);
                  setOpen(true);
                }}
              />
            </div>
            <div className="translate-y-32">
              <ImageCard
                src={images[6]}
                index={6}
                onOpen={(i) => {
                  setCurrent(i);
                  setOpen(true);
                }}
              />
            </div>
          </div>

          {/* MOBILE STACK */}
          <div className="lg:hidden flex flex-col gap-8">
            {images.map((img, i) => (
              <ImageCard
                key={i}
                src={img}
                index={i}
                onOpen={(i) => {
                  setCurrent(i);
                  setOpen(true);
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* MODAL / LIGHTBOX */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 lg:p-0"
            onClick={(e) => {
              if (shareOpen && !(e.target as HTMLElement).closest('#share-panel')) {
                setShareOpen(false);
              }
            }}
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="relative flex items-center justify-center w-full max-w-4xl"
            >
              {/* LEFT ARROW */}
              <button
                onClick={prev}
                className="absolute left-0 top-1/2 -translate-y-1/2 rounded-full border border-white/40 p-3 text-white hover:bg-white/10 z-20"
              >
                <HiChevronLeft size={32} />
              </button>

              {/* IMAGE + ICONS */}
              <div className="flex flex-col w-full items-center">
                {/* ICONS: top-right overlay on desktop, above image on mobile */}
                <div className="flex flex-row lg:flex-col items-center justify-end gap-2 mb-2 w-full lg:absolute lg:top-4 lg:right-4 lg:mb-0">
                  <button
                    onClick={() => setFullScreen((p) => !p)}
                    className="rounded-full border border-white/40 p-2 text-white hover:bg-white/10"
                  >
                    <HiArrowsExpand size={20} />
                  </button>

                  <button
                    onClick={() => setZoomed((p) => !p)}
                    className="rounded-full border border-white/40 p-2 text-white hover:bg-white/10"
                  >
                    {zoomed ? <span className="text-xl">➖</span> : <span className="text-xl">➕</span>}
                  </button>

                  <button
                    onClick={() => setShareOpen((p) => !p)}
                    className="rounded-full border border-white/40 p-2 text-white hover:bg-white/10"
                  >
                    <HiOutlineShare size={20} />
                  </button>

                  <button
                    onClick={() => setOpen(false)}
                    className="rounded-full border border-white/40 p-2 text-white hover:bg-white/10"
                  >
                    <HiX size={20} />
                  </button>
                </div>

                {/* IMAGE WITH CLICK TO TOGGLE ZOOM */}
                <motion.div
                  onClick={() => setZoomed((p) => !p)}
                  animate={{ scale: zoomed ? 2 : 1 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="w-auto cursor-zoom-in"
                >
                  <Image
                    src={images[current]}
                    alt="Zoomed"
                    width={fullScreen ? 1920 : 900}
                    height={fullScreen ? 1080 : 500}
                    className="max-h-[80vh] w-auto rounded-2xl object-contain"
                  />
                </motion.div>
              </div>

              {/* RIGHT ARROW */}
              <button
                onClick={next}
                className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full border border-white/40 p-3 text-white hover:bg-white/10 z-20"
              >
                <HiChevronRight size={32} />
              </button>

              {/* SHARE PANEL */}
              {shareOpen && (
                <div
                  id="share-panel"
                  className="absolute top-16 right-4 flex flex-col gap-2 bg-black/70 p-2 rounded z-30"
                >
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                      window.location.href
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
                  >
                    Facebook
                  </a>
                  <a
                    href={`https://www.instagram.com/`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1 bg-pink-500 text-white rounded hover:bg-pink-600"
                  >
                    Instagram
                  </a>
                  <a
                    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                      window.location.href
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1 bg-blue-400 text-white rounded hover:bg-blue-500"
                  >
                    X
                  </a>
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(window.location.href);
                      alert('Link copied to clipboard!');
                    }}
                    className="px-3 py-1 bg-gray-700 text-white rounded hover:bg-gray-800"
                  >
                    Copy Link
                  </button>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
