"use client";

import React from "react";
import WideButton from "../ui/WideButton";
import Image from "next/image";
import Line from "../ui/Line";

import { motion as m } from "framer-motion";
import Link from "next/link";

const LearnMore = () => {
  return (
    <div className="flex flex-col xs:flex-col-reverse md:flex-col">
      {/* take the first step today section (lmao) with green background */}
      <div className="bg-brandGreen flex flex-col items-center justify-center md:flex-row gap-10 text-white md:py-10 lg:py-12 p-4 md:p-8">
        <div className="flex flex-col gap-2 items-start max-w-lg xl:max-w-xl">
          <h1 className="font-bold text-base xs:text-lg md:text-2xl xl:text-2xl">
            Take the First Step Today
          </h1>
          <p className="text-xs md:text-sm xl:text-base">
            Don&apos;t wait for the next blackout-get 24/7 solar power in 3
            minutes. No risk, just reward
          </p>
        </div>
        <Link href={"https://forms.gle/ZYZNT39wC4y7H4NJ8"} target="_blank">
          <WideButton
            variant="white"
            title="Get a Free Consultation"
            className="py-8 md:py-8 text-sm md:text-sm"
          />
        </Link>
      </div>

      {/* flex container with the power generator image and description */}
      <div className="flex flex-col-reverse xl:flex-row h-full max-h-[1200px] 2xl:max-h-[1200px]">
        {/* image */}
        <div className="relative flex-1 min-h-96 max-h-[600px]">
          <Image
            src="/home/power-generator.png"
            alt="power-generator"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 40vw"
            style={{ objectFit: "cover", objectPosition: "center" }}
            priority
          />
        </div>

        {/* description */}
        <section className="bg-black flex-1">
          <div className="bg-brandBlack responsive-container p-4 md:p-8 xl:p-10">
            <Line color="bg-brandOrange mx-auto xl:mx-0" />
            {/* header */}
            <m.div
              initial={{ opacity: 0, x: 150 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.5,
                type: "spring",
                bounce: 0.4,
                stiffness: 100,
                delay: 0.4,
              }}
              viewport={{ once: true }}
              className="flex flex-col items-center xl:items-start text-brandOrange"
            >
              <h1 className="text-center xl:text-start mt-5 text-5xl md:text-6xl lg:text-7xl xl:text-7xl max-w-xl xl:max-w-3xl 2xl:max-w-full font-black xl:-tracking-[4px]">
                Introducing GreenPX
              </h1>
              {/* <p className="text-4xl text-center xl:text-start md:text-6xl xl:text-5xl font-semibold">
                (Power Generator)
              </p> */}
            </m.div>

            {/* content */}
            <div className="flex flex-col text-white mt-3 items-start gap-5 max-w-4xl">
              <p className="text-sm 2xl:text-base">
                <span className="font-bold text-base lg:text-lg">
                  Do you have 24 hours of light?{" "}
                </span>
                <br />
                Say goodbye to power cuts and noisy generators. GreenPX is a
                portable solar battery that keeps your lights, TV, and other
                devices running—at home, in your shop, or anywhere. Just unbox,
                charge, and have power 24/7.
              </p>
              <p className="text-sm 2xl:text-base">
                <span className="font-bold">GreenPX</span> gives you{" "}
                <span className="text-brandFadeGreen font-bold">
                  silent and affordable Power.
                </span>{" "}
                What more could you possibly ask for?
              </p>
              <p className="text-sm 2xl:text-base">
                <span className="font-bold text-sm md:text-base">
                  Why GreenPX?
                </span>
                <br />
                Click the button below to learn more about GreenPX.
              </p>
              <Link href={"/greenpx"}>
                <WideButton
                  variant="white"
                  title="Learn More"
                  className="px-20 md:px-16 py-6 md:py-6 self-center md:self-start mt-4 md:mt-6"
                />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LearnMore;
