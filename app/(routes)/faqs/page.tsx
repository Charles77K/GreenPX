import React from 'react';
import Link from "next/link";
import Faqs from "@/components/home/Faqs";

const FaqsPage = () => {
    return (
        <div className="min-h-screen">
            {/* Background Image */}
            <div className={'relative min-h-[80vh] flex-col-center'}>
            {/* Overlay */}
            <div className="absolute inset-0 bg-brandFadeBlue/60" />
            {/* Content */}
            <header className="relative text-black text-center z-10 p-6">
                <h1 className="text-black font-extrabold text-3xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl">FAQs</h1>
                <p className={"mt-4 text-brandGray"}>Got Questions? We&apos;ve Got Answers </p>
                <p className={"text-brandGray"}>You can as well <Link href={'/contact'}><span className={'underline text-brandGreen font-bold text-base'}>Contact Us</span> </Link> </p>
            </header>
            </div>
            <div>
                <Faqs/>
            </div>
        </div>
    );
};
export default FaqsPage;
