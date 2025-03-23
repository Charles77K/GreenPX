import React from "react";
import Line from "../ui/Line";
import Divider from "../ui/Divider";
import { PROBLEM_SOLVING_STEPS } from "./static";
import ProblemSolvingStep from "./ProblemSolvingStep";
import WideButton from "../ui/WideButton";

const ProblemSolving = () => {
  return (
    <div className="bg-brandFadeBlue text-black p-4 sm:p-8 md:p-16 lg:p-20 xl:p-24">
      <div className="responsive-container">
        {/* header */}
        <section className="flex flex-col items-start gap-3">
          <Line color="bg-black" />
          <h2 className="text-3xl md:text-6xl font-bold max-w-5xl -tracking-[2px]">
            Here&apos;s How We Fix Your Energy Problems...
          </h2>
          <p className="text-brandGray">... in 3 steps</p>
        </section>
        <Divider className="my-20" />
        {/* steps */}
        <section className="grid grid-cols-1 md:grid-cols-3 items-start gap-8">
          {PROBLEM_SOLVING_STEPS.map((step, index) => (
            <ProblemSolvingStep key={index} {...step} />
          ))}
        </section>
        <div className="flex-center mt-16">
          <WideButton
            title="Get Started"
            className="px-16 md:px-28"
            variant="green"
          />
        </div>
      </div>
    </div>
  );
};

export default ProblemSolving;
