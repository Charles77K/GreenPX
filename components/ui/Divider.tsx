import { cn } from "@/lib/utils";
import React from "react";

const Divider = ({ className }: { className?: string }) => {
  return (
    <div className={cn("w-full bg-brandGray h-[0.5px] my-4", className)} />
  );
};

export default Divider;
