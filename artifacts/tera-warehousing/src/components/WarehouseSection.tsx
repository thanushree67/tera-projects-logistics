import { motion } from "framer-motion";
import { PackageOpen, ShieldCheck, ClipboardList, Boxes } from "lucide-react";
import warehouseImg from "@/assets/warehouse-facility.jpeg";

const fns = [
  {
    n: "01",
    Icon: PackageOpen,
    title: "Receiving Goods",
    desc: "Inbound inspection, unloading and dock-to-stock workflows handled by trained crews.",
  },
  {
    n: "02",
    Icon: ShieldCheck,
    title: "Secure Storage",
    desc: "Climate-aware, surveilled facilities engineered for high-value and project cargo.",
  },
  {
    n: "03",
    Icon: ClipboardList,
    title: "Inventory Control",
    desc: "Real-time SKU tracking with barcoded audit trails and quarterly reconciliations.",
  },
  {
    n: "04",
    Icon: Boxes,
    title: "Picking & Packing",
    desc: "Precision pick paths, custom kitting and export-grade packing for any geometry.",
  },
];

export function WarehouseSection() {
  return (
    <section id="warehouse" className="relative scroll-mt-24 py-32 sm:py-44">
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-12 items-center gap-10 lg:gap-16"
        >
          <div className="col-span-12 lg:col-span-6">
            <span className="eyebrow">02 — Warehousing</span>
            <h2 className="mt-6 text-[clamp(2rem,4.6vw,4rem)] leading-[1.04] text-cream">
              Advanced facilities,{" "}
              <span className="italic text-teal">crafted</span> for project cargo.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-cream/70 sm:text-lg">
              A specialised facility used to store goods and inventory, protect products before
              sale or shipment, and manage stock with industrial precision.
            </p>
          </div>
          <div className="col-span-12 lg:col-span-6">
            <div className="overflow-hidden rounded-lg">
              <img
                src={warehouseImg}
                alt="Tera Projects warehouse exterior"
                className="h-full w-full object-cover transition-transform duration-700 ease-out hover:scale-105"
                loading="lazy"
              />
            </div>
          </div>
        </motion.div>

        {/* Minimalist vertical timeline */}
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
      </div>
    </section>
  );
}
