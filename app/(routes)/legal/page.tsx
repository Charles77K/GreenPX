import LegalTabs from "@/components/Legal/LegalTabs";
import React from "react";
import { Metadata } from "next";
import { metadataConfig } from "@/app/metadata";

export const metadata: Metadata = metadataConfig.legal;

const Legal = () => {
  return (
    <div className="min-h-screen">
      {/* Background Image */}
      <div className={"relative min-h-[70vh] flex-col-center"}>
        {/* Overlay */}
        <div className="absolute inset-0 bg-brandFadeBlue/60" />
        {/* Content */}
        <header className="relative text-black text-center z-10 p-6">
          <h1 className="text-black font-extrabold text-3xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl">
            Legal
          </h1>
          <p className={"mt-4 text-brandGray max-w-4xl"}>
            Access Green Potentia Limited&apos;s legal documentation, policies,
            and compliance information. We are committed to transparency,
            ethical practices, and strict adherence to Nigerian
            regulations-ensuring your trust and safety in every partnership
          </p>
        </header>
      </div>
      <section className={"flex-col-center mt-10"}>
        <LegalTabs />
      </section>
    </div>
  );
};
export default Legal;
