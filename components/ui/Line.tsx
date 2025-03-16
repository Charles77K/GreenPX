import React from "react";

const Line = ({ color }: { color: string }) => {
  return <div className={`w-20 h-[1.5px] ${color}`} />;
};

export default Line;
