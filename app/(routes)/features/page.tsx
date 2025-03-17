import {
  FeaturesHero,
  HowToUse,
  ImageBackground,
  KeyFeatures,
} from "@/components/features";
import React from "react";

const page = () => {
  return (
    <div>
      <FeaturesHero />
      <KeyFeatures />
      <ImageBackground />
      <HowToUse />
    </div>
  );
};

export default page;
