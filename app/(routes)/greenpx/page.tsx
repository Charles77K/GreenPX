import {
  FeaturesHero,
  HowToUse,
  ImageBackground,
  KeyFeatures,
  PlaceOrder,
} from "@/components/features";
import { Testimonials } from "@/components/home";
import React from "react";
import { Metadata } from "next";
import { metadataConfig } from "@/app/metadata";

export const metadata: Metadata = metadataConfig.greenpx;

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
