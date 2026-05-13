import { Link } from "react-router-dom";
import { Phone, Mail, ArrowUpRight } from "lucide-react";
import logo from "@/assets/tera-logo.png";
import { useLeadDialog } from "./LeadProvider";

const phones = ["+91 98403 04615", "+91 88700 38324"];
const emails = ["premnath.v@teraship.com", "deepak.s@teraship.com"];

export function SiteFooter() {
  const { open } = useLeadDialog();

  return (
    <footer className="relative overflow-hidden border-t border-cream/10 bg-ink-deep">
      <div className="container-x py-20 sm:py-28">
        {/* Big editorial CTA */}
        <div className="grid grid-cols-12 gap-6 lg:gap-10">
          <div className="col-span-12 lg:col-span-8">
            <span className="eyebrow">04 — Let's talk</span>
            <h2 className="mt-4 text-[clamp(2rem,5.4vw,4.8rem)] leading-[1.02] text-cream">
              Move heavy things,{" "}
              <span className="italic text-brass">precisely.</span>
            </h2>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-cream/65">
              Share a brief about your warehousing or distribution requirement —
              our specialists respond within one business day.
            </p>
            <button
              onClick={() => open("footer")}
              className="group mt-8 inline-flex items-center gap-3 rounded-full border border-brass/40 bg-brass/[0.06] px-7 py-4 text-sm font-medium text-cream transition hover:bg-brass hover:text-primary-foreground"
            >
              Enquire Us
              <span className="flex h-7 w-7 items-center justify-center rounded-full border border-brass/50 bg-brass/20 text-brass transition group-hover:rotate-45 group-hover:bg-primary-foreground/10 group-hover:text-primary-foreground">
                <ArrowUpRight className="h-3.5 w-3.5" />
              </span>
            </button>
          </div>

          <div className="col-span-12 lg:col-span-4 lg:pt-10">
            <div className="hairline mb-6 lg:hidden" />
            <div className="space-y-6">
              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-brass">
                  / Phone
                </div>
                <ul className="mt-3 space-y-1.5">
                  {phones.map((p) => (
                    <li key={p}>
                      <a
                        href={`tel:${p.replace(/\s/g, "")}`}
                        className="inline-flex items-center gap-2 text-sm text-cream/80 transition hover:text-brass"
                      >
                        <Phone className="h-3.5 w-3.5 text-brass" /> {p}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-brass">
                  / Email
                </div>
                <ul className="mt-3 space-y-1.5">
                  {emails.map((e) => (
                    <li key={e}>
                      <a
                        href={`mailto:${e}`}
                        className="inline-flex items-center gap-2 break-all text-sm text-cream/80 transition hover:text-brass"
                      >
                        <Mail className="h-3.5 w-3.5 text-brass" /> {e}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="hairline mt-20" />

        <div className="mt-8 grid grid-cols-12 gap-4 text-xs">
          <div className="col-span-12 sm:col-span-4">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Tera Projects" className="h-6 w-auto opacity-90" />
              <span className="font-mono uppercase tracking-[0.28em] text-cream/50">
                Tera Projects
              </span>
            </div>
          </div>
          <div className="col-span-12 flex flex-wrap gap-x-8 gap-y-2 sm:col-span-5">
            <a href="/#warehouse" className="text-cream/60 transition hover:text-cream">
              Warehousing
            </a>
            <a href="/#distribution" className="text-cream/60 transition hover:text-cream">
              Distribution
            </a>
            <Link to="/contact" className="text-cream/60 transition hover:text-cream">
              Contact
            </Link>
          </div>
          <div className="col-span-12 text-cream/45 sm:col-span-3 sm:text-right">
            © {new Date().getFullYear()} · All rights reserved
          </div>
        </div>
      </div>
    </footer>
  );
}
