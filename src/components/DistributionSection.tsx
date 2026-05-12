import { motion } from "framer-motion";
import distImg from "@/assets/warehouse-1.jpg";
import { ArrowUpRight } from "lucide-react";
import { useLeadDialog } from "./LeadProvider";

const fns = [
  { n: "01", title: "Order Processing", desc: "Validated workflows from purchase order to dispatch." },
  { n: "02", title: "Multimodal Transport", desc: "Trucks, ships and rail orchestrated end-to-end." },
  { n: "03", title: "Delivery Scheduling", desc: "Slot-based planning aligned to your production calendar." },
  { n: "04", title: "Last-mile Coverage", desc: "Final-leg delivery across India with live status." },
];

export function DistributionSection() {
  const { open } = useLeadDialog();
  return (
    <section
      id="distribution"
      className="relative scroll-mt-24 overflow-hidden border-t border-cream/10 bg-[image:var(--gradient-surface)] py-28 sm:py-40"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 left-[-10%] h-[500px] w-[500px] rounded-full opacity-[0.15] blur-3xl"
        style={{ background: "radial-gradient(circle, var(--brass) 0%, transparent 60%)" }}
      />

      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-12 gap-6 lg:gap-10"
        >
          <div className="col-span-12 lg:col-span-7">
            <span className="eyebrow">03 — Distribution</span>
            <h2 className="mt-4 text-[clamp(2rem,4.6vw,4rem)] leading-[1.04] text-cream">
              Seamless distribution,{" "}
              <span className="italic text-brass">orchestrated</span> end-to-end.
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-5 lg:pt-10">
            <p className="text-base leading-relaxed text-cream/65 sm:text-lg">
              Getting products from the warehouse to the customer or retailer with maximum
              efficiency — across any mode, any distance.
            </p>
          </div>
        </motion.div>

        <div className="mt-20 grid grid-cols-12 gap-6 lg:gap-10">
          {/* Function rows */}
          <div className="order-2 col-span-12 lg:order-1 lg:col-span-7">
            <ul className="divide-y divide-cream/10 border-y border-cream/10">
              {fns.map((f, i) => (
                <motion.li
                  key={f.n}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.07 }}
                  className="group grid grid-cols-12 items-baseline gap-4 py-7 transition-colors hover:bg-cream/[0.02] sm:py-8"
                >
                  <span className="col-span-2 font-mono text-xs uppercase tracking-widest text-brass sm:col-span-1">
                    {f.n}
                  </span>
                  <div className="col-span-10 sm:col-span-4">
                    <h3 className="font-display text-xl font-medium text-cream transition-colors group-hover:text-brass sm:text-2xl">
                      {f.title}
                    </h3>
                  </div>
                  <p className="col-span-12 text-sm leading-relaxed text-cream/60 sm:col-span-7">
                    {f.desc}
                  </p>
                </motion.li>
              ))}
            </ul>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-10"
            >
              <button
                onClick={() => open("distribution")}
                className="group inline-flex items-center gap-3 rounded-full border border-brass/40 bg-brass/[0.06] px-6 py-3.5 text-sm font-medium text-cream transition hover:bg-brass hover:text-primary-foreground"
              >
                Start a conversation
                <span className="flex h-6 w-6 items-center justify-center rounded-full border border-brass/50 bg-brass/20 text-brass transition group-hover:rotate-45 group-hover:bg-primary-foreground/10 group-hover:text-primary-foreground">
                  <ArrowUpRight className="h-3 w-3" />
                </span>
              </button>
            </motion.div>
          </div>

          {/* Floating fleet image, offset down */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="relative order-1 col-span-12 lg:order-2 lg:col-span-5 lg:translate-y-16"
          >
            <div className="relative aspect-[3/4] overflow-hidden rounded-[2px] border border-cream/10 shadow-[var(--shadow-card)]">
              <img
                src={distImg}
                alt="Tera Projects transport fleet"
                className="duotone h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-deep/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-brass">
                  / Fleet 02
                </div>
                <div className="mt-2 font-display text-2xl text-cream">
                  ODC, heavy-lift &amp; multimodal
                </div>
                <div className="mt-3 inline-flex items-center gap-2 border border-cream/20 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.22em] text-cream/70">
                  Up to 600T axle capacity
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
