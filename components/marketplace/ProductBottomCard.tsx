"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import ArrowRight from "../ui/ArrowRight";
import { sendMessage } from "./ProductDetails";

const ProductBottomCard = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "flex-between gap-5 flex-col md:flex-row px-4 md:px-10 xl:px-16 py-10 bg-brandGreen",
        className
      )}
    >
      {/* image and title  */}
      <div className="flex-col flex items-center">
        <Image
          src={"/marketplace/product.png"}
          alt="Product"
          width={160}
          height={160}
        />
        <h1 className="underline text-white text-center text-2xl font-bold">
          Customize Your GreenPX Unit
        </h1>
      </div>

      {/* cta and description*/}
      <div className="flex flex-col md:flex-row gap-5 items-center">
        <div className="max-w-lg">
          <p className="text-white">
            Looking for a personalized power solution? Choose the battery
            capacity, solar panel size, and additional features that suit your
            needs. Our team will size your load, recommend the best setup, and
            provide a custom quote.
          </p>
        </div>
        <div
          onClick={() => sendMessage("https://wa.link/9e068t")}
          className="flex-col-center bg-white rounded-full hover:scale-105 cursor-pointer transition-all duration-300 ease-in-out aspect-square p-4 w-full max-w-44"
        >
          <p className="text-center text-xs sm:text-sm px-4 font-medium">
            Click Here To Customize Your Oder Now
          </p>
          <p className="mt-2">
            <ArrowRight />
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductBottomCard;
