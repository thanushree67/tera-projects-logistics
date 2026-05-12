import { motion } from "framer-motion";
import { PackageCheck, ShieldCheck, ClipboardList, Boxes } from "lucide-react";
import warehouseImg from "@/assets/warehouse-3.jpg";
import accentImg from "@/assets/warehouse-4.jpg";

const fns = [
  { icon: PackageCheck, title: "Receiving Goods", desc: "Inbound inspection, unloading and dock-to-stock workflows." },
  { icon: ShieldCheck, title: "Secure Storage", desc: "Climate-aware, surveilled facilities for high-value cargo." },
  { icon: ClipboardList, title: "Inventory Control", desc: "Real-time SKU tracking with barcoded audit trails." },
  { icon: Boxes, title: "Order Picking & Packing", desc: "Precision pick paths, custom kitting and export packing." },
];

export function WarehouseSection() {
  return (
    <section id="warehouse" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-teal">
            01 — Warehousing
          </span>
          <h2 className="mt-3 text-3xl font-semibold sm:text-5xl">
            Advanced Warehouse Facilities
          </h2>
          <p className="mt-4 text-muted-foreground sm:text-lg">
            A specialized facility used to store goods and inventory, protect products before sale
            or shipment, and manage stock levels with industrial precision.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-12 gap-4 sm:gap-5">
          {/* Large image card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative col-span-12 overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-card)] lg:col-span-7 lg:row-span-2 min-h-[320px] lg:min-h-[520px]"
          >
            <img
              src={warehouseImg}
              alt="Modern Tera Projects warehouse facility exterior"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
              <div className="text-[11px] uppercase tracking-widest text-teal">Facility</div>
              <div className="mt-1 font-display text-xl font-semibold sm:text-2xl">
                Purpose-built infrastructure for project cargo
              </div>
            </div>
          </motion.div>

          {fns.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative col-span-6 flex flex-col justify-between overflow-hidden rounded-2xl border border-border bg-[image:var(--gradient-surface)] p-5 shadow-[var(--shadow-card)] sm:col-span-6 lg:col-span-5 lg:p-6 lg:[&:nth-child(even)]:col-span-5"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-teal/30 bg-teal/10 text-teal transition group-hover:bg-teal group-hover:text-primary-foreground">
                <f.icon className="h-5 w-5" />
              </div>
              <div className="mt-6">
                <div className="font-display text-lg font-semibold">{f.title}</div>
                <p className="mt-1.5 text-sm text-muted-foreground">{f.desc}</p>
              </div>
              <div className="mt-4 text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
                Function · {String(i + 1).padStart(2, "0")}
              </div>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative col-span-12 overflow-hidden rounded-2xl border border-border min-h-[180px]"
          >
            <img
              src={accentImg}
              alt="Tera Projects loading dock"
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/40 to-transparent" />
            <div className="relative flex h-full flex-col justify-center p-6 sm:p-10">
              <div className="text-[11px] uppercase tracking-widest text-teal">Operations</div>
              <div className="mt-2 max-w-md font-display text-xl font-semibold sm:text-2xl">
                Integrated dock operations engineered for throughput
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
