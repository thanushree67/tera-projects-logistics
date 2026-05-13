import { Hero } from "@/components/Hero";
import { WarehouseSection } from "@/components/WarehouseSection";
import { DistributionSection } from "@/components/DistributionSection";
import { InfrastructureSection } from "@/components/InfrastructureSection";
import { SiteFooter } from "@/components/SiteFooter";

export default function HomePage() {
  return (
    <>
      <Hero />
      <WarehouseSection />
      <DistributionSection />
      <InfrastructureSection />
      <SiteFooter />
    </>
  );
}
