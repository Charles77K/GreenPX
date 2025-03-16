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
    green: "bg-brandGreen text-white",
    white: "bg-brandFadeBlue text-black",
  };
  return (
    <button
      className={`text-sm md:text-base font-semibold py-4 px-8 md:py-6 md:px-12 rounded-2xl ${className} ${variants[variant]}`}
    >
      {title}
    </button>
  );
};

export default WideButton;
