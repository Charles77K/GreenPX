import React from "react";
import { Star } from "./Icons";

const ReviewsCount = () => {
  return (
    <section className="flex items-center gap-3">
      <div className="flex gap-1 items-center ">
        <Star size="small" variant="silver" />
        <p className="text-xs">5</p>
      </div>
      <div className="w-44 bg-brandOrange rounded-full h-2" />
      <p className="text-xs text-brandGray font-medium">2.4K</p>
    </section>
  );
};

export default ReviewsCount;
