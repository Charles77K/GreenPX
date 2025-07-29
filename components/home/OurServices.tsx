import React from "react";
import Line from "../ui/Line";
import ServiceItem from "./ServiceItem";
import WideButton from "../ui/WideButton";
import Link from "next/link";

const OurServices = () => {
  return (
    <div className="px-4 py-20 sm:px-6 md:px-8 xl:px-28 bg-white">
      <div className="container mx-auto">
        {/* header */}
        <section className="flex flex-col items-start gap-4 mb-3 max-w-[35rem]">
          <Line color="bg-black w-9" />
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-semibold">
            Our Comprehensive Services
          </h1>
          <p className="text-brandGray text-sm mb-3 max-w-md md:text-base">
            Explore our wide range of services designed to meet your renewable
            energy needs. We provide innovative solutions backed by expertise
            and experience
          </p>
          <Link href={"/about"} className="flex md:hidden -mt-2">
            <WideButton variant="green" title="About Us" className="py-4" />
          </Link>
        </section>

        {/* services section */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* left column */}
          <div className="flex-1 flex flex-col gap-8 md:mt-16">
            <ServiceItem
              image="/home/service-1.png"
              title="Solar Installation"
              description="We offer professional solar installation services, ensuring seamless
             integration of solar panels, inverters, and battery systems. We ensure optimal
              setup and performance."
            />
            <ServiceItem
              image="/home/service-2.png"
              title="Tutoring (Engineering/Electronics)"
              description="Our tutoring services are designed to empower the next generation of 
            engineers and electronics enthusiasts. We provide hands-on training and 
            theoretical knowledge in fields like solar energy, electronics, and system 
            design, tailored to both beginners and advanced learners"
            />
          </div>
          {/* right column */}
          <div className="flex-1 flex flex-col gap-8 md:-mt-12">
            <ServiceItem
              image="/home/power-generator.png"
              title="Solar Generator Manufacturing"
              description="We design and produce cutting-edge solar generators that provide 24/7 
            power. Our units are crafted to deliver high performance, durability, and 
            ease of use for homes, businesses, and remote locations"
            />
            <ServiceItem
              image="/home/service-3.png"
              title="Maintenance and Support Services"
              description="To maximize the lifespan and efficiency of solar systems, we provide 
            comprehensive maintenance services. Our experts handle regular 
            inspections, cleaning, and necessary repairs to keep your solar solutions 
            running at peak performance"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
