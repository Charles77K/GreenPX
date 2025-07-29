import React from "react";
import Line from "../ui/Line";
import Image from "next/image";

const Gallery = () => {
  return (
    <section className="p-4">
      <div className="flex-col-center">
        <Line color="bg-brandGreen mb-3" />
        <h1 className="font-semibold text-5xl">Photo</h1>
        <h1 className="font-semibold text-5xl text-brandGreen">Gallery</h1>
        <p className="text-brandGray text-sm max-w-xl mt-2 font-medium text-center">
          We&apos;re a team of renewable energy experts, designers, strategists,
          and tech innovators united by one goal: delivering sustainable energy
          solutions that power
        </p>
      </div>

      {/* photo gallery */}
      <div className="grid grid-cols-10 grid-rows-6 gap-2 mt-16">
        <div className="relative col-span-2 row-span-2 rounded-xl h-full w-full">
          <Image
            src="/about/gallery.jpg"
            alt="Green-PX team"
            fill
            className="object-cover rounded-xl"
          />
        </div>
        <div className="relative col-span-2 row-span-1 rounded-xl h-full w-full">
          <Image
            src="/about/gallery1.jpg"
            alt="Green-PX team"
            fill
            className="object-cover rounded-xl"
          />
        </div>
        <div className="relative col-span-3 row-span-2 rounded-xl h-full w-full">
          <Image
            src="/about/gallery2.jpg"
            alt="Green-PX team"
            fill
            className="object-cover rounded-xl"
          />
        </div>
        <div className="relative col-span-2 row-span-2 rounded-xl h-full w-full">
          <Image
            src="/about/gallery3.jpg"
            alt="Green-PX team"
            fill
            className="object-cover rounded-xl"
          />
        </div>
        <div className="relative col-span-1 row-span-2 rounded-xl h-full w-full">
          <Image
            src="/about/gallery4.jpg"
            alt="Green-PX team"
            fill
            className="object-cover rounded-xl"
          />
        </div>

        {/* second row */}
        <div className="relative col-span-2 row-span-3  rounded-xl h-full w-full">
          <Image
            src="/about/gallery6.jpg"
            alt="Green-PX team"
            fill
            className="object-cover rounded-xl"
          />
        </div>
        <div className="relative col-span-2 row-span-2 rounded-xl h-full w-full">
          <Image
            src="/about/gallery5.jpg"
            alt="Green-PX team"
            fill
            className="object-cover rounded-xl"
          />
        </div>
        <div className="relative col-span-2 row-span-1 rounded-xl h-[220px] w-full">
          <Image
            src="/about/gallery7.jpg"
            alt="Green-PX team"
            fill
            className="object-cover rounded-xl"
          />
        </div>
        <div className="relative col-span-2 row-span-2 rounded-xl h-full w-full">
          <Image
            src="/about/gallery8.jpg"
            alt="Green-PX team"
            fill
            className="object-cover rounded-xl"
          />
        </div>
        <div className="relative col-span-2 row-span-3 rounded-xl h-full w-full">
          <Image
            src="/about/gallery9.jpg"
            alt="Green-PX team"
            fill
            className="object-cover rounded-xl"
          />
        </div>

        {/* third row */}
        <div className="relative col-span-2 row-span-2 rounded-xl h-full w-full">
          <Image
            src="/about/gallery12.png"
            alt="Green-PX team"
            fill
            className="object-cover rounded-xl"
          />
        </div>

        <div className="relative col-span-3 row-span-2 rounded-xl h-full w-full">
          <Image
            src="/about/gallery10.jpg"
            alt="Green-PX team"
            fill
            className="object-cover rounded-xl"
          />
        </div>

        <div className="relative col-span-1 row-span-1 rounded-xl h-[220px] w-full">
          <Image
            src="/about/gallery11.jpg"
            alt="Green-PX team"
            fill
            className="object-cover rounded-xl"
          />
        </div>

        <div className="relative col-span-2 row-span-2 rounded-xl h-full w-full">
          <Image
            src="/about/gallery13.jpg"
            alt="Green-PX team"
            fill
            className="object-cover rounded-xl"
          />
        </div>

        <div className="relative col-span-2 row-span-1 rounded-xl h-full w-full">
          <Image
            src="/about/gallery15.png"
            alt="Green-PX team"
            fill
            className="object-cover rounded-xl"
          />
        </div>
        <div className="relative col-span-1 row-span-1 rounded-xl h-full w-full">
          <Image
            src="/about/gallery16.jpg"
            alt="Green-PX team"
            fill
            className="object-cover rounded-xl"
          />
        </div>

        <div className="relative col-span-2 row-span-1 rounded-xl h-full w-full">
          <Image
            src="/about/gallery14.jpg"
            alt="Green-PX team"
            fill
            className="object-cover rounded-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
