"use client";

import React from "react";
import Divider from "./ui/Divider";
import { CiMail } from "react-icons/ci";
import { LuPhone } from "react-icons/lu";
import Image from "next/image";

import { motion as m } from "framer-motion";

const motionVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeInOut", delay },
  }),
};

const Footer = () => {
  const [email, setEmail] = React.useState<string>("");

  return (
    <div className="bg-black py-16 px-4 sm:px-8">
      {/* top section */}
      <m.section
        variants={motionVariants}
        initial="hidden"
        whileInView="visible"
        custom={0.2}
        className="flex-col-center text-center gap-2"
      >
        <m.h4 className="text-white font-bold text-lg md:text-2xl">
          Join 1,000+ Nigerians Getting Power Tips, Discounts, and Solar Hacks
        </m.h4>
        <p className="text-[#BDBDBD] text-sm md:text-lg font-medium">
          Get free updates and exclusive offers. We won&apos;t spam you🙂
        </p>
        <form className="flex flex-col md:flex-row gap-2 md:gap-4 w-full md:w-1/2">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="p-3 bg-[#333] placeholder:text-[#BDBDBD] text-white placeholder:text-sm md:placeholder:text-base w-full rounded-xl border border-[#BDBDBD] text-sm focus:outline-none focus:ring-blue"
            placeholder="Enter your email address"
          />
          <button
            disabled={email.trim() === ""}
            className={`${
              email.trim() === ""
                ? "bg-brandGreen/50 text-white/60"
                : "bg-brandGreen text-white"
            } px-8 py-3 font-bold w-full md:w-fit rounded-xl`}
          >
            Submit
          </button>
        </form>
      </m.section>

      <Divider className="h-[0.5px] my-10" />

      {/* mid section */}
      <m.section
        variants={motionVariants}
        initial="hidden"
        whileInView="visible"
        custom={0.3}
        className="flex flex-col md:flex-row gap-4 md:gap-10 text-start justify-center"
      >
        {/* about */}
        <div className="space-y-2">
          <h2 className="text-brandFadeGreen font-medium text-base">About</h2>
          <p className="text-[#fff] text-xs md:text-sm max-w-xs">
            We design, build, and maintain solar systems that actually work—for
            homes, businesses, and communities. No empty promises. No shortcuts.
            Just silent, affordable power that lets you live, work, and dream
            without limits.
          </p>
        </div>

        {/* contact */}
        <div className="space-y-2">
          <h2 className="text-brandFadeGreen font-medium text-base">Contact</h2>
          <ul className="text-[#fff] space-y-2 text-xs md:text-sm max-w-sm">
            <li className="flex items-center gap-2">
              <CiMail color="white" />
              info@greenpotentia.com
            </li>
            <li className="flex items-start gap-2">
              <LuPhone color="white" />
              <p className="max-w-[14rem]">
                0813 937 2222, 0706 505 1560, 0705 885 0322
              </p>
            </li>
          </ul>
        </div>

        {/* address */}
        <div className="space-y-2">
          <h2 className="text-brandFadeGreen font-medium text-base">Address</h2>
          <p className="text-[#fff] text-xs md:text-sm max-w-sm">
            23 Bedwell Street, Calabar,
            <br /> Cross River State
          </p>
        </div>
      </m.section>

      <Divider className="h-[0.5px] my-10" />

      {/* bottom section */}
      <m.section
        variants={motionVariants}
        initial="hidden"
        whileInView="visible"
        custom={0.4}
        className="flex flex-col md:flex-row justify-between items-center"
      >
        <div className="hidden md:block text-black w-[100px]"></div>

        <div>
          <p className="text-brandGray text-xs mb-2">
            Do you Have 24 Hours of Light? Let&apos;s Make it Happen.
          </p>
          <p className="text-[#fff] text-sm font-medium md:text-base">
            &copy; 2022 Green Potentia Limited, {new Date().getFullYear()}
          </p>
        </div>

        <Divider className="h-[0.5px] my-4 block md:hidden" />

        {/* nigeria logo */}
        <m.div className="flex text-white items-center gap-2">
          <p className="font-medium text-sm md:text-base">
            Proudly <br /> Nigerian
          </p>
          <Image
            src={"/home/nigeria-logo.png"}
            alt="Nigeria logo"
            width={60}
            height={60}
          />
        </m.div>
      </m.section>
    </div>
  );
};

export default Footer;
