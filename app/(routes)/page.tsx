import {
  HeroSection,
  LearnMore,
  OurServices,
  ProblemSolving,
  Testimonials,
  WhatWeDo,
} from "@/components/home";
import Cursor from "@/components/ui/Cursor";

export default function Home() {
  return (
    <div className="min-h-screen cursor-none">
      <HeroSection />
      <OurServices />
      <LearnMore />
      <WhatWeDo />
      <ProblemSolving />
      <Testimonials />

      {/* orange cursor appearing only on the home page */}
      <Cursor />
    </div>
  );
}
