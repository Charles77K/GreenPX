import {
  HeroSection,
  LearnMore,
  OurServices,
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

      {/* orange cursor appearing only on the home page */}
      <Cursor />
    </div>
  );
}
