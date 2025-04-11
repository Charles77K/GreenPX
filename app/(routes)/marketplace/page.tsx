import React from "react";

import ProductCard from "@/components/marketplace/ProductCard";
import { PRODUCT_CARD_ITEM } from "@/components/marketplace/static";
import ProductBottomCard from "@/components/marketplace/ProductBottomCard";
import { Metadata } from "next";
import { metadataConfig } from "@/app/metadata";

export const metadata: Metadata = metadataConfig.marketplace;

const page = () => {
  return (
    <div className="flex-col-center px-4 md:px-16 xl:px-32 py-16">
      <div className="flex-col-center pt-20 pb-16 px-4 text-center">
        <h1 className="text-5xl md:-tracking-[4px] md:text-6xl lg:text-7xl xl:text-8xl font-bold">
          Our <br /> Products
        </h1>
        <p className="max-w-3xl mt-4 text-sm text-brandGray">
          Welcome to the GreenPX Marketplace, where you can explore and purchase
          customizable solar generators designed to fit your home, office, or
          business needs
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 mx-auto max-w-5xl">
        {PRODUCT_CARD_ITEM.map((item, idx) => (
          <ProductCard {...item} key={idx} />
        ))}
        <ProductBottomCard className="md:col-span-3" />
      </div>
    </div>
  );
};

export default page;
