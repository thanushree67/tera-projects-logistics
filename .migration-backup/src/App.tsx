import { Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import { LeadProvider } from "@/components/LeadProvider";
import { SiteHeader } from "@/components/SiteHeader";
import HomePage from "@/pages/HomePage";
import ContactPage from "@/pages/ContactPage";
import NotFoundPage from "@/pages/NotFoundPage";

export default function App() {
  return (
    <LeadProvider>
      <SiteHeader />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Toaster theme="dark" position="top-center" richColors />
    </LeadProvider>
  );
}
