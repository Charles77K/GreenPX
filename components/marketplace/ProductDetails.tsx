import React from "react";
import { ArrowLeft } from "./Icons";
import Image from "next/image";
import WideButton from "../ui/WideButton";

export interface Product {
  slug: string;
  price: string;
  availability: "In stock" | "Out of stock";
  image: string;
  productImage: string;
  warranty: string;
  title: string;
  capacity: string;
  batteryCapacity: string;
  solarCapacity: string;
  runtime: string;
  description: string;
  categories: string[];
  productInfo: string[];
  reviews: {
    total: number;
    averageRating: number;
    ratings: {
      name: string;
      avatar: string;
      date: string;
      rating: number;
      review: string;
    }[];
  };
}

const ProductDetails = ({ currentProduct }: { currentProduct: Product }) => {
  return (
    <>
      <section className="border-[1px] border-brandGray/30">
        {/* go back button */}
        <div className="flex items-center gap-2 border-b-brandGray/30 pl-4 border-b-[1px] py-3">
          <ArrowLeft />
          <p className="text-black">Go Back</p>
        </div>

        {/* Product Info */}
        <div className="flex items-start p-6">
          <div className="flex flex-col items-center justify-center flex-1">
            {/* warranty */}
            <p className="bg-brandOrange rounded-full px-3 py-1 text-sm text-brandGray mb-5">
              {currentProduct?.warranty}
            </p>
            {/* product image */}
            <Image
              src={currentProduct?.productImage || "image"}
              alt="Product Image"
              width={500}
              height={500}
            />
            <div className="flex mt-6 items-center gap-5">
              {Array.from({ length: 4 }).map((_, idx) => (
                <Image
                  key={idx}
                  src={currentProduct?.image || "Product Image"}
                  alt={currentProduct!.title}
                  width={70}
                  height={70}
                />
              ))}
            </div>
          </div>

          {/* product details */}
          <div className="flex flex-col items-start gap-4 flex-1">
            {/* product title and availability */}
            <div className="flex-between w-full">
              <p className="text-3xl font-semibold">{currentProduct?.title}</p>
              <p className="bg-brandFadeGreen/20 rounded-md text-sm px-2 py-1 text-brandGreen">
                {currentProduct?.availability}
              </p>
            </div>

            {/* price */}
            <p className="font-bold text-3xl">₦{currentProduct?.price}</p>

            {/* categories */}
            <ul className="flex items-center flex-wrap gap-2">
              {currentProduct?.categories.map((item, idx) => (
                <li
                  key={idx}
                  className="text-brandGray py-1 px-2 bg-brandFadeGray text-sm font-semibold"
                >
                  {item}
                </li>
              ))}
            </ul>

            {/* product description */}
            <p className="text-lg text-brandGray font-medium">
              {currentProduct?.description}
            </p>

            {/* product features */}
            <ul className="list-disc space-y-2 px-4">
              {currentProduct?.productInfo?.map((item, idx) => {
                const [productTitle, productBody] = item.split(":");
                return (
                  <li key={idx} className="text-black font-bold">
                    {`${productTitle}:`}{" "}
                    <span className="font-medium text-brandGray">
                      {productBody}
                    </span>
                  </li>
                );
              })}
            </ul>

            {/* cta */}
            <WideButton
              variant="green"
              title="Buy It Now"
              className="py-4 md:py-5 md:text-xs"
            />
          </div>
          {/* end product details */}
        </div>
        {/* end product info */}
      </section>
    </>
  );
};

export default ProductDetails;
