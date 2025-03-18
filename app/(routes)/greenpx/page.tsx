import {
  FeaturesHero,
  HowToUse,
  ImageBackground,
  KeyFeatures,
  PlaceOrder,
} from "@/components/features";
import { Testimonials } from "@/components/home";
import React from "react";

const GreenPX = () => {
  return (
    <div>
      <FeaturesHero />
      <KeyFeatures />
      <ImageBackground />
      <HowToUse />
      <PlaceOrder />
      <Testimonials />
    </div>
  );
};

export default GreenPX;
