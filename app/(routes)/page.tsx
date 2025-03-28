import {
  Faqs,
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
    <div className="cursor-none overflow-x-hidden">
      <HeroSection />
      <OurServices />
      <LearnMore />
      <WhatWeDo />
      <ProblemSolving />
      <Testimonials />
      <Faqs header={'FAQs'}/>

      {/* orange cursor appearing only on the home page */}
      <Cursor />
    </div>
  );
}
