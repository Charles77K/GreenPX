import {
  FeaturesHero,
  HowToUse,
  ImageBackground,
  KeyFeatures,
  PlaceOrder,
} from "@/components/features";
import React from "react";

const page = () => {
  return (
    <div>
      <FeaturesHero />
      <KeyFeatures />
      <ImageBackground />
      <HowToUse />
      <PlaceOrder />
    </div>
  );
};

export default page;
