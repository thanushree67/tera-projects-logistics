import { Link } from "@tanstack/react-router";
import { Phone, Mail } from "lucide-react";
import logo from "@/assets/tera-logo.png";

const phones = ["+91 98403 04615", "+91 88700 38324"];
const emails = ["premnath.v@teraship.com", "deepak.s@teraship.com"];

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-navy-deep">
      <div className="container-x py-16">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2.5">
              <img src={logo} alt="Tera Projects" className="h-8 w-auto" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-teal">
                Warehouse Division
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              Strategic warehousing and global distribution for heavy-lift and general cargo.
            </p>
          </div>

          <div>
            <div className="text-[11px] font-semibold uppercase tracking-[0.25em] text-teal">
              Contact
            </div>
            <ul className="mt-4 space-y-2.5 text-sm">
              {phones.map((p) => (
                <li key={p}>
                  <a
                    href={`tel:${p.replace(/\s/g, "")}`}
                    className="inline-flex items-center gap-2 text-muted-foreground transition hover:text-foreground"
                  >
                    <Phone className="h-3.5 w-3.5 text-teal" /> {p}
                  </a>
                </li>
              ))}
              {emails.map((e) => (
                <li key={e}>
                  <a
                    href={`mailto:${e}`}
                    className="inline-flex items-center gap-2 break-all text-muted-foreground transition hover:text-foreground"
                  >
                    <Mail className="h-3.5 w-3.5 text-teal" /> {e}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-[11px] font-semibold uppercase tracking-[0.25em] text-teal">
              Navigate
            </div>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a href="/#warehouse" className="text-muted-foreground transition hover:text-foreground">
                  Warehousing
                </a>
              </li>
              <li>
                <a href="/#distribution" className="text-muted-foreground transition hover:text-foreground">
                  Distribution
                </a>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground transition hover:text-foreground">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <div>© {new Date().getFullYear()} Tera Projects. All rights reserved.</div>
          <div className="font-mono uppercase tracking-widest">Warehouse · Distribution · Heavy-lift</div>
        </div>
      </div>
    </footer>
  );
}
