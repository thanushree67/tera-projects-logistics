import { motion } from "framer-motion";
import { Maximize2 } from "lucide-react";
import pamphlet2 from "@/assets/phamplet2.jpeg";

type Props = {
  onOpen: () => void;
};

export function Pamphlets({ onOpen }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.75, ease: [0.2, 0.8, 0.2, 1], delay: 0.1 }}
      className="sticky top-28 h-fit"
    >
      {/* Card label */}
      <div className="mb-4 font-mono text-[10px] uppercase tracking-[0.28em] text-teal">
        / Facility Pamphlet
      </div>

      {/* Premium flyer card */}
      <motion.button
        onClick={onOpen}
        whileHover={{ y: -6, scale: 1.015 }}
        whileTap={{ scale: 0.985 }}
        transition={{ type: "spring", stiffness: 280, damping: 22 }}
        className="group relative w-full cursor-pointer overflow-hidden rounded-sm border border-cream/10 bg-card shadow-[var(--shadow-card)] focus:outline-none focus-visible:ring-2 focus-visible:ring-teal"
        style={{
          boxShadow:
            "0 20px 50px -20px oklch(0 0 0 / 0.55)",
        }}
        aria-label="Open facility pamphlet in full screen"
      >
        {/* Teal glow on hover */}
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            boxShadow: "inset 0 0 0 1px oklch(0.72 0.10 195 / 0.45), 0 0 60px -10px oklch(0.72 0.10 195 / 0.25)",
          }}
        />

        {/* Flyer image */}
        <img
          src={pamphlet2}
          alt="Tera Projects Warehouse Facility Pamphlet"
          className="block h-auto w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          loading="lazy"
          draggable={false}
        />

        {/* Maximize overlay — appears on hover */}
        <span className="absolute inset-0 z-20 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <span className="flex h-11 w-11 items-center justify-center rounded-full border border-cream/30 bg-ink-deep/70 backdrop-blur-sm">
            <Maximize2 className="h-4 w-4 text-cream" strokeWidth={1.5} />
          </span>
        </span>

        {/* Bottom gradient label */}
        <span
          aria-hidden
          className="absolute inset-x-0 bottom-0 z-10 h-20 pointer-events-none"
          style={{
            background:
              "linear-gradient(to top, oklch(0.22 0.07 252 / 0.85) 0%, transparent 100%)",
          }}
        />
        <span className="absolute bottom-4 left-5 z-20 font-mono text-[10px] uppercase tracking-[0.22em] text-cream/60">
          Click to expand
        </span>
      </motion.button>

      {/* Sub-caption */}
      <p className="mt-4 text-xs leading-relaxed text-cream/45">
        Tera Projects — Warehouse Division capability overview. Full specifications
        available on request.
      </p>
    </motion.div>
  );
}
