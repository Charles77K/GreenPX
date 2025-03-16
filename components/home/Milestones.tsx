import React from "react";

const Milestones = ({
  number,
  description,
}: {
  number: string;
  description: string;
}) => {
  return (
    <div className="flex-col-center gap-1 text-white">
      <h1 className="font-bold font-onest text-2xl md:text-[32px]">{number}</h1>
      <p className="font-semibold text-base md:text-lg">{description}</p>
    </div>
  );
};

export default Milestones;
