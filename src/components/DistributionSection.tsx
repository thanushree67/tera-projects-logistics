import { motion } from "framer-motion";
import { FileCheck, Truck, CalendarClock, MapPin } from "lucide-react";
import distImg from "@/assets/warehouse-1.jpg";

const fns = [
  { icon: FileCheck, title: "Order Processing", desc: "Validated workflows from purchase order to dispatch." },
  { icon: Truck, title: "Multimodal Transport", desc: "Trucks, ships and rail orchestrated end-to-end." },
  { icon: CalendarClock, title: "Delivery Scheduling", desc: "Slot-based planning aligned to your production calendar." },
  { icon: MapPin, title: "Last-mile Delivery", desc: "Final-leg coverage across India with live status." },
];

export function DistributionSection() {
  return (
    <section
      id="distribution"
      className="relative scroll-mt-24 border-t border-border bg-[image:var(--gradient-surface)] py-24 sm:py-32"
    >
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="ml-auto max-w-2xl text-left lg:text-right"
        >
          <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-teal">
            02 — Distribution
          </span>
          <h2 className="mt-3 text-3xl font-semibold sm:text-5xl">Seamless Distribution</h2>
          <p className="mt-4 text-muted-foreground sm:text-lg">
            The process of getting products from the warehouse to the customer or retailer with
            maximum efficiency — across any mode, any distance.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-12 gap-4 sm:gap-5">
          <div className="order-2 col-span-12 grid grid-cols-2 gap-4 sm:gap-5 lg:order-1 lg:col-span-7">
            {fns.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-card)] lg:p-6"
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
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative order-1 col-span-12 overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-card)] min-h-[320px] lg:order-2 lg:col-span-5 lg:min-h-[560px]"
          >
            <img
              src={distImg}
              alt="Tera Projects transport fleet"
              className="absolute inset-0 h-full w-full object-cover object-center"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/20 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
              <div className="text-[11px] uppercase tracking-widest text-teal">Fleet</div>
              <div className="mt-1 font-display text-xl font-semibold sm:text-2xl">
                ODC, heavy-lift & multimodal cargo movement
              </div>
              <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-border bg-navy-deep/60 px-3 py-1 text-[10px] uppercase tracking-widest text-muted-foreground backdrop-blur">
                Up to 600T axle capacity
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
