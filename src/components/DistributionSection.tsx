import { motion } from "framer-motion";
import { ArrowUpRight, FileCheck2, Truck, CalendarClock, MapPin } from "lucide-react";
import { useLeadDialog } from "./LeadProvider";

const fns = [
  { n: "01", Icon: FileCheck2, title: "Order Processing", desc: "Validated workflows from purchase order to dispatch." },
  { n: "02", Icon: Truck, title: "Multimodal Transport", desc: "Trucks, ships and rail orchestrated end-to-end." },
  { n: "03", Icon: CalendarClock, title: "Delivery Scheduling", desc: "Slot-based planning aligned to your production calendar." },
  { n: "04", Icon: MapPin, title: "Last-mile Coverage", desc: "Final-leg delivery across India with live status." },
];

export function DistributionSection() {
  const { open } = useLeadDialog();
  return (
    <section
      id="distribution"
      className="relative scroll-mt-24 py-32 sm:py-44"
      style={{ background: "var(--gradient-surface)" }}
    >
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-12 gap-6 lg:gap-10"
        >
          <div className="col-span-12 lg:col-span-4">
            <span className="eyebrow">03 — Distribution</span>
          </div>
          <div className="col-span-12 lg:col-span-8">
            <h2 className="text-[clamp(2rem,4.6vw,4rem)] leading-[1.04] text-cream">
              Seamless distribution,{" "}
              <span className="italic text-teal">orchestrated</span> end-to-end.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-cream/70 sm:text-lg">
              Getting products from the warehouse to the customer or retailer with maximum
              efficiency — across any mode, any distance.
            </p>
          </div>
        </motion.div>

        <div className="relative mt-24 ml-0 lg:ml-[8.333%]">
          <span
            aria-hidden
            className="absolute left-3 top-2 bottom-2 w-px bg-cream/12 sm:left-4"
          />
          <ul className="space-y-16 sm:space-y-20">
            {fns.map((f, i) => (
              <motion.li
                key={f.n}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className="relative grid grid-cols-12 items-start gap-6 pl-12 sm:pl-16"
              >
                <span
                  aria-hidden
                  className="absolute left-0 top-1 flex h-7 w-7 items-center justify-center rounded-full bg-ink-deep text-teal sm:h-9 sm:w-9"
                >
                  <f.Icon className="h-4 w-4 sm:h-[18px] sm:w-[18px]" strokeWidth={1.25} />
                </span>
                <div className="col-span-12 sm:col-span-4">
                  <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-teal">
                    / {f.n}
                  </div>
                  <h3 className="mt-3 font-display text-2xl font-medium text-cream sm:text-3xl">
                    {f.title}
                  </h3>
                </div>
                <p className="col-span-12 max-w-xl text-base leading-relaxed text-cream/65 sm:col-span-8 sm:text-[17px]">
                  {f.desc}
                </p>
              </motion.li>
            ))}
          </ul>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 flex justify-center"
        >
          <button
            onClick={() => open("distribution")}
            className="group inline-flex items-center gap-3 rounded-full bg-cream px-7 py-4 text-sm font-medium text-ink-deep transition hover:bg-teal hover:text-cream"
          >
            Start a conversation
            <ArrowUpRight className="h-4 w-4 transition group-hover:rotate-45" strokeWidth={1.5} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
