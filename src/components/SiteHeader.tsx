import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import logo from "@/assets/tera-logo.png";
import { useLeadDialog } from "./LeadProvider";

export function SiteHeader() {
  const { open } = useLeadDialog();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-navy-deep/85 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container-x flex h-16 items-center justify-between sm:h-20">
        <Link to="/" className="flex items-center gap-2.5">
          <img src={logo} alt="Tera Projects" className="h-7 w-auto sm:h-8" />
          <span className="hidden text-[10px] font-semibold uppercase tracking-[0.25em] text-teal sm:inline">
            Warehouse Division
          </span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm md:flex">
          <a href="/#warehouse" className="text-muted-foreground transition hover:text-foreground">
            Warehousing
          </a>
          <a href="/#distribution" className="text-muted-foreground transition hover:text-foreground">
            Distribution
          </a>
          <Link to="/contact" className="text-muted-foreground transition hover:text-foreground">
            Contact
          </Link>
        </nav>

        <button
          onClick={() => open("header")}
          className="inline-flex items-center justify-center rounded-md bg-[image:var(--gradient-accent)] px-4 py-2 text-xs font-semibold uppercase tracking-wider text-primary-foreground shadow-[var(--shadow-elegant)] transition hover:brightness-110 sm:text-sm"
        >
          Get a Quote
        </button>
      </div>
    </motion.header>
  );
}
