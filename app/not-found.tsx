"use client";
import React from "react";
import { useRouter } from "next/navigation";

const NotFound = () => {
  const router = useRouter();
  return (
    <div className="bg-black min-h-screen text-white">
      <div className="flex-col-center h-screen">
        {/* header with  */}
        <header className="text-center">
          <h1 className="font-bold text-5xl md:text-9xl">404</h1>
          <p className="font-bold text-sm md:text-base 2xl:text-lg">
            OOps! You&apos;ve Hit a Solar Eclipse <br /> This page is off the
            grid... for now
          </p>
          <p className="font-bold text-sm mt-5">Here&apos;s what you can do:</p>
        </header>

        {/* list options */}
        <ul className="list-disc flex-col-center gap-2 text-center mt-8 text-xs md:text-sm 2xl:text-base">
          <li>Double-check your URL</li>
          <li>Navigate back using the menu above</li>
          <li>
            Contact Our Power Squad if darkness persists:
            <br />
            <a className="underline" href="mailto:support@greenpotentia.com">
              support@greenpotentia.com
            </a>
          </li>
        </ul>

        {/* cta */}
        <div onClick={() => router.back()} className="mt-9">
          <button className="bg-white px-8 py-5 hover:bg-brandGreen cursor-pointer hover:text-white transition-colors font-medium text-[10px] text-center text-black rounded-lg">
            Take Me Back To Light
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
