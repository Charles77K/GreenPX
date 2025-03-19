import React from "react";
import Image from "next/image";
import HorizontalScroll from "./HorizontalScroll";
import ArrowRight from "../ui/ArrowRight";

interface IProductCard {
  price: string;
  image: string;
  title: string;
  capacity: string;
  batteryCapacity: string;
  solarCapacity: string;
  runtime: string;
  categories: string[];
}

const ProductCard: React.FC<IProductCard> = ({
  price,
  image,
  title,
  capacity,
  batteryCapacity,
  solarCapacity,
  runtime,
  categories,
}) => {
  return (
    <div className="p-4 w-full border border-brandGray/40">
      {/* headers with price  */}
      <div className="flex-between mb-4">
        <p className="bg-brandFadeGreen/30 text-brandGreen px-2 py-1">
          In stock
        </p>
        <p className="text-black font-bold">₦{price}</p>
      </div>
      {/* main content */}
      <section className="flex flex-col items-start gap-4">
        {/* product image with name */}
        <div>
          <Image
            src={image}
            alt="GreenPX-Solar Generator"
            width={200}
            height={200}
            className="rounded-2xl"
          />
          <p className="underline font-bold text-lg mt-4 md:text-3xl">
            {title}
          </p>
        </div>
        {/* product description */}
        <ul className="flex items-start text-sm font-medium text-brandGray">
          <div className="flex flex-col space-y-2">
            <li>Inverter Capacity:</li>
            <li>Battery Capacity:</li>
            <li>Solar Capacity:</li>
            <li>Runtime:</li>
          </div>
          <div className="flex flex-col space-y-2 ml-4">
            <li className="bg-brandFadeBlue w-fit px-2">{capacity}</li>
            <li className="bg-brandFadeBlue w-fit px-2">{batteryCapacity}</li>
            <li className="bg-brandFadeBlue w-fit px-2">{solarCapacity}</li>
            <li className="bg-brandFadeBlue w-fit px-2">{runtime}</li>
          </div>
        </ul>

        {/* infinite scroll categories */}
        <HorizontalScroll
          speed="fast"
          direction="left"
          className="flex items-center gap-3"
        >
          {categories.map((item, idx) => (
            <p key={idx} className="text-black bg-brandFadeBlue p-2 rounded-xl">
              {item}
            </p>
          ))}
        </HorizontalScroll>
        {/* order button */}
        <div className="group bg-black px-6 cursor-pointer rounded-xl text-sm py-3 text-white flex items-center gap-4 transition-all ease-in-out duration-300 hover:pr-10 relative">
          <p>Place An Order</p>
          <p className="absolute opacity-0 transform translate-x-0 group-hover:opacity-100 group-hover:translate-x-3 transition-all ease-in-out duration-300 right-4">
            <ArrowRight color="white" height="20" width="20" />
          </p>
        </div>
      </section>
    </div>
  );
};

export default ProductCard;
