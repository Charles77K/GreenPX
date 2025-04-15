"use client";

import React from "react";
import Link from "next/link";
import { motion as m } from "motion/react";
import { NAV_LINKS } from "./Navbar";

const MobileNavbar = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  if (!isOpen) {
    return null; // Return null instead of false
  }
  return (
    <m.div
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ ease: "easeInOut", duration: 0.3 }}
      className="bg-white p-4 w-full absolute left-0 z-40 shadow-md"
    >
      <nav className="w-full flex flex-col gap-5">
        <div className="bg-brandFadeBlue rounded-2xl p-3">
          {NAV_LINKS.map(({ label, href }) => (
            <Link
              onClick={() => setIsOpen(false)}
              href={href}
              key={label}
              className="flex flex-col text-sm items-start text-brandGreen gap-4 px-4 py-3 text-md font-extrabold hover:text-brandGreen"
            >
              {label}
            </Link>
          ))}
        </div>
        <div className="w-full bg-brandGreen text-center p-4 rounded-2xl">
          <Link
            onClick={() => setIsOpen(false)}
            href="/contact"
            className="text-white text-sm w-full text-md font-extrabold"
          >
            Contact us
          </Link>
        </div>
      </nav>
    </m.div>
  );
};

export default MobileNavbar;
