import React from "react";
import { Star } from "./Icons";

const ReviewsCount = ({
  count,
  reviews,
  percentage,
  variant,
}: {
  count: number;
  reviews: string;
  percentage: number;
  variant: "gray" | "gold";
}) => {
  const variants = {
    gray: "bg-gray-200",
    gold: "bg-brandOrange",
  };
  return (
    <section className="flex items-center gap-3">
      <div className="flex gap-1 items-center">
        <Star size="small" variant="silver" />
        <p className="text-xs">{count}</p>
      </div>
      <div className="w-44 rounded-full h-2 overflow-hidden">
        <div
          className={`${variants[variant]} rounded-full h-full`}
          style={{ width: `${percentage}%` }}
        />
      </div>
      <p className="text-xs text-brandGray font-medium">{reviews}</p>
    </section>
  );
};

export default ReviewsCount;
