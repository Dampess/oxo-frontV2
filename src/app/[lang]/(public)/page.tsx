import CTASection from "@/app/components/CTASection";
import DashboardSection from "@/app/components/DashboardSection";
import FeaturesSection from "@/app/components/FeaturesSection";
import Hero from "@/app/components/Hero";
import Newsletter from "@/app/components/NewsLetter";
import PricingTeaser from "@/app/components/PricingTeaserSection";
import Testimonials from "@/app/components/Testimonials";
import ToolsSection from "@/app/components/ToolsSection";
import TrustReasons from "@/app/components/TrustReasons";

export default function HomePage() {
  return (
    <>
      <Hero />

      <FeaturesSection />

      <TrustReasons />

      <DashboardSection />

      <PricingTeaser />

      <CTASection />

      <ToolsSection />

      <Testimonials />

      <Newsletter />
    </>
  );
}
