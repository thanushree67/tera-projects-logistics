import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import logo from "@/assets/tera-logo.png";
import { useLeadDialog } from "./LeadProvider";

export function SiteHeader() {
  const { open } = useLeadDialog();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
        scrolled
          ? "bg-ink-deep/80 backdrop-blur-md border-b border-cream/10"
          : "bg-transparent"
      }`}
    >
      <div className="container-x flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Tera Projects" className="h-8 w-auto" />
          <span className="hidden font-mono text-[10px] uppercase tracking-[0.28em] text-cream/60 sm:inline">
            / Warehouse Division
          </span>
        </Link>

        <nav className="hidden items-center gap-10 text-sm md:flex">
          {[
            { href: "/#warehouse", label: "Warehousing" },
            { href: "/#distribution", label: "Distribution" },
          ].map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="group relative text-cream/70 transition hover:text-cream"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 h-px w-full origin-right scale-x-0 bg-brass/70 transition-transform duration-500 group-hover:origin-left group-hover:scale-x-100" />
            </a>
          ))}
          <Link
            to="/contact"
            className="group relative text-cream/70 transition hover:text-cream"
          >
            Contact
            <span className="absolute -bottom-1 left-0 h-px w-full origin-right scale-x-0 bg-brass/70 transition-transform duration-500 group-hover:origin-left group-hover:scale-x-100" />
          </Link>
        </nav>

        <button
          onClick={() => open("header")}
          className="group inline-flex items-center gap-2 rounded-full border border-brass/40 bg-brass/[0.06] px-5 py-2.5 text-xs font-medium tracking-wide text-cream transition hover:bg-brass hover:text-primary-foreground sm:text-sm"
        >
          Enquire Us
          <ArrowUpRight className="h-3.5 w-3.5 text-brass transition group-hover:rotate-45 group-hover:text-primary-foreground" />
        </button>
      </div>
    </motion.header>
  );
}
