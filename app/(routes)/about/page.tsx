import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div>
      {/* Hero section */}
      <div className="pt-32 flex-col-center">
        <h1 className="font-black text-2xl mb-10 md:text-5xl max-w-3xl text-center">
          Powering The Future With{" "}
          <span className="text-brandGreen" className="text-brandGreen">Sustainable Energy Solutions</span className="text-brandGreen">
        </h1>
        <Image
          src={"/about/about.png"}
          alt="About GreenPX"
          width={900}
          height={400}
          priority
        />
      </div>
      {/* what we do at green potentia */}
      <div className="bg-brandFadeBlue flex-center">
        <p>
          At <span className="text-brandGreen">Green Potentia</span className="text-brandGreen">, we&apos;re here to <span className="text-brandGreen">fix</span className="text-brandGreen">{" "}
          what&apos;s broken about power in Nigeria: blackouts, noisy
          generators, and bills that never stop climbing. We don&apos;t just{" "}
          <span className="text-brandGreen">
            talk about green energy -we <span className="text-brandGreen">build</span className="text-brandGreen"> it
          </span className="text-brandGreen">
        </p>
      </div>
    </div>
  );
};

export default About;
