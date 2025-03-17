import React from "react";
import { FEATURES_ITEMS } from "./static";
import FeatureItem from "./FeatureItem";

const KeyFeatures = () => {
  return (
    <div className="flex-col-center py-12 bg-brandFadeBlue px-4">
      <h2 className="text-5xl font-semibold">Features</h2>
      <ul className="mt-10 grid grid-cols-2 items-start gap-10 md:grid-cols-3">
        {FEATURES_ITEMS.map((item, idx) => (
          <FeatureItem key={idx} {...item} />
        ))}
      </ul>
    </div>
  );
};

export default KeyFeatures;
