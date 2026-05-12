import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import heroImg from "@/assets/hero-bg.jpeg";
import { useLeadDialog } from "./LeadProvider";

export function Hero() {
  const { open } = useLeadDialog();

  return (
    <section className="relative isolate min-h-[100svh] w-full overflow-hidden">
      {/* Full-bleed background */}
      <img
        src={heroImg}
        alt="Tera Projects warehouse facility"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
        loading="eager"
        fetchPriority="high"
      />
      {/* Navy overlay for legibility */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{ background: "var(--gradient-hero)" }}
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-ink-deep/50"
      />

      <div className="container-x relative flex min-h-[100svh] flex-col justify-center pt-32 pb-24">
        <motion.span
  initial={{ opacity: 0, y: 8 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  /* Added text-2xl (larger) and font-medium for a premium look */
  className="eyebrow text-4xl"
>
  001 — Tera Warehousing
</motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.2, 0.8, 0.2, 1] }}
          className="mt-6 max-w-5xl text-[clamp(2.6rem,7vw,6.25rem)] font-normal leading-[1.02] text-cream"
        >
          Strategic Warehousing
          <br />
          <span className="italic text-teal">&amp;</span> Global Distribution
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="mt-8 max-w-xl text-base leading-relaxed text-cream/80 sm:text-lg"
        >
          Precision logistics and secure storage solutions for heavy-lift and general
          cargo — engineered for the world's most demanding supply chains.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-10 flex flex-wrap items-center gap-6"
        >
          <button
            onClick={() => open("hero")}
            className="group inline-flex items-center gap-3 rounded-full bg-cream px-7 py-4 text-sm font-medium tracking-wide text-ink-deep transition hover:bg-teal hover:text-cream"
          >
            Enquire Us
            <ArrowUpRight className="h-4 w-4 transition group-hover:rotate-45" strokeWidth={1.5} />
          </button>
          <a
            href="#warehouse"
            className="group text-sm font-medium text-cream/85 transition hover:text-cream"
          >
            <span className="relative">
              Explore capabilities
              <span className="absolute -bottom-1 left-0 h-px w-full origin-right scale-x-100 bg-cream/40 transition-transform duration-500 group-hover:origin-left group-hover:scale-x-0" />
            </span>
          </a>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.7 }}
          className="mt-24"
        >
          <div className="hairline mb-8" />
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-10">
            {[
              { v: "500K+", l: "sq ft secured" },
              { v: "100T", l: "heavy-lift capacity" },
              { v: "24/7", l: "operations" },
              { v: "150+", l: "destinations served" },
            ].map((s) => (
              <div key={s.l} className="flex flex-col">
                <div className="num font-display text-3xl font-medium text-cream sm:text-4xl">
                  {s.v}
                </div>
                <div className="mt-2 text-[11px] uppercase tracking-[0.22em] text-cream/60">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
