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
      className="sticky top-28 h-fit flex flex-col items-end"
    >
      {/* Card label — right-aligned */}
      <div className="mb-4 font-mono text-[10px] uppercase tracking-[0.28em] text-teal">
        / Facility Pamphlet
      </div>

      {/* Small premium thumbnail — max-w-[280px], right-aligned */}
      <motion.button
        onClick={onOpen}
        whileHover={{ y: -5, scale: 1.02 }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: "spring", stiffness: 300, damping: 24 }}
        className="group relative w-[280px] cursor-pointer overflow-hidden rounded-sm border border-cream/15 bg-card focus:outline-none focus-visible:ring-2 focus-visible:ring-teal"
        style={{
          boxShadow: "0 24px 56px -16px oklch(0 0 0 / 0.65), 0 0 0 1px oklch(0.97 0.01 95 / 0.06)",
        }}
        aria-label="Open facility pamphlet in full screen"
      >
        {/* Teal glow border on hover */}
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            boxShadow: "inset 0 0 0 1px oklch(0.72 0.10 195 / 0.5), 0 0 40px -8px oklch(0.72 0.10 195 / 0.3)",
          }}
        />

        {/* Flyer image */}
        <img
          src={pamphlet2}
          alt="Tera Projects Warehouse Facility Pamphlet"
          className="block h-auto w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          loading="lazy"
          draggable={false}
        />

        {/* Maximize icon — appears on hover, centred */}
        <span className="absolute inset-0 z-20 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/25 bg-ink-deep/75 backdrop-blur-sm">
            <Maximize2 className="h-3.5 w-3.5 text-cream" strokeWidth={1.5} />
          </span>
        </span>

        {/* Bottom gradient label */}
        <span
          aria-hidden
          className="absolute inset-x-0 bottom-0 z-10 h-14 pointer-events-none"
          style={{
            background: "linear-gradient(to top, oklch(0.22 0.07 252 / 0.9) 0%, transparent 100%)",
          }}
        />
        <span className="absolute bottom-3 left-4 z-20 font-mono text-[9px] uppercase tracking-[0.22em] text-cream/55">
          Click to expand
        </span>
      </motion.button>

      {/* Sub-caption */}
      <p className="mt-3 max-w-[280px] text-right text-[11px] leading-relaxed text-cream/40">
        Capability overview — full specs on request.
      </p>
    </motion.div>
  );
}
