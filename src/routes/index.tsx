import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/Hero";
import { WarehouseSection } from "@/components/WarehouseSection";
import { DistributionSection } from "@/components/DistributionSection";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <WarehouseSection />
      <DistributionSection />
      <SiteFooter />
    </>
  );
}
