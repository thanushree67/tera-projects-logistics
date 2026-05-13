import { motion, type Transition } from "framer-motion";
import {
  Thermometer,
  ShieldCheck,
  Zap,
  Truck,
  BarChart3,
  Cctv,
  Flame,
  Container,
  Phone,
  Mail,
} from "lucide-react";

const featureIcons = [
  { Icon: Thermometer, label: "Climate Control" },
  { Icon: ShieldCheck, label: "24/7 Security" },
  { Icon: Zap, label: "Power Backup" },
  { Icon: Truck, label: "Loading Docks" },
  { Icon: BarChart3, label: "Inventory WMS" },
  { Icon: Cctv, label: "CCTV Surveillance" },
  { Icon: Flame, label: "Fire Suppression" },
  { Icon: Container, label: "Container Yard" },
];

const contacts = [
  {
    name: "Premnath V.",
    role: "Managing Director",
    phone: "+91 98403 04615",
    email: "premnath.v@teraship.com",
  },
  {
    name: "Keethana P.",
    role: "General Manager",
    phone: "+91 73581 05215",
    email: "keethana.p@teraship.com",
  },
  {
    name: "Deepak Kumar",
    role: "",
    phone: "+91 88700 38324",
    email: "deepak.s@teraship.com",
  },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.65, ease: "easeOut", delay } as Transition,
});

export function Facilities() {
  return (
    <div className="flex flex-col gap-14">
      {/* Section eyebrow + heading */}
      <motion.div {...fadeUp(0)}>
        <span className="eyebrow">01 — Infrastructure</span>
        <h2 className="mt-5 text-[clamp(2rem,4.2vw,3.6rem)] font-normal leading-[1.04] text-cream">
          Warehouse{" "}
          <span className="italic text-teal">Specifications</span>
        </h2>
      </motion.div>

      {/* Available Space */}
      <motion.div {...fadeUp(0.08)}>
        <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-teal mb-4">
          / Available Space
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          {[
            { v: "500K+", u: "sq ft", l: "Total Secured Area" },
            { v: "40 ft", u: "clear height", l: "Racking Clearance" },
            { v: "100T", u: "capacity", l: "Heavy-Lift Bay" },
            { v: "12", u: "loading bays", l: "Dock-Level Access" },
            { v: "5 acres", u: "yard", l: "Container Staging" },
            { v: "Class A", u: "grade", l: "Facility Rating" },
          ].map((s, i) => (
            <motion.div
              key={s.l}
              {...fadeUp(0.06 + i * 0.04)}
              className="rounded-sm border border-cream/10 bg-card px-4 py-4"
            >
              <div className="num font-display text-2xl font-medium text-cream">
                {s.v}
              </div>
              <div className="mt-0.5 text-[10px] uppercase tracking-[0.18em] text-teal">
                {s.u}
              </div>
              <div className="mt-2 text-xs text-cream/55">{s.l}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Primary Locations */}
      <motion.div {...fadeUp(0.12)}>
        <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-teal mb-4">
          / Primary Locations
        </div>
        <ul className="space-y-3">
          {[
            { city: "Chennai", detail: "Port-adjacent facility — 220,000 sq ft" },
            { city: "Mumbai", detail: "Multimodal logistics hub — 180,000 sq ft" },
            { city: "Delhi NCR", detail: "Inland container depot — 100,000 sq ft" },
          ].map((loc, i) => (
            <motion.li
              key={loc.city}
              {...fadeUp(0.1 + i * 0.05)}
              className="flex items-start gap-4 rounded-sm border border-cream/10 bg-card px-5 py-4"
            >
              <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />
              <div>
                <div className="text-sm font-medium text-cream">{loc.city}</div>
                <div className="mt-0.5 text-xs text-cream/55">{loc.detail}</div>
              </div>
            </motion.li>
          ))}
        </ul>
      </motion.div>

      {/* Strategic Connectivity */}
      <motion.div {...fadeUp(0.14)}>
        <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-teal mb-4">
          / Strategic Connectivity
        </div>
        <ul className="space-y-2.5">
          {[
            "Direct port gate-in / gate-out access within 3 km",
            "NH-expressway frontage for long-haul FTL lanes",
            "Dedicated rail siding for break-bulk & project cargo",
            "Air-freight feeder routes via nearest international airports",
            "Customs bonded zone with in-house CHA team",
          ].map((item, i) => (
            <motion.li
              key={i}
              {...fadeUp(0.12 + i * 0.03)}
              className="flex items-start gap-3 text-sm leading-relaxed text-cream/70"
            >
              <span className="mt-1.5 h-px w-5 shrink-0 bg-teal/60" />
              {item}
            </motion.li>
          ))}
        </ul>
      </motion.div>

      {/* Warehouse Features Icon Grid */}
      <motion.div {...fadeUp(0.16)}>
        <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-teal mb-5">
          / Warehouse Features
        </div>
        <div className="grid grid-cols-4 gap-3">
          {featureIcons.map(({ Icon, label }, i) => (
            <motion.div
              key={label}
              {...fadeUp(0.14 + i * 0.03)}
              className="group flex flex-col items-center gap-2.5 rounded-sm border border-cream/10 bg-card px-3 py-4 transition-colors duration-300 hover:border-teal/40 hover:bg-teal/5"
            >
              <Icon
                className="h-5 w-5 text-teal transition-transform duration-300 group-hover:scale-110"
                strokeWidth={1.25}
              />
              <span className="text-center text-[10px] uppercase tracking-[0.18em] text-cream/60">
                {label}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Hairline */}
      <motion.div {...fadeUp(0.2)} className="hairline" />

      {/* Contact footer — 3 columns */}
      <motion.div {...fadeUp(0.22)}>
        <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-teal mb-5">
          / Key Contacts
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          {contacts.map((c, i) => (
            <motion.div key={c.name} {...fadeUp(0.2 + i * 0.05)}>
              <div className="font-display text-base font-medium text-cream">
                {c.name}
              </div>
              {c.role && (
                <div className="mt-0.5 font-mono text-[10px] uppercase tracking-[0.22em] text-teal">
                  {c.role}
                </div>
              )}
              <div className="mt-3 space-y-1.5">
                <a
                  href={`tel:${c.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-2 text-xs text-cream/60 transition hover:text-teal"
                >
                  <Phone className="h-3 w-3 text-teal shrink-0" />
                  {c.phone}
                </a>
                <a
                  href={`mailto:${c.email}`}
                  className="flex items-center gap-2 break-all text-xs text-cream/60 transition hover:text-teal"
                >
                  <Mail className="h-3 w-3 text-teal shrink-0" />
                  {c.email}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
