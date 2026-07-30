import dynamic from "next/dynamic";
import { HeroSection } from "@/components/sections/HeroSection";
import { StateSection } from "@/components/sections/StateSection";

// Code-split below-the-fold components with next/dynamic lazy loading
const ClientsSection = dynamic(() =>
  import("@/components/sections/ClientsSection").then((mod) => mod.ClientsSection)
);
const FeaturesSection = dynamic(() =>
  import("@/components/sections/FeatureSection").then((mod) => mod.FeaturesSection)
);
const ProcessSection = dynamic(() =>
  import("@/components/sections/ProcessSection").then((mod) => mod.ProcessSection)
);
const HowItWorksSection = dynamic(() =>
  import("@/components/sections/HowItWorksSection").then((mod) => mod.HowItWorksSection)
);
const FaqSection = dynamic(() =>
  import("@/components/sections/FaqSection").then((mod) => mod.FaqSection)
);
const TestimonialSection = dynamic(() =>
  import("@/components/sections/TestimonialSection").then((mod) => mod.TestimonialSection)
);

// ISR (Incremental Static Regeneration): Revalidate page every 1 hour (3600s)
export const revalidate = 3600;

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <StateSection />
      <ClientsSection />
      <FeaturesSection />
      <ProcessSection />
      <HowItWorksSection />
      <FaqSection />
      <TestimonialSection />
    </main>
  );
}