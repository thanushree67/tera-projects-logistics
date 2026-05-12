import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useRef } from "react";
import heroImg from "@/assets/warehouse-2.jpg";
import { useLeadDialog } from "./LeadProvider";

export function Hero() {
  const { open } = useLeadDialog();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 800], [0, 160]);
  const scale = useTransform(scrollY, [0, 800], [1, 1.08]);

  return (
    <section
      ref={ref}
      className="relative isolate min-h-[100svh] w-full overflow-hidden pt-28 sm:pt-32"
    >
      {/* Soft ambient brass glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-[-10%] h-[600px] w-[600px] rounded-full opacity-[0.18] blur-3xl"
        style={{ background: "radial-gradient(circle, var(--brass) 0%, transparent 60%)" }}
      />

      <div className="container-x relative grid grid-cols-12 gap-6 lg:gap-10">
        {/* Eyebrow / index — left rail */}
        <div className="col-span-12 lg:col-span-1 lg:pt-6">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="flex items-center gap-3 lg:flex-col lg:items-start"
          >
            <span className="eyebrow">001</span>
            <div className="h-px w-10 bg-cream/30 lg:hidden" />
            <span className="hidden h-16 w-px bg-cream/20 lg:block" />
            <span className="eyebrow text-cream/60">Warehouse Division</span>
          </motion.div>
        </div>

        {/* Headline */}
        <div className="col-span-12 lg:col-span-7">
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.2, 0.8, 0.2, 1] }}
            className="text-[clamp(2.6rem,7.2vw,6.5rem)] font-normal leading-[1.02] text-cream"
          >
            Strategic{" "}
            <span className="italic text-brass">Warehousing</span>
            <br />
            <span className="font-display">&amp;</span> Global{" "}
            <span className="relative inline-block">
              Distribution
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.9, duration: 1.1, ease: "easeOut" }}
                className="absolute -bottom-2 left-0 h-[2px] w-full origin-left bg-brass/70"
              />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="mt-8 max-w-xl text-base leading-relaxed text-cream/70 sm:text-lg"
          >
            Precision logistics and secure storage solutions for heavy-lift and general
            cargo — engineered for the world's most demanding supply chains.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="mt-10 flex flex-wrap items-center gap-5"
          >
            <button
              onClick={() => open("hero")}
              className="group relative inline-flex items-center gap-3 rounded-full border border-brass/40 bg-brass/[0.08] px-7 py-4 text-sm font-medium tracking-wide text-cream transition hover:bg-brass hover:text-primary-foreground"
            >
              <span>Enquire Us</span>
              <span className="flex h-7 w-7 items-center justify-center rounded-full border border-brass/50 bg-brass/20 text-brass transition group-hover:rotate-45 group-hover:bg-primary-foreground/10 group-hover:text-primary-foreground">
                <ArrowUpRight className="h-3.5 w-3.5" />
              </span>
            </button>
            <a
              href="#warehouse"
              className="group relative text-sm font-medium text-cream/80 transition hover:text-cream"
            >
              <span className="relative">
                Explore capabilities
                <span className="absolute -bottom-1 left-0 h-px w-full origin-right scale-x-100 bg-cream/40 transition-transform duration-500 group-hover:origin-left group-hover:scale-x-0" />
              </span>
            </a>
          </motion.div>
        </div>

        {/* Floating offset image */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1, ease: [0.2, 0.8, 0.2, 1] }}
          className="relative col-span-12 mt-2 lg:col-span-4 lg:mt-0"
        >
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2px] border border-cream/10 shadow-[var(--shadow-card)]">
            <motion.img
              style={{ y, scale }}
              src={heroImg}
              alt="Tera Projects warehouse interior"
              className="duotone absolute inset-0 h-full w-full object-cover"
              loading="eager"
              fetchPriority="high"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-deep via-ink-deep/10 to-transparent" />

            {/* image caption tab */}
            <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-[10px] uppercase tracking-[0.25em] text-cream/80">
              <span className="font-mono">Chennai · India</span>
              <span className="font-mono">N 13°·E 80°</span>
            </div>
          </div>

          {/* small overlay number */}
          <div className="absolute -left-3 -top-3 hidden rounded-full border border-brass/50 bg-ink-deep px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-brass lg:block">
            Est. 2009
          </div>
        </motion.div>
      </div>

      {/* Stats strip */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.7 }}
        className="container-x relative mt-20 sm:mt-28"
      >
        <div className="hairline mb-8" />
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-10">
          {[
            { v: "500K+", l: "sq ft secured" },
            { v: "100T", l: "heavy-lift capacity" },
            { v: "24/7", l: "operations" },
            { v: "150+", l: "destinations served" },
          ].map((s, i) => (
            <motion.div
              key={s.l}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.05 + i * 0.08, duration: 0.5 }}
              className="flex flex-col"
            >
              <div className="num font-display text-3xl font-medium text-cream sm:text-4xl">
                {s.v}
              </div>
              <div className="mt-2 text-[11px] uppercase tracking-[0.22em] text-cream/55">
                {s.l}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
