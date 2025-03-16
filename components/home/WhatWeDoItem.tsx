import React from "react";

const WhatWeDoItem = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <section className="space-y-1">
      <div>
        <h4 className="text-xl md:text-3xl font-bold">{title}</h4>
      </div>
      <p className="max-w-xl font-normal text-base md:text-lg text-brandGray">
        {description}
      </p>
    </section>
  );
};

export default WhatWeDoItem;
