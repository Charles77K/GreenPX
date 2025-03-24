import React from "react";

import { CiMail } from "react-icons/ci";
import { LuPhone } from "react-icons/lu";
import { PiMapPinAreaBold } from "react-icons/pi";
import ContactForm from "@/components/contact/ContactForm";

const page = () => {
  return (
    <div className="bg-white min-h-screen flex-col-center px-4 pt-28">
      <section
        className={
          "flex flex-col md:flex-row responsive-container gap-5 py-24 items-start justify-center"
        }
      >
        <div className={"space-y-5"}>
          <h1
            className={
              "text-3xl md:text-4xl font-semibold 2xl:text-5xl text-black "
            }
          >
            Contact Us
          </h1>
          {/*contact information*/}
          <div
            className={
              "flex flex-col items-start rounded-2xl w-full max-w-4xl bg-[#F5F5F5] p-6 pr-24 gap-5"
            }
          >
            <section className="w-full">
              <p
                className={
                  "text-xs md:text-sm 2xl:text-base flex items-center gap-2 font-thin"
                }
              >
                <CiMail color="black" /> Email Us At
              </p>
              <p className={"font-bold text-xs md:text-sm 2xl:text-base"}>
                greenpxinfo@gmail.com
              </p>
            </section>
            <section>
              <p
                className={
                  "text-xs md:text-sm 2xl:text-base flex items-center gap-2 font-thin"
                }
              >
                <PiMapPinAreaBold color={"black"} />
                Our Location
              </p>
              <p className={"font-bold text-xs md:text-sm 2xl:text-base"}>
                {" "}
                23 Bedwell Street, Calabar, Cross River State
              </p>
            </section>
            <section>
              <p
                className={
                  "text-xs md:text-sm 2xl:text-base flex items-center gap-2 font-thin"
                }
              >
                <LuPhone color={"black"} /> Call Us At
              </p>
              <p className={"font-bold text-xs md:text-sm 2xl:text-base"}>
                0813 937 2222, 0706 505 1560, 0705 885 0322
              </p>
            </section>
          </div>
        </div>

        {/*  contact form*/}
        <ContactForm />
      </section>
    </div>
  );
};

export default page;
