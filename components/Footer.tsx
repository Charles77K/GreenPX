"use client";

import React, { FormEvent } from "react";
import Divider from "./ui/Divider";
import { CiMail } from "react-icons/ci";
import { LuPhone } from "react-icons/lu";
import { PiMapPinAreaBold } from "react-icons/pi";
import Image from "next/image";
import { motion as m } from "framer-motion";
import Link from "next/link";
import { FOOTER_LINKS, SOCIAL_MEDIA_LINKS } from "./static";
import { ShowToast } from "@/lib/toast";
import Spinner from "./ui/Spinner";
import { cn } from "@/lib/utils";
import { usePostData } from "@/lib/hooks";

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
  const { reset, postData, isLoading } = usePostData<{
    email: string;
  }>();

  let err = "";
  const validate = () => {
    if (!email.trim()) {
      err = "Email is Required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      err = "Invalid email address";
    } else {
      err = "";
    }
    return err == "";
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) {
      ShowToast.error("Error", `${err}`);
      return;
    }
    const result = await postData("email", { email });

    if (!result.success) {
      ShowToast.error("Error", `${result.error || "Something went wrong"}`);
    } else {
      ShowToast.success("Success", "Subscribed Successfully");
      setEmail("");
    }
    reset();

    reset();
  };

  return (
    <footer className="bg-black py-16 px-6">
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
        <form
          className="flex flex-col md:flex-row gap-2 md:gap-4 w-full max-w-2xl"
          onSubmit={handleSubmit}
        >
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            className="p-3 bg-[#333] placeholder:text-[#BDBDBD] text-white placeholder:text-sm md:placeholder:text-base w-full rounded-xl border border-[#BDBDBD] text-sm focus:outline-none focus:ring-blue"
            placeholder="Enter your email address"
          />
          <button
            disabled={email.trim() === "" || isLoading}
            type="submit"
            className={cn(
              email.trim() === ""
                ? "bg-brandGreen/50 text-white/60"
                : "bg-brandGreen text-white",
              "px-8 py-3 font-bold w-full md:w-fit rounded-xl",
              isLoading && "opacity-70"
            )}
          >
            {isLoading ? <Spinner /> : "Submit"}
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
        className="flex flex-col md:flex-row gap-8 text-start max-w-6xl mx-auto justify-between"
      >
        {/* about */}
        <div className="space-y-2">
          <h2 className="text-brandFadeGreen font-medium text-sm">About</h2>
          <p className="text-[#fff] text-xs md:text-sm max-w-sm">
            We design, build, and maintain solar systems that actually work—for
            homes, businesses, and communities. No empty promises. No shortcuts.
            Just silent, affordable power that lets you live, work, and dream
            without limits.
          </p>
        </div>

        {/* address */}
        <div className="space-y-3">
          <h2 className="text-brandFadeGreen font-medium text-sm">Contact</h2>
          <ul className="text-[#fff] space-y-3 text-sm max-w-sm">
            <li className="flex items-center gap-2">
              <CiMail color="white" />
              info@greenpotentia.com
            </li>
            <li className="flex items-start gap-2">
              <LuPhone color="white" />
              <p className="">0813 937 2222, 0706 505 1560, 0705 885 0322</p>
            </li>
            <p className="flex items-start gap-2">
              <PiMapPinAreaBold size={15} />
              23 Bedwell Street, Calabar, Cross River State
            </p>
          </ul>
        </div>

        {/* quick links */}
        <div className="space-y-2">
          <h2 className="text-brandFadeGreen font-medium text-sm">Links</h2>
          <nav className="flex flex-col text-sm text-white items-start gap-3">
            {FOOTER_LINKS.map(({ label, href }) => (
              <Link key={label} href={href}>
                {label}
              </Link>
            ))}
          </nav>
        </div>

        {/* social media */}
        <div className="space-y-2">
          <h2 className="text-brandFadeGreen font-medium text-sm">Follow</h2>
          <nav className="flex flex-col text-sm text-white items-start gap-3">
            {SOCIAL_MEDIA_LINKS.map(({ icon, href }) => (
              <Link key={href} href={href} target="_blank">
                {icon}
              </Link>
            ))}
          </nav>
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
    </footer>
  );
};

export default Footer;
