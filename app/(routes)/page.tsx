import { HeroSection, LearnMore, OurServices } from "@/components/home";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <OurServices />
      <LearnMore />
    </div>
  );
}
