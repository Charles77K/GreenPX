"use client";

import React from "react";
import { ArrowLeft } from "./Icons";
import Image from "next/image";
import WideButton from "../ui/WideButton";
import { useRouter } from "next/navigation";

export interface Product {
  slug: string;
  price: string;
  usage: string;
  availability: "In stock" | "Out of stock";
  image: string;
  productImage: string;
  warranty: string;
  title: string;
  capacity: string;
  whatsappLink: string;
  batteryCapacity: string;
  solarCapacity: string;
  runtime: string;
  description: string;
  categories: string[];
  specifications: string[];
  features: string[];
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

export const sendMessage = (link: string) => {
  const whatsappUrl = link;
  window.open(whatsappUrl, "_blank");
};

const ProductDetails = ({ currentProduct }: { currentProduct: Product }) => {
  const router = useRouter();
  return (
    <>
      <section className="border-[1px] border-brandGray/30">
        {/* cta and go back */}
        <div className="flex-between w-full px-4 mt-3">
          {/* go back button */}
          <div
            onClick={() => router.back()}
            className="flex items-center gap-2 cursor-pointer w-fit"
          >
            <ArrowLeft />
            <p className="text-black text-sm">Go Back</p>
          </div>

          {/* Buy now */}
          <div
            onClick={() => sendMessage(currentProduct.whatsappLink)}
            className="hidden xs:block"
          >
            <WideButton
              variant="green"
              title="Buy It Now"
              className="py-3x md:py-4 md:text-xs"
            />
          </div>
        </div>

        <div className="w-full h-[1px] bg-brandGray/30 my-3"></div>

        {/* Product Info */}
        <div className="flex flex-col md:flex-row items-start w-full">
          <div className="flex flex-col items-center justify-center p-2 md:p-4  w-full md:flex-1 mb-6 md:mb-0">
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
            <div className="flex mt-6 items-center gap-5 overflow-x-auto w-full justify-center">
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

          {/* Divider line for mobile only */}
          <div className="w-full h-[1px] bg-brandGray/30 my-4 md:hidden"></div>

          {/* Divider line for desktop - vertical */}
          <div className="hidden md:block w-[1px] h-auto self-stretch bg-brandGray/30 mx-6"></div>

          {/* product details */}
          <div className="flex flex-col items-start p-2 md:p-4 gap-5 w-full md:flex-1">
            {/* product title and availability */}
            <div className="flex-between w-full">
              <p className="text-3xl font-semibold">{currentProduct?.title}</p>
              <p className="bg-brandFadeGreen/20 rounded-md text-sm px-2 py-1 text-brandGreen">
                {currentProduct?.availability}
              </p>
            </div>

            {/* price */}
            <p className="font-bold text-sm text-brandGray md:text-lg">
              {currentProduct?.usage}
            </p>

            {/* product description */}
            {currentProduct?.description.includes("+") ? (
              currentProduct?.description.split("+").map((desc, idx) => (
                <p
                  key={idx}
                  className="text-sm md:text-base 2xl:text-lg text-brandGray leading-tight font-medium"
                >
                  {desc}
                </p>
              ))
            ) : (
              <p className="text-sm md:text-base 2xl:text-lg text-brandGray leading-tight font-medium">
                {currentProduct.description}
              </p>
            )}

            {/* categories */}
            <div>
              <h1 className="text-black text-base md:text-lg 2xl:text-xl font-bold mb-2">
                APPLIANCES IT CAN POWER
              </h1>
              <ul className="flex items-center flex-wrap gap-2">
                {currentProduct?.categories.map((item, idx) => (
                  <li
                    key={idx}
                    className="text-brandGray py-1 px-2 bg-brandFadeGray text-xs font-semibold"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* product specifications */}
            <div>
              <h1 className="text-black text-base md:text-lg 2xl:text-xl font-bold mb-2">
                SPECS
              </h1>
              <ul className="list-disc space-y-2 px-4 text-base">
                {currentProduct?.specifications?.map((item, idx) => {
                  const [productTitle, productBody] = item.split(":");

                  // Special handling for DC Ports
                  if (productTitle.trim() === "DC Ports") {
                    return (
                      <li key={idx} className="text-black font-bold">
                        {`${productTitle}:`}
                        <ul className="list-disc ml-5 my-1">
                          {productBody.split(",").map((port, portIdx) => (
                            <li
                              key={portIdx}
                              className="font-medium text-brandGray"
                            >
                              {port.trim()}
                            </li>
                          ))}
                        </ul>
                      </li>
                    );
                  }

                  // Regular rendering for other specifications
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
            </div>

            {/* product features */}
            <div>
              <h1 className="text-black text-base md:text-lg 2xl:text-xl font-bold mb-2">
                FEATURES
              </h1>
              <ul className="list-disc space-y-2 px-4 text-base">
                {currentProduct?.features?.map((item, idx) => {
                  return (
                    <li
                      key={idx}
                      className="text-black text-sm md:text-sm 2xl:text-base"
                    >
                      {item}
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* cta */}
            <div
              className="w-full mt-2"
              onClick={() => sendMessage(currentProduct.whatsappLink)}
            >
              <WideButton
                variant="green"
                title="Buy It Now"
                className="py-5 md:py-5 md:text-xs w-full md:w-fit"
              />
            </div>
          </div>
          {/* end product details */}
        </div>
        {/* end product info */}
      </section>
    </>
  );
};

export default ProductDetails;
