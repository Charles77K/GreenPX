import React from "react";
import { FaStar } from "react-icons/fa6";

interface ITestimonials {
  title: string;
  comment: string;
}

const TestimonialCard: React.FC<ITestimonials> = ({ title, comment }) => {
  return (
    <div className="flex flex-col gap-5 min-h-[280px] max-w-[380px] w-full h-auto p-8 drop-shadow-md rounded-[2rem] border-2 overflow-hidden">
      <section>
        <h1 className="text-base md:text-xl mb-2 font-semibold text-brandGray">
          {title}
        </h1>
        <ul className="flex gap-1">
          {Array.from({ length: 5 }).map((_, idx) => (
            <li key={idx}>
              <FaStar color="#F7A900" size={25} />
            </li>
          ))}
        </ul>
      </section>
      <p className="text-base md:text-lg max-w-xs md:mt-4 text-brandGray">
        {comment}
      </p>
    </div>
  );
};

export default TestimonialCard;
