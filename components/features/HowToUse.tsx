import React from "react";
import Line from "../ui/Line";
import StepsCard from "./StepsCard";
import { STEPS_ITEM } from "./static";

const HowToUse = () => {
  const steps = STEPS_ITEM;
  return (
    <div className="flex-col-center py-16 px-4 bg-brandFadeBlue">
      {/* header */}
      <div className="flex-col-center gap-2 text-black max-w-xl">
        <Line color="bg-brandGreen" />
        <h1 className="font-bold text-3xl md:text-4xl text-center">
          The <span className="text-brandGreen">GreenPX Solar Generator</span>{" "}
          Is Easy To Use
        </h1>
        <p className="text-brandGray text-xs">
          Use our Solar Generator in 4 simple steps
        </p>
      </div>

      {/* steps card */}
      <div className="text-xs mt-8 grid grid-cols-1 md:grid-cols-2 gap-2">
        {/* step 1 */}
        <StepsCard id={steps[0].id} title={steps[0].title}>
          <ul className="text-xs space-y-2 text-[#BDBDBD]">
            <li className="flex items-start">
              <span className="inline-block mr-2 mt-1.5">•</span>
              <span>
                Place GreenPX on any flat surface (no special tools needed).
              </span>
            </li>
            <li className="flex items-start">
              <span className="inline-block mr-2 mt-1.5">•</span>
              <span>
                Charge with sunlight, grid power, or a generator—mix and match.
              </span>
            </li>
            <li className="flex items-start">
              <span className="inline-block mr-2 mt-1.5">•</span>
              <span>Full charge in ~6 hours (depends on sunlight/source).</span>
            </li>
          </ul>
        </StepsCard>

        {/* step 2  */}
        <StepsCard id={steps[1].id} title={steps[1].title}>
          <p className="text-[#BDBDBD] leading-normal">
            Once fully charged, GreenPX provides clean and stable energy to
            power multiple devices at the same time. Simply plug in your
            appliances using the AC outlets, USB ports, or DC outputs. 
          </p>
        </StepsCard>

        {/* step 3 */}
        <StepsCard id={steps[2].id} title={steps[2].title}>
          <p className="text-[#BDBDBD] leading-normal">
            The LED display on the unit displays the current battery status,
            helping you manage your energy consumption effectively. 
          </p>
          <p className="text-[#BDBDBD] leading-normal">
            By keeping an eye on the charge level, you can plan power usage to
            prevent running out of energy at crucial times.
          </p>
        </StepsCard>

        {/* step 4 */}
        <StepsCard id={steps[3].id} title={steps[3].title}>
          <p className="text-[#BDBDBD] leading-normal">
            The GreenPX Solar Generator is designed for mobility and
            flexibility. Its compact and durable design makes it easy to:
          </p>
          <ul className="text-xs text-[#BDBDBD]">
            <li className="flex items-start">
              <span className="inline-block mr-2 mt-1.5">•</span>
              <span>
                Move within your home to power different rooms as needed.
              </span>
            </li>
            <li className="flex items-start">
              <span className="inline-block mr-2 mt-1.5">•</span>
              <span>
                Relocate in your office or shop to support various workstations.
              </span>
            </li>
            <li className="flex items-start">
              <span className="inline-block mr-2 mt-1.5">•</span>
              <span>
                Transport to a remote site or outdoor location for off-grid
                power needs.
              </span>
            </li>
          </ul>
        </StepsCard>

        {/* closing div for the steps card section */}
      </div>
      {/* wrapper div */}
    </div>
  );
};

export default HowToUse;
