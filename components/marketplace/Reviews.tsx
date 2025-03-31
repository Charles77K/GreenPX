import React from "react";
import { Product } from "./ProductDetails";
import { formatNumber } from "@/utils/numberFormatter";
import ReviewsCount from "./ReviewsCount";
import { Star } from "./Icons";
import Divider from "../ui/Divider";
import Image from "next/image";

const Reviews = ({ currentProduct }: { currentProduct: Product }) => {
  return (
    <>
      <section className="mt-10 md:px-10">
        {/* header */}
        <header className="flex-between flex-wrap">
          <h1 className="text-xl md:text-2xl 2xl:text-4xl font-bold">
            Reviews
          </h1>
          <div className="p-2 border rounded-md border-brandGray/30">
            <p className="text-xs md:text-sm font-medium">
              March 2021 - February 2022
            </p>
          </div>
        </header>

        {/* total reviews , average rating and reviews count*/}
        <div className="flex flex-col sm:flex-row md:justify-between gap-4 mt-10">
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
            <ReviewsCount
              count={5}
              reviews={"2.4k"}
              percentage={100}
              variant="gold"
            />
            <ReviewsCount
              count={4}
              reviews={"1"}
              percentage={10}
              variant="gold"
            />
            <ReviewsCount
              count={3}
              reviews={"0"}
              percentage={0}
              variant="gray"
            />
            <ReviewsCount
              count={2}
              reviews={"0"}
              percentage={0}
              variant="gray"
            />
            <ReviewsCount
              count={1}
              reviews={"0"}
              percentage={0}
              variant="gray"
            />
          </div>
        </div>

        <Divider className="my-12" />

        {/* user reviews */}
        <div className="flex flex-col items-start gap-6 w-full">
          {currentProduct?.reviews.ratings.map((item, idx) => (
            <div key={idx} className="w-full">
              <div className="flex flex-col md:flex-row items-start gap-6 md:gap-10 w-full">
                <section className="flex gap-4 md:min-w-[250px]">
                  {/* user image */}
                  <div className="flex-shrink-0">
                    <Image
                      src={item.avatar}
                      alt={item.name}
                      width={70}
                      height={70}
                    />
                  </div>
                  <div>
                    {/* user name */}
                    <p className="text-black text-lg md:text-2xl font-bold">
                      {item.name}
                    </p>
                    {/* date */}
                    <p className="text-sm text-gray-600 mt-1">{item.date}</p>
                    {/* rating */}
                    <ul className="flex items-center gap-[2px] mt-2">
                      {Array.from({
                        length: Number(item.rating),
                      }).map((_, index) => (
                        <Star size="small" key={index} variant="gold" />
                      ))}
                    </ul>
                  </div>
                </section>
                <section className="w-full">
                  <p className="text-brandGray text-sm md:text-base max-w-lg">
                    {item.review}
                  </p>
                </section>
              </div>
              {idx < currentProduct.reviews.ratings.length - 1 && (
                <Divider className="my-6 md:my-10 w-full" />
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Reviews;
