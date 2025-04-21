import React from "react";
import Link from "next/link";
import Faqs from "@/components/home/Faqs";
import { Metadata } from "next";
import { metadataConfig } from "@/app/metadata";
import { FAQS } from "@/components/home/static";
import Image from "next/image";

export const metadata: Metadata = metadataConfig.faqs;

const FaqsPage = () => {
  return (
    <div className="min-h-screen">
      {/* Background Image */}
      <div className={"relative flex-col-center bg-brandFadeBlue pt-20"}>
        <Image
          src={"/faqs.png"}
          alt="Legal"
          width={500}
          height={500}
          className="absolute"
        />
        {/* Content */}
        <header className="relative text-black text-center z-10 p-6 py-36">
          <h1 className="text-black font-extrabold text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl">
            FAQs
          </h1>
          <p className={"mt-4 text-brandGray"}>
            Got Questions? We&apos;ve Got Answers{" "}
          </p>
          <p className={"text-brandGray"}>
            You can as well{" "}
            <Link href={"/contact"}>
              <span className={"underline text-brandGreen font-bold text-base"}>
                Contact Us
              </span>{" "}
            </Link>{" "}
          </p>
        </header>
      </div>
      <div>
        <Faqs faqs={FAQS} />
      </div>
    </div>
  );
};
export default FaqsPage;
