"use client";

import React from "react";
import { SIDE_BAR } from "./static";
import TermsOfService from "./TermsOfService";
import PrivacyPolicy from "./PrivacyPolicy";
import CookiePolicy from "./CookiePolicy";
import RegulatoryCompliance from "./RegulatoryCompliance";
import EnvironmentalPolicy from "./EnvironmentalPolicy";
import LegalDisclaimer from "./LegalDisclaimer";
import { cn } from "@/lib/utils";

// Type for document components
type DocumentComponent = React.ComponentType;

// Mapping of document types to their components
const DOCUMENT_COMPONENTS: Record<string, DocumentComponent> = {
  terms: TermsOfService,
  privacy_policy: PrivacyPolicy,
  cookie_policy: CookiePolicy,
  compliance: RegulatoryCompliance,
  environmental_policy: EnvironmentalPolicy,
  legal_disclaimer: LegalDisclaimer,
};

const LegalTabs = () => {
  const [currentDoc, setCurrentDoc] = React.useState<string>("terms");

  const renderPage = () => {
    const DocumentComponent = DOCUMENT_COMPONENTS[currentDoc];
    return DocumentComponent ? <DocumentComponent /> : null;
  };

  const handleClick = (doc: string) => {
    setCurrentDoc(doc);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-4 items-start gap-6">
        <aside
          className="col-span-1 border rounded-md border-gray-200 p-4"
          aria-label="Legal Documents Navigation"
        >
          <h2
            className="text-lg font-bold mb-5 text-black"
            id="legal-docs-heading"
          >
            Legal Documents
          </h2>
          <nav aria-labelledby="legal-docs-heading">
            <ul className="space-y-4">
              {SIDE_BAR.map(({ icon, label, href }) => (
                <li key={href}>
                  <button
                    onClick={() => handleClick(href)}
                    className={cn(
                      "w-full text-left text-xs p-2 flex font-semibold text-brandGray items-center gap-2 rounded transition-colors duration-200",
                      "focus:outline-none focus:ring-2 focus:ring-brandFadeGreen/30",
                      currentDoc === href
                        ? "bg-[#F0FDF4] text-brandGreen"
                        : "hover:bg-gray-100"
                    )}
                    aria-pressed={currentDoc === href}
                    aria-label={`View ${label}`}
                  >
                    <span aria-hidden="true">{icon}</span>
                    <span>{label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        <main
          className="col-span-1 md:col-span-3 bg-white rounded-md shadow-sm"
          aria-live="polite"
          aria-atomic="true"
        >
          {renderPage()}
        </main>
      </div>
    </div>
  );
};

export default LegalTabs;
