import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";
import { Facilities } from "./Facilities";
import { Pamphlets } from "./Pamphlets";
import pamphlet2 from "@/assets/phamplet2.jpeg";
import img4 from "@/assets/img4.jpeg";
import img5 from "@/assets/img5.jpeg";
import img6 from "@/assets/img6.jpeg";
import img7 from "@/assets/img7.jpeg";
import img8 from "@/assets/img8.jpeg";
import img9 from "@/assets/img9.jpeg";
import img10 from "@/assets/img10.jpeg";

const bgImages = [img4, img5, img6, img7, img8, img9, img10];

/* Predefined positions for a scattered, masonry-like decorative layer */
const bgTiles = [
  { src: img4,  top: "4%",   left: "1%",   w: "16%",  rotate: -2,  opacity: 0.07 },
  { src: img7,  top: "3%",   right: "0%",  w: "13%",  rotate: 1.5, opacity: 0.065 },
  { src: img5,  top: "28%",  left: "0%",   w: "12%",  rotate: 2,   opacity: 0.06 },
  { src: img9,  top: "22%",  right: "1%",  w: "14%",  rotate: -1,  opacity: 0.07 },
  { src: img6,  top: "52%",  left: "1%",   w: "15%",  rotate: -1.5,opacity: 0.065 },
  { src: img10, top: "50%",  right: "0%",  w: "12%",  rotate: 2,   opacity: 0.06 },
  { src: img8,  top: "76%",  left: "2%",   w: "13%",  rotate: 1,   opacity: 0.06 },
];

export function InfrastructureSection() {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const openLightbox = useCallback(() => setLightboxOpen(true), []);
  const closeLightbox = useCallback(() => setLightboxOpen(false), []);

  return (
    <>
      <section
        id="infrastructure"
        className="relative scroll-mt-24 overflow-hidden py-32 sm:py-44"
        style={{ background: "var(--gradient-surface)" }}
      >
        {/* ── Industrial texture background gallery ── */}
        <div aria-hidden className="pointer-events-none absolute inset-0 select-none">
          {bgTiles.map(({ src, top, left, right, w, rotate, opacity }, i) => (
            <div
              key={i}
              className="absolute overflow-hidden rounded-sm"
              style={{
                top,
                left: left ?? undefined,
                right: right ?? undefined,
                width: w,
                transform: `rotate(${rotate}deg)`,
                opacity,
              }}
            >
              <img
                src={src}
                alt=""
                className="block h-full w-full object-cover"
                loading="lazy"
                draggable={false}
              />
            </div>
          ))}
          {/* Vignette overlay to keep text readable */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 70% 80% at 50% 50%, transparent 30%, oklch(0.22 0.07 252 / 0.85) 100%)",
            }}
          />
        </div>

        {/* Subtle top hairline */}
        <div className="hairline relative z-10" />

        <div className="container-x relative z-10 pt-16">
          {/* 12-column asymmetric grid: 7 left + 5 right */}
          <div className="grid grid-cols-12 gap-10 lg:gap-16 xl:gap-20">
            {/* Left — 7 columns: technical content */}
            <div className="col-span-12 lg:col-span-7">
              <Facilities />
            </div>

            {/* Right — 5 columns: small right-aligned flyer */}
            <div className="col-span-12 lg:col-span-5">
              <Pamphlets onOpen={openLightbox} />
            </div>
          </div>
        </div>
      </section>

      {/* ── Lightbox ── */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            key="lightbox-backdrop"
            className="fixed inset-0 z-50 flex items-center justify-center px-4 py-8 sm:px-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.28 }}
          >
            {/* Blurred overlay */}
            <motion.div
              className="absolute inset-0 cursor-pointer bg-ink-deep/92 backdrop-blur-md"
              onClick={closeLightbox}
              aria-hidden
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Lightbox content */}
            <motion.div
              className="relative z-10 flex max-h-full w-full max-w-3xl flex-col items-center"
              initial={{ opacity: 0, scale: 0.91, y: 36 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", stiffness: 260, damping: 28 }}
            >
              {/* Header bar */}
              <div className="mb-4 flex w-full items-center justify-between">
                <div className="flex items-center gap-2 text-cream/60">
                  <ZoomIn className="h-3.5 w-3.5 text-teal" strokeWidth={1.5} />
                  <span className="font-mono text-[10px] uppercase tracking-[0.28em]">
                    Facility Pamphlet
                  </span>
                </div>
                <button
                  onClick={closeLightbox}
                  className="group flex h-9 w-9 items-center justify-center rounded-full border border-cream/15 bg-card transition-colors hover:border-teal/40 hover:bg-teal/10"
                  aria-label="Close lightbox"
                >
                  <X className="h-4 w-4 text-cream/70 transition group-hover:text-cream" strokeWidth={1.5} />
                </button>
              </div>

              {/* Full-quality image */}
              <div className="overflow-hidden rounded-sm border border-cream/10 shadow-[0_40px_80px_-20px_oklch(0_0_0/0.75)]">
                <motion.img
                  src={pamphlet2}
                  alt="Tera Projects Warehouse Facility Pamphlet — full view"
                  className="block max-h-[80vh] w-full object-contain"
                  draggable={false}
                  initial={{ filter: "blur(10px)", scale: 1.04 }}
                  animate={{ filter: "blur(0px)", scale: 1 }}
                  transition={{ duration: 0.45, delay: 0.08 }}
                />
              </div>

              {/* Footer caption */}
              <p className="mt-4 text-center font-mono text-[10px] uppercase tracking-[0.22em] text-cream/40">
                Tera Projects · Warehouse Division · Full Capability Overview
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
