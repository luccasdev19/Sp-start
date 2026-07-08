import { Hero } from "@/components/sections/Hero";
import { StatsBar } from "@/components/sections/StatsBar";
import { AboutSection } from "@/components/sections/AboutSection";
import { MissionVisionValues } from "@/components/sections/MissionVisionValues";
import { ServicesPreview } from "@/components/sections/ServicesPreview";
import { SupportHighlights } from "@/components/sections/SupportHighlights";
import { PartnershipsSection } from "@/components/sections/PartnershipsSection";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBar />
      <AboutSection />
      <MissionVisionValues />
      <ServicesPreview />
      <SupportHighlights />
      <PartnershipsSection />
      <FinalCTA />
    </>
  );
}
