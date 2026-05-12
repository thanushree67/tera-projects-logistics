import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { z } from "zod";
import { X, Loader2, ShieldCheck } from "lucide-react";
import { supabase, isSupabaseConfigured } from "@/lib/supabase";
import { toast } from "sonner";

const schema = z.object({
  name: z.string().trim().min(2, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  phone: z.string().trim().min(7, "Invalid phone").max(20).regex(/^[0-9+\-\s()]+$/, "Digits only"),
});

type Props = {
  open: boolean;
  onClose: () => void;
  source?: string;
};

export function LeadCaptureDialog({ open, onClose, source = "popup" }: Props) {
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.issues.forEach((i) => {
        if (i.path[0]) fieldErrors[String(i.path[0])] = i.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    setSubmitting(true);

    try {
      if (!isSupabaseConfigured || !supabase) {
        // Graceful fallback so the form still feels responsive while
        // backend env vars are pending.
        await new Promise((r) => setTimeout(r, 600));
        toast.success("Thank you! We'll be in touch shortly.");
        onClose();
        return;
      }

      const { error } = await supabase.from("leads").insert({
        name: result.data.name,
        email: result.data.email,
        phone: result.data.phone,
        source,
      });
      if (error) throw error;
      toast.success("Thank you! Our team will reach out within 24 hours.");
      setForm({ name: "", email: "", phone: "" });
      onClose();
    } catch (err) {
      console.error(err);
      toast.error("Could not submit. Please try again or call us directly.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div
            className="absolute inset-0 bg-ink-deep/85 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="lead-title"
            className="relative w-full max-w-md overflow-hidden rounded-[2px] border border-cream/10 bg-card p-7 shadow-[var(--shadow-elegant)] sm:p-9"
            initial={{ y: 30, scale: 0.96, opacity: 0 }}
            animate={{ y: 0, scale: 1, opacity: 1 }}
            exit={{ y: 20, scale: 0.97, opacity: 0 }}
            transition={{ type: "spring", stiffness: 240, damping: 26 }}
          >
            <div
              aria-hidden
              className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full opacity-30 blur-3xl"
              style={{ background: "radial-gradient(circle, var(--brass) 0%, transparent 60%)" }}
            />

            <button
              onClick={onClose}
              className="absolute right-4 top-4 rounded-full p-1.5 text-cream/60 transition hover:bg-cream/10 hover:text-cream"
              aria-label="Close"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-brass">
              / Tera Projects
            </div>
            <h2
              id="lead-title"
              className="mt-3 font-display text-3xl leading-tight text-cream"
            >
              Start a <span className="italic text-brass">conversation</span>.
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-cream/65">
              Share your details and our specialists will respond within one business day.
            </p>

            <form onSubmit={handleSubmit} className="mt-7 space-y-5" noValidate>
              <Field
                label="Full Name"
                value={form.name}
                onChange={(v) => setForm((f) => ({ ...f, name: v }))}
                error={errors.name}
                autoComplete="name"
              />
              <Field
                label="Email"
                type="email"
                value={form.email}
                onChange={(v) => setForm((f) => ({ ...f, email: v }))}
                error={errors.email}
                autoComplete="email"
              />
              <Field
                label="Phone Number"
                type="tel"
                value={form.phone}
                onChange={(v) => setForm((f) => ({ ...f, phone: v }))}
                error={errors.phone}
                autoComplete="tel"
              />

              <button
                type="submit"
                disabled={submitting}
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full border border-brass/50 bg-brass px-6 py-3.5 text-sm font-medium text-primary-foreground transition hover:brightness-105 disabled:opacity-60"
              >
                {submitting ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" /> Submitting…
                  </>
                ) : (
                  <>
                    Enquire Us
                    <ShieldCheck className="h-3.5 w-3.5 opacity-80" />
                  </>
                )}
              </button>
              <p className="text-center text-[11px] leading-relaxed text-cream/45">
                By submitting, you agree to be contacted by Tera Projects regarding your enquiry.
              </p>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Field({
  label,
  value,
  onChange,
  error,
  type = "text",
  autoComplete,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
  type?: string;
  autoComplete?: string;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block font-mono text-[10px] uppercase tracking-[0.22em] text-cream/55">
        {label}
      </span>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        autoComplete={autoComplete}
        className="w-full rounded-[2px] border border-cream/15 bg-cream/[0.03] px-3.5 py-3 text-sm text-cream outline-none transition focus:border-brass focus:bg-cream/[0.06] focus:ring-2 focus:ring-brass/25"
      />
      {error && <span className="mt-1 block text-xs text-destructive">{error}</span>}
    </label>
  );
}
