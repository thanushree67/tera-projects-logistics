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

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.65, ease: [0.2, 0.8, 0.2, 1] as const, delay },
});

export function InfrastructureSection() {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const openLightbox = useCallback(() => setLightboxOpen(true), []);
  const closeLightbox = useCallback(() => setLightboxOpen(false), []);

  return (
    <>
      <section
        id="infrastructure"
        className="relative scroll-mt-24 py-32 sm:py-44"
        style={{ background: "var(--gradient-surface)" }}
      >
        <div className="hairline" />

        <div className="container-x pt-16 space-y-24">

          {/* ── Row 1: Specifications (60%) + Flyer (40%) ── */}
          <div className="grid grid-cols-12 gap-10 lg:gap-14 xl:gap-20 items-start">
            {/* Left ~60% — technical content */}
            <div className="col-span-12 lg:col-span-7">
              <Facilities />
            </div>

            {/* Right ~40% — flyer thumbnail, sticky */}
            <div className="col-span-12 lg:col-span-5">
              <Pamphlets onOpen={openLightbox} />
            </div>
          </div>

          {/* ── Row 2: Facility Gallery ── */}
          <motion.div {...fadeUp(0)}>
            {/* Section label */}
            <div className="mb-8">
              <span className="eyebrow">/ Facility Gallery</span>
              <h3 className="mt-4 font-display text-[clamp(1.6rem,3vw,2.6rem)] font-normal leading-[1.05] text-cream">
                Inside our <span className="italic text-teal">operations</span>
              </h3>
            </div>

            {/*
              Bento grid — 3 columns, 3 rows
              img4  : col 1, row-span-2  (tall feature)
              img5  : col 2-3, row 1     (wide)
              img6  : col 2, row 2
              img7  : col 3, row 2
              img8  : col 1, row 3
              img9  : col 2, row 3
              img10 : col 3, row 3
            */}
            <div
              className="grid grid-cols-3 gap-3 sm:gap-4"
              style={{ gridTemplateRows: "auto auto auto" }}
            >
              {/* img4 — tall, spans 2 rows */}
              <motion.div
                {...fadeUp(0.05)}
                className="group relative col-span-1 row-span-2 overflow-hidden rounded-sm border border-cream/10"
                style={{ minHeight: "320px" }}
              >
                <img
                  src={img4}
                  alt="Tera Projects warehouse interior"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  loading="lazy"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-ink-deep/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />
              </motion.div>

              {/* img5 — wide, top-right */}
              <motion.div
                {...fadeUp(0.08)}
                className="group relative col-span-2 overflow-hidden rounded-sm border border-cream/10"
                style={{ aspectRatio: "16/7" }}
              >
                <img
                  src={img5}
                  alt="Tera Projects distribution hub"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  loading="lazy"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-ink-deep/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />
              </motion.div>

              {/* img6 — mid-right left cell */}
              <motion.div
                {...fadeUp(0.11)}
                className="group relative col-span-1 overflow-hidden rounded-sm border border-cream/10"
                style={{ aspectRatio: "4/3" }}
              >
                <img
                  src={img6}
                  alt="Warehouse storage racks"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  loading="lazy"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-ink-deep/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />
              </motion.div>

              {/* img7 — mid-right right cell */}
              <motion.div
                {...fadeUp(0.13)}
                className="group relative col-span-1 overflow-hidden rounded-sm border border-cream/10"
                style={{ aspectRatio: "4/3" }}
              >
                <img
                  src={img7}
                  alt="Loading dock operations"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  loading="lazy"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-ink-deep/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />
              </motion.div>

              {/* Row 3 — three equal cells */}
              {[img8, img9, img10].map((src, i) => (
                <motion.div
                  key={i}
                  {...fadeUp(0.15 + i * 0.04)}
                  className="group relative col-span-1 overflow-hidden rounded-sm border border-cream/10"
                  style={{ aspectRatio: "4/3" }}
                >
                  <img
                    src={src}
                    alt={`Facility view ${i + 1}`}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    loading="lazy"
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-ink-deep/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>

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
            {/* Blurred backdrop */}
            <motion.div
              className="absolute inset-0 cursor-pointer bg-ink-deep/92 backdrop-blur-md"
              onClick={closeLightbox}
              aria-hidden
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Lightbox panel */}
            <motion.div
              className="relative z-10 flex max-h-full w-full max-w-3xl flex-col items-center"
              initial={{ opacity: 0, scale: 0.91, y: 36 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", stiffness: 260, damping: 28 }}
            >
              {/* Header */}
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
                  <X
                    className="h-4 w-4 text-cream/70 transition group-hover:text-cream"
                    strokeWidth={1.5}
                  />
                </button>
              </div>

              {/* Full-resolution image */}
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
