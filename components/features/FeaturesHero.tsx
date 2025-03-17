import React from "react";
import WideButton from "../ui/WideButton";
import { MILESTONES } from "../home/static";
import Milestones from "../home/Milestones";

const FeaturesHero = () => {
  return (
    <div
      className="relative text-white flex flex-col items-center px-4 py-24 md:py-32 bg-cover bg-center min-h-[80vh] justify-between"
      style={{
        backgroundImage: `url(/features/features-hero.jpeg)`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/65" aria-hidden="true" />

      {/* Main content wrapper */}
      <div className="relative w-full flex flex-col items-center justify-between pt-20 flex-grow z-10">
        {/* Hero content */}
        <main className="flex flex-col items-center max-w-4xl mx-auto mb-16 md:mb-24">
          <h3 className="text-brandGray bg-brandOrange w-fit rounded-full p-1 text-xs">
            Introducing our Flagship Product
          </h3>
          <h1 className="text-5xl md:text-6xl xl:text-8xl -tracking-[2px] font-black">
            GreenPX
          </h1>
          <h2 className="font-extralight -mt-3 text-3xl md:text-5xl -tracking-[2px] lg:text-6xl">
            (Solar Generator)
          </h2>
          <p className="text-center max-w-[30rem] mt-2 text-sm">
            GreenPX is a silent, solar-powered battery box that keeps your
            lights, phone, and other devices running. Just charge it with
            sunlight (or your wall socket) and say goodbye to noisy generators
          </p>
          {/* cta btn */}
          <WideButton
            title="Place An Order"
            variant="green"
            className="text-xs md:text-xs mt-5"
          />
        </main>

        {/* Milestones section */}
        <div className="relative w-fit mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 items-start gap-4 md:gap-10 p-4 md:p-6 rounded-2xl bg-[#FFFFFF1A]">
            {MILESTONES.map((milestone) => (
              <Milestones
                className="flex flex-col items-start"
                number={milestone.number}
                description={milestone.description}
                key={milestone.number}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesHero;
