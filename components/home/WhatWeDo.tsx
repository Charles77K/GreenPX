import React from "react";
import Line from "../ui/Line";
import WhatWeDoItem from "./WhatWeDoItem";
import Image from "next/image";

const WhatWeDo = () => {
  return (
    <div className="py-20 p-4 sm:px-10 md:px-20 lg:px-36">
      {/* header */}
      <div className="flex-col-center gap-4">
        <Line color="bg-black" />

        <h1 className="font-semibold text-center text-4xl md:text-6xl">
          Stop Wasting Time and Money
        </h1>
        <p className="text-brandGray text-center text-base md:text-lg">
          We&apos;re Your Renewable Energy Experts—From Start to Forever
        </p>
      </div>
      {/* flex container with an image and our services */}
      <div className="flex mt-16 flex-col lg:flex-row items-center gap-8 md:gap-16 ">
        {/* Our Services */}
        <div className="flex flex-1 flex-col items-start">
          <h1 className="text-2xl font-light mb-5 text-brandGreen">
            Here&apos;s what we can do for you:
          </h1>
          {/* services item */}
          <WhatWeDoItem
            title="Feasibility Studies/Planning"
            description="No more guesswork. Let's study your location, budget, and power
           needs to design a system that actually saves you money"
          />
          <hr className="w-full bg-brandGray h-[1.5px] my-4" />
          <WhatWeDoItem
            title="Project Implementation"
            description="Let's handle the headaches that come with solar installation and maintenance and you get 24/7"
          />
          <hr className="w-full bg-brandGray h-[1.5px] my-4" />
          <WhatWeDoItem
            title="Learn to Power Your Future"
            description="Let's help you understand how to save money with energy tips, Fix small issues yourself and make smart upgrades"
          />
          <hr className="w-full bg-brandGray h-[1.5px] my-4" />
          <WhatWeDoItem
            title="Maintenance Services"
            description="Let's keep your power flowing 24/7 and ensure optimal performance 
            of your energy system. Whenever you need us, we'll be one call 
            away."
          />
        </div>
        {/* Image */}
        <div className="min-h-64 flex-1 rounded-3xl">
          <Image
            src="/home/services.png"
            alt="power-generator"
            width={550}
            height={550}
            // fill
            // sizes="(max-width: 768px) 100vw, 50vw"
            // style={{ objectFit: "cover" }}
            className="rounded-3xl"
          />
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
