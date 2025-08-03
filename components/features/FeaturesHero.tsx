"use client";

import React from "react";
import WideButton from "../ui/WideButton";
import { MILESTONES } from "../home/static";
import Milestones from "../home/Milestones";
import { motion as m } from "motion/react";
import Image from "next/image";
import Link from "next/link";

const FeaturesHero = () => {
  return (
    <div className="relative text-white flex flex-col px-4 items-center min-h-screen py-16 md:py-24 justify-between">
      {/* Background Image */}
      <Image
        src="/features/features-hero.webp"
        alt="Hero Background"
        fill
        className="object-cover"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" aria-hidden="true" />

      {/* Main content wrapper */}
      <div className="relative w-full flex flex-col-center pt-10 md:pt-20 flex-grow z-10">
        {/* Hero content */}
        <m.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center max-w-4xl mx-auto mb-16 md:mb-24"
        >
          <h3 className="text-brandGray bg-brandOrange w-fit rounded-full mb-6 py-1 px-2 text-xs">
            Introducing our Flagship Product
          </h3>
          <h1 className="text-6xl md:text-6xl xl:text-7xl 2xl:text-8xl -tracking-[2px] font-extrabold">
            GreenPX
          </h1>
          <h2 className="font-thin text-center md:-mt-4 text-5xl -tracking-[2px] lg:text-6xl 2xl:text-7xl">
            (Solar Generator)
          </h2>
          <p className="text-center max-w-xl 2xl:max-w-2xl mt-16 text-sm xl:text-base ">
            GreenPX is a silent, solar-powered battery box that keeps your
            lights, phone, and other devices running. Just charge it with
            sunlight (or your wall socket) and say goodbye to noisy generators
          </p>
          {/* cta btn */}
          <Link href={"/marketplace/greenpx-midi"}>
            <WideButton
              title="Place An Order"
              variant="green"
              className="text-xs md:text-xs md:py-8 2xl:px-20 mt-5"
            />
          </Link>
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
          <div className="grid grid-cols-2 md:grid-cols-4 items-start gap-4 md:gap-10 p-4 md:p-6 rounded-2xl bg-transparent backdrop-blur-sm">
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
