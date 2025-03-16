"use client";

import React from "react";
import { MILESTONES } from "./static";
import Milestones from "./Milestones";
import { motion as m } from "motion/react";
import WideButton from "../ui/WideButton";

const HeroSection = () => {
  return (
    <m.div
      initial={{ opacity: 0, y: 50, rotate: 10 }}
      animate={{ opacity: 1, y: 0, rotate: 0 }}
      transition={{ duration: 0.5, ease: "easeIn" }}
      className="min-h-screen flex-col-center pt-10 relative"
      style={{
        backgroundImage: `url('/home/hero-image.jpg')`,
        backgroundSize: "cover",
      }}
    >
      <div className="absolute inset-0 bg-black/70" />
      {/* main content */}
      <div className="flex relative flex-col items-center justify-center pt-20 md:pt-8 p-4 text-white">
        <h1 className="text-5xl sm:text-7xl lg:text-8xl xl:text-[10rem] xl:-tracking-[6px] md:leading-none text-center font-thin">
          Do you have <br />
          <span className="font-medium italic ">24 hours</span> of light?
        </h1>
        <p className="text-brandOrange text-center max-w-4xl xl:max-w-full font-semibold text-lg sm:text-2xl md:text-4xl mt-5">
          No you don&apos;t. But you have us. We fix power problems for good
        </p>
        {/* services */}
        <ul className="flex-center gap-5 text-base flex-wrap md:text-xl font-semibold mt-10">
          <li>Solar installations</li>
          <li>•</li>
          <li>Maintenance</li>
          <li>•</li>
          <li>Solar generators</li>
        </ul>
        {/* CTA */}
        <div className="mt-16">
          <WideButton variant="green" title="Get A Free Consultation" />
        </div>
        {/* social media icons */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 1, ease: [0.6, 0.0, 0.3, 1], delay: 0.4 },
          }}
          className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-20 mt-20"
        >
          {MILESTONES.map(({ number, description }) => (
            <Milestones
              number={number}
              description={description}
              key={number}
            />
          ))}
        </m.div>
      </div>
    </m.div>
  );
};

export default HeroSection;
