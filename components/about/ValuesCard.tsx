import { cn } from "@/lib/utils";
import React from "react";

interface IValuesCard {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
  desc?: string;
}

const ValuesCard = ({
  icon,
  title,
  desc,
  description,
  className,
}: IValuesCard) => {
  return (
    <div
      className={cn(
        "rounded-3xl bg-black h-auto w-full hover:skew-y-2 transition-all ease-in-out duration-300 text-white p-6 flex flex-col items-start gap-5",
        className
      )}
    >
      {/* icon */}
      <div className="p-2 bg-brandGreen rounded-full">{icon}</div>
      {/* header */}
      <h4 className="font-bold text-xl md:text-2xl">{title}</h4>
      {/* description */}
      <p
        className={cn(
          "text-[#BDBDBD] w-full md:max-w-sm text-xs md:text-sm xl:text-base",
          desc
        )}
      >
        {description}
      </p>
    </div>
  );
};

export default ValuesCard;
