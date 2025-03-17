import React from "react";
import { FaStar } from "react-icons/fa6";

interface ITestimonials {
  title: string;
  comment: string;
}

const TestimonialCard: React.FC<ITestimonials> = ({ title, comment }) => {
  return (
    <li className="flex flex-col text-[#333333] gap-5 max-h-[270px] max-w-[360px] w-full h-full p-8 drop-shadow-md rounded-[2rem] border-2">
      <section>
        <h1 className="text-base md:text-xl mb-2 font-semibold">{title}</h1>
        <ul className="flex gap-1">
          {Array.from({ length: 5 }).map((_, idx) => (
            <li key={idx}>
              <FaStar color="#CFB302" size={25} />
            </li>
          ))}
        </ul>
      </section>
      <p className="text-base md:text-lg max-w-xs">{comment}</p>
    </li>
  );
};

export default TestimonialCard;
