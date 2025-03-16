import Image from "next/image";
import React from "react";

interface IServiceItem {
  image: string;
  title: string;
  description: string;
}

const ServiceItem: React.FC<IServiceItem> = ({ image, title, description }) => {
  return (
    <div className="bg-white flex flex-col flex-shrink-0 gap-2 items-start overflow-hidden">
      <div className="relative h-64 md:h-96 w-full">
        <Image
          src={image}
          alt="Solar Installation"
          fill
          sizes="(max-width: 768px) 100vw, 30vw"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="flex-shrink-0">
        <h2 className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-3">
          {title}
        </h2>
        <p className="text-brandGray text-sm md:text-md xl:text-base">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ServiceItem;
