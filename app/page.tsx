import { HeroSection } from "@/components/sections/hero-section";
import { HowItWorksSection } from "@/components/sections/how-it-works-section";
import { PopularListingsSection } from "@/components/sections/popular-listings-section";
import { AgentCTASection } from "@/components/sections/agent-cta-section";
import { HotAreasSection } from "@/components/sections/hot-areas-section";
import { MobileAppSection } from "@/components/sections/mobile-app-section";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <HowItWorksSection />
      <PopularListingsSection />
      <AgentCTASection />
      <HotAreasSection />
      <MobileAppSection />
    </main>
  );
}

