"use client";

import React from "react";
import Line from "../ui/Line";
import Image from "next/image";

const Gallery = () => {
  // Split images into two rows for the ticker
  const row1Images = [
    "/about/gallery.jpg",
    "/about/gallery1.jpg",
    "/about/gallery2.jpg",
    "/about/gallery3.jpg",
    "/about/gallery4.jpg",
    "/about/gallery5.jpg",
    "/about/gallery6.jpg",
    "/about/gallery7.jpg",
  ];

  const row2Images = [
    "/about/gallery8.jpg",
    "/about/gallery9.jpg",
    "/about/gallery10.jpg",
    "/about/gallery11.webp",
    "/about/gallery12.png",
    "/about/gallery13.webp",
    "/about/gallery14.jpg",
    "/about/gallery15.png",
    "/about/gallery16.jpg",
  ];

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

      {/* Desktop Grid Gallery */}
      <div className="hidden md:block">
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
              src="/about/gallery11.webp"
              alt="Green-PX team"
              fill
              className="object-cover rounded-xl"
            />
          </div>

          <div className="relative col-span-2 row-span-2 rounded-xl h-full w-full">
            <Image
              src="/about/gallery13.webp"
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
      </div>

      {/* Mobile Ticker Gallery */}
      <div className="block md:hidden mt-8 overflow-hidden">
        {/* First row - scroll left */}
        <div className="relative mb-4">
          <div className="scroll-wrapper scroll-left">
            {[...row1Images, ...row1Images].map((src, index) => (
              <div
                key={index}
                className="relative flex-shrink-0 w-64 h-64 mx-1 rounded-lg overflow-hidden"
              >
                <Image
                  src={src}
                  alt="Green-PX team"
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Second row - scroll right */}
        <div className="relative">
          <div className="scroll-wrapper scroll-right">
            {[...row2Images, ...row2Images].map((src, index) => (
              <div
                key={index}
                className="relative flex-shrink-0 w-64 h-64 mx-1 rounded-lg overflow-hidden"
              >
                <Image
                  src={src}
                  alt="Green-PX team"
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .scroll-wrapper {
          display: flex;
          width: max-content;
        }

        .scroll-left {
          animation: scroll-left 40s linear infinite;
        }

        .scroll-right {
          animation: scroll-right 40s linear infinite;
        }

        @keyframes scroll-left {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes scroll-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0%);
          }
        }

        .scroll-left:hover,
        .scroll-right:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Gallery;
