import { motion } from "framer-motion";
import warehouseImg from "@/assets/warehouse-3.jpg";
import accentImg from "@/assets/warehouse-4.jpg";

const fns = [
  {
    n: "01",
    title: "Receiving Goods",
    desc: "Inbound inspection, unloading and dock-to-stock workflows handled by trained crews.",
  },
  {
    n: "02",
    title: "Secure Storage",
    desc: "Climate-aware, surveilled facilities engineered for high-value and project cargo.",
  },
  {
    n: "03",
    title: "Inventory Control",
    desc: "Real-time SKU tracking with barcoded audit trails and quarterly reconciliations.",
  },
  {
    n: "04",
    title: "Picking & Packing",
    desc: "Precision pick paths, custom kitting and export-grade packing for any geometry.",
  },
];

export function WarehouseSection() {
  return (
    <section id="warehouse" className="relative scroll-mt-24 py-28 sm:py-40">
      {/* offset eyebrow */}
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-12 gap-6 lg:gap-10"
        >
          <div className="col-span-12 lg:col-span-4">
            <span className="eyebrow">02 — Warehousing</span>
          </div>
          <div className="col-span-12 lg:col-span-8">
            <h2 className="text-[clamp(2rem,4.6vw,4rem)] leading-[1.04] text-cream">
              Advanced facilities,{" "}
              <span className="italic text-brass">crafted</span> for project cargo.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-cream/65 sm:text-lg">
              A specialised facility used to store goods and inventory, protect products before
              sale or shipment, and manage stock with industrial precision.
            </p>
          </div>
        </motion.div>

        {/* Asymmetric broken grid */}
        <div className="relative mt-20 grid grid-cols-12 gap-6 lg:gap-10">
          {/* Tall offset image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="relative col-span-12 lg:col-span-5 lg:row-span-2 lg:translate-y-12"
          >
            <div className="relative aspect-[3/4] overflow-hidden rounded-[2px] border border-cream/10 shadow-[var(--shadow-card)]">
              <img
                src={warehouseImg}
                alt="Tera Projects warehouse facility"
                className="duotone h-full w-full object-cover transition-transform duration-[1.2s] hover:scale-[1.04]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-deep/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-brass">
                  / Facility 01
                </div>
                <div className="mt-2 font-display text-2xl text-cream">
                  Purpose-built infrastructure
                </div>
              </div>
            </div>
            {/* tag */}
            <div className="absolute -right-3 top-6 hidden rotate-90 origin-top-right font-mono text-[10px] uppercase tracking-[0.3em] text-cream/40 lg:block">
              Tera · Warehouse Division
            </div>
          </motion.div>

          {/* Function list */}
          <div className="col-span-12 lg:col-span-7">
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

            {/* small accent image, intentionally narrower */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative mt-12 ml-auto w-full max-w-md overflow-hidden rounded-[2px] border border-cream/10"
            >
              <img
                src={accentImg}
                alt="Loading dock operations"
                className="duotone aspect-[16/9] w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-ink-deep/70 via-transparent to-transparent" />
              <div className="absolute inset-y-0 left-0 flex flex-col justify-center p-6">
                <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-brass">
                  / Operations
                </span>
                <span className="mt-1 max-w-[16ch] font-display text-lg text-cream">
                  Integrated dock throughput
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
