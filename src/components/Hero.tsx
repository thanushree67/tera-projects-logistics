import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useRef } from "react";
import heroImg from "@/assets/warehouse-2.jpg";
import { useLeadDialog } from "./LeadProvider";

export function Hero() {
  const { open } = useLeadDialog();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, 120]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0.4]);

  const words = "Strategic Warehousing & Global Distribution".split(" ");

  return (
    <section
      ref={ref}
      className="relative isolate flex min-h-[100svh] w-full items-center overflow-hidden"
    >
      <motion.div style={{ y, opacity }} className="absolute inset-0 -z-10">
        <img
          src={heroImg}
          alt="Tera Projects warehouse interior"
          className="h-full w-full object-cover"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-[image:var(--gradient-hero)]" />
        <div className="absolute inset-0 bg-navy-deep/30 mix-blend-multiply" />
      </motion.div>

      <div className="container-x relative pt-32 pb-20 sm:pt-40 sm:pb-28">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border border-teal/40 bg-teal/10 px-3.5 py-1.5 text-[11px] font-medium uppercase tracking-[0.25em] text-teal"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-teal animate-pulse" />
          Tera Projects · Warehouse Division
        </motion.div>

        <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-[1.05] sm:text-6xl lg:text-7xl">
          {words.map((w, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 + i * 0.07, duration: 0.55, ease: "easeOut" }}
              className="mr-3 inline-block"
            >
              {w === "&" ? <span className="text-teal">{w}</span> : w}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.95, duration: 0.6 }}
          className="mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg"
        >
          Precision logistics and secure storage solutions for heavy-lift and general cargo.
          Engineered for the world's most demanding supply chains.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <button
            onClick={() => open("hero")}
            className="group inline-flex items-center gap-2 rounded-md bg-[image:var(--gradient-accent)] px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-elegant)] transition hover:brightness-110"
          >
            Get a Quote
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
          <a
            href="#warehouse"
            className="inline-flex items-center gap-2 rounded-md border border-border bg-card/40 px-6 py-3.5 text-sm font-medium text-foreground backdrop-blur transition hover:bg-card"
          >
            Explore Capabilities
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="mt-16 grid max-w-3xl grid-cols-3 gap-6 border-t border-border/60 pt-8 sm:gap-10"
        >
          {[
            { v: "500K+", l: "sq ft secured" },
            { v: "100T", l: "heavy-lift capacity" },
            { v: "24/7", l: "operations" },
          ].map((s) => (
            <div key={s.l}>
              <div className="font-display text-2xl font-semibold text-teal sm:text-3xl">{s.v}</div>
              <div className="mt-1 text-[11px] uppercase tracking-widest text-muted-foreground">
                {s.l}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.a
        href="#warehouse"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-muted-foreground"
        aria-label="Scroll down"
      >
        <ChevronDown className="h-6 w-6 animate-bounce" />
      </motion.a>
    </section>
  );
}
