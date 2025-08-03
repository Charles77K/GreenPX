import Image from "next/image";
import React from "react";

const ImageBackground = () => {
  return (
    <div className="min-h-[80vh] relative md:min-h-screen">
      <Image
        src="/features/features-image.webp"
        alt="Hero Background"
        fill
        className="object-cover"
        priority
      />
    </div>
  );
};

export default ImageBackground;
