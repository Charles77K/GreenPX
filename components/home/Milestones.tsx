import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

const extractNumberAndSuffix = (value: string) => {
  const match = value.match(/^(\d+)(.*)$/);
  return match
    ? { number: parseInt(match[1]), suffix: match[2] }
    : { number: 0, suffix: "" };
};

const Milestones = ({
  number,
  description,
  className,
}: {
  number: string;
  description: string;
  className?: string;
}) => {
  const { number: target, suffix } = extractNumberAndSuffix(number);
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const incrementTime = 20;
    const steps = duration / incrementTime;
    const increment = target / steps;

    const counter = setInterval(() => {
      start += increment;
      if (start >= target) {
        clearInterval(counter);
        setCount(target);
      } else {
        setCount(Math.floor(start));
      }
    }, incrementTime);

    return () => clearInterval(counter);
  }, [target]);

  return (
    <div
      className={cn("flex flex-col items-start gap-1 text-white", className)}
    >
      <h1 className="font-bold font-onest text-lg md:text-xl xl:text-2xl 2xl:text-3xl">
        {count}
        {suffix}
      </h1>
      <p className="text-xs md:text-sm xl:text-lg 2xl:text-xl">{description}</p>
    </div>
  );
};

export default Milestones;
