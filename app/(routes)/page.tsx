import {
  Faqs,
  HeroSection,
  LearnMore,
  OurServices,
  ProblemSolving,
  Testimonials,
  WhatWeDo,
} from "@/components/home";
import { HOME_FAQS } from "@/components/home/static";
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
      <Faqs header={"FAQs"} faqs={HOME_FAQS} />

      {/* orange cursor appearing only on the home page */}
      <Cursor />
    </div>
  );
}
