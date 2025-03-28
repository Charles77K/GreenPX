"use client";

import React, { useState } from "react";
import { FAQs } from "./static";
import { FaChevronDown } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Faqs = ({header}:{header?:string}) => {
  const [activeQuestion, setActiveQuestion] = useState<number | null>(null);

  const toggleQuestion = (id: number) => {
    setActiveQuestion(activeQuestion === id ? null : id);
  };

  return (
    <div className="flex flex-col items-center py-20 px-4 md:px-6">
        {header &&  (

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-4xl text-center md:text-6xl font-bold text-[#333] mb-12"
      >
          {header}
      </motion.h2>
        )}

      <ul className="flex flex-col gap-5 w-full md:max-w-6xl">
        {FAQs.map(({ id, question, answer }) => (
          <motion.li
            key={id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: id * 0.1 }}
            className={`border-b-[0.5px] border-transparent transition-all duration-300 ease-in-out pb-6 ${
              activeQuestion === id ? "border-[#333]" : ""
            }${activeQuestion !== id && "hover:border-[#333]"} `}
          >
            <div
              onClick={() => toggleQuestion(id)}
              className="flex items-start justify-between cursor-pointer"
            >
              <h4
                className={`text-base sm:text-xl md:text-2xl font-semibold text-[#000] ${
                  activeQuestion !== id && "hover:font-normal"
                } transition-colors duration-300`}
              >
                {question}
              </h4>
              <motion.div
                animate={{ rotate: activeQuestion === id ? 180 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="text-primary hover:text-primary-dark"
              >
                <FaChevronDown />
              </motion.div>
            </div>

            <AnimatePresence>
              {activeQuestion === id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <p className="mt-4 text-sm sm:text-base md:text-lg font-medium text-brandGray leading-relaxed">
                    {answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default Faqs;
