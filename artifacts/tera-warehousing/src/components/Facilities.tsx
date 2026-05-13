import { motion, type Transition } from "framer-motion";
import {
  ShieldCheck,
  Truck,
  Cctv,
  Container,
  Phone,
  Mail,
  Clock,
  ArrowUpDown,
  Star,
  Layers,
  CheckCircle2,
} from "lucide-react";

const featureIcons = [
  { Icon: Clock,       label: "24 x 7 Road Accessibility" },
  { Icon: Cctv,        label: "CCTV Surveillance & Security Monitoring" },
  { Icon: ArrowUpDown, label: "Ramp Loading & Unloading Facilities" },
  { Icon: Star,        label: "Suitable for Valuable & Project Cargo" },
  { Icon: Truck,       label: "Spacious Truck Movement Area" },
  { Icon: Layers,      label: "Flexible Storage Options for all Cargo Types" },
];

const suitableFor = [
  "General cargo",
  "Industrial materials",
  "Project cargo",
  "Import / export storage",
  "Distribution and logistics operations",
];

const contacts = [
  {
    name: "Premnath Venugopal",
    role: "Managing Director",
    phone: "+91 98403 04615",
    email: "premnath.v@teraship.com",
  },
  {
    name: "Keethana Premnathv",
    role: "General Manager",
    phone: "+91 73581 05215",
    email: "keethana.p@teraship.com",
  },
  {
    name: "Deepak Kumar",
    role: "Logistics Manager",
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
        <div className="rounded-sm border border-cream/10 bg-card px-6 py-6 flex flex-col sm:flex-row sm:items-center gap-2">
          <div className="font-display text-3xl font-medium text-cream">
            5,000 – 50,000
          </div>
          <div className="flex flex-col sm:ml-3">
            <div className="text-sm uppercase tracking-[0.18em] text-teal font-medium">
              sq ft
            </div>
            <div className="mt-0.5 text-xs text-cream/55">
              Flexible Space Options
            </div>
          </div>
        </div>
      </motion.div>

      {/* Available Locations */}
      <motion.div {...fadeUp(0.12)}>
        <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-teal mb-4">
          / Available Locations
        </div>
        <ul className="space-y-3">
          {["Madhavaram", "Arakkonam", "Sholavaram"].map((loc, i) => (
            <motion.li
              key={loc}
              {...fadeUp(0.1 + i * 0.05)}
              className="flex items-center gap-4 rounded-sm border border-cream/10 bg-card px-5 py-4"
            >
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />
              <div className="text-sm font-medium text-cream">{loc}</div>
            </motion.li>
          ))}
        </ul>
      </motion.div>

      {/* Connectivity Points */}
      <motion.div {...fadeUp(0.14)}>
        <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-teal mb-4">
          / Connectivity Points
        </div>
        <ul className="space-y-2.5">
          {[
            "Chennai Port",
            "Kamarajar Port",
            "Chennai International Airport",
            "North Chennai Industrial & Logistics Corridors",
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
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
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
              <span className="text-center text-[10px] uppercase tracking-[0.15em] text-cream/60 leading-relaxed">
                {label}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Suitable For */}
      <motion.div {...fadeUp(0.18)}>
        <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-teal mb-4">
          / Suitable For
        </div>
        <ul className="space-y-2.5">
          {suitableFor.map((item, i) => (
            <motion.li
              key={i}
              {...fadeUp(0.16 + i * 0.03)}
              className="flex items-center gap-3 text-sm text-cream/70"
            >
              <CheckCircle2 className="h-4 w-4 shrink-0 text-teal" strokeWidth={1.5} />
              {item}
            </motion.li>
          ))}
        </ul>
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
