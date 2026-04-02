import CTASection from "../components/CTASection";
import DashboardSection from "../components/DashboardSection";
import FeaturesSection from "../components/FeaturesSection";
import Hero from "../components/Hero";
import Newsletter from "../components/NewsLetter";
import PricingTeaser from "../components/PricingTeaserSection";
import Testimonials from "../components/Testimonials";
import ToolsSection from "../components/ToolsSection";
import TrustReasons from "../components/TrustReasons";

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
