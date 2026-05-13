import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";
import { LeadCaptureDialog } from "./LeadCaptureDialog";

type Ctx = { open: (source?: string) => void };
const LeadContext = createContext<Ctx>({ open: () => {} });

export const useLeadDialog = () => useContext(LeadContext);

export function LeadProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [source, setSource] = useState("popup");

  const open = useCallback((src = "cta") => {
    setSource(src);
    setIsOpen(true);
  }, []);

  // Auto-trigger after 5s on first visit per session
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem("tera_lead_seen")) return;
    const t = setTimeout(() => {
      setSource("popup");
      setIsOpen(true);
      sessionStorage.setItem("tera_lead_seen", "1");
    }, 5000);
    return () => clearTimeout(t);
  }, []);

  return (
    <LeadContext.Provider value={{ open }}>
      {children}
      <LeadCaptureDialog open={isOpen} onClose={() => setIsOpen(false)} source={source} />
    </LeadContext.Provider>
  );
}
