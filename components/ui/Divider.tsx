import { cn } from "@/lib/utils";
import React from "react";

const Divider = ({ className }: { className?: string }) => {
  return <hr className={cn("w-full bg-brandGray h-[1.5px] my-4", className)} />;
};

export default Divider;
