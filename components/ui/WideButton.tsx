import { cn } from "@/lib/utils";
import React from "react";

const WideButton = ({
  title,
  variant,
  className,
  ...props
}: {
  title: string;
  variant: "black" | "green" | "white";
  className?: string;
}) => {
  const variants = {
    black: "bg-black text-white",
    green:
      "bg-brandGreen text-white hover:bg-black hover:text-brandOrange transition-all duration-300 ease-in-out",
    white:
      "bg-brandFadeBlue text-black hover:bg-black hover:text-brandOrange transition-all duration-300 ease-in-out",
  };
  return (
    <button
      {...props}
      className={cn(
        `text-sm md:text-base font-semibold py-6 px-8 md:py-8 md:px-12 rounded-2xl ${variants[variant]}`,
        className
      )}
    >
      {title}
    </button>
  );
};

export default WideButton;
