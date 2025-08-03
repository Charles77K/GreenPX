import {
  FOUNDERS,
  VALUES_CARD_CONTENT,
  WHY_CHOOSE_US,
} from "@/components/about/static";
import ValuesCard from "@/components/about/ValuesCard";
import Line from "@/components/ui/Line";
import Image from "next/image";
import React from "react";
import { GreenSpan } from "@/components/about/GreenSpan";
import Card from "@/components/about/Card";
import FoundersItem from "@/components/about/FoundersItem";
import { Testimonials } from "@/components/home";
import { metadataConfig } from "@/app/metadata";
import { Metadata } from "next";
import Gallery from "@/components/about/Gallery";

export const metadata: Metadata = metadataConfig.about;

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
          src={"/about/about.webp"}
          alt="About GreenPX"
          width={900}
          height={400}
          priority
        />
      </div>

      {/* what we do at green potentia */}
      <div className="bg-brandFadeBlue flex-center my-10 px-4 py-16 md:py-32">
        <p className="text-2xl xl:text-3xl text-black font-medium max-w-4xl">
          At <GreenSpan>Green Potentia</GreenSpan>, we&apos;re here to{" "}
          <GreenSpan>fix</GreenSpan> what&apos;s broken about power in Nigeria:
          blackouts, noisy generators, and bills that never stop climbing. We
          don&apos;t just <GreenSpan>talk about green energy </GreenSpan> -we{" "}
          <GreenSpan>build</GreenSpan> it
        </p>
      </div>

      {/* our values */}
      <div className="flex-col-center max-w-5xl mx-auto px-4">
        {/* header */}
        <div className="flex-col-center gap-4">
          <Line color="bg-brandGreen" />
          <h2 className="text-3xl md:text-5xl text-center text-brandBlack font-semibold">
            Our <br /> <GreenSpan>Values</GreenSpan>
          </h2>
          <p className="text-brandGray mb-4 text-base max-w-3xl text-center ">
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
              desc={`${item.id === 5 && "md:max-w-full"}`}
              // width={`${item.id === 5 ? "max-w-full" : "max-w-sm"}`}
            />
          ))}
        </div>
      </div>

      {/*  our mission */}
      <div className="bg-brandFadeBlue py-16 md:py-28 mt-5 px-4">
        <section className="flex flex-col md:flex-row gap-10 items-center justify-center responsive-container">
          {/*description and header*/}
          <div className="flex flex-col items-start gap-4">
            {/*header with line and our mission text*/}
            <div>
              <Line color="bg-brandGreen" />
              <h2 className="text-brandGreen text-base md:text-lg xl:text-xl font-medium">
                Our Mission
              </h2>
            </div>
            <h1 className="text-black text-2xl md:text-4xl 2xl:text-5xl max-w-sm font-bold">
              Lighting The Future With Clean Energy
            </h1>
            <p className={"text-brandGray text-sm lg:text-base max-w-md"}>
              At Green Potentia, we make clean energy simple and accessible. Our
              affordable and reliable solar solutions power homes, businesses,
              and communities, reducing reliance on fossil fuels. With a focus
              on innovation and sustainability, we’re building a future where
              everyone enjoys uninterrupted, eco-friendly electricity.
            </p>
          </div>
          {/*energy bulb image */}
          <div>
            <Image
              src={"/about/energy.png"}
              alt={"energy-bulb"}
              width={500}
              height={500}
              className={"rounded-md"}
            />
          </div>
        </section>
      </div>

      {/*  why choose us? */}
      <div className={"bg-brandGreen py-10 px-4 md:py-16"}>
        <section className="flex-col-center gap-10 responsive-container">
          <h1
            className={
              "text-3xl md:text-5xl max-w-md 2xl:text-6xl text-center text-white font-semibold"
            }
          >
            Why Choose Green Potentia?
          </h1>
          {/*  cards */}
          <div
            className={"grid grid-cols-1 xs:grid-cols-2 gap-5 md:grid-cols-4"}
          >
            {WHY_CHOOSE_US.map((item, idx) => (
              <Card {...item} key={idx} />
            ))}
          </div>
        </section>
      </div>

      {/*  the minds behind the mission : founders */}
      <div className={"py-16 px-4"}>
        <section className={"flex-col-center"}>
          <Line color={"bg-brandGreen my-3 w-10"} />
          <h2 className="text-3xl md:text-4xl 2xl:text-5xl text-center text-brandBlack max-w-md font-semibold">
            The Minds Behind The <GreenSpan>Mission</GreenSpan>
          </h2>
          <p
            className={
              "text-brandGray text-sm md:text-base max-w-xl text-center mt-3"
            }
          >
            We’re a team of renewable energy experts, designers, strategists,
            and tech innovators united by one goal: delivering sustainable
            energy solutions that power lives and grow economies
          </p>
          <div className={"grid grid-cols-1 md:grid-cols-2 mt-5 gap-5"}>
            {FOUNDERS.map((item, idx) => (
              <FoundersItem {...item} key={idx} />
            ))}
          </div>
        </section>
      </div>
      {/* photo gallery */}
      <Gallery />

      <Testimonials />
    </div>
  );
};

export default About;
