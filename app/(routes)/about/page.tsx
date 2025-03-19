"use client";

import { VALUES_CARD_CONTENT } from "@/components/about/static";
import ValuesCard from "@/components/about/ValuesCard";
import Line from "@/components/ui/Line";
import Image from "next/image";
import React from "react";

import styled from "styled-components";

const GreenSpan = styled.span`
  color: #038b00;
`;

const About = () => {
  return (
    <div className="">
      {/* Hero section */}
      <div className="pt-32 flex-col-center px-4">
        <h1 className="font-black text-2xl mb-10 md:text-5xl max-w-3xl text-center">
          Powering The Future With{" "}
          <span className="text-brandGreen">Sustainable Energy Solutions</span>
        </h1>
        <Image
          src={"/about/about.png"}
          alt="About GreenPX"
          width={900}
          height={400}
          priority
        />
      </div>
      {/* what we do at green potentia */}
      <div className="bg-brandFadeBlue flex-center my-10 px-4 py-16 md:py-32">
        <p className="text-3xl text-black font-medium max-w-4xl">
          At <GreenSpan>Green Potentia</GreenSpan>, we&apos;re here to{" "}
          <GreenSpan>fix</GreenSpan> what&apos;s broken about power in Nigeria:
          blackouts, noisy generators, and bills that never stop climbing. We
          don&apos;t just <GreenSpan>talk about green energy </GreenSpan> -we{" "}
          <GreenSpan>build</GreenSpan> it
        </p>
      </div>

      {/* our values */}
      <div className="flex-col-center px-4">
        {/* header */}
        <div className="flex-col-center gap-4">
          <Line color="bg-brandGreen" />
          <h2 className="text-3xl md:text-5xl text-center text-brandBlack font-semibold">
            Our <br /> <GreenSpan>Values</GreenSpan>
          </h2>
          <p className="text-brandGray text-base max-w-3xl text-center ">
            At Green Potentia, our values define who we are and guide our
            mission to provide sustainable, reliable, and affordable energy
            solutions.
          </p>
        </div>
        {/* cards */}
        <div className="grid grid-cols-1 p-4 gap-2 md:grid-cols-2">
          {VALUES_CARD_CONTENT.map((item) => (
            <ValuesCard
              key={item.id}
              {...item}
              className={`${item.id === 5 && "md:col-span-2"}`}
              // width={`${item.id === 5 ? "max-w-full" : "max-w-sm"}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
