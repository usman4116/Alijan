import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";
import { HeroScene } from "@/components/sections/HeroScene";
import { OpeningJourney } from "@/components/sections/OpeningJourney";
import { HazardScene } from "@/components/sections/HazardScene";
import { BlueprintTransition } from "@/components/sections/BlueprintTransition";
import { AboutCapabilities } from "@/components/sections/AboutCapabilities";
import { HSEProcess } from "@/components/sections/HSEProcess";
import { InfrastructureJourney } from "@/components/sections/InfrastructureJourney";
import { ExperienceTimeline } from "@/components/sections/ExperienceTimeline";
import { ExperienceHighlights } from "@/components/sections/ExperienceHighlights";
import { Credentials } from "@/components/sections/Credentials";
import { ClosingScene } from "@/components/sections/ClosingScene";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main">
        <HeroScene />
        <OpeningJourney />
        <HazardScene />
        <BlueprintTransition />
        <AboutCapabilities />
        <HSEProcess />
        <InfrastructureJourney />
        <ExperienceTimeline />
        <ExperienceHighlights />
        <Credentials />
        <ClosingScene />
      </main>
      <Footer />
    </>
  );
}
