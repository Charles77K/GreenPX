"use client";

import React from "react";
import WideButton from "../ui/WideButton";
import { MILESTONES } from "../home/static";
import Milestones from "../home/Milestones";
import { motion as m } from "motion/react";

const FeaturesHero = () => {
  return (
    <div
      className="relative text-white flex flex-col px-4 items-center py-10 md:py-16 lg:py-20 bg-cover min-h-screen bg-center justify-between"
      style={{
        backgroundImage: `url(/features/features-hero.jpeg)`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/55" aria-hidden="true" />

      {/* Main content wrapper */}
      <div className="relative w-full flex flex-col-center pt-10 md:pt-20 flex-grow z-10">
        {/* Hero content */}
        <m.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center max-w-4xl mx-auto mb-16 md:mb-24"
        >
          <h3 className="text-brandGray bg-brandOrange w-fit rounded-full py-1 px-2 text-xs lg:text-lg">
            Introducing our Flagship Product
          </h3>
          <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-8xl 2xl:text-9xl -tracking-[2px] font-extrabold">
            GreenPX
          </h1>
          <h2 className="font-normal text-center -mt-2 text-3xl md:text-5xl -tracking-[2px] lg:text-6xl lg:font-medium 2xl:text-8xl">
            (Solar Generator)
          </h2>
          <p className="text-center max-w-[30rem] 2xl:max-w-3xl mt-4 text-sm xl:text-base 2xl:text-lg 2xl:font-medium">
            GreenPX is a silent, solar-powered battery box that keeps your
            lights, phone, and other devices running. Just charge it with
            sunlight (or your wall socket) and say goodbye to noisy generators
          </p>
          {/* cta btn */}
          <WideButton
            title="Visit Marketplace"
            variant="green"
            className="text-xs md:text-xs 2xl:px-28 mt-5"
          />
        </m.div>

        {/* Milestones section */}
        <m.div
          className="relative w-fit mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
            delay: 0.3, // Slight delay after the hero content animates
          }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 items-start gap-4 md:gap-10 p-4 md:p-6 rounded-2xl bg-[#FFFFFF1A]">
            {MILESTONES.map((milestone, index) => (
              <m.div
                key={milestone.number}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                  delay: 0.4 + index * 0.1, // Staggered delay for each milestone
                }}
              >
                <Milestones
                  className="flex flex-col items-start"
                  number={milestone.number}
                  description={milestone.description}
                />
              </m.div>
            ))}
          </div>
        </m.div>
      </div>
    </div>
  );
};

export default FeaturesHero;
