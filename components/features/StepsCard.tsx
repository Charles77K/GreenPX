import React from "react";

interface IStepsCard {
  id: number;
  title: string;
  children: React.ReactNode;
}

const StepsCard: React.FC<IStepsCard> = ({ id, title, children }) => {
  return (
    <div className="flex flex-col items-start hover:skew-y-2 transition-all ease-in-out duration-300 text-white gap-5 rounded-3xl bg-black w-full md:max-w-[22.5rem] p-6">
      <h3 className="text-sm font-medium self-center w-fit px-4 py-2 rounded-full bg-transparent border border-brandGreen">
        Step {id}
      </h3>
      <h5 className="text-start text-lg md:text-xl font-bold">{title}</h5>
      <>{children}</>
    </div>
  );
};

export default StepsCard;
