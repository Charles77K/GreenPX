import { cn } from "@/lib/utils";
import React from "react";

const WideButton = ({
  title,
  variant,
  className,
}: {
  title: string;
  variant: "black" | "green" | "white";
  className?: string;
}) => {
  const variants = {
    black: "bg-black text-white",
    green:
      "bg-brandGreen text-white hover:bg-black transition-all duration-300 ease-in-out",
    white:
      "bg-brandFadeBlue text-black hover:bg-black hover:text-brandOrange transition-all duration-300 ease-in-out",
  };
  return (
    <button
      className={cn(
        `text-sm md:text-base font-semibold py-4 px-8 md:py-6 md:px-12 rounded-2xl ${variants[variant]}`,
        className
      )}
    >
      {title}
    </button>
  );
};

export default WideButton;
