import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";
import { Facilities } from "./Facilities";
import { Pamphlets } from "./Pamphlets";
import pamphlet2 from "@/assets/phamplet2.jpeg";

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
        {/* Subtle top hairline */}
        <div className="hairline" />

        <div className="container-x pt-16">
          {/* 12-column asymmetric grid: 7 left + 5 right */}
          <div className="grid grid-cols-12 gap-10 lg:gap-16 xl:gap-20">
            {/* Left — 7 columns: technical content */}
            <div className="col-span-12 lg:col-span-7">
              <Facilities />
            </div>

            {/* Right — 5 columns: flyer */}
            <div className="col-span-12 lg:col-span-5">
              <Pamphlets onOpen={openLightbox} />
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            key="lightbox-backdrop"
            className="fixed inset-0 z-50 flex items-center justify-center px-4 py-8 sm:px-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Blurred overlay */}
            <motion.div
              className="absolute inset-0 cursor-pointer bg-ink-deep/90 backdrop-blur-md"
              onClick={closeLightbox}
              aria-hidden
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Lightbox content */}
            <motion.div
              className="relative z-10 flex max-h-full w-full max-w-3xl flex-col items-center"
              initial={{ opacity: 0, scale: 0.93, y: 30 }}
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

              {/* Image */}
              <div
                className="overflow-hidden rounded-sm border border-cream/10 shadow-[0_40px_80px_-20px_oklch(0_0_0/0.7)]"
              >
                <motion.img
                  src={pamphlet2}
                  alt="Tera Projects Warehouse Facility Pamphlet — full view"
                  className="block max-h-[80vh] w-full object-contain"
                  draggable={false}
                  initial={{ filter: "blur(8px)" }}
                  animate={{ filter: "blur(0px)" }}
                  transition={{ duration: 0.4, delay: 0.1 }}
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
