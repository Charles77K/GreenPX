import React from "react";
import Line from "../ui/Line";
import InfiniteScrollTestimonial from "./InfiniteScrollTestimonial";
import TestimonialCard from "./TestimonialCard";
import Image from "next/image";

const Testimonials = () => {
  return (
    <div className="text-black py-20 p-20 overflow-hidden w-full">
      <section className="flex-col-center gap-5">
        <Line color="bg-brandGreen" />
        <h4 className="text-5xl font-medium text-center">
          What Our Customers Say
        </h4>
        <p className="max-w-2xl text-brandGray text-center text-base md:text-lg">
          Join our community of satisfied customers and experience the power of
          clean energy today!
        </p>
      </section>
      {/* <section className="flex flex-col items-center gap-5">
        <li>
          <Image
            src={"/home/user-1.png"}
            alt="user-icon-1"
            width={200}
            height={200}
          />
        </li>
        <TestimonialCard
          title="Hassan AI"
          comment="Green Potentia has transformed 
          our energy use. The GreenPX unit is 
          reliable, affordable, and perfect for 
          our needs."
        />
      </section> */}
      <InfiniteScrollTestimonial speed="fast">
        <TestimonialCard
          title="Hassan AI"
          comment="Green Potentia has transformed 
          our energy use. The GreenPX unit is 
          reliable, affordable, and perfect for 
          our needs."
        />
        <TestimonialCard
          title="Sophia Lee"
          comment="Switching to GreenPX was the best 
          decision for our family. We now 
          enjoy uninterrupted power and 
          contribute to a greener planet"
        />
        <li>
          <Image
            src={"/home/user-1.png"}
            alt="user-icon-1"
            width={350}
            height={200}
          />
        </li>

        <TestimonialCard
          title="Luca Rossi."
          comment="Green Potentia has transformed 
          our energy use. The GreenPX unit is 
          reliable, affordable, and perfect for 
          our needs."
        />
        <TestimonialCard
          title="Priya Patel."
          comment="Switching to GreenPX was the best 
          decision for our family. We now 
          enjoy uninterrupted power and 
          contribute to a greener planet."
        />
        <li className="rounded-[2rem]">
          <Image
            src={"/home/user-3.png"}
            alt="user-icon-1"
            width={350}
            height={200}
            className="rounded-[2rem]"
          />
        </li>

        <TestimonialCard
          title="John D."
          comment="Green Potentia has transformed 
          our energy use. The GreenPX unit is 
          reliable, affordable, and perfect for 
          our needs."
        />
        <TestimonialCard
          title="Emily Chen."
          comment="Switching to GreenPX was the best 
          decision for our family. We now 
          enjoy uninterrupted power and 
          contribute to a greener planet."
        />
        <li>
          <Image
            src={"/home/user-2.png"}
            alt="user-icon-1"
            width={350}
            height={200}
          />
        </li>
      </InfiniteScrollTestimonial>
      {/* <InfiniteScrollTestimonial
        speed="fast"
        direction="right"
        className="hidden md:block"
      >
        <TestimonialCard
          title="Hassan AI"
          comment="Green Potentia has transformed 
          our energy use. The GreenPX unit is 
          reliable, affordable, and perfect for 
          our needs."
        />
        <TestimonialCard
          title="Sophia Lee"
          comment="Switching to GreenPX was the best 
          decision for our family. We now 
          enjoy uninterrupted power and 
          contribute to a greener planet"
        />
        <li>
          <Image
            src={"/home/user-1.png"}
            alt="user-icon-1"
            width={200}
            height={200}
          />
        </li>

        <TestimonialCard
          title="Luca Rossi."
          comment="Green Potentia has transformed 
          our energy use. The GreenPX unit is 
          reliable, affordable, and perfect for 
          our needs."
        />
        <TestimonialCard
          title="Priya Patel."
          comment="Switching to GreenPX was the best 
          decision for our family. We now 
          enjoy uninterrupted power and 
          contribute to a greener planet."
        />
        <li className="rounded-[2rem]">
          <Image
            src={"/home/user-3.png"}
            alt="user-icon-1"
            width={200}
            height={200}
            className="rounded-[2rem]"
          />
        </li>

        <TestimonialCard
          title="John D."
          comment="Green Potentia has transformed 
          our energy use. The GreenPX unit is 
          reliable, affordable, and perfect for 
          our needs."
        />
        <TestimonialCard
          title="Emily Chen."
          comment="Switching to GreenPX was the best 
          decision for our family. We now 
          enjoy uninterrupted power and 
          contribute to a greener planet."
        />
        <li>
          <Image
            src={"/home/user-2.png"}
            alt="user-icon-1"
            width={200}
            height={200}
          />
        </li>
      </InfiniteScrollTestimonial> */}
    </div>
  );
};

export default Testimonials;
