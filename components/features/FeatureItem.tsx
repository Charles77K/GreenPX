import React from "react";

interface IFeatures {
  emoji: string;
  title: string;
  description: string;
}

const FeatureItem = ({ emoji, title, description }: IFeatures) => {
  return (
    <li className="flex-col-center gap-3 max-w-[15rem] 2xl:max-w-[24rem]">
      <p className="text-3xl xl:text-4xl 2xl:text-5xl drop-shadow-xl">
        {emoji}
      </p>
      <p className="font-extrabold text-center text-[15px] xl:text-2xl">
        {title}
      </p>
      <p className="text-xs text-center 2xl:text-base max-w-[15rem] text-brandGray">
        {description}
      </p>
    </li>
  );
};

export default FeatureItem;
