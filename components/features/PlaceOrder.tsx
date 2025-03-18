import React from "react";
import WideButton from "../ui/WideButton";

const PlaceOrder = () => {
  return (
    <div className="bg-brandGreen flex flex-col items-center justify-center md:flex-row gap-10 text-white md:py-20 p-4">
      <div className="flex flex-col gap-2 items-start max-w-lg">
        <h1 className="font-bold text-base xs:text-xl md:text-3xl">
          Get a GreenPX Power Unit
        </h1>
        <p className="text-sm md:text-lg">
          Don’t wait for the next blackout—get 24/7 solar power in 3 minutes. No
          risk, just reward.
        </p>
      </div>
      <div className="">
        <WideButton variant="white" title="Place An Order" />
      </div>
    </div>
  );
};

export default PlaceOrder;
