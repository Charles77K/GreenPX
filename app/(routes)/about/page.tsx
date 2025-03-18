import ProductCard from "@/components/marketplace/ProductCard";
import { PRODUCT_CARD_ITEM } from "@/components/marketplace/static";
import React from "react";

const About = () => {
  return (
    <div className="flex-col-center">
      <div className="flex-col-center pt-32 pb-16 px-4 text-center">
        <h1 className="text-5xl md:-tracking-[4px] md:text-6xl lg:text-7xl xl:text-8xl font-bold">
          Our <br /> Products
        </h1>
        <p className="max-w-3xl mt-4 text-sm text-brandGray">
          Welcome to the GreenPX Marketplace, where you can explore and purchase
          customizable solar generators designed to fit your home, office, or
          business needs
        </p>
      </div>
      <div className="grid grid-cols-3">
        {PRODUCT_CARD_ITEM.map((item, idx) => (
          <ProductCard {...item} key={idx} />
        ))}
      </div>
    </div>
  );
};

export default About;
