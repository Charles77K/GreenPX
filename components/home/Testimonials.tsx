import React from "react";
import Line from "../ui/Line";
import InfiniteScrollTestimonial from "./InfiniteScrollTestimonial";
import TestimonialCard from "./TestimonialCard";
import Image from "next/image";

const Testimonials = () => {
  return (
    <div className="text-black py-20 px-4 overflow-hidden w-full">
      <section className="flex-col-center gap-3 mb-10">
        <Line color="bg-brandGreen" />
        <h4 className="text-4xl font-bold text-center max-w-sm">
          What Our Customers Say
        </h4>
        <p className="max-w-xl text-brandGray text-center text-sm md:text-base">
          Join our community of satisfied customers and experience the power of
          clean energy today!
        </p>
      </section>

      <InfiniteScrollTestimonial speed="slow" pauseOnHover>
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
            width={370}
            height={370}
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
            width={370}
            height={370}
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
        <TestimonialCard
          title="Ngozi."
          comment="I was skeptical at first, but this unit has been powering my TV, fan and light every night. Love it."
        />
        <li>
          <Image
            src={"/home/user-2.png"}
            alt="user-icon-1"
            width={370}
            height={370}
          />
        </li>
        <TestimonialCard
          title="Azubike."
          comment="Who needs fuel when you'be got a GreenPX? Honestly one of the best decisions i made this year."
        />
        <TestimonialCard
          title="Jide."
          comment="I love the fact that it doesn't make noise. No fumes, no wahala'."
        />
        <TestimonialCard
          title="Azubike."
          comment="Affordable, quiet, and durable. 10/10 from me."
        />
      </InfiniteScrollTestimonial>
      <InfiniteScrollTestimonial
        speed="normal"
        direction="right"
        className="hidden md:block mt-4"
        pauseOnHover
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
        <TestimonialCard
          title="Ebele"
          comment="Green Potentia is really doing something big. This solar gen na correct"
        />
        <li>
          <Image
            src={"/home/user-1.png"}
            alt="user-icon-1"
            width={370}
            height={370}
          />
        </li>

        <TestimonialCard
          title="Ife"
          comment="As a student, this helped me stay on track with my assignments during blackouts."
        />

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
            width={370}
            height={370}
            className="rounded-[2rem]"
          />
        </li>

        <TestimonialCard
          title="Emeka"
          comment="Wasn’t sure if it would work for my home office setup. Turns out, it’s perfect."
        />
        <TestimonialCard
          title="Jide"
          comment="Small but mighty. My GreenPX Mini has been solid."
        />

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
            width={370}
            height={370}
          />
        </li>
      </InfiniteScrollTestimonial>
    </div>
  );
};

export default Testimonials;
