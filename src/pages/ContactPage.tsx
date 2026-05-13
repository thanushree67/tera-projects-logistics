import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import { useState } from "react";
import { z } from "zod";
import { supabase, isSupabaseConfigured } from "@/lib/supabase";
import { toast } from "sonner";
import { SiteFooter } from "@/components/SiteFooter";

const schema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().min(7).max(20).regex(/^[0-9+\-\s()]+$/),
  message: z.string().trim().max(1000).optional(),
});

const phones = ["+91 98403 04615", "+91 88700 38324"];
const emails = ["premnath.v@teraship.com", "deepak.s@teraship.com"];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const r = schema.safeParse(form);
    if (!r.success) {
      const fe: Record<string, string> = {};
      r.error.issues.forEach((i) => {
        if (i.path[0]) fe[String(i.path[0])] = i.message;
      });
      setErrors(fe);
      return;
    }
    setErrors({});
    setSubmitting(true);
    try {
      if (!isSupabaseConfigured || !supabase) {
        await new Promise((res) => setTimeout(res, 600));
      } else {
        const { error } = await supabase.from("leads").insert({
          name: r.data.name,
          email: r.data.email,
          phone: r.data.phone,
          source: "contact_page",
        });
        if (error) throw error;
      }
      toast.success("Thanks — our team will reach out shortly.");
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch (err) {
      console.error(err);
      toast.error("Could not send. Please try again or call us directly.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <section className="relative pt-32 pb-20 sm:pt-40">
        <div className="container-x">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-brass">
              Contact
            </span>
            <h1 className="mt-3 text-4xl font-semibold sm:text-6xl">Let's move your cargo.</h1>
            <p className="mt-4 text-muted-foreground sm:text-lg">
              Tell us about your warehousing or distribution needs — we typically respond within
              one business day.
            </p>
          </motion.div>

          <div className="mt-16 grid gap-8 lg:grid-cols-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2 space-y-6"
            >
              <InfoCard icon={<Phone className="h-4 w-4" />} title="Phone">
                {phones.map((p) => (
                  <a
                    key={p}
                    href={`tel:${p.replace(/\s/g, "")}`}
                    className="block text-foreground transition hover:text-brass"
                  >
                    {p}
                  </a>
                ))}
              </InfoCard>
              <InfoCard icon={<Mail className="h-4 w-4" />} title="Email">
                {emails.map((e) => (
                  <a
                    key={e}
                    href={`mailto:${e}`}
                    className="block break-all text-foreground transition hover:text-brass"
                  >
                    {e}
                  </a>
                ))}
              </InfoCard>
              <InfoCard icon={<MapPin className="h-4 w-4" />} title="Company">
                <div className="text-foreground">Tera Projects</div>
                <div className="text-sm text-muted-foreground">Warehouse Division</div>
              </InfoCard>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              onSubmit={handleSubmit}
              noValidate
              className="lg:col-span-3 rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] sm:p-8"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Full Name" value={form.name} onChange={(v) => setForm((f) => ({ ...f, name: v }))} error={errors.name} />
                <Field label="Phone" type="tel" value={form.phone} onChange={(v) => setForm((f) => ({ ...f, phone: v }))} error={errors.phone} />
              </div>
              <div className="mt-4">
                <Field label="Email" type="email" value={form.email} onChange={(v) => setForm((f) => ({ ...f, email: v }))} error={errors.email} />
              </div>
              <div className="mt-4">
                <label className="block">
                  <span className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    Message (optional)
                  </span>
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                    rows={4}
                    className="w-full rounded-md border border-input bg-background/40 px-3 py-2.5 text-sm outline-none transition focus:border-brass focus:ring-2 focus:ring-brass/30"
                  />
                </label>
              </div>
              <button
                type="submit"
                disabled={submitting}
                className="mt-6 inline-flex w-full items-center justify-center rounded-md bg-cream px-5 py-3 text-sm font-semibold text-ink-deep transition hover:bg-teal hover:text-cream disabled:opacity-60 sm:w-auto"
              >
                {submitting ? "Sending…" : "Enquire Us"}
              </button>
            </motion.form>
          </div>
        </div>
      </section>
      <SiteFooter />
    </>
  );
}

function InfoCard({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-card)]">
      <div className="flex items-center gap-2 text-brass">
        <span className="flex h-8 w-8 items-center justify-center rounded-md bg-brass/10">{icon}</span>
        <span className="text-[11px] font-semibold uppercase tracking-[0.25em]">{title}</span>
      </div>
      <div className="mt-3 space-y-1 text-sm">{children}</div>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  error,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
  type?: string;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted-foreground">
        {label}
      </span>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-md border border-input bg-background/40 px-3 py-2.5 text-sm outline-none transition focus:border-brass focus:ring-2 focus:ring-brass/30"
      />
      {error && <span className="mt-1 block text-xs text-destructive">{error}</span>}
    </label>
  );
}
