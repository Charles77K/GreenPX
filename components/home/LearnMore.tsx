import React from "react";
import WideButton from "../ui/WideButton";
import Image from "next/image";
import Line from "../ui/Line";

const LearnMore = () => {
  return (
    <div className="flex flex-col">
      {/* take the first step today section (lmao) with green background */}
      <div className="bg-brandGreen flex flex-col items-center justify-center md:flex-row gap-10 text-white md:py-20 p-4">
        <div className="flex flex-col gap-2 items-start max-w-lg">
          <h1 className="font-bold text-base xs:text-xl md:text-3xl">
            Take the First Step Today
          </h1>
          <p className="text-sm md:text-lg">
            Don&apos;t wait for the next blackout-get 24/7 solar power in 3
            minutes. No risk, just reward
          </p>
        </div>
        <div className="">
          <WideButton variant="white" title="Get a Free Consultation" />
        </div>
      </div>
      {/* flex container with the power generator image and description */}
      <div className="flex flex-col md:flex-row h-full">
        {/* image */}
        <div className="h-full relative w-full flex-1">
          <Image
            src={"/home/power-generator.png"}
            alt="power-generator"
            fill
            sizes="(max-width: 768px) 100vw, 30vw"
            style={{ objectFit: "cover" }}
          />
        </div>
        {/* description */}
        <div className="bg-brandBlack flex-1 p-8">
          <Line color="bg-brandOrange" />
          {/* header */}
          <div className="flex flex-col items-center text-brandOrange">
            <h1 className=" text-start xl:text-center text-8xl max-w-xl font-black -tracking-[4px]">
              Introducing GreenPX
            </h1>
            <p className="text-6xl font-semibold">(Power Generator)</p>
          </div>
          {/* content */}
          <div className="flex flex-col text-white mt-8 items-start gap-8">
            <p>
              <span className="font-bold">Do you have 24 hours of light? </span>
              <br />
              Say goodbye to power cuts and noisy generators. GreenPX is a
              portable solar battery that keeps your lights, TV, and other
              devices running—at home, in your shop, or anywhere. Just unbox,
              charge, and have power 24/7.
            </p>
            <p>
              <span className="font-bold">GreenPX</span> gives you{" "}
              <span className="text-brandFadeGreen font-bold">
                silent and affordable Power.
              </span>{" "}
              What more could you possibly ask for?
            </p>
            <p>
              <span className="font-bold">Why GreenPX?</span>
              Click the button below to learn more about GreenPX.
            </p>
            <WideButton variant="white" title="Learn More" className="px-30" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearnMore;
