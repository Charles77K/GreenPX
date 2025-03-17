import React from "react";

interface IFeatures {
  emoji: string;
  title: string;
  description: string;
}

const FeatureItem = ({ emoji, title, description }: IFeatures) => {
  return (
    <li className="flex-col-center gap-3 max-w-[15rem]">
      <p className="text-3xl drop-shadow-xl">{emoji}</p>
      <p className="font-black text-center text-[15px]">{title}</p>
      <p className="text-xs text-center text-brandGray">{description}</p>
    </li>
  );
};

export default FeatureItem;
