import React from "react";
import Divider from "../ui/Divider";
import { Calendar, Clock } from "lucide-react";

export interface IGenericDocument {
  header: string;
  date_updated: string;
  current_date: string;
  documentData: {
    id: number;
    title: string;
    description: string;
  }[];
}

const GenericDocument: React.FC<IGenericDocument> = ({
  header,
  date_updated,
  current_date,
  documentData,
}) => {
  return (
    <section className="border border-brandGray/20 rounded-lg p-6">
      <header>
        <h2 className="text-xl font-bold text-black">{header}</h2>
        <div className="flex items-center gap-5 mt-5">
          <p className="text-xs flex items-center text-brandGray">
            <span>
              <Calendar className="size-4 text-brandGreen mr-2" />
            </span>
            Last updated: {date_updated}
          </p>
          <p className="text-xs flex items-center text-brandGray">
            <span>
              <Clock className="size-4 text-brandGreen mr-2" />
            </span>
            Effective: {current_date}
          </p>
        </div>
      </header>
      <Divider className="my-6 bg-brandGray/30" />
      {/* information on the particular document  */}
      <ul className="flex flex-col items-start gap-5">
        {documentData.map(({ id, title, description }) => (
          <li key={id}>
            <h4 className="text-base font-bold text-gray-800">
              {id}. {title}
            </h4>
            <p className="text-xs max-w-3xl leading-6 mt-1.5 text-brandGray">
              {description}
            </p>
          </li>
        ))}
      </ul>
      <Divider className="my-6 bg-brandGray/30" />

      {/* buttons */}
      <div className="flex items-center justify-between">
        <button className="px-4 py-2 text-xs text-brandGreen border border-brandGreen hover:bg-brandGreen hover:text-white transition-colors duration-300 ease-in-out rounded-md">
          Download PDF
        </button>
        <button className="px-4 py-2 text-xs text-brandGreen border border-brandGreen hover:bg-brandGreen hover:text-white transition-colors duration-300 ease-in-out rounded-md">
          Print Document
        </button>
      </div>
    </section>
  );
};

export default GenericDocument;
