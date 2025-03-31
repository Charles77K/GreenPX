import React from "react";
import { Product } from "./ProductDetails";
import { formatNumber } from "@/utils/numberFormatter";
import ReviewsCount from "./ReviewsCount";
import { Star } from "./Icons";
import Divider from "../ui/Divider";

const Reviews = ({ currentProduct }: { currentProduct: Product }) => {
  return (
    <>
      <section className="mt-10 px-10">
        {/* header */}
        <header className="flex-between">
          <h1 className="text-xl md:text-2xl 2xl:text-4xl font-bold">
            Reviews
          </h1>
          <div className="p-2 border rounded-md border-brandGray/30">
            <p className="text-sm font-medium">March 2021 - February 2022</p>
          </div>
        </header>

        {/* total reviews , average rating and reviews count*/}
        <div className="flex-between mt-10">
          {/* total reviews */}
          <div className="flex-col gap-2 flex">
            <p className="text-brandGray">Total Reviews</p>
            <p className="font-bold text-2xl md:text-4xl">
              {formatNumber(currentProduct?.reviews?.total)}
            </p>
          </div>

          {/* average Rating */}
          <div className="flex-col gap-2 flex">
            <p className="text-brandGray">Average Rating</p>
            <div className="flex items-center gap-2">
              <p className="font-bold text-2xl md:text-4xl">
                {currentProduct?.reviews?.averageRating}
              </p>
              <ul className="flex items-center gap-[2px]">
                {Array.from({
                  length: Number(
                    currentProduct?.reviews?.averageRating.toFixed(0)
                  ),
                }).map((_, index) => (
                  <Star size="medium" key={index} variant="gold" />
                ))}
              </ul>
            </div>
          </div>

          {/* reviews count */}
          <div className="space-y-2">
            <ReviewsCount />
            <ReviewsCount />
            <ReviewsCount />
            <ReviewsCount />
            <ReviewsCount />
          </div>
        </div>

        <Divider className="my-12" />

        {/* user reviews */}
      </section>
    </>
  );
};

export default Reviews;
