import { cn } from "@/lib/utils";
import React from "react";

const Milestones = ({
  number,
  description,
  className,
}: {
  number: string;
  description: string;
  className?: string;
}) => {
  return (
    <div
      className={cn("flex flex-col items-start gap-1 text-white", className)}
    >
      <h1 className="font-bold font-onest text-lg md:text-xl">{number}</h1>
      <p className="text-xs">{description}</p>
    </div>
  );
};

export default Milestones;
