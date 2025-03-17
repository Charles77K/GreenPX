import React from "react";

const ImageBackground = () => {
  return (
    <div
      className="min-h-[80vh] md:min-h-screen"
      style={{
        backgroundImage: "url(/features/features-image.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    />
  );
};

export default ImageBackground;
