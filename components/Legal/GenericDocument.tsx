"use client";

import React from "react";
import Divider from "../ui/Divider";
import { Calendar, Clock } from "lucide-react";
import { useReactToPrint } from "react-to-print";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

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
  const componentRef = React.useRef<HTMLDivElement>(null);

  const handlePrint = useReactToPrint({
    documentTitle: `${header}_Green_Potentia`,
    contentRef: componentRef,
  });

  const onPrintClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (handlePrint) {
      handlePrint();
    }
  };

  // PDF download functionality
  const handleDownloadPDF = async () => {
    const input = componentRef.current;
    if (!input) return;

    try {
      // Ensure the full document is captured
      const canvas = await html2canvas(input, {
        scale: 3, // Higher scale for better quality
        useCORS: true, // Enable cross-origin images
        logging: false,
        scrollX: 0,
        scrollY: 0,
        windowWidth: input.scrollWidth, // Capture full width
        windowHeight: input.scrollHeight, // Capture full height
      });

      const imgData = canvas.toDataURL("image/jpeg", 0.7); // Compress to reduce size

      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a5",
      });

      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

      if (pdfHeight > pdf.internal.pageSize.getHeight()) {
        // If the captured image is taller than one page, we split it
        let yPosition = 0;
        while (yPosition < canvas.height) {
          pdf.addImage(
            imgData,
            "JPEG",
            0,
            -yPosition * (pdfWidth / canvas.width), // Move up for each new page
            pdfWidth,
            (canvas.height * pdfWidth) / canvas.width
          );

          yPosition +=
            pdf.internal.pageSize.getHeight() * (canvas.width / pdfWidth);
          if (yPosition < canvas.height) pdf.addPage();
        }
      } else {
        // If it fits on one page
        pdf.addImage(imgData, "JPEG", 0, 0, pdfWidth, pdfHeight);
      }

      pdf.save(`${header}_${new Date().toISOString().split("T")[0]}.pdf`);
    } catch (error) {
      console.error("PDF generation error:", error);
      alert("Failed to generate PDF. Please try again.");
    }
  };

  return (
    <section
      ref={componentRef}
      className="border border-brandGray/20 rounded-lg p-6"
    >
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
        <button
          onClick={handleDownloadPDF}
          className="px-4 py-2 text-xs text-brandGreen border border-brandGreen hover:bg-brandGreen hover:text-white transition-colors duration-300 ease-in-out rounded-md"
        >
          Download PDF
        </button>
        <button
          onClick={onPrintClick}
          className="px-4 py-2 text-xs text-brandGreen border border-brandGreen hover:bg-brandGreen hover:text-white transition-colors duration-300 ease-in-out rounded-md"
        >
          Print Document
        </button>
      </div>
    </section>
  );
};

export default GenericDocument;
