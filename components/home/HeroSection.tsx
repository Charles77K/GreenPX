"use client";

import React from "react";
import { MILESTONES } from "./static";
import Milestones from "./Milestones";
import { motion as m } from "motion/react";
import WideButton from "../ui/WideButton";
import Link from "next/link";
import Image from "next/image";

const HeroSection = () => {
  return (
    <m.div
      initial={{ opacity: 0, y: 130, rotate: 5 }}
      animate={{ opacity: 1, y: 0, rotate: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex-col-center py-10 md:py-16 px-4 md:px-8 lg:px-12 relative min-h-screen"
    >
      {/* Background Image */}
      <Image
        src="/home/hero-image.jpg"
        alt="Hero Background"
        fill
        className="object-cover"
        priority
      />

      <div className="absolute inset-0 bg-black/70" />
      {/* main content */}
      <div className="flex relative flex-col items-center justify-center pt-20 text-white max-w-[1800px] mx-auto">
        <h1 className="text-5xl sm:text-7xl lg:text-8xl xl:text-[7rem] 2xl:text-[8rem] xl:-tracking-[6px] md:leading-none text-center font-thin">
          Do you have <br />
          <span className="font-bold ">24 hours</span> of power?
        </h1>
        <p className="text-brandOrange text-center max-w-4xl xl:max-w-5xl 2xl:max-w-6xl font-medium text-lg sm:text-xl md:text-2xl 2xl:text-3xl mt-5">
          No you don&apos;t. But you have us. We fix power problems for good
        </p>
        {/* services */}
        <ul className="flex-center gap-3 text-sm lg:text-base xl:text-lg 2xl:text-xl  flex-wrap md:text-base font-medium mt-4">
          <li>Solar installations</li>
          <li>•</li>
          <li>Maintenance</li>
          <li>•</li>
          <li>Solar generators</li>
        </ul>
        {/* CTA */}
        <Link
          href={"https://forms.gle/ZYZNT39wC4y7H4NJ8"}
          target="_blank"
          className="mt-10"
        >
          <WideButton variant="green" title="Get A Free Consultation" />
        </Link>
        <Link href={"/marketplace"} className="md:hidden flex mt-10">
          <WideButton variant="black" title="Visit Our MarketPlace" />
        </Link>
        {/* social media icons */}
        <m.div
          className="relative mt-20 xl:mt-24 2xl:mt-32 w-fit mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
            delay: 0.3, // Slight delay after the hero content animates
          }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 items-start gap-10 md:gap-10 xl:gap-20 p-4 md:p-6 rounded-2xl bg-[#FFFFFF1A] max-w-screen-xl mx-auto">
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
    </m.div>
  );
};

export default HeroSection;
