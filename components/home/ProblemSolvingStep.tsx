import React from "react";

interface IProblemSolvingStep {
  count: number;
  title: string;
  description: string;
}

const ProblemSolvingStep: React.FC<IProblemSolvingStep> = ({
  count,
  title,
  description,
}) => {
  const [title1, title2] = title.includes(",") ? title.split(",") : [title, ""];

  return (
    <div className="flex flex-col items-start gap-3 h-auto">
      <h3 className="font-light text-base text-brandGreen">STEP {count}</h3>
      <h1 className="font-semibold text-lg md:text-2xl text-black">
        {title1}
        {title2 && <span className="text-[#F2F2F2]">, {title2}</span>}
      </h1>
      <p className="text-brandGray text-sm md:text-lg w-full md:max-w-lg">
        {description}
      </p>
    </div>
  );
};

export default ProblemSolvingStep;
